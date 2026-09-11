---
layout: junkstore-post
categories: [Dev Update, Pro Version]
tags: [junk-store, steam-deck, dev-update, development, Marketing]
author: Eben
toc: false
cta_heading: "Want the fix and everything coming after it?"
title: "Dev Update: The 160-Day Stable Streak Ends (Fix Already Out)"
date: 2026-09-11
slug: 160-day-streak-ends
description: "A Steam client update ended Junk Store Pro's 160-day stable streak with the error Action 'NULL' not found in ActionSet 'NULL'. What broke, why, and how to get the fix on Steam Deck."
excerpt: "Valve updated their minifier, one fragile code path didn't like it, and 160 days of stable came to an end. New builds with the durable fix are already on all three channels."
image: /assets/images/blog/dev-updates/160-day-streak-ends/blog-card.webp
header:
  og_image: /assets/images/blog/dev-updates/160-day-streak-ends/blog-card.webp
  teaser: /assets/images/blog/dev-updates/160-day-streak-ends/blog-card-thumb.webp
---

G'day,

**Short version:** a Steam client update broke Junk Store Pro today. If you're seeing
`Action 'NULL' not found in ActionSet 'NULL'`, that's it. New builds with the
durable fix are already on all three channels, so update and you're away.

{% include discord-follow.html channels="news" label="Get the updates on Discord:" %}

## The Streak has ended

It happens, and there's nothing you can do about it. Today my
[160-day stable streak](/status/) ended. Valve updated their minifier, and I had
one code path that used a fragile method to detect it and another that just
shrugged it off. Unfortunately, due to an oversight on my part, I didn't have
both paths aligned, and collapsing the code paths fell through the cracks with
the massive rewrites in the last major release.

It pains me, because it means that some of you who didn't renew are now sitting
on a clock that's running out faster than it should have.

## The Error You'll See

The break surfaces as this error:

```
Action 'NULL' not found in ActionSet 'NULL'
```

This was going to happen sooner or later, just due to the nature of the
software. Naturally I would have preferred it to take longer so customers can
derive more value. That's life, I suppose. On the bright side, 14 Steam client
releases without a scratch is not terrible.

## The fix

I've already put new builds on all three channels with the durable fix. Let's
see if we can beat the 160-day streak with this one.

Those of you with the ticking clock have two options:

- **If you don't want to renew**, [create a support ticket](https://portal.junkstore.xyz/support)
  and we'll give you a duct tape patch to kick the can down the road.
- **Otherwise**, [renewing](https://portal.junkstore.xyz/) gets you this fix plus
  whatever is coming down the pipe in the next 12 months.

## Looking forward

I've got quite a lot in the oven right now, but there's a huge volume of
testing I need to get through before I can hint at what it is or when it will
land in the next major release.

Game on!

Eben
