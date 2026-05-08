---
layout: junkstore-page
title: "Junk Store Pro - Getting Started"
description: "Quick start guide for Junk Store Pro on Steam Deck. Get up and running fast with links to full video and written installation guides."
permalink: /get_started/
excerpt: "Quick start guide for Junk Store Pro - get up and running fast"
---

<!-- VIDEO & WRITTEN TUTORIAL OPTIONS -->
<div class="community-guides-grid">
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 650px;
  margin: 1.5rem auto;
}

.guide-card {
  display: block;
  background: rgba(255,255,255,0.03);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255,255,255,0.1);
}

.guide-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
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
  padding: 0.85rem;
  text-align: left;
}

.guide-card .guide-type {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.45rem;
  background: rgba(0,150,255,0.2);
  color: #6cb4ff;
  border-radius: 4px;
  margin-bottom: 0.4rem;
}

.guide-card h4 {
  margin: 0.4rem 0 0.2rem;
  font-size: 1rem;
  color: #fff;
}

.guide-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #aaa;
}

h3 {
  color: #fd7e14;
  border-bottom: 1px solid rgba(253, 126, 20, 0.3);
  padding-bottom: 0.35rem;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}

.js-copy-block {
  position: relative;
  padding-right: 3rem;
}

.js-copy-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #555;
  color: #fff;
  padding: 5px 7px;
  border-radius: 4px;
  cursor: pointer;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.js-copy-btn:hover {
  background: rgba(0, 0, 0, 0.75);
  border-color: #888;
}

.js-copy-btn svg {
  display: block;
}

.js-copy-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: #1a1f29;
  color: #fff;
  padding: 0.6rem 1.1rem;
  border-radius: 6px;
  border: 1px solid rgba(108, 180, 255, 0.4);
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.25s ease, transform 0.25s ease;
  z-index: 9999;
  pointer-events: none;
}

.js-copy-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>

<h2>Quick Install (Recommended)</h2>

<p>Pick whichever feels easier. Both walk you through the whole setup: log in to your portal account, choose your build branch (stable, test or beta), pick which storefront extensions you want (Epic, Amazon, GOG, itch) and which branch to use for those, then install.</p>

<h3>Option 1: Double-click installer</h3>
<ol>
  <li><a href="https://i.junkstore.xyz/i/junkstore-installer.desktop" download>Download <code>junkstore-installer.desktop</code></a>.</li>
  <li>Open Dolphin → Downloads and drag the file onto your Desktop.</li>
  <li>Double-click it and follow the prompts.</li>
</ol>

<h3>Option 2: Konsole one-liner</h3>
<ol>
  <li>Open Konsole in Desktop Mode.</li>
  <li>Paste this command:
<pre class="js-copy-block"><code id="js-bootstrap-cmd">curl -fsSL https://i.junkstore.xyz/i/bootstrap.sh | bash</code><button type="button" class="js-copy-btn" onclick="jsCopyBootstrap()" title="Copy to clipboard" aria-label="Copy to clipboard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button></pre>
  </li>
  <li>Press Enter and follow the prompts.</li>
</ol>

<script>
function jsCopyBootstrap() {
  var cmd = document.getElementById('js-bootstrap-cmd').textContent.trim();
  navigator.clipboard.writeText(cmd).then(function() {
    var toast = document.createElement('div');
    toast.className = 'js-copy-toast';
    toast.textContent = 'Copied!';
    document.body.appendChild(toast);
    requestAnimationFrame(function() { toast.classList.add('show'); });
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 300);
    }, 1500);
  });
}
</script>

<h2>Installation Steps (manual)</h2>

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
    <div class="js-card__link"><a href="/help/faq/#import-games-from-decky">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Install & uninstall games</h4>
    <p class="js-card__text">Managing your game library in Junk Store.</p>
    <div class="js-card__link"><a href="/help/tips/#qt-install-uninstall-game">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Access itch</h4>
    <p class="js-card__text">Enable the itch extension for indie games.</p>
    <div class="js-card__link"><a href="/help/faq/#how-to-access-itch-io-beta">Learn how →</a></div>
  </div>
</div>

<!-- COMMON ISSUES SECTION -->
<h2 id="common-issues">Common Issues & Quick Fixes</h2>

<div class="js-card-grid js-card-grid--wide">
  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Installation not completing?</h4>
    <p class="js-card__text">Wait for "Installation Complete" before clicking OK.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#installation-not-completing">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Executable won't run?</h4>
    <p class="js-card__text">Check file permissions and theme settings.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#executables-wont-run">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Junk Store not working?</h4>
    <p class="js-card__text">Check Decky version and Steam branch settings.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#junk-store-not-working">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Games not showing?</h4>
    <p class="js-card__text">Check filters, search bar, and login account.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#games-not-showing">Full troubleshooting →</a></div>
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

  <a href="/help/troubleshooting/" class="js-card js-card--success">
    <h4 class="js-card__title">Troubleshooting</h4>
    <p class="js-card__text">Full list of fixes and solutions</p>
  </a>

  <a href="/help/faq/" class="js-card js-card--accent">
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
  <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener" class="button buy-button" data-event="click" data-category="conversion" data-action="portal_visit" data-label="get_started_page">Go to Portal</a>
</div>
