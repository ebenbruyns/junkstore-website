---
layout: post
title: "Junk Store Tested - January 21, 2026"
date: 2026-01-21 17:00:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog, amazon-games, itch-io]
slug: "games-tested-jan-21"
excerpt: "Weekly testing update featuring 15 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260118-hero.jpg
header:
  teaser: /assets/images/blog/260118-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 15 games across Epic, GOG storefronts — including cool finds like Alex Kidd in Miracle World DX and Gunslugs: Rogue Tactics both work out of the box.
</div>

G'day Everyone!

I'm back down in Papamoa for the week helping my parents out with a few things, heading back up on Monday. The weather here in NZ has been absolutely shocking this week. Not much of a summer happening at the moment, and it looks set to stick around until late in the week. Fingers crossed for some warm sunny days next week so we can all dry out! On the bright side, being stuck indoors means plenty of time for testing. I'll be taking full advantage of my parents' super fast and stable internet to get cracking on as many games as I can handle.


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

This week featuring Styx: Master of Shadows, Styx: Shards of Darkness - Deluxe Edition.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/242640/library_600x900.jpg" alt="Styx: Master of Shadows" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Styx%3A%20Master%20of%20Shadows">Styx: Master of Shadows</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Styx: Master of Shadows is an infiltration game with RPG elements taking place in a dark fantasy universe, where you sneak, steal and assassinate your way through as Styx, a Goblin two-centuries of age.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/355790/library_600x900.jpg" alt="Styx: Shards of Darkness - Deluxe Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Styx%3A%20Shards%20of%20Darkness%20-%20Deluxe%20Edition">Styx: Shards of Darkness - Deluxe Edition</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Styx returns in a new stealth adventure! Explore and master huge open environments, sneak past or assassinate new enemies and bosses, and experiment with the new array of lethal abilities and weapons in our goblin assassin's arsenal.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: ❓ Not tested</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Brigador: Up-Armored Edition, Gunslugs : Rogue Tactics, DeathKeep.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/274500/library_600x900.jpg" alt="Brigador: Up-Armored Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Brigador%3A%20Up-Armored%20Edition">Brigador: Up-Armored Edition</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Pilot a mech to hunt down and destroy the oppressive government of a cyberpunk autocracy.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1012360/library_600x900.jpg" alt="Gunslugs : Rogue Tactics" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Gunslugs%20%3A%20Rogue%20Tactics">Gunslugs : Rogue Tactics</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Grab your bandana and get ready for Gunslugs : Rogue Tactics.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2350540/library_600x900.jpg" alt="DeathKeep" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=DeathKeep">DeathKeep</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">DeathKeep is a D&amp;D dungeon delving the way you like it - fast, furious and fun.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on Sid Meier's Civilization VI, Deus Ex: Mankind Divided, Total War: THREE KINGDOMS.

<div class="game-entry">
  <img src="https://images.gog.com/ddae044b3dc291e15f4d4b06286da6057514cfdc61a958afbb33bab04a805fd5.jpg?namespace=gamesdb" alt="Sid Meier's Civilization VI" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Sid%20Meier's%20Civilization%20VI">Sid Meier's Civilization VI</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/8a612a80a3113cfba87f451255ec70e6f7dfb89ce5e6cb53e83b8fb91e840393.jpg?namespace=gamesdb" alt="Deus Ex: Mankind Divided" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Deus%20Ex%3A%20Mankind%20Divided">Deus Ex: Mankind Divided</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Deus Ex: Mankind Divided directly follows the aftermath of the Aug Incident, a day when mechanically augmented citizens all over the world were stripped of control over their minds and bodies, resulting in the deaths of millions of innocents. The year is now 2029, and the golden era of augmentations is over. </div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/779340/library_600x900.jpg" alt="Total War: THREE KINGDOMS" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Total%20War%3A%20THREE%20KINGDOMS">Total War: THREE KINGDOMS</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Total War: THREE KINGDOMS is the first in the award-winning series to recreate epic conflict across ancient China.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: ❌ Doesn't work</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Alex Kidd in Miracle World DX, Among the Sleep: Enhanced Edition, Bloons TD 6, STAR WARS™ Battlefront II (Classic, 2005), The First Templar.

<div class="game-entry">
  <img src="https://images.gog.com/5c36563fb4746df00c50ffbec4d137e4b7ee0e0d5cf31d1a65e1e69b0ec9bf94.jpg?namespace=gamesdb" alt="Alex Kidd in Miracle World DX" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Alex%20Kidd%20in%20Miracle%20World%20DX">Alex Kidd in Miracle World DX</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">The legendary Alex Kidd returns with Alex Kidd in Miracle World DX.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/310730529d8b87c0bf4c049eda965c933ec6796ef573b7d1e1a999d3567138aa.jpg?namespace=gamesdb" alt="Among the Sleep: Enhanced Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Among%20the%20Sleep%3A%20Enhanced%20Edition">Among the Sleep: Enhanced Edition</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Among the Sleep: Enhanced Edition is a new and improved version of the award winning first person horror adventure.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/f67d34b0404a4ac115d5047b3425eb3d88b4b30de00fb96be9b99b4bddcb5d17.jpg?namespace=gamesdb" alt="Bloons TD 6" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Bloons%20TD%206">Bloons TD 6</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">The Bloons are back and better than ever! Craft your perfect defense from a combination of awesome monkey towers, upgrades, Heroes, and activated abilities, then pop every last Bloon that comes your way!</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/9c3ea358df6ad3547ea57247b96a65daaedc3a735e2bbce826bd3dabf4d59095.jpg?namespace=gamesdb" alt="STAR WARS™ Battlefront II (Classic, 2005)" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=STAR%20WARS%E2%84%A2%20Battlefront%20II%20(Classic%2C%202005)">STAR WARS™ Battlefront II (Classic, 2005)</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Star Wars: Battlefront II is the sequel to Star Wars: Battlefront.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/55474b4bf927cacd3c225c2c50a186c18783794e8ce18de26773c49766bb87f4.jpg?namespace=gamesdb" alt="The First Templar" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=The%20First%20Templar">The First Templar</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">The First Templar follows the story of two main characters – a French Templar, and his companion, a noble lady who has been proclaimed a heretic. Taking control over these two unlikely allies, the player must uncover the mysteries behind the Templar Order, play a role in a grand conspiracy, and discover the secret of the Holy Grail.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Community Tested

Big thanks to Anatharias for letting us know about this game!

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1808500/library_600x900.jpg" alt="ARC Raiders" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=ARC%20Raiders">ARC Raiders</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">ARC Raiders is a multiplayer extraction adventure, set in a lethal future earth, ravaged by a mysterious mechanized threat known as ARC.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: ❓ Not tested</div>
    </div>
  </div>
</div>

### Featured Games

This week highlighting Fallout 4, got this as a Christmas presnet to myself as well as a few others. Now I just need to find time to play this one and the others!

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/377160/library_600x900.jpg" alt="Fallout 4" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Fallout%204">Fallout 4</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">From Bethesda Game Studios, the award-winning creators of Starfield and The Elder Scrolls V: Skyrim, comes Fallout 4.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

Next week's giveaways include <a href="https://www.gog.com/en/game/harold_halibut" target="_blank" rel="noopener">Harold Halibut</a> (GOG Code), <a href="https://www.gog.com/en/game/dd_stronghold_kingdom_simulator" target="_blank" rel="noopener">D&D Stronghold: Kingdom Simulator</a> (GOG Code), and <a href="https://store.epicgames.com/en-US/p/rustler-grand-theft-horse-21a7ca" target="_blank" rel="noopener">Rustler (Grand Theft Horse)</a> from Epic.

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