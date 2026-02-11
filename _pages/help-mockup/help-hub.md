---
layout: splash
title: "Junk Store Help Hub"
description: "Complete help hub for both Junk Store Decky Plugin (free) and Junk Store 2.0 (professional). Choose your version for targeted support."
permalink: /help-mockup/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Complete Junk Store Help Hub"
  actions:
    - label: "Get Junk Store 2.0"
      url: "/buy_now/"
      class: "button buy-button"
excerpt: "Get help with playing Epic, GOG, Amazon & itch.io games in Steam Deck Game Mode"
classes: wide
---

<section class="seo-intro">
  <p><strong>Choose your Junk Store version for targeted help.</strong> Whether you're using the free Decky plugin or the professional Junk Store 2.0 solution, find troubleshooting guides, tutorials, and answers to get your Epic, GOG, Amazon & itch.io games working perfectly in Game Mode.</p>
</section>

<!-- Version Selection -->
<section class="version-selector">
  <h2>Choose Your Version</h2>
  <div class="version-cards">
    <div class="version-card decky">
      <h3>🔧 Decky Plugin (Free)</h3>
      <p>Using the free plugin from Decky Loader</p>
      <ul>
        <li>Epic Games support</li>
        <li>Basic GOG support (with extension)</li>
        <li>Community-driven development</li>
      </ul>
      <a href="/help-mockup/decky/" class="button">Get Decky Help</a>
    </div>

    <div class="version-card professional">
      <h3>⭐ Junk Store 2.0 (Professional)</h3>
      <p>The complete $40/year solution</p>
      <ul>
        <li>Epic, GOG, Amazon & itch.io support</li>
        <li>Advanced features & configurations</li>
        <li>Professional support & updates</li>
      </ul>
      <a href="/help-mockup/2.0/" class="button">Get 2.0 Help</a>
    </div>
  </div>

  <div class="comparison-link">
    <p><em>Not sure which version you have?</em> <a href="/comparison/">Compare features and see what upgrading unlocks →</a></p>
  </div>
</section>

<!-- Shared Resources -->
<div class="content-box-container">
  <h2>Shared Resources</h2>

  <div class="content-box tested-games">
    <h3>🎮 Game Compatibility Database</h3>
    <p>Over 670 games tested across Epic, GOG, Amazon & itch.io platforms. Find out which games work perfectly, need minor tweaks, or aren't compatible.</p>
    <a href="/tested-games/" class="button">Browse 670+ Games</a>
  </div>

  <div class="content-box">
    <h3>💡 Steam Deck Gaming Tips</h3>
    <p>General Steam Deck optimization guides, controller setup, battery management, and Game Mode tips that benefit all users.</p>
    <a href="/help-mockup/general-tips/" class="button">View Tips</a>
  </div>

  <div class="content-box">
    <h3>🔄 Unified FAQ</h3>
    <p>Complete FAQ covering both versions with interactive filtering. Find answers quickly with version-specific badges and clear comparisons.</p>
    <a href="/help-mockup/unified-faq/" class="button">Browse All FAQs</a>
  </div>

  <div class="content-box">
    <h3>🐛 Report Issues</h3>
    <p>Found a bug or need to report an issue? Help us improve Junk Store for everyone with detailed bug reports and feature requests.</p>
    <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues/new" class="button" target="_blank">Report Bug</a>
  </div>

  <div class="content-box">
    <h3>💬 Community Support</h3>
    <p>Connect with other Junk Store users, share tips, get community help, and stay updated with the latest news and updates.</p>
    <a href="https://discord.gg/6mRUhR6Teh" class="button" target="_blank">Join Discord</a>
  </div>

  <div class="content-box">
    <h3>📖 Complete Documentation</h3>
    <p>Access comprehensive tutorials, troubleshooting guides, and setup instructions for all platforms and features.</p>
    <a href="/tutorials/" class="button">View All Tutorials</a>
  </div>
</div>

<style>
.version-selector {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  text-align: center;
}

.version-selector h2 {
  color: #66bfff;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.version-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.version-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.version-card:hover {
  border-color: #ffa366;
  transform: translateY(-4px);
}

.version-card.professional {
  background: rgba(255, 163, 102, 0.1);
  border-color: rgba(255, 163, 102, 0.3);
}

.version-card h3 {
  color: #ffa366;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.version-card p {
  color: #e8e8e8;
  margin-bottom: 1rem;
}

.version-card ul {
  color: #c8c8c8;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.version-card li {
  margin-bottom: 0.5rem;
}

.comparison-link {
  text-align: center;
  margin-top: 2rem;
}

.comparison-link em {
  color: #c8c8c8;
}

.comparison-link a {
  color: #66bfff;
  text-decoration: none;
}

.comparison-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .version-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .version-card {
    padding: 1.5rem;
  }
}
</style>