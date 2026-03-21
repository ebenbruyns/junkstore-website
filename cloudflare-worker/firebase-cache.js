/**
 * Cloudflare Worker - Firebase Firestore Cache Proxy
 * Deploy to: api.junkstore.xyz or junkstore-api.workers.dev
 *
 * This worker caches Firestore read requests at the edge,
 * dramatically reducing Firebase costs for high-traffic sites.
 *
 * ============================================================
 * SETUP INSTRUCTIONS
 * ============================================================
 *
 * 1. DEPLOY THE WORKER
 *    ─────────────────
 *    Option A: Using Wrangler CLI
 *      $ npm install -g wrangler
 *      $ wrangler login
 *      $ wrangler deploy firebase-cache.js --name junkstore-firebase-cache
 *
 *    Option B: Cloudflare Dashboard
 *      - Go to: Workers & Pages → Create Worker
 *      - Paste this code and deploy
 *
 * 2. SET ENVIRONMENT VARIABLE (Required for cache purging)
 *    ─────────────────────────────────────────────────────
 *    In Cloudflare Dashboard:
 *      Workers & Pages → your-worker → Settings → Variables
 *      Add: PURGE_KEY = <your-secret-key>
 *
 *    Generate a secure key: openssl rand -hex 32
 *
 * 3. UPDATE CLIENT-SIDE URL
 *    ──────────────────────
 *    Edit: assets/js/firebase-cache-client.js (line 10)
 *    Change: const WORKER_URL = 'https://junkstore-firebase-cache.YOUR-SUBDOMAIN.workers.dev';
 *    To:     const WORKER_URL = 'https://<your-actual-worker-url>.workers.dev';
 *
 * 4. UPDATE DASHBOARD SERVER URL
 *    ───────────────────────────
 *    In junkstore-games-tested project, either:
 *      - Set env: export CACHE_WORKER_URL="https://your-worker.workers.dev"
 *      - Or edit server.js and update the CACHE_WORKER_URL constant
 *
 * 5. UPDATE HELP PAGE TO USE CACHE CLIENT
 *    ─────────────────────────────────────
 *    The help page (_pages/core/help.md) currently uses direct Firebase SDK.
 *    To reduce costs, update its inline scripts to use window.fetchCachedCollection()
 *    instead of window.firebaseGetDocs().
 *
 *    Affected sections in help.md:
 *      - Line ~330: FAQ loader
 *      - Line ~450: Troubleshooting loader
 *      - Line ~554: Quick Tips loader
 *      - Line ~677: Tutorials loader
 *
 * ============================================================
 * API ENDPOINTS
 * ============================================================
 *
 * GET /health
 *   → Health check, returns { status: 'ok' }
 *
 * GET /collection/:name
 *   → Fetch all docs from a collection (cached 24h)
 *   → Example: /collection/faq
 *
 * GET /collection/:name/:docId
 *   → Fetch single document (cached 24h)
 *   → Example: /collection/pricing/config
 *
 * POST /purge/:collection?key=PURGE_KEY
 *   → Clear cache for a collection (requires PURGE_KEY)
 *   → Collections: games, faq, troubleshooting, pricing, banners, testimonials, metadata, all
 *   → Example: POST /purge/faq?key=your-secret
 *
 * ============================================================
 * CACHE STRATEGY
 * ============================================================
 *
 * TTL: 24 hours for all collections
 *
 * To publish changes immediately:
 *   1. Update data in Firebase (via admin dashboard)
 *   2. Click "Publish Changes" in dashboard
 *   3. Enter purge key
 *   4. Cache clears → next visitor gets fresh data
 *
 * ============================================================
 */

const FIREBASE_PROJECT = 'junkstore-website';
const FIREBASE_API_KEY = 'AIzaSyDnUIisCanLOxvTWiHMAnZimg7CBnqKQp8';

// Cache TTLs in seconds (24 hours for all - use /purge endpoint to force refresh)
const CACHE_TTL = 86400; // 24 hours

// Valid collections for purging
const VALID_COLLECTIONS = ['games', 'faq', 'troubleshooting', 'pricing', 'banners', 'testimonials', 'metadata', 'tutorials', 'blog'];

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://www.junkstore.xyz',
  'https://junkstore.xyz',
  'http://localhost:4000',
  'http://127.0.0.1:4000'
];

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCORS(corsOrigin);
    }

    const url = new URL(request.url);
    const path = url.pathname;

    // Health check endpoint
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
      });
    }

    // Purge cache endpoint: POST /purge/:collection?key=SECRET
    if (path.startsWith('/purge/') && request.method === 'POST') {
      const collection = path.replace('/purge/', '');
      const purgeKey = url.searchParams.get('key');

      // Verify secret key (set PURGE_KEY in Cloudflare Worker environment variables)
      if (!env.PURGE_KEY || purgeKey !== env.PURGE_KEY) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
        });
      }

      // Validate collection name
      if (!VALID_COLLECTIONS.includes(collection) && collection !== 'all') {
        return new Response(JSON.stringify({
          error: 'Invalid collection',
          valid: VALID_COLLECTIONS
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
        });
      }

      const cache = caches.default;
      const purged = [];

      if (collection === 'all') {
        // Purge all collections
        for (const col of VALID_COLLECTIONS) {
          const cacheKey = `firebase:${col}`;
          const cacheRequest = new Request(`https://cache.internal/${cacheKey}`);
          await cache.delete(cacheRequest);
          purged.push(col);
        }
      } else {
        // Purge specific collection
        const cacheKey = `firebase:${collection}`;
        const cacheRequest = new Request(`https://cache.internal/${cacheKey}`);
        await cache.delete(cacheRequest);
        purged.push(collection);
      }

      return new Response(JSON.stringify({
        success: true,
        purged: purged,
        message: `Cache cleared for: ${purged.join(', ')}`
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
      });
    }

    // Route: /collection/:name (get all docs)
    // Route: /collection/:name/:docId (get single doc)
    // Route: /collection/:name/:subcol/:subname (nested collection)
    // Query params: ?pageSize=N&pageToken=TOKEN for pagination
    const parts = path.split('/').filter(Boolean);
    if (parts[0] !== 'collection' || parts.length < 2) {
      return new Response(JSON.stringify({ error: 'Invalid path. Use /collection/{name}' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
      });
    }

    const collectionPath = parts.slice(1).join('/');

    // Extract pagination parameters from query string
    const pageSize = url.searchParams.get('pageSize');
    const pageToken = url.searchParams.get('pageToken');

    // Build cache key including pagination params for unique caching per page
    let cacheKey = `firebase:${collectionPath}`;
    if (pageSize) {
      cacheKey += `:ps${pageSize}`;
    }
    if (pageToken) {
      // Use a hash of pageToken to keep cache key reasonable length
      const tokenHash = await hashString(pageToken);
      cacheKey += `:pt${tokenHash}`;
    }

    const cache = caches.default;

    // Check cache first
    const cacheRequest = new Request(`https://cache.internal/${cacheKey}`);
    let response = await cache.match(cacheRequest);

    if (response) {
      // Cache hit - clone and add headers
      const body = await response.text();
      return new Response(body, {
        headers: {
          'Content-Type': 'application/json',
          'X-Cache': 'HIT',
          'X-Cache-Key': cacheKey,
          'Access-Control-Allow-Origin': corsOrigin,
          'Access-Control-Expose-Headers': 'X-Cache, X-Cache-TTL, X-Cache-Key'
        }
      });
    }

    // Cache miss - fetch from Firebase
    try {
      const data = await fetchFromFirestore(collectionPath, pageSize ? parseInt(pageSize, 10) : null, pageToken);

      // Use 24-hour TTL for all collections
      const ttl = CACHE_TTL;

      // Create response
      const responseBody = JSON.stringify(data);
      response = new Response(responseBody, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${ttl}`,
          'X-Cache': 'MISS',
          'X-Cache-TTL': ttl.toString(),
          'X-Cache-Key': cacheKey,
          'Access-Control-Allow-Origin': corsOrigin,
          'Access-Control-Expose-Headers': 'X-Cache, X-Cache-TTL, X-Cache-Key'
        }
      });

      // Store in cache (non-blocking)
      const cacheResponse = new Response(responseBody, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${ttl}`
        }
      });
      ctx.waitUntil(cache.put(cacheRequest, cacheResponse));

      return response;
    } catch (error) {
      console.error('Firestore fetch error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': corsOrigin
        }
      });
    }
  }
};

async function fetchFromFirestore(collectionPath, pageSize = null, pageToken = null) {
  const baseUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents`;

  let firestoreUrl = `${baseUrl}/${collectionPath}?key=${FIREBASE_API_KEY}`;

  // Add pagination parameters if provided
  if (pageSize) {
    firestoreUrl += `&pageSize=${pageSize}`;
  }
  if (pageToken) {
    firestoreUrl += `&pageToken=${encodeURIComponent(pageToken)}`;
  }

  const response = await fetch(firestoreUrl);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Firestore error ${response.status}: ${errorText}`);
  }

  const result = await response.json();

  // Transform Firestore format to simple JSON
  if (result.documents) {
    // Collection query - return array of documents with pagination info
    return {
      documents: result.documents.map(doc => transformDocument(doc)),
      nextPageToken: result.nextPageToken || null
    };
  } else if (result.fields) {
    // Single document query
    return transformDocument(result);
  } else if (result.error) {
    throw new Error(result.error.message);
  } else {
    // Empty collection
    return { documents: [], nextPageToken: null };
  }
}

function transformDocument(doc) {
  const data = {};
  const fields = doc.fields || {};

  for (const [key, value] of Object.entries(fields)) {
    data[key] = extractValue(value);
  }

  // Include document ID from path
  if (doc.name) {
    const pathParts = doc.name.split('/');
    data._id = pathParts[pathParts.length - 1];
  }

  return data;
}

function extractValue(value) {
  if (value === null || value === undefined) return null;

  if (value.stringValue !== undefined) return value.stringValue;
  if (value.integerValue !== undefined) return parseInt(value.integerValue, 10);
  if (value.doubleValue !== undefined) return value.doubleValue;
  if (value.booleanValue !== undefined) return value.booleanValue;
  if (value.timestampValue !== undefined) return value.timestampValue;
  if (value.geoPointValue !== undefined) return value.geoPointValue;
  if (value.referenceValue !== undefined) return value.referenceValue;

  if (value.arrayValue !== undefined) {
    const values = value.arrayValue.values || [];
    return values.map(v => extractValue(v));
  }

  if (value.mapValue !== undefined) {
    const map = {};
    const fields = value.mapValue.fields || {};
    for (const [k, v] of Object.entries(fields)) {
      map[k] = extractValue(v);
    }
    return map;
  }

  if (value.nullValue !== undefined) return null;

  return null;
}

function handleCORS(origin) {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}

/**
 * Hash a string to a short hex string for cache keys
 * @param {string} str - String to hash
 * @returns {Promise<string>} Short hash
 */
async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // Return first 8 chars of hex hash (enough for uniqueness in cache keys)
  return hashArray.slice(0, 4).map(b => b.toString(16).padStart(2, '0')).join('');
}
