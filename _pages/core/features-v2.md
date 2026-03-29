---
layout: junkstore-splash
title: "Junk Store Features"
description: "Play Epic, GOG, Amazon & itch games on Steam Deck without Desktop Mode. Junk Store keeps you in Game Mode - see features, live demos, and why gamers choose it."
permalink: /features/
classes: wide
header:
  overlay_color: "#1A1A1A"
  overlay_filter: "0.45"
  overlay_image: /js-steamdeck-hero-lighter.webp
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

.hero-feature-visual img {
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
    <div class="placeholder">[Screenshot: Junk Store running in Game Mode]</div>
  </div>
</div>

<!-- Hero Feature 2: All Your Stores -->
<div class="hero-feature">
  <h2>All Your Games, One Place</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Epic, GOG, Amazon Prime Gaming, itch.io</p>
    <p>Stop juggling multiple launchers. Connect all your accounts and browse your entire library in one place.</p>
    <ul>
      <li>Epic Games Store</li>
      <li>GOG Galaxy</li>
      <li>Amazon Prime Gaming</li>
      <li>itch.io</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <div class="placeholder">[Screenshot: Multiple storefront tabs]</div>
  </div>
</div>

<!-- Hero Feature 3: Download Queue -->
<div class="hero-feature">
  <h2>Download Queue That Actually Works</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Queue up your library and let it run</p>
    <p>Queue multiple games, reorder priorities, pause individual downloads. Perfect for batch-downloading your Epic freebies.</p>
    <ul>
      <li>Cross-store download queue</li>
      <li>Pause, resume, reorder anytime</li>
      <li>Background downloads while you play</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <div class="placeholder">[GIF: Download queue in action]</div>
  </div>
</div>

<!-- Hero Feature 4: One-Click Fixes -->
<div class="hero-feature">
  <h2>Fix Problems Without the Headache</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">One-click solutions for common issues</p>
    <p>Game needs VC++ runtime, DirectX, or .NET? Tap a button instead of hunting through Proton Tricks.</p>
    <ul>
      <li>One-click dependency installation</li>
      <li>Automatic problem detection</li>
      <li>Built-in diagnostics</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <div class="placeholder">[GIF: Installing dependencies]</div>
  </div>
</div>

<!-- Hero Feature 5: Frame Generation -->
<div class="hero-feature">
  <h2>Boost Your Frame Rates</h2>
  <div class="hero-feature-content">
    <p class="benefit-headline">Built-in LSFG frame generation</p>
    <p>Smoother gameplay with LSFG-VK built right in. No separate plugins or launch arguments.</p>
    <ul>
      <li>Simple per-game toggle</li>
      <li>No manual configuration</li>
      <li>Works with supported games</li>
    </ul>
  </div>
  <div class="hero-feature-visual">
    <div class="placeholder">[Screenshot: LSFG toggle in settings]</div>
  </div>
</div>

<!-- More Features Link -->
<section class="library-value-callout">
  <div class="value-box">
    <h3>And That's Just the Start</h3>
    <p>Language selection, offline mode, ROM integration, selective DLC, cloud saves, and more.</p>
    <a href="/features-reference/#tab-features" class="value-unlock">View Full Feature List</a>
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

<section class="comparison-hero">
  <h1>Decky Plugin vs Junk Store Pro</h1>
  <p class="lead-text">Already using our free Decky plugin? Here's what upgrading to Pro unlocks.</p>
  <p class="reassurance">Keep everything you love: All your current Epic Games functionality remains exactly the same, plus you get all these premium features.</p>
</section>

<section class="upgrade-section" id="free-vs-pro">

  <div class="upgrade-grid">
    <div class="upgrade-item">
      <h3>🌍 More Gaming Platforms</h3>
      <p class="current"><strong>Free Plugin:</strong> Epic Games support</p>
      <p class="upgrade"><strong>Pro:</strong> Amazon Prime Gaming + itch + Enhanced GOG support</p>
    </div>

    <div class="upgrade-item">
      <h3>🎯 Per-Game Control</h3>
      <p class="current"><strong>Free Plugin:</strong> Basic game launching</p>
      <p class="upgrade"><strong>Pro:</strong> Individual language control, offline mode per game, custom launcher options</p>
    </div>

    <div class="upgrade-item">
      <h3>⚡ Professional Performance</h3>
      <p class="current"><strong>Free Plugin:</strong> 100 games per tab</p>
      <p class="upgrade"><strong>Pro:</strong> 1,000 games per tab + zero plugin limitations</p>
    </div>

    <div class="upgrade-item">
      <h3>🛠️ Advanced Features</h3>
      <p class="current"><strong>Free Plugin:</strong> Basic game management</p>
      <p class="upgrade"><strong>Pro:</strong> Download queue, automated dependencies, ROM integration</p>
    </div>

    <div class="upgrade-item">
      <h3>🔄 Direct Updates</h3>
      <p class="current"><strong>Free Plugin:</strong> Wait for Decky store updates</p>
      <p class="upgrade"><strong>Pro:</strong> Instant updates directly from developer</p>
    </div>

    <div class="upgrade-item">
      <h3>🎮 Complete Ecosystem</h3>
      <p class="current"><strong>Free Plugin:</strong> Epic Games launcher</p>
      <p class="upgrade"><strong>Pro:</strong> All platforms + emulators + ROMs integrated in Game Mode</p>
    </div>

    <div class="upgrade-item">
      <h3>⚡ Frame Generation</h3>
      <p class="current"><strong>Free Plugin:</strong> Requires separate plugin or manual setup</p>
      <p class="upgrade"><strong>Pro:</strong> Built-in LSFG-VK with one-click toggles</p>
    </div>

    <div class="upgrade-item">
      <h3>🩺 Help & Diagnostics</h3>
      <p class="current"><strong>Free Plugin:</strong> External docs, manual troubleshooting</p>
      <p class="upgrade"><strong>Pro:</strong> Built-in help system + automatic problem detection</p>
    </div>
  </div>

  <div class="comparison-button">
    <a href="/decky-vs-pro/" class="button button-accent">View Full Comparison</a>
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
