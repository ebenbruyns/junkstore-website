---
layout: splash
title: "Decky Plugin Troubleshooting"
category: troubleshooting
permalink: /troubleshooting/plugin/
redirect_to: /troubleshooting/decky/#general-plugin-issues
classes: wide
search: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
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
  <summary>Why won't my game launch?</summary>
  <p></p>
    Games may fail to launch for a variety of reasons. Here are some common causes and what you can do:
  <ul>
    <li><strong>Wrong compatibility layer:</strong><br>
      Try switching to a different version of Proton. Non-Steam games usually work best with <strong>GE-Proton</strong>. We recommend finding a version that works well for most of your library and using it as the default for non-Steam games.<br><br>
      However, some titles require a <em>specific</em> version of Proton or GE-Proton to run properly.
    </li>
    <li><strong>Missing dependencies:</strong><br>
      Some games require additional libraries such as <strong>Microsoft C++ Runtime</strong> or <strong>DirectX</strong>. These dependencies may not always trigger an obvious error message, so try installing them if you suspect they’re missing.
    </li>
    <li><strong>Check ProtonDB:</strong><br>
      If the game still won’t launch, visit <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community tips. You may find game-specific tweaks, compatibility reports, or Proton version recommendations that solve your issue.
    </li>
  </ul>
</details>

<details class="troubleshooting-box">
 <summary>When I launch a game, Steam tries to download something but it gets stuck at 0%</summary>
  <p></p>
    This is a known Steam issue, often related to Proton 9. We recommend switching to a <strong>GE-Proton</strong> version instead, as these are better suited for running non-Steam games. Open the game’s properties in Steam and select a different Proton version from the Compatibility tab to resolve the issue.
</details>

<details class="troubleshooting-box">
  <summary>Games aren’t showing up in the Non-Steam tab</summary>
  <p></p>
    Check your settings and make sure the shortcut isn’t hidden. After changing settings, reboot your Steam Deck for changes to take effect.
</details>

<details class="troubleshooting-box">
  <summary>Shortcuts aren’t appearing</summary>
  <p></p>
    Try rebooting your device first. If they still don’t appear, ask for help in the <em>plugin-support</em> forum on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
</details>

<details class="troubleshooting-box">
  <summary>My game works in Heroic or Lutris, but not in Junk Store</summary>
<p></p>
  Games that run in Heroic or Lutris usually work in Junk Store too — it’s just a matter of finding the right tweaks:
<ul>
  <li>Try switching to a different GE-Proton version.</li>
  <li>Install any required or missing dependencies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else).</li>
  <li>Some Epic games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (Epic tab) and enabled it for the game (done from the game page in Junk Store).</li>
</ul>
  Please refer to our <a href="/plugin_tutorials">Tutorials</a> section to learn how to change or check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
<br>
<br>
  If that doesn’t work, ask for help in our Discord server. Please be patient—our team is small! While we have a decent game library, we don’t have every game, so we may only be able to offer advice rather than fixes.
</details>

<details class="troubleshooting-box">
  <summary>I don’t have Proton GE or don’t know how to install it</summary>
  <p></p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you’ll be able to select it as a compatibility option in Junk Store.
    <br>
    <br>
    Please refer to our <a href="{{ '/plugin_tutorials/' | relative_url }}"> Plugin Tutorials</a> page to see how to change/check your Proton version if you are unsure how to do this.
</details>

<details class="troubleshooting-box">
  <summary>No games are showing.</summary>
  <p></p>
    Make sure you try the following tips:<br><br>
    • Refresh your games list from the main Epic tab:<br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong><br><br>
    • Reboot the Steam Deck<br><br>
    • Log out and log back into your Epic account
</details>

<details class="troubleshooting-box">
  <summary>What are the backend scripts, and do I need them?</summary>
  <p></p>
    These are optional example scripts mainly for DOSBox games. They are not officially supported and may stop working if Junk Store is updated. Use them only if you know how they work.
</details>

<details class="troubleshooting-box">
  <summary>How do I uninstall the backend scripts for DOS and Win 3.1?</summary>
  <p></p>
    You can delete them manually from:
    <br>
    <code>~/homebrew/data/Junk Store/scripts/Extensions</code>
</details>

<details class="troubleshooting-box">
  <summary>Game gets stuck at the Steam pre-launch screen</summary>
  <p></p>
    This might be caused by another plugin (like <strong>decky-cloud-save</strong>) locking Junk Store’s files. 
    <br>
    <br>
    Make sure nothing is interfering with this folder:
    <br>
    <code>/home/deck/homebrew/data/Junk Store</code>
    <br>
    <br>
    Junk Store relies on that data directory to function correctly.
</details>

<details class="troubleshooting-box">
  <summary>Having issues bringing up the keyboard in Game Mode?</summary>
  <p>
    If the <strong>Steam + X</strong> shortcut isn’t bringing up the keyboard try the following:
  </p>
  <ul>
    <li>Try to bring up the keyboard ⌨️ from the Quick Access Menu (<strong>⋯</strong>).</li>
    <li>Tap directly on a text field (like a password box) to prompt the keyboard.</li>
    <li>Try toggling to Desktop Mode and back to Game Mode to reset input services.</li>
    <li>Restart Steam or the device if the issue persists.</li>
  </ul>
  <p>
    This is a known Steam bug that has been around for a while. These steps usually help work around it until Valve fixes it in a future update.
  </p>
</details>

<h2>Need Help or More Info?</h2>
<p>Here are your best starting points:</p>
<ul>
  <li>
    <strong><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a></strong>: Everything you need related to the Junk Store Decky plugin.
  </li>
<li>
    Still stuck? Ask us on 
    <a href="https://www.reddit.com/r/JunkStore/" target="_blank">Reddit</a> or 
    <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
  </li>
</ul>
