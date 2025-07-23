---
layout: splash
title: "Frequently Asked Questions"
permalink: /2.0faq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
  actions:
    - label: "Buy Now"
      url: "/buy_now/"
      class: "button buy-button"
---
<div class="spacer mt-4"></div>


This is the official Junk Store FAQ, where you'll find answers to the most commonly asked questions. We update this page regularly as new features roll out and feedback comes in.
  
For more help, drop by the [r/JunkStore subreddit](https://www.reddit.com/r/JunkStore/) or join us on [Discord](https://discord.gg/6mRUhR6Teh).


<h2>General</h2>

<details class="faq-box">
  <summary>What’s the difference between the Decky version and the Paid version?</summary>
  <p>
    The Decky version is free and open source, designed to run via the Decky Loader. The Paid version includes extra convenience features and doesn't require Decky to run.
  </p>
  <p></p>
  <table style="width:100%; table-layout:fixed;">
    <thead>
      <tr>
        <th style="width:33%;">Feature</th>
        <th style="width:33%;">Decky Version</th>
        <th style="width:33%;">Paid Version</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Epic</td><td>✅ Yes</td><td>✅ Yes</td></tr>
      <tr><td>UMU Fixes</td><td>✅Yes</td><td>✅ Yes</td></tr>
      <tr><td>GOG</td><td>💰 Paid</td><td>✅ Yes</td></tr>
      <tr><td>Amazon</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Download queue</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Emulators</td><td>❌ No</td><td>✅ Yes</td></tr>     
      <tr><td>ROM download support</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>GOG DOS games</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>GOG ScummVM games</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Built-in extension updates</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Built-in help</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Offline artwork cache</td><td>❌ No</td><td>✅ Yes (per extension)</td></tr>
      <tr><td>Change game language</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Selective DLC install</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Change launcher per game</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Custom script hooks</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Cloud saves</td><td>❌ No</td><td>⚠️ Experimental</td></tr>
      <tr><td>Access Junk Store</td><td>📥 Decky menu</td><td>🎮 L3+R3 or Ctrl+3</td></tr>
      <tr><td>Releases</td><td>🔧 Decky process</td><td>🚀 Direct</td></tr>
      <tr><td>Performance</td><td>💯 100 games/tab</td><td>🔟🔟🔟 1000 games/tab</td></tr>
      <tr><td>Tinkering</td><td>🔒 Limited</td><td>🔧 Extensive</td></tr>
      <tr><td>Open extensibility</td><td>🧩 All code</td><td>🪄 Generator + code</td></tr>
      <tr><td>Game dependency install</td><td>🛠️ Manual<br>🧪 Proton Tricks</td><td>⚙️ Built-in<br>🛠️ Manual<br>🧪 Proton Tricks</td></tr>
      <tr><td>Custom extensions</td><td>👨‍💻 Manual coding</td><td>🧙 Wizard-supported</td></tr>
      <tr><td>Customise extensions</td><td>💻 Code heavy</td><td>🧠 Generated + hooks</td></tr>
    </tbody>
  </table>
</details>

<details class="faq-box">
  <summary>Is Junk Store trustworthy?</summary>
    <p></p>
    Yes. Junk Store is developed by a cybersecurity expert and white-hat professional. You can verify our lead developer’s credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a>.
  <br>
  <br>
    We take user privacy and security seriously — nothing is stored, tracked, or transmitted beyond what is absolutely required for Junk Store to function properly.
</details>

<details class="faq-box">
  <summary>Does Junk Store store any of my credentials?</summary>
  <p></p>
    No. Junk Store does not store any of your credentials. This works the same way as in the open-source Decky Plugin version of Junk Store.
  <br>
  <br>
    All authentication is handled via OAuth tokens. The only token managed directly by Junk Store is the Junk Store token. Other tokens are managed by external tools: Legendary (Epic), lgogdownloader (Gog), and Nile (Amazon).
</details>

<details class="faq-box">
  <summary>Does Junk Store 2.0 support cloud saves?</summary>
  <p></p>
    Junk Store 2.0 currently offers <strong>experimental cloud save support</strong> for <strong>Epic</strong> and <strong>GOG</strong>. However, this feature is intended only for advanced users who understand and accept the risks involved — including the potential for save data loss.
  <br>
  <br>
    <strong>Important:</strong> We do <em>not</em> offer technical support for issues related to cloud saves at this time. If you choose to enable it, please make sure you're confident in your ability to troubleshoot and back up your save data manually if needed.
  <br>
  <br>
    <strong>Note:</strong> Not all games from either platform support cloud saves.
</details>

<details class="faq-box">
  <summary>Will I be able to play my games installed from the Decky version in the new version?</summary>
  <p></p>
    Yes. However, you’ll need to <strong>Reset Launch Options</strong> for each game. 
    <br>
    <br>
    This only needs to be done once per game to fully migrate it to the new version of Junk Store.
</details>

<details class="faq-box">
  <summary>Can I use Junk Store with games I already installed using other third-party solutions?</summary>
  <p></p>
    <strong>No.</strong> Junk Store manages its own installations and environment. Games installed through other launchers (like Heroic, Lutris, or Bottles) are not recognized or managed by Junk Store.
  <br>
  <br>
      If you want to use Junk Store to manage a game, you’ll need to install it again through Junk Store directly.
 </details>

<details class="faq-box">
  <summary>Does CheatDeck work with Junk Store?</summary>
  <p></p>
    <strong>Not reliably.</strong> Epic Games launch options are very sensitive, and tools like CheatDeck often conflict with Junk Store’s custom launch configuration. We've spent many hours fine-tuning this setup, so use CheatDeck at your own risk.
  <br>
  <br>
    That said, our extension scripts are user accessible and can be modified.
  </details>

<details class="faq-box">
  <summary>I think I've found a bug. How do I report it?</summary>
  <p></p>
    We really appreciate bug reports! Like you, we want Junk Store to just work—so if you come across a bug, please let us know. If we don’t know about it, we can’t fix it.
  <br>
  <br>
    <strong>Submit bugs on GitHub so we can track them properly:</strong> <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues/new" target="_blank" rel="noopener">Submit a bug report</a>
  <br>
  <br>
    You’ll need a GitHub account to submit an issue. It’s free to create one if you don’t already have it.
  <br>
  <br>
    <strong>Note:</strong> Bug reports aren’t support tickets. If you need help or aren’t sure if it’s a bug, please ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a> first.
</details>

<h2>Using Junk Store</h2>

<details class="faq-box">
  <summary>I've installed Junk Store, how do I access it?</summary>
  <p></p>
    You open Junk Store by pushing <strong>Select</strong> button above the D-pad.
  </details>

<details class="faq-box">
  <summary>How do I import my installed games from the Decky version of Junk Store?</summary>
  <p></p>
    This is done automatically when you first install and launch Junk Store 2.0. Once you’ve generated the extensions (Epic and/or GOG), your games will sync across when you open each corresponding tab.
  <br>
  <br>
    Please note that this process can take some time, as Junk Store is rebuilding the databases for each storefront.
  </details>

  <details class="faq-box">
    <summary>How do I uninstall Junk Store 2.0?</summary>
      <p></p>
        Before uninstalling Junk Store 2.0, you’ll need to:
      <ul>
        <li>Back up your save files for any games you plan to keep playing, as they may be wiped during uninstall.</li>
        <li>Manually uninstall games installed via the new version before your trial expires (to free up space).</li>
        <li>Reinstall those games using the Decky version.</li>
        <li>Restore you game save manually.</li>
      </ul>
        Once you have done all teh above run the following uninstall script in konsole:
        <code>~/.local/share/junkstore/uninstall.sh</code>
      <br>
      <br>
        Please note that this process can take some time, as Junk Store is rebuilding the databases for each storefront.
  </details>

<details class="troubleshooting-box">
  <summary>I don’t have Proton GE or don’t know how to install it.</summary>
  <p></p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you’ll be able to select it as a compatibility option in Junk Store.
    <br>
    <br>
    Please refer to our <a href="{{ '/plugin_tutorials/' | relative_url }}"> Plugin Tutorials</a> page to see how to change/check your Proton version if you are unsure how to do this.
</details>

<details class="faq-box">
  <summary>How do I change where games are downloaded?</summary>
  <p></p>
    You can set your preferred download location from the Epic tab:
  <ul>
    <li>Go to the <strong>Epic</strong> tab</li>
    <li>Click the <strong>⚙️ Gear icon</strong> to open settings</li>
    <li>Set your desired download path (e.g. your SD card directory)</li>
    <li>Press <kbd>X</kbd> to save your changes.</li>
  </ul>
</details>

<details class="faq-box">
  <summary>Can I move games to my SD card?</summary>
  <p></p>
    Not at the moment. It’s a complex feature and on our development roadmap. For now, games need to be stored on internal storage or an already-mounted drive.  
</details>

<details class="faq-box">
  <summary>How do I install or uninstall a game?</summary>
  <p></p>
  <strong>To install a game in Junk Store:</strong>
  <ul>
    <li>Open the game’s page in Junk Store and click install.</li>
    <li>Remember to stay on the game page until installation is complete.</li>
  </ul>
  <strong>To uninstall a game in Junk Store:</strong>
  <ol>
    <li>Open the game’s page in Junk Store.</li>
    <li>
      Open the <strong>☰ Slider menu</strong> and select <strong>Uninstall</strong>.<br>
      <em>Note:</em> You may want to write down the game's SteamID so you can locate it later in your <code>compatdata</code> and <code>shadercache</code> folders.
    </li>
    <li>
      Manually delete any leftover files to free up space or completely remove the game:
      <ul>
        <li><strong>Epic:</strong> <code>~/Games/epic</code> or <code>/*your-SD-card*/Games/epic</code></li>
        <li><strong>GOG:</strong> <code>~/Games/gog</code> or <code>/*your-SD-card*/Games/gog</code></li>
        <li><strong>Amazon:</strong> <code>~/Games/amazon</code> or <code>/*your-SD-card*/Games/amazon</code></li>
      </ul>
    </li>
  </ol>
  <strong>Important:</strong> Uninstalling a game will remove all local save data. Be sure to back up your saves first if you want to keep them.
</details>

<details class="faq-box">
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
</details>

<details class="faq-box">
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
</details>

<details class="faq-box">
  <summary>I want to change the FPS for a game. How do I do this in Junk Store?</summary>
  <p></p>
    Just like with regular Steam games, you can change the FPS cap through the Quick Access Menu (QAM).
    <ul> 
      <li>Hit the <strong>three-dot button</strong> on your Deck to open the QAM</li>
      <li>Scroll to the performance tab</li>
      <li>Adjust the FPS, TDP, refresh rate, or any other performance settings from there.</li>
    </ul>
</details>

<details class="faq-box">
  <summary>Can I move games from the new version back to the Decky (free) version?</summary>
  <p></p>
    No — games installed using the new version of Junk Store can't be "backported" to the older Decky version. They use different install paths and configuration systems.
    <br>
  <br>
    If you want to continue using the free Decky version, you’ll need to:
    <ul>
      <li>Back up your save files for any games you plan to keep playing, as they may be wiped during uninstall.</li>
      <li>Manually uninstall games installed via the new version before your trial expires (to free up space).</li>
      <li>Reinstall those games using the Decky version.</li>
      <li>Restore you game save manually.</li>
    </ul>
     Tip: Do this before your trial ends — otherwise, you may lose access and the games will still occupy storage.
</details>

<h2>Game Compatibility & Support</h2>

<details class="faq-box">
  <summary>Do EA and Ubisoft games work via Junk Store?</summary>
  <p></p>
    <strong>EA Games:</strong><br>
    No, EA games are not supported. They require the EA Launcher, which isn’t integrated with Junk Store. Because of this, EA titles will not appear in your Epic Games library when accessed through Junk Store.
  <br>
  <br>
    <strong>Ubisoft Games:</strong><br>
    It’s complicated. Some Ubisoft titles do appear in your Epic library, while others don’t. The Ubisoft Launcher is not officially supported, but we—and some users—have successfully installed it manually and run select games through Junk Store.
  <!-- <ul>
    <li>A full guide is available here: <a href="/tutorials/Ubisoft/">How to install Ubisoft via Junk Store</a></li>
  </ul> -->
</details>

<details class="faq-box">
  <summary>Does the GOG extension support DOS and ScummVM games?</summary>
  <p></p>
    <strong>Yes.</strong> In Junk Store 2.0, both <strong>DOS</strong> and <strong>ScummVM</strong> games downloaded via GOG are supported.
  <br>
  <br>
    These games will automatically launch using the <strong>Flatpak versions</strong> of <code>ScummVM</code> and <code>DosBox</code> once installed.
  </details>

<details class="faq-box">
  <summary>Can I play Fortnite via Junk Store?</summary>
  <p></p>
    <strong>No.</strong> Epic Games does not support Fortnite on Linux due to anti-cheat limitations.
  <br>
  <br>
    To play Fortnite on a Steam Deck or Linux system, you will need to either:
    <ul>
      <li>Dual-boot Windows</li>
      <li>Use a cloud gaming or streaming service</li>
    </ul>
    More info: <a href="https://www.theverge.com/2022/2/8/22923163/fortnite-steam-deck-update-epic-tim-sweeney" target="_blank" rel="noopener">The Verge article</a>
</details>

<details class="faq-box">
  <summary>Can I play Kingdom Hearts via Junk Store?</summary>
   <p></p>
    Kingdom Hearts has known compatibility issues on Linux, and this isn’t specific to Junk Store. We haven’t been able to test it ourselves as we don’t own a copy, so we can’t provide official support or recommendations at this time.
</details>

<details class="faq-box">
  <summary>Do games that require third-party launchers work?</summary>
  <p></p>
    Not currently. While Legendary has limited support, this feature isn’t implemented in Junk Store yet. You can attempt manual setup via CLI or modify the extension script.
</details>