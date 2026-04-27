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
  search: ''               // free-text
};

const RATING_OPTIONS = [
  { value: 'perfect',     label: '✅ Works',          match: r => r === 'green' || r === 'perfect' },
  { value: 'yellow',      label: '🟡 Minor setup',    match: r => r === 'yellow' },
  { value: 'red',         label: '🔧 Advanced setup', match: r => r === 'red' },
  { value: 'broken',      label: '❌ Broken',         match: r => r === 'not-working' },
  { value: 'unsupported', label: '🚫 Unsupported',    match: r => r === 'not-supported' },
  { value: 'untested',    label: '❓ Untested',       match: r => !r || !['green','perfect','yellow','red','not-working','not-supported'].includes(r) }
];

const STORE_OPTIONS = [
  { value: 'All',    label: 'All Stores' },
  { value: 'Epic',   label: 'Epic' },
  { value: 'GOG',    label: 'GOG' },
  { value: 'Amazon', label: 'Amazon' },
  { value: 'itch',   label: 'itch' }
];

// Pills always pinned in the bar, in order. Each maps to a table column.
const PINNED_DIMS = ['store', 'decky', 'pro', 'recent'];

const DIMENSION_LABEL = {
  store:  'Store',
  decky:  'Decky',
  pro:    'Pro',
  recent: 'Last 90 days'
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
  if (skipDim !== 'search' && filterState.search) {
    const s = filterState.search.toLowerCase();
    const inTitle = game.title.toLowerCase().includes(s);
    const inPub = game.publisher && game.publisher.toLowerCase().includes(s);
    if (!inTitle && !inPub) return false;
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

// Pill-label count: how many games match THIS dim's selection, against the
// full dataset (independent of other filters). Gives stable "this is what
// you've narrowed to" feedback in the pill text.
function computePillCount(dim) {
  if (dim === 'store') {
    return gamesData.games.filter(g => g.storefront === filterState.store).length;
  }
  if (dim === 'decky' || dim === 'pro') {
    const field = dim === 'decky' ? 'decky_rating' : 'standalone_rating';
    const opt = RATING_OPTIONS.find(o => o.value === filterState[dim]);
    if (!opt) return 0;
    return gamesData.games.filter(g => opt.match((g[field] || '').toLowerCase())).length;
  }
  if (dim === 'recent') {
    const cutoff = Date.now() - NINETY_DAYS_MS;
    return gamesData.games.filter(g => {
      const t = parseDateTested(g.date_tested);
      return t !== null && t >= cutoff;
    }).length;
  }
  return 0;
}

// ---- Filter mutations ------------------------------------------------------

function setFilter(dim, value) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') filterState[dim] = value;
  else if (dim === 'recent') filterState.recent = !!value;
  else if (dim === 'search') filterState.search = value || '';
  applyFilters();
}

function clearFilter(dim) {
  if (dim === 'store' || dim === 'decky' || dim === 'pro') filterState[dim] = 'All';
  else if (dim === 'recent') filterState.recent = false;
  else if (dim === 'search') filterState.search = '';
  applyFilters();
}

function isDimActive(dim) {
  if (dim === 'store')  return filterState.store !== 'All';
  if (dim === 'decky')  return filterState.decky !== 'All';
  if (dim === 'pro')    return filterState.pro !== 'All';
  if (dim === 'recent') return filterState.recent;
  return false;
}

function formatPillLabel(dim) {
  const base = DIMENSION_LABEL[dim];
  if (!isDimActive(dim)) return base;
  return `${base} (${computePillCount(dim)})`;
}

// ---- Filter bar rendering --------------------------------------------------

function renderFilterBar() {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

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
    </div>
  `;

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
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  // Remove existing pills (keep cell-1 untouched so search retains focus)
  bar.querySelectorAll(':scope > .filter-pill').forEach(el => el.remove());

  for (const dim of PINNED_DIMS) {
    const active = isDimActive(dim);
    const isToggle = dim === 'recent'; // boolean dims have no popover
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

// Click handler — popover for store/decky/pro; direct toggle for recent.
function onPillClick(dim, pill) {
  if (dim === 'recent') {
    setFilter('recent', !filterState.recent);
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
  } catch (err) {
    console.error('Error processing URL parameters:', err);
  }
}

// ---- Misc setup ------------------------------------------------------------

function setupEventListeners() {
  bindRowClicks();

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
