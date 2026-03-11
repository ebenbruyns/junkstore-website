/**
 * Firebase Cache Client
 * Fetches data via Cloudflare Worker cache instead of direct Firebase
 *
 * This dramatically reduces Firebase read costs by caching at the edge.
 * First visitor triggers Firebase read, subsequent visitors get cached response.
 */

// TODO: Update this URL after deploying the Cloudflare Worker
const WORKER_URL = 'https://junkstore-firebase-cache.YOUR-SUBDOMAIN.workers.dev';
// OR use custom domain: 'https://api.junkstore.xyz'

// Local fallback cache (in case Worker is temporarily unavailable)
const localCache = new Map();
const LOCAL_CACHE_TTL = 60000; // 1 minute local fallback

// Track cache statistics for debugging
const cacheStats = {
  hits: 0,
  misses: 0,
  errors: 0,
  localHits: 0
};

/**
 * Fetch collection from cached Worker
 * @param {string} collection - Collection path (e.g., 'faq', 'games/epic/games')
 * @returns {Promise<Array>} Array of documents
 */
async function fetchCachedCollection(collection) {
  const cacheKey = `worker:${collection}`;

  // Check local fallback cache first
  const cached = localCache.get(cacheKey);
  if (cached && Date.now() < cached.expiry) {
    cacheStats.localHits++;
    console.log(`[Cache] Local hit: ${collection}`);
    return cached.data;
  }

  try {
    const response = await fetch(`${WORKER_URL}/collection/${collection}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Worker error: ${response.status}`);
    }

    const data = await response.json();
    const cacheStatus = response.headers.get('X-Cache') || 'UNKNOWN';
    const cacheTTL = response.headers.get('X-Cache-TTL') || '300';

    if (cacheStatus === 'HIT') {
      cacheStats.hits++;
    } else {
      cacheStats.misses++;
    }

    console.log(`[Cache] ${cacheStatus}: ${collection} (TTL: ${cacheTTL}s)`);

    // Store in local fallback cache
    localCache.set(cacheKey, {
      data,
      expiry: Date.now() + LOCAL_CACHE_TTL
    });

    return data;
  } catch (error) {
    cacheStats.errors++;
    console.error(`[Cache] Error fetching ${collection}:`, error);

    // Return stale cache if available
    if (cached) {
      console.log(`[Cache] Returning stale data for ${collection}`);
      return cached.data;
    }

    throw error;
  }
}

/**
 * Fetch single document from cached Worker
 * @param {string} path - Document path (e.g., 'pricing/config', 'metadata/uptime')
 * @returns {Promise<Object>} Document data
 */
async function fetchCachedDocument(path) {
  const cacheKey = `worker:doc:${path}`;

  // Check local fallback cache first
  const cached = localCache.get(cacheKey);
  if (cached && Date.now() < cached.expiry) {
    cacheStats.localHits++;
    console.log(`[Cache] Local hit: ${path}`);
    return cached.data;
  }

  try {
    const response = await fetch(`${WORKER_URL}/collection/${path}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Worker error: ${response.status}`);
    }

    const data = await response.json();
    const cacheStatus = response.headers.get('X-Cache') || 'UNKNOWN';
    const cacheTTL = response.headers.get('X-Cache-TTL') || '300';

    if (cacheStatus === 'HIT') {
      cacheStats.hits++;
    } else {
      cacheStats.misses++;
    }

    console.log(`[Cache] ${cacheStatus}: ${path} (TTL: ${cacheTTL}s)`);

    // Store in local fallback cache
    localCache.set(cacheKey, {
      data,
      expiry: Date.now() + LOCAL_CACHE_TTL
    });

    return data;
  } catch (error) {
    cacheStats.errors++;
    console.error(`[Cache] Error fetching ${path}:`, error);

    // Return stale cache if available
    if (cached) {
      console.log(`[Cache] Returning stale data for ${path}`);
      return cached.data;
    }

    throw error;
  }
}

/**
 * Clear local cache (useful for testing or forced refresh)
 */
function clearLocalCache() {
  localCache.clear();
  console.log('[Cache] Local cache cleared');
}

/**
 * Get cache statistics for debugging
 * @returns {Object} Cache statistics
 */
function getCacheStats() {
  return { ...cacheStats };
}

/**
 * Check if Worker is available
 * @returns {Promise<boolean>} True if Worker responds
 */
async function checkWorkerHealth() {
  try {
    const response = await fetch(`${WORKER_URL}/health`, { method: 'GET' });
    return response.ok;
  } catch {
    return false;
  }
}

// Export for use by other scripts
window.fetchCachedCollection = fetchCachedCollection;
window.fetchCachedDocument = fetchCachedDocument;
window.clearLocalCache = clearLocalCache;
window.getCacheStats = getCacheStats;
window.checkWorkerHealth = checkWorkerHealth;

// Log when cache client is ready
console.log('[Cache] Firebase cache client loaded. Worker URL:', WORKER_URL);
