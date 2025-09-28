---
title: "How to Check/Change Proton Version - Junk Store Steam Deck Tutorial"
description: "Step-by-step guide to check and change Proton versions for Epic/GOG games in Junk Store on Steam Deck. Fix black screen issues and optimize game compatibility."
excerpt: "Step-by-step guide on how to check and change your Proton version in Junk Store"
layout: splash
classes: wide tutorial-page
permalink: /tutorials/proton-versions
categories: ["Universal"]
tags: ["proton", "compatibility", "both-versions"]
difficulty: "Intermediate"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

Experiencing black screens or compatibility issues with Epic/GOG games? Changing your Proton version often fixes these problems. This guide shows you how to check your current Proton version and switch to a different one to improve game compatibility in Junk Store.


> ⚠️ **Prerequisites:** You need **Junk Store** and **Wine Cellar** plugins installed via Decky Loader, plus some Proton versions already installed.

---

## When Do You Need to Change Proton Versions?

If you experience any of these issues, try a different Proton version:

- Game shows a **black screen** then closes
- Game **won't launch** at all
- Game **crashes immediately**

### Recommended Proton Versions

- **GE-Proton** versions are generally recommended over standard Steam Proton
- **Don't always update** to the latest release - we find a stable version and stick with it
- **Test before upgrading** - newer isn't always better for game compatibility
- **Keep 2-3 versions** installed so you can switch if one doesn't work

> 💡 **Pro Tip:** Check [ProtonDB.com](https://www.protondb.com/) or our [Games Tested](/tested-games/) page to see what works best for your specific game.

---

## Prerequisites: Install a Proton Manager

You'll need a tool to download and manage different Proton versions. You have two good options:

### Option 1: Wine Cellar (Recommended for Game Mode)
- **Decky plugin** - works directly in Game Mode
- **No Desktop Mode needed** for downloads and management
- **Requires restart** after installing new Proton versions
- **Installation:** Search "Wine Cellar" in Decky Plugin Store

### Option 2: ProtonUp-Qt (Desktop Mode)
- **Desktop application** - download from Discover Store
- **Must use Desktop Mode** to install new versions
- **No restart required** - updates apply when returning to Game Mode
- Search "ProtonUp-Qt" in Discover Store

> ✅ **Why use either?** Junk Store creates separate prefixes for each game, so you can use different Proton versions per game.

**Quick Links:**
- [How to Install Junk Store](/tutorials/install-decky-plugin)

---

## Method 1: Change Proton Version in Junk Store

### Step 1: Open Your Game in Junk Store

Start from the game screen **inside Junk Store** (not Steam library).

![FM'24 JS Game Page](/assets/images/Proton/FM'24%20JS%20Game%20Page.webp){: loading="lazy"}

---

### Step 2: Access Steam Game Properties

- Press **Y** to go to Steam's game page
- Navigate to the **gear/cog icon**
- Press **A** to select

![FM'24 Steam App Page](/assets/images/Proton/FM'24%20Steam%20App%20Page.webp){: loading="lazy"}

---

### Step 3: Open Properties Menu

- Select **Properties** from the menu
- Press **A** to confirm

![FM'24 Properties Option Selection](/assets/images/Proton/FM'24%20Properties%20Option%20Selection.webp){: loading="lazy"}

---

### Step 4: Navigate to Compatibility

- Go to the **Compatibility** tab
- This is where you'll find Proton settings

![FM'24 Proton Version Screen](/assets/images/Proton/FM'24%20Proton%20Version%20Screen.webp){: loading="lazy"}

---

### Step 5: Select Proton Version

- Navigate to the **Proton dropdown menu**
- Press **A** to open the list of available versions

![FM Current Proton Version](/assets/images/Proton/FM%20Current%20Proton%20Version.webp){: loading="lazy"}

---

### Step 6: Choose Your Version

- Select the **Proton version** you want to try
- Press **A** to confirm
- The setting is **automatically saved** per game

![FM'24 Changing Proton Version](/assets/images/Proton/FM'24%20Changing%20Proton%20Version.webp){: loading="lazy"}

> ✅ **Saved Settings:** Your Proton choice is remembered for this specific game, even after rebooting.

---

## Method 2: Change via Steam Library

You can also change Proton versions directly from Steam's library:

### Quick Access Method

- Find your game in **Steam Library**
- Press the **Start/Options button** (hamburger menu)
- Select **Properties**

![Game Art Steam Library](/assets/images/Proton/Game%20Art%20Steam%20Library.webp){: loading="lazy"}

![Properties Menu from Steam Library](/assets/images/Proton/Properties%20Menu%20from%20Steam%20Library.webp){: loading="lazy"}

- Follow **Steps 4-6** from Method 1 above

---

## Ready to Play!

Once you've selected your Proton version:

- **Back out** to the game screen
- Press **Play** to launch with the new settings

![FM'24 Load Screen](/assets/images/Proton/FM'24%20Load%20Screen.webp){: loading="lazy"}

---

## Troubleshooting Tips

- **Game still won't work?** Try a different GE-Proton version
- **Need more versions?** Use Wine Cellar to download additional options
- **Unsure which version to use?** Check our [compatibility database](/tested-games/)

---

## Need More Help?

If you're still having trouble:

- [Plugin Help](/deckyhelp)
- [Plugin FAQ](/faq/decky/)
- [Decky Plugin Troubleshooting](/troubleshooting/decky/)
- [2.0 Standalone Troubleshooting](/troubleshooting/v2/)

Still stuck? Ask for help:
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