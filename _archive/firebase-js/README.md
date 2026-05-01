# Archived Firebase loader JS

These three JS files used to fetch dynamic content (FAQ, troubleshooting,
banners, pricing, uptime, testimonials) from Firebase via the Cloudflare
Worker cache (`api.junkstore.xyz`).

They were archived on **2026-05-01** when the website moved all
Firebase-backed dynamic content to static `_data/*.yml` files written by the
companion app (`junkstore-games-tested/services/*Sync.js`). The site now
renders that data at build time, no client-side fetch.

## Files in this archive

| File | What it did | Replaced by |
|---|---|---|
| `firebase-cache-client.js` | Generic helper exposing `window.fetchCachedCollection` / `fetchCachedDocument` against the Cloudflare Worker cache | Nothing — no live code calls it any more |
| `firebase-faq.js` | Loaded `/help/faq/` content from Firestore at runtime | Static render from `_data/faq.json` (was already removed earlier — this file became orphaned then) |
| `firebase-troubleshooting.js` | Loaded `/help/troubleshooting/` content from Firestore at runtime | Static render from `_data/troubleshooting.json` (same — orphaned earlier) |

## Files renamed but kept active (not archived)

These two also originally fetched from Firebase but were rewritten to read
build-time-injected static data instead. They live on under non-Firebase names:

| Old name | New name | What it does now |
|---|---|---|
| `firebase-pricing.js` | `assets/js/pricing.js` | Reads `window.JS_PRICING` (injected by `_includes/pricing-config.html` from `_data/pricing.yml`) and rewrites `data-pricing="..."` attributes site-wide. No Firebase call. |
| `firebase-testimonials.js` | `assets/js/testimonials-rotation.js` | Cycles the `.active` class across testimonial cards on the homepage every 6 s. No Firebase call — testimonials are now rendered server-side from `_data/testimonials.yml`. |

## Files deleted outright (not archived)

| File | Reason |
|---|---|
| `firebase-banner.js` | Banner rendering moved fully into Liquid in `_includes/promo-banner.html` |
| `firebase-uptime.js` | Status/uptime page rendering moved fully into Liquid in `_pages/core/status.md`. A small inline `[data-uptime-days]` updater handles the live day count. |

## If you need to restore one

1. Move the file back to `assets/js/`
2. Add a `<script src="/assets/js/<filename>" defer></script>` tag to
   `_includes/scripts.html`
3. Re-add a container element with the expected `id="..."` (each loader
   targets a specific element ID — see the file's source for the ID)

## Why archive instead of delete

These files contain working examples of fetching from the Cloudflare Worker
cache (URL, headers, error handling). If you ever need to re-add a
Firebase-backed feature, copy from here rather than rebuilding from scratch.
