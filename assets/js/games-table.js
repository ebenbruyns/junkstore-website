class GamesTable {
  constructor() {
    this.games = [];
    this.filteredGames = [];
    this.currentFilter = 'All';
    this.currentSearch = '';
    this.init();
  }

  async init() {
    try {
      await this.loadGames();
      this.setupElements();
      this.setupEventListeners();
      this.renderTable();
    } catch (error) {
      console.error('Failed to initialize games table:', error);
      this.showError('Failed to load games data. Please refresh the page.');
    }
  }

  async loadGames() {
    const response = await fetch('/assets/data/games.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    this.games = await response.json();
    this.filteredGames = [...this.games];
  }

  setupElements() {
    this.tableContainer = document.getElementById('gamesTableContainer');
    this.storefrontFilter = document.getElementById('storefrontFilter');
    this.searchInput = document.getElementById('searchInput');
    this.loadingDiv = document.getElementById('loadingIndicator');
    
    if (this.loadingDiv) {
      this.loadingDiv.style.display = 'none';
    }
  }

  setupEventListeners() {
    if (this.storefrontFilter) {
      this.storefrontFilter.addEventListener('change', (e) => {
        this.currentFilter = e.target.value;
        this.filterAndRender();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value.toLowerCase();
        this.filterAndRender();
      });
    }
  }

  filterAndRender() {
    this.filteredGames = this.games.filter(game => {
      const storeMatches = this.currentFilter === 'All' || game.storefront === this.currentFilter;
      const searchMatches = this.currentSearch === '' || 
        game.title.toLowerCase().includes(this.currentSearch) ||
        (game.notes && game.notes.toLowerCase().includes(this.currentSearch));
      
      return storeMatches && searchMatches;
    });
    
    this.renderTable();
  }

  renderTable() {
    if (!this.tableContainer) return;

    const table = document.createElement('table');
    table.id = 'gamesTable';
    table.innerHTML = `
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
        ${this.filteredGames.map(game => this.renderGameRow(game)).join('')}
      </tbody>
    `;

    this.tableContainer.innerHTML = '';
    this.tableContainer.appendChild(table);
  }

  renderGameRow(game) {
    const gameId = `${this.slugify(game.title)}-${this.slugify(game.storefront)}`;
    const protonLink = game.protondb && game.protondb.trim() 
      ? `<a href="${game.protondb}" target="_blank" rel="noopener noreferrer">Link</a>` 
      : '';
    const notes = game.notes || '&nbsp;';
    const dateTest = game.date_tested || '&nbsp;';

    return `
      <tr id="${gameId}" data-storefront="${game.storefront}">
        <td><span class="game-link" data-title="${this.escapeHtml(game.title)}">${this.escapeHtml(game.title)}</span></td>
        <td><span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span></td>
        <td>${protonLink}</td>
        <td>${notes}</td>
        <td>${dateTest}</td>
      </tr>
    `;
  }

  slugify(text) {
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showError(message) {
    if (this.tableContainer) {
      this.tableContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; color: #ff6b6b;">
          <p><strong>Error:</strong> ${message}</p>
        </div>
      `;
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new GamesTable();
});