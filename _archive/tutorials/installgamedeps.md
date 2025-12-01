---
layout: splash
title: "Easily Install Game Dependencies"
description: "Learn how to install common game dependencies in Junk Store 2.0 without using Protontricks. Fix games that need Visual C++ and other Windows components."
excerpt: "How to install common game dependencies in Junk Store"
permalink: /tutorials/game-dependencies
classes: wide tutorial-page
categories: ["2.0 Standalone"]
tags: ["dependencies", "visual-c++", "windows-components", "troubleshooting"]
difficulty: "Intermediate"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---

<div class="spacer mt-4"></div>

Struggling with games that won't launch due to missing Windows components? Junk Store 2.0 makes installing game dependencies simple without the complexity of Protontricks. Get Visual C++, .NET Framework, and other essential components installed directly through your game's prefix.

<h2>Installing Common Dependencies with Junk Store (No Protontricks Needed)</h2>

<p>Most games will work out of the box thanks to <strong>Visual C++ 2022 (x64)</strong>, which is installed automatically with each game. However, some games require extra dependencies like .NET or older Visual C++ redistributables for example.</p>

<p>Junk Store makes it easy to install these <strong>without using Protontricks</strong>.</p>

<hr>

<h3>How to Install Dependencies in Junk Store</h3>

<ol>
  <li><strong>Open the Game Page</strong></li><br>
    <li>Navigate to the game inside Junk Store and <strong>click the ⚙️ Cog Menu</strong></li>
    <img src="/assets/images/jspro/dependencies/gamepagecog.webp" alt="download from portal" width="600" />
    <br>
    <br>
  <li><strong>Select <code>Installation</code></strong></li><br>
    From the dropdown menu, choose the <code>Installation</code> tab.<br>
    <img src="/assets/images/jspro/dependencies/installation.png" alt="download from portal" width="600" />
    <br>
    <br>
  <li><strong>Expand the Installation Options</strong></li><br>
    If you don’t see a <code>Dependencies</code> section, use the dropdown at the top (usually set to <code>Basic</code>) and change it to <code>All</code>.
    <img src="/assets/images/jspro/dependencies/dependecies.png" alt="download from portal" width="600" />
    <br>
    <br>
  <li><strong>Enable Required Dependencies</strong></li><br>
    Under the <code>Dependencies</code> section, you'll see a list of available components.<br>
    Toggle the one(s) you need — the switch will turn <strong>blue</strong> when enabled.
    <img src="/assets/images/jspro/dependencies/selectdep.png" alt="download from portal" width="600" />
    <br>
    <br>
  <li><strong>Save Your Changes</strong></li><br>
    Press <kbd>X</kbd> to save.<br>
    <img src="/assets/images/jspro/dependencies/pushxtosave.png" alt="download from portal" width="600" />
    <br>
    <br>
    If you forget, Junk Store will remind you that you have unsaved changes.<br>
    - Click <strong>Save</strong> to apply changes so the dependency installs on next game launch.<br>
    - Or click <strong>Discard</strong> to exit without saving.<br>
    <img src="/assets/images/jspro/dependencies/unsaveddialogue.png" alt="download from portal" width="600" />
</ol>

<p><strong>Tip:</strong> If you're not sure which dependency is needed, try launching the game first — missing components usually produce a helpful error. You can also check <a href="https://www.protondb.com/" target="_blank" rel="noopener noreferrer">ProtonDB</a>, <a href="{{ '/tested-games/' | relative_url }}">Tested Games</a> or community forums for guidance.</p>

---

## Need More Help?

If you run into trouble, check out:
- **2.0 Standalone:** [2.0 FAQ](/2.0faq/) for common questions
- **2.0 Standalone:** [2.0 Troubleshooting](/2.0troubleshooting/) for technical issues
- **General:** [2.0 Support Hub](/2.0-hub/) for complete support

**Still stuck? Get community help:**

<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
  <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
</a>
<a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
  <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
</a>

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
  color: white;
}

.discord-btn {
  background: #5865f2;
  color: white !important;
}

.reddit-btn {
  background: #ff4500;
  color: white !important;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white;
  opacity: 0.9;
}
</style>
