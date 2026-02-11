/**
 * Firebase Troubleshooting Loader
 * Fetches troubleshooting items from Firestore and renders them with product filtering
 */

(async function loadTroubleshooting() {
  // Wait for Firebase to be ready
  if (!window.firebaseDb) {
    setTimeout(loadTroubleshooting, 100);
    return;
  }

  const tsContainer = document.getElementById('troubleshooting-content');
  if (!tsContainer) return;

  try {
    const db = window.firebaseDb;
    const tsRef = window.firebaseCollection(db, 'troubleshooting');
    const snapshot = await window.firebaseGetDocs(tsRef);

    if (snapshot.empty) {
      tsContainer.innerHTML = '<p class="no-content">No troubleshooting items available.</p>';
      return;
    }

    // Get all troubleshooting items
    const tsItems = [];
    snapshot.forEach(doc => {
      const item = doc.data();
      if (item.isActive) {
        tsItems.push(item);
      }
    });

    // Group by category and sort
    const grouped = {};
    tsItems.forEach(item => {
      const category = item.category || 'General';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
    });

    // Sort items within each category by order
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Render the troubleshooting items
    let html = '';

    // Define category order (customize as needed)
    const categoryOrder = [
      'Installation',
      'Performance',
      'Games Not Working',
      'Game Compatibility',
      'Authentication',
      'Network Issues',
      'Epic Games',
      'GOG',
      'Advanced'
    ];

    // Sort categories
    const sortedCategories = Object.keys(grouped).sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return a.localeCompare(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    sortedCategories.forEach(category => {
      html += `<div class="ts-category" data-category="${category}">`;
      html += `<h2 class="category-title">${category}</h2>`;

      grouped[category].forEach(item => {
        const productClass = item.product || 'both';
        html += `
          <details class="faq-box ts-item ${productClass}" id="${item.id}" data-product="${productClass}">
            <summary>
              <span class="summary-text">${item.title}</span>
              <span class="product-badge ${productClass}-badge">${getProductLabel(productClass)}</span>
            </summary>
            <div class="ts-content">
              <div class="ts-problem">
                <h4>Problem</h4>
                <p>${item.problem}</p>
              </div>
              <div class="ts-solution">
                <h4>Solution</h4>
                ${item.solution}
              </div>
            </div>
          </details>
        `;
      });

      html += '</div>';
    });

    tsContainer.innerHTML = html;

    // Dispatch event to let page know content is loaded
    document.dispatchEvent(new CustomEvent('troubleshootingLoaded'));

  } catch (error) {
    console.error('Error loading troubleshooting:', error);
    tsContainer.innerHTML = '<p class="error-message">Failed to load troubleshooting. Please try again later.</p>';
  }
})();

function getProductLabel(product) {
  switch(product) {
    case 'decky': return 'Decky Plugin';
    case 'pro': return 'Pro Version';
    case 'both': return 'Universal';
    default: return 'Universal';
  }
}

// Filter function exposed globally
window.filterTroubleshooting = function(filterType) {
  // Remove active class from all filter cards
  document.querySelectorAll('.filter-card').forEach(card => {
    card.classList.remove('active');
  });

  // Add active class to clicked card
  const clickedCard = document.querySelector(`[data-filter="${filterType}"]`);
  if (clickedCard) {
    clickedCard.classList.add('active');
  }

  // Get all troubleshooting items and categories
  const tsItems = document.querySelectorAll('.ts-item');
  const categories = document.querySelectorAll('.ts-category');

  tsItems.forEach(item => {
    const product = item.dataset.product;
    let shouldShow = false;

    if (filterType === 'all') {
      shouldShow = true;
    } else if (filterType === 'decky') {
      shouldShow = product === 'decky' || product === 'both';
    } else if (filterType === 'pro') {
      shouldShow = product === 'pro' || product === 'both';
    }

    item.classList.toggle('hidden', !shouldShow);
  });

  // Hide empty categories
  categories.forEach(category => {
    const visibleItems = category.querySelectorAll('.ts-item:not(.hidden)');
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  // Update search info
  const visibleCount = document.querySelectorAll('.ts-item:not(.hidden)').length;
  const totalCount = tsItems.length;
  const searchInfo = document.getElementById('search-info');
  if (searchInfo) {
    searchInfo.textContent = `Showing ${visibleCount} of ${totalCount} issues`;
  }
};

// Auto-apply filter from URL parameter (e.g., /troubleshooting/?filter=decky)
document.addEventListener('troubleshootingLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');
  if (filter && (filter === 'decky' || filter === 'pro')) {
    window.filterTroubleshooting(filter);
  }
});
