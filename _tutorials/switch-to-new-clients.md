---
layout: junkstore-page
title: "How to Switch to the New Clients in Junk Store Pro"
description: "Move an existing Junk Store Pro store from the legacy flatpak clients to our own Epic, GOG and Amazon clients. Faster refreshes and multiple accounts per store."
excerpt: "Move a store off the legacy flatpak clients onto ours, for faster refreshes and multiple accounts"
permalink: /tutorials/switch-to-new-clients/
date: 2026-08-18
categories: [Pro Version]
tags: ["clients", "setup", "pro-version"]
difficulty: "Beginner"
category: pro
section: configuration
order: 7
card_title: 'Switch to the New Clients'
card_blurb: 'Move a store off the legacy flatpak clients onto ours'
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
help_links:
  - text: "Games not showing"
    url: "/help/troubleshooting/#games-not-showing"
    note: "If a library looks empty after switching"
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "All Pro version issues"
---
{% include content-schema.html type="tutorial" id="switch-to-new-clients" %}

<p class="text-center">We've built our own clients for Epic, GOG and Amazon, the same way we did for itch. If you're still on the <a href="/docs/user/store-settings-reference/#legacy-clients">legacy flatpak clients</a>, this is how you move across.</p>

<hr>

<h3>Why bother</h3>

<ul>
<li><strong>They're faster than the legacy clients</strong>, most noticeably when refreshing a library.</li>
<li><strong>They're the only way to use more than one account with the same store.</strong></li>
</ul>

<div class="js-callout js-callout--warning">
  <strong>One trade-off.</strong> The experimental cloud saves don't work with the new clients. If you're relying on those, stay where you are.
</div>

<p><strong>Nothing needs reinstalling</strong>, and your games stay where they are. This is a setting, not a migration.</p>

<hr>

<h3>Where the buttons are</h3>

<p>Both live in the row to the right of the search box at the top of each store tab. <strong>Sliders on the left, cog next to it</strong>: sliders are actions that happen, the cog is settings that stay.</p>

<img src="/assets/images/tutorials/installer/tab-buttons-closeup.webp" alt="Close-up of the buttons at the top right of a store tab: the sliders button for actions, then the cog for settings, then the shop and help buttons" width="700" height="135" loading="lazy" />

<hr>

<h3>Switching a store over</h3>

<p><strong>There's one switch per store</strong>, so repeat this on each tab you want moved.</p>

<div class="install-guide">
<ol>

<li>
<strong>Turn Use Legacy Clients off</strong>
<p>Open the <strong>cog</strong> on the store's tab and scroll to the bottom of <strong>Advanced</strong>.</p>
<img src="/assets/images/tutorials/installer/legacy-clients-setting.webp" alt="The bottom of a store's Advanced settings in Junk Store Pro, with Use Legacy Clients highlighted and the side panel explaining it uses legacy flatpak clients instead of the native ones" width="1000" height="625" loading="lazy" />

<p>On, it looks like this. This is the one you don't want:</p>
<img src="/assets/images/tutorials/installer/use-legacy-on.webp" alt="The Use Legacy Clients row with its toggle switched on, shown in blue, and labelled On underneath" width="900" height="161" loading="lazy" />

<p>Tap it so it reads <strong>Off</strong>:</p>
<img src="/assets/images/tutorials/installer/use-legacy-off.webp" alt="The Use Legacy Clients row with its toggle switched off, shown in grey, and labelled Off underneath" width="900" height="169" loading="lazy" />
</li>

<li>
<strong>Clear the store's cache</strong>
<p>Open the <strong>sliders</strong> menu on that tab and choose <strong><a href="/docs/user/games/#clear-all-cache">Clear All Cache</a></strong>. That throws away what the store has remembered locally, including its note of whether you're signed in, so it works it out again from scratch.</p>
<img src="/assets/images/tutorials/installer/store-actions.webp" alt="A store's sliders menu open, showing Refresh Games List, Clear All Cache and Delete Unlinked Games" width="1000" height="840" loading="lazy" />
</li>

<li>
<strong>Refresh the games list</strong>
<p>Open the sliders menu again and choose <strong><a href="/docs/user/games/#refresh-games-list">Refresh Games List</a></strong>.</p>
<p><strong>This takes a while</strong> on a big library, and it isn't stuck. Start it and leave it alone.</p>
</li>

<li>
<strong>Move to another tab and back</strong>
<p>That's what triggers the swap. Until you do it, the store carries on as it was.</p>
</li>

</ol>
</div>

<hr>

<h3>Doing it at install time instead</h3>

<p>If you're setting up a Deck from scratch, you can start on the new clients rather than switching later. Untick <strong>Install flatpaks (dependencies)</strong> at step 1 of the installer, then turn <strong>Use Legacy Clients</strong> off on each tab before you sign in to any store.</p>

<p>None of the cache clearing or refreshing above applies in that case, because there's nothing cached yet and no library to rebuild. <a href="/tutorials/install-junk-store-pro/">Installing with the installer</a> covers it in place.</p>
