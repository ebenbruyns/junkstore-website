---
layout: post
title: "Junk Store Tested - February 1, 2026"
date: 2026-02-01 11:24:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, game-testing, epic-games, gog, amazon-games]
slug: "games-tested-feb-01"
excerpt: "Weekly testing update featuring 10 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260131-hero.jpg
header:
  teaser: /assets/images/blog/260131-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 10 games across Epic, GOG, Amazon storefronts, including Arcade Paradise and Cat Quest II, both working great out of the box (and both dangerously addictive).
</div>

G'day Everyone!

Slowly getting back into the swing of things, but I need to pick up the pace. There's so much I want to do, and I really need to start knocking things off my to-do lists!

This week's Epic giveaway is *Definitely Not Fried Chicken*, and it's an interesting one. If you've ever wondered what it would be like to be Gus Fring from Breaking Bad, this is your chance!

I have a confession so please don't judge, but retesting Arcade Paradise totally has my number this weekend! Between that and revisiting Cat Quest II (a series I love), I knew I was going to get lost in a game at some point. I'd been feeling the pull to actually invest in something recently, and the arcade games within Arcade Paradise have me completely hooked. Looks like this was the one that finally got me.

## Housekeeping Notes

A few quick updates before we dive into the games:

* **Decky Loader + 2.0 Conflict:** If running both together, use the TEST channel build. It's the same stable build, just packaged without a component that conflicts with Decky (since Decky already includes it). We're using the TEST channel to keep it separate and easy to distinguish.
* **GOG Extension:** New version (v0.1.11) available on the <a href="https://portal.junkstore.xyz/" target="_blank" rel="noopener">Junk Store Portal</a> with LSFG support. All Patreon/Ko-fi supporters have been migrated — sign in with your original email to access.
* **LSFG-VK Support:** Now built into Junk Store with easy toggles. No need to manually add environment variables. Find it under the **Proton Config** menu (change the dropdown to "All"). You may need to try different Proton versions to find one that works for your game. <a href="https://www.junkstore.xyz/blog/lsfg-frame-generation-built-in/" target="_blank" rel="noopener">More info →</a>
  * **Decky Plugin:** v1.1.13 (Main Decky store)
  * **GOG Extension:** v0.1.11 (Junk Store Portal)
  * **Junk Store 2.0 (without Decky Loader):** v2.5.0.0-beta-20260111-140530 (Beta channel)
  * **Junk Store 2.0 (with Decky Loader):** v2.4.1.0-test-20260108-100341 (Test channel)

## Current System Setup
* **<a href="/buy_now/">Junk Store 2.0</a>**: v2.5.0.0-beta (for itch.io use **Extension** Channel: beta)
* **Junk Store Plugin**: v1.1.13 (Testing Store)
* **GOG Extension**: v0.1.11 (can be purchased & downloaded from the [Junk Store Portal](https://portal.junkstore.xyz/))
* **Decky Loader**: v3.2.1 (Prerelease)
* **Proton**: GE-Proton 10.26
* **SteamOS**: v3.7.19 (Stable)

Let's get to it, here's this week's findings...

## This Week's Featured Games <a href="/tested-games/" class="inline-games-cta-button">View Full List →</a>

> **💡 Tip:** Click any game title below to view full compatibility details, testing notes, and system requirements in our games database!

### Epic Games Giveaway

This week featuring Definitely Not Fried Chicken.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1036240/library_600x900.jpg" alt="Definitely Not Fried Chicken" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Definitely%20Not%20Fried%20Chicken">Definitely Not Fried Chicken</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Definitely Not Fried Chicken is a business management sim with a Twist.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Technotopia, ELDERBORN.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2825110/library_600x900.jpg" alt="Technotopia" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Technotopia">Technotopia</a></strong> <span class="store-badge amazon">Amazon</span>
    <div class="game-description">Welcome to Technotopia, a city-builder card game.  Take on the role of an AI designed to build a perfect city.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/727850/library_600x900.jpg" alt="ELDERBORN" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=ELDERBORN">ELDERBORN</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">ELDERBORN - a Metal AF* Slasher with brutal FPP melee combat and souls-like/RPG character progression.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on Shadow Tactics: Aiko's Choice, Fall of Porcupine, Gravewood High, Neurodeck : Psychological Deckbuilder, Neverwinter Nights: Enhanced Edition.

<div class="game-entry">
  <img src="https://images.gog.com/61636070654f9116b074496336bcff4bd3c1c387cd104a4b2dd8d7214f0af652.jpg?namespace=gamesdb" alt="Shadow Tactics: Aiko's Choice" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Shadow%20Tactics%3A%20Aiko's%20Choice">Shadow Tactics: Aiko's Choice</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Aiko's Choice is a brand-new standalone addon to the beloved stealth tactics game Shadow Tactics.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/80f132783b0e223657bb24294559fb9cc005ad4739f6b974fc64e6f544f3a811.jpg?namespace=gamesdb" alt="Fall of Porcupine" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Fall%20of%20Porcupine">Fall of Porcupine</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Guide young Finley through his first weeks at a provincial hospital.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/35b5628292f545e7ca27f7a0f02942d7a9f2571f1dc3c98a31cdc5abbb709be8.jpg?namespace=gamesdb" alt="Gravewood High" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Gravewood%20High">Gravewood High</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">An infinitely replayable stealth horror game set in high school - with destructible environments, randomized level layouts and a smart opponent that develops new abilities the more you play.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1253860/library_600x900.jpg" alt="Neurodeck : Psychological Deckbuilder" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Neurodeck%20%3A%20Psychological%20Deckbuilder">Neurodeck : Psychological Deckbuilder</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Neurodeck is a psychological deckbuilding card game to challenge your fears.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/7ca8e2974f49daca1f2b037c5af04652f1d224a68b5b9ea042ad27e45dfb931f.jpg?namespace=gamesdb" alt="Neverwinter Nights: Enhanced Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Neverwinter%20Nights%3A%20Enhanced%20Edition">Neverwinter Nights: Enhanced Edition</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Neverwinter Nights: Enhanced Edition is an updated version of the 2002 video game Neverwinter Nights.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Arcade Paradise, Cat Quest II.

<div class="game-entry">
  <img src="https://images.gog.com/988294590b4a4f80c1cd747ba8e5bc613fb3b4855fa102c6a000d16de03b5aee.jpg?namespace=gamesdb" alt="Arcade Paradise" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Arcade%20Paradise">Arcade Paradise</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Welcome to Arcade Paradise, the 90’s retro arcade adventure game.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/3df9be1cc924ce21ff37b57061123297a17af9e66960a964a599a2961326dcaf.jpg?namespace=gamesdb" alt="Cat Quest II" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Cat%20Quest%20II">Cat Quest II</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Open-world action-RPG in a fantasy realm of cats and dogs. Sequel to the award-winning original, CAT QUEST II lets you play solo or with a friend, as both a cat and dog! Quest in a world filled with magic, defeat monsters and collect loot in a catventure like never before!</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

Next week's Epic freebies include <a href="https://store.epicgames.com/en-US/p/botany-manor-e7c456" target="_blank" rel="noopener">Botany Manor</a> and <a href="https://store.epicgames.com/en-US/p/pixel-gun-3d-poison-retro-set-55a7dd" target="_blank" rel="noopener">Poison Retro Set</a>. For the Poison Retro Set, you'll need to have the base game <a href="https://store.epicgames.com/en-US/p/pixel-gun-3d-812855" target="_blank" rel="noopener">Pixel Gun 3D</a> (which is free). Next week also brings a new month of freebies from Amazon Gaming. Looking forward to finding out what's in store for us!

**Which of these games are you most excited to try?** Join our community on Discord or reddit and let us know! We love hearing about your Steam Deck gaming experiences and which titles you're planning to add to your library next.

We hope you're having a wonderful time wherever you are in the world, and as always, if you've got any questions about these games or Junk Store in general, please don't hesitate to reach out through our community channels.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for an all-in-one launcher?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Stop juggling multiple tools — upgrade to the all-in-one solution</p>
</div>

---

*All compatibility information is based on real testing with the hardware and software versions listed above.*

*Have questions about any of these featured games? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

<style>
.weekly-highlights {
  background: rgba(0, 86, 179, 0.15);
  border-left: 4px solid #0056b3;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 4px;
  font-size: 1.05rem;
  line-height: 1.6;
}

blockquote {
  padding: 10px 15px !important;
  margin: 15px 0 !important;
  font-size: 0.95rem !important;
  line-height: 1.5 !important;
}

blockquote p {
  margin-bottom: 0 !important;
}

.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-left: 8px;
  color: white !important;
}

.discord-btn {
  background: #5865f2;
}

.reddit-btn {
  background: #ff4500;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white !important;
  opacity: 0.9;
}

.inline-blog-cta {
  text-align: center;
  background: #1e2a38;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border: 1px solid #3a4a5c;
}

.inline-blog-cta p {
  margin-bottom: 15px;
  color: #fff;
  font-size: 1.1rem;
}

.inline-blog-cta-button {
  display: inline-block;
  background: #0056b3;
  color: #fff !important;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 10px 0;
  border: 2px solid #0056b3;
}

.inline-blog-cta-button:hover,
.inline-blog-cta-button:visited,
.inline-blog-cta-button:visited:hover {
  background: #004494;
  border-color: #004494;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 86, 179, 0.4);
  text-decoration: none;
}

.inline-cta-subtext {
  margin-top: 8px;
  color: #cceeff;
  font-size: 0.9rem;
  font-style: italic;
}

.game-entry {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  align-items: flex-start;
}

.game-entry .game-thumbnail {
  flex-shrink: 0;
  max-height: 120px;
  max-width: 90px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
}

.game-entry .game-details {
  flex: 1;
}

.game-entry .game-details strong {
  display: inline;
}

.inline-games-cta-button {
  white-space: nowrap;
  display: inline;
  margin-left: 10px;
}

.game-entry .compatibility-info {
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid #ffa366;
  padding: 12px 15px;
  margin-top: 15px;
  border-radius: 4px;
}

.game-entry .compatibility-line {
  font-weight: 600;
  margin: 4px 0;
  font-size: 0.95rem;
}

.game-entry .game-description {
  margin-bottom: 8px;
  line-height: 1.4;
  color: #e0e0e0;
}

.store-badge {
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 8px;
  display: inline-block;
}

.store-badge.epic {
  background-color: #444;
  color: #fff;
}

.store-badge.gog {
  background-color: #863399;
  color: #fff;
}

.store-badge.amazon {
  background-color: #00a14f;
  color: #fff;
}

.store-badge.itch {
  background-color: #fa5c5c;
  color: #fff;
}
</style>