---
layout: splash
title: "Decky Plugin FAQ"
permalink: /faq/deckyfaq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---
<div class="spacer mt-4"></div>

Welcome to the Junk Store Decky Plugin FAQ! Here you’ll find answers to the most commonly asked questions about the Junk Store Decky plugin. This page is updated regularly as we respond to user feedback and questions.

## General

<details class="troubleshooting-box">
  <summary>Why won't my game launch?</summary>

  <p>
    Games may fail to launch for a variety of reasons. Here are some common causes and what you can do:
  </p>

  <ul>
    <li><strong>Wrong compatibility layer:</strong><br>
      Try switching to a different version of Proton. Non-Steam games usually work best with <strong>GE-Proton</strong>. We recommend finding a version that works well for most of your library and using it as the default for non-Steam games.<br><br>
      However, some titles require a <em>specific</em> version of Proton or GE-Proton to run properly.
    </li>

    <li><strong>Missing dependencies:</strong><br>
      Some games require additional libraries such as <strong>Microsoft C++ Runtime</strong> or <strong>DirectX</strong>. These dependencies may not always trigger an obvious error message, so try installing them if you suspect they’re missing.
    </li>

    <li><strong>Check ProtonDB:</strong><br>
      If the game still won’t launch, visit <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community tips. You may find game-specific tweaks, compatibility reports, or Proton version recommendations that solve your issue.
    </li>
  </ul>
</details>

<details class="faq-box">
  <summary>What’s the difference between the Decky version and the Paid version</summary>
  <p>
    The Decky version is free and open source, designed to run via the Decky Loader. The Paid version includes extra convenience features and doesn't require Decky to run.
      For more infomation, see our <a href="{{ '/comingsoon' | relative_url }}">Junk Store 2.0 Coming Soon Page</a>
  </p>
</details>

<details class="faq-box">
  <summary>Is Junk Store trustworthy?</summary>
  <p>
    Yes. Junk Store is developed by a cybersecurity expert and white-hat professional. You can verify our lead developer’s credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a>.
  </p>
</details>

<details class="faq-box">
  <summary>Does Junk Store store any of my credentials?</summary>
  <p>
    No. Junk Store does not store any of your credentials.

    All authentication is handled via OAuth tokens. The only token managed directly by Junk Store is the Junk Store token. Other tokens are managed by external tools: Legendary (Epic) & lgogdownloader (Gog).
  </p>
</details>

<details class="faq-box">
  <summary>How do I report a bug?</summary>
<p>
  We really appreciate bug reports!<br><br>

  Please submit them on GitHub so we can track them:<br>
  <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit a bug report</a><br><br>

  <strong>Note:</strong> Bug reports aren’t support tickets. For help, reach out on 
  <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener noreferrer">Discord</a>.
</p>
</details>

<details class="faq-box">
  <summary>How do I submit a feature request?</summary>
 <p>
  We prefer feature requests via GitHub where they can be tracked:<br>
  <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit a feature request</a><br><br>
</p>
</details>

<details class="faq-box">
  <summary>I want X feature. Can you add it?</summary>
<p>
  There are a few ways to request features:
</p>
<ol>
  <li>Submit a pull request if you know how to code.</li>
  <li>Offer a bounty and pay a developer to implement it.</li>
</ol>
</details>

## Using Junk Store

<details class="faq-box">
  <summary>Does Junk Store support cloud saves</summary>
  <p>No, as we don't want to have users run the risk of losing their game saves.</p>
</details>

<details class="faq-box">
  <summary>How do I change where games are downloaded?</summary>
<p>
  Go to the settings (gear icon) under the <strong>Epic</strong> tab and set your preferred download location. If you're using an SD card, point the path to your SD card directory.
</p>
<p>
  <strong>Don't forget to press X to save your changes.</strong>
</p>
</details>

<details class="faq-box">
  <summary>Can I move games to my SD card?</summary>
  <p>
    Not at the moment. It’s a complex feature and on our development roadmap. For now, games need to be stored on internal storage or an already-mounted drive.
  </p>
</details>

<details class="faq-box">
  <summary>How do I install or uninstall a game?</summary>
<p>
  To uninstall a game:
</p>
<ol>
  <li>Open the game page in Junk Store.</li>
  <li>Select the slider menu and choose <strong>Uninstall</strong>.</li>
  <li>Locate and manually delete any leftover files:
    <ul>
      <li>For Epic: <code>~/Games/epic</code> or <code>/*microsd*/Games/epic</code></li>
      <li>For GOG: <code>~/Games/gog</code> or <code>/*microsd*/Games/gog</code></li>
    </ul>
  </li>
</ol>
</details>

<details class="faq-box">
  <summary>How do I find save data for my games?</summary>
<ol>
  <li>Find the Steam ID at the bottom of the game page in Junk Store.</li>
  <li>Navigate to: <code>~/.local/share/Steam/steamapps/compatdata/*SteamID*/pfx/drive_c/users/steamuser/</code></li>
  <li>From here, follow the game's path:
    <ul>
      <li><strong>Example (Epic):</strong> <em>.../local settings/application data/Dying Light/Saved</em></li>
      <li><strong>Example (GOG):</strong> <em>.../AppData/Roaming/Lonely Troops/Hero of the Kingdom II</em></li>
    </ul>
  </li>
</ol>
</details>

<details class="faq-box">
  <summary>How do I change the Proton version for a game?</summary>
<p>You can change the Proton version from either your Steam Library or directly in Junk Store:</p>

<ul>
  <li>
    <strong>In Junk Store:</strong>  
    <ol>
      <li>Press <code>Y</code> to open the Steam shortcut.</li>
      <li>Click the gear icon → <strong>Properties</strong> → <strong>Compatibility</strong>, then select your desired Proton version.</li>
      <li>Relaunch the game.</li>
    </ol>
  </li>

  <li>
    <strong>In Steam Library:</strong>
    <ol>
      <li>Highlight the game in your library.</li>
      <li>Press the <strong>Start/Options</strong> button (three lines).</li>
      <li>Go to <strong>Properties</strong> → <strong>Compatibility</strong>, then choose your Proton version.</li>
      <li>Relaunch the game.</li>
    </ol>
  </li>
</ul>

<p>Once your Proton version is set, back out to the game screen and press <strong>Play</strong>.</p>
</details>

<details class="faq-box">
  <summary>Can I use Junk Store with games I already installed using Heroic or Lutris?</summary>
  <p>
    No, Junk Store manages its own game installs. If you want to manage those games, you’ll need to install them again via Junk Store.
  </p>
</details>

<details class="faq-box">
  <summary>Does CheatDeck work with Junk Store?</summary>
  <p>
    Not reliably. Epic game launch options are very sensitive, and tools like CheatDeck can conflict with Junk Store’s configuration. We’ve spent over 100 hours fine-tuning this — so use with caution.

    That said, our extension scripts are open and easier to modify than the plugin core. If you want to experiment and send a working pull request, we’re happy to review it!
  </p>
</details>

## Game Compatibility & Support

<details class="faq-box">
  <summary>I can’t get EA or Ubisoft games to work through Epic. Why not?</summary>
  <p>
   These games aren't supported yet. They rely on additional launchers (EA and Ubisoft), which haven't been integrated. We're focused on other features for now, but pull requests are welcome if you’d like to contribute.
  </p>
</details>

<details class="faq-box">
  <summary>Does the GOG extension support DOS and ScummVM games?</summary>
  <p>
    No. DOS and some ScummVM titles are not currently supported.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Can I play Fortnite via Junk Store?</summary>

  <p>
    <strong>No.</strong> Epic Games does not support Fortnite on Linux due to anti-cheat limitations.
  </p>

  <p>
    To play Fortnite on a Steam Deck or Linux system, you will need to either:
    <ul>
      <li>Dual-boot Windows</li>
      <li>Use a cloud gaming or streaming service</li>
    </ul>
    More info: <a href="https://www.theverge.com/2022/2/8/22923163/fortnite-steam-deck-update-epic-tim-sweeney" target="_blank" rel="noopener">The Verge article</a>
  </p>
</details>

<details class="faq-box">
  <summary>Can I play Kingdom Hearts via Junk Store?</summary>
  <p>
    Kingdom Hearts has known compatibility issues on Linux, and this isn’t specific to Junk Store. We haven’t been able to test it ourselves as we don’t own a copy, so we can’t provide official support or recommendations at this time.
  </p>
</details>


<details class="faq-box">
  <summary>Do games that require third-party launchers work?</summary>
  <p>
    Not currently. While Legendary has limited support, this feature isn’t implemented in Junk Store yet. You can attempt manual setup via CLI or modify the extension script.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Do EA and Ubisoft games work via Junk Store?</summary>

  <p>
    <strong>EA Games:</strong><br>
    No, EA games are not supported. They require the EA Launcher, which isn’t integrated with Junk Store. Because of this, EA titles will not appear in your Epic Games library when accessed through Junk Store.
  </p>

  <p>
    <strong>Ubisoft Games:</strong><br>
    It’s complicated. Some Ubisoft titles do appear in your Epic library, while others don’t. The Ubisoft Launcher is not officially supported, but we—and some users—have successfully installed it manually and run select games through Junk Store.
  </p>
</details>

<h2>Need Help or More Info?</h2>
<p>Here are your best starting points:</p>
<ul>
  <li>
    <strong><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a></strong>: Everything you need related to the Junk Store Deckly plugin.
  </li>
<li>
    Still stuck? Ask us on 
    <a href="https://www.reddit.com/r/JunkStore/" target="_blank">Reddit</a> or 
    <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
  </li>
</ul>