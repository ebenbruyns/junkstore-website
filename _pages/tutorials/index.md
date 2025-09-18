---
layout: splash
title: "Junk Store Tutorials & Guides"
description: "Complete tutorial collection for Junk Store Decky Plugin and 2.0 Standalone. Step-by-step guides for Epic Games, GOG, and Steam Deck setup."
permalink: /tutorials/
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
  <h2>Complete Tutorials & How-To Guides</h2>
  <p>
    Step-by-step tutorials for both <strong>Junk Store Decky Plugin</strong> (free) and <strong>Junk Store 2.0 Standalone</strong> (Professional).
    Whether you're just getting started or need advanced tips, we've got you covered.
  </p>

  <div class="version-guide">
    <div class="version-card decky filter-card" data-filter="decky" onclick="filterTutorials('decky')">
      <h3>🔌 Decky Plugin (Free)</h3>
      <p>Game Mode plugin via Decky Loader</p>
      <small>Click to filter</small>
    </div>
    <div class="version-card standalone filter-card" data-filter="standalone" onclick="filterTutorials('standalone')">
      <h3>🚀 2.0 Standalone (Professional)</h3>
      <p>Full-featured standalone application</p>
      <small>Click to filter</small>
    </div>
    <div class="version-card both filter-card" data-filter="all" onclick="filterTutorials('all')">
      <h3>⚡ Show All</h3>
      <p>View all tutorials</p>
      <small>Click to show all</small>
    </div>
  </div>
</section>

---

## 🚀 Getting Started

<div class="tutorial-grid">

<div class="tutorial-item decky">
  <h4><a href="/tutorials/plugin/Install">Install Junk Store Decky Plugin</a></h4>
  <p>Complete setup guide for the free Decky plugin</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tutorial-item standalone">
  <h4><a href="/tutorials/v2/install2.0">Install Junk Store 2.0</a></h4>
  <p>Setup guide for the Professional standalone version</p>
  <span class="tutorial-tag standalone-tag">2.0 Standalone</span>
</div>

</div>

---

## 🔧 Configuration & Setup

<div class="tutorial-grid">

<div class="tutorial-item both">
  <h4><a href="/tutorials/plugin/Proton">Change Proton Versions</a></h4>
  <p>Fix compatibility issues by switching Proton versions</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/plugin/OAuth">Third-Party Login (OAuth)</a></h4>
  <p>Login with Xbox, PlayStation, Nintendo accounts</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item decky">
  <h4><a href="/tutorials/plugin/gogextension">GOG Extension Setup</a></h4>
  <p>Add GOG games to your Decky plugin</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/plugin/Ubisoft">Ubisoft Connect Games</a></h4>
  <p>Setup guide for Ubisoft games through Epic Games Store</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

<div class="tutorial-item decky">
  <h4><a href="/tutorials/plugin/C++Runtime">Visual C++ Runtime</a></h4>
  <p>Install required Visual C++ components for games</p>
  <span class="tutorial-tag decky-tag">Decky Plugin</span>
</div>

<div class="tutorial-item both">
  <h4><a href="/tutorials/plugin/WineCeller">Wine Cellar Setup</a></h4>
  <p>Advanced Wine configuration and management</p>
  <span class="tutorial-tag both-tag">Universal</span>
</div>

</div>

---

## ⚡ Quick Tips & Tricks

<div class="tips-grid">

<div class="tip-item">
  <h4><a href="/blog/press-y-show-all-games/">Missing the 'Press Y to Show All' Prompt</a></h4>
  <p>Only seeing A-L games in your Epic/GOG library? Look for the 'Press Y to Show All' prompt at the bottom</p>
  <span class="tip-tag">3 min read</span>
</div>

</div>

---

## 🆘 Need Help?

If you're still having trouble after following these guides:

**Quick Help:**
- **[Decky Plugin Help](/deckyhelp)** - Quick reference and tips
- **[2.0 Standalone Help](/2.0-hub/)** - Quick reference and tips

**FAQ Pages:**
- **[Decky Plugin FAQ](/faq/decky/)** - Common plugin questions
- **[2.0 Standalone FAQ](/faq/v2/)** - Common 2.0 questions

**Troubleshooting:**
- **[Decky Plugin Troubleshooting](/troubleshooting/decky/)** - Fix plugin issues
- **[2.0 Standalone Troubleshooting](/troubleshooting/v2/)** - Fix standalone issues

### Community Support
<a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
  <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
</a>
<a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
  <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
</a>


<style>
/* Tutorial Grid Layout */
.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

/* Tips Grid Layout */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.tutorial-item {
  border: 2px solid #333;
  border-radius: 8px;
  padding: 20px;
  background: #1a1a1a;
  transition: all 0.3s ease;
  position: relative;
}

.tutorial-item:hover {
  border-color: #e67300;
  transform: translateY(-2px);
}

.tutorial-item h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

.tutorial-item h4 a {
  color: #fff;
  text-decoration: none;
}

.tutorial-item h4 a:hover {
  color: #e67300;
}

.tutorial-item p {
  margin-bottom: 15px;
  color: #ccc;
}

/* Tutorial Tags */
.tutorial-tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
}

.decky-tag {
  background: #2196f3;
  color: white;
}

.standalone-tag {
  background: #e67300;
  color: white;
}

.both-tag {
  background: #4caf50;
  color: white;
}

/* Tips Items */
.tip-item {
  border: 2px solid #444;
  border-radius: 8px;
  padding: 18px;
  background: linear-gradient(135deg, #1a1a1a 0%, #242424 100%);
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid #ffa500;
}

.tip-item:hover {
  border-color: #ffa500;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 165, 0, 0.2);
}

.tip-item h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.tip-item h4 a {
  color: #fff;
  text-decoration: none;
}

.tip-item h4 a:hover {
  color: #ffa500;
}

.tip-item p {
  margin-bottom: 12px;
  color: #ccc;
  font-size: 0.95em;
}

/* Tip Tags */
.tip-tag {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 600;
  background: rgba(255, 165, 0, 0.15);
  color: #ffa500;
  border: 1px solid rgba(255, 165, 0, 0.3);
}

/* Version Guide Cards */
.version-guide {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.version-card {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  border: 2px solid;
}

.version-card.decky {
  border-color: #2196f3;
  background: rgba(33, 150, 243, 0.1);
}

.version-card.standalone {
  border-color: #e67300;
  background: rgba(230, 115, 0, 0.1);
}

.version-card.both {
  border-color: #4caf50;
  background: rgba(76, 175, 80, 0.1);
}

.version-card h3 {
  margin: 0 0 8px 0;
  font-size: 1.1em;
}

.version-card p {
  margin: 0;
  font-size: 0.9em;
  color: #ccc;
}

/* Community Buttons */
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

/* Filter Cards */
.filter-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(156, 39, 176, 0.3);
}

.filter-card.active {
  border-width: 3px;
  background: rgba(156, 39, 176, 0.15);
  border-color: #9c27b0;
}

.filter-card small {
  display: block;
  margin-top: 5px;
  font-size: 0.75em;
  opacity: 0.7;
}

/* Hidden tutorial items */
.tutorial-item.hidden {
  display: none;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .tutorial-grid {
    grid-template-columns: 1fr;
  }

  .tips-grid {
    grid-template-columns: 1fr;
  }

  .version-guide {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
function filterTutorials(filterType) {
  // Remove active class from all filter cards
  document.querySelectorAll('.filter-card').forEach(card => {
    card.classList.remove('active');
  });

  // Add active class to clicked card
  document.querySelector(`[data-filter="${filterType}"]`).classList.add('active');

  // Get all tutorial items
  const tutorialItems = document.querySelectorAll('.tutorial-item');

  tutorialItems.forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isStandalone = item.classList.contains('standalone');
    const isBoth = item.classList.contains('both');

    let shouldShow = false;

    if (filterType === 'all') {
      shouldShow = true;
    } else if (filterType === 'decky') {
      shouldShow = isDecky || isBoth;
    } else if (filterType === 'standalone') {
      shouldShow = isStandalone || isBoth;
    }

    if (shouldShow) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// Initialize with all tutorials shown
document.addEventListener('DOMContentLoaded', function() {
  // Set "Show All" as active by default
  document.querySelector('[data-filter="all"]').classList.add('active');
});
</script>