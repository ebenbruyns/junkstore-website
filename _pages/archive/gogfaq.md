---
layout: splash
title: "GOG Extension FAQ"
permalink: /faq/gogfaq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
---
<div class="spacer mt-4"></div>

  This FAQ addresses common questions about using GOG titles with Junk Store on the Steam Deck.

<section class="gog-extension">
  <h2>Installing the GOG Extension</h2>

  <div>The GOG extension is now exclusively available through the Junk Store portal. This change makes it faster for us to deliver updates and much easier for you to download and install them.</div><br>

  <div>Once you’ve purchased access, please follow the <a href="/tutorials/gogextension">Gog Extension Install Guide</a> to install the extension and link it to your Junk Store plugin.</div>

  <p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
    <strong>Note:</strong> The GOG extension is currently in <strong>maintenance-only</strong> mode. This means we’ll continue fixing bugs and ensuring compatibility, but we’re not actively adding new features. Continued support depends on user interest and purchases.
  </p>

  <a href="https://portal.junkstore.xyz/" class="button gog-extension-button" style="margin-right: 10px;" target="_blank" rel="noopener noreferrer">Get the Gog Extension</a>

<!-- FAQ Entries -->
<details class="faq-box">
  <summary>Where can I find the GOG extension?</summary>
  <p></p>
    It is exclusively available through the Junk Store portal. You can purchase access there with a one-time payment from the <a href="https://portal.junkstore.xyz/" target="_blank">Junk Store Portal</a>.<br><br>
    Once you have it, you have it. We can't take away Gog functionality/integration with the Junk Store plugin. All funds go back into the enhancement and development of Junk Store.
</details>

<details class="faq-box">
  <summary>Why isn't GOG free to use?</summary>
  <p></p>
    GOG support is available to paid supporters, and while we'd love to offer it for free, there's a lot of behind-the-scenes work and resources involved in creating and maintaining Junk Store. We appreciate your understanding and support as we continue to improve and expand Junk Store. All funds go back into the enhancement and development of Junk Store.
</details>

<details class="faq-box">
  <summary>Does Junk Store automatically install DLC content too?</summary>
  <p></p>
    Yes, at the moment it will automatically install DLC content by default.
</details>

<details class="faq-box">
  <summary>Does Junk Store support GOG cloud saves?</summary>
   <p></p>
    This has not yet been looked at for implementation at this stage as it isn't a trivial problem to solve. It will require more resources and time than we currently have available.
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
    <li><code>~/Games/gog</code></li>
    <li>Or your microSD under <code>/Games/gog</code></li>
    </ul>
  </ul>
  Once you have located the games folder you can delete any remaining games files/data.
</details>

<details class="faq-box">
  <summary>Where can I locate saved data for my GOG games?</summary>
  <p>
    First, you need to get the Steam ID for the game from the Junk Store game page. It will be at the bottom of the game info.
  </p>
  <p>
    You will then need to navigate to the save files in your compatdata folder. This is an example of the path for saved games in GOG:
  </p>
  <code>.local/share/Steam/steamapps/compatdata/2237305483/pfx/drive_c/users/steamuser/AppData/Roaming/Lonely Troops/Hero of the Kingdom II</code>
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
        <li><code>/AppData/Roaming/Lonely Troops/Hero of the Kingdom II</code></li>
      </ul>
    </li>
  </ol>
  Each game may store saves in slightly different locations depending on how it was packaged or ported. Look under <code>AppData</code>, <code>Local Settings</code>, or <code>Documents</code> within the Steam compatibility prefix.
</details>

<details class="faq-box">
  <summary>Does the extension support DOS and ScummVM games?</summary>
  <p></p>
     <strong>No.</strong> DOS games and some ScummVM titles are not supported by the GOG extension in the Decky version of Junk Store.
</details>

<details class="faq-box">
  <summary>Does the GOG extension support native Linux games?</summary>
  <p></p>
    No — the GOG extension is designed for Windows games running through Proton. Native Linux games from GOG are not currently supported, as Junk Store relies on Proton’s compatibility layer for game execution and integration.
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
