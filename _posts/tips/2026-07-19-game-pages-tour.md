---
layout: junkstore-post
categories: [Tip of the Week]
tags: [junk-store, steam-deck, tips]
toc: true
title: "A Proper Tour of Our Junk Store Tested Game Pages"
date: 2026-07-19
published: true
slug: "game-pages-tour"
image: /assets/images/blog/tips/game-pages-tour/game-pages-tour-hero.webp
header:
  teaser: /assets/images/blog/tips/game-pages-tour/game-pages-tour-thumb.webp
description: "A section-by-section tour of our Junk Store tested game pages: Steam Deck compatibility results, setup notes, ProtonDB and Deck Verified ratings, download sizes, playtimes, age ratings and more."
excerpt: "A top-to-bottom tour of our Junk Store tested game pages - every section explained, from Steam Deck compatibility at the top to related games down the bottom."
---

Earlier this week I [posted](/blog/new-game-pages/) about the updates I've been steadily making to how we show what we've found testing games on Steam Deck. What started out as a basic [searchable table](/games/tested/) progressed to one with modals containing testing info for each game, and now to what we have today: a full page per game packed with not only Junk Store compatibility and testing data but other useful bits collated into one place. This is the follow-up to that post, where I'll walk you through the sections so you know what's there.

<h2 style="text-align: left !important; margin-left: 0;">Starting at the Top</h2>

<img src="/assets/images/blog/tips/game-pages-tour/sections/01-hero.webp" alt="Top of a Junk Store game page showing the banner art, game title and badge row">
<em>Banner art, title and a row of badges up top</em>

Every page renders with the game's banner art, its name, and a row of little badges. Most are self-explanatory - which store it's from, when we last tested it, the age rating - but two are worth knowing about:

- **Previously Free** - this game has been given away at some point. Hover over the badge and it'll tell you exactly when. Handy for spotting games you might already own without realising it.
- **Community Tested** - the testing data came from a community member rather than from us. Same table, same page, we just flag it so you know where it came from.

<img src="/assets/images/blog/tips/game-pages-tour/sections/11-badges.webp" alt="Celeste game page top showing Previously Free and Community Tested badges in the badge row">
<em>Both badges in the wild: Celeste was given away free and tested by the community</em>

<h2 style="text-align: left !important; margin-left: 0;">Junk Store Compatibility</h2>

<img src="/assets/images/blog/tips/game-pages-tour/sections/02-test-results.webp" alt="Steam Deck Compatibility card with side-by-side Decky plugin and Junk Store Pro ratings">
<em>Two ratings side by side: the Decky plugin and Junk Store Pro</em>

This card is the whole reason the pages exist, and it's where things started: a simple compatibility rating for playing via Junk Store. Every game we test is run on both versions of Junk Store, the Decky plugin and Junk Store Pro, so you get two ratings side by side, one for each. Since Amazon and itch integrations are only available in Junk Store Pro, the plugin column says so rather than leaving you guessing. The same goes for DOS, ScummVM and Linux games; those are only supported through Junk Store Pro.

The colours work the way you'd hope: green means it works out of the box, yellow means it runs with some setup, and red means it took some advanced fiddling to get going.

When a game needed more than "works out of the box", the **setup notes** live right here - what we changed, what to watch for, and occasionally a screenshot when the setup is easier shown than told. As you can see, The Witcher 3 works out of the box with no extra setup or tweaking needed, which is honestly the best kind of test result.

<img src="/assets/images/blog/tips/game-pages-tour/sections/10-setup-notes.webp" alt="Alan Wake compatibility card showing yellow Some Setup Required ratings with a setup notes box beneath">
<em>When a game needs a hand, the setup notes sit right under the ratings (Alan Wake shown)</em>

<h2 style="text-align: left !important; margin-left: 0;">Third Party Game Scores and Ratings</h2>

<img src="/assets/images/blog/tips/game-pages-tour/sections/03-references.webp" alt="3rd-party references section with Metacritic, OpenCritic, Steam reviews, GOG rating, ProtonDB and Steam Deck tiles, plus Valve's test notes">
<em>Review scores and compatibility ratings, with Valve's own test notes expanded below</em>

Below our results sits the 3rd-party references section, and it's grown a fair bit. For review scores you get **Metacritic** and **OpenCritic**, plus the **Steam user review** percentage and, on GOG games, GOG's own **star rating**. For compatibility there's **ProtonDB** and Steam's own **Deck Verified** rating. Hover over a tile for the detail behind it: ProtonDB tells you how many reports the rating is based on, and the Steam reviews tile carries the review count.

The Witcher 3 sweeps this whole section: 92 on Metacritic, 97% (Overwhelmingly Positive) across 877,000 Steam reviews, 4.8 stars on GOG, Platinum on ProtonDB and Verified from Steam. One thing to keep in mind though: these reflect each service's own testing, not ours, and they don't always agree with what we found. I'm sure you've had this experience, or seen someone asking about how or if a game runs; Steam or ProtonDB can be misleading, saying it's unverified, unsupported or broken when it actually works fine. If that's been our finding for a game, the tile gets a little note pointing you back up to our result.

And if you want to know why a game got its Deck Verified badge, there's a dropdown with Valve's own test notes: the individual checks they passed or flagged, like whether the on-screen text is legible or the default controls just work. Handy when you want to see what's behind the badge rather than just take its word for it.

<h2 style="text-align: left !important; margin-left: 0;">Technical Details</h2>

<img src="/assets/images/blog/tips/game-pages-tour/sections/04-technical-details.webp" alt="Technical Details grid showing controller support, HDR, recommended Proton version and more">
<em>The technical grid, the stuff you want to know before you install</em>

The technical details grid covers the questions that you may have before installing a game. Does it have controller support? What Proton version does it need to run? Does it have a launcher I need to download or an account I need to create to play it? To name the main ones.

When there's more to say, free-text notes appear underneath - things like controller quirks, a custom executable to point at, extra dependencies, performance observations and known issues. I don't do FPS counts or any tweaking like that (maybe one day). My aim is to test that the game launches and plays well without crashing. I'll leave the performance tweaking to those who know better; that's just outside my wheelhouse for now.

Store-specific extras show up here too: Epic games get a feature row showing achievements, cloud saves and offline play, and GOG games show only cloud save support.

<img src="/assets/images/blog/tips/game-pages-tour/sections/09-epic-features.webp" alt="Epic Features row with Achievements, Can Play Offline and Cloud Saves chips">
<em>Epic games get a feature row like this (Alan Wake II shown)</em>

<h2 style="text-align: left !important; margin-left: 0;">Sidebar Info</h2>

<div style="display:flex; flex-wrap:wrap; gap:16px; align-items:flex-start; justify-content:center; margin:1.2em 0;">
  <figure style="flex:1 1 190px; max-width:230px; margin:0;">
    <img src="/assets/images/blog/tips/game-pages-tour/sections/08a-sidebar-facts.webp" alt="Sidebar top: cover art, publisher, developer, genre, franchise, release date, download and install size, achievements and game modes" style="width:100%; height:auto;">
    <figcaption style="font-size:0.82em; text-align:center; opacity:0.8; margin-top:0.4em;">Cover and core facts</figcaption>
  </figure>
  <figure style="flex:1 1 190px; max-width:230px; margin:0;">
    <img src="/assets/images/blog/tips/game-pages-tour/sections/08b-sidebar-languages-hltb.webp" alt="Sidebar languages list with full-audio stars, plus How Long to Beat times" style="width:100%; height:auto;">
    <figcaption style="font-size:0.82em; text-align:center; opacity:0.8; margin-top:0.4em;">Languages and playtime</figcaption>
  </figure>
  <figure style="flex:1 1 190px; max-width:230px; margin:0;">
    <img src="/assets/images/blog/tips/game-pages-tour/sections/08c-sidebar-age-ratings.webp" alt="Expanded age ratings showing each board's rating and content descriptors" style="width:100%; height:auto;">
    <figcaption style="font-size:0.82em; text-align:center; opacity:0.8; margin-top:0.4em;">Age rating boards</figcaption>
  </figure>
</div>

Down the side you'll find the cover art and the quick facts: publisher, developer, genre, game modes, release date, etc.

- **Download and install size** - the download is what you'll pull down, the install size is what it takes up once it's unpacked. The Witcher 3 is around 80 GB to download and 84 GB installed, which is nice to know before you commit your SD card or SSD, especially on the big open-world games.
- **Achievements** - the total count, if the game tracks them. The Witcher 3 has 78 to chase.
- **How Long to Beat** - main story, main plus extras, and completionist times. The Witcher 3 runs 57 hours for the main story and a heroic 188 if you want to see everything.
- **Languages** - the full list, with a star marking the ones that have full audio support. The Witcher 3 lists 17 of them.
- **Age ratings** - the summary sits up in the banner, but expand this section and you get the individual ratings boards from around the world, descriptors and all.
- **Franchise** - if the game belongs to a series we've tested more of, this links straight to its franchise page.

<h2 style="text-align: left !important; margin-left: 0;">Extra Bits</h2>

After the game's description you'll find the external resources: the game's store page, PCGamingWiki, AreWeAntiCheat, HowLongToBeat, and where we've submitted one, our own ProtonDB report (like the one we filed for <a href="https://www.protondb.com/app/1309710#5Pr0WIj8A8" target="_blank" rel="noopener">The Stone of Madness</a>). If there's no link or entry then it won't be displayed, but I do keep refreshing the game's metadata so when or if any extra info is ever added, it should get picked up.

<img src="/assets/images/blog/tips/game-pages-tour/sections/06-external-resources.webp" alt="External Resources links: GOG Store, PCGamingWiki, AreWeAntiCheat and HowLongToBeat">
<em>The external links, all in one place</em>

I'm working on the **related games** section, but for now if the game is part of a series, you get cards for the other games we've tested from it. On The Witcher 3's page that's the first two Witcher games plus Thronebreaker, and the sidebar links through to the full [Witcher franchise page](/franchises/witcher/) with all four in one spot. Games without a series often show other tested games from the same developer instead. Either way, it's a dangerously easy way to lose twenty minutes clicking from game to game.

<img src="/assets/images/blog/tips/game-pages-tour/sections/07-related-games.webp" alt="Related games cards showing other tested Witcher series games">
<em>Other games in the series, right there to click through</em>

<h2 style="text-align: left !important; margin-left: 0;">That's Everything (For Now)</h2>

Every one of these pages has its own link, so next time someone asks "does X run on the Deck?", send them the page and they get all of the above in one hit. Or if you just want to see whether we (or someone from the community) have tested a game via Junk Store, you can search it up on the table.

The usual reminders still apply: with over 1,000 pages this is a work in progress, so if you spot a broken link or info that looks off, give us a shout. And the list keeps growing - every weekly giveaway gets tested, plus I'm always working through our backlog and retesting games already on the list. If you've played something through Junk Store that isn't on there yet, tell us how it went and we'll add it.

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a>, <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a> or <a href="https://lemmy.world/c/junkstore4deck" target="_blank" rel="noopener" class="community-btn lemmy-btn"><span class="lemmy-icon" style="margin-right: 6px;"></span>Lemmy</a>!*

Cheers,<br>
Annie & Eben | The Junk Store Team
