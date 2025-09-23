---
layout: post
title: "Junk Store Tested - September 22, 2025"
date: 2025-09-21 12:00:00 +1200
categories: [Weekly Update, Game Compatibility]
tags: [Junk Store, Steam Deck, Epic Games, GOG Games, Amazon Prime Gaming, Decky Plugin, Game Mode, Non-Steam Games, itch.io Games, Game Compatibility]
slug: "games-tested-sep-22"
excerpt: "Weekly testing update featuring 12 games across multiple storefronts. Testing compatibility with Steam Deck and Junk Store."
image: /assets/images/blog/250922-hero.jpg
header:
  teaser: /assets/images/blog/250922-hero-thumb.jpg
read_time: "5 min read"
toc: true
---

**This week's testing highlights:** 12 games across Epic, GOG, Amazon, itch.io storefronts — including standout finds like Bloons TD 6 running flawlessly and Cursed to Golf running flawlessly. 11 games work perfectly out of the box!



G'day Everyone!

This week was spent refining the website and fixing bugs uncovered through testing and community feedback. While testing Samorost 2, I hit an elusive bug that also affects Guild of Dungeoneering — sometimes these games work, sometimes they don't. We think we've narrowed it down though!

If you get an error about missing files in **Junk Store 2.0**, apply this fix: toggle off "Set Steam Compatibility Library Paths" at **Game screen > Cog > Proton > Set Steam Compatibility Library Paths**. If you get this error in the **Decky version**, there's no fix yet, but saying that, sometimes it does work... we're still trying to figure out why.

We also fixed GOG DLC downloads, Umu ID updates, and flatpak improvements.

> **⚡ IMPORTANT UPDATE REMINDER ⚡**
> **Junk Store 2.0 users:** Make sure your channels are set to **Stable** and run **Check for Updates** to get the latest Epic extension and GOG improvements!

I got completely sucked into FATE: The Cursed King this weekend — my "testing" session turned into hours of actual gameplay! It's definitely going back on my personal play list, along with Samorost 2 which I didn't get enough time with.

Let's get to this week's results — some real gems!

## Current System Setup
* **<a href="/buy_now/">Junk Store 2.0</a>**: Latest version with **itch.io integration (beta)**
* **Junk Store Plugin**: Latest Decky version 1.1.9
* **GOG Extension**: v0.1.9 (can be purchased & downloaded from the [Junk Store Portal](https://portal.junkstore.xyz/))
* **Decky Loader**: v3.1.11 (Pre-release)
* **Proton**: GE-Proton 10.10
* **SteamOS**: v3.7.13 (Stable)

> **📋 GOG Extension Note:** The updated GOG Extension is exclusively available through the [Junk Store Portal](https://portal.junkstore.xyz/). Previous Patreon/Ko-fi supporters have been migrated - sign in with your original email to access. If you haven't been migrated yet, let us know so we can help. [Read more about the v0.1.9 update](https://www.junkstore.xyz/blog/gog-extension-v019-update/).

<h2 style="text-align: left !important; margin-left: 0;">This Week's Featured Games</h2>

<a href="/tested-games/" class="inline-games-cta-button">View Full List →</a>

### Epic Games Giveaway

This week featuring Samorost 2, Project Winter.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/40720/capsule_231x87.jpg" alt="Samorost 2" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://store.epicgames.com/en-US/p/samorost-2-1b9bb1" target="_blank">Samorost 2</a></strong>
    <div class="game-description">A whimsical point-and-click adventure through a surreal world of dreams and imagination.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: ❌ Doesn't work</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/774861/capsule_231x87.jpg" alt="Project Winter" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://store.epicgames.com/en-US/p/project-winter-3b9e84" target="_blank">Project Winter</a></strong>
    <div class="game-description">Face the wilderness, uncover traitors, and survive paranoia in this streamlined yet chaotic multiplayer experience.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

### Amazon Prime Gaming

This week featuring Residual, FATE: The Cursed King.

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1290780/capsule_231x87.jpg" alt="Residual" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://www.gog.com/en/game/residual" target="_blank">Residual</a></strong> <span style="color: #999;">(Amazon Prime Gaming Key - GOG)</span>
    <div class="game-description">In a forgotten galaxy full of strange planets, a lone explorer crash-lands on one with an ancient alien secret. An exploration (survival) game like no other.. Adventure awaits!</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/303690/capsule_231x87.jpg" alt="FATE: The Cursed King" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://www.gog.com/en/game/fate_the_cursed_king" target="_blank">FATE: The Cursed King</a></strong> <span style="color: #999;">(Amazon Prime Gaming Key - GOG)</span>
    <div class="game-description">In FATE: The Cursed King, disaster threatens your home! Can you break the curse or will the city of Ekbatan be forever doomed?</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

### Backlog Tested

Catching up on Mafia II, Figment 2: Creed Valley, Warhammer 40,000: Space Marine, Macbat 64: Journey of a Nice Chap.

<div class="game-entry">
  <img src="https://images.gog.com/594e0fe635de32014e2c9abd0160b767b26e6750f02aff01a31215b3dd06535e.jpg?namespace=gamesdb" alt="Mafia II" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://www.gog.com/en/game/mafia_ii" target="_blank">Mafia II</a></strong> <span style="color: #999;">(GOG)</span>
    <div class="game-description">Experience the gritty world of 1940s-50s organized crime in this cinematic third-person action adventure.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/1085220/capsule_231x87.jpg" alt="Figment 2: Creed Valley" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="#" target="_blank">Figment 2: Creed Valley</a></strong> <span style="color: #999;">(Amazon)</span>
    <div class="game-description">A musical action-adventure where you battle nightmares with creativity and rhythm in a surreal mindscape.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/55150/capsule_231x87.jpg" alt="Warhammer 40,000: Space Marine" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="#" target="_blank">Warhammer 40,000: Space Marine</a></strong> <span style="color: #999;">(Amazon)</span>
    <div class="game-description">Brutal third-person action as an Ultramarine fighting against hordes of Orks in the grim darkness of the far future.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://steamcdn-a.akamaihd.net/steam/apps/568040/capsule_231x87.jpg" alt="Macbat 64: Journey of a Nice Chap" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://siactro.itch.io/macbat64" target="_blank">Macbat 64: Journey of a Nice Chap</a></strong> <span style="color: #999;">(itch.io)</span>
    <div class="game-description">A charming N64-style 3D platformer about a friendly bat exploring colorful worlds with retro gameplay.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🚫 Not Supported</div>
        <div class="compatibility-line">2.0 Standalone: 🟡 Minor tinkering</div>
    </div>
  </div>
</div>

### Retested Games

Updated compatibility for Bloons TD 6, Cursed to Golf, Dishonored 2, Ghost of a Tale.

<div class="game-entry">
  <img src="https://images.gog.com/aa1700b28782f43da1d61c33bd01eb4b677a3a5c46a15ad0fb1a210493f9fa2b.jpg?namespace=gamesdb" alt="Bloons TD 6" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://store.epicgames.com/en-US/p/bloons-td-6-bf95a0" target="_blank">Bloons TD 6</a></strong> <span style="color: #999;">(Epic)</span>
    <div class="game-description">The ultimate tower defense experience with monkeys, balloons, and endless strategic depth across multiple game modes.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/fabe3a4788a2434e8408c93e1acdb445224c54def3c072b77005184a86dae5e2.jpg?namespace=gamesdb" alt="Cursed to Golf" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://store.epicgames.com/en-US/p/cursed-to-golf-a6bc22" target="_blank">Cursed to Golf</a></strong> <span style="color: #999;">(Epic)</span>
    <div class="game-description">A challenging golf adventure through Golf Purgatory where you must ace your way back to the land of the living.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/a28c39f3450b74507701cece797eb07b4ad67a70c89f9ae5e62942f1f53e96cf.jpg?namespace=gamesdb" alt="Dishonored 2" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://www.gog.com/en/game/dishonored_2" target="_blank">Dishonored 2</a></strong> <span style="color: #999;">(GOG)</span>
    <div class="game-description">Master supernatural powers and stealth in this immersive first-person action game set in a plague-ridden empire.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <img src="https://images.gog.com/118ed75c7edf136a86e800b0f12d1171c21f9a68ca8d8f9bf143d8ce5ebe77d6.jpg?namespace=gamesdb" alt="Ghost of a Tale" class="game-thumbnail">
  <div class="game-details">
    <strong><a href="https://www.gog.com/en/game/ghost_of_a_tale" target="_blank">Ghost of a Tale</a></strong> <span style="color: #999;">(GOG)</span>
    <div class="game-description">A charming stealth-adventure starring a courageous mouse minstrel in a beautifully crafted medieval world.</div>
    <div class="compatibility-info">
      <div class="compatibility-line">Decky Plugin: 🟢 Works perfectly</div>
        <div class="compatibility-line">2.0 Standalone: 🟢 Works perfectly</div>
    </div>
  </div>
</div>



## Looking Forward

Next week we're looking at some exciting new releases! Prime Gaming is featuring **Mystical Riddles: Ghostly Park Collector's Edition** (Legacy Games Code) and **Pixel Cafe** (Amazon Games App), while Epic Games has **Eastern Exorcist** and **Jorel's Brother and the Most Important Game of the Galaxy**. Should be a fun mix of mystery, café management, and action-adventure to test!

**Which of these games are you most excited to try?** Let us know on Reddit or Discord! We love hearing about your Steam Deck gaming experiences and which titles you're planning to add to your library next.

We hope you're having a wonderful time wherever you are in the world, and as always, if you've got any questions about these games or Junk Store in general, please don't hesitate to reach out through our community channels.

Cheers,  
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
</style>