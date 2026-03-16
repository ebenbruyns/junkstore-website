---
layout: post
title: "Tip of the Week: Run Alternate Executables in Game Mode"
date: 2026-03-17 11:20:00 +1300
categories: [Tip of the Week, Features]
tags: [junk-store, steam-deck, tips]
slug: "run-alternate-exe"
excerpt: "Some games include multiple executables - like expansion packs or alternate launchers. Here's how to switch between them without leaving Game Mode."
image: /assets/images/blog/tips/run-exe/runexeblogcard.webp
header:
  teaser: /assets/images/blog/tips/run-exe/runexeblogcard.webp
read_time: "2 min read"
toc: true
---

**This Week's Pro Tip:** Some games bundle multiple executables like expansion packs, config tools, or alternate launchers. Here's how to run any of them without switching to Desktop Mode.

<h2 style="text-align: left !important; margin-left: 0;">The Problem</h2>

We sometimes get asked how to launch a specific executable for games that ship with multiple, like expansion packs or config tools. *Star Wars: Galactic Battlegrounds Saga* on GOG is a good example. It includes both the base game (`Battlegrounds.exe`) and the *Clone Campaigns* expansion (`CloneCampaigns.exe`). By default, Junk Store launches the main exe, but what if you want to play the expansion?

You can easily select a game executable in game mode via Junk Store. No need to switch to desktop mode, hunt through folders, or dig through game files to find them.

<h2 style="text-align: left !important; margin-left: 0;">How to Run an Alternate Executable</h2>

<ol style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Open the <strong>game page</strong> for your installed game</li>
<li>Click on the <strong>Sliders Menu</strong></li>
</ol>

![Game page with Actions button highlighted](/assets/images/blog/tips/run-exe/starwarsgamepage.webp){: .align-center loading="lazy"}

<ol start="3" style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Select <strong>Run exe in Game folder</strong></li>
</ol>

![Actions menu with Run exe option](/assets/images/blog/tips/run-exe/runexe.webp){: .align-center loading="lazy"}

<ol start="4" style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Choose the executable you want to run from the list.
  <ul> 
   <li><strong>Push A</strong> if you only want to launch it once via that executable.</li>
   <li><strong>Push X to Save</strong> and use that executable for every launch.</li>
  </ul>
</li>
</ol>

That's it! Here's what it looks like in action:

<div class="exe-comparison">
  <div class="exe-pair">
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/clonecampaignsexe.webp" alt="Selecting Clone Campaigns executable" loading="lazy">
      <p class="exe-caption">Select CloneCampaigns.exe...</p>
    </div>
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/clonecampaignssplash.webp" alt="Clone Campaigns expansion running" loading="lazy">
      <p class="exe-caption">...launches the Clone Campaigns expansion</p>
    </div>
  </div>
  <div class="exe-pair">
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/battlegroundsexe.webp" alt="Selecting Battlegrounds executable" loading="lazy">
      <p class="exe-caption">Select Battlegrounds.exe...</p>
    </div>
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/battlegroundssplash.webp" alt="Base game running" loading="lazy">
      <p class="exe-caption">...launches the base game</p>
    </div>
  </div>
</div>

<h2 style="text-align: left !important; margin-left: 0;">Other Uses</h2>

This isn't just for expansion packs. Here are some other use cases:

- **Installing dependencies** like Visual C++ Redistributables (`vcredist_x64.exe`, `vc_redist.x64.exe`) or DirectX (`DXSETUP.exe`) that some older games require
- **Bypassing a game launcher** to run the game directly (see example below)
- **Trying an alternate exe** if the default one doesn't work for your game

### Example: Zenless Zone Zero

Games like *Zenless Zone Zero* use their own launcher (HoYoPlay). If you want to skip the launcher and run the game directly, use **Run exe in Game folder** and select the actual game executable.

<div class="exe-comparison">
  <div class="exe-pair">
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/zzzlauncherexe.webp" alt="Selecting ZenlessZoneZero.exe from the list" loading="lazy">
      <p class="exe-caption">Select the game exe (not the launcher files)</p>
    </div>
    <div class="exe-item">
      <img src="/assets/images/blog/tips/run-exe/zzzgamepage.webp" alt="Zenless Zone Zero running" loading="lazy">
      <p class="exe-caption">...launches directly into the game</p>
    </div>
  </div>
</div>

In this case, you'd select `./games/ZenlessZoneZero Game/ZenlessZoneZero.exe` instead of `HYP.exe` (the launcher) to run the game directly.

<div class="tip-callout">
  <strong>Tip:</strong> Remember you can either use the executable once (<em>Push A to launch once</em>) or you can set it to use an executable for every launch (<em>Push X to save</em>).
</div>

<div class="note-callout">
  <strong>Note:</strong> Want to go back to the original exe? Use <strong>Reset Launch Options</strong> from the same menu. Keep in mind this will also reset your compatibility tool to the system default if you changed it.
</div>

Happy gaming!

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Game Mode native - the way handheld gaming should be</p>
</div>

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

<style>
/* Side-by-side exe comparison */
.exe-comparison {
  margin: 25px 0;
}

.exe-pair {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.exe-item {
  flex: 1;
  text-align: center;
}

.exe-item img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #3a4a5c;
}

.exe-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #cceeff;
  font-style: italic;
}

@media (max-width: 768px) {
  .exe-pair {
    flex-direction: column;
  }
}

/* Callout boxes */
.tip-callout {
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4caf50;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

.note-callout {
  background: rgba(255, 193, 7, 0.15);
  border-left: 4px solid #ffc107;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

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
