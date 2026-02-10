/**
 * Firebase Games Loader
 * Fetches games from Firestore and caches in localStorage
 */

const CACHE_KEY = 'junkstore_games_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

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

        // Add to games array with normalized fields
        games.push({
          id: game.id || doc.id,
          title: game.title || '',
          storefront: storefrontLabels[storefront],
          slug: game.slug || '',
          decky_rating: game.decky_rating || game.deckyRating || '',
          standalone_rating: game.standalone_rating || game.standaloneRating || '',
          date_tested: game.date_tested || game.dateTested || '',
          is_featured: game.is_featured || game.isFeatured || false,
          blog_category: game.blog_category || game.blogCategory || '',
          protondb: game.protondb || '',
          gog_url: game.gog_url || game.gogUrl || '',
          epic_url: game.epic_url || game.epicUrl || '',
          itch_url: game.itch_url || game.itchUrl || '',
          pc_gaming_wiki_url: game.pc_gaming_wiki_url || game.pcGamingWikiUrl || '',
          steamId: game.steamId || game.steam_id || '',
          // Store full game data for modal use
          _fullData: game
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
 * Get full game details (for modal)
 * Since we store _fullData, we can return it directly
 */
function getGameDetails(gameId, games) {
  const game = games.find(g => g.id === gameId);
  return game?._fullData || game;
}

// Export for use
window.loadGamesFromFirebase = loadGamesFromFirebase;
window.clearGamesCache = clearGamesCache;
window.getGameDetails = getGameDetails;
