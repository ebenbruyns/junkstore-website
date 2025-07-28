/**
 * Game Compatibility Table Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  const storefrontFilter = document.getElementById('storefrontSelect');
  const gameSearch = document.getElementById('gameSearch');
  const tableRows = document.querySelectorAll('.compatibility-row');
  const scrollToTopBtn = document.getElementById('scrollToTop');

  // Filter and Search Functionality
  function filterAndSearchTable() {
    const selectedStore = storefrontFilter.value.toLowerCase();
    const searchTerm = gameSearch.value.toLowerCase().trim();

    tableRows.forEach(row => {
      const rowStore = row.getAttribute('data-store');
      const rowText = row.textContent.toLowerCase();
      
      // Check store filter
      const storeMatches = selectedStore === 'all' || 
                          rowStore.toLowerCase() === selectedStore;
      
      // Check search term
      const searchMatches = searchTerm === '' || 
                           rowText.includes(searchTerm);
      
      // Show/hide row based on both filters
      if (storeMatches && searchMatches) {
        row.classList.remove('hidden');
        row.style.display = '';
      } else {
        row.classList.add('hidden');
        row.style.display = 'none';
      }
    });

    // Update visible count (optional)
    updateVisibleCount();
  }

  // Count visible rows
  function updateVisibleCount() {
    const visibleRows = document.querySelectorAll('.compatibility-row:not(.hidden)');
    console.log(`Showing ${visibleRows.length} of ${tableRows.length} games`);
  }

  // Event Listeners for Filtering
  storefrontFilter.addEventListener('change', filterAndSearchTable);
  gameSearch.addEventListener('input', filterAndSearchTable);

  // Scroll to Top Functionality
  function toggleScrollButton() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Scroll event listener
  window.addEventListener('scroll', toggleScrollButton);
  scrollToTopBtn.addEventListener('click', scrollToTop);

  // Enhanced Search Features
  gameSearch.addEventListener('keydown', function(e) {
    // Clear search on Escape key
    if (e.key === 'Escape') {
      gameSearch.value = '';
      filterAndSearchTable();
      gameSearch.blur();
    }
  });

  // URL Hash Handling for Direct Game Links
  function handleHashNavigation() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Small delay to ensure table is rendered
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          
          // Highlight the target row briefly
          const targetRow = targetElement.closest('.compatibility-row');
          if (targetRow) {
            targetRow.style.backgroundColor = '#007acc33';
            setTimeout(() => {
              targetRow.style.backgroundColor = '';
            }, 2000);
          }
        }, 100);
      }
    }
  }

  // Handle hash navigation on page load and hash change
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Focus search with Ctrl+F or Cmd+F (prevent default browser search)
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      gameSearch.focus();
      gameSearch.select();
    }
  });

  // Initialize table
  filterAndSearchTable();
  
  console.log('Game Compatibility Table initialized');
  console.log(`Total games loaded: ${tableRows.length}`);
});