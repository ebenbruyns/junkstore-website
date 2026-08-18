---
layout: junkstore-page
title: "How to Install Junk Store Pro Manually"
description: "Install Junk Store Pro on Steam Deck manually: download the build from the portal, make it executable, then generate your Epic, GOG, Amazon and itch tabs yourself."
excerpt: "The manual route: download the build from the portal and set up your store tabs yourself"
permalink: /tutorials/install-junk-store-pro/manual-method/
date: 2025-07-17
categories: [Pro Version]
tags: ["installation", "setup", "pro-version"]
difficulty: "Intermediate"
category: pro
section: installation
order: 2
card_title: 'Install Junk Store Pro Manually'
card_blurb: 'The manual route, for when you would rather do it yourself'
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
help_links:
  - text: "Installation not completing"
    url: "/help/troubleshooting/#installation-not-completing"
    note: "If the installer seems stuck"
  - text: "Executable won't run"
    url: "/help/troubleshooting/#executables-wont-run"
    note: "If Junk Store won't start"
  - text: "FAQ"
    url: "/help/faq/"
    note: "General usage questions"
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "All Pro version issues"
---
{% include content-schema.html type="tutorial" id="install-junk-store-pro-manual-method" %}

<p><em>Most people should use <a href="/tutorials/install-junk-store-pro/">the installer</a> instead. It does all of this for you, including generating your store tabs. This page is the manual route, for when you'd rather do it yourself or the installer has given you trouble.</em></p>

<p class="text-center">Prefer video? <a href="https://youtu.be/kDKQyL5iLSg" target="_blank" rel="noopener">Watch on YouTube</a></p>

<div class="install-guide">
<ol>

<li>
<strong>Go to Desktop Mode</strong>
<p>Press the Steam button → Power → Switch to Desktop.</p>
</li>

<li>
<strong>Log into the portal and download the latest build</strong>
<p>Go to the <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener">portal</a> and sign in. If the password won't come to you, the login page has a reset option.</p>

<p>Take the first file in the list, marked <strong>Recommended</strong> and <strong>LATEST</strong>. It's around 200 MB.</p>
<img src="/assets/images/tutorials/manual/portal-build-list.webp" alt="The portal's build list with a Release Channel dropdown set to Stable, and install-junkstore-v3.2.0.0 at the top marked Recommended and LATEST with a green Download Latest button" width="1000" height="292" loading="lazy" />

<p><strong>This is where you pick your channel.</strong> There's no channel setting later in this method, so the file you choose here decides which release you get. Use the <strong>Release Channel</strong> dropdown to switch between them, then take the first file in the list.</p>
</li>

<li>
<strong>Make it executable</strong>
<p>It arrives without permission to run, so give it that first. Open <strong>Dolphin</strong> and go to <strong>Downloads</strong>.</p>
<img src="/assets/images/tutorials/manual/downloaded-file.webp" alt="The downloaded install-junkstore-v3.2.0.0 file selected in the Dolphin Downloads folder, listed at 201.6 MiB" width="977" height="114" loading="lazy" />

<p>Right-click it and choose <strong>Properties</strong>.</p>
<img src="/assets/images/tutorials/manual/properties-menu.webp" alt="The right-click context menu in Dolphin with Properties highlighted, showing the Alt+Return shortcut" width="308" height="79" loading="lazy" />

<p>Open the <strong>Permissions</strong> tab, tick <strong>Allow executing file as program</strong>, then press <strong>OK</strong>.</p>
<img src="/assets/images/tutorials/manual/permissions.webp" alt="The Permissions tab of the file's Properties dialog, with the Execute tickbox Allow executing file as program ticked" width="533" height="479" loading="lazy" />
</li>

<li>
<strong>Run it</strong>
<p>Double-click the file. KDE asks what to do with it: choose <strong>Launch</strong>, not one of the editor options.</p>
<img src="/assets/images/tutorials/manual/launch-prompt.webp" alt="A KDE dialog asking Would you like to launch this file, showing install-junkstore-v3.2.0.0 as a Shell script, with Launch and Cancel buttons" width="484" height="316" loading="lazy" />

<p>Then confirm you trust it with <strong>Continue</strong>.</p>
<img src="/assets/images/tutorials/manual/launch-warning.webp" alt="A KDE Warning dialog reading This will start the program: install-junkstore-v3.2.0.0, with Continue and Cancel buttons" width="484" height="246" loading="lazy" />

<p>The installer asks once more before it starts. Press <strong>Yes</strong>.</p>
<img src="/assets/images/tutorials/manual/proceed-prompt.webp" alt="The Junk Store Installer asking Do you want to proceed with the installation, with No and Yes buttons" width="374" height="232" loading="lazy" />

<p>If double-clicking does nothing, or opens the file in a text editor, the permission in the previous step didn't take. A custom icon theme can also break the dialogue the installer uses, in which case switching to the default theme for the install is the usual fix.</p>
</li>

<li>
<strong>Wait for it to finish</strong>
<p>A <strong>Configuring Junk Store</strong> window opens and logs what it's doing. You'll see it fetching the flatpak clients as it goes.</p>
<img src="/assets/images/tutorials/manual/installing-log.webp" alt="The Configuring Junk Store window part way through, its log showing about to install flatpaks and the legendary flatpak downloading from GitHub" width="900" height="681" loading="lazy" />

<p><strong>You don't get asked about flatpaks or emulators here.</strong> This method installs the lot: the legacy flatpak clients and the emulator flatpaks both go on by default, with no tickboxes to say otherwise. That's the main thing the installer does differently, where you get to choose. There's a note further down on what to do if you didn't want them.</p>

<div class="js-callout js-callout--warning">
  <strong>⚠️ CRITICAL:</strong> <strong>This step takes a while.</strong> You <strong>MUST wait until the window says "Installation complete"</strong> before pressing OK. <strong>Pressing OK too early cancels the installation</strong>, and it fails quietly, so what you end up with looks like a Junk Store Pro that doesn't work rather than one that never finished.
</div>

<p>This is what finished looks like. The log ends with <em>Installation complete. You can close this window now.</em></p>
<img src="/assets/images/tutorials/manual/install-complete-log.webp" alt="The Configuring Junk Store window at the end of the install, its log reading Installation complete. You can close this window now." width="900" height="681" loading="lazy" />

<p>A confirmation box appears as well. Once you have both, you're safe to press <strong>OK</strong>.</p>
<img src="/assets/images/tutorials/manual/install-complete-popup.webp" alt="A small Junk Store Installer dialog with an information icon reading Installation complete, and an OK button" width="299" height="223" loading="lazy" />
</li>

<li>
<strong>Back to Game Mode and sign in</strong>
<p>Return to Game Mode and tap <strong>SELECT</strong> to open Junk Store Pro. That's the button above the D-pad, the one Steam labels View. On a PC, <strong>Ctrl+3</strong> does the same thing.</p>

<p>Sign in with your portal credentials, the same account as step 2. <strong>This step only exists on the manual route.</strong> The installer signs you in on your behalf.</p>
<img src="/assets/images/tutorials/manual/js-pro-login.webp" alt="Junk Store Pro's login prompt in Game Mode, asking for a username and password before it will go any further" width="1000" height="588" loading="lazy" />
</li>

<li>
<strong id="generate-your-stores">Generate your stores</strong>
<p>A fresh install has no store tabs, so you choose which ones to create. <strong>This is the other step the installer does for you.</strong></p>

<p>Make sure you're signed in from the previous step, or the presets won't download. Scroll down to <strong>Tools</strong>, then <strong>Generator</strong>.</p>
<img src="/assets/images/tutorials/manual/main-menu.webp" alt="The SELECT side menu in Junk Store Pro, with Tools, News and Settings listed under Other, below the custom stores" width="1000" height="625" loading="lazy" />

<p>Open the sliders menu to the right of the search bar.</p>
<img src="/assets/images/tutorials/manual/generator-sliders.webp" alt="The Generator's search bar with the sliders button to its right, alongside the cog, shop and help buttons" width="1000" height="153" loading="lazy" />

<p>Choose <strong>Download all presets from server</strong>.</p>
<img src="/assets/images/tutorials/manual/download-presets.webp" alt="The Generator's Actions menu open, listing Download all presets from server among the other bulk actions" width="1000" height="1007" loading="lazy" />

<p>Then press the download button on each store you want.</p>
<img src="/assets/images/tutorials/manual/generator-extensions.webp" alt="The Generator's extension list showing Amazon, Epic, Gog and itch, each row with its own sliders, cog and download buttons" width="1000" height="625" loading="lazy" />

<p>A tab appears for each one.</p>
<img src="/assets/images/tutorials/manual/store-tabs.webp" alt="The Junk Store Pro tab bar after generating, showing Amazon, Epic and Gog across the top" width="1200" height="51" loading="lazy" />
</li>

<li>
<strong>Sign in to each store</strong>
<p>Open each tab and <a href="/docs/user/main-menu/#logging-in-to-a-store">sign in to the store itself</a>. The library fills in from there.</p>
<img src="/assets/images/tutorials/manual/store-login.webp" alt="A store tab before signing in, showing a not logged in message beside a Login button" width="1200" height="237" loading="lazy" />

<p><strong>Give it a few minutes.</strong> The first sync builds a database for each store, so a large library takes a while to appear. Nothing is wrong if a tab sits empty at first.</p>
</li>

</ol>
</div>

<hr>

<h3>What this method decided for you</h3>

<p>Because there were no tickboxes at install time, you now have the legacy flatpak clients and the emulator flatpaks on your Deck whether you wanted them or not. Both are sortable from Game Mode.</p>

<p><strong>To use the legacy clients</strong>, turn <strong><a href="/docs/user/store-settings-reference/#legacy-clients">Use Legacy Clients</a></strong> on in Junk Store Pro. It's per store, on the cog at the top of each tab, at the bottom of <strong>Advanced</strong>.</p>

<p><strong>If you don't want the flatpaks</strong>, uninstall them. There's no harm in leaving them sitting there beyond the disk space, but there's no point keeping them if you're not going to use them.</p>

<p>The <a href="/tutorials/install-junk-store-pro/">installer</a> asks about both of these up front, which is why it's the easier route for most people.</p>

<hr>

<h3>Coming from the Decky plugin?</h3>

<p><strong>The import is automatic.</strong> It happens the first time you launch Junk Store Pro, and your games sync across as you open each tab. Saves and settings come with them. Expect it to take a while, since it rebuilds the database for each store.</p>

<p><strong>One step is manual: reset launch options once for each game.</strong> It completes the migration, and until you do it a game that was already installed won't play.</p>

<p>On the game's page, press the <strong>sliders</strong> button beside <strong>Play Game</strong>.</p>
<img src="/assets/images/tutorials/manual/reset-1-sliders.webp" alt="The bottom of a game's page with the sliders button highlighted in red, sitting between the green Play Game button and the cog" width="760" height="200" loading="lazy" />

<p>Then choose <strong><a href="/docs/user/game-page/">Manage</a></strong>, and <strong>Reset Launch Options</strong> from the submenu that opens beside it.</p>
<img src="/assets/images/tutorials/manual/reset-2-manage.webp" alt="The game's Actions menu with Manage highlighted in red, and Reset Launch Options highlighted in red in the submenu that opens to its right" width="1000" height="921" loading="lazy" />
