---
layout: splash
title: "Epic Games FAQ"
permalink: /faq/epicfaq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---
<div class="spacer mt-4"></div>

  Welcome to our Epic Games Store FAQ page, focused on common questions about using Epic Games titles with Junk Store on the Steam Deck.

<details class="faq-box">
  <summary>Does Junk Store automatically install DLC content too?</summary>
  <p>Yes, DLC is installed automatically by default.</p>
</details>

<details class="faq-box">
  <summary>Do games that require third-party launchers work?</summary>
  <p>Not yet — support exists in Legendary, but we haven’t implemented it due to limited testing resources. You can attempt to configure it manually using the CLI or modify the Epic script.</p>
</details>

<details class="troubleshooting-box">
  <summary>Do I need to keep Junk Store open while downloading from Epic?</summary>
  <p></p>
    Yes. Junk Store doesn't have a background download queue. If you close or leave the plugin, your download may stop or behave unpredictably.
</details>

<details class="faq-box">
  <summary>Are cloud saves supported?</summary>
  <p>While Legendary supports this, we haven't implemented it yet due to potential data loss risks. If you're tech-savvy, you can manually configure this via the CLI.</p>
</details>

<details class="faq-box">
  <summary>How do I uninstall and clear game data?</summary>
  <p></p>
  <strong>In Junk Store:</strong> 
  <ul>
  <li>Open the sliders ☰ menu for the game</li>
  <li>Choose 'Uninstall'</li>
  <li>Then delete leftover files in either</li>
    <ul>
    <li><code>~/Games/epic</code></li>
    <li>Or your microSD under <code>/Games/epic</code></li>
    </ul>
  </ul>
  Once you have located the games folder you can delete any remaining games files/data.
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
      From there, follow the path used by your game - for example:
      <ul>
        <li><code>Local Settings/Application Data/Dying Light/Saved</code></li>
      </ul>
    </li>
  </ol>
  Each game may store saves in slightly different locations depending on how it was packaged or ported. Look under <code>AppData</code>, <code>Local Settings</code>, or <code>Documents</code> within the Steam compatibility prefix.
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