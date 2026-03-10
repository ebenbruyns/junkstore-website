---
layout: post
title: "Junk Store Tested - February 17, 2026"
date: 2026-02-17 15:30:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog]
slug: "games-tested-feb-17"
excerpt: "Weekly testing update featuring 9 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260216-hero.jpg
header:
  teaser: /assets/images/blog/260216-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 9 games across GOG, Epic storefronts; ones I'd like to revisit are Lorelia and the new giveaway Hexguardian if you like tower defence games. They work out of the box on both versions of Junk Store.
</div>

G'day Everyone!

We've just come through another bout of wind and rain that battered New Zealand. Places that got smashed not that long ago copped the worst of it again this time around. Fingers crossed for some steady weather so everyone can catch their breath, take stock, and figure out their next steps.

Thankfully the worst has moved on and we've had some sun today. Hope this keeps up as we could do with some nice summer weather. I feel like I keep saying that a lot lately, but it's true: summer has come in fits and starts and hasn't really stuck around so far this year. We took advantage of the nice weather and managed to tear ourselves away from work and the boat to go for a walk today! We quickly came to the conclusion that we need to do this more 😅

In spite of the weather and wifi struggles, I managed to get some testing done and found a couple of gems I'm keen to keep playing.

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
* **Junk Store Plugin**: v1.1.13 (Main Store)
* **GOG Extension**: v0.1.11 (can be purchased & downloaded from the [Junk Store Portal](https://portal.junkstore.xyz/))
* **Decky Loader**: v3.2.1 (Prerelease)
* **Proton**: GE-Proton 10.26
* **SteamOS**: v3.7.19 (Stable)

Let's get to it, here's this week's findings...

## This Week's Featured Games <a href="/tested-games/" class="inline-games-cta-button">View Full List →</a>

> **💡 Tip:** Click any game title below to view full compatibility details, testing notes, and system requirements in our games database!

### Epic Games Giveaway

This week featuring Nobody Wants to Die, The Darkside Detective: A Fumble in the Dark.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1939970/library_600x900.jpg" alt="Nobody Wants to Die" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Nobody%20Wants%20to%20Die">Nobody Wants to Die</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Lose yourself in the dystopian world of New York, 2329; immortality comes at a price that someone has to pay.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/795420/library_600x900.jpg" alt="The Darkside Detective: A Fumble in the Dark" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=The%20Darkside%20Detective%3A%20A%20Fumble%20in%20the%20Dark">The Darkside Detective: A Fumble in the Dark</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Delouse your room with sage and pack up your travel-sized ouija board, it's time to re-enter Twin Lakes - America's 34th most haunted city.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Hexguardian.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2381740/library_600x900.jpg" alt="Hexguardian" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Hexguardian">Hexguardian</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Hexguardian is a roguelite, tower defense game where you build your own maps with hexagonal tiles.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on Golden Light, Skybound: Only Up, JDM: Rise of the Scorpion, Lorelai.

<div class="game-entry">
  <img src="https://images.gog.com/d68628682068d7873e83237f12e25aaaecac8a737da8e7acffb6bd5578facff8.jpg?namespace=gamesdb" alt="Golden Light" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Golden%20Light">Golden Light</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Golden Light is a first-person survival horror with rogue-like elements and an eerie atmosphere.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://cdn1.epicgames.com/spt-assets/b31041ff2f934d19954ee76213cf8266/astralium-2scci.png" alt="Skybound: Only Up" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Skybound%3A%20Only%20Up">Skybound: Only Up</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Get ready for an epic VR adventure.  Jump, climb, and conquer towering obstacles in a world of thrilling challenges.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/d33bb05d9daa82ec8fdec6bd290b8beed181a6fb20f29359954562f79670eeb8.jpg?namespace=gamesdb" alt="JDM: Rise of the Scorpion" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=JDM%3A%20Rise%20of%20the%20Scorpion">JDM: Rise of the Scorpion</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Discover the beginning of the story of the titular "Scorpion" through a story guided by manga panels.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/654b36507052f660e031ee9977dbc099f4a883ac7965eca1fa96037633eb9e1f.jpg?namespace=gamesdb" alt="Lorelai" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Lorelai">Lorelai</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Lorelai, a brand new emotional horror ride from the maker of The Cat Lady and Downfall, tells a coming of age story of a young girl trying to escape the hell of her toxic family home. But adulthood is like waking up from a long dream.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Endless Sky, Eschalon: Book I.

<div class="game-entry">
  <img src="https://images.gog.com/b847f182016a6127e4391121cf9d97c4c9965da76c720821459fa28e56861438.jpg?namespace=gamesdb" alt="Endless Sky" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Endless%20Sky">Endless Sky</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Endless Sky is an open source 2D space trading and combat game inspired by the classic Escape Velocity series.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/855723aa2e49504b7883c0c3384cf0cbb4575b29d8e8c787d6474876f19327b8.jpg?namespace=gamesdb" alt="Eschalon: Book I" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Eschalon%3A%20Book%20I">Eschalon: Book I</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Classic turn-based role-playing game, played with one customizable character.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

Next week's Epic Games giveaways include <a href="https://store.epicgames.com/en-US/p/return-to-ash-dee3ff" target="_blank" rel="noopener">Return to Ash</a> and <a href="https://store.epicgames.com/en-US/p/stalcraft-x-stalcraft-x-starter-edition-0b06d4" target="_blank" rel="noopener">STALCRAFT: X Starter Edition</a>.

Amazon Prime Gaming is offering GOG codes for <a href="https://www.gog.com/en/game/ambition_a_minuet_in_power" target="_blank" rel="noopener">Ambition: A Minuet in Power</a>, <a href="https://www.gog.com/en/game/captain_blood" target="_blank" rel="noopener">Captain Blood</a>, and <a href="https://www.gog.com/en/game/meganoid" target="_blank" rel="noopener">Meganoid</a>.

**Which of these games are you most excited to try?** Join our community on Discord or reddit and let us know! We love hearing about your Steam Deck gaming experiences and which titles you're planning to add to your library next.

We hope you're having a wonderful time wherever you are in the world, and as always, if you've got any questions about these games or Junk Store in general, please don't hesitate to reach out through our community channels.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for an all-in-one launcher?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store Pro Free for 7 Days
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