---
title: "How to Fix the NIL Path Error When a Game Won't Launch"
description: "Fix \"Default pathname NIL is not an absolute pathname\" in Junk Store Pro on Steam Deck. When the usual fixes don't work, set the install path and game executable by hand."
excerpt: "When the usual fixes don't shift the NIL path error, set the install path and executable by hand"
layout: junkstore-page
permalink: /tutorials/nil-path-error/
date: 2026-08-08
categories: [Pro Version]
tags: ["troubleshooting", "nil-path-error", "install-metadata", "game-details", "pro-version"]
difficulty: "Advanced"
category: pro
section: configuration
order: 2
card_title: 'Fix the NIL Path Error'
card_blurb: "When the usual fixes don't shift a NIL path error, set the paths by hand"
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
---
{% include content-schema.html type="tutorial" id="nil-path-error" %}

<p class="text-center">A NIL path error means Junk Store doesn't have an install folder set for the game. Usually a reset, a repair or a reinstall sorts it. Every now and then none of them do, and you'll need to fill in the missing details by hand. Here's how.</p>

<hr>

<h3>What the Error Looks Like</h3>

<p>You'll get this either as soon as the install finishes, or when you hit Play:</p>

<div class="js-callout js-callout--warning">
<strong>Something went wrong</strong><br>
Unhandled exception in backend<br>
<strong>Default pathname NIL is not an absolute pathname</strong>
</div>

<img src="/assets/images/tutorials/nil-path-error/nil-path-error.webp" alt="Junk Store showing Default pathname NIL is not an absolute pathname error" width="600" height="375" loading="lazy" />

<p>It boils down to one thing: the game's install folder isn't set. The files may well be sitting on your Deck, but Junk Store has no record of where they went or what to run, so it has nothing to launch.</p>

<hr>

<h3>Try the Easy Fixes First</h3>

<p>This error turns up for a few different reasons, and most of the time the automated tools clear it without any fuss. Work through these before you go any further:</p>

<div class="js-callout js-callout--tip">
<ol>
<li><strong>Reset Launch Options</strong>, under <strong>sliders menu &gt; Manage</strong></li>
<li><strong>Verify game</strong> from the sliders menu</li>
<li><strong>Repair game</strong> from the sliders menu</li>
<li><strong>Reinstall the game</strong></li>
</ol>
</div>

<img src="/assets/images/tutorials/nil-path-error/manage-menu.webp" alt="Junk Store sliders menu with the Manage submenu open showing Reset Launch Options, Uninstall Game and Delete from Database" width="600" height="375" loading="lazy" />

<p>Any one of those will often set the install folder and put things right. Start with Reset Launch Options, since it's the quickest and it puts the game's configuration back to default.</p>

<hr>

<h3>If That Doesn't Work</h3>

<p>If the error keeps coming back after all of those, none of the automation is getting there and you'll need to sort it yourself. That means telling Junk Store the two things it's missing: where the game is installed, and which executable to launch.</p>

<div class="js-callout js-callout--warning">
<strong>Before you start:</strong> The steps below edit the game's entry in the Junk Store database directly, so take your time and only change the fields listed here. <strong>Reset Launch Options won't undo a mistake</strong>, because it builds the launch options from those same database entries. If you do end up in a mess, use <strong>Uninstall Game</strong> and then <strong>Delete from Database</strong>, both under <strong>sliders menu &gt; Manage</strong>, then refresh your games list and start again from scratch.
</div>

<hr>

<h3>Step 1: Set the Install Path</h3>

<div class="install-guide">
<ol>

<li>
<strong>Open Game Details</strong>
<p>On the game's page in Junk Store, select the <strong>cog icon</strong>.</p>
<img src="/assets/images/tutorials/nil-path-error/game-page-cog.webp" alt="Junk Store game page with the cog icon selected" width="600" height="375" loading="lazy" />
<p>From the <strong>Configuration</strong> menu, choose <strong>Game Details</strong>.</p>
<img src="/assets/images/tutorials/nil-path-error/cog-game-details.webp" alt="Junk Store Configuration menu with Game Details selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Select the Install Path Field</strong>
<p>Scroll down to <strong>Install Path</strong>. If it says <em>Select directory...</em>, that's your problem right there: Junk Store has no idea where the game is. Select the field to open the file manager in directory picker mode.</p>
<img src="/assets/images/tutorials/nil-path-error/install-path-empty.webp" alt="Game Details screen with an empty Install Path field" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Find Your Game Folder</strong>
<p>Navigate to wherever the game actually installed. Use the sidebar to jump to your Games folder or your SD card, then work your way down to the game's own folder. With the right folder highlighted, press <kbd>X</kbd> to <strong>Accept</strong>. That drops you back on the Game Details screen with the path filled in.</p>
<img src="/assets/images/tutorials/nil-path-error/select-directory.webp" alt="Select Directory picker with the game folder highlighted and the X to Accept prompt" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Save It</strong>
<p>Press <kbd>X</kbd> again to <strong>Save Config</strong>. Don't skip this one. If you back out without saving, the path is gone and you'll be doing it all again.</p>
<img src="/assets/images/tutorials/nil-path-error/game-details-install-path.webp" alt="Game Details screen showing the Install Path filled in and the X to Save Config prompt" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<hr>

<h3>Step 2: Find Out Which Executable to Run</h3>

<p>Most games ship with a pile of executables, and only one of them is the game. Rather than guess, have a look at the file the storefront leaves behind that lists the launch task.</p>

<div class="install-guide">
<ol>

<li>
<strong>Open the File Manager</strong>
<p>Back on the game page, open the <strong>sliders menu</strong> and choose <strong>File Manager</strong>. It opens in the game's directory.</p>
<img src="/assets/images/tutorials/nil-path-error/game-page-sliders.webp" alt="Junk Store game page with the sliders menu button selected" width="600" height="375" loading="lazy" />
<img src="/assets/images/tutorials/nil-path-error/sliders-file-manager.webp" alt="Junk Store Actions menu with File Manager selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Open the Game's Info File</strong>
<p>For a GOG game, look for <code>goggame-&lt;gameid&gt;.info</code> in the top level of the game folder and press <kbd>X</kbd> to open it. There'll be a few files with that same <code>goggame-</code> prefix. You want the <code>.info</code> one.</p>
<img src="/assets/images/tutorials/nil-path-error/file-manager-info-file.webp" alt="Junk Store File Manager showing the game folder with the goggame info file selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Look for the Path</strong>
<p>Scroll down to the <strong>playTasks</strong> section. The <code>"path"</code> value is the executable Junk Store needs to run. In this example it's <code>hs-friendsim.exe</code>. Make a note of it.</p>
<img src="/assets/images/tutorials/nil-path-error/goggame-info-path.webp" alt="goggame info file open in Junk Store showing the playTasks path value" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<div class="js-callout js-callout--tip">
<strong>No info file?</strong> Not every storefront leaves one behind. If you can't find one, you can usually pick the right executable by name in the next step. It's normally the one named after the game and sitting in the top level of the game folder. Give the launcher, installer, <code>vcredist</code>, <code>python</code> and anything tucked away in a <code>lib</code> or <code>redist</code> folder a miss.
</div>

<hr>

<h3>Step 3: Set the Game Executable</h3>

<div class="install-guide">
<ol>

<li>
<strong>Open Run exe in Game Folder</strong>
<p>Open the <strong>sliders menu</strong> again and select <strong>Run exe in Game folder</strong>.</p>
<img src="/assets/images/tutorials/nil-path-error/sliders-run-exe.webp" alt="Junk Store Actions menu with Run exe in Game folder selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Pick Your Executable and Save It</strong>
<p>Find the executable you noted down in Step 2 and press <kbd>X</kbd> to <strong>Set Game Executable</strong>. Pressing <kbd>A</kbd> only runs it the once, which isn't what you want here. You want it saved so the Play button uses it every time.</p>
<img src="/assets/images/tutorials/nil-path-error/select-executable.webp" alt="Select executable to run list with the game exe highlighted and the X to Set Game Executable prompt" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<hr>

<h3>Step 4: Force a Compatibility Tool</h3>

<p>Because the install never registered properly, the game won't have a compatibility tool set either. You'll need to sort that out yourself.</p>

<div class="install-guide">
<ol>

<li>
<strong>Jump to the Steam Game Page</strong>
<p>Press <kbd>Y</kbd> on the game's page in Junk Store to open its Steam page, then select the <strong>cog icon</strong>.</p>
<img src="/assets/images/tutorials/nil-path-error/steam-game-page-cog.webp" alt="Steam game page for the title with the cog icon selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Open Properties</strong>
<p>Choose <strong>Properties...</strong> from the menu.</p>
<img src="/assets/images/tutorials/nil-path-error/steam-properties.webp" alt="Steam game menu with Properties selected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Tick Force Compatibility</strong>
<p>Go to <strong>Compatibility</strong>, tick <strong>Force the use of a specific Steam Play compatibility tool</strong>, and pick the version you want from the list.</p>
<img src="/assets/images/tutorials/nil-path-error/steam-compatibility.webp" alt="Steam Compatibility settings with Force compatibility ticked and GE-Proton selected" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<div class="js-callout js-callout--info">
<strong>Heads up:</strong> There's a long-standing bug in Steam where the compatibility tool doesn't stick the first time. If your selection doesn't look like it took, just set it again. It's been that way for months and it's on Valve's side, not ours.
</div>

<div class="js-callout js-callout--tip">
<strong>Not sure which version to pick?</strong> GE-Proton tends to be the safest bet for non-Steam games. See <a href="/tutorials/proton-versions/">How to Change Proton Version in Junk Store</a>.
</div>

<hr>

<h3>Hit Play</h3>

<p>That's the lot. Head back to the game's page in Junk Store and press <strong>Play Game</strong>. It should launch straight into the game.</p>

<img src="/assets/images/tutorials/nil-path-error/game-running.webp" alt="The game launching successfully to its title screen on Steam Deck" width="600" height="375" loading="lazy" />

<div class="js-callout js-callout--info">
<strong>Still not launching?</strong> Double check the Install Path actually saved, and that the executable you picked is the game itself rather than a launcher or a setup file. If it's still playing up, come and see us on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> and we'll give you a hand.
</div>
