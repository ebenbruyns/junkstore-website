---
layout: junkstore-page
title: "Junk Store Game Compatibility"
description: "900+ games tested on Steam Deck. Search our compatibility database for Epic, GOG, Amazon & itch games - working status, setup notes, and Proton tips."
permalink: /tested-games/
image: /assets/images/blog/features/games-table/games-table-hero-card.webp
---

<!-- Hero styles now in hero-height-fix.scss -->

<div class="spacer mt-4"></div>

<!-- Featured Games Section -->
<div class="feature-box games-featured-box">
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
      <option value="itch">itch</option>
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

<!-- Loading indicator with skeleton -->
<div id="loadingIndicator">
  <div class="games-table-skeleton">
    <div class="skeleton-row">
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
    </div>
    <div class="skeleton-row">
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
      <div class="skeleton skeleton-cell"></div>
    </div>
  </div>
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
        <th>Pro Version</th>
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

  <!-- Pagination -->
  <div class="pagination-container" id="paginationContainer">
    <div class="pagination-info" id="paginationInfo">
      <!-- Will show "Showing X-Y of Z games" -->
    </div>
    <div class="pagination-controls" id="paginationControls">
      <!-- Page buttons will be added here -->
    </div>
  </div>
</div>

<!-- Back to Top Button -->
<button id="backToTop" title="Back to top" aria-label="Back to top">
  <span style="display:block; font-size:1.5rem;">↑</span>
  <span style="display:block; font-size:0.8rem; font-weight:normal;">top</span>
</button>


<script src="/assets/js/games-table.js"></script>


<!-- Table styles in _sass/games-table-optimized.scss -->
