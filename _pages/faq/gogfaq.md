---
layout: splash
title: "GOG Extension FAQ"
permalink: /faq/gogfaq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---
<div class="spacer mt-4"></div>

  This FAQ addresses common questions about using GOG titles with Junk Store on the Steam Deck.

<section class="gog-extension">
  <h2>Installing the GOG Extension</h2>
  <p>
    The GOG extension is available as a supporter benefit. You can purchase it via Ko-fi or Patreon using the button below. Once completed, you’ll receive download access and emailed instructions on how to install it and link it to your Junk Store plugin.
  </p>

  <p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
    <strong>Note:</strong> The GOG extension is currently in <strong>maintenance-only</strong> mode. This means we’ll continue fixing bugs and ensuring compatibility, but we’re not actively adding new features. Continued support depends on user interest and purchases.
  </p>

  <a href="https://ko-fi.com/junkstore" class="button" style="margin-right: 10px;" target="_blank" rel="noopener noreferrer">Ko-fi</a>
  <a href="https://www.patreon.com/junkstore" class="button" target="_blank" rel="noopener noreferrer">Patreon</a>
</section>

<!-- FAQ Entries -->
<details class="faq-box">
  <summary>Where can I find the GOG extension?</summary>
  <p>
    It is only available to our Ko-fi & Patreon supporters. You can either subscribe as a monthly supporter, or you can purchase it as a one off through 
    <a href="https://ko-fi.com/junkstore/shop" target="_blank">Ko-fi</a> or 
    <a href="https://www.patreon.com/junkstore/shop" target="_blank">Patreon</a>. 
    Once you have it, you have it. We can't take away Gog functionality/integration with the Junk Store plugin. All funds go back into the enhancement and development of Junk Store.
  </p>
</details>

<details class="faq-box">
  <summary>Why isn't GOG free to use?</summary>
  <p>
    GOG support is available to paid supporters, and while we'd love to offer it for free, there's a lot of behind-the-scenes work and resources involved in creating and maintaining Junk Store. We appreciate your understanding and support as we continue to improve and expand Junk Store. All funds go back into the enhancement and development of Junk Store.
  </p>
</details>

<details class="faq-box">
  <summary>Does Junk Store automatically install DLC content too?</summary>
  <p>
    Yes, at the moment it will automatically install DLC content by default.
  </p>
</details>

<details class="faq-box">
  <summary>Does Junk Store support GOG cloud saves?</summary>
   <p>
    This has not yet been looked at for implementation at this stage as it isn't a trivial problem to solve. It will require more resources and time than we currently have available.
  </p>
</details>

<details class="faq-box">
  <summary>How do I uninstall and clear game data?</summary>
  <p>
    First on the game screen in Junk Store go to the sliders menu and select <strong>uninstall</strong>.
  </p>
  <p>
    Then depending on where you installed your games, you can find them in either <code>~/Games/gog</code> or <code>&lt;microsd&gt;/Games/gog</code>.
  </p>
  <p>
    Once you have located the games folder you can delete any remaining game files/data.
  </p>
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
  <summary>Does the extension support DOS and ScummVM games?</summary>
  <p>
    DOS games and some ScummVM games are not supported via the GOG extension.
  </p>
</details>

<details class="faq-box">
  <summary>Does the GOG extension support native Linux games?</summary>
  <p>
    No — the GOG extension is designed for Windows games running through Proton. Native Linux games from GOG are not currently supported, as Junk Store relies on Proton’s compatibility layer for game execution and integration.
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
