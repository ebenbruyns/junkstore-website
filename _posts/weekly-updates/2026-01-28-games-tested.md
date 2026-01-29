---
layout: post
title: "Junk Store Tested - January 29, 2026"
date: 2026-01-28 10:50:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, game-testing, epic-games, gog]
slug: "games-tested-jan-29"
excerpt: "Weekly testing update featuring 8 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260129-hero.jpg
header:
  teaser: /assets/images/blog/260129-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 8 games across Epic, GOG storefronts, including Cyberpunk 2077 and Arknights: Endfield both work out of the box.
</div>

G'day Everyone!

Made it back to the boat a couple of days ago; I am so glad to be home! I've got quite a lot to catch up on, and the to-do list has grown while I was away. The weather's also turned nice, which means the pull to tackle our overdue boat jobs is strong. I'll need to prioritise between my two longest lists: Junk Store and boat maintenance. Getting back into my routines should help, and with things quieting down heading into February, I'm hoping to find my feet and hit the ground running.

## Housekeeping Notes

A few quick updates before we dive into the games:

* **Decky Loader + 2.0 Conflict:** If running both together, use the TEST channel build. It's the same stable build, just packaged without a component that conflicts with Decky (since Decky already includes it). We're using the TEST channel to keep it separate and easy to distinguish.
* **Extended Trials:** Trials for Junk Store 2.0 have been extended to 21 days for the rest of the month. Plenty of time to test everything out and see if it works for your setup.
* **GOG Extension:** New version (v0.1.11) now available on the <a href="https://portal.junkstore.xyz/" target="_blank" rel="noopener">Junk Store Portal</a> with LSFG support. All Patreon/Ko-fi supporters have been migrated — sign in with your original email to access.
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

This week featuring Rustler (Grand Theft Horse).

<div class="game-entry">
  <img loading="lazy" src="https://steamcdn-a.akamaihd.net/steam/apps/844260/library_600x900.jpg" alt="Rustler (Grand Theft Horse)" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Rustler%20(Grand%20Theft%20Horse)">Rustler (Grand Theft Horse)</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Become a medieval thug in a crazy open-world action game, full of pop-culture references.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: ❓ Not tested</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Harold Halibut.

<div class="game-entry">
  <img loading="lazy" src="https://steamcdn-a.akamaihd.net/steam/apps/924750/library_600x900.jpg" alt="Harold Halibut" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Harold%20Halibut">Harold Halibut</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Harold Halibut is a handmade narrative game about friendship and life on a city-sized spaceship submerged in an alien oc...</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Featured Games

This week highlighting Cyberpunk 2077, Arknights: Endfield.

<div class="game-entry">
  <img loading="lazy" src="https://steamcdn-a.akamaihd.net/steam/apps/1091500/library_600x900.jpg" alt="Cyberpunk 2077" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Cyberpunk%202077">Cyberpunk 2077</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img loading="lazy" src="https://cdn2.steamgriddb.com/thumb/83d54de90c45accd18b3eb06e959f4c8.jpg" alt="Arknights: Endfield" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Arknights%3A%20Endfield">Arknights: Endfield</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Arknights: Endfield is a 3D real-time strategy RPG developed by HYPERGRYPH.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on Lords of Midnight.

<div class="game-entry">
  <img loading="lazy" src="https://images.gog.com/708580ed8418ada64ea16e4f223cbdc9c86abb510ac2e1fd992a9fe25b24c4d7.jpg?namespace=gamesdb" alt="Lords of Midnight" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Lords%20of%20Midnight">Lords of Midnight</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Mike Singleton's '84 classic Adventure Strategy game, brought to and updated for Windows.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: ❌ Doesn't work</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Ancient Enemy, Arcade Paradise.

<div class="game-entry">
  <img loading="lazy" src="https://images.gog.com/160a8b89ce30e123bb2022a8f54983a73a02f728fc0a85c3b9ff661eb9fc527f.jpg?namespace=gamesdb" alt="Ancient Enemy" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Ancient%20Enemy">Ancient Enemy</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Ancient Enemy is an RPG card battler set in a crumbling world where the forces of evil have already won.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img loading="lazy" src="https://images.gog.com/988294590b4a4f80c1cd747ba8e5bc613fb3b4855fa102c6a000d16de03b5aee.jpg?namespace=gamesdb" alt="Arcade Paradise" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Arcade%20Paradise">Arcade Paradise</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Welcome to Arcade Paradise, the 90’s retro arcade adventure game.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

## Looking Forward

Next week's Epic giveaway is <a href="https://store.epicgames.com/en-US/p/definitely-not-fried-chicken-a30160" target="_blank" rel="noopener">Definitely Not Fried Chicken</a>. If you're a Breaking Bad fan, this one's for you! Channel your inner Gus Fring and run a totally legitimate fried chicken restaurant that definitely isn't a front for anything suspicious. I wonder what Amazon has in store for us in February?

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