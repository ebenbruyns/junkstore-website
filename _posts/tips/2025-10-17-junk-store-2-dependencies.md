---
layout: post
title: "How to Install Game Dependencies Without ProtonTricks"
date: 2025-10-17
categories: [Tip of the Week, 2.0 Standalone]
tags: [Junk Store, Steam Deck, Epic Games, GOG Games, Amazon Games, Game Dependencies, Visual C++, .NET Framework]
slug: "install-dependencies-junk-store-2"
excerpt: "Skip the complex ProtonTricks setup! Junk Store 2.0 makes installing Visual C++, .NET Framework, and other Windows dependencies as simple as clicking a button."
image: /assets/images/blog/251017-deps-hero.webp
header:
  teaser: /assets/images/blog/251017-deps-thumb.webp
read_time: "2 min read"
toc: true
---

**Applies to:**
<span class="tutorial-tag standalone-tag">2.0 Standalone</span>

**Quick Tip:** Junk Store 2.0 includes built-in dependency management directly in Game Mode menus.

## The Problem

Your game crashes on launch with missing Visual C++ or DirectX errors. Fixing this usually requires ProtonTricks, Winetricks, or manually downloading and installing dependencies yourself.

## The Solution

1. **Navigate to the game** inside Junk Store and click the **⚙️ Settings menu**

   ![Click the settings cog icon](/assets/images/blog/251017-deps-step1.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Click the ⚙️ Settings menu on the game page</p>

2. **Select "Installation"** from the dropdown menu

   ![Select Installation tab](/assets/images/blog/251017-deps-step2.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Choose Installation from the settings menu</p>

3. **Set dropdown to "Expert" mode** (if you don't see a Dependencies section)

4. **Click "Dependencies"**

   ![Click Dependencies section](/assets/images/blog/251017-deps-step3.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Open the Dependencies section in Expert mode</p>

5. **Toggle needed dependencies on** (blue = will install)

   ![Toggle dependencies on](/assets/images/blog/251017-deps-step4.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Toggle the dependencies you need - blue means it will install</p>

6. **Press X to save changes**

7. **Launch the game** - Dependencies will automatically install on first launch

<div class="tip-callout">
  <strong>💡 Important:</strong> Your dependency configuration is saved to the game's settings and will persist even after uninstalling - no need to reconfigure when you reinstall.
</div>

## Why This Matters

Missing dependencies is a common reason some games fail on Steam Deck. Junk Store 2.0 handles installation directly in Game Mode without external tools.

## Pro Tips

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> Junk Store automatically toggles on Visual C++ Redistributable 2022 (x64) for Epic and Amazon Games.
</div>

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> Check our tested games database before launching new games - we list required dependencies for each tested title, so you can install them proactively.
</div>

---

Cheers,

The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready to skip the Desktop Mode hassle?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Stop fighting with ProtonTricks - install dependencies with one click</p>
</div>

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

<style>
/* Version tags */
.tutorial-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 8px;
}

.decky-tag {
  background: #2196f3;
  color: white;
}

.standalone-tag {
  background: #e67300;
  color: white;
}

.both-tag {
  background: #4caf50;
  color: white;
}

/* Callout boxes */
.tip-callout {
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4caf50;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

.warning-callout {
  background: rgba(255, 152, 0, 0.1);
  border-left: 4px solid #ff9800;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

/* Community Buttons */
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

/* CTA Box */
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