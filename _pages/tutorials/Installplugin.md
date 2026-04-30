---
title: "How to Install Junk Store Decky Plugin"
description: "Install Junk Store Decky plugin on Steam Deck. Open-source plugin for Epic Games in Game Mode via Decky Loader. GOG extension available separately."
excerpt: "Install Junk Store via Decky Loader to play Epic Games in Steam Deck Game Mode"
layout: junkstore-page
permalink: /tutorials/install-decky-plugin/
categories: ["Decky Plugin"]
tags: ["installation", "decky-loader", "epic-games", "setup"]
difficulty: "Beginner"
---
{% include content-schema.html type="tutorial" id="install-decky-plugin" %}

<p class="text-center">Prefer video? <a href="https://www.youtube.com/watch?v=tgc7yiKtpW0" target="_blank" rel="noopener">Watch on YouTube</a></p>

<div class="js-callout js-callout--warning">
<strong>Note:</strong> This guide assumes you already have <strong>Decky Loader</strong> installed.
</div>

<div class="install-guide">
<ol>

<li>
<strong>Check your Store Channel</strong>
<p>Make sure you're using the correct Store Channel in Decky. Press the <strong>three dots</strong> (...) button, go to the <strong>gear icon</strong> in the top-left, and set your Store Channel to <em>Default</em> for the main store or <em>Testing</em> for the test version.</p>
<img src="/assets/images/install-decky/Decky%20Store%20Change.jpeg" alt="Decky Store Channel settings" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Install Junk Store</strong>
<p>Go back to the Decky Loader main screen, open the <strong>Decky Plugin Store</strong>, search for or scroll to <strong>Junk Store Plugin</strong>, and click <strong>Install</strong>.</p>
<img src="/assets/images/install-decky/Junk-Store%20Install.jpeg" alt="Install Junk Store from Decky store" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Install Dependencies</strong>
<p>After installing, open <strong>Junk Store</strong>, go to the <strong>About</strong> section, and select <strong>Dependencies</strong> > <strong>Install Dependencies</strong>.</p>
<img src="/assets/images/install-decky/Dependencies.jpeg" alt="Install Junk Store dependencies" width="600" height="338" loading="lazy" />

<div class="js-callout js-callout--warning">
This might take around 30 seconds or longer. Just wait — it's normal.
</div>
</li>

<li>
<strong>Log in to Epic Games</strong>
<p>From the Junk Store menu, select <strong>Games</strong>. You'll be prompted to log in to your Epic Games account.</p>
<img src="/assets/images/install-decky/Login%20Epic.jpeg" alt="Epic Games login prompt" width="600" height="338" loading="lazy" />
<img src="/assets/images/install-decky/Epic%20Login%20Dialogue.png" alt="Epic Games login dialogue" width="600" height="338" loading="lazy" />

<div class="js-callout js-callout--tip">
Make sure the Epic account you log in with has games in its library, or nothing will show up.
</div>
</li>

<li>
<strong>Use Desktop Mode for Third-Party Logins</strong>
<p>If you want to log in using <strong>Xbox</strong>, <strong>PlayStation</strong>, <strong>Nintendo</strong>, or another method, switch to <strong>Desktop Mode</strong> and follow our guide: <a href="/tutorials/oauth-login/">Login with OAuth / Third-Party</a></p>
</li>

<li>
<strong>View Your Library</strong>
<p>After logging in, your Epic library should load automatically. If it doesn't, scroll down and press <strong>Y</strong> on <strong>Show All</strong>, make sure <strong>Show Installed</strong> is not selected, and clear the search box if needed.</p>
<img src="/assets/images/install-decky/Epic%20Library%20v2.jpeg" alt="Epic Games library in Junk Store" width="600" height="338" loading="lazy" />

<div class="js-callout js-callout--warning">
Games that need <strong>EA App</strong> or <strong>Origin</strong> won't show up — they aren't supported.
</div>
</li>

<li>
<strong>Test with a Small Game</strong>
<p>To make sure everything works, try installing a smaller game. We recommend something simple like <strong>DOOM 64</strong>. Avoid huge or complex games right away — some need extra setup to work properly on Steam Deck.</p>
<img src="/assets/images/install-decky/Doom64%20install.jpeg" alt="Installing DOOM 64 as test game" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>You're Ready to Go!</strong>
<p>Once you've installed and tested a game, you're all set.</p>
</li>

</ol>
</div>

<hr>

<h3>Community Guides</h3>

<div class="community-guides-grid">
  <a href="https://www.youtube.com/watch?v=tgc7yiKtpW0" target="_blank" rel="noopener" class="guide-card">
    <img src="https://img.youtube.com/vi/tgc7yiKtpW0/0.jpg" alt="Watch Junk Store install video on YouTube" loading="lazy" />
    <div class="guide-card-content">
      <span class="guide-type">Video Guide</span>
      <h4>Steam Deck Gaming</h4>
      <p>Watch the full install walkthrough including Fall Guys setup</p>
    </div>
  </a>
  <a href="https://steamdeckhq.com/tips-and-guides/how-to-integrate-epic-games-into-steam-deck-library/" target="_blank" rel="noopener" class="guide-card">
    <img src="/assets/images/install-decky/sdhq-guide-thumb.jpg" alt="SteamDeckHQ written guide" loading="lazy" />
    <div class="guide-card-content">
      <span class="guide-type">Written Guide</span>
      <h4>SteamDeckHQ</h4>
      <p>Noah's detailed step-by-step article with screenshots</p>
    </div>
  </a>
</div>

<style>
.community-guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
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

<hr>

<div class="js-callout js-callout--help">
<h3>🆘 Stuck or need help?</h3>
<p><strong>Need setup help? We're here for you!</strong> Most installation issues are quick fixes.</p>

<p><strong>Quick fixes for common issues:</strong></p>
<ul>
<li><a href="/help/faq/">Decky Plugin FAQ</a> - General questions</li>
<li><a href="/help/troubleshooting/">Troubleshooting</a> - All Decky issues</li>
</ul>

<p><strong>Still stuck?</strong> Join us on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> and post in <strong>#decky-support</strong> channel.</p>
</div>
