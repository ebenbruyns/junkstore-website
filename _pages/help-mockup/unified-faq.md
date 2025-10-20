---
layout: splash
title: "Unified FAQ - All Versions"
description: "Comprehensive FAQ covering both Decky Plugin and Junk Store 2.0 with clear version indicators"
permalink: /help-mockup/unified-faq/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.webp
  title: "Junk Store FAQ - All Versions"
  actions:
    - label: "Get Help"
      url: "/help-mockup/"
      class: "button buy-button"
excerpt: "Comprehensive FAQ covering both free and professional versions"
classes: wide
---

<!-- Navigation Breadcrumb -->
<nav class="help-breadcrumb">
  <a href="/help-mockup/">← Help Hub</a> / <strong>Unified FAQ</strong>
</nav>

<section class="seo-intro">
  <p><strong>Complete FAQ for all Junk Store versions.</strong> Questions are clearly marked for Decky Plugin (free), Junk Store 2.0 (professional), or both versions. Find answers about pricing, setup, compatibility, and troubleshooting.</p>
</section>

<!-- Version Filter -->
<section class="version-filter">
  <h2>Filter by Version</h2>
  <div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">All Questions</button>
    <button class="filter-btn" data-filter="decky">Decky Plugin Only</button>
    <button class="filter-btn" data-filter="professional">Junk Store 2.0 Only</button>
    <button class="filter-btn" data-filter="shared">Applies to Both</button>
  </div>
</section>

<!-- FAQ Content -->
<section class="faq-content">

  <!-- Getting Started -->
  <div class="faq-category">
    <h2>Overview & Getting Started</h2>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>What's the difference between the Decky version and the Professional version?</h3>
      <div class="faq-answer">
        <p>The Decky version is free and open source, designed to run via the Decky Loader. The Professional version includes extra convenience features and doesn't require Decky to run.</p>
        <p><strong>For detailed feature comparison:</strong> <a href="/comparison/">View Complete Comparison Chart</a></p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Is Junk Store trustworthy and how are my credentials handled?</h3>
      <div class="faq-answer">
        <p><strong>Yes, Junk Store is trustworthy.</strong> Here's why you can trust us with your gaming credentials:</p>

        <p><strong>Developer Credentials:</strong></p>
        <ul>
          <li>🔐 Developed by a cybersecurity expert and white-hat professional</li>
          <li>📋 You can verify our lead developer's credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a></li>
          <li>🔍 Open-source Decky plugin code is publicly auditable on <a href="https://github.com/ebenbruyns/junkstore" target="_blank">GitHub</a></li>
          <li>🤝 Active in Steam Deck community since launch with established reputation</li>
        </ul>

        <p><strong>How Your Credentials Are Handled:</strong></p>
        <ul>
          <li>🔒 <strong>No password storage:</strong> We never store your Epic, GOG, Amazon, or itch.io passwords</li>
          <li>🎫 <strong>Token-based authentication:</strong> Uses secure login tokens provided by each platform</li>
          <li>💻 <strong>Local storage only:</strong> All tokens stored locally on your Steam Deck</li>
          <li>🔐 <strong>Standard OAuth flow:</strong> Same login method used by official store websites</li>
        </ul>
      </div>
    </div>

    <div class="faq-item decky" data-version="decky">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
      </div>
      <h3>How do I install the Junk Store Decky plugin?</h3>
      <div class="faq-answer">
        <p>Install through the Decky Plugin Store:</p>
        <ol>
          <li>Open Decky Loader (Quick Access menu → plug icon)</li>
          <li>Browse to the Plugin Store</li>
          <li>Search for "Junk Store"</li>
          <li>Click Install</li>
        </ol>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional">
      <div class="version-badges">
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Can I try before I buy to see if it's worth $40?</h3>
      <div class="faq-answer">
        <p><strong>Yes!</strong> Junk Store 2.0 includes a 7-day free trial with full access to all features. You can test everything before committing to the annual subscription.</p>
        <p>The trial gives you time to install games, test compatibility, and see if the Game Mode-native experience works for your gaming habits.</p>
      </div>
    </div>

    <div class="faq-item professional" data-version="professional">
      <div class="version-badges">
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>What makes Junk Store different from free alternatives?</h3>
      <div class="faq-answer">
        <p><strong>Junk Store is Steam Deck-specific software</strong> designed exclusively for handheld gaming workflows, while alternatives are general PC gaming tools adapted for Steam Deck.</p>

        <p><strong>Key differences:</strong></p>
        <ul>
          <li><strong>Steam Deck Controller Navigation:</strong> Every interaction optimized for the full Steam Deck controller experience</li>
          <li><strong>Game Mode Native:</strong> Works entirely within Game Mode - no desktop switching required</li>
          <li><strong>Direct Launch:</strong> Games launch directly without nested launchers</li>
          <li><strong>Unified Library:</strong> Epic, GOG, Amazon & itch.io games AND emulators integrated into Steam library</li>
          <li><strong>Built-in Automation:</strong> Dependency management, artwork caching, and ROM downloads handled automatically</li>
        </ul>

        <p>If Desktop Mode workflows work for you, free alternatives are excellent choices. Junk Store focuses specifically on seamless Game Mode integration for users who prefer staying in the Steam ecosystem.</p>
      </div>
    </div>
  </div>

  <!-- Game Management -->
  <div class="faq-category">
    <h2>Game Management</h2>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>How do I find save data for my games?</h3>
      <div class="faq-answer">
        <p>Game saves are typically located in:</p>
        <ul>
          <li><strong>Epic Games:</strong> <code>~/.local/share/Steam/steamapps/compatdata/[AppID]/pfx/drive_c/users/steamuser/Documents/</code></li>
          <li><strong>GOG Games:</strong> <code>~/.local/share/Steam/steamapps/compatdata/[AppID]/pfx/drive_c/users/steamuser/</code></li>
          <li><strong>General rule:</strong> Look in the Proton prefix under Documents, AppData, or game-specific folders</li>
        </ul>
        <p><strong>Pro tip:</strong> Check <a href="https://pcgamingwiki.com" target="_blank">PCGamingWiki</a> for specific save locations for your game.</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>How do I change the Proton version for a game?</h3>
      <div class="faq-answer">
        <p>Change Proton versions through Steam's game properties:</p>
        <ol>
          <li>Right-click the game in your Steam library</li>
          <li>Select Properties</li>
          <li>Go to Compatibility tab</li>
          <li>Check "Force the use of a specific Steam Play compatibility tool"</li>
          <li>Select your preferred Proton version</li>
        </ol>
        <p><strong>Tip:</strong> GE-Proton versions often work better for non-Steam games.</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>How do I change the FPS or performance settings for games?</h3>
      <div class="faq-answer">
        <p>Use Steam Deck's built-in performance controls:</p>
        <ul>
          <li><strong>Quick Access Menu:</strong> Press the "..." button for performance overlay</li>
          <li><strong>Frame Rate Limit:</strong> Set in Quick Access → Performance</li>
          <li><strong>Power Settings:</strong> Adjust TDP and GPU clock speeds</li>
          <li><strong>Per-Game Settings:</strong> Each game can have custom performance profiles</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Game Compatibility -->
  <div class="faq-category">
    <h2>Game Compatibility</h2>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>How many games are compatible?</h3>
      <div class="faq-answer">
        <p>We've tested over 670 games across all platforms. Check our <a href="/tested-games/">compatibility database</a> for specific titles.</p>
        <p><strong>Generally compatible:</strong> Most single-player games work great</p>
        <p><strong>Limited compatibility:</strong> Multiplayer games with anti-cheat systems</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Do games requiring third-party launchers (EA, Ubisoft, etc.) work?</h3>
      <div class="faq-answer">
        <p><strong>Mixed compatibility.</strong> Here's what to expect:</p>
        <ul>
          <li><strong>Often work:</strong> EA App, Ubisoft Connect (older games)</li>
          <li><strong>Sometimes work:</strong> Newer titles may have additional launcher requirements</li>
          <li><strong>Rarely work:</strong> Games requiring always-online DRM or anti-cheat</li>
        </ul>
        <p>Check our <a href="/tested-games/">compatibility database</a> for specific game status.</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Can I play Fortnite via Junk Store?</h3>
      <div class="faq-answer">
        <p><strong>No.</strong> Fortnite uses Easy Anti-Cheat (EAC) which is not compatible with Linux/Steam Deck for this game specifically.</p>
        <p>While EAC supports Linux in general, Epic Games has not enabled Linux support for Fortnite's EAC implementation.</p>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Can I use Junk Store with games I already installed using other third-party solutions?</h3>
      <div class="faq-answer">
        <p><strong>No.</strong> Games installed through other launchers (Heroic, Lutris, etc.) cannot be imported into Junk Store.</p>
        <p>You'll need to reinstall games through Junk Store to use its features. This ensures proper integration with Steam and prevents conflicts between different launcher configurations.</p>
      </div>
    </div>
  </div>

  <!-- Support -->
  <div class="faq-category">
    <h2>Support & Community</h2>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>I think I've found a bug. How do I report it?</h3>
      <div class="faq-answer">
        <p>Report bugs on our GitHub repository with detailed information:</p>
        <ul>
          <li><strong>For all versions:</strong> <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues/new" target="_blank">GitHub Issues</a></li>
          <li><strong>Include:</strong> Your Junk Store version, Steam Deck OS version, steps to reproduce</li>
          <li><strong>For game-specific issues:</strong> Game name, store platform, and error details</li>
        </ul>
      </div>
    </div>

    <div class="faq-item shared" data-version="shared">
      <div class="version-badges">
        <span class="version-badge decky">Decky</span>
        <span class="version-badge professional">2.0</span>
      </div>
      <h3>Where can I get community help?</h3>
      <div class="faq-answer">
        <p>Join our active community for help and tips:</p>
        <ul>
          <li><strong>Discord:</strong> <a href="https://discord.gg/6mRUhR6Teh" target="_blank">Fast help from community and team</a></li>
          <li><strong>Reddit:</strong> <a href="https://www.reddit.com/r/JunkStore/" target="_blank">r/JunkStore community</a></li>
          <li><strong>Documentation:</strong> <a href="/tutorials/">Complete tutorial guides</a></li>
        </ul>
      </div>
    </div>
  </div>

</section>

<style>
.help-breadcrumb {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1.5rem;
  color: #c8c8c8;
  font-size: 0.9rem;
}

.help-breadcrumb a {
  color: #66bfff;
  text-decoration: none;
}

.version-filter {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  text-align: center;
}

.version-filter h2 {
  color: #66bfff;
  margin-bottom: 1.5rem;
}

.filter-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e8e8e8;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: rgba(255, 163, 102, 0.2);
  border-color: #ffa366;
  color: #ffa366;
}

.faq-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

.faq-category {
  margin-bottom: 3rem;
}

.faq-category h2 {
  color: #66bfff;
  border-bottom: 2px solid #66bfff;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.hidden {
  display: none;
}

.version-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem 0;
}

.version-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.version-badge.decky {
  background: rgba(40, 167, 69, 0.2);
  color: #28a745;
  border: 1px solid rgba(40, 167, 69, 0.3);
}

.version-badge.professional {
  background: rgba(255, 163, 102, 0.2);
  color: #ffa366;
  border: 1px solid rgba(255, 163, 102, 0.3);
}

.faq-item h3 {
  color: #ffa366;
  margin: 0;
  padding: 0 1.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
}

.faq-item h3:hover {
  color: #66bfff;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #e8e8e8;
  line-height: 1.6;
}

.faq-answer p {
  margin-bottom: 1rem;
}

.faq-answer ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
}

.comparison-table th {
  background: rgba(255, 163, 102, 0.1);
  color: #ffa366;
  font-weight: 600;
}

.comparison-table td {
  color: #e8e8e8;
}

@media (max-width: 768px) {
  .filter-buttons {
    flex-direction: column;
    align-items: center;
  }

  .filter-btn {
    width: 200px;
  }

  .comparison-table {
    font-size: 0.9rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const faqItems = document.querySelectorAll('.faq-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter FAQ items
      const filter = this.dataset.filter;

      faqItems.forEach(item => {
        if (filter === 'all' || item.dataset.version === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // FAQ accordion functionality
  faqItems.forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('.faq-answer');

    // Initially hide answers
    answer.style.display = 'none';

    question.addEventListener('click', function() {
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});
</script>