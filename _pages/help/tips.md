---
layout: junkstore-page
title: "Junk Store Quick Tips — Steam Deck Game Settings & Management"
hero_title: "Junk Store Quick Tips"
description: "Quick how-to tips for managing non-Steam games on Steam Deck through Junk Store: installing and uninstalling games, save data, DLC, custom Proton versions, language settings, offline mode, performance and frame generation, and anti-cheat dependencies."
permalink: /help/tips/
excerpt: " "
---
{% include content-schema.html type="quicktips" %}
{% include help/nav-tabs.html active="tips" counter_label="tips" search_placeholder="Search quick tips..." %}

{::nomarkdown}
<div id="quicktips-content" class="faq-collapsible">
{%- assign qt_items = site.data.quicktips -%}
{%- for category in site.data.quicktips_categories -%}
  {%- assign cat_items = qt_items | where: "category", category -%}
  {%- if cat_items.size > 0 -%}
  <div class="category-accordion{%- if forloop.first %} expanded{%- endif %}" data-category="{{ category }}">
    <div class="category-header" onclick="toggleCategory(this)">
      <h3><span class="expand-icon">▶</span> {{ category }} <span class="category-count">{{ cat_items.size }}</span></h3>
    </div>
    <div class="category-content">
      {%- for item in cat_items -%}
        {%- assign base_id = item.originalId | default: item.id -%}
        {%- assign anchor_id = "qt-" | append: base_id -%}
        {%- assign product = item.product | default: 'both' -%}
        {%- if product == 'decky' -%}{%- assign badge = 'Decky' -%}
        {%- elsif product == 'pro' -%}{%- assign badge = 'Pro' -%}
        {%- elsif product == 'version-specific' -%}{%- assign badge = 'Version Specific' -%}
        {%- else -%}{%- assign badge = 'Universal' -%}{%- endif %}
      <details class="faq-item-compact qt-item" id="{{ anchor_id }}" data-product="{{ product }}">
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
