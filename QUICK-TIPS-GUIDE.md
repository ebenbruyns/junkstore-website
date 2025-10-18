# Quick Tips Blog Post Generation Guide

**Purpose:** This document defines the standard format and process for creating Quick Tips blog posts for the Junk Store website. Claude should reference this guide when asked to create or assist with Quick Tips posts.

---

## Standard Template Structure

### Front Matter
```yaml
---
layout: post
title: "[Descriptive How-to or Tip Title]"
date: YYYY-MM-DD
categories: [Tip of the Week, VERSION_TAG]
tags: [Junk Store, Steam Deck, Epic Games, GOG Games, Amazon Games, itch.io, Specific Features]
slug: "descriptive-slug"
excerpt: "One sentence summary of the tip"
image: /assets/images/blog/YYMMDD-tipname-hero.webp
header:
  teaser: /assets/images/blog/YYMMDD-tipname-thumb.webp
read_time: "3-5 min read"
toc: true
---
```

**Image Requirements:**
- **Hero Image**: 1200x400px WebP format (optimized at 85% quality)
  - Used in blog listings and as featured image
  - Should fit properly in blog card without cropping
  - Dark gradient background (#1a2332 to #2d3e50)
  - Title positioned at y=120, subtitle at y=160
  - Feature boxes (if used) positioned at y=210
  - Generate with Node.js Canvas library, convert to WebP with ImageMagick

- **Thumbnail**: 500x500px WebP format (optimized at 85% quality)
  - Used in smaller previews and social media
  - Should contain simplified version of hero design

- **Conversion Command**:
  ```bash
  magick source.png -quality 85 -define webp:method=6 output.webp
  ```

**Category Tags:**
- Decky-only: `[Tip of the Week, Decky Plugin]`
- 2.0-only: `[Tip of the Week, 2.0 Standalone]`
- Both versions: `[Tip of the Week, Universal]`

### Content Structure (Required Sections)

1. **Version Badge** (immediately after front matter)
```markdown
**Applies to:**
<span class="tutorial-tag decky-tag">Decky Plugin</span>
<!-- OR -->
<span class="tutorial-tag standalone-tag">2.0 Standalone</span>
<!-- OR -->
<span class="tutorial-tag both-tag">Universal</span>
```

2. **Opening Hook**
```markdown
**Quick Tip:** [One sentence describing the solution]

*[Optional version note if universal]*
```

3. **The Problem Section**
```markdown
## The Problem

[2-3 sentences describing what users are experiencing]
```

4. **The Solution Section**
```markdown
## The Solution

### [For Universal - Version-specific subsections]
#### Junk Store 2.0 Method
1. **Action step**
2. **Action step**
![Screenshot](/path/to/image.jpg){: .align-center}
*Caption*

#### Decky Plugin Method
1. **Action step**
![Screenshot](/path/to/image.jpg){: .align-center}
*Caption*

### [For Single Version - Direct steps]
1. **Action step**
2. **Action step**
![Screenshot](/path/to/image.jpg){: .align-center}
*Caption*
```

5. **Why This Matters Section**
```markdown
## Why This Matters

[2-3 sentences explaining benefit/impact]
```

6. **Pro Tips Section** (Optional but recommended)
```markdown
## Pro Tips

<div class="tip-callout">
  <strong>💡 Pro Tip:</strong> [Helpful hint]
</div>

<div class="warning-callout">
  <strong>⚠️ Important:</strong> [Warning if needed]
</div>
```

7. **Troubleshooting Section** (Optional)
```markdown
## Troubleshooting

**Can't find [X]?**
- [Solution 1]
- [Solution 2]
```

8. **Sign-off**
```markdown
---

Cheers,
The Junk Store Team
```

9. **CTA Section** (Required)
```markdown
<div class="inline-blog-cta">
  <p><strong>Ready for [benefit]?</strong></p>
  <a href="/buy_now/" class="inline-blog-cta-button">
    🚀 Try Junk Store 2.0 Free for 7 Days
  </a>
  <p class="inline-cta-subtext">[Friction removal message]</p>
</div>
```

10. **Community Links** (Required)
```markdown
---

*Have questions about this tip? Join our community on <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="community-btn discord-btn"><i class="fab fa-discord" style="margin-right: 6px;"></i>Discord</a> or <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="community-btn reddit-btn"><i class="fab fa-reddit" style="margin-right: 6px;"></i>Reddit</a>!*
```

11. **Styling Block** (Required - copy from template)
[Full CSS block - see template file]

---

## Writing Guidelines

### Do's
- Use active voice and direct commands
- Bold the action in each numbered step
- Keep sentences short and scannable
- Use specific button/menu names
- Add "Why This Matters" context
- Include troubleshooting for common issues
- Use callout boxes for important notes

### Don'ts
- Use passive voice
- Write long paragraphs
- Skip obvious steps
- Forget image alt text
- Use technical jargon without explanation
- Include "next week preview" promotional content

---

## Image Guidelines

**Naming Convention:**
```
Main: /assets/images/blog/YYMMDD-tipname.png
Thumb: /assets/images/blog/YYMMDD-tipname-thumb.jpg
Steps: /assets/images/blog/YYMMDD-tipname-step1.png
```

**Requirements:**
- Clear, uncluttered screenshots
- Highlight relevant UI elements (red boxes/arrows)
- Dark mode preferred
- Include descriptive captions
- Always use `{: .align-center}` for centering

---

## CTA Message Themes

**Friction Removal:**
- "Less tweaking, more gaming"
- "Stop fighting with Desktop Mode"
- "Skip the hassle"

**Premium Experience:**
- "Ready for the premium experience?"
- "Upgrade your Steam Deck gaming"

**Feature-Specific:**
- Relate to the tip content

---

## File Management

**Location:** `_posts/tips/YYYY-MM-DD-slug.md`

**After Publishing - Add to Tutorials Page:**
Edit `/tutorials/unified-tutorials.md` and add to "Quick Tips & Tricks" section:

```html
<div class="tip-item [decky|standalone|both]">
  <h4><a href="/blog/slug/">Title</a></h4>
  <p>Description</p>
  <span class="tip-tag">3 min read</span>
  <span class="tutorial-tag [decky-tag|standalone-tag|both-tag]">[Decky Plugin|2.0 Standalone|Universal]</span>
</div>
```

---

## Standard CSS Block (Include at end of every tip)

```html
<style>
/* Version tags */
.tutorial-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 8px;
}

.decky-tag {
  background: #2196f3;
  color: white;
}

.standalone-tag {
  background: #e67300;
  color: white;
}

.both-tag {
  background: #4caf50;
  color: white;
}

/* Callout boxes */
.tip-callout {
  background: rgba(76, 175, 80, 0.1);
  border-left: 4px solid #4caf50;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

.warning-callout {
  background: rgba(255, 152, 0, 0.1);
  border-left: 4px solid #ff9800;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
}

/* Community Buttons */
.community-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  margin-left: 8px;
  color: white !important;
}

.discord-btn {
  background: #5865f2;
}

.reddit-btn {
  background: #ff4500;
}

.community-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: white !important;
  opacity: 0.9;
}

/* CTA Box */
.inline-blog-cta {
  text-align: center;
  background: #1e2a38;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border: 1px solid #3a4a5c;
}

.inline-blog-cta p {
  margin-bottom: 15px;
  color: #fff;
  font-size: 1.1rem;
}

.inline-blog-cta-button {
  display: inline-block;
  background: #0056b3;
  color: #fff !important;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin: 10px 0;
  border: 2px solid #0056b3;
}

.inline-blog-cta-button:hover,
.inline-blog-cta-button:visited,
.inline-blog-cta-button:visited:hover {
  background: #004494;
  border-color: #004494;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 86, 179, 0.4);
  text-decoration: none;
}

.inline-cta-subtext {
  margin-top: 8px;
  color: #cceeff;
  font-size: 0.9rem;
  font-style: italic;
}
</style>
```

---

## Pre-Publish Checklist

When creating a Quick Tip post, verify:

- [ ] Version badge at top (Decky/2.0/Both)
- [ ] Clear problem statement (2-3 sentences)
- [ ] Solution with numbered steps
- [ ] Bold actions in each step
- [ ] At least 2-3 screenshots with captions
- [ ] Images centered with `{: .align-center}`
- [ ] "Why This Matters" section
- [ ] Pro tip or warning callout
- [ ] CTA with friction-removal message
- [ ] Community links at bottom
- [ ] Standard CSS block included
- [ ] All images have descriptive alt text
- [ ] Slug is SEO-friendly
- [ ] Categories and tags correct
- [ ] Read time is 3-5 min
- [ ] TOC enabled (`toc: true`)
- [ ] Added to `/tutorials/` page after publishing

---

## When User Requests a Quick Tip

**Process:**
1. Ask for: Topic, version (Decky/2.0/Both), and any specific details
2. Generate complete post following this template
3. Use placeholder image paths (user will add screenshots)
4. Include all required sections
5. Apply appropriate version tags
6. Choose relevant CTA message
7. Remind user to add screenshots and update tutorials page

**Example Response Format:**
"I'll create a Quick Tip post for [topic] targeting [version]. I'll follow the standard template with all required sections. You'll need to add screenshots at the placeholder locations, then add it to the tutorials page."
