/* Documentation page behaviour.
 *
 * Everything here is an enhancement. The page tree, the "on this page" list,
 * the pager and the tables all render server side and work with this file
 * absent or blocked.
 *
 * Five jobs:
 *   1. the sidebar drawer on narrow screens
 *   2. the sidebar filter box
 *   3. scroll-spy on the "on this page" rail
 *   4. wrapping tables so wide ones scroll inside themselves
 *   5. copy buttons and hover anchors
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
     2. Sidebar filter

     Filters the rendered list rather than an index, so it needs no data and
     is correct the moment the page loads.
     --------------------------------------------------------------------- */

  function wireFilter() {
    var input = root.querySelector('.js-docs-nav__filter');
    var nav = root.querySelector('.js-docs-nav');
    if (!input || !nav) return;

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

    function apply() {
      var q = input.value.trim().toLowerCase();
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
    }

    input.addEventListener('input', apply);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        input.value = '';
        apply();
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

  wireDrawer();
  wireFilter();
  wireScrollSpy();
  wireTables();
  wireCodeCopy();
  wireHeadingAnchors();
})();
