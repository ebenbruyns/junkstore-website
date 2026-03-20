---
layout: junkstore-page
title: "Junk Store Pro - Getting Started"
description: "Quick start guide for Junk Store Pro on Steam Deck. Get up and running fast with links to full video and written installation guides."
permalink: /get_started/
excerpt: "Quick start guide for Junk Store Pro - get up and running fast"
---

<!-- DECKY COMPATIBILITY NOTE -->
<div class="js-callout js-callout--accent">
  <h3>⚠ Using Decky Loader?</h3>
  <p>Download Junk Store Pro from the <strong>"Stable-Decky"</strong> channel in the portal to ensure compatibility.</p>
  <p class="text-muted">No Decky? Use the default channel.</p>
</div>

<!-- VIDEO & WRITTEN TUTORIAL OPTIONS -->
<div class="community-guides-grid" style="margin: 1.5rem 0;">
  <a href="https://www.youtube.com/watch?v=kDKQyL5iLSg" target="_blank" rel="noopener" class="guide-card">
    <img src="https://img.youtube.com/vi/kDKQyL5iLSg/mqdefault.jpg" alt="Junk Store Pro Installation Tutorial" loading="lazy" />
    <div class="guide-card-content">
      <span class="guide-type">Video Guide</span>
      <h4>Watch on YouTube</h4>
      <p>Full installation walkthrough with commentary</p>
    </div>
  </a>
  <a href="/tutorials/install-junk-store-2" class="guide-card">
    <img src="/assets/images/jspro/install2.0/downloadjspro.webp" alt="Step-by-Step Installation Guide" loading="lazy" />
    <div class="guide-card-content">
      <span class="guide-type">Written Guide</span>
      <h4>Step-by-Step Tutorial</h4>
      <p>Detailed instructions with screenshots</p>
    </div>
  </a>
</div>

<style>
.community-guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.guide-card {
  display: block;
  background: rgba(255,255,255,0.03);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255,255,255,0.1);
}

.guide-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  text-decoration: none;
  color: inherit;
}

.guide-card img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: contain;
  background: #000;
}

.guide-card-content {
  padding: 1rem;
}

.guide-card .guide-type {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  background: rgba(0,150,255,0.2);
  color: #6cb4ff;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.guide-card h4 {
  margin: 0.5rem 0 0.25rem;
  font-size: 1.1rem;
  color: #fff;
}

.guide-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #aaa;
}
</style>

<h2>Installation Steps</h2>

<div class="install-guide">
<ol>

<li>
<strong>Go to Desktop Mode</strong>
<p>Press the Steam button → Power → Switch to Desktop.</p>
</li>

<li>
<strong>Log into the portal</strong>
<p>Go to the <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener">portal</a> and log in with your account credentials.</p>
<ul>
  <li>If you can't remember your password, use the reset option on the login page.</li>
</ul>
</li>

<li>
<strong>Download and install Junk Store Pro</strong>
<p>Download the latest <code>js_pro</code> build from the portal.</p>
<ul>
  <li><strong>Decky users:</strong> Make sure you select the "Stable-Decky" channel!</li>
  <li>Open Dolphin → Downloads → Right-click the file → Properties → Permissions</li>
  <li>Mark it as executable and click <strong>OK</strong>, then double-click to install</li>
</ul>

<div class="critical-warning">
  <strong>⚠️ CRITICAL:</strong> You <strong>MUST wait until the dialogue box says "Installation Complete"</strong> before clicking OK. <strong>Clicking OK too early cancels the installation.</strong>
</div>
</li>

<li>
<strong>Return to Game Mode</strong>
<p>Press <strong>🗗 View</strong> (button above the D-pad) to open Junk Store, then log in with your portal credentials.</p>
</li>

<li>
<strong>Generate and migrate your libraries</strong>
<p>Go to Tools → Generator.</p>
<ul>
  <li>Open the sliders menu and choose <em>Download all presets from server</em></li>
  <li>Generate the extensions you want (Epic, GOG, etc.)</li>
  <li><strong>Reset launch options for each game once</strong> — this completes the migration</li>
  <li>Your saves and settings will carry over automatically</li>
</ul>
</li>

</ol>
</div>

<!-- NEXT STEPS SECTION -->
<h2 id="next-steps">Next Steps</h2>

<div class="js-card-grid js-card-grid--wide">
  <div class="js-card js-card--success">
    <h4 class="js-card__title">Import games from Decky</h4>
    <p class="js-card__text">Migrate your existing library from the Decky plugin.</p>
    <div class="js-card__link"><a href="/help/#import-games-from-decky">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Install & uninstall games</h4>
    <p class="js-card__text">Managing your game library in Junk Store.</p>
    <div class="js-card__link"><a href="/help/#install-uninstall-game">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Access itch</h4>
    <p class="js-card__text">Enable the itch extension for indie games.</p>
    <div class="js-card__link"><a href="/help/#how-to-access-itch-io-beta">Learn how →</a></div>
  </div>
</div>

<!-- COMMON ISSUES SECTION -->
<h2 id="common-issues">Common Issues & Quick Fixes</h2>

<div class="js-card-grid js-card-grid--wide">
  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Installation not completing?</h4>
    <p class="js-card__text">Wait for "Installation Complete" before clicking OK.</p>
    <div class="js-card__link"><a href="/help/#installation-not-completing">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Executable won't run?</h4>
    <p class="js-card__text">Check file permissions and theme settings.</p>
    <div class="js-card__link"><a href="/help/#executables-wont-run">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Junk Store not working?</h4>
    <p class="js-card__text">Check Decky version and Steam branch settings.</p>
    <div class="js-card__link"><a href="/help/#junk-store-not-working">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Games not showing?</h4>
    <p class="js-card__text">Check filters, search bar, and login account.</p>
    <div class="js-card__link"><a href="/help/#games-not-showing">Full troubleshooting →</a></div>
  </div>
</div>

<!-- TUTORIALS SECTION -->
<h2 id="tutorials">Tutorials & Resources</h2>

<div class="js-card-grid">
  <a href="/tutorials/install-junk-store-2" class="js-card js-card--primary">
    <h4 class="js-card__title">Written Tutorial</h4>
    <p class="js-card__text">Step-by-step with screenshots</p>
  </a>

  <a href="https://www.youtube.com/watch?v=kDKQyL5iLSg" target="_blank" class="js-card js-card--danger">
    <h4 class="js-card__title">Video Tutorial</h4>
    <p class="js-card__text">Watch the full setup on YouTube</p>
  </a>

  <a href="/help/#troubleshooting" class="js-card js-card--success">
    <h4 class="js-card__title">Troubleshooting</h4>
    <p class="js-card__text">Full list of fixes and solutions</p>
  </a>

  <a href="/help/#faq" class="js-card js-card--accent">
    <h4 class="js-card__title">FAQ</h4>
    <p class="js-card__text">Common questions answered</p>
  </a>
</div>

<div class="js-callout js-callout--help">
  <h3>Stuck or need help?</h3>
  <p>Most issues are quick fixes. Join us on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a> and post a ticket in <strong>v2-support</strong>.</p>
  <p>Found a bug? <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues" target="_blank" rel="noopener">Report it here</a>.</p>
</div>

<div class="text-center" style="margin-top: 2rem;">
  <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener" class="button buy-button">Go to Portal</a>
</div>
