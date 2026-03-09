---
layout: junkstore-page
title: "Junk Store Help"
description: "Junk Store help for Steam Deck - FAQ, troubleshooting, tutorials, and game compatibility. Covers both Decky Plugin and Pro Version."
permalink: /help/
---
<div id="top"></div>

<!-- ==================== COMPACT HEADER ==================== -->
<section class="help-header-compact">
  <!-- Search First with tooltip inline -->
  <div class="search-primary">
    <div class="search-box-large">
      <input type="text" id="faq-search" placeholder="Search for answers..." aria-label="Search FAQ">
      <button type="button" id="faq-clear-search" class="clear-btn" title="Clear search">×</button>
      <button class="badge-help-btn" id="badge-help-trigger" title="What do the badges mean?">?</button>
      <!-- Tooltip -->
      <div class="badge-tooltip" id="badge-tooltip">
        <div class="tooltip-content">
          <strong>Badge Guide:</strong>
          <div class="tooltip-item"><span class="badge-sample decky">Decky</span> Decky Plugin only</div>
          <div class="tooltip-item"><span class="badge-sample pro">Pro</span> Pro Version only</div>
          <div class="tooltip-item"><span class="badge-sample both">Universal</span> Same for both versions</div>
          <div class="tooltip-item"><span class="badge-sample version-specific">Version Specific</span> Different answer per version</div>
        </div>
      </div>
    </div>
    <div class="search-info-line" id="search-info">Loading...</div>
  </div>

  <!-- Centered Version Buttons -->
  <div class="version-buttons-centered">
    <button class="version-btn decky" data-filter="decky" onclick="selectVersion('decky')">Decky Plugin</button>
    <button class="version-btn pro" data-filter="pro" onclick="selectVersion('pro')">Pro Version</button>
    <button class="version-btn all selected" data-filter="all" onclick="selectVersion('all')">Show All</button>
  </div>
</section>

<!-- Tab Navigation -->
<div class="help-tabs-compact">
  <button class="help-tab active" data-tab="faq" onclick="switchTab('faq')">FAQ</button>
  <button class="help-tab" data-tab="quicktips" onclick="switchTab('quicktips')">Quick Tips</button>
  <button class="help-tab" data-tab="troubleshooting" onclick="switchTab('troubleshooting')">Troubleshooting</button>
  <button class="help-tab" data-tab="tutorials" onclick="switchTab('tutorials')">Tutorials</button>
</div>

<!-- ==================== FAQ TAB ==================== -->
<div id="tab-faq" class="tab-panel active">

<!-- FAQ Content - Collapsible Categories -->
<div id="faq-content-redesign" class="faq-collapsible">
  <div class="loading-indicator">
    <p>Loading FAQ...</p>
  </div>
</div>

</div>

<!-- ==================== QUICK TIPS TAB ==================== -->
<div id="tab-quicktips" class="tab-panel">

<div id="quicktips-content" class="faq-collapsible">
  <div class="loading-indicator">
    <p>Loading quick tips...</p>
  </div>
</div>

</div>

<!-- ==================== TROUBLESHOOTING TAB ==================== -->
<div id="tab-troubleshooting" class="tab-panel">

<div id="troubleshooting-content" class="ts-collapsible">
  <div class="loading-indicator">
    <p>Loading troubleshooting...</p>
  </div>
</div>

</div>

<!-- ==================== TUTORIALS TAB ==================== -->
<div id="tab-tutorials" class="tab-panel">

<div id="tutorials-content">
  <!-- Skeleton loader while Firebase loads -->
  <div class="tutorials-skeleton">
    <div class="skeleton-section-header"></div>
    <div class="tutorial-grid">
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
    </div>
    <div class="skeleton-section-header" style="margin-top: 2rem;"></div>
    <div class="tutorial-grid">
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
    </div>
  </div>
</div>

</div>

<!-- ==================== MORE RESOURCES ==================== -->
<hr style="margin: 2rem 0;">

<div class="resources-row">
  <a href="/tested-games/" class="resource-card">
    <span class="resource-icon">🎮</span>
    <span class="resource-text"><strong><span data-games-count>900</span>+ Games Tested</strong></span>
  </a>
  <a href="https://discord.gg/6mRUhR6Teh" class="resource-card discord" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-discord"></i></span>
    <span class="resource-text"><strong>Discord</strong></span>
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" class="resource-card reddit" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-reddit"></i></span>
    <span class="resource-text"><strong>Reddit</strong></span>
  </a>
</div>

<!-- Mobile FAB -->
<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<style>
/* ==================== REDESIGNED HELP PAGE ==================== */

/* ========== COMPACT HEADER ========== */
.help-header-compact {
  max-width: 800px;
  margin: 0 auto 1rem auto;
  padding: 0 1rem;
}

/* Large Search Box */
.search-primary {
  margin-bottom: 1rem;
}

.search-box-large {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box-large input {
  width: 100%;
  padding: 18px 50px 18px 24px;
  font-size: 1.1rem;
  border: 2px solid #444;
  border-radius: 12px;
  background: #1a1a2e;
  color: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-box-large input:focus {
  outline: none;
  border-color: #007acc;
  box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.2);
}

.search-box-large input::placeholder {
  color: #888;
}

.clear-btn {
  position: absolute;
  right: 50px;
  background: none;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
  display: none;
  padding: 0;
  line-height: 1;
}

.clear-btn:hover {
  color: #fff;
}

/* Search info line */
.search-info-line {
  text-align: center;
  color: #888;
  font-size: 0.85rem;
  margin-top: 8px;
}

/* Centered Version Buttons */
.version-buttons-centered {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
}

.version-btn {
  padding: 8px 16px;
  border: 2px solid #444;
  border-radius: 6px;
  background: transparent;
  color: #aaa;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.version-btn:hover {
  border-color: #666;
  color: #fff;
}

.version-btn.decky.selected {
  background: rgba(33, 150, 243, 0.2);
  border-color: #2196f3;
  color: #2196f3;
}

.version-btn.pro.selected {
  background: rgba(230, 115, 0, 0.2);
  border-color: #e67300;
  color: #e67300;
}

.version-btn.all.selected {
  background: rgba(76, 175, 80, 0.2);
  border-color: #4caf50;
  color: #4caf50;
}

/* Badge Help Button - inside search box */
.badge-help-btn {
  position: absolute;
  right: 14px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #555;
  background: #1a1a2e;
  color: #888;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.badge-help-btn:hover {
  border-color: #007acc;
  color: #007acc;
  background: #1e2a38;
}

/* Badge Tooltip */
.badge-tooltip {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #1e2a38;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 280px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: none;
}

.badge-tooltip.visible {
  display: block;
}

.tooltip-content strong {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}

.tooltip-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  color: #ccc;
  font-size: 0.85rem;
}

.badge-sample {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
}

.badge-sample.decky { background: #2196f3; color: #fff; }
.badge-sample.pro { background: #e67300; color: #fff; }
.badge-sample.both { background: #4caf50; color: #fff; }
.badge-sample.version-specific { background: #9b59b6; color: #fff; }

/* ========== COMPACT TABS ========== */
.help-tabs-compact {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 1.5rem 0 1rem 0;
  padding: 0 1rem;
}

.help-tab {
  padding: 10px 20px;
  border: 2px solid #444;
  border-radius: 6px;
  background: #1e2a38;
  color: #ccc;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.help-tab:hover {
  border-color: #007acc;
  color: #fff;
}

.help-tab.active {
  background: #007acc;
  border-color: #007acc;
  color: #fff;
}

/* ========== TAB PANELS ========== */
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

/* ========== COLLAPSIBLE FAQ ========== */
.faq-collapsible,
.ts-collapsible {
  margin: 2rem 0;
}

/* Category Accordion - Clean rounded style */
.category-accordion {
  margin-bottom: 16px;
  border: 1px solid #444;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a2e;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #1e2a38 0%, #1a1a2e 100%);
  cursor: pointer;
  transition: background 0.2s;
  user-select: none;
}

.category-header:hover {
  background: linear-gradient(135deg, #252a3a 0%, #1e2030 100%);
}

.category-header h3 {
  margin: 0;
  font-size: 1.05rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
}

.category-header .expand-icon {
  transition: transform 0.25s ease;
  color: #007acc;
  font-size: 0.9rem;
}

.category-accordion.expanded .category-header .expand-icon {
  transform: rotate(90deg);
}

.category-count {
  background: rgba(0, 122, 204, 0.2);
  color: #66bfff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.category-content {
  display: none;
}

.category-accordion.expanded .category-content {
  display: block;
}

/* Ensure consistent spacing - reset any paragraph margins in answers */
.faq-item-compact .faq-answer p:first-child {
  margin-top: 0;
}

.faq-item-compact .faq-answer p:last-child {
  margin-bottom: 0;
}

/* FAQ Items - Boxed rounded style */
details.faq-item-compact {
  margin: 8px;
  border: 1px solid #444;
  border-radius: 10px;
  background: #1e2a38;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

details.faq-item-compact:hover {
  border-color: #555;
}

details.faq-item-compact[open] {
  border-color: #007acc;
  box-shadow: 0 2px 12px rgba(0, 122, 204, 0.15);
}

.faq-item-compact summary {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  cursor: pointer;
  list-style: none;
  font-weight: 600;
  transition: background 0.15s;
}

.faq-item-compact summary::-webkit-details-marker {
  display: none;
}

.faq-item-compact summary:hover {
  background: rgba(255, 255, 255, 0.05);
}

.faq-item-compact summary .question-text {
  flex: 1;
  color: #fff;
  font-size: 0.95rem;
}

.faq-item-compact summary .product-badge {
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
  min-width: 70px;
  text-align: center;
}

.faq-item-compact .faq-answer {
  padding: 0 18px 18px 18px;
  color: #ccc;
  line-height: 1.7;
  font-size: 0.95rem;
  border-top: 1px solid #333;
  margin-top: 0;
  font-weight: normal;
}

.faq-item-compact .faq-answer div {
  font-weight: normal;
}

.faq-item-compact .faq-answer a {
  color: #66bfff;
}

.faq-item-compact .faq-answer a:hover {
  text-decoration: underline;
}

.faq-item-compact .faq-answer ul,
.faq-item-compact .faq-answer ol {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.faq-item-compact .faq-answer li {
  margin-bottom: 0.4rem;
}

/* Normalize Firebase content styling */
.faq-item-compact .faq-answer > div:first-child {
  margin-top: 0.5rem;
}

.faq-item-compact .faq-answer > div:last-child {
  margin-bottom: 0 !important;
}

/* Reset any text-center CTA styling that might affect spacing */
.faq-item-compact .faq-answer .text-center {
  margin: 1rem 0 0 0 !important;
  padding: 0 !important;
}

/* Product badges */
.decky-badge { background: #2196f3; color: white; }
.pro-badge { background: #e67300; color: white; }
.both-badge { background: #4caf50; color: white; }
.version-specific-badge { background: #9b59b6; color: white; }

/* Hidden items */
.faq-item-compact.hidden,
.ts-item.hidden,
.qt-item.hidden,
.category-accordion.hidden {
  display: none !important;
}

/* No results message */
.no-results {
  text-align: center;
  padding: 3rem;
  color: #888;
}

/* ========== TUTORIALS ========== */
.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.tutorial-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 28px 20px 20px 20px;
  background-color: #1e2a38;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  overflow: visible;
}

.tutorial-item:hover {
  border-color: #e67300;
  transform: translateY(-2px);
}

.tutorial-item h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

.tutorial-item h4 a {
  color: #fff;
  text-decoration: none;
}

.tutorial-item h4 a:hover {
  color: #e67300;
}

.tutorial-item p {
  margin-bottom: 15px;
  color: #ccc;
}

/* Tutorial Tags - positioned badge */
.tutorial-tag {
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.tutorial-tag.decky-tag { background: #2196f3; color: white; }
.tutorial-tag.pro-tag { background: #e67300; color: white; }
.tutorial-tag.both-tag { background: #4caf50; color: white; }

.tutorial-item.hidden {
  display: none;
}

/* ========== TIPS GRID (Quick Tips & Tricks) ========== */
.tips-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.tip-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 18px;
  background-color: #1e2a38;
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid #ffd700;
  cursor: pointer;
}

.tip-item:hover {
  border-color: #ffd700;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.2);
}

.tip-item h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.tip-item h4 a {
  color: #fff;
  text-decoration: none;
}

.tip-item h4 a:hover {
  color: #ffd700;
}

.tip-item p {
  margin-bottom: 12px;
  color: #ccc;
  font-size: 0.95em;
}

.tip-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 600;
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
  margin-right: 8px;
}

.tip-item .tutorial-tag {
  position: static;
  display: inline-block;
  box-shadow: none;
}

.tip-item.hidden {
  display: none;
}

/* Tutorial Section Headers */
.tutorial-section-header {
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 1.3rem;
  color: #fff;
}

.tutorial-section-header:first-child {
  margin-top: 0;
}

/* Tutorial Skeleton Loaders */
.tutorials-skeleton {
  padding: 1rem 0;
}

.skeleton-section-header {
  height: 28px;
  width: 200px;
  margin: 0 auto 1rem auto;
  background: linear-gradient(90deg, #1e2a38 25%, #2d3748 50%, #1e2a38 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-tutorial-card {
  height: 100px;
  background: linear-gradient(90deg, #1e2a38 25%, #2d3748 50%, #1e2a38 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ========== RESOURCES ROW ========== */
.resources-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: nowrap;
  margin: 2rem auto;
}

.resource-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #1e2a38;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
}

.resource-card:hover {
  border-color: #007acc;
  transform: translateY(-2px);
  color: #fff;
}

.resource-card.discord:hover { border-color: #5865f2; }
.resource-card.reddit:hover { border-color: #ff4500; }

.resource-icon {
  font-size: 1.2rem;
}

/* ========== MOBILE FAB ========== */
.mobile-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #007acc;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
}

.mobile-fab.visible {
  opacity: 1;
  visibility: visible;
}

/* ========== LOADING ========== */
.loading-indicator {
  text-align: center;
  padding: 3rem;
  color: #888;
}

/* ========== MOBILE RESPONSIVE ========== */
@media (max-width: 600px) {
  .filter-row {
    flex-direction: column;
    align-items: stretch;
  }

  .version-buttons {
    justify-content: center;
  }

  .version-btn {
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  .filter-info {
    justify-content: center;
  }

  .help-tabs-compact {
    gap: 6px;
  }

  .help-tab {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  .search-box-large input {
    padding: 14px 45px 14px 16px;
    font-size: 1rem;
  }

  .resources-row {
    gap: 8px;
  }

  .resource-card {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
}
</style>

<script>
// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize version from localStorage or default to 'all'
  const savedVersion = localStorage.getItem('junkstore-version') || 'all';
  selectVersion(savedVersion, false);

  // Initialize tab from URL hash
  const hash = window.location.hash.substring(1);
  if (['faq', 'quicktips', 'troubleshooting', 'tutorials'].includes(hash)) {
    switchTab(hash, false);
  }

  // Badge tooltip toggle
  const helpBtn = document.getElementById('badge-help-trigger');
  const tooltip = document.getElementById('badge-tooltip');

  helpBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    tooltip.classList.toggle('visible');
  });

  document.addEventListener('click', function() {
    tooltip.classList.remove('visible');
  });
});

// Show/hide mobile FAB
window.addEventListener('scroll', function() {
  const fab = document.getElementById('mobile-fab');
  if (window.scrollY > 300) {
    fab.classList.add('visible');
  } else {
    fab.classList.remove('visible');
  }
});

// ==================== VERSION SELECTION ====================
function selectVersion(version, updateUrl = true) {
  // Update button states
  document.querySelectorAll('.version-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.filter === version) {
      btn.classList.add('selected');
    }
  });

  // Save preference
  localStorage.setItem('junkstore-version', version);

  // Apply filtering to each section
  if (window.filterFAQRedesign) window.filterFAQRedesign(version);
  if (window.filterQuickTips) window.filterQuickTips(version);
  if (window.filterTroubleshooting) window.filterTroubleshooting(version);
  filterTutorials(version);
}

function updateCategoryVisibility() {
  document.querySelectorAll('.category-accordion').forEach(category => {
    const visibleItems = category.querySelectorAll('.faq-item-compact:not(.hidden)');
    const countEl = category.querySelector('.category-count');
    if (countEl) {
      countEl.textContent = visibleItems.length;
    }
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  updateSearchInfo();
}

function updateSearchInfo() {
  const searchInfo = document.getElementById('search-info');
  // Only count FAQ items in the FAQ tab
  const visibleItems = document.querySelectorAll('#faq-content-redesign .faq-item-compact:not(.hidden)');
  const totalItems = document.querySelectorAll('#faq-content-redesign .faq-item-compact');
  if (searchInfo && totalItems.length > 0) {
    searchInfo.textContent = `${visibleItems.length} of ${totalItems.length} questions`;
  }
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName, updateUrl = true) {
  document.querySelectorAll('.help-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');

  if (updateUrl) {
    history.replaceState(null, '', '#' + tabName);
  }
}

// ==================== TUTORIAL FILTERING ====================
function filterTutorials(version) {
  // Filter tutorial items
  document.querySelectorAll('.tutorial-item').forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');

    let show = version === 'all' ||
               (version === 'decky' && (isDecky || isBoth)) ||
               (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !show);
  });

  // Filter tip items (Quick Tips & Tricks)
  document.querySelectorAll('.tip-item').forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');

    let show = version === 'all' ||
               (version === 'decky' && (isDecky || isBoth)) ||
               (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !show);
  });
}

// ==================== SEARCH ====================
document.addEventListener('faqLoaded', function() {
  const searchInput = document.getElementById('faq-search');
  const clearBtn = document.getElementById('faq-clear-search');

  searchInput.addEventListener('input', function() {
    const term = this.value.trim().toLowerCase();

    clearBtn.style.display = term ? 'block' : 'none';

    // Only search FAQ items in the FAQ tab
    document.querySelectorAll('#faq-content-redesign .faq-item-compact').forEach(item => {
      const text = item.textContent.toLowerCase();
      const matchesSearch = !term || text.includes(term);
      const isVersionHidden = item.classList.contains('version-hidden');

      item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
    });

    // Auto-expand categories with matches when searching
    if (term) {
      document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
        const hasVisible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length > 0;
        if (hasVisible) cat.classList.add('expanded');
      });
    }

    // Update FAQ category visibility and counts
    document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
      const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
      const countEl = cat.querySelector('.category-count');
      if (countEl) countEl.textContent = visible;
      cat.classList.toggle('hidden', visible === 0);
    });
    updateSearchInfo();
  });

  clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
    }
  });
});

// ==================== CATEGORY TOGGLE ====================
function toggleCategory(el) {
  event.stopPropagation();
  const accordion = el.closest('.category-accordion');
  if (accordion) {
    accordion.classList.toggle('expanded');
  }
}
</script>

<!-- Firebase FAQ Loader (Modified for collapsible layout) -->
<script>
(async function loadFAQCollapsible() {
  if (!window.firebaseDb) {
    setTimeout(loadFAQCollapsible, 100);
    return;
  }

  const container = document.getElementById('faq-content-redesign');
  if (!container) return;

  try {
    const db = window.firebaseDb;
    const snapshot = await window.firebaseGetDocs(window.firebaseCollection(db, 'faq'));

    if (snapshot.empty) {
      container.innerHTML = '<p class="no-results">No FAQ items available.</p>';
      return;
    }

    // Collect and group items (exclude quicktips - they go in Quick Tips tab)
    const items = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.isActive && data.contentType !== 'quicktip') items.push(data);
    });

    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    // Sort within categories
    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Category order
    const catOrder = ['Overview', 'Pricing & Trial', 'Setup & Access', 'Managing Games', 'Game Settings', 'Game Compatibility', 'GOG Extension', 'Help & Support'];
    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const iA = catOrder.indexOf(a), iB = catOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render
    let html = '';
    sortedCats.forEach((cat, idx) => {
      const isFirst = idx === 0;
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact" id="${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
            </summary>
            <div class="faq-answer">${item.answer}</div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
    document.dispatchEvent(new CustomEvent('faqLoaded'));

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterFAQRedesign(version);

  } catch (err) {
    console.error('FAQ load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load FAQ.</p>';
  }
})();

// FAQ filter function
window.filterFAQRedesign = function(version) {
  // Only select FAQ items in the FAQ tab (not TS or QT items)
  document.querySelectorAll('#faq-content-redesign .faq-item-compact').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
    item.classList.toggle('version-hidden', !show);
  });

  // Update FAQ category visibility
  document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });

  updateSearchInfo();
};
</script>

<!-- Firebase Troubleshooting Loader -->
<script>
(async function loadTSCollapsible() {
  if (!window.firebaseDb) {
    setTimeout(loadTSCollapsible, 100);
    return;
  }

  const container = document.getElementById('troubleshooting-content');
  if (!container) return;

  try {
    const db = window.firebaseDb;
    const snapshot = await window.firebaseGetDocs(window.firebaseCollection(db, 'troubleshooting'));

    if (snapshot.empty) {
      container.innerHTML = '<p class="no-results">No troubleshooting items available.</p>';
      return;
    }

    const items = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.isActive) items.push(data);
    });

    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    const sortedCats = Object.keys(grouped).sort();

    let html = '';
    sortedCats.forEach((cat, idx) => {
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact ts-item" id="${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.title || item.problem}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
            </summary>
            <div class="faq-answer">
              ${item.problem ? `<div class="ts-problem"><h4>Problem</h4><p>${item.problem}</p></div>` : ''}
              ${item.solution ? `<div class="ts-solution"><h4>Solution</h4>${item.solution}</div>` : ''}
            </div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
    document.dispatchEvent(new CustomEvent('troubleshootingLoaded'));

    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterTroubleshooting(version);

  } catch (err) {
    console.error('TS load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load troubleshooting.</p>';
  }
})();

window.filterTroubleshooting = function(version) {
  document.querySelectorAll('.ts-item').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
  });

  // Update TS category visibility
  document.querySelectorAll('#troubleshooting-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.ts-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
};
</script>

<!-- Quick Tips Loader (filters "How to" questions from FAQ) -->
<script>
(async function loadQuickTips() {
  if (!window.firebaseDb) {
    setTimeout(loadQuickTips, 100);
    return;
  }

  const container = document.getElementById('quicktips-content');
  if (!container) return;

  try {
    const db = window.firebaseDb;
    const snapshot = await window.firebaseGetDocs(window.firebaseCollection(db, 'faq'));

    if (snapshot.empty) {
      container.innerHTML = '<p class="no-results">No quick tips available.</p>';
      return;
    }

    // Filter for items marked as quicktip
    const items = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.isActive && data.contentType === 'quicktip') {
        items.push(data);
      }
    });

    if (items.length === 0) {
      container.innerHTML = '<p class="no-results">No quick tips available.</p>';
      return;
    }

    // Group by category
    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    // Sort within categories
    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Category order for Quick Tips
    const catOrder = ['Managing Games', 'Game Settings'];
    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const iA = catOrder.indexOf(a), iB = catOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render
    let html = '';
    sortedCats.forEach((cat, idx) => {
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact qt-item" id="qt-${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
            </summary>
            <div class="faq-answer">${item.answer}</div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterQuickTips(version);

  } catch (err) {
    console.error('Quick Tips load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load quick tips.</p>';
  }
})();

window.filterQuickTips = function(version) {
  document.querySelectorAll('.qt-item').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
  });

  // Update category visibility
  document.querySelectorAll('#quicktips-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.qt-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
};
</script>

<!-- Firebase Tutorials Loader (includes Quick Tips from blog/tips/posts) -->
<script>
(async function loadTutorials() {
  if (!window.firebaseDb) {
    setTimeout(loadTutorials, 100);
    return;
  }

  const container = document.getElementById('tutorials-content');
  if (!container) return;

  try {
    const db = window.firebaseDb;

    // Fetch tutorials and quick tips in parallel
    const [tutorialsSnapshot, tipsSnapshot] = await Promise.all([
      window.firebaseGetDocs(window.firebaseCollection(db, 'tutorials')),
      window.firebaseGetDocs(window.firebaseCollection(db, 'blog', 'tips', 'posts'))
    ]);

    // Collect tutorials
    const tutorials = [];
    tutorialsSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.isActive !== false) {
        tutorials.push({ id: doc.id, ...data });
      }
    });

    // Collect quick tips
    const quickTips = [];
    tipsSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.isPublished !== false) {
        quickTips.push({ id: doc.id, ...data });
      }
    });

    // Sort tutorials by order
    tutorials.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Sort quick tips by order or date
    quickTips.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0);
    });

    // Group tutorials by section
    const sections = {};
    tutorials.forEach(t => {
      const section = t.section || 'other';
      if (!sections[section]) sections[section] = [];
      sections[section].push(t);
    });

    // Section display names
    const sectionNames = {
      'installation': 'Installation Guides',
      'configuration': 'Configuration & Setup',
      'other': 'Other Tutorials'
    };

    // Section order
    const sectionOrder = ['installation', 'configuration', 'other'];
    const sortedSections = Object.keys(sections).sort((a, b) => {
      const iA = sectionOrder.indexOf(a), iB = sectionOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render tutorials
    let html = '';
    sortedSections.forEach((section, idx) => {
      const sectionTitle = sectionNames[section] || section.charAt(0).toUpperCase() + section.slice(1);

      if (idx > 0) {
        html += '<hr style="margin: 2rem 0;">';
      }

      html += `<h2 style="text-align: center;">${sectionTitle}</h2>`;
      html += '<div class="tutorial-grid">';

      sections[section].forEach(t => {
        const category = t.category || 'both';
        const tagClass = category === 'decky' ? 'decky-tag' :
                        category === 'pro' ? 'pro-tag' : 'both-tag';
        const tagLabel = category === 'decky' ? 'Decky Plugin' :
                        category === 'pro' ? 'Pro Version' : 'Universal';
        const itemClass = category === 'decky' ? 'decky' :
                         category === 'pro' ? 'pro' : 'both';

        html += `
          <div class="tutorial-item ${itemClass}" data-category="${category}">
            <h4><a href="${t.permalink || '/tutorials/' + t.slug}">${t.title}</a></h4>
            <p>${t.excerpt || t.description || ''}</p>
            <span class="tutorial-tag ${tagClass}">${tagLabel}</span>
          </div>
        `;
      });

      html += '</div>';
    });

    // Render Quick Tips section (if we have tips)
    if (quickTips.length > 0) {
      html += '<hr style="margin: 2rem 0;">';
      html += '<h2 style="text-align: center;">Quick Tips & Tricks</h2>';
      html += '<div class="tips-grid">';

      quickTips.forEach(tip => {
        const product = tip.product || 'both';
        const tagClass = product === 'decky' ? 'decky-tag' :
                        product === 'pro' ? 'pro-tag' : 'both-tag';
        const tagLabel = product === 'decky' ? 'Decky Plugin' :
                        product === 'pro' ? 'Pro Version' : 'Universal';
        const itemClass = product === 'decky' ? 'decky' :
                         product === 'pro' ? 'pro' : 'both';
        const readTime = tip.readTime || '3 min read';
        const permalink = tip.permalink || `/blog/${tip.slug || tip.id}/`;

        html += `
          <div class="tip-item ${itemClass}" data-product="${product}">
            <h4><a href="${permalink}">${tip.title}</a></h4>
            <p>${tip.excerpt || tip.description || ''}</p>
            <span class="tip-tag">${readTime}</span>
            <span class="tutorial-tag ${tagClass}">${tagLabel}</span>
          </div>
        `;
      });

      html += '</div>';
    }

    container.innerHTML = html;

    // Make tutorial and tip boxes clickable
    document.querySelectorAll('#tutorials-content .tutorial-item, #tutorials-content .tip-item').forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.button === 0 && e.target.tagName !== 'A') {
          const link = this.querySelector('h4 a');
          if (link) window.location.href = link.href;
        }
      });
    });

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    filterTutorials(version);

  } catch (err) {
    console.error('Tutorials load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load tutorials.</p>';
  }
})();
</script>
