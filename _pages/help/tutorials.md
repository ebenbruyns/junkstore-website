---
layout: junkstore-page
title: "Junk Store Tutorials — Step-by-Step Guides for Steam Deck"
hero_title: "Junk Store Tutorials"
description: "Step-by-step setup tutorials for Junk Store on Steam Deck — Decky Plugin install, Pro install, GOG Extension setup, OAuth login, Proton versions, Wine Cellar, frame generation, language settings, Ubisoft games, and more."
permalink: /help/tutorials/
redirect_from:
  - /2.0tutorials/
  - /tutorials/
  - /plugin_tutorials/
excerpt: " "
---
{% include help/nav-tabs.html active="tutorials" counter_label="tutorials" search_placeholder="Search tutorials..." %}

<div id="tutorials-content">

{%- for sec in site.data.tutorial_sections -%}
<!-- {{ sec.label }} Section -->
<h2 class="text-center">{{ sec.label }}</h2>
<div class="tutorial-grid">
  {%- if sec.slug == "installation" -%}
  <div class="tutorial-item pro" data-category="pro">
    <h4><a href="/get_started/">Getting Started with Junk Store Pro</a></h4>
    <p>Quick start guide for Junk Store Pro - get up and running fast</p>
    <span class="tutorial-tag pro-tag">Pro Version</span>
  </div>
  {%- endif -%}
  {%- assign sectutorials = site.tutorials | where: "section", sec.slug | sort: "order" -%}
  {%- for t in sectutorials -%}
  <div class="tutorial-item {{ t.category }}" data-category="{{ t.category }}">
    <h4><a href="{{ t.url }}">{{ t.card_title | default: t.title }}</a></h4>
    <p>{{ t.card_blurb }}</p>
    {%- case t.category -%}
      {%- when 'decky' -%}<span class="tutorial-tag decky-tag">Decky Plugin</span>
      {%- when 'pro' -%}<span class="tutorial-tag pro-tag">Pro Version</span>
      {%- else -%}<span class="tutorial-tag both-tag">Universal</span>
    {%- endcase -%}
  </div>
  {%- endfor -%}
</div>

<hr class="my-4">
{%- endfor -%}

<!-- Quick Tips & Tricks Section -->
<h2 class="text-center">Quick Tips & Tricks</h2>
<div class="tips-grid">
{% assign tips = site.posts | where_exp: "post", "post.path contains '_posts/tips/'" | sort: "date" | reverse %}
{% for tip in tips limit: 12 %}
  {% assign product = tip.categories | join: " " | downcase %}
  {% if product contains "decky" %}
    {% assign item_class = "decky" %}
    {% assign tag_class = "decky-tag" %}
    {% assign tag_label = "Decky Plugin" %}
  {% elsif product contains "pro" %}
    {% assign item_class = "pro" %}
    {% assign tag_class = "pro-tag" %}
    {% assign tag_label = "Pro Version" %}
  {% else %}
    {% assign item_class = "both" %}
    {% assign tag_class = "both-tag" %}
    {% assign tag_label = "Universal" %}
  {% endif %}
  {% assign tip_words = tip.content | strip_html | number_of_words %}
  {% assign tip_minutes = tip_words | divided_by: 200 | at_least: 1 %}
  <div class="tip-item {{ item_class }}" data-product="{{ item_class }}">
    <h4><a href="{{ tip.url }}">{{ tip.title | remove: "Tip of the Week: " }}</a></h4>
    <p>{{ tip.excerpt | strip_html | truncate: 100 }}</p>
    <span class="tip-tag">{{ tip_minutes }} min read</span>
    <span class="tutorial-tag {{ tag_class }}">{{ tag_label }}</span>
  </div>
{% endfor %}
</div>

{%- assign all_tips_count = site.posts | where_exp: "post", "post.path contains '_posts/tips/'" | size -%}
{%- if all_tips_count > 12 -%}
<p class="text-center" style="margin-top: 1.5rem;">
  <a href="/blog/?category=Tips%20%26%20Tricks">See all {{ all_tips_count }} tips →</a>
</p>
{%- endif -%}

</div>

<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<script src="{{ '/assets/js/help-page.js' | relative_url }}" defer></script>
