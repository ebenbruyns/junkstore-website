---
title: "Install Junk Store Decky Plugin - Steam Deck Epic Games Setup"
description: "Install Junk Store Decky plugin on Steam Deck. Open-source plugin for Epic Games in Game Mode via Decky Loader. GOG extension available separately."
excerpt: "Step-by-step guide to install Junk Store on your Steam Deck"
layout: splash
permalink: /tutorials/plugin/Install
categories: ["Decky Plugin"]
tags: ["installation", "decky-loader", "epic-games", "setup"]
difficulty: "Beginner"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

This guide walks you through installing the **Junk Store** plugin and logging in to your Epic Games account on a Steam Deck.

> ⚠️ **Note:** This guide assumes you already have **Decky Loader** installed.

---

## Download Junk Store

You can download Junk Store from either of the following Decky Plugin stores:

- [Decky Plugin Main Store](https://plugins.deckbrew.xyz)
- [Decky Plugin Testing Store](https://testing.deckbrew.xyz)

---

## Step-by-Step Installation

### Step 1: Check Your Store Channel

Make sure you’re using the correct **Store Channel** in Decky.

- Press the **three dots** (...) button
- Go to the **gear icon** in the top-left
- Set your Store Channel to either:
  - `Default` for the main store
  - `Testing` for the test version

![Decky Store Change](/assets/images/JSInstall/Decky%20Store%20Change.jpeg){: loading="lazy"}

---

### Step 2: Install Junk Store

- Go back to the Decky Loader main screen
- Open the **Decky Plugin Store**
- Search for or scroll to **Junk Store Plugin**
- Select it and click **Install**

> 💡 You can also choose a specific version before installing.

![Junk Store Install](/assets/images/JSInstall/Junk-Store%20Install.jpeg){: loading="lazy"}

---

### Step 3: Install Dependencies

- After installing, open **Junk Store**
- Go to the **About** section
- Select **Dependencies** > **Install Dependencies**

> ⏳ This might take a while (around 30 seconds, or longer). Just wait — it’s normal.

![Install Dependencies](/assets/images/JSInstall/Dependencies.jpeg){: loading="lazy"}

---

### Step 4: Log in to Epic Games

- From the Junk Store menu, select **Games**
- You’ll be prompted to log in to your **Epic Games** account

![Login Epic](/assets/images/JSInstall/Login%20Epic.jpeg){: loading="lazy"}
![Epic Login Dialogue](/assets/images/JSInstall/Epic%20Login%20Dialogue.jpg){: loading="lazy"}

> ✅ Make sure the Epic account you log in with has games in its library, or nothing will show up.

---

### Step 5: Use Desktop Mode for Third-Party Logins

If you want to log in using **Xbox**, **PlayStation**, **Nintendo**, or another method:

- Switch to **Desktop Mode**
- Follow our guide: [Login with OAuth / Third-Party](/tutorials/plugin/OAuth)

---

### Step 6: View Your Library

- After logging in, your Epic library should load automatically
- If it doesn't:
  - Scroll down and press `Y` on **Show All**
  - Make sure **Show Installed** is not selected
  - Clear the search box if needed

![Epic Library](/assets/images/JSInstall/Epic%20Library%20v2.jpeg){: loading="lazy"}

> ⚠️ Games that need **EA App** or **Origin** won’t show up — they aren't supported.

---

### Step 7: Test with a Small Game

To make sure everything works:

- Try installing a smaller game
- We recommend something simple like **DOOM 64**

> ❗ Avoid huge or complex games right away. Some games need extra setup to work properly on Steam Deck.

![Doom64 Install](/assets/images/JSInstall/Doom64%20install.jpeg){: loading="lazy"}

---

### Step 8: You're Ready to Go!

Once you’ve installed and tested a game, you’re all set.

---

## Need More Help?

If you run into trouble, check out:
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

---

## 📺 Bonus: Video Guide

Steam Deck Gaming made a great video showing how to install Junk Store (including Fall Guys):

[![Watch on YouTube](https://img.youtube.com/vi/tgc7yiKtpW0/0.jpg){: loading="lazy"}](https://www.youtube.com/watch?v=tgc7yiKtpW0)

---

## 📖 Bonus: Written Guide

Noah from SteamDeckHQ wrote an awesome step-by-step article:

👉 [Junk Store Install Guide on SteamDeckHQ](https://steamdeckhq.com/tips-and-guides/how-to-integrate-epic-games-into-steam-deck-library/?utm_source=dlvr.it&utm_medium=twitter)


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
