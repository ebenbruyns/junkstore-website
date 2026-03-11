# SCSS Dependency Map

## Purpose
This document maps all SCSS file dependencies to understand the impact of changes and prevent accidental deletions of critical files.

## Current Import Chain (Verified: 2025-07-28)

### Primary Entry Point: `/assets/css/main.scss`
```scss
@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // skin
@import "minimal-mistakes"; // main partials  
@import "tested-games";
@import "faq-box";
@import "troubleshooting-box";
@import "content-boxes";
@import "buttons";
@import "gallery";
```

### Secondary Entry Point: `/_sass/minimal-mistakes.scss`
```scss
/* Theme Core Files */
@import "minimal-mistakes/copyright";
@import "minimal-mistakes/variables";
@import "minimal-mistakes/vendor/breakpoint/breakpoint";
@import "minimal-mistakes/vendor/magnific-popup/magnific-popup";
@import "minimal-mistakes/vendor/susy/susy";
@import "minimal-mistakes/mixins";
@import "minimal-mistakes/reset";
@import "minimal-mistakes/base";
@import "minimal-mistakes/forms";
@import "minimal-mistakes/tables";
@import "minimal-mistakes/animations";
@import "minimal-mistakes/buttons";
@import "minimal-mistakes/notices";
@import "minimal-mistakes/masthead";
@import "minimal-mistakes/navigation";
@import "minimal-mistakes/footer";
@import "minimal-mistakes/search";
@import "minimal-mistakes/syntax";
@import "minimal-mistakes/utilities";
@import "minimal-mistakes/page";
@import "minimal-mistakes/archive";
@import "minimal-mistakes/sidebar";
@import "minimal-mistakes/print";

/* Custom Components (Also in minimal-mistakes.scss) */
@import "buttons";
@import "content-boxes";
@import "faq-box";
@import "gallery";
@import "tested-games";
@import "troubleshooting-box";
@import "pricing-section";
@import "homepage-sections";
@import "compatibility-table";
@import "games-table";
```

## Dependency Analysis

### 🔴 CRITICAL FILES (Never Delete)

#### Primary Chain Files:
- **`/assets/css/main.scss`** - Entry point for all CSS
  - Dependencies: 6 custom files + theme
  - Impact: Deleting breaks entire site styling

- **`/_sass/minimal-mistakes.scss`** - Theme master file
  - Dependencies: 21 theme files + 10 custom files
  - Impact: Deleting breaks entire site

#### Theme Core Files (in minimal-mistakes/):
- **`_variables.scss`** - Theme variables
  - Used by: All theme files
  - Impact: Deleting breaks theme compilation

- **`_base.scss`** - Base styles  
  - Used by: All pages
  - Impact: Deleting breaks fundamental styling

- **`_mixins.scss`** - SCSS mixins
  - Used by: Multiple theme and custom files
  - Impact: Deleting breaks compilation

### 🟡 HIGH RISK FILES (Handle With Care)

#### Dual-Imported Custom Files:
These files are imported in BOTH main.scss AND minimal-mistakes.scss:

- **`buttons.scss`** (2160 bytes)
  - Used by: Button components site-wide
  - Pages affected: All pages with buttons
  - Risk: Deleting breaks button styling

- **`content-boxes.scss`** (1638 bytes)
  - Used by: Content sections, info boxes
  - Pages affected: Multiple content pages
  - Risk: Deleting breaks content layout

- **`faq-box.scss`** (631 bytes)
  - Used by: FAQ pages
  - Pages affected: FAQ sections
  - Risk: Deleting breaks FAQ styling

- **`gallery.scss`** (817 bytes)
  - Used by: Image galleries
  - Pages affected: Gallery pages
  - Risk: Deleting breaks image display

- **`tested-games.scss`** (7696 bytes)
  - Used by: Game compatibility pages
  - Pages affected: Game testing results
  - Risk: Deleting breaks major site feature

- **`troubleshooting-box.scss`** (716 bytes)
  - Used by: Troubleshooting sections
  - Pages affected: Help/support pages
  - Risk: Deleting breaks user support styling

### 🟢 MEDIUM RISK FILES (Standard Testing Required)

#### Single-Import Custom Files:
These files are only imported in minimal-mistakes.scss:

- **`pricing-section.scss`** (2290 bytes)
  - Used by: Pricing display components
  - Pages affected: Pricing/purchase pages
  - Risk: Limited to pricing functionality

- **`homepage-sections.scss`** (4181 bytes)
  - Used by: Landing page sections
  - Pages affected: Home page primarily
  - Risk: Limited to home page layout

- **`compatibility-table.scss`** (6552 bytes)
  - Used by: Game compatibility tables
  - Pages affected: Compatibility pages
  - Risk: Limited to table functionality

- **`games-table.scss`** (1797 bytes)
  - Used by: Game listing tables
  - Pages affected: Game catalog pages
  - Risk: Limited to game listings

### ⚫ LOW RISK FILES (Safe to Modify/Delete)

#### Backup Directory Files:
Files in `/_sass/_site/` appear to be backups and are NOT imported:

- `_site/buttons.scss`
- `_site/compatibility-table.scss`
- `_site/content-boxes.scss`
- `_site/faq-box.scss`
- `_site/gallery.scss`
- `_site/games-table.scss`
- `_site/homepage-sections.scss`
- `_site/minimal-mistakes.scss`
- `_site/pricing-section.scss`
- `_site/tested-games.scss`
- `_site/troubleshooting-box.scss`

**Status**: These appear to be backup copies and can be safely deleted if needed.

## Import Duplication Analysis

### Files Imported Multiple Times:
Several custom files are imported in BOTH locations, which is redundant but not harmful:

1. **buttons.scss** - Imported in main.scss (line 13) AND minimal-mistakes.scss (line 40)
2. **content-boxes.scss** - Imported in main.scss (line 12) AND minimal-mistakes.scss (line 41)
3. **faq-box.scss** - Imported in main.scss (line 10) AND minimal-mistakes.scss (line 42)
4. **gallery.scss** - Imported in main.scss (line 14) AND minimal-mistakes.scss (line 43)
5. **tested-games.scss** - Imported in main.scss (line 9) AND minimal-mistakes.scss (line 44)
6. **troubleshooting-box.scss** - Imported in main.scss (line 11) AND minimal-mistakes.scss (line 45)

### Optimization Opportunity:
The dual imports are redundant since main.scss imports minimal-mistakes.scss. These could be cleaned up by removing them from one location, but this is LOW PRIORITY and should only be done with careful testing.

## File Usage Verification

### Confirmed Active Files:
All files in the main `/_sass/` directory are either:
1. Directly imported in the import chain, OR
2. Part of the minimal-mistakes theme structure

### Confirmed Backup Files:
All files in `/_sass/_site/` directory appear to be backups and are not imported.

## Change Impact Matrix

| File | Direct Impact | Indirect Impact | Recovery Difficulty |
|------|---------------|-----------------|-------------------|
| main.scss | Site-wide CSS failure | Complete site break | CRITICAL |
| minimal-mistakes.scss | Theme system failure | Complete site break | CRITICAL |  
| _variables.scss | Theme compilation failure | Site-wide styling | CRITICAL |
| buttons.scss | Button styling loss | UI interaction issues | HIGH |
| tested-games.scss | Game pages break | Major feature loss | HIGH |
| pricing-section.scss | Pricing display issues | Purchase flow impact | MEDIUM |
| _site/* files | None | None | EASY |

## Verification Commands

### Check File Dependencies:
```bash
# Find all @import statements
grep -r "@import" _sass/ assets/css/

# Check if file is imported anywhere
grep -r "filename" _sass/ assets/css/

# Verify file exists
ls -la _sass/filename.scss
```

### Test Import Chain:
```bash
# Build and check for import errors
bundle exec jekyll build 2>&1 | grep -i "import\|error"

# Check CSS compilation
ls -la _site/assets/css/main.css
```

## Recommended Actions

### Immediate (High Priority):
1. ✅ **DONE**: Document current working state
2. ✅ **DONE**: Create this dependency map
3. **TODO**: Add file existence checks to CI/CD pipeline

### Short Term (Medium Priority):
1. Consider cleaning up duplicate imports (after extensive testing)
2. Remove backup files in `_site/` directory (after confirming they're unused)
3. Add automated dependency checking

### Long Term (Low Priority):
1. Optimize SCSS architecture
2. Consider splitting large files
3. Implement SCSS linting

## Emergency Reference

### If You Accidentally Delete a Critical File:

#### Immediate Recovery:
```bash
# Rollback from Git
git checkout HEAD~1 -- _sass/[filename].scss

# Or restore from backup
cp _sass/_site/[filename].scss _sass/[filename].scss

# Test immediately
bundle exec jekyll build
```

#### Files to NEVER Delete:
- main.scss
- minimal-mistakes.scss  
- Any file in minimal-mistakes/ directory
- buttons.scss, tested-games.scss, content-boxes.scss
- faq-box.scss, gallery.scss, troubleshooting-box.scss

#### Safe to Delete (if needed):
- Any file in _sass/_site/ directory
- Temporary backup files
- Files not appearing in any @import statement

---

**Remember: When in doubt about a file's importance, check this map and test in a staging environment first.**

Last Updated: 2025-07-28