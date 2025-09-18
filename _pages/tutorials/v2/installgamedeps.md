---
layout: splash
title: "Easily Install Game Dependencies"
excerpt: "How to install common game dependencies in Junk Store"
permalink: /tutorials/installgamedeps/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---

<div class="spacer mt-4"></div>

<h2>Installing Common Dependencies with Junk Store (No Protontricks Needed)</h2>

<p>Most games will work out of the box thanks to <strong>Visual C++ 2022 (x64)</strong>, which is installed automatically with each game. However, some games require extra dependencies like .NET or older Visual C++ redistributables for example.</p>

<p>Junk Store makes it easy to install these <strong>without using Protontricks</strong>.</p>

<hr>

<h3>How to Install Dependencies in Junk Store</h3>

<ol>
  <li><strong>Open the Game Page</strong></li><br>
    <li>Navigate to the game inside Junk Store and <strong>click the ⚙️ Cog Menu</strong></li>
    <img src="/assets/images/jspro/dependencies/gamepagecog.png" alt="download from portal" width="600" />
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

**Still having issues after installing dependencies?**
- **Game won't launch:** [Troubleshooting Guide](/2.0troubleshooting/)
- **General questions:** [Frequently Asked Questions](/2.0faq/)
- **More tutorials:** [All How-To Guides](/2.0tutorials/)
