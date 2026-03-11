/**
 * Firebase Banner Loader
 * Fetches banners from Firestore via Cloudflare Worker cache
 */

(async function loadBanner() {
  // Wait for cache client to be ready
  if (!window.fetchCachedCollection) {
    setTimeout(loadBanner, 100);
    return;
  }

  const bannerContainer = document.getElementById('promo-banner');
  if (!bannerContainer) return;

  try {
    // Fetch from Cloudflare Worker cache instead of direct Firebase
    const allBanners = await window.fetchCachedCollection('banners');

    if (!allBanners || allBanners.length === 0) {
      bannerContainer.style.display = 'none';
      return;
    }

    const now = new Date();
    const currentPath = window.location.pathname;

    // Filter banners
    const banners = allBanners.filter(banner => {
      // Must be active
      if (!banner.isActive) return false;

      // Check date range
      if (banner.startDate) {
        const startDate = new Date(banner.startDate);
        if (now < startDate) return false;
      }
      if (banner.endDate) {
        const endDate = new Date(banner.endDate);
        if (now > endDate) return false;
      }

      // Check page targeting
      const targetPages = banner.targetPages || [];
      if (targetPages.length > 0) {
        // Normalize paths by removing trailing slashes for comparison
        const normalizePath = (p) => p.replace(/\/$/, '') || '/';
        const normalizedCurrent = normalizePath(currentPath);

        const matches = targetPages.some(target => {
          if (target === '*') return true;

          // Wildcard matching: /blog/* matches /blog/anything
          if (target.endsWith('/*')) {
            const prefix = target.slice(0, -1);
            return currentPath.startsWith(prefix);
          }

          // Exact match (ignoring trailing slash)
          return normalizePath(target) === normalizedCurrent;
        });
        if (!matches) return false;
      }

      return true;
    });

    if (banners.length === 0) {
      bannerContainer.style.display = 'none';
      return;
    }

    // Sort by priority (highest first) and take the first one
    banners.sort((a, b) => (b.priority || 5) - (a.priority || 5));
    const activeBanner = banners[0];

    // Render the banner
    const contentEl = bannerContainer.querySelector('.promo-banner__content');
    if (contentEl) {
      contentEl.innerHTML = `<span class="promo-banner__main">${activeBanner.content}</span>`;
    }

    // Show the banner
    bannerContainer.style.display = 'flex';

  } catch (error) {
    console.error('Error loading banner:', error);
    // Hide banner on error
    bannerContainer.style.display = 'none';
  }
})();
