---
layout: post
title: "Junk Store Tested - March 02, 2026"
date: 2026-03-02 10:45:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog, amazon-games]
slug: "games-tested-mar-02"
excerpt: "Weekly testing update featuring 6 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260301-hero.jpg
header:
  teaser: /assets/images/blog/260301-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
 <strong>This week's testing highlights:</strong> 6 games across Epic, GOG, and Amazon storefronts. My Night Job looks like a bit of fun from this week's giveaways, and Boxes: Lost Fragments being given away again is yet another reminder of my backlog.
</div>

Kia ora everyone!

We've both had a busy weekend since getting back to the boat, each of us working on different aspects of Junk Store. I'm updating the website and creating some new tutorials and tips to help users get the most out of Junk Store! Eben is, as always, neck-deep in code doing his thing. I mostly just nod and smile when he tells me what he's been up to since I usually have no idea what he's talking about.

Looks like the incoming weather might keep us boat-bound for a bit, which is a good excuse to get stuck in and make progress on Junk Store. Hopefully some nicer weather is on its way so we can get back out on our excursions!

## Housekeeping Notes

A few quick reminders before we dive into the games:

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

This week featuring Boxes: Lost Fragments, My Night Job.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2019810/library_600x900.jpg" alt="Boxes: Lost Fragments" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Boxes%3A%20Lost%20Fragments">Boxes: Lost Fragments</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">As a legendary thief, your next assignment lures you into a grand and lavish mansion.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/437100/library_600x900.jpg" alt="My Night Job" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=My%20Night%20Job">My Night Job</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">My Night Job sends players into an abandoned building and sicks hordes of monsters on them.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Tavern Talk. I also had a go at Total War: ATTILA and Rebel Galaxy Outlaw, but ran into some issues getting them running via Junk Store. Still working on figuring those out!

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2076140/library_600x900.jpg" alt="Tavern Talk" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Tavern%20Talk">Tavern Talk</a></strong> <span class="store-badge amazon">Amazon</span>
    <div class="game-description">A cozy visual novel about running a tavern in a D&D-inspired fantasy.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Death's Gambit: Afterlife, Forager, Hard West 2.

<div class="game-entry">
  <img src="https://cdn1.epicgames.com/spt-assets/58c8925d94e440c7b0b4206635272579/deaths-gambit--afterlife-1uq5i.jpg" alt="Death's Gambit: Afterlife" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Death's%20Gambit%3A%20Afterlife">Death's Gambit: Afterlife</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Death's Gambit is a challenging Action-RPG where you explore an alien medieval planet filled with beasts, knights, and horrors. Climb big creatures that will test your resolve. Fight dangerous monsters that will make you think outside the box.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/2c9c372e2469b81b23d2732c5d8c41cf32a2c1d538a836cb5d97834ff33d8fab.jpg?namespace=gamesdb" alt="Forager" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Forager">Forager</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">The highly popular and quirky, idle game that you want to actively keep playing. Explore, craft, gather & manage resources, find secrets and build your base out of nothing! Buy land to explore and expand!</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/71f7dd3aded183188a0f6e889b8f3557a0fbd6e66fe831e8519a0716270a6241.jpg?namespace=gamesdb" alt="Hard West 2" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Hard%20West%202">Hard West 2</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Hard West 2 is a supernatural journey to the dark heart of the West.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

This weekend's Epic giveaways include [Turnip Boy Robs a Bank](https://store.epicgames.com/en-US/p/turnip-boy-robs-a-bank-3fae0e) and the previously given away [Idle Champions of the Forgotten Realms](https://store.epicgames.com/en-US/p/idle-champions-of-the-forgotten-realms). Amazon Luna offerings are still unannounced. I wonder what they have in store for us this month.

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