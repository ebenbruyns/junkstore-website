---
layout: splash
title: "Junk Store FAQ"
description: "Complete FAQ for Junk Store Decky Plugin and Pro Version. Find answers to common questions about Epic Games, GOG, and Steam Deck setup."
permalink: /faq/
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Decky Plugin Help"
      url: "/deckyhelp/"
      class: "button"
    - label: "Junk Store Pro Help"
      url: "/2.0-hub/"
      class: "button"
excerpt: "Frequently asked questions for both Junk Store versions - free Decky plugin and Pro Version"
---
<div id="top"></div>

<section class="seo-intro">
  <p><strong>Complete FAQ for both Junk Store versions.</strong> Whether you're using the free Decky plugin or Junk Store Pro Version, find answers to your questions about playing Epic Games and GOG games on Steam Deck.</p>
</section>

<!-- Version Filter Section -->
<section class="faq-welcome">
  <h2 style="text-align: center;">Choose Your Version</h2>

  <div class="version-guide">
    <div class="version-card decky filter-card" data-filter="decky" onclick="filterFAQ('decky')">
      <h3>Decky Plugin (Free)</h3>
      <p>Game Mode plugin via Decky Loader</p>
      <small>Click to filter</small>
    </div>
    <div class="version-card pro filter-card" data-filter="pro" onclick="filterFAQ('pro')">
      <h3>Pro Version</h3>
      <p>Full-featured standalone application</p>
      <small>Click to filter</small>
    </div>
    <div class="version-card both filter-card active" data-filter="all" onclick="filterFAQ('all')">
      <h3>Show All</h3>
      <p>View all FAQ items</p>
      <small>Click to show all</small>
    </div>
  </div>
</section>

---

<!-- Search Box -->
<div class="faq-search-container">
  <div class="search-box">
    <input type="text" id="faq-search" placeholder="Search FAQ..." aria-label="Search FAQ questions">
    <button type="button" id="clear-search" class="clear-button" title="Clear search">✕</button>
  </div>
  <div class="search-results-info" id="search-info">Loading FAQ...</div>
</div>

<!-- FAQ Content - Loaded from Firebase -->
<div id="faq-content" class="faq-grid">
  <div class="loading-indicator">
    <p>Loading FAQ items...</p>
  </div>
</div>

---

<h2 style="text-align: center; margin-top: 4rem;">Didn't Find Your Answer?</h2>

<p style="text-align: center; margin-bottom: 2rem; color: #ccc;">Still have questions? We've got you covered with multiple support options.</p>

<div class="help-grid">

<div class="help-section">
  <h3>Quick Help</h3>
  <div class="help-links">
    <a href="/deckyhelp/" class="help-link">
      <span class="help-title">Decky Plugin Help</span>
      <span class="help-desc">Installation and setup</span>
    </a>
    <a href="/2.0-hub/" class="help-link">
      <span class="help-title">Pro Version Help</span>
      <span class="help-desc">Feature guides</span>
    </a>
  </div>
</div>

<div class="help-section">
  <h3>Troubleshooting</h3>
  <div class="help-links">
    <a href="/troubleshooting/" class="help-link">
      <span class="help-title">Troubleshooting Guide</span>
      <span class="help-desc">Fix common issues</span>
    </a>
    <a href="/tested-games/" class="help-link">
      <span class="help-title">Games Tested</span>
      <span class="help-desc">Compatibility database</span>
    </a>
  </div>
</div>

<div class="help-section">
  <h3>Tutorials</h3>
  <div class="help-links">
    <a href="/tutorials/" class="help-link">
      <span class="help-title">All Tutorials</span>
      <span class="help-desc">Step-by-step guides</span>
    </a>
    <a href="/comparison/" class="help-link">
      <span class="help-title">Version Comparison</span>
      <span class="help-desc">Decky vs 2.0</span>
    </a>
  </div>
</div>

</div>

<div style="text-align: center; margin-top: 3rem;">
  <h3>Community Support</h3>
  <p style="margin-bottom: 1.5rem;">Join our community for live help and discussion</p>
  <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn">
    <i class="fab fa-discord" style="margin-right: 6px;"></i> Discord
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" target="_blank" rel="noopener" class="community-btn reddit-btn">
    <i class="fab fa-reddit" style="margin-right: 6px;"></i> Reddit
  </a>
</div>

<!-- Back to top -->
<div class="section-end">
  <a href="#top" class="back-to-top">↑ Back to Top</a>
</div>

<!-- Mobile floating action button -->
<a href="#top" class="faq-mobile-fab" id="mobile-fab">↑</a>

<style>
/* ========================================
   Unified FAQ Page Styles
   (Minimal overrides - uses global faq-box.scss)
   ======================================== */

/* SEO Intro */
.seo-intro {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
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
  cursor: pointer;
  transition: all 0.3s ease;
}

.version-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.version-card.decky {
  border-color: #2196f3;
  background: rgba(33, 150, 243, 0.1);
}

.version-card.pro {
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

.version-card small {
  display: block;
  margin-top: 5px;
  font-size: 0.75em;
  opacity: 0.7;
}

.filter-card.active {
  border-width: 3px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.version-card.decky.active {
  background: rgba(33, 150, 243, 0.25);
}

.version-card.pro.active {
  background: rgba(230, 115, 0, 0.25);
}

.version-card.both.active {
  background: rgba(76, 175, 80, 0.25);
}

/* Search Container */
.faq-search-container {
  max-width: 600px;
  margin: 1.5rem auto 0.5rem auto;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box input {
  width: 100%;
  padding: 16px 50px 16px 20px;
  font-size: 18px;
  border: 2px solid #444;
  border-radius: 10px;
  background: #1e2a38;
  color: #fff;
}

.search-box input:focus {
  outline: none;
  border-color: #007acc;
}

.clear-button {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #888;
  font-size: 18px;
  cursor: pointer;
  display: none;
}

.clear-button:hover {
  color: #fff;
}

.search-results-info {
  text-align: center;
  margin-top: 10px;
  color: #888;
  font-size: 0.9em;
}

/* Loading Indicator */
.loading-indicator {
  text-align: center;
  padding: 3rem;
  color: #888;
}

/* FAQ Grid */
.faq-grid {
  margin: 2rem 0;
}

/* Category Titles */
.category-title {
  text-align: center;
  margin: 1.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #444;
}

.faq-category:first-child .category-title {
  margin-top: 1rem;
}

/* Summary text and badge layout */
.faq-box summary {
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-text {
  flex: 1;
}

.product-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  flex-shrink: 0;
  min-width: 90px;
  text-align: center;
}

.decky-badge {
  background: #2196f3;
  color: white;
}

.pro-badge {
  background: #e67300;
  color: white;
}

.both-badge {
  background: #4caf50;
  color: white;
}

/* FAQ Answer styling */
.faq-answer {
  padding: 0.5em 0;
  color: #e8e8e8;
  line-height: 1.6;
  border-top: 1px solid #ddd;
  margin-top: 0.5em;
}

.faq-answer ul, .faq-answer ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
}

.faq-answer a {
  color: #66bfff;
}

.faq-answer a:hover {
  text-decoration: underline;
}

/* Hidden items for filtering */
.faq-item.hidden,
.faq-category.hidden {
  display: none;
}

/* Help Section Styling */
.help-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.help-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 25px;
  background-color: #1e2a38;
  transition: all 0.3s ease;
  text-align: center;
}

.help-section:hover {
  border-color: #007acc;
  transform: translateY(-2px);
}

.help-section h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #66bfff;
  font-size: 1.2em;
}

.help-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.help-link {
  display: block;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.help-link:hover {
  background: rgba(0, 122, 204, 0.1);
  border-color: #007acc;
  transform: translateX(5px);
}

.help-title {
  display: block;
  color: #fff;
  font-weight: 600;
  margin-bottom: 4px;
}

.help-desc {
  display: block;
  color: #ccc;
  font-size: 0.9em;
}

/* Community Buttons */
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-right: 12px;
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

/* Back to Top */
.section-end {
  text-align: center;
  margin: 3rem 0;
}

.back-to-top {
  display: inline-block;
  padding: 10px 20px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.2s;
}

.back-to-top:hover {
  background: #007acc;
}

/* Mobile FAB */
.faq-mobile-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #007acc;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
}

.faq-mobile-fab.visible {
  opacity: 1;
  visibility: visible;
}

.faq-mobile-fab:hover {
  background: #0095e6;
  transform: scale(1.1);
}

/* Error/No Content Messages */
.error-message {
  text-align: center;
  padding: 2rem;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
}

.no-content {
  text-align: center;
  padding: 2rem;
  color: #888;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .version-guide {
    grid-template-columns: 1fr;
  }

  .help-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product-badge {
    font-size: 0.65em;
    padding: 2px 6px;
  }

  .community-btn {
    display: flex;
    margin: 0.5rem auto;
    width: 80%;
    justify-content: center;
  }
}
</style>

<script>
// Show/hide mobile FAB based on scroll position
window.addEventListener('scroll', function() {
  const fab = document.getElementById('mobile-fab');
  if (window.scrollY > 300) {
    fab.classList.add('visible');
  } else {
    fab.classList.remove('visible');
  }
});

// FAQ Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('faq-search');
  const clearButton = document.getElementById('clear-search');
  const searchInfo = document.getElementById('search-info');

  // Wait for FAQ content to load
  document.addEventListener('faqLoaded', function() {
    const faqBoxes = document.querySelectorAll('.faq-box');
    const totalQuestions = faqBoxes.length;
    searchInfo.textContent = `Showing all ${totalQuestions} questions`;

    // Set up search
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim().toLowerCase();
      let visibleCount = 0;

      if (searchTerm === '') {
        faqBoxes.forEach(box => {
          box.classList.remove('search-hidden');
          visibleCount++;
        });
        clearButton.style.display = 'none';
      } else {
        faqBoxes.forEach(box => {
          const summary = box.querySelector('summary');
          const answer = box.querySelector('.faq-answer');
          const text = (summary ? summary.textContent : '') + (answer ? answer.textContent : '');

          if (text.toLowerCase().includes(searchTerm)) {
            box.classList.remove('search-hidden');
            visibleCount++;
          } else {
            box.classList.add('search-hidden');
          }
        });
        clearButton.style.display = 'inline-block';
      }

      // Update results info
      if (visibleCount === 0 && searchTerm !== '') {
        searchInfo.textContent = 'No results found';
      } else if (searchTerm === '') {
        searchInfo.textContent = `Showing all ${totalQuestions} questions`;
      } else {
        searchInfo.textContent = `Showing ${visibleCount} of ${totalQuestions} questions`;
      }

      // Hide empty categories
      document.querySelectorAll('.faq-category').forEach(category => {
        const visibleItems = category.querySelectorAll('.faq-box:not(.search-hidden):not(.hidden)');
        category.classList.toggle('search-empty', visibleItems.length === 0);
      });
    });

    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Escape') {
        clearSearch();
      }
    });

    clearButton.addEventListener('click', clearSearch);

    function clearSearch() {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    }
  });

  // Handle direct links to FAQ items
  function openLinkedFAQ() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement && targetElement.tagName === 'DETAILS') {
        targetElement.open = true;
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetElement.style.boxShadow = '0 0 10px rgba(0, 122, 204, 0.5)';
          setTimeout(() => {
            targetElement.style.boxShadow = '';
          }, 3000);
        }, 100);
      }
    }
  }

  // Wait a bit for Firebase content to load, then check for hash
  setTimeout(openLinkedFAQ, 1000);
  window.addEventListener('hashchange', openLinkedFAQ);
});
</script>
