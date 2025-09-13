---
layout: post
title: "How do I add custom launch arguments for Steam Deck non-Steam games"
date: 2025-09-09
categories: [Tip of the Week, Universal, Deep Dive]
tags: [Junk Store, Steam Deck, Epic Games, GOG Games, Amazon Games]
slug: "custom-launch-arguments"
excerpt: "Add advanced launch parameters for Epic and GOG games using Junk Store's built-in text editor. Navigate to the Advanced settings and use the Additional Variables or Arguments field."
image: /assets/images/blog/addvar-blog.png
header:
  teaser: /assets/images/blog/addvar-blog-thumb.jpg
read_time: "4-5 min read"
toc: true
---

**Deep Dive Focus:** Understanding how to add custom launch arguments for Steam Deck non-Steam games for optimal gaming experience.

*This tip applies to both versions, but steps to use this feature will be different.*

## The Question

Many users ask: "How do I add custom launch arguments for Steam Deck non-Steam games?"

This is a common question that comes up frequently in our community, and understanding the answer can significantly improve your Steam Deck gaming experience.

## The Answer

First, you'll need to access the Proton configuration menu:

![Proton Configuration Menu](/assets/images/blog/protonmenu.jpg){: .align-center}

### For Junk Store 2.0

Add advanced launch parameters for Epic, GOG, and Amazon games using Junk Store's built-in text editor:

1. From the game page in Junk Store, click the ⚙️ **Settings** menu
2. Select **PROTON** 
3. Set dropdown to **Expert** or higher
4. Click **ADVANCED**
5. Navigate to **Additional Variables** or **Additional Arguments** field
6. Press **Y** to open the text editor
7. Press **A** to open keyboard and type arguments
8. Press **X** to save changes

All custom arguments are applied automatically when launching games - no manual Steam shortcut editing required.

![Advanced Settings Menu for Junk Store 2.0](/assets/images/blog/2.0-menu.jpg){: .align-center}

![Junk Store 2.0 Additional Variables Interface](/assets/images/blog/2.0-addvar.jpg){: .align-center}

### For Decky Version

1. From the game page in Junk Store, click the ⚙️ **Settings** menu
2. Select **PROTON**
3. Set dropdown to **All**
4. Click **ADVANCED**
5. Navigate to **Additional Variables** or **Additional Arguments** field
6. Press **A** to open keyboard and type arguments
7. Press **X** to save changes

All custom arguments are applied automatically when launching games - no manual Steam shortcut editing required.

![Decky Plugin Additional Variables Interface](/assets/images/blog/decky-advar.jpg){: .align-center}

## Why This Matters

The content of that field gets injected into the launch script just before the game gets launched. Adding launch variables or arguments this way ensures they are preserved between updates and launch option resets.

---

Hope this tip helps! Questions? Our community is always ready to help.

Cheers,  
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Get answers to all your questions with expert support</p>
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