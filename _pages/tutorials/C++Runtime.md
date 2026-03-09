---
title: "How to Install the C++ Runtime"
description: "Fix game crashes and missing DLL errors by manually installing Microsoft Visual C++ redistributables when Protontricks fails on Steam Deck."
excerpt: "Step-by-step guide on downloading and installing C++ runtime dependency"
layout: junkstore-page
permalink: /tutorials/cpp-runtime
categories: ["Universal"]
tags: ["c++", "runtime", "dependencies", "troubleshooting", "both-versions"]
difficulty: "Intermediate"
---

<h2 class="centered-header">How to Install the C++ Runtime</h2>

<p style="text-align: center;">Fix game crashes and missing DLL errors when Protontricks doesn't work.</p>

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

---

<h3 style="margin-top: 2rem;">Extra Tips If the Game Still Isn't Working</h3>

<ul>
<li><strong>Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB.com</a></strong> — Other players often share which Proton version works best or if extra steps are needed.</li>
<li><strong>Try a different Proton version</strong> — Try using <strong>GE-Proton</strong> as it often has required fixes for non-Steam games.</li>
<li><strong>Game works with "Run EXE" but not the Play button?</strong> — Try <strong>resetting the launch options</strong> in Junk Store to default.</li>
<li><strong>Still no luck? Try a fresh start.</strong> — You can <strong>delete the game's prefix</strong> (basically its "Windows install environment") from Junk Store. Be careful — this will delete all saved data and settings for that game!</li>
</ul>

---

<div style="background-color: #2d1b1b; border: 2px solid #e74c3c; border-radius: 12px; padding: 2rem; margin: 2rem 0;">
<h3 style="margin-top: 0; color: #e74c3c;">Stuck or need help?</h3>
<p><strong>Need setup help? We're here for you!</strong> Most issues are quick fixes.</p>

<p><strong>Quick fixes for common issues:</strong></p>
<ul style="margin-left: 1rem;">
<li><a href="/faq/" style="color: #66bfff;">FAQ</a> - General questions</li>
<li><a href="/troubleshooting/" style="color: #66bfff;">Troubleshooting</a> - Common issues</li>
</ul>

<p><strong>Still stuck?</strong> Join us on <a href="https://discord.gg/6mRUhR6Teh" style="color: #66bfff;">Discord</a> for community support.</p>
</div>
