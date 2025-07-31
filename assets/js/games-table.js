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
    const gamesData = await response.json();
    
    // Mark featured games and merge with main games data
    this.games = this.mergeFeaturedGames(gamesData);
    this.filteredGames = [...this.games];
  }

  mergeFeaturedGames(gamesData) {
    // Ensure we have valid arrays
    if (!Array.isArray(gamesData)) {
      console.warn('Invalid games data provided');
      return [];
    }
    
    const featuredGames = Array.isArray(window.featuredGamesData) ? window.featuredGamesData : [];
    
    // Create featured set with null/undefined safety  
    const featuredSet = new Set(
      featuredGames
        .filter(fg => fg && fg.title && fg.storefront)
        .map(fg => `${fg.title}|${fg.storefront}`)
    );
    
    // Mark existing games as featured with null safety
    const markedGames = gamesData
      .filter(game => game && game.title && game.storefront)
      .map(game => ({
        ...game,
        isFeatured: featuredSet.has(`${game.title}|${game.storefront}`)
      }));
    
    // Add featured games that aren't in the main dataset
    featuredGames.forEach(featuredGame => {
      if (!featuredGame || !featuredGame.title || !featuredGame.storefront) {
        return; // Skip invalid featured games
      }
      
      const exists = gamesData.some(game => 
        game && game.title === featuredGame.title && game.storefront === featuredGame.storefront
      );
      
      if (!exists) {
        markedGames.push({
          title: featuredGame.title,
          storefront: featuredGame.storefront,
          protondb: '',
          notes: 'Featured game - testing in progress',
          date_tested: '',
          isFeatured: true
        });
      }
    });
    
    // Sort to put featured games first with fallback comparison
    return markedGames.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
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
        this.currentFilter = e.target.value || 'All';
        this.filterAndRender();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        // Trim whitespace and convert to lowercase for consistent searching
        this.currentSearch = (e.target.value || '').trim().toLowerCase();
        this.filterAndRender();
      });
    }
  }

  filterAndRender() {
    this.filteredGames = this.games.filter(game => {
      // Null/undefined safety for all game properties
      const title = game.title || '';
      const storefront = game.storefront || '';
      const notes = game.notes || '';
      
      // Store filter logic
      const storeMatches = this.currentFilter === 'All' || storefront === this.currentFilter;
      
      // Search logic with HTML tag removal and better error handling
      const searchMatches = this.currentSearch === '' || (() => {
        try {
          const searchTerm = this.currentSearch.trim();
          if (!searchTerm) return true;
          
          const titleMatch = title.toLowerCase().includes(searchTerm);
          
          // Remove HTML tags from notes before searching
          const cleanNotes = notes.replace(/<[^>]*>/g, '').toLowerCase();
          const notesMatch = cleanNotes.includes(searchTerm);
          
          return titleMatch || notesMatch;
        } catch (error) {
          console.warn('Search error:', error);
          return true; // If search fails, include the game
        }
      })();
      
      return storeMatches && searchMatches;
    });
    
    // Show suggestions if no results and search term exists
    this.showSearchSuggestions();
    this.renderTable();
  }

  // Calculate Levenshtein distance for fuzzy matching
  levenshteinDistance(str1, str2) {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,     // deletion
          matrix[j - 1][i] + 1,     // insertion
          matrix[j - 1][i - 1] + cost // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Find close matches for suggestions
  findSuggestions(searchTerm, maxSuggestions = 3) {
    const suggestions = [];
    const searchLower = searchTerm.toLowerCase();
    
    // Get unique game titles that match the current store filter
    const uniqueTitles = [...new Set(
      this.games
        .filter(game => this.currentFilter === 'All' || game.storefront === this.currentFilter)
        .map(game => game.title)
        .filter(title => title && title.length > 0)
    )];
    
    // Calculate distances and find close matches
    uniqueTitles.forEach(title => {
      const titleLower = title.toLowerCase();
      const distance = this.levenshteinDistance(searchLower, titleLower);
      const maxDistance = Math.max(2, Math.floor(searchTerm.length * 0.4)); // Allow up to 40% differences
      
      if (distance <= maxDistance && distance > 0) {
        suggestions.push({ title, distance });
      }
    });
    
    // Sort by distance and return top suggestions
    return suggestions
      .sort((a, b) => a.distance - b.distance)
      .slice(0, maxSuggestions)
      .map(s => s.title);
  }

  showSearchSuggestions() {
    const searchTerm = this.currentSearch.trim();
    
    // Remove existing suggestions
    const existingSuggestions = document.getElementById('searchSuggestions');
    if (existingSuggestions) {
      existingSuggestions.remove();
    }
    
    // Show suggestions if no results and we have a search term
    if (searchTerm && searchTerm.length >= 3 && this.filteredGames.length === 0) {
      const suggestions = this.findSuggestions(searchTerm);
      
      if (suggestions.length > 0) {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.id = 'searchSuggestions';
        suggestionsDiv.className = 'search-suggestions';
        suggestionsDiv.innerHTML = `
          <p><strong>No results found.</strong> Did you mean:</p>
          <ul>
            ${suggestions.map(suggestion => 
              `<li><a href="#" data-suggestion="${this.escapeHtml(suggestion)}">${this.escapeHtml(suggestion)}</a></li>`
            ).join('')}
          </ul>
        `;
        
        // Add click handlers for suggestions
        suggestionsDiv.addEventListener('click', (e) => {
          if (e.target.tagName === 'A' && e.target.dataset.suggestion) {
            e.preventDefault();
            this.searchInput.value = e.target.dataset.suggestion;
            this.currentSearch = e.target.dataset.suggestion.toLowerCase();
            this.filterAndRender();
          }
        });
        
        // Insert before the table
        this.tableContainer.parentNode.insertBefore(suggestionsDiv, this.tableContainer);
      }
    }
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
    const featuredClass = game.isFeatured ? ' featured-game' : '';

    return `
      <tr id="${gameId}" data-storefront="${game.storefront}" class="${featuredClass.trim()}">
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