---
layout: junkstore-post
title: "Import Games Over Your Local Network with Junk Store Pro"
date: 2026-07-03
published: true
categories: [Tip of the Week, Pro Version]
tags: [junk-store, steam-deck, tips]
slug: "network-game-imports-tip"
description: "Copy installed games between devices over your local network with Junk Store Pro on Steam Deck. Pair once, press X to Import, skip the re-download."
excerpt: "Already have a game installed on another device? Junk Store Pro can copy it straight across your local network, no re-downloading required."
image: /assets/images/blog/tips/network-import/network-import-hero.webp
header:
  teaser: /assets/images/blog/tips/network-import/network-import-thumb.webp
toc: true
---

**This Week's Pro Tip:** Already have a game installed on one device? Junk Store Pro can copy those files straight across your local network to another device, so you don't have to download the whole thing again. Handy when your connection is slow or capped.

*This is a <a href="/portal-redirect/">Junk Store Pro</a> feature, and both devices need Pro installed.*

> **Heads up:** This doesn't get around DRM. It copies game files you already have from another source on your local network, then runs the normal install. You still need to own the games to play them.

<h2 style="text-align: left !important; margin-left: 0;">What You'll Need</h2>

- **Junk Store Pro** on both devices
- Both devices on the **same local network**
- An **SSH key** set up on your devices (how you set that up is your call, it depends on your setup)
- To **own the game** on the account you're installing it under

<h2 style="text-align: left !important; margin-left: 0;">Pair Your Devices (First Time Only)</h2>

Open the Junk Store **File Manager** on the device you're importing to, find the other device in the sidebar, and press **A** on any of it's shortcuts. A verification code pops up on both devices. Check the codes match, then choose **Accept** on the other device. Done, they're linked from now on.

<img src="/assets/images/tutorials/network-import/device-2-pairing.webp" alt="Key exchange request prompt with Accept and Reject options">
<em>Check the codes match, then Accept</em>

<h2 style="text-align: left !important; margin-left: 0;">Import a Game</h2>

<ol>
<li>Open the game's page and press <strong>X</strong> to <strong>Import</strong> instead of <strong>A</strong> to install

<img src="/assets/images/tutorials/network-import/import-prompt.webp" alt="Game page showing the X to Import prompt on the install bar">
<em>Press X on the game page to import instead of installing</em></li>

<li>Under <strong>Available on network</strong>, pick the device you want to import from

<img src="/assets/images/tutorials/network-import/select-device.webp" alt="Import window listing devices available on the network">
<em>Pick the device you want to pull the game from</em></li>

<li>Wait for the copy to finish. The normal install runs afterwards and the game is ready to play.</li>
</ol>

<div class="js-callout js-callout--warning">
<strong>Note:</strong> This copies the game and its related files only. Your saves won't come across, so move those over yourself using the File Manager or whatever method you prefer.
</div>

**Want more detail?** Check out the [full network import tutorial](/tutorials/import-games-over-your-local-network/) for step-by-step screenshots, pairing tips, and importing from a folder instead.

Networking is still a young feature, so there may be the odd rough edge. If something doesn't behave, open a ticket right in the <a href="https://portal.junkstore.xyz/support" target="_blank" rel="noopener" class="community-btn support-btn"><i class="fas fa-headset" style="margin-right: 6px;"></i>Support Portal</a> and we'll take a look.

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a>, <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a> or <a href="https://lemmy.world/c/junkstore4deck" target="_blank" rel="noopener" class="community-btn lemmy-btn"><span class="lemmy-icon" style="margin-right: 6px;"></span>Lemmy</a>!*

Cheers,<br>
Annie & Eben | The Junk Store Team
