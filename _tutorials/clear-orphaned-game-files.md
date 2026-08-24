---
title: "How to Clear Out Orphaned Non-Steam Game Files on Steam Deck"
description: "Free up Steam Deck storage without reformatting. Use the Junk Store Pro File Manager to find leftover Proton prefixes and shader cache from games you've uninstalled, check them for saves, and clear them out in Game Mode."
excerpt: "Find the leftover Proton prefixes and shader cache from games you've uninstalled, and get that space back without reformatting"
layout: junkstore-page
permalink: /tutorials/clear-orphaned-game-files/
date: 2026-08-26
categories: [Pro Version]
tags: ["storage", "file-manager", "compatdata", "shader-cache", "disk-usage", "pro-version"]
difficulty: "Beginner"
category: pro
section: configuration
order: 12
card_title: 'Clear Out Orphaned Game Files'
card_blurb: 'Clear the prefixes and shader cache left behind by games you uninstalled'
manual_links:
  - text: "Prefixes, shader caches and the numbers problem"
    url: "/docs/user/file-manager-steam/#prefixes-shader-caches-and-the-numbers-problem"
    note: "Why the folders are numbered, and how the File Manager puts names to them"
  - text: "Orphans"
    url: "/docs/user/file-manager-steam/#orphans"
    note: "What the No Game badge means and how orphans come about"
  - text: "Check for saves before you delete a prefix"
    url: "/docs/user/file-manager-steam/#check-for-saves-before-you-delete-a-prefix"
    note: "Where saves sit inside a prefix, and how to recover them after a reinstall"
  - text: "Selecting several files"
    url: "/docs/user/file-manager-driving/#selecting-several-files"
    note: "Paint-selecting with the right trigger, and the keyboard equivalents"
  - text: "Disk Usage"
    url: "/docs/user/file-manager-tools/#disk-usage"
    note: "The treemap analyser in full"
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
---
{% include content-schema.html type="tutorial" id="clear-orphaned-game-files" %}

<p class="text-center">Uninstalling a game doesn't remove its Proton prefix or its shader cache. Test enough games and those leftovers take up a lot of storage. This covers how to find them, check what's inside them, and delete them in Game Mode.</p>

<div class="js-callout js-callout--info">
<strong>You'll need:</strong> Junk Store Pro, which is where the File Manager lives. Everything below is done in Game Mode.
</div>

<hr>

<h3>What Uninstalling Leaves Behind</h3>

<p>Every Windows game you run gets two folders of its own, both named after the game's numeric ID rather than its name:</p>

<pre><code>~/.steam/steam/steamapps/compatdata/1091500/     &lt;- its Proton prefix
~/.steam/steam/steamapps/shadercache/1091500/    &lt;- its shader cache</code></pre>

<p>The prefix is effectively a small Windows install of its own, and it holds your user data for that game: <strong>save files</strong>, settings and configs, controller bindings, registry entries, and anything else the game wrote down while you played it. Step 5 comes back to this before you delete anything.</p>

<p>The shader cache is the harmless one. It holds precompiled shaders so the game runs smoothly instead of stuttering while it compiles them, and nothing in it is yours.</p>

<p>Those folders belong to Steam rather than to Junk Store, so when you uninstall the game they stay put. A Deck picks up hundreds of them over a couple of years, and the usual problem is that a folder called <code>3671418494</code> tells you nothing about whether it's safe to delete.</p>

<p>The File Manager puts the game's name against each numbered folder, and flags the ones nothing on your Deck claims any more.</p>

<hr>

<h3>Step 1: Check Your Free Space</h3>

<p>Worth knowing your number before you begin, so you can see what you got back. Go to <strong>Steam Settings &gt; Storage</strong> and note your free space and your NON-STEAM figure.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/storage-before-summary.webp" alt="Steam Deck Storage settings showing the internal drive with 52.4 GB free of 938.4 GB, and the usage bar broken into Games 67.99 GB, DLC 18.12 GB, Shaders 2.65 GB, Media 29.06 MB and Non-Steam 797.29 GB" width="700" height="257" loading="lazy" />

<div class="js-callout js-callout--tip">
<strong>Don't panic at the NON-STEAM number.</strong> It's a catch-all for anything Steam didn't install itself, so your whole non-Steam library, your apps and your downloads are all in there. Most of it has to stay, and only a slice is worth clearing.
</div>

<hr>

<h3>Step 2: Open the File Manager</h3>

<p>Hold <kbd>SELECT</kbd> and press <kbd>X</kbd> from anywhere in Steam. It's also on the Junk Store main menu, and <kbd>Ctrl</kbd>+<kbd>B</kbd> works if you have a keyboard attached. Opening it this way gives you plain file browsing, which is all this job needs. See <a href="/docs/user/file-manager/#two-ways-to-open-it">two ways to open it</a> for what changes when you open it from a game instead.</p>

<p>Press <kbd>LB</kbd> to show the sidebar if it isn't already up, then choose <strong>Compatdata</strong>.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/compatdata-folder.webp" alt="Junk Store File Manager open at steamapps/compatdata with Compatdata highlighted in the sidebar, listing folders by game name such as Alan Wake and Arcade Paradise with their ID numbers in grey" width="600" height="375" loading="lazy" />

<p>Every folder now shows the game it belongs to, with its ID still in grey next to the name in case you need to match it against something else.</p>

<hr>

<h3>Step 3: Read the Colours</h3>

<p>The manual covers this in <a href="/docs/user/file-manager-steam/#reading-the-colours">reading the colours</a>.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/compatdata-colours.webp" alt="Compatdata listing showing game names in different colours, with Borderlands 2 and Borderlands GOTY Enhanced in green as Steam games and Beglitched, Bendy and the Ink Machine and Cat Quest in blue as non-Steam games" width="600" height="375" loading="lazy" />

<table>
<thead><tr><th>Colour</th><th>What it is</th></tr></thead>
<tbody>
<tr><td><strong>Green</strong></td><td>A game from your Steam library</td></tr>
<tr><td><strong>Blue</strong></td><td>A non-Steam game, including anything Junk Store installed</td></tr>
<tr><td><strong>Yellow</strong></td><td>A runtime rather than a game, such as Proton itself</td></tr>
<tr><td><strong>Orange <em>No Game</em> badge</strong></td><td>Nothing on this device claims it. This is an orphan</td></tr>
</tbody>
</table>

<div class="js-callout js-callout--warning">
<strong>Leave the yellow ones alone.</strong> Runtimes are shared, so a yellow entry isn't being used by one game, it's being used by everything that runs through it.
</div>

<hr>

<h3>Step 4: Find the Orphans</h3>

<p>Scroll to the bottom of the list. Orphans have no game name to show, so they stay as bare numbers, carry an orange <strong>No Game</strong> badge, and the whole row is dimmed. They stand out clearly from the named entries above them.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/compatdata-no-game.webp" alt="The bottom of the compatdata listing where named entries like Wuthering Waves and XCOM 2 give way to bare numbered folders, each dimmed and carrying an orange No Game badge" width="600" height="375" loading="lazy" />

<p>An orphan means the game was uninstalled and its prefix was left behind. Those are the ones you can delete.</p>

<hr>

<h3>Step 5: Check for Saves First</h3>

<div class="js-callout js-callout--warning">
<strong>Do this one first.</strong> A Windows game usually keeps its saves inside its Proton prefix, so an orphaned prefix is an uninstalled game with its saves still sitting in it. If there's any chance you'll reinstall, have a look before it goes.
</div>

<p>Open the numbered folder and dig down to:</p>

<pre><code>&lt;the numbered folder&gt;/pfx/drive_c/users/steamuser/</code></pre>

<p><strong>Documents</strong>, <strong>Saved Games</strong> and <strong>AppData</strong> below that are the usual suspects. Copy anything worth keeping somewhere else before you carry on. There's more on this in <a href="/docs/user/file-manager-steam/#check-for-saves-before-you-delete-a-prefix">check for saves before you delete a prefix</a>.</p>

<div class="js-callout js-callout--tip">
<strong>This works in reverse too.</strong> If you've lost your saves for a game you reinstalled, this is where to look. Reinstalling often creates a fresh prefix and leaves the old one behind as an orphan with your saves still in it. Find the orphan, dig into <code>drive_c</code>, and copy them back across.
</div>

<hr>

<h3>Step 6: Move Them to the Trash</h3>

<div class="install-guide">
<ol>

<li>
<strong>Paint over the orphans</strong>
<p>Hold <kbd>R2</kbd> and move down the list. Everything you pass over gets selected, and dragging back over something removes it again. <kbd>Y</kbd> clears the lot if you want to start over. The keyboard and mouse equivalents are in <a href="/docs/user/file-manager-driving/#selecting-several-files">selecting several files</a>.</p>
<img src="/assets/images/tutorials/clear-orphaned-game-files/compatdata-select-orphans.webp" alt="Several orphaned compatdata folders selected and highlighted in blue, each still showing its No Game badge, with the named entries above them left unselected" width="600" height="375" loading="lazy" />
</li>

<li>
<strong>Open the menu and move them to the trash</strong>
<p>Press <kbd>L2</kbd> to open <strong>File Operations</strong>, or right click if you're on a keyboard and mouse. Choose <strong>Move to Trash</strong>. It tells you how many items it's about to take, which is a handy last check that you selected what you meant to.</p>
<img src="/assets/images/tutorials/clear-orphaned-game-files/compatdata-move-to-trash.webp" alt="The File Operations menu open over the file listing, offering Copy, Cut, Move to Trash with a count of 7 items, Properties and Cancel" width="600" height="375" loading="lazy" />
</li>

</ol>
</div>

<div class="js-callout js-callout--tip">
<strong>Checking a folder's size first.</strong> Highlight it, press <kbd>L2</kbd> and choose <strong>Disk Usage</strong>. It tells you what that folder takes up, so you can see whether it's worth deleting before you do it. More on that <a href="#where-else-to-look">further down</a>.
</div>

<div class="js-callout js-callout--info">
<strong>Nothing is gone yet.</strong> Everything the File Manager deletes goes to the trash first, so you can still get it back at this point. That also means the space hasn't come back yet either. Step 8 handles that.
</div>

<hr>

<h3>Step 7: Do the Same in Shader Cache</h3>

<p>Back to the sidebar, this time <strong>Shader Cache</strong>. It works the same way as compatdata, with the same colours and names.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/shadercache-colours.webp" alt="The File Manager at steamapps/shadercache with Shader Cache highlighted in the sidebar, listing the same games by name and colour as compatdata did" width="600" height="375" loading="lazy" />

<p>Scroll down and you'll find the orphans in exactly the same place, marked the same way.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/shadercache-no-game.webp" alt="Orphaned shader cache folders at the bottom of the listing, shown as dimmed bare numbers each with an orange No Game badge" width="600" height="375" loading="lazy" />

<div class="js-callout js-callout--tip">
<strong>No checking needed this time.</strong> Shader caches never hold saves, so orphaned shaders are safe to remove without looking inside. There's usually a lot more of them, too.
</div>

<p>Paint over them with <kbd>R2</kbd> the same way.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/shadercache-select-orphans.webp" alt="A long run of orphaned shader cache folders selected and highlighted in blue, all showing No Game badges" width="600" height="375" loading="lazy" />

<p>Then <kbd>L2</kbd> and <strong>Move to Trash</strong> again.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/shadercache-move-to-trash.webp" alt="The File Operations menu showing Move to Trash with a count of 39 items for the selected shader cache folders" width="600" height="375" loading="lazy" />

<hr>

<h3>Step 8: Empty the Trash</h3>

<p>This is the step people forget, and it's the reason the space doesn't come back. Everything you've deleted so far is still on the drive, taking up every byte it did before.</p>

<p>Have a look in <strong>Trash</strong> first if you want to be sure of what's in there.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/trash-folder.webp" alt="The Trash folder in the File Manager showing the numbered folders moved there earlier alongside three old Junk Store installer files of around 199 MB each" width="600" height="375" loading="lazy" />

<p>When you're happy, highlight <strong>Trash</strong> in the sidebar, press <kbd>L2</kbd>, and choose <strong>Empty Trash</strong>.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/empty-trash.webp" alt="The sidebar menu open on the Trash entry, offering Empty Trash, Open in Active Pane, Disk Usage and Cancel" width="600" height="375" loading="lazy" />

<div class="js-callout js-callout--warning">
<strong>This one is permanent.</strong> It asks first, and it's the point of no return rather than an ordinary tidy-up. Make sure you've pulled out any saves you wanted before you confirm.
</div>

<hr>

<h3>Before and After</h3>

<p>On the Deck in these screenshots, clearing the dead prefixes, the orphaned shader cache and a Downloads folder full of old installers took free space from <strong>52.4 GB to 202.1 GB</strong>. NON-STEAM dropped from 797.29 GB to 647.55 GB.</p>

<p><strong>Before:</strong></p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/storage-before-summary.webp" alt="Steam Deck Storage settings before the cleanup, showing 52.4 GB free of 938.4 GB with Non-Steam at 797.29 GB and only a thin grey section of free space at the end of the usage bar" width="700" height="257" loading="lazy" />

<p><strong>After:</strong></p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/storage-after-summary.webp" alt="The same Storage settings after the cleanup, showing 202.1 GB free of 938.4 GB with Non-Steam down to 647.55 GB and a much wider grey section of free space" width="700" height="257" loading="lazy" />

<p>That's about 150 GB back.</p>

<hr>

<h3 id="where-else-to-look">Where Else to Look</h3>

<p>Leftover prefixes are usually a fair chunk of your NON-STEAM figure, but they won't be all of it. Apps and whatever else you've downloaded over the years add up too.</p>

<p>The sidebar gets you to the spots that quietly fill up:</p>

<ul>
<li><strong>Downloads.</strong> Installers and setup files tend to collect here long after the thing they installed was set up.</li>
<li><strong>Screenshots.</strong> If you capture a lot, they mount up without you noticing.</li>
<li><strong>Documents and Desktop.</strong> Both are one press away in the sidebar.</li>
</ul>

<img src="/assets/images/tutorials/clear-orphaned-game-files/downloads-folder.webp" alt="The Downloads folder in the File Manager showing a directx folder alongside several installer files, each with its size shown on the right" width="600" height="375" loading="lazy" />

<p>What's worth keeping is your call. Plenty of people hang on to an installer so they can copy it across to another machine later. Have a look at the sizes, decide what you still want, and move the rest to the trash.</p>

<p>For anything outside those folders, use the <a href="/docs/user/file-manager-tools/#disk-usage">disk analyser</a>. Highlight any folder, or a sidebar entry like <strong>Home</strong>, press <kbd>L2</kbd> and choose <strong>Disk Usage</strong>. You get a treemap: every folder and file drawn as a rectangle sized by how much space it takes, so the biggest thing on screen is the biggest thing on disk.</p>

<img src="/assets/images/tutorials/clear-orphaned-game-files/disk-usage-treemap.webp" alt="The Disk Usage treemap showing an Epic games folder totalling 2.9 GB, drawn as four coloured rectangles sized by the space each game takes, with the selected one showing its full path and size along the bottom" width="600" height="391" loading="lazy" />

<ul>
<li><strong>It fills in as it scans</strong>, so a big folder starts showing its shape straight away rather than leaving you at a progress bar.</li>
<li><strong>Select a rectangle to drill into it.</strong> That's how you follow a large area down to whatever is actually responsible, which is usually a few levels below where you started.</li>
<li><strong>You can bin things from inside the view.</strong> Press <kbd>X</kbd> to move what you've found to the trash. It confirms first and tells you the size of what's going.</li>
</ul>

<p>Common finds are games you forgot you installed, video captures, an emulator's ROM library, or a flatpak runtime nothing uses any more.</p>

<div class="js-callout js-callout--info">
<strong>Empty the trash when you're done.</strong> Same as Step 8, and for the same reason.
</div>

<hr>

<h3>Cleaning Up a Second Deck</h3>

<p>You can do all of this to your other machine from this one. Junk Store Pro finds other Decks on your network and gives each one its own entries in the sidebar, <strong>Compatdata</strong> and <strong>Shader Cache</strong> included, with that machine's game names resolved the same way as your own. Deleting works across the connection too, so you can clear the leftovers off both Decks in one sitting.</p>

<div class="js-callout js-callout--info">
<strong>Both machines need Junk Store Pro.</strong> The other Deck has to be paired with this one first. See <a href="/docs/user/networking/#pairing-two-machines">pairing two machines</a>, or <a href="/tutorials/import-games-over-your-local-network/">How to Import Games Over Your Local Network</a> for the walkthrough.
</div>

<hr>

<div class="js-callout js-callout--info">
<strong>If a folder has you second-guessing, leave it.</strong> Come and ask on <a href="https://discord.gg/EsrPQDUNQr">Discord</a>. Better a question than a lost save.
</div>
