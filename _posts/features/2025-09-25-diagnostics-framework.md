---
layout: post
title: "Diagnostics Framework - Early R&D Release"
date: 2025-09-25
categories: [Feature Release, Beta Features]
tags: [junk-store, steam-deck, features]
slug: "diagnostics-framework-release"
excerpt: "R&D release - our diagnostics framework for detecting issues and suggesting remedies on Steam Deck."
image: /assets/images/blog/JunkStoreDiagnostics-1.webp
read_time: "3 min read"
toc: true
---

It's unusual for us to release early R&D work, but we have a diagnostics tool based on extensive research that we think would be useful to users. This framework is still in the early phases of development, but we have already found it useful. It's available on the beta build channel for Junk Store 2.0.

<h2 style="text-align: left !important; margin-left: 0;">What Does It Do?</h2>

The diagnostics framework will attempt to detect issues and suggest remedies on your Steam Deck. It deliberately does not interface with Valve's APIs and controls, which means it can enable Junk Store updates even if things are broken. Think of this as an emergency escape hatch.

This means that if a SteamOS update affects Junk Store 2.0 functionality, this diagnostic tool will automatically pop up.

![Diagnostics tool integrated with Steam UI](/assets/images/blog/JunkStoreDiagnostics-1.webp)

Over time, we'd like to extend this to include more checks and more fixes. It's limited, but already useful. 

<h2 style="text-align: left !important; margin-left: 0;">How to Enable It</h2>

You can enable it by activating developer mode from the **About → System** menu (scroll down to find the toggle at the bottom). Then, in the developer menu, you can toggle it on. This will give you a magnifying glass button that floats above the Steam UI.

![Developer mode settings showing diagnostics toggle](/assets/images/blog/diagnostics-enable.webp)


This is not controller-enabled, so you will have to use the touch screen or hold down the Steam button and use the trackpad to click on it.

<h2 style="text-align: left !important; margin-left: 0;">How It Works</h2>

When you select "Run Diagnostics", it will check for any issues on your Steam Deck that could be causing Junk Store problems. Each check will show as passed or failed, and you'll get warnings for things like outdated Flatpaks or missing dependencies.

The diagnostics tool currently does the following:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
<div>
<strong>Global Checks:</strong>
<ul>
<li>Disk space</li>
<li>Critical Junk Store files present</li>
<li>Basic scripts functionality</li>
<li>Steam version</li>
<li>Junk Store version</li>
</ul>
</div>
<div>
<strong>Per Extension:</strong>
<ul>
<li>Disk space (as some can be set to SD cards etc)</li>
<li>Is the Flatpak installed</li>
<li>Is the Flatpak working</li>
<li>Is there a Flatpak update</li>
<li>Is there a user logged in</li>
<li>Are the critical files present</li>
</ul>
</div>
</div>

![Diagnostic results and system health checks](/assets/images/blog/JunkStoreDiagnostics-3.webp)

Here's an example showing a connection issue with Epic Games:

![Epic Games diagnostics showing connection issue](/assets/images/blog/epic-diagnostics-issue.webp)

<h2 style="text-align: left !important; margin-left: 0;">Need Help?</h2>

If you get stuck or encounter any issues with the diagnostic tool, don't hesitate to reach out for help. Join our community for support and discussion.

<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Join Discord</a>
<a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>r/JunkStore</a>

<div class="inline-blog-cta">
  <p><strong>Ready to experience premium Steam Deck gaming?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🛠️ Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">Give your Steam Deck the launcher it was meant to have</p>
</div>

<style>
/* Left align headings for blog posts - override theme center alignment */
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h1,
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h2,
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h3,
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h4,
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h5,
#main .page .page__inner-wrap .page__content.blog-content.blog-content-wide h6 {
  text-align: left !important;
  margin: 30px 0 20px 0 !important;
  padding-left: 0 !important;
  width: auto !important;
  max-width: none !important;
}

/* Community buttons styling */
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
  margin-right: 8px;
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

/* Inline blog CTA styling */
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