---
layout: junkstore-post
categories: [Dev Update]
tags: [junk-store, steam-deck, dev-update, development]
author: Eben
toc: false
title: "Dev Update: View Any File as Text or PDF in the Junk Store File Manager"
date: 2026-06-12
slug: file-manager-text-viewer
description: "Junk Store Pro dev update: a new text viewer and basic PDF viewer open any file in Game Mode, Steam's own logs included, plus image previews in the File Manager."
excerpt: "Three new File Manager tricks for Junk Store Pro: image previews, a text viewer for any file (logs included), and a basic PDF viewer, all straight from Game Mode on your Steam Deck."
image: /assets/images/blog/dev-updates/file-manager-text-viewer/blog-card.jpg
header:
  teaser: /assets/images/blog/dev-updates/file-manager-text-viewer/blog-card-thumb.webp
---

G'day,

Following on from the log uploader, sometimes when I’m down a rabbit hole I can’t help myself. There’s 3 new features in the File Manager to assist with troubleshooting. Since the upload to portal is working so well I thought, what if users could upload screenshots? Naturally you would have to know what you’re uploading first. I added a preview on image files from the left trigger menu on image files. You can also push x on any file for these actions when you’re in standalone file manager more (ie not file picker mode).

This is the type of thing that leads me down rabbit holes. What if users could preview the logs? Heck what about just view as text on any file?

## Enter the text viewer:

<figure>
  <img src="/assets/images/blog/dev-updates/file-manager-text-viewer/junk-store-log.webp" alt="Viewing a Junk Store log file as text in the File Manager">
  <figcaption>A Junk Store log opened up in the new text viewer, no desktop mode in sight.</figcaption>
</figure>

It’s still in beta and has rough edges, but it felt like the world just opened up in game mode, so I had to share it.

This is one of those features that provides value well beyond the initial use case. It’s so easy to view steam’s own logs now too. If you navigate to the Steam item in the sidebar, you can find the logs folder, open it and view any log you please.

<figure>
  <img src="/assets/images/blog/dev-updates/file-manager-text-viewer/steam-log.webp" alt="Viewing Steam's own log files as text in the File Manager">
  <figcaption>Steam's own logs, opened straight from the File Manager sidebar.</figcaption>
</figure>

If you want to give it a test drive, switch to the beta channel and you can open it from the file manager (select+x) left trigger on any file and “view as text”. Right trigger to jump to the bottom (this is very useful for inspecting logs).

This is just a text viewer, not an editor. I have to resist the urge to add more features as it could blow up into its own project if I’m not careful.

With these types of ideas scope creep is a real risk. There’s also a basic PDF viewer built in now. It’s basic, it’s not super performant, but it works. From the file manager if you push x or left trigger and view as PDF you will get the PDF viewer. You can open the table of contents with the start button and jump to page with the y button.  I’m not convinced about this idea yet, but I welcome feedback.

<figure>
  <img src="/assets/images/blog/dev-updates/file-manager-text-viewer/pdf-viewer.webp" alt="Reading a PDF in the built-in PDF viewer in the Junk Store File Manager">
  <figcaption>A PDF open in the new built-in viewer, no leaving Game Mode.</figcaption>
</figure>

<figure>
  <img src="/assets/images/blog/dev-updates/file-manager-text-viewer/pdf-toc.webp" alt="Jumping through a PDF using the table of contents in the Junk Store PDF viewer">
  <figcaption>Pop open the table of contents with the start button to jump around a PDF.</figcaption>
</figure>

This is one of those things that was going to be a huge task without the File Manager, Junk Store Pro keeps leveling up!

I look forward to receiving feedback on this one!


<div class="cta-line" markdown="0">
Got a Junk Store problem? You can now open a ticket right in the <a href="https://portal.junkstore.xyz/support" target="_blank" rel="noopener" class="community-btn support-btn"><i class="fas fa-headset" style="margin-right: 6px;"></i>Support Portal</a>.<br>For game-specific issues, feedback, or just a chat, you'll still find us on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>.
</div>

Game on,<br>
Eben
