---
layout: splash
title: "Junk Store Decky Plugin Tutorials"
description: "Step-by-step tutorials for the free Junk Store Decky plugin on Steam Deck. Learn to play Epic Games & GOG games in Game Mode without Desktop Mode switching."
permalink: /plugin_tutorials/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
  actions:
    - label: "Get Junk Store 2.0"
      url: "/buy_now/"
      class: "button buy-button"
---
<div class="spacer mt-4"></div>

<!-- Welcome Message -->
<section class="tutorials-welcome">
  <h2>Welcome to Our 'How To' Guides</h2>
  <p>
     Here you'll find step-by-step tutorials to help you get the most out of the free Junk Store Decky plugin — whether you're just getting started or looking for advanced tips.<br><br>
     
    Currently, we have guides on plugin installation, authentication, Proton management, and dependency setup. More tutorials are coming soon!
  </p>
</section>

<!-- Tutorials Content Boxes -->
<div class="content-box-container">

  <div class="content-box">
    <h3>Install Junk Store</h3>
    <p>Step-by-step guide for installing Junk Store through the Decky plugin store.</p>
    <a href="{{ '/tutorials/plugin/Install' | relative_url }}" class="button">View Guide</a>
  </div>

  <div class="content-box">
    <h3>Login with OAuth</h3>
    <p>How to login using third-party login providers through Junk Store.</p>
    <a href="{{ '/tutorials/plugin/OAuth' | relative_url }}" class="button">View Guide</a>
  </div>

  <div class="content-box">
    <h3>Install Wine Cellar</h3>
    <p>Instructions on installing Wine Cellar to enhance compatibility with various titles.</p>
    <a href="{{ '/tutorials/plugin/WineCellar' | relative_url }}" class="button">View Guide</a>
  </div>

  <div class="content-box">
    <h3>Check or Change Proton Version</h3>
    <p>Learn how to verify and adjust the Proton version used for your games.</p>
    <a href="{{ '/tutorials/plugin/Proton' | relative_url }}" class="button">View Guide</a>
  </div>

  <!-- <div class="content-box">
    <h3>Change Epic Language</h3>
    <p>Guide to changing the global language setting for Epic Games via Junk Store.</p>
    <a href="{{ '/help/tutorials/change-epic-language' | relative_url }}" class="button">View Guide</a>
  </div> -->

  <div class="content-box">
    <h3>Install C++ Runtime</h3>
    <p>How to install the required C++ runtime dependencies for certain games.</p>
    <a href="{{ '/tutorials/plugin/C++Runtime' | relative_url }}" class="button">View Guide</a>
  </div>

  <!-- <div class="content-box">
    <h3>Install Ubisoft Launcher</h3>
    <p>Step-by-step walkthrough for setting up the Ubisoft launcher through Junk Store.</p>
    <a href="{{ '/help/tutorials/install-ubisoft-launcher' | relative_url }}" class="button">View Guide</a>
  </div> -->

  <!-- <div class="content-box">
    <h3>Install Fall Guys</h3>
    <p>Instructions on getting Fall Guys running through Epic Games on Junk Store.</p>
    <a href="{{ '/help/tutorials/install-fall-guys' | relative_url }}" class="button">View Guide</a>
  </div> -->

  <!-- <div class="content-box">
    <h3>Install GOG Extension</h3>
    <p>Learn how to install and configure the GOG extension for your library.</p>
    <a href="{{ '/help/tutorials/install-gog-extension' | relative_url }}" class="button">View Guide</a>
  </div> -->

</div>

<!-- Need Help Section -->
<section class="need-help-section" style="margin-top: 2rem; padding: 1.5rem 2rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
  <h2 style="margin-top: 0;">Still Need Help?</h2>
  <p>If these tutorials didn't solve your issue, here are additional resources:</p>
  <ul>
    <li><strong>Quick answers:</strong> <a href="/faq/decky/">Decky Plugin FAQ</a></li>
    <li><strong>Technical problems:</strong> <a href="/troubleshooting/decky/">Troubleshooting Guide</a></li>
    <li><strong>Community support:</strong> 
      <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
        <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
      </a>
      <a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
        <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
      </a>
    </li>
  </ul>
</section>

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
