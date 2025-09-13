---
layout: post
title: "Now You Can Scratch That Itch — Itch.io Comes to Steam via Junk Store"
date: 2025-08-15
categories: [Feature Release, Major Update]
tags: [Junk Store, Steam Deck, itch.io Games, Indie Games, Game Mode, Beta Features, Steam Integration, Non-Steam Games, CLI Tools, Game Development]
slug: "itch-integration-launch"
excerpt: "For the first time ever, Itch.io is integrated directly into Steam — right inside Junk Store. A groundbreaking feature that brings thousands of indie games to your Steam Deck."
image: /assets/images/blog/itch-integration-hero.jpg
read_time: "3 min read"
toc: true
---

*Originally shared on <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>r/JunkStore</a> - reformatted for our blog.*

## For the First Time Ever: Itch.io → Steam Integration

This is hot off the press: I've been on a little side quest to get **Itch.io working**, and it's now live in the beta branch for all existing Junk Store 2.0 customers.

**Historic milestone**: This is the **first time ever** that Itch.io has been integrated directly into Steam.

## 🚀 How to Try It Right Now

- **Existing customers**: Set both build and extension channels to **beta**
- **New users**: The fully functional trial includes all builds for testing
- **Trial users**: [Start your 7-day free trial](/buy_now/) - beta access included

**Important**: You must have both build and extension channels set to beta.

## ⚠️ Beta Reality Check

**Heads up — this is very beta.** I had to build an Itch.io client completely from scratch since no suitable CLI client existed. 

**Current limitations**:
- Narrow, Windows games implementation
- Barebones feature set  
- Tested on handful of games - expect edge cases

Rather than spend six months perfecting it in a vacuum, I'm releasing it early to get real user feedback.

## 🎯 Why Early Release?

**Feature priorities** – You tell me what you want most.

**Demand check** – I'll know how many people actually care about Itch.io support.

**Real-world testing** – Better than any internal QA process.

## 🐛 Found a Bug? Here's How to Help

If you run into bugs (and you probably will), please report them here:  
**[GitHub Issues: JunkStoreBugs](https://github.com/SDK-Innovation/JunkStoreBugs/issues)**

**Pro tip**: Make sure to search first to avoid duplicates — I'll prioritise fixes based on how many people are affected.

## 📈 The Goal

**Get to 80% coverage** of games and use cases as fast as possible so most of you can play most of what you want, sooner.

This isn't about perfection on day one - it's about rapid iteration based on your real usage patterns.

## 🎮 What This Means for You

- **Thousands of indie games** now accessible through Steam
- **Steam Deck native experience** - no Desktop Mode required  
- **Same Junk Store quality** - compatibility tested and rated
- **Unified library** - all your games in one place

## The Development Story

I've been incredibly busy on Junk Store since launch, but this was a fun dash to get something cool in your hands.

**The challenge**: No existing itch.io CLI client suitable for our needs  
**The solution**: Build one from scratch  
**The result**: First-ever Steam integration for itch.io games

## What Happens Next?

Your feedback over the coming weeks will determine how far we take this integration:

- **High usage + good feedback** = Full feature development
- **Issues but interest** = Bug fixes and improvements  
- **Low adoption** = Maintenance mode

## Try It Today

This is bleeding edge stuff - you're getting access to something that's never existed before. The indie gaming community on Steam Deck just got a whole lot bigger.

**Game on!**  
**The Junk Store Team**

<div class="inline-blog-cta">
  <p><strong>Ready for an all-in-one launcher?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Your Steam Deck, simplified and supercharged</p>
</div>

---

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