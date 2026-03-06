---
layout: splash
title: "Junk Store Help"
description: "Complete help for Junk Store - Decky Plugin and Pro Version. FAQ, troubleshooting, tutorials, and game compatibility."
permalink: /old-help/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Junk Store Help"
excerpt: "FAQ, troubleshooting & tutorials for setup, features, and game compatibility"
---
<div id="top"></div>

<!-- Version Selection -->
<section class="version-selector-section">
  <h2 style="text-align: center;">Filter by Version</h2>
  <p style="text-align: center; color: #aaa; margin-bottom: 20px;">Select your version to filter relevant content across all tabs.</p>
  <div class="version-selector">
    <div class="version-option decky filter-card" id="select-decky" data-filter="decky" onclick="selectVersion('decky')">
      <div class="version-check" id="check-decky"></div>
      <h3>Decky Plugin</h3>
      <p>Free - via Decky Loader</p>
      <small>Epic Games + GOG Extension</small>
    </div>
    <div class="version-option pro filter-card" id="select-pro" data-filter="pro" onclick="selectVersion('pro')">
      <div class="version-check" id="check-pro"></div>
      <h3>Pro Version</h3>
      <p><span data-pricing="price">$40</span>/year standalone app</p>
      <small>Epic, GOG, Amazon & itch.io</small>
    </div>
    <div class="version-option both filter-card" id="select-all" data-filter="all" onclick="selectVersion('all')">
      <div class="version-check" id="check-all"></div>
      <h3>Show All</h3>
      <p>View all content</p>
      <small>No filtering</small>
    </div>
  </div>
</section>

---

<!-- Tab Navigation -->
<div class="help-tabs">
  <button class="help-tab active" data-tab="faq" onclick="switchTab('faq')">FAQ</button>
  <button class="help-tab" data-tab="troubleshooting" onclick="switchTab('troubleshooting')">Troubleshooting</button>
  <button class="help-tab" data-tab="tutorials" onclick="switchTab('tutorials')">Tutorials</button>
</div>

<!-- ==================== FAQ TAB ==================== -->
<div id="tab-faq" class="tab-panel active">

<!-- Search Box -->
<div class="faq-search-container">
  <div class="search-box">
    <input type="text" id="faq-search" placeholder="Search FAQ..." aria-label="Search FAQ questions">
    <button type="button" id="faq-clear-search" class="clear-button" title="Clear search">&#10005;</button>
  </div>
  <div class="search-results-info" id="faq-search-info">Loading FAQ...</div>
</div>

<!-- Badge Legend -->
<div class="badge-legend">
  <span class="legend-label">Badges:</span>
  <span class="legend-item"><span class="product-tag decky">Decky</span> Decky Plugin only</span>
  <span class="legend-item"><span class="product-tag pro">Pro</span> Pro Version only</span>
  <span class="legend-item"><span class="product-tag both">Universal</span> Same for both</span>
  <span class="legend-item"><span class="product-tag version-specific">Version Specific</span> Different answer per version</span>
</div>

<!-- FAQ Content - Loaded from Firebase -->
<div id="faq-content" class="faq-grid">
  <div class="loading-indicator">
    <div class="faq-skeleton">
      <div class="skeleton skeleton-badge"></div>
      <div class="skeleton skeleton-question"></div>
      <div class="skeleton skeleton-answer"></div>
      <div class="skeleton skeleton-answer"></div>
      <div class="skeleton skeleton-answer"></div>
    </div>
    <div class="faq-skeleton">
      <div class="skeleton skeleton-badge"></div>
      <div class="skeleton skeleton-question"></div>
      <div class="skeleton skeleton-answer"></div>
      <div class="skeleton skeleton-answer"></div>
    </div>
    <div class="faq-skeleton">
      <div class="skeleton skeleton-badge"></div>
      <div class="skeleton skeleton-question"></div>
      <div class="skeleton skeleton-answer"></div>
      <div class="skeleton skeleton-answer"></div>
      <div class="skeleton skeleton-answer"></div>
    </div>
  </div>
</div>

</div>

<!-- ==================== TROUBLESHOOTING TAB ==================== -->
<div id="tab-troubleshooting" class="tab-panel">

<!-- Search Box -->
<div class="ts-search-container">
  <div class="search-box">
    <input type="text" id="ts-search" placeholder="Search troubleshooting..." aria-label="Search troubleshooting issues">
    <button type="button" id="ts-clear-search" class="clear-button" title="Clear search">&#10005;</button>
  </div>
  <div class="search-results-info" id="ts-search-info">Loading troubleshooting...</div>
</div>

<!-- Badge Legend -->
<div class="badge-legend">
  <span class="legend-label">Badges:</span>
  <span class="legend-item"><span class="product-tag decky">Decky</span> Decky Plugin only</span>
  <span class="legend-item"><span class="product-tag pro">Pro</span> Pro Version only</span>
  <span class="legend-item"><span class="product-tag both">Universal</span> Same for both</span>
  <span class="legend-item"><span class="product-tag version-specific">Version Specific</span> Different solution per version</span>
</div>

<!-- Troubleshooting Content - Loaded from Firebase -->
<div id="troubleshooting-content" class="ts-grid">
  <div class="loading-indicator">
    <p>Loading troubleshooting items...</p>
  </div>
</div>

</div>

<!-- ==================== TUTORIALS TAB ==================== -->
<div id="tab-tutorials" class="tab-panel">

<!-- Badge Legend -->
<div class="badge-legend">
  <span class="legend-label">Badges:</span>
  <span class="legend-item"><span class="product-tag decky">Decky</span> Decky Plugin only</span>
  <span class="legend-item"><span class="product-tag pro">Pro</span> Pro Version only</span>
  <span class="legend-item"><span class="product-tag both">Universal</span> Applies to both</span>
</div>

<h2 style="text-align: center;"> Installation Guides</h2>

<div class="tutorial-grid">

<div class="tutorial-item decky">
  <h4><a href="/tutorials/install-decky-plugin">Install Junk Store Decky Plugin</a></h4>
  <p>Complete setup guide for the free Decky plugin</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tutorial-item pro">
  <h4><a href="/tutorials/install-junk-store-2">Install Junk Store Pro</a></h4>
  <p>Setup guide for the Professional pro version</p>
  <span class="tutorial-tag pro-tag">Pro Version</span>
</div>

<div class="tutorial-item decky">
  <h4><a href="/tutorials/gogextension/">GOG Extension Setup</a></h4>
  <p>Add GOG games to your Decky plugin</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

</div>

<hr style="margin: 2rem 0;">

<h2 style="text-align: center;"> Configuration & Setup</h2>

<div class="tutorial-grid">

<div class="tutorial-item both">
  <h4><a href="/tutorials/proton-versions">Change Proton Versions</a></h4>
  <p>Fix compatibility issues by switching Proton versions</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/oauth-login">Third-Party Login (OAuth)</a></h4>
  <p>Login with Xbox, PlayStation, Nintendo accounts</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/ubisoft-games">Ubisoft Connect Games</a></h4>
  <p>Setup guide for Ubisoft games through Epic Games Store</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item decky">
  <h4><a href="/tutorials/cpp-runtime">Visual C++ Runtime</a></h4>
  <p>Install required Visual C++ components for games</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/wine-cellar">Wine Cellar Setup</a></h4>
  <p>Advanced Wine configuration and management</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item pro">
  <h4><a href="/tutorials/change-game-language/">Change Language Settings</a></h4>
  <p>Change your Epic, GOG, or Amazon game language settings directly in Game Mode</p>
  <span class="tutorial-tag pro-tag">Pro Version</span>
</div>

</div>

<hr style="margin: 2rem 0;">

<h2 style="text-align: center;">Quick Tips & Tricks</h2>

<div class="tips-grid">

<div class="tip-item both">
  <h4><a href="/blog/show-hide-installed-games/">Filter to Show Only Installed Games</a></h4>
  <p>Press X to toggle between showing only installed games and your full library - each store remembers its setting</p>
  <span class="tip-tag">3 min read</span>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tip-item decky">
  <h4><a href="/blog/change-game-language-environment-variables/">Change Game Language with Environment Variables</a></h4>
  <p>Use environment variables to change the language of Epic games with multi-language support on Steam Deck</p>
  <span class="tip-tag">3 min read</span>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tip-item pro">
  <h4><a href="/blog/install-dependencies-junk-store-2/">Install Game Dependencies Without ProtonTricks</a></h4>
  <p>Skip the complex ProtonTricks setup - install Visual C++, .NET Framework, and DirectX with one click</p>
  <span class="tip-tag">4 min read</span>
  <span class="tutorial-tag pro-tag">Pro Version</span>
</div>

<div class="tip-item both">
  <h4><a href="/blog/games-compatibility-table-showcase/">Did You Know About Our Games Compatibility Table?</a></h4>
  <p>Our game compatibility table has been helping Steam Deck users for months. Here's what you've been missing</p>
  <span class="tip-tag">3 min read</span>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tip-item both">
  <h4><a href="/blog/custom-launch-arguments/">Add Custom Launch Arguments</a></h4>
  <p>Add advanced launch parameters for Epic and GOG games using Junk Store's built-in text editor</p>
  <span class="tip-tag">4 min read</span>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tip-item both">
  <h4><a href="/blog/press-y-show-all-games/">Missing the 'Press Y to Show All' Prompt</a></h4>
  <p>Only seeing A-L games in your Epic/GOG library? Look for the 'Press Y to Show All' prompt at the bottom</p>
  <span class="tip-tag">3 min read</span>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

</div>

</div>

---

<h2 style="text-align: center; margin-top: 3rem;">More Resources</h2>

<div class="content-box-container" style="max-width: 900px;">
  <div class="content-box tested-games" style="min-height: auto; padding: 15px;">
    <h3>Game Compatibility</h3>
    <p><span data-games-count>900</span>+ games tested</p>
    <a href="/tested-games/" class="button">View Games</a>
  </div>

  <div class="content-box" style="min-height: auto; padding: 15px;">
    <h3>Community</h3>
    <p>Get help & join discussion</p>
    <div class="community-buttons">
      <a href="https://discord.gg/6mRUhR6Teh" class="community-btn discord-btn" target="_blank" rel="noopener">
        <i class="fab fa-discord"></i> Discord
      </a>
      <a href="https://www.reddit.com/r/JunkStore/" class="community-btn reddit-btn" target="_blank" rel="noopener">
        <i class="fab fa-reddit"></i> Reddit
      </a>
    </div>
  </div>
</div>

<!-- Back to top -->
<div class="section-end">
  <a href="#top" class="back-to-top">↑ Back to Top</a>
</div>

<!-- Mobile floating action button -->
<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<style>
/* ========================================
   Unified Help Page Styles
   Hero styles now in hero-height-fix.scss
   ======================================== */

/* ========== VERSION SELECTOR ========== */
.version-selector-section {
  margin: 1.5rem 0;
}

.version-selector {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
}

.version-option {
  position: relative;
  text-align: center;
  padding: 15px 16px;
  border-radius: 8px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.2s ease;
}

.version-option:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.version-option.decky {
  border-color: #2196f3;
  background: rgba(33, 150, 243, 0.05);
}

.version-option.decky.selected {
  background: rgba(33, 150, 243, 0.2);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.3);
}

.version-option.decky h3 {
  color: #2196f3;
}

.version-option.pro {
  border-color: #e67300;
  background: rgba(230, 115, 0, 0.05);
}

.version-option.pro.selected {
  background: rgba(230, 115, 0, 0.2);
  box-shadow: 0 0 20px rgba(230, 115, 0, 0.3);
}

.version-option.pro h3 {
  color: #e67300;
}

.version-option.both {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.05);
}

.version-option.both.selected {
  background: rgba(76, 175, 80, 0.2);
  box-shadow: 0 0 20px rgba(76, 175, 80, 0.3);
}

.version-option.both h3 {
  color: #4caf50;
}

.version-option h3 {
  margin: 0 0 4px 0;
  font-size: 1.1em;
}

.version-option p {
  margin: 0;
  color: #ccc;
  font-size: 0.9em;
}

.version-option small {
  color: #888;
  font-size: 0.8em;
}

/* Checkmark */
.version-check {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.version-option.selected .version-check {
  background: #4caf50;
  border-color: #4caf50;
}

.version-option.selected .version-check::after {
  content: '\2713';
  color: white;
  font-weight: bold;
  font-size: 12px;
}

@media (max-width: 768px) {
  .version-selector {
    grid-template-columns: 1fr;
  }
}

/* ========== TAB NAVIGATION ========== */
.help-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 1.5rem 0;
  flex-wrap: wrap;
}

.help-tab {
  padding: 12px 24px;
  border: 2px solid #444;
  border-radius: 8px;
  background: #1e2a38;
  color: #ccc;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
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

@media (max-width: 480px) {
  .help-tab {
    padding: 10px 16px;
    font-size: 0.9rem;
    flex: 1;
    text-align: center;
  }
}

/* ========== TAB PANELS ========== */
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

/* ========== SEARCH CONTAINERS ========== */
.faq-search-container,
.ts-search-container {
  max-width: 600px;
  margin: 1.5rem auto 0.5rem auto;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box input {
  width: 100%;
  padding: 16px 50px 16px 20px;
  font-size: 18px;
  border: 2px solid #444;
  border-radius: 10px;
  background: #1e2a38;
  color: #fff;
}

.search-box input:focus {
  outline: none;
  border-color: #007acc;
}

.clear-button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #888;
  font-size: 18px;
  cursor: pointer;
  display: none;
}

.clear-button:hover {
  color: #fff;
}

.search-results-info {
  text-align: center;
  margin-top: 10px;
  color: #888;
  font-size: 0.9em;
}

/* ========== BADGE LEGEND ========== */
.badge-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px 20px;
  margin: 1rem auto 1.5rem auto;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  font-size: 0.85rem;
  color: #aaa;
  max-width: 800px;
}

.badge-legend .legend-label {
  font-weight: 600;
  color: #ccc;
}

.badge-legend .legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.badge-legend .product-tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.badge-legend .product-tag.decky {
  background: #2196F3;
  color: #fff;
}

.badge-legend .product-tag.pro {
  background: #e67300;
  color: #fff;
}

.badge-legend .product-tag.both {
  background: #4caf50;
  color: #fff;
}

.badge-legend .product-tag.version-specific {
  background: #9b59b6;
  color: #fff;
}

@media (max-width: 600px) {
  .badge-legend {
    flex-direction: column;
    gap: 8px;
    text-align: left;
    align-items: flex-start;
  }
}

/* ========== LOADING INDICATOR ========== */
.loading-indicator {
  text-align: center;
  padding: 3rem;
  color: #888;
}

/* ========== FAQ GRID ========== */
.faq-grid {
  margin: 2rem 0;
}

.category-title {
  text-align: center;
  margin: 1.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #444;
}

.faq-category:first-child .category-title {
  margin-top: 1rem;
}

/* Summary text and badge layout */
.faq-box summary {
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-text {
  flex: 1;
}

.product-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  flex-shrink: 0;
  min-width: 90px;
  text-align: center;
}

.decky-badge { background: #2196f3; color: white; }
.pro-badge { background: #e67300; color: white; }
.both-badge { background: #4caf50; color: white; }
.version-specific-badge { background: #9b59b6; color: white; }

/* FAQ Answer styling */
.faq-answer {
  padding: 0.5em 0;
  color: #e8e8e8;
  line-height: 1.6;
  border-top: 1px solid #ddd;
  margin-top: 0.5em;
  font-weight: normal;
}

.faq-answer div { font-weight: normal; }
.faq-answer ul, .faq-answer ol { margin: 1rem 0; padding-left: 1.5rem; }
.faq-answer li { margin-bottom: 0.5rem; }
.faq-answer a { color: #66bfff; }
.faq-answer a:hover { text-decoration: underline; }

/* Hidden items for filtering */
.faq-item.hidden,
.faq-category.hidden,
.faq-box.search-hidden,
.faq-category.search-empty {
  display: none !important;
}

/* ========== TROUBLESHOOTING GRID ========== */
.ts-grid {
  margin: 2rem 0;
}

.ts-category:first-child .category-title {
  margin-top: 1rem;
}

/* Troubleshooting Content */
.ts-content {
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 1px solid #ddd;
  color: #e8e8e8;
  line-height: 1.5;
  font-weight: normal;
}

.ts-content div { font-weight: normal; }

/* Problem and Solution sections */
.ts-problem {
  background: rgba(102, 191, 255, 0.1);
  border-left: 3px solid #66bfff;
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}

.ts-problem h4 {
  color: #66bfff;
  margin: 0 0 8px 0;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ts-problem p { margin: 0; color: #ccc; }

.ts-solution {
  background: rgba(76, 175, 80, 0.1);
  border-left: 3px solid #4caf50;
  padding: 12px 15px;
  border-radius: 4px;
}

.ts-solution h4 {
  color: #4caf50;
  margin: 0 0 8px 0;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ts-solution ul, .ts-solution ol { margin: 0.5rem 0; padding-left: 1.5rem; }
.ts-solution li { margin-bottom: 0.5rem; }
.ts-solution a { color: #66bfff; }
.ts-solution a:hover { text-decoration: underline; }
.ts-solution code {
  background: #0d1117;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e6db74;
}

/* Hidden items for filtering */
.ts-item.hidden,
.ts-category.hidden,
.ts-item.search-hidden,
.ts-category.search-empty {
  display: none !important;
}

/* ========== TUTORIAL GRID ========== */
.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.tutorial-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
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
  margin-bottom: 0;
  color: #ccc;
}

/* Tutorial Tags */
.tutorial-tag {
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: #4caf50;
  color: white;
}

.tutorial-tag.decky-tag { background: #2196f3 !important; color: white !important; }
.tutorial-tag.pro-tag { background: #e67300 !important; color: white !important; }
.tutorial-tag.both-tag { background: #4caf50 !important; color: white !important; }

/* Tips Grid */
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

.tip-item h4 a { color: #fff; text-decoration: none; }
.tip-item h4 a:hover { color: #ffd700; }
.tip-item p { margin-bottom: 12px; color: #ccc; font-size: 0.95em; }

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
}

/* Hidden tutorials for filtering */
.tutorial-item.hidden,
.tip-item.hidden {
  display: none;
}

@media (max-width: 768px) {
  .tutorial-grid { grid-template-columns: 1fr; }
  .product-badge { font-size: 0.65em; padding: 2px 6px; }
}

/* ========== COMMUNITY BUTTONS ========== */
.community-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.community-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  color: white;
}

.community-btn:hover {
  transform: translateY(-2px);
  text-decoration: none;
  color: white;
}

.discord-btn { background: #5865f2; color: white !important; }
.discord-btn:hover { background: #4752c4; box-shadow: 0 4px 15px rgba(88, 101, 242, 0.4); color: white !important; }
.reddit-btn { background: #ff4500; color: white !important; }
.reddit-btn:hover { background: #e03d00; box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4); color: white !important; }

@media (max-width: 600px) {
  .community-buttons { flex-direction: column; align-items: center; }
  .community-btn { width: 80%; justify-content: center; }
}

/* ========== BACK TO TOP ========== */
.section-end {
  text-align: center;
  margin: 3rem 0;
}

.back-to-top {
  display: inline-block;
  padding: 10px 20px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.2s;
}

.back-to-top:hover {
  background: #007acc;
}

/* Mobile FAB */
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

.mobile-fab:hover {
  background: #0095e6;
  transform: scale(1.1);
}

/* ========== ERROR/NO CONTENT ========== */
.error-message {
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
}

.no-content {
  text-align: center;
  padding: 2rem;
  color: #888;
}
</style>

<script>
// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  // Dynamic games count from localStorage cache
  try {
    const cache = localStorage.getItem('junkstore_games_cache');
    if (cache) {
      const data = JSON.parse(cache);
      if (data.total_games) {
        const roundedCount = Math.floor(data.total_games / 100) * 100;
        document.querySelectorAll('[data-games-count]').forEach(el => {
          el.textContent = roundedCount;
        });
      }
    }
  } catch (e) {}

  // Initialize version selection from localStorage or URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlFilter = urlParams.get('filter');
  const savedVersion = localStorage.getItem('junkstore-version');

  if (urlFilter && ['decky', 'pro', 'all'].includes(urlFilter)) {
    selectVersion(urlFilter, false);
  } else if (savedVersion) {
    selectVersion(savedVersion, false);
  } else {
    selectVersion('all', false);
  }

  // Initialize tab from URL hash
  const hash = window.location.hash.substring(1);
  if (['faq', 'troubleshooting', 'tutorials'].includes(hash)) {
    switchTab(hash, false);
  } else {
    switchTab('faq', false);
  }

  // Make tutorial/tip boxes clickable
  document.querySelectorAll('.tutorial-item, .tip-item').forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.button === 0 && e.target.tagName !== 'A') {
        const link = this.querySelector('h4 a');
        if (link) window.location.href = link.href;
      }
    });
  });
});

// Show/hide mobile FAB based on scroll position
window.addEventListener('scroll', function() {
  const fab = document.getElementById('mobile-fab');
  if (window.scrollY > 300) {
    fab.classList.add('visible');
  } else {
    fab.classList.remove('visible');
  }
});

// Handle hash changes
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.substring(1);
  if (['faq', 'troubleshooting', 'tutorials'].includes(hash)) {
    switchTab(hash, false);
  }
});

// ========== VERSION SELECTION ==========
function selectVersion(version, updateUrl = true) {
  // Remove selected from all
  document.querySelectorAll('.version-option').forEach(el => el.classList.remove('selected'));

  // Add selected to clicked
  const selectedEl = document.getElementById('select-' + version);
  if (selectedEl) selectedEl.classList.add('selected');

  // Save to localStorage
  localStorage.setItem('junkstore-version', version);

  // Apply filtering to all content
  applyVersionFilter(version);

  // Update URL parameter
  if (updateUrl) {
    const url = new URL(window.location);
    if (version === 'all') {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', version);
    }
    history.replaceState(null, '', url);
  }
}

function applyVersionFilter(version) {
  // Use global filter functions from Firebase loaders if available
  if (window.filterFAQ) {
    window.filterFAQ(version);
  } else {
    filterFAQLocal(version);
  }

  if (window.filterTroubleshooting) {
    window.filterTroubleshooting(version);
  } else {
    filterTroubleshootingLocal(version);
  }

  // Filter Tutorial items (always local)
  filterTutorials(version);
}

// ========== TAB SWITCHING ==========
function switchTab(tabName, updateUrl = true) {
  // Update tab buttons
  document.querySelectorAll('.help-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    }
  });

  // Update tab panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');

  // Update URL hash
  if (updateUrl) {
    history.replaceState(null, '', '#' + tabName);
  }

  // Load Firebase content if needed (lazy loading)
  if (tabName === 'faq' && !window.faqLoaded) {
    loadFAQContent();
  }
  if (tabName === 'troubleshooting' && !window.troubleshootingLoaded) {
    loadTroubleshootingContent();
  }
}

// ========== FAQ FUNCTIONS ==========
window.faqLoaded = false;

function loadFAQContent() {
  // This will be handled by the Firebase include script
  // Just mark as loaded when the faqLoaded event fires
}

// Local fallback filter (used before Firebase loader runs)
function filterFAQLocal(version) {
  const faqBoxes = document.querySelectorAll('.faq-box');

  faqBoxes.forEach(box => {
    const itemProduct = box.dataset.product || 'both';
    let shouldShow = false;

    if (version === 'all') {
      shouldShow = true;
    } else if (version === 'decky') {
      shouldShow = itemProduct === 'decky' || itemProduct === 'both' || itemProduct === 'version-specific';
    } else if (version === 'pro') {
      shouldShow = itemProduct === 'pro' || itemProduct === 'both' || itemProduct === 'version-specific';
    }

    if (shouldShow) {
      box.classList.remove('hidden');
    } else {
      box.classList.add('hidden');
    }
  });

  // Hide empty categories
  document.querySelectorAll('.faq-category').forEach(category => {
    const visibleItems = category.querySelectorAll('.faq-box:not(.hidden):not(.search-hidden)');
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  updateFAQSearchInfo();
}

function updateFAQSearchInfo() {
  const searchInfo = document.getElementById('faq-search-info');
  const visibleBoxes = document.querySelectorAll('.faq-box:not(.hidden):not(.search-hidden)');
  const totalBoxes = document.querySelectorAll('.faq-box');
  if (searchInfo && totalBoxes.length > 0) {
    searchInfo.textContent = `Showing ${visibleBoxes.length} of ${totalBoxes.length} questions`;
  }
}

// FAQ Search
document.addEventListener('faqLoaded', function() {
  window.faqLoaded = true;
  const searchInput = document.getElementById('faq-search');
  const clearButton = document.getElementById('faq-clear-search');
  const searchInfo = document.getElementById('faq-search-info');
  const faqBoxes = document.querySelectorAll('.faq-box');

  updateFAQSearchInfo();

  // Apply current version filter
  const currentVersion = localStorage.getItem('junkstore-version') || 'all';
  filterFAQ(currentVersion);

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();

    if (searchTerm === '') {
      faqBoxes.forEach(box => box.classList.remove('search-hidden'));
      clearButton.style.display = 'none';
    } else {
      faqBoxes.forEach(box => {
        const summary = box.querySelector('summary');
        const answer = box.querySelector('.faq-answer');
        const text = (summary ? summary.textContent : '') + (answer ? answer.textContent : '');

        if (text.toLowerCase().includes(searchTerm)) {
          box.classList.remove('search-hidden');
        } else {
          box.classList.add('search-hidden');
        }
      });
      clearButton.style.display = 'inline-block';
    }

    // Hide empty categories
    document.querySelectorAll('.faq-category').forEach(category => {
      const visibleItems = category.querySelectorAll('.faq-box:not(.search-hidden):not(.hidden)');
      category.classList.toggle('search-empty', visibleItems.length === 0);
    });

    updateFAQSearchInfo();
  });

  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') clearFAQSearch();
  });

  clearButton.addEventListener('click', clearFAQSearch);

  function clearFAQSearch() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  }
});

// ========== TROUBLESHOOTING FUNCTIONS ==========
window.troubleshootingLoaded = false;

function loadTroubleshootingContent() {
  // This will be handled by the Firebase include script
}

// Local fallback filter (used before Firebase loader runs)
function filterTroubleshootingLocal(version) {
  const tsItems = document.querySelectorAll('.ts-item');

  tsItems.forEach(item => {
    const itemProduct = item.dataset.product || 'both';
    let shouldShow = false;

    if (version === 'all') {
      shouldShow = true;
    } else if (version === 'decky') {
      shouldShow = itemProduct === 'decky' || itemProduct === 'both' || itemProduct === 'version-specific';
    } else if (version === 'pro') {
      shouldShow = itemProduct === 'pro' || itemProduct === 'both' || itemProduct === 'version-specific';
    }

    if (shouldShow) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  // Hide empty categories
  document.querySelectorAll('.ts-category').forEach(category => {
    const visibleItems = category.querySelectorAll('.ts-item:not(.hidden):not(.search-hidden)');
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  updateTSSearchInfo();
}

function updateTSSearchInfo() {
  const searchInfo = document.getElementById('ts-search-info');
  const visibleItems = document.querySelectorAll('.ts-item:not(.hidden):not(.search-hidden)');
  const totalItems = document.querySelectorAll('.ts-item');
  if (searchInfo && totalItems.length > 0) {
    searchInfo.textContent = `Showing ${visibleItems.length} of ${totalItems.length} issues`;
  }
}

// Troubleshooting Search
document.addEventListener('troubleshootingLoaded', function() {
  window.troubleshootingLoaded = true;
  const searchInput = document.getElementById('ts-search');
  const clearButton = document.getElementById('ts-clear-search');
  const tsItems = document.querySelectorAll('.ts-item');

  updateTSSearchInfo();

  // Apply current version filter
  const currentVersion = localStorage.getItem('junkstore-version') || 'all';
  filterTroubleshooting(currentVersion);

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();

    if (searchTerm === '') {
      tsItems.forEach(item => item.classList.remove('search-hidden'));
      clearButton.style.display = 'none';
    } else {
      tsItems.forEach(item => {
        const summary = item.querySelector('summary');
        const content = item.querySelector('.ts-content');
        const text = (summary ? summary.textContent : '') + (content ? content.textContent : '');

        if (text.toLowerCase().includes(searchTerm)) {
          item.classList.remove('search-hidden');
        } else {
          item.classList.add('search-hidden');
        }
      });
      clearButton.style.display = 'inline-block';
    }

    // Hide empty categories
    document.querySelectorAll('.ts-category').forEach(category => {
      const visibleItems = category.querySelectorAll('.ts-item:not(.search-hidden):not(.hidden)');
      category.classList.toggle('search-empty', visibleItems.length === 0);
    });

    updateTSSearchInfo();
  });

  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') clearTSSearch();
  });

  clearButton.addEventListener('click', clearTSSearch);

  function clearTSSearch() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  }
});

// ========== TUTORIALS FUNCTIONS ==========
function filterTutorials(version) {
  const tutorialItems = document.querySelectorAll('.tutorial-item, .tip-item');

  tutorialItems.forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');

    let shouldShow = false;

    if (version === 'all') {
      shouldShow = true;
    } else if (version === 'decky') {
      shouldShow = isDecky || isBoth;
    } else if (version === 'pro') {
      shouldShow = isPro || isBoth;
    }

    if (shouldShow) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}
</script>
