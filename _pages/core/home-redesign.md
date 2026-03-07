---
layout: splash
title: "Junk Store - Your Non-Steam Gaming Hub"
description: "All your non-Steam games in one place. Epic, GOG, Amazon & itch on Steam Deck - no desktop mode, no multiple launchers. Just gaming."
permalink: /home-redesign/
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
excerpt: "All your non-Steam games in one place. No desktop mode. No multiple launchers. Just gaming."
---

{% include video-demo-player.html %}

<section class="what-is-junkstore" style="padding: 2rem 1.5rem;">
  <h2 style="font-size: 1.75rem;">What is Junk Store?</h2>
  <p class="explainer-lead" style="font-size: 1.05rem;">Junk Store lets you play your Epic, GOG, Amazon, and itch games on Steam Deck without switching to Desktop Mode. Everything works with your controller, right from Game Mode.</p>

  <div class="explainer-features" style="gap: 1.25rem;">
    <div class="explainer-feature">
      <div class="feature-icon" style="font-size: 1.75rem;"><i class="fas fa-gamepad"></i></div>
      <h3>All Your Games, One Place</h3>
      <p>Epic, GOG, Amazon, and itch - browse and install them all without switching apps.</p>
    </div>
    <div class="explainer-feature">
      <div class="feature-icon" style="font-size: 1.75rem;"><i class="fas fa-tv"></i></div>
      <h3>Controller-Friendly</h3>
      <p>Install and play with just your controller. No keyboard or mouse needed.</p>
    </div>
    <div class="explainer-feature">
      <div class="feature-icon" style="font-size: 1.75rem;"><i class="fas fa-plug"></i></div>
      <h3>More Stores Coming</h3>
      <p>We're always adding support for new platforms. Buy once, get updates for a year.</p>
    </div>
  </div>

  <p class="supported-storefronts">Storefronts: <strong>Epic</strong> · <strong>GOG</strong> · <strong>Amazon</strong> · <strong>itch</strong></p>
  <p class="supported-extras">Plus emulator & ROM support</p>

  <!-- CTA removed from here to reduce pushiness -->
</section>

<section class="problem-solution" style="padding: 2rem 1rem;">
  <div class="problem-box">
    <h2 style="font-size: 1.3rem;">Other Launchers</h2>
    <div class="problem-points">
      <p>❌ Have to switch to Desktop Mode to manage games</p>
      <p>❌ Games feel separate from your Steam library</p>
      <p>❌ Extra apps running in the background, using battery</p>
      <p>❌ Awkward with a controller - needs keyboard/mouse</p>
    </div>
  </div>
  <div class="solution-box">
    <h2 style="font-size: 1.3rem;">Junk Store</h2>
    <div class="solution-points">
      <p>✅ Stay in Game Mode - install, update, and play without switching</p>
      <p>✅ Games show up right alongside your Steam games</p>
      <p>✅ Nothing running in the background while you play</p>
      <p>✅ Works great with just your controller</p>
    </div>
  </div>
</section>


<section class="screenshot-section" style="padding: 1.5rem 1rem;">
  <div class="screenshot-box">
    <div class="screenshot-text">
      <h3 style="font-size: 1.3rem;">Play Without Switching Modes</h3>
      <p style="font-size: 1rem;">Other apps make you switch to Desktop Mode. Junk Store keeps you in Game Mode where everything works with your controller.</p>
    </div>
    <div class="video-demo-container" style="max-width: 800px; margin: 0 auto;" onclick="playDemo(this, '{{ '/assets/images/landing/LibrariesNew.webm' | relative_url }}')">
      <img src="{{ '/assets/images/landing/LibrariesNew-poster.jpg' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch" class="demo-poster" loading="lazy">
      <div class="demo-play-btn">
        <span class="play-icon">▶️</span>
        <span class="play-text">Play Demo</span>
      </div>
      <img data-src="{{ '/assets/images/landing/LibrariesNew.gif' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch" class="demo-gif" style="display: none;">
    </div>
  </div>
  <p style="text-align: center; margin-top: 1rem;"><a href="/portal-redirect/" style="color: #ffa366;">Ready to try? Start your free trial →</a></p>
</section>

<section class="screenshot-section" style="padding: 1.5rem 1rem;">
  <div class="screenshot-box">
   <div class="screenshot-text">
      <h3 style="font-size: 1.3rem;">No Extra Steps</h3>
      <p style="font-size: 1rem;">Click install, wait for it to download, hit play. No adding to Steam, no restarts, no Desktop Mode. It just works.</p>
    </div>
    <div class="video-demo-container" style="max-width: 800px; margin: 0 auto;" onclick="playDemo(this, '{{ '/assets/images/landing/Install.webm' | relative_url }}')">
      <img src="{{ '/assets/images/landing/Install-poster.jpg' | relative_url }}" alt="One-click game installation directly in Game Mode" class="demo-poster" loading="lazy">
      <div class="demo-play-btn">
        <span class="play-icon">▶️</span>
        <span class="play-text">Play Demo</span>
      </div>
      <img data-src="{{ '/assets/images/landing/Install.gif' | relative_url }}" alt="One-click game installation directly in Game Mode" class="demo-gif" style="display: none;">
    </div>
  </div>
  <p style="text-align: center; margin-top: 1rem;"><a href="/portal-redirect/" style="color: #ffa366;">Ready to try? Start your free trial →</a></p>
</section>


{% include testimonials.html %}

<section class="library-value-callout">
  <div class="value-box">
    <h3>🎮 Your Free Games Are Worth Thousands</h3>
    <p><strong>Epic alone has given away over $10,000 worth of games since 2018.</strong></p>
    <p>Most people let them collect digital dust - or rebuy them on Steam.</p>
    <p class="value-unlock">Stop rebuying. Start playing.</p>
  </div>
</section>

<section class="pricing-highlight">
  <div class="pricing-box">
    <h3>🚀 The Only Professional Game Mode Solution</h3>
    <p class="price-text"><strong><span data-pricing="original-crossed">$40</span></strong></p>
    <ul class="pricing-features">
      <li>Software is yours to keep</li>
      <li>12 months of updates & support</li>
    </ul>
    <p class="trial-text"><span data-pricing="trial">7-day free trial</span></p>
    <p class="value-text">Play Epic, GOG, Amazon & itch games without leaving Game Mode</p>
    <div data-coupon-container style="display: none; margin: 0.5rem 0;">
      <span class="promo-code" data-pricing="coupon-code"></span> <span data-pricing="coupon-discount"></span>
    </div>
    <div class="pricing-cta">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-pricing="portal-url" data-event="click" data-category="conversion" data-action="trial_signup" data-label="homepage_pricing">Start Free Trial</a>
      <a href="/features/#gallery" class="button button-secondary" data-event="click" data-category="engagement" data-action="view_gallery" data-label="homepage_pricing">See It In Action</a>
      <a href="/features/#difference" class="button button-secondary button-wide" data-event="click" data-category="engagement" data-action="view_comparison" data-label="homepage_pricing">Why Choose Junk Store</a>
    </div>
  </div>
</section>
