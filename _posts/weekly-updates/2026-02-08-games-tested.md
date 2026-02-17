---
layout: post
title: "Junk Store Tested - February 08, 2026"
date: 2026-02-08 14:50:00 +1300
categories: [Weekly Update, Game Compatibility]
tags: [junk-store, steam-deck, epic-games, gog, amazon-games, itch-io]
slug: "games-tested-feb-08"
excerpt: "Weekly testing update featuring 13 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/260207-hero.jpg
header:
  teaser: /assets/images/blog/260207-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

<div class="weekly-highlights">
<strong>This week's testing highlights:</strong> 13 games across Epic, GOG, and Amazon storefronts. Standouts for me were The Witcher 2: Assassins of Kings Enhanced Edition and BioShock Remastered, both work out of the box and have been on my backlog for ages.
</div>

Kia Ora Everyone!

This weekend is Waitangi Weekend here in NZ. For those who don't know, Waitangi Day marks the signing of our founding treaty in 1840, and it's a time of celebration and reflection.

It's also our last long weekend until Easter, so everyone around us has been out on the water enjoying themselves. No rest for us though, too much to do testing games and working on Junk Store!

At least summer seems to have finally arrived for us. Hopefully it hangs around a bit longer than usual so we get a decent stretch of sun and hot weather. While we have lots of work to do on Junk Store, we have just as many jobs to do on our boat, and a lot of them need long stretches of dry and sunny weather!

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

This week featuring Botany Manor.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1425350/library_600x900.jpg" alt="Botany Manor" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Botany%20Manor">Botany Manor</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Welcome to Botany Manor, a stately home in 19th century England.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Amazon Luna Giveaways

This week featuring Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure, Dread Templar.

<div class="game-entry">
  <img src="https://images.gog.com/734453c4fa47c766c7eda703477f83887b2e444460d4a674e709460c0d099abc.jpg?namespace=gamesdb" alt="Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Tiny%20Tina's%20Assault%20on%20Dragon%20Keep%3A%20A%20Wonderlands%20One-shot%20Adventure">Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Smash skeletons, defeat dragons, and battle giant golems in Tiny Tina's Assault on Dragon Keep: A Wonderlands One-Shot Adventure.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1334730/library_600x900.jpg" alt="Dread Templar" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Dread%20Templar">Dread Templar</a></strong> <span class="store-badge amazon">Amazon</span>
    <div class="game-description">Dread Templar is a fast-paced hardcore old-school FPS, combining classic 90s shooter and modern FPS elements.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on The Machines Arena, STAR WARS™ Galactic Battlegrounds Saga, STAR WARS™ Jedi Knight: Dark Forces II.

<div class="game-entry">
  <img src="https://images.gog.com/bda160821ad78d82f674c29fa940cde498e8ca5afd6486cd8e079accd55f56e5.jpg?namespace=gamesdb" alt="The Machines Arena" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=The%20Machines%20Arena">The Machines Arena</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">The Machines Arena is an adrenaline-fueled 4v4 top-down hero shooter where players compete in chaotic close quarters combat to plant bombs, deliver payloads and rack up kills in a growing number of game modes.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/ced2e9013b1128ab890dc72d0dcc7a96c82442e0c8260aef3c5b828f68fa600e.jpg?namespace=gamesdb" alt="STAR WARS™ Galactic Battlegrounds Saga" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=STAR%20WARS%E2%84%A2%20Galactic%20Battlegrounds%20Saga">STAR WARS™ Galactic Battlegrounds Saga</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Lead the great armies of the Star Wars Episode II: Attack of the Clones saga in intense real-time strategy clashes.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/ef2e953d8330a4af2bea0c947e660e2b857aef0e1e453e5b62e544d4aa798b6b.jpg?namespace=gamesdb" alt="STAR WARS™ Jedi Knight: Dark Forces II" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=STAR%20WARS%E2%84%A2%20Jedi%20Knight%3A%20Dark%20Forces%20II">STAR WARS™ Jedi Knight: Dark Forces II</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Whatever path Kyle Katarn chooses will change the face of the galaxy forever.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for BioShock™ Remastered, Bramble: The Mountain King, Chuchel, Deep Sky Derelicts, Deus Ex: Mankind Divided.

<div class="game-entry">
  <img src="https://images.gog.com/5148b840cdb4a8c36ace0be14875e0af17ff0d69269524afd5a528c13bbcb979.jpg?namespace=gamesdb" alt="BioShock™ Remastered" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=BioShock%E2%84%A2%20Remastered">BioShock™ Remastered</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">BioShock is a shooter unlike any other, loaded with unique weapons and tactics.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/233477b7de1891561b29051d86299382d6f2cd5c561c07218abdde946df68003.jpg?namespace=gamesdb" alt="Bramble: The Mountain King" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Bramble%3A%20The%20Mountain%20King">Bramble: The Mountain King</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">Bramble: The Mountain King is a grim adventure set in a world inspired by dark, Nordic fables.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/1e78df381dea0492f2d134fe0202ebc40ac36e6ae78fd7f5581bcb8f7fc1e197.jpg?namespace=gamesdb" alt="Chuchel" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Chuchel">Chuchel</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">CHUCHEL is a comedy adventure game from the creators of Machinarium, Botanicula and Samorost.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/c2945e0e1fa4f9690b485744d30e27331ec2f8acd6b3695438c77c2583119295.jpg?namespace=gamesdb" alt="Deep Sky Derelicts" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Deep%20Sky%20Derelicts">Deep Sky Derelicts</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">Deep Sky Derelicts will bring the players into the burdensome life of a society outcast, a scavenger trying to make a living, while aspiring for a better life of a full-fledged citizen.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/8a612a80a3113cfba87f451255ec70e6f7dfb89ce5e6cb53e83b8fb91e840393.jpg?namespace=gamesdb" alt="Deus Ex: Mankind Divided" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=Deus%20Ex%3A%20Mankind%20Divided">Deus Ex: Mankind Divided</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">The year is now 2029, and the golden era of augmentations is over.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

### Featured Games

This week highlighting The Witcher 2: Assassins of Kings Enhanced Edition, NightReaper2.

<div class="game-entry">
  <img src="https://images.gog.com/37fa9409b8756108e64eacba4345b5380e59e93e99d2b4fa377f921bf4dd1fbf.jpg?namespace=gamesdb" alt="The Witcher 2: Assassins of Kings Enhanced Edition" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=The%20Witcher%202%3A%20Assassins%20of%20Kings%20Enhanced%20Edition">The Witcher 2: Assassins of Kings Enhanced Edition</a></strong> <span class="store-badge gog">GOG</span>
    <div class="game-description">A time of untold chaos has come.  Mighty forces clash behind the scenes in a struggle for power and influence.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://shared.steamstatic.com/store_item_assets/steam/apps/4282590/86737a21156b3d794cf61c4cc91ba925a5270305/library_capsule_2x.jpg?t=1768233869" alt="NightReaper2" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="/tested-games/?game=NightReaper2">NightReaper2</a></strong> <span class="store-badge epic">Epic</span>
    <div class="game-description">NightReaper2 is a dark fantasy action game where you become the Reaper, harvesting souls and fighting cursed enemies in a haunted world. </div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works out of the box</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works out of the box</div>
    </div>
  </div>
</div>



## Looking Forward

Next week's giveaways include <a href="https://store.epicgames.com/en-US/p/hexguardian-2b0cbe" target="_blank" rel="noopener">Hexguardian</a> (Epic Code) and Around the World: Travel to Brazil Collector's Edition (Legacy Game) from Amazon Prime Gaming. From Epic we will be able to claim <a href="https://store.epicgames.com/en-US/p/nobody-wants-to-die-fe21cd" target="_blank" rel="noopener">Nobody Wants to Die</a> and <a href="https://store.epicgames.com/en-US/p/the-darkside-detective-a-fumble-in-the-dark-174fcf" target="_blank" rel="noopener">The Darkside Detective: A Fumble in the Dark</a>.

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