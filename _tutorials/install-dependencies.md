---
title: "How to Install Game Dependencies in Junk Store Pro"
description: "Install the runtimes and libraries a game needs in Junk Store Pro on Steam Deck. The Visual C++ runtime is automatic on Epic; toggle anything else in the game's Installation settings, no Desktop Mode required."
excerpt: "Toggle the runtimes and libraries a game needs in its Installation settings, and what to do when one isn't listed"
layout: junkstore-page
permalink: /tutorials/install-dependencies/
redirect_from:
  - /tutorials/cpp-runtime/
date: 2026-08-16
categories: [Pro Version]
tags: ["c++", "runtime", "dependencies", "troubleshooting", "pro-version"]
difficulty: "Beginner"
category: pro
section: configuration
order: 6
card_title: 'Install Game Dependencies'
card_blurb: 'Toggle the runtimes and libraries a game needs in its Installation settings'
manual_links:
  - text: "Per-game installation settings"
    url: "/docs/user/store-settings-reference/#per-game-installation-settings"
    note: "DLC, languages and dependencies, and why the panel differs per game"
  - text: "Installing a dependency that isn't listed"
    url: "/docs/user/game-page/#installing-a-dependency-that-isnt-in-the-dependencies-list"
    note: "The Run Exe route in full"
  - text: "Changing DLC or languages afterwards"
    url: "/docs/user/store-settings-reference/#changing-dlc-or-languages-afterwards"
    note: "Why a verify or repair is needed to move the files"
help_discord_channel: '#js-pro-support'
help_discord_url: 'https://discord.gg/EsrPQDUNQr'
help_links:
  - text: "Games won't load: C++ error"
    url: "/help/troubleshooting/#games-wont-load-cpp-error"
    note: "If a game reports a missing runtime"
  - text: "My game won't launch"
    url: "/help/troubleshooting/#game-wont-launch"
    note: "If it crashes on start"
  - text: "Troubleshooting"
    url: "/help/troubleshooting/"
    note: "All Pro version issues"
---
{% include content-schema.html type="tutorial" id="install-dependencies" %}

<p class="text-center">Games sometimes need a runtime or library before they'll start. In Junk Store Pro that's a toggle rather than a job, and the common one is handled for you.</p>

<p><em>On the Decky plugin? Runtimes are a manual process there. See <a href="/tutorials/cpp-runtime-decky/">installing the C++ runtime in the Decky plugin</a>.</em></p>

<p><strong>On Epic, the Visual C++ runtime is automatic.</strong> It comes down with the game, so the most common dependency of the lot is one you never have to think about. Anything else a game wants, you turn on yourself.</p>

<div class="js-callout js-callout--tip">
  <strong>Each game has its own Windows environment</strong>, its Proton prefix. Anything you install for one game only affects that game, so there's no risk of breaking something else.
</div>

<hr>

<h3>The Dependencies list</h3>

<p>Each game's <a href="/docs/user/store-settings-reference/#per-game-installation-settings"><strong>Installation</strong> settings</a> carry a <strong>Dependencies</strong> section, listing the supporting components that store knows the game needs. Toggle on what you want and Junk Store Pro fetches it.</p>

<div class="js-callout js-callout--tip">
  <strong>Not to be confused with Install Dependencies in Settings.</strong> That button fetches the supporting software <a href="/docs/user/settings/#system">Junk Store Pro itself</a> needs to run its extensions. The Dependencies section here belongs to one game.
</div>

<div class="install-guide">
<ol>

<li>
<strong>Open the game's Installation settings</strong>
<p>On the game's page, open the <strong>cog</strong>, then choose <strong>Installation</strong>.</p>
<img src="/assets/images/tutorials/cpp-runtime/game-settings-menu.webp" alt="A game's settings menu in Junk Store Pro, with Installation among the entries" width="1000" height="625" loading="lazy" />
</li>

<li>
<strong>Find the Dependencies section</strong>
<p>The panel is built for that particular game by asking the store what it offers, so you'll see up to four sections: DLC, Languages, Dependencies and User_Configs. <strong>A game only shows the sections that apply to it</strong>, so the panel looks different from one game to the next. That's the store answering honestly, not a fault.</p>
<img src="/assets/images/tutorials/cpp-runtime/dependencies-section.webp" alt="The Dependencies section of a game's Installation settings expanded, listing several .NET Desktop Runtime entries and UE4 Prerequisites, each with an on-off toggle set to Off, and a help pane explaining these are the dependencies available to install beyond the ones already installed" width="1280" height="800" loading="lazy" />
<p>The list can be long, and it runs well beyond runtimes: DOSBox builds, ScummVM, OpenAL, nGlide and XNA all turn up on games that need them.</p>
</li>

<li>
<strong>Toggle on what the game needs</strong>
<p>Switch on what the game is asking for, then press <strong>X</strong> to save.</p>
<img src="/assets/images/tutorials/cpp-runtime/dependency-toggled-on.webp" alt="Further down the same Dependencies list, with Quick Time switched On and reading On beneath its name, while XNA 3.5, Scumm VM, Open AL, nGlide 105 and nGlide 104 around it stay Off" width="1280" height="800" loading="lazy" />
</li>

<li>
<strong>If the game is already installed, verify or repair it</strong>
<div class="js-callout js-callout--warning">
  <strong>The panel on its own doesn't move any files.</strong> Toggling something records that you want it, it doesn't fetch it. Run <strong>Verify game</strong> or <strong>Repair game</strong> from <a href="/docs/user/game-page/">the game's own menu</a> to make the files match. Skip this and nothing appears to happen, which is the usual reason people report that changing a dependency did nothing.
</div>
<img src="/assets/images/tutorials/cpp-runtime/actions-verify-game.webp" alt="The Actions menu on a Junk Store Pro game page with Verify game highlighted, above Repair game and Proton Tricks and below Run exe in Game folder, File Manager, Manage, Run launcher with no game and Update game" width="1280" height="800" loading="lazy" />
<p>Expect it to take a while on a large game, since it checks what's already on disk before working out what's missing. On a game you haven't installed yet, there's nothing to do: the download picks up your choices.</p>
</li>

</ol>
</div>

<hr>

<h3>If it isn't on the list</h3>

<p>A game sometimes wants a runtime or library the store doesn't know about. <strong><a href="/docs/user/game-page/#installing-a-dependency-that-isnt-in-the-dependencies-list">Run Exe</a></strong> is how you install one anyway, because whatever you run through it runs inside that game's own Windows environment.</p>

<div class="js-callout js-callout--tip">
  <strong>The Visual C++ redistributable below is a worked example, not a job you need to do.</strong> On Epic it's fetched and installed with the game, as above, and on anything in the Dependencies list a toggle is all it takes. It's used here because it's the one everybody recognises. What matters is the method: any installer you can get into the game's folder can be run this way.
</div>

<div class="install-guide">
<ol>

<li>
<strong>Download the redistributable</strong>
<p>Get <strong>X64 Redistributable for Visual Studio 2015-2022</strong> from the <a href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170" target="_blank" rel="noopener">Microsoft C++ Redistributable downloads page</a>. The file is named something like <code>VC_redist.x64.exe</code>.</p>
</li>

<li>
<strong>Get the file into the game's folder</strong>
<p>Use the <strong>File Manager</strong> to copy it in, whether it's coming from an SD card, a USB drive or <a href="/tutorials/import-games-over-your-local-network/">another machine on your network</a>. Once it's in the game's folder it appears among that game's executables.</p>
</li>

<li>
<strong>Run it with Run Exe</strong>
<p>Open the <strong>sliders menu</strong> on the game's page, choose <strong>Run Exe in Game Dir</strong>, and pick the file you copied in.</p>
<img src="/assets/images/tutorials/cpp-runtime/game-page-sliders.webp" alt="A Junk Store Pro game page for Alone in the Dark, with the Play Game button and the sliders and cog buttons beside it" width="1280" height="800" loading="lazy" />
<p>The list is headed <strong>Select executable to run</strong> and shows every program found in the folder, the game's own launchers and installers included, so what you copied in may not be at the top. Press <kbd>A</kbd> on the one you want.</p>
<img src="/assets/images/tutorials/cpp-runtime/select-executable.webp" alt="The Select executable to run dialog scrolled to the bottom, with VC_redist.x64.exe highlighted, the redistributable copied in by hand, sitting below the game's own executables such as INSTALL.EXE, CLEARDRV.EXE and JACK.BAT" width="1280" height="800" loading="lazy" />
<p><strong>Run in same directory as executable</strong> is a toggle at the top of that list, above the executables and out of shot here, and it's off to begin with. Some installers only work when started from their own folder, because they expect their data files beside them, so if one runs and then complains about missing files, turn it on and try again. Set it before you press anything, since it applies to whatever you run next.</p>
</li>

<li>
<strong>Follow the installer</strong>
<p>It behaves the same as it would on a Windows PC. What it installs lands in that game's environment, where the game can find it.</p>
</li>

</ol>
</div>

<hr>

<h3>If the game still won't run</h3>

<ul>
<li><strong>Try a different Proton version.</strong> A dependency that installs cleanly under one Proton version can still fail under another. See <a href="/tutorials/proton-versions/">how to change Proton version</a>.</li>
<li><strong>Check <a href="https://www.protondb.com" target="_blank" rel="noopener">ProtonDB</a>.</strong> Other players note which Proton version a game wants, and any extra steps it needs.</li>
<li><strong>Works with Run Exe but not the Play button?</strong> That points at the launch options, not the dependency. Reset them from the game's <strong>Manage</strong> menu.</li>
</ul>
