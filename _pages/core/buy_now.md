---
layout: splash
title: "Get Junk Store Pro"
description: "Download Junk Store Pro standalone app for Steam Deck. $40 annual license with 7-day trial. No Decky required - install Epic, GOG, Amazon & itch.io (beta) directly in Game Mode."
permalink: /buy_now/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Start Free Trial"
      url: "/portal-redirect/"
      class: "button buy-button"
    - label: "See It In Action"
      url: "/gallery/"
      class: "button button-secondary"
excerpt: "Stop switching to Desktop Mode. Junk Store Pro brings Epic, GOG, Amazon & itch games directly into Steam Deck Game Mode."
---
<div id="top"></div>

<!-- Tab Navigation -->
<div class="buy-tabs">
  <button class="buy-tab active" data-tab="glance" onclick="switchBuyTab('glance')">At a Glance</button>
  <button class="buy-tab" data-tab="unlock" onclick="switchBuyTab('unlock')">What Pro Unlocks</button>
  <button class="buy-tab" data-tab="faq" onclick="switchBuyTab('faq')">FAQ</button>
</div>

<!-- ==================== AT A GLANCE TAB ==================== -->
<div id="tab-glance" class="buy-tab-panel active">

<h1 class="page-title">Transform Your Steam Deck Into a Unified Gaming Hub</h1>
<p class="tagline">The launcher built for handheld gaming.</p>

<section class="visual-proof">
  <div class="screenshot-container">
    <div class="video-demo-container" onclick="playDemo(this, '/assets/images/landing/LibrariesNew.webm')">
      <img src="/assets/images/landing/LibrariesNew-poster.jpg" alt="Steam Deck unified gaming library with Epic, GOG, Amazon & itch.io games in Game Mode" class="demo-poster" loading="lazy" />
      <div class="demo-play-btn">
        <span class="play-icon">▶️</span>
        <span class="play-text">Play Demo</span>
      </div>
      <img data-src="/assets/images/landing/LibrariesNew.gif" alt="Steam Deck unified gaming library with Epic, GOG, Amazon & itch.io games in Game Mode" class="demo-gif" style="display: none;" />
    </div>
    <div class="screenshot-caption">
      <p><strong>See it in action:</strong> All your Epic, GOG, Amazon & itch.io games appearing as natively as possible in your Steam library - no Desktop Mode required</p>
    </div>
  </div>

  <div class="progressive-cta">
    <p class="cta-prompt">Ready to get started, or need more details?</p>
    <div class="cta-buttons">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-event="click" data-category="conversion" data-action="trial_signup" data-label="buy_now_visual_proof">Start Free Trial</a>
      <a href="#" onclick="switchBuyTab('unlock'); return false;" class="button button-secondary" data-event="click" data-category="engagement" data-action="view_comparison" data-label="buy_now_visual_proof">Compare Features</a>
    </div>
  </div>
</section>

{% include video-demo-player.html %}

<section class="key-features">
  <h2>Why Junk Store Pro Is Worth the Investment</h2>
  <div class="features-grid">
    <div class="feature"><div style="text-align: center;">🚀 <strong>Never Leave Game Mode</strong></div><span class="feature-detail" style="text-align: left; display: block;">No Desktop Mode switching required</span></div>
    <div class="feature"><div style="text-align: center;">⚡ <strong>Just Works</strong></div><span class="feature-detail" style="text-align: left; display: block;">Install once, play immediately</span></div>
    <div class="feature"><div style="text-align: center;">🎯 <strong>Native-Like Integration</strong></div><span class="feature-detail" style="text-align: left; display: block;">Games appear directly in your library</span></div>
    <div class="feature"><div style="text-align: center;">🎮 <strong>All Your Stores</strong></div><span class="feature-detail" style="text-align: left; display: block;">Epic, GOG, Amazon & itch.io unified</span></div>
    <div class="feature"><div style="text-align: center;">🔧 <strong>Ongoing Support</strong></div><span class="feature-detail" style="text-align: left; display: block;">Regular updates and quick fixes</span></div>
    <div class="feature"><div style="text-align: center;">💰 <strong>Better Than Free</strong></div><span class="feature-detail" style="text-align: left; display: block;">Professional quality without the hassle</span></div>
  </div>
</section>

{% include testimonials.html %}

<div class="progressive-cta testimonial-cta">
  <p class="cta-prompt">Stop wasting precious gaming time on setup — start playing in minutes, not hours</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-event="click" data-category="conversion" data-action="trial_signup" data-label="buy_now_testimonials">Start Free Trial</a>
    <a href="/gallery/" class="button button-secondary" data-event="click" data-category="engagement" data-action="view_more_demos" data-label="buy_now_testimonials">See More Demos</a>
  </div>
</div>

<section class="library-value-callout">
  <div class="value-box">
    <h3>🎮 Your Free Game Collection Is Worth Thousands</h3>
    <p>Between Epic's weekly giveaways and Prime Gaming's monthly drops, you've likely claimed hundreds—or even thousands—of dollars in free games.</p>
    <p><strong>Epic alone has given away over $10,000 worth of games since 2018.</strong></p>
    <p class="value-unlock">Stop letting them collect digital dust. Play them all in Game Mode with a <span data-pricing="price">$40</span> annual license.</p>
  </div>
</section>

<section class="pricing-highlight" id="pricing-details">
  <div class="pricing-box">
    <h3>🚀 Get Everything for <span data-pricing="original-crossed">$40</span> Annual License</h3>
    <p class="price-text"><span data-pricing="weekly">Less than $1</span> per week for unlimited Epic, GOG, Amazon & itch.io gaming without Desktop Mode frustration</p>
    <p class="trial-text"><span data-pricing="trial">7-day free trial</span> • Cancel anytime • Keep everything forever after purchase</p>
    <div data-coupon-container style="display: none; margin-bottom: 1rem;">
      <span class="promo-code" data-pricing="coupon-code"></span> <span data-pricing="coupon-discount"></span>
      <div style="font-size: 0.9rem; opacity: 0.8;" data-pricing="coupon-desc"></div>
    </div>
    <div class="pricing-cta">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-pricing="portal-url" data-event="click" data-category="conversion" data-action="trial_signup" data-label="buy_now_page_primary">Start Free Trial</a>
    </div>
  </div>
</section>

</div>

<!-- ==================== WHAT PRO UNLOCKS TAB ==================== -->
<div id="tab-unlock" class="buy-tab-panel">

<section class="upgrade-hero">
  <h1>Free Decky Plugin vs Junk Store Pro</h1>
  <p class="lead-text"><strong>Already using the free Decky plugin? Here's what the premium experience unlocks.</strong></p>
  <p>New to Junk Store? This comparison shows the difference between our free plugin and full Pro version.</p>
</section>

<section class="upgrade-highlights">
  <h2>What You Get With Pro</h2>
  <div class="upgrade-grid">

    <div class="upgrade-item">
      <h3>🌍 More Gaming Platforms</h3>
      <p class="current">✅ <strong>Free Plugin:</strong> Epic Games support</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> Amazon Prime Gaming + itch.io (beta) + Enhanced GOG support</p>
    </div>

    <div class="upgrade-item">
      <h3>🎯 Per-Game Control</h3>
      <p class="current">✅ <strong>Free Plugin:</strong> Basic game launching</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> Individual language control, offline mode per game, custom launcher options</p>
    </div>

    <div class="upgrade-item">
      <h3>⚡ Professional Performance</h3>
      <p class="current">✅ <strong>Free Plugin:</strong> 100 games per tab</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> 1,000 games per tab + zero plugin limitations</p>
    </div>

    <div class="upgrade-item">
      <h3>🛠️ Advanced Features</h3>
      <p class="current">✅ <strong>Free Plugin:</strong> Basic game management</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> Download queue, automated dependencies, ROM integration</p>
    </div>

    <div class="upgrade-item">
      <h3>🔄 Direct Updates</h3>
      <p class="current">⏳ <strong>Free Plugin:</strong> Wait for Decky store updates</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> Instant updates directly from developer</p>
    </div>

    <div class="upgrade-item">
      <h3>🎮 Complete Ecosystem</h3>
      <p class="current">✅ <strong>Free Plugin:</strong> Epic Games launcher</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> All platforms + emulators + ROMs integrated in Game Mode</p>
    </div>

    <div class="upgrade-item">
      <h3>⚡ Frame Generation</h3>
      <p class="current">❌ <strong>Free Plugin:</strong> Requires separate plugin or manual launch arguments</p>
      <p class="upgrade">🚀 <strong>Pro:</strong> Built-in LSFG-VK with one-click toggles</p>
    </div>

  </div>

  <div class="upgrade-guarantee">
    <p><strong>Keep everything you love:</strong> All your current Epic Games functionality remains exactly the same, plus you get all these premium features.</p>
  </div>
</section>

<section class="detailed-comparison-section" id="feature-comparison">
  <h2>Complete Feature Comparison</h2>
  <p class="table-intro">Selected features include live demonstrations. Hover over "👁️ Preview" to see the functionality in action.</p>

  <table class="comparison-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Free Decky Plugin</th>
          <th>Junk Store Pro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Epic Games</strong></td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td><strong>UMU Compatibility Fixes</strong></td>
          <td>✅ Yes</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td><strong>GOG Games</strong></td>
          <td>💰 Paid Extension Required</td>
          <td>✅ Included</td>
        </tr>
        <tr>
          <td><strong>Amazon Prime Gaming</strong></td>
          <td>❌ Not Available</td>
          <td>✅ Full Support</td>
        </tr>
        <tr>
          <td><strong>itch.io Gaming</strong> <span class="new-badge">NEW</span></td>
          <td>❌ Not Available</td>
          <td>✅ Beta Support</td>
        </tr>
        <tr>
          <td><strong>LSFG-VK Frame Generation</strong> <span class="new-badge">NEW</span></td>
          <td>❌ Requires Separate Plugin or Manual Setup</td>
          <td>✅ Built-in One-Click Toggle</td>
        </tr>
        <tr>
          <td><strong>Download Queue Management</strong></td>
          <td>❌ Not Available</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
            ✅ Advanced Queue System <span class="hover-label">👁️ Preview</span>
            <div class="gif-popup">
              <video autoplay muted loop playsinline preload="none">
                <source src="/assets/images/jspro/tablegifs/download.webm" type="video/webm">
                <img src="/assets/images/jspro/tablegifs/download.gif" alt="Download queue management demo">
              </video>
              <p>Manage multiple downloads, pause/resume, and monitor progress</p>
            </div>
          </td>
        </tr>
        <tr>
          <td><strong>Emulator Integration</strong></td>
          <td>❌ Not Available</td>
          <td>✅ Full ROM Support</td>
        </tr>
        <tr>
          <td><strong>ROM Download Support</strong></td>
          <td>❌ Not Available</td>
          <td>✅ Direct ROM Management</td>
        </tr>
        <tr>
          <td><strong>GOG DOS Games</strong></td>
          <td>❌ Not Available</td>
          <td>✅ Native Support</td>
        </tr>
        <tr>
          <td><strong>GOG ScummVM Games</strong></td>
          <td>❌ Not Available</td>
          <td>✅ Automatic Integration</td>
        </tr>
        <tr>
          <td><strong>Built-in Extension Updates</strong></td>
          <td>❌ Manual Process</td>
          <td>✅ Automated Updates</td>
        </tr>
        <tr>
          <td><strong>Built-in Help System</strong></td>
          <td>❌ External Documentation</td>
          <td>✅ Contextual Help</td>
        </tr>
        <tr>
          <td><strong>Offline Artwork Cache</strong></td>
          <td>❌ Requires Online</td>
          <td>✅ Per-Extension Caching</td>
        </tr>
        <tr>
          <td><strong>Game Language Selection</strong></td>
          <td>❌ Not Available</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
            ✅ Multi-Language Support <span class="hover-label">👁️ Preview</span>
            <div class="gif-popup">
              <video autoplay muted loop playsinline preload="none">
                <source src="/assets/images/jspro/tablegifs/languageselection.webm" type="video/webm">
                <img src="/assets/images/jspro/tablegifs/languageselection.gif" alt="Language selection demo">
              </video>
              <p>Choose your preferred language for supported games</p>
            </div>
          </td>
        </tr>
        <tr>
          <td><strong>Selective DLC Installation</strong></td>
          <td>❌ All or Nothing</td>
          <td>✅ Choose DLC Packs</td>
        </tr>
        <tr>
          <td><strong>Per-Game Launcher Options</strong></td>
          <td>❌ Fixed Configuration</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
            ✅ Flexible Launcher System <span class="hover-label">👁️ Preview</span>
            <div class="gif-popup">
              <video autoplay muted loop playsinline preload="none">
                <source src="/assets/images/jspro/tablegifs/changelauncher.webm" type="video/webm">
                <img src="/assets/images/jspro/tablegifs/changelauncher.gif" alt="Per-game launcher configuration demo">
              </video>
              <p>Customize launcher behavior for each individual game</p>
            </div>
          </td>
        </tr>
        <tr>
          <td><strong>Custom Script Hooks</strong></td>
          <td>❌ Limited Customization</td>
          <td>✅ Advanced Scripting</td>
        </tr>
        <tr>
          <td><strong>Cloud Saves</strong></td>
          <td>❌ Not Available</td>
          <td>⚠️ Experimental (Enable Per Game)</td>
        </tr>
        <tr>
          <td><strong>Access Method</strong></td>
          <td>📥 Through Decky Menu</td>
          <td>🎮 Ctrl+3 or Select Button</td>
        </tr>
        <tr>
          <td><strong>Release Distribution</strong></td>
          <td>🔧 Through Decky Store</td>
          <td>🚀 Direct from Developer</td>
        </tr>
        <tr>
          <td><strong>Performance Capacity</strong></td>
          <td>💯 100 Games Per Tab</td>
          <td>🔢 1,000 Games Per Tab</td>
        </tr>
        <tr>
          <td><strong>System Customization</strong></td>
          <td>🔒 Plugin Limitations</td>
          <td>🔧 Extensive Configuration</td>
        </tr>
        <tr>
          <td><strong>Extension Development</strong></td>
          <td>🧩 Full Code Required</td>
          <td>🪄 Wizard + Manual Coding</td>
        </tr>
        <tr>
          <td><strong>Game Dependency Installation</strong></td>
          <td>🛠️ Manual Process<br>🧪 Requires Proton Tricks</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
            ⚙️ Built-in Installer <span class="hover-label">👁️ Preview</span>
            <div class="gif-popup">
              <video autoplay muted loop playsinline preload="none">
                <source src="/assets/images/jspro/tablegifs/dependencies.webm" type="video/webm">
                <img src="/assets/images/jspro/tablegifs/dependencies.gif" alt="Automated dependency installation demo">
              </video>
              <p>Automatic dependency detection and one-click installation</p>
            </div>
            <br>🛠️ Manual Available<br>🧪 Proton Tricks Compatible
          </td>
        </tr>
        <tr>
          <td><strong>Custom Extension Creation</strong></td>
          <td>👨‍💻 Manual Coding Only</td>
          <td>🧙 Wizard-Guided Creation</td>
        </tr>
        <tr>
          <td><strong>Extension Customization</strong></td>
          <td>💻 Code-Heavy Modifications</td>
          <td>🧠 Generated Templates + Hooks</td>
        </tr>
        <tr>
          <td><strong>Offline Mode Per Game</strong> <span class="new-badge">NEW</span></td>
          <td>🔧 Requires Global Setting Under Each Tab</td>
          <td>✅ Per-Game Configuration<br><span style="font-size: 0.9em; color: #ccc;">Set offline mode individually for each game across all storefronts</span></td>
        </tr>
        <tr>
          <td><strong>System Language Detection Per Game</strong> <span class="new-badge">NEW</span></td>
          <td>🔧 Requires Manual File Editing<br><span style="font-size: 0.9em; color: #ccc;">Must alter files to add language codes</span></td>
          <td>✅ Per Game Language Setting<br><span style="font-size: 0.9em; color: #ccc;">Individual language control for games that use system language detection</span></td>
        </tr>
        <tr>
          <td><strong>Diagnostics Framework</strong> <span class="new-badge">NEW</span></td>
          <td>❌ Not Available<br><span style="font-size: 0.9em; color: #ccc;">Manual troubleshooting required</span></td>
          <td>✅ Automated Detection<br><span style="font-size: 0.9em; color: #ccc;">Automatically detects Junk Store configurations that are broken</span></td>
        </tr>
      </tbody>
  </table>
</section>

<section class="trial-cta" id="trial">
  <div class="cta-box">
    <h2>Ready to Experience the Full Version?</h2>
    <p>Try all premium features free for <span data-pricing="trial-days">7</span> days. No commitment, cancel anytime.</p>
    <div class="cta-buttons">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button large">Start Free Trial</a>
      <a href="/gallery/" class="button button-secondary large">Watch Demos First</a>
    </div>
    <p class="guarantee">Cancel anytime during trial | No commitment | Full feature access</p>
  </div>
</section>

</div>

<!-- ==================== FAQ TAB ==================== -->
<div id="tab-faq" class="buy-tab-panel">

<section class="purchase-faq">
  <h2>Frequently Asked Questions</h2>

  <h3>🛒 Before You Buy</h3>
  <div class="faq-grid">

    <div class="faq-item">
      <h4>Can I try before I buy to see if it's worth it?</h4>
      ✅ <strong><span data-pricing="trial">7-day free trial</span></strong> with full access to all features. Cancel anytime for zero charges. <a href="/2.0faq/#trial-length-what-happens">Trial details →</a>
    </div>

    <div class="faq-item">
      <h4>Is Junk Store trustworthy with my credentials?</h4>
      ✅ <strong>Zero password storage.</strong> Local tokens only, same OAuth as official stores. <a href="/2.0faq/#is-junk-store-trustworthy">Security details →</a>
    </div>

    <div class="faq-item">
      <h4>What happens if I don't renew my annual license?</h4>
      ✅ <strong>You keep everything forever.</strong> All games remain playable, just no future updates. <a href="/2.0faq/#what-happens-no-renew">Ownership details →</a>
    </div>

    <div class="faq-item">
      <h4>What makes this different from free alternatives?</h4>
      ✅ <strong>Game Mode-native + zero resource usage.</strong> Others run between Steam and games. <a href="#" onclick="switchBuyTab('unlock'); return false;">Full comparison →</a>
    </div>

  </div>

  <h3>⚙️ Technical Questions</h3>
  <div class="faq-grid">

    <div class="faq-item">
      <h4>Will this slow down my Steam Deck?</h4>
      ✅ <strong>Zero performance impact.</strong> Games launch directly through Steam without background processes.
    </div>

    <div class="faq-item">
      <h4>What if I have problems during setup?</h4>
      ✅ <strong>Professional support team.</strong> Most issues resolved in minutes. <a href="/2.0troubleshooting/#installation-not-completing">Installation fixes →</a> • <a href="/2.0troubleshooting/#executables-wont-run">Executable fixes →</a>
    </div>

    <div class="faq-item">
      <h4>I've been claiming free Epic and Prime Gaming games. Will this work with those?</h4>
      ✅ <strong>Absolutely.</strong> Epic has given away $10,000+ worth of games since 2018, and Prime Gaming adds 15-25 games monthly. One <span data-pricing="price">$40</span> annual license unlocks your entire collection in Game Mode. <a href="/tested-games/">See compatible games →</a>
    </div>

    <div class="faq-item">
      <h4>Can I use both the free Decky plugin and Pro?</h4>
      ⚠️ <strong>Use the "Decky Stable" channel</strong> if running both Decky Loader and Pro. Download from this channel in the portal to ensure compatibility.
    </div>

  </div>
</section>

<section class="support-and-community">
  <h3>💡 Previous Supporter?</h3>
  <p>All previous supporters have been migrated to the Portal. Simply sign in using your original email address to access your existing benefits.</p>
  <p><strong>First time signing in?</strong> Read our <a href="https://www.junkstore.xyz/blog/gog-extension-portal-only/" target="_blank">step-by-step guide</a> for instructions on activating your Portal account.</p>
  <p><strong>Need help?</strong> Contact us via <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord</a> and we'll help you get sorted.</p>

  <div class="community-section">
    <p><strong>Connect with our community:</strong></p>
    <p>
      <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
        <i class="fab fa-discord"></i> Discord
      </a>
      <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn">
        <i class="fab fa-reddit"></i> Reddit
      </a>
    </p>
  </div>
</section>

<section class="pricing-highlight faq-pricing">
  <div class="pricing-box">
    <h3>🚀 Get Everything for <span data-pricing="original-crossed">$40</span> Annual License</h3>
    <p class="price-text"><span data-pricing="weekly">Less than $1</span> per week for unlimited Epic, GOG, Amazon & itch.io gaming</p>
    <p class="trial-text"><span data-pricing="trial">7-day free trial</span> • Cancel anytime • Keep everything forever</p>
    <div class="pricing-cta">
      <a href="/portal-redirect/" rel="noopener" class="button buy-button" data-pricing="portal-url">Start Free Trial</a>
    </div>
  </div>
</section>

</div>

<!-- ==================== SCRIPTS ==================== -->
<script>
// Handle URL hash on page load
document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash && ['glance', 'unlock', 'faq'].includes(hash)) {
    switchBuyTab(hash, false);
  }
});

// Handle browser back/forward
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash && ['glance', 'unlock', 'faq'].includes(hash)) {
    switchBuyTab(hash, false);
  }
});

function switchBuyTab(tabName, updateUrl = true) {
  // Update tab buttons
  document.querySelectorAll('.buy-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    }
  });

  // Update tab panels
  document.querySelectorAll('.buy-tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');

  // Update URL hash
  if (updateUrl) {
    history.replaceState(null, '', '#' + tabName);
  }

  // Scroll to top of tabs
  document.querySelector('.buy-tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartGif(container) {
  const gif = container.querySelector("img");
  if (gif) {
    const src = gif.getAttribute("src").split("?")[0];
    gif.setAttribute("src", `${src}?t=${Date.now()}`);
  }
}

// Toggle popup for touch devices
function togglePopup(element) {
  const wasActive = element.classList.contains('active');
  document.querySelectorAll('.hover-popup.active').forEach(el => {
    el.classList.remove('active');
  });
  if (!wasActive) {
    element.classList.add('active');
    restartGif(element);
  }
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.hover-popup')) {
    document.querySelectorAll('.hover-popup.active').forEach(el => {
      el.classList.remove('active');
    });
  }
});

// Mobile GIF popup improvements
document.addEventListener('DOMContentLoaded', function() {
  const hoverPopups = document.querySelectorAll('.hover-popup');
  hoverPopups.forEach(popup => {
    popup.addEventListener('click', function(e) {
      e.stopPropagation();
      togglePopup(this);
    });
    popup.addEventListener('mouseenter', function() {
      const gifPopup = this.querySelector('.gif-popup');
      if (gifPopup && window.innerWidth <= 768) {
        gifPopup.style.position = 'fixed';
        gifPopup.style.top = '10px';
        gifPopup.style.left = '50%';
        gifPopup.style.transform = 'translateX(-50%)';
      }
    });
  });
});
</script>

<style>
/* ========== TAB NAVIGATION ========== */
.buy-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 1.5rem 0;
  flex-wrap: wrap;
}

.buy-tab {
  padding: 12px 24px;
  border: 2px solid #444;
  border-radius: 8px;
  background: #1e2a38;
  color: #ccc;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.buy-tab:hover {
  border-color: #e67300;
  color: #fff;
}

.buy-tab.active {
  background: #e67300;
  border-color: #e67300;
  color: #fff;
}

@media (max-width: 480px) {
  .buy-tab {
    padding: 10px 16px;
    font-size: 0.9rem;
    flex: 1;
    text-align: center;
  }
}

/* ========== TAB PANELS ========== */
.buy-tab-panel {
  display: none;
}

.buy-tab-panel.active {
  display: block;
}

/* ========== PAGE TITLE & TAGLINE ========== */
.page-title {
  text-align: center;
}

.tagline {
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
  margin: -0.5rem 0 1.5rem 0;
}

/* ========== UPGRADE GRID ========== */
.upgrade-highlights {
  max-width: 1200px;
  width: 98%;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.upgrade-highlights h2 {
  text-align: center;
  color: #66bfff;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: bold;
}

.upgrade-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.25rem 0;
}

.upgrade-item {
  background: #1e2a38;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1.25rem;
  transition: all 0.2s ease;
}

.upgrade-item:hover {
  border-color: #0af;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 170, 255, 0.15);
}

.upgrade-item h3 {
  color: #66bfff;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;
}

.upgrade-item .current {
  color: #8bc34a;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.upgrade-item .upgrade {
  color: #ffa366;
  margin-bottom: 0;
  font-size: 0.95rem;
}

.upgrade-guarantee {
  background: rgba(0, 170, 255, 0.1);
  border: 1px solid rgba(0, 170, 255, 0.3);
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  margin: 1.5rem 0;
}

.upgrade-guarantee p {
  margin: 0;
  color: #e8e8e8;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .upgrade-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .upgrade-item {
    padding: 1.25rem;
  }

  .upgrade-item h3 {
    font-size: 1.1rem;
  }
}

/* ========== COMPARISON TABLE ========== */
.detailed-comparison-section {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.detailed-comparison-section h2 {
  text-align: center;
  color: #66bfff;
  margin-bottom: 0.5rem;
}

.table-intro {
  text-align: center;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #444;
}

.comparison-table thead {
  background: #1e2a38;
}

.comparison-table th {
  padding: 1rem;
  text-align: left;
  color: #66bfff;
  font-weight: 600;
  border-bottom: 2px solid #444;
}

.comparison-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  vertical-align: top;
  color: #e8e8e8;
}

.comparison-table td:first-child {
  color: #fff;
  width: 35%;
}

.comparison-table tr:hover {
  background: rgba(0, 170, 255, 0.05);
}

.new-badge {
  background: #e67300;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  margin-left: 0.5rem;
  vertical-align: middle;
}

/* ========== HOVER POPUPS ========== */
.hover-popup {
  position: relative;
  cursor: pointer;
}

.hover-label {
  color: #0af;
  font-size: 0.85rem;
  margin-left: 0.5rem;
}

.gif-popup {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  margin-left: 10px;
  background: #1e2a38;
  border: 2px solid #0af;
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.hover-popup:hover .gif-popup,
.hover-popup.active .gif-popup {
  display: block;
}

.gif-popup video,
.gif-popup img {
  width: 100%;
  border-radius: 4px;
}

.gif-popup p {
  margin: 0.5rem 0 0 0;
  font-size: 0.85rem;
  color: #ccc;
}

@media (max-width: 768px) {
  .gif-popup {
    position: fixed;
    left: 50% !important;
    top: 10px !important;
    transform: translateX(-50%);
    width: 90%;
    max-width: 350px;
  }

  .comparison-table {
    font-size: 0.9rem;
  }

  .comparison-table td,
  .comparison-table th {
    padding: 0.5rem;
  }
}

/* ========== FAQ STYLES ========== */
.purchase-faq {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.purchase-faq h2 {
  text-align: center;
  color: #66bfff;
  margin-bottom: 1.5rem;
}

.purchase-faq h3 {
  font-size: 1.15rem;
  color: #ffa366;
  margin: 1.5rem 0 0.75rem 0;
  text-align: left;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  text-align: left;
}

.faq-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1.25rem;
  transition: background-color 0.2s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.faq-item h4 {
  color: #ffa366;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .faq-item {
    padding: 1.25rem;
  }
}

/* ========== COMMUNITY BUTTONS ========== */
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-left: 8px;
  color: white;
}

.discord-btn {
  background: #5865f2;
  color: white !important;
}

.reddit-btn {
  background: #ff4500;
  color: white !important;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white;
  opacity: 0.9;
}

.community-section {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #444;
}

/* ========== CTA SECTIONS ========== */
.trial-cta {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.trial-cta .cta-box {
  background: linear-gradient(135deg, rgba(0, 170, 255, 0.15), rgba(0, 170, 255, 0.05));
  border: 2px solid rgba(0, 170, 255, 0.4);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.trial-cta .cta-box h2 {
  color: #66bfff;
  margin-top: 0;
}

.trial-cta .cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.trial-cta .guarantee {
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0;
}

.faq-pricing {
  margin-top: 2rem;
}

/* ========== SUPPORT SECTION ========== */
.support-and-community {
  max-width: 1200px;
  margin: 1.5rem auto;
  padding: 1rem;
  text-align: left;
}

.support-and-community h3 {
  margin-top: 0;
}
</style>
