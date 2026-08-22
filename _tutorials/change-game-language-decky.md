---
layout: junkstore-page
title: "How to Change Game Language in the Decky Plugin"
description: "Change the language an Epic game runs in on Steam Deck using the Junk Store Decky plugin. Set LANG and HOST_LC_ALL in Additional Variables, with a language code table."
excerpt: "Set language environment variables per game in the Decky plugin's Additional Variables field"
permalink: /tutorials/change-game-language-decky/
date: 2026-01-28
redirect_from:
  - /posts/m-how-to-change-global-language-settings-for-epic/
categories: ["Decky Plugin"]
tags: ["language", "game-settings", "decky-plugin"]
difficulty: "Intermediate"
category: decky
section: configuration
order: 11
card_title: 'Change Game Language (Decky)'
card_blurb: 'Set language environment variables per game in the Decky plugin'
help_discord_channel: '#decky-plugin-support'
help_discord_url: 'https://discord.gg/q7eEPAcwsW'
---
{% include content-schema.html type="tutorial" id="change-game-language-decky" %}

<p class="text-center">The Decky plugin has no language menu, so you tell the game which language to use with environment variables.</p>

<p><em>Using Junk Store Pro? It has a proper language picker per game. See <a href="/tutorials/change-game-language/">changing game language in Pro</a> instead.</em></p>

<div class="js-callout js-callout--warning">
  <strong>This only works for games that already have your language built in.</strong> Environment variables don't add language files, they change what the system reports its language as, and the game picks from what it already has. Check the game's store page on the Epic website to confirm it supports the language before you start.
</div>

<p><strong>It also only works on games that follow the system.</strong> A game with its own language menu ignores what the system says and uses whatever you last chose in there, so change it in the game's own options. These variables are for the games that offer you nothing.</p>

<div class="install-guide">
<ol>

<li>
<strong>Open the game's Settings menu</strong>
<p>From the game's page in Junk Store, open the <strong>cog</strong>.</p>
<img src="/assets/images/tutorials/change-language-decky/cog.webp" alt="A game's page in the Junk Store Decky plugin with the settings cog highlighted" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Select PROTON</strong>
<img src="/assets/images/tutorials/change-language-decky/proton-config.webp" alt="The configuration menu with PROTON selected" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Set the dropdown to All</strong>
<p>That reveals the advanced options, which are hidden by default.</p>
<img src="/assets/images/tutorials/change-language-decky/proton-all.webp" alt="The Proton settings screen with the dropdown changed to All to reveal advanced options" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Enter both variables under ADVANCED</strong>
<p>Open <strong>ADVANCED</strong>, find <strong>Additional Variables</strong>, and enter both lines. This example sets Spanish:</p>
<pre><code>export HOST_LC_ALL=es_ES.UTF-8
export LANG=es_ES.UTF-8</code></pre>
<p>Swap <code>es_ES</code> for the code you want from the table below. <strong>Both lines are needed</strong>, one on its own often isn't enough: LANG offers the game a default, while HOST_LC_ALL overrides the individual locale settings outright.</p>

<div class="js-callout js-callout--warning">
  <strong>Keep the word <code>export</code> on the front of each line.</strong> What you type is run as a line of script just before the game starts, and a plain <code>LANG=es_ES.UTF-8</code> sets the value only for that script, not for the game that follows. It saves without complaint and does nothing, and nothing warns you. Advice copied from a forum post often leaves <code>export</code> off, because on a command line it isn't needed.
</div>

<p>The field shows only the start of what's in it, so a truncated <code>export HOST_</code> is normal.</p>
<img src="/assets/images/tutorials/change-language-decky/addvars.webp" alt="The ADVANCED section of the Proton settings with Additional Variables highlighted, its field showing the start of the entry as export HOST_, above Additional Arguments, Custom Mesa ICD and Ignore EGS Arguments in launcher" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Save</strong>
<p>Press <kbd>X</kbd> to save. The game will launch in that language from then on, and stays that way until you change it, so it's a once-per-game job.</p>
</li>

</ol>
</div>

<hr>

<h3>Language codes</h3>

<p>Add <code>.UTF-8</code> to whichever code you pick, the way the Spanish example does: <code>es_ES</code> becomes <code>es_ES.UTF-8</code>.</p>

<table>
<thead><tr><th>Language</th><th>Code</th></tr></thead>
<tbody>
<tr><td>English</td><td><code>en_US</code></td></tr>
<tr><td>German</td><td><code>de_DE</code></td></tr>
<tr><td>French</td><td><code>fr_FR</code></td></tr>
<tr><td>Spanish</td><td><code>es_ES</code></td></tr>
<tr><td>Italian</td><td><code>it_IT</code></td></tr>
<tr><td>Japanese</td><td><code>ja_JP</code></td></tr>
<tr><td>Korean</td><td><code>ko_KR</code></td></tr>
<tr><td>Chinese (Simplified)</td><td><code>zh_CN</code></td></tr>
<tr><td>Chinese (Traditional)</td><td><code>zh_TW</code></td></tr>
<tr><td>Portuguese (Brazil)</td><td><code>pt_BR</code></td></tr>
<tr><td>Polish</td><td><code>pl_PL</code></td></tr>
<tr><td>Russian</td><td><code>ru_RU</code></td></tr>
</tbody>
</table>

<hr>

<h3>If a game misbehaves afterwards</h3>

<p><strong>Empty the field first.</strong> A game handed a locale it didn't expect can show the wrong characters, lose its fonts, lay its menus out badly, or fail to start at all. Empty means "don't interfere", which is not the same as English.</p>
