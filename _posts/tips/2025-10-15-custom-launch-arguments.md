---
layout: post
title: "Tip of the Week: Custom Launch Arguments"
date: 2025-10-15
categories: [Tip of the Week, Universal]
tags: [Junk Store, Steam Deck, Epic Games, GOG Games, Amazon Games, Tips & Tricks, Advanced Settings, Proton]
slug: "custom-launch-arguments"
excerpt: "Add advanced launch parameters for Epic and GOG games using Junk Store's Advanced settings. 2.0 includes a built-in text editor for easier configuration."
image: /assets/images/blog/251015-launch-args-hero.webp
header:
  teaser: /assets/images/blog/251015-launch-args-thumb.webp
read_time: "3 min read"
toc: true
---

**This Week's Pro Tip:** Need to add custom launch arguments to your Epic, GOG, or Amazon games? Use Junk Store's **Additional Variables** or **Additional Arguments** fields in the Advanced settings!

*Note: This tip applies to both versions, but the steps differ slightly between Decky Plugin and 2.0 Standalone.*

<h2 style="text-align: left !important; margin-left: 0;">The Problem</h2>

You need to add advanced launch parameters to fix compatibility issues, enable specific features, or optimize performance for your non-Steam games. Manually editing Steam shortcuts is tedious and settings get lost after updates.

<h2 style="text-align: left !important; margin-left: 0;">The Solution</h2>

### For Junk Store 2.0

1. From the game page in Junk Store, click the ⚙️ **Settings** menu

   ![Click the settings cog icon](/assets/images/blog/cogicon.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Click the ⚙️ Settings menu on the game page</p>

2. Select **PROTON**

   ![Select Proton from settings](/assets/images/blog/protonmenu.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Navigate to PROTON settings</p>

3. Set dropdown to **Expert** or higher

4. Click **ADVANCED**

   ![Click Advanced menu](/assets/images/blog/advancedmenu.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Open the ADVANCED section</p>

5. Navigate to **Additional Variables** or **Additional Arguments** field, then press **Y** to open the built-in text editor

   ![Additional Variables or Arguments field](/assets/images/blog/addargs.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Find the Additional Variables or Additional Arguments field</p>

6. Press **A** to open keyboard and type your arguments

   ![Junk Store 2.0 Additional Variables Interface](/assets/images/blog/2.0-addvar.jpg){: .align-center}
   <p style="text-align: center; font-style: italic;">Type your custom launch arguments in the text editor</p>

7. Press **X** to save changes

All custom arguments are applied automatically when launching games - no manual Steam shortcut editing required.

### For Decky Plugin

1. From the game page in Junk Store, click the ⚙️ **Settings** menu

   ![Click the settings cog icon](/assets/images/blog/cogicon.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Click the ⚙️ Settings menu on the game page</p>

2. Select **PROTON**

   ![Select Proton from settings](/assets/images/blog/protonmenu.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Navigate to PROTON settings</p>

3. Set dropdown to **All**

4. Click **ADVANCED**

   ![Click Advanced menu](/assets/images/blog/advancedmenu.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Open the ADVANCED section</p>

5. Navigate to **Additional Variables** or **Additional Arguments** field

   ![Decky Plugin Additional Variables](/assets/images/blog/deckyargsvars.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Locate the Additional Variables or Additional Arguments field</p>

6. Press **A** to open keyboard and type your arguments

   ![Decky Plugin Additional Variables Interface](/assets/images/blog/decky-advar.jpg){: .align-center}
   <p style="text-align: center; font-style: italic;">Type your custom launch arguments</p>

7. Press **X** to save changes

All custom arguments are applied automatically when launching games - no manual Steam shortcut editing required.

<h2 style="text-align: left !important; margin-left: 0;">Why This Matters</h2>

The content of that field gets injected into the launch script just before the game gets launched. Adding launch variables or arguments this way ensures they are preserved between updates and launch option resets - no more redoing your tweaks after every game update!

<h2 style="text-align: left !important; margin-left: 0;">Pro Tips</h2>

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> The 2.0 built-in text editor (Press Y) makes adding multi-line arguments much easier than using the on-screen keyboard.
</div>

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> Your custom launch arguments persist even after game updates, unlike manual Steam shortcut edits that get overwritten.
</div>

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> Common use cases include forcing specific DirectX versions, enabling debug modes, setting language preferences, or adding compatibility flags for older games.
</div>

---

Hope this tip helps! Questions? Our team is always ready to help.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Why make gaming harder than it needs to be?</p>
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
</style>