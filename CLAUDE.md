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

### Completed Optimizations (Latest: July 2025)
- **Performance:** 25.58MB savings (40% reduction)
- **Technical:** CSS cleanup, dark theme fixes, image optimization
- **SEO:** Meta descriptions, page titles, keyword integration
- **Infrastructure:** Comprehensive project management system
- **Homepage Content:** Section-by-section accuracy review and competitive messaging refinement
- **Homepage Styling:** Unified section padding, title alignment, and spacing consistency
- **Problem/Solution Design:** Fixed horizontal alignment between comparison boxes
- **Competitive Positioning:** Respectful but clear differentiation from free alternatives

### Previous Phase Completed
1. ✅ Homepage hero section with "Never leave Game Mode" messaging (COMPLETED)
2. ✅ Competitive positioning vs Heroic/Lutris/NonSteamLaunchers (COMPLETED)
3. ✅ Pricing value justification ($40/year vs free alternatives) (COMPLETED)
4. ✅ Mobile experience optimization (60% of traffic) (COMPLETED)
5. ✅ Trust building and social proof enhancement (COMPLETED)

### CURRENT ACTIVE PRIORITIES (July 31, 2025)
**LIVE SITE STATUS VERIFIED:** All 2.0 pages functional, redirects working correctly

**COMPLETED ITEMS:**
1. ✅ **Homepage Optimization** - COMPLETED: Hero section, competitive positioning, pricing justification all live
2. ✅ **Core 2.0 Page Structure** - COMPLETED: All primary pages (/, /about/, /gallery/, /tested-games/, /buy_now/) working
3. ✅ **2.0 Page Redirects** - COMPLETED: /comingsoon/ and /learnmore/ redirecting properly to /2.0faq/
4. ✅ **Game Compatibility Update** - COMPLETED: JavaScript-based table updated in place at /tested-games/
5. ✅ **Documentation Archival** - COMPLETED: Outdated analysis files moved to archive

**CURRENT FOCUS AREAS:**
1. 🎯 **Mobile Performance Optimization** - Continue improvements for 60% of traffic
2. 🔥 **Secondary Page Enhancement** - Strengthen competitive messaging on About, Gallery pages
3. 📊 **Conversion Optimization** - Monitor and improve trial signup flow
4. 🚀 **Content Strategy** - Consider tutorial video production for competitive advantage
5. ⚡ **Performance Monitoring** - Maintain 40% size reduction and loading speed gains

**NOTE:** Decky-related pages intentionally excluded from current updates per user direction

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