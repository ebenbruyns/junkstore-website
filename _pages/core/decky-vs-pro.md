---
layout: junkstore-splash
title: "Decky Plugin vs Junk Store Pro"
description: "Complete feature-by-feature comparison between the free Junk Store Decky plugin and Junk Store Pro. See exactly what you get when you upgrade."
permalink: /decky-vs-pro/
excerpt: "Every feature, side by side. See exactly what Pro unlocks for your Steam Deck."
---
{% include content-schema.html type="software" %}

<style>
/* Two-Tier Comparison Cards */
.tier-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 20px;
}

.tier-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.tier-card h3 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #fff;
}

.tier-card .tier-price {
  font-size: 2rem;
  font-weight: bold;
  color: #66bfff;
  margin: 0.5rem 0;
}

.tier-card .tier-price span {
  font-size: 1rem;
  font-weight: normal;
  color: #999;
}

.tier-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
}

.tier-card li {
  padding: 8px 0;
  padding-left: 28px;
  position: relative;
  color: #ccc;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.tier-card li:last-child {
  border-bottom: none;
}

.tier-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

.tier-card.featured {
  border: 2px solid #ff6600;
  background: rgba(255, 102, 0, 0.05);
  position: relative;
}

.tier-card .tier-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff6600;
  color: #fff;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.tier-card .tier-trial {
  font-size: 0.9rem;
  color: #4CAF50;
  margin-top: 0.5rem;
}

/* Feature Groups */
.feature-groups {
  max-width: 1100px;
  margin: 1rem auto 3rem;
  padding: 0 20px;
}

.feature-groups > h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #fff;
}

.feature-group {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid #333;
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.feature-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  user-select: none;
}

.feature-group-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #ff8839;
}

.feature-group-header .toggle-icon {
  font-size: 1.5rem;
  color: #666;
  transition: transform 0.3s;
}

.feature-group.expanded .toggle-icon {
  transform: rotate(180deg);
}

.feature-group-content {
  display: none;
  padding: 0;
}

.feature-group.expanded .feature-group-content {
  display: block;
}

/* Feature Items within groups */
.feature-item {
  display: grid;
  grid-template-columns: 1fr 150px 150px;
  gap: 16px;
  padding: 12px 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  align-items: center;
  text-align: left;
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item .feature-name {
  color: #fff;
  font-weight: 500;
}

.feature-item .feature-name .new-badge {
  background: #ff6600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  margin-left: 8px;
  font-weight: 600;
}

.feature-item .feature-name .feature-note {
  display: block;
  font-size: 0.85rem;
  color: #888;
  font-weight: normal;
  margin-top: 4px;
}

.feature-item .free-status,
.feature-item .pro-status {
  text-align: left;
  font-size: 0.95rem;
}

.feature-item .status-yes {
  color: #4CAF50;
}

.feature-item .status-no {
  color: #ff6b6b;
}

.feature-item .status-limited {
  color: #ffc107;
}

/* Feature Group Table Header */
.feature-group-content .feature-header {
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

/* Demo Section */
.demo-section {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 20px;
}

.demo-section > h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.demo-section > p {
  text-align: center;
  color: #999;
  margin-bottom: 2rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.demo-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
}

.demo-card:hover {
  border-color: #ff6600;
  transform: translateY(-4px);
}

.demo-card .demo-thumbnail {
  aspect-ratio: 16/10;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.demo-card .demo-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.demo-card .demo-thumbnail video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;
}

.demo-card.playing .demo-thumbnail img {
  display: none;
}

.demo-card.playing .demo-thumbnail video {
  display: block;
}

.demo-card .play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.demo-card:hover .play-overlay {
  opacity: 1;
}

.demo-card.playing .play-overlay {
  display: none;
}

.demo-card .demo-info {
  padding: 1rem;
}

.demo-card .demo-info h4 {
  margin: 0 0 0.5rem 0;
  color: #fff;
  font-size: 1rem;
}

.demo-card .demo-info p {
  margin: 0;
  color: #999;
  font-size: 0.9rem;
}

.demo-more {
  text-align: center;
  margin-top: 1.5rem;
}

.demo-more a {
  color: #66bfff;
  text-decoration: none;
  font-weight: 500;
}

.demo-more a:hover {
  text-decoration: underline;
}

/* CTA Section */
.simple-cta {
  text-align: center;
  padding: 3rem 20px;
  background: linear-gradient(180deg, transparent 0%, rgba(255,102,0,0.1) 100%);
  margin-top: 2rem;
}

.simple-cta h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.simple-cta .guarantee {
  color: #999;
  margin-bottom: 1.5rem;
}

.simple-cta .cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .tier-comparison {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .tier-card {
    padding: 1.5rem;
  }

  .feature-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .feature-item .free-status,
  .feature-item .pro-status {
    text-align: left;
    padding-left: 28px;
  }

  .feature-item .free-status::before {
    content: "Free: ";
    color: #888;
  }

  .feature-item .pro-status::before {
    content: "Pro: ";
    color: #888;
  }

  .feature-group-content .feature-header {
    display: none;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="versions-summary">
  <h2>Two flavours of Junk Store</h2>
  <div class="versions-grid">
    <div class="version-card">
      <h3>Junk Store</h3>
      <p class="version-tag">Free Decky plugin</p>
      <p class="version-price">Free</p>
      <ul class="version-list">
        <li>Installs from the Decky Loader Store</li>
        <li>Epic Games out of the box</li>
        <li>Optional GOG add-on &mdash; <strong>US$6</strong>, one-time (maintenance mode)</li>
      </ul>
    </div>
    <div class="version-card version-card--featured">
      <h3>Junk Store Pro</h3>
      <p class="version-tag">Standalone app</p>
      <p class="version-price">US$40</p>
      <ul class="version-list">
        <li>Epic, GOG, Amazon Prime &amp; itch &mdash; all included</li>
        <li>File Manager, Disk Analyser, Process Manager, SteamGridDB</li>
        <li>7-day free trial, then 12 months of updates &amp; support</li>
        <li>Renewal optional</li>
      </ul>
    </div>
  </div>
  <p class="versions-note">Two separate apps, same team. Pick the one that fits your setup.</p>
</section>

<style>
.versions-summary {
  max-width: 1100px;
  margin: 1rem auto 2rem;
  padding: 0 20px;
}
.versions-summary h2 {
  text-align: center;
  margin: 0 0 1.5rem 0;
}
.versions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 1rem;
}
.version-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
}
.version-card--featured {
  border-color: #ff751a;
  background: rgba(255, 117, 26, 0.06);
}
.version-card h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
}
.version-card .version-tag {
  margin: 0.1rem 0 0.5rem;
  font-size: 0.8rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.version-card .version-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #66bfff;
  margin: 0 0 0.75rem 0;
}
.version-card--featured .version-price {
  color: #ff9b52;
}
.version-card .version-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.version-card .version-list li {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.45;
  padding: 0.25rem 0 0.25rem 1.1rem;
  position: relative;
}
.version-card .version-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #666;
}
.version-card--featured .version-list li::before {
  color: #ff751a;
}
.versions-note {
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
  margin: 0.5rem 0 0;
}
@media (max-width: 700px) {
  .versions-grid { grid-template-columns: 1fr; }
}
</style>

<!-- Full Feature Comparison -->
<section class="feature-groups">
  <h2>Complete Feature Breakdown</h2>

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
      div class="feature-item">
        <span class="feature-name">Database Management</span>
        <span class="free-status status-no">❌ No</span>
        <span class="pro-status status-yes">✅ Yes</span>
      </div>
      div class="feature-item">
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
    <a href="/features/#gallery">View all demos in Gallery →</a>
  </div>
</section>

<!-- Final CTA -->
<section class="simple-cta" id="trial">
  <h2>Ready to Upgrade?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large" data-event="click" data-category="conversion" data-action="trial_signup" data-label="decky_vs_pro_cta">Start Free Trial</a>
    <a href="/features/" class="button button-secondary large" data-event="click" data-category="engagement" data-action="view_features" data-label="decky_vs_pro_cta">Back to Features</a>
  </div>
</section>

<script>
// Toggle feature groups
function toggleGroup(header) {
  const group = header.closest('.feature-group');
  group.classList.toggle('expanded');
}

// Toggle demo videos
function toggleDemo(card) {
  const wasPlaying = card.classList.contains('playing');

  // Stop all other demos
  document.querySelectorAll('.demo-card.playing').forEach(c => {
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

// Expand first group by default (already set in HTML)
document.addEventListener('DOMContentLoaded', function() {
  // Groups are already expanded/collapsed via HTML classes
});
</script>
