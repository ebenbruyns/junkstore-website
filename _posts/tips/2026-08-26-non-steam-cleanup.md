---
layout: junkstore-post
title: "Steam Deck Storage Full? Don't Reformat, Clear Out Your Non-Steam Files Instead"
date: 2026-08-26
published: True
categories: [Tip of the Week, Pro Version]
tags: [junk-store, steam-deck, tips]
slug: "non-steam-cleanup"
description: "Steam Deck out of space? Reformatting is overkill. Here's what that huge NON-STEAM figure in your storage settings is actually made of, and which parts of it you can safely clear out in about ten minutes."
excerpt: "That giant NON-STEAM number in your storage settings isn't all rubbish. Here's what's really in it, and the part you can clear out without wiping your Deck."
image: /assets/images/blog/tips/non-steam-cleanup/non-steam-cleanup-card.webp
header:
  teaser: /assets/images/blog/tips/non-steam-cleanup/non-steam-cleanup-card.webp
cta_heading: "Want that Non-Steam space back?"
toc: true
---

**This week's Pro tip:** we keep reading about people reformatting their Steam Deck to get their storage back, and others suggesting it as the fix. That's quite a drastic step, and you almost certainly don't need to go that far.

When your storage fills up you go looking, and Steam tells you a big chunk of it is NON-STEAM. Mine said 797 GB. Wiping the lot starts to look like the easy option.

I remember the pain of writing down every Steam ID from the game page in Junk Store, then hunting for it in the compatdata folder and the shader cache to delete it. It could take hours that way. Thankfully Eben had the foresight to build the File Manager, so a job I used to dread is now a quick one I do every couple of weeks.

{% include discord-follow.html channels="tips" label="More tips on Discord:" %}

<h2 style="text-align: left !important; margin-left: 0;">That NON-STEAM Number Isn't All Junk</h2>

Steam's storage page splits your drive into GAMES, DLC, SHADERS and MEDIA, which are the things Steam put there itself. Everything else on the drive gets swept into one bucket labelled NON-STEAM.

![Steam Deck storage settings showing the internal drive with 52.4 GB free of 938.4 GB, and the usage bar split into Games, DLC, Shaders, Media and a large Non-Steam figure of 797.29 GB](/assets/images/tutorials/clear-orphaned-game-files/storage-before-summary.webp)

<h2 style="text-align: left !important; margin-left: 0;">What's Actually In There</h2>

Whenever this comes up online it's the same question: what's actually in there, and what's taking up all the space? Most people don't realise NON-STEAM is all the stuff they've put on the Deck themselves. You'll typically find:

- **Your non-Steam games.** Everything installed through Junk Store from Epic, GOG, Amazon and itch. Usually the biggest slice by a mile, and obviously you want to keep it.
- **Proton prefixes.** Every game that runs through Proton gets one, Steam games included, and each is effectively a small Windows install holding saves, configs and registry entries. They add up quickly.
- **Extra launchers.** Some games won't start without their publisher's launcher, so it gets installed inside that game's prefix and quietly takes its share.
- **Apps you've installed.** Junk Store itself, Decky, emulators and their ROMs, media apps, anything else you've added.
- **Flatpaks.** Anything from the software store, plus the shared runtimes underneath them, which are chunkier than most people expect.
- **Old downloads.** Installers and redistributables that did their job months ago and then sat there. Visual C++ and DirectX installers are the usual suspects.
- **Your Trash.** Things you deleted and never emptied, still taking up every byte they did before.

Most of that is stuff you put there yourself and still use, so the number is never going to be small.

<h2 style="text-align: left !important; margin-left: 0;">What Gets Left Behind</h2>

Uninstalling a game doesn't remove its prefix or its shader cache. Those folders belong to Steam rather than to Junk Store, so they get left behind. Test a lot of games over a year or two and you end up with prefixes for games you no longer have installed, plus shader cache for games you can't even remember playing.

That's the part you can clear out, along with old downloads and an unemptied Trash.

The problem has always been telling which is which, because the folders are named after ID numbers rather than games. The File Manager names each one after the game it belongs to, and puts a **No Game** badge on anything nothing on your Deck claims any more.

![Junk Store Pro File Manager showing orphaned folders listed by ID, each with a No Game badge](/assets/images/tutorials/clear-orphaned-game-files/compatdata-no-game.webp)

So there's no writing down ID numbers and no trip into Desktop Mode. Hold **SELECT** and press **X** from anywhere in Steam to open it, which is one of the [Pro quick access shortcuts](/blog/pro-quick-access-shortcuts/).

<h2 style="text-align: left !important; margin-left: 0;">Finding the Rest of It</h2>

Leftover non-Steam game prefixes are usually a fair chunk of that NON-STEAM number, but they won't be all of it. Apps and whatever else you've downloaded over the years add up too. Use the File Manager to look through your other folders, and the disk analyser to work out where the big stuff actually is.

Highlight any folder, press LT and choose **Disk Usage**.

![Junk Store Pro Disk Usage treemap showing an Epic games folder totalling 2.9 GB, drawn as four coloured rectangles sized by the space each game takes up](/assets/images/tutorials/clear-orphaned-game-files/disk-usage-treemap.webp)

Every folder becomes a rectangle sized by how much space it uses, so the biggest thing on screen is the biggest thing on disk. Select one to drill into it, keep going until you find what's responsible, and bin it without leaving the view. It's usually something you forgot you installed.

If you've got two Decks, you can do the same job on the other one over your network, as long as both have Junk Store Pro. See [How to Import Games Over Your Local Network](/tutorials/import-games-over-your-local-network/) for getting them paired up.

<h2 style="text-align: left !important; margin-left: 0;">Starting Over</h2>

Wiping the Deck does clear the junk. It also clears everything else:

- Every game redownloaded, which is the entire evening gone
- Every save lost unless you backed it up first
- Every app and flatpak reinstalled
- Junk Store set up again, logins and all
- Any artwork, sorting and tweaking you'd done, back to square one

And you'll be back here in a year anyway, because the leftovers build up regardless. Reformatting doesn't stop that happening.

<h2 style="text-align: left !important; margin-left: 0;">Or Just Clearing Up</h2>

On the Deck in these screenshots, clearing the dead prefixes, the orphaned shader cache and a Downloads folder full of old installers took free space from **52.4 GB to 202.1 GB**. About 150 GB back, and nothing had to be reinstalled.

The full walkthrough is here: [How to Clear Out Orphaned Non-Steam Game Files](/tutorials/clear-orphaned-game-files/). It covers finding the leftovers, checking what's safe to remove, getting your saves out first if you might reinstall, and the step people forget that stops the space coming back.

It's worth keeping on top of this. Downloads slow down as your storage fills up, and you can run into problems when Steam goes to update itself and there's not enough room left.

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a>, <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a> or <a href="https://lemmy.world/c/junkstore4deck" target="_blank" rel="noopener" class="community-btn lemmy-btn"><span class="lemmy-icon" style="margin-right: 6px;"></span>Lemmy</a>!*

Cheers,<br>
Annie & Eben | The Junk Store Team
