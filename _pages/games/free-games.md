---
layout: junkstore-page
title: "Free Games Right Now"
description: "Current free PC games on Epic, GOG, Amazon Prime Gaming, and itch — claim them before the deal ends."
permalink: /free-games/
hide_title: true
---

<div class="free-games-page">
  <header class="free-games-page__header">
    <h1>Free Right Now</h1>
    <p>Current giveaways from Epic, GOG, Amazon Prime Gaming, and itch, claim them before the deal ends.</p>
    <p class="free-games-page__caveat">Heads up: Amazon Prime Gaming giveaways require an active Amazon Prime subscription to claim.</p>
    <span class="free-games-page__updated" id="freeGamesUpdated"></span>
  </header>

  <section id="freeGamesNewSection" class="free-games-page__new-section" hidden>
    <h2 class="free-games-page__section-title">Newly Added</h2>
    <div id="freeGamesNewStrip" class="free-games-page__new-strip"></div>
  </section>

  <h2 id="freeGamesAllTitle" class="free-games-page__section-title" hidden>All Current Giveaways</h2>
  <div id="freeGamesGrid" class="free-games-page__grid" hidden></div>

  <div id="freeGamesEmpty" class="free-games-page__empty" hidden>
    No active giveaways right now — check back soon.
  </div>

  <div id="freeGamesError" class="free-games-page__error" hidden>
    Couldn’t load the giveaway list. Please try again in a moment.
  </div>
</div>

<script src="/assets/js/free-games-overlay.js" defer></script>
<script>
(function () {
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Map exporter storefront keys → site's existing .store-badge modifier + display label
  var STORE_META = {
    epic:   { cls: 'epic',   label: 'Epic',     ctaLabel: 'Epic Games' },
    gog:    { cls: 'gog',    label: 'GOG',      ctaLabel: 'GOG.com' },
    amazon: { cls: 'amazon', label: 'Amazon',   ctaLabel: 'Prime Gaming' },
    itchio: { cls: 'itch',   label: 'itch',     ctaLabel: 'itch' }
  };

  function storeMeta(key) {
    return STORE_META[key] || { cls: '', label: key, ctaLabel: key };
  }

  function renderCard(entry) {
    var meta = storeMeta(entry.storefront);
    var img = entry.image ? 'background-image: url(' + JSON.stringify(entry.image).slice(1, -1) + ');' : '';
    var price = entry.original_price
      ? '<span class="strike">' + escapeHtml(entry.original_price) + '</span> <strong>Free</strong>'
      : '<strong>Free</strong>';
    var ends = entry.end_date_formatted
      ? '<span class="ends">Ends ' + escapeHtml(entry.end_date_formatted) + '</span>'
      : '';
    var testedLink = entry.website_slug
      ? '<a class="free-games-card__tested-link" href="/games/' + escapeHtml(entry.storefront) + '/' + escapeHtml(entry.website_slug) + '/">View Steam Deck compatibility →</a>'
      : '';

    return ''
      + '<article class="free-games-card">'
      +   '<div class="free-games-card__image" style="' + img + '">'
      +     '<span class="store-badge ' + meta.cls + '">' + escapeHtml(meta.label) + '</span>'
      +   '</div>'
      +   '<div class="free-games-card__body">'
      +     '<h2 class="free-games-card__title">' + escapeHtml(entry.title) + '</h2>'
      +     '<div class="free-games-card__meta">' + price + ' ' + ends + '</div>'
      +     '<div class="free-games-card__actions">'
      +       '<a class="free-games-card__cta" href="' + escapeHtml(entry.store_url) + '" target="_blank" rel="noopener">Claim on ' + escapeHtml(meta.ctaLabel) + ' →</a>'
      +       testedLink
      +     '</div>'
      +   '</div>'
      + '</article>';
  }

  // Compact horizontal card for the "Newly Added" strip
  function renderNewCard(entry) {
    var meta = storeMeta(entry.storefront);
    var ends = entry.end_date_formatted ? 'Ends ' + entry.end_date_formatted : '';
    return ''
      + '<a class="free-games-new-card" href="' + escapeHtml(entry.store_url) + '" target="_blank" rel="noopener" title="Claim on ' + escapeHtml(meta.ctaLabel) + '">'
      +   (entry.image
          ? '<img class="free-games-new-card__thumb" src="' + escapeHtml(entry.image) + '" alt="" loading="lazy">'
          : '<span class="free-games-new-card__thumb free-games-new-card__thumb--placeholder"></span>')
      +   '<div class="free-games-new-card__body">'
      +     '<div class="free-games-new-card__row">'
      +       '<span class="store-badge ' + meta.cls + '">' + escapeHtml(meta.label) + '</span>'
      +       '<span class="free-games-new-card__title">' + escapeHtml(entry.title) + '</span>'
      +     '</div>'
      +     (ends ? '<div class="free-games-new-card__ends">' + escapeHtml(ends) + '</div>' : '')
      +   '</div>'
      +   '<span class="free-games-new-card__arrow">Claim →</span>'
      + '</a>';
  }

  // Games first_seen within this window show in the "Newly Added" strip.
  var NEW_WINDOW_MS = 3 * 24 * 60 * 60 * 1000;  // 3 days
  var NEW_MAX = 6;  // cap so a big batch import doesn't flood the strip

  function isNewlyAdded(entry) {
    if (!entry.first_seen) return false;
    // first_seen comes from SQLite as "YYYY-MM-DD HH:MM:SS" (UTC); normalise.
    var t = Date.parse(String(entry.first_seen).replace(' ', 'T') + 'Z');
    if (isNaN(t)) return false;
    return (Date.now() - t) < NEW_WINDOW_MS;
  }

  function render(list, generatedAt) {
    var newSection = document.getElementById('freeGamesNewSection');
    var newStrip = document.getElementById('freeGamesNewStrip');
    var allTitle = document.getElementById('freeGamesAllTitle');
    var grid = document.getElementById('freeGamesGrid');
    var empty = document.getElementById('freeGamesEmpty');
    var stamp = document.getElementById('freeGamesUpdated');

    if (!list.length) {
      empty.hidden = false;
      return;
    }

    var newlyAdded = list.filter(isNewlyAdded)
      .slice()
      .sort(function (a, b) { return Date.parse(b.first_seen) - Date.parse(a.first_seen); })
      .slice(0, NEW_MAX);

    if (newlyAdded.length) {
      newStrip.innerHTML = newlyAdded.map(renderNewCard).join('');
      newSection.hidden = false;
      allTitle.hidden = false;
    }

    // Main grid is sorted by end_date ascending (soonest-expiring first).
    // Order is already that way from the exporter, but re-sort defensively.
    var byEnd = list.slice().sort(function (a, b) {
      return Date.parse(a.end_date) - Date.parse(b.end_date);
    });
    grid.innerHTML = byEnd.map(renderCard).join('');
    grid.hidden = false;

    if (generatedAt) {
      var d = new Date(generatedAt);
      if (!isNaN(d)) stamp.textContent = 'Updated ' + d.toLocaleString();
    }
  }

  function showError() {
    document.getElementById('freeGamesError').hidden = false;
  }

  // Use the overlay's load promise so we share a single fetch + filter pass.
  function init() {
    if (!window.FreeGames || !window.FreeGames.ready) {
      // Fallback: load directly if overlay script wasn't included for some reason
      fetch('/assets/data/free-games.json', { cache: 'no-cache' })
        .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
        .then(function (p) {
          var now = Date.now();
          var active = (p.games || []).filter(function (g) {
            var t = Date.parse(String(g.end_date).replace(' ', 'T'));
            return !isNaN(t) && t > now;
          });
          render(active, p.generated_at);
        })
        .catch(showError);
      return;
    }

    fetch('/assets/data/free-games.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function (p) {
        return window.FreeGames.ready().then(function (active) {
          render(active, p.generated_at);
        });
      })
      .catch(showError);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
</script>
