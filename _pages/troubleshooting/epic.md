---
layout: splash
title: "Epic Games Troubleshooting"
category: troubleshooting
permalink: /troubleshooting/epic/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---
<div class="spacer mt-4"></div>

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
  <summary>Getting “Unable to complete login”?</summary>
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
    If you see “Legendary status produced no output,” your credentials may be corrupted.<br><br>
    In Desktop Mode, open Konsole and run:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth --delete</code><br>
    Then re-authenticate with:<br>
    <code>/bin/flatpak run com.github.derrod.legendary auth</code>
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Have you recently changed your Epic password?</summary>
  <p>
    If you’ve changed your password and are having issues, simply reboot your Steam Deck.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>How do I update the Legendary Flatpak?</summary>
  <p>
    Go to <strong>About &gt; Dependencies</strong> in the Junk Store UI and click “Install Dependencies” again.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Can’t verify captcha — mouse won’t reach button?</summary>
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
  <summary>I don’t see any games in my Epic library.</summary>
  <p>
      Check the following:
    <ul>
      <li>If you have more than one Epic account, make sure you are logged into the correct one.</li>
      <li>Press <strong>X</strong> to toggle the “Show Installed” filter — it may be hiding your uninstalled games.</li>
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
      <li>Copy the file to the game’s install folder:<br><code>~/Games/epic/[game title]</code></li>
      <li>In Junk Store, go to the game’s slider menu → <strong>Run EXE in Game Folder</strong></li>
      <li>Select <code>VC_redist.x64.exe</code> and complete the install.</li>
    </ol>
    This should allow the game to run.
  </p>
</details>

<details class="troubleshooting-box">
  <summary>Junk Store and EGS library don’t match?</summary>
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
    If missing games still don’t appear, they may require a third-party launcher and are currently unsupported.
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
  <summary>Game launches but controller doesn’t work?</summary>
  <p>
    Try the following:
    <ul>
      <li>Restart your Steam Deck — this can resolve odd controller issues.</li>
      <li>Check your Steam Input settings — they may be interfering.</li>
      <li>Open and close the Quick Access menu — this can “wake” controller detection.</li>
      <li>Change the Proton version — ProtonGE is often more compatible.</li>
    </ul>
    If none of these work, further research may be needed. Note that we can’t test every game.
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
    <strong><a href="{{ '/deckyhelp' | relative_url }}">Decky Plugin Help</a></strong>: Everything you need related to the Junk Store Deckly plugin.
  </li>
<li>
    Still stuck? Ask us on 
    <a href="https://www.reddit.com/r/JunkStore/" target="_blank">Reddit</a> or 
    <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Discord</a>
  </li>
</ul>