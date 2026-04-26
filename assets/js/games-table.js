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

// Check for URL parameter and auto-open game modal
function checkForGameParameter() {
  try {
    const urlParams = new URLSearchParams(window.location.search);

    // Check for store + id parameters first (for JunkStore plugin)
    const store = urlParams.get('store');
    const databaseId = urlParams.get('id');
    const gameName = urlParams.get('game');

    // If only store parameter (no id or game), filter table by storefront
    if (store && !databaseId && !gameName) {
      const storeMap = {
        'epic': 'Epic',
        'gog': 'GOG',
        'amazon': 'Amazon',
        'itch': 'itch',
        'itch.io': 'itch'
      };
      const normalizedStore = storeMap[store.toLowerCase()];

      if (normalizedStore) {
        console.log(`🏪 Filtering table by store: ${normalizedStore}`);
        document.getElementById('storefrontFilter').value = normalizedStore;
        filterTable();
      }
      return;
    }

    if (store && databaseId) {
      console.log(`🎯 Auto-opening modal for store: ${store}, databaseId: ${databaseId}`);

      // Normalize storefront name for matching
      const storeMap = {
        'epic': 'Epic',
        'gog': 'GOG',
        'amazon': 'Amazon',
        'itch': 'itch',
        'itch.io': 'itch'
      };
      const normalizedStore = storeMap[store.toLowerCase()];

      if (!normalizedStore) {
        console.warn(`⚠️ Unknown store: ${store}`);
        return;
      }

      // Find game by storefront + databaseId
      const game = gamesData.games.find(g =>
        g.storefront === normalizedStore &&
        (g.databaseId === databaseId || (g._fullData && g._fullData.databaseId === databaseId))
      );

      if (game) {
        console.log(`✅ Found game by databaseId:`, game.title);
        // TODO Task 5: navigate to static game page
      } else {
        console.warn(`⚠️ Game not found for store: ${normalizedStore}, id: ${databaseId}`);
      }
      return;
    }

    // Fall back to game title parameter (gameName already declared above)
    if (!gameName) {
      return; // No game parameter found
    }

    console.log(`🎯 Auto-opening modal for game: ${gameName}`);

    // Decode URL parameter (handles spaces and special characters)
    const decodedGameName = decodeURIComponent(gameName.replace(/\+/g, ' '));

    // Find the game in the loaded data (exact title match)
    const game = gamesData.games.find(g => g.title === decodedGameName);

    if (!game) {
      console.warn(`⚠️ Game not found: ${decodedGameName}`);
      return;
    }

    console.log(`✅ Found game:`, game);
    // TODO Task 5: navigate to static game page

  } catch (error) {
    console.error('❌ Error processing game parameter:', error);
  }
}

// Check for URL hash and auto-open game modal
function checkForGameHash() {
  try {
    const hash = window.location.hash;

    if (!hash || !hash.startsWith('#game-')) {
      return; // No game hash found
    }

    console.log(`🎯 Auto-opening modal for hash: ${hash}`);

    // Extract game entry ID from hash (e.g., #game-hades-epic)
    const gameEntryId = hash.substring(1); // Remove the #

    // Parse the hash to extract slug and storefront
    // Format: game-{slug}-{storefront}
    const hashParts = gameEntryId.split('-');
    if (hashParts.length < 3) {
      console.warn(`⚠️ Invalid hash format: ${hash}`);
      return;
    }

    // Remove 'game' prefix and extract storefront from the end
    hashParts.shift(); // Remove 'game'
    const storefront = hashParts.pop().replace(/-/g, '.'); // Last part is storefront, restore dots
    const slug = hashParts.join('-'); // Remaining parts form the slug

    console.log(`📋 Parsed hash: slug="${slug}", storefront="${storefront}"`);

    // Find the game in the full dataset by slug and storefront
    const game = gamesData.games.find(g => {
      const gameStorefront = g.storefront.toLowerCase().replace(/\./g, '-');
      const targetStorefront = storefront.toLowerCase();
      return g.slug === slug && gameStorefront === targetStorefront;
    });

    if (!game) {
      console.warn(`⚠️ Game not found in dataset for hash: ${hash}`);
      return;
    }

    console.log(`✅ Found game via hash:`, game.title);

    // Calculate which page this game is on in the filtered list
    const gameIndex = filteredGames.findIndex(g => g.id === game.id);
    if (gameIndex === -1) {
      console.warn(`⚠️ Game not in filtered list: ${game.title}`);
      return;
    }

    // Switch to the correct page if needed
    const targetPage = Math.floor(gameIndex / pageSize) + 1;
    if (targetPage !== currentPage) {
      console.log(`📄 Switching to page ${targetPage} (game index: ${gameIndex})`);
      currentPage = targetPage;
      updateTable();
    }

    // Wait for table to render, then scroll and open modal
    setTimeout(() => {
      const gameRow = document.getElementById(gameEntryId);
      if (!gameRow) {
        console.warn(`⚠️ Game row not found after page switch: ${hash}`);
        return;
      }

      // Highlight the row temporarily
      gameRow.style.backgroundColor = 'rgba(255, 163, 102, 0.3)';
      setTimeout(() => {
        gameRow.style.backgroundColor = '';
      }, 2000);

      // Scroll to the game in the table first for context
      gameRow.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // TODO Task 5: navigate to static game page
    }, 300);

  } catch (error) {
    console.error('❌ Error processing game hash:', error);
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
