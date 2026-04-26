#!/usr/bin/env node
/**
 * Generate assets/data/recently-tested.json from weekly-update post frontmatter.
 *
 * Reads each post in _posts/weekly-updates/*.md, looks for a `featured_games:`
 * block in the frontmatter, sorts posts newest-first by `date:`, accumulates
 * games (deduped by `store|slug`, keeping the newest occurrence), slices to
 * MAX_GAMES, and writes the output JSON.
 *
 * Usage:
 *   node scripts/generate-recently-tested.js
 *
 * Expected frontmatter on a weekly post:
 *   featured_games:
 *     - { store: epic, slug: the-stone-of-madness }
 *     - { store: gog,  slug: snake-core }
 *
 * (Block form also accepted:
 *     - store: epic
 *       slug: the-stone-of-madness
 * )
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, '_posts', 'weekly-updates');
const OUTPUT = path.join(ROOT, 'assets', 'data', 'recently-tested.json');
const MAX_GAMES = 12;

/**
 * Extract just the frontmatter region of a post.
 */
function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : null;
}

/**
 * Read a top-level scalar field from frontmatter (e.g. `date: ...`, `slug: ...`).
 */
function readField(fm, name) {
  const re = new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm');
  const m = fm.match(re);
  if (!m) return null;
  return m[1].replace(/^["']|["']$/g, '').trim();
}

/**
 * Parse the `featured_games:` block. Supports both inline-flow and block style.
 */
function parseFeaturedGames(fm) {
  // Find the `featured_games:` line, then gather every indented continuation
  // line until we hit another top-level key or EOF. This is more robust than a
  // single regex when the block's terminator can be either a top-level key or
  // the end of the frontmatter string.
  const lines = fm.split('\n');
  const startIdx = lines.findIndex(l => /^featured_games:/.test(l));
  if (startIdx === -1) return [];
  const blockLines = [];
  for (let i = startIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line === '' || /^\s/.test(line)) {
      blockLines.push(line);
    } else {
      break; // hit a non-indented line — start of next top-level key
    }
  }
  const block = blockLines.join('\n');

  const games = [];

  // Try inline-flow form first: `- { store: epic, slug: foo }`
  const inlineRe = /^\s*-\s*\{\s*([^}]+)\}\s*$/gm;
  let im;
  while ((im = inlineRe.exec(block)) !== null) {
    const fields = {};
    im[1].split(',').forEach(pair => {
      const idx = pair.indexOf(':');
      if (idx === -1) return;
      const k = pair.slice(0, idx).trim();
      const v = pair.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      if (k) fields[k] = v;
    });
    if (fields.store && fields.slug) games.push(fields);
  }
  if (games.length > 0) return games;

  // Fall back to block form: `- store: epic\n  slug: foo`
  let current = null;
  block.split('\n').forEach(line => {
    if (!line.trim()) return;
    const dash = line.match(/^\s*-\s*(\w+):\s*(.+?)\s*$/);
    const cont = line.match(/^\s+(\w+):\s*(.+?)\s*$/);
    if (dash) {
      if (current && current.store && current.slug) games.push(current);
      current = {};
      current[dash[1]] = dash[2].replace(/^["']|["']$/g, '').trim();
    } else if (cont && current) {
      current[cont[1]] = cont[2].replace(/^["']|["']$/g, '').trim();
    }
  });
  if (current && current.store && current.slug) games.push(current);

  return games;
}

function parsePost(filePath) {
  const fm = readFrontmatter(filePath);
  if (!fm) return null;
  const date = readField(fm, 'date');
  if (!date) return null;
  const slug = readField(fm, 'slug');
  const featured = parseFeaturedGames(fm);
  return {
    filePath,
    date,
    slug,
    featured_games: featured,
  };
}

function postUrlFor(post) {
  // Posts publish under /blog/<slug>/ — confirmed by inspecting _site/blog.
  if (post.slug) return `/blog/${post.slug}/`;
  // Fallback: derive from the YYYY-MM-DD-name.md filename.
  const base = path.basename(post.filePath, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return `/blog/${base}/`;
}

function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`Posts directory not found: ${POSTS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(POSTS_DIR, f));

  const posts = files
    .map(parsePost)
    .filter(p => p && p.featured_games.length > 0)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

  // Accumulate, dedupe by `store|slug` keeping first (= newest) occurrence.
  const seen = new Set();
  const games = [];
  for (const post of posts) {
    if (games.length >= MAX_GAMES) break;
    const featuredIn = post.date.slice(0, 10); // YYYY-MM-DD
    const postUrl = postUrlFor(post);
    for (const g of post.featured_games) {
      if (games.length >= MAX_GAMES) break;
      const key = `${g.store}|${g.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      games.push({
        store: g.store,
        slug: g.slug,
        featured_in: featuredIn,
        post_url: postUrl,
      });
    }
  }

  const output = {
    generated_at: new Date().toISOString(),
    games,
  };

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2) + '\n');
  console.log(`Wrote ${games.length} games to ${path.relative(ROOT, OUTPUT)}`);
  if (games.length === 0) {
    console.log('(no posts have featured_games: frontmatter yet — carousel will fall back to date_tested logic)');
  }
}

main();
