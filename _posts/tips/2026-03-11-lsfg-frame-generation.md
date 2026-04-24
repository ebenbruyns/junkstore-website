---
layout: junkstore-post
title: "How to Enable Frame Generation on Steam Deck (Epic, GOG, Amazon & itch)"
date: 2026-03-11 12:00:00 +1300
published: false
categories: [Tip of the Week, Features]
tags: [junk-store, steam-deck, tips]
slug: "lsfg-frame-generation-tip"
description: "Double your FPS with LSFG frame generation on Steam Deck. Built into Junk Store - enable in Game Mode for Epic, GOG & itch games."
excerpt: "Double your FPS with LSFG frame generation - now built directly into Junk Store with simple toggles. No manual launch arguments needed!"
read_time: "3 min read"
toc: true
---

**This Week's Pro Tip:** LSFG (Lossless Scaling Frame Generation) is now built into Junk Store! Enable frame generation with simple toggles instead of fiddling with manual launch arguments.

*This feature is now supported on:*
- **Decky Plugin:** v1.1.13 (Main Decky store)
- **GOG Extension:** v0.1.11 (Junk Store Portal)
- **Junk Store 2.0 (without Decky Loader):** v2.5.0.0-beta-20260111-140530 (Beta channel)
- **Junk Store 2.0 (with Decky Loader):** v2.4.1.0-test-20260108-100341 (Test channel)

**Note:** If you're using Junk Store, you don't need the separate Decky LSFG-VK plugin. Our built-in integration handles everything.

> **Heads up:** LSFG doesn't work with all games and may actually make some perform worse. Your mileage may vary.

<h2 style="text-align: left !important; margin-left: 0;">What You'll Need</h2>

Before you start, you'll need:

1. **Lossless Scaling** - Purchase and install from Steam (required, not free). Make sure you select **Linux Beta** from the app's properties.
2. **GE-Proton** - LSFG typically requires GE-Proton to work properly
3. **Install lsfg-vk** - Required dependency. Grab it from the <a href="https://github.com/ebenbruyns/lsfg-vk-deck-installer" target="_blank" rel="noopener">lsfg-vk-deck-installer repo</a> (Desktop Mode required). Once installed, Junk Store will automatically detect and use it.

<h2 style="text-align: left !important; margin-left: 0;">How to Enable LSFG</h2>

<ol>
<li>From the game page in Junk Store, click the <strong>Settings</strong> menu (cog icon)

<img src="/assets/images/lsfg-vk/Cog.webp" alt="Settings cog icon">
<em>Click the cog icon to access game settings</em></li>

<li>Select <strong>Proton config</strong>

<img src="/assets/images/lsfg-vk/ProtonConfig.webp" alt="Proton config screen">
<em>Select PROTON from the settings menu</em></li>

<li>Set dropdown to <strong>All</strong>

<img src="/assets/images/lsfg-vk/ProtonAll.webp" alt="Proton dropdown set to All">
<em>Set the dropdown to "All" to see advanced options</em></li>

<li>Find the <strong>LSFG</strong> section

<img src="/assets/images/lsfg-vk/LSFG-VKConfigs.webp" alt="LSFG configuration options">
<em>The LSFG settings panel with all available options</em></li>
</ol>

**Important:** Press **X** to save your changes!

That's it! No manual launch arguments needed. Junk Store handles everything for you.

**Note:** If LSFG doesn't work on the first try, you may need to experiment with different Proton versions. Some games work better with specific GE-Proton releases.

**Want more detail?** Check out our [full LSFG tutorial](/tutorials/lsfg-frame-generation/) for step-by-step screenshots and troubleshooting tips.

<h2 style="text-align: left !important; margin-left: 0;">We Need Your Feedback</h2>

We don't personally use LSFG, so we'd love to hear from those of you who do. Are the default settings correct? Are we missing any configuration options?

Let us know via:
- **GitHub:** <a href="https://github.com/ebenbruyns/lsfg-vk-deck-installer/issues" target="_blank" rel="noopener">Open an issue</a> on the lsfg-vk-deck-installer repo
- **Discord:** Drop your feedback in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a>

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
