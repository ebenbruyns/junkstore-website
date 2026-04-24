---
layout: junkstore-post
title: "Junk Store Tested - March 10, 2026"
date: 2026-03-10 09:30:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog]
slug: "games-tested-mar-10"
excerpt: "Weekly testing update featuring 9 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/weekly-updates/260309-hero.jpg
header:
  teaser: /assets/images/blog/weekly-updates/260309-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 9 games across Epic and GOG storefronts. Standouts for me were Turnip Boy Robs a Bank and Tiny Tina's games. All 9 games tested played out of the box via Junk Store.
</div>

G'day Everyone!

This week I really enjoyed testing Turnip Boy Robs a Bank. It's a fun, quirky game where you run around shaking people down and stealing as much cash from the bank as you can. It also reminded me that I need to play Turnip Boy Commits Tax Evasion. Tattoo Tycoon was another highlight, though the tutorial had me chuckling when my freehand tattoo attempt turned out atrocious! Let's just say I was grateful for the auto tattoo feature when it unlocked.

When I wasn't testing games, I've been busy fixing up the website and watching Jayson Tatum make his comeback in the NBA. I'm a diehard Boston Celtics fan, have been all my life since Larry Bird was playing. They were already playing out of their skins this season, and Tatum coming back will make the race to the postseason even more interesting! Let's go Celtics!

But enough about basketball, below are this week's testing results.
 
## Housekeeping Notes

A few quick reminders before we dive into the games:

* **Decky Loader + 2.0 Conflict:** If running both together, use the TEST channel build. It's the same stable build, just packaged without a component that conflicts with Decky (since Decky already includes it). We're using the TEST channel to keep it separate and easy to distinguish.
* **GOG Extension:** New version (v0.1.11) available on the <a href="/portal-redirect/" target="_blank" rel="noopener">Junk Store Portal</a> with LSFG support. All Patreon/Ko-fi supporters have been migrated — sign in with your original email to access.
* **LSFG-VK Support:** Now built into Junk Store with easy toggles. No need to manually add environment variables. Find it under the **Proton Config** menu (change the dropdown to "All"). You may need to try different Proton versions to find one that works for your game. <a href="https://www.junkstore.xyz/blog/lsfg-frame-generation-built-in/" target="_blank" rel="noopener">More info →</a>
  * **Decky Plugin:** v1.1.13 (Main Decky store)
  * **GOG Extension:** v0.1.11 (Junk Store Portal)
  * **Junk Store 2.0 (without Decky Loader):** v2.5.0.0-beta-20260111-140530 (Beta channel)
  * **Junk Store 2.0 (with Decky Loader):** v2.4.1.0-test-20260108-100341 (Test channel)

## Current System Setup
* **<a href="/portal-redirect/">Junk Store 2.0</a>**: v2.5.0.0-beta (for itch.io use **Extension** Channel: beta)
* **Junk Store Plugin**: v1.1.13 (Main Store)
* **GOG Extension**: v0.1.11 (can be purchased & downloaded from the [Junk Store Portal](https://portal.junkstore.xyz/))
* **Decky Loader**: v3.2.1 (Prerelease)
* **Proton**: GE-Proton 10.26
* **SteamOS**: v3.7.19 (Stable)

## This Week's Featured Games <a href="/games/tested/" class="inline-games-cta-button">View Full List →</a>

> **💡 Tip:** Click any game title below to view full compatibility details, testing notes, and system requirements in our games database!

### Epic Games Giveaway

This week featuring Idle Champions of the Forgotten Realms, Turnip Boy Robs a Bank.

<div class="game-entry">
  <img src="https://images.gog.com/74208c03ea2f51ff74ff5822ea3e54b2bd64ff7c45f09111f8a7b23b484c8c73.jpg?namespace=gamesdb" alt="Idle Champions of the Forgotten Realms" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Idle%20Champions%20of%20the%20Forgotten%20Realms">Idle Champions of the Forgotten Realms</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Idle Champions of the Forgotten Realms is a Dungeons & Dragons strategy management game uniting characters from throughout the D&D multiverse into a grand adventure.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2097230/library_600x900.jpg" alt="Turnip Boy Robs a Bank" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Turnip%20Boy%20Robs%20a%20Bank">Turnip Boy Robs a Bank</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Turnip Boy is back! This time he’s teaming up with the fearsome Pickled Gang to plan and execute the weirdest heist of all time.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure, Tattoo Tycoon.

<div class="game-entry">
  <img src="https://images.gog.com/734453c4fa47c766c7eda703477f83887b2e444460d4a674e709460c0d099abc.jpg?namespace=gamesdb" alt="Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Tiny%20Tina's%20Assault%20on%20Dragon%20Keep%3A%20A%20Wonderlands%20One-shot%20Adventure">Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Smash skeletons, defeat dragons, and battle giant golems in Tiny Tina's Assault on Dragon Keep: A Wonderlands One-Shot Adventure.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/2375260/library_600x900.jpg" alt="Tattoo Tycoon" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Tattoo%20Tycoon">Tattoo Tycoon</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Become a tattoo artist and manage your own tattoo parlor.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Deceive Inc., F.I.S.T.: Forged In Shadow Torch, Tiny Tina's Wonderlands, Haven Park, Intravenous.

<div class="game-entry">
  <img src="https://images.gog.com/65b1eaeda7d1a54fd85ba5bfdf50a443b10d8ff9634aa708453e12d8b4f3106b.jpg?namespace=gamesdb" alt="Deceive Inc." class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Deceive%20Inc.">Deceive Inc.</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Go undercover as the world’s greatest spies in this tense multiplayer game of subterfuge.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/bf91b5131532afb8db412cfc6c14ec302c74985d613a3c00b2d6d8fc9081ca9a.jpg?namespace=gamesdb" alt="F.I.S.T.: Forged In Shadow Torch" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=F.I.S.T.%3A%20Forged%20In%20Shadow%20Torch">F.I.S.T.: Forged In Shadow Torch</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">F.I.S.T.: Forged In Shadow Torch is a Metroidvania action game featuring exploration, intense combat and challenging platforming.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/c43830e8b2ec6524dfbc18974cf171de38ed3eafa0dcfcca0393134e31b3d77a.jpg?namespace=gamesdb" alt="Tiny Tina's Wonderlands" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Tiny%20Tina's%20Wonderlands">Tiny Tina's Wonderlands</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/07f92c3c3b4f1918f297906f7f9f6c7a570346d17f27f81e580727dc6a0be3a3.jpg?namespace=gamesdb" alt="Haven Park" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Haven%20Park">Haven Park</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Be Flint, who is doing his best to keep his grandma's park up and running and make it a place for the campers to enjoy.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/8cac6229578e368007550c1dc6808812914b609b88cec502269a9232ea1f795c.jpg?namespace=gamesdb" alt="Intravenous" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/games/tested/?game=Intravenous">Intravenous</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Teeth-clenching stealth, followed by hardcore gunplay for those not looking for a quiet way in.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">Pro Version: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

## Looking Forward

This weekend's Epic giveaways include [Cozy Grove](https://store.epicgames.com/en-US/p/cozy-grove) and the previously given away [Isonzo](https://store.epicgames.com/en-US/p/isonzo).

Amazon Prime Gaming is offering GOG codes for <a href="https://www.gog.com/en/game/veil_of_darkness" target="_blank" rel="noopener">Veil of Darkness</a> and <a href="https://www.gog.com/en/game/mahokenshi" target="_blank" rel="noopener">Mahokenshi - The Samurai Deckbuilder</a>, as well as Epic codes for <a href="https://store.epicgames.com/en-US/p/total-war-rome-ii-764f74" target="_blank" rel="noopener">Total War: Rome II - Emperor Edition</a> and <a href="https://store.epicgames.com/en-US/p/turmoil-26318a" target="_blank" rel="noopener">Turmoil</a>.

**Which of these games are you most excited to try?** Join our community on Discord or reddit and let us know! We love hearing about your Steam Deck gaming experiences and which titles you're planning to add to your library next.

We hope you're having a wonderful time wherever you are in the world, and as always, if you've got any questions about these games or Junk Store in general, please don't hesitate to reach out through our community channels.

Cheers,<br>
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for an all-in-one launcher?</strong></p>
  <a href="/portal-redirect/" class="inline-blog-cta-button">
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
