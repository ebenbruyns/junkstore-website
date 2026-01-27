---
layout: post
title: "Tip of the Week: Change Game Language with Environment Variables"
date: 2026-01-28
categories: [Tip of the Week, Decky Plugin]
tags: [junk-store, steam-deck, tips]
slug: "change-game-language-environment-variables"
excerpt: "Decky Plugin users: change game language using environment variables in the Additional Variables field for Epic games that support multiple languages."
image: /assets/images/blog/langvar-hero.webp
header:
  teaser: /assets/images/blog/langvar-thumb.webp
read_time: "3 min read"
toc: true
---

**This Week's Pro Tip:** Use the **Additional Variables** field in the Decky Plugin to set language environment variables for Epic games that support multiple languages!

*Note: This tip is for Decky Plugin users. Junk Store 2.0 has a built-in language menu for easier switching.*

<h2 style="text-align: left !important; margin-left: 0;">The Problem</h2>

You're using the **Decky Plugin** and want to play your games in a different language. The Decky Plugin doesn't have a built-in language menu, so you need to use environment variables to tell games which language to use.

<h2 style="text-align: left !important; margin-left: 0;">The Solution</h2>

Use environment variables in Junk Store's **Additional Variables** field to set the game language.

**Important:** This only works for games in your Epic library that already have your desired language built-in. Check the game's store page on the Epic website to verify language support first.

### Step-by-Step Guide

1. From the game page in Junk Store, click the ⚙️ **Settings** menu

   ![Click the settings cog icon](/assets/images/blog/langvar-cog.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Click the ⚙️ Settings menu on the game page</p>

2. Select **PROTON**

   ![Select Proton from settings](/assets/images/blog/langvar-proton-config.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Navigate to PROTON settings</p>

3. Set dropdown to **All**

   ![Set dropdown to All](/assets/images/blog/langvar-proton-all.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Change the dropdown to All to reveal Advanced options</p>

4. Click **ADVANCED**, navigate to the **Additional Variables** field, and enter your language variables:

   ```
   export HOST_LC_ALL=es_ES.UTF-8
   export LANG=es_ES.UTF-8
   ```

   ![Enter language variables in Additional Variables field](/assets/images/blog/langvar-addvars.webp){: .align-center}
   <p style="text-align: center; font-style: italic;">Enter both language environment variables in the Additional Variables field</p>

5. Press **X** to save changes

The game will now launch in your specified language automatically.

### Example: Hogwarts Legacy in Spanish

Here's what it looks like when you set Spanish (`es_ES`) for Hogwarts Legacy:

![Hogwarts Legacy title screen in Spanish](/assets/images/blog/langvar-hogwarts-title.webp){: .align-center}
<p style="text-align: center; font-style: italic;">Title screen now displays in Spanish</p>

![Hogwarts Legacy menu in Spanish](/assets/images/blog/langvar-hogwarts-menu.webp){: .align-center}
<p style="text-align: center; font-style: italic;">Main menu with Spanish text</p>

![Hogwarts Legacy new game screen in Spanish](/assets/images/blog/langvar-hogwarts-newgame.webp){: .align-center}
<p style="text-align: center; font-style: italic;">Hogwarts Letter fully translated to Spanish</p>

<h2 style="text-align: left !important; margin-left: 0;">Common Language Codes</h2>

Here are the most commonly used language codes. Replace `es_ES` in the example with your desired language:

```
export HOST_LC_ALL=es_ES.UTF-8
export LANG=es_ES.UTF-8
```

| Language | Code |
|----------|------|
| English | en_US |
| German | de_DE |
| French | fr_FR |
| Spanish | es_ES |
| Italian | it_IT |
| Japanese | ja_JP |
| Korean | ko_KR |
| Chinese (Simplified) | zh_CN |
| Chinese (Traditional) | zh_TW |
| Portuguese (Brazil) | pt_BR |
| Russian | ru_RU |

<h2 style="text-align: left !important; margin-left: 0;">Pro Tips</h2>

<div class="tip-callout">
  <strong>⚠️ Critical:</strong> This only works for games that already have your desired language built in. Environment variables don't add new language files, they just tell the game which existing language to use. Always check the game's store page to verify language support before trying this method.
</div>

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> Your language settings persist between game launches and updates, so you only need to set this once per game.
</div>

Hope this tip helps! Questions? Our team is always ready to help.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for seamless Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Game Mode native — the way handheld gaming should be</p>
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
