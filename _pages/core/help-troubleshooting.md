---
layout: junkstore-page
title: "Junk Store Troubleshooting — Fix Steam Deck Game Issues"
hero_title: "Junk Store Troubleshooting"
description: "Fix common Junk Store and Steam Deck issues — installation errors, game launch failures, library not showing, controller problems, anti-cheat kicks, EAC and BattlEye runtime, network and OAuth login problems."
permalink: /help/troubleshooting/
excerpt: " "
---
{% include content-schema.html type="troubleshooting" %}
{% include help/nav-tabs.html active="troubleshooting" counter_label="issues" search_placeholder="Search troubleshooting..." %}

{::nomarkdown}
<div id="troubleshooting-content" class="ts-collapsible">
{%- assign ts_items = site.data.troubleshooting -%}
{%- for category in site.data.troubleshooting_categories -%}
  {%- assign cat_items = ts_items | where: "category", category -%}
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
      <details class="faq-item-compact ts-item" id="{{ anchor_id }}" data-product="{{ product }}">
        <summary>
          <span class="question-text">{{ item.title }}</span>
          <span class="product-badge {{ product }}-badge">{{ badge }}</span>
          <button class="permalink-btn" data-id="{{ anchor_id }}" title="Copy link to this item">🔗</button>
        </summary>
        <div class="faq-answer">
          <div class="ts-solution"><h4>Solution</h4>{{ item.solution }}</div>
        </div>
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
