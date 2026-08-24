---
layout: junkstore-page
title: "How to Change Game Language in Junk Store Pro"
description: "Change the language an Epic or GOG game runs in from Game Mode on Steam Deck. Pick a language per game in its Installation settings, no Desktop Mode needed."
excerpt: "Pick a language per game in its Installation settings, and what to do when a game offers none"
permalink: /tutorials/change-game-language/
date: 2026-08-16
categories: [Pro Version]
tags: ["language", "game-settings", "pro-version"]
difficulty: "Beginner"
category: pro
section: configuration
order: 4
card_title: 'Change Game Language'
card_blurb: 'Pick a language per game in its Installation settings'
manual_links:
  - text: "Per-game installation settings"
    url: "/docs/user/store-settings-reference/#per-game-installation-settings"
    note: "What each section of the Installation panel is for"
  - text: "Setting a language"
    url: "/docs/user/store-settings-reference/#setting-a-language"
    note: "Why the store-wide setting is the risky one"
  - text: "LANG and HOST_LC_ALL"
    url: "/docs/user/game-settings/#lang-and-host_lc_all"
    note: "What the two locale variables actually do"
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
help_links:
  - text: "My game won't launch"
    url: "/help/troubleshooting/#game-wont-launch"
    note: "If a game stops working after a language change"
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "All Pro version issues"
---
{% include content-schema.html type="tutorial" id="change-game-language" %}

<p class="text-center">For Epic and GOG, language is an install choice: you pick which language version to fetch, per game, from Game Mode.</p>

<p><em>On the Decky plugin? It has no language menu, so it's done with environment variables. See <a href="/tutorials/change-game-language-decky/">changing game language in the Decky plugin</a>.</em></p>

<div class="js-callout js-callout--tip">
  <strong>Work down this page, not up.</strong> Start with the game's Installation settings. Only reach for the environment variables further down if the game offers no language of its own, and leave the store-wide setting alone unless your whole library is in one language.
</div>

<hr>

<h3>The normal way: per game, in Installation settings</h3>

<div class="install-guide">
<ol>

<li>
<strong>Open the game's Installation settings</strong>
<p>On the game's page, open the <strong>cog</strong>, then choose <strong><a href="/docs/user/store-settings-reference/#per-game-installation-settings">Installation</a></strong>.</p>
<img src="/assets/images/tutorials/change-language/game-settings-menu.webp" alt="A game's Configuration menu in Junk Store Pro, listing Game configs, Proton, Installation, Game Details and Images" width="1000" height="625" loading="lazy" />
</li>

<li>
<strong>Open the Languages section</strong>
<p>The panel is built for that game by asking the store what it offers, so you'll see only the sections that apply. <strong>Languages</strong> lists the versions available beyond what's already installed.</p>
</li>

<li>
<strong>Pick your language, then save</strong>
<p>The two stores hand you a different control, so it's worth knowing which one you're looking for.</p>
<p><strong>GOG gives you a dropdown</strong> and you pick one language. English is the default, and the help pane on the right lists what this particular game offers.</p>
<img src="/assets/images/tutorials/change-language/install-languages-gog.webp" alt="The Languages section of a GOG game's Installation settings, with a Platform dropdown set to Windows above a Language dropdown set to English, and the help pane listing the game's available languages with their codes: English en-US, Czech cs-CZ, French fr-FR, German de-DE, Italian it-IT, Polish pl-PL, Russian ru-RU and Spanish es-ES" width="1280" height="800" loading="lazy" />
<p><strong>Epic gives you tickboxes</strong>, none of them ticked, and you can choose more than one. Epic calls these install tags, and on some games they cover more than language.</p>
<img src="/assets/images/tutorials/change-language/install-languages.webp" alt="Epic's Languages section in a game's Installation settings, listing spanish, italian, german and french as separate switches, all of them off" width="1000" height="625" loading="lazy" />
<p>Press <kbd>X</kbd> to save the config.</p>
</li>

<li>
<strong>If the game is already installed, verify or repair it</strong>
<div class="js-callout js-callout--warning">
  <strong>The panel doesn't move any files on its own.</strong> Choosing a language records that you want it, it doesn't fetch it. Run <strong>Verify game</strong> or <strong>Repair game</strong> from <a href="/docs/user/game-page/">the game's own menu</a> to pull the language files down. Skip this and nothing appears to happen, which is the usual reason people report that changing a language did nothing.
</div>
<p>Expect it to take a while on a large game, since it checks what's on disk before working out what's missing. On a game you haven't installed yet there's nothing else to do, as the download picks up your choice.</p>
<p><strong>That's the reason to open this before installing something large.</strong> Nothing asks you about any of it by default, so you get English and every DLC you own, which can be a good deal more than you wanted. Setting it beforehand costs nothing. Setting it afterwards costs you a verify or repair.</p>
</li>

</ol>
</div>

<hr>

<h3>If the game offers no language option</h3>

<p>Some older games have no language setting of their own and simply run in whatever the system reports. <strong><a href="/docs/user/game-settings/#lang-and-host_lc_all">LANG and HOST_LC_ALL</a></strong> change what the system reports, which is the only lever those games respond to. They sit on games launched through Proton, so if you're looking at something running under Linux, DOSBox or RetroArch, they won't be there.</p>

<div class="js-callout js-callout--warning">
  <strong>This is a last resort, not the normal way to choose a language.</strong> A game handed a locale it didn't expect can show the wrong characters, lose its fonts, lay its menus out badly, or fail to start at all. Check the game's Installation settings first, and only come here if there's no language listed.
</div>

<div class="install-guide">
<ol>

<li>
<strong>Open the game's configs</strong>
<p>On the game's page, open the <strong>cog</strong>, then <strong>Game configs</strong>, and set the dropdown to <strong>All</strong> to reveal everything.</p>
<img src="/assets/images/tutorials/change-language/GameConfi.webp" alt="A game's configuration screen in Junk Store with the dropdown set to show all available options" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Set LANG under Environment</strong>
<p>Open the <strong>ENVIRONMENT</strong> section, select <strong>LANG</strong>, and choose your language. <strong>HOST_LC_ALL</strong> sits just above it and does the same job more forcefully: LANG offers the game a default, HOST_LC_ALL overrides the individual locale settings outright. Try LANG first and only reach for the other one if the game ignores it.</p>
<img src="/assets/images/tutorials/change-language/LangDropdown.webp" alt="The Environment section expanded with the LANG setting selected" width="1280" height="800" loading="lazy" />
<img src="/assets/images/tutorials/change-language/LangSelection.webp" alt="The language list open, showing the available locale options to pick from" width="440" height="642" loading="lazy" />
</li>

<li>
<strong>Save</strong>
<p>Press <kbd>X</kbd> to save. Because you set it here rather than on the store, it affects this one game and is easy to undo.</p>
</li>

</ol>
</div>

<p><strong>If the game misbehaves afterwards, empty the field first.</strong> That's the most likely cause, and empty means "don't interfere", not "English".</p>

<hr>

<h3>The store-wide setting, and why to leave it alone</h3>

<p>The same two settings exist on <a href="/docs/user/store-settings-reference/#setting-a-language">the store's own cog</a>, where they apply to <strong>every game in that store</strong>.</p>

<img src="/assets/images/tutorials/change-language/store-language-list.webp" alt="The store-wide language list, scrolled to show English, German, French, Italian, Spanish - Spain, Portuguese - Brazil, Japanese, Chinese Simplified and Korean, with more below" width="440" height="642" loading="lazy" />

<div class="js-callout js-callout--warning">
  <strong>One game's fix becomes every game's risk.</strong> Plenty of games aren't set up for it, and a tab-wide change can break ones that were working perfectly well. Set it on the single game that needs it instead.
</div>

<p>The exception is a library that's entirely in one language, which is unusual. Otherwise, work per game.</p>
