---
layout: junkstore-splash
title: "Junk Store Features"
description: "Play Epic, GOG, Amazon & itch games on Steam Deck without Desktop Mode. Junk Store keeps you in Game Mode - see features, live demos, and why gamers choose it."
permalink: /features/
classes: wide
excerpt: "Features, demos & comparisons for Steam Deck's professional non-Steam solution"
---
<div id="top"></div>

<!-- Tab Navigation -->
<div class="features-tabs">
  <button class="features-tab active" data-tab="features" onclick="switchTab('features')">Features</button>
  <button class="features-tab" data-tab="difference" onclick="switchTab('difference')">Decky vs Pro</button>
  <button class="features-tab" data-tab="gallery" onclick="switchTab('gallery')">Gallery</button>
  <button class="features-tab" data-tab="press" onclick="switchTab('press')">Press</button>
</div>

<!-- ==================== FEATURES TAB ==================== -->
<div id="tab-features" class="tab-panel active">

<style>
/* Features Tab Header */
#tab-features .comparison-hero {
  margin: 0;
  padding: 1.5rem 1rem 0.5rem;
}

#tab-features .comparison-hero h1 {
  margin: 0 0 0.5rem 0;
}

#tab-features .comparison-hero .lead-text {
  margin: 0;
  text-align: center;
}

/* Reduce top padding on first hero feature */
#tab-features .hero-feature:first-of-type {
  padding-top: 20px;
}

/* Hero Feature Sections */
.hero-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 40px;
  align-items: center;
  padding: 25px 20px;
  max-width: 1100px;
  margin: 0 auto;
  border-bottom: 1px solid #333;
}

.hero-feature:last-of-type {
  border-bottom: none;
}

.hero-feature > h2 {
  grid-column: 1 / -1;
  font-size: 1.8rem;
  margin-bottom: 0;
  color: #fff;
  text-align: center;
}

/* Alternate layout: swap content and visual positions on even items */
.hero-feature:nth-of-type(even) .hero-feature-content {
  order: 2;
}

.hero-feature:nth-of-type(even) .hero-feature-visual {
  order: 1;
}

.hero-feature-content .benefit-headline {
  font-size: 1.1rem;
  color: #ff8839;
  margin-bottom: 10px;
  font-weight: 600;
}

.hero-feature-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 12px;
}

.hero-feature-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hero-feature-content li {
  padding: 4px 0;
  padding-left: 24px;
  position: relative;
  color: #ccc;
}

.hero-feature-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

.hero-feature-visual {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.hero-feature-visual img,
.hero-feature-visual video {
  width: 100%;
  height: auto;
  display: block;
}

.hero-feature-visual .placeholder {
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.9rem;
}

/* CTA Section */
.features-cta {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(180deg, transparent 0%, rgba(255,102,0,0.1) 100%);
  margin-top: 40px;
}

.features-cta h2 {
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #fff;
}

.features-cta .guarantee {
  color: #999;
  margin-bottom: 24px;
}

.features-cta .cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.features-cta .button {
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.features-cta .buy-button {
  background: #ff6600;
  color: #fff;
}

.features-cta .buy-button:hover {
  background: #ff8839;
  transform: translateY(-2px);
}

.features-cta .button-secondary {
  background: transparent;
  border: 2px solid #ff6600;
  color: #ff6600;
}

.features-cta .button-secondary:hover {
  background: rgba(255,102,0,0.1);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-feature {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 30px 20px;
  }

  .hero-feature > h2 {
    font-size: 1.4rem;
  }
}
</style>

<!-- Features Tab Header -->
<section class="comparison-hero">
  <h1>Junk Store Pro Features</h1>
  <p class="lead-text">Everything you need for non-Steam gaming on Steam Deck. No desktop. No hassle.</p>
</section>

<!-- Hero Feature 1: Game Mode Native -->
<div class="hero-feature">
  <h2>Never Leave Game Mode</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Your Steam Deck, the way it's meant to be used</p>
    <p>Install, download, configure and troubleshoot with your controller. No Desktop Mode needed.</p>
    <ul>
      <li>Full controller navigation</li>
      <li>Native Steam Deck UI</li>
      <li>Browse and install from your couch</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <video autoplay loop muted playsinline>
      <source src="/assets/images/jspro/features/gamemode.webm" type="video/webm">
      <source src="/assets/images/jspro/features/gamemode.mp4" type="video/mp4">
    </video>
  </div>
</div>

<!-- Hero Feature 2: All Your Stores -->
<div class="hero-feature">
  <h2>All Your Games, One Place</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Epic, GOG, Amazon Prime Gaming, itch</p>
    <p>Stop juggling multiple launchers. Connect all your accounts and browse your entire library in one place.</p>
    <ul>
      <li>Epic Games Store</li>
      <li>GOG Galaxy</li>
      <li>Amazon Prime Gaming</li>
      <li>itch</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <video autoplay loop muted playsinline>
      <source src="/assets/images/jspro/features/libraries.webm" type="video/webm">
      <source src="/assets/images/jspro/features/libraries.mp4" type="video/mp4">
    </video>
  </div>
</div>

<!-- Hero Feature 3: File Manager -->
<div class="hero-feature">
  <h2>Built-in File Manager</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Manage All Your Files in Game Mode</p>
    <p>Manage, copy, and delete files without switching to desktop mode.</p>
    <ul>
      <li>Access game folders directly</li>
      <li>Browse other Junk Store devices</li>
      <li>Quick prefix navigation</li>
      <li>Manage SD cards</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <video autoplay loop muted playsinline>
      <source src="/assets/images/jspro/features/filemanager.webm" type="video/webm">
      <source src="/assets/images/jspro/features/filemanager.mp4" type="video/mp4">
    </video>
  </div>
</div>

<!-- Hero Feature 4: Disk Analyser -->
<div class="hero-feature">
  <h2>Built-in Disk Analyser</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Demystify what's taking up all your storage space</p>
    <p>See exactly what's eating your storage and clean it up—all from Game Mode.</p>
    <ul>
      <li>Identify large files</li>
      <li>Visual storage breakdown</li>
      <li>Easily drill down into directories</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <video autoplay loop muted playsinline>
      <source src="/assets/images/jspro/features/diskanalyser.webm" type="video/webm">
      <source src="/assets/images/jspro/features/diskanalyser.mp4" type="video/mp4">
    </video>
  </div>
</div>

<!-- Hero Feature 5: Games Database -->
<div class="hero-feature">
  <h2>Manage Your Games Database</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Built-in SteamGridDB Functionality</p>
    <p>Edit your games database and metadata from Game Mode.</p>
    <ul>
      <li>Update Artwork</li>
      <li>Change Game Title or Sorting Titles</li>
      <li>Edit game descriptions</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <video autoplay loop muted playsinline>
      <source src="/assets/images/jspro/features/gamedetails.webm" type="video/webm">
      <source src="/assets/images/jspro/features/gamedetails.mp4" type="video/mp4">
    </video>
  </div>
</div>

<!-- More Features Link -->
<section class="library-value-callout">
  <div class="value-box">
    <h3>And That's Just the Start</h3>
    <p>Process monitor, language selection, offline mode, ROM integration, selective DLC, cloud saves, and more.</p>
    <a href="/decky-vs-pro/" class="value-unlock">View Full Feature List</a>
  </div>
</section>

<section class="simple-cta">
  <h2>Ready to Try These Features?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large">Start Free Trial</a>
    <a href="#" onclick="switchTab('gallery'); return false;" class="button button-secondary large">See Live Demos</a>
  </div>
</section>

</div>

<!-- ==================== DECKY VS PRO TAB ==================== -->
<div id="tab-difference" class="tab-panel">

<style>
/* Feature Groups - Decky vs Pro Tab */
#tab-difference .feature-groups {
  max-width: 1100px;
  margin: 1rem auto 2rem;
  padding: 0 20px;
}

#tab-difference .feature-groups > h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #fff;
}

#tab-difference .feature-group {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
}

#tab-difference .feature-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  user-select: none;
}

#tab-difference .feature-group-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #ff8839;
}

#tab-difference .feature-group-header .toggle-icon {
  font-size: 1.5rem;
  color: #666;
  transition: transform 0.3s;
}

#tab-difference .feature-group.expanded .toggle-icon {
  transform: rotate(180deg);
}

#tab-difference .feature-group-content {
  display: none;
  padding: 0;
}

#tab-difference .feature-group.expanded .feature-group-content {
  display: block;
}

#tab-difference .feature-item {
  display: grid;
  grid-template-columns: 1fr 150px 150px;
  gap: 16px;
  padding: 12px 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  align-items: center;
  text-align: left;
}

#tab-difference .feature-item:last-child {
  border-bottom: none;
}

#tab-difference .feature-item .feature-name {
  color: #fff;
  font-weight: 500;
}

#tab-difference .feature-item .feature-name .new-badge {
  background: #ff6600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  margin-left: 8px;
  font-weight: 600;
}

#tab-difference .feature-item .feature-name .feature-note {
  display: block;
  font-size: 0.85rem;
  color: #888;
  font-weight: normal;
  margin-top: 4px;
}

#tab-difference .feature-item .free-status,
#tab-difference .feature-item .pro-status {
  text-align: left;
  font-size: 0.95rem;
}

#tab-difference .feature-item .status-yes { color: #4CAF50; }
#tab-difference .feature-item .status-no { color: #ff6b6b; }
#tab-difference .feature-item .status-limited { color: #ffc107; }

#tab-difference .feature-group-content .feature-header {
  display: grid;
  grid-template-columns: 1fr 150px 150px;
  gap: 16px;
  padding: 10px 1.5rem;
  background: rgba(102, 191, 255, 0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  font-weight: 600;
  color: #66bfff;
  font-size: 0.9rem;
  text-align: left;
}

@media (max-width: 768px) {
  #tab-difference .feature-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  #tab-difference .feature-item .free-status,
  #tab-difference .feature-item .pro-status {
    text-align: left;
    padding-left: 28px;
  }
  #tab-difference .feature-item .free-status::before {
    content: "Free: ";
    color: #888;
  }
  #tab-difference .feature-item .pro-status::before {
    content: "Pro: ";
    color: #888;
  }
  #tab-difference .feature-group-content .feature-header {
    display: none;
  }
}
</style>

<section class="feature-groups">
  <h2>Decky Plugin vs Junk Store Pro</h2>

  <!-- Group 1: Platforms & Storefronts -->
  <div class="feature-group expanded">
    <div class="feature-group-header" onclick="toggleGroup(this)">
      <h3>Platforms &amp; Storefronts</h3>
      <span class="toggle-icon">▼</span>
    </div>
    <div class="feature-group-content">
      <div class="feature-header">
        <span>Feature</span>
        <span>Free Plugin</span>
        <span>Pro</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Epic Games</span>
        <span class="free-status status-yes">✅ Yes</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">GOG Games</span>
        <span class="free-status status-limited">Paid Extension</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Amazon Prime Gaming</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">itch</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Emulator Integration</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">ROM Download Support</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">GOG DOS, ScummVM & Linux Games <span class="new-badge">NEW & Improved</span></span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
    </div>
  </div>

  <!-- Group 2: Game Management -->
  <div class="feature-group">
    <div class="feature-group-header" onclick="toggleGroup(this)">
      <h3>Game Management</h3>
      <span class="toggle-icon">▼</span>
    </div>
    <div class="feature-group-content">
      <div class="feature-header">
        <span>Feature</span>
        <span>Free Plugin</span>
        <span>Pro</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Download Queue Management</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Game Language Selection</span>
        <span class="free-status status-limited">✅ Manual config</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Selective DLC Installation</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Per-Game Launcher Options</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Epic Offline Mode</span>
        <span class="free-status status-limited">Global only</span>
        <span class="pro-status status-yes">✅ Per-game</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Cloud Saves
          <span class="feature-note">Experimental - enable per game</span>
        </span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-limited">Experimental</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Offline Artwork Cache</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Database Management</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">SteamGridDB Built In</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
    </div>
  </div>

  <!-- Group 3: Performance & Access -->
  <div class="feature-group">
    <div class="feature-group-header" onclick="toggleGroup(this)">
      <h3>Performance &amp; Access</h3>
      <span class="toggle-icon">▼</span>
    </div>
    <div class="feature-group-content">
      <div class="feature-header">
        <span>Feature</span>
        <span>Free Plugin</span>
        <span>Pro</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">UMU Compatibility Fixes</span>
        <span class="free-status status-yes">✅ Yes</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">LSFG-VK Frame Generation</span>
        <span class="free-status status-yes">✅ Built-in</span>
        <span class="pro-status status-yes">✅ Built-in</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Games Per Tab</span>
        <span class="free-status">100 games</span>
        <span class="pro-status status-yes">1,000 games</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Access Method</span>
        <span class="free-status">Decky menu</span>
        <span class="pro-status">Ctrl+3 or Select</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Release Distribution</span>
        <span class="free-status">Decky Store</span>
        <span class="pro-status">Direct from dev</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Diagnostics Framework
          <span class="feature-note">Automatic problem detection</span>
        </span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Auto-detect</span>
      </div>
    </div>
  </div>

  <!-- Group 4: Advanced & Developer -->
  <div class="feature-group">
    <div class="feature-group-header" onclick="toggleGroup(this)">
      <h3>Advanced &amp; Developer</h3>
      <span class="toggle-icon">▼</span>
    </div>
    <div class="feature-group-content">
      <div class="feature-header">
        <span>Feature</span>
        <span>Free Plugin</span>
        <span>Pro</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Game Dependency Installation
          <span class="feature-note">VC++, DirectX, .NET, etc.</span>
        </span>
        <span class="free-status status-no">❌ Manual/Proton Tricks</span>
        <span class="pro-status status-yes">✅ One-click</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Custom Script Hooks</span>
        <span class="free-status status-no">❌ Limited</span>
        <span class="pro-status status-yes">✅ Advanced</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Custom Extension Creation</span>
        <span class="free-status status-no">❌ Manual coding</span>
        <span class="pro-status status-yes">✅ Wizard-guided</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">File Manager <span class="new-badge">NEW</span>
          <span class="feature-note">Add anything to Steam</span>
        </span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Process Manager <span class="new-badge">NEW</span></span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      <div class="feature-item">
        <span class="feature-name">Disk Analyser <span class="new-badge">NEW</span></span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
    </div>
  </div>

</section>

<style>
/* Demo Section */
#tab-difference .demo-section {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 20px;
}

#tab-difference .demo-section > h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

#tab-difference .demo-section > p {
  text-align: center;
  color: #999;
  margin-bottom: 2rem;
}

#tab-difference .demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

#tab-difference .demo-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
}

#tab-difference .demo-card:hover {
  border-color: #ff6600;
  transform: translateY(-4px);
}

#tab-difference .demo-card .demo-thumbnail {
  aspect-ratio: 16/10;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#tab-difference .demo-card .demo-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#tab-difference .demo-card .demo-thumbnail video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
}

#tab-difference .demo-card.playing .demo-thumbnail img {
  display: none;
}

#tab-difference .demo-card.playing .demo-thumbnail video {
  display: block;
}

#tab-difference .demo-card .play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

#tab-difference .demo-card:hover .play-overlay {
  opacity: 1;
}

#tab-difference .demo-card.playing .play-overlay {
  display: none;
}

#tab-difference .demo-card .demo-info {
  padding: 1rem;
}

#tab-difference .demo-card .demo-info h4 {
  margin: 0 0 0.5rem 0;
  color: #fff;
  font-size: 1rem;
}

#tab-difference .demo-card .demo-info p {
  margin: 0;
  color: #999;
  font-size: 0.9rem;
}

#tab-difference .demo-more {
  text-align: center;
  margin-top: 1.5rem;
}

#tab-difference .demo-more a {
  color: #66bfff;
  text-decoration: none;
  font-weight: 500;
}

#tab-difference .demo-more a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  #tab-difference .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<!-- Demo Section -->
<section class="demo-section">
  <h2>See It In Action</h2>
  <p>Click to preview Pro features</p>

  <div class="demo-grid">
    <div class="demo-card" onclick="toggleDemo(this)">
      <div class="demo-thumbnail">
        <img src="/assets/images/jspro/gallery/download-still.jpg" alt="Download Queue" onerror="this.style.display='none'">
        <video muted loop playsinline preload="none">
          <source src="/assets/images/jspro/gallery/download.webm" type="video/webm">
        </video>
        <span class="play-overlay">▶</span>
      </div>
      <div class="demo-info">
        <h4>Download Queue</h4>
        <p>Manage multiple downloads across stores - pause, resume, reorder</p>
      </div>
    </div>

    <div class="demo-card" onclick="toggleDemo(this)">
      <div class="demo-thumbnail">
        <img src="/assets/images/jspro/gallery/dependencies-still.jpg" alt="Install Dependencies" onerror="this.style.display='none'">
        <video muted loop playsinline preload="none">
          <source src="/assets/images/jspro/gallery/dependencies.webm" type="video/webm">
        </video>
        <span class="play-overlay">▶</span>
      </div>
      <div class="demo-info">
        <h4>Install Dependencies</h4>
        <p>One-click install for VC++ Redist, DirectX, .NET and more</p>
      </div>
    </div>

    <div class="demo-card" onclick="toggleDemo(this)">
      <div class="demo-thumbnail">
        <img src="/assets/images/jspro/gallery/language-still.jpg" alt="Language Selection" onerror="this.style.display='none'">
        <video muted loop playsinline preload="none">
          <source src="/assets/images/jspro/gallery/languageselection.webm" type="video/webm">
        </video>
        <span class="play-overlay">▶</span>
      </div>
      <div class="demo-info">
        <h4>Language Selection</h4>
        <p>Choose your preferred language for supported games</p>
      </div>
    </div>
  </div>

  <div class="demo-more">
    <a href="#" onclick="switchTab('gallery'); return false;">View all demos in Gallery →</a>
  </div>
</section>

<section class="simple-cta" id="trial">
  <h2>Ready to Experience the Difference?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large">Start Free Trial</a>
    <a href="#" onclick="switchTab('gallery'); return false;" class="button button-secondary large">See Live Demos</a>
  </div>
</section>

<script>
function toggleGroup(header) {
  const group = header.closest('.feature-group');
  group.classList.toggle('expanded');
}

function toggleDemo(card) {
  const wasPlaying = card.classList.contains('playing');

  // Stop all other demos
  document.querySelectorAll('#tab-difference .demo-card.playing').forEach(c => {
    c.classList.remove('playing');
    const video = c.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });

  // Toggle this demo
  if (!wasPlaying) {
    card.classList.add('playing');
    const video = card.querySelector('video');
    if (video) {
      video.play();
    }
  }
}
</script>

</div>

<!-- ==================== GALLERY TAB ==================== -->
<div id="tab-gallery" class="tab-panel">

<!-- Dark overlay for zoomed content -->
<div class="gallery-overlay" id="galleryOverlay"></div>

<!-- Animated GIFs Section -->
<h2 class="section-heading">Game Mode Features (Tap to play)</h2>
<div class="media-grid">

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/download-still.jpg"
        data-gif="/assets/images/jspro/gallery/download.webm"
        alt="Download queue management"
        data-still="/assets/images/jspro/gallery/download-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Download Queue</p>
    <p class="caption">Manage multiple downloads across stores - change order, pause or cancel individual downloads.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/language-still.jpg"
        data-gif="/assets/images/jspro/gallery/languageselection.webm"
        alt="Language selection"
        data-still="/assets/images/jspro/gallery/language-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Select Language for Game</p>
    <p class="caption">One-click install of languages for games that support them.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/dependencies-still.jpg"
        data-gif="/assets/images/jspro/gallery/dependencies.webm"
        alt="Install dependencies"
        data-still="/assets/images/jspro/gallery/dependencies-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Install Dependencies</p>
    <p class="caption">One-click install for common libraries like VC++ Redist, DirectX, .Net etc.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/changelauncher-still.jpg"
        data-gif="/assets/images/jspro/gallery/changelauncher.webm"
        alt="Change launcher"
        data-still="/assets/images/jspro/gallery/changelauncher-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Change Launcher</p>
    <p class="caption">Switch between ScummVm, Dosbox, Dolphin, etc.</p>
  </div>

</div>

<hr class="section-divider">

<!-- Junk Store in Action Section -->
<h2 class="section-heading">Junk Store in Action</h2>
<div class="media-grid">

 <div class="media-item">
  <a href="https://youtu.be/kDKQyL5iLSg" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/kDKQyL5iLSg/hqdefault.jpg" alt="How to Install Junk Store Pro on Steam Deck" loading="lazy" width="320" height="180">
  </a>
  <p class="caption-title">How to Install Junk Store Pro on Steam Deck</p>
  <p class="caption">Step-by-step video tutorial on downloading and installing Junk Store Pro</p>
</div>

</div>

<section class="simple-cta">
  <h2>Ready to Try It Yourself?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large">Start Free Trial</a>
  </div>
</section>

</div>

<!-- ==================== PRESS TAB ==================== -->
<div id="tab-press" class="tab-panel">

<!-- Interviews Section -->
<h2 class="section-heading">Interviews</h2>
<div class="media-grid">

  <div class="media-item">
    <a href="https://youtu.be/iRVFqHGkqio?si=H3RnIVYtWN6vxsaC" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/iRVFqHGkqio/hqdefault.jpg" alt="Interview with Gardiner Bryant (Video)" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">Interview with Gardiner Bryant (Video) - June 2025</p>
    <p class="caption">Listen to the dev behind Junk Store discuss development, features and why he created Junk Store.</p>
  </div>

  <div class="media-item">
    <a href="https://gardinerbryant.com/an-interview-with-the-dev-behind-junk-store/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/install-decky/Doom 64.webp" alt="Interview with Gardiner Bryant (Article)" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">Interview with PerfectDark (Article) - July 2024</p>
    <p class="caption">A deep dive into the philosophy behind Junk Store early on development.</p>
  </div>

</div>

<hr class="section-divider">

<!-- Video Reviews Section -->
<h2 class="section-heading">Video Reviews</h2>
<div class="media-grid">

  <div class="media-item">
    <a href="https://www.youtube.com/watch?v=CxfMmodBszI" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/CxfMmodBszI/hqdefault.jpg" alt="GAME CHANGER: Epic Games Store on Your Steam Deck!" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">GAME CHANGER: Epic Games Store on Your Steam Deck!</p>
    <p class="caption">Gardiner Bryant</p>
  </div>

  <div class="media-item">
    <a href="https://www.youtube.com/watch?v=u9Z66HMD31Y" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/u9Z66HMD31Y/hqdefault.jpg" alt="Steam Deck Epic Games in Game Mode - Junk Store Decky Loader Plugin" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">Steam Deck Epic Games in Game Mode - Junk Store Decky Loader Plugin</p>
    <p class="caption">Steam Deck Gaming</p>
  </div>

  <div class="media-item">
    <a href="https://www.youtube.com/watch?v=tgc7yiKtpW0" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/tgc7yiKtpW0/hqdefault.jpg" alt="A Great NEW Way to Install EPIC Games on Steam Deck" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">A Great NEW Way to Install EPIC Games on Steam Deck</p>
    <p class="caption">GameTechPlanet</p>
  </div>

  <div class="media-item">
    <a href="https://www.youtube.com/watch?v=vi03-EEjmQc" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/vi03-EEjmQc/hqdefault.jpg" alt="Forma DEFINITIVA de jugar en EPIC GAMES en Steam DECK" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">Forma DEFINITIVA de jugar en EPIC GAMES en Steam DECK</p>
    <p class="caption">MundoD - Rafael Cruz (Spanish)</p>
  </div>

  <div class="media-item">
    <a href="https://www.youtube.com/watch?v=NjXoAlN3p0Y" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/NjXoAlN3p0Y/hqdefault.jpg" alt="2 EASY WAYS to Install GoG and Epic Games on Your Steam Deck!" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">2 EASY WAYS to Install GoG and Epic Games on Your Steam Deck!</p>
    <p class="caption">Caddac</p>
  </div>

</div>

<hr class="section-divider">

<!-- Written Articles Section -->
<h2 class="section-heading">Articles & Guides</h2>
<div class="media-grid">

  <div class="media-item">
    <a href="https://dadwithadeck.com/2026/02/26/how-to-install-epic-games-launcher-on-steam-deck-and-better-alternatives/" target="_blank" rel="noopener noreferrer">
      <img src="https://dadwithadeck.com/wp-content/uploads/2026/02/epic-games-store.png" alt="Dad with a Deck - Epic Games alternatives" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">How to Install Epic Games Launcher on Steam Deck (And Better Alternatives)</p>
    <p class="caption">Dad with a Deck - February 2026</p>
  </div>

  <div class="media-item">
    <a href="https://dadwithadeck.com/2025/10/15/how-to-install-non-steam-games-on-steam-deck-with-junk-store-decky-loader-plugin-guide/" target="_blank" rel="noopener noreferrer">
      <img src="https://dadwithadeck.com/wp-content/uploads/2025/10/junk-store.jpg" alt="Dad with a Deck - Junk Store Guide" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">How to Install Non-Steam Games with Junk Store: Decky Loader Plugin Guide</p>
    <p class="caption">Dad with a Deck - October 2025</p>
  </div>

  <div class="media-item">
    <a href="https://www.windowscentral.com/gaming/pc-gaming/this-is-the-best-way-to-play-your-epic-games-library-on-the-steam-deck" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.mos.cms.futurecdn.net/4V5iK9RBoSugZ6ZvgbMBz8-1200-80.jpg.webp" alt="Windows Central - Best way to play Epic Games on Steam Deck" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">This is the best way to play your Epic Games library on the Steam Deck</p>
    <p class="caption">Windows Central (Richard Devine) - January 2025</p>
  </div>

  <div class="media-item">
    <a href="https://steamdeckhq.com/tips-and-guides/how-to-integrate-epic-games-into-steam-deck-library/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/press/steamdeckhq-junkstore.webp" alt="How to Integrate Epic Games Into Steam Deck Library With Junk-Store Plugin" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">How to Integrate Epic Games Into Steam Deck Library With Junk-Store Plugin</p>
    <p class="caption">Steam Deck HQ (Noah Kupetsky) - April 2024</p>
  </div>

  <div class="media-item">
    <a href="https://retrohandhelds.gg/install-epic-games-on-steam-deck-with-junk-store/" target="_blank" rel="noopener noreferrer">
      <img src="https://rh-handhelds-content.nyc3.cdn.digitaloceanspaces.com/2024/04/Install-Epic-Games-on-Steam-Deck-with-Junk-Store-1080-x-675.jpg" alt="Install Epic Games on Steam Deck with Junk-Store" loading="lazy" width="320" height="180">
    </a>
    <p class="caption-title">Install Epic Games on Steam Deck with Junk-Store</p>
    <p class="caption">Retro Handhelds (Andrew) - April 2024</p>
  </div>

</div>

<section class="simple-cta">
  <h2>Ready to See What the Buzz is About?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large">Start Free Trial</a>
  </div>
</section>

</div>

<!-- Back to top -->
<div class="section-end">
  <a href="#top" class="back-to-top">Back to Top</a>
</div>

<script>
// ========== TAB SWITCHING ==========
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tab from URL hash
  const hash = window.location.hash.substring(1);
  if (['features', 'difference', 'gallery', 'press'].includes(hash)) {
    switchTab(hash, false);
  }

  // Initialize gallery functionality when gallery tab is shown
  initGallery();
});

// Handle hash changes
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.substring(1);
  if (['features', 'difference', 'gallery', 'press'].includes(hash)) {
    switchTab(hash, false);
  }
});

function switchTab(tabName, updateUrl = true) {
  // Update tab buttons
  document.querySelectorAll('.features-tab').forEach(tab => {
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

  // Scroll to top of tabs
  document.querySelector('.features-tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== GALLERY FUNCTIONALITY ==========
function initGallery() {
  const overlay = document.getElementById('galleryOverlay');

  function unzoomAll() {
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) closeBtn.remove();

    if (overlay) overlay.classList.remove('active');

    document.querySelectorAll('.gif-wrapper.playing').forEach(wrapper => {
      wrapper.classList.remove('playing');
    });

    document.querySelectorAll('img.gif-click.zoomed').forEach(zoomedImg => {
      const stillSrc = zoomedImg.getAttribute("data-still");
      const gifSrc = zoomedImg.getAttribute("data-gif");
      const altText = zoomedImg.getAttribute("alt");
      zoomedImg.outerHTML = `<img class="gif-click" src="${stillSrc}" data-gif="${gifSrc}" alt="${altText}" data-still="${stillSrc}" loading="lazy">`;
    });

    document.querySelectorAll('.gif-click').forEach(img => {
      img.classList.remove("zoomed");
      if (img.tagName === 'IMG') {
        img.src = img.getAttribute("data-still");
      }
    });

    attachClickListeners();
  }

  function attachClickListeners() {
    const currentImgs = document.querySelectorAll(".gif-click");
    currentImgs.forEach(img => {
      img.removeEventListener("click", handleClick);
      img.addEventListener("click", handleClick);
    });
  }

  function handleClick(e) {
    e.stopPropagation();
    const img = e.target;
    const wrapper = img.closest('.gif-wrapper');
    const isZoomed = img.classList.contains("zoomed");

    unzoomAll();

    if (!isZoomed) {
      if (overlay) overlay.classList.add('active');
      if (wrapper) wrapper.classList.add('playing');

      const webmSrc = img.getAttribute("data-gif");
      const gifSrc = webmSrc.replace('.webm', '.gif');
      const stillSrc = img.getAttribute("data-still");
      const altText = img.getAttribute("alt");

      img.outerHTML = `<img class="gif-click zoomed" src="${gifSrc}" alt="${altText}" data-gif="${webmSrc}" data-still="${stillSrc}" loading="lazy">`;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'close-btn';
      closeBtn.innerHTML = '&times;';
      document.body.appendChild(closeBtn);

      setTimeout(() => {
        attachClickListeners();
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          unzoomAll();
        });
      }, 0);
    }
  }

  attachClickListeners();

  if (overlay) {
    overlay.addEventListener("click", unzoomAll);
  }
  document.addEventListener("click", (e) => {
    if (!e.target.closest('.gif-wrapper') && !e.target.classList.contains('close-btn')) {
      unzoomAll();
    }
  });
}
</script>
