/* Documentation page behaviour.
 *
 * Everything here is an enhancement. The page tree, the "on this page" list,
 * the pager and the tables all render server side and work with this file
 * absent or blocked.
 *
 * Six jobs:
 *   1. the sidebar drawer on narrow screens
 *   2. the sidebar search box, with a filter as its fallback
 *   3. scroll-spy on the "on this page" rail
 *   4. wrapping tables so wide ones scroll inside themselves
 *   5. copy buttons and hover anchors
 *   6. sizing the sticky columns to the space they actually have
 */
(function () {
  'use strict';

  var root = document.querySelector('.js-docs');
  if (!root) return;

  /* ---------------------------------------------------------------------
     1. Sidebar drawer
     --------------------------------------------------------------------- */

  function wireDrawer() {
    var toggle = root.querySelector('.js-docs__menu-toggle');
    var sidebar = root.querySelector('.js-docs__sidebar');
    var backdrop = root.querySelector('.js-docs__backdrop');
    if (!toggle || !sidebar || !backdrop) return;

    var lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      root.classList.add('is-menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      backdrop.hidden = false;
      document.body.style.overflow = 'hidden';
      var first = sidebar.querySelector('input, a');
      if (first) first.focus();
    }

    function close() {
      root.classList.remove('is-menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      backdrop.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    function isOpen() {
      return root.classList.contains('is-menu-open');
    }

    toggle.addEventListener('click', function () {
      isOpen() ? close() : open();
    });
    backdrop.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (!isOpen()) return;

      if (e.key === 'Escape') {
        close();
        return;
      }

      /* Keep focus inside the drawer while it covers the page. */
      if (e.key !== 'Tab') return;
      var focusable = sidebar.querySelectorAll('input, a[href], button');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    /* Following a link inside the drawer navigates away; close first so the
       drawer is not left open behind the new page on a bfcache restore. */
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a') && isOpen()) close();
    });
  }

  /* ---------------------------------------------------------------------
     2. Sidebar search box

     One box, two behaviours, chosen by what has finished loading.

     Typing narrows the rendered tree by page title straight away: no index,
     no network, correct the moment the page renders. On first focus the
     search index is fetched in the background, and once it arrives the same
     box searches every heading in the documentation, body text included.

     Written this way round so the box is never dead. If the index is slow,
     blocked or missing, what is left is a working filter rather than a
     spinner, and nothing has to be said about it.
     --------------------------------------------------------------------- */

  var MAX_RESULTS = 30;
  var SNIPPET_CHARS = 150;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;',
               '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Narrows the rendered tree by page title. No index and no network, so it
     is correct the moment the page loads, and it is what the box does until
     the real search has finished loading behind it. */
  function makeFilter(nav) {
    var empty = nav.querySelector('.js-docs-nav__empty');
    var items = Array.prototype.slice.call(
      nav.querySelectorAll('.js-docs-nav__item')
    );
    var groups = Array.prototype.slice.call(
      nav.querySelectorAll('.js-docs-nav__group')
    );
    var sections = Array.prototype.slice.call(
      nav.querySelectorAll('.js-docs-nav__section')
    );

    return function apply(query) {
      var q = (query || '').trim().toLowerCase();
      var matches = 0;

      items.forEach(function (item) {
        var hit = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
        item.hidden = !hit;
        if (hit) matches++;
      });

      /* Hide a group label whose pages have all been filtered out, and the
         same for a whole section, so no empty headings are left behind. */
      groups.forEach(function (label) {
        var list = label.nextElementSibling;
        if (!list) return;
        var visible = list.querySelectorAll('.js-docs-nav__item:not([hidden])');
        label.hidden = q && visible.length === 0;
        list.hidden = q && visible.length === 0;
      });

      sections.forEach(function (section) {
        var visible = section.querySelectorAll('.js-docs-nav__item:not([hidden])');
        section.hidden = q && visible.length === 0;
      });

      if (empty) empty.hidden = !q || matches > 0;
    };
  }

  /* ---------------------------------------------------------------------
     Full text search over the docs

     The index is one entry per heading rather than one per page. A page here
     runs to thousands of words across a dozen subjects, so a page-level hit
     answers "somewhere in these 6,000 words" and leaves the reader to find
     the rest themselves. Per heading, the result names the passage and links
     into it.

     It is a separate index from the site-wide one on /search/ on purpose.
     That one carries a thousand game pages, which bury 45 documentation
     pages by sheer weight no matter how the ranking is tuned.
     --------------------------------------------------------------------- */

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');
      el.src = src;
      el.onload = resolve;
      el.onerror = function () { reject(new Error('failed to load ' + src)); };
      document.head.appendChild(el);
    });
  }

  function buildIndex(entries) {
    return window.lunr(function () {
      this.ref('i');
      /* A heading that names the thing is a better answer than a paragraph
         that mentions it, and the page title is the next best signal. */
      this.field('t', { boost: 12 });
      this.field('p', { boost: 4 });
      this.field('b');

      var builder = this;
      entries.forEach(function (entry, i) {
        builder.add({
          i: String(i),
          t: entry.t || '',
          p: entry.p || '',
          b: entry.b || ''
        });
      });
    });
  }

  function runQuery(idx, terms, trailing) {
    return idx.query(function (q) {
      terms.forEach(function (term, n) {
        q.term(term, { boost: 10 });
        /* Only the term being typed gets a wildcard, so results appear while
           you are still mid-word without every earlier term going fuzzy. */
        if (trailing && n === terms.length - 1) {
          q.term(term, {
            usePipeline: false,
            wildcard: window.lunr.Query.wildcard.TRAILING,
            boost: 4
          });
        }
        q.term(term, { usePipeline: false, editDistance: 1, boost: 1 });
      });
    });
  }

  /* Mark the searched-for words wherever they appear in an already escaped
     string. Terms of one character are skipped: they match inside almost
     every word and the result is a line of confetti. */
  function highlight(escaped, terms) {
    var html = escaped;
    terms.forEach(function (term) {
      if (term.length < 2) return;
      var safe = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp('(' + safe + ')', 'gi'), '<mark>$1</mark>');
    });
    return html;
  }

  /* A window of the passage around the first term that matched, rather than
     its opening words, which are frequently the same boilerplate on every
     page in a section. */
  function snippet(body, terms) {
    if (!body) return '';

    var lower = body.toLowerCase();
    var at = -1;
    terms.forEach(function (term) {
      if (!term) return;
      var found = lower.indexOf(term);
      if (found !== -1 && (at === -1 || found < at)) at = found;
    });

    var start = 0;
    if (at > 60) {
      /* Back up to a word boundary so the quote does not open mid-word. */
      start = body.lastIndexOf(' ', at - 50);
      if (start === -1) start = 0;
    }

    var text = body.slice(start, start + SNIPPET_CHARS);
    if (start > 0) text = '…' + text.replace(/^\s+/, '');
    if (start + SNIPPET_CHARS < body.length) text = text.replace(/\s+\S*$/, '') + '…';

    return highlight(escapeHtml(text), terms);
  }

  function wireSearchBox() {
    var nav = root.querySelector('.js-docs-nav');
    var input = root.querySelector('.js-docs-nav__filter');
    if (!nav || !input) return;

    var tree = nav.querySelector('.js-docs-nav__tree');
    var results = nav.querySelector('.js-docs-nav__results');
    var empty = nav.querySelector('.js-docs-nav__empty');
    var filter = makeFilter(nav);
    if (!tree || !results) {
      /* Markup predates the search; the filter alone still works. */
      input.addEventListener('input', function () { filter(input.value); });
      return;
    }

    var indexUrl = root.getAttribute('data-search-index');
    var lunrUrl = root.getAttribute('data-search-lunr');
    var entries = null;
    var idx = null;
    var loading = false;
    var active = -1;

    function load() {
      if (loading || idx || !indexUrl || !lunrUrl) return;
      loading = true;

      var scripts = window.lunr ? Promise.resolve() : loadScript(lunrUrl);
      Promise.all([scripts, fetch(indexUrl).then(function (r) {
        if (!r.ok) throw new Error('index ' + r.status);
        return r.json();
      })]).then(function (loaded) {
        entries = loaded[1];
        idx = buildIndex(entries);
        /* Something may already have been typed while this was in flight. */
        if (input.value.trim()) update();
      }).catch(function () {
        /* Leaves the filter in charge, which is a working search box with a
           narrower reach rather than a broken one. Not worth a message. */
        loading = false;
      });
    }

    function showTree() {
      results.hidden = true;
      results.innerHTML = '';
      tree.hidden = false;
      input.setAttribute('aria-expanded', 'false');
      active = -1;
    }

    function render(hits, terms) {
      if (!hits.length) {
        results.innerHTML = '';
        results.hidden = true;
        tree.hidden = true;
        if (empty) empty.hidden = false;
        input.setAttribute('aria-expanded', 'false');
        return;
      }

      if (empty) empty.hidden = true;
      tree.hidden = true;
      results.hidden = false;
      input.setAttribute('aria-expanded', 'true');

      results.innerHTML = hits.map(function (hit, n) {
        var e = entries[hit.ref];
        /* For a subsection the page it came from is what tells you which of
           six File Manager pages you are looking at. For a whole page, where
           it sits in the manual is the more useful line.

           Unless they are the same words: a heading often repeats its page's
           title, and "Proton settings" over "Proton settings" tells nobody
           anything. Fall back to the place in the manual. */
        var crumb = (e.p && e.p !== e.t)
          ? e.p
          : [e.s, e.g].filter(Boolean).join(' · ');
        return '<a class="js-docs-nav__result" role="option" aria-selected="false"' +
               ' id="docs-result-' + n + '" href="' + escapeHtml(e.u) + '">' +
               '<span class="js-docs-nav__result-title">' +
                 highlight(escapeHtml(e.t), terms) + '</span>' +
               (crumb ? '<span class="js-docs-nav__result-crumb">' +
                        escapeHtml(crumb) + '</span>' : '') +
               '<span class="js-docs-nav__result-snippet">' +
                 snippet(e.b, terms) + '</span>' +
               '</a>';
      }).join('');
      active = -1;
    }

    function update() {
      var raw = input.value.trim();

      if (!raw) {
        filter('');
        showTree();
        return;
      }

      if (!idx) {
        /* Still loading, or it failed. Narrow the tree instead. */
        showTree();
        filter(raw);
        return;
      }

      var terms = raw.toLowerCase().split(/\s+/).filter(Boolean);
      /* A trailing space means the last word is finished, so drop the
         wildcard and stop matching everything that starts with it. */
      var hits = runQuery(idx, terms, !/\s$/.test(input.value));
      render(hits.slice(0, MAX_RESULTS), terms);
    }

    function move(step) {
      var options = results.querySelectorAll('.js-docs-nav__result');
      if (!options.length) return;

      if (active >= 0 && options[active]) {
        options[active].classList.remove('is-active');
        options[active].setAttribute('aria-selected', 'false');
      }
      active += step;
      if (active < 0) active = options.length - 1;
      if (active >= options.length) active = 0;

      options[active].classList.add('is-active');
      options[active].setAttribute('aria-selected', 'true');
      options[active].scrollIntoView({ block: 'nearest' });
      input.setAttribute('aria-activedescendant', options[active].id);
    }

    var queued = null;
    input.addEventListener('input', function () {
      /* Typing arms the load as well as focusing does. Focus alone is one
         event away from never happening: text restored on a back navigation,
         a value set by the browser, a field reached without the window itself
         being focused. load() is guarded, so calling it twice costs nothing. */
      load();
      window.clearTimeout(queued);
      /* Short enough not to feel laggy, long enough that a fast typist runs
         one query rather than one per letter. */
      queued = window.setTimeout(update, 90);
    });

    input.addEventListener('focus', load);

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        input.value = '';
        filter('');
        showTree();
        return;
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); return; }
      if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); return; }
      if (e.key === 'Enter') {
        var options = results.querySelectorAll('.js-docs-nav__result');
        if (active >= 0 && options[active]) {
          e.preventDefault();
          options[active].click();
        } else if (options.length) {
          e.preventDefault();
          options[0].click();
        }
      }
    });
  }

  /* ---------------------------------------------------------------------
     3. Scroll-spy

     Marks the heading you are currently under. IntersectionObserver rather
     than a scroll handler, so it costs nothing while you read.
     --------------------------------------------------------------------- */

  function wireScrollSpy() {
    var rail = root.querySelector('.js-docs__rail .js-docs-toc');
    if (!rail || !('IntersectionObserver' in window)) return;

    var links = Array.prototype.slice.call(rail.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var byId = {};
    var headings = [];

    links.forEach(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      var heading = document.getElementById(id);
      if (!heading) return;
      byId[id] = link;
      headings.push(heading);
    });
    if (!headings.length) return;

    var visible = {};

    function highlight() {
      var current = null;
      for (var i = 0; i < headings.length; i++) {
        if (visible[headings[i].id]) {
          current = headings[i].id;
          break;
        }
      }
      /* Nothing intersecting means we are between headings; keep the last one
         above the viewport marked rather than clearing the highlight. */
      if (!current) {
        for (var j = headings.length - 1; j >= 0; j--) {
          if (headings[j].getBoundingClientRect().top < 120) {
            current = headings[j].id;
            break;
          }
        }
      }
      links.forEach(function (link) {
        link.classList.remove('is-active');
      });
      if (current && byId[current]) byId[current].classList.add('is-active');
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });
        highlight();
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    headings.forEach(function (h) {
      observer.observe(h);
    });
    highlight();
  }

  /* ---------------------------------------------------------------------
     4. Table scroll wrappers

     kramdown emits a bare <table>, so there is nothing to hang overflow on.
     Rows in the settings reference run to 346 characters.
     --------------------------------------------------------------------- */

  function wireTables() {
    var content = root.querySelector('.js-docs__content');
    if (!content) return;

    Array.prototype.forEach.call(content.querySelectorAll('table'), function (table) {
      if (table.parentNode.classList.contains('js-docs-table-scroll')) return;

      var wrap = document.createElement('div');
      wrap.className = 'js-docs-table-scroll';
      wrap.setAttribute('tabindex', '0');
      wrap.setAttribute('role', 'region');
      wrap.setAttribute('aria-label', 'Table, scrollable');
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);

      function markScrollable() {
        wrap.classList.toggle(
          'is-scrollable',
          wrap.scrollWidth > wrap.clientWidth + 1 &&
            wrap.scrollLeft + wrap.clientWidth < wrap.scrollWidth - 1
        );
      }

      markScrollable();
      wrap.addEventListener('scroll', markScrollable);
      window.addEventListener('resize', markScrollable);
    });
  }

  /* ---------------------------------------------------------------------
     5. Copy buttons and heading anchors
     --------------------------------------------------------------------- */

  function wireCodeCopy() {
    var content = root.querySelector('.js-docs__content');
    if (!content) return;

    Array.prototype.forEach.call(content.querySelectorAll('pre'), function (pre) {
      if (pre.parentNode.classList.contains('js-docs-code')) return;

      var wrap = document.createElement('div');
      wrap.className = 'js-docs-code';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'js-docs-code__copy';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      wrap.appendChild(button);

      button.addEventListener('click', function () {
        var text = pre.innerText;
        var done = function (ok) {
          button.textContent = ok ? 'Copied' : 'Press Ctrl+C';
          setTimeout(function () {
            button.textContent = 'Copy';
          }, 1600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () { done(true); },
            function () { done(false); }
          );
        } else {
          done(false);
        }
      });
    });
  }

  function wireHeadingAnchors() {
    var content = root.querySelector('.js-docs__content');
    if (!content) return;

    Array.prototype.forEach.call(
      content.querySelectorAll('h2[id], h3[id], h4[id]'),
      function (heading) {
        var link = document.createElement('a');
        link.className = 'js-docs-anchor';
        link.href = '#' + heading.id;
        link.textContent = '#';
        link.setAttribute('aria-label', 'Link to this section');
        heading.appendChild(link);
      }
    );
  }

  /* ---------------------------------------------------------------------
     6. Sticky column heights

     The page tree and the rail are sticky at --docs-header-offset, and the
     stylesheet caps them at `100vh - that offset - 2rem`. That figure is
     right only once they have pinned. Before then they sit lower than the
     offset, because the masthead, the promo bar and the shell's own padding
     are still above them, so they overhang the bottom of the window by
     exactly the difference: 93px at 1440x900.

     The cost is not cosmetic. At the top of a docs page the last few entries
     of the tree sit below the fold, and the column's own scrollbar bottoms
     out before it reaches them, so nothing you do inside the column brings
     them into view. On a tall window the tree fits and there is no scrollbar
     at all, and the last entry is still cut off. Either way you have to
     scroll the article to read the navigation, which is backwards.

     So measure. A column's top edge does not depend on its own height (both
     are top-anchored and align-self: start), which is what makes reading the
     rect here safe: nothing we set feeds back into what we just measured.
     --------------------------------------------------------------------- */

  function wireStickyColumns() {
    var columns = [
      root.querySelector('.js-docs__sidebar'),
      root.querySelector('.js-docs__rail')
    ].filter(Boolean);
    if (!columns.length) return;

    /* Matches the 2rem the stylesheet leaves under a pinned column. */
    var GAP = 32;

    /* Below this the sidebar is a fixed-position drawer and the rail is not
       rendered, so neither wants a measured height. Same value as
       $docs-bp-drawer in _sass/docs.scss. */
    var wide = window.matchMedia('(min-width: 1024px)');

    function headerOffset() {
      var raw = getComputedStyle(root)
        .getPropertyValue('--docs-header-offset');
      return parseFloat(raw) || 0;
    }

    function size() {
      if (!wide.matches) {
        columns.forEach(function (col) {
          col.style.maxHeight = '';
        });
        return;
      }

      var min = headerOffset();

      columns.forEach(function (col) {
        /* Once the column unpins at the far end of its container the top edge
           goes negative, which would hand it a height taller than the window.
           Clamp at the pinned offset, which is as high as it ever gets. */
        var top = Math.max(min, col.getBoundingClientRect().top);
        var height = Math.max(0, window.innerHeight - top - GAP);
        /* Rounded down: a fractional cap can leave a sliver of a row showing
           below the fold, and it makes the value churn on every frame. */
        var next = Math.floor(height) + 'px';

        /* Only write on a change: this runs on every scroll frame. */
        if (col.style.maxHeight !== next) col.style.maxHeight = next;
      });
    }

    var queued = false;
    function schedule() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        size();
      });
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    if (wide.addEventListener) wide.addEventListener('change', schedule);
    size();
  }

  wireDrawer();
  wireSearchBox();
  wireScrollSpy();
  wireTables();
  wireCodeCopy();
  wireHeadingAnchors();
  wireStickyColumns();
})();
