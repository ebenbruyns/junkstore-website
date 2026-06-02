---
layout: junkstore-page
title: "Game Franchises Tested on Steam Deck"
description: "Browse every game franchise tested with Junk Store on Steam Deck. See all entries in each series and their compatibility status across Epic, GOG, Amazon and itch."
permalink: /franchises/
hide_title: true
---

<style>
{% include franchise-page-styles.css %}
{% include franchises-hub-styles.css %}
</style>

<div class="breadcrumb-bar breadcrumb-bar--no-cta">
  <span class="breadcrumb-trail">
    <a href="/">Home</a> / <a href="/games/">Games</a> / Franchises
  </span>
</div>

<div class="franchise-body">
  <header class="franchise-header">
    <p class="franchise-header__kicker">Browse</p>
    <h1 class="franchise-header__title">Game Franchises</h1>
    <p class="franchise-header__sub">{{ site.franchises | size }} franchises tested with Junk Store on Steam Deck. Click any franchise to see all its games and per-store compatibility ratings.</p>
  </header>

  {%- comment -%}
    Group franchises by first letter of franchise_name so the page reads as an
    alphabetical index. Each tile shows franchise name + member count + link.
  {%- endcomment -%}
  {%- assign sorted = site.franchises | sort: "franchise_name" -%}
  {%- assign letters = "" | split: "" -%}
  {%- for f in sorted -%}
    {%- assign first = f.franchise_name | slice: 0 | upcase -%}
    {%- unless letters contains first -%}{%- assign letters = letters | push: first -%}{%- endunless -%}
  {%- endfor -%}

  <nav class="franchises-jump" aria-label="Jump to letter">
    {%- for l in letters -%}
      <a href="#letter-{{ l }}">{{ l }}</a>
    {%- endfor -%}
  </nav>

  {%- for letter in letters -%}
    <section class="franchises-letter-group" id="letter-{{ letter }}">
      <h2 class="franchises-letter-group__heading">{{ letter }}</h2>
      <div class="franchises-grid">
        {%- for f in sorted -%}
          {%- assign first = f.franchise_name | slice: 0 | upcase -%}
          {%- if first == letter -%}
        <a href="{{ f.url }}" class="franchise-tile">
          {%- if f.cover_image and f.cover_image != "" -%}
          <span class="franchise-tile__icon"><img src="{{ f.cover_image }}" alt="" loading="lazy"></span>
          {%- else -%}
          <span class="franchise-tile__icon franchise-tile__icon--placeholder">{{ f.franchise_name | slice: 0 | upcase }}</span>
          {%- endif -%}
          <span class="franchise-tile__name">{{ f.franchise_name }}</span>
          <span class="franchise-tile__count">{{ f.member_count }}</span>
        </a>
          {%- endif -%}
        {%- endfor -%}
      </div>
    </section>
  {%- endfor -%}
</div>

<div class="back-section">
  <a href="/games/tested/" class="back-link">← Back to Game Database</a>
</div>
