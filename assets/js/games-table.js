// =============================================================================
// games-table.js — /games/tested/ filter bar + table renderer
//
// Four pinned filter pills (Store, Decky, Pro, Last 90 days) sit aligned with
// their corresponding table columns. Search + page-size live in cell 1 (Game
// column area). Pill labels show absolute counts from the full dataset; live
// counts appear inside popovers for option-by-option feedback.
// =============================================================================

let gamesData = null;
let filteredGames = [];
let currentPage = 1;
let pageSize = 20;

const filterState = {
  store:  'All',           // single value
  decky:  'All',           // single value (rating bucket or 'All')
  pro:    'All',           // single value (rating bucket or 'All')
  recent: false,           // boolean: tested in last 90 days
  linux:  false,           // boolean: has a native Linux build
  search: ''               // free-text
};

// Inline SVG rating icons for broken / unsupported — no Font Awesome dependency,
// so they render identically in the table cells, the filter legend, and on game
// pages (which load no FA). Mirrors _includes/game-page-status-icon.html.
function ratingIcon(type, gap) {
  const m = gap ? 'margin-right:.45em;' : '';
  if (type === 'broken') {
    return `<svg viewBox="0 0 16 16" width="0.95em" height="0.95em" style="vertical-align:middle;${m}" role="img" aria-label="Broken"><circle cx="8" cy="8" r="8" fill="#f56565"/><path d="M5.3 5.3 10.7 10.7M10.7 5.3 5.3 10.7" stroke="#16181d" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  }
  if (type === 'unsupported') {
    return `<svg viewBox="0 0 16 16" width="0.95em" height="0.95em" style="vertical-align:middle;${m}" role="img" aria-label="Unsupported"><circle cx="8" cy="8" r="6.7" fill="none" stroke="#f56565" stroke-width="1.8"/><path d="M3.7 3.7 12.3 12.3" stroke="#f56565" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  }
  return '';
}

const RATING_OPTIONS = [
  { value: 'perfect',     label: '<span class="dot dot--green"></span>Works',         match: r => r === 'green' || r === 'perfect' },
  { value: 'yellow',      label: '<span class="dot dot--yellow"></span>Minor setup',  match: r => r === 'yellow' },
  { value: 'red',         label: '<span class="dot dot--red"></span>Advanced setup',  match: r => r === 'red' },
  { value: 'broken',      label: ratingIcon('broken', true) + 'Broken',               match: r => r === 'broken' },
  { value: 'unsupported', label: ratingIcon('unsupported', true) + 'Unsupported',     match: r => r === 'unsupported' },
  { value: 'untested',    label: '<span class="dot"></span>Untested',                 match: r => !r || !['green','perfect','yellow','red','broken','unsupported'].includes(r) }
];

const STORE_OPTIONS = [
  { value: 'All',    label: 'All Stores' },
  { value: 'Epic',   label: 'Epic' },
  { value: 'GOG',    label: 'GOG' },
  { value: 'Amazon', label: 'Amazon' },
  { value: 'itch',   label: 'itch' }
];

// Pills always pinned in the bar, in order. Each maps to a table column.
// `linux` is intentionally NOT in this list — it's rendered separately in
// the search column area because there's no Linux-specific table column to
// align it with.
const PINNED_DIMS = ['store', 'decky', 'pro', 'recent'];

const DIMENSION_LABEL = {
  store:  'Store',
  decky:  'Decky',
  pro:    'Pro',
  recent: 'Last 90 days',
  linux:  '🐧 Native Linux'
};

// ---- Bootstrap -------------------------------------------------------------

async function loadGamesData() {
  try {
    const response = await fetch('/assets/data/games-table.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    gamesData = await response.json();
    // Normalize legacy storefront label: the data exports "itch.io" but the rest
    // of the site (page dirs /games/itch/, badge CSS .store-badge.itch, filters)
    // expects plain "itch". Fixing it here keeps badges, links + filters working.
    if (Array.isArray(gamesData.games)) {
      gamesData.games.forEach(g => { if (g.storefront === 'itch.io') g.storefront = 'itch'; });
    }
    console.log(`✅ Loaded ${gamesData.total_games} games`);

    populateStats();
    renderFilterBar();
    applyFilters();
    setupEventListeners();
    syncBarToTable();
    window.addEventListener('resize', debounce(syncBarToTable, 100));

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
  // Count from the (normalized) games array rather than the precomputed
  // storefronts summary — the export under-counts itch (buckets it as "itch.io"),
  // and counting live guarantees the cards always match the table.
  const games = gamesData.games || [];
  const countBy = store => games.filter(g => g.storefront === store).length;
  // Each entry is a store filter toggle; "Total Games" (data-store="All") clears it.
  const item = (store, count, label) =>
    `<button type="button" class="stat-item stat-item--filter" data-store="${store}" aria-pressed="false">
      <span class="stat-number">${count}</span><span class="stat-label">${label}</span>
    </button>`;
  document.getElementById('gamesStats').innerHTML = `
    <div class="stats-grid">
      ${item('All', gamesData.total_games, 'Total Games')}
      ${item('Epic', countBy('Epic'), 'Epic Games')}
      ${item('GOG', countBy('GOG'), 'GOG')}
      ${item('Amazon', countBy('Amazon'), 'Amazon')}
      ${item('itch', countBy('itch'), 'itch')}
    </div>
  `;
  updateStatActive();
}

// Highlight the stat-row entry matching the active store filter.
function updateStatActive() {
  document.querySelectorAll('#gamesStats [data-store]').forEach(el => {
    const active = el.dataset.store === filterState.store;
    el.classList.toggle('stat-item--active', active);
    el.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

// Clicking a store in the stats row filters the table to it (toggle off / "Total
// Games" returns to all). Reuses the same filter path as the Store pill.
function bindStatRowClicks() {
  const stats = document.getElementById('gamesStats');
  if (!stats || stats.dataset.clickBound) return;
  stats.dataset.clickBound = '1';
  stats.addEventListener('click', e => {
    const btn = e.target.closest('[data-store]');
    if (!btn) return;
    const store = btn.dataset.store;
    const next = (store === 'All' || filterState.store === store) ? 'All' : store;
    setFilter('store', next);
    // Pull the results into view on small screens (no-op when already visible).
    document.querySelector('.games-table-wrapper')
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function sortGames() {
  filteredGames.sort((a, b) => a.title.localeCompare(b.title));
}

// ---- Filter logic ----------------------------------------------------------

const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

// Parse "Mon 'YY" date format to month-precision ms.
function parseDateTested(s) {
  if (!s) return null;
  const m = s.match(/^([A-Za-z]+)\s+'(\d{2})$/);
  if (!m) return null;
  const monthIdx = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    .findIndex(mn => mn.toLowerCase() === m[1].toLowerCase().slice(0, 3));
  if (monthIdx < 0) return null;
  return new Date(2000 + parseInt(m[2], 10), monthIdx, 15).getTime();
}

function gameMatchesAllExcept(game, skipDim) {
  if (skipDim !== 'store' && filterState.store !== 'All' && game.storefront !== filterState.store) return false;
  if (skipDim !== 'decky' && filterState.decky !== 'All') {
    const r = (game.decky_rating || '').toLowerCase();
    const opt = RATING_OPTIONS.find(o => o.value === filterState.decky);
    if (!opt || !opt.match(r)) return false;
  }
  if (skipDim !== 'pro' && filterState.pro !== 'All') {
    const r = (game.standalone_rating || '').toLowerCase();
    const opt = RATING_OPTIONS.find(o => o.value === filterState.pro);
    if (!opt || !opt.match(r)) return false;
  }
  if (skipDim !== 'recent' && filterState.recent) {
    const t = parseDateTested(game.date_tested);
    if (t === null || t < Date.now() - NINETY_DAYS_MS) return false;
  }
  if (skipDim !== 'linux' && filterState.linux) {
    // Scope to GOG + itch only — the storefronts that actually distribute
    // the native Linux build. Epic/Amazon ship Windows-only even when a
    // Linux build exists on Steam, so including them here would surface
    // games where the badge wouldn't render on the detail page.
    if (game.native_linux !== true) return false;
    if (game.storefront !== 'GOG' && game.storefront !== 'itch') return false;
  }
  if (skipDim !== 'search' && filterState.search) {
    // Tokenize: every whitespace-separated word must appear somewhere in the
    // searchable text. Lets multi-word queries like "celeste indie" match a
    // game whose title and publisher both mention those words in any order.
    const tokens = filterState.search.toLowerCase().split(/\s+/).filter(Boolean);
    const haystack = (game.title + ' ' + (game.publisher || '')).toLowerCase();
    if (!tokens.every(t => haystack.includes(t))) return false;
  }
  return true;
}

function applyFilters() {
  if (!gamesData) return;
  filteredGames = gamesData.games.filter(g => gameMatchesAllExcept(g, null));
  sortGames();
  currentPage = 1;
  updateTable();
  renderFilterBarPills();
  updateStatActive();
  updateMobileBadge();
  if (document.querySelector('.filter-drawer')) {
    renderMobileDrawerBody();
    updateDrawerDoneCount();
  }
}

function clearAllFilters() {
  filterState.store = 'All';
  filterState.decky = 'All';
  filterState.pro = 'All';
  filterState.recent = false;
  applyFilters();
}

// Live counts for popover options — pool excludes the dimension being counted,
// so each option's count reflects "what would be selected if I picked this on
// top of all my OTHER current filters".
function computePopoverCounts(dim) {
  const pool = gamesData.games.filter(g => gameMatchesAllExcept(g, dim));
  if (dim === 'store') {
    const counts = { All: pool.length };
    for (const o of STORE_OPTIONS) if (o.value !== 'All') counts[o.value] = 0;
    for (const g of pool) if (counts[g.storefront] !== undefined) counts[g.storefront]++;
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
  return {};
}

// Pill-label count: how many games match this dim's selection AND all other
// currently-active filters. Gives an accurate "narrowed result" count that
// matches what the table actually shows.
function computePillCount(dim) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') {
    return gamesData.games.filter(g => gameMatchesAllExcept(g, null)).length;
  }
  if (dim === 'recent') {
    const cutoff = Date.now() - NINETY_DAYS_MS;
    return gamesData.games.filter(g => {
      const t = parseDateTested(g.date_tested);
      return t !== null && t >= cutoff;
    }).length;
  }
  if (dim === 'linux') {
    return gamesData.games.filter(g =>
      g.native_linux === true && (g.storefront === 'GOG' || g.storefront === 'itch')
    ).length;
  }
  return 0;
}

// ---- Filter mutations ------------------------------------------------------

function setFilter(dim, value) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') filterState[dim] = value;
  else if (dim === 'recent') filterState.recent = !!value;
  else if (dim === 'linux') filterState.linux = !!value;
  else if (dim === 'search') filterState.search = value || '';
  // Decky and Pro are alternative views, not stackable filters. Picking a
  // rating on one auto-clears the other so users don't get an empty table
  // from AND-combining e.g. Decky=Works + Pro=Works on Amazon games where
  // Decky has no coverage.
  if (dim === 'decky' && value !== 'All') filterState.pro = 'All';
  else if (dim === 'pro' && value !== 'All') filterState.decky = 'All';
  applyFilters();
}

function clearFilter(dim) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') filterState[dim] = 'All';
  else if (dim === 'recent') filterState.recent = false;
  else if (dim === 'linux') filterState.linux = false;
  else if (dim === 'search') filterState.search = '';
  applyFilters();
}

function isDimActive(dim) {
  if (dim === 'store')  return filterState.store !== 'All';
  if (dim === 'decky')  return filterState.decky !== 'All';
  if (dim === 'pro')    return filterState.pro !== 'All';
  if (dim === 'recent') return filterState.recent;
  if (dim === 'linux')  return filterState.linux;
  return false;
}

function formatPillLabel(dim) {
  const base = DIMENSION_LABEL[dim];
  if (!isDimActive(dim)) return base;
  return `${base} (${computePillCount(dim)})`;
}

// ---- Filter bar rendering --------------------------------------------------

const mobileMql = window.matchMedia('(max-width: 700px)');
const isMobile = () => mobileMql.matches;
mobileMql.addEventListener('change', () => {
  closeMobileDrawer();
  renderFilterBar();
});

function renderFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  if (isMobile()) {
    bar.innerHTML = `
      <input class="filter-bar__search" type="search" placeholder="Search games or publishers…"
             value="${escapeAttr(filterState.search)}" aria-label="Search games">
      <button class="filter-bar__mobile-btn" type="button" data-mobile-filters>
        🎛 Filters
        <span class="filter-bar__mobile-badge" data-mobile-badge hidden></span>
      </button>
      <div class="filter-bar__show">
        Show
        <select aria-label="Page size">
          <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
          <option value="20" ${pageSize === 20 ? 'selected' : ''}>20</option>
          <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
        </select>
      </div>
    `;
    wireBarStaticControls(bar);
    bar.querySelector('[data-mobile-filters]').addEventListener('click', openMobileDrawer);
    updateMobileBadge();
    return;
  }

  bar.innerHTML = `
    <div class="filter-bar__col-1">
      <input class="filter-bar__search" type="search" placeholder="Search games or publishers…"
             value="${escapeAttr(filterState.search)}" aria-label="Search games">
      <div class="filter-bar__show">
        Show
        <select aria-label="Page size">
          <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
          <option value="20" ${pageSize === 20 ? 'selected' : ''}>20</option>
          <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
        </select>
      </div>
      <!-- Native Linux toggle DISABLED pending manual verification of each
           Linux-flagged game. Filter logic in gameMatchesAllExcept and the
           data field native_linux remain in place; re-enabling is just
           restoring the button block here.

      <button type="button" class="filter-bar__linux-toggle${filterState.linux ? ' is-active' : ''}"
              data-dim="linux" title="Show only games with a native Linux build"
              aria-pressed="${filterState.linux ? 'true' : 'false'}">
        🐧 <span class="filter-bar__linux-toggle-label">Native Linux</span>${filterState.linux ? '<span class="filter-bar__linux-toggle-clear" aria-hidden="true">×</span>' : ''}
      </button>
      -->
    </div>
  `;
  wireBarStaticControls(bar);
  renderFilterBarPills();
}

function wireBarStaticControls(bar) {
  bar.querySelector('.filter-bar__search').addEventListener('input', e => {
    filterState.search = e.target.value;
    applyFiltersDebounced();
  });
  bar.querySelector('.filter-bar__show select').addEventListener('change', e => {
    pageSize = parseInt(e.target.value, 10);
    currentPage = 1;
    updateTable();
  });
  const linuxBtn = bar.querySelector('.filter-bar__linux-toggle');
  if (linuxBtn) {
    linuxBtn.addEventListener('click', () => {
      setFilter('linux', !filterState.linux);
      // Re-render the bar so the active class + clear (×) reflect the new state.
      renderFilterBar();
    });
  }
}

function updateMobileBadge() {
  const badge = document.querySelector('[data-mobile-badge]');
  if (!badge) return;
  const n = ['store','decky','pro','recent','linux'].filter(isDimActive).length;
  badge.textContent = n;
  badge.hidden = n === 0;
}

function renderFilterBarPills() {
  const bar = document.getElementById('filterBar');
  if (!bar || isMobile()) return;

  // Remove existing pills (keep cell-1 untouched so search retains focus)
  bar.querySelectorAll(':scope > .filter-pill').forEach(el => el.remove());

  for (const dim of PINNED_DIMS) {
    const active = isDimActive(dim);
    const isToggle = dim === 'recent' || dim === 'linux'; // boolean dims have no popover
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'filter-pill' + (active ? ' is-active' : '') + (isToggle ? ' is-toggle' : '');
    pill.dataset.dim = dim;
    // Inactive: show ▾ for dropdown pills, nothing for toggle pills.
    // Active:   show × clear button for all.
    const indicator = active
      ? `<span class="filter-pill__clear" data-clear="${dim}" role="button" aria-label="Clear ${DIMENSION_LABEL[dim]}">×</span>`
      : (isToggle ? '' : `<span class="filter-pill__arrow">▾</span>`);
    pill.innerHTML = `<span class="filter-pill__label">${formatPillLabel(dim)}</span>${indicator}`;
    pill.addEventListener('click', e => {
      if (e.target.closest('[data-clear]')) return;
      onPillClick(dim, pill);
    });
    pill.querySelector('[data-clear]')?.addEventListener('click', e => {
      e.stopPropagation();
      clearFilter(dim);
    });
    bar.appendChild(pill);
  }
}

// Click handler — popover for store/decky/pro; direct toggle for recent + linux.
function onPillClick(dim, pill) {
  if (dim === 'recent' || dim === 'linux') {
    setFilter(dim, !filterState[dim]);
    return;
  }
  togglePopover(dim, pill);
}

// ---- Sync bar grid to table column widths ---------------------------------
// The bar uses CSS grid with template-columns set from the table's actual
// column widths so pills sit centered above their column. Re-run on resize.

function syncBarToTable() {
  const bar = document.getElementById('filterBar');
  const headers = document.querySelectorAll('#gamesTable thead th');
  if (!bar || headers.length !== 5) return;
  headers.forEach((th, i) => {
    bar.style.setProperty(`--col-${i + 1}-w`, `${th.getBoundingClientRect().width}px`);
  });
}

// ---- Popovers --------------------------------------------------------------

let openPopoverDim = null;

function togglePopover(dim, anchorPill) {
  if (openPopoverDim === dim) { closePopover(); return; }
  closePopover();
  openPopover(dim, anchorPill);
}

function openPopover(dim, anchorPill) {
  openPopoverDim = dim;
  anchorPill.classList.add('is-open');

  const counts = computePopoverCounts(dim);
  const pop = document.createElement('div');
  pop.className = 'filter-popover';
  pop.dataset.dim = dim;
  pop.innerHTML = renderPopoverContent(dim, counts);

  document.getElementById('filterBar').appendChild(pop);
  positionPopover(pop, anchorPill);

  bindPopoverEvents(pop, dim);

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
  } else if (dim === 'decky' || dim === 'pro') {
    // Single-select like Store: "Any rating" option to clear, then ratings
    const totalPool = gamesData.games.filter(g => gameMatchesAllExcept(g, dim)).length;
    const allRow = `
      <label class="filter-popover__opt">
        <input type="radio" name="popover-${dim}" value="All" ${filterState[dim] === 'All' ? 'checked' : ''}>
        Any rating
        <span class="filter-popover__count">${totalPool}</span>
      </label>`;
    const ratings = RATING_OPTIONS.map(o => {
      const checked = filterState[dim] === o.value;
      const ct = counts[o.value] !== undefined ? counts[o.value] : 0;
      return `
        <label class="filter-popover__opt">
          <input type="radio" name="popover-${dim}" value="${o.value}" ${checked ? 'checked' : ''}>
          ${o.label}
          <span class="filter-popover__count">${ct}</span>
        </label>`;
    }).join('');
    body = allRow + ratings;
  }

  // No footer — single-select dims apply on change and close.
  return head + `<div class="filter-popover__body">${body}</div>`;
}

function bindPopoverEvents(pop, dim) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') {
    pop.querySelectorAll('input[type="radio"]').forEach(r => {
      r.addEventListener('change', () => {
        setFilter(dim, r.value);
        closePopover();
      });
    });
  }
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
  document.querySelector('.filter-popover')?.remove();
  document.querySelectorAll('.filter-pill.is-open').forEach(p => p.classList.remove('is-open'));
  openPopoverDim = null;
  document.removeEventListener('mousedown', onDocMouseDown);
  document.removeEventListener('keydown', onDocKeyDown);
}

function onDocMouseDown(e) {
  if (e.target.closest('.filter-popover, .filter-pill')) return;
  closePopover();
}

function onDocKeyDown(e) {
  if (e.key === 'Escape') closePopover();
}

// ---- Mobile drawer --------------------------------------------------------

function openMobileDrawer() {
  if (document.querySelector('.filter-drawer')) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'filter-drawer-backdrop';

  const drawer = document.createElement('aside');
  drawer.className = 'filter-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'Filters');
  drawer.innerHTML = `
    <header class="filter-drawer__head">
      <h3>Filters</h3>
      <button class="filter-drawer__close" type="button" aria-label="Close filters">&times;</button>
    </header>
    <div class="filter-drawer__body" id="filterDrawerBody"></div>
    <footer class="filter-drawer__foot">
      <button class="filter-drawer__clear" type="button">Clear all</button>
      <button class="filter-drawer__done" type="button" data-result-count>Show ${filteredGames.length} games</button>
    </footer>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);
  document.body.classList.add('filter-drawer-open');

  renderMobileDrawerBody();

  // Trigger CSS transitions
  requestAnimationFrame(() => {
    backdrop.classList.add('is-visible');
    drawer.classList.add('is-open');
  });

  drawer.querySelector('.filter-drawer__close').addEventListener('click', closeMobileDrawer);
  drawer.querySelector('.filter-drawer__clear').addEventListener('click', clearAllFilters);
  drawer.querySelector('.filter-drawer__done').addEventListener('click', closeMobileDrawer);
  backdrop.addEventListener('click', closeMobileDrawer);
  document.addEventListener('keydown', onDrawerKeyDown);
}

function closeMobileDrawer() {
  const drawer = document.querySelector('.filter-drawer');
  const backdrop = document.querySelector('.filter-drawer-backdrop');
  if (!drawer) return;
  drawer.classList.remove('is-open');
  backdrop?.classList.remove('is-visible');
  document.body.classList.remove('filter-drawer-open');
  document.removeEventListener('keydown', onDrawerKeyDown);
  setTimeout(() => {
    drawer.remove();
    backdrop?.remove();
  }, 250);
}

function onDrawerKeyDown(e) {
  if (e.key === 'Escape') closeMobileDrawer();
}

function renderMobileDrawerBody() {
  const body = document.getElementById('filterDrawerBody');
  if (!body) return;

  const ratingOpts = [{ value: 'All', label: 'Any rating' }, ...RATING_OPTIONS];
  body.innerHTML = `
    ${renderDrawerSection('store', 'Store', STORE_OPTIONS)}
    ${renderDrawerSection('decky', 'Decky Plugin', ratingOpts)}
    ${renderDrawerSection('pro', 'Junk Store Pro', ratingOpts)}
    ${renderDrawerToggle('recent', 'Tested in last 90 days')}
  `;

  body.querySelectorAll('[data-drawer-chip]').forEach(chip => {
    chip.addEventListener('click', () => {
      setFilter(chip.dataset.drawerChip, chip.dataset.value);
    });
  });
  body.querySelectorAll('[data-drawer-toggle]').forEach(t => {
    t.addEventListener('click', () => {
      const dim = t.dataset.drawerToggle;
      setFilter(dim, !filterState[dim]);
    });
  });
}

function renderDrawerSection(dim, title, options) {
  const counts = computePopoverCounts(dim);
  const chips = options.map(o => {
    const active = (filterState[dim] || 'All') === o.value;
    let countSpan = '';
    if (o.value !== 'All' && counts[o.value] !== undefined) {
      countSpan = `<span class="filter-drawer__chip-count">${counts[o.value]}</span>`;
    }
    return `<button type="button" class="filter-drawer__chip ${active ? 'is-active' : ''}" data-drawer-chip="${dim}" data-value="${o.value}">${o.label}${countSpan}</button>`;
  }).join('');
  return `
    <section class="filter-drawer__section">
      <h4>${title}</h4>
      <div class="filter-drawer__chips">${chips}</div>
    </section>
  `;
}

function renderDrawerToggle(dim, title) {
  const active = !!filterState[dim];
  return `
    <section class="filter-drawer__section">
      <button type="button" class="filter-drawer__row-toggle ${active ? 'is-on' : ''}" data-drawer-toggle="${dim}" aria-pressed="${active}">
        <span class="filter-drawer__row-label">${title}</span>
        <span class="filter-drawer__row-switch" aria-hidden="true"></span>
      </button>
    </section>
  `;
}

function updateDrawerDoneCount() {
  const btn = document.querySelector('[data-result-count]');
  if (!btn) return;
  const n = filteredGames.length;
  btn.textContent = n === 0 ? 'No matches' : `Show ${n} games`;
}

// ---- Search debounce -------------------------------------------------------

let searchTimer = null;
function applyFiltersDebounced() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(applyFilters, 120);
}

function debounce(fn, ms) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

// ---- Table rendering -------------------------------------------------------

function getCompatibilityDisplay(rating) {
  // Keep in sync with the rating legend (RATING_OPTIONS) + game-page-status-icon.html
  // so table cells, the filter legend, and game pages all show the same 6 states.
  const dot = (cls, label) =>
    `<span class="compatibility-rating"><span class="${cls}" title="${label}" aria-label="${label}"></span></span>`;
  switch (rating) {
    case 'green':
    case 'perfect':     return dot('dot dot--green', 'Works out of the box');
    case 'yellow':      return dot('dot dot--yellow', 'Some setup required');
    case 'red':         return dot('dot dot--red', 'Advanced setup required');
    case 'broken':      return `<span class="compatibility-rating" title="Currently broken">${ratingIcon('broken', false)}</span>`;
    case 'unsupported': return `<span class="compatibility-rating" title="Pro only">${ratingIcon('unsupported', false)}</span>`;
    default:            return dot('dot', 'Not tested'); // empty / unknown -> grey untested dot
  }
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
          <span class="game-link clickable">${game.title}</span>
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
  syncBarToTable(); // table widths may have changed (anti-cheat colspan etc)

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

// ---- Row click handler (delegated, fires once on tbody) -------------------
// Whole row navigates to the static game page. Text selection is preserved:
// if the user dragged to select text, we skip navigation.

function bindRowClicks() {
  const tbody = document.getElementById('gamesTableBody');
  if (!tbody || tbody.dataset.clickBound) return;
  tbody.dataset.clickBound = '1';
  tbody.addEventListener('click', e => {
    const tr = e.target.closest('tr');
    if (!tr || !tr.dataset.gameSlug) return;
    // Skip if the user selected text rather than clicked.
    const sel = window.getSelection();
    if (sel && sel.toString().length > 0) return;
    const slug = tr.dataset.gameSlug;
    const storefront = tr.dataset.gameStorefront;
    if (!slug || !storefront) return;
    window.location.href = `/games/${storefront}/${slug}/`;
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

    // ?search=mafia — carries the games-hub search box's text over when the
    // user hits Enter (form posts here). Without this, the term gets lost
    // and the visitor sees the unfiltered table. The search input was
    // already painted before this runs, so also refresh its visible value.
    const searchTerm = params.get('search');
    if (searchTerm) {
      filterState.search = searchTerm;
      const searchInput = document.querySelector('.filter-bar__search');
      if (searchInput) searchInput.value = searchTerm;
      applyFilters();
    }
  } catch (err) {
    console.error('Error processing URL parameters:', err);
  }
}

// ---- Misc setup ------------------------------------------------------------

function setupEventListeners() {
  bindRowClicks();
  bindStatRowClicks();

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) backToTop.style.setProperty('display', 'block', 'important');
      else backToTop.style.setProperty('display', 'none', 'important');
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

function escapeAttr(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

document.addEventListener('DOMContentLoaded', loadGamesData);
