---
layout: post
title: "Tip of the Week: Missing the 'Press Y to Show All' Prompt"
date: 2025-09-02
categories: [Tip of the Week, Decky Plugin]
tags: [Junk Store, Steam Deck, Decky Plugin, CSS Loader, Epic Games, GOG Games, Game Mode, Tips & Tricks, User Interface, Performance]
slug: "press-y-show-all-games"
excerpt: "Only seeing A-L games in your Epic/GOG library? Look for the 'Press Y to Show All' prompt at the bottom - or check if your CSS theme is hiding it!"
image: /assets/images/blog/pushY-cropped.png
read_time: "3 min read"
toc: true
---

**This Week's Pro Tip:** If you're using the free Decky plugin and only seeing the first 100 games in your Epic/GOG library, look for the <strong>"Show All"</strong> prompt at the bottom of the screen!

*Note: This tip applies to the free Decky plugin version. Junk Store 2.0 (Professional version) loads up to 1000 games automatically.*

<h2 style="text-align: left !important; margin-left: 0;">The Problem</h2>

You've installed Junk Store and your Epic/GOG games are syncing perfectly, but you can only see games alphabetically from A-L. Games starting with M-Z seem to be completely missing, even though you know you own them.

**This is a very common support question we get**, and there are two main causes: people simply don't notice the prompt, or CSS Loader themes are hiding it.

<h2 style="text-align: left !important; margin-left: 0;">Why This Happens (Decky Plugin Optimization)</h2>

<div class="game-entry">
  <div class="game-details">
    <strong>Decky Plugin Performance Limits</strong>
    <div class="compatibility-info">
      <div class="compatibility-line">The free Decky plugin version loads 100 games at a time to prevent Steam Deck slowdowns</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <div class="game-details">
    <strong>Smart Loading Strategy</strong>
    <div class="compatibility-info">
      <div class="compatibility-line">Press Y when you need more - keeps the interface fast for daily use</div>
    </div>
  </div>
</div>

<div class="game-entry">
  <div class="game-details">
    <strong>Professional Version Difference</strong>
    <div class="compatibility-info">
      <div class="compatibility-line">Junk Store 2.0 (Professional version) loads up to 1000 games instantly with better optimization</div>
    </div>
  </div>
</div>

<h2 style="text-align: left !important; margin-left: 0;">The Simple Solution</h2>

### Just Press Y!
1. Open your Epic/GOG library in Junk Store
2. **Navigate out of the search field** (scroll down to highlight any game in the list)
3. Look for the **"SHOW ALL"** button in the bottom menu (highlighted in red below)
4. **Press the Y button** on your Steam Deck
5. Wait a moment while your complete library loads
6. The rest of your games will now appear!

![Junk Store bottom menu showing the SHOW ALL button](/assets/images/blog/pushY.webp)
*The "SHOW ALL" button is located in Junk Store's bottom menu - press Y to load your complete library!*

<h2 style="text-align: left !important; margin-left: 0;">If You Can't See the Prompt</h2>

### Check Your CSS Loader Theme
Sometimes CSS Loader themes hide or modify the bottom menu area where this prompt appears:

1. **Temporarily disable your CSS theme** (CSS Loader → Turn off theme)
2. Navigate back to your Epic/GOG library
3. **Move out of the search field** (scroll down to highlight a game) - the bottom menu should now appear with "SHOW ALL"
4. **Press Y** to load your complete library
5. Re-enable your theme if desired

**Can't see the button?** You can still **search for specific games** by name - Junk Store's search function works even when the "SHOW ALL" prompt is hidden.




<h2 style="text-align: left !important; margin-left: 0;">Pro Tips</h2>

<div class="game-entry">
  <div class="game-details">
    <strong>Each Store Has Its Own Setting</strong>
    <div class="compatibility-info">
      <div class="compatibility-line">You need to press Y in each store separately - Epic and GOG each have their own "Show All" setting</div>
    </div>
  </div>
</div>


<div class="game-entry">
  <div class="game-details">
    <strong>Test New CSS Themes</strong>
    <div class="compatibility-info">
      <div class="compatibility-line">Always verify Junk Store interface visibility when trying new themes</div>
    </div>
  </div>
</div>


<h2 style="text-align: left !important; margin-left: 0;">Next Week Preview</h2>
Coming next week: **Dive into Junk Store's Many Menus** - Start exploring what's inside the different configuration options and game settings throughout your Decky plugin interface!

Hope this tip helps you access your complete game library! If you have any questions or run into issues, don't hesitate to reach out through our community channels.

Cheers,  
The Junk Store Team

<div class="inline-blog-cta">
  <p><strong>Ready for an all-in-one launcher?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Less tweaking, more gaming — that's the 2.0 difference</p>
</div>

---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*

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
</style>