---
layout: single
title: "Decky Plugin Troubleshooting"
category: troubleshooting
permalink: /troubleshooting/plugin/
classes: wide
sidebar:
  nav: sidebar-help
---

## Plugin Troubleshooting

Issues with Junk Store itself? This section covers general plugin problems — from install issues to launch errors and everything in between.


If you're seeing errors and dependencies aren't installing, try running the following commands in Konsole:

```ruby
export DECKY_PLUGIN_RUNTIME_DIR=~/homebrew/data/Junk-Store
export PYTHONPATH=~/homebrew/plugins/Junk-Store/scripts:$PYTHONPATH:~/homebrew/plugins/Junk-Store/scripts/shared
export DECKY_PLUGIN_DIR=~/homebrew/plugins/Junk-Store
export DECKY_PLUGIN_LOG_DIR=~/homebrew/logs/Junk-Store
cd ~/homebrew/plugins/Junk-Store
./scripts/install_deps.sh
```

<details class="troubleshooting-box">
  <summary>Why doesn’t anything happen when I try to install dependencies?</summary>
  <p>
    First, please be patient! Some users report it starts working after taking a break and trying again later. This isn’t a plugin issue. We suspect automatic DDoS protection may be throttling connections if too many requests happen too quickly.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>When I launch a game, Steam tries to download something but it gets stuck at 0%</summary>
  <p>
    This is a known Steam issue, possibly related to Proton 9. Open the game’s properties in Steam and switch to any other Proton version. That should resolve the issue.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Games aren’t showing up in the Non-Steam tab</summary>
  <p>
    Check your settings and make sure the shortcut isn’t hidden. After changing settings, reboot your Steam Deck for changes to take effect.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Shortcuts aren’t appearing</summary>
  <p>
    Try rebooting your device first. If they still don’t appear, ask for help in the <em>plugin-support</em> forum on Discord.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>My game works in Heroic or Lutris, but not in Junk-Store</summary>
  <p>
    Games that run in Heroic or Lutris usually work in Junk-Store too—it’s just a matter of finding the right tweaks.<br>
    - Try switching to a different GE-Proton version.<br>
    - Install any required or missing dependicenies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else).<br>
    - Some Epic games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (Epic tab) and enabled it for the game (done from the game page in Junk Store).<br>


    Please refer to our [Tutorials](/help/tutorials/) section to see how to change/check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
    

    If that doesn’t work, ask for help in our Discord server. Please be patient—our team is small! We will help if we can, while we have a decent library we don't have every game so may only be able to offer advice instead of fixes.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>I don’t have ProtonGE or don’t know how to install it</summary>
  <p>
    We recommend installing the <strong>Wine Cellar</strong> plugin from the Decky Store. It helps you manage ProtonGE versions easily.

    Please refer to our [Tutorials](/help/tutorials/) section to see how to change/check your Proton version if you are unsure how to do this.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>I want to change the FPS for a game</summary>
  <p>
    Open Junk-Store through the Decky plugin and select your game. Click the gear icon and choose <em>Proton Config</em>. Scroll to the bottom and adjust the framerate setting.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Do I need to keep Junk-Store open while downloading from Epic?</summary>
  <p>
    Yes. Junk-Store doesn't have a background download queue. If you close or leave the plugin, your download may stop or behave unpredictably.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>No games are showing.</summary>
  <p>
    Make sure you try the following tips:<br><br>
    • Refresh your games list from the main Epic tab:<br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong><br><br>
    • Reboot the Steam Deck<br><br>
    • Log out and log back into your Epic account
  </p>
</details>


<details class="troubleshooting-box">
  <summary>What are the backend scripts, and do I need them?</summary>
  <p>
    These are optional example scripts mainly for DOSBox games. They are not officially supported and may stop working if Junk-Store is updated. Use them only if you know how they work.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>How do I uninstall the backend scripts for DOS and Win 3.1?</summary>
  <p>
    You can delete them manually from:
    <br>
    <code>~/homebrew/data/Junk-Store/scripts/Extensions</code>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Game gets stuck at the Steam pre-launch screen</summary>
  <p>
    This might be caused by another plugin (like <strong>decky-cloud-save</strong>) locking Junk-Store’s files. Make sure nothing is interfering with this folder:
    <br>
    <code>/home/deck/homebrew/data/Junk-Store</code>
    <br>
    Junk-Store relies on that data directory to function correctly.
  </p>
</details>

<details class="troubleshooting-box">
  <summary></summary>
  <p>

  </p>
</details>

