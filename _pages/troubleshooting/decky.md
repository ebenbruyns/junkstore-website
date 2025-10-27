---
layout: splash
title: "Junk Store Decky Plugin Troubleshooting"
description: "Fix Junk Store Decky plugin issues for Epic & GOG games. Complete troubleshooting guide for Game Mode installation problems, compatibility, and launch issues."
permalink: /troubleshooting/decky/
classes: wide
show_pagination: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Decky FAQ"
      url: "/faq/decky/"
      class: "button"
---
<section class="seo-intro">
  <p><strong>Fix Epic and GOG game issues directly from Game Mode!</strong> This comprehensive troubleshooting guide covers Junk Store Decky plugin installation, compatibility problems, and authentication solutions for Steam Deck users.</p>
</section>



<!-- Troubleshooting Search Interface -->
<div class="faq-search-container">
  <div class="search-box">
    <input type="text" id="faq-search" placeholder="🔍 Search troubleshooting solutions..." aria-label="Search troubleshooting questions">
    <button type="button" id="clear-search" class="clear-button" title="Clear search">✕</button>
  </div>
  <div class="search-results-info" id="search-info">Showing all solutions</div>
  <div class="no-results" id="no-results" style="display: none;">
    <p>No solutions found matching your search. Try different keywords or browse all sections above.</p>
  </div>
</div>

<div style="text-align: center;">
<h2 id="general-plugin-issues">General Plugin Issues</h2>
</div>


<details class="faq-box" id="dependencies-not-installing">
  <summary>Dependencies aren't installing - how do I fix this?</summary>
  <p></p>
    If you're seeing errors and dependencies aren't installing, try running these commands in Konsole:
    <br><br>
    <strong>Command sequence:</strong>
    <div class="custom-code-block" style="position: relative; margin: 15px 0;">
      <pre style="background: #272822; color: #f8f8f2; padding: 15px; border-radius: 6px; overflow-x: auto; position: relative; font-family: 'Fira Code', Consolas, monospace; font-size: 14px; line-height: 1.4;"><code><span style="color: #66d9ef">export</span> <span style="color: #fd971f">DECKY_PLUGIN_RUNTIME_DIR</span><span style="color: #f92672">=</span>~/homebrew/data/Junk Store
<span style="color: #66d9ef">export</span> <span style="color: #fd971f">PYTHONPATH</span><span style="color: #f92672">=</span>~/homebrew/plugins/Junk Store/scripts:<span style="color: #fd971f">$PYTHONPATH</span>:~/homebrew/plugins/Junk Store/scripts/shared
<span style="color: #66d9ef">export</span> <span style="color: #fd971f">DECKY_PLUGIN_DIR</span><span style="color: #f92672">=</span>~/homebrew/plugins/Junk Store
<span style="color: #66d9ef">export</span> <span style="color: #fd971f">DECKY_PLUGIN_LOG_DIR</span><span style="color: #f92672">=</span>~/homebrew/logs/Junk Store
<span style="color: #66d9ef">cd</span> ~/homebrew/plugins/Junk Store
./scripts/install_deps.sh</code></pre>
      <button onclick="copyCode(this)" style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6); border: 1px solid #555; color: #fff; padding: 6px 8px; border-radius: 3px; cursor: pointer; font-size: 11px; z-index: 100;" title="Copy to clipboard">⧉</button>
    </div>
    
    <script>
    function copyCode(button) {
      const code = button.parentElement.parentElement.querySelector('code').textContent.trim();
      navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<span style="color: #4ade80;">✓ Copied</span>';
        setTimeout(() => {
          button.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="m5 15-4-4 4-4"></path>
            <path d="M5 20v-7a3 3 0 0 1 3-3h7"></path>
          </svg>`;
        }, 2000);
      });
    }
    </script>
    <strong>What this does:</strong> Sets up the correct environment and runs the dependency installer manually.
</details>

<details class="faq-box" id="steam-download-stuck-0">
 <summary>When I launch a game, Steam tries to download something but it gets stuck at 0%</summary>
  <p></p>
    This is a known Steam issue, often related to Proton 9. We recommend switching to a <strong>GE-Proton</strong> version instead, as these are better suited for running non-Steam games. Open the game's properties in Steam and select a different Proton version from the Compatibility tab to resolve the issue.
</details>

<details class="faq-box" id="games-not-showing-non-steam">
  <summary>Games aren't showing up in the Non-Steam tab</summary>
  <p></p>
    Check your settings and make sure the shortcut isn't hidden. After changing settings, reboot your Steam Deck for changes to take effect.
</details>

<details class="faq-box" id="shortcuts-not-appearing">
  <summary>Shortcuts aren't appearing</summary>
  <p></p>
    Try rebooting your device first. If they still don't appear, ask for help in the <em>plugin-support</em> forum on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
</details>


<details class="faq-box" id="proton-ge-installation">
  <summary>I don't have Proton GE or don't know how to install it</summary>
  <p></p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you'll be able to select it as a compatibility option in Junk Store.
    <br>
    <br>
    Please refer to our <a href="{{ '/tutorials/' | relative_url }}">Tutorials</a> page to see how to change/check your Proton version if you are unsure how to do this.
</details>

<details class="faq-box" id="keyboard-issues-game-mode">
  <summary>Having issues bringing up the keyboard in Game Mode?</summary>
  <p></p>
    If the <strong>Steam + X</strong> shortcut isn't bringing up the keyboard try the following:
  <ul>
    <li>Try to bring up the keyboard ⌨️ from the Quick Access Menu (<strong>⋯</strong>).</li>
    <li>Tap directly on a text field (like a password box) to prompt the keyboard.</li>
    <li>Try toggling to Desktop Mode and back to Game Mode to reset input services.</li>
    <li>Restart Steam or the device if the issue persists.</li>
  </ul>
    This is a known Steam bug that has been around for a while. These steps usually help work around it until Valve fixes it in a future update.
  
</details>

<div style="text-align: center;">
<h2 id="epic-games-troubleshooting">Epic Games Troubleshooting</h2>
</div>


<details class="faq-box" id="epic-login-issues">
  <summary>Experiencing Epic Games login issues?</summary>
  <p></p>
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
</details>

<details class="faq-box" id="legendary-error-popup">
  <summary>Legendary ERROR pop-up when signing in?</summary>
  <p></p>
    If you see "Legendary status produced no output," your credentials may be corrupted.<br><br>
    In Desktop Mode, open Konsole and run:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth --delete</code><br>
    Then re-authenticate with:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth</code>
</details>

<details class="faq-box" id="changed-epic-password">
  <summary>Have you recently changed your Epic password?</summary>
  <p></p>
    If you've changed your password and are having issues logging in, simply reboot your Steam Deck.
</details>

<details class="faq-box" id="update-legendary-flatpak">
  <summary>How do I update the Legendary Flatpak?</summary>
  <p> </p>
    Go to <strong>About &gt; Dependencies</strong> in the Junk Store UI and click "Install Dependencies" again.
</details>

<details class="faq-box" id="captcha-mouse-wont-reach">
  <summary>Can't verify captcha — mouse won't reach button?</summary>
  <p></p>
    Try the following:
    <ul>
      <li>Use a keyboard and press <kbd>Tab</kbd> to cycle to the Verify button.</li>
      <li>In Game Mode, change the resolution to <strong>3840x2160</strong> via:<br>
      Epic Games Login &gt; Properties &gt; Shortcut &gt; Game Resolution.</li>
      <li>Or run in Konsole:<br>
      <code>flatpak run com.github.derrod.legendary auth --disable-webview</code></li>
    </ul>
</details>

<details class="faq-box" id="no-epic-games-showing">
  <summary>I don't see any games in my Epic library.</summary>
  <p></p>
      Check the following:
    <ul>
      <li>If you have more than one Epic account, make sure you are logged into the correct one.</li>
      <li>Press <strong>X</strong> to toggle the "Show Installed" filter — it may be hiding your uninstalled games.</li>
      <li>Clear the search bar at the top — any text here will filter your library.</li>
      <li>Refresh your games list from the main Epic tab:<br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong></li>
      <li>Reboot the Steam Deck</li>
      <li>Log out and log back into your Epic account</li>
    </ul>
</details>

<details class="faq-box" id="games-wont-load-cpp-error">
  <summary>Games won't load — Microsoft Visual C++ error?</summary>
  <p></p>
    If prompted to install Microsoft Visual C++ Runtime:
    <ol>
      <li>Download the <strong>X64 redistributable</strong> from <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank">Microsoft Learn</a>.</li>
      <li>Copy the file to the game's install folder:<br><code>~/Games/epic/[game title]</code></li>
      <li>In Junk Store, go to the game's slider menu → <strong>Run EXE in Game Folder</strong></li>
      <li>Select <code>VC_redist.x64.exe</code> and complete the install.</li>
    </ol>
    This should allow the game to run.
</details>

<details class="faq-box" id="junk-store-egs-mismatch">
  <summary>Junk Store and EGS library don't match?</summary>
  <p></p>
    Have you tried <strong>refreshing your games list?</strong>
  <ul>
    <li>Refresh your games list from the main Epic tab:</li><br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong>
   <li>Or run the following in Konsole to refresh:</li>
  <pre><code>flatpak run com.github.derrod.legendary list --force-refresh</code></pre>
  </ul>
  <br>
    If missing games still don't appear, they may require a third-party launcher and are currently unsupported.
</details>

<details class="faq-box" id="game-wont-download-critical">
  <summary>Game won't download — CRITICAL error?</summary>
  <p></p>
    If you get:<br>
    <strong>CRITICAL: installation cannot proceed, exiting</strong><br>
    It likely means your storage is full. Free up space or install to another location.
</details>

<details class="faq-box" id="sd-card-permissions-error">
  <summary>Installing games to SD card causes a Permissions Error?</summary>
  <p></p>
    <strong>Possible causes:</strong>
    <ul>
      <li>Your SD card may not be formatted correctly.</li>
      <li>Old dependencies — revisit <strong>About &gt; Dependencies</strong> and reinstall them.</li>
      <li><strong>SD card naming:</strong> If you've renamed your SD card, it may not be in the path Junk Store expects (<code>/run/media/mmcblk0p1</code>). See solution below.</li>
    </ul>
    <strong>Bazzite users:</strong>
    <br>
    If you are getting this error you need to edit the <code>settings.sh</code> file to match your setup.
    <br><br>
    The file you need to edit is here:<br>
    <code>~/homebrew/plugins/Junk-Store/scripts/Extensions/Epic/settings.sh</code>
    <br><br>
    Look for the line:<br>
    <code>INSTALL_DIR="/run/media/mmcblk0p1/Games/epic/"</code>
    <br><br>
    That's the fallback path Junk Store expects. If your SD card has a different name or path, update this line to match your actual SD card location.
</details>

<div style="text-align: center;">
<h2 id="gog-extension-troubleshooting">GOG Extension Troubleshooting</h2>
</div>

<details class="faq-box" id="gog-installer-wont-execute">
  <summary>GOG Extension installer won't execute or opens in text editor</summary>
  <p><strong>Problem:</strong> When double-clicking the GOG Extension installer, nothing happens or it opens in Kate text editor.</p>

  <p><strong>Solution:</strong></p>
  <ol>
    <li><strong>Check file permissions:</strong> Right-click → Properties → Permissions → Check "Is executable"</li>
    <li><strong>Check for theme conflicts:</strong> Custom icon packs can break system dialogs. Switch to default theme temporarily</li>
    <li><strong>Use console as backup:</strong> Right-click → "Run in Konsole" to see error messages</li>
  </ol>

  <p><em>Most common cause: Custom icon themes interfering with system dialogs (zenity).</em></p>
</details>

<details class="faq-box" id="gog-wont-run">
  <summary>I can't get GOG to run in Junk Store.</summary>
  <p></p>
    Make sure you're using the <strong>latest version of Junk Store</strong> from the <strong>Decky Testing Store</strong>.<br><br>
    You'll also need to reinstall dependencies by going to the <strong>About</strong> section and clicking "Install Dependencies."<br><br>
    Once you've purchased the GOG extension, please follow the <a href="/tutorials/gog-extension">GOG Extension Install Guide</a> to install the extension and link it to your Junk Store plugin.
</details>

<details class="faq-box" id="no-gog-games-showing">
  <summary>I don't see any games in my Gog library.</summary>
  <p></p>
  Check the following:
  <ul>
    <li>If you have more than one Gog account, make sure you are logged into the correct one.</li>
    <li>Press <strong>X</strong> to toggle the "Show Installed" filter — it may be hiding your uninstalled games.</li>
    <li>Clear the search bar at the top — any text here will filter your library.</li>
    <li>Refresh your games list from the main Gog tab:<br>
      &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong>
    </li>
    <li>Reboot the Steam Deck</li>
    <li>Log out and log back into your Gog account</li>
  </ul>
</details>

<div style="text-align: center;">
<h2 id="game-compatibility-problems">Game Compatibility Problems</h2>
</div>


<details class="faq-box" id="works-in-heroic-lutris-not-junk-store">
  <summary>My game works in Heroic or Lutris, but not in Junk Store</summary>
  <p></p>
    Games that run in Heroic or Lutris usually work in Junk Store too — it's just a matter of finding the right tweaks:
  <ul>
    <li><strong>Check our game compatibility table first</strong> — see if the game is listed in our <a href="{{ '/tested-games' | relative_url }}">tested games database</a> for known compatibility status and specific tweaks.</li>
    <li>Try switching to a different GE-Proton version.</li>
    <li>Install any required or missing dependencies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else).</li>
    <li>Some Epic games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (Epic tab) and enabled it for the game (done from the game page in Junk Store).</li>
  </ul>
    Please refer to our <a href="/tutorials/">Tutorials</a> section to learn how to change or check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
  <br>
  <br>
    If that doesn't work, ask for help in our Discord server. Please be patient—our team is small! While we have a decent game library, we don't have every game, so we may only be able to offer advice rather than fixes.
</details>

<details class="faq-box" id="controller-not-working">
  <summary>Game launches but controller doesn't work?</summary>
  <p></p>
    Try the following:
    <ul>
      <li>Restart your Steam Deck — this can resolve odd controller issues.</li>
      <li>Check your Steam Input settings — they may be interfering.</li>
      <li>Open and close the Quick Access menu — this can "wake" controller detection.</li>
      <li>Change the Proton version — ProtonGE is often more compatible.</li>
    </ul>
    If none of these work, further research may be needed. Note that we can't test every game.
</details>

<details class="faq-box" id="game-wont-launch">
  <summary>Why won't my game launch?</summary>
  <p></p>
    Games may fail to launch for a variety of reasons. Here are some common causes and what you can do:
  <ul>
    <li><strong>Wrong compatibility layer:</strong><br>
      Try switching to a different version of Proton. Non-Steam games usually work best with <strong>GE-Proton</strong>. We recommend finding a version that works well for most of your library and using it as the default for non-Steam games.<br><br>
      However, some titles require a <em>specific</em> version of Proton or GE-Proton to run properly.
    </li>
    <li><strong>Missing dependencies:</strong><br>
      Some games require additional libraries such as <strong>Microsoft C++ Runtime</strong> or <strong>DirectX</strong>. These dependencies may not always trigger an obvious error message, so try installing them if you suspect they're missing.
    </li>
    <li><strong>Check compatibility resources:</strong><br>
      📋 First check our <a href="/tested-games/">Games Tested table</a> for compatibility status and any specific workarounds for your game.<br><br>
      If not listed there, visit <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community tips. You may find game-specific tweaks, compatibility reports, or Proton version recommendations that solve your issue.
    </li>
  </ul>
</details>

<div style="text-align: center;">
<h2 id="advanced-troubleshooting">Advanced Troubleshooting</h2>
</div>


<details class="faq-box" id="backend-scripts-info">
  <summary>What are the backend scripts, and do I need them?</summary>
  <p></p>
    These are optional example scripts mainly for DOSBox games. They are not officially supported and may stop working if Junk Store is updated. Use them only if you know how they work.
</details>

<details class="faq-box" id="uninstall-backend-scripts">
  <summary>How do I uninstall the backend scripts for DOS and Win 3.1?</summary>
  <p></p>
    You can delete them manually from:
    <br>
    <code>~/homebrew/data/Junk Store/scripts/Extensions</code>
</details>

<details class="faq-box" id="stuck-steam-prelaunch">
  <summary>Game gets stuck at the Steam pre-launch screen</summary>
  <p></p>
    This might be caused by another plugin (like <strong>decky-cloud-save</strong>) locking Junk Store's files. 
    <br>
    <br>
    Make sure nothing is interfering with this folder:
    <br>
    <code>/home/deck/homebrew/data/Junk Store</code>
    <br>
    <br>
    Junk Store relies on that data directory to function correctly.
</details>

<h2 style="text-align: center; margin-top: 4rem;">Didn't Find Your Answer?</h2>

<p style="text-align: center; margin-bottom: 2rem; color: #ccc;">Still having trouble after trying these solutions? We've got you covered with multiple support options.</p>

<div class="help-grid">

<div class="help-section">
  <h3>Quick Help</h3>
  <div class="help-links">
    <a href="/deckyhelp/" class="help-link">
      <span class="help-title">Decky Plugin Help</span>
      <span class="help-desc">Installation and setup</span>
    </a>
    <a href="/tutorials/" class="help-link">
      <span class="help-title">Tutorials</span>
      <span class="help-desc">Step-by-step guides</span>
    </a>
  </div>
</div>

<div class="help-section">
  <h3>FAQ Pages</h3>
  <div class="help-links">
    <a href="/faq/decky/" class="help-link">
      <span class="help-title">Decky Plugin FAQ</span>
      <span class="help-desc">Common plugin questions</span>
    </a>
    <a href="/tested-games/" class="help-link">
      <span class="help-title">Games Tested</span>
      <span class="help-desc">Compatibility database</span>
    </a>
  </div>
</div>

<div class="help-section">
  <h3>More Resources</h3>
  <div class="help-links">
    <a href="/upgrade/" class="help-link">
      <span class="help-title">Upgrade to 2.0</span>
      <span class="help-desc">Free vs Professional</span>
    </a>
    <a href="/get_started/" class="help-link">
      <span class="help-title">Getting Started</span>
      <span class="help-desc">Initial setup guide</span>
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

<!-- Final navigation - Back to top buttons -->
<div class="section-end">
  <a href="#top" class="back-to-top">↑ Back to Top</a>
</div>

<!-- Mobile floating action button -->
<a href="#top" class="faq-mobile-fab" id="mobile-fab">↑</a>

<style>
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

/* Help Section Styling */
.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.help-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 25px;
  background-color: #1e2a38;
  transition: all 0.3s ease;
  text-align: center;
}

.help-section:hover {
  border-color: #e67300;
  transform: translateY(-2px);
}

.help-section h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #e67300;
  font-size: 1.2em;
}

.help-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.help-link {
  display: block;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.help-link:hover {
  background: rgba(230, 115, 0, 0.1);
  border-color: #e67300;
  transform: translateX(5px);
}

.help-title {
  display: block;
  color: #fff;
  font-weight: 600;
  margin-bottom: 4px;
}

.help-desc {
  display: block;
  color: #ccc;
  font-size: 0.9em;
}

/* Community Buttons */
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-right: 12px;
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

/* Mobile Responsive */
@media (max-width: 768px) {
  .help-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.faq-anchor:hover {
  opacity: 1;
}

.faq-box summary:hover .faq-anchor, 
.troubleshooting-box summary:hover .faq-anchor {
  opacity: 0.8;
}

</style>

<script>
// Show/hide mobile FAB based on scroll position
window.addEventListener('scroll', function() {
  const fab = document.getElementById('mobile-fab');
  if (window.scrollY > 300) {
    fab.classList.add('visible');
  } else {
    fab.classList.remove('visible');
  }
});

// Load fuzzy search component
const fuzzySearchScript = document.createElement('script');
fuzzySearchScript.src = '{{ "/assets/js/fuzzy-search.js" | relative_url }}';
document.head.appendChild(fuzzySearchScript);

// Troubleshooting Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('faq-search');
  const clearButton = document.getElementById('clear-search');
  const searchInfo = document.getElementById('search-info');
  const noResults = document.getElementById('no-results');
  const troubleshootingBoxes = document.querySelectorAll('.troubleshooting-box');
  const sectionSummaries = document.querySelectorAll('.section-summary');
  
  let totalQuestions = troubleshootingBoxes.length;
  
  // Initialize fuzzy search when available
  let fuzzySearch = null;
  setTimeout(() => {
    if (window.FuzzySearch) {
      fuzzySearch = new window.FuzzySearch({
        maxSuggestions: 3,
        minSearchLength: 3
      });
    }
  }, 100);
  
  // Extract searchable text from troubleshooting questions
  const troubleshootingQuestions = Array.from(troubleshootingBoxes).map(box => {
    const summary = box.querySelector('summary');
    return summary ? summary.textContent.trim() : '';
  }).filter(text => text.length > 0);
  
  function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }
  
  function removeHighlights(element) {
    const highlights = element.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
      highlight.outerHTML = highlight.innerHTML;
    });
  }
  
  function searchTroubleshooting() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    
    // Clear previous highlights
    troubleshootingBoxes.forEach(box => removeHighlights(box));
    
    if (searchTerm === '') {
      // Show all questions
      troubleshootingBoxes.forEach(box => {
        box.style.display = 'block';
        visibleCount++;
      });
      sectionSummaries.forEach(summary => summary.style.display = 'block');
      noResults.style.display = 'none';
      clearButton.style.display = 'none';
    } else {
      // Search and filter
      troubleshootingBoxes.forEach(box => {
        const summary = box.querySelector('summary');
        const content = box.querySelector('p, ul, ol, div');
        
        const summaryText = summary ? summary.textContent.toLowerCase() : '';
        const contentText = content ? content.textContent.toLowerCase() : '';
        
        if (summaryText.includes(searchTerm) || contentText.includes(searchTerm)) {
          box.style.display = 'block';
          visibleCount++;
          
          // Simple highlighting - avoid HTML mangling by working with plain text only
          if (summary && summaryText.includes(searchTerm)) {
            const originalText = summary.textContent;
            const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
            const regex = new RegExp(`(${escapedTerm})`, 'gi');
            summary.innerHTML = originalText.replace(regex, '<span class="search-highlight">$1</span>');
          }
        } else {
          box.style.display = 'none';
        }
      });
      
      // Hide section summaries during search
      sectionSummaries.forEach(summary => summary.style.display = 'none');
      clearButton.style.display = 'inline-block';
    }
    
    // Show fuzzy suggestions if no results found and fuzzy search is available
    if (fuzzySearch && visibleCount === 0 && searchTerm.length >= 3) {
      fuzzySearch.hideSuggestions(); // Clear any existing suggestions
      const suggestions = fuzzySearch.findSuggestions(searchTerm, troubleshootingQuestions);
      if (suggestions.length > 0) {
        const container = document.querySelector('.faq-search-container');
        fuzzySearch.showSuggestions(searchTerm, suggestions, container, (suggestion) => {
          searchInput.value = suggestion;
          searchTroubleshooting();
        });
      }
    } else if (fuzzySearch) {
      fuzzySearch.hideSuggestions();
    }
    
    // Update results info
    if (visibleCount === 0 && searchTerm !== '') {
      searchInfo.textContent = 'No solutions found';
      noResults.style.display = 'block';
    } else if (searchTerm === '') {
      searchInfo.textContent = `Showing all ${totalQuestions} solutions`;
      noResults.style.display = 'none';
    } else {
      searchInfo.textContent = `Showing ${visibleCount} of ${totalQuestions} solutions`;
      noResults.style.display = 'none';
    }
  }
  
  function clearSearch() {
    searchInput.value = '';
    if (fuzzySearch) {
      fuzzySearch.hideSuggestions();
    }
    searchTroubleshooting();
    searchInput.focus();
  }
  
  // Event listeners
  searchInput.addEventListener('input', searchTroubleshooting);
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
      clearSearch();
    }
  });
  
  clearButton.addEventListener('click', clearSearch);
  
  // Initialize
  searchInfo.textContent = `Showing all ${totalQuestions} solutions`;
  
  // Update total questions display on load
  setTimeout(() => {
    totalQuestions = document.querySelectorAll('.troubleshooting-box').length;
    searchInfo.textContent = `Showing all ${totalQuestions} solutions`;
  }, 100);

  // Handle direct links to troubleshooting items
  function openLinkedTroubleshooting() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.tagName === 'DETAILS') {
        targetElement.open = true;
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetElement.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
          setTimeout(() => {
            targetElement.style.boxShadow = '';
          }, 3000);
        }, 100);
      }
    }
  }

  // Add anchor buttons to all troubleshooting questions
  function addAnchorButtons() {
    const troubleshootingBoxes = document.querySelectorAll('.troubleshooting-box[id], .faq-box[id]');
    troubleshootingBoxes.forEach(box => {
      const summary = box.querySelector('summary');
      const id = box.getAttribute('id');
      if (summary && id && !summary.querySelector('.faq-anchor')) {
        const anchorButton = document.createElement('button');
        anchorButton.className = 'faq-anchor';
        anchorButton.setAttribute('onclick', `copyFAQLink('${id}')`);
        anchorButton.setAttribute('title', 'Copy link to this question');
        anchorButton.innerHTML = '🔗';
        summary.appendChild(document.createTextNode(' '));
        summary.appendChild(anchorButton);
      }
    });
  }

  // Initialize anchor functionality
  addAnchorButtons();
  openLinkedTroubleshooting();
  window.addEventListener('hashchange', openLinkedTroubleshooting);
});

// Copy FAQ link function (global scope for onclick handlers)
function copyFAQLink(questionId) {
  const url = window.location.origin + window.location.pathname + '#' + questionId;
  
  function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'copy-success';
    notification.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 1000;
      background: ${isError ? '#ef4444' : '#10b981'}; color: white;
      padding: 12px 20px; border-radius: 6px; font-size: 14px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showNotification('Link copied to clipboard!');
    }).catch(() => {
      fallbackCopy();
    });
  } else {
    fallbackCopy();
  }
  
  function fallbackCopy() {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        showNotification('Link copied to clipboard!');
      } else {
        showNotification('Copy failed. URL: ' + url, true);
      }
    } catch (err) {
      showNotification('Copy failed. URL: ' + url, true);
    }
  }
}
</script>