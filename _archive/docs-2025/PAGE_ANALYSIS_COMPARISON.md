# Page Analysis & Content Comparison Report
**Analysis Date:** July 31, 2025  
**Pages Analyzed:** comingsoon.md, learnmore.md, v2faq.md

## Executive Summary

After analyzing all three pages, **both comingsoon.md and learnmore.md can be safely archived**. The v2faq.md contains comprehensive, well-organized content that supersedes both pages. The older pages contain significant content redundancy and present outdated/inconsistent messaging.

## Page Content Analysis

### 1. comingsoon.md (`/comingsoon/`)
**Current Status:** Outdated launch announcement page  
**Content Focus:** Initial product launch, pricing announcement, early supporter messaging

**Key Content Sections:**
- Launch announcement with early bird discount (expired July 31, 2025)
- Pricing details ($40/year with 25% off early bird discount)
- Feature comparison table (Decky vs Paid version)
- Developer justification for paid model
- Early supporter FAQ sections
- Technical resilience explanations

**Problems Identified:**
- ❌ **Expired promotion:** Early bird discount expired July 31, 2025
- ❌ **Outdated messaging:** "Just launched" messaging no longer accurate
- ❌ **Redundant content:** Feature table duplicated in other locations
- ❌ **Legacy focus:** Heavy emphasis on "why we need to charge" justification

### 2. learnmore.md (`/learnmore/`)
**Current Status:** Simplified feature overview and trial promotion  
**Content Focus:** Quick overview of v2.0 features and trial signup encouragement

**Key Content Sections:**
- Brief feature highlight list
- Trial promotion (7-day free trial)
- Early supporter discount (same expired promotion)
- License model explanation
- Streamlined feature breakdown
- Quick FAQ references

**Problems Identified:**
- ❌ **Expired promotion:** Same early bird discount messaging
- ❌ **Surface-level content:** Lacks depth compared to v2faq.md
- ❌ **Redundant messaging:** Trial and pricing info better covered in FAQ
- ❌ **Incomplete coverage:** Missing technical details and troubleshooting

### 3. v2faq.md (`/2.0faq/`)
**Current Status:** Comprehensive, current, well-organized FAQ  
**Content Focus:** Complete user guidance with search functionality

**Key Content Sections:**
- ✅ **5 sections with 35 questions** covering all user needs
- ✅ **Search functionality** with fuzzy matching
- ✅ **Current information** with no expired promotions
- ✅ **Technical depth** including setup, troubleshooting, advanced configurations
- ✅ **Complete feature comparison table** (more detailed than other pages)
- ✅ **Structured navigation** with section summaries
- ✅ **User-focused organization** (by task/need rather than marketing messaging)

## Content Gap Analysis

### Missing from v2faq.md (potential additions):

#### From comingsoon.md:
1. **Device License Limit** - "5 devices per license" (FAQ section line 59-62)
2. **Future Roadmap Items** - Itch.io, EA, Ubisoft support plans (lines 207-218)
3. **Open Source Relationship** - Clarification about Decky version remaining available (lines 38-42)

#### From learnmore.md:
1. **License Model Clarity** - Traditional license vs subscription explanation (lines 53-61)
2. **Quick Feature Summary** - Condensed feature list format for scanning (lines 66-103)

#### Additional Technical Details:
- **Custom extensions creation** - Process and capabilities
- **ROM download specifics** - How emulator integration works
- **Extension update process** - How users receive updates

## Recommendations

### ✅ ARCHIVE: comingsoon.md
**Rationale:**
- Expired promotional content (Early Bird discount ended July 31, 2025)
- "Launch announcement" messaging no longer relevant
- All valuable content superseded by v2faq.md
- Extensive developer justification content not needed for current users

### ✅ ARCHIVE: learnmore.md  
**Rationale:**
- Surface-level content lacks depth of v2faq.md
- Expired promotional messaging
- Redundant trial/pricing information
- Users better served by comprehensive FAQ

### 🔄 ENHANCE: v2faq.md
**Recommended Additions:**

#### Add New FAQ Section: "Licensing & Account Management"
```markdown
<details class="faq-box">
  <summary>How many devices can I install Junk Store on?</summary>
  <p></p>
    You can install Junk Store on up to <strong>five</strong> devices under a single license. We think this strikes a fair balance between flexibility and sustainability.
</details>

<details class="faq-box">
  <summary>Is this a subscription or a license?</summary>
  <p></p>
    Junk Store uses a <strong>traditional license model</strong> with yearly renewal for updates and support.
  <br><br>
    <strong>You get:</strong>
    <ul>
      <li>✅ Full app access permanently</li>
      <li>✅ All updates released during your active license</li>
      <li>✅ Ongoing maintenance and support</li>
    </ul>
    If you don't renew after 12 months, you keep the latest version you received — <strong>permanently</strong>. No kill switch, no feature removal.
  <br><br>
    <strong>Important:</strong> Steam Deck/Valve updates may break functionality over time. Active subscriptions receive compatibility fixes to address these issues. Without an active subscription, you may lose functionality if Valve makes changes that affect how Junk Store operates.
</details>

<details class="faq-box">
  <summary>Will the free Decky version continue to be available?</summary>
  <p></p>
    <strong>Yes.</strong> The open source Decky version remains available for the community, free to use and collaborate on.
  <br><br>
    Junk Store 2.0 is completely separate software that doesn't share code with the open source version. Both versions can coexist, and you can choose what works best for your needs.
</details>
```

#### Add to "Getting Started" Section:
```markdown
<details class="faq-box">
  <summary>What new platforms are planned for future releases?</summary>
  <p></p>
    <strong>Planned platform support</strong> (pending successful launch and resources):
  <ul>
    <li>🎯 <strong>Itch.io</strong> - First priority for next platform addition</li>
    <li>🎮 <strong>EA, Ubisoft, Battle.net</strong> - If technically viable</li>
    <li>🔧 <strong>Community extension sharing</strong> - User-created platform support</li>
  </ul>
    <strong>Note:</strong> Base your purchase decision on current features, not future promises. New platforms will be added as development resources allow.
</details>
```

### Navigation & Link Updates Required

**Current broken internal links to fix:**
- Homepage and other pages linking to `/comingsoon/` should redirect to `/2.0faq/`
- Any `/learnmore/` links should redirect to `/2.0faq/`
- Update navigation.yml if these pages are referenced

## Implementation Plan

### Phase 1: Content Enhancement (Priority: High)
1. ✅ Add missing FAQ sections to v2faq.md from valuable content in archived pages
2. ✅ Add device licensing and roadmap information
3. ✅ Enhance technical details section

### Phase 2: Archive & Redirect (Priority: Medium)  
1. 📁 Move comingsoon.md and learnmore.md to `/archive/` directory
2. 🔄 Set up 301 redirects from old URLs to `/2.0faq/`
3. 🔗 Update internal links across site
4. 🧭 Update navigation menus

### Phase 3: Quality Assurance (Priority: High)
1. 🔍 Test all redirects function properly
2. 📱 Verify mobile experience remains optimal
3. 🔗 Audit entire site for broken internal links
4. 🚀 Jekyll build verification

## Conclusion

The v2faq.md represents the evolution of both comingsoon.md and learnmore.md into a mature, comprehensive resource. Both older pages can be confidently archived after extracting their few remaining unique value points.

**Total Estimated Work:** 2-3 hours
**Business Impact:** Improved user experience, eliminated confusion from outdated promotional content
**SEO Impact:** Consolidated page authority into single comprehensive resource

---
**Next Steps:** Proceed with Phase 1 content enhancement, then archive outdated pages.