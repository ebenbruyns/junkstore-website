/**
 * Firebase Games Loader
 * Fetches games from Firestore and caches in localStorage
 *
 * OPTIMIZED: Initial load fetches only table display fields.
 * Full game details are loaded on-demand when modal is opened.
 */

const CACHE_KEY = 'junkstore_games_cache_v5'; // v5: known slug fixes map
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

/**
 * Known slug fixes for games where Firebase has malformed slugs
 * Maps incorrect Firebase slugs to correct static JSON filenames
 */
const SLUG_FIXES = {
  'f-i-s-t-forged-in-shadow-torch': 'fist-forged-in-shadow-torch',
  'tiny-tina-s-assault-on-dragon-keep-a-wonderlands-one-shot-adventure': 'tiny-tinas-assault-on-dragon-keep-a-wonderlands-one-shot-adventure',
  'tiny-tina-s-wonderlands': 'tiny-tinas-wonderlands'
};

/**
 * Normalize slug to match static JSON file naming convention
 * Uses a known-fixes map for specific problematic slugs
 * @param {string} slug - The slug to normalize
 * @param {string} title - The game title (unused, kept for compatibility)
 * @returns {string} Normalized slug
 */
function normalizeSlug(slug, title) {
  if (!slug) return '';

  const normalized = slug.toLowerCase();

  // Check if this slug has a known fix
  if (SLUG_FIXES[normalized]) {
    console.log(`🔧 Fixed slug: ${normalized} -> ${SLUG_FIXES[normalized]}`);
    return SLUG_FIXES[normalized];
  }

  return normalized;
}

// Cache for individual game details (loaded on-demand)
const gameDetailsCache = new Map();

/**
 * Load games from Firebase or cache
 * @returns {Promise<Object>} Games data in same format as games-table.json
 */
async function loadGamesFromFirebase() {
  // Check cache first
  const cached = getCachedGames();
  if (cached) {
    console.log('📦 Using cached games data');
    return cached;
  }

  console.log('🔥 Fetching games from Firebase...');

  // Wait for Firebase to be ready
  if (!window.firebaseDb) {
    console.log('⏳ Waiting for Firebase...');
    await new Promise(resolve => {
      const check = () => {
        if (window.firebaseDb) resolve();
        else setTimeout(check, 100);
      };
      check();
    });
  }

  const db = window.firebaseDb;
  const getDocs = window.firebaseGetDocs;
  const collection = window.firebaseCollection;

  const storefronts = ['epic', 'gog', 'amazon', 'itch'];
  const storefrontLabels = {
    'epic': 'Epic',
    'gog': 'GOG',
    'amazon': 'Amazon',
    'itch': 'itch.io'
  };

  const games = [];
  const storefrontStats = {};
  let featuredCount = 0;
  let greenDeckyTotal = 0;
  let greenStandaloneTotal = 0;
  let bothGreenTotal = 0;

  for (const storefront of storefronts) {
    try {
      const gamesRef = collection(db, 'games', storefront, 'games');
      const snapshot = await getDocs(gamesRef);

      let storeTotal = 0;
      let storeFeatured = 0;
      let storeGreenDecky = 0;
      let storeGreenStandalone = 0;

      snapshot.forEach(doc => {
        const game = doc.data();

        // Add to games array with only table display fields (optimized - no _fullData)
        games.push({
          id: game.id || doc.id,
          title: game.title || '',
          storefront: storefrontLabels[storefront],
          storefrontKey: storefront, // Keep original key for fetching details later
          slug: normalizeSlug(game.slug, game.title),
          databaseId: game.databaseId || game.id || doc.id, // For URL lookups
          decky_rating: game.decky_rating || game.deckyRating || '',
          standalone_rating: game.standalone_rating || game.standaloneRating || '',
          date_tested: game.date_tested || game.dateTested || '',
          is_featured: game.is_featured || game.isFeatured || false,
          blog_category: game.blog_category || game.blogCategory || '',
          cant_test_linux: game.cant_test_linux || false // For anti-cheat display
          // Note: Full game details loaded on-demand via loadGameDetailsFromFirebase()
        });

        storeTotal++;
        if (game.is_featured || game.isFeatured) {
          storeFeatured++;
          featuredCount++;
        }

        const deckyRating = game.decky_rating || game.deckyRating || '';
        const standaloneRating = game.standalone_rating || game.standaloneRating || '';

        if (deckyRating === 'green') {
          storeGreenDecky++;
          greenDeckyTotal++;
        }
        if (standaloneRating === 'green') {
          storeGreenStandalone++;
          greenStandaloneTotal++;
        }
        if (deckyRating === 'green' && standaloneRating === 'green') {
          bothGreenTotal++;
        }
      });

      storefrontStats[storefrontLabels[storefront]] = {
        total: storeTotal,
        featured: storeFeatured,
        green_decky: storeGreenDecky,
        green_standalone: storeGreenStandalone
      };

      console.log(`  ✅ Loaded ${storeTotal} games from ${storefrontLabels[storefront]}`);

    } catch (error) {
      console.error(`  ❌ Error loading ${storefront}:`, error);
      storefrontStats[storefrontLabels[storefront]] = {
        total: 0,
        featured: 0,
        green_decky: 0,
        green_standalone: 0
      };
    }
  }

  // Build the data structure matching games-table.json
  const gamesData = {
    total_games: games.length,
    featured_games: featuredCount,
    storefronts: storefrontStats,
    ratings_summary: {
      green_decky: greenDeckyTotal,
      green_standalone: greenStandaloneTotal,
      both_green: bothGreenTotal
    },
    last_updated: new Date().toISOString(),
    games: games
  };

  console.log(`🔥 Loaded ${games.length} games from Firebase`);

  // Cache the data
  cacheGames(gamesData);

  return gamesData;
}

/**
 * Get cached games if still valid
 */
function getCachedGames() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const age = Date.now() - timestamp;

    if (age < CACHE_DURATION) {
      console.log(`📦 Cache is ${Math.round(age / 1000)}s old (valid for ${CACHE_DURATION / 1000}s)`);
      return data;
    }

    console.log('📦 Cache expired, will fetch fresh data');
    return null;
  } catch (e) {
    console.warn('Cache read error:', e);
    return null;
  }
}

/**
 * Cache games data
 */
function cacheGames(data) {
  try {
    const cacheData = {
      data: data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    console.log('💾 Games cached in localStorage');
  } catch (e) {
    console.warn('Cache write error:', e);
  }
}

/**
 * Force refresh from Firebase (clear cache)
 */
function clearGamesCache() {
  localStorage.removeItem(CACHE_KEY);
  console.log('🗑️ Games cache cleared');
}

/**
 * Load full game details from Firebase on-demand (for modal)
 * This is called when a user clicks on a game to view details
 * @param {string} gameId - The game ID
 * @param {string} storefrontKey - The storefront key (epic, gog, amazon, itch)
 * @returns {Promise<Object>} Full game data
 */
async function loadGameDetailsFromFirebase(gameId, storefrontKey) {
  // Check in-memory cache first
  const cacheKey = `${storefrontKey}/${gameId}`;
  if (gameDetailsCache.has(cacheKey)) {
    console.log(`📦 Using cached details for: ${gameId}`);
    return gameDetailsCache.get(cacheKey);
  }

  console.log(`🔥 Fetching game details from Firebase: ${storefrontKey}/${gameId}`);

  // Wait for Firebase to be ready
  if (!window.firebaseDb) {
    console.log('⏳ Waiting for Firebase...');
    await new Promise(resolve => {
      const check = () => {
        if (window.firebaseDb) resolve();
        else setTimeout(check, 100);
      };
      check();
    });
  }

  const db = window.firebaseDb;
  const getDoc = window.firebaseGetDoc;
  const doc = window.firebaseDoc;

  try {
    const gameRef = doc(db, 'games', storefrontKey, 'games', gameId);
    const gameSnap = await getDoc(gameRef);

    if (gameSnap.exists()) {
      const gameData = gameSnap.data();
      console.log(`✅ Loaded full details for: ${gameData.title}`);

      // Cache the result
      gameDetailsCache.set(cacheKey, gameData);

      return gameData;
    } else {
      console.warn(`⚠️ Game not found in Firebase: ${storefrontKey}/${gameId}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error loading game details:`, error);
    return null;
  }
}

/**
 * Get basic game info from loaded games array
 * For full details, use loadGameDetailsFromFirebase()
 */
function getGameDetails(gameId, games) {
  return games.find(g => g.id === gameId);
}

/**
 * Clear the in-memory game details cache
 */
function clearGameDetailsCache() {
  gameDetailsCache.clear();
  console.log('🗑️ Game details cache cleared');
}

// Export for use
window.loadGamesFromFirebase = loadGamesFromFirebase;
window.loadGameDetailsFromFirebase = loadGameDetailsFromFirebase;
window.clearGamesCache = clearGamesCache;
window.clearGameDetailsCache = clearGameDetailsCache;
window.getGameDetails = getGameDetails;
