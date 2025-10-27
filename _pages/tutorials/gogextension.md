---
title: "GOG Extension Install Guide"
description: "Add GOG game library integration to Junk Store Decky plugin on Steam Deck. Access DRM-free gaming directly through Steam's interface."
excerpt: "Step-by-step guide on downloading and installing the GOG Extension"
layout: splash
classes: wide tutorial-page
permalink: /tutorials/gogextension
categories: ["Decky Plugin"]
tags: ["gog", "extension", "decky-plugin", "installation"]
difficulty: "Intermediate"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
---
<div class="spacer mt-4"></div>

Want to access your GOG game library through Junk Store? The GOG extension adds basic GOG integration to the Junk Store Decky plugin, giving you DRM-free gaming access directly through Steam's interface on your Steam Deck.

<section class="tutorial-section">
  <h2>How to Install and Add the GOG Extension to Junk-Store</h2>

  <p>Please follow the step-by-step instructions below to install and add the GOG extension to Junk-Store.</p>

  <h3>1. Install Junk-Store</h3>
  <ul>
    <li>Install the latest version of Junk-Store from the Decky Store.</li>
  </ul>

  <h3>2. Switch to Desktop Mode</h3>
  <ul>
    <li>Download the latest GOG extension ZIP file from the portal</li>
    <li>Right-click the ZIP file and choose <strong>“Extract Here”</strong></li>
    <img src="/assets/images/gogext/extracthere.png" alt="Extract here" width="600" height="338" loading="lazy" />
    <li>Double-click the extracted file to launch the installer</li>
    <img src="/assets/images/gogext/launchinstaller.png" alt="Launch Installer" width="600" height="338" loading="lazy" />
    <li>Follow the prompt to install the GOG extension</li>
    <img src="/assets/images/gogext/installerprompt.png" alt="Click yes to run installer" width="600" height="338" loading="lazy" />
  </ul>

  <h3>3. Return to Game Mode</h3>
  <ul>
    <li>Once installed, switch back to Game Mode</li>
    <li><strong>Note:</strong> You will need to reinstall the dependencies after installation</li>
    <img src="/assets/images/gogext/installdeps.png" alt="Install dependencies in Junk Store" width="600" height="338" loading="lazy" />
  </ul>

  <h3>4. Verify the GOG Tab</h3>
  <ul>
    <li>The GOG tab should now be visible in Junk-Store</li>
    <li>Log into GOG using your GOG account credentials</li>
    <img src="/assets/images/gogext/jstabs.webp" alt="Gog tab visible in Junk Store" width="600" height="338" loading="lazy" />
  </ul>

  <h3>5. Test with a Simple Game</h3>
  <ul>
    <li>Install a basic game like <em>Absolute Drift</em> to confirm the extension is working correctly</li>
  </ul>

  <h2>Need Help?</h2>
  <p>If you run into issues, please ask for help in the <strong>#plugin-support</strong> channel on Discord (under the Support/Help category). Be sure to use the <code>GOG</code> tag for easier assistance.</p>
</section>


---

## Need More Help?

If you run into trouble, check out:
- **Decky Plugin:** [Plugin FAQ](/faq/decky/) for common questions
- **Decky Plugin:** [Plugin Troubleshooting](/troubleshooting/decky/) for technical issues
- **General:** [Plugin Help Guide](/deckyhelp) for setup assistance

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