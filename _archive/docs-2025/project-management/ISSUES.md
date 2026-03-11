# Current Issues & Problems

## What This Document Is
This is your "bug tracker" and problem list. It helps us keep track of things that need fixing.

## How to Use This
- **Add new problems** as you find them
- **Prioritize issues** by severity
- **Check off fixed items** when completed
- **Reference issue numbers** when discussing problems

---

## Critical Issues 🚨
*Problems that break functionality or user experience*

Currently none identified! 🎉

---

## High Priority Issues ⚠️
*Problems that significantly impact users*

### #001 - Performance Issues
**Status:** Needs Investigation  
**Description:** Website may be loading slowly on some devices  
**Impact:** Users may leave before page loads  
**Next Steps:** Run performance audit

### #002 - Mobile Menu Testing
**Status:** Needs Testing  
**Description:** Need to verify navigation works well on all mobile devices  
**Impact:** Mobile users may have difficulty navigating  
**Next Steps:** Test on various screen sizes

---

## Medium Priority Issues 📋
*Problems that affect some users or functionality*

### #003 - Image Optimization
**Status:** Identified  
**Description:** Images may not be optimized for web  
**Impact:** Slower page loads, especially on mobile  
**Next Steps:** Audit all images and compress

### #004 - SEO Meta Tags
**Status:** Needs Audit  
**Description:** Some pages may be missing proper SEO tags  
**Impact:** Reduced search engine visibility  
**Next Steps:** Review all page meta tags

---

## Low Priority Issues 📝
*Minor improvements or nice-to-have fixes*

### #005 - Browser Compatibility
**Status:** Unknown  
**Description:** Haven't tested on all browsers  
**Impact:** Some users may see layout issues  
**Next Steps:** Test on Chrome, Firefox, Safari, Edge

### #006 - Accessibility Improvements
**Status:** Not Started  
**Description:** Website may not be fully accessible  
**Impact:** Users with disabilities may have difficulty  
**Next Steps:** Run accessibility audit

---

## Resolved Issues ✅
*Problems we've fixed*

### #000 - Hanging HTML Tags in Games Table
**Status:** RESOLVED  
**Description:** `</tr> </tr> </tbody> </table> </div>` appeared as text  
**Solution:** Replaced Jekyll template with JavaScript-based table  
**Date Resolved:** Current session  

---

## How to Report New Issues

### Template for New Issues:
```
### #XXX - Issue Title
**Status:** New  
**Description:** [What's wrong?]  
**Impact:** [How does this affect users?]  
**Steps to Reproduce:** [If applicable]  
**Next Steps:** [What should be done?]
```

### Severity Guidelines:
- **Critical:** Site is broken or unusable
- **High:** Major functionality affected
- **Medium:** Some users affected or minor functionality issues
- **Low:** Cosmetic issues or nice-to-have improvements

### When to Add Issues:
- You notice something not working properly
- Users report problems
- You think of improvements
- During testing, you find bugs
- Performance problems are discovered