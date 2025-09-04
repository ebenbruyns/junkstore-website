---
layout: splash
title: "Junk Store Tested Games - New System"
permalink: /tested-games-new/
search: false
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

<!-- Table Controls -->
<div class="table-controls">
  <div class="filter-group">
    <label for="storefrontFilter">Filter by Storefront:</label>
    <select id="storefrontFilter">
      <option value="All">All</option>
      <option value="Epic">Epic</option>
      <option value="GOG">GOG</option>
      <option value="Amazon">Amazon</option>
    </select>
  </div>

  <div class="filter-group">
    <label for="statusFilter">Filter by Status:</label>
    <select id="statusFilter">
      <option value="All">All</option>
      <option value="works-great">Works Great</option>
      <option value="some-tinkering">Some Tinkering</option>
      <option value="advanced-tinkering">Advanced Tinkering</option>
      <option value="not-working">Not Working</option>
      <option value="incompatible">Linux Incompatible</option>
    </select>
  </div>

  <div class="search-group">
    <label for="searchInput">Search:</label>
    <div class="search-input-wrapper">
      <input type="text" id="searchInput" placeholder="Search games..." />
    </div>
  </div>
</div>

<!-- Games Statistics -->
<div id="gamesStats" class="games-stats">
  <!-- Stats will be populated by JavaScript -->
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

<!-- Loading indicator -->
<div id="loadingIndicator" style="text-align: center; padding: 20px;">
  Loading games...
</div>

<!-- Game Modal -->
<div id="gameModal" class="game-modal">
  <div class="modal-backdrop">
    <div class="modal-content">
      <button id="closeModal" class="modal-close" aria-label="Close">&times;</button>
      <div id="modalContent">
        <!-- Modal content will be populated by JavaScript -->
      </div>
    </div>
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
    
    // Initialize the page
    populateFeaturedGames();
    populateStats();
    populateTable();
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
      <a href="#" class="game-link" data-game-id="${game.id}" data-modal-file="${game.modal_file}">
        ${game.title}
      </a>
      <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
    </div>
  `).join('');
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
    </div>
  `;
}

// Get compatibility class for styling
function getCompatibilityClass(rating) {
  if (!rating) return 'not-tested';
  switch (rating.toLowerCase()) {
    case 'green': return 'works-great';
    case 'yellow': return 'some-tinkering';
    case 'red': return 'advanced-tinkering';
    case 'not-working': return 'not-working';
    case 'not-supported': return 'not-supported';
    default: return 'unknown';
  }
}

// Populate table with games
function populateTable(gamesToShow = null) {
  const games = gamesToShow || gamesData.games;
  const tbody = document.getElementById('gamesTableBody');
  
  tbody.innerHTML = games.map(game => `
    <tr data-storefront="${game.storefront}" data-status="${game.overall_status}">
      <td>
        <a href="#" class="game-link" data-game-id="${game.id}" data-modal-file="${game.modal_file}">
          ${game.title}
        </a>
        ${game.is_featured ? ' <span class="featured-badge">★</span>' : ''}
      </td>
      <td>
        <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
      </td>
      <td>
        <span class="compatibility-badge ${getCompatibilityClass(game.decky_rating)}">
          ${game.decky_text}
        </span>
      </td>
      <td>
        <span class="compatibility-badge ${getCompatibilityClass(game.standalone_rating)}">
          ${game.standalone_text}
        </span>
      </td>
      <td>${game.date_tested}</td>
    </tr>
  `).join('');
}

// Filter table based on controls
function filterTable() {
  if (!gamesData) return;
  
  const storeValue = document.getElementById('storefrontFilter').value;
  const statusValue = document.getElementById('statusFilter').value;
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  
  filteredGames = gamesData.games.filter(game => {
    const storeMatches = (storeValue === 'All' || game.storefront === storeValue);
    const statusMatches = (statusValue === 'All' || game.overall_status === statusValue);
    const searchMatches = game.title.toLowerCase().includes(searchValue) || 
                         game.publisher.toLowerCase().includes(searchValue);
    
    return storeMatches && statusMatches && searchMatches;
  });
  
  populateTable(filteredGames);
}

// Load and display game modal
async function showGameModal(modalFile) {
  try {
    console.log(`Loading modal data from: /assets/data/${modalFile}`);
    const response = await fetch(`/assets/data/${modalFile}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const gameData = await response.json();
    console.log('Modal data loaded:', gameData.title);
    
    // Create modal content (simplified version for demo)
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
      <div class="modal-header-enhanced">
        <h4>${gameData.title}</h4>
        <span class="storefront-badge storefront-${gameData.storefront.toLowerCase()}">${gameData.storefront}</span>
      </div>
      
      <div class="essential-info">
        <div class="feature-grid">
          <div class="feature-item">
            <span class="feature-label">Decky Plugin</span>
            <span class="feature-value ${getCompatibilityClass(gameData.decky_rating)}">${gameData.decky_rating || 'Not tested'}</span>
          </div>
          <div class="feature-item">
            <span class="feature-label">2.0 Standalone</span>
            <span class="feature-value ${getCompatibilityClass(gameData.standalone_rating)}">${gameData.standalone_rating || 'Not tested'}</span>
          </div>
          <div class="feature-item">
            <span class="feature-label">Proton Version</span>
            <span class="feature-value">${gameData.proton_version || 'Default'}</span>
          </div>
          <div class="feature-item">
            <span class="feature-label">Date Tested</span>
            <span class="feature-value">${gameData.date_tested || 'Unknown'}</span>
          </div>
        </div>
      </div>
      
      ${gameData.images.vertical_artwork ? `
        <div class="game-image">
          <img src="${gameData.images.vertical_artwork}" alt="${gameData.title}" loading="lazy">
        </div>
      ` : ''}
      
      <div class="game-info">
        <h6>Game Information</h6>
        <p><strong>Publisher:</strong> ${gameData.publisher || 'Unknown'}</p>
        <p><strong>Developer:</strong> ${gameData.developer || 'Unknown'}</p>
        <p><strong>Genre:</strong> ${gameData.genre || 'Unknown'}</p>
        ${gameData.description ? `<p><strong>Description:</strong> ${gameData.description}</p>` : ''}
      </div>
      
      ${gameData.notes ? `
        <div class="testing-notes">
          <h6>Testing Notes</h6>
          <p>${gameData.notes}</p>
        </div>
      ` : ''}
    `;
    
    // Show modal
    document.getElementById('gameModal').classList.add('show');
    
  } catch (error) {
    console.error('Error loading game details:', error);
    alert('Error loading game details. Please try again.');
  }
}

// Setup event listeners
function setupEventListeners() {
  // Filter controls
  document.getElementById('storefrontFilter').addEventListener('change', filterTable);
  document.getElementById('statusFilter').addEventListener('change', filterTable);
  document.getElementById('searchInput').addEventListener('input', filterTable);
  
  // Game links (using event delegation)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('game-link')) {
      e.preventDefault();
      const modalFile = e.target.dataset.modalFile;
      if (modalFile) {
        showGameModal(modalFile);
      }
    }
  });
  
  // Modal close
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('gameModal').classList.remove('show');
  });
  
  // Click outside modal to close
  document.getElementById('gameModal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('show');
    }
  });
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadGamesData);
</script>

<style>
/* Additional styles for the new system */
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

.compatibility-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
}

.compatibility-badge.works-great { background: #4caf50; color: white; }
.compatibility-badge.some-tinkering { background: #ff9800; color: white; }
.compatibility-badge.advanced-tinkering { background: #f44336; color: white; }
.compatibility-badge.not-working { background: #9e9e9e; color: white; }
.compatibility-badge.not-tested { background: #616161; color: white; }

.featured-badge {
  color: #ffd700;
  font-size: 1.2em;
}

.game-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.game-modal.show {
  display: block;
}

.modal-backdrop {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.modal-content {
  background: #1f1f1f;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;
  color: white;
  padding: 20px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2em;
  color: #ccc;
  cursor: pointer;
}

.modal-close:hover {
  color: white;
}

.modal-header-enhanced {
  border-bottom: 2px solid #333;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.essential-info {
  margin: 20px 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.feature-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #2a2a2a;
  border-radius: 4px;
}

.feature-label {
  font-weight: bold;
}

.game-image img {
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
}

.game-info, .testing-notes {
  margin: 20px 0;
  padding: 15px;
  background: #2a2a2a;
  border-radius: 4px;
}

.game-info h6, .testing-notes h6 {
  margin-top: 0;
  color: #e67300;
}
</style>