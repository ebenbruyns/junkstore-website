# Social Media Image Optimization Notes

## Issue Identified: September 4, 2025

**Problem:** Reddit link previews showing blurry images for blog posts
- Aug 31 games tested post image appears blurry on Reddit
- Likely caused by Reddit downscaling/cropping large hero images
- Current hero images optimized for website display, not social sharing

## Solution for Future Blog Posts

### Optimal Social Media Image Specs
- **Dimensions:** 1200x630px (recommended for Facebook, Twitter, Reddit)
- **Aspect Ratio:** 1.91:1 (16:9 also works)
- **File Size:** Under 1MB for fast loading
- **Format:** JPG or PNG

### Implementation Process
1. **Create two versions of each hero image:**
   - `[post-name]-hero.jpg` - Full size for website display
   - `[post-name]-hero-social.jpg` - 1200x630px for social sharing

2. **Update blog post frontmatter:**
   ```yaml
   header:
     overlay_image: /assets/images/blog/[post-name]-hero.jpg
     og_image: /assets/images/blog/[post-name]-hero-social.jpg
   ```

3. **Naming convention:**
   - Hero images: `aug31-hero.jpg`, `sep07-hero.jpg`, etc.
   - Social versions: `aug31-hero-social.jpg`, `sep07-hero-social.jpg`, etc.

### Current Status
- **Aug 31 post:** Hero image exists but needs social-optimized version
- **Future posts:** Implement dual-image system from start

## Action Items
- [ ] Create social-optimized version of Aug 31 hero image for testing
- [ ] Implement dual-image system for next blog post
- [ ] Document process in blog writing workflow

## File Locations
- Hero images: `/assets/images/blog/`
- Blog posts: `/_posts/weekly-updates/`
- This documentation: `/docs/SOCIAL_MEDIA_IMAGE_OPTIMIZATION.md`

---
*Last updated: September 4, 2025*
*Issue discovered during Aug 31 games tested post Reddit sharing*