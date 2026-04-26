// Global variables
let gamesData = null;
let filteredGames = [];
let currentPage = 1;
let pageSize = 20;

// Load games data from the build-time slim JSON.
async function loadGamesData() {
  try {
    const response = await fetch('/assets/data/games-table.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    gamesData = await response.json();
    console.log(`✅ Loaded ${gamesData.total_games} games`);

    populateStats();
    filteredGames = [...gamesData.games];
    sortGames();
    updateTable();
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

// Populate statistics
function populateStats() {
  const stats = document.getElementById('gamesStats');
  stats.innerHTML = `
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">${gamesData.total_games}</span>
        <span class="stat-label">Total Games</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.Epic.total}</span>
        <span class="stat-label">Epic Games</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.GOG.total}</span>
        <span class="stat-label">GOG</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.Amazon.total}</span>
        <span class="stat-label">Amazon</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.itch.total}</span>
        <span class="stat-label">itch</span>
      </div>
    </div>
  `;
}

// Sort games alphabetically by title.
function sortGames() {
  filteredGames.sort((a, b) => a.title.localeCompare(b.title));
}

// Get compatibility display for ratings
function getCompatibilityDisplay(rating) {
  if (!rating) return '<span class="compatibility-na">Not tested</span>';
  
  const ratingMap = {
    'green': '✅',
    'Perfect': '✅',  // Handle Perfect ratings as green checkmarks
    'yellow': '🟡',
    'red': '🔧',
    'not-working': '❌',
    'not-supported': '🚫'
  };

  return `<span class="compatibility-rating">${ratingMap[rating] || '❓'}</span>`;
}

// Update table with current page
function updateTable() {
  const tbody = document.getElementById('gamesTableBody');
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filteredGames.length);
  const pageGames = filteredGames.slice(startIdx, endIdx);

  console.log(`Page ${currentPage}: showing ${pageGames.length} games (${startIdx}-${endIdx}) of ${filteredGames.length} total, pageSize: ${pageSize}`);
  
  // Add info row on every page
  const infoRow = `
    <tr class="info-row">
      <td colspan="5" style="text-align: center !important; padding: 14px !important; font-weight: bold !important; color: #ffa366 !important; font-size: 1.05rem !important;">
        Click any game title for detailed compatibility info, testing notes, controller configs, and more
      </td>
    </tr>
    `;

  const tableHTML = pageGames.map(game => {
    // Check if this is an anti-cheat game
    const isAntiCheat = game.cant_test_linux === true;

    // Generate unique ID for this game entry (slug + storefront)
    const gameEntryId = `game-${game.slug}-${game.storefront.toLowerCase().replace(/\./g, '-')}`;

    const storefrontDir = game.storefront.toLowerCase(); // 'epic' | 'gog' | 'amazon' | 'itch'

    return `
    <tr id="${gameEntryId}" data-storefront="${game.storefront}" data-game-slug="${game.slug}" data-game-storefront="${storefrontDir}">
      <td title="${game.title}">
        ${isAntiCheat ?
          `<span class="game-title-static">${game.title}</span>` :
          `<span class="game-link clickable" data-game-slug="${game.slug}" data-storefront="${storefrontDir}">${game.title}</span>`
        }
      </td>
      <td>
        <span class="store-badge ${storefrontDir}">${game.storefront}</span>
      </td>
      ${isAntiCheat ?
        `<td colspan="2" class="anticheat-warning">⚠️ Incompatible - Anti Cheat</td>` :
        `<td class="compatibility-rating">${getCompatibilityDisplay(game.decky_rating)}</td>
         <td class="compatibility-rating">${getCompatibilityDisplay(game.standalone_rating)}</td>`
      }
      <td>${game.date_tested || ''}</td>
    </tr>
    `;
  }).join('');

  const finalHTML = infoRow + tableHTML;

  console.log('Generated HTML length:', finalHTML.length);
  console.log('Setting tbody innerHTML...');
  tbody.innerHTML = finalHTML;
  console.log('tbody rows after setting:', tbody.children.length);

  updatePagination();

  // Re-add row click handlers after table update
  addRowClickHandlers();

  // Stamp Free-Now pills on rows whose game is currently being given away.
  if (window.FreeGames && window.FreeGames.applyBadges) {
    window.FreeGames.ready().then(() => window.FreeGames.applyBadges(tbody));
  }
}

// Update pagination controls
function updatePagination() {
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, filteredGames.length);
  
  // Update info
  document.getElementById('paginationInfo').textContent = 
    `Showing ${startIdx}-${endIdx} of ${filteredGames.length} games`;
  
  // Update controls
  const controls = document.getElementById('paginationControls');
  let html = '';
  
  // Previous button
  html += `<button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" 
           onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
           ← Previous</button>`;
  
  // Page numbers (simplified - show first, current-1, current, current+1, last)
  const pagesToShow = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    pagesToShow.push(1);
    if (currentPage > 3) pagesToShow.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pagesToShow.push(i);
    }
    if (currentPage < totalPages - 2) pagesToShow.push('...');
    if (totalPages > 1) pagesToShow.push(totalPages);
  }
  
  pagesToShow.forEach(page => {
    if (page === '...') {
      html += '<span class="pagination-ellipsis">...</span>';
    } else {
      html += `<button class="pagination-btn ${page === currentPage ? 'active' : ''}" 
               onclick="changePage(${page})">${page}</button>`;
    }
  });
  
  // Next button
  html += `<button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" 
           onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
           Next →</button>`;
  
  controls.innerHTML = html;
}

// Change page
function changePage(page) {
  const totalPages = Math.ceil(filteredGames.length / pageSize);
  if (page < 1 || page > totalPages) return;
  
  currentPage = page;
  updateTable();
  
  // Scroll to top of table
  document.querySelector('.games-table-wrapper').scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
  });
}

// Filter table
function filterTable() {
  if (!gamesData) return;
  
  const storeValue = document.getElementById('storefrontFilter').value;
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  
  filteredGames = gamesData.games.filter(game => {
    const storeMatches = (storeValue === 'All' || game.storefront === storeValue);
    const searchMatches = game.title.toLowerCase().includes(searchValue) || 
                         (game.publisher && game.publisher.toLowerCase().includes(searchValue));
    
    return storeMatches && searchMatches;
  });
  
  sortGames(); // Re-sort after filtering
  currentPage = 1; // Reset to first page
  updateTable();
}

// Change page size
function changePageSize() {
  pageSize = parseInt(document.getElementById('pageSizeSelect').value);
  currentPage = 1; // Reset to first page
  updateTable();
}

// Honour URL parameters on /games/tested/.
//   ?store=epic               → filter the table to Epic only
//   ?store=epic&id=ABC        → redirect to the matching static game page
//   ?game=Game%20Title        → redirect to the matching static game page
function checkForGameParameter() {
  try {
    const params = new URLSearchParams(window.location.search);
    const store = params.get('store');
    const databaseId = params.get('id');
    const gameName = params.get('game');

    const STORE_MAP = {
      'epic': 'Epic',
      'gog': 'GOG',
      'amazon': 'Amazon',
      'itch': 'itch',
      'itch.io': 'itch'
    };

    // Game-deep-link by store + databaseId → redirect to static page
    if (store && databaseId) {
      const normalized = STORE_MAP[store.toLowerCase()];
      if (!normalized) return;
      const game = gamesData.games.find(g =>
        g.storefront === normalized && g.databaseId === databaseId
      );
      if (game) {
        window.location.replace(`/games/${normalized.toLowerCase()}/${game.slug}/`);
      }
      return;
    }

    // Game-deep-link by exact title → redirect to static page
    if (gameName) {
      const decoded = decodeURIComponent(gameName.replace(/\+/g, ' '));
      const game = gamesData.games.find(g => g.title === decoded);
      if (game) {
        window.location.replace(`/games/${game.storefront.toLowerCase()}/${game.slug}/`);
      }
      return;
    }

    // Store-only filter
    if (store) {
      const normalized = STORE_MAP[store.toLowerCase()];
      if (normalized) {
        document.getElementById('storefrontFilter').value = normalized;
        filterTable();
      }
    }
  } catch (err) {
    console.error('Error processing URL parameters:', err);
  }
}

// Wire game-row title clicks to navigate to the static game page.
function addRowClickHandlers() {
  const gameLinks = document.querySelectorAll('.game-link.clickable');
  gameLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const slug = link.dataset.gameSlug;
      const storefront = link.dataset.storefront;
      if (!slug || !storefront) return;
      window.location.href = `/games/${storefront}/${slug}/`;
    });
  });
}

// Setup event listeners
function setupEventListeners() {
  // Filter controls
  document.getElementById('storefrontFilter').addEventListener('change', filterTable);
  document.getElementById('searchInput').addEventListener('input', handleSearchInput);
  document.getElementById('pageSizeSelect').addEventListener('change', changePageSize);
  
  // Add row click handlers
  addRowClickHandlers();
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.setProperty('display', 'block', 'important');
      } else {
        backToTop.style.setProperty('display', 'none', 'important');
      }
    });
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Clear search button
  const clearSearchBtn = document.getElementById('clearSearch');
  clearSearchBtn.addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchInput.focus();
    filterTable();
    toggleClearButton();
  });
}

// Handle search input with clear button visibility
function handleSearchInput() {
  filterTable();
  toggleClearButton();
}

// Toggle clear button visibility
function toggleClearButton() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  
  if (searchInput.value.length > 0) {
    clearBtn.classList.add('show');
  } else {
    clearBtn.classList.remove('show');
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadGamesData);
