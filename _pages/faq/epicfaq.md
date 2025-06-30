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

<details class="faq-box">
  <summary>Are cloud saves supported?</summary>
  <p>While Legendary supports this, we haven't implemented it yet due to potential data loss risks. If you're tech-savvy, you can manually configure this via the CLI.</p>
</details>

<details class="troubleshooting-box">
  <summary>I don’t have Proton GE or don’t know how to install it.</summary>

  <p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  </p>

  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>

  <p>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you’ll be able to select it as a compatibility option in Junk Store.
  </p>

  <p>
    Please refer to our <a href="{{ '/plugin_tutorials/' | relative_url }}"> Plugin Tutorials</a> page. section to see how to change/check your Proton version if you are unsure how to do this.
  </p>
</details>

<details class="faq-box">
  <summary>How do I uninstall and clear game data?</summary>
  <p>In Junk Store, open the sliders menu for the game and choose 'Uninstall'. Then delete leftover files in either <code>~/Games/epic</code> or your microSD under <code>/Games/epic</code>.</p>
</details>

<details class="faq-box">
  <summary>Where can I locate saved data for my Epic games?</summary>
  <p>
    Get the <strong>Steam ID</strong> from the game’s info panel in Junk Store.<br>
    Then navigate to your Steam <code>compatdata</code> folder. Example path:<br>
    <code>.local/share/Steam/steamapps/compatdata/SteamID/pfx/drive_c/users/steamuser/local settings/application data/Dying Light/Saved</code>
  </p>
</details>

<details class="faq-box">
  <summary>Am I able to play Fortnite?</summary>
  <p>Unfortunately, Epic Games does not support Fortnite on Linux. This means our plugin cannot magically enable Fortnite gameplay on SteamOS.</p>
  <p>Epic’s decision stems from their refusal to enable anti-cheat functionality for Linux systems. Please refrain from requesting help with Fortnite — it’s not something we can fix.</p>
  <p>More info: <a href="https://www.theverge.com/2022/2/8/22923163/fortnite-steam-deck-update-epic-tim-sweeney" target="_blank" rel="noopener noreferrer">The Verge article</a>.</p>
</details>

<details class="faq-box">
  <summary>Am I able to play Kingdom Hearts?</summary>
  <p>
  Kingdom Hearts has known compatibility issues on Linux, and this isn’t specific to Junk Store. We haven’t been able to test it ourselves as we don’t own a copy, so we can’t provide official support or recommendations at this time.
</p>
<p>
  That said, you’re welcome to search for fixes or community workarounds online — others have experimented with getting it running and may have suggestions to share.
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