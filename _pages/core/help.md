---
layout: splash
title: "Junk Store Help Hub"
description: "Complete help for Junk Store - Decky Plugin and Pro Version. FAQ, troubleshooting, tutorials, and game compatibility."
permalink: /help/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Junk Store Help Hub"
excerpt: "Complete support for both Decky Plugin (free) and Pro Version"
---

<section class="seo-intro">
  <p><strong>Get help with Junk Store.</strong> Whether you're using the free Decky plugin or Pro Version, find FAQ, troubleshooting guides, and tutorials for playing Epic, GOG, Amazon & itch.io games on Steam Deck.</p>
</section>

<!-- Version Selection -->
<section class="version-selector-section">
  <h2 style="text-align: center;">Which version do you use?</h2>
  <p style="text-align: center; color: #aaa; margin-bottom: 20px;">Select your version below. FAQ and Troubleshooting will automatically show content relevant to your selection.</p>
  <div class="version-selector">
    <div class="version-option decky" id="select-decky" onclick="selectVersion('decky')">
      <div class="version-check" id="check-decky"></div>
      <h3>Decky Plugin</h3>
      <p>Free - via Decky Loader</p>
      <small>Epic Games + GOG Extension</small>
    </div>
    <div class="version-option pro" id="select-pro" onclick="selectVersion('pro')">
      <div class="version-check" id="check-pro"></div>
      <h3>Pro Version</h3>
      <p><span data-pricing="price">$40</span>/year standalone app</p>
      <small>Epic, GOG, Amazon & itch.io</small>
    </div>
  </div>
</section>

---

<!-- Main Resources -->
<div class="content-box-container">
  <div class="content-box faq">
    <h3>FAQ</h3>
    <p>Find answers to common questions about setup, features, compatibility, and troubleshooting.</p>
    <a href="#" class="button" onclick="goToPage('/faq/'); return false;">Browse FAQ</a>
  </div>

  <div class="content-box troubleshooting">
    <h3>Troubleshooting</h3>
    <p>Fix issues with Epic, GOG, Amazon & itch.io games. Step-by-step solutions for common problems.</p>
    <a href="#" class="button" onclick="goToPage('/troubleshooting/'); return false;">Get Help</a>
  </div>

  <div class="content-box tutorials">
    <h3>Tutorials</h3>
    <p>Step-by-step setup guides, configuration tips, and advanced features.</p>
    <a href="#" class="button" onclick="goToPage('/tutorials/'); return false;">View Tutorials</a>
  </div>
</div>

---

<!-- Additional Resources -->
<h2 style="text-align: center;">More Resources</h2>

<div class="content-box-container">
  <div class="content-box tested-games">
    <h3>Game Compatibility</h3>
    <p>Check which games work with Junk Store. 600+ games tested with compatibility ratings.</p>
    <a href="/tested-games/" class="button">View Games</a>
  </div>

  <div class="content-box">
    <h3>Version Comparison</h3>
    <p>Compare Decky Plugin vs Pro Version features to find the right option for you.</p>
    <a href="/comparison/" class="button">Compare</a>
  </div>

  <div class="content-box">
    <h3>Community</h3>
    <p>Get live help and join the discussion.</p>
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

<style>
/* Skinny Hero */
.layout--splash .page__hero--overlay {
  min-height: 300px !important;
  height: 300px !important;
  max-height: 300px !important;
}

/* Version Selector */
.version-selector-section {
  margin: 2rem 0;
}

.version-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.version-option {
  position: relative;
  text-align: center;
  padding: 25px 20px;
  border-radius: 12px;
  border: 3px solid;
  cursor: pointer;
  transition: all 0.2s ease;
}

.version-option:hover {
  transform: translateY(-2px);
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

.version-option h3 {
  margin: 0 0 8px 0;
  font-size: 1.4em;
}

.version-option p {
  margin: 0;
  color: #ccc;
}

.version-option small {
  color: #888;
  font-size: 0.85em;
}

/* Checkmark */
.version-check {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
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
  content: '✓';
  color: white;
  font-weight: bold;
  font-size: 14px;
}

/* Community Buttons */
.community-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.community-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  color: white;
}

.community-btn:hover {
  transform: translateY(-2px);
  text-decoration: none;
  color: white;
}

.discord-btn {
  background: #5865f2;
  color: white !important;
}

.discord-btn:hover {
  background: #4752c4;
  box-shadow: 0 4px 15px rgba(88, 101, 242, 0.4);
  color: white !important;
}

.reddit-btn {
  background: #ff4500;
  color: white !important;
}

.reddit-btn:hover {
  background: #e03d00;
  box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4);
  color: white !important;
}

/* Mobile */
@media (max-width: 600px) {
  .version-selector {
    grid-template-columns: 1fr;
  }

  .community-buttons {
    flex-direction: column;
    align-items: center;
  }

  .community-btn {
    width: 80%;
    justify-content: center;
  }
}
</style>

<script>
// Initialize version selection from localStorage
document.addEventListener('DOMContentLoaded', function() {
  const savedVersion = localStorage.getItem('junkstore-version');
  if (savedVersion) {
    document.getElementById('select-' + savedVersion)?.classList.add('selected');
  }
});

function selectVersion(version) {
  // Remove selected from all
  document.querySelectorAll('.version-option').forEach(el => el.classList.remove('selected'));

  // Add selected to clicked
  document.getElementById('select-' + version).classList.add('selected');

  // Save to localStorage
  localStorage.setItem('junkstore-version', version);
}

function goToPage(basePath) {
  const version = localStorage.getItem('junkstore-version');
  if (version) {
    window.location.href = basePath + '?filter=' + version;
  } else {
    window.location.href = basePath;
  }
}
</script>
