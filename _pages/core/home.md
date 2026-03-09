---
layout: junkstore-splash
title: "Junk Store - Your Non-Steam Gaming Hub"
description: "All your non-Steam games in one place. Epic, GOG, Amazon & itch on Steam Deck - no desktop mode, no multiple launchers. Just gaming."
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
excerpt: "All your non-Steam games in one place. No desktop mode. No multiple launchers. Just gaming."
---

{% include video-demo-player.html %}

<section class="what-is-junkstore">
  <h2>What is Junk Store?</h2>
  <p class="explainer-lead">Junk Store is your all-in-one launcher for non-Steam games on Steam Deck. Instead of juggling multiple launchers or switching to Desktop Mode, Junk Store brings all your game libraries into Steam's Game Mode interface.</p>

  <div class="explainer-features">
    <div class="explainer-feature">
      <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
      <h3>One Hub, All Your Games</h3>
      <p>Access Epic, GOG, Amazon Prime Gaming, and itch libraries from a single, unified interface.</p>
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

  <p class="supported-storefronts">Storefronts: <strong>Epic</strong> · <strong>GOG</strong> · <strong>Amazon</strong> · <strong>itch</strong></p>
  <p class="supported-extras">Plus emulator & ROM support</p>
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


<section class="demo-section">
  <div class="demo-section__content">
    <div class="demo-section__text">
      <h3>See It In Action</h3>
      <p>Browse all your libraries, install games, and launch - all without leaving Game Mode. No Desktop Mode. No extra steps. It just works.</p>
    </div>
    <div class="demo-section__video">
      <div class="video-demo-container" onclick="playDemo(this, '{{ '/assets/images/landing/LibrariesNew.webm' | relative_url }}')">
        <img src="{{ '/assets/images/landing/LibrariesNew-poster.jpg' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch" class="demo-poster" loading="lazy">
        <div class="demo-play-btn">
          <span class="play-icon">▶️</span>
          <span class="play-text">Play Demo</span>
        </div>
        <img data-src="{{ '/assets/images/landing/LibrariesNew.gif' | relative_url }}" alt="Pure Game Mode library access across Epic, GOG, Amazon & itch" class="demo-gif" style="display: none;">
      </div>
    </div>
  </div>
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

<section class="common-questions">
  <h2>Common Questions</h2>
  <div class="questions-grid">
    <div class="question-item">
      <h4>What does it cost?</h4>
      <p><strong>$40</strong> (not a subscription). 7-day free trial, 12 months of updates.<br><a href="/help/">More details →</a></p>
    </div>
    <div class="question-item">
      <h4>Is Junk Store trustworthy?</h4>
      <p><strong>Zero password storage.</strong> Local tokens only, same OAuth as official stores.<br><a href="/help/#is-junk-store-trustworthy">Learn more →</a></p>
    </div>
    <div class="question-item">
      <h4>Will this slow down my Steam Deck?</h4>
      <p><strong>Zero performance impact.</strong> Nothing runs in the background while gaming.</p>
    </div>
    <div class="question-item">
      <h4>What if I have problems?</h4>
      <p><strong>We've got you.</strong> Check our <a href="/help/">help page</a> or reach out - we're always happy to help.</p>
      <p style="text-align: center; margin-top: 0.5rem;"><a href="https://discord.gg/6mRUhR6Teh"><i class="fab fa-discord"></i> Discord</a> · <a href="https://www.reddit.com/r/JunkStore"><i class="fab fa-reddit"></i> Reddit</a></p>
    </div>
  </div>
</section>

<section class="pricing-highlight">
  <div class="pricing-box">
    <h3>🚀 The Only Professional Game Mode Solution</h3>
    <p class="price-text"><strong><span data-pricing="original-crossed">$40</span></strong></p>
    <p class="pricing-features-inline">Software is yours to keep · 12 months of updates & support · <span data-pricing="trial">7-day free trial</span></p>
    <p class="value-text">Install. Play. Configure. All in Game Mode.</p>
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