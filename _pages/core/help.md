---
layout: junkstore-page
title: "Junk Store Help"
description: "Junk Store help for Steam Deck - FAQ, troubleshooting, tutorials, and game compatibility. Covers both Decky Plugin and Pro Version."
permalink: /help/
---
<div id="top"></div>

<!-- ==================== COMPACT HEADER ==================== -->
<section class="help-header-compact">
  <!-- Search First with tooltip inline -->
  <div class="search-primary">
    <div class="search-box-large">
      <input type="text" id="faq-search" placeholder="Search for answers..." aria-label="Search FAQ">
      <button type="button" id="faq-clear-search" class="clear-btn" title="Clear search">×</button>
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
    <div class="search-info-line" id="search-info">Loading...</div>
  </div>

  <!-- Centered Version Buttons -->
  <div class="version-buttons-centered">
    <button class="version-btn decky" data-filter="decky" onclick="selectVersion('decky')">Decky Plugin</button>
    <button class="version-btn pro" data-filter="pro" onclick="selectVersion('pro')">Pro Version</button>
    <button class="version-btn all selected" data-filter="all" onclick="selectVersion('all')">Show All</button>
  </div>
</section>

<!-- Tab Navigation -->
<div class="help-tabs-compact">
  <button class="help-tab active" data-tab="faq" onclick="switchTab('faq')">FAQ</button>
  <button class="help-tab" data-tab="quicktips" onclick="switchTab('quicktips')">Quick Tips</button>
  <button class="help-tab" data-tab="troubleshooting" onclick="switchTab('troubleshooting')">Troubleshooting</button>
  <button class="help-tab" data-tab="tutorials" onclick="switchTab('tutorials')">Tutorials</button>
</div>

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
  <!-- Skeleton loader while Firebase loads -->
  <div class="tutorials-skeleton">
    <div class="skeleton-section-header"></div>
    <div class="tutorial-grid">
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
    </div>
    <div class="skeleton-section-header mt-4"></div>
    <div class="tutorial-grid">
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
      <div class="skeleton-tutorial-card"></div>
    </div>
  </div>
</div>

</div>

<!-- ==================== MORE RESOURCES ==================== -->
<hr class="my-4">

<div class="resources-row">
  <a href="/tested-games/" class="resource-card">
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
  // Only count FAQ items in the FAQ tab
  const visibleItems = document.querySelectorAll('#faq-content-redesign .faq-item-compact:not(.hidden)');
  const totalItems = document.querySelectorAll('#faq-content-redesign .faq-item-compact');
  if (searchInfo && totalItems.length > 0) {
    searchInfo.textContent = `${visibleItems.length} of ${totalItems.length} questions`;
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

    // Only search FAQ items in the FAQ tab
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

    // Update FAQ category visibility and counts
    document.querySelectorAll('#faq-content-redesign .category-accordion').forEach(cat => {
      const visible = cat.querySelectorAll('.faq-item-compact:not(.hidden)').length;
      const countEl = cat.querySelector('.category-count');
      if (countEl) countEl.textContent = visible;
      cat.classList.toggle('hidden', visible === 0);
    });
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
    const catOrder = ['Overview', 'Pricing & Trial', 'Setup & Access', 'Managing Games', 'Game Settings', 'Game Compatibility', 'GOG Extension', 'Help & Support'];
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
          <details class="faq-item-compact" id="${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
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

    const sortedCats = Object.keys(grouped).sort();

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
          <details class="faq-item-compact ts-item" id="${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.title || item.problem}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
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
          <details class="faq-item-compact qt-item" id="qt-${item.id}" data-product="${product}">
            <summary>
              <span class="question-text">${item.question}</span>
              <span class="product-badge ${product}-badge">${badgeLabel}</span>
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

<!-- Tutorials Loader (Uses Cloudflare Worker cache) -->
<script>
(async function loadTutorials() {
  // Wait for cache client to be ready
  if (!window.fetchCachedCollection) {
    setTimeout(loadTutorials, 100);
    return;
  }

  const container = document.getElementById('tutorials-content');
  if (!container) return;

  try {
    // Fetch tutorials and quick tips in parallel from cache
    const [tutorialsData, tipsData] = await Promise.all([
      window.fetchCachedCollection('tutorials'),
      window.fetchCachedCollection('blog/tips/posts').catch(() => []) // Fallback to empty if not available
    ]);

    // Filter tutorials (active only)
    const tutorials = (tutorialsData || []).filter(item => item.isActive !== false);

    // Filter quick tips (published only)
    const quickTips = (tipsData || []).filter(item => item.isPublished !== false);

    // Sort tutorials by order
    tutorials.sort((a, b) => (a.order || 0) - (b.order || 0));

    // Sort quick tips by order or date
    quickTips.sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0);
    });

    // Group tutorials by section
    const sections = {};
    tutorials.forEach(t => {
      const section = t.section || 'other';
      if (!sections[section]) sections[section] = [];
      sections[section].push(t);
    });

    // Section display names
    const sectionNames = {
      'installation': 'Installation Guides',
      'configuration': 'Configuration & Setup',
      'other': 'Other Tutorials'
    };

    // Section order
    const sectionOrder = ['installation', 'configuration', 'other'];
    const sortedSections = Object.keys(sections).sort((a, b) => {
      const iA = sectionOrder.indexOf(a), iB = sectionOrder.indexOf(b);
      if (iA === -1 && iB === -1) return a.localeCompare(b);
      if (iA === -1) return 1;
      if (iB === -1) return -1;
      return iA - iB;
    });

    // Render tutorials
    let html = '';
    sortedSections.forEach((section, idx) => {
      const sectionTitle = sectionNames[section] || section.charAt(0).toUpperCase() + section.slice(1);

      if (idx > 0) {
        html += '<hr class="my-4">';
      }

      html += `<h2 class="text-center">${sectionTitle}</h2>`;
      html += '<div class="tutorial-grid">';

      sections[section].forEach(t => {
        const category = t.category || 'both';
        const tagClass = category === 'decky' ? 'decky-tag' :
                        category === 'pro' ? 'pro-tag' : 'both-tag';
        const tagLabel = category === 'decky' ? 'Decky Plugin' :
                        category === 'pro' ? 'Pro Version' : 'Universal';
        const itemClass = category === 'decky' ? 'decky' :
                         category === 'pro' ? 'pro' : 'both';

        html += `
          <div class="tutorial-item ${itemClass}" data-category="${category}">
            <h4><a href="${t.permalink || '/tutorials/' + t.slug}">${t.title}</a></h4>
            <p>${t.excerpt || t.description || ''}</p>
            <span class="tutorial-tag ${tagClass}">${tagLabel}</span>
          </div>
        `;
      });

      html += '</div>';
    });

    // Render Quick Tips section (if we have tips)
    if (quickTips.length > 0) {
      html += '<hr class="my-4">';
      html += '<h2 class="text-center">Quick Tips & Tricks</h2>';
      html += '<div class="tips-grid">';

      quickTips.forEach(tip => {
        const product = tip.product || 'both';
        const tagClass = product === 'decky' ? 'decky-tag' :
                        product === 'pro' ? 'pro-tag' : 'both-tag';
        const tagLabel = product === 'decky' ? 'Decky Plugin' :
                        product === 'pro' ? 'Pro Version' : 'Universal';
        const itemClass = product === 'decky' ? 'decky' :
                         product === 'pro' ? 'pro' : 'both';
        const readTime = tip.readTime || '3 min read';
        const permalink = tip.permalink || `/blog/${tip.slug || tip.id}/`;

        html += `
          <div class="tip-item ${itemClass}" data-product="${product}">
            <h4><a href="${permalink}">${tip.title}</a></h4>
            <p>${tip.excerpt || tip.description || ''}</p>
            <span class="tip-tag">${readTime}</span>
            <span class="tutorial-tag ${tagClass}">${tagLabel}</span>
          </div>
        `;
      });

      html += '</div>';
    }

    container.innerHTML = html;

    // Make tutorial and tip boxes clickable
    document.querySelectorAll('#tutorials-content .tutorial-item, #tutorials-content .tip-item').forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.button === 0 && e.target.tagName !== 'A') {
          const link = this.querySelector('h4 a');
          if (link) window.location.href = link.href;
        }
      });
    });

    // Apply current filter
    const version = localStorage.getItem('junkstore-version') || 'all';
    filterTutorials(version);

  } catch (err) {
    console.error('Tutorials load error:', err);
    container.innerHTML = '<p class="no-results">Failed to load tutorials.</p>';
  }
})();
</script>
