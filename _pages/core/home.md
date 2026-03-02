---
layout: splash
title: "Junk Store - Play Non-Steam Games on Steam Deck"
description: "The ONLY solution that eliminates Desktop Mode switching entirely. Play Epic, GOG, Amazon & itch games directly in Steam Deck Game Mode. 7-day trial."
permalink: /
classes: home
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Start Free Trial"
      url: "/portal-redirect/"
      class: "button buy-button"
    - label: "See It In Action"
      url: "/features/#gallery"
      class: "button button-secondary"
excerpt: "Transform your Steam Deck into a unified gaming hub - Epic, GOG, Amazon & itch games install and launch as natively as possible"
---

{% include video-demo-player.html %}

<h1>Never Leave Game Mode for Epic, GOG, Amazon & itch.io (beta) Games</h1>

<section class="what-is-junkstore">
  <h2>What is Junk Store?</h2>
  <p class="explainer-lead">Junk Store is your all-in-one launcher for non-Steam games on Steam Deck. Instead of juggling multiple launchers or switching to Desktop Mode, Junk Store brings all your game libraries into Steam's Game Mode interface.</p>

  <div class="explainer-features">
    <div class="explainer-feature">
      <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
      <h3>One Hub, All Your Games</h3>
      <p>Access Epic, GOG, Amazon Prime Gaming, and itch.io libraries from a single, unified interface.</p>
    </div>
    <div class="explainer-feature">
      <div class="feature-icon"><i class="fas fa-tv"></i></div>
      <h3>Built for Game Mode</h3>
      <p>Install, manage, and launch games without ever touching Desktop Mode. Your controller is all you need.</p>
    </div>
    <div class="explainer-feature">
      <div class="feature-icon"><i class="fas fa-plug"></i></div>
      <h3>Extensible Platform</h3>
      <p>More than a launcher - a growing ecosystem that adapts to new platforms and features over time.</p>
    </div>
  </div>

  <p class="supported-storefronts">Storefronts: <strong>Epic</strong> · <strong>GOG</strong> · <strong>Amazon</strong> · <strong>itch.io</strong></p>
  <p class="supported-extras">Plus emulator & ROM support</p>

  <div class="explainer-cta">
    <a href="/portal-redirect/" class="button buy-button">Start Free Trial</a>
    <a href="/features/" class="button button-secondary">See All Features</a>
  </div>
</section>

<section class="problem-solution">
  <div class="problem-box">
    <h2>Other Launchers: Desktop Mode Required</h2>
    <div class="problem-points">
      <p>❌ <strong>Desktop Mode dependency:</strong> Requires Desktop Mode for game management tasks</p>
      <p>❌ <strong>External integration:</strong> Limited by working outside Steam's ecosystem</p>
      <p>❌ <strong>Background launcher dependency:</strong> Extra processes consuming resources while gaming</p>
      <p>❌ <strong>Inconsistent experience:</strong> Breaks the unified gaming flow</p>
    </div>
  </div>
  <div class="solution-box">
    <h2>Junk Store: Pure Game Mode Experience</h2>
    <div class="solution-points">
      <p>✅ <strong>Always in Game Mode:</strong> Complete game management without Desktop Mode</p>
      <p>✅ <strong>Native Steam integration:</strong> Built inside Steam to leverage all functionality</p>
      <p>✅ <strong>Direct Steam launch:</strong> No background launchers draining performance</p>
      <p>✅ <strong>True Handheld Experience:</strong> Never compromise your flow</p>
    </div>
  </div>
</section>


<section class="screenshot-section">
  <div class="screenshot-box">
    <div class="screenshot-text">
      <h3>Your Handheld Deserves a Handheld Experience</h3>
      <p>While free alternatives require Desktop Mode switching, Junk Store keeps everything in the comfortable Game Mode interface you bought your Steam Deck for.</p>
    </div>
    <div class="video-demo-container" onclick="playDemo(this, '{{ '/assets/images/landing/LibrariesNew.webm' | relative_url }}')">
      <img src="{{ '/assets/images/landing/LibrariesNew-poster.jpg' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch.io (beta)" class="demo-poster" loading="lazy">
      <div class="demo-play-btn">
        <span class="play-icon">▶️</span>
        <span class="play-text">Play Demo</span>
      </div>
      <img data-src="{{ '/assets/images/landing/LibrariesNew.gif' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch.io (beta)" class="demo-gif" style="display: none;">
    </div>
  </div>
</section>

<section class="screenshot-section">
  <div class="screenshot-box">
   <div class="screenshot-text">
      <h3>Stay in Your Comfort Zone. Keep Gaming.</h3>
      <p>One-click installs, instant library access, and streamlined game management - all from the controller-friendly interface you prefer.</p>
    </div>
    <div class="video-demo-container" onclick="playDemo(this, '{{ '/assets/images/landing/Install.webm' | relative_url }}')">
      <img src="{{ '/assets/images/landing/Install-poster.jpg' | relative_url }}" alt="One-click game installation directly in Game Mode" class="demo-poster" loading="lazy">
      <div class="demo-play-btn">
        <span class="play-icon">▶️</span>
        <span class="play-text">Play Demo</span>
      </div>
      <img data-src="{{ '/assets/images/landing/Install.gif' | relative_url }}" alt="One-click game installation directly in Game Mode" class="demo-gif" style="display: none;">
    </div>
  </div>
</section>


{% include testimonials.html %}

<section class="library-value-callout">
  <div class="value-box">
    <h3>🎮 Your Free Game Collection Is Worth Thousands</h3>
    <p>Between Epic's weekly giveaways and Prime Gaming's monthly drops, you've likely claimed hundreds—or even thousands—of dollars in free games.</p>
    <p><strong>Epic alone has given away over $10,000 worth of games since 2018.</strong></p>
    <p class="value-unlock">Stop letting them collect digital dust. Play them all in Game Mode with a <span data-pricing="price">$40</span> annual license.</p>
  </div>
</section>

<section class="pricing-highlight">
  <div class="pricing-box">
    <h3>🚀 The Only Pure Game Mode Solution</h3>
    <p class="price-text"><strong><span data-pricing="original-crossed">$40</span> annual license • <span data-pricing="trial">7-day free trial</span></strong></p>
    <p class="value-text">Never leave Game Mode to play Epic, GOG, Amazon & itch.io games</p>
    <div data-coupon-container style="display: none; margin: 0.5rem 0;">
      <span class="promo-code" data-pricing="coupon-code"></span> <span data-pricing="coupon-discount"></span>
    </div>
    <div class="pricing-cta">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-pricing="portal-url" data-event="click" data-category="conversion" data-action="trial_signup" data-label="homepage_pricing">Start Free Trial</a>
      <a href="/features/#gallery" class="button button-secondary" data-event="click" data-category="engagement" data-action="view_gallery" data-label="homepage_pricing">See It In Action</a>
      <a href="/features/#compare" class="button button-secondary button-wide" data-event="click" data-category="engagement" data-action="view_comparison" data-label="homepage_pricing">Why Choose Junk Store</a>
    </div>
  </div>
</section>