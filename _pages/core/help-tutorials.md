---
layout: junkstore-page
title: "Junk Store Tutorials — Step-by-Step Guides for Steam Deck"
hero_title: "Junk Store Tutorials"
description: "Step-by-step setup tutorials for Junk Store on Steam Deck — Decky Plugin install, Pro install, GOG Extension setup, OAuth login, Proton versions, Wine Cellar, frame generation, language settings, Ubisoft games, and more."
permalink: /help/tutorials/
excerpt: " "
---
{% include help/nav-tabs.html active="tutorials" counter_label="tutorials" search_placeholder="Search tutorials..." %}

<div id="tutorials-content">

<!-- Installation Guides Section -->
<h2 class="text-center">Installation Guides</h2>
<div class="tutorial-grid">
  <div class="tutorial-item decky" data-category="decky">
    <h4><a href="/tutorials/install-decky-plugin/">Install Junk Store Decky Plugin</a></h4>
    <p>Step-by-step guide to install Junk Store on your Steam Deck</p>
    <span class="tutorial-tag decky-tag">Decky Plugin</span>
  </div>
  <div class="tutorial-item pro" data-category="pro">
    <h4><a href="/get_started/">Getting Started with Junk Store Pro</a></h4>
    <p>Quick start guide for Junk Store Pro - get up and running fast</p>
    <span class="tutorial-tag pro-tag">Pro Version</span>
  </div>
  <div class="tutorial-item pro" data-category="pro">
    <h4><a href="/tutorials/install-junk-store-2/">Install Junk Store Pro</a></h4>
    <p>Guide on downloading and installing Junk Store Pro</p>
    <span class="tutorial-tag pro-tag">Pro Version</span>
  </div>
  <div class="tutorial-item decky" data-category="decky">
    <h4><a href="/tutorials/gog-extension/">GOG Extension Install Guide</a></h4>
    <p>Step-by-step guide on downloading and installing the GOG Extension</p>
    <span class="tutorial-tag decky-tag">Decky Plugin</span>
  </div>
</div>

<hr class="my-4">

<!-- Configuration & Setup Section -->
<h2 class="text-center">Configuration & Setup</h2>
<div class="tutorial-grid">
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/oauth-login/">How to Login using OAuth</a></h4>
    <p>Step-by-step guide on logging in via third party logins</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/proton-versions/">How to Check/Change Proton Version</a></h4>
    <p>Step-by-step guide on how to check and change your Proton version</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/wine-cellar/">How to Install Wine Cellar Plugin</a></h4>
    <p>Step-by-step guide on installing WineCellar to manage compatibility tools</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/change-game-language/">Change Game Language Settings</a></h4>
    <p>Change your Epic, GOG, or Amazon game language settings directly in Game Mode</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/lsfg-frame-generation/">Enable LSFG Frame Generation</a></h4>
    <p>Step-by-step guide on how to enable LSFG frame generation</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/cpp-runtime/">Install C++ Runtime</a></h4>
    <p>Fix game crashes and missing DLL errors by installing Visual C++ redistributables</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
  <div class="tutorial-item both" data-category="both">
    <h4><a href="/tutorials/ubisoft-games/">Play Ubisoft Connect Games</a></h4>
    <p>Install Ubisoft Connect and launch Ubisoft games through Epic Games Store</p>
    <span class="tutorial-tag both-tag">Universal</span>
  </div>
</div>

<hr class="my-4">

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
  <div class="tip-item {{ item_class }}" data-product="{{ item_class }}">
    <h4><a href="{{ tip.url }}">{{ tip.title | remove: "Tip of the Week: " }}</a></h4>
    <p>{{ tip.excerpt | strip_html | truncate: 100 }}</p>
    <span class="tip-tag">{{ tip.read_time | default: "3 min read" }}</span>
    <span class="tutorial-tag {{ tag_class }}">{{ tag_label }}</span>
  </div>
{% endfor %}
</div>

</div>

<a href="#top" class="mobile-fab" id="mobile-fab">↑</a>

<script src="{{ '/assets/js/help-page.js' | relative_url }}" defer></script>
