# Jekyll Website Risk Assessment Framework

## Purpose
This document provides a systematic risk assessment framework for all changes to the Jekyll website, with specific focus on preventing build-breaking changes.

## Risk Categories

### 🔴 CRITICAL RISK (Never Touch Without Extreme Caution)

#### Files:
- `/assets/css/main.scss` - Primary CSS entry point
- `/_sass/minimal-mistakes.scss` - Master theme file
- `/_config.yml` - Jekyll configuration
- `/Gemfile` - Dependency management
- `/_sass/minimal-mistakes/` directory - Core theme files

#### Operations:
- Deleting any imported SCSS file
- Modifying import statements
- Changing theme configuration
- Bulk file deletions
- Git operations that affect multiple files

#### Impact if Broken:
- Complete site build failure
- Total styling loss
- Site becomes unusable
- Requires expert intervention to fix

#### Required Process:
- Full backup before ANY change
- Changes only by experienced developers
- Comprehensive testing on staging environment
- Multiple reviewer approval
- Staged rollout plan

### 🟡 HIGH RISK (Requires Careful Testing)

#### Files:
- Custom component SCSS files imported in main chain:
  - `buttons.scss`
  - `content-boxes.scss`  
  - `faq-box.scss`
  - `gallery.scss`
  - `tested-games.scss`
  - `troubleshooting-box.scss`

#### Operations:
- Modifying imported SCSS files
- Adding new import statements
- Changing CSS selectors used by Jekyll layouts
- Modifying Jekyll layouts or includes
- Theme skin modifications

#### Impact if Broken:
- Specific page sections break
- Styling inconsistencies
- Mobile responsiveness issues
- User experience degradation

#### Required Process:
- Standard QA procedures (see QA_PROCEDURES.md)
- Visual testing across multiple pages
- Mobile responsiveness verification
- Cross-browser testing

### 🟢 MEDIUM RISK (Standard Testing Required)

#### Files:
- Component SCSS files not in main import chain:
  - `compatibility-table.scss`
  - `games-table.scss`
  - `homepage-sections.scss`
  - `pricing-section.scss`

#### Operations:
- Adding new CSS rules
- Modifying existing styles
- Creating new SCSS files
- Image optimizations
- Content updates

#### Impact if Broken:
- Individual features may not work
- Visual inconsistencies on specific pages
- Performance issues

#### Required Process:
- Basic build testing
- Spot check affected pages
- Performance verification

### ⚫ LOW RISK (Minimal Testing Required)

#### Files:
- `/_sass/_site/` directory (backup files)
- Non-imported SCSS files
- Documentation files
- Image files (after optimization)
- Data files (YAML)

#### Operations:
- Content updates
- Documentation changes
- Adding new images (optimized)
- Data file updates
- Cleanup of unused files

#### Impact if Broken:
- Minor content issues
- Documentation inconsistencies
- No impact on site functionality

#### Required Process:
- Basic build verification
- Spot check content accuracy

## Dependency Risk Map

### Critical Import Chain:
```
main.scss
├── minimal-mistakes/skins/default.scss (theme skin)
├── minimal-mistakes.scss (master)
│   ├── minimal-mistakes/variables.scss
│   ├── minimal-mistakes/mixins.scss
│   ├── minimal-mistakes/base.scss
│   └── [19 other core theme files]
├── tested-games.scss
├── faq-box.scss
├── troubleshooting-box.scss
├── content-boxes.scss
├── buttons.scss
└── gallery.scss
```

### NEVER DELETE Files in Import Chain:
- Any file imported directly in `main.scss`
- Any file imported in `minimal-mistakes.scss`
- Any theme core files
- Any files with multiple dependencies

### Safe to Modify/Delete:
- Files in `/_sass/_site/` (backup directory)
- Unused SCSS files not imported anywhere
- Temporary files
- Files without dependencies

## Risk Assessment Questions

Before making ANY change, ask:

### 1. File Impact Analysis:
- [ ] Is this file imported by another SCSS file?
- [ ] Does this file contain variables used elsewhere?
- [ ] Is this file part of the core theme?
- [ ] How many other files depend on this?

### 2. Change Scope Analysis:
- [ ] Am I deleting or renaming files?
- [ ] Am I changing import statements?
- [ ] Am I modifying variables or mixins?
- [ ] Will this affect multiple pages?

### 3. Testing Capability:
- [ ] Can I test this change locally?
- [ ] Do I have a rollback plan?
- [ ] Can I verify the fix before deploying?
- [ ] Do I understand what might break?

## Risk Mitigation Strategies

### For Critical Risk Changes:
1. **Staging Environment**: Test on exact copy first
2. **Incremental Changes**: One small change at a time
3. **Comprehensive Backup**: Full site backup before change
4. **Expert Review**: Have another developer review
5. **Rollback Plan**: Documented steps to undo
6. **Monitoring**: Watch for issues after deployment

### For High Risk Changes:
1. **Standard QA**: Follow QA procedures exactly
2. **Visual Testing**: Check multiple page types
3. **Cross-browser**: Test on different browsers
4. **Mobile Testing**: Verify responsive design
5. **Quick Rollback**: Be prepared to revert quickly

### For Medium/Low Risk Changes:
1. **Build Testing**: Verify Jekyll build succeeds
2. **Spot Checking**: Test affected areas
3. **Basic Monitoring**: Watch for obvious issues

## Incident Response Levels

### Level 1: Site Down (Build Failure)
- **Response Time**: Immediate (< 5 minutes)
- **Action**: Emergency rollback procedures
- **Escalation**: All hands on deck
- **Communication**: Immediate user notification

### Level 2: Styling Broken (Site Loads, Looks Wrong)
- **Response Time**: < 30 minutes
- **Action**: Quick rollback of styling changes
- **Escalation**: Developer team
- **Communication**: Known issue notification

### Level 3: Feature Issues (Specific Functions Broken)
- **Response Time**: < 2 hours
- **Action**: Targeted fix or rollback
- **Escalation**: Standard development process
- **Communication**: Issue tracking

### Level 4: Content Issues (Minor Problems)
- **Response Time**: < 24 hours
- **Action**: Standard fix process
- **Escalation**: Content team
- **Communication**: Internal only

## Red Flags - Stop Immediately If You See:

### During Development:
- SCSS import errors in terminal
- Missing file warnings
- CSS compilation taking much longer than usual
- Unexpected file size changes (CSS >200KB or <50KB)

### During Testing:
- Pages showing completely unstyled
- Mobile layout completely broken
- Error 404s for CSS files
- Console errors about missing stylesheets

### After Deployment:
- User reports of broken styling
- Analytics showing increased bounce rate
- Pages loading without CSS
- Mobile users reporting issues

## Risk Score Calculator

**Total Risk Score = File Risk + Change Risk + Impact Risk**

### File Risk:
- Critical files (main.scss, minimal-mistakes.scss): 10 points
- High dependency files: 7 points  
- Medium dependency files: 4 points
- Low/no dependency files: 1 point

### Change Risk:
- Deletion operations: 10 points
- Import statement changes: 8 points
- Variable/mixin changes: 6 points
- Styling modifications: 3 points
- Content only changes: 1 point

### Impact Risk:
- Site-wide effects: 10 points
- Multiple page effects: 6 points
- Single page effects: 3 points
- Component only effects: 1 point

### Risk Thresholds:
- **25+ points**: CRITICAL - Executive approval required
- **20-24 points**: HIGH - Senior developer review required
- **10-19 points**: MEDIUM - Standard QA procedures
- **<10 points**: LOW - Basic testing sufficient

## Examples

### Example 1: Deleting buttons.scss
- File Risk: 7 (imported in main.scss)
- Change Risk: 10 (deletion)
- Impact Risk: 6 (affects multiple pages)
- **Total: 23 (HIGH RISK)**
- **Action**: Senior developer review + comprehensive testing

### Example 2: Adding CSS rule to compatibility-table.scss
- File Risk: 4 (medium dependency)
- Change Risk: 3 (styling modification)
- Impact Risk: 3 (single page effect)
- **Total: 10 (MEDIUM RISK)**
- **Action**: Standard QA procedures

### Example 3: Updating content in YAML file
- File Risk: 1 (no dependencies)
- Change Risk: 1 (content only)
- Impact Risk: 3 (single page effect)
- **Total: 5 (LOW RISK)**
- **Action**: Basic testing

---

**Remember: It's always better to overestimate risk than to underestimate it.**

Last Updated: 2025-07-28