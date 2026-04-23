#!/usr/bin/env node
/**
 * Enrich GOG game JSON files with HowLongToBeat data scraped from the GOG store page.
 *
 * GOG embeds HLTB times directly on each product page in a stable HTML block:
 *   <div class="howlongtobeat-box">
 *     <span class="howlongtobeat-box__time">7.5 h</span>
 *     <span class="howlongtobeat-box__name">Main</span>
 *     ...
 *   </div>
 *   <a href="https://howlongtobeat.com/game/56879">HowLongToBeat</a>
 *
 * This avoids the RapidAPI HLTB quota for the GOG backfill.
 *
 * Usage:
 *   node scripts/enrich-hltb-from-gog.js          # Enrich GOG games missing HLTB data
 *   node scripts/enrich-hltb-from-gog.js --test   # Dry run, no writes
 *   node scripts/enrich-hltb-from-gog.js --force  # Re-fetch all (ignores failed-cache + existing data)
 *   node scripts/enrich-hltb-from-gog.js --limit 10  # Stop after 10 fetches (handy for sanity-checking)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const GOG_DIR = path.join(__dirname, '..', 'assets', 'data', 'games', 'gog');
const FAILED_CACHE_PATH = path.join(__dirname, 'gog-hltb-failed-cache.json');
const FAILED_CACHE_TTL_DAYS = 30;
const FAILED_CACHE_TTL_MS = FAILED_CACHE_TTL_DAYS * 24 * 60 * 60 * 1000;
const DELAY_MS = 1500; // Polite ~40 req/min

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function loadFailedCache() {
    try {
        if (!fs.existsSync(FAILED_CACHE_PATH)) return {};
        const raw = JSON.parse(fs.readFileSync(FAILED_CACHE_PATH, 'utf8'));
        const cutoff = Date.now() - FAILED_CACHE_TTL_MS;
        const pruned = {};
        let dropped = 0;
        for (const [k, ts] of Object.entries(raw)) {
            if (ts >= cutoff) pruned[k] = ts;
            else dropped++;
        }
        if (dropped) console.log(`  (Pruned ${dropped} stale failed-cache entries)`);
        return pruned;
    } catch (e) {
        console.warn(`  Could not load failed-cache: ${e.message}`);
        return {};
    }
}

function saveFailedCache(cache) {
    try { fs.writeFileSync(FAILED_CACHE_PATH, JSON.stringify(cache, null, 2)); }
    catch (e) { console.warn(`  Could not save failed-cache: ${e.message}`); }
}

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, {
            method: 'GET',
            headers: {
                // Pretend to be a normal browser; GOG serves the HLTB block to crawlers,
                // but a real UA also avoids any cf challenge response.
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        }, (res) => {
            if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
                const target = new URL(res.headers.location, url).toString();
                res.resume();
                // GOG redirects renamed/missing product pages to /games (the listings page).
                // That's a "URL is stale" signal, not a "no HLTB" signal — surface it as such
                // so the caller knows to clean up the URL rather than silently caching a fail.
                if (/gog\.com\/(?:[a-z]{2}\/)?games\/?$/i.test(target)) {
                    return reject(new Error(`stale URL — redirects to /games (slug renamed?)`));
                }
                return fetchHtml(target).then(resolve, reject);
            }
            if (res.statusCode !== 200) {
                res.resume();
                return reject(new Error(`HTTP ${res.statusCode}`));
            }
            let data = '';
            res.setEncoding('utf8');
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.setTimeout(15000, () => { req.destroy(new Error('timeout')); });
        req.end();
    });
}

// "7.5 h" / " 10 h " / "1 h 30 min" → "7.5 hrs" / "10 hrs" / "1.5 hrs" (rough match for existing format)
function normaliseTime(raw) {
    if (!raw) return null;
    const t = raw.trim();

    // "X h Y min"
    const hm = t.match(/(\d+)\s*h\s*(\d+)\s*min/i);
    if (hm) {
        const hrs = parseInt(hm[1], 10) + parseInt(hm[2], 10) / 60;
        return formatHours(hrs);
    }

    // "X.Y h" or "X h"
    const h = t.match(/(\d+(?:\.\d+)?)\s*h\b/i);
    if (h) return formatHours(parseFloat(h[1]));

    // "X min" (rare)
    const m = t.match(/(\d+)\s*min/i);
    if (m) {
        const mins = parseInt(m[1], 10);
        return mins < 60 ? `${mins} mins` : formatHours(mins / 60);
    }

    return null;
}

function formatHours(h) {
    if (!h || h === 0) return null;
    if (h < 1) return `${Math.round(h * 60)} mins`;
    return `${h.toFixed(1).replace(/\.0$/, '')} hrs`;
}

/**
 * Extract HLTB data from a GOG product page HTML string.
 * Returns { hltb_main, hltb_main_extra, hltb_completionist, hltb_url } or null.
 */
function parseHltbFromGog(html) {
    // Find the howlongtobeat-section block
    const sectionStart = html.indexOf('howlongtobeat-section');
    if (sectionStart === -1) return null;

    // Pull out a manageable slice (the section is short, ~3KB after this index)
    const slice = html.substring(sectionStart, Math.min(html.length, sectionStart + 8000));

    // Each box has __time then __name in that order
    const boxRe = /howlongtobeat-box__time">\s*([^<]+?)\s*<\/span>\s*<span class="howlongtobeat-box__name">\s*([^<]+?)\s*</g;
    const found = {};
    let m;
    while ((m = boxRe.exec(slice)) !== null) {
        const time = m[1].trim();
        const name = m[2].trim();
        const norm = normaliseTime(time);
        if (!norm) continue;
        if (/^Main$/i.test(name))                            found.hltb_main = norm;
        else if (/^Main\s*\+\s*Sides$/i.test(name))          found.hltb_main_extra = norm;
        else if (/^Completionist$/i.test(name))              found.hltb_completionist = norm;
    }

    // Pull the canonical HLTB URL
    const urlMatch = slice.match(/href="(https:\/\/howlongtobeat\.com\/game\/\d+)"/i);
    const hltb_url = urlMatch ? urlMatch[1] : null;
    if (hltb_url) found.hltb_url = hltb_url;
    if (urlMatch) {
        const idMatch = urlMatch[1].match(/\/game\/(\d+)/);
        if (idMatch) found.hltb_id = parseInt(idMatch[1], 10);
    }

    // Need at least main story to count this as a hit
    return found.hltb_main ? found : null;
}

async function main() {
    const args = process.argv.slice(2);
    const testMode = args.includes('--test');
    const forceMode = args.includes('--force');
    const limitIdx = args.indexOf('--limit');
    const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;

    console.log('╔══════════════════════════════════════════════════════════╗');
    console.log('║  Enrich GOG games with HLTB data scraped from gog.com    ║');
    console.log('╚══════════════════════════════════════════════════════════╝');
    if (testMode)  console.log('\n⚠️  TEST MODE - no files will be written');
    if (forceMode) console.log('\n⚠️  FORCE MODE - re-fetching all GOG games (cache + existing ignored)');
    if (limit !== Infinity) console.log(`\n⚠️  LIMIT - stopping after ${limit} successful fetches`);

    const failedCache = loadFailedCache();
    if (Object.keys(failedCache).length) console.log(`  Loaded failed-cache: ${Object.keys(failedCache).length} entries`);

    if (!fs.existsSync(GOG_DIR)) {
        console.error(`GOG dir not found: ${GOG_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(GOG_DIR).filter(f => f.endsWith('.json'));
    console.log(`\n📁 Scanning ${files.length} GOG games\n`);

    const totals = { updated: 0, skipped_have: 0, skipped_no_url: 0, skipped_cached: 0, failed: 0, stale_url: 0, fetched: 0 };
    const staleUrls = [];

    for (const file of files) {
        const filePath = path.join(GOG_DIR, file);
        const game = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        if (game.hltb_main && !forceMode) { totals.skipped_have++; continue; }
        if (!game.gog_url || !/^https?:\/\//.test(game.gog_url)) {
            totals.skipped_no_url++;
            continue;
        }
        if (!forceMode && failedCache[game.gog_url]) { totals.skipped_cached++; continue; }
        if (totals.fetched >= limit) break;

        process.stdout.write(`  🛒 ${game.title.padEnd(50).slice(0, 50)}  `);
        totals.fetched++;

        let html;
        try {
            html = await fetchHtml(game.gog_url);
        } catch (e) {
            // Stale URLs: don't cache — surface them so they get fixed
            if (e.message.startsWith('stale URL')) {
                console.log(`⚠️  STALE URL — ${game.gog_url}`);
                staleUrls.push({ title: game.title, url: game.gog_url, file: filePath });
                totals.stale_url++;
                if (!testMode && failedCache[game.gog_url]) delete failedCache[game.gog_url];
                await sleep(DELAY_MS);
                continue;
            }
            console.log(`❌ fetch error: ${e.message}`);
            if (!testMode) failedCache[game.gog_url] = Date.now();
            totals.failed++;
            await sleep(DELAY_MS);
            continue;
        }

        const data = parseHltbFromGog(html);
        if (!data) {
            console.log('— no HLTB section on page (cached)');
            if (!testMode) failedCache[game.gog_url] = Date.now();
            totals.failed++;
            await sleep(DELAY_MS);
            continue;
        }

        if (testMode) {
            console.log(`✅ would set Main=${data.hltb_main}, Extra=${data.hltb_main_extra ?? '—'}, 100%=${data.hltb_completionist ?? '—'}`);
        } else {
            Object.assign(game, data);
            fs.writeFileSync(filePath, JSON.stringify(game, null, 2));
            console.log(`✅ Main=${data.hltb_main}, Extra=${data.hltb_main_extra ?? '—'}, 100%=${data.hltb_completionist ?? '—'}`);
            // If this URL was previously cached as failed, clear it now that we have data
            if (failedCache[game.gog_url]) delete failedCache[game.gog_url];
        }
        totals.updated++;

        await sleep(DELAY_MS);
    }

    if (!testMode) saveFailedCache(failedCache);

    console.log('\n══════════════════════════════════════════════════════════');
    console.log('                       Summary                            ');
    console.log('══════════════════════════════════════════════════════════');
    console.log(`  ✅ Updated:                ${totals.updated}`);
    console.log(`  ⏭️  Skipped (have data):   ${totals.skipped_have}`);
    console.log(`  ⏭️  Skipped (no gog_url):  ${totals.skipped_no_url}`);
    console.log(`  💾 Skipped (recent fail):  ${totals.skipped_cached}`);
    console.log(`  ❌ Failed (no HLTB block): ${totals.failed}`);
    console.log(`  ⚠️  Stale URLs (need fix): ${totals.stale_url}`);
    console.log(`  🌐 Pages fetched:          ${totals.fetched}  (no API quota used)`);
    console.log('══════════════════════════════════════════════════════════');
    if (staleUrls.length) {
        console.log('\n⚠️  These gog_urls redirect to /games and need fixing in master DB:');
        for (const s of staleUrls) console.log(`     ${s.title.padEnd(45).slice(0, 45)}  →  ${s.url}`);
    }
    console.log('');
}

main().catch(err => { console.error('Fatal error:', err); process.exit(1); });
