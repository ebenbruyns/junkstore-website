---
layout: splash
title: "Junk Store UI Guide - Interactive Interface Tour"
description: "Interactive guide to the Junk Store interface on Steam Deck. Click features or search to learn where everything is and how to use it in Game Mode."
permalink: /ui-guide/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Start 7-Day Free Trial"
      url: "/buy_now/"
      class: "button buy-button"
excerpt: "Learn the Junk Store interface - click any feature or search for what you want to do. Everything explained visually."
---

<!-- Hero Section with Interactive Demo -->
<div class="ui-guide-hero">
  <h2 style="text-align: center; margin-bottom: 1rem;">Explore the Junk Store Interface</h2>
  <p style="text-align: center; color: #ccc; margin-bottom: 2rem;">Click hotspots on the interface or search below to learn about any feature</p>

  <!-- Quick Tour Button -->
  <div style="text-align: center; margin-bottom: 3rem;">
    <button id="start-tour-btn" class="button buy-button">
      🎮 Take a Quick Tour
    </button>
    <button id="explore-mode-btn" class="button button-secondary">
      🔍 Explore on Your Own
    </button>
  </div>
</div>

---

<!-- Search Interface -->
<div class="ui-search-container">
  <h3 style="text-align: center; margin-bottom: 1.5rem;">What do you want to do?</h3>

  <div class="search-box">
    <input
      type="text"
      id="ui-search"
      placeholder="🔍 Search features... (e.g., 'install game', 'change language', 'download queue')"
      aria-label="Search UI features"
    >
    <button type="button" id="clear-ui-search" class="clear-button" title="Clear search">✕</button>
  </div>

  <div class="search-results" id="search-results"></div>
  <div class="popular-tasks" id="popular-tasks">
    <h4>Popular Tasks:</h4>
    <div class="task-buttons">
      <button class="task-btn" data-feature="install-game">Install a Game</button>
      <button class="task-btn" data-feature="change-proton">Change Proton Version</button>
      <button class="task-btn" data-feature="download-queue">Manage Downloads</button>
      <button class="task-btn" data-feature="install-dependencies">Install Dependencies</button>
      <button class="task-btn" data-feature="change-language">Change Game Language</button>
      <button class="task-btn" data-feature="cloud-saves">Manage Cloud Saves</button>
    </div>
  </div>
</div>

---

<!-- Interactive Interface Section -->
<div class="interactive-interface">
  <h2 style="text-align: center; margin-bottom: 2rem;">Click to Explore</h2>

  <!-- Interactive Steam Deck -->
  <div class="interface-container" id="interface-container">
    <div class="hotspot-hint">
      <p>🎯 <strong>Interactive Demo</strong></p>
      <p style="font-size: 0.95em; margin-top: 0.5rem;">👆 Click the SELECT button (top left, above D-pad) or anywhere on the screen to see Junk Store interface</p>
      <p style="font-size: 0.9em; color: #888; margin-top: 0.5rem;">Click again to cycle: First Time Login → Main Menu → Back to Start</p>
    </div>
    <div class="deck-interactive-wrapper">
      <img src="/assets/images/ui-guide/steam-deck-with-junkstore.png"
           alt="Steam Deck showing Junk Store - Click to explore"
           class="full-deck-image"
           id="deck-screen"
           data-screen="0">
      <div class="select-button-indicator" onclick="openJunkStore()">
        <span>Click to Open Junk Store</span>
      </div>
    </div>
  </div>

  <!-- Feature Categories -->
  <div class="feature-categories">
    <h3 style="text-align: center; margin-top: 3rem; margin-bottom: 1.5rem;">Browse by Category</h3>

    <div class="category-grid">
      <div class="category-card" data-category="getting-started">
        <h4>🚀 Getting Started</h4>
        <p>Installing games, first-time setup, basic navigation</p>
      </div>

      <div class="category-card" data-category="library">
        <h4>📚 Library Management</h4>
        <p>Browse games, view details, organize your collection</p>
      </div>

      <div class="category-card" data-category="downloads">
        <h4>⬇️ Downloads & Updates</h4>
        <p>Download queue, pause/resume, update games</p>
      </div>

      <div class="category-card" data-category="compatibility">
        <h4>🔧 Compatibility Settings</h4>
        <p>Proton versions, dependencies, game-specific fixes</p>
      </div>

      <div class="category-card" data-category="customization">
        <h4>🎨 Game Customization</h4>
        <p>Language, DLC, launch options, artwork</p>
      </div>

      <div class="category-card" data-category="settings">
        <h4>⚙️ Settings & Preferences</h4>
        <p>Junk Store configuration, accounts, advanced options</p>
      </div>
    </div>
  </div>
</div>

---

<!-- Help Resources -->
<section class="ui-guide-resources">
  <h2 style="text-align: center; margin-bottom: 2rem;">Need More Help?</h2>

  <div class="resource-grid">
    <a href="/tutorials/" class="resource-card">
      <h4>📖 Tutorials</h4>
      <p>Step-by-step guides for common tasks</p>
    </a>

    <a href="/help/#faq" class="resource-card">
      <h4>❓ FAQ</h4>
      <p>Answers to frequently asked questions</p>
    </a>

    <a href="/help/#troubleshooting" class="resource-card">
      <h4>🔧 Troubleshooting</h4>
      <p>Fix common issues and problems</p>
    </a>

    <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="resource-card">
      <h4>💬 Discord Community</h4>
      <p>Get live help from the community</p>
    </a>
  </div>
</section>

<!-- CTA -->
<section class="ui-guide-cta" style="max-width: 800px; margin: 3rem auto; padding: 2rem 1.5rem; background: rgba(255, 163, 102, 0.05); border-radius: 12px; border: 1px solid rgba(255, 163, 102, 0.2); text-align: center;">
  <h2 style="color: #ffa366; margin-bottom: 1rem;">Ready to Try Junk Store?</h2>
  <p style="color: #e8e8e8; margin-bottom: 2rem;">Experience the Steam Deck-native way to play your Epic, GOG, Amazon & itch games.</p>
  <a href="/buy_now/" class="button buy-button">Start Your 7-Day Free Trial</a>
</section>

<script src="/assets/js/ui-guide.js"></script>
<link rel="stylesheet" href="/assets/css/ui-guide.css">
