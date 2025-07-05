---
layout: splash
title: "Junk Store Tested Games"
permalink: /v2/tested-games/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
---

<div class="spacer mt-4"></div>

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

<table id="gamesTable" class="table table--small table--bordered">
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
    {% assign games_with_keys = "" | split: "" %}

    {% for game in all_games %}
      {% assign sort_title = game.title %}
      {% assign prefix = sort_title | slice: 0, 4 %}
      {% if prefix == "The " %}
        {% assign sort_title = sort_title | remove_first: "The " %}
      {% endif %}
      {% assign sort_entry = sort_title | append: "|||" | append: game.title %}
      {% assign games_with_keys = games_with_keys | push: sort_entry %}
    {% endfor %}

    {% assign sorted_entries = games_with_keys | sort_natural %}

    {% for entry in sorted_entries %}
      {% assign parts = entry | split: "|||" %}
      {% assign title = parts[1] %}
      {% assign game = all_games | where: "title", title | first %}
      <tr data-storefront="{{ game.storefront }}">
        <td>
          <a href="#" class="game-link" data-title="{{ game.title }}" data-details="{{ game.details | escape }}">{{ game.title }}</a>
        </td>
        <td class="store {{ game.storefront | downcase }}">{{ game.storefront }}</td>
        {% if game.protondb and game.protondb != "" %}
          <td><a href="{{ game.protondb }}" target="_blank" rel="noopener noreferrer">Link</a></td>
        {% else %}
          <td></td>
        {% endif %}
        <td>{{ game.notes | default: "&nbsp;" }}</td>
        <td>{{ game.date_tested | default: "&nbsp;" }}</td>

      </tr>
    {% endfor %}
  </tbody>
</table>


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

  // Back to top button logic
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
