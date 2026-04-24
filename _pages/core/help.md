---
layout: junkstore-page
title: "Junk Store Help — Steam Deck Troubleshooting & FAQs"
hero_title: "Junk Store Help"
description: "Junk Store help for Steam Deck - FAQ, troubleshooting, tutorials, and game compatibility. Covers both Decky Plugin and Pro Version."
permalink: /help/
---
{% include content-schema.html type="faq" %}
{% include content-schema.html type="troubleshooting" %}
<div id="top"></div>

<!-- ==================== COMPACT HEADER ==================== -->
<section class="help-header-compact">
  <!-- Tab Navigation (First - pick what type of help) -->
  <div class="help-tabs-compact">
    <button class="help-tab active" data-tab="faq" onclick="switchTab('faq')">FAQ</button>
    <button class="help-tab" data-tab="quicktips" onclick="switchTab('quicktips')">Quick Tips</button>
    <button class="help-tab" data-tab="troubleshooting" onclick="switchTab('troubleshooting')">Troubleshooting</button>
    <button class="help-tab" data-tab="tutorials" onclick="switchTab('tutorials')">Tutorials</button>
  </div>

  <!-- Version Buttons (Second - filter by product) -->
  <div class="version-buttons-centered">
    <button class="version-btn decky" data-filter="decky" onclick="selectVersion('decky')">Decky Plugin</button>
    <button class="version-btn pro" data-filter="pro" onclick="selectVersion('pro')">Pro Version</button>
    <button class="version-btn all selected" data-filter="all" onclick="selectVersion('all')">Show All</button>
    <button class="badge-help-btn" id="badge-help-trigger" title="What do the badges mean?">?</button>
    <!-- Tooltip -->
    <div class="badge-tooltip" id="badge-tooltip">
      <div class="tooltip-content">
        <strong>Badge Guide:</strong>
        <div class="tooltip-item"><span class="badge-sample decky">Decky</span> Decky Plugin only</div>
        <div class="tooltip-item"><span class="badge-sample pro">Pro</span> Pro Version only</div>
        <div class="tooltip-item"><span class="badge-sample both">Universal</span> Same for both versions</div>
        <div class="tooltip-item"><span class="badge-sample version-specific">Version Specific</span> Different answer per version</div>
      </div>
    </div>
  </div>

  <!-- Search Box (Third - search within context) -->
  <div class="search-primary">
    <div class="search-box-large">
      <input type="text" id="faq-search" placeholder="Search help content..." aria-label="Search help">
      <button type="button" id="faq-clear-search" class="clear-btn" title="Clear search">×</button>
    </div>
    <div class="search-info-line" id="search-info">Loading...</div>
  </div>
</section>

<!-- ==================== FAQ TAB ==================== -->
<div id="tab-faq" class="tab-panel active">

<!-- FAQ Content - Collapsible Categories -->
<div id="faq-content-redesign" class="faq-collapsible">
  <div class="faq-skeleton">
    <div class="skeleton-category"></div>
    <div class="skeleton-category"></div>
    <div class="skeleton-category"></div>
  </div>
</div>

</div>

<!-- ==================== QUICK TIPS TAB ==================== -->
<div id="tab-quicktips" class="tab-panel">

<div id="quicktips-content" class="faq-collapsible">
  <div class="faq-skeleton">
    <div class="skeleton-category"></div>
    <div class="skeleton-category"></div>
  </div>
</div>

</div>

<!-- ==================== TROUBLESHOOTING TAB ==================== -->
<div id="tab-troubleshooting" class="tab-panel">

<div id="troubleshooting-content" class="ts-collapsible">
  <div class="faq-skeleton">
    <div class="skeleton-category"></div>
    <div class="skeleton-category"></div>
    <div class="skeleton-category"></div>
  </div>
</div>

</div>

<!-- ==================== TUTORIALS TAB ==================== -->
<div id="tab-tutorials" class="tab-panel">

<div id="tutorials-content">

<!-- Installation Guides Section -->
<h2 class="text-center">Installation Guides</h2>
<div class="tutorial-grid">
  <div class="tutorial-item decky" data-category="decky">
    <h4><a href="/tutorials/install-decky-plugin/">Install Junk Store Decky Plugin</a></h4>
    <p>Step-by-step guide to install Junk Store on your Steam Deck</p>
    <span class="tutorial-tag decky-tag">Decky Plugin</span>
  </div>
  <div class="tutorial-item pro" data-category="pro">
    <h4><a href="/get_started/">Getting Started with Junk Store Pro</a></h4>
    <p>Quick start guide for Junk Store Pro - get up and running fast</p>
    <span class="tutorial-tag pro-tag">Pro Version</span>
  </div>
  <div class="tutorial-item pro" data-category="pro">
    <h4><a href="/tutorials/install-junk-store-2/">Install Junk Store Pro</a></h4>
    <p>Guide on downloading and installing Junk Store Pro</p>
    <span class="tutorial-tag pro-tag">Pro Version</span>
  </div>
  <div class="tutorial-item decky" data-category="decky">
    <h4><a href="/tutorials/gog-extension/">GOG Extension Install Guide</a></h4>
    <p>Step-by-step guide on downloading and installing the GOG Extension</p>
    <span class="tutorial-tag decky-tag">Decky Plugin</span>
  </div>
</div>

<hr class="my-4">

<!-- Configuration & Setup Section -->
<h2 class="text-center">Configuration & Setup</h2>
<div class="tutorial-grid">
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/oauth-login/">How to Login using OAuth</a></h4>
    <p>Step-by-step guide on logging in via third party logins</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/proton-versions/">How to Check/Change Proton Version</a></h4>
    <p>Step-by-step guide on how to check and change your Proton version</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/wine-cellar/">How to Install Wine Cellar Plugin</a></h4>
    <p>Step-by-step guide on installing WineCellar to manage compatibility tools</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/change-game-language/">Change Game Language Settings</a></h4>
    <p>Change your Epic, GOG, or Amazon game language settings directly in Game Mode</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/lsfg-frame-generation/">Enable LSFG Frame Generation</a></h4>
    <p>Step-by-step guide on how to enable LSFG frame generation</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/cpp-runtime/">Install C++ Runtime</a></h4>
    <p>Fix game crashes and missing DLL errors by installing Visual C++ redistributables</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/ubisoft-games/">Play Ubisoft Connect Games</a></h4>
    <p>Install Ubisoft Connect and launch Ubisoft games through Epic Games Store</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
</div>

<hr class="my-4">

<!-- Quick Tips & Tricks Section -->
<h2 class="text-center">Quick Tips & Tricks</h2>
<div class="tips-grid">
{% assign tips = site.posts | where_exp: "post", "post.path contains '_posts/tips/'" | sort: "date" | reverse %}
{% for tip in tips limit: 12 %}
  {% assign product = tip.categories | join: " " | downcase %}
  {% if product contains "decky" %}
    {% assign item_class = "decky" %}
    {% assign tag_class = "decky-tag" %}
    {% assign tag_label = "Decky Plugin" %}
  {% elsif product contains "pro" %}
    {% assign item_class = "pro" %}
    {% assign tag_class = "pro-tag" %}
    {% assign tag_label = "Pro Version" %}
  {% else %}
    {% assign item_class = "both" %}
    {% assign tag_class = "both-tag" %}
    {% assign tag_label = "Universal" %}
  {% endif %}
  <div class="tip-item {{ item_class }}" data-product="{{ item_class }}">
    <h4><a href="{{ tip.url }}">{{ tip.title | remove: "Tip of the Week: " }}</a></h4>
    <p>{{ tip.excerpt | strip_html | truncate: 100 }}</p>
    <span class="tip-tag">{{ tip.read_time | default: "3 min read" }}</span>
    <span class="tutorial-tag {{ tag_class }}">{{ tag_label }}</span>
  </div>
{% endfor %}
</div>

</div>

</div>

<!-- ==================== MORE RESOURCES ==================== -->
<hr class="my-4">

<div class="resources-row">
  <a href="/games/tested/" class="resource-card">
    <span class="resource-icon">🎮</span>
    <span class="resource-text"><strong><span data-games-count>900</span>+ Games Tested</strong></span>
  </a>
  <a href="https://discord.gg/6mRUhR6Teh" class="resource-card discord" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-discord"></i></span>
    <span class="resource-text"><strong>Discord</strong></span>
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" class="resource-card reddit" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-reddit"></i></span>
    <span class="resource-text"><strong>Reddit</strong></span>
  </a>
</div>

<!-- Mobile FAB -->
<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<!-- Styles moved to _sass/help-page.scss -->

<script>
// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize version from localStorage or default to 'all'
  const savedVersion = localStorage.getItem('junkstore-version') || 'all';
  selectVersion(savedVersion, false);

  // Initialize tab from URL hash
  const hash = window.location.hash.substring(1);
  if (['faq', 'quicktips', 'troubleshooting', 'tutorials'].includes(hash)) {
    switchTab(hash, false);
  }

  // Badge tooltip toggle
  const helpBtn = document.getElementById('badge-help-trigger');
  const tooltip = document.getElementById('badge-tooltip');

  helpBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    tooltip.classList.toggle('visible');
  });

  document.addEventListener('click', function() {
    tooltip.classList.remove('visible');
  });
});

// Show/hide mobile FAB
window.addEventListener('scroll', function() {
  const fab = document.getElementById('mobile-fab');
  if (window.scrollY > 300) {
    fab.classList.add('visible');
  } else {
    fab.classList.remove('visible');
  }
});

// ==================== VERSION SELECTION ====================
function selectVersion(version, updateUrl = true) {
  // Update button states
  document.querySelectorAll('.version-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.filter === version) {
      btn.classList.add('selected');
    }
  });

  // Save preference
  localStorage.setItem('junkstore-version', version);

  // Apply filtering to each section
  if (window.filterFAQRedesign) window.filterFAQRedesign(version);
  if (window.filterQuickTips) window.filterQuickTips(version);
  if (window.filterTroubleshooting) window.filterTroubleshooting(version);
  filterTutorials(version);

  // Update the search info count
  updateSearchInfo();
}

function updateCategoryVisibility() {
  document.querySelectorAll('.category-accordion').forEach(category => {
    const visibleItems = category.querySelectorAll('.faq-item-compact:not(.hidden)');
    const countEl = category.querySelector('.category-count');
    if (countEl) {
      countEl.textContent = visibleItems.length;
    }
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  updateSearchInfo();
}

function updateSearchInfo() {
  const searchInfo = document.getElementById('search-info');
  if (!searchInfo) return;

  const activeTab = document.querySelector('.help-tab.active')?.dataset.tab || 'faq';
  let visibleCount = 0;
  let totalCount = 0;
  let label = 'items';

  if (activeTab === 'faq') {
    visibleCount = document.querySelectorAll('#faq-content-redesign .faq-item-compact:not(.hidden)').length;
    totalCount = document.querySelectorAll('#faq-content-redesign .faq-item-compact').length;
    label = 'questions';
  } else if (activeTab === 'quicktips') {
    visibleCount = document.querySelectorAll('#quicktips-content .qt-item:not(.hidden)').length;
    totalCount = document.querySelectorAll('#quicktips-content .qt-item').length;
    label = 'tips';
  } else if (activeTab === 'troubleshooting') {
    visibleCount = document.querySelectorAll('#troubleshooting-content .ts-item:not(.hidden)').length;
    totalCount = document.querySelectorAll('#troubleshooting-content .ts-item').length;
    label = 'issues';
  } else if (activeTab === 'tutorials') {
    const tutorials = document.querySelectorAll('#tutorials-content .tutorial-item:not(.hidden)').length;
    const tips = document.querySelectorAll('#tutorials-content .tip-item:not(.hidden)').length;
    const totalTutorials = document.querySelectorAll('#tutorials-content .tutorial-item').length;
    const totalTips = document.querySelectorAll('#tutorials-content .tip-item').length;
    visibleCount = tutorials + tips;
    totalCount = totalTutorials + totalTips;
    label = 'tutorials';
  }

  if (totalCount > 0) {
    searchInfo.textContent = `${visibleCount} of ${totalCount} ${label}`;
  }
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName, updateUrl = true) {
  document.querySelectorAll('.help-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');

  if (updateUrl) {
    history.replaceState(null, '', '#' + tabName);
  }

  // Re-apply search to new tab
  const searchInput = document.getElementById('faq-search');
  if (searchInput && searchInput.value.trim()) {
    searchInput.dispatchEvent(new Event('input'));
  }

  // Update search info for the new tab
  updateSearchInfo();
}

// ==================== TUTORIAL FILTERING ====================
function filterTutorials(version) {
  // Filter tutorial items
  document.querySelectorAll('.tutorial-item').forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');

    let show = version === 'all' ||
               (version === 'decky' && (isDecky || isBoth)) ||
               (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !show);
  });

  // Filter tip items (Quick Tips & Tricks)
  document.querySelectorAll('.tip-item').forEach(item => {
    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');

    let show = version === 'all' ||
               (version === 'decky' && (isDecky || isBoth)) ||
               (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !show);
  });
}

// ==================== SEARCH ====================
document.addEventListener('faqLoaded', function() {
  const searchInput = document.getElementById('faq-search');
  const clearBtn = document.getElementById('faq-clear-search');

  searchInput.addEventListener('input', function() {
    const term = this.value.trim().toLowerCase();
    clearBtn.style.display = term ? 'block' : 'none';

    // Get current active tab
    const activeTab = document.querySelector('.help-tab.active')?.dataset.tab || 'faq';

    // Search based on active tab
    if (activeTab === 'faq') {
      searchFAQ(term);
    } else if (activeTab === 'quicktips') {
      searchQuickTips(term);
    } else if (activeTab === 'troubleshooting') {
      searchTroubleshooting(term);
    } else if (activeTab === 'tutorials') {
      searchTutorials(term);
    }

    updateSearchInfo();
  });

  clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
    }
  });
});

// Search FAQ items
function searchFAQ(term) {
  document.querySelectorAll('#faq-content-redesign .faq-item-compact').forEach(item => {
    const text = item.textContent.toLowerCase();
    const matchesSearch = !term || text.includes(term);
    const isVersionHidden = item.classList.contains('version-hidden');
    item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
  });

  // Auto-expand categories with matches when searching
  if (term) {
    document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
      const hasVisible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length > 0;
      if (hasVisible) cat.classList.add('expanded');
    });
  }

  // Update category visibility and counts
  document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
}

// Search Quick Tips items
function searchQuickTips(term) {
  document.querySelectorAll('#quicktips-content .qt-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    const matchesSearch = !term || text.includes(term);
    const isVersionHidden = item.classList.contains('version-hidden');
    item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
  });

  if (term) {
    document.querySelectorAll('#quicktips-content .category-accordion').forEach(cat => {
      const hasVisible = cat.querySelectorAll('.qt-item:not(.hidden)').length > 0;
      if (hasVisible) cat.classList.add('expanded');
    });
  }

  document.querySelectorAll('#quicktips-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.qt-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
}

// Search Troubleshooting items
function searchTroubleshooting(term) {
  document.querySelectorAll('#troubleshooting-content .ts-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    const matchesSearch = !term || text.includes(term);
    const isVersionHidden = item.classList.contains('version-hidden');
    item.classList.toggle('hidden', !matchesSearch || isVersionHidden);
  });

  if (term) {
    document.querySelectorAll('#troubleshooting-content .category-accordion').forEach(cat => {
      const hasVisible = cat.querySelectorAll('.ts-item:not(.hidden)').length > 0;
      if (hasVisible) cat.classList.add('expanded');
    });
  }

  document.querySelectorAll('#troubleshooting-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.ts-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
}

// Search Tutorials and Tips
function searchTutorials(term) {
  const version = localStorage.getItem('junkstore-version') || 'all';

  // Search tutorial items
  document.querySelectorAll('#tutorials-content .tutorial-item').forEach(item => {
    const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
    const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
    const matchesSearch = !term || title.includes(term) || desc.includes(term);

    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');
    const matchesVersion = version === 'all' ||
                          (version === 'decky' && (isDecky || isBoth)) ||
                          (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !matchesSearch || !matchesVersion);
  });

  // Search tip items in tutorials tab
  document.querySelectorAll('#tutorials-content .tip-item').forEach(item => {
    const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
    const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
    const matchesSearch = !term || title.includes(term) || desc.includes(term);

    const isDecky = item.classList.contains('decky');
    const isPro = item.classList.contains('pro');
    const isBoth = item.classList.contains('both');
    const matchesVersion = version === 'all' ||
                          (version === 'decky' && (isDecky || isBoth)) ||
                          (version === 'pro' && (isPro || isBoth));

    item.classList.toggle('hidden', !matchesSearch || !matchesVersion);
  });

  // Hide empty sections
  document.querySelectorAll('#tutorials-content h2').forEach(heading => {
    const nextGrid = heading.nextElementSibling;
    if (nextGrid && (nextGrid.classList.contains('tutorial-grid') || nextGrid.classList.contains('tips-grid'))) {
      const visibleItems = nextGrid.querySelectorAll('.tutorial-item:not(.hidden), .tip-item:not(.hidden)');
      heading.classList.toggle('hidden', visibleItems.length === 0);
      nextGrid.classList.toggle('hidden', visibleItems.length === 0);
    }
  });
}

// ==================== CATEGORY TOGGLE ====================
function toggleCategory(el) {
  event.stopPropagation();
  const accordion = el.closest('.category-accordion');
  if (accordion) {
    accordion.classList.toggle('expanded');
  }
}
</script>

<!-- FAQ Loader (Uses Cloudflare Worker cache) -->
<script>
(async function loadFAQCollapsible() {
  // Wait for cache client to be ready
  if (!window.fetchCachedCollection) {
    setTimeout(loadFAQCollapsible, 100);
    return;
  }

  const container = document.getElementById('faq-content-redesign');
  if (!container) return;

  try {
    // Fetch from Cloudflare Worker cache instead of direct Firebase
    const allItems = await window.fetchCachedCollection('faq');

    if (!allItems || allItems.length === 0) {
      container.innerHTML = '<p class="no-results">No FAQ items available.</p>';
      return;
    }

    // Filter to active items (exclude quicktips - they go in Quick Tips tab)
    const items = allItems.filter(item => item.isActive && item.contentType !== 'quicktip');

    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    // Sort within categories
    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Category order
    const catOrder = ['Overview', 'Getting Started', 'Pricing & Trial', 'Game Compatibility', 'GOG Extension', 'Help & Support'];
    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const iA = catOrder.indexOf(a), iB = catOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render
    let html = '';
    sortedCats.forEach((cat, idx) => {
      const isFirst = idx === 0;
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact" id="${item.originalId || item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
              <button class="permalink-btn" data-id="${item.originalId || item.id}" title="Copy link to this item">🔗</button>
            </summary>
            <div class="faq-answer">${item.answer}</div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
    document.dispatchEvent(new CustomEvent('faqLoaded'));

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterFAQRedesign(version);

  } catch (err) {
    console.error('FAQ load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load FAQ.</p>';
  }
})();

// FAQ filter function
window.filterFAQRedesign = function(version) {
  // Only select FAQ items in the FAQ tab (not TS or QT items)
  document.querySelectorAll('#faq-content-redesign .faq-item-compact').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
    item.classList.toggle('version-hidden', !show);
  });

  // Update FAQ category visibility
  document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });

  updateSearchInfo();
};
</script>

<!-- Troubleshooting Loader (Uses Cloudflare Worker cache) -->
<script>
(async function loadTSCollapsible() {
  // Wait for cache client to be ready
  if (!window.fetchCachedCollection) {
    setTimeout(loadTSCollapsible, 100);
    return;
  }

  const container = document.getElementById('troubleshooting-content');
  if (!container) return;

  try {
    // Fetch from Cloudflare Worker cache instead of direct Firebase
    const allItems = await window.fetchCachedCollection('troubleshooting');

    if (!allItems || allItems.length === 0) {
      container.innerHTML = '<p class="no-results">No troubleshooting items available.</p>';
      return;
    }

    // Filter to active items only
    const items = allItems.filter(item => item.isActive);

    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Category order for troubleshooting
    const tsCatOrder = ['Installation', 'General', 'Game Issues', 'Epic Games', 'Advanced'];
    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const iA = tsCatOrder.indexOf(a), iB = tsCatOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    let html = '';
    sortedCats.forEach((cat, idx) => {
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact ts-item" id="${item.originalId || item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.title || item.problem}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
              <button class="permalink-btn" data-id="${item.originalId || item.id}" title="Copy link to this item">🔗</button>
            </summary>
            <div class="faq-answer">
              ${item.problem ? `<div class="ts-problem"><h4>Problem</h4><p>${item.problem}</p></div>` : ''}
              ${item.solution ? `<div class="ts-solution"><h4>Solution</h4>${item.solution}</div>` : ''}
            </div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;
    document.dispatchEvent(new CustomEvent('troubleshootingLoaded'));

    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterTroubleshooting(version);

  } catch (err) {
    console.error('TS load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load troubleshooting.</p>';
  }
})();

window.filterTroubleshooting = function(version) {
  document.querySelectorAll('.ts-item').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
    item.classList.toggle('version-hidden', !show);
  });

  // Update TS category visibility
  document.querySelectorAll('#troubleshooting-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.ts-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
};
</script>

<!-- Quick Tips Loader (Uses Cloudflare Worker cache) -->
<script>
(async function loadQuickTips() {
  // Wait for cache client to be ready
  if (!window.fetchCachedCollection) {
    setTimeout(loadQuickTips, 100);
    return;
  }

  const container = document.getElementById('quicktips-content');
  if (!container) return;

  try {
    // Fetch from Cloudflare Worker cache instead of direct Firebase
    const allItems = await window.fetchCachedCollection('faq');

    if (!allItems || allItems.length === 0) {
      container.innerHTML = '<p class="no-results">No quick tips available.</p>';
      return;
    }

    // Filter for active items marked as quicktip
    const items = allItems.filter(item => item.isActive && item.contentType === 'quicktip');

    if (items.length === 0) {
      container.innerHTML = '<p class="no-results">No quick tips available.</p>';
      return;
    }

    // Group by category
    const grouped = {};
    items.forEach(item => {
      const cat = item.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });

    // Sort within categories
    Object.keys(grouped).forEach(cat => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Category order for Quick Tips
    const catOrder = ['Managing Games', 'Game Settings'];
    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const iA = catOrder.indexOf(a), iB = catOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render
    let html = '';
    sortedCats.forEach((cat, idx) => {
      html += `
        <div class="category-accordion${idx === 0 ? ' expanded' : ''}" data-category="${cat}">
          <div class="category-header" onclick="toggleCategory(this)">
            <h3><span class="expand-icon">▶</span> ${cat} <span class="category-count">${grouped[cat].length}</span></h3>
          </div>
          <div class="category-content">
      `;

      grouped[cat].forEach(item => {
        const product = item.product || 'both';
        const badgeLabel = product === 'decky' ? 'Decky' :
                          product === 'pro' ? 'Pro' :
                          product === 'version-specific' ? 'Version Specific' : 'Universal';

        html += `
          <details class="faq-item-compact qt-item" id="qt-${item.originalId || item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
              <button class="permalink-btn" data-id="qt-${item.originalId || item.id}" title="Copy link to this item">🔗</button>
            </summary>
            <div class="faq-answer">${item.answer}</div>
          </details>
        `;
      });

      html += '</div></div>';
    });

    container.innerHTML = html;

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    window.filterQuickTips(version);

  } catch (err) {
    console.error('Quick Tips load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load quick tips.</p>';
  }
})();

window.filterQuickTips = function(version) {
  document.querySelectorAll('.qt-item').forEach(item => {
    const product = item.dataset.product;
    let show = version === 'all' ||
               (version === 'decky' && (product === 'decky' || product === 'both' || product === 'version-specific')) ||
               (version === 'pro' && (product === 'pro' || product === 'both' || product === 'version-specific'));

    item.classList.toggle('hidden', !show);
    item.classList.toggle('version-hidden', !show);
  });

  // Update category visibility
  document.querySelectorAll('#quicktips-content .category-accordion').forEach(cat => {
    const visible = cat.querySelectorAll('.qt-item:not(.hidden)').length;
    const countEl = cat.querySelector('.category-count');
    if (countEl) countEl.textContent = visible;
    cat.classList.toggle('hidden', visible === 0);
  });
};
</script>

<!-- Tutorials Init (Static Jekyll content) -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Make tutorial and tip boxes clickable
  document.querySelectorAll('#tutorials-content .tutorial-item, #tutorials-content .tip-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function(e) {
      if (e.button === 0 && e.target.tagName !== 'A') {
        const link = this.querySelector('h4 a');
        if (link) window.location.href = link.href;
      }
    });
  });

  // Apply current version filter to tutorials on load
  const version = localStorage.getItem('junkstore-version') || 'all';
  filterTutorials(version);
});
</script>

<!-- Permalink functionality for FAQ/Troubleshooting/QuickTips -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Update URL hash when item is expanded
  document.addEventListener('toggle', function(e) {
    if (e.target.tagName === 'DETAILS' && e.target.open && e.target.id) {
      history.replaceState(null, '', '#' + e.target.id);
    }
  }, true);

  // Copy permalink on link button click
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.permalink-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();

      const itemId = btn.dataset.id;
      const url = window.location.origin + window.location.pathname + '#' + itemId;

      navigator.clipboard.writeText(url).then(function() {
        // Show copied feedback
        const originalText = btn.textContent;
        btn.textContent = '✓';
        btn.classList.add('copied');
        setTimeout(function() {
          btn.textContent = originalText;
          btn.classList.remove('copied');
        }, 1500);
      }).catch(function() {
        // Fallback: select the URL in prompt
        prompt('Copy this link:', url);
      });
    }
  });
});
</script>

<style>
.permalink-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.4;
  font-size: 0.85em;
  padding: 2px 6px;
  margin-left: auto;
  transition: opacity 0.2s, transform 0.2s;
  flex-shrink: 0;
}
.permalink-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}
.permalink-btn.copied {
  opacity: 1;
  color: #198754;
}
.faq-item-compact summary {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
