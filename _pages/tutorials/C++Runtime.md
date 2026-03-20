---
title: "How to Install the C++ Runtime"
description: "Fix game crashes and missing DLL errors by manually installing Microsoft Visual C++ redistributables when Protontricks fails on Steam Deck."
excerpt: "Fix games that crash due to missing Visual C++ redistributables using Junk Store's built-in tool"
layout: junkstore-page
permalink: /tutorials/cpp-runtime
categories: ["Universal"]
tags: ["c++", "runtime", "dependencies", "troubleshooting", "both-versions"]
difficulty: "Intermediate"
---

<p class="text-center">Fix game crashes and missing DLL errors when Protontricks doesn't work.</p>

<div class="install-guide">

<p>Some games need a special Microsoft file (called the <strong>C++ Runtime</strong>) to work properly. Normally, we'd use <strong>Protontricks</strong> to install this — but sometimes Protontricks doesn't do the job. Here's how you can install it manually.</p>

<ol>

<li>
<strong>Download the C++ Redistributable</strong>
<p>Go to the official Microsoft download page: <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank" rel="noopener">Microsoft C++ Redistributable Downloads</a></p>
<p>Download the file: <strong>X64 Redistributable for Visual Studio 2015-2022</strong> (the file name will be something like <code>VC_redist.x64.exe</code>)</p>
</li>

<li>
<strong>Move the File to Your Game Folder</strong>
<p>Move the downloaded file into your game's folder:</p>
<ul>
<li><strong>Epic Games</strong> (e.g., The Callisto Protocol): <code>~/Games/epic/TheCallistoProtocol</code></li>
<li><strong>GOG Games</strong>: <code>~/Games/gog/your-game-folder</code></li>
</ul>
</li>

<li>
<strong>Open the Game in Junk Store</strong>
<p>Open <strong>Junk Store</strong> and navigate to the game's page.</p>
</li>

<li>
<strong>Open the Sliders Menu</strong>
<p>Press the button with the sliders icon to open the menu.</p>
</li>

<li>
<strong>Run the Installer</strong>
<p>Choose <em>Run EXE in game folder</em> and select <strong>VC_redist.x64.exe</strong>.</p>
</li>

<li>
<strong>Complete the Installation</strong>
<p>Follow the install instructions like you would on a Windows PC. Once it's done, try launching the game again — it should now work properly.</p>
</li>

</ol>
</div>

<hr>

<h3>Extra Tips If the Game Still Isn't Working</h3>

<ul>
<li><strong>Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a></strong> — Other players often share which Proton version works best or if extra steps are needed.</li>
<li><strong>Try a different Proton version</strong> — Try using <strong>GE-Proton</strong> as it often has required fixes for non-Steam games.</li>
<li><strong>Game works with "Run EXE" but not the Play button?</strong> — Try <strong>resetting the launch options</strong> in Junk Store to default.</li>
<li><strong>Still no luck? Try a fresh start.</strong> — You can <strong>delete the game's prefix</strong> (basically its "Windows install environment") from Junk Store. Be careful — this will delete all saved data and settings for that game!</li>
</ul>

<hr>

<div class="js-callout js-callout--help">
<h3>Stuck or need help?</h3>
<p><strong>Need setup help? We're here for you!</strong> Most issues are quick fixes.</p>

<p><strong>Quick fixes for common issues:</strong></p>
<ul>
<li><a href="/faq/">FAQ</a> - General questions</li>
<li><a href="/troubleshooting/">Troubleshooting</a> - Common issues</li>
</ul>

<p><strong>Still stuck?</strong> Join us on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> for community support.</p>
</div>
