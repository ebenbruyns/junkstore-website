---
layout: junkstore-page
title: "Junk Store Pro - Getting Started"
description: "Get Junk Store Pro running on your Steam Deck. Pick the installer or the manual route, each with a written guide and a video walkthrough, then find your way around."
permalink: /get_started/
redirect_from:
  - /tutorials/install-junk-store-2/
excerpt: "Quick start guide for Junk Store Pro - get up and running fast"
help_links:
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "Fixes for the common problems"
  - text: "FAQ"
    url: "/help/faq/"
    note: "General questions about Junk Store"
  - text: "All tutorials"
    url: "/help/tutorials/"
    note: "Every step-by-step guide in one place"
---

<p class="text-center">Everything you need to get Junk Store Pro onto your Deck, and where to go once it's there. <strong>The install is the one part you do in Desktop Mode</strong>, and it takes about ten minutes.</p>

<h2 id="install">Pick your route</h2>

<div class="js-card-grid js-card-grid--wide">

  <div class="js-card js-card--primary">
    <h4 class="js-card__title">Install Junk Store Pro with the Installer &nbsp;<span class="gs-badge">Recommended</span></h4>
    <p class="js-card__text">One file does the whole job: signs you in, fetches the right build, installs it, and generates your store tabs for you. Take this route unless you have a reason not to.</p>
    <div class="js-card__link">
      <a href="/tutorials/install-junk-store-pro/">Written guide →</a>
      <!-- Installer video walkthrough: add the link here once it's up, same shape as the manual one below
      <a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener">Video walkthrough →</a>
      -->
    </div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Install Junk Store Pro Manually</h4>
    <p class="js-card__text">Download the build from the portal yourself, make it executable, then generate your store tabs. More steps, and you pick your channel at download time. For when you'd rather do it yourself.</p>
    <div class="js-card__link">
      <a href="/tutorials/install-junk-store-pro/manual-method/">Written guide →</a>
      <a href="https://www.youtube.com/watch?v=kDKQyL5iLSg" target="_blank" rel="noopener">Video walkthrough →</a>
    </div>
  </div>

</div>

<p class="text-center gs-note">Prefer the terminal? The installer is also one line in Konsole, which does exactly what the desktop file does:</p>

<pre class="js-copy-block"><code id="js-bootstrap-cmd">curl -fsSL https://i.junkstore.xyz/i/bootstrap.sh | bash</code><button type="button" class="js-copy-btn" onclick="jsCopyBootstrap()" title="Copy to clipboard" aria-label="Copy to clipboard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button></pre>

<div class="js-callout js-callout--warning">
  <strong>Whichever route you take:</strong> wait until the installer says <strong>Installation Complete</strong> before pressing OK. The button appears before the work has finished, and pressing it early cancels the install without telling you.
</div>

<!-- ONCE YOU'RE IN -->
<h2 id="next-steps">Once you're in</h2>

<div class="js-card-grid js-card-grid--wide">
  <div class="js-card js-card--success">
    <h4 class="js-card__title">Coming from the Decky plugin</h4>
    <p class="js-card__text">Your games import automatically. One manual step finishes it off.</p>
    <div class="js-card__link"><a href="/tutorials/install-junk-store-pro/#coming-from-the-decky-plugin">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Install &amp; uninstall games</h4>
    <p class="js-card__text">Managing your library from Game Mode.</p>
    <div class="js-card__link"><a href="/help/tips/#qt-install-uninstall-game">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Switch to the new clients</h4>
    <p class="js-card__text">Faster refreshes, and more than one account per store.</p>
    <div class="js-card__link"><a href="/tutorials/switch-to-new-clients/">Learn how →</a></div>
  </div>

  <div class="js-card js-card--success">
    <h4 class="js-card__title">Access itch</h4>
    <p class="js-card__text">Enable the itch extension for indie games.</p>
    <div class="js-card__link"><a href="/help/faq/#how-to-access-itch-io-beta">Learn how →</a></div>
  </div>
</div>

<!-- IF SOMETHING GOES WRONG -->
<h2 id="common-issues">If something goes wrong</h2>

<div class="js-card-grid js-card-grid--wide">
  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Installation not completing?</h4>
    <p class="js-card__text">Wait for "Installation Complete" before pressing OK.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#installation-not-completing">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Executable won't run?</h4>
    <p class="js-card__text">Check file permissions and your icon theme.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#executables-wont-run">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Junk Store not working?</h4>
    <p class="js-card__text">Check your Decky version and Steam branch settings.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#junk-store-not-working">Full troubleshooting →</a></div>
  </div>

  <div class="js-card js-card--accent">
    <h4 class="js-card__title">Games not showing?</h4>
    <p class="js-card__text">Check filters, the search bar, and which account you're on.</p>
    <div class="js-card__link"><a href="/help/troubleshooting/#games-not-showing">Full troubleshooting →</a></div>
  </div>
</div>

<p class="text-center gs-note">More in the <a href="/help/faq/">FAQ</a>, the <a href="/help/troubleshooting/">troubleshooting guide</a>, and the <a href="/help/tutorials/">full tutorial list</a>.</p>

{% include help/need-help.html %}

<p class="text-center gs-note">Found a bug in Junk Store Pro? <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues" target="_blank" rel="noopener">Report it on GitHub</a>. Bugs in the Decky plugin go to <a href="https://github.com/ebenbruyns/junkstore/issues" target="_blank" rel="noopener">its own repo</a>.</p>

<div class="text-center" style="margin-top: 2rem;">
  <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener" class="button buy-button" data-event="click" data-category="conversion" data-action="portal_visit" data-label="get_started_page">Go to Portal</a>
</div>

<style>
h3 {
  color: #fd7e14;
  border-bottom: 1px solid rgba(253, 126, 20, 0.3);
  padding-bottom: 0.35rem;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}

/* "Recommended" pill on the installer route */
.gs-badge {
  display: inline-block;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.15rem 0.45rem;
  background: rgba(76, 175, 80, 0.18);
  color: #7fd18a;
  border-radius: 4px;
  vertical-align: middle;
}

/* Two links side by side in a route card */
.js-card__link a + a {
  margin-left: 1.25rem;
}

.gs-note {
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 1.25rem;
}

.js-copy-block {
  position: relative;
  padding-right: 3rem;
  max-width: 640px;
  margin: 0.75rem auto 0;
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
