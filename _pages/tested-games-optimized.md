---
layout: splash
title: "Junk Store Tested Games - Optimized"
permalink: /tested-games-optimized/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
---

<div class="spacer mt-4"></div>

<!-- Featured Games Section -->
<div class="feature-box">
  <h3>🆕 Recently Tested</h3>
  <div class="featured-row" id="featuredGamesContainer">
    <!-- Featured games will be populated by JavaScript -->
  </div>
</div>

<p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
  <strong>Note:</strong> Games tested by the Junk Store team use <strong>GE-Proton 9-20</strong>, as it consistently provides the best out-of-the-box compatibility.<br>
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
  <span class="legend-item">✅ Works great</span>
  <span class="legend-item">🟡 Minor tinkering</span>
  <span class="legend-item">🔧 Advanced tinkering</span>
  <span class="legend-item">🚫 Unsupported</span>
  <span class="legend-item">⚠️ Anti-cheat incompatible</span>
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

// Load games data
async function loadGamesData() {
  try {
    console.log('Loading games data from /assets/data/games.json');
    const response = await fetch('/assets/data/games.json');
    
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    gamesData = await response.json();
    console.log(`✅ Loaded ${gamesData.total_games} games successfully`);
    console.log('First 3 games:', gamesData.games.slice(0, 3));
    
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

// Populate featured games
function populateFeaturedGames() {
  const featuredGames = gamesData.games.filter(game => game.is_featured);
  const container = document.getElementById('featuredGamesContainer');
  
  if (featuredGames.length === 0) {
    container.innerHTML = '<div class="featured-entry">No featured games at this time.</div>';
    return;
  }
  
  container.innerHTML = featuredGames.map(game => `
    <div class="featured-entry">
      <span class="featured-game-link game-link clickable" data-game-id="${game.id}" data-modal-file="${game.modal_file}">
        ${game.title}
      </span>
      <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
    </div>
  `).join('');
  
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
        <span class="stat-number">${gamesData.status_counts.works_great}</span>
        <span class="stat-label">Works Great</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.epic}</span>
        <span class="stat-label">Epic Games</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.gog}</span>
        <span class="stat-label">GOG</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.amazon}</span>
        <span class="stat-label">Amazon</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${gamesData.storefronts.itch || 0}</span>
        <span class="stat-label">itch.io</span>
      </div>
    </div>
  `;
}

// Sort games: featured first, then alphabetically
function sortGames() {
  filteredGames.sort((a, b) => {
    // Featured games come first
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;
    
    // Then sort alphabetically by title
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
    'not-working': '🚫',
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

// Update table with current page
function updateTable() {
  const tbody = document.getElementById('gamesTableBody');
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filteredGames.length);
  const pageGames = filteredGames.slice(startIdx, endIdx);
  
  console.log(`Page ${currentPage}: showing ${pageGames.length} games (${startIdx}-${endIdx}) of ${filteredGames.length} total, pageSize: ${pageSize}`);
  
  const tableHTML = pageGames.map(game => {
    // Check if this is an anti-cheat game
    const isAntiCheat = game.cant_test_linux === true;
    
    return `
    <tr class="${game.is_featured ? 'featured-game' : ''}" data-storefront="${game.storefront}" data-status="${game.overall_status}">
      <td title="${game.title}">
        ${isAntiCheat ? 
          `<span class="game-title-static">${game.title}</span>` :
          `<span class="game-link clickable" data-game-id="${game.id}" data-modal-file="${game.modal_file}">${game.title}</span>`
        }
      </td>
      <td>
        <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
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
  
  console.log('Generated HTML length:', tableHTML.length);
  console.log('Setting tbody innerHTML...');
  tbody.innerHTML = tableHTML;
  console.log('tbody rows after setting:', tbody.children.length);
  
  updatePagination();
  
  // Re-add modal handlers after table update
  addModalHandlers();
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

// Add modal click handlers
function addModalHandlers() {
  const gameLinks = document.querySelectorAll('.game-link.clickable');
  gameLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      const gameId = e.target.dataset.gameId;
      const modalFile = e.target.dataset.modalFile;
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
          ${(game.images && game.images.banner_image) || game.verticalArtwork ? 
            `<img src="${(game.images && game.images.banner_image) || game.verticalArtwork}" alt="Game Banner" style="width: 100%; max-height: 120px; object-fit: cover; border-radius: 8px;" onerror="this.parentElement.style.display='none';">` : ''}
        </div>
        
        <!-- Enhanced Header -->
        <div class="modal-header-enhanced">
          <div class="game-header-content">
            <div class="game-basic-info">
              <div class="game-title-area">
                <h4>${game.title}</h4>
                ${game.releasedate ? `<div class="game-meta">Released: ${new Date(game.releasedate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>` : ''}
              </div>
            </div>
            <div class="header-badges">
              <span class="storefront-badge storefront-${game.storefront.toLowerCase()}">${game.storefront}</span>
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
              <span class="feature-value">${game.proton_version || 'Default'}</span>
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
                  ${(game.images && game.images.verticalArtwork) || game.verticalArtwork ? 
                    `<img src="${(game.images && game.images.verticalArtwork) || game.verticalArtwork}" alt="Game Cover" class="game-image-main" onerror="this.style.display='none';">` :
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
                  <div class="info-grid">
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
                    ${game.language_support ? `
                      <div class="info-item">
                        <span class="info-label">Language Support</span>
                        <span class="info-value">${game.language_support}</span>
                      </div>
                    ` : ''}
                  </div>
                </div>
              
                ${game.description ? `
                  <div class="info-section" style="margin-top: -6px;">
                    <h6 style="margin-bottom: 2px;">Description</h6>
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
  if (!rating) return '';
  const ratingLower = rating.toLowerCase();
  if (ratingLower === 'green' || ratingLower === 'perfect') return 'text-success';
  if (ratingLower === 'yellow') return 'text-warning';
  if (ratingLower === 'red') return 'text-danger';
  if (ratingLower === 'not-working') return 'text-danger';
  return '';
}

function getStatusText(rating) {
  if (!rating) return 'Not tested';
  const ratingLower = rating.toLowerCase();
  if (ratingLower === 'green' || ratingLower === 'perfect') return 'Works great';
  if (ratingLower === 'yellow') return 'Minor tinkering';
  if (ratingLower === 'red') return 'Advanced tinkering';
  if (ratingLower === 'not-working') return 'Doesn\'t work';
  return rating;
}

// Check if game has Epic features to display
function hasEpicFeatures(game) {
  if (game.storefront !== 'Epic') return false;
  
  const epicFeatures = game.epic_features || {};
  return epicFeatures.epic_achievements || epicFeatures.epic_offline_mode || epicFeatures.requires_eos || epicFeatures.requires_verification;
}

// Render Epic Games features
function renderEpicFeatures(game) {
  if (!hasEpicFeatures(game)) return '';
  
  const epicFeatures = game.epic_features || {};
  
  return `
    <div class="info-section">
      <h6><i class="fas fa-star text-warning"></i> Epic Games Features</h6>
      <div class="epic-features-grid">
        ${epicFeatures.epic_achievements ? `
          <div class="epic-feature-item">
            <span>Achievements</span>
            <span class="feature-status status-supported">Supported</span>
          </div>
        ` : ''}
        ${epicFeatures.epic_offline_mode ? `
          <div class="epic-feature-item">
            <span>Offline Mode</span>
            <span class="feature-status status-supported">Supported</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_eos ? `
          <div class="epic-feature-item">
            <span>EOS Overlay</span>
            <span class="feature-status status-required">Required</span>
          </div>
        ` : ''}
        ${epicFeatures.requires_verification ? `
          <div class="epic-feature-item">
            <span>Verification</span>
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
  const hasConfig = game.dependencies || game.controller_config || game.controller_input || game.proton_version || game.protondb;
  if (hasConfig) {
    content += `
      <div class="info-section">
        <h6><i class="fas fa-tools text-success"></i> Technical Configuration</h6>
        <div class="info-grid">
          ${game.controller_config || game.controller_input ? `
            <div class="info-item">
              <span class="info-label">Controller Config</span>
              <span class="info-value">
                ${game.controller_config || (game.controller_input === 'native' ? '🎮 Native Controller' : (game.controller_input ? `🎮 ${game.controller_input}` : 'Not specified'))}
              </span>
            </div>
          ` : ''}
          ${game.dependencies ? `
            <div class="info-item">
              <span class="info-label">Dependencies</span>
              <span class="info-value">${game.dependencies}</span>
            </div>
          ` : ''}
          ${game.proton_version ? `
            <div class="info-item">
              <span class="info-label">Proton Version</span>
              <span class="info-value">${game.proton_version}</span>
            </div>
          ` : ''}
          ${game.protondb ? `
            <div class="info-item">
              <span class="info-label">ProtonDB</span>
              <span class="info-value"><a href="${game.protondb}" target="_blank" rel="noopener noreferrer">View on ProtonDB <i class="fas fa-external-link-alt ms-1"></i></a></span>
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

.featured-game {
  background: rgba(255, 163, 102, 0.05) !important;
  border-left: 3px solid #ffa366;
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

/* Mobile responsive */
@media (max-width: 768px) {
  .table-controls {
    flex-direction: column;
    gap: 15px;
  }
  
  .control-group {
    justify-content: center;
  }
  
  .pagination-container {
    flex-direction: column;
    gap: 10px;
  }
  
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
  gap: 25px;
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

@media (max-width: 768px) {
  .compatibility-legend {
    gap: 10px;
    font-size: 0.85rem;
  }
  
  .legend-item {
    font-size: 0.8rem;
  }
}
</style>