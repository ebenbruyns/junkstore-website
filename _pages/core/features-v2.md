---
layout: junkstore-splash
title: "Junk Store Pro Features: Play Non-Steam Games on Steam Deck"
hero_title: "Junk Store Pro Features"
description: "Junk Store Pro features for Steam Deck: built-in file manager, disk analyzer, process manager - all in Game Mode. Play Epic, GOG, Amazon & itch without Desktop Mode."
permalink: /features/
classes: wide
excerpt: "Features, demos & comparisons for Steam Deck's professional non-Steam solution"
---
{% include content-schema.html type="software" %}
<script>
// Legacy hash redirect: /features/#difference, #gallery, #press were tab anchors
// before each tab became its own page. External links and Google results may
// still point at them. Bounce to the new URL before render so visitors land
// where they expected.
(function () {
  var map = {
    '#difference': '/decky-vs-pro/',
    '#gallery':    '/features/gallery/',
    '#press':      '/features/press/'
  };
  var dest = map[window.location.hash];
  if (dest) window.location.replace(dest + window.location.search);
})();
</script>
<div id="top"></div>

{% include features/nav-tabs.html active="features" %}

<div id="tab-features" class="tab-panel active">

<style>
/* Features Tab Header */
#tab-features .comparison-hero {
  margin: 0;
  padding: 1.5rem 1rem 0.5rem;
}

#tab-features .comparison-hero h1,
#tab-features .comparison-hero h2 {
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
  aspect-ratio: 16 / 9;
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

/* Click-to-play hero feature videos: poster placeholder + play button overlay,
   video doesn't download until user clicks. */
.hero-feature-visual--clickable {
  position: relative;
  cursor: pointer;
}

.hero-feature-visual--clickable .hero-feature-visual__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.hero-feature-visual--clickable:hover .hero-feature-visual__play,
.hero-feature-visual--clickable:focus-visible .hero-feature-visual__play {
  background: rgba(255, 117, 26, 0.9);
  transform: translate(-50%, -50%) scale(1.05);
}

.hero-feature-visual--clickable.playing .hero-feature-visual__play {
  display: none;
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
  <h2>Junk Store Pro Features</h2>
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
  <div class="hero-feature-visual hero-feature-visual--clickable" onclick="playHeroVideo(this)" role="button" tabindex="0">
    <video loop muted playsinline preload="none" poster="/assets/images/jspro/features/gamemode.webp" style="aspect-ratio: 16/9; background: #1a1d24;">
      <source data-src="/assets/images/jspro/features/gamemode.webm" type="video/webm">
      <source data-src="/assets/images/jspro/features/gamemode.mp4" type="video/mp4">
    </video>
    <span class="hero-feature-visual__play" aria-hidden="true">▶</span>
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
  <div class="hero-feature-visual hero-feature-visual--clickable" onclick="playHeroVideo(this)" role="button" tabindex="0">
    <video loop muted playsinline preload="none" poster="/assets/images/jspro/features/libraries.webp" style="aspect-ratio: 16/9; background: #1a1d24;">
      <source data-src="/assets/images/jspro/features/libraries.webm" type="video/webm">
      <source data-src="/assets/images/jspro/features/libraries.mp4" type="video/mp4">
    </video>
    <span class="hero-feature-visual__play" aria-hidden="true">▶</span>
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
  <div class="hero-feature-visual hero-feature-visual--clickable" onclick="playHeroVideo(this)" role="button" tabindex="0">
    <video loop muted playsinline preload="none" poster="/assets/images/jspro/features/filemanager.webp" style="aspect-ratio: 16/9; background: #1a1d24;">
      <source data-src="/assets/images/jspro/features/filemanager.webm" type="video/webm">
      <source data-src="/assets/images/jspro/features/filemanager.mp4" type="video/mp4">
    </video>
    <span class="hero-feature-visual__play" aria-hidden="true">▶</span>
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
  <div class="hero-feature-visual hero-feature-visual--clickable" onclick="playHeroVideo(this)" role="button" tabindex="0">
    <video loop muted playsinline preload="none" poster="/assets/images/jspro/features/diskanalyser.webp" style="aspect-ratio: 16/9; background: #1a1d24;">
      <source data-src="/assets/images/jspro/features/diskanalyser.webm" type="video/webm">
      <source data-src="/assets/images/jspro/features/diskanalyser.mp4" type="video/mp4">
    </video>
    <span class="hero-feature-visual__play" aria-hidden="true">▶</span>
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
  <div class="hero-feature-visual hero-feature-visual--clickable" onclick="playHeroVideo(this)" role="button" tabindex="0">
    <video loop muted playsinline preload="none" poster="/assets/images/jspro/features/gamedetails.webp" style="aspect-ratio: 16/9; background: #1a1d24;">
      <source data-src="/assets/images/jspro/features/gamedetails.webm" type="video/webm">
      <source data-src="/assets/images/jspro/features/gamedetails.mp4" type="video/mp4">
    </video>
    <span class="hero-feature-visual__play" aria-hidden="true">▶</span>
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
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large" data-event="click" data-category="conversion" data-action="trial_signup" data-label="features_tab_cta">Start Free Trial</a>
    <a href="/features/gallery/" class="button button-secondary large" data-event="click" data-category="engagement" data-action="view_gallery" data-label="features_tab_cta">See Live Demos</a>
  </div>
</section>

</div>

<!-- Back to top -->
<div class="section-end">
  <a href="#top" class="back-to-top">Back to Top</a>
</div>

<script>
// Click-to-play for the 5 hero-feature-visual videos at the top of /features/.
// First click swaps the data-src attributes to src, calls load(), then plays.
// No-op if already playing (so accidental double-clicks don't restart).
function playHeroVideo(container) {
  if (container.classList.contains('playing')) return;
  container.classList.add('playing');
  const video = container.querySelector('video');
  if (!video) return;
  video.querySelectorAll('source[data-src]').forEach(s => {
    s.src = s.dataset.src;
    s.removeAttribute('data-src');
  });
  video.load();
  const p = video.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}
</script>
