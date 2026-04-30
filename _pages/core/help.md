---
layout: junkstore-page
title: "Junk Store Help — Steam Deck Non-Steam Gaming Help Hub"
hero_title: "Junk Store Help"
description: "Help hub for Junk Store on Steam Deck. Find frequently asked questions, troubleshooting fixes for game issues, quick tips for managing games, and step-by-step setup tutorials."
permalink: /help/
excerpt: " "
---
<!-- Help hub — landing page that points users to the four detail sections.
     Each section is its own URL so search engines and AI crawlers can index
     and cite them independently. -->

<div id="top"></div>

<section class="help-hub-grid">
  <a href="/help/faq/" class="help-hub-card">
    <h2 class="help-hub-card__title">FAQ</h2>
    <p class="help-hub-card__desc">Frequently asked questions about Junk Store, the trial, supported storefronts, and how Decky vs Pro compare.</p>
    <span class="help-hub-card__count">{{ site.data.faq.size }} questions</span>
  </a>

  <a href="/help/tips/" class="help-hub-card">
    <h2 class="help-hub-card__title">Quick Tips</h2>
    <p class="help-hub-card__desc">Short how-tos for managing games and tweaking settings — install/uninstall, save data, Proton, language, performance.</p>
    <span class="help-hub-card__count">{{ site.data.quicktips.size }} tips</span>
  </a>

  <a href="/help/troubleshooting/" class="help-hub-card">
    <h2 class="help-hub-card__title">Troubleshooting</h2>
    <p class="help-hub-card__desc">Fixes for common Steam Deck game issues — install errors, launch failures, controller, library, anti-cheat.</p>
    <span class="help-hub-card__count">{{ site.data.troubleshooting.size }} fixes</span>
  </a>

  <a href="/help/tutorials/" class="help-hub-card">
    <h2 class="help-hub-card__title">Tutorials</h2>
    <p class="help-hub-card__desc">Step-by-step setup guides — Decky Plugin install, Pro install, GOG Extension, OAuth login, Wine Cellar, frame generation, and more.</p>
    <span class="help-hub-card__count">Setup &amp; how-to guides</span>
  </a>
</section>

<!-- ==================== MORE RESOURCES ==================== -->
<hr class="my-4">

<div class="resources-row">
  <a href="/games/tested/" class="resource-card">
    <span class="resource-icon">🎮</span>
    <span class="resource-text"><strong><span data-games-count>900</span>+ Games Tested</strong></span>
  </a>
  <a href="https://discord.gg/6mRUhR6Teh" class="resource-card discord" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-discord"></i></span>
    <span class="resource-text"><strong>Discord</strong></span>
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" class="resource-card reddit" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-reddit"></i></span>
    <span class="resource-text"><strong>Reddit</strong></span>
  </a>
</div>

<!-- Backward-compat redirect: legacy /help/#xxx URLs (tab names or
     individual Q&A IDs) used to scroll within this single page. They now
     belong on sub-pages, so this script forwards them. The lookup map
     is built at build time from the same _data files the sub-pages use,
     so any new entry is automatically routable. -->
<script>
(function() {
  var hash = window.location.hash.substring(1);
  if (!hash) return;

  var TAB_TARGETS = {
    'faq': '/help/faq/',
    'quicktips': '/help/tips/',
    'tips': '/help/tips/',
    'troubleshooting': '/help/troubleshooting/',
    'tutorials': '/help/tutorials/'
  };

  if (TAB_TARGETS[hash]) {
    location.replace(TAB_TARGETS[hash]);
    return;
  }

  // Quick Tips IDs are prefixed with `qt-` per the rendering convention.
  if (hash.indexOf('qt-') === 0) {
    location.replace('/help/tips/#' + hash);
    return;
  }

  // Build lookup sets at compile time from the _data files. This map is
  // tiny (just IDs) so embedding it inline is fine.
  var FAQ_IDS = new Set({{ site.data.faq | map: "originalId" | compact | jsonify }});
  var TS_IDS  = new Set({{ site.data.troubleshooting | map: "originalId" | compact | jsonify }});

  if (FAQ_IDS.has(hash)) {
    location.replace('/help/faq/#' + hash);
  } else if (TS_IDS.has(hash)) {
    location.replace('/help/troubleshooting/#' + hash);
  }
  // Unknown hash — leave on hub.
})();
</script>
