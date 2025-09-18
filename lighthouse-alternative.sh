#!/bin/bash

echo "🚀 COMPREHENSIVE SITE PERFORMANCE ANALYSIS"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${BLUE}📊 PERFORMANCE METRICS${NC}"
echo "====================="

# Build time analysis
echo ""
echo -e "${YELLOW}⏱️  BUILD PERFORMANCE:${NC}"
BUILD_START=$(date +%s)
if bundle exec jekyll build > build.log 2>&1; then
    BUILD_END=$(date +%s)
    BUILD_TIME=$((BUILD_END - BUILD_START))
    echo "   Build time: ${BUILD_TIME}s"
    if [ $BUILD_TIME -lt 15 ]; then
        echo -e "   ${GREEN}✅ Excellent build time${NC}"
    elif [ $BUILD_TIME -lt 30 ]; then
        echo -e "   ${YELLOW}⚠️  Moderate build time${NC}"
    else
        echo -e "   ${RED}❌ Slow build time${NC}"
    fi
else
    echo -e "   ${RED}❌ Build failed${NC}"
    cat build.log
    exit 1
fi

# Site size analysis
echo ""
echo -e "${YELLOW}📦 SITE SIZE ANALYSIS:${NC}"
TOTAL_SIZE=$(du -sb _site | cut -f1)
TOTAL_SIZE_MB=$((TOTAL_SIZE / 1024 / 1024))
echo "   Total size: ${TOTAL_SIZE_MB}MB"

if [ $TOTAL_SIZE_MB -lt 25 ]; then
    echo -e "   ${GREEN}✅ Excellent size${NC}"
elif [ $TOTAL_SIZE_MB -lt 50 ]; then
    echo -e "   ${YELLOW}⚠️  Good size${NC}"
elif [ $TOTAL_SIZE_MB -lt 100 ]; then
    echo -e "   ${YELLOW}⚠️  Large size${NC}"
else
    echo -e "   ${RED}❌ Very large size${NC}"
fi

# Asset analysis
echo ""
echo -e "${YELLOW}🖼️  ASSET PERFORMANCE:${NC}"

# Images
IMAGE_COUNT=$(find _site -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | wc -l)
IMAGE_SIZE=$(find _site -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -exec du -cb {} + | tail -1 | cut -f1)
IMAGE_SIZE_MB=$((IMAGE_SIZE / 1024 / 1024))
LARGE_IMAGES=$(find _site -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | xargs du -b | awk '$1 > 500000' | wc -l)

echo "   Images: ${IMAGE_COUNT} files, ${IMAGE_SIZE_MB}MB"
echo "   Large images (>500KB): ${LARGE_IMAGES}"

if [ $LARGE_IMAGES -lt 5 ]; then
    echo -e "   ${GREEN}✅ Good image optimization${NC}"
elif [ $LARGE_IMAGES -lt 15 ]; then
    echo -e "   ${YELLOW}⚠️  Some large images${NC}"
else
    echo -e "   ${RED}❌ Many large images${NC}"
fi

# JavaScript analysis
JS_COUNT=$(find _site -name "*.js" | wc -l)
JS_SIZE=$(find _site -name "*.js" -exec du -cb {} + | tail -1 | cut -f1)
JS_SIZE_KB=$((JS_SIZE / 1024))

echo "   JavaScript: ${JS_COUNT} files, ${JS_SIZE_KB}KB"

if [ $JS_SIZE_KB -lt 500 ]; then
    echo -e "   ${GREEN}✅ Lightweight JavaScript${NC}"
elif [ $JS_SIZE_KB -lt 1000 ]; then
    echo -e "   ${YELLOW}⚠️  Moderate JavaScript${NC}"
else
    echo -e "   ${RED}❌ Heavy JavaScript${NC}"
fi

# CSS analysis
CSS_COUNT=$(find _site -name "*.css" | wc -l)
CSS_SIZE=$(find _site -name "*.css" -exec du -cb {} + | tail -1 | cut -f1)
CSS_SIZE_KB=$((CSS_SIZE / 1024))

echo "   CSS: ${CSS_COUNT} files, ${CSS_SIZE_KB}KB"

if [ $CSS_SIZE_KB -lt 200 ]; then
    echo -e "   ${GREEN}✅ Lightweight CSS${NC}"
elif [ $CSS_SIZE_KB -lt 500 ]; then
    echo -e "   ${YELLOW}⚠️  Moderate CSS${NC}"
else
    echo -e "   ${RED}❌ Heavy CSS${NC}"
fi

echo ""
echo -e "${BLUE}🔍 BEST PRACTICES AUDIT${NC}"
echo "========================"

# Check for render-blocking resources
echo ""
echo -e "${YELLOW}⚡ RENDER BLOCKING ANALYSIS:${NC}"

# Check CSS in head
HEAD_CSS=$(grep -r "stylesheet" _site --include="*.html" | grep -v "preload\|async\|defer" | wc -l)
echo "   Render-blocking CSS files: ${HEAD_CSS}"

if [ $HEAD_CSS -lt 3 ]; then
    echo -e "   ${GREEN}✅ Minimal render-blocking CSS${NC}"
else
    echo -e "   ${YELLOW}⚠️  Multiple render-blocking CSS files${NC}"
fi

# Check JavaScript in head
HEAD_JS=$(grep -r "<script" _site --include="*.html" | grep -v "async\|defer" | grep -E "<head>|</head>" -A 20 -B 20 | grep "<script" | wc -l)
echo "   Render-blocking JavaScript: ${HEAD_JS}"

if [ $HEAD_JS -eq 0 ]; then
    echo -e "   ${GREEN}✅ No render-blocking JavaScript${NC}"
else
    echo -e "   ${YELLOW}⚠️  ${HEAD_JS} render-blocking scripts${NC}"
fi

# Image optimization checks
echo ""
echo -e "${YELLOW}🖼️  IMAGE OPTIMIZATION:${NC}"

WEBP_COUNT=$(find _site -name "*.webp" | wc -l)
OLD_FORMAT_COUNT=$(find _site -name "*.jpg" -o -name "*.png" | wc -l)
WEBP_USAGE_RATIO=$((WEBP_COUNT * 100 / (WEBP_COUNT + OLD_FORMAT_COUNT)))

echo "   WebP adoption: ${WEBP_USAGE_RATIO}% (${WEBP_COUNT} WebP vs ${OLD_FORMAT_COUNT} PNG/JPG)"

if [ $WEBP_USAGE_RATIO -gt 80 ]; then
    echo -e "   ${GREEN}✅ Excellent WebP adoption${NC}"
elif [ $WEBP_USAGE_RATIO -gt 50 ]; then
    echo -e "   ${YELLOW}⚠️  Good WebP adoption${NC}"
else
    echo -e "   ${RED}❌ Low WebP adoption${NC}"
fi

# Lazy loading check
LAZY_IMAGES=$(grep -r "loading=\"lazy\"" _site --include="*.html" | wc -l)
echo "   Lazy loading images: ${LAZY_IMAGES}"

if [ $LAZY_IMAGES -gt 10 ]; then
    echo -e "   ${GREEN}✅ Good lazy loading implementation${NC}"
elif [ $LAZY_IMAGES -gt 0 ]; then
    echo -e "   ${YELLOW}⚠️  Some lazy loading${NC}"
else
    echo -e "   ${RED}❌ No lazy loading detected${NC}"
fi

# Mobile optimization
echo ""
echo -e "${YELLOW}📱 MOBILE OPTIMIZATION:${NC}"

# Viewport meta tag
VIEWPORT_COUNT=$(grep -r "viewport" _site --include="*.html" | wc -l)
echo "   Viewport meta tags: ${VIEWPORT_COUNT}"

if [ $VIEWPORT_COUNT -gt 0 ]; then
    echo -e "   ${GREEN}✅ Viewport configured${NC}"
else
    echo -e "   ${RED}❌ No viewport meta tag${NC}"
fi

# Responsive images
RESPONSIVE_IMAGES=$(grep -r "srcset\|sizes" _site --include="*.html" | wc -l)
echo "   Responsive images: ${RESPONSIVE_IMAGES}"

if [ $RESPONSIVE_IMAGES -gt 5 ]; then
    echo -e "   ${GREEN}✅ Good responsive image usage${NC}"
elif [ $RESPONSIVE_IMAGES -gt 0 ]; then
    echo -e "   ${YELLOW}⚠️  Some responsive images${NC}"
else
    echo -e "   ${YELLOW}⚠️  No responsive images detected${NC}"
fi

# SEO basics
echo ""
echo -e "${YELLOW}🔍 SEO BASICS:${NC}"

# Meta descriptions
META_DESC=$(grep -r "name=\"description\"" _site --include="*.html" | wc -l)
echo "   Pages with meta descriptions: ${META_DESC}"

# Title tags
TITLE_TAGS=$(grep -r "<title>" _site --include="*.html" | wc -l)
echo "   Pages with title tags: ${TITLE_TAGS}"

if [ $META_DESC -gt 5 ] && [ $TITLE_TAGS -gt 5 ]; then
    echo -e "   ${GREEN}✅ Good SEO basics${NC}"
else
    echo -e "   ${YELLOW}⚠️  SEO could be improved${NC}"
fi

# Accessibility
echo ""
echo -e "${YELLOW}♿ ACCESSIBILITY:${NC}"

# Alt text
ALT_TEXT=$(grep -r "alt=" _site --include="*.html" | wc -l)
IMG_COUNT=$(grep -r "<img" _site --include="*.html" | wc -l)
ALT_RATIO=$((ALT_TEXT * 100 / IMG_COUNT))

echo "   Images with alt text: ${ALT_RATIO}% (${ALT_TEXT}/${IMG_COUNT})"

if [ $ALT_RATIO -gt 90 ]; then
    echo -e "   ${GREEN}✅ Excellent alt text coverage${NC}"
elif [ $ALT_RATIO -gt 70 ]; then
    echo -e "   ${YELLOW}⚠️  Good alt text coverage${NC}"
else
    echo -e "   ${RED}❌ Poor alt text coverage${NC}"
fi

# Overall score calculation
echo ""
echo -e "${PURPLE}📊 OVERALL PERFORMANCE SCORE${NC}"
echo "============================"

SCORE=0
MAX_SCORE=100

# Build time (20 points)
if [ $BUILD_TIME -lt 15 ]; then SCORE=$((SCORE + 20))
elif [ $BUILD_TIME -lt 30 ]; then SCORE=$((SCORE + 15))
else SCORE=$((SCORE + 5)); fi

# Site size (20 points)
if [ $TOTAL_SIZE_MB -lt 25 ]; then SCORE=$((SCORE + 20))
elif [ $TOTAL_SIZE_MB -lt 50 ]; then SCORE=$((SCORE + 15))
elif [ $TOTAL_SIZE_MB -lt 100 ]; then SCORE=$((SCORE + 10))
else SCORE=$((SCORE + 0)); fi

# Image optimization (20 points)
if [ $LARGE_IMAGES -lt 5 ]; then SCORE=$((SCORE + 15))
elif [ $LARGE_IMAGES -lt 15 ]; then SCORE=$((SCORE + 10))
else SCORE=$((SCORE + 0)); fi

if [ $WEBP_USAGE_RATIO -gt 80 ]; then SCORE=$((SCORE + 5))
elif [ $WEBP_USAGE_RATIO -gt 50 ]; then SCORE=$((SCORE + 3))
fi

# JavaScript optimization (15 points)
if [ $JS_SIZE_KB -lt 500 ]; then SCORE=$((SCORE + 15))
elif [ $JS_SIZE_KB -lt 1000 ]; then SCORE=$((SCORE + 10))
else SCORE=$((SCORE + 5)); fi

# CSS optimization (10 points)
if [ $CSS_SIZE_KB -lt 200 ]; then SCORE=$((SCORE + 10))
elif [ $CSS_SIZE_KB -lt 500 ]; then SCORE=$((SCORE + 7))
else SCORE=$((SCORE + 3)); fi

# Best practices (15 points)
if [ $HEAD_CSS -lt 3 ]; then SCORE=$((SCORE + 5)); fi
if [ $HEAD_JS -eq 0 ]; then SCORE=$((SCORE + 5)); fi
if [ $LAZY_IMAGES -gt 10 ]; then SCORE=$((SCORE + 5)); fi

echo "Performance Score: ${SCORE}/${MAX_SCORE}"

if [ $SCORE -ge 90 ]; then
    echo -e "${GREEN}🏆 EXCELLENT PERFORMANCE!${NC}"
elif [ $SCORE -ge 75 ]; then
    echo -e "${YELLOW}⭐ GOOD PERFORMANCE${NC}"
elif [ $SCORE -ge 60 ]; then
    echo -e "${YELLOW}⚠️  FAIR PERFORMANCE${NC}"
else
    echo -e "${RED}❌ NEEDS IMPROVEMENT${NC}"
fi

echo ""
echo -e "${BLUE}💡 TOP RECOMMENDATIONS${NC}"
echo "======================"

# Specific recommendations based on analysis
if [ $LARGE_IMAGES -gt 10 ]; then
    echo "🔥 HIGH IMPACT: Convert large images to WebP format"
fi

if [ $JS_SIZE_KB -gt 800 ]; then
    echo "🔥 HIGH IMPACT: Optimize JavaScript (use CDN for jQuery, lazy load search)"
fi

if [ $TOTAL_SIZE_MB -gt 50 ]; then
    echo "🔥 HIGH IMPACT: Reduce overall site size (compress videos, convert GIFs)"
fi

if [ $HEAD_JS -gt 0 ]; then
    echo "⚡ QUICK WIN: Add async/defer to JavaScript files"
fi

if [ $WEBP_USAGE_RATIO -lt 70 ]; then
    echo "⚡ QUICK WIN: Convert more images to WebP format"
fi

if [ $LAZY_IMAGES -lt 5 ]; then
    echo "⚡ QUICK WIN: Add lazy loading to more images"
fi

echo ""
echo -e "${GREEN}✅ Analysis complete! Report saved to lighthouse-alternative-report.json${NC}"

# Save detailed JSON report
cat > lighthouse-alternative-report.json <<EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "performance": {
    "score": $SCORE,
    "maxScore": $MAX_SCORE,
    "buildTime": $BUILD_TIME,
    "siteSize": {
      "bytes": $TOTAL_SIZE,
      "mb": $TOTAL_SIZE_MB
    }
  },
  "assets": {
    "images": {
      "count": $IMAGE_COUNT,
      "sizeMB": $IMAGE_SIZE_MB,
      "largeImages": $LARGE_IMAGES,
      "webpUsage": $WEBP_USAGE_RATIO
    },
    "javascript": {
      "count": $JS_COUNT,
      "sizeKB": $JS_SIZE_KB
    },
    "css": {
      "count": $CSS_COUNT,
      "sizeKB": $CSS_SIZE_KB
    }
  },
  "bestPractices": {
    "renderBlockingCSS": $HEAD_CSS,
    "renderBlockingJS": $HEAD_JS,
    "lazyImages": $LAZY_IMAGES,
    "altTextCoverage": $ALT_RATIO
  },
  "seo": {
    "metaDescriptions": $META_DESC,
    "titleTags": $TITLE_TAGS
  }
}
EOF