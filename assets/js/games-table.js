// =============================================================================
// games-table.js — /games/tested/ filter bar + table renderer
//
// State-driven filter bar with Stripe-style pills + popovers. All filter state
// lives in `filterState`; mutations go through setFilter/clearFilter and trigger
// a single applyFilters → updateTable cycle. Popover/menu open state is tracked
// in `uiState`.
// =============================================================================

// ---- Data + view state -----------------------------------------------------

let gamesData = null;
let filteredGames = [];
let currentPage = 1;
let pageSize = 20;

// ---- Filter state ----------------------------------------------------------

const filterState = {
  store: 'All',                  // single value
  decky: new Set(),              // multi-select rating buckets
  pro: new Set(),                // multi-select rating buckets
  controller: 'All',             // single value
  hideEac: false,                // boolean toggle
  freeNow: false,                // boolean toggle
  recent: false,                 // boolean toggle (last 90 days)
  search: '',                    // free-text
  pinnedSecondary: new Set()     // which secondary dims are pinned as pills
};

// ---- Filter dimension config ----------------------------------------------
//
// Each dimension knows how to: render its popover options, format its pill
// label, test a single game against the current selection, and report whether
// it's currently active (worth showing as an active pill).

const RATING_OPTIONS = [
  { value: 'perfect',     label: '✅ Works',         match: r => r === 'green' || r === 'perfect' },
  { value: 'yellow',      label: '🟡 Minor setup',   match: r => r === 'yellow' },
  { value: 'red',         label: '🔧 Advanced setup', match: r => r === 'red' },
  { value: 'broken',      label: '❌ Broken',        match: r => r === 'not-working' },
  { value: 'unsupported', label: '🚫 Unsupported',   match: r => r === 'not-supported' },
  { value: 'untested',    label: '❓ Untested',      match: r => !r || !['green','perfect','yellow','red','not-working','not-supported'].includes(r) }
];

const STORE_OPTIONS = [
  { value: 'All',    label: 'All Stores' },
  { value: 'Epic',   label: 'Epic' },
  { value: 'GOG',    label: 'GOG' },
  { value: 'Amazon', label: 'Amazon' },
  { value: 'itch',   label: 'itch' }
];

const CONTROLLER_OPTIONS = [
  { value: 'All',            label: 'Any controller' },
  { value: 'native',         label: 'Native' },
  { value: 'controller',     label: 'Controller' },
  { value: 'keyboard-mouse', label: 'Keyboard & Mouse' },
  { value: 'mouse-only',     label: 'Mouse Only' },
  { value: 'touchpad',       label: 'Touchpad' },
  { value: 'mixed',          label: 'Mixed Input' }
];

// Pinned-by-default dimensions (always visible in the bar) and secondary
// dimensions (behind "+ Filter"). Order in the bar follows array order.
const PINNED_DIMS = ['store', 'decky', 'pro'];
const SECONDARY_DIMS = ['controller', 'hideEac', 'freeNow', 'recent'];

const DIMENSION_LABEL = {
  store:      'Store',
  decky:      'Decky',
  pro:        'Pro',
  controller: 'Controller',
  hideEac:    'Hide anti-cheat',
  freeNow:    'Free now only',
  recent:     'Tested in last 90 days'
};

// ---- Bootstrap -------------------------------------------------------------

async function loadGamesData() {
  try {
    const response = await fetch('/assets/data/games-table.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    gamesData = await response.json();
    console.log(`✅ Loaded ${gamesData.total_games} games`);

    populateStats();
    renderFilterBar();
    applyFilters();
    setupEventListeners();

    document.getElementById('loadingIndicator').style.display = 'none';

    checkForGameParameter();
  } catch (error) {
    console.error('❌ Error loading games data:', error);
    document.getElementById('loadingIndicator').innerHTML = `
      <div style="color: #f44336;">
        <h3>Error loading games data</h3>
        <p><strong>Error:</strong> ${error.message}</p>
        <p>Check the browser console for more details.</p>
        <button onclick="loadGamesData()" style="background: #e67300; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">
          Retry
        </button>
      </div>
    `;
  }
}

function populateStats() {
  document.getElementById('gamesStats').innerHTML = `
    <div class="stats-grid">
      <div class="stat-item"><span class="stat-number">${gamesData.total_games}</span><span class="stat-label">Total Games</span></div>
      <div class="stat-item"><span class="stat-number">${gamesData.storefronts.Epic.total}</span><span class="stat-label">Epic Games</span></div>
      <div class="stat-item"><span class="stat-number">${gamesData.storefronts.GOG.total}</span><span class="stat-label">GOG</span></div>
      <div class="stat-item"><span class="stat-number">${gamesData.storefronts.Amazon.total}</span><span class="stat-label">Amazon</span></div>
      <div class="stat-item"><span class="stat-number">${gamesData.storefronts.itch.total}</span><span class="stat-label">itch</span></div>
    </div>
  `;
}

function sortGames() {
  filteredGames.sort((a, b) => a.title.localeCompare(b.title));
}

// ---- Filter logic ----------------------------------------------------------
//
// `applyFilters` is the single entry point. It rebuilds `filteredGames` from
// `filterState`, sorts, resets the page, and re-renders the table + bar.

function gameMatchesAllExcept(game, skipDim, freeKeys, ninetyDaysAgo) {
  // Helper: returns true if the game would survive every filter EXCEPT skipDim.
  // Used to compute live counts that update as other filters narrow the pool.
  if (skipDim !== 'store' && filterState.store !== 'All' && game.storefront !== filterState.store) return false;

  if (skipDim !== 'decky' && filterState.decky.size > 0) {
    const r = (game.decky_rating || '').toLowerCase();
    const hit = RATING_OPTIONS.some(o => filterState.decky.has(o.value) && o.match(r));
    if (!hit) return false;
  }
  if (skipDim !== 'pro' && filterState.pro.size > 0) {
    const r = (game.standalone_rating || '').toLowerCase();
    const hit = RATING_OPTIONS.some(o => filterState.pro.has(o.value) && o.match(r));
    if (!hit) return false;
  }
  if (skipDim !== 'controller' && filterState.controller !== 'All') {
    if ((game.controller_input || '').toLowerCase() !== filterState.controller) return false;
  }
  if (skipDim !== 'hideEac' && filterState.hideEac && game.requires_eac_runtime) return false;
  if (skipDim !== 'freeNow' && filterState.freeNow) {
    const k = `${game.storefront.toLowerCase()}/${game.slug.toLowerCase()}`;
    if (!freeKeys.has(k)) return false;
  }
  if (skipDim !== 'recent' && filterState.recent) {
    const t = parseDateTested(game.date_tested);
    if (t === null || t < ninetyDaysAgo) return false;
  }
  if (skipDim !== 'search' && filterState.search) {
    const s = filterState.search.toLowerCase();
    const inTitle = game.title.toLowerCase().includes(s);
    const inPub = game.publisher && game.publisher.toLowerCase().includes(s);
    if (!inTitle && !inPub) return false;
  }
  return true;
}

function buildFreeKeys() {
  const set = new Set();
  if (window.FreeGames && window.FreeGames.activeList) {
    for (const e of window.FreeGames.activeList) {
      if (e.website_slug && e.storefront) {
        set.add(`${e.storefront.toLowerCase()}/${e.website_slug.toLowerCase()}`);
      }
    }
  }
  return set;
}

// `date_tested` is stored like "Jul '25". Parse to month-precision ms.
function parseDateTested(s) {
  if (!s) return null;
  const m = s.match(/^([A-Za-z]+)\s+'(\d{2})$/);
  if (!m) return null;
  const monthIdx = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    .findIndex(mn => mn.toLowerCase() === m[1].toLowerCase().slice(0, 3));
  if (monthIdx < 0) return null;
  return new Date(2000 + parseInt(m[2], 10), monthIdx, 15).getTime();
}

function applyFilters() {
  if (!gamesData) return;
  const freeKeys = buildFreeKeys();
  const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000;

  filteredGames = gamesData.games.filter(g => gameMatchesAllExcept(g, null, freeKeys, ninetyDaysAgo));

  sortGames();
  currentPage = 1;
  updateTable();
  renderFilterBarPills(); // refresh pills only — preserve search focus
}

// Live counts for the popover of one dimension — i.e. how many games WOULD
// match each option of `dim` if you applied it on top of all OTHER current
// filters. This is what powers Stripe-style "the count next to each chip".
function computeCounts(dim) {
  const freeKeys = buildFreeKeys();
  const ninetyDaysAgo = Date.now() - 90 * 24 * 60 * 60 * 1000;
  // Pool that survives all OTHER filters (skipping the one we're counting).
  const pool = gamesData.games.filter(g => gameMatchesAllExcept(g, dim, freeKeys, ninetyDaysAgo));

  if (dim === 'store') {
    const counts = { All: pool.length };
    for (const o of STORE_OPTIONS) if (o.value !== 'All') counts[o.value] = 0;
    for (const g of pool) if (counts[g.storefront] !== undefined) counts[g.storefront]++;
    return counts;
  }
  if (dim === 'controller') {
    const counts = { All: pool.length };
    for (const o of CONTROLLER_OPTIONS) if (o.value !== 'All') counts[o.value] = 0;
    for (const g of pool) {
      const ci = (g.controller_input || '').toLowerCase();
      if (counts[ci] !== undefined) counts[ci]++;
    }
    return counts;
  }
  if (dim === 'decky' || dim === 'pro') {
    const field = dim === 'decky' ? 'decky_rating' : 'standalone_rating';
    const counts = {};
    for (const o of RATING_OPTIONS) counts[o.value] = 0;
    for (const g of pool) {
      const r = (g[field] || '').toLowerCase();
      const opt = RATING_OPTIONS.find(o => o.match(r));
      if (opt) counts[opt.value]++;
    }
    return counts;
  }
  // Boolean dims: { on: count of games matching when the toggle is ON }
  if (dim === 'hideEac') {
    return { on: pool.filter(g => !g.requires_eac_runtime).length };
  }
  if (dim === 'freeNow') {
    return { on: pool.filter(g => freeKeys.has(`${g.storefront.toLowerCase()}/${g.slug.toLowerCase()}`)).length };
  }
  if (dim === 'recent') {
    return { on: pool.filter(g => {
      const t = parseDateTested(g.date_tested);
      return t !== null && t >= ninetyDaysAgo;
    }).length };
  }
  return {};
}

// ---- Filter mutations ------------------------------------------------------

function setFilter(dim, value) {
  if (dim === 'store' || dim === 'controller') {
    filterState[dim] = value;
  } else if (dim === 'decky' || dim === 'pro') {
    filterState[dim] = new Set(value); // value: array or Set of selected option values
  } else if (dim === 'hideEac' || dim === 'freeNow' || dim === 'recent') {
    filterState[dim] = !!value;
  } else if (dim === 'search') {
    filterState[dim] = value || '';
  }
  applyFilters();
}

function clearFilter(dim) {
  if (dim === 'store' || dim === 'controller') filterState[dim] = 'All';
  else if (dim === 'decky' || dim === 'pro') filterState[dim] = new Set();
  else if (dim === 'hideEac' || dim === 'freeNow' || dim === 'recent') filterState[dim] = false;
  else if (dim === 'search') filterState[dim] = '';
  // Unpin from secondary list when cleared (keeps the bar clean)
  if (SECONDARY_DIMS.includes(dim)) filterState.pinnedSecondary.delete(dim);
  applyFilters();
}

function clearAllFilters() {
  filterState.store = 'All';
  filterState.decky = new Set();
  filterState.pro = new Set();
  filterState.controller = 'All';
  filterState.hideEac = false;
  filterState.freeNow = false;
  filterState.recent = false;
  filterState.search = '';
  filterState.pinnedSecondary = new Set();
  const searchInput = document.querySelector('.filter-bar__search');
  if (searchInput) searchInput.value = '';
  applyFilters();
}

function isDimActive(dim) {
  if (dim === 'store')      return filterState.store !== 'All';
  if (dim === 'decky')      return filterState.decky.size > 0;
  if (dim === 'pro')        return filterState.pro.size > 0;
  if (dim === 'controller') return filterState.controller !== 'All';
  if (dim === 'hideEac')    return filterState.hideEac;
  if (dim === 'freeNow')    return filterState.freeNow;
  if (dim === 'recent')     return filterState.recent;
  return false;
}

// ---- Pill label formatting -------------------------------------------------

function formatPillLabel(dim) {
  const base = DIMENSION_LABEL[dim];
  if (!isDimActive(dim)) return base;

  if (dim === 'store') return `${base}: ${filterState.store}`;
  if (dim === 'controller') {
    const opt = CONTROLLER_OPTIONS.find(o => o.value === filterState.controller);
    return `${base}: ${opt ? opt.label.replace(/^Any /, '') : filterState.controller}`;
  }
  if (dim === 'decky' || dim === 'pro') {
    const selected = [...filterState[dim]];
    if (selected.length >= 3) return `${base}: ${selected.length} selected`;
    const labels = selected
      .map(v => RATING_OPTIONS.find(o => o.value === v))
      .filter(Boolean)
      .map(o => o.label.replace(/^[^\s]+\s/, '')); // drop the emoji prefix for compactness
    return `${base}: ${labels.join(', ')}`;
  }
  // Boolean dims: just the label is enough (the active style indicates it's on)
  return base;
}

// ---- Filter bar rendering --------------------------------------------------

// Renders the full bar shell — called once on init. Subsequent updates only
// touch the pills container so the search input doesn't lose focus mid-typing.
function renderFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  bar.innerHTML = `
    <input class="filter-bar__search" type="search" placeholder="Search games or publishers…"
           value="${escapeAttr(filterState.search)}" aria-label="Search games">
    <div class="filter-bar__pills" id="filterBarPills"></div>
    <div class="filter-bar__show">
      Show
      <select aria-label="Page size">
        <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
        <option value="20" ${pageSize === 20 ? 'selected' : ''}>20</option>
        <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
      </select>
    </div>
    <button class="filter-bar__mobile-btn" type="button" data-mobile-filters>
      🎛 Filters
      <span class="filter-bar__mobile-badge" data-mobile-badge hidden></span>
    </button>
  `;

  // Wire static elements (search + show + mobile btn) — these survive re-renders
  bar.querySelector('.filter-bar__search').addEventListener('input', e => {
    filterState.search = e.target.value;
    applyFiltersDebounced();
  });
  bar.querySelector('.filter-bar__show select').addEventListener('change', e => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1;
    updateTable();
  });

  renderFilterBarPills();
}

function renderFilterBarPills() {
  const container = document.getElementById('filterBarPills');
  if (!container) return;

  const pillDims = [...PINNED_DIMS, ...filterState.pinnedSecondary];
  const pillsHTML = pillDims.map(dim => {
    const label = formatPillLabel(dim);
    const active = isDimActive(dim);
    return `
      <button class="filter-pill ${active ? 'is-active' : ''}" data-dim="${dim}" type="button">
        <span class="filter-pill__label">${label}</span>
        ${active
          ? `<span class="filter-pill__clear" data-clear="${dim}" role="button" aria-label="Clear ${DIMENSION_LABEL[dim]}">×</span>`
          : `<span class="filter-pill__arrow">▾</span>`}
      </button>
    `;
  }).join('');

  const unpinnedSecondary = SECONDARY_DIMS.filter(d => !filterState.pinnedSecondary.has(d));
  const addPillHTML = unpinnedSecondary.length > 0
    ? `<button class="filter-pill is-add" data-add-filter type="button">+ Filter <span class="filter-pill__arrow">▾</span></button>`
    : '';

  container.innerHTML = pillsHTML + addPillHTML;

  // Update mobile badge
  const activeCount = ['store','decky','pro','controller','hideEac','freeNow','recent'].filter(isDimActive).length;
  const badge = document.querySelector('[data-mobile-badge]');
  if (badge) {
    badge.textContent = activeCount;
    badge.hidden = activeCount === 0;
  }

  // Bind pill events (re-bound each pill render)
  container.querySelectorAll('.filter-pill[data-dim]').forEach(pill => {
    pill.addEventListener('click', e => {
      if (e.target.closest('[data-clear]')) return;
      togglePopover(pill.dataset.dim, pill);
    });
  });
  container.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      clearFilter(btn.dataset.clear);
    });
  });
  const addBtn = container.querySelector('[data-add-filter]');
  if (addBtn) {
    addBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleAddFilterMenu(addBtn);
    });
  }
}

// ---- Popovers --------------------------------------------------------------

let openPopoverDim = null;

function togglePopover(dim, anchorPill) {
  if (openPopoverDim === dim) { closePopover(); return; }
  closePopover();
  openPopover(dim, anchorPill);
}

function openPopover(dim, anchorPill) {
  closeAddFilterMenu();
  openPopoverDim = dim;
  anchorPill.classList.add('is-open');

  const counts = computeCounts(dim);
  const pop = document.createElement('div');
  pop.className = 'filter-popover';
  pop.dataset.dim = dim;
  pop.innerHTML = renderPopoverContent(dim, counts);

  document.getElementById('filterBar').appendChild(pop);
  positionPopover(pop, anchorPill);

  bindPopoverEvents(pop, dim);

  // Close on outside click / Escape
  setTimeout(() => {
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onDocKeyDown);
  }, 0);
}

function renderPopoverContent(dim, counts) {
  const head = `<div class="filter-popover__head">${DIMENSION_LABEL[dim]}</div>`;
  let body = '';

  if (dim === 'store') {
    body = STORE_OPTIONS.map(o => {
      const checked = filterState.store === o.value;
      const ct = counts[o.value] !== undefined ? counts[o.value] : '';
      return `
        <label class="filter-popover__opt">
          <input type="radio" name="popover-store" value="${o.value}" ${checked ? 'checked' : ''}>
          ${o.label}
          <span class="filter-popover__count">${ct}</span>
        </label>`;
    }).join('');
  } else if (dim === 'controller') {
    body = CONTROLLER_OPTIONS.map(o => {
      const checked = filterState.controller === o.value;
      const ct = counts[o.value] !== undefined ? counts[o.value] : '';
      return `
        <label class="filter-popover__opt">
          <input type="radio" name="popover-controller" value="${o.value}" ${checked ? 'checked' : ''}>
          ${o.label}
          <span class="filter-popover__count">${ct}</span>
        </label>`;
    }).join('');
  } else if (dim === 'decky' || dim === 'pro') {
    body = RATING_OPTIONS.map(o => {
      const checked = filterState[dim].has(o.value);
      const ct = counts[o.value] !== undefined ? counts[o.value] : 0;
      return `
        <label class="filter-popover__opt">
          <input type="checkbox" value="${o.value}" ${checked ? 'checked' : ''}>
          ${o.label}
          <span class="filter-popover__count">${ct}</span>
        </label>`;
    }).join('');
  } else if (dim === 'hideEac' || dim === 'freeNow' || dim === 'recent') {
    const checked = filterState[dim];
    const ct = counts.on;
    body = `
      <label class="filter-popover__opt">
        <input type="checkbox" ${checked ? 'checked' : ''}>
        ${DIMENSION_LABEL[dim]}
        <span class="filter-popover__count">${ct}</span>
      </label>`;
  }

  const foot = `
    <div class="filter-popover__foot">
      <button type="button" data-action="clear">Clear</button>
      <button type="button" class="is-primary" data-action="done">Done</button>
    </div>`;

  return head + `<div class="filter-popover__body">${body}</div>` + foot;
}

function bindPopoverEvents(pop, dim) {
  // Single-select dims: radio click = immediate apply (no need for Done)
  if (dim === 'store' || dim === 'controller') {
    pop.querySelectorAll('input[type="radio"]').forEach(r => {
      r.addEventListener('change', () => {
        setFilter(dim, r.value);
        closePopover();
      });
    });
  }
  // Multi-select dims: checkbox toggles, Done applies
  if (dim === 'decky' || dim === 'pro') {
    // No live apply — wait for Done button
  }
  // Boolean dims
  if (dim === 'hideEac' || dim === 'freeNow' || dim === 'recent') {
    pop.querySelector('input[type="checkbox"]').addEventListener('change', e => {
      setFilter(dim, e.target.checked);
      closePopover();
    });
  }

  pop.querySelector('[data-action=clear]').addEventListener('click', () => {
    clearFilter(dim);
    closePopover();
  });
  pop.querySelector('[data-action=done]').addEventListener('click', () => {
    if (dim === 'decky' || dim === 'pro') {
      const selected = [...pop.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value);
      setFilter(dim, selected);
    }
    closePopover();
  });
}

function positionPopover(pop, anchorPill) {
  const bar = document.getElementById('filterBar');
  const barRect = bar.getBoundingClientRect();
  const pillRect = anchorPill.getBoundingClientRect();
  pop.style.left = (pillRect.left - barRect.left) + 'px';
  pop.style.top = (pillRect.bottom - barRect.top + 6) + 'px';

  // Nudge left if the popover would overflow the bar's right edge.
  const popWidth = pop.getBoundingClientRect().width;
  const overflowRight = (pillRect.left - barRect.left) + popWidth - barRect.width;
  if (overflowRight > 0) {
    pop.style.left = Math.max(0, (pillRect.left - barRect.left) - overflowRight - 8) + 'px';
  }
}

function closePopover() {
  const pop = document.querySelector('.filter-popover');
  if (pop) pop.remove();
  document.querySelectorAll('.filter-pill.is-open').forEach(p => p.classList.remove('is-open'));
  openPopoverDim = null;
  document.removeEventListener('mousedown', onDocMouseDown);
  document.removeEventListener('keydown', onDocKeyDown);
}

function onDocMouseDown(e) {
  if (e.target.closest('.filter-popover, .filter-add-menu, .filter-pill')) return;
  closePopover();
  closeAddFilterMenu();
}

function onDocKeyDown(e) {
  if (e.key === 'Escape') {
    closePopover();
    closeAddFilterMenu();
  }
}

// ---- "+ Filter" menu -------------------------------------------------------

function toggleAddFilterMenu(anchorBtn) {
  const existing = document.querySelector('.filter-add-menu');
  if (existing) { closeAddFilterMenu(); return; }
  closePopover();

  const unpinned = SECONDARY_DIMS.filter(d => !filterState.pinnedSecondary.has(d));
  const menu = document.createElement('div');
  menu.className = 'filter-add-menu';
  menu.innerHTML = `
    <div class="filter-popover__head">Add Filter</div>
    <div class="filter-popover__body">
      ${unpinned.map(d => `
        <div class="filter-add-menu__opt" data-add="${d}">${DIMENSION_LABEL[d]}</div>
      `).join('')}
    </div>
  `;
  document.getElementById('filterBar').appendChild(menu);
  positionPopover(menu, anchorBtn);

  menu.querySelectorAll('[data-add]').forEach(item => {
    item.addEventListener('click', () => {
      const d = item.dataset.add;
      filterState.pinnedSecondary.add(d);
      closeAddFilterMenu();
      renderFilterBar();
      // Open the freshly-pinned pill's popover so user can pick a value
      const pill = document.querySelector(`.filter-pill[data-dim="${d}"]`);
      if (pill) togglePopover(d, pill);
    });
  });

  setTimeout(() => {
    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onDocKeyDown);
  }, 0);
}

function closeAddFilterMenu() {
  const menu = document.querySelector('.filter-add-menu');
  if (menu) menu.remove();
}

// ---- Search debounce -------------------------------------------------------

let searchTimer = null;
function applyFiltersDebounced() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilters, 120);
}

// ---- Table rendering -------------------------------------------------------

function getCompatibilityDisplay(rating) {
  if (!rating) return '<span class="compatibility-na">Not tested</span>';
  const map = { 'green': '✅', 'Perfect': '✅', 'yellow': '🟡', 'red': '🔧', 'not-working': '❌', 'not-supported': '🚫' };
  return `<span class="compatibility-rating">${map[rating] || '❓'}</span>`;
}

function updateTable() {
  const tbody = document.getElementById('gamesTableBody');
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filteredGames.length);
  const pageGames = filteredGames.slice(startIdx, endIdx);

  const tableHTML = pageGames.map(game => {
    const isAntiCheat = game.cant_test_linux === true;
    const gameEntryId = `game-${game.slug}-${game.storefront.toLowerCase().replace(/\./g, '-')}`;
    const storefrontDir = game.storefront.toLowerCase();

    return `
      <tr id="${gameEntryId}" data-storefront="${game.storefront}" data-game-slug="${game.slug}" data-game-storefront="${storefrontDir}">
        <td title="${game.title}">
          ${isAntiCheat
            ? `<span class="game-title-static">${game.title}</span>`
            : `<span class="game-link clickable" data-game-slug="${game.slug}" data-storefront="${storefrontDir}">${game.title}</span>`}
        </td>
        <td><span class="store-badge ${storefrontDir}">${game.storefront}</span></td>
        ${isAntiCheat
          ? `<td colspan="2" class="anticheat-warning">⚠️ Incompatible - Anti Cheat</td>`
          : `<td class="compatibility-rating">${getCompatibilityDisplay(game.decky_rating)}</td>
             <td class="compatibility-rating">${getCompatibilityDisplay(game.standalone_rating)}</td>`}
        <td>${game.date_tested || ''}</td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = tableHTML;
  updatePagination();
  addRowClickHandlers();

  if (window.FreeGames && window.FreeGames.applyBadges) {
    window.FreeGames.ready().then(() => window.FreeGames.applyBadges(tbody));
  }
}

function updatePagination() {
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, filteredGames.length);

  document.getElementById('paginationInfo').textContent =
    filteredGames.length === 0
      ? 'No games match your filters'
      : `Showing ${startIdx}-${endIdx} of ${filteredGames.length} games`;

  const controls = document.getElementById('paginationControls');
  let html = '';
  html += `<button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>← Previous</button>`;
  const pagesToShow = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
  } else {
    pagesToShow.push(1);
    if (currentPage > 3) pagesToShow.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pagesToShow.push(i);
    if (currentPage < totalPages - 2) pagesToShow.push('...');
    if (totalPages > 1) pagesToShow.push(totalPages);
  }
  pagesToShow.forEach(page => {
    if (page === '...') html += '<span class="pagination-ellipsis">...</span>';
    else html += `<button class="pagination-btn ${page === currentPage ? 'active' : ''}" onclick="changePage(${page})">${page}</button>`;
  });
  html += `<button class="pagination-btn ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}>Next →</button>`;
  controls.innerHTML = html;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  updateTable();
  document.querySelector('.games-table-wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- Row click handlers ----------------------------------------------------

function addRowClickHandlers() {
  document.querySelectorAll('.game-link.clickable').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const slug = link.dataset.gameSlug;
      const storefront = link.dataset.storefront;
      if (!slug || !storefront) return;
      window.location.href = `/games/${storefront}/${slug}/`;
    });
  });
}

// ---- URL parameter handling ------------------------------------------------

function checkForGameParameter() {
  try {
    const params = new URLSearchParams(window.location.search);
    const store = params.get('store');
    const databaseId = params.get('id');
    const gameName = params.get('game');

    const STORE_MAP = {
      'epic': 'Epic', 'gog': 'GOG', 'amazon': 'Amazon', 'itch': 'itch', 'itch.io': 'itch'
    };

    if (store && databaseId) {
      const normalized = STORE_MAP[store.toLowerCase()];
      if (!normalized) return;
      const game = gamesData.games.find(g => g.storefront === normalized && g.databaseId === databaseId);
      if (game) window.location.replace(`/games/${normalized.toLowerCase()}/${game.slug}/`);
      return;
    }

    if (gameName) {
      const decoded = decodeURIComponent(gameName.replace(/\+/g, ' '));
      const game = gamesData.games.find(g => g.title === decoded);
      if (game) window.location.replace(`/games/${game.storefront.toLowerCase()}/${game.slug}/`);
      return;
    }

    if (store) {
      const normalized = STORE_MAP[store.toLowerCase()];
      if (normalized) {
        filterState.store = normalized;
        applyFilters();
      }
    }
  } catch (err) {
    console.error('Error processing URL parameters:', err);
  }
}

// ---- Misc setup ------------------------------------------------------------

function setupEventListeners() {
  // Re-apply filters when free-games data lands so the "Free now" filter works
  document.addEventListener('freegames:ready', () => {
    if (filterState.freeNow) applyFilters();
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) backToTop.style.setProperty('display', 'block', 'important');
      else backToTop.style.setProperty('display', 'none', 'important');
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

// ---- Helpers ---------------------------------------------------------------

function escapeAttr(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

document.addEventListener('DOMContentLoaded', loadGamesData);
