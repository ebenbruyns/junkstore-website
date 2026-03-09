---
title: "How to Enable LSFG Frame Generation - Junk Store Steam Deck Tutorial"
description: "Step-by-step guide to enable LSFG-VK (Lossless Scaling Frame Generation) in Junk Store on Steam Deck. No manual launch arguments needed."
excerpt: "Step-by-step guide on how to enable LSFG frame generation in Junk Store"
layout: junkstore-page
permalink: /tutorials/lsfg-frame-generation
categories: ["Universal"]
tags: ["lsfg", "frame-generation", "performance", "both-versions"]
difficulty: "Intermediate"
---
<div class="spacer mt-4"></div>

Want to boost your frame rates with LSFG-VK (Lossless Scaling Frame Generation)? Junk Store has it built in with simple toggles. No manual launch arguments needed.

> **Prerequisites:** You need **Lossless Scaling** from Steam (paid) and the **lsfg-vk** dependency installed.

> **Note:** LSFG doesn't work with all games and may actually make some games perform worse. Your mileage may vary.

---

## Requirements

Before you start, you'll need two things:

### 1. Lossless Scaling (Steam)

Purchase and install **Lossless Scaling** from Steam. Once installed:
- Right-click the app in Steam
- Select **Properties**
- Go to **Betas**
- Select **Linux Beta** from the dropdown

### 2. Install lsfg-vk

Run this command in Desktop Mode (Konsole):

```
curl -fsSL https://raw.githubusercontent.com/ebenbruyns/lsfg-vk-deck-installer/refs/heads/main/install.sh | bash
```

Once installed, Junk Store will automatically detect and use it.

> **Pro Tip:** You don't need the separate Decky LSFG-VK plugin if you're using Junk Store. Our built-in integration handles everything.

---

## How to Enable LSFG in Junk Store

### Step 1: Open Settings Menu

From the game page in Junk Store, click the **Settings** menu (cog icon).

![Settings menu cog icon](/assets/images/tutorials/lsfg/cp2077cog.webp)

---

### Step 2: Select Proton Configs

Select **Proton Configs** from the menu.

![Proton Configs option](/assets/images/tutorials/lsfg/protonconfig.webp)

---

### Step 3: Show All Options

Set the dropdown to **All** to reveal advanced options.

![Dropdown set to All](/assets/images/tutorials/lsfg/alldropdown.webp)

---

### Step 4: Enable LSFG

Find the **LSFG** section and enable LSFG-VK. Tweak the settings if needed.

> **Important:** Both LSFG settings need to say **Enable** for LSFG-VK to work.

![LSFG-VK settings](/assets/images/tutorials/lsfg/lsfgvksettings.webp)

---

### Step 5: Save Changes

**Important:** Press **X** to save your changes!

---

## Troubleshooting

- **LSFG not working?** Try a different Proton version. Some games work better with specific GE-Proton releases.
- **Settings not saving?** Make sure you press X to save before exiting.

---

## Need More Help?

If you run into trouble, check out:
- **Universal:** [FAQ Section](/2.0faq/) for common questions
- **Universal:** [Troubleshooting Guide](/2.0troubleshooting/) for technical issues
- **Decky Plugin:** [Plugin-specific help](/faq/decky/) and [troubleshooting](/troubleshooting/decky/)
- **2.0 Standalone:** [Version-specific help](/2.0faq/) and [troubleshooting](/2.0troubleshooting/)

Still stuck? Ask for help:
<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
  <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
</a>
<a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
  <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
</a>


<style>
.page__content {
  text-align: left;
}

.page__content h2,
.page__content h3,
.page__content h4,
.page__content h5,
.page__content h6,
.page__content p,
.page__content ul,
.page__content ol,
.page__content blockquote {
  text-align: left;
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
