---
layout: splash
title: "Junk Store Tested Games"
permalink: /tested-games-legacy/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---

<div class="spacer mt-4"></div>

{% assign featured_games = site.data.featured_games %}

<div class="feature-box">
  <h3>🆕 Recently Tested</h3>
  <div class="featured-row">
    {% for game in featured_games %}
      <div class="featured-entry">
        <a href="#{{ game.title | slugify }}-{{ game.storefront | slugify }}">{{ game.title }}</a>
        <span class="store-badge {{ game.storefront | downcase }}">{{ game.storefront }}</span>
      </div>
    {% endfor %}
  </div>
</div>


<p style="border-left: 4px solid #e67300; background-color: #1f1f1f; padding: 10px; margin-top: 20px;">
  <strong>Note:</strong> Games tested by the Junk Store team use <strong>GE-Proton 9-20</strong>, as it consistently provides the best out-of-the-box compatibility.<br>
  To use the <strong>EOS overlay</strong> with Epic Games, you’ll need <strong>GE-Proton 10.2 or newer</strong>.<br>
  Games that require a specific Proton version will have it listed in the <strong>Notes</strong> column.
</p>

<div class="table-controls">
  <div class="filter-group">
    <label for="storefrontFilter">Filter by Storefront:</label>
    <select id="storefrontFilter">
      <option value="All">All</option>
      <option value="Epic">Epic</option>
      <option value="GOG">GOG</option>
      <option value="Amazon">Amazon</option>
    </select>
  </div>

  <div class="search-group">
    <label for="searchInput">Search:</label>
    <div class="search-input-wrapper">
      <input type="text" id="searchInput" placeholder="Search games..." />
    </div>
  </div>
</div>

<!-- <div id="gameModal">
  <div class="modal-content">
    <button id="closeModal" aria-label="Close">&times;</button>
    <h2 id="modalTitle"></h2>
    <div id="modalDetails"></div>
  </div>
</div> -->

<div class="games-table-wrapper">
  <table id="gamesTable">
    <thead>
      <tr>
        <th>Game</th>
        <th>Store</th>
        <th>ProtonDB</th>
        <th>Notes</th>
        <th>Date Tested</th>
      </tr>
    </thead>
    <tbody>
{% assign all_games = site.data.epic_games | concat: site.data.gog_games | concat: site.data.amazon_games %}
{% assign sorted_games = all_games | sort: 'title' %}
{% for game in sorted_games %}
<tr id="{{ game.title | slugify }}-{{ game.storefront | slugify }}" data-storefront="{{ game.storefront }}">
<td><span class="game-link" data-title="{{ game.title }}">{{ game.title }}</span></td>
<td><span class="store-badge {{ game.storefront | downcase }}">{{ game.storefront }}</span></td>
{% if game.protondb and game.protondb != "" %}<td><a href="{{ game.protondb }}" target="_blank" rel="noopener noreferrer">Link</a></td>{% else %}<td></td>{% endif %}
<td>{{ game.notes | default: "&nbsp;" }}</td>
<td>{{ game.date_tested | default: "&nbsp;" }}</td>
</tr>
{% endfor %}
    </tbody>
  </table>
</div>

<button id="backToTop" title="Back to top" aria-label="Back to top">
  <span style="display:block; font-size:1.5rem;">↑</span>
  <span style="display:block; font-size:0.8rem; font-weight:normal;">top</span>
</button>

<script>
  const storefrontFilter = document.getElementById('storefrontFilter');
  const searchInput = document.getElementById('searchInput');
  const rows = document.querySelectorAll('#gamesTable tbody tr');

  function filterTable() {
    const storeValue = storefrontFilter.value;
    const searchValue = searchInput.value.toLowerCase();

    rows.forEach(row => {
      const store = row.getAttribute('data-storefront');
      const text = row.textContent.toLowerCase();

      const storeMatches = (storeValue === 'All' || store === storeValue);
      const searchMatches = text.includes(searchValue);

      row.style.display = (storeMatches && searchMatches) ? '' : 'none';
    });
  }

  storefrontFilter.addEventListener('change', filterTable);
  searchInput.addEventListener('input', filterTable);
</script>


<!-- <script>
  const modal = document.getElementById("gameModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".game-link").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      modalTitle.textContent = this.dataset.title;
      modalDetails.innerHTML = this.dataset.details || "No additional info available.";
      modal.classList.add("show");
    });
  });

  closeModal.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
</script> -->