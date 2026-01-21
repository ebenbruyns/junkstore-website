---
layout: post
title: "New Feature: LSFG Frame Generation Now Built Into Junk Store"
date: 2026-01-21 17:00:00 +1300
categories: [Features, Feature Release]
tags: [junk-store, steam-deck, features]
slug: "lsfg-frame-generation-built-in"
excerpt: "LSFG-VK (Lossless Scaling Frame Generation) is now built into Junk Store with easy toggles - no manual launch arguments needed."
image: /assets/images/LSFG-VK/lsfg-blog-card.webp
header:
  teaser: /assets/images/LSFG-VK/lsfg-blog-card.webp
read_time: "4 min read"
toc: true
---

**Big News:** LSFG-VK (Lossless Scaling Frame Generation) is now built into Junk Store! We noticed some folks were running into trouble getting it set up manually, so we figured we'd just build it in and save everyone the hassle. Simple toggles, no launch arguments needed.

*This feature is now supported on:*
- **Decky Plugin:** v1.1.13 (Main Decky store)
- **GOG Extension:** v0.1.11 (Junk Store Portal)
- **Junk Store 2.0 (without Decky):** v2.5.0.0-beta-20260111-140530 (Beta channel)
- **Junk Store 2.0 (with Decky):** v2.4.1.0-test-20260108-100341 (Test channel)

<h2 style="text-align: left !important; margin-left: 0;">Requirements</h2>

Before you start, you'll need:

1. **Lossless Scaling** - Purchase and install from Steam (required, not free). Make sure you select **Linux Beta** from the app's properties.
2. **Install lsfg-vk** - Install from the <a href="https://github.com/ebenbruyns/lsfg-vk-deck-installer" target="_blank" rel="noopener">lsfg-vk-deck-installer</a> repo by running the following command in Desktop Mode (Konsole):

```
curl -fsSL https://raw.githubusercontent.com/ebenbruyns/lsfg-vk-deck-installer/refs/heads/main/install.sh | bash
```

Once lsfg-vk is installed, Junk Store will automatically detect and use it.

<h2 style="text-align: left !important; margin-left: 0;">How to Enable LSFG in Junk Store</h2>

1. From the game page in Junk Store, click the **Settings** menu
2. Select **Proton Configs**
3. Set dropdown to **All**
4. Find the **LSFG** section
5. **Enable** LSFG-VK and tweak the settings if required.

**Important:** Press **X** to save your changes!

That's it! No manual launch arguments needed. Junk Store handles everything for you.

**Note:** If LSFG doesn't work on the first try, you may need to experiment with different Proton versions. Some games work better with specific GE-Proton releases.

<h2 style="text-align: left !important; margin-left: 0;">No Separate Plugin Needed</h2>

If you're using Junk Store, you **don't need** to install the separate Decky LSFG-VK plugin. Our built-in integration handles the configuration automatically. Just install LSFG-VK dependency using the command above and you're good to go!

Hope this makes frame generation easier for everyone!

<h2 style="text-align: left !important; margin-left: 0;">We Need Your Feedback</h2>

We don't personally use LSFG, so we'd love to hear from those of you who do. Are the default settings correct? Are we missing any configuration options? Your feedback will help us improve this feature for everyone.

Let us know via:
- **GitHub:** <a href="https://github.com/ebenbruyns/lsfg-vk-deck-installer/issues" target="_blank" rel="noopener">Open an issue</a> on the lsfg-vk-deck-installer repo
- **Discord:** Drop your feedback in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a>

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Game Mode native - the way handheld gaming should be</p>
</div>

---

*Have questions about this feature? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

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
