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
  actions:
    - label: "FAQ"
      url: "/faq/"
      class: "button"
    - label: "Troubleshooting"
      url: "/troubleshooting/"
      class: "button"
excerpt: "Complete support for both Decky Plugin (free) and Pro Version"
---

<section class="seo-intro">
  <p><strong>Get help with Junk Store.</strong> Whether you're using the free Decky plugin or Pro Version, find FAQ, troubleshooting guides, and tutorials for playing Epic, GOG, Amazon & itch.io games on Steam Deck.</p>
</section>

<!-- Version Selection -->
<section class="faq-welcome">
  <h2 style="text-align: center;">Choose Your Version</h2>
  <div class="version-guide">
    <div class="version-card decky">
      <h3>Decky Plugin (Free)</h3>
      <p>Game Mode plugin via Decky Loader</p>
      <p><small>Epic Games + GOG Extension</small></p>
      <div style="display: flex; gap: 8px; justify-content: center; margin: 10px 0;">
        <a href="/faq/?filter=decky" class="button small">FAQ</a>
        <a href="/troubleshooting/?filter=decky" class="button small">Troubleshooting</a>
      </div>
      <a href="/deckyhelp/" class="button">Full Decky Help</a>
    </div>
    <div class="version-card pro">
      <h3>Pro Version</h3>
      <p>Standalone application ($40/year)</p>
      <p><small>Epic, GOG, Amazon & itch.io</small></p>
      <div style="display: flex; gap: 8px; justify-content: center; margin: 10px 0;">
        <a href="/faq/?filter=pro" class="button small">FAQ</a>
        <a href="/troubleshooting/?filter=pro" class="button small">Troubleshooting</a>
      </div>
      <a href="/2.0-hub/" class="button">Full Pro Help</a>
    </div>
  </div>
</section>

---

<!-- Universal Resources -->
<h2 style="text-align: center;">Universal Resources</h2>
<p style="text-align: center; color: #ccc;">These resources cover both versions with filtering options</p>

<div class="content-box-container">
  <div class="content-box faq">
    <h3>Unified FAQ</h3>
    <p>All frequently asked questions in one place. Filter by Decky or Pro to see version-specific answers.</p>
    <a href="/faq/" class="button">Browse FAQ</a>
  </div>

  <div class="content-box troubleshooting">
    <h3>Troubleshooting Guide</h3>
    <p>Fix common issues with Epic, GOG, Amazon & itch.io games. Includes version-specific solutions.</p>
    <a href="/troubleshooting/" class="button">Get Help</a>
  </div>

  <div class="content-box tutorials">
    <h3>Tutorials</h3>
    <p>Step-by-step setup guides, configuration tips, and advanced features for both versions.</p>
    <a href="/tutorials/" class="button">View Tutorials</a>
  </div>
</div>

---

<!-- Additional Resources -->
<h2 style="text-align: center;">More Resources</h2>

<div class="content-box-container">
  <div class="content-box tested-games">
    <h3>Game Compatibility</h3>
    <p>Check which Epic, GOG, Amazon & itch.io games work with Junk Store. 600+ games tested.</p>
    <a href="/tested-games/" class="button">View Games</a>
  </div>

  <div class="content-box">
    <h3>Version Comparison</h3>
    <p>Compare Decky Plugin vs Pro Version features to find the right option for you.</p>
    <a href="/comparison/" class="button">Compare</a>
  </div>

  <div class="content-box">
    <h3>Community</h3>
    <p>Join the Junk Store community for live help, feature requests, and discussion.</p>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <a href="https://discord.gg/6mRUhR6Teh" class="button" target="_blank" rel="noopener">Discord</a>
      <a href="https://www.reddit.com/r/JunkStore/" class="button" target="_blank" rel="noopener">Reddit</a>
    </div>
  </div>
</div>

<!-- Back to top -->
<div class="section-end" style="text-align: center; margin-top: 3rem;">
  <a href="#" class="back-to-top" style="display: inline-block; padding: 10px 20px; background: #333; color: #fff; border-radius: 5px; text-decoration: none;">Back to Top</a>
</div>

<style>
/* Version Selection Cards */
.version-guide {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.version-card {
  text-align: center;
  padding: 25px 20px;
  border-radius: 8px;
  border: 2px solid;
  background: rgba(30, 42, 56, 0.5);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.version-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.version-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.3em;
}

.version-card p {
  margin: 0 0 5px 0;
  color: #ccc;
}

.version-card small {
  color: #999;
}

.version-card.decky {
  border-color: #2196f3;
  background: rgba(33, 150, 243, 0.1);
}

.version-card.decky h3 {
  color: #2196f3;
}

.version-card.pro {
  border-color: #e67300;
  background: rgba(230, 115, 0, 0.1);
}

.version-card.pro h3 {
  color: #e67300;
}

/* Small button variant */
.button.small {
  padding: 6px 12px;
  font-size: 0.85em;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .version-guide {
    grid-template-columns: 1fr;
  }

  .version-card {
    padding: 20px 15px;
  }
}
</style>
