---
layout: single
title: "Decky Plugin Troubleshooting - Complete Guide"
description: "Complete Junk Store Decky plugin troubleshooting guide covering Epic Games, GOG extension, installation issues, and game compatibility. Free Steam Deck plugin support."
permalink: /troubleshooting/decky/
classes: wide
sidebar:
  nav: "troubleshooting-nav"
show_pagination: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
  actions:
    - label: "Get Junk Store 2.0"
      url: "/buy_now/"
      class: "button buy-button"
---

<div class="spacer mt-4"></div>

## General Plugin Issues

Issues with Junk Store itself? This section covers general plugin problems — from install issues to launch errors and everything in between.

### If you're seeing errors and dependencies aren't installing, try running the following commands in Konsole:

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
      Some games require additional libraries such as <strong>Microsoft C++ Runtime</strong> or <strong>DirectX</strong>. These dependencies may not always trigger an obvious error message, so try installing them if you suspect they're missing.
    </li>
    <li><strong>Check ProtonDB:</strong><br>
      If the game still won't launch, visit <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a> for community tips. You may find game-specific tweaks, compatibility reports, or Proton version recommendations that solve your issue.
    </li>
  </ul>
</details>

<details class="troubleshooting-box">
 <summary>When I launch a game, Steam tries to download something but it gets stuck at 0%</summary>
  <p></p>
    This is a known Steam issue, often related to Proton 9. We recommend switching to a <strong>GE-Proton</strong> version instead, as these are better suited for running non-Steam games. Open the game's properties in Steam and select a different Proton version from the Compatibility tab to resolve the issue.
</details>

<details class="troubleshooting-box">
  <summary>Games aren't showing up in the Non-Steam tab</summary>
  <p></p>
    Check your settings and make sure the shortcut isn't hidden. After changing settings, reboot your Steam Deck for changes to take effect.
</details>

<details class="troubleshooting-box">
  <summary>Shortcuts aren't appearing</summary>
  <p></p>
    Try rebooting your device first. If they still don't appear, ask for help in the <em>plugin-support</em> forum on <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>.
</details>

<details class="troubleshooting-box">
  <summary>My game works in Heroic or Lutris, but not in Junk Store</summary>
<p></p>
  Games that run in Heroic or Lutris usually work in Junk Store too — it's just a matter of finding the right tweaks:
<ul>
  <li>Try switching to a different GE-Proton version.</li>
  <li>Install any required or missing dependencies (you may sometimes get a prompt to install a Microsoft C++ runtime, or something else).</li>
  <li>Some Epic games require the EOS overlay to be enabled before they will work. Make sure you have installed this globally (Epic tab) and enabled it for the game (done from the game page in Junk Store).</li>
</ul>
  Please refer to our <a href="/plugin_tutorials">Tutorials</a> section to learn how to change or check your Proton version or install Microsoft C++ runtimes if you are unsure how to do this.
<br>
<br>
  If that doesn't work, ask for help in our Discord server. Please be patient—our team is small! While we have a decent game library, we don't have every game, so we may only be able to offer advice rather than fixes.
</details>

<details class="troubleshooting-box">
  <summary>I don't have Proton GE or don't know how to install it</summary>
  <p></p>
    To get Proton GE or other custom versions of Proton, you can use one of the following tools:
  <ul>
    <li><strong>ProtonUp-QT</strong> — A simple app that lets you download and manage Proton versions. You can find it in the <strong>Discover Store</strong> (in Desktop Mode).</li>
    <li><strong>Wine Cellar</strong> — A Decky plugin that works similarly to ProtonUp-QT. If you already have Decky installed for other plugins, you can install Wine Cellar directly from the <strong>Decky Plugin Store</strong>.</li>
  </ul>
    Once installed, use either tool to download the latest <strong>GE-Proton</strong> release. After that, you'll be able to select it as a compatibility option in Junk Store.
    <br>
    <br>
    Please refer to our <a href="{{ '/plugin_tutorials/' | relative_url }}"> Plugin Tutorials</a> page to see how to change/check your Proton version if you are unsure how to do this.
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
    This might be caused by another plugin (like <strong>decky-cloud-save</strong>) locking Junk Store's files. 
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
    If the <strong>Steam + X</strong> shortcut isn't bringing up the keyboard try the following:
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

## Epic Games Integration

Running into problems with Epic games? This section covers common issues with Epic integration, like missing games, launch problems, or DLC not working as expected.

<details class="troubleshooting-box">
  <summary>Experiencing login issues?</summary>
  <p>
    Legendary sometimes has trouble logging in, especially with alternative methods like Xbox. To resolve this:
    <li>Switch to Desktop Mode</li>
    <li>Launch Steam in Big Picture mode</li>
    <li>Try logging in there.</li>
    <li>Once you're in, return to Gaming Mode.</li>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Getting "Unable to complete login"?</summary>
  <p>
    This is a Legendary issue. Here's a workaround:<br><br>
    Switch to Desktop Mode, open Konsole, and run:<br>
    <code>flatpak run com.github.derrod.legendary auth --disable-webview</code><br><br>
    It will launch a browser for you to log in. Copy the code provided and paste it back into Konsole.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Legendary ERROR pop-up when signing in?</summary>
  <p>
    If you see "Legendary status produced no output," your credentials may be corrupted.<br><br>
    In Desktop Mode, open Konsole and run:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth --delete</code><br>
    Then re-authenticate with:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth</code>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Have you recently changed your Epic password?</summary>
  <p>
    If you've changed your password and are having issues, simply reboot your Steam Deck.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>How do I update the Legendary Flatpak?</summary>
  <p>
    Go to <strong>About &gt; Dependencies</strong> in the Junk Store UI and click "Install Dependencies" again.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Can't verify captcha — mouse won't reach button?</summary>
  <p>
    Try the following:
    <ul>
      <li>Use a keyboard and press <kbd>Tab</kbd> to cycle to the Verify button.</li>
      <li>In Game Mode, change the resolution to <strong>3840x2160</strong> via:<br>
      Epic Games Login &gt; Properties &gt; Shortcut &gt; Game Resolution.</li>
      <li>Or run in Konsole:<br>
      <code>flatpak run com.github.derrod.legendary auth --disable-webview</code></li>
    </ul>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>I don't see any games in my Epic library.</summary>
  <p>
      Check the following:
    <ul>
      <li>If you have more than one Epic account, make sure you are logged into the correct one.</li>
      <li>Press <strong>X</strong> to toggle the "Show Installed" filter — it may be hiding your uninstalled games.</li>
      <li>Clear the search bar at the top — any text here will filter your library.</li>
      <li>Refresh your games list from the main Epic tab:<br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong></li>
      <li>Reboot the Steam Deck</li>
      <li>Log out and log back into your Epic account</li>
    </ul>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Games won't load — Microsoft Visual C++ error?</summary>
  <p>
    If prompted to install Microsoft Visual C++ Runtime:
    <ol>
      <li>Download the <strong>X64 redistributable</strong> from <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank">Microsoft Learn</a>.</li>
      <li>Copy the file to the game's install folder:<br><code>~/Games/epic/[game title]</code></li>
      <li>In Junk Store, go to the game's slider menu → <strong>Run EXE in Game Folder</strong></li>
      <li>Select <code>VC_redist.x64.exe</code> and complete the install.</li>
    </ol>
    This should allow the game to run.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Junk Store and EGS library don't match?</summary>
  <p>
    Have you tried <strong>refreshing your games list?</strong>
  </p>
  <p>
    Refresh your games list from the main Epic tab:<br>
    &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong>
  </p>
  <p>
    Or run the following in Konsole to refresh:
  </p>
  <pre><code>flatpak run com.github.derrod.legendary list --force-refresh</code></pre>
  <p>
    If missing games still don't appear, they may require a third-party launcher and are currently unsupported.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Game won't download — CRITICAL error?</summary>
  <p>
    If you get:<br>
    <strong>CRITICAL: installation cannot proceed, exiting</strong><br>
    It likely means your storage is full. Free up space or install to another location.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Game launches but controller doesn't work?</summary>
  <p>
    Try the following:
    <ul>
      <li>Restart your Steam Deck — this can resolve odd controller issues.</li>
      <li>Check your Steam Input settings — they may be interfering.</li>
      <li>Open and close the Quick Access menu — this can "wake" controller detection.</li>
      <li>Change the Proton version — ProtonGE is often more compatible.</li>
    </ul>
    If none of these work, further research may be needed. Note that we can't test every game.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Installing games to SD card causes a Permissions Error?</summary>
  <p>
    Possible causes:
    <ul>
      <li>Your SD card may not be formatted correctly.</li>
      <li>Old dependencies — revisit <strong>About &gt; Dependencies</strong> and reinstall them.</li>
    </ul>
    Still having trouble? Ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a> <em> #epic-support forum</em>.
  </p>
</details>

## GOG Extension

This section deals with any problems specific to GOG integration — from download issues to getting games to run smoothly through Junk Store.

<details class="faq-box">
  <summary>I can't get GOG to run in Junk Store.</summary>
  <p></p>
    Make sure you're using the <strong>latest version of Junk Store</strong> from the <strong>Decky Testing Store</strong>.<br><br>
    You'll also need to reinstall dependencies by going to the <strong>About</strong> section and clicking "Install Dependencies."<br><br>
    If you've purchased the GOG extension, <strong>follow the setup instructions emailed to you</strong> or refer to the downloadable PDF — skipping these steps may cause issues.
</details>

<details class="troubleshooting-box">
  <summary>I don't see any games in my Gog library.</summary>
  <p></p>
  Check the following:
  <ul>
    <li>If you have more than one Gog account, make sure you are logged into the correct one.</li>
    <li>Press <strong>X</strong> to toggle the "Show Installed" filter — it may be hiding your uninstalled games.</li>
    <li>Clear the search bar at the top — any text here will filter your library.</li>
    <li>Refresh your games list from the main Gog tab:<br>
      &nbsp;&nbsp;<strong>Sliders menu &gt; Refresh Games List</strong>
    </li>
    <li>Reboot the Steam Deck</li>
    <li>Log out and log back into your Gog account</li>
  </ul>
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