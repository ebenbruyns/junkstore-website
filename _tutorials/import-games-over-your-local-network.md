---
title: "How to Import Games Over Your Local Network in Junk Store Pro"
description: "Import games over your local network in Junk Store Pro on Steam Deck. Copy installed files from another device instead of downloading again. Does not bypass DRM."
excerpt: "Copy a game's files from another device over your local network instead of downloading it again"
layout: junkstore-page
permalink: /tutorials/import-games-over-your-local-network/
categories: [Pro Version]
difficulty: "Beginner"
category: pro
section: configuration
order: 1
card_title: 'Import Games Over the Network'
card_blurb: 'Copy a game from another device over your local network instead of re-downloading'
---
{% include content-schema.html type="tutorial" id="import-games-over-your-local-network" %}

<p class="text-center">Already have a game installed on one Steam Deck? Junk Store Pro can copy those files straight across your local network to another device, so you don't have to download the whole thing again. Handy when your connection is slow or capped, or when you're setting up the same game on more than one device.</p>

<div class="js-callout js-callout--warning">
<strong>Important:</strong> This does not get around DRM. It copies game files you already have from another source on your local network, then runs the normal install. You still need to own the games to play them.
</div>

<hr>

<h3>Before You Start</h3>

<div class="js-callout js-callout--tip">
<p>You'll need:</p>
<ul>
<li><strong>Junk Store Pro</strong> on both devices: the one that already has the game, and the one you're importing to.</li>
<li>Both devices on the <strong>same local network</strong>.</li>
<li>An <strong>SSH key</strong> set up on your devices. How you create and set up SSH keys is up to you to research, since it depends on your setup, so we don't cover that here. Once it's sorted, you can pair your devices in Junk Store with the steps below.</li>
<li>To <strong>own the game</strong> on the account you're installing it under.</li>
</ul>
</div>

<hr>

<h3>Pair Your Devices (First Time Only)</h3>

<p>Before you can import anything, the two devices need to know and trust each other. You only have to do this once per pair.</p>

<div class="install-guide">
<ol>

<li>
<strong>Open the File Manager</strong>
<p>On the device you want to import <em>to</em>, open the Junk Store <strong>File Manager</strong>. Your network devices appear in the sidebar on the left.</p>
</li>

<li>
<strong>Start the Key Exchange</strong>
<p>Find the device you want to pair with in the sidebar and press <kbd>A</kbd> on any of it's shortcuts. Junk Store sends a key exchange request and shows a verification code while it waits for the other device to accept.</p>
<img src="/assets/images/tutorials/network-import/device-1-pairing.webp" alt="Junk Store Pro sending a key exchange request with a verification code" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Accept on the Other Device</strong>
<p>On the other device, a <strong>Key Exchange Request</strong> pops up. Check the verification code matches the one on your first device, then choose <strong>Accept</strong>.</p>
<img src="/assets/images/tutorials/network-import/device-2-pairing.webp" alt="Key exchange request prompt with Accept and Reject options" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<div class="js-callout js-callout--tip">
<strong>Tip:</strong> The two codes must match. That's your check that you're pairing with the right device. Once you accept, the devices are linked and can share games.
</div>

<hr>

<h3>Import a Game Over the Network</h3>

<div class="install-guide">
<ol>

<li>
<strong>Press X to Import</strong>
<p>Open the game's page. Look at the button bar along the bottom: instead of pressing <kbd>A</kbd> to install, press <kbd>X</kbd> to <strong>Import</strong>.</p>
<img src="/assets/images/tutorials/network-import/import-prompt.webp" alt="Game page showing the X to Import prompt on the install bar" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Pick a Source</strong>
<p>The Import window opens. Under <strong>Available on network</strong> you'll see any paired devices that have the game installed and available to import. Select the one you want to pull from. If you pick a device you haven't paired with yet, Junk Store will prompt you to do the key exchange first (the same pairing steps as above), then carry on with the import.</p>
<img src="/assets/images/tutorials/network-import/select-device.webp" alt="Import window listing devices available on the network" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Junk Store Queues the Import</strong>
<p>Junk Store lines up the transfer and gets it started.</p>
<img src="/assets/images/tutorials/network-import/linking-devices.webp" alt="Import window queuing the transfer" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Wait for the Copy to Finish</strong>
<p>The files copy across your network, then the normal install runs. You can watch the progress and cancel if you need to. Once it's done, the game is ready to play.</p>
<img src="/assets/images/tutorials/network-import/importing-file.webp" alt="Game files copying across the network with a progress bar" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<div class="js-callout js-callout--tip">
<strong>Note:</strong> Importing only copies the game and its related files. It won't bring your saves across. If you want your progress from the other device, you'll need to move your save files over yourself, using the File Manager or whatever method you prefer.
</div>

<hr>

<h3>Import From a Folder Instead</h3>

<p>You don't have to scan the network every time. In the same Import window, choose <strong>Browse for game directory...</strong> to point Junk Store at a folder yourself. That works for a folder on this device or on any network machine listed in the sidebar, handy if the files are somewhere Junk Store hasn't picked up automatically.</p>

<div class="js-callout js-callout--info">
<strong>Heads up:</strong> Networking is still a young feature, so there may be the odd rough edge. If something doesn't behave, let us know on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> and we'll take a look.
</div>

<!--
  SUGGESTED ADDITIONS (worth considering, not yet written):

  - WHAT COUNTS AS A "SOURCE": clarify that the source device also needs Junk
    Store Pro running and to be powered on / awake during the import.
  - WHICH STOREFRONTS: note whether this works for Epic / GOG / Amazon / itch
    games equally, or if there are gotchas per store.
  - SPEED EXPECTATIONS: a line on wired vs wifi, and that a LAN copy is usually
    much faster than re-downloading.
  - TROUBLESHOOTING mini-list: "device not showing up" (same network? firewall?),
    "codes don't match / pairing rejected", "game not found on source".
  - VERIFY IT WORKED: how to confirm the game launches normally after an import.
-->
