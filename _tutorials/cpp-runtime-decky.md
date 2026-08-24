---
title: "How to Install the C++ Runtime in the Decky Plugin"
description: "Fix game crashes and missing DLL errors in the Junk Store Decky plugin by installing the Microsoft Visual C++ redistributable into a game's folder by hand."
excerpt: "Install the Visual C++ redistributable by hand when a game crashes or reports a missing DLL"
layout: junkstore-page
permalink: /tutorials/cpp-runtime-decky/
date: 2025-06-26
categories: ["Decky Plugin"]
tags: ["c++", "runtime", "dependencies", "troubleshooting", "decky-plugin"]
difficulty: "Intermediate"
category: decky
section: configuration
order: 11
card_title: 'Install C++ Runtime (Decky)'
card_blurb: 'Install the Visual C++ redistributable by hand in the Decky plugin'
help_discord_channel: '#decky-plugin-support'
help_discord_url: 'https://discord.gg/q7eEPAcwsW'
---
{% include content-schema.html type="tutorial" id="cpp-runtime-decky" %}

<p class="text-center">Fix game crashes and missing DLL errors when Protontricks doesn't work.</p>

<p><em>Using Junk Store Pro? The C++ runtime comes down with the game on Epic. See <a href="/tutorials/install-dependencies/">installing game dependencies in Pro</a> instead.</em></p>

<p>Plenty of Windows games are built against Microsoft's Visual C++ redistributable and won't start without it. The manual route is to put the installer in the game's folder and run it from Junk Store.</p>

<div class="js-callout js-callout--tip">
  <strong>Each game has its own Windows environment</strong>, its Proton prefix. Whatever you install here affects that one game, so there's nothing to break elsewhere.
</div>

<div class="install-guide">

<ol>

<li>
<strong>Download the redistributable</strong>
<p>Grab it from Microsoft's own page: <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank" rel="noopener">Microsoft Visual C++ Redistributable downloads</a>.</p>
<p>Take <strong>X64 Redistributable for Visual Studio 2015-2022</strong>, saved as something like <code>VC_redist.x64.exe</code>. A game that shipped as 32-bit wants the <strong>X86</strong> one instead, so if the x64 installer makes no difference, try that.</p>
</li>

<li>
<strong>Move the file into the game's folder</strong>
<p>Junk Store only lists what's in that folder, so the installer has to sit alongside the game:</p>
<ul>
<li><strong>Epic games</strong>, The Callisto Protocol for instance: <code>~/Games/epic/TheCallistoProtocol</code></li>
<li><strong>GOG games</strong>: <code>~/Games/gog/your-game-folder</code></li>
</ul>
</li>

<li>
<strong>Open the game in Junk Store</strong>
<p>Back in Game Mode, open Junk Store and go to the game's page.</p>
</li>

<li>
<strong>Open the sliders menu</strong>
<p>Press the button with the sliders icon, next to <strong>Play Game</strong>, to open the Actions menu.</p>
<img src="/assets/images/tutorials/cpp-runtime-decky/game-page-sliders.webp" alt="A game's page in the Junk Store Decky plugin showing Cardpocalypse, with the Play Game button and the sliders and cog buttons beside it" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Run the installer</strong>
<p>Choose <strong>Run exe in Game folder</strong>, at the top of the Actions menu.</p>
<img src="/assets/images/tutorials/cpp-runtime-decky/actions-run-exe.webp" alt="The Actions menu open, with Run exe in Game folder highlighted at the top, above Reset Launch Options, Uninstall Game, Update Game, Verify Game, Repair Game, Repair and Update Game and Enable EOS overlay" width="1280" height="800" loading="lazy" />
<p>That lists every executable in the game's folder. Pick the redistributable you just put there.</p>
<img src="/assets/images/tutorials/cpp-runtime-decky/select-executable.webp" alt="The Select executable to run dialog listing the files found in the game folder: vcredist_x86.exe highlighted at the top, then UnityCrashHandler32.exe, install_deps.bat and Cardpocalypse.exe" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>Work through the installer</strong>
<p>The installer behaves as it would on Windows. Accept the licence, let it finish, then launch the game.</p>
</li>

</ol>
</div>

<hr>

<h3>If the game still won't start</h3>

<ul>
<li><strong>Try a different Proton version.</strong> A runtime that installs cleanly under one Proton version can still fail under another. See <a href="/tutorials/proton-versions/">checking and changing your Proton version</a>.</li>
<li><strong>Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB</a>.</strong> Other players note which Proton version a game wants, and any extra steps it needs.</li>
<li><strong>Runs from Run exe but not from Play Game?</strong> That points at the launch options, not the runtime. Choose <strong>Reset Launch Options</strong> from the same Actions menu to put them back to default.</li>
</ul>
