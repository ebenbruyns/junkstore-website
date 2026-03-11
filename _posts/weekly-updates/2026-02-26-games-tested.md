---
layout: post
title: "Junk Store Tested - February 27, 2026"
date: 2026-02-27 09:14:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog]
slug: "games-tested-feb-27"
excerpt: "Weekly testing update featuring 6 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/weekly-updates/260226-hero.jpg
header:
  teaser: /assets/images/blog/weekly-updates/260226-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 6 games across GOG and Epic storefronts. Captain Blood looks like a bit of fun, and Figment was a reminder   that it's been languishing on my backlog. Both games work out of the box on both versions of Junk Store.
</div>

G'day Everyone!

This week has been a bit disrupted with a quick trip across to the mainland. We had a fair few things to do, most importantly our monthly grocery shop! Almost everything has been put away and we are now recovered from the chaos and speed of navigating the city. It takes us a while to get over our excursions to town, we're not used to the noise and pace of city life. It was enjoyable though as we got to catch up with my sister, brother-in-law and my two nephews. Always great to have the opportunity to catch up with family! Anyway, we've got plenty to get through so need to get stuck back in to Junk Store tasks. Unfortunately I wasn't able to test that many games this week, but I'm hoping to get back on track this weekend!

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

This week featuring Return to Ash, Stalcraft: X.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/3445830/library_600x900.jpg" alt="Return to Ash" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Return%20to%20Ash">Return to Ash</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">The hospital was empty. Quiet, and brighter than usual... like waking up on a snow day. But I didn't feel cold. I didn't feel much of anything.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1818450/library_600x900.jpg" alt="Stalcraft: X" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Stalcraft%3A%20X">Stalcraft: X</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">STALCRAFT: X is the largest online game set in the open world of the Chernobyl Exclusion Zone.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Ambition: A Minuet in Power, Captain Blood.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/949200/library_600x900.jpg" alt="Ambition: A Minuet in Power" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Ambition%3A%20A%20Minuet%20in%20Power">Ambition: A Minuet in Power</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">A young woman finds herself alone in the streets of Paris, far from home and abandoned by the love of her life.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/3040220/library_600x900.jpg" alt="Captain Blood" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Captain%20Blood">Captain Blood</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Captain Blood is a pirate-themed action game where you play as a fearsome pirate seeking gold and glory.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Figment, Flashout 3D: Enhanced Edition.

<div class="game-entry">
  <img src="https://images.gog.com/1286900fea4fb4f154987f15bb5e11396670b1c174ca31e0eaf96835442890ff.jpg?namespace=gamesdb" alt="Figment" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Figment">Figment</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">A musical action-adventure set in the recesses of the human mind.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/237161d745a564f62edad01fd73fe243a64e2f89db5573212ec0cf5624c1528f.jpg?namespace=gamesdb" alt="Flashout 3D: Enhanced Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Flashout%203D%3A%20Enhanced%20Edition">Flashout 3D: Enhanced Edition</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Flashout 3D is the best racing experience for your mobile device.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

Today's Epic Games giveaways include <a href="https://store.epicgames.com/en-US/p/boxes-lost-fragments-079041" target="_blank" rel="noopener">Boxes: Lost Fragments</a> and <a href="https://store.epicgames.com/en-US/p/my-night-job-a416a6" target="_blank" rel="noopener">My Night Job</a>.

Amazon Prime Gaming is offering a GOG code for <a href="https://www.gog.com/en/game/rebel_galaxy_outlaw" target="_blank" rel="noopener">Rebel Galaxy Outlaw</a>, an Epic code for <a href="https://store.epicgames.com/en-US/p/total-war-attila-1b8242" target="_blank" rel="noopener">Total War: ATTILA</a>, and an Amazon Luna code for <strong>Tavern Talk</strong>.

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