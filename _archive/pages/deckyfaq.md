---
layout: splash
title: "Decky Plugin FAQ"
description: "Junk Store Decky plugin FAQ - Steam Deck plugin for non-Steam games from Epic & GOG. Installation help and troubleshooting via Decky Loader."
permalink: /faq/deckyfaq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
---
<div class="spacer mt-4"></div>

Welcome to the Junk Store Decky Plugin FAQ! Here you’ll find answers to the most commonly asked questions about the Junk Store Decky plugin. This page is updated regularly as we respond to user feedback and questions.

<h2>General</h2>



<details class="faq-box">
  <summary>What’s the difference between the Decky version and the Paid version</summary>
  <p></p>
    The Decky version is free and open source, designed to run via the Decky Loader. The Paid version includes extra convenience features and doesn't require Decky to run.
    <br>
    <br>
    For more infomation, see our <a href="{{ '/2.0faq/' | relative_url }}">Junk Store 2.0 FAQ</a>
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
    All authentication is handled via OAuth tokens. The only token managed directly by Junk Store is the Junk Store token. Other tokens are managed by external tools: Legendary (Epic) & lgogdownloader (Gog).
</details>

<details class="faq-box">
  <summary>I think I've found a bug. How do I report it?</summary>
  <p></p>
    We really appreciate bug reports! Like you, we want Junk Store to just work—so if you come across a bug, please let us know. If we don’t know about it, we can’t fix it.
  <br>
  <br>
    <strong>Submit bugs on GitHub so we can track them properly:</strong><br>
    <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener">Submit a bug report</a>
  <br>
  <br>
    You’ll need a GitHub account to submit an issue. It’s free to create one if you don’t already have it.
  <br>
  <br>
    <strong>Note:</strong> Bug reports aren’t support tickets. If you need help or aren’t sure if it’s a bug, please ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a> first.
</details>

<details class="faq-box">
  <summary>How do I submit a feature request?</summary>
 <p></p>
  We prefer feature requests via GitHub where they can be tracked:<br>
  <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit a feature request</a>
</details>

<details class="faq-box">
  <summary>I want X feature. Can you add it?</summary>
<p></p>
  There are a few ways to request features:
<ol>
  <li>Submit a pull request if you know how to code.</li>
  <li>Offer a bounty and pay a developer to implement it.</li>
</ol>
</details>

<h2>Using Junk Store</h2>

<details class="faq-box">
  <summary>Does Junk Store support cloud saves</summary>
  <p></p>
  No, as we don't want to have users run the risk of losing their game saves.
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
  <summary>Can I use Junk Store with games I already installed using other third-party solutions?</summary>
  <p></p>
    <strong>No.</strong> Junk Store manages its own installations and environment. Games installed through other launchers (like Heroic, Lutris, or Bottles) are not recognized or managed by Junk Store.
  <br>
  <br>
      If you want to use Junk Store to manage a game, you’ll need to install it again through Junk Store directly.
 </details>

<details class="faq-box">
  <summary>Does CheatDeck work with Junk Store?</summary>
  <p> </p>
    Not reliably. Epic game launch options are very sensitive, and tools like CheatDeck can conflict with Junk Store’s configuration. We’ve spent over 100 hours fine-tuning this — so use with caution.
  <br>
  <br>
    That said, our extension scripts are open and easier to modify than the plugin core. If you want to experiment and send a working pull request, we’re happy to review it!
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
    <strong>No.</strong> DOS games and some ScummVM titles are not supported by the GOG extension in the Decky version of Junk Store.
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
    Kingdom Hearts has known compatibility issues on Linux, and this isn’t specific to Junk Store.
    <br>
    <br>
    We haven’t been able to test it ourselves as we don’t own a copy, so we can’t provide official support or recommendations at this time.
</details>

<details class="faq-box">
  <summary>Do games that require third-party launchers work?</summary>
  <p></p>
    Not currently. While Legendary has limited support, this feature isn’t implemented in Junk Store yet. You can attempt manual setup via CLI or modify the extension script.
</details>

<h2>Need Help or More Info?</h2>
<p>Here are your best starting points:</p>
<ul>
  <li>
    <strong><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a></strong>: Everything you need related to the Junk Store Decky plugin.
  </li>
<li>
    Still stuck? Ask us on 
    <a href="https://www.reddit.com/r/JunkStore/" target="_blank">Reddit</a> or 
    <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
  </li>
</ul>