/**
 * Fuzzy Search Component with Levenshtein Distance
 * Provides spell-correction suggestions for search functionality
 */
class FuzzySearch {
  constructor(options = {}) {
    this.maxSuggestions = options.maxSuggestions || 3;
    this.minSearchLength = options.minSearchLength || 3;
    this.maxDistanceRatio = options.maxDistanceRatio || 0.4; // 40% character difference allowed
    this.suggestionSelector = options.suggestionSelector || '.search-suggestions';
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

  // Find suggestions from a list of searchable items
  findSuggestions(searchTerm, searchableItems) {
    const suggestions = [];
    const searchLower = searchTerm.toLowerCase().trim();
    
    if (searchLower.length < this.minSearchLength) {
      return [];
    }

    // Get unique items for suggestions
    const uniqueItems = [...new Set(searchableItems)];
    
    // Calculate distances and find close matches
    uniqueItems.forEach(item => {
      if (!item || typeof item !== 'string') return;
      
      const itemLower = item.toLowerCase();
      const distance = this.levenshteinDistance(searchLower, itemLower);
      const maxDistance = Math.max(2, Math.floor(searchTerm.length * this.maxDistanceRatio));
      
      if (distance <= maxDistance && distance > 0) {
        suggestions.push({ item, distance });
      }
    });
    
    // Sort by distance and return top suggestions
    return suggestions
      .sort((a, b) => a.distance - b.distance)
      .slice(0, this.maxSuggestions)
      .map(s => s.item);
  }

  // Create and display suggestion UI
  showSuggestions(searchTerm, suggestions, targetContainer, onSuggestionClick) {
    // Remove existing suggestions
    this.hideSuggestions();
    
    if (!suggestions || suggestions.length === 0) {
      return;
    }

    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    suggestionsDiv.id = 'fuzzySearchSuggestions';
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
        if (onSuggestionClick) {
          onSuggestionClick(e.target.dataset.suggestion);
        }
      }
    });
    
    // Insert suggestions
    if (targetContainer) {
      targetContainer.appendChild(suggestionsDiv);
    }
  }

  // Remove suggestions from DOM
  hideSuggestions() {
    const existingSuggestions = document.getElementById('fuzzySearchSuggestions');
    if (existingSuggestions) {
      existingSuggestions.remove();
    }
  }

  // HTML escape utility
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Enhanced search that combines exact matching with fuzzy suggestions
  enhancedSearch(searchTerm, items, exactSearchCallback, noResultsCallback) {
    const results = exactSearchCallback(searchTerm);
    
    // If no exact results found, show fuzzy suggestions
    if (results.length === 0 && searchTerm.trim().length >= this.minSearchLength) {
      const searchableTexts = items.map(item => {
        if (typeof item === 'string') return item;
        if (item.title) return item.title;
        if (item.text) return item.text;
        if (item.question) return item.question;
        return item.toString();
      }).filter(text => text && text.length > 0);
      
      const suggestions = this.findSuggestions(searchTerm, searchableTexts);
      
      if (suggestions.length > 0 && noResultsCallback) {
        noResultsCallback(suggestions);
      }
    }
    
    return results;
  }
}

// Export for use in other scripts
window.FuzzySearch = FuzzySearch;