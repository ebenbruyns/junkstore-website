# Decky Pages Standardization Plan
**Created:** September 2, 2025  
**Goal:** Standardize all Decky plugin pages to match 2.0 page styling and organize content properly

## Current Pages Analysis

### Existing Decky Pages:
1. **FAQ:** `/faq/decky/` - `_pages/faq/decky-unified-faq.md`
2. **Troubleshooting:** `/troubleshooting/decky/` - `_pages/troubleshooting/decky.md`  
3. **Tutorials:** `/tutorials/decky/` - `_pages/tutorials/plugin_tutorials.md`
4. **Help:** `/help/decky/` - `_pages/help/deckyhelp.md`

### Reference Standard (2.0 Pages):
- **2.0 FAQ:** `/2.0faq/` - `_pages/faq/v2faq.md` ✅ Perfect template
- **2.0 Troubleshooting:** Need to check if exists
- **2.0 Tutorials:** `/tutorials/2.0/` - `_pages/tutorials/2.0tutorials.md`

## Page-by-Page Standardization Plan

### 1. Decky FAQ (`/faq/decky/`)
**Current Status:** ✅ Already well-structured with search functionality
**Action Items:**
- [x] Has proper search interface ✅
- [x] Uses consistent `faq-box` styling ✅ 
- [x] Has quick navigation ✅
- [x] Matches 2.0 FAQ layout ✅
- [ ] **Content Audit:** Review all questions to ensure they're truly FAQs, not troubleshooting
- [ ] **Move troubleshooting items** to Decky troubleshooting page
- [ ] **Verify styling consistency** with v2faq.md

### 2. Decky Troubleshooting (`/troubleshooting/decky/`)
**Current Status:** ❌ Needs complete overhaul
**Action Items:**
- [ ] **Adopt 2.0 FAQ structure** with search functionality
- [ ] **Add quick navigation grid** like v2faq.md has
- [ ] **Convert to details/summary boxes** instead of plain markdown
- [ ] **Add troubleshooting-specific sections:**
  - Installation Problems
  - Game Launch Issues
  - Performance Problems  
  - Authentication Failures
  - Technical Errors
- [ ] **Move FAQ items** from Decky FAQ that are actually troubleshooting
- [ ] **Add copy-to-clipboard functionality** for commands

### 3. Decky Tutorials (`/tutorials/decky/`)
**Current Status:** ❌ Needs standardization
**Action Items:**
- [ ] **Match tutorial styling** from 2.0tutorials.md
- [ ] **Add step-by-step visual format**
- [ ] **Include screenshots/images** for clarity
- [ ] **Organize by difficulty level**
- [ ] **Add tutorial completion checkboxes**
- [ ] **Cross-reference with FAQ/Troubleshooting**

### 4. Decky Help (`/help/decky/`)
**Current Status:** ❓ Need to assess
**Action Items:**
- [ ] **Evaluate if needed** - might duplicate FAQ/Troubleshooting
- [ ] **Merge with appropriate page** or redesign as overview
- [ ] **Ensure consistent navigation**

## Content Organization Strategy

### FAQ vs Troubleshooting Classification Rules:

**FAQ Content (Questions about how things work):**
- "What's the difference between Decky and 2.0 versions?"
- "How do I install the plugin?"
- "Why can I only see A-L games?" ✅ (newly added)
- "Is Junk Store trustworthy?"
- "What games are supported?"

**Troubleshooting Content (Problems users are experiencing):**
- "Plugin won't install/crashes"
- "Games won't launch"
- "Authentication fails" 
- "Performance is slow"
- "Getting error messages"
- "Dependencies won't install"

## Styling Consistency Checklist

### Header Structure (All Pages Must Have):
```yaml
layout: single
title: "[Page Name] - Complete Guide"
description: "SEO-optimized description"
permalink: /path/
classes: wide
sidebar:
  nav: "appropriate-nav"
show_pagination: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"  
  overlay_image: /assets/images/website_image_compressed.jpg
  actions:
    - label: "Get Junk Store 2.0"
      url: "/buy_now/"
      class: "button buy-button"
```

### Content Structure (All Pages Must Have):
1. **Top anchor:** `<div id="top"></div>`
2. **Spacer:** `<div class="spacer mt-4"></div>`
3. **Introduction paragraph**
4. **Quick navigation grid** (for multi-section pages)
5. **Search functionality** (for FAQ/Troubleshooting)
6. **Consistent section headers**
7. **Details/summary boxes** for expandable content

### Visual Elements Consistency:
- ✅ Same header image across all Decky pages
- ✅ Same CTA button ("Get Junk Store 2.0")
- ✅ Consistent color scheme (dark theme)
- ✅ Same typography and spacing
- ✅ Matching navigation sidebars

## Implementation Priority

### Phase 1: Content Audit & Organization
1. **Review Decky FAQ** - identify troubleshooting items to move
2. **Review Decky Troubleshooting** - identify FAQ items to move
3. **Create content spreadsheet** with proper categorization

### Phase 2: Troubleshooting Page Overhaul  
1. **Restructure troubleshooting page** to match FAQ format
2. **Add search functionality**
3. **Convert content to details/summary format**
4. **Add proper navigation**

### Phase 3: Tutorial Page Standardization
1. **Match visual format** of 2.0 tutorials
2. **Add step-by-step structure**
3. **Include visual aids**

### Phase 4: Cross-Page Integration
1. **Update navigation menus**
2. **Add cross-references between pages**
3. **Ensure consistent linking**

## Quality Assurance Checklist

### Before/After Comparison Points:
- [ ] **Visual consistency** - all pages look like they belong together
- [ ] **Navigation consistency** - same menu structure and behavior  
- [ ] **Content organization** - clear separation between FAQ/Troubleshooting
- [ ] **Search functionality** - works on all appropriate pages
- [ ] **Mobile responsiveness** - consistent across all pages
- [ ] **Load times** - no performance regressions
- [ ] **SEO optimization** - proper meta descriptions and titles
- [ ] **Accessibility** - proper heading structure and alt text

### Testing Protocol:
1. **Visual comparison** - screenshot before/after of each page
2. **Navigation testing** - verify all internal links work
3. **Search testing** - verify search works correctly  
4. **Mobile testing** - check responsive behavior
5. **Content verification** - ensure no content was lost in migration
6. **Cross-browser testing** - verify compatibility

## Success Metrics
- [ ] All Decky pages have identical header/footer structure
- [ ] FAQ contains only true frequently asked questions  
- [ ] Troubleshooting contains only problem-solving content
- [ ] All pages have working search functionality
- [ ] Navigation between pages is seamless
- [ ] Mobile experience is consistent across all pages
- [ ] Page load times are optimal
- [ ] User can easily find information regardless of entry point

## Files to Monitor During Changes
- `_pages/faq/decky-unified-faq.md`
- `_pages/troubleshooting/decky.md` 
- `_pages/tutorials/plugin_tutorials.md`
- `_pages/help/deckyhelp.md`
- `_data/navigation.yml` (sidebar navigation)
- `_sass/faq-box.scss` (styling)
- `_sass/troubleshooting-box.scss` (styling)

---

**Next Steps:** Start with content audit tomorrow, then proceed through phases systematically to ensure no content is lost and all pages maintain functionality during the transition.