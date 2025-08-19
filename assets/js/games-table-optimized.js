/**
 * Static Optimized Games Table for Jekyll Site
 * 
 * This is the static version of the dynamic optimized table:
 * 1. Loads lightweight summary first (fast table display) 
 * 2. Only shows tested games (max 20 at a time with pagination)
 * 3. Loads detailed game info only when modal is opened
 * 4. Caches modal content to avoid repeated processing
 */

class StaticOptimizedGamesTable {
  constructor() {
    this.allGames = [];
    this.testedGames = [];
    this.filteredGames = [];
    this.currentFilter = 'All';
    this.currentSearch = '';
    this.modalCache = new Map();
    this.currentPage = 0;
    this.gamesPerPage = 20;
    this.pageSizeSelect = null;
    this.init();
  }

  async init() {
    try {
      console.log('🚀 Loading static games data...');
      await this.loadGamesData();
      this.setupElements();
      this.setupEventListeners();
      this.renderTable();
      this.displayFeaturedGames();
      console.log('✅ Static optimized games table initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize games table:', error);
      this.showError('Failed to load games data. Please refresh the page.');
    }
  }

  /**
   * Load games data from static JSON file
   */
  async loadGamesData() {
    try {
      const response = await fetch('/assets/data/games-table.json');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      // Handle both old format (direct array) and new format (object with games array)
      const gamesArray = Array.isArray(data) ? data : (data.games || []);
      console.log(`📊 Loaded ${gamesArray.length} total games from JSON`);
      
      this.allGames = gamesArray;
      
      // Filter to tested games and anti-cheat games that can't be tested
      this.testedGames = this.allGames.filter(game => {
        const normalTested = game.tested === true && (game.decky_rating || game.standalone_rating || game.date_tested);
        const antiCheat = game.cant_test_linux === true;
        const result = normalTested || antiCheat;
        
        if (game.title === 'Fortnite') {
          console.log(`🔍 Fortnite debug:`, {
            title: game.title,
            tested: game.tested,
            decky_rating: game.decky_rating,
            standalone_rating: game.standalone_rating,
            date_tested: game.date_tested,
            cant_test_linux: game.cant_test_linux,
            normalTested,
            antiCheat,
            result
          });
        }
        
        return result;
      });
      
      console.log(`🧪 Found ${this.testedGames.length} tested games`);
      
      // Count anti-cheat games specifically
      const antiCheatCount = this.testedGames.filter(game => game.cant_test_linux === true).length;
      console.log(`🚫 Including ${antiCheatCount} anti-cheat games`);
      
      // Merge with featured games from Jekyll data
      this.mergeFeaturedGames();
      
      // Sort tested games to put featured games first, then alphabetical
      this.testedGames.sort((a, b) => {
        // Check featured status (could be true or truthy)
        const aFeatured = a.is_featured === true || a.is_featured;
        const bFeatured = b.is_featured === true || b.is_featured;
        
        // Featured games go first
        if (aFeatured && !bFeatured) return -1;
        if (!aFeatured && bFeatured) return 1;
        
        // Within same featured status, sort alphabetically by title
        return a.title.localeCompare(b.title);
      });
      
      this.filteredGames = [...this.testedGames];
      
    } catch (error) {
      console.error('Failed to load games data:', error);
      throw error;
    }
  }

  /**
   * Process featured games from JSON data or fallback to Jekyll data
   */
  mergeFeaturedGames() {
    // First try to get featured games from JSON data (future implementation)
    const jsonFeaturedGames = this.testedGames.filter(game => game.is_featured === true);
    
    if (jsonFeaturedGames.length > 0) {
      console.log(`🌟 Found ${jsonFeaturedGames.length} featured games in JSON data`);
      this.featuredGames = jsonFeaturedGames;
      return;
    }
    
    // Fallback to Jekyll featured games data (current implementation)
    const featuredGames = Array.isArray(window.featuredGamesData) ? window.featuredGamesData : [];
    
    if (featuredGames.length > 0) {
      console.log(`🌟 Processing ${featuredGames.length} featured games from Jekyll data`);
      
      // Mark existing games as featured
      const featuredSet = new Set(
        featuredGames
          .filter(fg => fg && fg.title && fg.storefront)
          .map(fg => `${fg.title}|${fg.storefront}`)
      );
      
      this.testedGames.forEach(game => {
        if (game && game.title && game.storefront) {
          game.is_featured = featuredSet.has(`${game.title}|${game.storefront}`);
        }
      });
      
      // Store featured games for display
      this.featuredGames = featuredGames.filter(fg => fg && fg.title && fg.storefront);
    } else {
      this.featuredGames = [];
    }
  }

  setupElements() {
    this.tableContainer = document.getElementById('gamesTableContainer');
    this.storefrontFilter = document.getElementById('storefrontFilter');
    this.searchInput = document.getElementById('searchInput');
    this.loadingDiv = document.getElementById('loadingIndicator');
    this.featuredRow = document.getElementById('featuredGamesRow');
    this.pageSizeSelect = document.getElementById('pageSizeSelect');
    this.clearSearchBtn = document.getElementById('clearSearch');
    
    if (this.loadingDiv) {
      this.loadingDiv.style.display = 'none';
    }
    
    // Initialize clear button state
    this.toggleClearButton();
  }

  toggleClearButton() {
    if (this.clearSearchBtn && this.searchInput) {
      const hasText = this.searchInput.value.trim().length > 0;
      if (hasText) {
        this.clearSearchBtn.classList.add('show');
      } else {
        this.clearSearchBtn.classList.remove('show');
      }
    }
  }

  setupEventListeners() {
    if (this.storefrontFilter) {
      this.storefrontFilter.addEventListener('change', (e) => {
        this.currentFilter = e.target.value || 'All';
        this.currentPage = 0;
        this.filterAndRender();
      });
    }

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.currentSearch = (e.target.value || '').trim().toLowerCase();
        this.currentPage = 0;
        this.filterAndRender();
        this.toggleClearButton();
      });
    }

    // Clear search button functionality
    const clearSearchBtn = document.getElementById('clearSearch');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (this.searchInput) {
          this.searchInput.value = '';
          this.currentSearch = '';
          this.currentPage = 0;
          this.filterAndRender();
          this.toggleClearButton();
          this.searchInput.focus();
        }
      });
    }

    if (this.pageSizeSelect) {
      this.pageSizeSelect.addEventListener('change', (e) => {
        this.gamesPerPage = parseInt(e.target.value) || 20;
        this.currentPage = 0;
        this.renderTable();
      });
    }
  }

  displayFeaturedGames() {
    if (!this.featuredRow) return;

    if (this.featuredGames && this.featuredGames.length > 0) {
      console.log(`🌟 Displaying ${this.featuredGames.length} featured games`);
      
      // Sort by most recently tested first (newest dates first)
      const sortedFeatured = this.featuredGames.slice().sort((a, b) => {
        // Get the actual game data to access date_tested
        const gameA = this.testedGames.find(g => g.title === a.title && g.storefront === a.storefront);
        const gameB = this.testedGames.find(g => g.title === b.title && g.storefront === b.storefront);
        
        const dateA = gameA?.date_tested || '';
        const dateB = gameB?.date_tested || '';
        
        // Sort by date descending (newest first), then by title
        if (dateA && dateB) {
          return dateB.localeCompare(dateA);
        } else if (dateA) {
          return -1;
        } else if (dateB) {
          return 1;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
      
      this.featuredRow.innerHTML = sortedFeatured
        .map(game => {
          return `
            <div class="featured-entry">
              <a href="#" class="featured-game-link" data-game-id="${game.id}">
                ${this.escapeHtml(game.title)}
              </a>
              <span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span>
            </div>
          `;
        }).join('');
        
      // Add click handlers for featured games - same as main table
      this.featuredRow.querySelectorAll('.featured-game-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const gameId = e.target.dataset.gameId;
          if (gameId) {
            this.openGameModal(gameId);
          }
        });
      });
    } else {
      this.featuredRow.innerHTML = `
        <div class="featured-entry">
          <span style="color: #ccc; font-style: italic;">No featured games available</span>
        </div>
      `;
    }
  }

  filterAndRender() {
    this.filteredGames = this.testedGames.filter(game => {
      const title = game.title || '';
      const storefront = game.storefront || '';
      const notes = game.notes || '';
      
      // Store filter
      const storeMatches = this.currentFilter === 'All' || storefront === this.currentFilter;
      
      // Search filter - search in title and notes
      const searchMatches = this.currentSearch === '' || (() => {
        try {
          const searchTerm = this.currentSearch.trim();
          if (!searchTerm) return true;
          
          const titleMatch = title.toLowerCase().includes(searchTerm);
          const cleanNotes = notes.replace(/<[^>]*>/g, '').toLowerCase();
          const notesMatch = cleanNotes.includes(searchTerm);
          
          return titleMatch || notesMatch;
        } catch (error) {
          console.warn('Search error:', error);
          return true;
        }
      })();
      
      return storeMatches && searchMatches;
    });
    
    console.log(`🔍 Filtered to ${this.filteredGames.length} games`);
    this.renderTable();
  }

  renderTable() {
    if (!this.tableContainer) return;

    // Calculate pagination
    const startIndex = this.currentPage * this.gamesPerPage;
    const endIndex = Math.min(startIndex + this.gamesPerPage, this.filteredGames.length);
    const paginatedGames = this.filteredGames.slice(startIndex, endIndex);

    const table = document.createElement('table');
    table.id = 'gamesTable';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Title</th>
          <th>Storefront</th>
          <th>Decky Plugin</th>
          <th>2.0 Standalone</th>
          <th>Date Tested</th>
        </tr>
      </thead>
      <tbody>
        ${paginatedGames.map(game => this.renderGameRow(game)).join('')}
      </tbody>
    `;

    // Add pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'paginationContainer';
    paginationContainer.className = 'pagination-container';
    paginationContainer.innerHTML = `
      <div class="pagination-info">
        Showing ${startIndex + 1}-${endIndex} of ${this.filteredGames.length} games
      </div>
      ${this.renderPaginationControls()}
    `;

    this.tableContainer.innerHTML = '';
    this.tableContainer.appendChild(table);
    this.tableContainer.appendChild(paginationContainer);
    
    // Add click handlers for game titles
    this.addModalHandlers();
  }

  renderPaginationControls() {
    const totalPages = Math.ceil(this.filteredGames.length / this.gamesPerPage);
    
    if (totalPages <= 1) return '';

    let controls = '<div class="pagination-controls">';
    
    // Show first few pages
    const maxVisiblePages = 4;
    for (let i = 0; i < Math.min(maxVisiblePages, totalPages); i++) {
      const activeClass = i === this.currentPage ? ' active' : '';
      const pageNum = i + 1;
      controls += `<button class="pagination-btn${activeClass}" data-page="${i}">${pageNum}</button>`;
    }
    
    // Add ellipsis if there are many more pages
    if (totalPages > maxVisiblePages + 1) {
      controls += '<span class="pagination-ellipsis">...</span>';
      
      // Show last page
      const lastPage = totalPages - 1;
      controls += `<button class="pagination-btn" data-page="${lastPage}">${totalPages}</button>`;
    }
    
    // Next button (always show if there are more pages)
    if (this.currentPage < totalPages - 1) {
      const nextPage = this.currentPage + 1;
      controls += `<button class="pagination-btn" data-page="${nextPage}">Next →</button>`;
    }
    
    controls += '</div>';
    
    // Add event listeners after rendering
    setTimeout(() => {
      document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetPage = parseInt(e.target.dataset.page);
          if (!isNaN(targetPage)) {
            this.currentPage = targetPage;
            this.renderTable();
          }
        });
      });
    }, 0);
    
    return controls;
  }

  renderGameRow(game) {
    const dateTest = game.date_tested || '&nbsp;';
    const featuredClass = game.is_featured ? ' featured-game' : '';
    
    const deckyRating = this.getCompatibilityIndicator(game.decky_rating);
    const standaloneRating = this.getCompatibilityIndicator(game.standalone_rating);

    // Don't make anti-cheat games clickable since they can't be tested
    const isClickable = !game.cant_test_linux;
    const titleSpan = isClickable 
      ? `<span class="game-link clickable" data-game-id="${game.id}">${this.escapeHtml(game.title)}</span>`
      : `<span class="game-title-static">${this.escapeHtml(game.title)}</span>`;

    return `
      <tr data-game-id="${game.id}" class="${featuredClass.trim()}">
        <td>${titleSpan}</td>
        <td><span class="store-badge ${game.storefront.toLowerCase()}">${game.storefront}</span></td>
        <td class="compatibility-rating">${deckyRating}</td>
        <td class="compatibility-rating">${standaloneRating}</td>
        <td>${dateTest}</td>
      </tr>
    `;
  }

  getCompatibilityIndicator(rating) {
    if (!rating) return '<span class="compatibility-unknown">❓</span>';
    
    const ratingLower = rating.toLowerCase();
    if (ratingLower === 'perfect' || ratingLower === 'green') {
      return '<span class="compatibility-good">🟢</span>';
    } else if (ratingLower === 'playable' || ratingLower === 'yellow') {
      return '<span class="compatibility-okay">🟡</span>';
    } else if (ratingLower === 'broken' || ratingLower === 'red') {
      return '<span class="compatibility-bad">🔴</span>';
    } else if (ratingLower === 'not-working') {
      return '<span class="compatibility-bad">❌</span>';
    } else if (ratingLower === 'cant-test-anticheat') {
      return '<span class="compatibility-anticheat">🚫</span>';
    }
    return '<span class="compatibility-unknown">❓</span>';
  }

  addModalHandlers() {
    const gameLinks = document.querySelectorAll('.game-link.clickable');
    gameLinks.forEach(link => {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const gameId = e.target.dataset.gameId;
        await this.openGameModal(gameId);
      });
    });
  }

  async openGameModal(gameId) {
    try {
      // Show loading state
      const loadingModal = document.createElement('div');
      loadingModal.className = 'game-modal show';
      loadingModal.innerHTML = `
        <div class="modal-backdrop">
          <div class="modal-content">
            <div style="text-align: center; padding: 40px;">
              <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #ffa366;"></i>
              <p style="margin-top: 20px; color: #ccc;">Loading game details...</p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(loadingModal);

      // Find game details (async lookup from individual JSON file)
      const gameDetails = await this.getGameDetails(gameId);
      
      if (!gameDetails) {
        throw new Error('Game not found');
      }
      
      // Remove loading modal
      loadingModal.remove();
      
      // Create actual modal
      this.createGameModal(gameDetails);
      
    } catch (error) {
      console.error('Failed to open game modal:', error);
      // Remove loading modal if it exists
      const loadingModal = document.querySelector('.game-modal');
      if (loadingModal) loadingModal.remove();
      
      // Show error
      alert('Failed to load game details. Please try again.');
    }
  }

  /**
   * Get game details from individual JSON file (for modal display)
   */
  async getGameDetails(gameId) {
    // Return cached data if available
    if (this.modalCache.has(gameId)) {
      console.log(`📋 Using cached details for game: ${gameId}`);
      return this.modalCache.get(gameId);
    }

    // Find game in table data to get storefront and slug
    const gameTableData = this.allGames.find(g => g.id === gameId);
    if (!gameTableData) {
      console.error(`Game not found in table data: ${gameId}`);
      return null;
    }

    try {
      // Load full game data from individual JSON file
      const storefront = gameTableData.storefront === 'itch.io' ? 'itch.io' : gameTableData.storefront.toLowerCase();
      const slug = gameTableData.slug || gameTableData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
      const gameUrl = `/assets/data/games/${storefront}/${slug}.json`;
      
      console.log(`🔄 Loading full game data from: ${gameUrl}`);
      const response = await fetch(gameUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to load game data: ${response.status}`);
      }
      
      const fullGameData = await response.json();
      
      // Debug logging for image URLs
      console.log(`🖼️ Image URLs for ${fullGameData.title}:`, {
        vertical_artwork: fullGameData.vertical_artwork,
        banner_image: fullGameData.banner_image,
        icon_image: fullGameData.icon_image
      });
      
      // Cache the result
      this.modalCache.set(gameId, fullGameData);
      console.log(`💾 Cached full details for game: ${fullGameData.title}`);
      
      return fullGameData;
    } catch (error) {
      console.error(`Error loading game details for ${gameTableData.title}:`, error);
      
      // Fallback to table data if individual file fails
      console.log(`🔄 Falling back to table data for: ${gameTableData.title}`);
      this.modalCache.set(gameId, gameTableData);
      return gameTableData;
    }
  }

  createGameModal(game) {
    // Remove existing modal
    const existingModal = document.getElementById('gameModal');
    if (existingModal) {
      existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'gameModal';
    modal.className = 'game-modal';
    
    const modalContent = this.getModalContent(game);
    modal.innerHTML = modalContent;
    
    document.body.appendChild(modal);
    this.setupModalEventListeners(modal);
    
    // Force modal positioning with inline styles - CENTERED
    modal.style.setProperty('align-items', 'center', 'important');
    modal.style.setProperty('padding', '20px', 'important');
    modal.style.setProperty('justify-content', 'center', 'important');
    
    // Show modal
    requestAnimationFrame(() => {
      modal.classList.add('show');
      // Double-check positioning after show - CENTERED
      modal.style.setProperty('align-items', 'center', 'important');
    });
  }

  getModalContent(game) {
    const storefrontClass = game.storefront.toLowerCase();
    
    return `
      <div class="modal-backdrop">
        <div class="modal-content">
          <!-- Game Banner -->
          <div id="gameBanner-${game.id}" class="game-banner">
            ${game.banner_image && !game.banner_image.startsWith('./artwork/') ? `<img src="${game.banner_image}" alt="Game Banner" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px;" onerror="console.error('Image failed to load:', '${game.banner_image}'); this.parentElement.style.display='none';">` : ''}
          </div>
          
          <!-- Enhanced Header -->
          <div class="modal-header-enhanced">
            <div class="game-header-content">
              <div class="game-basic-info">
                <div class="game-title-area">
                  <h4>${this.escapeHtml(game.title)}</h4>
                </div>
                <span class="storefront-badge storefront-${storefrontClass}">${game.storefront}</span>
              </div>
            </div>
            <button class="modal-close">&times;</button>
          </div>
          
          <!-- Essential Info Strip -->
          <div class="essential-info">
            <div class="feature-grid">
              <div class="feature-item">
                <span class="feature-label">Decky Plugin</span>
                <span class="feature-value ${this.getStatusClass(game.decky_rating)}">${this.getStatusText(game.decky_rating)}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">2.0 Standalone</span>
                <span class="feature-value ${this.getStatusClass(game.standalone_rating)}">${this.getStatusText(game.standalone_rating)}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Proton Version</span>
                <span class="feature-value">${game.proton_version || 'Default'}</span>
              </div>
              <div class="feature-item">
                <span class="feature-label">Date Tested</span>
                <span class="feature-value">${game.date_tested || 'Not tested'}</span>
              </div>
            </div>
          </div>
          
          <!-- 2-Tab Navigation (Bootstrap Style) -->
          <ul class="nav nav-tabs nav-tabs-clean" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#overview-${game.id}" role="tab">
                <i class="fas fa-info-circle me-2"></i>Overview
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#testing-${game.id}" role="tab">
                <i class="fas fa-cogs me-2"></i>Testing Details
              </a>
            </li>
          </ul>
          
          <!-- Tab Content -->
          <div class="tab-content tab-content-enhanced">
            <!-- Overview Tab -->
            <div class="tab-pane active" id="overview-${game.id}" role="tabpanel">
              <div class="row">
                <div class="col-md-4">
                  <div id="gameImages-${game.id}" class="game-image-container">
                    ${game.vertical_artwork && game.vertical_artwork.trim() && !game.vertical_artwork.startsWith('./artwork/') ? 
                      `<img src="${game.vertical_artwork}" alt="Game Cover" class="game-image-main" onerror="console.error('Vertical image failed to load:', '${game.vertical_artwork}'); this.style.display='none';">` :
                      `<div class="game-image-placeholder">
                        <div class="placeholder-content">
                          <i class="fas fa-gamepad" style="font-size: 3rem; color: #4a5568; margin-bottom: 10px;"></i>
                          <p style="color: #a0aec0; margin: 0; font-size: 0.9rem;">Game Image</p>
                          <p style="color: #a0aec0; margin: 0; font-size: 0.8rem;">Not Available</p>
                        </div>
                      </div>`
                    }
                  </div>
                  
                  ${(() => {
                    console.log(`🚀 About to call renderEpicFeatures for ${game.title}`);
                    const result = this.renderEpicFeatures(game);
                    console.log(`📝 renderEpicFeatures returned:`, result);
                    return result;
                  })()}
                </div>
                <div class="col-md-8" id="gameDescription-${game.id}">
                  <div class="info-section">
                    <h6><i class="fas fa-gamepad text-primary"></i> Game Information</h6>
                    <div class="info-grid">
                      ${game.publisher ? `
                        <div class="info-item">
                          <span class="info-label">Publisher</span>
                          <span class="info-value">${game.publisher}</span>
                        </div>
                      ` : ''}
                      ${game.genre ? `
                        <div class="info-item">
                          <span class="info-label">Genre</span>
                          <span class="info-value">${game.genre}</span>
                        </div>
                      ` : ''}
                    </div>
                  </div>
                
                  ${game.description ? `
                    <div class="info-section">
                      <h6>Description</h6>
                      <div class="notes-content">${game.description}</div>
                    </div>
                  ` : ''}
                </div>
              </div>
            </div>
            
            <!-- Testing Details Tab -->
            <div class="tab-pane" id="testing-${game.id}" role="tabpanel">
              ${this.renderTestingDetailsBootstrap(game)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderTestingDetails(game) {
    let content = '';
    
    // Technical Configuration
    const hasConfig = game.dependencies || game.controller_config || game.required_launcher;
    if (hasConfig) {
      content += `
        <div class="info-section">
          <h6>Technical Configuration</h6>
          <div class="info-list">
            ${game.required_launcher ? `<div class="info-item"><strong>Required Launcher:</strong> ${game.required_launcher}</div>` : ''}
            ${game.dependencies ? `<div class="info-item"><strong>Dependencies:</strong> ${game.dependencies}</div>` : ''}
            ${game.controller_config ? `<div class="info-item"><strong>Controller Config:</strong> ${game.controller_config}</div>` : ''}
          </div>
        </div>
      `;
    }
    
    // Performance Notes
    if (game.performance_notes) {
      content += `
        <div class="info-section">
          <h6>Performance Notes</h6>
          <div class="notes-content">${this.renderMarkdown(game.performance_notes)}</div>
        </div>
      `;
    }
    
    // Known Issues
    if (game.known_issues) {
      content += `
        <div class="info-section">
          <h6>Known Issues</h6>
          <div class="notes-content alert-warning">${this.renderMarkdown(game.known_issues)}</div>
        </div>
      `;
    }
    
    return content || '<p style="color: #ccc; text-align: center; padding: 40px;">No additional testing details available.</p>';
  }

  setupModalEventListeners(modal) {
    // Close button
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal(modal));
    }
    
    // Backdrop click
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          this.closeModal(modal);
        }
      });
    }
    
    // Bootstrap tab switching
    const tabLinks = modal.querySelectorAll('.nav-link');
    tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active classes from all tabs
        modal.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        modal.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        link.classList.add('active');
        
        // Show corresponding tab content
        const targetId = link.getAttribute('href').substring(1);
        const targetPanel = modal.querySelector(`#${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
    
    // Escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeModal(modal);
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }

  closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      if (modal.parentNode) {
        modal.parentNode.removeChild(modal);
      }
    }, 300);
  }

  getStatusClass(rating) {
    if (!rating) return '';
    const ratingLower = rating.toLowerCase();
    console.log(`🎨 Status class for "${rating}":`, ratingLower);
    if (ratingLower === 'perfect' || ratingLower === 'green') {
      console.log('→ Returning text-success');
      return 'text-success';
    } else if (ratingLower === 'yellow') {
      console.log('→ Returning text-warning');
      return 'text-warning';
    } else if (ratingLower === 'red') {
      console.log('→ Returning text-danger');
      return 'text-danger';
    } else if (ratingLower === 'not-working') {
      console.log('→ Returning text-danger');
      return 'text-danger';
    }
    console.log(`→ Returning empty string for unknown rating: ${rating}`);
    return '';
  }

  getStatusText(rating) {
    if (!rating) return 'Not tested';
    const ratingLower = rating.toLowerCase();
    if (ratingLower === 'perfect' || ratingLower === 'green') return 'Works great';
    if (ratingLower === 'yellow') return 'Minor tinkering';
    if (ratingLower === 'red') return 'Advanced tinkering';
    if (ratingLower === 'not-working') return 'Doesn\'t work';
    return rating;
  }

  renderEpicFeatures(game) {
    console.log(`🔍 renderEpicFeatures called for ${game.title}, storefront: ${game.storefront}`);
    if (game.storefront !== 'Epic') return '';
    
    const epicFeatures = game.epic_features || {};
    console.log(`🎮 Epic features for ${game.title}:`, epicFeatures);
    
    // Check if any Epic features are present
    const hasFeatures = epicFeatures.epic_achievements || 
                       epicFeatures.epic_offline_mode || 
                       epicFeatures.requires_eos || 
                       epicFeatures.supports_eos ||
                       epicFeatures.requires_verification ||
                       epicFeatures.requires_eac_runtime ||
                       epicFeatures.requires_battleye_runtime ||
                       game.requires_verification || 
                       game.requires_eac_runtime || 
                       game.requires_battleye_runtime;
    
    if (!hasFeatures) {
      console.log(`⚠️ No Epic features found for ${game.title}`);
      return '';
    }
    
    console.log(`✅ Rendering Epic features for ${game.title}`);
    
    return `
      <div class="info-section">
        <h6><i class="fas fa-star text-warning"></i> Epic Games Features</h6>
        <div class="epic-features-grid">
          ${epicFeatures.epic_achievements ? `
            <div class="epic-feature-item">
              <span>Achievements</span>
              <span class="feature-status status-supported">✓ Supported</span>
            </div>
          ` : ''}
          ${epicFeatures.epic_offline_mode ? `
            <div class="epic-feature-item">
              <span>Offline Mode</span>
              <span class="feature-status status-supported">✓ Available</span>
            </div>
          ` : ''}
          ${epicFeatures.requires_eos || epicFeatures.supports_eos ? `
            <div class="epic-feature-item">
              <span>EOS Overlay</span>
              <span class="feature-status ${epicFeatures.requires_eos ? 'status-required' : 'status-supported'}">${epicFeatures.requires_eos ? 'Required' : '✓ Supported'}</span>
            </div>
          ` : ''}
          ${epicFeatures.requires_verification || game.requires_verification ? `
            <div class="epic-feature-item">
              <span>Verification</span>
              <span class="feature-status status-warning">⚠️ May need to verify</span>
            </div>
          ` : ''}
          ${epicFeatures.requires_eac_runtime || game.requires_eac_runtime ? `
            <div class="epic-feature-item">
              <span>EasyAntiCheat</span>
              <span class="feature-status status-required">Required</span>
            </div>
          ` : ''}
          ${epicFeatures.requires_battleye_runtime || game.requires_battleye_runtime ? `
            <div class="epic-feature-item">
              <span>BattlEye</span>
              <span class="feature-status status-required">Required</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderTestingDetailsBootstrap(game) {
    let content = '';
    
    // Technical Configuration
    const hasConfig = game.dependencies || game.controller_config || game.required_launcher;
    if (hasConfig) {
      content += `
        <div class="info-section">
          <h6><i class="fas fa-tools text-success"></i> Technical Configuration</h6>
          <div class="info-grid">
            ${game.controller_input ? `
              <div class="info-item">
                <span class="info-label">Input Method</span>
                <span class="info-value">
                  🎮 ${game.controller_input === 'native' ? 'Native Controller' : game.controller_input}
                </span>
              </div>
            ` : ''}
            ${game.controller_config ? `
              <div class="info-item">
                <span class="info-label">Controller Config</span>
                <span class="info-value">${game.controller_config}</span>
              </div>
            ` : ''}
            ${game.protondb ? `
              <div class="info-item">
                <span class="info-label">ProtonDB</span>
                <span class="info-value"><a href="${game.protondb}" target="_blank" rel="noopener noreferrer">View on ProtonDB <i class="fas fa-external-link-alt ms-1"></i></a></span>
              </div>
            ` : ''}
            ${game.epic_url ? `
              <div class="info-item">
                <span class="info-label">Epic Store</span>
                <span class="info-value"><a href="${game.epic_url}" target="_blank" rel="noopener noreferrer">View on Epic <i class="fas fa-external-link-alt ms-1"></i></a></span>
              </div>
            ` : ''}
            ${game.itch_url ? `
              <div class="info-item">
                <span class="info-label">itch.io</span>
                <span class="info-value"><a href="${game.itch_url}" target="_blank" rel="noopener noreferrer">View on itch.io <i class="fas fa-external-link-alt ms-1"></i></a></span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
    
    // Testing Notes
    if (game.notes) {
      content += `
        <div class="info-section">
          <h6><i class="fas fa-clipboard-list text-info"></i> Testing Notes</h6>
          <div class="notes-content">${this.renderMarkdown(game.notes)}</div>
        </div>
      `;
    }
    
    return content || '<p style="color: #ccc; text-align: center; padding: 40px;">No additional testing details available.</p>';
  }

  // Utility functions
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

  renderMarkdown(text) {
    if (!text) return '';
    
    let html = this.escapeHtml(text);
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return html;
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
  console.log('🎮 Initializing Static Optimized Games Table...');
  window.gamesTable = new StaticOptimizedGamesTable();
});