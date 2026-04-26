/**
 * Games Hub JavaScript
 * Handles: Recently tested carousel, store stats, search autocomplete
 */

(function() {
  'use strict';

  let allGames = []; // Store games for search

  // Load games data and populate the hub
  async function initGamesHub() {
    try {
      const response = await fetch('/assets/data/games-table.json');
      const data = await response.json();

      if (data && data.games) {
        allGames = data.games; // Store for search
        populateRecentlyTested(data.games);
        updateStoreStats(data);
        updateTotalCount(data.total_games || data.games.length);
        initSearchAutocomplete();
      }
    } catch (error) {
      console.error('Failed to load games data:', error);
      hideLoadingState();
    }
  }

  // Search autocomplete
  function initSearchAutocomplete() {
    const input = document.getElementById('games-search-input');
    const suggestions = document.getElementById('games-search-suggestions');

    if (!input || !suggestions) return;

    let debounceTimer;

    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 2) {
        suggestions.classList.remove('active');
        suggestions.innerHTML = '';
        return;
      }

      debounceTimer = setTimeout(() => {
        const matches = allGames
          .filter(game => game.title.toLowerCase().includes(query))
          .slice(0, 6);

        if (matches.length === 0) {
          suggestions.classList.remove('active');
          suggestions.innerHTML = '';
          return;
        }

        suggestions.innerHTML = matches.map(game => {
          const store = normalizeStore(game.storefrontKey || game.storefront);
          const slug = game.slug || slugify(game.title);
          return `
            <a href="/games/${store}/${slug}/" class="games-hub-search__suggestion">
              <span class="games-hub-search__suggestion-title">${escapeHtml(game.title)}</span>
              <span class="games-hub-search__suggestion-store ${store}">${capitalizeStore(store)}</span>
            </a>
          `;
        }).join('');

        suggestions.classList.add('active');
      }, 150);
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.games-hub-search')) {
        suggestions.classList.remove('active');
      }
    });

    // Hide suggestions on escape
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        suggestions.classList.remove('active');
      }
    });
  }

  // Try the curated feed first (built from weekly post `featured_games:`
  // frontmatter by scripts/generate-recently-tested.js). Falls back to null if
  // the file is missing, malformed, or empty so callers can apply a fallback.
  async function fetchRecentlyTestedFeed() {
    try {
      const response = await fetch('/assets/data/recently-tested.json');
      if (!response.ok) return null;
      const data = await response.json();
      if (!data || !Array.isArray(data.games) || data.games.length === 0) return null;
      return data.games;
    } catch (e) {
      return null;
    }
  }

  // Populate recently tested carousel
  async function populateRecentlyTested(games) {
    const track = document.getElementById('recently-tested-track');
    const loading = document.querySelector('.games-carousel__loading');

    if (!track) return;

    // Source priority:
    //   1. Curated feed from weekly post frontmatter (newest at head, deduped, sliced to 12)
    //   2. Fallback: sort all games by `date_tested` and take top 12
    //      (used while frontmatter is being rolled out across posts)
    let recentGames = await fetchRecentlyTestedFeed();
    if (!recentGames) {
      const sortedGames = [...games].sort((a, b) => compareDates(b.date_tested, a.date_tested));
      recentGames = sortedGames.slice(0, 12);
    }

    // Fetch each game's full JSON for cover art (and for title/rating when the
    // entry came from the curated feed, which only carries store/slug/dates).
    const gamesWithImages = await Promise.all(
      recentGames.map(async (game) => {
        const store = normalizeStore(game.storefrontKey || game.storefront || game.store);
        const slug = game.slug || slugify(game.title);
        try {
          const response = await fetch(`/assets/data/games/${store === 'itch' ? 'itch.io' : store}/${slug}.json`);
          if (response.ok) {
            const fullData = await response.json();
            // Merge: full data first, then overlay the entry's own fields so
            // feed-only metadata (featured_in, post_url, store) survives. Cover
            // art always comes from the per-game JSON.
            return {
              ...fullData,
              ...game,
              icon_image: fullData.icon_image,
              vertical_artwork: fullData.vertical_artwork
            };
          }
        } catch (e) {
          // Ignore fetch errors, use placeholder
        }
        return game;
      })
    );

    // Build carousel HTML
    const html = gamesWithImages.map(game => createGameCard(game)).join('');
    track.innerHTML = html;

    // Hide loading, show track
    if (loading) loading.style.display = 'none';
    track.style.display = 'flex';

    // Stamp "Free until …" pills on cards whose game is currently being given away.
    if (window.FreeGames && window.FreeGames.applyBadges) {
      window.FreeGames.ready().then(() => window.FreeGames.applyBadges(track));
    }
  }

  // Create a game card element
  function createGameCard(game) {
    const store = normalizeStore(game.storefrontKey || game.storefront);
    const slug = game.slug || slugify(game.title);
    const rating = game.standalone_rating || 'unknown';
    const ratingClass = getRatingClass(rating);
    const ratingIcon = getRatingIcon(rating);
    // Prefer vertical_artwork for portrait cards
    const cover = game.vertical_artwork || game.icon_image || '';
    const hasImage = cover && cover.length > 0;

    return `
      <a href="/games/${store}/${slug}/" class="game-card" data-game-slug="${slug}" data-game-storefront="${store}">
        <div class="game-card__image ${hasImage ? '' : 'game-card__image--placeholder'}">
          ${hasImage
            ? `<img src="${cover}" alt="${escapeHtml(game.title)}" loading="lazy" onerror="this.parentElement.classList.add('game-card__image--placeholder'); this.remove();">`
            : `<span class="game-card__placeholder-text">${escapeHtml(game.title.charAt(0))}</span>`
          }
        </div>
        <div class="game-card__content">
          <div class="game-card__badges">
            <span class="game-card__rating game-card__rating--${ratingClass}">${ratingIcon} Pro</span>
            <span class="game-card__store game-card__store--${store}" onclick="event.preventDefault(); event.stopPropagation(); window.location.href='/games/tested/?store=${store}';">${capitalizeStore(store)}</span>
          </div>
          <h3 class="game-card__title">${escapeHtml(game.title)}</h3>
        </div>
      </a>
    `;
  }

  // Update store statistics
  function updateStoreStats(data) {
    if (data.storefronts) {
      updateStoreStat('epic', data.storefronts.Epic);
      updateStoreStat('gog', data.storefronts.GOG);
      updateStoreStat('amazon', data.storefronts.Amazon);
      updateStoreStat('itch', data.storefronts['itch.io'] || data.storefronts.itch);
    }
  }

  function updateStoreStat(store, stats) {
    if (!stats) return;

    const totalEl = document.getElementById(`${store}-total`);
    const greenEl = document.getElementById(`${store}-green`);

    if (totalEl) totalEl.textContent = stats.total || 0;
    if (greenEl) greenEl.textContent = stats.green_standalone || stats.green_decky || 0;
  }

  function updateTotalCount(total) {
    const el = document.getElementById('total-games-count');
    if (el) el.textContent = `${total}+`;
  }

  // Helper functions
  function normalizeStore(store) {
    if (!store) return 'epic';
    const s = store.toLowerCase();
    if (s === 'itch.io') return 'itch';
    return s;
  }

  function capitalizeStore(store) {
    const map = {
      'epic': 'Epic',
      'gog': 'GOG',
      'amazon': 'Amazon',
      'itch': 'itch'
    };
    return map[store] || store;
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function getRatingClass(rating) {
    const map = {
      'green': 'green',
      'yellow': 'yellow',
      'red': 'red',
      'broken': 'red',
      'not-working': 'red',
      'unsupported': 'gray',
      'not-supported': 'gray'
    };
    return map[rating] || 'gray';
  }

  function getRatingIcon(rating) {
    const map = {
      'green': '🟢',
      'yellow': '🟡',
      'red': '🔴',
      'broken': '⛔',
      'not-working': '⛔',
      'unsupported': '⚫',
      'not-supported': '⚫'
    };
    return map[rating] || '⚪';
  }

  // Compare date strings like "Apr '26" or "March '25"
  function compareDates(a, b) {
    if (!a && !b) return 0;
    if (!a) return -1;
    if (!b) return 1;

    const parseDate = (str) => {
      const months = {
        'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
        'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11,
        'january': 0, 'february': 1, 'march': 2, 'april': 3, 'june': 5,
        'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
      };

      const match = str.match(/([a-z]+)\s*'?(\d{2,4})/i);
      if (!match) return new Date(0);

      const month = months[match[1].toLowerCase()] || 0;
      let year = parseInt(match[2], 10);
      if (year < 100) year += 2000;

      return new Date(year, month, 1);
    };

    return parseDate(a) - parseDate(b);
  }

  function hideLoadingState() {
    const loading = document.querySelector('.games-carousel__loading');
    if (loading) loading.style.display = 'none';
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGamesHub);
  } else {
    initGamesHub();
  }
})();
