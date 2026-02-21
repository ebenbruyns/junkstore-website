---
layout: post
title: "Tip of the Week: Easily Change Proton Versions in Junk Store"
date: 2026-02-21 12:45:00 +1300
categories: [Tip of the Week, Universal]
tags: [junk-store, steam-deck, tips, proton, compatibility]
slug: "change-proton-version"
excerpt: "Change Proton versions directly in Game Mode using Steam's built-in compatibility menu."
image: /assets/images/blog/proton-tip/proton-tip-hero.webp
header:
  teaser: /assets/images/blog/proton-tip/proton-tip-thumb.webp
read_time: "2 min read"
toc: true
---

**This Week's Pro Tip:** If a game shows a black screen, won't launch, or crashes immediately, try changing the Proton version. It's often the fix.

*Note: This works on both the free Decky plugin and Junk Store 2.0.*

<h2 style="text-align: left !important; margin-left: 0;">The Problem</h2>

We've all been there: you install a game, hit play, and... nothing. After a bit of digging, someone suggests trying a different Proton version.

Junk Store makes this easy. You can change the compatibility tool (Proton, GE-Proton, Proton Experimental) directly in Game Mode using Steam's built-in compatibility menu. No manually entering environment variables or launch arguments, and no separate compatibility tool management. As with other features, Junk Store leverages what's already there inside Steam.

You'll still need to download your Proton versions using a tool like ProtonUp-Qt or Wine Cellar. But once downloaded, it's just a matter of navigating to the menu and selecting the version you want.

<h2 style="text-align: left !important; margin-left: 0;">The Quick Fix</h2>

<ol style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Open your game in <strong>Junk Store</strong></li>
<li>Press <strong>Y</strong> to go to Steam's game page</li>
<li>Select the <strong>gear/cog icon</strong></li>
<li>Choose <strong>Properties</strong></li>
</ol>

![Select Properties from the gear menu](/assets/images/blog/proton-tip/propertiesY.webp){: .align-center loading="lazy"}

<ol start="5" style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Go to <strong>Compatibility</strong> tab</li>
<li>Select a different <strong>Proton version</strong> from the dropdown</li>
</ol>

![Select your Proton version from the dropdown](/assets/images/blog/proton-tip/protonversions.webp){: .align-center loading="lazy"}

That's it. The setting saves automatically for that game.

<h2 style="text-align: left !important; margin-left: 0;">Alternative: From Steam Library</h2>

You can also change Proton directly from the Non-Steam tab in your Steam Library:

<ol style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Find your game in <strong>Steam Library</strong> (Non-Steam tab)</li>
<li>Press the <strong>Start/Options button</strong> (hamburger menu ☰)</li>
<li>Select <strong>Properties</strong></li>
</ol>

![Access Properties from Steam Library](/assets/images/blog/proton-tip/steamlibproperties.webp){: .align-center loading="lazy"}

<ol start="4" style="padding-left: 1.2em; margin-left: 0; text-align: left;">
<li>Go to <strong>Compatibility</strong> tab</li>
<li>Select a different <strong>Proton version</strong> from the dropdown</li>
</ol>

Same result, just a different way to get there.

<a href="/tutorials/proton-versions" class="inline-games-cta-button" style="display: inline-block; margin: 20px 0;">Full Step-by-Step Guide with Screenshots →</a>

<h2 style="text-align: left !important; margin-left: 0;">Which Proton Version?</h2>

<div class="tip-callout">
  <strong>🎯 GE-Proton versions</strong> are generally recommended over standard Steam Proton. They include extra fixes and patches for non-Steam games.
</div>

<div class="tip-callout">
  <strong>⚠️ Newer isn't always better.</strong> We find a stable GE-Proton version and stick with it. Test before upgrading.
</div>

<div class="tip-callout">
  <strong>💡 Keep 2-3 versions installed</strong> so you can switch if one doesn't work for a particular game.
</div>

<h2 style="text-align: left !important; margin-left: 0;">Not Sure Which Version Works?</h2>

Check our [Games Tested](/tested-games/) page or [ProtonDB.com](https://www.protondb.com/) to see what others are using for your specific game.

Hope this helps get your games running! Questions? Our team is always ready to help.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Want hassle-free Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Game Mode native — no Desktop Mode switching</p>
</div>

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

<style>
/* Callout boxes */
.tip-callout {
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4caf50;
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

.inline-games-cta-button {
  background: #0056b3;
  color: #fff !important;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.inline-games-cta-button:hover {
  background: #004494;
  color: #fff !important;
  text-decoration: none;
}
</style>
