---
layout: splash
title: "Junk Store Decky Plugin FAQ"
description: "Complete Junk Store Decky plugin FAQ for playing Epic & GOG games in Game Mode. Free plugin setup, features, compatibility, and usage guide."
permalink: /faq/decky/
classes: wide
show_pagination: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Decky Troubleshooting"
      url: "/troubleshooting/decky/"
      class: "button"
excerpt: "Complete FAQ for the free Junk Store Decky plugin - Epic Games support included, GOG extension available separately"
---
<div id="top"></div>

<section class="seo-intro">
  <p><strong>Complete FAQ for the free Junk Store Decky plugin.</strong> This page covers everything about playing Epic Games and GOG games on Steam Deck using the free, open-source Decky plugin in Game Mode.</p>
</section>


<!-- FAQ Search Interface -->
<div class="faq-search-container">
  <div class="search-box">
    <input type="text" id="faq-search" placeholder="🔍 Search Decky Plugin FAQs..." aria-label="Search FAQ questions">
    <button type="button" id="clear-search" class="clear-button" title="Clear search">✕</button>
  </div>
  <div class="search-results-info" id="search-info">Showing all questions</div>
  <div class="no-results" id="no-results" style="display: none;">
    <p>No questions found matching your search. Try different keywords or browse all sections above.</p>
  </div>
</div>

<div style="text-align: center;">
<h2 id="overview-getting-started">Overview & Getting Started</h2>
</div>


<details class="faq-box" id="decky-vs-paid-version">
  <summary>What's the difference between the Decky version and the Professional version?</summary>
  <p></p>
    The Decky version is free and open source, designed to run via the Decky Loader. The Professional version includes extra convenience features and doesn't require Decky to run.
    <br>
    <br>
    <strong>For detailed feature comparison:</strong> <a href="/comparison/">View Complete Comparison Chart</a>
    <br>
    <br>
    For more information, see our <a href="{{ '/2.0faq/' | relative_url }}">Junk Store 2.0 FAQ</a>
</details>

<details class="faq-box" id="trustworthy-credentials">
  <summary>Is Junk Store trustworthy and how are my credentials handled?</summary>
  <p></p>
    <strong>Yes, Junk Store is trustworthy.</strong> Here's why you can trust us with your gaming credentials:
  <br>
  <br>
    <strong>Developer Credentials:</strong>
    <ul>
      <li>🔐 Developed by a cybersecurity expert and white-hat professional</li>
      <li>📋 You can verify our lead developer's credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a></li>
      <li>🔍 Open-source Decky plugin code is publicly auditable on <a href="https://github.com/ebenbruyns/junkstore" target="_blank">GitHub</a></li>
      <li>🤝 Active in Steam Deck community since launch with established reputation</li>
    </ul>
    <strong>How Your Credentials Are Handled:</strong>
    <ul>
      <li>🔒 <strong>No password storage:</strong> We never store your Epic or GOG passwords</li>
      <li>🎫 <strong>Token-based only:</strong> Uses secure OAuth tokens managed by Legendary and lgogdownloader</li>
      <li>💻 <strong>Local storage only:</strong> All authentication data stays on your Steam Deck</li>
      <li>🛡️ <strong>Same as official stores:</strong> Uses the exact same login methods as Epic/GOG websites</li>
    </ul>
    <strong>Bottom line:</strong> The Decky plugin has been stable and trusted by thousands of Steam Deck users since launch. Your credentials are handled using industry-standard practices by established tools in the Linux gaming community.
</details>

<details class="faq-box" id="install-decky-plugin">
  <summary>How do I install the Junk Store Decky plugin?</summary>
  <p></p>
    The Junk Store Decky plugin requires <strong>Decky Loader</strong> to be installed first on your Steam Deck.
  <br>
  <ol>
    <li>Install Decky Loader by following the <a href="https://wiki.deckbrew.xyz/en/user-guide/home" target="_blank" rel="noopener">official Decky installation guide</a></li>
    <li>Once Decky is installed, access the Decky Plugin Store from your Quick Access Menu</li>
    <li>Search for "Junk Store" and install the plugin</li>
    <li>The plugin will appear in your Decky menu after installation</li>
  </ol>
    For detailed instructions, refer to our <a href="{{ '/tutorials/plugin/Install' | relative_url }}">Junk Store Decky Plugin Install Guide</a>.
</details>

<details class="faq-box" id="access-junk-store">
  <summary>How do I access Junk Store after installation?</summary>
  <p></p>
    After installing the Decky plugin, access Junk Store through the <strong>Decky Loader menu</strong>:
  <ol>
    <li>Press the <strong>three-dot button</strong> (Quick Access Menu) on your Steam Deck</li>
    <li>Look for the <strong>Decky</strong> icon in the menu</li>
    <li>Select <strong>Junk Store</strong> from the plugin list</li>
  </ol>
    The plugin opens directly in Game Mode without requiring Desktop Mode switching.
</details>

<details class="faq-box" id="first-steps-after-install">
  <summary>What should I do first after installing the Decky plugin?</summary>
  <p></p>
  <ol>
    <li>Open Junk Store from the Decky menu</li>
    <li>Go to the <strong>Epic</strong> tab and log into your Epic Games account</li>
    <li>Your Epic Games library will automatically sync and appear</li>
    <li>(Optional) Download and install the GOG extension if you want GOG game support (paid)</li>
  </ol>
    <strong>Note:</strong> The initial library sync can take a few minutes as Junk Store builds the database for your games.
  <br>
  <br>
    For GOG support, you'll need to purchase the GOG extension separately from the <a href="https://portal.junkstore.xyz/" target="_blank">Junk Store Portal</a>.
</details>

<details class="faq-box" id="games-missing-a-through-l">
  <summary>Why can I only see games A-L in my Epic/GOG library?</summary>
  <p></p>
    <strong>This is normal behavior for the Decky plugin.</strong> The free Decky version only loads your first 100 games by default for performance optimization.
  <br>
  <br>
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
</details>




<div style="text-align: center;">
<h2 id="gog-extension">GOG Extension</h2>
</div>


<div class="gog-extension-info">
  <p>GOG extension updates are now exclusively available through the Junk Store portal. This change makes it faster for us to deliver updates and much easier for you to download and install them.</p>
  
  <p>Once you've purchased access, please follow the <a href="/tutorials/gogextension">GOG Extension Install Guide</a> to install the extension and link it to your Junk Store plugin.</p>

  <p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
    <strong>Note:</strong> The GOG extension is currently in <strong>maintenance-only</strong> mode. This means we'll continue fixing bugs and ensuring compatibility, but we're not actively adding new features. Continued support depends on user interest and purchases.
  </p>
</div>

<details class="faq-box" id="find-gog-extension">
  <summary>Where can I find the GOG extension?</summary>
  <p></p>
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
</details>

<details class="faq-box" id="why-gog-not-free">
  <summary>Why isn't GOG free to use?</summary>
  <p></p>
    GOG support is available to paid supporters, and while we'd love to offer it for free, there's a lot of behind-the-scenes work and resources involved in creating and maintaining Junk Store. We appreciate your understanding and support as we continue to improve and expand Junk Store. All funds go back into the enhancement and development of Junk Store.
</details>



<details class="faq-box" id="gog-dos-scummvm-support">
  <summary>Does the GOG extension support DOS and ScummVM games?</summary>
  <p></p>
     <strong>No.</strong> DOS games and some ScummVM titles are not supported by the GOG extension in the Decky version of Junk Store.
</details>

<details class="faq-box" id="gog-native-linux-support">
  <summary>Does the GOG extension support native Linux games?</summary>
  <p></p>
    No — the GOG extension is designed for Windows games running through Proton. Native Linux games from GOG are not currently supported, as Junk Store relies on Proton's compatibility layer for game execution and integration.
</details>

<div style="text-align: center;">
<h2 id="game-management">Game Management</h2>
</div>


<details class="faq-box" id="install-uninstall-game">
  <summary>How do I install or uninstall a game?</summary>
  <p></p>
  <strong>To install a game in Junk Store:</strong>
  <ul>
    <li>Open the game's page in Junk Store and click install.</li>
    <li>Remember to stay on the game page until installation is complete.</li>
  </ul>
  <strong>To uninstall a game in Junk Store:</strong>
  <ol>
    <li>Open the game's page in Junk Store.</li>
    <li>
      Open the <strong>☰ Slider menu</strong> and select <strong>Uninstall</strong>.<br>
      <em>Note:</em> You may want to write down the game's SteamID so you can locate it later in your <code>compatdata</code> and <code>shadercache</code> folders to delete any potential leftover files.
    </li>
    <li>
      Manually delete any leftover files to free up space or completely remove the game:
      <ul>
        <li><strong>Epic:</strong> <code>~/Games/epic</code> or <code>/*your-SD-card*/Games/epic</code></li>
        <li><strong>GOG:</strong> <code>~/Games/gog</code> or <code>/*your-SD-card*/Games/gog</code></li>
      </ul>
      Once you have located the games folder you can delete any remaining game files/data.
    </li>
  </ol>
  <strong>Important:</strong> Uninstalling a game will remove all local save data. Be sure to back up your saves first if you want to keep them.
</details>

<details class="faq-box" id="find-save-data">
  <summary>How do I find save data for my games?</summary>
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
</details>

<details class="faq-box" id="change-download-location">
  <summary>How do I change where games are downloaded?</summary>
  <p></p>
    You can set your preferred download location from the Epic tab:
  <ol>
    <li>Go to the <strong>Epic</strong> tab</li>
    <li>Click the <strong>⚙️ Gear icon</strong> to open settings</li>
    <li>Set your desired download path (e.g. your SD card directory)</li>
    <li>Press <kbd>X</kbd> to save your changes</li>
  </ol>
  <strong>For GOG games:</strong> Similar process but from the GOG extension interface after installation.
</details>

<details class="faq-box" id="move-games-sd-card">
  <summary>Can I move games to my SD card?</summary>
  <p></p>
    No, not possible. This is a complex feature that we're not planning to implement, but we're open if someone wants to contribute a pull request for this feature.
  <br>
  <br>
    <strong>Workaround:</strong> Set your download location to your SD card before installing new games.
</details>

<details class="faq-box" id="change-proton-version">
  <summary>How do I change the Proton version for a game?</summary>
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
</details>


<details class="faq-box" id="use-with-other-solutions">
  <summary>Can I use Junk Store with games I already installed using other third-party solutions?</summary>
  <p></p>
    <strong>No.</strong> Junk Store manages its own installations and environment. Games installed through other launchers (like Heroic, Lutris, or Bottles) are not recognized or managed by Junk Store.
  <br>
  <br>
    <strong>This applies to both Epic and GOG games.</strong> If you want to use Junk Store to manage a game, you'll need to install it again through Junk Store directly.
 </details>

<details class="faq-box" id="cloud-saves-support">
  <summary>Does Junk Store support cloud saves?</summary>
  <p></p>
    <strong>No, cloud saves are not supported.</strong> We don't want users to run the risk of losing their game saves.
  <br>
  <br>
    <strong>Technical details:</strong>
  <ul>
    <li><strong>Epic Games:</strong> While Legendary supports this, we haven't implemented it due to potential data loss risks</li>
    <li><strong>GOG Games:</strong> Not implemented as it isn't a trivial problem to solve and requires more resources than currently available</li>
    <li><strong>Manual configuration:</strong> Tech-savvy users can manually configure via CLI, but it's not recommended</li>
  </ul>
</details>

<details class="faq-box" id="automatic-dlc-install">
  <summary>Does Junk Store automatically install DLC content?</summary>
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
</details>

<details class="faq-box" id="keep-open-while-downloading">
  <summary>Do I need to keep Junk Store open while downloading games?</summary>
  <p></p>
    <strong>Yes.</strong> Junk Store doesn't have a background download queue. If you close or leave the plugin, your download may stop or behave unpredictably.
  <br>
  <br>
    <strong>This applies to both:</strong>
  <ul>
    <li><strong>Epic Games:</strong> Stay on the game page until installation is complete</li>
    <li><strong>GOG Games:</strong> Keep the plugin open during downloads</li>
  </ul>
    <strong>Important:</strong> Stay on the game page until installation is complete to ensure reliable downloads.
</details>

<details class="faq-box" id="usage-tips-best-practices">
  <summary>What are some general usage tips and best practices?</summary>
  <p></p>
    <strong>How games integrate:</strong>
  <ul>
    <li>Games appear in your Steam library as non-Steam games</li>
    <li>Use Steam's built-in features (Big Picture, controller configs, etc.)</li>
    <li>Performance settings work the same as regular Steam games</li>
    <li>Steam Deck sleep/resume functionality works normally</li>
  </ul>
    <strong>Best practices:</strong>
  <ul>
    <li>Keep Junk Store open during downloads (no background queue)</li>
    <li>Back up save files before uninstalling games</li>
    <li>Use custom Proton versions (like GE-Proton) for better compatibility</li>
    <li>Set download locations to SD card to save internal storage</li>
    <li>Write down Steam IDs before uninstalling (to clean lingering compatdata files)</li>
  </ul>
</details>

<details class="faq-box" id="change-fps-performance-settings">
  <summary>How do I change the FPS or performance settings for games?</summary>
  <p></p>
    Just like with regular Steam games, you can change the FPS cap and other performance settings through the Quick Access Menu (QAM).
    <ul> 
      <li>Hit the <strong>three-dot button</strong> on your Deck to open the QAM</li>
      <li>Scroll to the performance tab</li>
      <li>Adjust the FPS, TDP, refresh rate, or any other performance settings from there</li>
    </ul>
    This works for both Epic and GOG games since they're integrated as Steam shortcuts.
</details>

<div style="text-align: center;">
<h2 id="game-compatibility">Game Compatibility</h2>
</div>


<details class="faq-box" id="third-party-launchers">
  <summary>Do games requiring third-party launchers (EA, Ubisoft, etc.) work?</summary>
  <p></p>
    <strong>Generally not supported.</strong> While Legendary has limited support for third-party launchers, this feature isn't implemented in Junk Store yet.
  <br>
  <br>
    <strong>EA Games:</strong>
    <ul>
      <li>❌ <strong>Not supported</strong> - Require EA Launcher/Origin integration</li>
      <li>EA titles will not appear in your Epic Games library through Junk Store</li>
    </ul>
    <strong>Ubisoft Games:</strong>
    <ul>
      <li>⚠️ <strong>Mixed support</strong> - Some appear in Epic library, others don't</li>
      <li>Ubisoft Connect launcher not officially supported</li>
      <li>Some users have manually installed Ubisoft Connect and run select games</li>
    </ul>
    <strong>Other affected games:</strong>
    <ul>
      <li>Games with custom launchers or activation systems</li>
      <li>Titles requiring additional DRM verification</li>
      <li>Games that need launcher-specific features</li>
    </ul>
    <strong>Workarounds:</strong> Advanced users can attempt manual setup via CLI or modify extension scripts, but this requires technical knowledge and isn't officially supported.
</details>

<details class="faq-box" id="anti-cheat-games">
  <summary>What about games with anti-cheat systems (including Fortnite)?</summary>
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
</details>

<details class="faq-box" id="kingdom-hearts-support">
  <summary>Can I play Kingdom Hearts via Junk Store?</summary>
   <p></p>
    Kingdom Hearts has known compatibility issues on Linux, and this isn't specific to Junk Store.
    <br>
    <br>
    We haven't been able to test it ourselves as we don't own a copy, so we can't provide official support or recommendations at this time.
</details>


<details class="faq-box" id="cheatdeck-compatibility">
  <summary>Does CheatDeck work with Junk Store?</summary>
  <p> </p>
    Not reliably. Epic game launch options are very sensitive, and tools like CheatDeck can conflict with Junk Store's configuration. We've spent over 100 hours fine-tuning this — so use with caution.
  <br>
  <br>
    That said, our extension scripts are open and easier to modify than the plugin core. If you want to experiment and send a working pull request, we're happy to review it!
</details>

<div style="text-align: center;">
<h2 id="technical-support">Technical Support</h2>
</div>


<details class="faq-box" id="report-bug">
  <summary>I think I've found a bug. How do I report it?</summary>
  <p></p>
    We really appreciate bug reports! Like you, we want Junk Store to just work—so if you come across a bug, please let us know. If we don't know about it, we can't fix it.
  <br>
  <br>
    <strong>Submit bugs on GitHub so we can track them properly:</strong><br>
    <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener">Submit a bug report</a>
  <br>
  <br>
    You'll need a GitHub account to submit an issue. It's free to create one if you don't already have it.
  <br>
  <br>
    <strong>Note:</strong> Bug reports aren't support tickets. If you need help or aren't sure if it's a bug, please ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a> first.
</details>

<details class="faq-box" id="request-features">
  <summary>How do I request features or get X feature added?</summary>
 <p></p>
  <strong>We prefer feature requests via GitHub where they can be tracked:</strong><br>
  <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit a feature request</a>
  <br>
  <br>
  <strong>Ways to get features implemented:</strong>
<ol>
  <li>Submit a pull request if you know how to code</li>
  <li>Offer a bounty and pay a developer to implement it</li>
</ol>
  <strong>Alternative:</strong> Discuss ideas first in our Discord community before submitting requests.
</details>

<details class="faq-box" id="get-help-stuck">
  <summary>Where can I get help if I'm stuck?</summary>
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
</details>

<h2 style="text-align: center; margin-top: 4rem;">Didn't Find Your Answer?</h2>

<p style="text-align: center; margin-bottom: 2rem; color: #ccc;">Still have questions after reading this FAQ? We've got you covered with multiple support options.</p>

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
  <h3>Troubleshooting</h3>
  <div class="help-links">
    <a href="/troubleshooting/decky/" class="help-link">
      <span class="help-title">Decky Troubleshooting</span>
      <span class="help-desc">Fix plugin issues</span>
    </a>
    <a href="/gallery/" class="help-link">
      <span class="help-title">Gallery</span>
      <span class="help-desc">Visual examples</span>
    </a>
  </div>
</div>

<div class="help-section">
  <h3>More Resources</h3>
  <div class="help-links">
    <a href="/tested-games/" class="help-link">
      <span class="help-title">Games Tested</span>
      <span class="help-desc">Compatibility database</span>
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

.faq-box summary:hover .faq-anchor {
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

// FAQ Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('faq-search');
  const clearButton = document.getElementById('clear-search');
  const searchInfo = document.getElementById('search-info');
  const noResults = document.getElementById('no-results');
  const faqBoxes = document.querySelectorAll('.faq-box');
  const sectionSummaries = document.querySelectorAll('.section-summary');
  
  let totalQuestions = faqBoxes.length;
  
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
  
  // Extract searchable text from FAQ questions
  const faqQuestions = Array.from(faqBoxes).map(box => {
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
  
  function searchFAQs() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    
    // Clear previous highlights
    faqBoxes.forEach(box => removeHighlights(box));
    
    if (searchTerm === '') {
      // Show all questions
      faqBoxes.forEach(box => {
        box.style.display = 'block';
        visibleCount++;
      });
      sectionSummaries.forEach(summary => summary.style.display = 'block');
      noResults.style.display = 'none';
      clearButton.style.display = 'none';
    } else {
      // Search and filter
      faqBoxes.forEach(box => {
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
      const suggestions = fuzzySearch.findSuggestions(searchTerm, faqQuestions);
      if (suggestions.length > 0) {
        const container = document.querySelector('.faq-search-container');
        fuzzySearch.showSuggestions(searchTerm, suggestions, container, (suggestion) => {
          searchInput.value = suggestion;
          searchFAQs();
        });
      }
    } else if (fuzzySearch) {
      fuzzySearch.hideSuggestions();
    }
    
    // Update results info
    if (visibleCount === 0 && searchTerm !== '') {
      searchInfo.textContent = 'No results found';
      noResults.style.display = 'block';
    } else if (searchTerm === '') {
      searchInfo.textContent = `Showing all ${totalQuestions} questions`;
      noResults.style.display = 'none';
    } else {
      searchInfo.textContent = `Showing ${visibleCount} of ${totalQuestions} questions`;
      noResults.style.display = 'none';
    }
  }
  
  function clearSearch() {
    searchInput.value = '';
    if (fuzzySearch) {
      fuzzySearch.hideSuggestions();
    }
    searchFAQs();
    searchInput.focus();
  }
  
  // Event listeners
  searchInput.addEventListener('input', searchFAQs);
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
      clearSearch();
    }
  });
  
  clearButton.addEventListener('click', clearSearch);
  
  // Initialize
  searchInfo.textContent = `Showing all ${totalQuestions} questions`;
  
  // Update total questions display on load
  setTimeout(() => {
    totalQuestions = document.querySelectorAll('.faq-box').length;
    searchInfo.textContent = `Showing all ${totalQuestions} questions`;
  }, 100);

  // Handle direct links to FAQ items
  function openLinkedFAQ() {
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

  // Add anchor buttons to all FAQ questions
  function addAnchorButtons() {
    const faqBoxes = document.querySelectorAll('.faq-box[id]');
    faqBoxes.forEach(box => {
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
  openLinkedFAQ();
  window.addEventListener('hashchange', openLinkedFAQ);
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