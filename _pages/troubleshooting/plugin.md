---
layout: splash
title: "Decky Plugin Troubleshooting"
category: troubleshooting
permalink: /troubleshooting/plugin/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---
<div class="spacer mt-4"></div>

Issues with Junk Store itself? This section covers general plugin problems — from install issues to launch errors and everything in between.

<h3>If you're seeing errors and dependencies aren't installing, try running the following commands in Konsole:</h3>

```ruby
export DECKY_PLUGIN_RUNTIME_DIR=~/homebrew/data/Junk Store
export PYTHONPATH=~/homebrew/plugins/Junk Store/scripts:$PYTHONPATH:~/homebrew/plugins/Junk Store/scripts/shared
export DECKY_PLUGIN_DIR=~/homebrew/plugins/Junk Store
export DECKY_PLUGIN_LOG_DIR=~/homebrew/logs/Junk Store
cd ~/homebrew/plugins/Junk Store
./scripts/install_deps.sh
```

<details class="troubleshooting-box">
 <summary>When I launch a game, Steam tries to download something but it gets stuck at 0%</summary>
<p>
  This is a known Steam issue, often related to Proton 9. We recommend switching to a <strong>GE-Proton</strong> version instead, as these are better suited for running non-Steam games. Open the game’s properties in Steam and select a different Proton version from the Compatibility tab to resolve the issue.
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
    Try rebooting your device first. If they still don’t appear, ask for help in the <em>plugin-support</em> forum on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>My game works in Heroic or Lutris, but not in Junk Store</summary>
<p>
  Games that run in Heroic or Lutris usually work in Junk Store too — it’s just a matter of finding the right tweaks:
</p>
<ul>
  <li>Try switching to a different GE-Proton version.</li>
  <li>Install any required or missing dependencies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else).</li>
  <li>Some Epic games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (Epic tab) and enabled it for the game (done from the game page in Junk Store).</li>
</ul>
<p>
  Please refer to our <a href="/plugin_tutorials" target="_blank" rel="noopener noreferrer">Tutorials</a> section to learn how to change or check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
</p>
<p>
  If that doesn’t work, ask for help in our Discord server. Please be patient—our team is small! While we have a decent game library, we don’t have every game, so we may only be able to offer advice rather than fixes.
</p>
</details>

<details class="troubleshooting-box">
  <summary>I don’t have Proton GE or don’t know how to install it.</summary>

  <p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  </p>

  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>

  <p>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you’ll be able to select it as a compatibility option in Junk Store.
  </p>

  <p>
    Please refer to our <a href="{{ '/plugin_tutorials/' | relative_url }}" target="_blank" rel="noopener noreferrer"> Plugin Tutorials</a> page. section to see how to change/check your Proton version if you are unsure how to do this.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>I want to change the FPS for a game</summary>
  <p>
    <li>Open Junk Store through the Decky plugin and select your game.</li>
    <li>Click the gear icon and choose <em>Proton Config</em>.</li>
    <li>Scroll to the bottom and adjust the framerate setting.</li>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Do I need to keep Junk Store open while downloading from Epic?</summary>
  <p>
    Yes. Junk Store doesn't have a background download queue. If you close or leave the plugin, your download may stop or behave unpredictably.
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
    These are optional example scripts mainly for DOSBox games. They are not officially supported and may stop working if Junk Store is updated. Use them only if you know how they work.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>How do I uninstall the backend scripts for DOS and Win 3.1?</summary>
  <p>
    You can delete them manually from:
    <br>
    <code>~/homebrew/data/Junk Store/scripts/Extensions</code>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Game gets stuck at the Steam pre-launch screen</summary>
  <p>
    This might be caused by another plugin (like <strong>decky-cloud-save</strong>) locking Junk Store’s files. Make sure nothing is interfering with this folder:
    <br>
    <code>/home/deck/homebrew/data/Junk Store</code>
    <br>
    Junk Store relies on that data directory to function correctly.
  </p>
</details>

<h2>Need Help or More Info?</h2>
<p>Here are your best starting points:</p>
<ul>
  <li>
    <strong><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a></strong>: Everything you need related to the Junk Store Deckly plugin.
  </li>
<li>
    Still stuck? Ask us on 
    <a href="https://www.reddit.com/r/JunkStore/" target="_blank">Reddit</a> or 
    <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
  </li>
</ul>
