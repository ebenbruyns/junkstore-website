# CLAUDE.md - Junk Store Website Project Context
**Documentation Organized:** July 29, 2025 - All project files now in unified `docs/` structure

## Project Overview
**Junk Store Website Optimization & Strategic Development**
- Jekyll-based static site for Junk Store 2.0 (Steam Deck app for non-Steam games)
- Focus: Performance optimization, SEO, strategic messaging, and conversion optimization
- Target: Steam Deck users wanting to play Epic, GOG & Amazon games without Desktop Mode

## Core Value Proposition & Brand Positioning
**Unique Competitive Advantages:**
- **Game Mode Native:** Never requires Desktop Mode switching - pure Steam integration
- **Direct Launch:** No launcher-within-launcher complexity - games launch directly
- **Unified Library:** Emulators integrated into Steam library alongside other games
- **Rapid Updates:** Direct update channels for quick fixes and feature rollouts
- **Native-like Experience:** Games integrated as natively as possible into Steam ecosystem

**Primary Message:** "Never leave Game Mode to play your Epic, GOG & Amazon games"
**Core Differentiation:** Complete Steam ecosystem integration vs external launcher solutions

### ⚠️ CRITICAL MESSAGING POLICY (July 29, 2025)
**NO DIRECT COMPETITOR COMPARISONS OR CALLOUTS**
- Avoid naming specific alternatives (Heroic, Lutris, NonSteamLaunchers, etc.)
- Focus on our unique value: Game Mode native experience
- Use respectful language: "alternatives" instead of competitor names
- Avoid potentially inaccurate claims about competitor features
- Maintain developer community relationships - don't be abrasive
- **This policy may be revisited in future but is firm for now**

## 🤖 MANDATORY AGENT USAGE PROTOCOL
**⚠️ CRITICAL: Always use specialized agents - DO NOT work directly without agent consultation**

### When to Use Each Agent (MANDATORY)

#### 🔧 **Technical Work** → `quality-assurance-build-safety-agent` 
**ALWAYS USE FOR:**
- Any SCSS/CSS changes or styling work
- Jekyll build modifications or configuration  
- File operations (create, edit, delete)
- Performance optimizations or mobile fixes
- Any changes that could break the site build

#### ✍️ **Content Work** → `strategic-content-brand-consistency-agent`
**ALWAYS USE FOR:**
- Copywriting, messaging, or text changes
- FAQ organization or tutorial content
- Brand voice enforcement and consistency
- Marketing copy or competitive messaging
- Any user-facing content creation

#### 📊 **Strategic Work** → `strategic-positioning-market-intelligence-agent`
**ALWAYS USE FOR:**
- Competitive messaging or positioning
- Market analysis or value proposition work  
- Pricing justification or strategic decisions
- Competitor research or differentiation

#### 💰 **Business Work** → `business-conversion-revenue-optimization-agent`
**ALWAYS USE FOR:**
- Conversion optimization or homepage improvements
- Trial signup focus or user experience enhancements
- Revenue-focused decisions or A/B testing
- Customer journey optimization

#### 🎯 **Complex Tasks** → `project-coordination-quality-control-agent`
**ALWAYS USE FOR:**
- Multi-step tasks requiring multiple agents
- Quality control oversight and coordination
- Strategic planning or resource allocation
- Any task involving 3+ file changes

### 🚨 NON-NEGOTIABLE RULES
1. **NEVER** perform specialized work without consulting the relevant agent first
2. **ALWAYS** delegate to agents immediately when starting any task
3. **MANDATORY** agent consultation - not optional or "when convenient"
4. **NO EXCEPTIONS** - even for "quick fixes" or "simple changes"

### Agent Deployment Pattern
```
Task Received → Identify Type → Deploy Relevant Agent → Execute via Agent → Quality Check
```

**Example:**
- User asks to "fix FAQ styling" → Deploy `quality-assurance-build-safety-agent` + `strategic-content-brand-consistency-agent`
- User asks for "competitive messaging" → Deploy `strategic-positioning-market-intelligence-agent` + `strategic-content-brand-consistency-agent`

## Documentation Organization Structure (Organized July 29, 2025)
- **Primary Documentation Hub:** `docs/` - Single organized location for all project documentation
- **Current Night Reports:** 
  - `docs/SITE_ANALYSIS_REPORT.md` - Comprehensive site audit (July 29, 2025)
  - `docs/TUTORIAL_STRATEGY_REPORT.md` - High-impact tutorial strategy (July 29, 2025)
  - `docs/IMPLEMENTATION_PLAN.md` - Prioritized action items (July 29, 2025)
  - `docs/DOCUMENTATION_MAINTENANCE_PLAN.md` - Documentation system (July 29, 2025)
- **Organized Subfolders:**
  - `docs/agents/` - All agent documentation files
  - `docs/knowledge-base/` - Research reports and brand guides
  - `docs/project-management/` - Project tracking and roadmaps
  - `docs/operations/` - QA procedures and coordination protocols
  - `docs/reports/` - Executive summaries and technical reports
  - `docs/scripts/` - Automation and utility scripts

## User Preferences & Requirements

### Critical Protocols (NEVER VIOLATE)
- **ALWAYS read files before attempting to edit or write to them** (mandatory protocol)
- **NEVER delete docs/ directory or agent files without explicit permission**
- **ASK before major deletions or structural changes**
- **Reference CLAUDE.md at start of each session**
- **Update TodoWrite for all complex multi-step tasks**
- **Use parallel tool calls for efficiency when possible**
- **FOLLOW MANDATORY AGENT USAGE PROTOCOL above** - never work without agents

### Quality Standards
- Test all changes with Jekyll build verification: `bundle exec jekyll build`
- Follow QA procedures for any SCSS/build changes (safety first)
- Maintain dark theme consistency (no light mode switching)
- Verify git status before committing changes
- Use logical commit messages with proper attribution

### Communication Style
- **Be concise and direct** (user prefers minimal explanations unless asked)
- **Focus on actionable outcomes** over theoretical discussion
- **Provide specific file paths with line numbers** when referencing code
- **Use TodoWrite tool** to track progress on complex tasks
- **Batch related tasks** for efficiency

### Technical Preferences
- **Current Build System:** Jekyll with Minimal Mistakes theme
- **Table System:** JavaScript-based tables with JSON data (not Jekyll liquid)
- **Performance Priority:** Site optimized to 42.9MB (was 64.3MB)
- **Git Workflow:** 
  - **SEPARATE COMMITS REQUIRED:** Always separate website files from documentation files
    - **Website commits:** Files that affect the built site (_pages/, _sass/, assets/, _config.yml, etc.)
    - **Documentation commits:** Files in docs/, CLAUDE.md, and other development-only files
    - This allows clean cherry-picking for production builds
  - Logical commit messages with proper descriptions, avoid massive commits

## File Management Rules

### Never Delete/Modify Without Permission
- Any files in `docs/` directory (project management system)
- Current working table files (`tested-games.md`, `tested-games-js.md`)
- Active SCSS files in import chains
- Production image assets

### Safe to Clean Up (with confirmation)
- Backup files (*.backup)
- Clearly marked experimental/test files
- Redundant/duplicate functionality

### Git Ignore Pattern
```
# Project management and internal documentation
docs/
*.backup
vendor/
_site/
assets/lib
```

## Current Phase: Strategic Website Improvements

### Completed Optimizations (Latest: August 12, 2025)
- **CRITICAL MOBILE PERFORMANCE FIX:** Resolved catastrophic 57/100 mobile PageSpeed score
  - 4.3MB lazy loading implementation (89% initial load reduction)
  - Hero image optimization: 532KB → 444KB sitewide (88KB per page)
  - JavaScript deferred, LCP preloading, 1-year cache headers
  - Expected LCP improvement: 27.9s → <2.5s
- **Performance:** 25.58MB + 4.3MB additional savings (45MB total reduction)
- **Technical:** CSS cleanup, dark theme fixes, comprehensive image optimization
- **SEO:** Meta descriptions, page titles, keyword integration
- **Infrastructure:** Comprehensive project management system
- **Homepage Content:** Section-by-section accuracy review and competitive messaging refinement
- **Homepage Styling:** Unified section padding, title alignment, and spacing consistency
- **Problem/Solution Design:** Fixed horizontal alignment between comparison boxes
- **Competitive Positioning:** Respectful but clear differentiation from free alternatives
- **Comparison Page Updates:** Added Recent Updates highlight box, new feature comparisons, comprehensive spacing optimization, enhanced visual presentation

### Previous Phase Completed
1. ✅ Homepage hero section with "Never leave Game Mode" messaging (COMPLETED)
2. ✅ Competitive positioning vs Heroic/Lutris/NonSteamLaunchers (COMPLETED)
3. ✅ Pricing value justification ($40/year vs free alternatives) (COMPLETED)
4. ✅ Mobile experience optimization (60% of traffic) (COMPLETED)
5. ✅ Trust building and social proof enhancement (COMPLETED)

### CURRENT ACTIVE PRIORITIES (August 7, 2025)
**LIVE SITE STATUS VERIFIED:** All 2.0 pages functional, redirects working correctly

**COMPLETED ITEMS:**
1. ✅ **Homepage Optimization** - COMPLETED: Hero section, competitive positioning, pricing justification all live
2. ✅ **Core 2.0 Page Structure** - COMPLETED: All primary pages (/, /about/, /gallery/, /tested-games/, /buy_now/) working
3. ✅ **2.0 Page Redirects** - COMPLETED: /comingsoon/ and /learnmore/ redirecting properly to /2.0faq/
4. ✅ **Game Compatibility Update** - COMPLETED: JavaScript-based table updated in place at /tested-games/
5. ✅ **Documentation Archival** - COMPLETED: Outdated analysis files moved to archive
6. ✅ **Comparison Page Enhancement** - COMPLETED: Added Recent Updates feature highlight box with blue styling, new comparison table features (Offline Mode Per Game, System Language Detection Per Game), comprehensive spacing optimization throughout page
7. ✅ **Optimized Games Table Implementation** - COMPLETED: Static optimized games table with fast loading, pagination, modal system, and black/orange theme matching source project
8. ✅ **Modal System Enhancement** - COMPLETED: Comprehensive modal improvements matching source project design with interactive hover effects, enhanced typography, and compact spacing
9. ✅ **Search Field Clear Button** - COMPLETED: Added functional × clear button to search input with dynamic show/hide and hover effects
10. ✅ **Anti-Cheat Game Integration** - COMPLETED: Added 10 anti-cheat games with clear incompatibility warnings and improved emoji clarity
11. ✅ **Compatibility Legend System** - COMPLETED: Added compact legend explaining all emoji meanings for better user understanding
12. ✅ **itch.io Store Integration** - COMPLETED: Added itch.io store badge with official branding, ready for future game testing

**CURRENT FOCUS AREAS:**
1. ✅ **Blog System** - COMPLETED: Full blog implementation with navigation, TOC, and templates
2. 🖼️ **Game Images Integration** - Connect SQLite database images to optimized table system
3. 🎯 **Mobile Performance Optimization** - Continue improvements for 60% of traffic
4. 🔥 **Secondary Page Enhancement** - Strengthen competitive messaging on About, Gallery pages
5. 📊 **Conversion Optimization** - Monitor and improve trial signup flow
6. 🚀 **Content Strategy** - Blog templates ready for regular content creation
7. ⚡ **Performance Monitoring** - Maintain 40% size reduction and loading speed gains

## Recent Technical Implementation (August 7, 2025)

### Modal System Enhancement - COMPLETED ✅
**Comprehensive modal improvements matching source project design with full QA agent deployment:**

**Enhanced Modal Features:**
- ✅ **Enhanced Header Design**: Linear gradient backgrounds, improved typography (1.2rem titles), enhanced text shadows
- ✅ **Interactive Hover Effects**: Transform animations with translateY(-4px) scale(1.02), multi-layered shadows, orange border glow
- ✅ **Tab System Optimization**: Enhanced padding (18px 30px), gradient active states, shimmer effects on hover
- ✅ **Compact Spacing**: Reduced section margins (30px → 15px), smaller info item padding, optimized content areas
- ✅ **Text Size Optimization**: Reduced font sizes throughout to minimize scrolling for long descriptions
- ✅ **Perfect Modal Positioning**: 40px top/bottom margins with calc(100vh - 80px) height for balanced spacing
- ✅ **Status Color Correction**: Fixed "Advanced tinkering" to display red instead of orange
- ✅ **Professional Animations**: Smooth cubic-bezier transitions, hover transforms, enhanced visual effects

### Search Field Enhancement - COMPLETED ✅
**Added functional clear button with dynamic behavior:**

**Clear Button Features:**
- ✅ **Dynamic Visibility**: Shows/hides based on search input content
- ✅ **Functional Clearing**: Clears search and refocuses input on click
- ✅ **Hover Effects**: Orange theme highlighting with background transitions
- ✅ **Proper Positioning**: Positioned inside search field with adequate spacing
- ✅ **Event Handling**: Integrated with existing search functionality and filtering

### Anti-Cheat Integration & UX Improvements - COMPLETED ✅ (August 13, 2025)
**Comprehensive integration of anti-cheat games with improved compatibility display:**

**Anti-Cheat Game Features:**
- ✅ **10 Anti-Cheat Games Added**: Fortnite, Apex Legends, Destiny 2, League of Legends, PUBG, The Crew: Motorfest, Ghost Recon: Breakpoint, Rainbow Six Extraction, Valorant, Wuthering Waves
- ✅ **Clear Incompatibility Warning**: "⚠️ Incompatible - Anti Cheat" message spans both compatibility columns
- ✅ **Non-Clickable Titles**: Anti-cheat games display as static text (no modals since untestable)
- ✅ **Proper Integration**: Games marked with `cant_test_linux: true` and `tested: true` for filtering
- ✅ **Orange Warning Styling**: Anti-cheat warnings use site theme colors with subtle background highlight

**Compatibility Display Improvements:**
- ✅ **Improved "Tinkering" Emoji**: Changed ⚠️ to 🟡 for "minor tinkering" to avoid negative impression
- ✅ **Compact Legend System**: Added compatibility legend above table explaining all emoji meanings
- ✅ **Legend Design**: Horizontal layout with orange theme titles and responsive mobile behavior
- ✅ **Clear Status Mapping**: ✅ Works great | 🟡 Minor tinkering | 🔧 Advanced tinkering | ❌ Doesn't work | ⚠️ Anti-cheat incompatible

**Data Integration:**
- ✅ **Updated JSON Structure**: Enhanced games.json with new metadata fields (673 total games)
- ✅ **Thumbnail Support**: Ready for game artwork URLs from database integration
- ✅ **Language Support Ready**: Modal prepared for language_support field display
- ✅ **Enhanced Publisher Data**: Updated publisher information across game database

### itch.io Store Integration - COMPLETED ✅ (August 13, 2025)
**Added fourth storefront support with official itch.io branding:**

**Store Badge Implementation:**
- ✅ **Official Brand Color**: Coral red (#fa5c5c) from itch.io official press kit ("itchy carnation")
- ✅ **Badge Styling**: White text on coral background for optimal contrast and readability
- ✅ **Lowercase Storefront**: Uses "itch" identifier as requested for consistency
- ✅ **Production Ready**: Badge automatically displays when games have `"storefront": "itch"`

**Technical Implementation:**
- ✅ **CSS Integration**: Added `.store-badge.itch` styling to match existing store badges
- ✅ **Stats Counter Prepared**: itch.io counter code ready but hidden until testing begins
- ✅ **Fallback Handling**: Graceful handling with `|| 0` when no itch games exist
- ✅ **Consistent Theming**: Matches existing Epic (black), GOG (purple), Amazon (green) badge system

**Current Store Badge Support:**
- **Epic Games**: Black (#000)
- **GOG**: Purple (#86328a) 
- **Amazon**: Green (#00a14f)
- **itch.io**: Coral Red (#fa5c5c) ✨

**Future Activation:**
- Stats counter hidden until itch.io game testing begins
- Easy re-activation by uncommenting stats display code
- Badge styling ready for immediate use with itch.io games

### Comprehensive Blog System - COMPLETED ✅ (September 1, 2025)
**Complete blog implementation with professional navigation and content management:**

**Blog Landing Page Features:**
- ✅ **2-Card Hero Layout**: Tip of the Week + Weekly Games Tested featured prominently
- ✅ **Smart Category Filtering**: All Posts, Weekly Updates, Tips & Tricks, Game Spotlights, Feature Releases
- ✅ **Pagination System**: Load More functionality with smooth animations and post counting
- ✅ **Back-to-Top Button**: Fixed positioning with blue gradient theme matching
- ✅ **Mobile Responsive**: Optimized layout for mobile users (60% of traffic)

**Individual Blog Post Enhancements:**
- ✅ **Sticky TOC System**: Auto-generated table of contents that slides in from right side
- ✅ **Smart TOC Behavior**: Shows/hides based on scroll position, highlights active sections
- ✅ **Collapsible TOC**: Toggle with localStorage memory, custom scrollbar styling
- ✅ **Back-to-Top Button**: Left-side positioning to avoid TOC conflicts
- ✅ **Game Thumbnail Integration**: Support for game artwork in blog posts with flexbox layout

**Content Templates Created:**
- ✅ **Tip of the Week**: Steam Deck tips and shortcuts with step-by-step guides
- ✅ **Game Spotlight**: In-depth game reviews with compatibility analysis
- ✅ **Feature Release**: New Junk Store feature announcements and usage guides
- ✅ **Weekly Update**: Game compatibility testing results (existing format enhanced)

**Technical Implementation:**
- Blog collection configured in `_config.yml` with permalink structure
- Custom `post.html` layout with enhanced meta information and CTA footer
- JavaScript-based filtering and pagination with category-aware logic
- Professional sliding animations and hover effects throughout
- Blue gradient theme consistency with site design
- Hidden on mobile for optimal user experience

**SEO and Content Strategy:**
- Clean URL structure: `/blog/post-title/`
- Category-based content organization for easy discovery
- Internal linking strategy to drive traffic between site sections
- Meta descriptions and structured data for search engines

### Optimized Games Table System - COMPLETED ✅
**Successfully implemented and refined static optimized games table with full isolation:**

**Key Features Completed:**
- ✅ **Fast Loading**: Lightweight summary loads first, detailed modals on-demand
- ✅ **Pagination**: 20 games per page with clean navigation controls
- ✅ **Isolated CSS**: `games-table-optimized.scss` prevents theme conflicts
- ✅ **Black/Orange Theme**: Matches source project styling exactly
- ✅ **Modal System**: Bootstrap-style tabs with game details and testing info
- ✅ **Featured Game Highlighting**: Orange left border and subtle background
- ✅ **Clean Emoji Display**: Compatibility ratings without CSS interference
- ✅ **Proper Table Layout**: Forced table display overrides theme blocks
- ✅ **Image Placeholder System**: Gamepad icons when artwork missing
- ✅ **Responsive Design**: Mobile-friendly card layout
- ✅ **JSON-Only Featured Games**: Hybrid system ready for `is_featured` field in exports
- ✅ **Four-Tier Rating System**: Perfect/Green, Yellow (minor tinkering), Red (advanced tinkering), Not-working
- ✅ **Perfect Modal Styling**: Centered positioning, proper colors, section headers, icons
- ✅ **Storefront Badge Colors**: Epic (#444), GOG (#8b4dbd), Amazon (#00a14f)

**Modal Enhancements Completed:**
- ✅ **Perfect Centering**: Modals display centered in viewport (not top-aligned)
- ✅ **Section Header Icons**: Gamepad (blue #007bff), Tools (green #28a745), Clipboard (teal #17a2b8)
- ✅ **Orange Theme Elements**: All headers, labels, and non-status values in theme orange (#ffa366)
- ✅ **Status Color Coding**: Green (works great), Yellow (minor tinkering), Orange (advanced tinkering), Red (doesn't work)
- ✅ **Proper CSS Specificity**: JavaScript inline styles force correct positioning and colors

**Rating System Mapping:**
- **"Perfect"/"green"** → Green → "Works great"
- **"yellow"** → Yellow → "Minor tinkering"  
- **"red"** → Orange → "Advanced tinkering"
- **"not-working"** → Red → "Doesn't work"

**Technical Files Modified:**
- `_sass/games-table-optimized.scss` - Complete isolated styling system
- `assets/js/games-table-optimized.js` - Static table with modal functionality and inline style overrides
- `_sass/minimal-mistakes.scss` - Updated imports
- `assets/css/main.scss` - Updated imports
- `_sass/games-modal.scss` - Modal centering, icons, headers, and comprehensive color theming

**System Ready For:**
- SQLite database artwork URLs in JSON export (`verticalArtwork` field)
- Featured games via `"is_featured": true` in JSON (currently uses YML fallback)
- Single JSON file updates for all content changes

**NOTE:** Decky-related pages intentionally excluded from current updates per user direction

### FAQ & Troubleshooting Direct Linking Feature (August 11, 2025)
**Enhanced support experience with linkable questions:**

**Direct Linking System:**
- All FAQ and troubleshooting questions now have unique IDs for direct linking
- Format: `/2.0faq/#question-slug` and `/2.0troubleshooting/#question-slug`
- Questions automatically open and scroll into view when accessed via direct link
- Visual highlight effect provides clear feedback when question opens

**Copy-to-Clipboard Functionality:**
- 🔗 buttons appear on hover for each question
- Cross-browser compatibility with modern clipboard API and enhanced fallbacks
- Robust error handling for HTTP contexts, older browsers, and permission issues
- Success/error notifications with visual feedback (green for success, red for errors)
- Mobile-friendly implementation with proper touch support

**Support Team Usage:**
Support can now share direct links to specific answers:
- "How to install custom Proton?" → `/2.0faq/#install-custom-proton`
- "Games not showing up?" → `/2.0troubleshooting/#games-not-showing`  
- "Change game language?" → `/2.0faq/#change-game-language`
- "Keyboard issues in Game Mode?" → `/2.0troubleshooting/#keyboard-issues`

**Technical Implementation:**
- JavaScript auto-generates anchor buttons for all questions with IDs
- Fallback copy methods for browsers without clipboard API support
- Error notifications display full URL for manual copying when automated copy fails
- Hash change detection ensures browser navigation compatibility

### Analysis Reports Generated (July 29, 2025)
- **`/docs/SITE_ANALYSIS_REPORT.md`** - Complete audit of all 25+ pages with specific action items
- **`/docs/TUTORIAL_STRATEGY_REPORT.md`** - High-impact video tutorial strategy and production plan
- **`/docs/IMPLEMENTATION_PLAN.md`** - Prioritized timeline with resource allocation and success metrics
- **`/docs/DOCUMENTATION_MAINTENANCE_PLAN.md`** - System for keeping all documentation current

## Active Specialized Agents (User Created)

### 🎯 **PRIMARY AGENTS** (Use for all major tasks)

#### **project-coordination-quality-control-agent** 🟢 FULL AUTONOMY
- **Role:** Task Master - Central coordination hub for all agents
- **When to Use:** Complex multi-step tasks, agent coordination, quality control
- **Authority:** Can deploy other agents, has veto power over quality issues
- **Key Functions:** Workflow orchestration, error prevention, strategic alignment

#### **strategic-content-brand-consistency-agent** 🟢 FULL AUTONOMY  
- **Role:** Content creation and brand voice enforcement
- **When to Use:** Any content creation, messaging, copywriting, proofreading
- **Key Functions:** Strategic copywriting, brand consistency, professional quality
- **Focus:** "Never leave Game Mode" messaging, competitive positioning

#### **quality-assurance-build-safety-agent** 🟢 VETO POWER
- **Role:** Website safety and build verification
- **When to Use:** Any technical changes, SCSS modifications, file operations
- **Authority:** Can halt dangerous operations, mandatory for Jekyll builds
- **Key Functions:** Build verification, file safety, rollback procedures

### 🎯 **STRATEGIC AGENTS** (Use for business optimization)

#### **strategic-positioning-market-intelligence-agent** 🟡 HIGH AUTONOMY
- **Role:** Competitive analysis and market positioning
- **When to Use:** Competitive messaging, strategic positioning, market analysis
- **Key Functions:** Monitor competitors, strategic differentiation, messaging framework
- **Focus:** Heroic/Lutris/NonSteamLaunchers competitive landscape

#### **business-conversion-revenue-optimization-agent** 🟡 HIGH AUTONOMY
- **Role:** Conversion optimization and revenue focus
- **When to Use:** Homepage optimization, pricing justification, conversion improvements
- **Key Functions:** Trial signup optimization, value communication, mobile conversion
- **Focus:** Justify $40/year vs free alternatives

#### **site-performance-speed-optimization-agent** 🟡 HIGH AUTONOMY
- **Role:** Technical performance and speed optimization
- **When to Use:** Performance issues, image optimization, Core Web Vitals
- **Key Functions:** Maintain 25.58MB savings, mobile performance (60% traffic)
- **Focus:** Technical performance without breaking functionality

### 🔄 **AGENT USAGE PATTERNS**

#### **For Homepage/Content Work:**
1. **project-coordination-quality-control-agent** → Coordinates workflow
2. **strategic-content-brand-consistency-agent** → Creates content
3. **strategic-positioning-market-intelligence-agent** → Provides competitive context
4. **business-conversion-revenue-optimization-agent** → Optimizes for conversion
5. **quality-assurance-build-safety-agent** → Final safety check

#### **For Technical Changes:**
1. **quality-assurance-build-safety-agent** → Pre-change verification
2. **site-performance-speed-optimization-agent** → Performance optimization  
3. **project-coordination-quality-control-agent** → Workflow coordination
4. **quality-assurance-build-safety-agent** → Post-change verification

#### **For Strategic Decisions:**
1. **strategic-positioning-market-intelligence-agent** → Market analysis
2. **business-conversion-revenue-optimization-agent** → Business impact
3. **project-coordination-quality-control-agent** → Final coordination

### 🚨 **MANDATORY USAGE RULES**
- **ALWAYS use project-coordination-quality-control-agent for complex tasks**
- **NEVER bypass quality-assurance-build-safety-agent for technical changes**
- **USE strategic-content-brand-consistency-agent for ALL content work**
- **REFERENCE strategic-positioning-market-intelligence-agent for competitive messaging**

### 📋 **POST-CHANGE COORDINATION PROTOCOL**
**AUTOMATIC REQUIREMENTS (Execute after ANY significant changes):**
1. **Agent Updates**: Sync all relevant agents with latest context and changes
2. **Build Verification**: Confirm Jekyll build still completes successfully 
3. **Mobile Testing**: Verify responsiveness maintained across screen sizes
4. **Documentation Updates**: Update CLAUDE.md and project docs with current status
5. **Quality Assurance**: Run through QA checklist for technical safety
6. **Strategic Alignment**: Ensure changes support conversion optimization goals

**This coordination should happen automatically - users should NOT need to manually request sync updates.**

## Key Business Context
- **Product:** Junk Store 2.0 ($40/year) + Free Decky Plugin
- **Market:** Steam Deck users frustrated with Desktop Mode switching
- **Competition:** Free alternatives that require Desktop Mode (our advantage)
- **Goal:** Convert visitors to paid subscribers through clear value communication

## Command Patterns
- Use parallel tool calls for efficiency
- Reference project docs before major changes
- Update todo list for complex multi-step tasks
- Commit changes logically with proper messages

---

**This file should be referenced at the start of each session to maintain project context and user preferences.**