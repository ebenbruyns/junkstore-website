---
layout: junkstore-post
title: "How to Install EasyAntiCheat & BattlEye on Steam Deck for Epic Games"
date: 2026-03-04 15:10:00 +1300
categories: [Tip of the Week, Features]
tags: [junk-store, steam-deck, tips]
slug: "anticheat-dependencies-tip"
description: "Install EasyAntiCheat, BattlEye, and game dependencies on Steam Deck in Game Mode. One-click setup with Junk Store."
excerpt: "Easily download Easy Anti-Cheat and BattlEye dependencies with simple toggles in Junk Store. Get games like Fall Guys running on your Steam Deck!"
image: /assets/images/tips/anticheat/dependencies-not-installed.webp
read_time: "3 min read"
toc: true
header:
  teaser: /assets/images/tips/anticheat/dependencies-not-installed.webp
  og_image: /assets/images/tips/anticheat/dependencies-not-installed.webp
cta_disabled: true
---

**This Week's Pro Tip:** Some games require anti-cheat dependencies to run properly. Junk Store makes it easy to download and enable them in game mode.

## The Problem

You've downloaded your game and launched it, only to get stuck at an EAC or BattlEye screen and unable to progress further. Or you get into the game only to be kicked immediately due to anti-cheat not being installed.

There's an easy fix for this in Junk Store, **all in Game Mode**. You can download and install anti-cheat dependencies and then toggle them on without leaving Game Mode. No restart needed either.

Before you ask, no this will not make Fortnite work. The anti-cheat for this game is not Linux-compatible.

<div style="background: rgba(255, 193, 7, 0.1); border-left: 4px solid #ffc107; padding: 1rem 1.5rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>Note:</strong> Even with these dependencies installed, many online multiplayer games with anti-cheat still won't work on Linux due to the anti-cheat systems not supporting the platform. This primarily helps with games that have Linux-compatible anti-cheat or single-player/offline modes.
</div> 

<h2 style="text-align: left !important; margin-left: 0;">How to Download Anti-Cheat Dependencies</h2>

<ol style="padding-left: 1.2em; margin-left: 0;">
<li>In Junk Store, go to <strong>About > System or Dependencies</strong>

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0;">
<div style="flex: 1; min-width: 200px; text-align: center;">
<img src="/assets/images/tips/anticheat/dependencies-menu.webp" alt="Junk Store 2.0 Dependencies menu" style="max-width: 100%; border-radius: 8px;">
<p style="margin-top: 0.5rem; font-size: 0.9rem; color: #ccc;"><strong>Junk Store 2.0</strong></p>
</div>
<div style="flex: 1; min-width: 200px; text-align: center;">
<img src="/assets/images/tips/anticheat/dependencies-menu-decky.webp" alt="Decky Plugin Dependencies menu" style="max-width: 100%; border-radius: 8px;">
<p style="margin-top: 0.5rem; font-size: 0.9rem; color: #ccc;"><strong>Decky Plugin</strong></p>
</div>
</div>
</li>
<li>Scroll down until you see <strong>Install Proton Easy Anti Cheat</strong> and <strong>Install Proton BattlEye Runtime</strong></li>
<li>Select the one(s) you need

<img src="/assets/images/tips/anticheat/dependencies-not-installed.webp" alt="Install Proton Easy Anti Cheat and Install Proton BattlEye Runtime options" style="max-width: 100%; border-radius: 8px; margin: 1rem 0;">
</li>
</ol>

No restart required. If the options are greyed out, they're already installed.

<img src="/assets/images/tips/anticheat/dependencies-installed.webp" alt="Anti-cheat dependencies already installed (greyed out)" style="max-width: 100%; border-radius: 8px; margin: 1rem 0;">

<div style="background: rgba(255, 193, 7, 0.1); border-left: 4px solid #ffc107; padding: 1rem 1.5rem; margin: 1rem 0; border-radius: 0 6px 6px 0;">
<strong>Important:</strong> Install these dependencies to the <strong>internal SSD</strong>. Installing to an external drive or microSD card can cause issues with games that require anti-cheat.
</div>

<h2 style="text-align: left !important; margin-left: 0;">How to Enable Anti-Cheat for a Game</h2>

<ol style="padding-left: 1.2em; margin-left: 0;">
<li>From the game page in Junk Store, click the <strong>Settings</strong> menu (cog icon)</li>

<li>Select <strong>Proton config</strong></li>

<li>Find the <strong>Anti-Cheat</strong> section with toggles for:
<ul style="padding-left: 1.2em; margin-left: 0;">
<li><strong>EAC Runtime</strong></li>
<li><strong>BattlEye Runtime</strong></li>
</ul>
</li>

<li>Enable the toggle for whichever anti-cheat your game uses</li>
</ol>

<img src="/assets/images/tips/anticheat/eac-toggle-enabled.webp" alt="EAC Runtime toggle enabled in Proton config" style="max-width: 100%; border-radius: 8px; margin: 1rem 0;">

**Important:** Press **X** to save your changes!

<h2 style="text-align: left !important; margin-left: 0;">Troubleshooting</h2>

**Game still not working?**
<ul style="padding-left: 1.2em; margin-left: 0;">
<li>Make sure you're using a compatible Proton version (GE-Proton often works best)</li>
<li>Some Epic games also require the EOS overlay to be installed and enabled for the game</li>
<li>Check <a href="https://www.protondb.com/" target="_blank" rel="noopener">ProtonDB</a> or our <a href="/games/tested/">tested games list</a> to see if the game is known to work</li>
</ul>


Cheers,
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/portal-redirect/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Game Mode native - the way handheld gaming should be</p>
</div>

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

<style>
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-left: 8px;
  color: white !important;
}

.discord-btn {
  background: #5865f2;
}

.reddit-btn {
  background: #ff4500;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white !important;
  opacity: 0.9;
}

.inline-blog-cta {
  text-align: center;
  background: #1e2a38;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border: 1px solid #3a4a5c;
}

.inline-blog-cta p {
  margin-bottom: 15px;
  color: #fff;
  font-size: 1.1rem;
}

.inline-blog-cta-button {
  display: inline-block;
  background: #0056b3;
  color: #fff !important;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 10px 0;
  border: 2px solid #0056b3;
}

.inline-blog-cta-button:hover,
.inline-blog-cta-button:visited,
.inline-blog-cta-button:visited:hover {
  background: #004494;
  border-color: #004494;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 86, 179, 0.4);
  text-decoration: none;
}

.inline-cta-subtext {
  margin-top: 8px;
  color: #cceeff;
  font-size: 0.9rem;
  font-style: italic;
}
</style>
