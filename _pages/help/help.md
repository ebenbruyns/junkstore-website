---
layout: junkstore-page
title: "Junk Store Help — Steam Deck Non-Steam Gaming Help Hub"
hero_title: "Junk Store Help"
description: "Help hub for Junk Store on Steam Deck. Find frequently asked questions, troubleshooting fixes for game issues, quick tips for managing games, and step-by-step setup tutorials."
permalink: /help/
redirect_from:
  - /posts/d-wiki-resource/
  - /2.0-hub/
  - /deckyhelp/
  - /deckyhub/
  - /plugin/
  - /old-help/
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
    <p class="help-hub-card__desc">Step-by-step setup guides — Decky Plugin install, Pro install, GOG Extension, OAuth login, Proton versions, frame generation, and more.</p>
    <span class="help-hub-card__count">Setup &amp; how-to guides</span>
  </a>

  <!-- Generated from the junk-docs repository, one card per section.

       Split in two because a single card could not honestly describe both.
       The section began as extension authoring and was labelled "Developer
       Documentation"; it now also holds a user manual for everyday use, and
       that label was telling ordinary users to stay away from the one thing
       written for them.

       Counts and the group list are read from the collection, so both cards
       keep describing themselves correctly as the documentation grows,
       without anyone editing this file. Labels come from
       _data/doc_sections.yml, the same place the sidebar and breadcrumbs
       read them from. -->
  {%- assign doc_pages = site.docs | where_exp: "d", "d.doc_index != true" -%}
  {%- assign user_docs = doc_pages | where: "doc_section", "user" -%}
  {%- comment -%}
    Sorted by doc_order so the group list comes out in reading order,
    Guides then Concepts then Reference, matching the sidebar. Unsorted,
    site.docs comes back in path order and the card said "Concepts,
    Guides, Reference", contradicting the tree next to it.
  {%- endcomment -%}
  {%- assign ext_docs = doc_pages | where: "doc_section", "extensions" | sort: "doc_order" -%}
  {%- assign ext_groups = ext_docs | map: "doc_group" | uniq | where_exp: "g", "g != ''" -%}

  <a href="/docs/user/" class="help-hub-card">
    <h2 class="help-hub-card__title">{{ site.data.doc_sections.user.label | default: "User Manual" }}</h2>
    <p class="help-hub-card__desc">Using Junk Store Pro day to day: the menus, store tabs, installing and launching games, Proton and store settings, the File Manager, and diagnostics.</p>
    <span class="help-hub-card__count">{{ user_docs | size }} pages</span>
  </a>

  <a href="/docs/extensions/" class="help-hub-card">
    <h2 class="help-hub-card__title">{{ site.data.doc_sections.extensions.label | default: "Extensions" }}</h2>
    <p class="help-hub-card__desc">Adding new sources of games to Junk Store Pro: a storefront, an emulator, a folder of ROMs. Guides to get you started, plus concepts and reference.</p>
    <span class="help-hub-card__count">
      {{- ext_docs | size }} pages
      {%- for g in ext_groups -%}
        {%- assign gmeta = site.data.doc_sections.extensions.groups[g] -%}
        {%- if forloop.first %} &middot; {% else %}, {% endif -%}
        {{ gmeta.label | default: g | replace: "-", " " | capitalize }}
      {%- endfor -%}
    </span>
  </a>
</section>

<!-- ==================== MORE RESOURCES ==================== -->
<hr class="my-4">

<div class="resources-row">
  <a href="https://portal.junkstore.xyz/support" class="resource-card support" target="_blank" rel="noopener noreferrer">
    <span class="resource-icon"><i class="fas fa-headset"></i></span>
    <span class="resource-text"><strong>Support Tickets</strong></span>
  </a>
  <a href="/games/tested/" class="resource-card">
    <span class="resource-icon">🎮</span>
    <span class="resource-text"><strong>{% include games-count.html %}+ Games Tested</strong></span>
  </a>
  <!-- The repo carries build-pdf.sh, so this is also the route to a single
       PDF of the whole documentation set. -->
  <a href="https://github.com/SDK-Innovation/junk-docs" class="resource-card" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-github"></i></span>
    <span class="resource-text"><strong>Docs Source &amp; PDF</strong></span>
  </a>
  <a href="https://discord.gg/6mRUhR6Teh" class="resource-card discord" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-discord"></i></span>
    <span class="resource-text"><strong>Discord</strong></span>
  </a>
  <a href="https://www.reddit.com/r/JunkStore/" class="resource-card reddit" target="_blank" rel="noopener">
    <span class="resource-icon"><i class="fab fa-reddit"></i></span>
    <span class="resource-text"><strong>Reddit</strong></span>
  </a>
  <a href="https://lemmy.world/c/junkstore4deck" class="resource-card lemmy" target="_blank" rel="noopener">
    <span class="resource-icon"><img src="/assets/images/lemmy.svg" class="resource-icon-svg" alt="" aria-hidden="true" width="20" height="20"></span>
    <span class="resource-text"><strong>Lemmy</strong></span>
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
