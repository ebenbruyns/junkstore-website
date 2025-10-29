---
layout: splash
title: "Unified FAQ - All Versions"
description: "Comprehensive FAQ covering both Decky Plugin and Junk Store 2.0 with clear version indicators"
permalink: /help-mockup/unified-faq/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Junk Store FAQ - All Versions"
  actions:
    - label: "Get Help"
      url: "/help-mockup/"
      class: "button buy-button"
excerpt: "Comprehensive FAQ covering both free and professional versions"
classes: wide
---

<!-- Navigation Breadcrumb -->
<nav class="help-breadcrumb">
  <a href="/help-mockup/">← Help Hub</a> / <strong>Unified FAQ</strong>
</nav>

<section class="seo-intro">
  <p><strong>Complete FAQ for all Junk Store versions.</strong> Questions are clearly marked for Decky Plugin (free), Junk Store 2.0 (professional), or both versions. Find answers about pricing, setup, compatibility, and troubleshooting.</p>
</section>

<!-- Version Filter -->
<section class="version-filter">
  <h2>Filter by Your Version</h2>
  <p style="text-align: center; margin: 0 0 20px 0; opacity: 0.8;">Choose your version to see relevant questions, or show all to browse everything</p>
  <div class="filter-buttons">
    <button class="filter-btn filter-decky" data-filter="decky">
      <strong>Decky Plugin (Free)</strong>
      <p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">Game Mode plugin via Decky Loader</p>
    </button>
    <button class="filter-btn filter-standalone" data-filter="professional">
      <strong>2.0 Standalone (Professional)</strong>
      <p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">Full-featured standalone application</p>
    </button>
    <button class="filter-btn filter-all active" data-filter="all">
      <strong>Show All Questions</strong>
      <p style="margin: 5px 0 0 0; font-size: 0.9em; opacity: 0.8;">View all versions together</p>
    </button>
  </div>
</section>

<style>
  /* Version-specific content styling */
  .version-content-box {
    padding: 15px 20px;
    margin: 10px 0;
    border-radius: 6px;
    border-left: 4px solid;
  }

  .version-professional {
    background-color: rgba(251, 146, 60, 0.08);
    border-left-color: #fb923c;
  }

  .version-professional strong:first-child {
    color: #fb923c;
  }

  .version-decky {
    background-color: rgba(59, 130, 246, 0.08);
    border-left-color: #3b82f6;
  }

  .version-decky strong:first-child {
    color: #3b82f6;
  }
</style>

<!-- FAQ Content -->
<section class="faq-content">
  <!-- Getting Started -->
  <div class="faq-category">
    <h2>Getting Started</h2>

    <div class="faq-item shared" data-version="shared" id="difference-between-versions">
      <div class="faq-question-header">
        <h3>What's the difference between the Decky version and the Professional version?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Junk Store 2.0 (Professional):</strong>
          <br><br>
          A standalone app that doesn't require Decky Loader, with more features and active development:
          <ul>
            <li>Built-in integrations: Epic, GOG, Amazon, and itch.io</li>
            <li>Emulation and ROM support with individual console tabs in Game Mode</li>
            <li>Download game dependencies in Game Mode (no ProtonTricks/WineTricks needed)</li>
            <li>Dedicated update channels for hotfixes, features, and beta releases</li>
            <li>Per-game settings: language, DLC selection, launcher options, and offline mode</li>
          </ul>
        </div>

        <div class="version-content-box version-decky">
          <strong>Decky Plugin (Free):</strong>
          <br><br>
          Free and open source, runs via Decky Loader:
          <ul>
            <li>Epic integration included; GOG integration available for $6 USD one-time purchase</li>
            <li>In maintenance mode, but <a href="https://github.com/ebenbruyns/junkstore/pulls" target="_blank" rel="noopener noreferrer">community contributions</a> welcome</li>
          </ul>
        </div>

        <br>
        <strong>For detailed feature comparison:</strong> <a href="/comparison/">View Complete Comparison Chart</a>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="is-junk-store-trustworthy">
      <div class="faq-question-header">
        <h3>Is Junk Store trustworthy and how are my credentials handled?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <strong>Yes, Junk Store is trustworthy.</strong> We prioritize user security and transparency in how we handle your gaming credentials.
  <br>
  <br>
    <strong>Developer Credentials:</strong>
    <ul>
      <li>Developed by a cybersecurity expert and white-hat professional</li>
      <li>You can verify our lead developer's credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a></li>
      <li>Open-source Decky plugin code is publicly auditable on <a href="https://github.com/ebenbruyns/junkstore" target="_blank">GitHub</a></li>
      <li>Active in Steam Deck community since launch with established reputation</li>
    </ul>
    <strong>Credential Security:</strong>
    <ul>
      <li><strong>No password storage:</strong> Junk Store never stores your Epic, GOG, Amazon, or itch.io (beta) passwords</li>
      <li><strong>Token-based authentication:</strong> Uses secure login tokens provided by each platform</li>
      <li><strong>Local storage only:</strong> All tokens stored locally on your Steam Deck</li>
      <li><strong>Standard OAuth flow:</strong> Same login method used by official store websites</li>
    </ul>
    <strong>Privacy Protection:</strong>
    <ul>
      <li><strong>No personal data collection:</strong> We don't collect or store personal information</li>
      <li><strong>No game tracking:</strong> Your gaming habits aren't monitored or reported</li>
      <li><strong>Local operation:</strong> Most functionality works entirely offline</li>
    </ul>
    <strong>Technical Trust Factors:</strong>
    <ul>
      <li><strong>Established developer:</strong> Active in Steam Deck community since launch with well-established security credentials</li>
      <li><strong>Transparent development:</strong> Regular updates with clear changelogs (2.0 Professional version)</li>
      <li><strong>Professional maintenance:</strong> Consistent updates and bug fixes (2.0 Professional version)</li>
    </ul>
    <div style="background-color: rgba(59, 130, 246, 0.15); border-left: 4px solid #3b82f6; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
      <strong>Bottom line:</strong> Junk Store has been trusted by thousands of Steam Deck users across both versions. Your credentials are handled using industry-standard practices by established tools in the Linux gaming community.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="how-to-access-junk-store">
      <div class="faq-question-header">
        <h3>How do I access Junk Store after installation?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>For Junk Store 2.0:</strong>
      <br><br>
      After installing Junk Store 2.0, you access it by pressing the <strong>Select</strong> button above the D-pad on your Steam Deck or <strong>Ctrl+3</strong> if using a PC. No need to switch to Desktop Mode or launch separate applications.
      <br><br>
      This opens directly in Game Mode, giving you immediate access to your Epic, GOG, Amazon & itch.io (beta) game libraries.
    </div>

    <div class="version-content-box version-decky">
      <strong>For Decky Plugin:</strong>
      <br><br>
      After installing the Decky plugin, access Junk Store through the <strong>Decky Loader menu</strong>:
      <ol>
        <li>Press the <strong>three-dot button</strong> (Quick Access Menu) on your Steam Deck</li>
        <li>Look for the <strong>Decky</strong> icon in the menu</li>
        <li>Select <strong>Junk Store</strong> from the plugin list</li>
      </ol>
      The plugin opens directly in Game Mode without requiring Desktop Mode switching.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="what-to-do-first">
      <div class="faq-question-header">
        <h3>What should I do first after installation?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>For Junk Store 2.0:</strong>
      <br><br>
      <ol>
        <li>Log into Junk Store</li>
        <li>Generate extensions for the platforms you want to use (Epic, GOG, Amazon, itch.io (beta))</li>
        <li>Log into your game store accounts when prompted</li>
        <li>Your existing libraries will automatically sync and appear in Junk Store</li>
        <li>Start installing games directly from Game Mode</li>
      </ol>
      The initial library sync can take a few minutes as Junk Store builds the database for each platform.
      <br><br>
      <strong>Try This During Your Trial:</strong>
      <ul>
        <li>🎯 Install 2-3 games to see the automation difference</li>
        <li>⚡ Compare setup time vs Desktop Mode alternatives you've used</li>
        <li>🎮 Notice how everything stays in Game Mode without app switching</li>
      </ul>
      <strong>Most users know within 2-3 days if the convenience justifies the cost.</strong> The 7-day trial gives plenty of time to test real usage patterns.
      <br><br>
      <strong>📖 Need detailed setup instructions?</strong> Check out our <a href="/tutorials/install-junk-store-2">Installation Tutorial</a>
    </div>

    <div class="version-content-box version-decky">
      <strong>For Decky Plugin:</strong>
      <br><br>
      <ol>
        <li>Open Junk Store from the Decky menu</li>
        <li>Go to the <strong>Epic</strong> tab and log into your Epic Games account</li>
        <li>Your Epic Games library will automatically sync and appear</li>
        <li>(Optional) Download and install the GOG extension if you want GOG game support (paid)</li>
      </ol>
      <strong>Note:</strong> The initial library sync can take a few minutes as Junk Store builds the database for your games.
      <br><br>
      For GOG support, you'll need to purchase the GOG extension separately from the <a href="https://portal.junkstore.xyz/" target="_blank">Junk Store Portal</a>.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="how-to-install-junk-store">
      <div class="faq-question-header">
        <h3>How do I install Junk Store?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Junk Store 2.0:</strong>
          <br><br>
          [Content coming soon]
        </div>

        <div class="version-content-box version-decky">
          <strong>Decky Plugin:</strong>
          <br><br>
          The Junk Store Decky plugin requires Decky Loader to be installed first on your Steam Deck.
          <ol>
            <li>Install Decky Loader by following the <a href="https://decky.xyz/" target="_blank" rel="noopener noreferrer">official Decky installation guide</a></li>
            <li>Once Decky is installed, access the Decky Plugin Store from your Quick Access Menu</li>
            <li>Search for "Junk Store" and install the plugin</li>
            <li>The plugin will appear in your Decky menu after installation</li>
          </ol>
          For detailed instructions, refer to our <a href="/tutorials/junkstore-decky-install/">Junk Store Decky Plugin Install Guide</a>.
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="import-games-from-decky">
      <div class="faq-question-header">
        <h3>How do I import and play my games from the Decky version in Junk Store 2.0?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Automatic Import:</strong> This happens automatically when you first install and launch Junk Store 2.0. Once you've generated the extensions (Epic and/or GOG), your games will sync across when you open each corresponding tab.
          <br><br>
          <strong>Playing Imported Games:</strong> Yes, your games will work, but you'll need to <strong>Reset Launch Options</strong> for each game (found in the sliders menu on the game page). This only needs to be done once per game to fully migrate it to the new version.
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Note:</strong> The initial import process can take some time, as Junk Store is rebuilding the databases for each storefront.
        </div>
      </div>
    </div>

  </div>

  <!-- Pricing & Licenses -->
  <div class="faq-category">
    <h2>Pricing & Licenses</h2>

    <div class="faq-item professional" data-version="professional" id="trial-length-what-happens">
      <div class="faq-question-header">
        <h3>How long is my trial and what happens when it ends?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      You get <strong>7 days free</strong> to try all features. During the trial, you have full access to Epic, GOG, Amazon & itch.io (beta) integration, emulator extension creation, and all premium features.
      <br><br>
      After 7 days, if you don't subscribe, you'll lose access to the Junk Store 2.0 interface and games installed in the new version. You can reactivate anytime to restore full functionality.
    </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="what-happens-no-renew">
      <div class="faq-question-header">
        <h3>What happens if I don't renew my annual license?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>You keep access to the version of Junk Store 2.0 you paid for.</strong> Everything continues working as normal, but you won't receive future updates.
      <br><br>
      <strong>What continues working:</strong>
      <ul>
        <li>✅ All games installed through Junk Store 2.0 remain playable</li>
        <li>✅ Full Junk Store 2.0 functionality you paid for</li>
        <li>✅ Installing and managing games</li>
      </ul>
      <strong>What you won't get going forward:</strong>
      <ul>
        <li>❌ New software updates and features</li>
        <li>❌ Bug fixes and compatibility improvements</li>
        <li>❌ New game store integrations</li>
        <li>❌ Technical support</li>
      </ul>
    </div>

    <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
      <strong>Important:</strong> Steam Deck/Valve updates may break functionality over time. Active license holders receive compatibility fixes to address these issues.
      <br><br>
      <strong>Note:</strong> You can reactivate anytime to resume receiving updates and support.
    </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="how-many-devices">
      <div class="faq-question-header">
        <h3>How many devices can I install Junk Store on?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      You can install Junk Store on up to <strong>five</strong> devices under a single license. We think this strikes a fair balance between flexibility and sustainability.
      <br><br>
      <strong>Device management:</strong> Each installation counts toward your device limit when you first activate it. If you need to replace a device or reinstall, contact support for assistance with license transfers.
    </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="annual-license-or-perpetual">
      <div class="faq-question-header">
        <h3>Do I need to keep paying to use the software?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>No.</strong> Junk Store uses perpetual licensing — you own your software version forever, but updates require an active annual license.
      <br><br>
      <strong>What requires active annual license:</strong>
      <ul>
        <li>🔄 Software updates and new features</li>
        <li>🛠️ Bug fixes and compatibility improvements</li>
        <li>🆕 New game store integrations</li>
        <li>💬 Technical support and troubleshooting</li>
      </ul>
      <strong>The reality of "permanent" ownership:</strong>
      <ul>
        <li>⚠️ <strong>Steam Deck OS updates</strong> may break functionality over time</li>
        <li>⚠️ <strong>Third-party dependencies</strong> may become outdated or incompatible</li>
      </ul>
      <strong>Our commitment to long-term stability:</strong>
      <ul>
        <li>🛠️ <strong>We're actively working</strong> to make Junk Store as stable as possible even after annual license expiration</li>
        <li>🤝 <strong>Seeking Valve partnership:</strong> This complex task would be significantly easier with Valve's blessing and cooperation</li>
        <li>📦 <strong>Current approach:</strong> Game store changes continue working via updated flatpaks (free and open source) with publicly available manifests</li>
      </ul>
    </div>

    <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
      <strong>Bottom line:</strong> While you technically "own" your version forever, the Steam Deck ecosystem evolves constantly. We're endeavoring to minimize breakage over time, but this is a big and complicated technical challenge that would benefit greatly from official Steam platform support.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="free-decky-available">
      <div class="faq-question-header">
        <h3>Will the free Decky version continue to be available?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          <strong>Yes.</strong> The open source Decky version remains available for the community, free to use and collaborate on.
        </div>

        <div class="version-content-box version-professional">
          Junk Store 2.0 is completely separate software that doesn't share code with the open source version. Both versions can coexist, and you can choose what works best for your needs.
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Key difference:</strong> The free Decky version focuses on basic Epic Games support, while Junk Store 2.0 provides the complete Game Mode native experience across multiple platforms.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="why-gog-not-free">
      <div class="faq-question-header">
        <h3>Why isn't GOG free to use?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-decky">
      GOG support is available to paid supporters, and while we'd love to offer it for free, there's a lot of behind-the-scenes work and resources involved in creating and maintaining Junk Store. We appreciate your understanding and support as we continue to improve and expand Junk Store. All funds go back into the enhancement and development of Junk Store.
    </div>
      </div>
    </div>

  </div>

  <!-- Platform Support & Updates -->
  <div class="faq-category">
    <h2>Platform Support & Updates</h2>

    <div class="faq-item professional" data-version="professional" id="how-to-update-junk-store">
      <div class="faq-question-header">
        <h3>How do I update Junk Store and track new Steam Deck gaming features?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Update Notifications:</strong> Join our <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a> and follow our <strong>#version-2-updates</strong> channel for immediate update announcements.
        </div>

        <div class="version-content-box version-professional">
          <strong>Update Channels:</strong>
          <ul>
            <li><strong>Stable:</strong> Recommended for most Steam Deck users</li>
            <li><strong>Test:</strong> Early access to hotfixes and new gaming features</li>
            <li><strong>Beta:</strong> SteamOS compatibility updates (use if on SteamOS beta)</li>
          </ul>
          <strong>Change Channels:</strong> Press <strong>Select</strong> → <strong>About</strong> → <strong>System</strong>. Choose channels for both Junk Store core and Extensions (where new platform support is added).
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="how-to-access-itch-io-beta">
      <div class="faq-question-header">
        <h3>How do I access the itch.io extension (beta)?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          To access the itch.io extension currently in beta testing:
          <ol>
            <li>Change both your <strong>Build Channel</strong> and <strong>Extension Channel</strong> to <strong>Beta</strong></li>
            <li>Press <strong>Select button</strong> → <strong>About</strong> → <strong>System</strong> to access channel settings</li>
            <li>Check for updates in Junk Store</li>
            <li>Open the <strong>hamburger menu</strong> (☰) and select <strong>Extension Generator</strong></li>
            <li><strong>Download the itch.io extension</strong></li>
            <li> Click the 📥 <strong>Install</strong> button</li>
            <li> You should now see the <strong>itch.io tab</strong> in Junk Store - log into your account and start downloading games!</li>
          </ol>
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Important:</strong> Both channels must be set to Beta to access itch.io support. This ensures you have the latest core features and the beta extension system.
          <br><br>
          <strong>Beta Status:</strong> itch.io support is actively being tested. Report any issues on our <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues" target="_blank">GitHub Issues page</a>.
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="new-platforms-planned">
      <div class="faq-question-header">
        <h3>What new platforms are planned for future releases?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Current platform support:</strong>
          <ul>
            <li>✅ <strong>Itch.io</strong> - Now available in beta</li>
          </ul>
          <strong>Planned platform support</strong> (pending successful launch and resources):
          <ul>
            <li>🎮 <strong>EA, Ubisoft, Battle.net</strong> - If technically viable</li>
            <li>🔧 <strong>Community extension sharing</strong> - User-created platform support</li>
          </ul>
          <strong>Development approach:</strong> Each new platform requires extensive testing and compatibility work. We prioritize stable, Game Mode native implementations over quick additions.
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Important:</strong> Base your purchase decision on current features, not future promises. New platforms will be added as development resources allow.
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="migrate-games-to-decky">
      <div class="faq-question-header">
        <h3>Can I migrate my games back to the Decky (free) version after trying 2.0?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          <strong>✅ Games originally from Decky version:</strong>
          <br><br>
          These CAN be migrated back. For already installed games, open the game page in Junk Store and use <strong>Reset Launch Options</strong> from the sliders menu. This completes the migration back to Decky compatibility.
          <br><br>
          <strong>Note:</strong> You need to keep Decky installed and the games must remain installed through Decky to perform this migration.
        </div>

        <div class="version-content-box version-professional">
          <strong>❌ Games newly installed in Junk Store 2.0:</strong>
          <br><br>
          These cannot be migrated back to Decky due to different install paths and configuration systems.
          <br><br>
          <strong>For games newly installed in 2.0 that you want to keep:</strong>
          <ul>
            <li>Back up your save files for any games you plan to keep playing</li>
            <li>Manually uninstall games installed via the new version before your trial expires (to free up space)</li>
            <li>Reinstall those games using the Decky version</li>
            <li>Restore your game saves manually</li>
          </ul>
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Tip:</strong> Complete this process before your trial ends — otherwise, you may lose access and the games will still occupy storage.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="where-find-gog-extension">
      <div class="faq-question-header">
        <h3>Where can I find the GOG extension?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-decky">
      You can purchase access with a one-time payment via three different methods:<br><br>

      <div class="purchase-buttons-container">
        <a href="https://portal.junkstore.xyz/" target="_blank" class="purchase-button portal-button">
          <span class="button-text">🏆 Junk Store Portal</span>
          <span class="button-subtitle">Recommended - Easy updates!</span>
        </a>

        <a href="https://www.patreon.com/junkstore" target="_blank" class="purchase-button patreon-button">
          <span class="button-text">Patreon Shop</span>
        </a>

        <a href="https://ko-fi.com/junkstore" target="_blank" class="purchase-button kofi-button">
          <span class="button-text">Ko-fi Shop</span>
        </a>
      </div>

      <p><strong>⚠️ Important:</strong> GOG extension updates are now exclusively available via the Junk Store Portal. This makes it faster for us to deliver updates and much easier for you to download and install them.</p>

      <p><strong>📝 Note:</strong> There will be a delay in migrating new Patreon/Ko-fi customers to the Portal system. If you want instant access to the most up-to-date GOG extension version, purchase directly through the Junk Store Portal.</p>

      Once you have it, you have it. We can't take away GOG functionality/integration with the Junk Store plugin. All funds go back into the enhancement and development of Junk Store.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="gog-dos-scummvm-support">
      <div class="faq-question-header">
        <h3>Does the GOG extension support DOS and ScummVM games?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>Junk Store 2.0:</strong>
      <br><br>
      <strong>Yes.</strong> In Junk Store 2.0, both <strong>DOS</strong> and <strong>ScummVM</strong> games downloaded via GOG are supported.
      <br><br>
      These games will automatically launch using the <strong>Flatpak versions</strong> of <code>ScummVM</code> and <code>DosBox</code> once installed.
    </div>

    <div class="version-content-box version-decky">
      <strong>Decky Plugin:</strong>
      <br><br>
      <strong>No.</strong> DOS games and some ScummVM titles are not supported by the GOG extension in the Decky version of Junk Store.
    </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="only-see-games-a-l">
      <div class="faq-question-header">
        <h3>Why can I only see games A-L in my Epic/GOG library?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-decky">
      <strong>This is normal behavior for the Decky plugin.</strong> The free Decky version only loads your first 100 games by default for performance optimization.
      <br><br>
      <strong>To see your full library:</strong>
      <ol>
        <li>Open your Epic or GOG library in Junk Store</li>
        <li>Navigate to any game in the list (move out of the search field)</li>
        <li>Look for the bottom menu with <strong>"SHOW ALL"</strong> button</li>
        <li>Press the <strong>Y button</strong> on your Steam Deck</li>
        <li>Wait a moment for your complete library to load</li>
      </ol>
      <strong>Can't see the "SHOW ALL" button?</strong>
      <ul>
        <li>Your CSS Loader theme might be hiding the bottom menu</li>
        <li>Try temporarily disabling your CSS theme to access the button</li>
        <li>You can still search for specific games by name</li>
      </ul>
      <strong>Note:</strong> Each store (Epic, GOG, Amazon) needs "SHOW ALL" pressed separately.
    </div>
      </div>
    </div>

  </div>

  <!-- Installing & Managing Games -->
  <div class="faq-category">
    <h2>Installing & Managing Games</h2>

    <div class="faq-item shared" data-version="shared" id="install-uninstall-game">
      <div class="faq-question-header">
        <h3>How do I install and uninstall games?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <strong>Installing games:</strong>
        <ol>
          <li>Open the game's page in Junk Store</li>
          <li>Click <strong>Install</strong></li>
        </ol>

        <strong>Download behavior:</strong>

        <div class="version-content-box version-professional">
          <strong>Junk Store 2.0:</strong>
          <br><br>
          Games are added to the download queue - you can navigate away and continue using Junk Store while they install.
        </div>

        <div class="version-content-box version-decky">
          <strong>Decky Plugin:</strong>
          <br><br>
          <strong>Important:</strong> You must keep Junk Store open and stay on the game page until installation is complete. Junk Store doesn't have a background download queue - if you close or leave the plugin, your download may stop or behave unpredictably.
          <br><br>
          <strong>This applies to both:</strong>
          <ul>
            <li><strong>Epic Games:</strong> Stay on the game page until installation is complete</li>
            <li><strong>GOG Games:</strong> Keep the plugin open during downloads</li>
          </ul>
        </div>

        <strong>Uninstalling games:</strong>
        <ol>
          <li>Open the game's page in Junk Store</li>
          <li>Open the <strong>☰ Slider menu</strong> and select <strong>Uninstall</strong></li>
          <li>
            Manually delete any leftover files to free up space:
            <ul>
              <li><strong>Epic:</strong> <code>~/Games/epic</code> or <code>/*your-SD-card*/Games/epic</code></li>
              <li><strong>GOG:</strong> <code>~/Games/gog</code> or <code>/*your-SD-card*/Games/gog</code></li>
              <li><strong>Amazon:</strong> <code>~/Games/amazon</code> or <code>/*your-SD-card*/Games/amazon</code></li>
            </ul>
          </li>
        </ol>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Important:</strong> Uninstalling removes all local save data. To back up saves first, see "How do I find save data for my games?" below.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="find-save-data">
      <div class="faq-question-header">
        <h3>How do I find save data for my games?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
  <ol>
    <li>
      Find the game's <strong>Steam ID</strong> at the bottom of its page in Junk Store.
    </li>
    <li>
      Navigate to the following path on your Steam Deck:<br>
      <code>~/.local/share/Steam/steamapps/compatdata/&lt;SteamID&gt;/pfx/drive_c/users/steamuser/</code>
    </li>
    <li>
      From there, follow the path used by your game. Here are some examples:
      <ul>
        <li><strong>Epic example:</strong> <code>Local Settings/Application Data/Dying Light/Saved</code></li>
        <li><strong>GOG example:</strong> <code>AppData/Roaming/Lonely Troops/Hero of the Kingdom II</code></li>
      </ul>
    </li>
  </ol>
    Each game may store saves in slightly different locations depending on how it was packaged or ported. Look under <code>AppData</code>, <code>Local Settings</code>, or <code>Documents</code> within the Steam compatibility prefix.
    
    <p><strong>💡 Pro Tip:</strong> For exact save file locations, search for your game on <a href="https://www.pcgamingwiki.com/" target="_blank" rel="noopener">PCGamingWiki.com</a> - they have detailed save location information for thousands of games.</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="manage-game-storage">
      <div class="faq-question-header">
        <h3>How do I change where games are downloaded and manage game storage?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Junk Store 2.0:</strong>
          <br><br>
          You can set your preferred download location for each platform separately:
          <ol>
            <li>Go to the Epic, GOG, Amazon, or itch.io (beta) tab</li>
            <li>Click the <strong>⚙️ Gear icon</strong> to open settings</li>
            <li>Make sure to set the dropdown at the top to <strong>All</strong></li>
            <li>Set your desired download path:
              <ul>
                <li>Choose from preset options (SSD, microSD), OR</li>
                <li>Select <strong>Specify your own path</strong> and enter a custom location in the <strong>Custom Install Path</strong> field</li>
              </ul>
            </li>
            <li>Press <kbd>X</kbd> to save your changes</li>
            <li>Repeat for each platform you want to configure</li>
          </ol>
        </div>

        <div class="version-content-box version-decky">
          <strong>Decky Plugin:</strong>
          <br><br>
          You can set your preferred download location from the Epic tab:
          <ol>
            <li>Go to the <strong>Epic</strong> tab</li>
            <li>Click the <strong>⚙️ Gear icon</strong> to open settings</li>
            <li>Set your desired download path (e.g. your microSD card directory)</li>
            <li>Press <kbd>X</kbd> to save your changes</li>
          </ol>
          <strong>For GOG games:</strong> Similar process but from the GOG extension interface after installation.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="move-games-to-sd-card">
      <div class="faq-question-header">
        <h3>Can I move games to my SD card?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Junk Store 2.0:</strong>
          <br><br>
          Not currently supported. Moving installed games to SD card is a complex feature on our development roadmap for Junk Store 2.0. For now, games need to be stored on internal storage or an already-mounted drive.
        </div>

        <div class="version-content-box version-decky">
          <strong>Decky Plugin:</strong>
          <br><br>
          No, not possible. This is a complex feature that we're not planning to implement in the Decky version, but we're open if someone wants to contribute a pull request for this feature.
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Workaround:</strong> Set your desired download location before installing new games.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="change-proton-version">
      <div class="faq-question-header">
        <h3>How do I change the Proton version for a game?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    You can do this from either your Steam Library or directly inside Junk Store.
  <br>
  <br>
    <strong>From Junk Store:</strong><br>
    Press <code>Y</code> to open the Steam shortcut.
    <ol>
      <li>Click the gear icon ⚙️ → <strong>Properties</strong> → <strong>Compatibility</strong></li>
      <li>Select the Proton version you want to use</li>
      <li>Relaunch the game</li>
    </ol>
    <strong>From Steam Library:</strong><br>
  <ol>
      <li>Highlight the game and press the <strong>Start/Options</strong> button (the one with three lines)</li>
      <li>Go to <strong>Properties</strong> → <strong>Compatibility</strong></li>
      <li>Select the Proton version you want to use</li>
      <li>Relaunch the game</li>
    </ol>
    Once you've selected a version, back out to the game screen and hit <strong>Play</strong>.
  <br>
  <br>
    <strong>Need Proton GE?</strong> See our <a href="{{ '/troubleshooting/decky/' | relative_url }}#proton-ge-installation">Decky Troubleshooting guide</a> for installation instructions.
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="change-game-language">
      <div class="faq-question-header">
        <h3>How do I change game language settings on Steam Deck without Desktop Mode?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      Change your Epic, GOG, or Amazon game language settings directly in Game Mode - no desktop switching required. There are two methods:
      <br><br>
      <strong>Method 1: Environment Variables (for individual games)</strong>
      <ul>
        <li>From the game page in Junk Store, click the <strong>⚙️ Settings menu</strong></li>
        <li>Select <strong>Game Configs</strong></li>
        <li>Change the dropdown to <strong>All</strong></li>
        <li>Click <strong>ENVIRONMENT</strong> dropdown</li>
        <li>Scroll to <strong>LANG</strong> and select your preferred language</li>
        <li>Press <kbd>X</kbd> to save changes</li>
      </ul>
      <strong>Method 2: Installation Settings (affects game installation language)</strong>
      <ul>
        <li>From the game page in Junk Store, click the <strong>⚙️ Settings menu</strong></li>
        <li>Access the installation settings and configure the language preference</li>
        <li>This will download and install the game with your selected language files</li>
        <li><strong>Note:</strong> If changing language after game installation, update the game from the ☰ Slider menu to pull in new language packs</li>
      </ul>
      Your game will launch in the selected language - all managed from Game Mode with no additional tools needed.
    </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="enable-offline-mode">
      <div class="faq-question-header">
        <h3>How do I enable offline mode for Steam Deck non-Steam games?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          Set offline mode per individual game (improved from the global setting in free alternatives) directly in Game Mode:
          <ul>
            <li>From the game page in Junk Store, click the <strong>⚙️ Settings menu</strong></li>
            <li>Select <strong>Game Configs</strong></li>
            <li>Change the dropdown to <strong>All</strong></li>
            <li>Click <strong>ENVIRONMENT</strong> dropdown</li>
            <li>Find <strong>TOGGLE OFFLINE MODE</strong> and turn it on (blue = enabled)</li>
            <li>Press <kbd>X</kbd> to save changes</li>
          </ul>
          Your Epic, GOG, or Amazon games that support offline play will now work without internet connection.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="auto-install-dlc">
      <div class="faq-question-header">
        <h3>Does Junk Store automatically install DLC content?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <strong>Yes, DLC is installed automatically by default.</strong>
  <br>
  <br>
    <strong>Platform details:</strong>
  <ul>
    <li><strong>Epic Games:</strong> DLC is installed automatically by default</li>
    <li><strong>GOG Games:</strong> DLC content is automatically installed by default</li>
  </ul>
    <strong>Known limitations:</strong> 
  <ul>
    <li><strong>Epic Games:</strong> Ideally, all Epic DLCs should download automatically, but not all games handle them the same way. It really depends on how the developers packaged the content, and unfortunately, the current plugin solution doesn't catch every scenario</li>
    <li><strong>GOG Games:</strong> We have identified some GOG games that require GOG Galaxy to be installed in order to access the DLC</li>
  </ul>
    We're aware of these limitations, but right now we don't have the resources to fully address them.
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="manage-dlc-installations">
      <div class="faq-question-header">
        <h3>How do I manage DLC installations for Steam Deck non-Steam games?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    Control which DLCs install for your Epic and GOG games without leaving Game Mode:
  <ul>
    <li>From the game page in Junk Store, click the <strong>⚙️ Settings menu</strong></li>
    <li>Select <strong>Installation</strong></li>
    <li>Click <strong>DLC</strong></li>
    <li>Toggle DLCs on/off (blue = will install, grey = won't install)</li>
    <li>Press <kbd>X</kbd> to save changes</li>
  </ul>
    <strong>Timing:</strong> Configure before installation to download only wanted DLCs, or update existing games to add/remove DLC content. No external tools or desktop switching required.
      </div>
    </div>

  </div>

  <!-- Compatibility & Support -->
  <div class="faq-category">
    <h2>Compatibility & Support</h2>

    <div class="faq-item shared" data-version="shared" id="third-party-launchers">
      <div class="faq-question-header">
        <h3>Do games requiring third-party launchers (EA, Ubisoft, etc.) work with Junk Store?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <strong>EA Games:</strong> No, EA games are not supported. They require the EA Launcher, which isn't integrated with Junk Store. EA titles will not appear in your Epic Games library when accessed through Junk Store.
  <br>
  <br>
    <strong>Ubisoft Games:</strong> It's complicated. Some Ubisoft titles appear in your Epic library, while others don't. The Ubisoft Launcher is not officially supported, but some users have successfully installed it manually and run select games.
  <br>
  <br>
    <strong>Other Third-Party Launchers:</strong> Not currently supported. While Legendary has limited support, this feature isn't implemented in Junk Store yet. You can attempt manual setup via CLI or modify the extension script.
  <br>
  <br>
    📋 <strong>Check specific games:</strong> Visit our <a href="/tested-games/">Games Tested table</a> to see compatibility status and any workarounds for specific titles.
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="anti-cheat-games">
      <div class="faq-question-header">
        <h3>What about games with anti-cheat systems (including Fortnite)?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <strong>General Anti-Cheat Compatibility:</strong> Most games with BattlEye and Easy Anti-Cheat (EAC) that work on Steam Deck should also work through Junk Store, since they use the same Proton compatibility layer.
  <br>
  <br>
    <strong>❌ Fortnite Specifically:</strong>
  <ul>
    <li><strong>Does not work</strong> - Epic Games does not support Fortnite on Linux due to anti-cheat policy</li>
    <li>This is Epic's decision, not a Junk Store limitation</li>
    <li><strong>Alternatives:</strong> Dual-boot Windows or use cloud gaming services</li>
    <li>More info: <a href="https://www.theverge.com/2022/2/8/22923163/fortnite-steam-deck-update-epic-tim-sweeney" target="_blank" rel="noopener">The Verge article</a></li>
  </ul>
    <strong>Best Practice:</strong> Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB</a> for compatibility reports specific to your anti-cheat games before installing.
  <br>
  <br>
    📋 <strong>Check our testing:</strong> Visit our <a href="/tested-games/">Games Tested table</a> to see which anti-cheat games have been tested and their compatibility status.
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="cheatdeck-compatibility">
      <div class="faq-question-header">
        <h3>Does CheatDeck work with Junk Store?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p> </p>
    Not reliably. Epic game launch options are very sensitive, and tools like CheatDeck can conflict with Junk Store's configuration. We've spent over 100 hours fine-tuning this — so use with caution.
  <br>
  <br>
    That said, our extension scripts are open and easier to modify than the plugin core. If you want to experiment and send a working pull request, we're happy to review it!
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="cloud-saves-support">
      <div class="faq-question-header">
        <h3>Does Junk Store support cloud saves?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-professional">
      <strong>Junk Store 2.0:</strong>
      <br><br>
      Junk Store 2.0 currently offers <strong>experimental cloud save support</strong> for <strong>Epic</strong> and <strong>GOG</strong>. However, this feature is intended only for advanced users who understand and accept the risks involved — including the potential for save data loss.
      <br><br>
      <strong>Important:</strong> We do <em>not</em> offer technical support for issues related to cloud saves at this time. If you choose to enable it, please make sure you're confident in your ability to troubleshoot and back up your save data manually if needed.
      <br><br>
      <strong>Note:</strong> Not all games from either platform support cloud saves.
    </div>

    <div class="version-content-box version-decky">
      <strong>Decky Plugin:</strong>
      <br><br>
      <strong>No, cloud saves are not supported.</strong> We don't want users to run the risk of losing their game saves.
      <br><br>
      <strong>Technical details:</strong>
      <ul>
        <li><strong>Epic Games:</strong> While Legendary supports this, we haven't implemented it due to potential data loss risks</li>
        <li><strong>GOG Games:</strong> Not implemented as it isn't a trivial problem to solve and requires more resources than currently available</li>
        <li><strong>Manual configuration:</strong> Tech-savvy users can manually configure via CLI, but it's not recommended</li>
      </ul>
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="report-bug">
      <div class="faq-question-header">
        <h3>I think I've found a bug. How do I report it?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    We really appreciate bug reports! Like you, we want Junk Store to just work—so if you come across a bug, please let us know. If we don't know about it, we can't fix it.
  <br><br>
    <strong>Submit bugs on GitHub so we can track them properly:</strong>

    <div class="version-content-box version-professional">
      <strong>Junk Store 2.0:</strong>
      <br><br>
      <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues/new" target="_blank" rel="noopener">Submit a bug report →</a>
    </div>

    <div class="version-content-box version-decky">
      <strong>Decky Plugin:</strong>
      <br><br>
      <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener">Submit a bug report →</a>
    </div>

    You'll need a GitHub account to submit an issue. It's free to create one if you don't already have it.
  <br>
  <br>
    <strong>Note:</strong> Bug reports aren't support tickets. If you need help or aren't sure if it's a bug, please ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a> first.
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="request-features">
      <div class="faq-question-header">
        <h3>How do I request features or get X feature added?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <div class="version-content-box version-decky">
      <strong>We prefer feature requests via GitHub where they can be tracked:</strong><br>
      <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit a feature request</a>
      <br><br>
      <strong>Ways to get features implemented:</strong>
      <ol>
        <li>Submit a pull request if you know how to code</li>
        <li>Offer a bounty and pay a developer to implement it</li>
      </ol>
      <strong>Alternative:</strong> Discuss ideas first in our Discord community before submitting requests.
    </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="where-get-help">
      <div class="faq-question-header">
        <h3>Where can I get help if I'm stuck?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
<p></p>
    <strong>Community Support:</strong> Our community is very helpful for troubleshooting and general questions.
  <ul>
    <li><strong>Discord:</strong> <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Join our Discord server</a> for real-time help</li>
    <li><strong>Reddit:</strong> <a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener">r/JunkStore subreddit</a> for discussions and tips</li>
  </ul>
    <strong>Documentation:</strong>
  <ul>
    <li><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a> - Installation and basic setup</li>
    <li><a href="{{ '/tutorials/' | relative_url }}">Tutorials</a> - Step-by-step guides</li>
  </ul>
    <strong>When contacting support:</strong> Include your Steam Deck model, SteamOS version, and specific error messages or symptoms.
      </div>
    </div>

  </div>

</section>

<style>
/* FAQ Anchor Link Styling */
.faq-anchor {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8em;
  margin-left: 8px;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.faq-anchor:hover {
  opacity: 1;
}

.faq-question-header:hover .faq-anchor {
  opacity: 0.8;
}

/* Copy Success Notification */
.copy-success {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  z-index: 9999;
  animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-10px); }
  15% { opacity: 1; transform: translateY(0); }
  85% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
}
</style>

<script>
// Copy FAQ link function (must be before DOMContentLoaded)
function copyFAQLink(questionId) {
  const url = window.location.origin + window.location.pathname + '#' + questionId;

  // Show notification helper
  function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'copy-success';
    notification.style.background = isError ? '#ef4444' : '#10b981';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }

  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showNotification('Link copied to clipboard!');
    }).catch((err) => {
      console.warn('Clipboard API failed:', err);
      fallbackCopy();
    });
  } else {
    fallbackCopy();
  }

  // Fallback copy method
  function fallbackCopy() {
    try {
      // Create temporary textarea
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);

      // Select and copy
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        showNotification('Link copied to clipboard!');
      } else {
        showNotification('Copy failed - please copy manually: ' + url, true);
      }
    } catch (err) {
      console.error('Copy failed:', err);
      showNotification('Copy failed - please copy manually: ' + url, true);
    }
  }
}
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const faqItems = document.querySelectorAll('.faq-item');
  const versionBadges = document.querySelectorAll('.version-badges');

  // Function to apply filter
  function applyFilter(filter) {
    // Update active button
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      }
    });

    // Filter FAQ items and manage badge visibility
    faqItems.forEach(item => {
      const version = item.dataset.version;
      const badges = item.querySelector('.version-badges');

      // Show All: show everything and show badges
      if (filter === 'all') {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'flex';
      }
      // Decky filter: show decky AND shared, hide badges
      else if (filter === 'decky' && (version === 'decky' || version === 'shared')) {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'none';
      }
      // Professional filter: show professional AND shared, hide badges
      else if (filter === 'professional' && (version === 'professional' || version === 'shared')) {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'none';
      }
      // Hide if doesn't match
      else {
        item.classList.add('hidden');
      }
    });

    // Save filter choice to localStorage
    localStorage.setItem('faqFilter', filter);
  }

  // Load saved filter from localStorage or default to 'all'
  const savedFilter = localStorage.getItem('faqFilter') || 'all';
  applyFilter(savedFilter);

  // Filter button functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      applyFilter(filter);
    });
  });

  // FAQ accordion functionality
  faqItems.forEach(item => {
    const questionHeader = item.querySelector('.faq-question-header');
    const answer = item.querySelector('.faq-answer');

    questionHeader.addEventListener('click', function() {
      // Toggle the 'show' class for smooth transitions
      answer.classList.toggle('show');
    });
  });

  // Add anchor buttons to all FAQ questions
  function addAnchorButtons() {
    const faqItems = document.querySelectorAll('.faq-item[id]');
    faqItems.forEach(item => {
      const questionHeader = item.querySelector('.faq-question-header h3');
      const id = item.getAttribute('id');
      if (questionHeader && id && !questionHeader.querySelector('.faq-anchor')) {
        const anchorButton = document.createElement('button');
        anchorButton.className = 'faq-anchor';
        anchorButton.setAttribute('onclick', `copyFAQLink('${id}')`);
        anchorButton.setAttribute('title', 'Copy link to this question');
        anchorButton.innerHTML = '🔗';
        questionHeader.appendChild(document.createTextNode(' '));
        questionHeader.appendChild(anchorButton);
      }
    });
  }

  // Handle direct links to FAQ items
  function openLinkedFAQ() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.classList.contains('faq-item')) {
        // Open the answer by adding the 'show' class
        const answer = targetElement.querySelector('.faq-answer');
        if (answer) {
          answer.classList.add('show');
        }
        // Scroll to the element with some offset for better visibility
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add temporary highlight
          targetElement.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
          setTimeout(() => {
            targetElement.style.boxShadow = '';
          }, 3000);
        }, 100);
      }
    }
  }

  // Run on page load and hash change
  addAnchorButtons();
  openLinkedFAQ();
  window.addEventListener('hashchange', openLinkedFAQ);
});
</script>