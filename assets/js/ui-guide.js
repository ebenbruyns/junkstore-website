/**
 * Junk Store UI Guide - Interactive Feature Explorer
 * Provides searchable, clickable interface guide for Junk Store on Steam Deck
 */

// Feature data (loaded from JSON)
let featuresData = null;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadFeatures();
  initializeSearch();
  initializeButtons();
  initializeCategories();
});

/**
 * Load feature data from JSON
 */
async function loadFeatures() {
  try {
    const response = await fetch('/assets/data/ui-features.json');
    featuresData = await response.json();
    console.log('Features loaded:', featuresData.features.length);
  } catch (error) {
    console.error('Failed to load features:', error);
    showError('Unable to load feature data. Please refresh the page.');
  }
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
  const searchInput = document.getElementById('ui-search');
  const clearButton = document.getElementById('clear-ui-search');
  const searchResults = document.getElementById('search-results');

  if (!searchInput) return;

  // Search as user types
  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.trim();

    // Show/hide clear button
    if (clearButton) {
      clearButton.style.display = query ? 'block' : 'none';
    }

    if (query.length >= 2) {
      performSearch(query);
    } else {
      clearSearchResults();
    }
  });

  // Clear search
  if (clearButton) {
    clearButton.addEventListener('click', function() {
      searchInput.value = '';
      clearButton.style.display = 'none';
      clearSearchResults();
      searchInput.focus();
    });
  }

  // Handle Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        performSearch(query);
      }
    }
  });
}

/**
 * Perform search through features
 */
function performSearch(query) {
  if (!featuresData) {
    console.log('Features not loaded yet');
    return;
  }

  const searchResults = document.getElementById('search-results');
  const popularTasks = document.getElementById('popular-tasks');
  const queryLower = query.toLowerCase();

  // Search through features
  const results = featuresData.features.filter(feature => {
    // Check title
    if (feature.title.toLowerCase().includes(queryLower)) return true;

    // Check description
    if (feature.description.toLowerCase().includes(queryLower)) return true;

    // Check search terms
    if (feature.searchTerms.some(term => term.toLowerCase().includes(queryLower))) return true;

    return false;
  });

  // Display results
  displaySearchResults(results, query);

  // Hide popular tasks when searching
  if (popularTasks) {
    popularTasks.style.display = results.length > 0 ? 'none' : 'block';
  }
}

/**
 * Display search results
 */
function displaySearchResults(results, query) {
  const searchResults = document.getElementById('search-results');
  if (!searchResults) return;

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="no-search-results">
        <p>No features found for "${query}"</p>
        <p style="font-size: 0.9em; color: #888;">Try different keywords or browse by category below</p>
      </div>
    `;
    searchResults.style.display = 'block';
    return;
  }

  let html = `<div class="search-results-header">Found ${results.length} feature${results.length !== 1 ? 's' : ''}</div>`;
  html += '<div class="results-list">';

  results.forEach(feature => {
    const category = featuresData.categories[feature.category];
    html += `
      <div class="result-item" data-feature-id="${feature.id}">
        <div class="result-header">
          <h4>${feature.title}</h4>
          <span class="result-category">${category.icon} ${category.title}</span>
        </div>
        <p class="result-description">${feature.description}</p>
        <div class="result-actions">
          ${feature.tutorialLink ? `<a href="${feature.tutorialLink}" class="result-link">📖 Tutorial</a>` : ''}
          ${feature.faqLink ? `<a href="${feature.faqLink}" class="result-link">❓ FAQ</a>` : ''}
          <button class="result-highlight" data-feature-id="${feature.id}">📍 Show on Interface</button>
        </div>
      </div>
    `;
  });

  html += '</div>';
  searchResults.innerHTML = html;
  searchResults.style.display = 'block';

  // Add click handlers for "Show on Interface" buttons
  searchResults.querySelectorAll('.result-highlight').forEach(btn => {
    btn.addEventListener('click', function() {
      const featureId = this.getAttribute('data-feature-id');
      highlightFeature(featureId);
    });
  });
}

/**
 * Clear search results
 */
function clearSearchResults() {
  const searchResults = document.getElementById('search-results');
  const popularTasks = document.getElementById('popular-tasks');

  if (searchResults) {
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';
  }

  if (popularTasks) {
    popularTasks.style.display = 'block';
  }
}

/**
 * Initialize popular task buttons
 */
function initializeButtons() {
  // Popular task buttons
  document.querySelectorAll('.task-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const featureId = this.getAttribute('data-feature-id');
      showFeatureDetails(featureId);
    });
  });

  // Tour buttons
  const startTourBtn = document.getElementById('start-tour-btn');
  const exploreModeBtn = document.getElementById('explore-mode-btn');

  if (startTourBtn) {
    startTourBtn.addEventListener('click', function() {
      startGuidedTour();
    });
  }

  if (exploreModeBtn) {
    exploreModeBtn.addEventListener('click', function() {
      document.getElementById('ui-search')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('ui-search')?.focus();
      }, 500);
    });
  }
}

/**
 * Initialize category cards
 */
function initializeCategories() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      showCategoryFeatures(category);
    });
  });
}

/**
 * Show feature details
 */
function showFeatureDetails(featureId) {
  if (!featuresData) return;

  const feature = featuresData.features.find(f => f.id === featureId);
  if (!feature) return;

  // Create modal or tooltip with feature details
  showFeatureModal(feature);
}

/**
 * Show feature modal
 */
function showFeatureModal(feature) {
  const category = featuresData.categories[feature.category];

  // Create modal HTML
  const modal = document.createElement('div');
  modal.className = 'feature-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-header">
        <h2>${feature.title}</h2>
        <span class="modal-category">${category.icon} ${category.title}</span>
      </div>
      <div class="modal-body">
        <p>${feature.description}</p>
        ${feature.screenshot !== 'placeholder.jpg' ? `
          <div class="modal-screenshot-placeholder">
            <p>📸 Screenshot: ${feature.screenshot}</p>
            <p style="font-size: 0.9em; color: #888;">Screenshot will be added when captured from Steam Deck</p>
          </div>
        ` : ''}
      </div>
      <div class="modal-actions">
        ${feature.tutorialLink ? `<a href="${feature.tutorialLink}" class="button">View Tutorial</a>` : ''}
        ${feature.faqLink ? `<a href="${feature.faqLink}" class="button button-secondary">See FAQ</a>` : ''}
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close handlers
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.querySelector('.modal-overlay').addEventListener('click', () => modal.remove());

  // Escape key handler
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

/**
 * Show features in a category
 */
function showCategoryFeatures(categoryId) {
  if (!featuresData) return;

  const category = featuresData.categories[categoryId];
  const features = featuresData.features.filter(f => f.category === categoryId);

  if (features.length === 0) return;

  // Create category modal
  const modal = document.createElement('div');
  modal.className = 'feature-modal';

  let html = `
    <div class="modal-overlay"></div>
    <div class="modal-content category-modal">
      <button class="modal-close">&times;</button>
      <div class="modal-header">
        <h2>${category.icon} ${category.title}</h2>
        <p style="color: #ccc; margin-top: 0.5rem;">${category.description}</p>
      </div>
      <div class="modal-body">
        <div class="category-features-list">
  `;

  features.forEach(feature => {
    html += `
      <div class="category-feature-item" data-feature-id="${feature.id}">
        <h4>${feature.title}</h4>
        <p>${feature.description}</p>
        <div class="feature-links">
          ${feature.tutorialLink ? `<a href="${feature.tutorialLink}">Tutorial →</a>` : ''}
          ${feature.faqLink ? `<a href="${feature.faqLink}">FAQ →</a>` : ''}
        </div>
      </div>
    `;
  });

  html += `
        </div>
      </div>
    </div>
  `;

  modal.innerHTML = html;
  document.body.appendChild(modal);

  // Close handlers
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.querySelector('.modal-overlay').addEventListener('click', () => modal.remove());

  // Click handlers for individual features
  modal.querySelectorAll('.category-feature-item').forEach(item => {
    item.addEventListener('click', function() {
      const featureId = this.getAttribute('data-feature-id');
      modal.remove();
      showFeatureDetails(featureId);
    });
  });
}

/**
 * Highlight a feature on the interface (placeholder for hotspot system)
 */
function highlightFeature(featureId) {
  if (!featuresData) return;

  const feature = featuresData.features.find(f => f.id === featureId);
  if (!feature) return;

  // TODO: Once screenshots are added, implement actual hotspot highlighting
  // For now, show the feature details
  showFeatureModal(feature);
}

/**
 * Start guided tour (placeholder for Driver.js integration)
 */
function startGuidedTour() {
  // TODO: Implement Driver.js tour once screenshots are in place
  alert('📸 Guided tour will be available once Steam Deck screenshots are captured!\n\nFor now, try:\n- Searching for features above\n- Clicking category cards below\n- Clicking popular task buttons');
}

/**
 * Show error message
 */
function showError(message) {
  const container = document.getElementById('search-results');
  if (container) {
    container.innerHTML = `
      <div class="error-message">
        <p>⚠️ ${message}</p>
      </div>
    `;
    container.style.display = 'block';
  }
}

/**
 * Navigate to specific screen
 */
function navigateToScreen(screenId) {
  const img = document.getElementById('deck-screen');
  const wrapper = document.querySelector('.deck-interactive-wrapper');

  const screens = {
    0: '/assets/images/ui-guide/steam-deck-with-junkstore.png',     // Brand logo
    1: '/assets/images/ui-guide/steam-deck-login.png',              // First time login
    2: '/assets/images/ui-guide/steam-deck-tools.png',              // Main menu (Tools)
    3: '/assets/images/ui-guide/steam-deck-amazon.png',             // Amazon library
    4: '/assets/images/ui-guide/steam-deck-epic.png',               // Epic library
    5: '/assets/images/ui-guide/steam-deck-gog.png',                // GOG library
    6: '/assets/images/ui-guide/steam-deck-itch.png',               // itch library
    7: '/assets/images/ui-guide/steam-deck-epicsliders.png',        // Epic sliders
    8: '/assets/images/ui-guide/steam-deck-otherssliders.png',      // Others sliders
    9: '/assets/images/ui-guide/steam-deck-generator.png'           // Generator
  };

  img.src = screens[screenId];
  img.setAttribute('data-screen', screenId);

  // Remove all existing hotspots except SELECT button
  const oldHotspots = wrapper.querySelectorAll('.screen-hotspot');
  oldHotspots.forEach(h => h.remove());

  // Update hint text and add appropriate hotspots based on screen
  const hint = document.querySelector('.hotspot-hint');

  if (screenId === 0) {
    // Initial screen - only SELECT button active
    hint.innerHTML = '<p>🎯 <strong>Interactive Demo</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">👆 Click the SELECT button to open Junk Store</p><p style="font-size: 0.9em; color: #888; margin-top: 0.5rem;">Navigate through the interface by clicking interactive areas</p>';
  } else if (screenId === 1) {
    // Login screen - add login button hotspot
    hint.innerHTML = '<p>🔐 <strong>First Time Login</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click the login button to continue</p>';
    addHotspot(35, 55, 30, 7, 2, 'Click to Login');
  } else if (screenId === 2) {
    // Main menu - add clickable areas
    hint.innerHTML = '<p>🎮 <strong>Main Menu</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click any menu option to explore</p>';
    addHotspot(35.5, 36, 29, 6.5, 3, 'Click to See Game Libraries');
    addHotspot(35.5, 46, 29, 6.5, 9, 'Downloads Queue and Extensions Generator');
    addHotspot(35.5, 53.5, 29, 6.5, 0, 'System/Updates, Logs, Developer Mode');
    addHotspot(53, 60.5, 9, 6.5, 0, 'Logout of Junk Store');
  } else if (screenId === 9) {
    // Generator screen
    hint.innerHTML = '<p>🛠️ <strong>Downloads & Generator</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Manage downloads and generate extensions</p>';
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 2, 'B - Back');
  } else if (screenId === 3) {
    // Amazon library screen
    hint.innerHTML = '<p>📚 <strong>Amazon Games Library</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click store tabs to switch libraries</p>';
    addHotspot(44, 31.5, 3.5, 4, 3, 'Amazon');
    addHotspot(48, 31.5, 2.5, 4, 4, 'Epic');
    addHotspot(51, 31.5, 2.5, 4, 5, 'GOG');
    addHotspot(54, 31.5, 2.5, 4, 6, 'itch');
    addHotspot(61.5, 36, 3, 5.5, 8, 'Amazon Sliders');
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 2, 'B - Back');
  } else if (screenId === 4) {
    // Epic library screen
    hint.innerHTML = '<p>📚 <strong>Epic Games Library</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click store tabs to switch libraries</p>';
    addHotspot(44, 31.5, 3.5, 4, 3, 'Amazon');
    addHotspot(48, 31.5, 2.5, 4, 4, 'Epic');
    addHotspot(51, 31.5, 2.5, 4, 5, 'GOG');
    addHotspot(54, 31.5, 2.5, 4, 6, 'itch');
    addHotspot(59.5, 36, 3, 5.5, 7, 'Epic Sliders');
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 2, 'B - Back');
  } else if (screenId === 7) {
    // Epic sliders screen
    hint.innerHTML = '<p>⚙️ <strong>Epic Game Settings</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Configure Epic game settings</p>';
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 4, 'B - Back');
  } else if (screenId === 5) {
    // GOG library screen
    hint.innerHTML = '<p>📚 <strong>GOG Games Library</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click store tabs to switch libraries</p>';
    addHotspot(44, 31.5, 3.5, 4, 3, 'Amazon');
    addHotspot(48, 31.5, 2.5, 4, 4, 'Epic');
    addHotspot(51, 31.5, 2.5, 4, 5, 'GOG');
    addHotspot(54, 31.5, 2.5, 4, 6, 'itch');
    addHotspot(59.5, 36, 3, 5.5, 8, 'GOG Sliders');
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 2, 'B - Back');
  } else if (screenId === 6) {
    // itch library screen
    hint.innerHTML = '<p>📚 <strong>itch Games Library</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Click store tabs to switch libraries</p>';
    addHotspot(44, 31.5, 3.5, 4, 3, 'Amazon');
    addHotspot(48, 31.5, 2.5, 4, 4, 'Epic');
    addHotspot(51, 31.5, 2.5, 4, 5, 'GOG');
    addHotspot(54, 31.5, 2.5, 4, 6, 'itch');
    addHotspot(59.5, 36, 3, 5.5, 8, 'itch Sliders');
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 2, 'B - Back');
  } else if (screenId === 8) {
    // Others sliders screen (shared by Amazon, GOG, itch)
    hint.innerHTML = '<p>⚙️ <strong>Game Settings</strong></p><p style="font-size: 0.95em; margin-top: 0.5rem;">Configure game settings</p>';
    addHotspot(61, 68.5, 4.5, 4.5, 0, 'A - Select');
    addHotspot(65.5, 68.5, 4, 4.5, 3, 'B - Back');
  }
}

/**
 * Add clickable hotspot to current screen
 */
function addHotspot(left, top, width, height, nextScreen, label) {
  const wrapper = document.querySelector('.deck-interactive-wrapper');
  const hotspot = document.createElement('div');
  hotspot.className = 'screen-hotspot';
  hotspot.style.cssText = `
    position: absolute;
    left: ${left}%;
    top: ${top}%;
    width: ${width}%;
    height: ${height}%;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    background: transparent;
    transition: all 0.3s ease;
  `;

  // Add label if provided (hidden by default, shown on hover)
  let labelEl = null;
  if (label) {
    labelEl = document.createElement('div');
    labelEl.style.cssText = `
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.95);
      color: #ffa366;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.85vw;
      font-weight: 600;
      white-space: nowrap;
      pointer-events: none;
      border: 2px solid rgba(255, 163, 102, 0.6);
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 10000;
    `;
    labelEl.textContent = `👆 ${label}`;
    hotspot.appendChild(labelEl);
  }

  hotspot.addEventListener('mouseenter', function() {
    this.style.border = '2px solid rgba(255, 163, 102, 1)';
    this.style.background = 'rgba(255, 163, 102, 0.25)';
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0 0 25px rgba(255, 163, 102, 0.6)';
    if (labelEl) labelEl.style.opacity = '1';
  });

  hotspot.addEventListener('mouseleave', function() {
    this.style.border = '2px solid transparent';
    this.style.background = 'transparent';
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
    if (labelEl) labelEl.style.opacity = '0';
  });

  hotspot.addEventListener('click', function(e) {
    e.stopPropagation();
    navigateToScreen(nextScreen);
  });

  wrapper.appendChild(hotspot);
}

/**
 * SELECT button opens first screen
 */
function openJunkStore() {
  navigateToScreen(1);
}

/**
 * Position helper for adjusting hotspot coordinates
 */
let positionHelperActive = false;
let helperBox = null;

function initializePositionHelper() {
  document.addEventListener('keydown', function(e) {
    console.log('Key pressed:', e.key);

    if (e.key === 'h' || e.key === 'H') {
      e.preventDefault();
      positionHelperActive = !positionHelperActive;
      console.log('Position helper active:', positionHelperActive);

      if (positionHelperActive) {
        createHelperBox();
        showPositionCoordinates();
        alert('Hotspot Helper Active!\n\nArrow Keys: Move position\nShift + Arrows: Adjust size\nH: Toggle helper\n\nCoordinates show in top-right corner');
      } else {
        removeHelperBox();
        hidePositionCoordinates();
      }
    }

    if (positionHelperActive && helperBox) {
      const currentTop = parseFloat(helperBox.style.top || '50');
      const currentLeft = parseFloat(helperBox.style.left || '50');
      const currentWidth = parseFloat(helperBox.style.width || '15');
      const currentHeight = parseFloat(helperBox.style.height || '8');

      // Position adjustment (Arrow keys)
      if (!e.shiftKey) {
        switch(e.key) {
          case 'ArrowUp':
            e.preventDefault();
            helperBox.style.top = (currentTop - 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowDown':
            e.preventDefault();
            helperBox.style.top = (currentTop + 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            helperBox.style.left = (currentLeft - 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowRight':
            e.preventDefault();
            helperBox.style.left = (currentLeft + 0.5) + '%';
            updateCoordinates();
            break;
        }
      }
      // Size adjustment (Shift + Arrow keys)
      else {
        switch(e.key) {
          case 'ArrowUp':
            e.preventDefault();
            helperBox.style.height = Math.max(1, currentHeight - 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowDown':
            e.preventDefault();
            helperBox.style.height = (currentHeight + 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            helperBox.style.width = Math.max(1, currentWidth - 0.5) + '%';
            updateCoordinates();
            break;
          case 'ArrowRight':
            e.preventDefault();
            helperBox.style.width = (currentWidth + 0.5) + '%';
            updateCoordinates();
            break;
        }
      }
    }
  });
}

function createHelperBox() {
  const wrapper = document.querySelector('.deck-interactive-wrapper');
  helperBox = document.createElement('div');
  helperBox.id = 'hotspot-helper-box';
  helperBox.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15%;
    height: 8%;
    border: 3px dashed #00ff00;
    background: rgba(0, 255, 0, 0.15);
    cursor: move;
    z-index: 9999;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  `;

  wrapper.appendChild(helperBox);
}

function removeHelperBox() {
  if (helperBox) {
    helperBox.remove();
    helperBox = null;
  }
}

function showPositionCoordinates() {
  if (!document.getElementById('position-helper')) {
    const helper = document.createElement('div');
    helper.id = 'position-helper';
    helper.style.cssText = 'position: fixed; top: 20px; right: 20px; background: rgba(0,0,0,0.9); color: #0f0; padding: 15px; border: 2px solid #0f0; border-radius: 8px; font-family: monospace; z-index: 10000;';
    helper.innerHTML = '<strong>POSITION HELPER MODE</strong><br><small>Use arrow keys to adjust<br>Press P to exit</small><br><br><span id="coords"></span>';
    document.body.appendChild(helper);
    updateCoordinates();
  }
}

function hidePositionCoordinates() {
  const helper = document.getElementById('position-helper');
  if (helper) helper.remove();
}

function updateCoordinates() {
  const coords = document.getElementById('coords');
  if (coords && helperBox) {
    coords.innerHTML = `
      <strong>Position:</strong><br>
      left: ${helperBox.style.left}<br>
      top: ${helperBox.style.top}<br>
      <strong>Size:</strong><br>
      width: ${helperBox.style.width}<br>
      height: ${helperBox.style.height}<br>
      <br>
      <strong>addHotspot() call:</strong><br>
      <code style="color: #0f0;">addHotspot(${helperBox.style.left.replace('%','')}, ${helperBox.style.top.replace('%','')}, ${helperBox.style.width.replace('%','')}, ${helperBox.style.height.replace('%','')}, nextScreen, 'Label');</code>
    `;
  }
}

// Initialize position helper when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initializePositionHelper();
  console.log('UI Guide script loaded successfully!');
});

// Make functions globally available for inline event handlers if needed
window.showFeatureDetails = showFeatureDetails;
window.showCategoryFeatures = showCategoryFeatures;
window.startGuidedTour = startGuidedTour;
window.openJunkStore = openJunkStore;
window.navigateToScreen = navigateToScreen;
