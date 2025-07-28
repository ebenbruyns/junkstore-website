---
layout: splash
title: "Game Compatibility"
permalink: /game_compatibility/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---

<div class="spacer mt-4"></div>

{% assign featured_games = site.data.featured_games %}

<div class="recently-tested-section">
  <h3>🆕 Recently Tested</h3>
  <div class="featured-games-grid">
    {% for game in featured_games %}
      <div class="featured-game-card">
        <a href="#{{ game.title | slugify }}-{{ game.storefront | slugify }}" class="game-title">{{ game.title }}</a>
        <span class="storefront-tag {{ game.storefront | downcase }}">{{ game.storefront }}</span>
      </div>
    {% endfor %}
  </div>
</div>

<div class="compatibility-note">
  <strong>Note:</strong> Games tested by the Junk Store team use <strong>GE-Proton 9-20</strong>, as it consistently provides the best out-of-the-box compatibility.<br>
  To use the <strong>EOS overlay</strong> with Epic Games, you'll need <strong>GE-Proton 10.2 or newer</strong>.<br>
  Games that require a specific Proton version will have it listed in the <strong>Notes</strong> column.
</div>

<div class="compatibility-controls">
  <div class="filter-section">
    <label for="storefrontSelect">Filter by Store:</label>
    <select id="storefrontSelect" class="storefront-filter">
      <option value="all">All Stores</option>
      <option value="Epic">Epic Games</option>
      <option value="GOG">GOG</option>
      <option value="Amazon">Amazon Games</option>
    </select>
  </div>

  <div class="search-section">
    <label for="gameSearch">Search Games:</label>
    <input type="text" id="gameSearch" class="game-search-input" placeholder="Search by game name...">
  </div>
</div>

<div class="compatibility-table-container">
  <table class="compatibility-table" id="compatibilityTable">
    <thead>
      <tr>
        <th class="col-game">Game Title</th>
        <th class="col-store">Store</th>
        <th class="col-protondb">ProtonDB</th>
        <th class="col-notes">Compatibility Notes</th>
        <th class="col-date">Date Tested</th>
      </tr>
    </thead>
    <tbody class="compatibility-tbody">
      {% assign epic_games = site.data.epic_games %}
      {% assign gog_games = site.data.gog_games %}
      {% assign amazon_games = site.data.amazon_games %}
      {% assign all_compatibility_data = epic_games | concat: gog_games | concat: amazon_games %}
      
      {% assign sorted_games = all_compatibility_data | sort: 'title' %}
      
      {% for game_entry in sorted_games %}
        <tr class="compatibility-row" data-store="{{ game_entry.storefront }}">
          <td class="game-title-cell">
            <span id="{{ game_entry.title | slugify }}-{{ game_entry.storefront | slugify }}" class="game-anchor"></span>
            {{ game_entry.title }}
          </td>
          <td class="store-cell">
            <span class="store-indicator {{ game_entry.storefront | downcase }}">{{ game_entry.storefront }}</span>
          </td>
          <td class="protondb-cell">
            {% if game_entry.protondb and game_entry.protondb != blank %}
              <a href="{{ game_entry.protondb }}" target="_blank" rel="noopener noreferrer" class="protondb-link">View Report</a>
            {% else %}
              <span class="no-report">—</span>
            {% endif %}
          </td>
          <td class="notes-cell">
            {% if game_entry.notes and game_entry.notes != blank %}
              {{ game_entry.notes }}
            {% else %}
              <span class="no-notes">No additional notes</span>
            {% endif %}
          </td>
          <td class="date-cell">
            {% if game_entry.date_tested and game_entry.date_tested != blank %}
              {{ game_entry.date_tested }}
            {% else %}
              <span class="no-date">—</span>
            {% endif %}
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

<button id="scrollToTop" class="scroll-to-top-btn" title="Scroll to top">
  <span class="arrow-up">↑</span>
  <span class="top-text">Top</span>
</button>

<script src="{{ '/assets/js/compatibility-table.js' | relative_url }}"></script>