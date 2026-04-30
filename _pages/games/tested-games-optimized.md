---
layout: junkstore-page
title: "Junk Store Game Compatibility"
description: "900+ games tested on Steam Deck. Search our compatibility database for Epic, GOG, Amazon & itch games - working status, setup notes, and Proton tips."
permalink: /games/tested/
image: /assets/images/blog/features/games-table/games-table-hero-card.webp
---

<!-- Hero styles now in hero-height-fix.scss -->

<div class="spacer mt-4"></div>

<a class="free-games-banner" href="/free-games/" data-free-games-banner hidden>
  <span class="free-games-banner__text"><strong class="free-games-banner__count">…</strong> <span class="free-games-banner__label">free games right now</span> — claim before they expire</span>
  <span class="free-games-banner__cta">See all →</span>
</a>

<!-- Games Statistics -->
<div id="gamesStats" class="games-stats">
  <!-- Stats will be populated by JavaScript -->
</div>

<!-- Filter Bar (rendered by games-table.js) -->
<div class="filter-bar" id="filterBar" role="toolbar" aria-label="Game filters"></div>

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


<script src="/assets/js/free-games-overlay.js" defer></script>
<script src="/assets/js/games-table.js"></script>


<!-- Table styles in _sass/games-table-optimized.scss -->
