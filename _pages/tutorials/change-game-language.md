---
layout: splash
title: "How do I change game language settings on Steam Deck without Desktop Mode?"
excerpt: "Change your Epic, GOG, or Amazon game language settings directly in Game Mode - no desktop switching required"
permalink: /tutorials/change-game-language/
classes: wide tutorial-page
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---

<div class="spacer mt-4"></div>

Change your Epic, GOG, or Amazon game language settings directly in Game Mode - no desktop switching required. There are two methods:

## Method 1: Environment Variables (for individual games)

<ol>
  <li>From the game page in Junk Store, click the <strong>⚙️ Settings menu</strong></li>
</ol>

![Settings menu on game page](/assets/images/tutorials/change-language/CogGamePage.webp)
*Click the ⚙️ Settings menu from the game page*

<ol start="2">
  <li>Select <strong>Game Configs</strong></li>
</ol>

![Game configuration screen with dropdowns](/assets/images/tutorials/change-language/GameConfi.webp)
*Select Game Configs to access the configuration screen*

<ol start="3">
  <li>Change the dropdown to <strong>All</strong></li>
  <li>Click <strong>ENVIRONMENT</strong> dropdown, click on <strong>LANG</strong> and select your preferred language</li>
</ol>

![Language dropdown with options](/assets/images/tutorials/change-language/LangDropdown.webp)
*Click on LANG and select your preferred language*

![Language selection example](/assets/images/tutorials/change-language/LangSelection.webp)
*Example of language selection*

<ol start="5">
  <li>Press <kbd>X</kbd> to save changes</li>
</ol>

## Method 2: Installation Settings (affects game installation language)

<ol>
  <li>Select the appropriate tab for installation settings, then click the <strong>⚙️ Settings menu</strong> from the game page in Junk Store</li>
</ol>

![Installation settings tab](/assets/images/tutorials/change-language/CogTab.webp)
*Select the tab for installation settings and language configuration*

<ol start="2">
  <li>Access the installation settings and configure the language preference</li>
</ol>

![Language dropdown with options](/assets/images/tutorials/change-language/LangDropdown.webp)
*Access the language settings and select your preferred language*

![Language selection example](/assets/images/tutorials/change-language/LangSelection.webp)
*Example of language selection for installation*

<ol start="3">
  <li>This will download and install the game with your selected language files</li>
  <li><strong>Note:</strong> If changing language after game installation, update the game from the ☰ Slider menu to pull in new language packs</li>
</ol>

Your game will launch in the selected language - all managed from Game Mode with no additional tools needed.

---

## Need More Help?

If you run into trouble, check out:
- **Universal:** [FAQ Section](/2.0faq/) for common questions
- **Universal:** [Troubleshooting Guide](/2.0troubleshooting/) for technical issues
- **Decky Plugin:** [Plugin-specific help](/faq/decky/) and [troubleshooting](/troubleshooting/decky/)
- **2.0 Standalone:** [Version-specific help](/2.0faq/) and [troubleshooting](/2.0troubleshooting/)

**Still stuck? Get community help:**

<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
  <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
</a>
<a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
  <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
</a>

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
  color: white;
}

.discord-btn {
  background: #5865f2;
  color: white !important;
}

.reddit-btn {
  background: #ff4500;
  color: white !important;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white;
  opacity: 0.9;
}
</style>