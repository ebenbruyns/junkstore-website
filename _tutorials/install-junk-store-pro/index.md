---
layout: junkstore-page
title: "How to Install Junk Store Pro with the Installer"
description: "The quickest way to install Junk Store Pro on Steam Deck. One file does the download, the install, the sign-in and your Epic, GOG, Amazon and itch tabs."
excerpt: "One file installs Junk Store Pro, signs you in and generates your store tabs"
permalink: /tutorials/install-junk-store-pro/
date: 2026-08-16
categories: [Pro Version]
tags: ["installation", "installer", "setup", "pro-version"]
difficulty: "Beginner"
category: pro
section: installation
order: 1
card_title: 'Install Junk Store Pro with the Installer'
card_blurb: 'The quick route: one file does the whole job'
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
help_links:
  - text: "Executable won't run"
    url: "/help/troubleshooting/#executables-wont-run"
    note: "If nothing happens when you double-click the installer"
  - text: "Junk Store isn't working after installation"
    url: "/help/troubleshooting/#junk-store-not-working"
    note: "If it installed but won't run properly"
  - text: "I don't have any extensions"
    url: "/help/troubleshooting/#no-extensions"
    note: "If you skipped step 8, or no tabs appeared"
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "All Pro version issues"
---
{% include content-schema.html type="tutorial" id="install-junk-store-pro" %}

<p>The installer does the whole job, not just putting the program on your Deck. It signs you in, fetches the right build, installs it, and generates your store tabs for you. Take this route unless you have a reason not to.</p>

<p><strong>The install is the one part of Junk Store Pro you do in Desktop Mode.</strong> Everything after it happens on the controller, in Game Mode.</p>

<p>You'll need your <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener">portal</a> account. That's where the build comes from, and it's what Junk Store Pro checks your licence against.</p>

<p><em>Would rather do it yourself? <a href="/tutorials/install-junk-store-pro/manual-method/">Installing manually</a> covers the other route.</em></p>

<div class="install-guide">
<ol>

<li>
<strong>Go to Desktop Mode</strong>
<p>Press the <strong>Steam</strong> button, then <strong>Power</strong>, then <strong>Switch to Desktop</strong>.</p>
</li>

<li>
<strong>Log in to the portal and press Download Installer</strong>
<p>Go to the <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener">portal</a> and sign in. If you have forgotten your password, the login page has a reset option. Make sure you check your spam folder if it doesn't show in your inbox.</p>

<p>On <strong>Junk Store Pro Files</strong>, the green <strong>Download Installer</strong> button under <em>Quick Install</em> is the one you want. Ignore the list of builds underneath it. Those are for installing manually, and the installer fetches the right build for you anyway.</p>
<img src="/assets/images/tutorials/installer/portal-download-installer.webp" alt="The Quick Install (Recommended) panel on the portal, reading Get a clean install with our automated installer, with a green Download Installer button" width="1000" height="207" loading="lazy" />

<p>It's a tiny file, a couple of hundred bytes, so the download is instant.</p>
<img src="/assets/images/tutorials/installer/installer-download.webp" alt="The Downloads folder in Dolphin with junkstore-installer.desktop selected at the top, listed at 243 bytes" width="839" height="221" loading="lazy" />
</li>

<li>
<strong>Drag it onto your Desktop</strong>
<p>Open <strong>Dolphin</strong>, go to <strong>Downloads</strong>, and drag the file onto your Desktop. It shows up as <em>Install JunkStore</em> with an orange warning badge on the icon, which is normal for a file that hasn't been run yet.</p>
<img src="/assets/images/tutorials/installer/installer-desktop.webp" alt="The Install JunkStore icon sitting on the Steam Deck desktop, with a small orange exclamation badge in the corner" width="317" height="327" loading="lazy" />
</li>

<li>
<strong>Double-click it and choose Continue</strong>
<p>KDE asks whether you trust the program before it runs. Press <strong>Continue</strong>.</p>
<img src="/assets/images/tutorials/installer/installer-warning.webp" alt="A KDE Warning dialog reading This will start the program: Install JunkStore, with Continue and Cancel buttons" width="500" height="259" loading="lazy" />

<p>If double-clicking does nothing, or opens the file in a text editor, right-click it and choose <strong>Properties</strong>, then <strong>Permissions</strong>, and tick the box to allow executing the file as a program.</p>
</li>

<li>
<strong>Sign in with your portal account</strong>
<p>The installer opens with a login window of its own. Use the same email and password as the portal.</p>
<img src="/assets/images/tutorials/installer/installer-login.webp" alt="The JunkStore Installer login window, headed Please login to continue, with empty Email and Password fields and a Login button" width="900" height="646" loading="lazy" />

<p>This sign-in carries through, so you won't be asked to sign in to Junk Store Pro again when you get back to Game Mode.</p>
</li>

<li>
<strong>Step 1 of 3: pick your options</strong>
<p>Both channels default to <strong>stable</strong>, which is generally the one almost everyone will want on first install.</p>

<table>
<thead><tr><th>Control</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><strong>Build Channel</strong></td><td>Which releases of Junk Store Pro itself this Deck takes</td></tr>
<tr><td><strong>Extension Channel</strong></td><td>The same, for the stores and tools that run on it</td></tr>
</tbody>
</table>

<p>Nothing here is permanent. The channels are the same settings you'll find later in Junk Store Pro under <a href="/docs/user/settings/#system">Settings</a>, so you can change your mind.</p>

<h4>The two tickboxes</h4>

<p>These are worth understanding rather than clicking past, because the first one decides which clients fetch and install your games.</p>

<p><strong>Install flatpaks (dependencies)</strong> installs the <a href="/docs/user/store-settings-reference/#legacy-clients">legacy flatpak clients</a>: Legendary for Epic, gogdl for GOG and nile for Amazon. <strong>It arrives ticked</strong>, so leaving the dialogue alone gives you these.</p>

<p><strong>Install emulators</strong> adds the emulator flatpaks, for running retro and emulated games through Junk Store Pro. It arrives unticked. Tick it only if you're planning to use them, since it's a fair bit of extra software to put on your Deck otherwise.</p>

<h4>The new clients</h4>

<p>We've built our own clients for Epic, GOG and Amazon, the same way we did for itch. They're <strong>faster than the legacy clients</strong>, and they're the only way to <strong>use more than one account with the same store</strong>.</p>

<p>To use them, <strong>untick Install flatpaks</strong>. They aren't the default yet, so this route costs you one small step in Game Mode, which has to be done before you sign in to any store. It's covered in step 10 below, and it's a single switch per store.</p>

<p><strong>There's one trade-off.</strong> The experimental cloud saves don't work with the new clients. If you're relying on those, stay on the legacy clients and leave the tickbox as it is.</p>

<p>So the choice is between leaving the default alone and having it work straight away, or unticking and doing one extra thing for faster, multi-account clients.</p>

<p><strong>You're not stuck with whichever you pick.</strong> If you take the default now and fancy the new clients later, that's fine, and there's nothing to reinstall. <a href="/tutorials/switch-to-new-clients/">Switching to the new clients</a> covers it in a few steps.</p>

<p><strong>Default: flatpaks ticked.</strong> The legacy clients. Nothing extra to do later.</p>
<img src="/assets/images/tutorials/installer/installer-options-flatpaks.webp" alt="Step 1 of 3 in the installer as it opens, with Install flatpaks (dependencies) already ticked and Install emulators unticked" width="517" height="458" loading="lazy" />

<p><strong>Nothing ticked: the new clients.</strong> Faster, and multiple accounts per store. Needs the switch in step 10 before you sign in.</p>
<img src="/assets/images/tutorials/installer/installer-options-none.webp" alt="Step 1 of 3 in the installer with both tickboxes cleared, which is the setup for using the new Epic, GOG and Amazon clients" width="517" height="458" loading="lazy" />

<p><strong>Both ticked: legacy clients plus emulators.</strong> The default, with the emulator flatpaks added.</p>
<img src="/assets/images/tutorials/installer/installer-options-both.webp" alt="Step 1 of 3 in the installer with both Install flatpaks (dependencies) and Install emulators ticked, which installs the legacy clients and the emulator flatpaks" width="517" height="458" loading="lazy" />

<p>Press <strong>Next</strong>.</p>
</li>

<li>
<strong>Step 2 of 3: let it run</strong>
<p>This is the part that does the work. It fetches the build, downloads it, then runs the install, and shows you what it's doing as it goes. There's nothing to press.</p>
<img src="/assets/images/tutorials/installer/installer-step2.webp" alt="Step 2 of 3 in the installer, headed Downloading, with a progress bar part-filled and a log of download progress lines below it" width="900" height="901" loading="lazy" />

<p>When it's done it moves itself on to step 3.</p>
</li>

<li>
<strong>Step 3 of 3: choose your stores</strong>
<p>Tick the stores you want and press <strong>Generate</strong>. The installer creates the tabs for you, which is the step you'd otherwise be doing by hand later.</p>
<img src="/assets/images/tutorials/installer/installer-step3.webp" alt="Step 3 of 3 in the installer, reading 4 extensions available and listing Amazon, Epic, Gog and itch with a tickbox each, above Skip and Generate buttons" width="704" height="663" loading="lazy" />

<p>You can press <strong>Skip</strong> and set them up yourself later if you'd rather. That means going through the <a href="/tutorials/install-junk-store-pro/manual-method/#generate-your-stores">Generator by hand</a>: downloading the presets, then generating each store you want.</p>

<p><strong>"Installation Complete" comes up once the stores have been generated</strong>, so it's the last thing you see rather than something that appears part way through. Once it's on screen you're finished in Desktop Mode, and you're safe to press <strong>Close</strong>.</p>
<img src="/assets/images/tutorials/installer/installer-complete.webp" alt="The installer showing Installation Complete and the message JunkStore has been successfully installed, with a Close button" width="645" height="280" loading="lazy" />
</li>

<li>
<strong>Back to Game Mode</strong>
<p>Return to Game Mode and tap <strong>SELECT</strong> to open Junk Store Pro. That's the button above the D-pad, the one Steam labels View. On a PC, <strong>Ctrl+3</strong> does the same thing.</p>

<p>Your tabs are already there, one for each store you generated.</p>
<img src="/assets/images/tutorials/installer/store-tabs.webp" alt="The Junk Store Pro tab bar after generating, showing Amazon, Epic and Gog across the top" width="1200" height="51" loading="lazy" />
</li>

<li>
<strong>Using the new clients? Turn "Use Legacy Clients" off first</strong>

<div class="js-callout js-callout--warning">
  <strong>Only if you unticked Install flatpaks in step 1.</strong> If you left the tickbox as it came, skip straight to signing in. <strong>Do this before you sign in to any store</strong>, not after.
</div>

<p>The new clients are installed, but the stores don't use them until you say so. <strong><a href="/docs/user/store-settings-reference/#legacy-clients">Use Legacy Clients</a></strong> is that switch, and there's one per store, so repeat this on each tab you generated.</p>

<p>It lives on the store's own settings, which you get to from the <strong>cog</strong> at the top of the tab. It's in the row of buttons to the right of the search box, between the sliders and the shop icon.</p>
<img src="/assets/images/tutorials/installer/tab-cog-button.webp" alt="The row of buttons to the right of the search box at the top of a store tab, with the sliders button and the cog both outlined in red, followed by the shop and help buttons" width="1200" height="64" loading="lazy" />

<p>Sliders and cog mean the same thing throughout Junk Store Pro: sliders are actions that happen, the cog is settings that stay. You want the cog.</p>

<p>Open it and scroll to the bottom of <strong>Advanced</strong>.</p>
<img src="/assets/images/tutorials/installer/legacy-clients-setting.webp" alt="The bottom of a store's Advanced settings in Junk Store Pro, with Use Legacy Clients highlighted and the side panel explaining it uses legacy flatpak clients instead of the native ones" width="1000" height="625" loading="lazy" />

<p>On, it looks like this. This is the one you don't want:</p>
<img src="/assets/images/tutorials/installer/use-legacy-on.webp" alt="The Use Legacy Clients row with its toggle switched on, shown in blue, and labelled On underneath" width="900" height="161" loading="lazy" />

<p>Tap it so it reads <strong>Off</strong>:</p>
<img src="/assets/images/tutorials/installer/use-legacy-off.webp" alt="The Use Legacy Clients row with its toggle switched off, shown in grey, and labelled Off underneath" width="900" height="169" loading="lazy" />

<p>That's it. Because you're doing this on a fresh install, before signing in, there's nothing cached to clear and no library to rebuild. Do it on each store, then carry on to signing in.</p>
</li>

<li>
<strong>Sign in to each store</strong>
<p>Open each tab and <a href="/docs/user/main-menu/#logging-in-to-a-store">sign in to the store itself</a>. The library fills in from there.</p>
<img src="/assets/images/tutorials/installer/store-login.webp" alt="A store tab before signing in, showing a not logged in message beside a Login button" width="1200" height="237" loading="lazy" />

<p><strong>Give it a few minutes.</strong> The first sync builds a database for each store, so a large library takes a while to appear. Nothing is wrong if a tab sits empty at first.</p>
</li>

</ol>
</div>

<hr>

<h3>What you should end up with</h3>

<ul>
<li>Junk Store Pro opens on SELECT</li>
<li>A tab for each store you ticked</li>
<li>Each tab signed in, with its library showing</li>
</ul>

<p>If one of those is missing, the usual cause is an install that was cut short at step 7.</p>

<p>If you went for the new clients and a store won't fetch anything, check <strong>Use Legacy Clients</strong> is actually off on that tab. It's per store, so it's easy to set on one and forget the rest.</p>

<hr>

<h3 id="coming-from-the-decky-plugin">Coming from the Decky plugin?</h3>

<p><strong>The import is automatic.</strong> It happens the first time you launch Junk Store Pro, and your games sync across as you open each tab. Saves and settings come with them. Expect it to take a while, since it rebuilds the database for each store.</p>

<p><strong>One step is manual: reset launch options once for each game.</strong> It completes the migration, and until you do it a game that was already installed won't play.</p>

<p>On the game's page, press the <strong>sliders</strong> button beside <strong>Play Game</strong>.</p>
<img src="/assets/images/tutorials/installer/reset-1-sliders.webp" alt="The bottom of a game's page with the sliders button highlighted in red, sitting between the green Play Game button and the cog" width="760" height="200" loading="lazy" />

<p>Then choose <strong><a href="/docs/user/game-page/">Manage</a></strong>, and <strong>Reset Launch Options</strong> from the submenu that opens beside it.</p>
<img src="/assets/images/tutorials/installer/reset-2-manage.webp" alt="The game's Actions menu with Manage highlighted in red, and Reset Launch Options highlighted in red in the submenu that opens to its right" width="1000" height="921" loading="lazy" />

<hr>

<h3>Removing it again</h3>

<p>Two steps, in this order.</p>

<p><strong>First, Settings, then Uninstall Dependencies.</strong> That removes the supporting software Junk Store Pro put in place, which the uninstall script doesn't touch. Do it first, because the button lives inside Junk Store Pro and you can't reach it once that's gone.</p>

<p><strong>Then run the uninstall script</strong> from Konsole in Desktop Mode:</p>

<pre><code>~/.local/share/junkstore/uninstall.sh</code></pre>

<p><strong>Your own data stays behind, deliberately</strong>, at <code>~/.config/junkstore/</code>. Settings, databases and any overrides you wrote are all in there, so a reinstall picks up where you left off. If you want it gone, delete the folder yourself.</p>

<p><strong>Non-Steam shortcuts stay in Steam.</strong> Uninstall the games first, or you'll be tidying up entries by hand afterwards.</p>
