---
layout: splash
title: "Junk Store Game Compatibility"
description: "Complete compatibility database of Epic, GOG, Amazon & itch.io (beta) games tested on Steam Deck. Search hundreds of games with working status and setup notes."
permalink: /tested-games/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
excerpt: "Junk Store compatibility database of Epic, GOG, Amazon & itch.io (beta) games tested on Steam Deck."
---

<!-- Custom header height for this page -->
<style>
/* Force specific header height */
.layout--splash .page__hero--overlay {
  min-height: 300px !important;
  height: 300px !important;
  max-height: 300px !important;
}

/* Override default padding/margins with high specificity */
.layout--splash .page__hero--overlay .page__inner-wrap {
  position: relative !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.layout--splash .page__hero--overlay .page__title {
  margin-top: 0 !important;
  margin-bottom: 8px !important;
  padding-top: 70px !important;
  padding-bottom: 8px !important;
}

.layout--splash .page__hero--overlay .archive__item-excerpt {
  margin-bottom: 0 !important;
  padding-bottom: 70px !important;
}

.layout--splash .page__hero--overlay .archive__item-excerpt p {
  margin-bottom: 0 !important;
}

@media (max-width: 768px) {
  .layout--splash .page__hero--overlay {
    min-height: 250px !important;
    height: 250px !important;
    max-height: 250px !important;
  }
}
</style>

<div class="spacer mt-4"></div>

<!-- Featured Games Section -->
<div class="feature-box">
  <h3>This Week's Giveaways and Featured Games</h3>
  <div class="featured-row" id="featuredGamesContainer">
    <!-- Featured games will be populated by JavaScript -->
  </div>
</div>

<p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
  <strong>Note:</strong> Games tested by the Junk Store team use <strong>GE-Proton 10.26</strong>, as it consistently provides the best out-of-the-box compatibility.<br>
  To use the <strong>EOS overlay</strong> with Epic Games, you'll need <strong>GE-Proton 10.2 or newer</strong>.<br>
  Games that require a specific Proton version will have it listed in the <strong>compatibility details</strong>.
</p>

<!-- Games Statistics -->
<div id="gamesStats" class="games-stats">
  <!-- Stats will be populated by JavaScript -->
</div>

<!-- Table Controls -->
<div class="table-controls">
  <div class="control-group">
    <label for="storefrontFilter">Store:</label>
    <select id="storefrontFilter">
      <option value="All">All Stores</option>
      <option value="Epic">Epic</option>
      <option value="GOG">GOG</option>
      <option value="Amazon">Amazon</option>
      <option value="itch.io">itch.io</option>
    </select>
  </div>
  
  <div class="control-group">
    <label for="searchInput">Search:</label>
    <div class="search-input-wrapper">
      <input type="text" id="searchInput" placeholder="Type game name..." autocomplete="off" />
      <div class="search-clear-btn" id="clearSearch" title="Clear search">&times;</div>
    </div>
  </div>
  
  <div class="control-group">
    <label for="pageSizeSelect">Show:</label>
    <select id="pageSizeSelect">
      <option value="10">10 per page</option>
      <option value="20" selected>20 per page</option>
      <option value="50">50 per page</option>
    </select>
  </div>
</div>

<!-- Loading indicator -->
<div id="loadingIndicator" style="text-align: center; padding: 20px;">
  Loading games...
</div>

<!-- Compatibility Legend -->
<div class="compatibility-legend">
  <span class="legend-title">Compatibility:</span>
  <span class="legend-item">✅ Works Out of the Box</span>
  <span class="legend-item">🟡 Minor setup</span>
  <span class="legend-item">🔧 Advanced setup</span>
  <span class="legend-item">❌ Broken</span>
  <span class="legend-item">🚫 Unsupported</span>
  <span class="legend-item">❓ Untested</span>
</div>

<!-- Games Table -->
<div class="games-table-wrapper">
  <table id="gamesTable">
    <thead>
      <tr>
        <th>Game</th>
        <th>Store</th>
        <th>Decky Plugin</th>
        <th>2.0 Standalone</th>
        <th>Date Tested</th>
      </tr>
      <!-- Compatibility counts row - commented out for now
      <tr class="compatibility-counts">
        <th></th>
        <th></th>
        <th id="deckyWorksCount" class="works-count">✅ (0)</th>
        <th id="standaloneWorksCount" class="works-count">✅ (0)</th>
        <th></th>
      </tr>
      -->
    </thead>
    <tbody id="gamesTableBody">
      <!-- Table rows will be populated by JavaScript -->
    </tbody>
  </table>
</div>

<!-- Pagination -->
<div class="pagination-container" id="paginationContainer">
  <div class="pagination-info" id="paginationInfo">
    <!-- Will show "Showing X-Y of Z games" -->
  </div>
  <div class="pagination-controls" id="paginationControls">
    <!-- Page buttons will be added here -->
  </div>
</div>

<!-- Back to Top Button -->
<button id="backToTop" title="Back to top" aria-label="Back to top">
  <span style="display:block; font-size:1.5rem;">↑</span>
  <span style="display:block; font-size:0.8rem; font-weight:normal;">top</span>
</button>

<script>
// Global variables
let gamesData = null;
let filteredGames = [];
let currentPage = 1;
let pageSize = 20;
// Note: Weekly tested games are now identified via blog_category field in JSON data

// Note: Weekly tested games are now identified directly via blog_category field in JSON data

// Load games data
async function loadGamesData() {
  try {
    console.log('Loading games data from /assets/data/games-table.json');
    const response = await fetch('/assets/data/games-table.json');
    
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    gamesData = await response.json();
    console.log(`✅ Loaded ${gamesData.total_games} games successfully`);
    console.log('First 3 games:', gamesData.games.slice(0, 3));

    // Weekly tested games now identified via blog_category field

    // Initialize the page
    populateFeaturedGames();
    populateStats();
    filteredGames = [...gamesData.games];
    sortGames(); // Sort featured first, then alphabetically
    console.log(`Filtered games count: ${filteredGames.length}, pageSize: ${pageSize}`);
    updateTable();
    setupEventListeners();
    
    // Hide loading indicator
    document.getElementById('loadingIndicator').style.display = 'none';

    // Check for URL parameter to auto-open a game modal
    checkForGameParameter();

    // Check for URL hash to auto-open a game modal
    checkForGameHash();

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

// Estimate visual width of game entry for optimal packing
function estimateGameEntryWidth(game) {
  const titleLength = game.title.length;
  const storeLength = game.storefront.length;
  
  // Weight factors: title characters are wider than store badge
  // Add base padding/margin estimates
  const baseWidth = 40; // padding, borders, gaps
  const titleWeight = titleLength * 8; // ~8px per character for title
  const storeWeight = storeLength * 6; // ~6px per character for badge
  
  return baseWidth + titleWeight + storeWeight;
}

// Sort games by estimated width for better space utilization
function sortGamesByWidth(games) {
  return games
    .map(game => ({
      ...game,
      estimatedWidth: estimateGameEntryWidth(game)
    }))
    .sort((a, b) => {
      // Alternate between short and long titles for better packing
      // This creates a more balanced visual layout
      const aIndex = games.indexOf(a);
      const bIndex = games.indexOf(b);
      
      if (aIndex % 2 === 0) {
        return a.estimatedWidth - b.estimatedWidth; // Short first for even positions
      } else {
        return b.estimatedWidth - a.estimatedWidth; // Long first for odd positions
      }
    });
}

// Populate featured games
function populateFeaturedGames() {
  const featuredGames = gamesData.games.filter(game => game.is_featured);
  const container = document.getElementById('featuredGamesContainer');
  
  if (featuredGames.length === 0) {
    container.innerHTML = '<div class="featured-entry">No featured games at this time.</div>';
    return;
  }
  
  // Sort games for optimal space utilization
  const sortedGames = sortGamesByWidth(featuredGames);
  
  container.innerHTML = sortedGames.map(game => {
    const storefrontDir = game.storefront === 'itch.io' ? 'itch.io' : game.storefront.toLowerCase();
    return `
    <div class="featured-entry clickable" data-game-id="${game.id}" data-modal-file="games/${storefrontDir}/${game.slug}.json">
      <span class="featured-game-link">
        ${game.title}
      </span>
      <span class="store-badge ${game.storefront === 'itch.io' ? 'itch' : game.storefront.toLowerCase()}">${game.storefront.toLowerCase()}</span>
    </div>
    `;
  }).join('');
  
  // Re-add modal handlers for featured games
  addModalHandlers();
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
        <span class="stat-number">${gamesData.storefronts['itch.io'].total}</span>
        <span class="stat-label">itch.io</span>
      </div>
    </div>
  `;
}

// Sort games: featured first, then backlog/retest (alphabetized together), then regular games
function sortGames() {
  filteredGames.sort((a, b) => {
    // Featured games come first
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;

    // If neither are featured, prioritize backlog/retest games as one group
    const aIsBacklogRetest = a.blog_category === 'backlog' || a.blog_category === 'retest';
    const bIsBacklogRetest = b.blog_category === 'backlog' || b.blog_category === 'retest';

    if (aIsBacklogRetest && !bIsBacklogRetest) return -1;
    if (!aIsBacklogRetest && bIsBacklogRetest) return 1;

    // Then sort alphabetically by title (both within and across groups)
    return a.title.localeCompare(b.title);
  });
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

// Convert controller input to user-friendly game mode text
function getGameModeDisplay(controllerInput) {
  if (!controllerInput) return 'Unknown';
  
  const modeMap = {
    'native': '🎮 Controller Native',
    'mouse-only': '🖱️ Mouse Only',
    'keyboard-mouse': '⌨️ Keyboard + Mouse',
    'controller': '🎮 Controller',
    'touchpad': '👆 Touchpad',
    'mixed': '🎮🖱️ Mixed Input'
  };
  
  return modeMap[controllerInput.toLowerCase()] || `🎮 ${controllerInput}`;
}

// Format controller input for display
function formatControllerInput(controllerInput) {
  if (!controllerInput) return 'Not specified';
  
  const inputLower = controllerInput.toLowerCase();
  const formatMap = {
    'native': '🎮 Native Controller',
    'keyboard-mouse': '⌨️ Keyboard & Mouse',
    'controller': '🎮 Controller',
    'mouse-only': '🖱️ Mouse Only',
    'touchpad': '👆 Touchpad',
    'mixed': '🎮🖱️ Mixed Input'
  };
  
  // If it's a known mapping, use it
  if (formatMap[inputLower]) {
    return formatMap[inputLower];
  }
  
  // Otherwise, capitalize first letter and add gamepad emoji if not present
  const formatted = controllerInput.charAt(0).toUpperCase() + controllerInput.slice(1);
  return formatted.includes('🎮') ? formatted : `🎮 ${formatted}`;
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

    // Determine CSS classes for highlighting
    let rowClasses = '';
    if (game.is_featured) {
      rowClasses += 'featured-game ';
    }
    else if (game.blog_category === 'retest') {
      rowClasses += 'retest-game ';
    }
    else if (game.blog_category === 'backlog') {
      rowClasses += 'backlog-game ';
    }

    // Generate unique ID for this game entry (slug + storefront)
    const gameEntryId = `game-${game.slug}-${game.storefront.toLowerCase().replace(/\./g, '-')}`;

    return `
    <tr id="${gameEntryId}" class="${rowClasses.trim()}" data-storefront="${game.storefront}" data-status="${game.overall_status}">
      <td title="${game.title}">
        ${isAntiCheat ?
          `<span class="game-title-static">${game.title}</span>` :
          `<span class="game-link clickable" data-game-id="${game.id}" data-modal-file="games/${game.storefront === 'itch.io' ? 'itch.io' : game.storefront.toLowerCase()}/${game.slug}.json">${game.title}</span>`
        }
      </td>
      <td>
        <span class="store-badge ${game.storefront === 'itch.io' ? 'itch' : game.storefront.toLowerCase()}">${game.storefront.toLowerCase()}</span>
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
  // updateCompatibilityCounts(); // Commented out - compatibility counts row is hidden

  // Re-add modal handlers after table update
  addModalHandlers();
}

// Update compatibility counts in column headers
function updateCompatibilityCounts() {
  if (!gamesData) return;

  let deckyPerfectCount = 0;
  let standalonePerfectCount = 0;

  // Count games that work perfectly for each version
  filteredGames.forEach(game => {
    // Skip anti-cheat games
    if (game.cant_test_linux === true) return;

    // Check if Decky version works perfectly
    if (game.decky_rating && (game.decky_rating.toLowerCase() === 'green' || game.decky_rating.toLowerCase() === 'perfect')) {
      deckyPerfectCount++;
    }

    // Check if Standalone version works perfectly
    if (game.standalone_rating && (game.standalone_rating.toLowerCase() === 'green' || game.standalone_rating.toLowerCase() === 'perfect')) {
      standalonePerfectCount++;
    }
  });

  // Update the header counts
  document.getElementById('deckyWorksCount').textContent = `✅ (${deckyPerfectCount})`;
  document.getElementById('standaloneWorksCount').textContent = `✅ (${standalonePerfectCount})`;
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
    const gameName = urlParams.get('game');

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

    // Calculate which page this game is on
    const gameIndex = filteredGames.findIndex(g => g.id === game.id);
    if (gameIndex === -1) {
      console.warn(`⚠️ Game not in filtered list: ${decodedGameName}`);
      return;
    }

    // Switch to the correct page if needed
    const targetPage = Math.floor(gameIndex / pageSize) + 1;
    if (targetPage !== currentPage) {
      console.log(`📄 Switching to page ${targetPage} (game index: ${gameIndex})`);
      currentPage = targetPage;
      updateTable();
    }

    // Scroll to the game in the table first for context
    setTimeout(() => {
      const gameRow = document.querySelector(`[data-game-id="${game.id}"]`);
      if (gameRow) {
        gameRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Open the modal after a brief delay to allow scroll
      setTimeout(() => {
        const storefrontDir = game.storefront === 'itch.io' ? 'itch.io' : game.storefront.toLowerCase();
        const modalFile = `games/${storefrontDir}/${game.slug}.json`;
        openGameModal(game.id, modalFile);
      }, 500);
    }, 300);

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

      // Open the modal after a brief delay to allow scroll
      setTimeout(() => {
        const storefrontDir = game.storefront === 'itch.io' ? 'itch.io' : game.storefront.toLowerCase();
        const modalFile = `games/${storefrontDir}/${game.slug}.json`;
        openGameModal(game.id, modalFile);
      }, 500);
    }, 300);

  } catch (error) {
    console.error('❌ Error processing game hash:', error);
  }
}

// Add modal click handlers
function addModalHandlers() {
  // Handle clickable game links in table
  const gameLinks = document.querySelectorAll('.game-link.clickable');
  gameLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const gameId = e.target.dataset.gameId;
      const modalFile = e.target.dataset.modalFile;
      await openGameModal(gameId, modalFile);
    });
  });

  // Handle clickable featured game entries (entire div is clickable)
  const featuredEntries = document.querySelectorAll('.featured-entry.clickable');
  featuredEntries.forEach(entry => {
    entry.addEventListener('click', async (e) => {
      e.preventDefault();
      const gameId = entry.dataset.gameId;
      const modalFile = entry.dataset.modalFile;
      await openGameModal(gameId, modalFile);
    });
  });
}

// Open game modal
async function openGameModal(gameId, modalFile) {
  try {
    console.log(`Opening modal for game: ${gameId}, modal file: ${modalFile}`);
    
    // Show loading state
    const loadingModal = document.createElement('div');
    loadingModal.className = 'game-modal show';
    loadingModal.innerHTML = `
      <div class="modal-backdrop">
        <div class="modal-content">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 2rem; color: #ffa366;">Loading...</div>
            <p style="margin-top: 20px; color: #ccc;">Loading game details...</p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(loadingModal);

    // Find basic game info from table data
    const basicGame = gamesData.games.find(g => g.id === gameId);
    if (!basicGame) {
      throw new Error('Game not found in table data');
    }
    
    // Load detailed game data from individual JSON file
    let detailedGame = basicGame; // fallback to basic data
    
    if (modalFile) {
      try {
        console.log(`Fetching detailed game data from: /assets/data/${modalFile}`);
        const detailResponse = await fetch(`/assets/data/${modalFile}`);
        if (detailResponse.ok) {
          const detailedData = await detailResponse.json();
          // Merge basic table data with detailed JSON data
          detailedGame = { ...basicGame, ...detailedData };
          console.log('✅ Loaded detailed game data:', detailedGame.title);
          console.log('🖼️ Image URLs from detailed data:');
          console.log('  banner_image:', detailedData.banner_image);
          console.log('  vertical_artwork:', detailedData.vertical_artwork);
          console.log('  icon_image:', detailedData.icon_image);
        } else {
          console.warn(`Could not load detailed data from ${modalFile}, using basic data`);
        }
      } catch (detailError) {
        console.warn('Error loading detailed game data:', detailError);
        // Continue with basic data
      }
    }
    
    // Remove loading modal
    loadingModal.remove();
    
    // Create actual modal with detailed data
    createGameModal(detailedGame);
    
  } catch (error) {
    console.error('Failed to open game modal:', error);
    // Remove loading modal if it exists
    const loadingModal = document.querySelector('.game-modal');
    if (loadingModal) loadingModal.remove();
    
    // Show error
    alert('Failed to load game details. Please try again.');
  }
}

// Create game modal
function createGameModal(game) {
  console.log('🔥 MODAL DEBUG: Creating modal for', game.title, 'with languages:', game.languages, 'and game_modes:', game.game_modes);
  console.log('🎮 Debug game_modes:', game.game_modes);
  console.log('🌍 Debug languages:', game.languages);
  console.log('⭐ Debug decky_rating:', game.decky_rating, '-> class:', getStatusClass(game.decky_rating), 'text:', getStatusText(game.decky_rating));
  console.log('⭐ Debug standalone_rating:', game.standalone_rating, '-> class:', getStatusClass(game.standalone_rating), 'text:', getStatusText(game.standalone_rating));
  console.log('🎨 Creating modal for game:', game.title);
  console.log('🖼️ Final image URLs for modal:');
  console.log('  banner_image:', game.banner_image);
  console.log('  vertical_artwork:', game.vertical_artwork);
  console.log('  Will show banner?', game.banner_image && !game.banner_image.startsWith('./artwork/'));
  console.log('  Will show vertical?', game.vertical_artwork && !game.vertical_artwork.startsWith('./artwork/'));
  
  // Remove existing modal
  const existingModal = document.getElementById('gameModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.id = 'gameModal';
  modal.className = 'game-modal';
  
  modal.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal-content">
        <!-- Game Banner -->
        <div id="gameBanner-${game.id}" class="game-banner">
          ${game.banner_image && !game.banner_image.startsWith('./artwork/') ? 
            `<img src="${game.banner_image}" alt="Game Banner" style="width: 100%; max-height: 120px; object-fit: scale-down; border-radius: 8px;" onerror="this.parentElement.style.display='none';">` : ''}
        </div>
        
        <!-- Enhanced Header -->
        <div class="modal-header-enhanced">
          <div class="game-header-content">
            <div class="game-basic-info">
              <div class="game-title-area">
                <h4>${game.title}</h4>
                <div class="game-meta-row">
                  ${game.releasedate ? `<div class="game-meta">Released: ${new Date(game.releasedate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>` : ''}
                  ${game.size && game.size.trim() !== '' ? `<div class="game-meta">Size: ${game.size}</div>` : ''}
                </div>
              </div>
            </div>
            <div class="header-badges">
              <span class="storefront-badge storefront-${game.storefront.toLowerCase()}">${game.storefront.toLowerCase()}</span>
              <button class="copy-game-link-btn" data-game-slug="${game.slug}" data-storefront="${game.storefront}" title="Copy link to this game">🔗</button>
            </div>
          </div>
          <button class="modal-close">&times;</button>
        </div>
        
        <!-- Essential Info Strip -->
        <div class="essential-info">
          <div class="feature-grid">
            <div class="feature-item">
              <span class="feature-label">Decky Plugin</span>
              <span class="feature-value ${getStatusClass(game.decky_rating)}">${getStatusText(game.decky_rating)}</span>
            </div>
            <div class="feature-item">
              <span class="feature-label">2.0 Standalone</span>
              <span class="feature-value ${getStatusClass(game.standalone_rating)}">${getStatusText(game.standalone_rating)}</span>
            </div>
            <div class="feature-item">
              <span class="feature-label">Proton Version</span>
              <span class="feature-value">${game.proton_version || 'GE-Proton'}</span>
            </div>
            <div class="feature-item">
              <span class="feature-label">Date Tested</span>
              <span class="feature-value">${game.date_tested || 'Not tested'}</span>
            </div>
          </div>
        </div>
        
        <!-- 2-Tab Navigation (Bootstrap Style) -->
        <ul class="nav nav-tabs nav-tabs-clean" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#overview-${game.id}" role="tab">
              <i class="fas fa-info-circle me-2"></i>Overview
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#testing-${game.id}" role="tab">
              <i class="fas fa-cogs me-2"></i>Testing Details
            </a>
          </li>
        </ul>
        
        <!-- Tab Content -->
        <div class="tab-content tab-content-enhanced">
          <!-- Overview Tab -->
          <div class="tab-pane active" id="overview-${game.id}" role="tabpanel">
            <div class="row">
              <div class="col-md-4">
                <div id="gameImages-${game.id}" class="game-image-container ${hasEpicFeatures(game) ? '' : 'no-epic-features'}">
                  ${game.vertical_artwork && !game.vertical_artwork.startsWith('./artwork/') ? 
                    `<img src="${game.vertical_artwork}" alt="Game Cover" class="game-image-main" onerror="this.style.display='none';">` :
                    `<div class="game-image-placeholder">
                      <div class="placeholder-content">
                        <i class="fas fa-gamepad" style="font-size: 2rem; color: #4a5568; margin-bottom: 8px;"></i>
                        <p style="color: #a0aec0; margin: 0; font-size: 0.8rem;">Game Image</p>
                        <p style="color: #a0aec0; margin: 0; font-size: 0.7rem;">Not Available</p>
                      </div>
                    </div>`
                  }
                </div>
                
                ${renderEpicFeatures(game)}
              </div>
              <div class="col-md-8" id="gameDescription-${game.id}">
                <div class="info-section">
                  <h6><i class="fas fa-gamepad text-primary"></i> Game Information</h6>
                  <!-- Top row: Genre, Publisher, Game Modes (short items) -->
                  <div class="info-grid info-grid-top">
                    ${game.genre ? `
                      <div class="info-item">
                        <span class="info-label">Genre</span>
                        <span class="info-value">${game.genre}</span>
                      </div>
                    ` : ''}
                    ${game.publisher ? `
                      <div class="info-item">
                        <span class="info-label">Publisher</span>
                        <span class="info-value">${game.publisher}</span>
                      </div>
                    ` : ''}
                    ${game.game_modes && Array.isArray(game.game_modes) && game.game_modes.length > 0 ? `
                      <div class="info-item">
                        <span class="info-label">Game Modes</span>
                        <span class="info-value">${game.game_modes.join(', ')}</span>
                      </div>
                    ` : ''}
                  </div>
                  
                  <!-- Bottom row: Languages (flexible, can be long) -->
                  ${game.languages && Array.isArray(game.languages) && game.languages.length > 0 ? `
                    <div class="info-grid info-grid-languages">
                      <div class="info-item info-item-full">
                        <span class="info-label">Languages</span>
                        <span class="info-value">${game.languages.join(', ')}</span>
                      </div>
                    </div>
                  ` : ''}
                  
                  <!-- Legacy language support (if present) -->
                  ${game.language_support ? `
                    <div class="info-grid info-grid-languages">
                      <div class="info-item info-item-full">
                        <span class="info-label">Language Support</span>
                        <span class="info-value">${game.language_support}</span>
                      </div>
                    </div>
                  ` : ''}
                </div>
              
                ${game.description ? `
                  <div class="info-section" style="margin-top: -3px;">
                    <h6 style="margin-bottom: 4px;">Description</h6>
                    <div class="notes-content">${game.description}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
          
          <!-- Testing Details Tab -->
          <div class="tab-pane" id="testing-${game.id}" role="tabpanel">
            ${renderTestingDetailsBootstrap(game)}
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Setup close handlers
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }
  
  const backdrop = modal.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(modal);
      }
    });
  }
  
  // Bootstrap tab switching
  const tabLinks = modal.querySelectorAll('.nav-link');
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active classes from all tabs
      modal.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      modal.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked tab
      link.classList.add('active');
      
      // Show corresponding tab content
      const targetId = link.getAttribute('href').substring(1);
      const targetPanel = modal.querySelector(`#${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
  
  // Copy link button handler
  const copyLinkBtn = modal.querySelector('.copy-game-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slug = copyLinkBtn.dataset.gameSlug;
      const storefront = copyLinkBtn.dataset.storefront;
      const gameEntryId = `game-${slug}-${storefront.toLowerCase().replace(/\./g, '-')}`;
      const gameUrl = `${window.location.origin}${window.location.pathname}#${gameEntryId}`;

      // Copy to clipboard with multiple fallback methods
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(gameUrl)
          .then(() => {
            showCopyNotification(copyLinkBtn, 'Link copied!', 'success');
          })
          .catch(err => {
            console.error('Clipboard API failed:', err);
            fallbackCopyToClipboard(gameUrl, copyLinkBtn);
          });
      } else {
        fallbackCopyToClipboard(gameUrl, copyLinkBtn);
      }
    });
  }

  // Escape key
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);

  // Show modal
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
}

// Fallback copy to clipboard for older browsers
function fallbackCopyToClipboard(text, button) {
  // Create a temporary textarea
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);

  try {
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    const successful = document.execCommand('copy');
    if (successful) {
      showCopyNotification(button, 'Link copied!', 'success');
    } else {
      throw new Error('Copy command failed');
    }
  } catch (err) {
    console.error('Fallback copy failed:', err);
    showCopyNotification(button, `Copy failed. URL: ${text}`, 'error');
  } finally {
    document.body.removeChild(textarea);
  }
}

// Show copy notification near button
function showCopyNotification(button, message, type) {
  const notification = document.createElement('div');
  notification.className = `copy-notification copy-notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background: ${type === 'success' ? '#28a745' : '#dc3545'};
    color: white;
    border-radius: 6px;
    z-index: 10001;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideInRight 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Close modal
function closeModal(modal) {
  modal.classList.remove('show');
  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  }, 300);
}

// Helper functions for modal
function getStatusClass(rating) {
  if (!rating) return 'text-muted';
  const ratingLower = rating.toLowerCase();
  if (ratingLower === 'green' || ratingLower === 'perfect') return 'text-success';
  if (ratingLower === 'yellow') return 'text-warning';
  if (ratingLower === 'red') return 'text-danger';
  if (ratingLower === 'not-working') return 'text-danger';
  if (ratingLower === 'not-supported') return 'text-not-supported';
  if (ratingLower === 'unknown') return 'text-muted';
  return 'text-muted';
}

function getStatusText(rating) {
  if (!rating) return 'Not tested';
  const ratingLower = rating.toLowerCase();
  if (ratingLower === 'green' || ratingLower === 'perfect') return 'Works Out of the Box';
  if (ratingLower === 'yellow') return 'Minor setup';
  if (ratingLower === 'red') return 'Advanced setup';
  if (ratingLower === 'not-working') return 'Broken';
  if (ratingLower === 'unknown') return 'Untested';
  if (ratingLower === 'not-supported') return 'Not supported';
  if (ratingLower === 'untested') return 'Untested';

  // For any other value, capitalize first letter
  return rating.charAt(0).toUpperCase() + rating.slice(1).toLowerCase();
}

// Check if game has Epic features to display
function hasEpicFeatures(game) {
  if (game.storefront !== 'Epic') return false;
  
  const epicFeatures = game.epic_features || {};
  console.log(`🎮 Epic features for ${game.title}:`, epicFeatures);
  
  return epicFeatures.epic_achievements || game.epic_achievements ||
         epicFeatures.epic_offline_mode || game.epic_offline_mode ||
         epicFeatures.must_be_online || game.must_be_online ||
         epicFeatures.requires_eos || game.requires_eos ||
         epicFeatures.supports_eos || game.supports_eos ||
         epicFeatures.requires_verification || game.requires_verification ||
         epicFeatures.requires_eac_runtime || game.requires_eac_runtime ||
         epicFeatures.requires_battleye_runtime || game.requires_battleye_runtime;
}

// Render Epic Games features
function renderEpicFeatures(game) {
  if (!hasEpicFeatures(game)) return '';
  
  const epicFeatures = game.epic_features || {};
  console.log(`✅ Rendering Epic features for ${game.title}`);
  
  return `
    <div class="info-section">
      <h6><i class="fas fa-star text-warning"></i> Epic Games Features</h6>
      <div class="epic-features-grid">
        ${epicFeatures.epic_achievements || game.epic_achievements ? `
          <div class="epic-feature-item">
            <span>Achievements</span>
            <span class="feature-status status-supported">✓ Supported</span>
          </div>
        ` : ''}
        ${epicFeatures.epic_offline_mode || game.epic_offline_mode ? `
          <div class="epic-feature-item">
            <span>Offline Mode</span>
            <span class="feature-status status-supported">✓ Available</span>
          </div>
        ` : ''}
        ${epicFeatures.must_be_online || game.must_be_online ? `
          <div class="epic-feature-item">
            <span>Must be Online</span>
            <span class="feature-status status-required">Required</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_eos || epicFeatures.supports_eos || game.requires_eos || game.supports_eos ? `
          <div class="epic-feature-item">
            <span>EOS Overlay</span>
            <span class="feature-status ${(epicFeatures.requires_eos || game.requires_eos) ? 'status-required' : 'status-supported'}">${(epicFeatures.requires_eos || game.requires_eos) ? 'Required' : '✓ Supported'}</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_verification || game.requires_verification ? `
          <div class="epic-feature-item">
            <span>Verification</span>
            <span class="feature-status status-warning">⚠️ Verify required</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_eac_runtime || game.requires_eac_runtime ? `
          <div class="epic-feature-item">
            <span>EasyAntiCheat</span>
            <span class="feature-status status-required">Required</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_battleye_runtime || game.requires_battleye_runtime ? `
          <div class="epic-feature-item">
            <span>BattlEye</span>
            <span class="feature-status status-required">Required</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Render testing details (Bootstrap version)
function renderTestingDetailsBootstrap(game) {
  let content = '';
  
  // Technical Configuration
  const hasConfig = game.dependencies || game.controller_config || game.controller_input || game.proton_version || game.protondb || game.epic_url || game.gog_url || game.itch_url || game.pc_gaming_wiki_url;
  if (hasConfig) {
    content += `
      <div class="info-section">
        <h6><i class="fas fa-tools text-success"></i> Technical Configuration</h6>
        <div class="info-grid">
          ${game.controller_config || game.controller_input ? `
            <div class="info-item">
              <span class="info-label">Controller Config</span>
              <span class="info-value">
                ${formatControllerInput(game.controller_config || game.controller_input)}
              </span>
            </div>
          ` : ''}
          ${game.dependencies ? `
            <div class="info-item">
              <span class="info-label">Dependencies</span>
              <span class="info-value">${game.dependencies}</span>
            </div>
          ` : ''}
          ${game.protondb ? `
            <div class="info-item">
              <span class="info-label">ProtonDB</span>
              <span class="info-value"><a href="${game.protondb}" target="_blank" rel="noopener noreferrer">View on ProtonDB <i class="fas fa-external-link-alt ms-1"></i></a></span>
            </div>
          ` : ''}
          ${game.epic_url ? `
            <div class="info-item">
              <span class="info-label">Epic Store</span>
              <span class="info-value"><a href="${game.epic_url}" target="_blank" rel="noopener noreferrer">View on Epic <i class="fas fa-external-link-alt ms-1"></i></a></span>
            </div>
          ` : ''}
          ${game.gog_url ? `
            <div class="info-item">
              <span class="info-label">GOG Store</span>
              <span class="info-value"><a href="${game.gog_url}" target="_blank" rel="noopener noreferrer">View on GOG <i class="fas fa-external-link-alt ms-1"></i></a></span>
            </div>
          ` : ''}
          ${game.itch_url ? `
            <div class="info-item">
              <span class="info-label">itch.io</span>
              <span class="info-value"><a href="${game.itch_url}" target="_blank" rel="noopener noreferrer">View on itch.io <i class="fas fa-external-link-alt ms-1"></i></a></span>
            </div>
          ` : ''}
          ${game.pc_gaming_wiki_url ? `
            <div class="info-item">
              <span class="info-label">PCGaming Wiki</span>
              <span class="info-value"><a href="${game.pc_gaming_wiki_url}" target="_blank" rel="noopener noreferrer">View on PCGaming Wiki <i class="fas fa-external-link-alt ms-1"></i></a></span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
  
  // Testing Notes
  if (game.notes) {
    content += `
      <div class="info-section">
        <h6><i class="fas fa-clipboard-list text-info"></i> Testing Notes</h6>
        <div class="notes-content">${renderMarkdown(game.notes)}</div>
      </div>
    `;
  }
  
  return content || '<p style="color: #ccc; text-align: center; padding: 40px;">No additional testing details available.</p>';
}

// Simple markdown renderer
function renderMarkdown(text) {
  if (!text) return '';
  
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  return html;
}

// Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Setup event listeners
function setupEventListeners() {
  // Filter controls
  document.getElementById('storefrontFilter').addEventListener('change', filterTable);
  document.getElementById('searchInput').addEventListener('input', handleSearchInput);
  document.getElementById('pageSizeSelect').addEventListener('change', changePageSize);
  
  // Add modal click handlers
  addModalHandlers();
  
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
</script>

<style>
/* Games Statistics Section (keeping yours) */
.games-stats {
  margin: 20px 0;
  padding: 20px;
  background: #1f1f1f;
  border-radius: 8px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2em;
  font-weight: bold;
  color: #e67300;
}

.stat-label {
  font-size: 0.9em;
  color: #ccc;
}

/* Text utility classes */
.text-muted {
  color: #9ca3af !important;
}

/* Optimized Table Styling (from test system) */
.feature-box {
  background: linear-gradient(135deg, #2a3442 0%, #1e2a38 100%);
  border: 1px solid #3a4a5c;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.feature-box h3 {
  color: #ffa366;
  margin: 0 0 15px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.featured-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.featured-entry {
  background-color: #334458;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #4a5a6c;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.featured-entry:hover {
  background-color: #3e5068;
  transform: translateY(-1px);
}

.featured-game-link {
  color: #cceeff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.table-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  padding: 15px;
  background: #2a2a2a;
  border-radius: 8px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.control-group label {
  font-weight: 600;
  color: #ffa366;
  font-size: 0.9rem;
}

select, input {
  background: #445465;
  color: #ddd;
  border: 1px solid #666;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 0.9rem;
}

select:focus, input:focus {
  outline: none;
  border-color: #ffa366;
}

.games-table-wrapper {
  background: #1e2a38;
  border-radius: 8px;
  border: 1px solid #3a4a5c;
  margin-bottom: 20px;
  overflow: visible !important;
}

#gamesTable {
  width: 100% !important;
  min-width: auto !important;
  border-collapse: collapse !important;
  background: #1e2a38 !important;
  color: #ddd !important;
  display: table !important;
  table-layout: auto !important;
  overflow: visible !important;
  margin-top: 0 !important;
  border: none !important;
  font-size: 1rem !important;
}

#gamesTable th {
  background: #253445;
  padding: 10px 15px;
  font-weight: 600;
  border-bottom: 2px solid #3a4a5c;
  text-align: left;
}

#gamesTable th:nth-child(1) { width: 30%; min-width: 200px; } /* Game */
#gamesTable th:nth-child(2) { width: 12%; min-width: 80px; }  /* Store */
#gamesTable th:nth-child(3) { width: 18%; min-width: 110px; text-align: center; } /* Decky Plugin */
#gamesTable th:nth-child(4) { width: 18%; min-width: 110px; text-align: center; padding-left: 12px; padding-right: 12px; } /* 2.0 Standalone */
#gamesTable th:nth-child(5) { width: 22%; min-width: 130px; } /* Date Tested */

#gamesTable td {
  padding: 10px 15px;
  border-bottom: 1px solid #3a4a5c;
}

#gamesTable th:nth-child(3), #gamesTable th:nth-child(4),
#gamesTable td:nth-child(3), #gamesTable td:nth-child(4) {
  text-align: center;
}

#gamesTable tbody tr:hover {
  background: rgba(255, 163, 102, 0.1);
}

/* Remove hover effect from info row */
#gamesTable tbody tr.info-row {
  pointer-events: none;
}

#gamesTable tbody tr.info-row:hover {
  background: inherit !important;
  cursor: default;
}

.featured-game {
  background: rgba(255, 163, 102, 0.05) !important;
  border-left: 3px solid #ffa366;
}

.weekly-tested-game {
  background: rgba(102, 191, 255, 0.05) !important;
  border-left: 3px solid #66bfff;
}

.game-link.clickable {
  color: #66bfff;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s;
}

.game-link.clickable:hover {
  color: #aaddff;
}

.compatibility-rating {
  text-align: center;
  font-size: 1.1rem;
}

.compatibility-na {
  color: #888;
  font-style: italic;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #2a2a2a;
  border-radius: 8px;
  margin-top: 20px;
}

.pagination-info {
  color: #ccc;
  font-size: 0.9rem;
}

.pagination-controls {
  display: flex;
  gap: 5px;
  align-items: center;
}

.pagination-btn {
  background: #445465;
  color: #ddd;
  border: 1px solid #666;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.pagination-btn:hover:not(.disabled) {
  background: #556576;
  border-color: #ffa366;
}

.pagination-btn.active {
  background: #ffa366;
  color: #000;
  border-color: #ffa366;
  font-weight: 600;
}

.pagination-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-ellipsis {
  color: #ccc;
  padding: 8px 4px;
}

.store-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: bold;
}

.store-badge.epic {
  background: #000;
  color: white;
}

.store-badge.gog {
  background: #86328a;
  color: white;
}

.store-badge.amazon {
  background: #00a14f;
  color: white;
}

.store-badge.itch {
  background: #fa5c5c;
  color: white;
}

/* Modal storefront badges */
.storefront-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
}

.storefront-epic {
  background: #000;
  color: white;
}

.storefront-gog {
  background: #86328a;
  color: white;
}

.storefront-amazon {
  background: #00a14f;
  color: white;
}

.storefront-itch\.io {
  background: #fa5c5c;
  color: white;
}

/* Mobile responsive - stats grid only (table mobile styles moved to SCSS) */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
  }
}

/* Anti-cheat game styling */
.anticheat-warning {
  text-align: center !important;
  color: #ffa500 !important;
  font-weight: bold !important;
  background: rgba(255, 165, 0, 0.1) !important;
  padding: 8px 12px !important;
  border-radius: 4px !important;
}

.game-title-static {
  color: #ccc !important;
  cursor: default !important;
  text-decoration: none !important;
}

.game-title-static:hover {
  color: #ccc !important;
  text-decoration: none !important;
}

/* Compatibility Legend */
.compatibility-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  background: rgba(30, 42, 56, 0.5);
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(58, 74, 92, 0.5);
}

.legend-title {
  color: #ffa366;
  font-weight: bold;
  margin-right: 10px;
}

.legend-item {
  color: #ddd;
  white-space: nowrap;
}

/* Game meta row styling for modal header */
.game-meta-row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.game-meta {
  color: #aaa;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .compatibility-legend {
    gap: 10px;
    font-size: 0.85rem;
  }
  
  .legend-item {
    font-size: 0.8rem;
  }
  
  .game-meta-row {
    gap: 15px;
  }
  
  .game-meta {
    font-size: 0.85rem;
  }
}

/* Compatibility counts row styling */
.compatibility-counts th {
  background: rgba(255, 255, 255, 0.02) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  padding: 8px 15px !important;
}

.works-count {
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  color: #28a745 !important;
  text-align: center !important;
}

/* Copy game link button */
.copy-game-link-btn {
  background: rgba(255, 163, 102, 0.1);
  border: 1px solid rgba(255, 163, 102, 0.3);
  color: #ffa366;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
  margin-left: 8px;
}

.copy-game-link-btn:hover {
  background: rgba(255, 163, 102, 0.2);
  border-color: #ffa366;
  transform: scale(1.05);
}

.copy-game-link-btn:active {
  transform: scale(0.95);
}

/* Copy notification animations */
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>