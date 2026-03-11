/**
 * Cloudflare Worker - Firebase Firestore Cache Proxy
 * Deploy to: api.junkstore.xyz or junkstore-api.workers.dev
 *
 * This worker caches Firestore read requests at the edge,
 * dramatically reducing Firebase costs for high-traffic sites.
 */

const FIREBASE_PROJECT = 'junkstore-website';
const FIREBASE_API_KEY = 'AIzaSyDnUIisCanLOxvTWiHMAnZimg7CBnqKQp8';

// Cache TTLs in seconds
const CACHE_TTLS = {
  'games': 300,           // 5 minutes
  'faq': 3600,            // 1 hour
  'troubleshooting': 3600, // 1 hour
  'pricing': 900,         // 15 minutes
  'banners': 900,         // 15 minutes
  'testimonials': 3600,   // 1 hour
  'metadata': 1800        // 30 minutes (uptime)
};

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

    // Route: /collection/:name (get all docs)
    // Route: /collection/:name/:docId (get single doc)
    // Route: /collection/:name/:subcol/:subname (nested collection)
    const parts = path.split('/').filter(Boolean);
    if (parts[0] !== 'collection' || parts.length < 2) {
      return new Response(JSON.stringify({ error: 'Invalid path. Use /collection/{name}' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': corsOrigin }
      });
    }

    const collectionPath = parts.slice(1).join('/');
    const cacheKey = `firebase:${collectionPath}`;
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
      const data = await fetchFromFirestore(collectionPath);

      // Determine TTL based on root collection
      const rootCollection = parts[1];
      const ttl = CACHE_TTLS[rootCollection] || 300;

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

async function fetchFromFirestore(collectionPath) {
  const baseUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents`;
  const firestoreUrl = `${baseUrl}/${collectionPath}?key=${FIREBASE_API_KEY}`;

  const response = await fetch(firestoreUrl);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Firestore error ${response.status}: ${errorText}`);
  }

  const result = await response.json();

  // Transform Firestore format to simple JSON
  if (result.documents) {
    // Collection query - return array of documents
    return result.documents.map(doc => transformDocument(doc));
  } else if (result.fields) {
    // Single document query
    return transformDocument(result);
  } else if (result.error) {
    throw new Error(result.error.message);
  } else {
    // Empty collection
    return [];
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
