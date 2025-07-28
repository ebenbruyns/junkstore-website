# Technical Decisions & Architecture

## What This Document Is
This records important decisions we've made and why we made them. It helps us remember our reasoning and avoid revisiting solved problems.

## How to Use This
- **Check before making major changes** to understand existing decisions
- **Reference when similar issues arise** to maintain consistency
- **Update when making new technical decisions**
- **Review periodically** to ensure decisions still make sense

---

## Major Architectural Decisions

### Decision #001: JavaScript-Based Games Table
**Date:** Current session  
**Decision:** Replace Jekyll/Liquid template processing with client-side JavaScript  

**Context:**
- Jekyll was generating hanging HTML tags as literal text
- Complex data processing with 600+ games was causing template issues
- Problem persisted despite multiple debugging approaches

**Options Considered:**
1. Continue debugging Jekyll template
2. Split data into smaller files
3. Switch to different Jekyll theme
4. Use JavaScript for data rendering

**Decision:** Option 4 - JavaScript rendering

**Reasoning:**
- **Performance:** Faster initial page load, async data loading
- **Reliability:** Bypasses Jekyll processing issues entirely
- **Flexibility:** Easier to add features like search, filtering, sorting
- **Maintainability:** Clearer separation of concerns
- **User Experience:** Better loading states and interactions

**Trade-offs:**
- ✅ **Pros:** Faster, more reliable, more features, better UX
- ❌ **Cons:** Requires JavaScript enabled, additional complexity

**Status:** Implemented and successful

---

### Decision #002: Keep YAML as Source of Truth
**Date:** Current session  
**Decision:** Maintain YAML files as primary data source with JSON conversion

**Context:**
- Existing workflow uses YAML for game data
- JavaScript solution needs JSON format
- Need to balance ease of editing with performance

**Options Considered:**
1. Convert everything to JSON and edit JSON directly
2. Keep YAML, manual JSON conversion when needed
3. Keep YAML, automated JSON conversion
4. Dual system with both formats

**Decision:** Option 2 - YAML with manual JSON conversion

**Reasoning:**
- **Familiarity:** User already comfortable with YAML editing
- **Readability:** YAML easier to read and edit than JSON
- **Simplicity:** Manual conversion gives control over when to update
- **Flexibility:** Can enhance automation later if needed

**Trade-offs:**
- ✅ **Pros:** Familiar workflow, readable format, flexible
- ❌ **Cons:** Extra step required when updating data

**Status:** Working well, can automate later if needed

---

### Decision #003: Hide ProtonDB Column Instead of Removing
**Date:** Current session  
**Decision:** Use CSS to hide ProtonDB column rather than removing from data/code

**Context:**
- User wanted ProtonDB links removed from display
- Data already contains ProtonDB URLs
- Uncertain if links might be needed in future

**Options Considered:**
1. Remove ProtonDB data entirely
2. Remove from template but keep in data
3. Hide with CSS but keep in template

**Decision:** Option 3 - CSS hiding

**Reasoning:**
- **Reversible:** Easy to show again if needed
- **Data Preservation:** Keeps valuable ProtonDB links
- **Flexibility:** Can implement different views later
- **Minimal Code Change:** Simple CSS addition

**Trade-offs:**
- ✅ **Pros:** Reversible, preserves data, minimal impact
- ❌ **Cons:** Slightly larger HTML (minimal impact)

**Status:** Implemented successfully

---

## Design Decisions

### Decision #004: Remove Featured Games Section
**Date:** Current session  
**Decision:** Remove the "Recently Tested" games bar from top of table

**Context:**
- User felt the section added unnecessary visual clutter
- Table should be the main focus
- Cleaner, more minimal design preferred

**Reasoning:**
- **User Preference:** Direct feedback from user
- **Focus:** Reduces distractions from main content
- **Clean Design:** More professional, minimal appearance
- **Simplicity:** Easier maintenance with fewer components

**Status:** Implemented

### Decision #005: Custom Scrollbar Styling
**Date:** Current session  
**Decision:** Implement custom dark scrollbar styling for table

**Context:**
- Default browser scrollbars didn't match dark theme
- User wanted more polished appearance
- Table has horizontal scrolling on smaller screens

**Reasoning:**
- **Visual Consistency:** Matches dark theme aesthetic
- **Professional Appearance:** More polished look
- **User Experience:** Better integration with overall design

**Status:** Implemented with webkit and Firefox support

---

## Process Decisions

### Decision #006: Comprehensive Project Documentation
**Date:** Current session  
**Decision:** Create detailed project management documents

**Context:**
- User requested structured approach to project management
- Need clear tracking of progress and decisions
- Want to establish sustainable development process

**Documents Created:**
- `PROJECT_OVERVIEW.md` - Overall project context
- `ROADMAP.md` - Future planning and priorities
- `ISSUES.md` - Problem tracking
- `PROGRESS.md` - Accomplishment tracking
- `DECISIONS.md` - This document
- `MAINTENANCE.md` - Ongoing care instructions

**Reasoning:**
- **Organization:** Clear structure for managing work
- **Communication:** Better context for discussions
- **Planning:** Systematic approach to improvements
- **Knowledge Retention:** Preserve decisions and reasoning

**Status:** Initial version complete

---

### Decision #007: Aggressive Unused Image Cleanup
**Date:** July 28, 2025  
**Decision:** Remove all large unused images immediately rather than gradual cleanup

**Context:**
- Image audit revealed 25.1MB of unused images (39% of payload)
- 9 large files accounted for 15.8MB of the waste
- User verified files were safe to delete

**Options Considered:**
1. Gradual cleanup - remove a few files at a time
2. Conservative approach - keep files "just in case"
3. Aggressive cleanup - remove all large unused files immediately

**Decision:** Option 3 - Aggressive cleanup

**Reasoning:**
- **Immediate Impact:** 15.8MB savings had massive performance benefit
- **Low Risk:** Audit confirmed files had zero references
- **Clean Maintenance:** Removes clutter and simplifies future updates
- **User Verified:** Files were manually confirmed as deletable

**Trade-offs:**
- ✅ **Pros:** Massive performance gain, cleaner codebase, easier maintenance
- ❌ **Cons:** Files are permanently deleted (though backed up in git)

**Status:** Implemented successfully - 33% total image payload reduction achieved

---

### Decision #008: Conservative CSS Cleanup Approach
**Date:** July 28, 2025  
**Decision:** Only remove 100% safe commented code, defer risky optimizations

**Context:**
- CSS/SCSS audit revealed significant cleanup opportunities
- 140+ lines of commented-out code in main.scss
- 4 unused SCSS files (~15KB) not imported
- User emphasized absolute safety: "only if you are 1000000000000000% sure"

**Options Considered:**
1. Aggressive cleanup - remove all unused files and commented code
2. Conservative cleanup - only remove commented code that's already inactive
3. No cleanup - leave everything as-is
4. Create backup branch and test full cleanup

**Decision:** Option 2 - Conservative cleanup only

**Reasoning:**
- **Zero Risk:** Commented code is already inactive, removing it can't break anything
- **User Safety Requirement:** User explicitly requested extreme caution
- **Immediate Benefit:** Cleaner codebase, faster compilation, better maintainability
- **Future Options:** Risky optimizations preserved for later consideration

**Trade-offs:**
- ✅ **Pros:** Zero risk, cleaner code, faster builds, satisfied user safety requirements
- ❌ **Cons:** Left potential savings (~15KB) on the table

**Results:**
- Removed 140+ lines of commented CSS code
- File reduced from 400+ lines to 258 lines
- Site builds successfully with no issues
- Better developer experience

**Status:** Implemented successfully - ready for future aggressive cleanup when user is comfortable

---

### Decision #009: Force Dark Theme Consistency
**Date:** July 28, 2025  
**Decision:** Remove dependency on user's system color scheme preference to ensure consistent dark theme

**Context:**
- Site was using `@media (prefers-color-scheme: dark)` for custom styles
- This caused inconsistent rendering based on user's device settings
- Light mode users saw broken/incomplete styling
- User requested site always look the same regardless of visitor's preferences

**Problem:**
- Custom styles (.page-intro, .toc, etc.) only applied when user had dark mode enabled
- Light mode users saw light backgrounds with poor contrast
- Site appearance was dependent on factors outside our control

**Options Considered:**
1. Add light mode versions of all custom styles
2. Remove media query dependency and force dark theme always
3. Use JavaScript to detect and override user preferences
4. Switch to a different theme that handles this automatically

**Decision:** Option 2 - Remove media query dependency

**Reasoning:**
- **Consistency:** Site always looks the same regardless of user device settings
- **User Experience:** No broken styling for any visitors
- **Simplicity:** No need to maintain both light and dark versions
- **Brand Control:** Maintain intended dark aesthetic consistently

**Implementation:**
- Removed `@media (prefers-color-scheme: dark)` wrapper
- Applied dark theme styles universally
- Fixed CSS syntax and indentation issues
- Kept Jekyll theme as "dark" for base styling

**Results:**
- Site renders consistently across all devices ✅
- All custom styling works regardless of user preferences ✅
- Build process successful with no errors ✅
- Maintains intended dark theme aesthetic ✅

**Status:** Implemented successfully - consistent dark theme achieved

---

## Future Decision Guidelines

### When to Document Decisions:
- Any significant technical architecture choice
- Trade-offs between multiple viable options
- User experience or design direction changes
- Tool or technology selections
- Process or workflow changes

### Decision Template:
```
### Decision #XXX: [Title]
**Date:** [When decided]
**Decision:** [What was decided]

**Context:** [Background and situation]

**Options Considered:**
1. [Option 1]
2. [Option 2]
3. [etc.]

**Decision:** [Chosen option]

**Reasoning:** [Why this option was best]

**Trade-offs:**
- ✅ **Pros:** [Benefits]
- ❌ **Cons:** [Drawbacks]

**Status:** [Implementation status]
```
### Decision #010: Documentation Automation System Implementation
**Date:** 2025-07-28  
**Type:** Technical
**Trigger:** Documentation automation implementation

**Decision:** Implement comprehensive documentation automation system

**Context:**
Need to eliminate manual documentation overhead while maintaining quality

**Options Considered:**
- Manual documentation maintenance
- Partial automation
- Full automation suite

**Decision Rationale:**
Full automation provides best ROI and ensures consistency

**Trade-offs:**
- ✅ **Pros:** Zero manual overhead, consistent quality, automatic updates
- ❌ **Cons:** Initial setup complexity, system dependency

**Implementation:**
- **Status:** Approved and implementing
- **Effort:** Medium
- **Risk:** Low

**Status:** In Progress

---
