---
layout: junkstore-page
title: "Junk Store FAQ — Steam Deck Non-Steam Gaming Questions Answered"
hero_title: "Junk Store FAQ"
description: "Frequently asked questions about Junk Store on Steam Deck. Covers Epic Games, GOG, Amazon Prime Gaming and itch integration, pricing, the free trial, Decky Plugin vs Pro Version differences, anti-cheat, and game compatibility."
permalink: /help/faq/
excerpt: " "
---
{% include content-schema.html type="faq" %}
{% include help/nav-tabs.html active="faq" counter_label="questions" search_placeholder="Search FAQ..." %}

{::nomarkdown}
<div id="faq-content-redesign" class="faq-collapsible">
{%- assign faq_items = site.data.faq -%}
{%- for category in site.data.faq_categories -%}
  {%- assign cat_items = faq_items | where: "category", category -%}
  {%- if cat_items.size > 0 -%}
  <div class="category-accordion{%- if forloop.first %} expanded{%- endif %}" data-category="{{ category }}">
    <div class="category-header" onclick="toggleCategory(this)">
      <h3><span class="expand-icon">▶</span> {{ category }} <span class="category-count">{{ cat_items.size }}</span></h3>
    </div>
    <div class="category-content">
      {%- for item in cat_items -%}
        {%- assign anchor_id = item.originalId | default: item.id -%}
        {%- assign product = item.product | default: 'both' -%}
        {%- if product == 'decky' -%}{%- assign badge = 'Decky' -%}
        {%- elsif product == 'pro' -%}{%- assign badge = 'Pro' -%}
        {%- elsif product == 'version-specific' -%}{%- assign badge = 'Version Specific' -%}
        {%- else -%}{%- assign badge = 'Universal' -%}{%- endif %}
      <details class="faq-item-compact" id="{{ anchor_id }}" data-product="{{ product }}">
        <summary>
          <span class="question-text">{{ item.question }}</span>
          <span class="product-badge {{ product }}-badge">{{ badge }}</span>
          <button class="permalink-btn" data-id="{{ anchor_id }}" title="Copy link to this item">🔗</button>
        </summary>
        <div class="faq-answer">{{ item.answer }}</div>
      </details>
      {%- endfor %}
    </div>
  </div>
  {%- endif -%}
{%- endfor %}
</div>
{:/}

<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<script src="{{ '/assets/js/help-page.js' | relative_url }}" defer></script>
