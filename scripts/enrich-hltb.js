#!/usr/bin/env node
/**
 * Enrich game JSON files with HowLongToBeat data via RapidAPI
 *
 * Usage:
 *   node scripts/enrich-hltb.js           # Update all games missing HLTB data
 *   node scripts/enrich-hltb.js --test    # Test mode - show what would be updated
 *   node scripts/enrich-hltb.js --force   # Re-fetch all HLTB data
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// RapidAPI config
const RAPIDAPI_KEY = 'REDACTED';
const RAPIDAPI_HOST = 'howlongtobeat-data-api.p.rapidapi.com';

// Directories containing game JSON files
const GAMES_DIR = path.join(__dirname, '..', 'assets', 'data', 'games');
const STOREFRONTS = ['epic', 'gog', 'amazon', 'itch.io'];

// Rate limiting - be nice to the API
const DELAY_MS = 500; // 0.5 seconds between requests

// Failed-lookup cache: avoid burning quota re-trying titles HLTB doesn't have.
const FAILED_CACHE_PATH = path.join(__dirname, 'hltb-failed-cache.json');
const FAILED_CACHE_TTL_DAYS = 30;
const FAILED_CACHE_TTL_MS = FAILED_CACHE_TTL_DAYS * 24 * 60 * 60 * 1000;

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function loadFailedCache() {
    try {
        if (!fs.existsSync(FAILED_CACHE_PATH)) return {};
        const raw = JSON.parse(fs.readFileSync(FAILED_CACHE_PATH, 'utf8'));
        // Prune entries older than TTL
        const cutoff = Date.now() - FAILED_CACHE_TTL_MS;
        const pruned = {};
        let dropped = 0;
        for (const [key, ts] of Object.entries(raw)) {
            if (ts >= cutoff) pruned[key] = ts;
            else dropped++;
        }
        if (dropped > 0) console.log(`  (Pruned ${dropped} stale failed-cache entries)`);
        return pruned;
    } catch (e) {
        console.warn(`  Could not load failed-cache, starting fresh: ${e.message}`);
        return {};
    }
}

function saveFailedCache(cache) {
    try {
        fs.writeFileSync(FAILED_CACHE_PATH, JSON.stringify(cache, null, 2));
    } catch (e) {
        console.warn(`  Could not save failed-cache: ${e.message}`);
    }
}

// Use the same cleaning logic as the API call so the key matches between runs.
function cacheKey(title) {
    return title
        .replace(/\(.*?\)/g, '')
        .replace(/\[.*?\]/g, '')
        .replace(/[-–—:]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

/**
 * Fetch HLTB data for a game title
 */
async function fetchHLTBData(title) {
    return new Promise((resolve) => {
        // Clean up title for better search results
        const cleanTitle = title
            .replace(/\(.*?\)/g, '')  // Remove parentheses content
            .replace(/\[.*?\]/g, '')  // Remove bracket content
            .replace(/[-–—:]/g, ' ')  // Replace dashes/colons with spaces
            .replace(/\s+/g, ' ')     // Normalize whitespace
            .trim();

        const url = `https://${RAPIDAPI_HOST}/search?size=5&sortBy=popular&q=${encodeURIComponent(cleanTitle)}`;

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY
            }
        };

        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.status === 'OK' && json.data?.games?.length > 0) {
                        // Find best match (first result is usually best for popular sort)
                        const game = json.data.games[0];
                        resolve(formatHLTBResult(game));
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        });

        req.on('error', () => resolve(null));
        req.setTimeout(10000, () => { req.destroy(); resolve(null); });
        req.end();
    });
}

/**
 * Format HLTB result into our data structure
 */
function formatHLTBResult(game) {
    const times = game.completionTimes || {};

    return {
        hltb_id: game.id,
        hltb_main: times.mainStory?.hours ? formatTime(times.mainStory.hours) : null,
        hltb_main_extra: times.mainPlusExtras?.hours ? formatTime(times.mainPlusExtras.hours) : null,
        hltb_completionist: times.completionist?.hours ? formatTime(times.completionist.hours) : null,
        hltb_url: `https://howlongtobeat.com/game/${game.id}`
    };
}

/**
 * Format hours to readable string
 */
function formatTime(hours) {
    if (!hours || hours === 0) return null;
    if (hours < 1) {
        return `${Math.round(hours * 60)} mins`;
    }
    // Round to 1 decimal, remove trailing .0
    const formatted = hours.toFixed(1).replace(/\.0$/, '');
    return `${formatted} hrs`;
}

/**
 * Process all games in a storefront directory
 */
async function processStorefront(storefront, testMode, forceMode, failedCache) {
    const storeDir = path.join(GAMES_DIR, storefront);

    if (!fs.existsSync(storeDir)) {
        console.log(`  Skipping ${storefront} - directory not found`);
        return { updated: 0, skipped: 0, cached: 0, failed: 0 };
    }

    const files = fs.readdirSync(storeDir).filter(f => f.endsWith('.json'));
    console.log(`\n📁 Processing ${storefront}: ${files.length} games`);

    let updated = 0, skipped = 0, cached = 0, failed = 0;

    for (const file of files) {
        const filePath = path.join(storeDir, file);
        const game = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Skip if already has HLTB data (unless force mode)
        if (game.hltb_main && !forceMode) {
            skipped++;
            continue;
        }

        // Skip if we recently tried and failed (unless force mode)
        const key = cacheKey(game.title);
        if (!forceMode && failedCache[key]) {
            cached++;
            continue;
        }

        console.log(`  🎮 ${game.title}...`);

        const hltbData = await fetchHLTBData(game.title);

        if (hltbData && hltbData.hltb_main) {
            if (testMode) {
                console.log(`    [TEST] Would add: Main=${hltbData.hltb_main}, Extra=${hltbData.hltb_main_extra}, 100%=${hltbData.hltb_completionist}`);
            } else {
                // Merge HLTB data into game object
                Object.assign(game, hltbData);
                fs.writeFileSync(filePath, JSON.stringify(game, null, 2));
                console.log(`    ✅ Main=${hltbData.hltb_main}, Extra=${hltbData.hltb_main_extra}, 100%=${hltbData.hltb_completionist}`);
            }
            // If this title was previously cached as failed, clear that.
            if (failedCache[key]) delete failedCache[key];
            updated++;
        } else {
            console.log(`    ❌ Not found on HLTB (cached for ${FAILED_CACHE_TTL_DAYS} days)`);
            if (!testMode) failedCache[key] = Date.now();
            failed++;
        }

        // Rate limiting
        await sleep(DELAY_MS);
    }

    return { updated, skipped, cached, failed };
}

/**
 * Main function
 */
async function main() {
    const args = process.argv.slice(2);
    const testMode = args.includes('--test');
    const forceMode = args.includes('--force');

    console.log('╔════════════════════════════════════════════╗');
    console.log('║    HowLongToBeat Data Enrichment Script    ║');
    console.log('╚════════════════════════════════════════════╝');

    if (testMode) {
        console.log('\n⚠️  TEST MODE - No files will be modified\n');
    }
    if (forceMode) {
        console.log('\n⚠️  FORCE MODE - Re-fetching all HLTB data (failed-cache ignored)\n');
    }

    const failedCache = loadFailedCache();
    const cacheStartSize = Object.keys(failedCache).length;
    if (cacheStartSize > 0) console.log(`  Loaded failed-cache: ${cacheStartSize} entries\n`);

    const totals = { updated: 0, skipped: 0, cached: 0, failed: 0 };

    for (const storefront of STOREFRONTS) {
        const result = await processStorefront(storefront, testMode, forceMode, failedCache);
        totals.updated += result.updated;
        totals.skipped += result.skipped;
        totals.cached += result.cached;
        totals.failed += result.failed;
    }

    if (!testMode) saveFailedCache(failedCache);

    const apiCalls = totals.updated + totals.failed;
    console.log('\n═══════════════════════════════════════════');
    console.log('                  Summary                   ');
    console.log('═══════════════════════════════════════════');
    console.log(`  ✅ Updated:           ${totals.updated}`);
    console.log(`  ⏭️  Skipped (have):   ${totals.skipped}`);
    console.log(`  💾 Skipped (cached):  ${totals.cached}  (recent fails, no API call)`);
    console.log(`  ❌ Failed:            ${totals.failed}`);
    console.log(`  📡 API calls used:    ${apiCalls}`);
    console.log('═══════════════════════════════════════════\n');
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
