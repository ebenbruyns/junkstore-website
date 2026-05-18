/**
 * JunkStore Firebase Client Library
 *
 * Client-side JavaScript for fetching games and blog posts from Firebase Firestore.
 * Use this on your website to pull data directly from Firebase.
 *
 * Firestore Structure:
 * /games/{storefront}/games/{databaseId} - Individual game documents
 * /blog/{type}/posts/{postId} - Individual blog post documents
 * /metadata/sync - Sync metadata and statistics
 * /metadata/blog - Blog metadata and statistics
 *
 * Usage:
 *   // Initialize (do this once)
 *   await JunkStoreFirebase.init();
 *
 *   // === GAMES ===
 *   // Get a specific game by storefront and database ID
 *   const game = await JunkStoreFirebase.getGame('epic', '4656facc740742a39e265b026e13d075');
 *
 *   // Get all games in a storefront
 *   const epicGames = await JunkStoreFirebase.getStorefrontGames('epic');
 *
 *   // Get all games (across all storefronts)
 *   const allGames = await JunkStoreFirebase.getAllGames();
 *
 *   // Get featured games
 *   const featured = await JunkStoreFirebase.getFeaturedGames();
 *
 *   // Search games by title
 *   const results = await JunkStoreFirebase.searchGames('witcher');
 *
 *   // === BLOG ===
 *   // Get posts from a specific type
 *   const weeklyUpdates = await JunkStoreFirebase.getBlogPosts('weekly-updates', { limit: 10 });
 *   const tips = await JunkStoreFirebase.getBlogPosts('tips', { limit: 5 });
 *
 *   // Get single post by type and ID
 *   const post = await JunkStoreFirebase.getBlogPost('tips', 'show-hide-installed-games');
 *
 *   // Get post by slug (searches all types)
 *   const post = await JunkStoreFirebase.getBlogPostBySlug('games-tested-feb-08');
 *
 *   // Get latest posts across all types
 *   const latest = await JunkStoreFirebase.getLatestPosts(10);
 *
 *   // Blog types: weekly-updates, tips, features, news
 *   console.log(JunkStoreFirebase.BLOG_TYPES);
 *
 *   // Get tips posts marked for tutorials page
 *   const tutorialTips = await JunkStoreFirebase.getTipsForTutorials();
 *   const deckyTips = await JunkStoreFirebase.getTipsForTutorials({ category: 'decky' });
 */

const JunkStoreFirebase = (function() {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnUIisCanLOxvTWiHMAnZimg7CBnqKQp8",
    authDomain: "junkstore-website.firebaseapp.com",
    projectId: "junkstore-website",
    storageBucket: "junkstore-website.firebasestorage.app",
    messagingSenderId: "441802406115",
    appId: "1:441802406115:web:b22d37441704de0da9edd6",
    measurementId: "G-LKH63JHT5E"
  };

  // Storefronts
  const STOREFRONTS = ['epic', 'gog', 'amazon', 'itch-io'];

  let app = null;
  let db = null;
  let initialized = false;

  /**
   * Initialize Firebase
   * Must be called before using other methods
   */
  async function init() {
    if (initialized) return;

    // Check if Firebase SDK is loaded
    if (typeof firebase === 'undefined') {
      throw new Error('Firebase SDK not loaded. Include firebase-app.js and firebase-firestore.js before this script.');
    }

    // Initialize Firebase app
    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
    } else {
      app = firebase.app();
    }

    db = firebase.firestore();
    initialized = true;

    console.log('JunkStore Firebase initialized');
  }

  /**
   * Check if Firebase is initialized
   */
  function checkInit() {
    if (!initialized) {
      throw new Error('JunkStoreFirebase not initialized. Call init() first.');
    }
  }

  /**
   * Get a specific game by storefront and database ID
   * @param {string} storefront - 'epic', 'gog', 'amazon', or 'itch-io'
   * @param {string} databaseId - The store's database ID for the game
   * @returns {Object|null} Game data or null if not found
   */
  async function getGame(storefront, databaseId) {
    checkInit();

    const docRef = db.collection('games').doc(storefront).collection('games').doc(databaseId);
    const doc = await docRef.get();

    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }

  /**
   * Get a game by slug (queries the slug field)
   * @param {string} storefront - 'epic', 'gog', 'amazon', or 'itch-io'
   * @param {string} slug - URL-friendly slug
   * @returns {Object|null} Game data or null if not found
   */
  async function getGameBySlug(storefront, slug) {
    checkInit();

    const snapshot = await db.collection('games')
      .doc(storefront)
      .collection('games')
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }

  /**
   * Get all games from a specific storefront
   * @param {string} storefront - 'epic', 'gog', 'amazon', or 'itch-io'
   * @param {Object} options - Query options
   * @param {string} options.orderBy - Field to order by (default: 'title')
   * @param {number} options.limit - Max games to return (default: all)
   * @returns {Array} Array of game objects
   */
  async function getStorefrontGames(storefront, options = {}) {
    checkInit();

    let query = db.collection('games').doc(storefront).collection('games');

    // Apply ordering
    const orderBy = options.orderBy || 'title';
    query = query.orderBy(orderBy);

    // Apply limit
    if (options.limit) {
      query = query.limit(options.limit);
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * Get all games across all storefronts
   * @param {Object} options - Query options
   * @param {number} options.limit - Max games per storefront
   * @returns {Array} Array of all game objects
   */
  async function getAllGames(options = {}) {
    checkInit();

    const allGames = [];

    for (const storefront of STOREFRONTS) {
      const games = await getStorefrontGames(storefront, options);
      allGames.push(...games);
    }

    // Sort by title
    allGames.sort((a, b) => a.title.localeCompare(b.title));

    return allGames;
  }

  /**
   * Get featured games across all storefronts
   * @returns {Array} Array of featured game objects
   */
  async function getFeaturedGames() {
    checkInit();

    const featured = [];

    for (const storefront of STOREFRONTS) {
      const snapshot = await db.collection('games')
        .doc(storefront)
        .collection('games')
        .where('is_featured', '==', true)
        .get();

      snapshot.docs.forEach(doc => {
        featured.push({ id: doc.id, ...doc.data() });
      });
    }

    return featured;
  }

  /**
   * Search games by title (case-insensitive prefix match)
   * Note: Firestore doesn't support full-text search, so this does prefix matching
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @param {string} options.storefront - Limit to specific storefront
   * @returns {Array} Array of matching games
   */
  async function searchGames(query, options = {}) {
    checkInit();

    const searchLower = query.toLowerCase();
    const results = [];
    const storefronts = options.storefront ? [options.storefront] : STOREFRONTS;

    for (const storefront of storefronts) {
      // Get all games and filter client-side (Firestore limitation)
      const games = await getStorefrontGames(storefront);
      const matches = games.filter(game =>
        game.title.toLowerCase().includes(searchLower)
      );
      results.push(...matches);
    }

    // Sort by relevance (starts with query first, then contains)
    results.sort((a, b) => {
      const aStarts = a.title.toLowerCase().startsWith(searchLower);
      const bStarts = b.title.toLowerCase().startsWith(searchLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.title.localeCompare(b.title);
    });

    return results;
  }

  /**
   * Get games by rating
   * @param {string} rating - 'green', 'yellow', 'red', etc.
   * @param {string} ratingType - 'decky_rating' or 'standalone_rating'
   * @param {Object} options - Query options
   * @returns {Array} Array of matching games
   */
  async function getGamesByRating(rating, ratingType = 'decky_rating', options = {}) {
    checkInit();

    const results = [];
    const storefronts = options.storefront ? [options.storefront] : STOREFRONTS;

    for (const storefront of storefronts) {
      const snapshot = await db.collection('games')
        .doc(storefront)
        .collection('games')
        .where(ratingType, '==', rating)
        .get();

      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      });
    }

    return results;
  }

  /**
   * Get sync metadata
   * @returns {Object} Sync status and statistics
   */
  async function getSyncMetadata() {
    checkInit();

    const doc = await db.collection('metadata').doc('sync').get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  }

  /**
   * Get game counts per storefront
   * @returns {Object} Counts by storefront
   */
  async function getStorefrontCounts() {
    const metadata = await getSyncMetadata();
    return metadata?.storefrontCounts || {};
  }

  // ============================================
  // BLOG METHODS
  // ============================================

  // Blog types
  const BLOG_TYPES = ['weekly-updates', 'tips', 'features', 'news'];

  /**
   * Get blog posts from a specific type
   * @param {string} type - 'weekly-updates', 'tips', 'features', or 'news'
   * @param {Object} options - Query options
   * @param {number} options.limit - Max posts to return
   * @param {string} options.status - Filter by status ('published', 'draft')
   * @returns {Array} Array of blog post objects
   */
  async function getBlogPosts(type, options = {}) {
    checkInit();

    let query = db.collection('blog').doc(type).collection('posts');

    // Filter by status (default: published only)
    const status = options.status || 'published';
    query = query.where('status', '==', status);

    // Order by date descending
    query = query.orderBy('date', 'desc');

    // Apply limit
    if (options.limit) {
      query = query.limit(options.limit);
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * Get a single blog post by type and ID
   * @param {string} type - 'weekly-updates', 'tips', 'features', or 'news'
   * @param {string} postId - The post ID
   * @returns {Object|null} Post data or null if not found
   */
  async function getBlogPost(type, postId) {
    checkInit();

    const docRef = db.collection('blog').doc(type).collection('posts').doc(postId);
    const doc = await docRef.get();

    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }

  /**
   * Get a blog post by slug (searches across all types)
   * @param {string} slug - URL-friendly slug
   * @returns {Object|null} Post data or null if not found
   */
  async function getBlogPostBySlug(slug) {
    checkInit();

    for (const type of BLOG_TYPES) {
      const snapshot = await db.collection('blog')
        .doc(type)
        .collection('posts')
        .where('slug', '==', slug)
        .limit(1)
        .get();

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        return { id: doc.id, type, ...doc.data() };
      }
    }
    return null;
  }

  /**
   * Get latest posts across all types
   * @param {number} limit - Max posts to return (default: 10)
   * @returns {Array} Array of post objects sorted by date
   */
  async function getLatestPosts(limit = 10) {
    checkInit();

    const allPosts = [];

    for (const type of BLOG_TYPES) {
      const posts = await getBlogPosts(type, { limit: limit, status: 'published' });
      allPosts.push(...posts.map(p => ({ ...p, type })));
    }

    // Sort by date descending
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Return limited results
    return allPosts.slice(0, limit);
  }

  /**
   * Get all posts of a specific type
   * @param {string} type - 'weekly-updates', 'tips', 'features', or 'news'
   * @param {number} limit - Max posts to return
   * @returns {Array} Array of post objects
   */
  async function getPostsByType(type, limit = 20) {
    return getBlogPosts(type, { limit, status: 'published' });
  }

  /**
   * Get blog metadata
   * @returns {Object} Blog metadata including post counts
   */
  async function getBlogMetadata() {
    checkInit();

    const doc = await db.collection('metadata').doc('blog').get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  }

  /**
   * Search blog posts by title
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @param {string} options.type - Limit to specific type
   * @returns {Array} Array of matching posts
   */
  async function searchBlogPosts(query, options = {}) {
    checkInit();

    const searchLower = query.toLowerCase();
    const results = [];
    const types = options.type ? [options.type] : BLOG_TYPES;

    for (const type of types) {
      const posts = await getBlogPosts(type, { status: 'published' });
      const matches = posts.filter(post =>
        post.title.toLowerCase().includes(searchLower)
      );
      results.push(...matches.map(p => ({ ...p, type })));
    }

    // Sort by relevance
    results.sort((a, b) => {
      const aStarts = a.title.toLowerCase().startsWith(searchLower);
      const bStarts = b.title.toLowerCase().startsWith(searchLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return new Date(b.date) - new Date(a.date);
    });

    return results;
  }

  /**
   * Get tips blog posts that are marked for the tutorials page
   * @param {Object} options - Query options
   * @param {string} options.category - Filter by tutorials category (both, decky, standalone)
   * @returns {Array} Array of tip posts for tutorials page
   */
  async function getTipsForTutorials(options = {}) {
    checkInit();

    // Get all tips posts
    const tips = await getBlogPosts('tips', { status: 'published' });

    // Filter to only those marked for tutorials page
    let tutorialTips = tips.filter(post => post.showOnTutorials === true);

    // Filter by category if specified
    if (options.category) {
      tutorialTips = tutorialTips.filter(post => {
        const cat = post.tutorialsCategory || 'both';
        // 'both' matches everything, otherwise exact match
        return cat === 'both' || cat === options.category;
      });
    }

    return tutorialTips;
  }

  // ============================================
  // TUTORIAL METHODS
  // ============================================

  // Tutorial categories and sections
  const TUTORIAL_CATEGORIES = ['universal', 'decky', 'pro'];
  const TUTORIAL_SECTIONS = ['installation', 'configuration', 'tips', 'other'];

  /**
   * Get all tutorials
   * @param {Object} options - Query options
   * @param {string} options.category - Filter by category (universal, decky, pro)
   * @param {string} options.section - Filter by section (installation, configuration, tips, other)
   * @param {number} options.limit - Max tutorials to return
   * @returns {Array} Array of tutorial objects
   */
  async function getTutorials(options = {}) {
    checkInit();

    let query = db.collection('tutorials');

    // Filter by category
    if (options.category && TUTORIAL_CATEGORIES.includes(options.category)) {
      query = query.where('category', '==', options.category);
    }

    // Filter by section
    if (options.section && TUTORIAL_SECTIONS.includes(options.section)) {
      query = query.where('section', '==', options.section);
    }

    // Only active tutorials
    if (options.activeOnly !== false) {
      query = query.where('isActive', '==', true);
    }

    // Order by order field, then title
    query = query.orderBy('order').orderBy('title');

    // Apply limit
    if (options.limit) {
      query = query.limit(options.limit);
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * Get a single tutorial by ID
   * @param {string} tutorialId - The tutorial ID
   * @returns {Object|null} Tutorial data or null if not found
   */
  async function getTutorial(tutorialId) {
    checkInit();

    const docRef = db.collection('tutorials').doc(tutorialId);
    const doc = await docRef.get();

    if (doc.exists) {
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }

  /**
   * Get a tutorial by slug
   * @param {string} slug - URL-friendly slug
   * @returns {Object|null} Tutorial data or null if not found
   */
  async function getTutorialBySlug(slug) {
    checkInit();

    const snapshot = await db.collection('tutorials')
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }

  /**
   * Get featured tutorials
   * @returns {Array} Array of featured tutorial objects
   */
  async function getFeaturedTutorials() {
    checkInit();

    const snapshot = await db.collection('tutorials')
      .where('isFeatured', '==', true)
      .where('isActive', '==', true)
      .orderBy('order')
      .get();

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * Get tutorials metadata
   * @returns {Object} Tutorials metadata including counts
   */
  async function getTutorialsMetadata() {
    checkInit();

    const doc = await db.collection('metadata').doc('tutorials').get();
    if (doc.exists) {
      return doc.data();
    }
    return null;
  }

  /**
   * Search tutorials by title
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Array} Array of matching tutorials
   */
  async function searchTutorials(query, options = {}) {
    checkInit();

    const searchLower = query.toLowerCase();
    const tutorials = await getTutorials(options);

    const matches = tutorials.filter(tutorial =>
      tutorial.title.toLowerCase().includes(searchLower) ||
      (tutorial.excerpt && tutorial.excerpt.toLowerCase().includes(searchLower))
    );

    // Sort by relevance
    matches.sort((a, b) => {
      const aStarts = a.title.toLowerCase().startsWith(searchLower);
      const bStarts = b.title.toLowerCase().startsWith(searchLower);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return (a.order || 0) - (b.order || 0);
    });

    return matches;
  }

  // Public API
  return {
    // Core
    init,

    // Games
    getGame,
    getGameBySlug,
    getStorefrontGames,
    getAllGames,
    getFeaturedGames,
    searchGames,
    getGamesByRating,
    getSyncMetadata,
    getStorefrontCounts,
    STOREFRONTS,

    // Blog
    getBlogPosts,
    getBlogPost,
    getBlogPostBySlug,
    getLatestPosts,
    getPostsByType,
    getBlogMetadata,
    searchBlogPosts,
    getTipsForTutorials,
    BLOG_TYPES,

    // Tutorials
    getTutorials,
    getTutorial,
    getTutorialBySlug,
    getFeaturedTutorials,
    getTutorialsMetadata,
    searchTutorials,
    TUTORIAL_CATEGORIES,
    TUTORIAL_SECTIONS
  };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JunkStoreFirebase;
}
