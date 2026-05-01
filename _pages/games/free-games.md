---
layout: junkstore-page
title: "Free Games Right Now"
description: "Current free PC games on Epic, GOG, Amazon Prime Gaming, and itch — claim them before the deal ends."
permalink: /free-games/
hide_title: true
---

{%- assign feed = site.data.free-games -%}
{%- assign games = feed.games -%}
{%- assign now_unix = site.time | date: '%s' | plus: 0 -%}
{%- assign new_window_sec = 259200 -%}{%- comment -%}3 days{%- endcomment -%}

{%- comment -%}
  Pass 1: count newly-added entries that are still active. Used to decide
  whether to render the "Newly Added" strip header at all.
{%- endcomment -%}
{%- assign sorted_new = games | sort: 'first_seen' | reverse -%}
{%- assign newly_count = 0 -%}
{%- for entry in sorted_new -%}
  {%- assign first_iso = entry.first_seen | replace: ' ', 'T' | append: 'Z' -%}
  {%- assign first_unix = first_iso | date: '%s' | plus: 0 -%}
  {%- assign first_age = now_unix | minus: first_unix -%}
  {%- if first_age >= 0 and first_age < new_window_sec -%}
    {%- assign end_iso = entry.end_date | replace: ' ', 'T' -%}
    {%- unless end_iso contains 'Z' -%}{%- assign end_iso = end_iso | append: 'Z' -%}{%- endunless -%}
    {%- assign end_unix = end_iso | date: '%s' | plus: 0 -%}
    {%- if end_unix > now_unix and newly_count < 6 -%}
      {%- assign newly_count = newly_count | plus: 1 -%}
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}

{%- comment -%}Pass 2: count active entries for the main grid + empty-state.{%- endcomment -%}
{%- assign active_count = 0 -%}
{%- for entry in games -%}
  {%- assign end_iso = entry.end_date | replace: ' ', 'T' -%}
  {%- unless end_iso contains 'Z' -%}{%- assign end_iso = end_iso | append: 'Z' -%}{%- endunless -%}
  {%- assign end_unix = end_iso | date: '%s' | plus: 0 -%}
  {%- if end_unix > now_unix -%}{%- assign active_count = active_count | plus: 1 -%}{%- endif -%}
{%- endfor -%}

<div class="free-games-page">
  <header class="free-games-page__header">
    <h1>Free Right Now</h1>
    <p>Current giveaways from Epic, GOG, Amazon Prime Gaming, and itch, claim them before the deal ends.</p>
    <p class="free-games-page__caveat">Heads up: Amazon Prime Gaming giveaways require an active Amazon Prime subscription to claim.</p>
    {%- if feed.generated_at -%}
      <span class="free-games-page__updated">Updated {{ feed.generated_at | date: '%b %-d, %Y' }}</span>
    {%- endif -%}
  </header>

{%- if newly_count > 0 -%}
  <section class="free-games-page__new-section">
    <h2 class="free-games-page__section-title">Newly Added</h2>
    <div class="free-games-page__new-strip">
    {%- assign rendered_new = 0 -%}
    {%- for entry in sorted_new -%}
      {%- if rendered_new >= 6 -%}{%- break -%}{%- endif -%}
      {%- assign first_iso = entry.first_seen | replace: ' ', 'T' | append: 'Z' -%}
      {%- assign first_unix = first_iso | date: '%s' | plus: 0 -%}
      {%- assign first_age = now_unix | minus: first_unix -%}
      {%- assign end_iso = entry.end_date | replace: ' ', 'T' -%}
      {%- unless end_iso contains 'Z' -%}{%- assign end_iso = end_iso | append: 'Z' -%}{%- endunless -%}
      {%- assign end_unix = end_iso | date: '%s' | plus: 0 -%}
      {%- if first_age >= 0 and first_age < new_window_sec and end_unix > now_unix -%}
        {%- assign rendered_new = rendered_new | plus: 1 -%}
        {%- case entry.storefront -%}
          {%- when 'epic' -%}{%- assign badge_cls = 'epic' -%}{%- assign badge_label = 'Epic' -%}{%- assign cta_label = 'Epic Games' -%}
          {%- when 'gog' -%}{%- assign badge_cls = 'gog' -%}{%- assign badge_label = 'GOG' -%}{%- assign cta_label = 'GOG.com' -%}
          {%- when 'amazon' -%}{%- assign badge_cls = 'amazon' -%}{%- assign badge_label = 'Amazon' -%}{%- assign cta_label = 'Prime Gaming' -%}
          {%- when 'itchio' -%}{%- assign badge_cls = 'itch' -%}{%- assign badge_label = 'itch' -%}{%- assign cta_label = 'itch' -%}
          {%- else -%}{%- assign badge_cls = '' -%}{%- assign badge_label = entry.storefront -%}{%- assign cta_label = entry.storefront -%}
        {%- endcase -%}
      <a class="free-games-new-card" href="{{ entry.store_url | escape }}" target="_blank" rel="noopener" title="Claim on {{ cta_label | escape }}">
        {%- if entry.image -%}
          <img class="free-games-new-card__thumb" src="{{ entry.image | escape }}" alt="" loading="lazy" decoding="async">
        {%- else -%}
          <span class="free-games-new-card__thumb free-games-new-card__thumb--placeholder"></span>
        {%- endif -%}
        <div class="free-games-new-card__body">
          <div class="free-games-new-card__row">
            <span class="store-badge {{ badge_cls }}">{{ badge_label }}</span>
            <span class="free-games-new-card__title">{{ entry.title | escape }}</span>
          </div>
          {%- if entry.end_date_formatted -%}
            <div class="free-games-new-card__ends">Ends {{ entry.end_date_formatted | escape }}</div>
          {%- endif -%}
        </div>
        <span class="free-games-new-card__arrow">Claim →</span>
      </a>
      {%- endif -%}
    {%- endfor -%}
    </div>
  </section>
{%- endif -%}

{%- if active_count > 0 -%}
  <h2 class="free-games-page__section-title">All Current Giveaways</h2>
  <div class="free-games-page__grid">
  {%- for entry in games -%}
    {%- assign end_iso = entry.end_date | replace: ' ', 'T' -%}
    {%- unless end_iso contains 'Z' -%}{%- assign end_iso = end_iso | append: 'Z' -%}{%- endunless -%}
    {%- assign end_unix = end_iso | date: '%s' | plus: 0 -%}
    {%- if end_unix > now_unix -%}
      {%- case entry.storefront -%}
        {%- when 'epic' -%}{%- assign badge_cls = 'epic' -%}{%- assign badge_label = 'Epic' -%}{%- assign cta_label = 'Epic Games' -%}
        {%- when 'gog' -%}{%- assign badge_cls = 'gog' -%}{%- assign badge_label = 'GOG' -%}{%- assign cta_label = 'GOG.com' -%}
        {%- when 'amazon' -%}{%- assign badge_cls = 'amazon' -%}{%- assign badge_label = 'Amazon' -%}{%- assign cta_label = 'Prime Gaming' -%}
        {%- when 'itchio' -%}{%- assign badge_cls = 'itch' -%}{%- assign badge_label = 'itch' -%}{%- assign cta_label = 'itch' -%}
        {%- else -%}{%- assign badge_cls = '' -%}{%- assign badge_label = entry.storefront -%}{%- assign cta_label = entry.storefront -%}
      {%- endcase -%}
    <article class="free-games-card" data-end-date="{{ entry.end_date | escape }}">
      <div class="free-games-card__image">
        {%- if entry.image -%}
          <img class="free-games-card__img" src="{{ entry.image | escape }}" alt="" loading="lazy" decoding="async">
        {%- endif -%}
        <span class="store-badge {{ badge_cls }}">{{ badge_label }}</span>
      </div>
      <div class="free-games-card__body">
        <h2 class="free-games-card__title">{{ entry.title | escape }}</h2>
        <div class="free-games-card__meta">
          {%- if entry.original_price -%}<span class="strike">{{ entry.original_price | escape }}</span> {%- endif -%}
          <strong>Free</strong>
          {%- if entry.end_date_formatted %} <span class="ends">Ends {{ entry.end_date_formatted | escape }}</span>{%- endif -%}
        </div>
        <div class="free-games-card__actions">
          <a class="free-games-card__cta" href="{{ entry.store_url | escape }}" target="_blank" rel="noopener">Claim on {{ cta_label | escape }} →</a>
          {%- if entry.website_slug -%}
            <a class="free-games-card__tested-link" href="/games/{{ entry.storefront }}/{{ entry.website_slug }}/">View Steam Deck compatibility →</a>
          {%- endif -%}
        </div>
      </div>
    </article>
    {%- endif -%}
  {%- endfor -%}
  </div>
{%- else -%}
  <div class="free-games-page__empty">
    No active giveaways right now — check back soon.
  </div>
{%- endif -%}
</div>

<script>
// Defensive: if a card's end_date passed since build, hide it client-side so
// the page doesn't claim a deal that's already expired between deploys.
(function () {
  var now = Date.now();
  var cards = document.querySelectorAll('.free-games-card[data-end-date]');
  cards.forEach(function (el) {
    var raw = el.getAttribute('data-end-date');
    if (!raw) return;
    var iso = raw.replace(' ', 'T');
    if (!/Z$|[+-]\d{2}:?\d{2}$/.test(iso)) iso += 'Z';
    var t = Date.parse(iso);
    if (!isNaN(t) && t <= now) el.remove();
  });
})();
</script>
