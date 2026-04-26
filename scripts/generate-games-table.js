#!/usr/bin/env node
/**
 * generate-games-table.js
 *
 * Reads every per-game JSON under /assets/data/games/{storefront}/*.json
 * and emits a slim /assets/data/games-table.json containing only the fields
 * the games table at /games/tested/ actually displays, searches, or filters on.
 *
 * Run from the repo root:
 *   node scripts/generate-games-table.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const GAMES_DIR = path.join(REPO_ROOT, 'assets', 'data', 'games');
const OUT_FILE = path.join(REPO_ROOT, 'assets', 'data', 'games-table.json');

// Storefronts on disk (lowercase dir name) → display label used in the table JSON.
const STOREFRONTS = [
  { dir: 'epic',   label: 'Epic'   },
  { dir: 'gog',    label: 'GOG'    },
  { dir: 'amazon', label: 'Amazon' },
  { dir: 'itch.io', label: 'itch'  }
];

// Fields plucked from each per-game JSON (verbatim — same names as source).
const FIELDS = [
  'id',
  'title',
  'storefront',
  'decky_rating',
  'standalone_rating',
  'date_tested',
  'cant_test_linux',
  'publisher',
  'controller_input',
  'requires_eac_runtime',
  'databaseId'
];

function pluck(game, slug, label) {
  const out = { slug };
  for (const f of FIELDS) {
    if (game[f] !== undefined) out[f] = game[f];
  }
  out.storefront = label; // canonical table-friendly storefront value
  return out;
}

function main() {
  const games = [];
  const counts = {};

  for (const sf of STOREFRONTS) {
    const dir = path.join(GAMES_DIR, sf.dir);
    if (!fs.existsSync(dir)) {
      console.warn(`[warn] missing storefront dir: ${dir}`);
      counts[sf.label] = { total: 0 };
      continue;
    }
    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .filter(f => f !== 'index.json'); // companion-app manifest, not a game
    let n = 0;
    for (const file of files) {
      const slug = file.replace(/\.json$/, '');
      const game = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      if (!game.title) {
        console.warn(`[warn] skipping ${sf.dir}/${file} — no title field`);
        continue;
      }
      games.push(pluck(game, slug, sf.label));
      n++;
    }
    counts[sf.label] = { total: n };
  }

  const out = {
    generated_at: new Date().toISOString(),
    total_games: games.length,
    storefronts: counts,
    games
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2));
  console.log(`✅ Wrote ${games.length} games to ${OUT_FILE}`);
  for (const sf of STOREFRONTS) {
    console.log(`   ${sf.label}: ${counts[sf.label].total}`);
  }
}

main();
