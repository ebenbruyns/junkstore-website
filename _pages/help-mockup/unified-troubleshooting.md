---
layout: splash
title: "Unified Troubleshooting - All Versions"
description: "Comprehensive troubleshooting covering both Decky Plugin and Junk Store 2.0 with clear version indicators"
permalink: /help-mockup/unified-troubleshooting/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Junk Store Troubleshooting - All Versions"
  actions:
    - label: "Get Help"
      url: "/help-mockup/"
      class: "button buy-button"
excerpt: "Complete troubleshooting guide for both free and professional versions"
classes: wide
---

<!-- Navigation Breadcrumb -->
<nav class="help-breadcrumb">
  <a href="/help-mockup/">← Help Hub</a> / <strong>Unified Troubleshooting</strong>
</nav>

<section class="seo-intro">
  <p><strong>Fix Epic, GOG, Amazon & itch.io game issues directly from Game Mode!</strong> This comprehensive troubleshooting guide covers both Junk Store versions with solutions for installation, compatibility, authentication, and launch problems.</p>
</section>

<!-- Version Filter -->
<section class="version-filter">
  <h2>Filter by Your Version</h2>
  <p style="text-align: center; margin: 0 0 20px 0; opacity: 0.8;">Choose your version to see relevant solutions, or show all to browse everything</p>
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
      <strong>Show All Solutions</strong>
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

  /* Store name styling - context-aware colors */
  .version-professional .store-name {
    color: #fb923c;
    font-weight: 600;
  }

  .version-decky .store-name {
    color: #3b82f6;
    font-weight: 600;
  }
</style>

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

.faq-anchor::marker {
  display: none;
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

<!-- FAQ Content -->
<section class="faq-content">

  <!-- Installation & Setup -->
  <div class="faq-category">
    <h2>Installation & Setup</h2>

    <div class="faq-item professional" data-version="professional" id="installation-fails">
      <div class="faq-question-header">
        <h3>Junk Store 2.0 installation fails or appears broken after installing</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>Problem:</strong> Installation appears to fail, or Junk Store appears broken after installing.
          <br><br>
          <div style="background: rgba(255, 69, 0, 0.2); border: 2px solid #ff4500; border-radius: 8px; padding: 15px; margin: 10px 0;">
            <strong style="color: #ff6b35; font-size: 1.1em;">⚠️ CRITICAL:</strong> When installing Junk Store 2.0, you <strong style="color: #ff6b35;">MUST wait until the dialogue box says "Installation Complete"</strong> before clicking OK. <strong style="color: #ff6b35;">Clicking the OK button too early cancels the installation process.</strong>
          </div>
          <strong>What to do:</strong>
          <ol>
            <li><strong>Wait for completion:</strong> Let the installation dialog run until it specifically shows "Installation Complete"</li>
            <li><strong>Don't click OK early:</strong> The OK button appears before installation finishes - ignore it until completion message shows</li>
            <li><strong>If you clicked too early:</strong> Re-run the installer and wait for the complete message this time</li>
          </ol>
          <em>This is the #1 cause of installation issues - incomplete installations due to clicking OK too early.</em>
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="dependencies-not-installing">
      <div class="faq-question-header">
        <h3>Dependencies aren't installing - how do I fix this?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          If you're seeing errors and dependencies aren't installing, try running these commands in Konsole:
          <br><br>
          <strong>Command sequence:</strong>
          <pre><code>export DECKY_PLUGIN_RUNTIME_DIR=~/homebrew/data/Junk Store
export PYTHONPATH=~/homebrew/plugins/Junk Store/scripts:$PYTHONPATH:~/homebrew/plugins/Junk Store/scripts/shared
export DECKY_PLUGIN_DIR=~/homebrew/plugins/Junk Store
export DECKY_PLUGIN_LOG_DIR=~/homebrew/logs/Junk Store
cd ~/homebrew/plugins/Junk Store
./scripts/install_deps.sh</code></pre>
          <strong>What this does:</strong> Sets up the correct environment and runs the dependency installer manually.
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="junk-store-not-working">
      <div class="faq-question-header">
        <h3>Junk Store isn't working or showing errors after installation?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          This might be caused by a couple of common issues:
          <br><br>
          <strong>1. Outdated Decky version</strong><br>
          Outdated versions can cause compatibility errors, such as:<br>
          <code>An error occurred while rendering this content</code><br>
          <code>Error reference: shared SteamUI_9871360_fede34d936775239</code>
          <br><br>
          Try updating Decky and see if the issue is resolved.
          <br><br>
          <strong>2. You're using the Steam Beta branch</strong><br>
          Breakages can happen on Steam Beta due to ongoing codebase changes. We do our best to patch any issues quickly.
          <br><br>
          <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
            <strong>📌 Important Note:</strong><br>
            For the most stable experience, we recommend using the <strong>Stable</strong> version of Steam. The Beta branch often includes bugs or breaking changes.
            <br><br>
            If you do choose to stay on Steam <em>Beta</em>, we also recommend using the <em>Beta</em> version of Junk Store for better compatibility.
          </div>
        </div>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="no-extensions">
      <div class="faq-question-header">
        <h3>I don't have any extensions—what do I do?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          If you don't see any extensions, you'll need to generate them. Currently, Junk Store supports extensions for <span class="store-name">Epic</span>, <span class="store-name">GOG</span>, <span class="store-name">Amazon</span>, and <span class="store-name">itch.io (beta)</span>.
          <br><br>
          <strong>To generate extensions:</strong>
          <ol>
            <li>Open Junk Store by pushing <strong>Select</strong> button above the D-pad</li>
            <li>Make sure you're logged in to your Junk Store account</li>
            <li>Scroll down to the <strong>Tools</strong> section</li>
            <li>Open the sliders menu (☰) next to the search bar and select <strong>Download All Presets from Server</strong></li>
            <li>Then, go to each extension you want (<span class="store-name">Epic</span>, <span class="store-name">GOG</span>, <span class="store-name">Amazon</span>, <span class="store-name">itch.io (beta)</span>) and press the <strong>Download</strong> button (📥) for each one</li>
          </ol>
          Once downloaded, the extensions will appear as tabs in Junk Store.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="executables-wont-run">
      <div class="faq-question-header">
        <h3>Downloaded executables won't run on Steam Deck</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <strong>Problem:</strong> Executable files don't run when double-clicked, or open in text editor instead.
        <br><br>
        <strong>Quick fixes:</strong>
        <ol>
          <li><strong>File permissions:</strong> Right-click → Properties → Permissions → Enable "Is executable"</li>
          <li><strong>Theme interference:</strong> Custom icons/themes can break dialogs - switch to default temporarily</li>
          <li><strong>Console execution:</strong> Right-click → "Run in Konsole" for error details</li>
        </ol>
        <em>Most common cause: Custom icon themes interfering with system dialogs (zenity).</em>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="gog-installer-wont-execute">
      <div class="faq-question-header">
        <h3>GOG Extension installer won't execute or opens in text editor</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          <strong>Problem:</strong> When double-clicking the <span class="store-name">GOG</span> Extension installer, nothing happens or it opens in Kate text editor.
          <br><br>
          <strong>Solution:</strong>
          <ol>
            <li><strong>Check file permissions:</strong> Right-click → Properties → Permissions → Check "Is executable"</li>
            <li><strong>Check for theme conflicts:</strong> Custom icon packs can break system dialogs. Switch to default theme temporarily</li>
            <li><strong>Use console as backup:</strong> Right-click → "Run in Konsole" to see error messages</li>
          </ol>
          <em>Most common cause: Custom icon themes interfering with system dialogs (zenity).</em>
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="gog-wont-run">
      <div class="faq-question-header">
        <h3>I can't get GOG to run in Junk Store</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Make sure you're using the <strong>latest version of Junk Store</strong> from the <strong>Decky Testing Store</strong>.
          <br><br>
          You'll also need to reinstall dependencies by going to the <strong>About</strong> section and clicking "Install Dependencies."
          <br><br>
          Once you've purchased the <span class="store-name">GOG</span> extension, please follow the <a href="/tutorials/gogextension"><span class="store-name">GOG</span> Extension Install Guide</a> to install the extension and link it to your Junk Store plugin.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="update-legendary-flatpak">
      <div class="faq-question-header">
        <h3>How do I update the Legendary Flatpak?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Go to <strong>About → Dependencies</strong> in the Junk Store UI and click "Install Dependencies" again.
        </div>
      </div>
    </div>

  </div>

  <!-- Authentication & Login -->
  <div class="faq-category">
    <h2>Authentication & Login</h2>

    <div class="faq-item shared" data-version="shared" id="epic-login-issues">
      <div class="faq-question-header">
        <h3>Experiencing Epic Games login issues?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        Legendary sometimes has trouble logging in, especially with alternative authentication methods. Try these solutions:
        <br><br>
        <strong>Method 1 - Big Picture Mode Login:</strong>
        <ol>
          <li>Switch to Desktop Mode</li>
          <li>Launch Steam in Big Picture mode</li>
          <li>Try logging in there</li>
          <li>Once successful, return to Gaming Mode</li>
        </ol>
        <br>
        <strong>Method 2 - "Unable to complete login" error:</strong><br>
        If you get this error, use the command-line workaround:
        <ol>
          <li>Switch to Desktop Mode and open Konsole</li>
          <li>Run: <code>flatpak run com.github.derrod.legendary auth --disable-webview</code></li>
          <li>It will launch a browser for you to log in</li>
          <li>Copy the provided code and paste it back into Konsole</li>
        </ol>
        <br>
        <strong>Changed your Epic password recently?</strong><br>
        If you've recently changed your Epic password and are having issues logging in, simply reboot your Steam Deck.
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="legendary-error-popup">
      <div class="faq-question-header">
        <h3>Legendary ERROR pop-up when signing in?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          If you see "Legendary status produced no output," your credentials may be corrupted.
          <br><br>
          In Desktop Mode, open Konsole and run:<br>
          <code>/bin/flatpak run com.github.derrod.legendary auth --delete</code><br>
          Then re-authenticate with:<br>
          <code>/bin/flatpak run com.github.derrod.legendary auth</code>
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="captcha-mouse-wont-reach">
      <div class="faq-question-header">
        <h3>Can't verify captcha — mouse won't reach button?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Try the following:
          <ul>
            <li>Use a keyboard and press <kbd>Tab</kbd> to cycle to the Verify button</li>
            <li>In Game Mode, change the resolution to <strong>3840x2160</strong> via:<br>
            <span class="store-name">Epic Games</span> Login → Properties → Shortcut → Game Resolution</li>
            <li>Or run in Konsole:<br>
            <code>flatpak run com.github.derrod.legendary auth --disable-webview</code></li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <!-- Library & Game Management -->
  <div class="faq-category">
    <h2>Library & Game Management</h2>

    <div class="faq-item shared" data-version="shared" id="games-not-showing">
      <div class="faq-question-header">
        <h3>My games aren't showing up in my library. What should I check?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        If your games aren't appearing in one of the store tabs, try the following checks to resolve it:
        <ul>
          <li><strong>Check "Show Installed" filter:</strong>
            <ul>
              <li>Press <strong>X</strong> to toggle the "Show Installed" filter — it may be hiding your uninstalled games</li>
              <li>If this filter is enabled, only games already installed will be visible</li>
              <li><strong>Can't see the "SHOW ALL" button?</strong> See our <a href="/help-mockup/unified-faq/#only-see-games-a-l">FAQ on loading your full library</a></li>
            </ul>
          </li>
          <li><strong>Check the search bar:</strong>
            <ul>
              <li>Make sure you haven't accidentally typed something into the search bar that's filtering your games</li>
              <li>Clear the text field to show all titles</li>
            </ul>
          </li>
          <li><strong>Check your login account:</strong>
            <ul>
              <li>You might be logged into a different Epic/GOG/Amazon/itch.io account</li>
              <li>Log out and back in with the correct account linked to your game library</li>
            </ul>
          </li>
          <li><strong>Refresh the game list:</strong>
            <ul>
              <li>Go to the store tab (Epic/GOG/Amazon/itch.io) and select the sliders menu to manually refresh the game list</li>
              <li>This can help pull in any missing titles, especially after login or token changes</li>
            </ul>
          </li>
          <li><strong>Reboot your Steam Deck:</strong>
            <ul>
              <li>Sometimes a restart is all it takes to reload everything properly</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="junk-store-library-mismatch">
      <div class="faq-question-header">
        <h3>Junk Store and Epic/GOG/Amazon/itch.io libraries don't match?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        Have you tried <strong>refreshing your games list?</strong>
        <ul>
          <li>Refresh your games list from the store tab (Epic/GOG/Amazon/itch.io):<br>
          <strong>Sliders menu → Refresh Games List</strong></li>
          <li>Or run the following in Konsole to refresh (Epic only):<br>
          <code>flatpak run com.github.derrod.legendary list --force-refresh</code></li>
        </ul>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          If missing games still don't appear, they may require a third-party launcher and are currently unsupported.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="shortcuts-not-appearing">
      <div class="faq-question-header">
        <h3>Shortcuts aren't appearing</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Try rebooting your device first. If they still don't appear, ask for help in the <em>plugin-support</em> forum on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="games-not-showing-non-steam">
      <div class="faq-question-header">
        <h3>Games aren't showing up in the Non-Steam tab</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        Check your settings and make sure the shortcut isn't hidden. After changing settings, reboot your Steam Deck for changes to take effect.
      </div>
    </div>

    <div class="faq-item professional" data-version="professional" id="new-version-game-not-in-decky">
      <div class="faq-question-header">
        <h3>I installed a game on the new version and can't see it in the Decky one?</h3>
        <div class="version-badges">
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          The new version of Junk Store uses a different system, so games installed there won't show up in the older Decky version — and can't be moved over.
          <br><br>
          If you're switching back to the Decky version:
          <ul>
            <li>Back up any save files manually otherwise they will be deleted</li>
            <li>Uninstall the game from the new version (to free up space)</li>
            <li>Reinstall the game from within the Decky version of Junk Store</li>
            <li>Restore your game save manually</li>
          </ul>
          Tip: Do this before your trial ends — otherwise, you may lose access and the games will still occupy storage.
        </div>
      </div>
    </div>

  </div>

  <!-- Game Issues & Troubleshooting -->
  <div class="faq-category">
    <h2>Game Issues & Troubleshooting</h2>

    <div class="faq-item shared" data-version="shared" id="game-wont-launch">
      <div class="faq-question-header">
        <h3>My game won't launch. What should I do?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>For Junk Store 2.0:</strong><br>
          Games may fail to launch for various reasons. Let's go through a step-by-step checklist to identify and fix the issue. After each step, try launching the game—this helps identify exactly what fixed the problem.
          <br><br>
          <strong>Check offline mode settings:</strong>
          <ul>
            <li>Check global settings: Go to the storefront tab (<span class="store-name">Epic</span>/<span class="store-name">GOG</span>/<span class="store-name">Amazon</span>/<span class="store-name">itch.io</span>) → ⚙️ Cog Icon and make sure <strong>Offline Mode</strong> is toggled <strong>off</strong></li>
            <li>Check per-game settings: Go to Junk Store → [Your Game] → Press Y → ⚙️ Cog Icon → Game Configs and check if <strong>Offline Mode</strong> is enabled for that specific game</li>
            <li>If you change any settings, make sure to <strong>Press X to Save</strong></li>
          </ul>
          <br>
          <strong>Install any missing game dependencies:</strong>
          <ul>
            <li>Missing or broken dependencies can cause launch issues</li>
            <li>You may get prompted to install things like Microsoft C++ runtimes when first launching</li>
            <li>Easily install any missing dependencies via our built-in dependency installer</li>
          </ul>
          <br>
          <strong>Update, verify, or repair the game files:</strong>
          <ul>
            <li>To update game files: <code>Junk Store → [Your Game] → ☰ Sliders Menu → Update Game</code></li>
            <li>To verify game files: <code>Junk Store → [Your Game] → ☰ Sliders Menu → Verify Game</code></li>
            <li>To repair game files: <code>Junk Store → [Your Game] → ☰ Sliders Menu → Repair Game</code></li>
          </ul>
          <br>
          <strong>Change to a GE-Proton version:</strong>
          <ul>
            <li>Some games require a more compatible version of Proton</li>
            <li>Go to: <code>Junk Store → [Your Game] → Press Y → ⚙️ Cog Icon → Compatibility</code></li>
            <li>You can also change this from the <strong>Non-Steam Tab</strong></li>
            <li>Select a <strong>GE-Proton</strong> version</li>
          </ul>
          <br>
          <strong>Install and enable the EOS Overlay (<span class="store-name">Epic</span> games only):</strong>
          <ul>
            <li>Some <span class="store-name">Epic</span> games require the <span class="store-name">Epic</span> Online Services (EOS) overlay to launch properly</li>
            <li>To install the EOS overlay: <code>Junk Store → <span class="store-name">Epic</span> Tab → ☰ Sliders Menu → Install EOS Overlay</code> (this only needs to be done once)</li>
            <li>To enable the EOS overlay: <code>Junk Store → [Your Game] → ☰ Sliders Menu → Enable EOS Overlay</code> (this needs to be done per game that requires/supports it if needed)</li>
          </ul>
        </div>
        <div class="version-content-box version-decky">
          <strong>For Decky Plugin:</strong><br>
          Games may fail to launch for a variety of reasons. Here are some common causes and what you can do:
          <br><br>
          <strong>Wrong compatibility layer:</strong><br>
          Try switching to a different version of Proton. Non-Steam games usually work best with <strong>GE-Proton</strong>. We recommend finding a version that works well for most of your library and using it as the default for non-Steam games.
          <br><br>
          However, some titles require a <em>specific</em> version of Proton or GE-Proton to run properly.
          <br><br>
          <strong>Missing dependencies:</strong><br>
          Some games require additional libraries such as <strong>Microsoft C++ Runtime</strong> or <strong>DirectX</strong>. These dependencies may not always trigger an obvious error message, so try installing them if you suspect they're missing.
        </div>

        <div style="background-color: rgba(168, 162, 158, 0.15); border-left: 4px solid #a8a29e; padding: 15px 20px; margin: 15px 0; border-radius: 6px;">
          <strong>Still not working? Check compatibility resources:</strong><br>
          First check our <a href="/tested-games/">Games Tested table</a> for compatibility status and any specific workarounds for your game.
          <br><br>
          If not found there, visit <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community tips. You may find game-specific tweaks, compatibility reports, or Proton version recommendations that solve your issue.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="rainbow-black-screen">
      <div class="faq-question-header">
        <h3>My game shows a rainbow screen (TV test), black screen, or fails to launch</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        These issues are common with non-Steam games and are often related to Proton compatibility. Junk Store defaults to the system version of Proton, but this doesn't always work well for all games.
        <br><br>
        <strong>Try using a GE-Proton version:</strong><br>
        GE-Proton tends to be more compatible with non-Steam games and often fixes these launch issues.
        <br><br>
        <div class="version-content-box version-professional">
          <strong>For Junk Store 2.0:</strong><br>
          To change Proton version: <code>Junk Store → [Your Game] → Press Y → ⚙️ Cog Icon → Compatibility</code><br>
          Select a <strong>GE-Proton</strong> version from the list
        </div>
        <div class="version-content-box version-decky">
          <strong>For Decky Plugin:</strong><br>
          To change Proton version: Open the game's properties in Steam and select a different Proton version from the Compatibility tab
        </div>
        <br>
        <strong>Where to get GE-Proton versions:</strong>
        <ul>
          <li><strong>Wine Cellar</strong> (Decky Plugin)</li>
          <li><strong>ProtonUp-QT</strong> from the Discover Store on your Steam Deck</li>
        </ul>
        <br>
        <strong>Need more tweaks? Or still having issues?</strong><br>
        Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community-recommended tweaks or launch options that may be needed to get your specific game working.
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="stuck-prelaunch">
      <div class="faq-question-header">
        <h3>My game gets stuck at the Steam pre-launch screen. What should I do?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        This issue might be caused by another plugin—such as <code>decky-cloud-save</code> or <code>syncthing</code>—locking Junk Store's files.
        <br><br>
        <div class="version-content-box version-professional">
          <strong>For Junk Store 2.0:</strong><br>
          Make sure nothing is interfering with the following folders:<br>
          <code>~/.config/junkstore</code> and <code>~/.local/share/junkstore</code>
          <br><br>
          Junk Store relies on this data directory to function correctly, so if another tool is syncing or locking files in that path, it can prevent games from launching.
        </div>
        <div class="version-content-box version-decky">
          <strong>For Decky Plugin:</strong><br>
          Make sure nothing is interfering with this folder:<br>
          <code>/home/deck/homebrew/data/Junk Store</code>
          <br><br>
          Junk Store relies on that data directory to function correctly.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="works-in-heroic-lutris-not-junk-store">
      <div class="faq-question-header">
        <h3>My game works in Heroic or Lutris, but not in Junk Store</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Games that run in Heroic or Lutris usually work in Junk Store too — it's just a matter of finding the right tweaks:
          <ul>
            <li><strong>Check our game compatibility table first</strong> — see if the game is listed in our <a href="/tested-games/">tested games database</a> for known compatibility status and specific tweaks</li>
            <li>Try switching to a different GE-Proton version</li>
            <li>Install any required or missing dependencies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else)</li>
            <li>Some <span class="store-name">Epic</span> games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (<span class="store-name">Epic</span> tab) and enabled it for the game (done from the game page in Junk Store)</li>
          </ul>
          Please refer to our <a href="/tutorials/">Tutorials</a> section to learn how to change or check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
          <br><br>
          If that doesn't work, ask for help in our Discord server. Please be patient—our team is small! While we have a decent game library, we don't have every game, so we may only be able to offer advice rather than fixes.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="no-proton-ge">
      <div class="faq-question-header">
        <h3>I don't have Proton GE or don't know how to install it</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        To get Proton GE or other custom versions of Proton, you can use one of the following tools:
        <ul>
          <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode)</li>
          <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong></li>
        </ul>
        Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you'll be able to select it as a compatibility option in Junk Store.
        <br><br>
        Please refer to our <a href="/tutorials/">Tutorials</a> page to see how to change/check your Proton version if you are unsure how to do this.
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="games-wont-load-cpp-error">
      <div class="faq-question-header">
        <h3>Games won't load — Microsoft Visual C++ error?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          If prompted to install Microsoft Visual C++ Runtime:
          <ol>
            <li>Download the <strong>X64 redistributable</strong> from <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank">Microsoft Learn</a></li>
            <li>Copy the file to the game's install folder: <code>~/Games/epic/[game title]</code></li>
            <li>In Junk Store, go to the game's slider menu → <strong>Run EXE in Game Folder</strong></li>
            <li>Select <code>VC_redist.x64.exe</code> and complete the install</li>
          </ol>
          This should allow the game to run.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="sd-card-permissions-error">
      <div class="faq-question-header">
        <h3>Installing games to SD card causes a Permissions Error?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-professional">
          <strong>For Junk Store 2.0:</strong><br>
          If you're getting permissions errors when trying to install games to your SD card, you need to properly configure your install location in Junk Store 2.0.
          <br><br>
          <strong>How to fix:</strong>
          <ol>
            <li>Follow the steps in our FAQ for <a href="/2.0faq/#manage-game-storage">How to manage game storage and SD card downloads</a></li>
            <li>Make sure to set the dropdown at the top to <strong>All</strong></li>
            <li>When setting your install location, select <strong>Specify your own path</strong></li>
            <li>Put the path to your SD card in the <strong>Custom Install Path</strong> field</li>
            <li>Press <kbd>X</kbd> to save your changes</li>
          </ol>
          This ensures Junk Store has the correct permissions to write to your SD card location.
        </div>
        <div class="version-content-box version-decky">
          <strong>For Decky Plugin:</strong><br>
          Possible causes:
          <ul>
            <li>Your SD card may not be formatted correctly</li>
            <li>Old dependencies — revisit <strong>About → Dependencies</strong> and reinstall them</li>
          </ul>
          <br>
          <strong>Bazzite users:</strong><br>
          If you are getting this error you need to edit the <code>settings.sh</code> file to match your setup.
          <br><br>
          The file you need to edit is here:<br>
          <code>~/homebrew/plugins/Junk-Store/scripts/Extensions/Epic/settings.sh</code>
          <br><br>
          Look for the line:<br>
          <code>INSTALL_DIR="/run/media/mmcblk0p1/Games/epic/"</code>
          <br><br>
          That's the fallback, likely the cause of this issue.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="game-wont-download-critical">
      <div class="faq-question-header">
        <h3>Game won't download — CRITICAL error?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          If you get:<br>
          <strong>CRITICAL: installation cannot proceed, exiting</strong><br>
          It likely means your storage is full. Free up space or install to another location.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="steam-download-stuck-0">
      <div class="faq-question-header">
        <h3>When I launch a game, Steam tries to download something but it gets stuck at 0%</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          This is a known Steam issue, often related to Proton 9. We recommend switching to a <strong>GE-Proton</strong> version instead, as these are better suited for running non-Steam games. Open the game's properties in Steam and select a different Proton version from the Compatibility tab to resolve the issue.
        </div>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared" id="keyboard-issues">
      <div class="faq-question-header">
        <h3>Having issues bringing up the keyboard in Game Mode?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
          <span class="version-badge professional">2.0</span>
        </div>
      </div>
      <div class="faq-answer">
        If the <strong>Steam + X</strong> shortcut isn't bringing up the keyboard try the following:
        <ul>
          <li>Try to bring up the keyboard ⌨️ from the Quick Access Menu (<strong>⋯</strong>)</li>
          <li>Tap directly on a text field (like a password box) to prompt the keyboard</li>
          <li>Try toggling to Desktop Mode and back to Game Mode to reset input services</li>
          <li>Restart Steam or the device if the issue persists</li>
        </ul>
        This is a known Steam bug that has been around for a while. These steps usually help work around it until Valve fixes it in a future update.
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="controller-not-working">
      <div class="faq-question-header">
        <h3>Game launches but controller doesn't work?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          Try the following:
          <ul>
            <li>Restart your Steam Deck — this can resolve odd controller issues</li>
            <li>Check your Steam Input settings — they may be interfering</li>
            <li>Open and close the Quick Access menu — this can "wake" controller detection</li>
            <li>Change the Proton version — ProtonGE is often more compatible</li>
          </ul>
          If none of these work, further research may be needed. Note that we can't test every game.
        </div>
      </div>
    </div>

  </div>

  <!-- Advanced Settings -->
  <div class="faq-category">
    <h2>Advanced Settings</h2>

    <div class="faq-item decky" data-version="decky" id="backend-scripts-info">
      <div class="faq-question-header">
        <h3>What are the backend scripts, and do I need them?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          These are optional example scripts mainly for DOSBox games. They are not officially supported and may stop working if Junk Store is updated. Use them only if you know how they work.
        </div>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky" id="uninstall-backend-scripts">
      <div class="faq-question-header">
        <h3>How do I uninstall the backend scripts for DOS and Win 3.1?</h3>
        <div class="version-badges">
          <span class="version-badge decky">Decky</span>
        </div>
      </div>
      <div class="faq-answer">
        <div class="version-content-box version-decky">
          You can delete them manually from:<br>
          <code>~/homebrew/data/Junk Store/scripts/Extensions</code>
        </div>
      </div>
    </div>

  </div>

</section>

<!-- Help Section -->
<h2 style="text-align: center; margin-top: 4rem;">Didn't Find Your Answer?</h2>

<p style="text-align: center; margin-bottom: 2rem; color: #ccc;">Still having trouble after following these guides? We've got you covered with multiple support options.</p>

<div class="help-grid">
  <div class="help-section">
    <h3>Quick Help</h3>
    <div class="help-links">
      <a href="/help-mockup/unified-faq/" class="help-link">
        <span class="help-title">Unified FAQ</span>
        <span class="help-desc">Common questions</span>
      </a>
      <a href="/tutorials/" class="help-link">
        <span class="help-title">Setup Tutorials</span>
        <span class="help-desc">Step-by-step guides</span>
      </a>
    </div>
  </div>

  <div class="help-section">
    <h3>More Resources</h3>
    <div class="help-links">
      <a href="/gallery/" class="help-link">
        <span class="help-title">Gallery</span>
        <span class="help-desc">Visual examples</span>
      </a>
      <a href="/tested-games/" class="help-link">
        <span class="help-title">Games Tested</span>
        <span class="help-desc">Compatibility database</span>
      </a>
    </div>
  </div>
</div>

<div style="text-align: center; margin-top: 3rem;">
  <h3>Community Support</h3>
  <p style="margin-bottom: 1.5rem;">Join our community for live help and discussion</p>
  <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
    <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
    <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
  </a>
</div>

<!-- Final Navigation Options -->
<div class="section-end" style="text-align: center; margin-top: 3rem;">
  <a href="#top" class="back-to-top" style="color: #fb923c; text-decoration: none; font-size: 1.1em;">↑ Back to Top</a>
</div>

<!-- JavaScript -->
<script>
// Copy troubleshooting link function (must be before DOMContentLoaded)
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
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, 99999);

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

  // Function to apply filter
  function applyFilter(filter) {
    // Update active button
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      }
    });

    // Filter troubleshooting items and manage badge visibility
    faqItems.forEach(item => {
      const version = item.dataset.version;
      const badges = item.querySelector('.version-badges');
      const professionalBoxes = item.querySelectorAll('.version-content-box.version-professional');
      const deckyBoxes = item.querySelectorAll('.version-content-box.version-decky');

      // Show All: show everything and show badges
      if (filter === 'all') {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'flex';
        professionalBoxes.forEach(box => box.style.display = 'block');
        deckyBoxes.forEach(box => box.style.display = 'block');
      }
      // Decky filter: show decky AND shared, hide badges, hide professional boxes
      else if (filter === 'decky' && (version === 'decky' || version === 'shared')) {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'none';
        professionalBoxes.forEach(box => box.style.display = 'none');
        deckyBoxes.forEach(box => box.style.display = 'block');
      }
      // Professional filter: show professional AND shared, hide badges, hide decky boxes
      else if (filter === 'professional' && (version === 'professional' || version === 'shared')) {
        item.classList.remove('hidden');
        if (badges) badges.style.display = 'none';
        professionalBoxes.forEach(box => box.style.display = 'block');
        deckyBoxes.forEach(box => box.style.display = 'none');
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
      performSearch(); // Re-run search with new filter
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
        anchorButton.setAttribute('title', 'Copy link to this solution');
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
        const answer = targetElement.querySelector('.faq-answer');
        if (answer) {
          answer.classList.add('show');
        }
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetElement.style.boxShadow = '0 0 10px rgba(251, 146, 60, 0.5)';
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
