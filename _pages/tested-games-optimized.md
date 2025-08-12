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
    <input type="text" id="searchInput" placeholder="Type game name..." autocomplete="off" />
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
    console.log('Loading games data from /assets/data/games-table.json');
    const response = await fetch('/assets/data/games-table.json');
    
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
      <span class="featured-game-link">
        ${game.title}
      </span>
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
    'yellow': '⚠️',
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
  
  const tableHTML = pageGames.map(game => `
    <tr class="${game.is_featured ? 'featured-game' : ''}" data-storefront="${game.storefront}" data-status="${game.overall_status}">
      <td title="${game.title}">
        <span class="game-link clickable" data-game-id="${game.id}" data-modal-file="${game.modal_file}">
          ${game.title}
        </span>
      </td>
      <td>
        <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
      </td>
      <td class="compatibility-rating">
        ${getCompatibilityDisplay(game.decky_rating)}
      </td>
      <td class="compatibility-rating">
        ${getCompatibilityDisplay(game.standalone_rating)}
      </td>
      <td>${game.date_tested}</td>
    </tr>
  `).join('');
  
  console.log('Generated HTML length:', tableHTML.length);
  console.log('Setting tbody innerHTML...');
  tbody.innerHTML = tableHTML;
  console.log('tbody rows after setting:', tbody.children.length);
  
  updatePagination();
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

// Setup event listeners
function setupEventListeners() {
  // Filter controls
  document.getElementById('storefrontFilter').addEventListener('change', filterTable);
  document.getElementById('searchInput').addEventListener('input', filterTable);
  document.getElementById('pageSizeSelect').addEventListener('change', changePageSize);
  
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
</style>