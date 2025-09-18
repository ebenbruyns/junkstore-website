---
title: "How to Install the C++ Runtime"
excerpt: "Step-by-step guide on downloading and installing C++ runtime dependency"
layout: splash
permalink: /tutorials/plugin/C++Runtime 
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

# If Protontricks Doesn’t Work

Some games need a special Microsoft file (called the **C++ Runtime**) to work properly.  
Normally, we'd use **Protontricks** to install this — but sometimes Protontricks doesn't do the job.

Here’s how you can install it manually. Don’t worry, it’s easy!

---

## Manual Install Steps

1. Go to the official download page:  
    [Microsoft C++ Redistributable Downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

2. Download this file:  
   **X64 Redistributable for Visual Studio 2015-2022**  
   (The file name will be something like `VC_redist.x64.exe`)

3. Move the downloaded file into your game’s folder:  
   - **Epic Games** (e.g., The Callisto Protocol): *~/Games/epic/TheCallistoProtocol*
   - **GOG Games**:  *~/Games/gog/**your-game-folder***

4. Open **Junk Store** and go to the game’s page.

5. Open the **sliders menu** (press the button with the sliders icon).

6. Choose *Run EXE in game folder*.

7. Select **VC_redist.x64.exe**

8. Follow the install instructions like you would on a Windows PC.

That’s it! Once it’s done, try launching the game again — it should now work properly.

---

## Extra Tips If the Game Still Isn’t Working

- **Check [ProtonDB.com](https://www.protondb.com)**  
  Other players often share which Proton version works best or if extra steps are needed.

- **Try a different Proton version**  
  The default "Experimental" version can be buggy. Try using **GE-Proton** — it's more stable in many cases.

- **Game works with "Run EXE" but not the Play button?**  
  Try **resetting the launch options** in Junk Store to default.

- **Still no luck? Try a fresh start.**  
  You can **delete the game’s prefix** (basically its “Windows install environment”) from Junk Store.  
  > Be careful — this will delete all saved data and settings for that game!

---

## Need More Help?

If you run into trouble, check out:
- [Plugin Help](/deckyhelp)
- [Plugin FAQ](/faq/decky/)
- [Decky Plugin Troubleshooting](/troubleshooting/plugin)
- [Epic Games Troubleshooting](/troubleshooting/epic)
- [Gog Extension Troubleshooting](/troubleshooting/gog)

Still stuck? Ask for help: 
<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
  <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
</a>
<a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
  <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
</a>

---


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
