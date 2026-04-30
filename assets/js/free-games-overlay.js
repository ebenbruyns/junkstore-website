/**
 * Free Games overlay
 *
 * Loads /assets/data/free-games.json (written by free-game-bot), keeps only
 * entries whose end_date is still in the future, and:
 *   1. Stamps a "Free until …" pill onto any element marked
 *      data-game-slug="…" data-game-storefront="…" that matches a giveaway.
 *   2. Exposes the active list on window.FreeGames so /free-games/ can render it.
 *
 * Expiry happens in the browser, so deals drop off without a Jekyll rebuild.
 */
(function () {
  'use strict';

  var DATA_URL = '/assets/data/free-games.json';
  var BADGE_CLASS = 'free-now-badge';

  var state = {
    activeList: [],
    byKey: new Map(),
    byTitle: new Map(),
    loaded: false,
    loadPromise: null
  };

  function key(storefront, slug) {
    return (storefront || '').toLowerCase() + '/' + (slug || '').toLowerCase();
  }

  // Title-based key: lowercase, strip non-word chars, collapse whitespace.
  // Lets us match free-games entries to game pages when the upstream feed is
  // missing website_slug (the bot leaves it null). Storefront is intentionally
  // omitted so an Amazon Prime giveaway delivering a GOG/Epic code still matches
  // the GOG/Epic game page.
  function titleKey(title) {
    return (title || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function isActive(entry) {
    if (!entry || !entry.end_date) return false;
    var endMs = Date.parse(String(entry.end_date).replace(' ', 'T'));
    if (isNaN(endMs)) return false;
    return endMs > Date.now();
  }

  function load() {
    if (state.loadPromise) return state.loadPromise;
    state.loadPromise = fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (payload) {
        var games = (payload && payload.games) || [];
        state.activeList = games.filter(isActive);
        state.byKey = new Map();
        state.byTitle = new Map();
        state.activeList.forEach(function (entry) {
          if (entry.website_slug) {
            state.byKey.set(key(entry.storefront, entry.website_slug), entry);
          }
          var tk = titleKey(entry.title);
          if (tk) state.byTitle.set(tk, entry);
        });
        state.loaded = true;
        document.dispatchEvent(new CustomEvent('freegames:ready', { detail: { count: state.activeList.length } }));
        return state.activeList;
      })
      .catch(function (err) {
        console.warn('[free-games] failed to load', DATA_URL, err);
        state.loaded = true;
        return [];
      });
    return state.loadPromise;
  }

  function buildBadge(entry) {
    var a = document.createElement('a');
    a.className = BADGE_CLASS;
    a.href = entry.store_url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = 'Currently free at ' + entry.storefront + ' — claim it now';
    a.textContent = 'Free until ' + (entry.end_date_formatted || 'limited time');
    return a;
  }

  function applyBadges(root) {
    if (!state.loaded) return 0;
    if (state.byKey.size === 0 && state.byTitle.size === 0) return 0;
    var scope = root || document;
    var elements = scope.querySelectorAll('[data-game-slug][data-game-storefront]');
    var count = 0;
    elements.forEach(function (el) {
      if (el.dataset.freeNowApplied) return;
      // Primary match: storefront + slug. Fall back to title when the upstream
      // feed didn't provide website_slug (currently always null).
      var entry = state.byKey.get(key(el.dataset.gameStorefront, el.dataset.gameSlug));
      if (!entry && el.dataset.gameTitle) {
        entry = state.byTitle.get(titleKey(el.dataset.gameTitle));
      }
      if (!entry) return;
      el.dataset.freeNowApplied = '1';
      el.classList.add('has-free-now-badge');
      el.appendChild(buildBadge(entry));
      count++;
    });
    return count;
  }

  // Populates "🎁 N free games right now →" count banners. Hides when N is 0.
  // Markup contract: <a class="free-games-banner" href="/free-games/" data-free-games-banner hidden>
  //                    ... <span class="free-games-banner__count">…</span> ...
  //                  </a>
  function applyBanners(root) {
    if (!state.loaded) return;
    var scope = root || document;
    var banners = scope.querySelectorAll('[data-free-games-banner]');
    var count = state.activeList.length;
    banners.forEach(function (el) {
      if (count === 0) {
        el.hidden = true;
        return;
      }
      var countEl = el.querySelector('.free-games-banner__count');
      if (countEl) countEl.textContent = String(count);
      var labelEl = el.querySelector('.free-games-banner__label');
      if (labelEl) labelEl.textContent = count === 1 ? 'free game right now' : 'free games right now';
      el.hidden = false;
    });
  }

  // Expose the API early (so dynamic renderers can call applyBadges() right after
  // they re-render). Stash the active list lazily — populated when load() resolves.
  window.FreeGames = {
    get activeList() { return state.activeList; },
    get loaded() { return state.loaded; },
    ready: function () { return load(); },
    applyBadges: applyBadges,
    applyBanners: applyBanners
  };

  function init() {
    load().then(function () { applyBadges(); applyBanners(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
