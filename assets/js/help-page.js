/**
 * Shared interactivity for the four help sub-pages
 * (/help/faq/, /help/troubleshooting/, /help/tips/, /help/tutorials/).
 *
 * Each sub-page renders its content statically from _data/*.json via
 * Liquid loops, then this script wires up:
 *   - Version filter (Decky / Pro / Show All) — stored in localStorage,
 *     applied across all four sub-pages on load
 *   - Search (full-text against rendered DOM)
 *   - Accordion toggle for category headers
 *   - Deep-link handling: auto-expands <details> + scrolls when the URL
 *     hash matches an item ID on this page
 *   - Mobile back-to-top FAB
 *   - Badge tooltip
 *   - Permalink-button copy-to-clipboard
 *
 * The hub page (/help/) loads its own shorter shim that just redirects
 * legacy /help/#xxx URLs to the right sub-page.
 */

(function () {
  'use strict';

  /* ============================================================
     Version filter (Decky / Pro / Show All)
     Each item has data-product="decky|pro|both|version-specific".
     The chosen version is persisted in localStorage so navigating
     between sub-pages keeps the same filter.
     ============================================================ */
  function applyVersionFilter(version) {
    document.querySelectorAll('.version-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.filter === version);
    });

    document.querySelectorAll('.faq-item-compact, .tutorial-item, .tip-item').forEach(item => {
      let matches;
      if (version === 'all') {
        matches = true;
      } else {
        const product = item.dataset.product
          || (item.classList.contains('decky') ? 'decky'
            : item.classList.contains('pro') ? 'pro'
            : item.classList.contains('both') ? 'both'
            : 'both');
        matches = (version === product) || product === 'both' || product === 'version-specific';
      }
      item.classList.toggle('hidden', !matches);
      item.classList.toggle('version-hidden', !matches);
    });

    // Inside each version-specific entry's answer, the content is split
    // into two top-level <div> blocks — one starting with a Pro header
    // (orange "Junk Store Pro:") and one with a Decky header (blue
    // "Decky Plugin:"). When a specific version is selected, hide the
    // irrelevant block so the user only sees their version's instructions.
    // When 'all' is selected, both blocks show.
    document.querySelectorAll('details[data-product="version-specific"] .faq-answer > div').forEach(block => {
      const firstStrong = block.querySelector('strong');
      if (!firstStrong) return;
      const t = firstStrong.textContent.trim();
      const isPro   = t === 'Junk Store Pro:';
      const isDecky = t === 'Decky Plugin:';
      if (!isPro && !isDecky) return; // not a primary version block (e.g. callout aside)

      let show;
      if (version === 'all') show = true;
      else if (version === 'pro')   show = isPro;
      else if (version === 'decky') show = isDecky;
      else show = true;
      block.style.display = show ? '' : 'none';
    });

    updateCategoryVisibility();
    updateSearchInfo();
  }

  // Exposed because the markup uses `onclick="selectVersion('decky')"` etc.
  window.selectVersion = function (version) {
    localStorage.setItem('junkstore-version', version);
    applyVersionFilter(version);
  };

  /* ============================================================
     Category visibility — collapse a category to 0 if all its
     items are hidden by the version filter or search.
     ============================================================ */
  function updateCategoryVisibility() {
    document.querySelectorAll('.category-accordion').forEach(cat => {
      const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
      const countEl = cat.querySelector('.category-count');
      if (countEl) countEl.textContent = visible;
      cat.classList.toggle('hidden', visible === 0);
    });
  }

  /* ============================================================
     Search counter — the label text ("questions" / "tips" /
     "issues" / "tutorials") comes from #search-info[data-label].
     ============================================================ */
  function updateSearchInfo() {
    const info = document.getElementById('search-info');
    if (!info) return;
    const label = info.dataset.label || 'items';
    const total = document.querySelectorAll('.faq-item-compact, .tutorial-item, .tip-item').length;
    const visible = document.querySelectorAll('.faq-item-compact:not(.hidden), .tutorial-item:not(.hidden), .tip-item:not(.hidden)').length;
    if (total > 0) info.textContent = `${visible} of ${total} ${label}`;
  }

  /* ============================================================
     Search — operates on rendered DOM. Runs on top of whatever
     version filter is currently applied so .version-hidden is
     respected.
     ============================================================ */
  function applySearch(term) {
    const lower = term.trim().toLowerCase();
    document.querySelectorAll('.faq-item-compact').forEach(item => {
      const text = item.textContent.toLowerCase();
      const matchesSearch = !lower || text.includes(lower);
      const isVersionHidden = item.classList.contains('version-hidden');
      item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
    });

    // Tutorials / tips use a different markup
    document.querySelectorAll('.tutorial-item, .tip-item').forEach(item => {
      const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc  = item.querySelector('p')?.textContent.toLowerCase() || '';
      const matchesSearch = !lower || title.includes(lower) || desc.includes(lower);
      const isVersionHidden = item.classList.contains('version-hidden');
      item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
    });

    // Auto-expand categories that still have visible matches
    if (lower) {
      document.querySelectorAll('.category-accordion').forEach(cat => {
        const hasVisible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length > 0;
        if (hasVisible) cat.classList.add('expanded');
      });
    }

    // Hide tutorial section headings that no longer have any visible items
    document.querySelectorAll('#tutorials-content h2').forEach(heading => {
      const nextGrid = heading.nextElementSibling;
      if (nextGrid && (nextGrid.classList.contains('tutorial-grid') || nextGrid.classList.contains('tips-grid'))) {
        const visibleItems = nextGrid.querySelectorAll('.tutorial-item:not(.hidden), .tip-item:not(.hidden)');
        heading.classList.toggle('hidden', visibleItems.length === 0);
        nextGrid.classList.toggle('hidden', visibleItems.length === 0);
      }
    });

    updateCategoryVisibility();
    updateSearchInfo();
  }

  /* ============================================================
     Accordion toggle — exposed because markup uses onclick.
     ============================================================ */
  window.toggleCategory = function (el) {
    if (typeof event !== 'undefined') event.stopPropagation();
    const accordion = el.closest('.category-accordion');
    if (accordion) accordion.classList.toggle('expanded');
  };

  /* ============================================================
     Deep-link handler — when arriving with a hash that matches a
     content item (Q&A id), expand its <details>, expand its
     parent category, and scroll. Browsers don't auto-expand
     <details> on hash navigation reliably.
     ============================================================ */
  function handleDeepLink() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    if (target.tagName === 'DETAILS') target.open = true;
    const catAccordion = target.closest('.category-accordion');
    if (catAccordion) catAccordion.classList.add('expanded');
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  /* ============================================================
     Permalink button — copies the canonical share URL to
     clipboard when the small chain icon is clicked. The button's
     data-id is the item's anchor id.
     ============================================================ */
  function wirePermalinkButtons() {
    document.querySelectorAll('.permalink-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.dataset.id;
        if (!id) return;
        const url = location.origin + location.pathname + '#' + id;
        navigator.clipboard?.writeText(url).then(() => {
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 1500);
        });
      });
    });
  }

  /* ============================================================
     Mobile FAB scroll handler.
     ============================================================ */
  function wireMobileFab() {
    const fab = document.getElementById('mobile-fab');
    if (!fab) return;
    window.addEventListener('scroll', () => {
      fab.classList.toggle('visible', window.scrollY > 300);
    });
  }

  /* ============================================================
     Badge tooltip toggle.
     ============================================================ */
  function wireBadgeTooltip() {
    const helpBtn = document.getElementById('badge-help-trigger');
    const tooltip = document.getElementById('badge-tooltip');
    if (!helpBtn || !tooltip) return;
    helpBtn.addEventListener('click', e => {
      e.stopPropagation();
      tooltip.classList.toggle('visible');
    });
    document.addEventListener('click', () => tooltip.classList.remove('visible'));
  }

  /* ============================================================
     Search input wiring.
     ============================================================ */
  function wireSearch() {
    const input = document.getElementById('faq-search');
    const clear = document.getElementById('faq-clear-search');
    if (!input) return;
    input.addEventListener('input', () => {
      const term = input.value;
      if (clear) clear.style.display = term ? 'block' : 'none';
      applySearch(term);
    });
    if (clear) {
      clear.addEventListener('click', () => {
        input.value = '';
        input.dispatchEvent(new Event('input'));
        input.focus();
      });
    }
    input.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
    });
  }

  /* ============================================================
     Init.
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    const savedVersion = localStorage.getItem('junkstore-version') || 'all';
    applyVersionFilter(savedVersion);
    wireBadgeTooltip();
    wireSearch();
    wireMobileFab();
    wirePermalinkButtons();
    handleDeepLink();
  });

  // Re-handle deep links when the user clicks an in-page anchor
  // (e.g. from a permalink button on a different page that landed here).
  window.addEventListener('hashchange', handleDeepLink);
})();
