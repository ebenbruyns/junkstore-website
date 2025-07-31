# Dependency Monitor - Jekyll Website System

## Purpose
This system monitors and tracks all file dependencies, relationships, and critical paths to prevent breaking changes and ensure safe modifications across the Jekyll website.

---

## 🗺️ Complete Dependency Map

### 🏗️ Core System Architecture

#### Jekyll Build Pipeline:
```
_config.yml (Configuration)
    ↓
Jekyll Engine
    ↓
Theme System (minimal-mistakes)
    ↓
SCSS Compilation (main.scss → main.css)
    ↓
Page Generation (Markdown → HTML)
    ↓
Asset Processing (Images, JS, CSS)
    ↓
Site Output (_site/)
```

#### Critical Path Dependencies:
1. **Configuration**: `_config.yml` → Jekyll Engine
2. **Theme**: Remote theme → Local customizations
3. **Styling**: `main.scss` → `minimal-mistakes.scss` → Component files
4. **Content**: Markdown files → Jekyll templates → HTML output
5. **Assets**: Source files → Processed assets → Site distribution

---

## 📁 File Dependency Matrix

### 🚨 CRITICAL DEPENDENCIES (Never Modify Without Extreme Care)

#### Primary Entry Points:
```
/_config.yml
    ├── Affects: Entire Jekyll build process
    ├── Dependencies: All site generation
    ├── Risk Level: CRITICAL
    ├── Change Impact: Site-wide failure
    └── Rollback: Git restore, rebuild required

/assets/css/main.scss
    ├── Imports: minimal-mistakes theme + 6 custom files
    ├── Dependencies: Entire site styling
    ├── Risk Level: CRITICAL  
    ├── Change Impact: Complete styling failure
    └── Rollback: Git restore main.scss + rebuild

/_sass/minimal-mistakes.scss
    ├── Imports: 21 theme files + 10 custom files
    ├── Dependencies: All styling systems
    ├── Risk Level: CRITICAL
    ├── Change Impact: Theme system failure
    └── Rollback: Git restore + theme rebuild
```

#### Theme Core Files:
```
/_sass/minimal-mistakes/
    ├── _variables.scss       # Theme configuration
    ├── _base.scss           # Foundation styles
    ├── _mixins.scss         # SCSS utilities
    ├── _buttons.scss        # Button system
    ├── _navigation.scss     # Menu system
    ├── _footer.scss         # Footer system
    ├── _masthead.scss       # Header system
    ├── _page.scss           # Page layouts
    ├── _archive.scss        # List layouts
    ├── _sidebar.scss        # Sidebar system
    ├── [11 additional files] # Core functionality
    │
    ├── Risk Level: CRITICAL (each file)
    ├── Change Impact: Theme component failure
    └── Rollback: Theme system restoration required
```

### 🟡 HIGH RISK DEPENDENCIES (Require Careful Testing)

#### Custom Component Files (Dual Imports):
```
/_sass/buttons.scss
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: All button components site-wide
    ├── Pages affected: Every page with buttons
    ├── Risk Level: HIGH
    ├── Change Impact: Button styling failure
    └── Rollback: Git restore buttons.scss

/_sass/tested-games.scss  
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: Game compatibility table system
    ├── Pages affected: /tested-games/, game listings
    ├── Risk Level: HIGH
    ├── Change Impact: Major feature failure
    └── Rollback: Git restore tested-games.scss + data files

/_sass/content-boxes.scss
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: Content sections, info boxes
    ├── Pages affected: Multiple content pages
    ├── Risk Level: HIGH
    ├── Change Impact: Content layout failure
    └── Rollback: Git restore content-boxes.scss

/_sass/faq-box.scss
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: FAQ sections and accordions
    ├── Pages affected: FAQ pages, help sections
    ├── Risk Level: HIGH
    ├── Change Impact: FAQ functionality broken
    └── Rollback: Git restore faq-box.scss

/_sass/gallery.scss
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: Image galleries and media display
    ├── Pages affected: Gallery pages, image content
    ├── Risk Level: HIGH
    ├── Change Impact: Image display failure
    └── Rollback: Git restore gallery.scss

/_sass/troubleshooting-box.scss
    ├── Imported by: main.scss + minimal-mistakes.scss
    ├── Used by: Troubleshooting sections
    ├── Pages affected: Help pages, support content
    ├── Risk Level: HIGH
    ├── Change Impact: Support content styling broken
    └── Rollback: Git restore troubleshooting-box.scss
```

### 🟢 MEDIUM RISK DEPENDENCIES (Standard Testing Required)

#### Single-Import Custom Files:
```
/_sass/pricing-section.scss
    ├── Imported by: minimal-mistakes.scss only
    ├── Used by: Pricing display components
    ├── Pages affected: /buy_now/, pricing pages
    ├── Risk Level: MEDIUM
    ├── Change Impact: Pricing display issues
    └── Rollback: Git restore pricing-section.scss

/_sass/homepage-sections.scss
    ├── Imported by: minimal-mistakes.scss only
    ├── Used by: Landing page layout sections
    ├── Pages affected: Home page primarily
    ├── Risk Level: MEDIUM
    ├── Change Impact: Homepage layout issues
    └── Rollback: Git restore homepage-sections.scss

/_sass/compatibility-table.scss
    ├── Imported by: minimal-mistakes.scss only
    ├── Used by: Game compatibility tables
    ├── Pages affected: Compatibility pages
    ├── Risk Level: MEDIUM
    ├── Change Impact: Table functionality issues
    └── Rollback: Git restore compatibility-table.scss

/_sass/games-table.scss
    ├── Imported by: minimal-mistakes.scss only
    ├── Used by: Game listing tables
    ├── Pages affected: Game catalog pages
    ├── Risk Level: MEDIUM
    ├── Change Impact: Game table display issues
    └── Rollback: Git restore games-table.scss
```

### ⚫ LOW RISK DEPENDENCIES (Safe to Modify)

#### Backup Files:
```
/_sass/_site/*.scss
    ├── Imported by: NONE (backup directory)
    ├── Used by: Backup/archive purposes only
    ├── Pages affected: NONE
    ├── Risk Level: LOW
    ├── Change Impact: No impact on site
    └── Safe to delete: YES (after verification)
```

#### Content Files:
```
/_pages/**/*.md
    ├── Dependencies: Jekyll templates, layouts
    ├── Risk Level: LOW (individual files)
    ├── Change Impact: Specific page only
    └── Rollback: Git restore individual file

/_data/*.yml
    ├── Dependencies: Jekyll templates using data
    ├── Risk Level: LOW (data corruption possible)
    ├── Change Impact: Data-driven content
    └── Rollback: Git restore data file + rebuild
```

---

## 🔄 Relationship Tracking

### Import Chain Analysis:

#### Primary Chain (main.scss):
```
main.scss
├── minimal-mistakes/skins/default.scss  ✅ STABLE
├── minimal-mistakes.scss                ✅ STABLE
├── tested-games.scss                    ✅ STABLE (dual import)
├── faq-box.scss                         ✅ STABLE (dual import)
├── troubleshooting-box.scss             ✅ STABLE (dual import)
├── content-boxes.scss                   ✅ STABLE (dual import)
├── buttons.scss                         ✅ STABLE (dual import)
└── gallery.scss                         ✅ STABLE (dual import)
```

#### Secondary Chain (minimal-mistakes.scss):
```
minimal-mistakes.scss
├── [21 Theme Core Files]                ✅ STABLE
├── buttons.scss                         🟡 DUPLICATE IMPORT
├── content-boxes.scss                   🟡 DUPLICATE IMPORT
├── faq-box.scss                         🟡 DUPLICATE IMPORT
├── gallery.scss                         🟡 DUPLICATE IMPORT
├── tested-games.scss                    🟡 DUPLICATE IMPORT
├── troubleshooting-box.scss             🟡 DUPLICATE IMPORT
├── pricing-section.scss                 ✅ UNIQUE IMPORT
├── homepage-sections.scss               ✅ UNIQUE IMPORT
├── compatibility-table.scss             ✅ UNIQUE IMPORT
└── games-table.scss                     ✅ UNIQUE IMPORT
```

### Dependency Impact Radius:

#### High Impact (Site-Wide):
- `_config.yml` → Affects: ALL pages, ALL builds
- `main.scss` → Affects: ALL styling, ALL pages
- `minimal-mistakes.scss` → Affects: ALL theme features
- `_variables.scss` → Affects: ALL theme styling

#### Medium Impact (Multi-Page):
- `tested-games.scss` → Affects: Game-related pages
- `buttons.scss` → Affects: Interactive elements
- `navigation.scss` → Affects: Site navigation

#### Low Impact (Single Feature):
- `pricing-section.scss` → Affects: Pricing pages only
- `games-table.scss` → Affects: Game tables only
- Individual content files → Affects: Single pages

---

## 🚨 Critical Path Monitoring

### Real-Time Dependency Health:

#### Build System Status:
```bash
# Monitor build health
bundle exec jekyll build
Status: ✅ SUCCESS (6.158s)

# Monitor CSS compilation
ls -la _site/assets/css/main.css
Size: ✅ 99,873 bytes (optimal)

# Monitor page generation
find _site -name "*.html" | wc -l
Count: ✅ 40 pages (expected)
```

#### Import Resolution Status:
```scss
// main.scss imports (7 total)
@import "minimal-mistakes/skins/default"; ✅ RESOLVED
@import "minimal-mistakes";               ✅ RESOLVED
@import "tested-games";                   ✅ RESOLVED
@import "faq-box";                        ✅ RESOLVED
@import "troubleshooting-box";            ✅ RESOLVED
@import "content-boxes";                  ✅ RESOLVED
@import "buttons";                        ✅ RESOLVED
@import "gallery";                        ✅ RESOLVED
```

#### Theme Dependency Status:
```scss
// minimal-mistakes.scss imports (31 total)
@import "minimal-mistakes/[21 files]";    ✅ ALL RESOLVED
@import "[10 custom files]";              ✅ ALL RESOLVED
```

### Dependency Verification Commands:

#### Check File Existence:
```bash
# Verify critical files exist
ls -la _config.yml
ls -la assets/css/main.scss
ls -la _sass/minimal-mistakes.scss
ls -la _sass/minimal-mistakes/_variables.scss
```

#### Check Import Chain:
```bash
# Find all import statements
grep -r "@import" _sass/ assets/css/

# Check specific file usage
grep -r "filename" _sass/ assets/css/
```

#### Verify Dependencies:
```bash
# Test build with dependency check
bundle exec jekyll build --verbose 2>&1 | grep -i "import\|error"
```

---

## 🔧 Dependency Change Procedures

### Before Modifying Dependencies:

#### Pre-Change Checklist:
1. **Map Current Dependencies**: Identify all files that import target
2. **Check Usage Patterns**: Verify how file is used across site
3. **Plan Impact Assessment**: Identify affected pages/features
4. **Create Backup Strategy**: Ensure rollback plan exists
5. **Define Test Plan**: Specify how to verify changes work

#### Risk Assessment Matrix:
```
Critical Files (NEVER modify without staging):
- _config.yml, main.scss, minimal-mistakes.scss
- _variables.scss, _base.scss, _mixins.scss

High Risk Files (Require extensive testing):
- Dual-import files: buttons.scss, tested-games.scss, etc.
- Navigation files: _navigation.scss, _masthead.scss
- Core theme files: _page.scss, _archive.scss

Medium Risk Files (Standard testing):
- Single-import custom files
- Component-specific styling
- Feature-specific functionality

Low Risk Files (Basic testing):
- Content files, data files
- Backup files, unused files
- Documentation files
```

### During Dependency Changes:

#### Safe Change Process:
1. **Make One Change**: Modify single file at a time
2. **Test Immediately**: Run build after each change
3. **Verify Dependencies**: Check that imports still resolve
4. **Visual Verification**: Spot check affected pages
5. **Document Changes**: Log modifications in change system

#### Emergency Stop Criteria:
- Build fails with import errors
- CSS compilation fails
- Page generation drops significantly
- Visual inspection shows broken styling
- Site functionality is impaired

### After Dependency Changes:

#### Complete Verification:
```bash
# Full build test
rm -rf _site && bundle exec jekyll build

# Dependency resolution check
grep -r "@import" _sass/ assets/css/ | grep [modified-file]

# Output verification
ls -la _site/assets/css/main.css
find _site -name "*.html" | wc -l

# Visual spot check
# Open site in browser and verify critical pages
```

#### Success Criteria:
- Build completes without errors
- CSS file compiles to reasonable size
- Page count matches baseline
- Import chain resolves completely
- Visual inspection passes
- Core functionality works

---

## 🔍 Automated Dependency Monitoring

### Monitoring Scripts:

#### Daily Health Check:
```bash
#!/bin/bash
# dependency_health_check.sh

echo "=== Dependency Health Check ==="
echo "Date: $(date)"

# Check critical files exist
CRITICAL_FILES=(
    "_config.yml"
    "assets/css/main.scss" 
    "_sass/minimal-mistakes.scss"
    "_sass/minimal-mistakes/_variables.scss"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - EXISTS"
    else
        echo "❌ $file - MISSING (CRITICAL ERROR)"
    fi
done

# Test build
echo "Testing build..."
if bundle exec jekyll build >/dev/null 2>&1; then
    echo "✅ Build - SUCCESS"
    
    # Check CSS output
    if [ -f "_site/assets/css/main.css" ]; then
        CSS_SIZE=$(stat -c%s _site/assets/css/main.css)
        echo "✅ CSS - $CSS_SIZE bytes"
    else
        echo "❌ CSS - MISSING"
    fi
    
    # Check page count
    PAGE_COUNT=$(find _site -name "*.html" | wc -l)
    echo "✅ Pages - $PAGE_COUNT generated"
    
else
    echo "❌ Build - FAILED"
fi

echo "=== End Health Check ==="
```

#### Import Chain Validator:
```bash
#!/bin/bash
# validate_imports.sh

echo "=== Import Chain Validation ==="

# Check main.scss imports
echo "Checking main.scss imports..."
grep "@import" assets/css/main.scss | while read -r line; do
    IMPORT_FILE=$(echo "$line" | sed 's/@import "\(.*\)";/\1/')
    if [ -f "_sass/$IMPORT_FILE.scss" ] || [ -f "_sass/$IMPORT_FILE/_index.scss" ]; then
        echo "✅ $IMPORT_FILE"
    else
        echo "❌ $IMPORT_FILE - NOT FOUND"
    fi
done

# Check minimal-mistakes.scss imports  
echo "Checking minimal-mistakes.scss imports..."
grep "@import" _sass/minimal-mistakes.scss | while read -r line; do
    IMPORT_FILE=$(echo "$line" | sed 's/@import "\(.*\)";/\1/')
    if [ -f "_sass/$IMPORT_FILE.scss" ] || [ -f "_sass/minimal-mistakes/$IMPORT_FILE.scss" ]; then
        echo "✅ $IMPORT_FILE"
    else
        echo "❌ $IMPORT_FILE - NOT FOUND"
    fi
done

echo "=== End Import Validation ==="
```

### Alert Conditions:

#### Red Alert (Critical Failure):
- Any critical file missing
- Build fails completely
- CSS compilation fails
- Import chain broken

#### Yellow Alert (Warning):
- Build time significantly increased
- CSS size changed dramatically
- Page count dropped
- New import errors

#### Green Status (All Good):
- All critical files present
- Build completes successfully
- Import chain resolves
- Output metrics normal

---

## 📊 Dependency Metrics

### Current Dependency Health:
- **Critical Files**: 4/4 present ✅
- **Import Chain**: 38/38 resolved ✅
- **Build Status**: SUCCESS ✅
- **CSS Compilation**: 99,873 bytes ✅
- **Page Generation**: 40 pages ✅

### Dependency Complexity:
- **Total SCSS Files**: 11 custom + 21 theme = 32 files
- **Import Statements**: 38 total imports
- **Dependency Depth**: 3 levels (main → theme → components)
- **Circular Dependencies**: 0 (none detected)

### Risk Distribution:
- **Critical Risk**: 4 files (12%)
- **High Risk**: 6 files (19%)
- **Medium Risk**: 4 files (13%)
- **Low Risk**: 18 files (56%)

---

## 🎯 Optimization Opportunities

### Dependency Cleanup:
1. **Duplicate Imports**: 6 files imported twice (optimization possible)
2. **Unused Files**: 11 backup files in `_site/` (safe to remove)
3. **Import Order**: Could be optimized for better performance
4. **File Sizes**: Some large files could be split

### Future Improvements:
1. **Automated Testing**: CI/CD dependency validation
2. **Performance Monitoring**: Build time tracking
3. **Visual Regression**: Screenshot comparison testing
4. **Dependency Mapping**: Dynamic relationship visualization

---

**🗺️ This dependency monitor ensures we understand all relationships and can safely navigate changes without breaking the system.**

**System Established**: 2025-07-28  
**Last Validation**: Real-time monitoring active  
**Next Review**: Weekly dependency health checks