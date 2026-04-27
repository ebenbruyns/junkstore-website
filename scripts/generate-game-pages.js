#!/usr/bin/env node
/**
 * Generate Jekyll game pages from JSON data files
 *
 * Usage:
 *   node scripts/generate-game-pages.js           # Incremental (changed only)
 *   node scripts/generate-game-pages.js --force   # Regenerate ALL pages
 *
 * This script reads game JSON files from /assets/data/games/{storefront}/
 * and generates Jekyll markdown files in /_games/{storefront}/
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'assets/data/games');
const OUTPUT_DIR = path.join(ROOT_DIR, '_games');

const STOREFRONTS = ['epic', 'gog', 'amazon', 'itch.io'];

// Parse command line args
const args = process.argv.slice(2);
const FORCE_ALL = args.includes('--force') || args.includes('-f');

// Check if file needs updating
function needsUpdate(jsonPath, mdPath) {
  if (FORCE_ALL) return true;

  try {
    if (!fs.existsSync(mdPath)) return true;

    const jsonStats = fs.statSync(jsonPath);
    const mdStats = fs.statSync(mdPath);

    // Update if JSON is newer than MD
    return jsonStats.mtime > mdStats.mtime;
  } catch {
    return true;
  }
}

// Mapping for readable status text
const STATUS_TEXT = {
  'green': 'Works Great',
  'yellow': 'Some Setup Required',
  'red': 'Advanced Setup Required',
  'broken': 'Currently Broken',
  'unsupported': 'Not Supported'
};

// Mapping for controller input
const CONTROLLER_TEXT = {
  'native': 'Native',
  'steam_input': 'Steam Input',
  'community': 'Community Layout',
  'none': 'None',
  '': 'Unknown'
};

// Format date for display
function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

// Escape YAML special characters
function escapeYaml(str) {
  if (!str) return '';
  // Always escape quotes first
  const escaped = str.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  // If string contains special chars, wrap in quotes
  if (/[:\[\]{}#&*!|>'"%@`]/.test(str) || str.includes('\n') || str.includes("'")) {
    return `"${escaped}"`;
  }
  return str;
}

// Safely escape title for YAML (remove existing quotes, escape special chars)
function escapeTitle(str) {
  if (!str) return '';
  // Remove wrapping quotes if present
  let clean = str.replace(/^["']|["']$/g, '');
  // Escape internal quotes and special chars
  const escaped = clean.replace(/"/g, '\\"').replace(/\n/g, '\\n');
  return escaped;
}

// Generate slug from storefront folder name
function normalizeStorefront(storefront) {
  // itch.io -> itch
  return storefront.replace('.io', '');
}

// Get store URL based on storefront
function getStoreUrl(game) {
  if (game.epic_url) return game.epic_url;
  if (game.gog_url) return game.gog_url;
  if (game.itch_url) return game.itch_url;

  // Generate default URLs if not provided
  const slug = game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  switch (game.storefront?.toLowerCase()) {
    case 'epic':
      return `https://store.epicgames.com/en-US/p/${slug}`;
    case 'gog':
      return `https://www.gog.com/game/${slug}`;
    case 'itch':
    case 'itch.io':
      return ''; // Can't generate itch URLs reliably
    case 'amazon':
      return ''; // Can't generate Amazon URLs reliably
    default:
      return '';
  }
}

// Generate front matter for a game
function generateFrontMatter(game, storefrontKey) {
  const slug = path.basename(game._sourceFile, '.json');
  const storefront = normalizeStorefront(storefrontKey);

  return `---
layout: game-page
title: "${escapeTitle(game.title)} - Steam Deck Compatibility"
game_title: "${escapeTitle(game.title)}"
slug: "${slug}"
storefront: "${game.storefront || storefrontKey}"
storefront_key: "${storefront}"
permalink: /games/${storefront}/${slug}/

# Compatibility
decky_rating: "${game.decky_rating || ''}"
standalone_rating: "${game.standalone_rating || ''}"
date_tested: "${game.date_tested || ''}"
proton_version: "${game.proton_version || ''}"

# Game Info
publisher: ${escapeYaml(game.publisher || '')}
developer: ${escapeYaml(game.developer || '')}
genre: ${escapeYaml(game.genre || '')}
franchise: ${escapeYaml(game.franchise || '')}
age_rating_summary: ${escapeYaml(game.age_rating_summary || '')}
release_date: "${formatDate(game.release_date || game.releasedate)}"
game_modes: ${JSON.stringify(game.game_modes || [])}
languages: ${JSON.stringify(game.languages || [])}
tags_structured: ${JSON.stringify(game.tags_structured || [])}
igdb_url: "${game.igdb_url || ''}"
was_free_before: ${game.was_free_before === true}
giveaway_events: ${JSON.stringify(game.giveaway_events || [])}

# Images
banner_image: "${game.banner_image || ''}"
cover_image: "${game.vertical_artwork || ''}"
icon_image: "${game.icon_image || ''}"

# Technical Details
controller_input: "${game.controller_input || ''}"
community_layout: ${game.community_layout || false}
required_launcher: "${game.required_launcher || ''}"
requires_account_setup: ${game.requires_account_setup || false}
account_type: "${game.account_type || ''}"

# Epic Features
requires_eos: ${game.requires_eos || false}
supports_eos: ${game.supports_eos || false}
epic_achievements: ${game.epic_achievements || false}
epic_offline_mode: ${game.epic_offline_mode || false}
epic_cloud_saves: ${game.epic_cloud_saves || false}
must_be_online: ${game.must_be_online || false}

# Anti-Cheat
requires_eac_runtime: ${game.requires_eac_runtime || false}
requires_battleye_runtime: ${game.requires_battleye_runtime || false}
cant_test_linux: ${game.cant_test_linux || false}

# HowLongToBeat
hltb_main: "${game.hltb_main || ''}"
hltb_main_extra: "${game.hltb_main_extra || ''}"
hltb_completionist: "${game.hltb_completionist || ''}"
hltb_url: "${game.hltb_url || ''}"

# Links
store_url: "${getStoreUrl(game)}"
protondb_url: "${game.protondb_url || game.protondb || ''}"
protondb_report_url: "${game.protondb_report_url || ''}"
pcgamingwiki_url: "${game.pcgamingwiki_url || game.pc_gaming_wiki_url || ''}"
metacritic_score: ${game.metacritic_score || ''}
metacritic_url: "${game.metacritic_url || ''}"

# Notes
notes: ${escapeYaml(game.notes || '')}
controller_config: ${escapeYaml(game.controller_config || '')}
performance_notes: ${escapeYaml(game.performance_notes || '')}
known_issues: ${escapeYaml(game.known_issues || '')}

# Meta
database_id: "${game.databaseId || ''}"
is_featured: ${game.is_featured || false}
owned: ${game.owned === false ? 'false' : 'true'}
---

${game.description || ''}
`;
}

// Process all games in a storefront
function processStorefront(storefrontKey) {
  const inputDir = path.join(DATA_DIR, storefrontKey);
  const outputDir = path.join(OUTPUT_DIR, normalizeStorefront(storefrontKey));

  if (!fs.existsSync(inputDir)) {
    console.log(`  Skipping ${storefrontKey} - directory not found`);
    return { updated: 0, skipped: 0 };
  }

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.json') && f !== 'index.json');
  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    try {
      const jsonPath = path.join(inputDir, file);
      const mdPath = path.join(outputDir, file.replace('.json', '.md'));

      // Check if update is needed (incremental mode)
      if (!needsUpdate(jsonPath, mdPath)) {
        skipped++;
        continue;
      }

      const game = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      game._sourceFile = file;

      const mdContent = generateFrontMatter(game, storefrontKey);

      fs.writeFileSync(mdPath, mdContent);
      updated++;
    } catch (err) {
      console.error(`  Error processing ${file}: ${err.message}`);
    }
  }

  return { updated, skipped };
}

// Main execution
function main() {
  console.log('Generating game pages from JSON data...');
  if (FORCE_ALL) {
    console.log('Mode: FORCE (regenerating all pages)\n');
  } else {
    console.log('Mode: INCREMENTAL (only changed files)\n');
  }

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let totalUpdated = 0;
  let totalSkipped = 0;

  for (const storefront of STOREFRONTS) {
    console.log(`Processing ${storefront}...`);
    const { updated, skipped } = processStorefront(storefront);
    if (updated > 0 || skipped > 0) {
      console.log(`  Updated: ${updated}, Skipped: ${skipped}`);
    }
    totalUpdated += updated;
    totalSkipped += skipped;
  }

  console.log(`\nSummary:`);
  console.log(`  Updated: ${totalUpdated} pages`);
  console.log(`  Skipped: ${totalSkipped} pages (unchanged)`);
  console.log(`  Total:   ${totalUpdated + totalSkipped} pages`);

  if (totalUpdated === 0 && totalSkipped > 0) {
    console.log('\nNo changes detected. Use --force to regenerate all pages.');
  }
}

main();
