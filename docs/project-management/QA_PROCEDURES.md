# Jekyll Website QA Procedures

## Purpose
This document establishes systematic verification procedures to prevent breaking changes to the Jekyll website, specifically designed to prevent incidents like the SCSS deletion that broke the build.

## Current Working Baseline (Verified: 2025-07-28)

### ✅ Build Status
- Jekyll build: **SUCCESSFUL** (6.158 seconds)
- CSS compilation: **SUCCESSFUL** (99,873 bytes)
- Generated pages: **40 HTML files**
- Theme: minimal-mistakes (remote)

### ✅ Critical SCSS Dependencies
All SCSS files verified and functional:

**Core Theme Files:**
- `/assets/css/main.scss` - Main entry point
- `/_sass/minimal-mistakes.scss` - Theme master file

**Custom Component Files:**
- `buttons.scss` - Custom button styles
- `compatibility-table.scss` - Game compatibility table
- `content-boxes.scss` - Content box components
- `faq-box.scss` - FAQ section styling
- `gallery.scss` - Image gallery styles
- `games-table.scss` - Games table formatting
- `homepage-sections.scss` - Landing page sections
- `pricing-section.scss` - Pricing display
- `tested-games.scss` - Game testing results
- `troubleshooting-box.scss` - Troubleshooting sections

## Pre-Change Verification Checklist

### BEFORE Making ANY Changes:

#### 1. Current State Verification (MANDATORY)
- [ ] Run `bundle exec jekyll build` - Must complete successfully
- [ ] Check exit code is 0
- [ ] Verify CSS file size is reasonable (should be ~99KB)
- [ ] Count generated HTML files: `find _site -name "*.html" | wc -l` (should be ~40)
- [ ] Document current file sizes and counts

#### 2. Backup Critical Files
- [ ] Create backup of `/_sass/` directory
- [ ] Create backup of `/assets/css/main.scss`
- [ ] Create backup of `/_config.yml`
- [ ] Note commit hash before changes

#### 3. Dependency Analysis (For SCSS changes)
- [ ] Identify which files import the target file
- [ ] Check if file appears in main.scss import chain
- [ ] Verify file exists in both source and compiled locations

## Change Implementation Procedures

### For SCSS File Changes:

#### High-Risk Changes (NEVER delete these files):
- `minimal-mistakes.scss` - Master theme file
- `main.scss` - Primary entry point
- Any file imported in `main.scss`
- Any file imported in `minimal-mistakes.scss`

#### Medium-Risk Changes (Require extra verification):
- Custom component files (buttons.scss, gallery.scss, etc.)
- Files with multiple dependencies
- Recently modified files

#### Low-Risk Changes (Safe with standard testing):
- Unused SCSS files in `/_sass/_site/` directory
- Temporary backup files
- Files not in the import chain

### Change Process:

#### Step 1: Pre-Change Testing
```bash
# Verify current build works
bundle exec jekyll build
echo "Exit code: $?"

# Record baseline
echo "CSS size: $(stat -c%s _site/assets/css/main.css) bytes"
echo "HTML files: $(find _site -name "*.html" | wc -l)"
```

#### Step 2: Make Changes
- Make ONE change at a time
- Document what was changed and why
- Keep changes minimal and focused

#### Step 3: Post-Change Verification (MANDATORY)
```bash
# Clean and rebuild
rm -rf _site
bundle exec jekyll build

# Verify success
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ BUILD FAILED - ROLLBACK IMMEDIATELY"
    exit 1
fi

# Check CSS compilation
if [ -f "_site/assets/css/main.css" ]; then
    echo "✅ CSS compiled"
    echo "New CSS size: $(stat -c%s _site/assets/css/main.css) bytes"
else
    echo "❌ CSS MISSING - ROLLBACK IMMEDIATELY"
    exit 1
fi

# Verify page count
NEW_COUNT=$(find _site -name "*.html" | wc -l)
if [ $NEW_COUNT -ge 35 ]; then
    echo "✅ Pages generated: $NEW_COUNT"
else
    echo "❌ PAGE COUNT LOW: $NEW_COUNT - INVESTIGATE"
fi
```

#### Step 4: Functional Testing
- [ ] Open generated site in browser
- [ ] Check at least 3 different page types
- [ ] Verify styling appears correct
- [ ] Test responsive design on mobile width
- [ ] Check dark theme functionality

## Rollback Procedures

### If Build Fails:
```bash
# Immediate rollback
git checkout HEAD~1 -- _sass/
git checkout HEAD~1 -- assets/css/main.scss

# Verify rollback works
bundle exec jekyll build
```

### If Styling Breaks:
```bash
# Rollback SCSS changes
git checkout HEAD~1 -- _sass/

# Test specific file restoration
git checkout HEAD~1 -- _sass/[specific-file].scss
```

## Go/No-Go Decision Criteria

### ✅ GO (Safe to Proceed):
- Build completes successfully (exit code 0)
- CSS file exists and is reasonable size (>50KB, <200KB)
- Page count matches baseline (±2 pages acceptable)
- No error messages in build output
- Manual spot check shows styling works

### ❌ NO-GO (Stop and Rollback):
- Build fails with any error
- CSS file missing or drastically different size
- Page count drops significantly (>5 pages missing)
- Console shows SCSS import errors
- Visual inspection shows broken styling

## Emergency Procedures

### Critical Build Failure:
1. **STOP** all changes immediately
2. Run rollback commands above
3. Verify rollback works with full build test
4. Document what was attempted
5. Do NOT attempt the same change until root cause is understood

### Partial Failure (builds but styling broken):
1. Identify which specific styles are broken
2. Check if it's a single component or site-wide
3. Rollback only the affected files
4. Test incrementally

## Required Testing Matrix

### Before ANY Release:
- [ ] Home page loads and displays correctly
- [ ] FAQ pages load with proper styling
- [ ] Tutorial pages display correctly
- [ ] Game compatibility table functions
- [ ] Mobile responsive design works
- [ ] Dark theme displays properly
- [ ] Navigation menu functions
- [ ] Search functionality works

### Browser Testing (Minimum):
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)  
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## File Modification Rules

### NEVER DELETE:
- `minimal-mistakes.scss`
- `main.scss`
- Any file imported in the main import chain
- Active theme skin files

### SAFE TO MODIFY:
- Custom component files (with testing)
- Non-imported SCSS files
- Files in `/_sass/_site/` (backup directory)

### REQUIRE REVIEW:
- Changes to import statements
- Bulk file operations
- Theme configuration changes

## Monitoring and Maintenance

### Weekly Checks:
- [ ] Verify site builds successfully
- [ ] Check for Jekyll/gem updates
- [ ] Monitor CSS file size for unexpected growth
- [ ] Validate HTML output quality

### Monthly Reviews:
- [ ] Review and clean unused SCSS files
- [ ] Update this procedure based on lessons learned
- [ ] Verify backup procedures work
- [ ] Test complete restore from Git

---

**Remember: When in doubt, test more. It's better to over-verify than to break the site.**

Last Updated: 2025-07-28