/**
 * Firebase FAQ Loader
 * Fetches FAQ items from Firestore and renders them with product filtering
 */

(async function loadFAQ() {
  // Wait for Firebase to be ready
  if (!window.firebaseDb) {
    console.log('Firebase not ready, retrying...');
    setTimeout(loadFAQ, 100);
    return;
  }

  const faqContainer = document.getElementById('faq-content');
  if (!faqContainer) {
    console.log('FAQ container not found on this page');
    return;
  }

  console.log('Loading FAQ from Firebase...');

  try {
    const db = window.firebaseDb;
    const faqRef = window.firebaseCollection(db, 'faq');
    const snapshot = await window.firebaseGetDocs(faqRef);

    console.log('Firebase FAQ snapshot:', snapshot.empty ? 'empty' : `${snapshot.size} items`);

    if (snapshot.empty) {
      faqContainer.innerHTML = '<p class="no-content">No FAQ items available. Please sync FAQ data from the admin panel.</p>';
      return;
    }

    // Get all FAQ items
    const faqItems = [];
    snapshot.forEach(doc => {
      const item = doc.data();
      if (item.isActive) {
        faqItems.push(item);
      }
    });

    // Group by category and sort
    const grouped = {};
    faqItems.forEach(item => {
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

    // Render the FAQ items
    let html = '';

    // Define category order (customize as needed)
    const categoryOrder = [
      'Overview',
      'Getting Started',
      'Licensing',
      'Using JunkStore',
      'GOG Extension',
      'Game Management',
      'Game Compatibility',
      'Technical'
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
      html += `<div class="faq-category" data-category="${category}">`;
      html += `<h2 class="category-title">${category}</h2>`;

      grouped[category].forEach(item => {
        const productClass = item.product || 'both';
        html += `
          <details class="faq-box faq-item ${productClass}" id="${item.id}" data-product="${productClass}">
            <summary>
              <span class="summary-text">${item.question}</span>
              <span class="product-badge ${productClass}-badge">${getProductLabel(productClass)}</span>
            </summary>
            <div class="faq-answer">${item.answer}</div>
          </details>
        `;
      });

      html += '</div>';
    });

    faqContainer.innerHTML = html;

    // Dispatch event to let page know content is loaded
    document.dispatchEvent(new CustomEvent('faqLoaded'));

  } catch (error) {
    console.error('Error loading FAQ:', error);
    faqContainer.innerHTML = '<p class="error-message">Failed to load FAQ. Please try again later.</p>';
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
window.filterFAQ = function(filterType) {
  // Remove active class from all filter cards
  document.querySelectorAll('.filter-card').forEach(card => {
    card.classList.remove('active');
  });

  // Add active class to clicked card
  const clickedCard = document.querySelector(`[data-filter="${filterType}"]`);
  if (clickedCard) {
    clickedCard.classList.add('active');
  }

  // Get all FAQ items and categories
  const faqItems = document.querySelectorAll('.faq-item');
  const categories = document.querySelectorAll('.faq-category');

  faqItems.forEach(item => {
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
    const visibleItems = category.querySelectorAll('.faq-item:not(.hidden)');
    category.classList.toggle('hidden', visibleItems.length === 0);
  });

  // Update search info
  const visibleCount = document.querySelectorAll('.faq-item:not(.hidden)').length;
  const totalCount = faqItems.length;
  const searchInfo = document.getElementById('search-info');
  if (searchInfo) {
    searchInfo.textContent = `Showing ${visibleCount} of ${totalCount} questions`;
  }
};

// Auto-apply filter from URL parameter (e.g., /faq/?filter=decky)
// Also handle hash links for deep linking to specific items
document.addEventListener('faqLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');
  if (filter && (filter === 'decky' || filter === 'pro')) {
    window.filterFAQ(filter);
  }

  // Handle hash links - scroll to and open specific item
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      // Open the details element
      if (target.tagName === 'DETAILS') {
        target.open = true;
      }
      // Scroll to it with small delay for render
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
});
