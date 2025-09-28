---
title: "How to Play Ubisoft Games from Epic Games Store in Junk Store"
description: "Step-by-step guide on installing Ubisoft Connect and launching Ubisoft games through Epic Games Store in Junk Store on Steam Deck."
excerpt: "Step-by-step guide on installing Ubisoft Connect and launching Ubisoft games through Epic Games Store"
layout: splash
classes: wide tutorial-page
permalink: /tutorials/ubisoft-games
categories: ["Universal"]
tags: ["ubisoft", "third-party-launchers", "epic-games", "both-versions"]
difficulty: "Advanced"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

**Note**: Junk Store relies on Legendary to pick these games up and show them in your Epic Games libraries. Not all Ubisoft titles currently work through Junk Store. If you are planning to purchase any then do so at your own risk or with the understanding that you will need to play these games using another method.

Big shout out to Discord member *numbersix* for bringing our attention to the fact that you can play some Ubisoft games through Junk Store! I tested it out and it works!

I have successfully tested the ability to play the following Ubisoft games via Junk Store:
- Far Cry 6 (Demo)
- Skull & Bones (Demo - you need to enable Battleye Anti Cheat from the cog icon)
- Tom Clancy's Ghost Recon Breakpoint (Demo)
- Trackmania Starter Access
- Monopoly Madness (Demo)
- Roller Champions

We have also had reports that Assassin's Creed Origins and AC Mirage are also working through Junk Store.

## How to Install & Run Ubisoft Games via Junk Store

Follow the steps below to install and play Ubisoft games via Junk Store. Make sure you are logged into your Epic Games account and have Junk Store & Wine Cellar (for Proton versions) already installed.

You will need the latest version of Junk Store installed. This example uses Trackmania as a guide.

### Installing Ubisoft Connect Launcher

If you keep getting pushed back to the game screen in Junk Store and nothing is happening, you may need to check that *Proton Compatibility* is **enabled**. If this isn't toggled on, you won't be able to install the Ubisoft Connect launcher. If you're unsure how to do this, refer to the [How to Check/Change Proton Version](/tutorials/proton-versions) guide.

1) After installing the game via Junk Store, navigate to the sliders menu icon on the game screen and press **A**.
   ![Trackmania Sliders](/assets/images/ubisoft/trackmania-sliders.webp){: loading="lazy" width="600" height="338"}

2) When this screen opens, highlight "Run exe in Game folder" and press **A** to select it. Then find and select the UPlay installer executable: `./Uplay/UplayInstaller.exe` and press **A** again.

   ![Run exe in Game Folder](/assets/images/ubisoft/run-exe-in-game-folder.webp){: loading="lazy" width="600" height="338"}
   ![Uplay Installer Trackmania](/assets/images/ubisoft/uplay-installer-trackmania.webp){: loading="lazy" width="600" height="338"}

3) This will install the Ubisoft Connect Launcher. Follow the prompts as shown below:

   * Select your language preference and click OK.
     ![Trackmania Ubisoft Launcher Lang](/assets/images/ubisoft/trackmania-ubisoft-launcher-lang.webp){: loading="lazy" width="600" height="338"}

   * Agree to the License agreement by clicking "I accept".
     ![Ubisoft EULA](/assets/images/ubisoft/ubisoft-eula.webp){: loading="lazy" width="600" height="338"}

   * Choose where to install Ubisoft Connect launcher. Leave it as default and select "Install".
     ![Ubisoft Connect Install Location](/assets/images/ubisoft/ubisoft-connect-install-location.webp){: loading="lazy" width="600" height="338"}

   * When installation completes, select "Next".
     ![Trackmania Ubisoft Launcher complete](/assets/images/ubisoft/trackmania-ubisoft-launcher-complete.webp){: loading="lazy" width="600" height="338"}

   * Leave the box checked to proceed to account login, then select "Finish".
     ![Ubisoft Connect Complete](/assets/images/ubisoft/ubisoft-connect-complete.webp){: loading="lazy" width="600" height="338"}

### Ubisoft Connect Login

You will be asked to log in to Ubisoft Connect. You'll need an account - if you don't have one, you can create one at this time.

1) Log in with your email and password. You may be asked to set up 2FA if you haven't already. Select "Remember Me".
   ![Ubisoft Login](/assets/images/ubisoft/ubisoft-login.webp){: loading="lazy" width="600" height="338"}

   * Ubisoft's web page will load. Once finished, close this page.
     ![Ubisoft Webpage](/assets/images/ubisoft/ubisoft-webpage.webp){: loading="lazy" width="600" height="338"}

   * When you close the page, this dialog will appear. Choose "Exit the application" and press OK. This returns you to the game screen in Junk Store.
     ![Minimise Uplay Screen](/assets/images/ubisoft/minimise-uplay-screen.webp){: loading="lazy" width="600" height="338"}

2) Now you need to set the game executable. Repeat step 2 above:

   * Back on the game screen in Junk Store, navigate to the sliders menu icon and press **A**.
   * Highlight "Run exe in Game folder" and press **A** to select it.

3) Find and select the game executable: `./Trackmania.exe`. Press **X** to "Set Game Executable" for future use.
   ![Trackmania exe Menu](/assets/images/ubisoft/trackmania-exe-menu.webp){: loading="lazy" width="600" height="338"}

4) You'll return to the game screen where you can now press "Play".
   ![Trackmania Play Game](/assets/images/ubisoft/trackmania-play-game.webp){: loading="lazy" width="600" height="338"}

5) A screen will appear saying "Installing Trackmania" asking you to set the installation language.
   ![Trackmania Language Selection](/assets/images/ubisoft/trackmania-language-selection.webp){: loading="lazy" width="600" height="338"}

6) Select an install location for the game. Leave as default (you can create a shortcut if desired, but this can be skipped). Press 'A' to continue.
   ![Trackmania Install Prompt](/assets/images/ubisoft/trackmania-install-prompt.webp){: loading="lazy" width="600" height="338"}

   * Accept the EULA when prompted.
     ![Trackmania EULA](/assets/images/ubisoft/trackmania-eula.webp){: loading="lazy" width="600" height="338"}

7) Trackmania will download through Ubisoft Connect. When finished, press 'A' to play.

   ![Trackmania Downloading](/assets/images/ubisoft/trackmania-downloading.webp){: loading="lazy" width="600" height="338"}
   ![Trackmania Download Complete](/assets/images/ubisoft/trackmania-download-complete.webp){: loading="lazy" width="600" height="338"}

The game will now launch and you'll be able to play!

![Trackmania In Game Screen](/assets/images/ubisoft/trackmania-in-game-screen.webp){: loading="lazy" width="600" height="338"}

There you have it. You can now play some of your Ubisoft games in Junk Store too!

Have fun gaming everyone,

The Junk Store Team

---

### If This Method Doesn't Work
1. **Check our [game compatibility database](/tested-games/)** for specific game status
2. **Try [native Steam versions](https://store.steampowered.com/)** when available
3. **Consider [GOG versions](/tutorials/gog-extension)** for DRM-free alternatives
4. **Use [Heroic Game Launcher](https://heroicgameslauncher.com/)** in Desktop Mode as fallback

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