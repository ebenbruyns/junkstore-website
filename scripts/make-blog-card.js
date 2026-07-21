#!/usr/bin/env node
/**
 * Make a blog card/teaser image that never gets cut off on the /blog/ page.
 *
 * The blog listing shows a post's `image:`/`header.teaser:` in TWO slots, both
 * `object-fit: cover` (see _sass/blog-landing.scss), which crop in OPPOSITE ways:
 *   - Featured card (newest post): ~4:3 -> crops the LEFT + RIGHT sides
 *   - Grid card (all other posts): 180px tall banner -> crops the TOP + BOTTOM
 * A post starts featured then drops into the grid, so its card must survive both.
 *
 * Cards are 1200x630. This script keeps all content inside the centered "safe
 * zone" (~62% width x ~57% height) that both crops leave intact.
 *
 * Usage:
 *   node scripts/make-blog-card.js <source-image> [--out path] [--bg '#0e141b'] [--full]
 *
 *   Default (pad):  fit the WHOLE source inside the safe zone on a solid canvas.
 *                   Use for screenshots / overlays whose content reaches the edges.
 *   --full:         resize-and-crop the source to fill 1200x630 (cover). Use only
 *                   for art already composed as a wide hero with centered subject.
 *
 * Output: defaults to <source-dir>/<name>-card.webp
 *
 * Requires ImageMagick (`magick`) on PATH.
 */

const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');

// Card canvas and safe zone. Safe fractions come from the two crop slots:
// featured keeps ~69% of width, grid keeps ~57% of height. We pad in a little.
const CARD_W = 1200;
const CARD_H = 630;
const SAFE_W = Math.round(CARD_W * 0.62); // 744
const SAFE_H = Math.round(CARD_H * 0.57); // 359

function fail(msg) {
  console.error('Error: ' + msg);
  process.exit(1);
}

function parseArgs(argv) {
  const args = { src: null, out: null, bg: '#0e141b', full: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--full') args.full = true;
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--bg') args.bg = argv[++i];
    else if (a.startsWith('--')) fail('unknown flag: ' + a);
    else if (!args.src) args.src = a;
    else fail('unexpected argument: ' + a);
  }
  return args;
}

function haveMagick() {
  try {
    execFileSync('magick', ['-version'], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.src) {
    fail('no source image given.\n  Usage: node scripts/make-blog-card.js <source-image> [--out path] [--bg color] [--full]');
  }
  if (!fs.existsSync(args.src)) fail('source not found: ' + args.src);
  if (!haveMagick()) fail("ImageMagick 'magick' not found on PATH.");

  const dir = path.dirname(args.src);
  const base = path.basename(args.src, path.extname(args.src));
  const out = args.out || path.join(dir, base + '-card.webp');

  const quality = ['-quality', '88', '-define', 'webp:method=6'];

  let cmd;
  if (args.full) {
    // Cover: fill 1200x630, crop overflow, centered.
    cmd = [args.src, '-resize', `${CARD_W}x${CARD_H}^`, '-gravity', 'center',
      '-extent', `${CARD_W}x${CARD_H}`, ...quality, out];
  } else {
    // Pad: fit whole source inside the safe zone, centered on a solid canvas.
    cmd = [args.src, '-resize', `${SAFE_W}x${SAFE_H}`,
      '(', '-size', `${CARD_W}x${CARD_H}`, `xc:${args.bg}`, ')',
      '+swap', '-gravity', 'center', '-composite', ...quality, out];
  }

  execFileSync('magick', cmd, { stdio: 'inherit' });
  console.log(`Wrote ${out} (${CARD_W}x${CARD_H}, ${args.full ? 'cover' : 'safe-zone pad'})`);
}

main();
