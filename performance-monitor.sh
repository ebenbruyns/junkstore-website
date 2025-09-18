#!/bin/bash

# Performance Monitor for Junk Store Website
# Tracks file sizes, build performance, and optimization opportunities

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPORT_FILE="performance-report.json"
BASELINE_FILE="performance-baseline.json"
MAX_SITE_SIZE_MB=50
MAX_IMAGE_SIZE_KB=500
MAX_CSS_SIZE_KB=300

echo -e "${BLUE}🔍 Junk Store Performance Monitor${NC}"
echo "=================================="

# Function to convert bytes to human readable
bytes_to_human() {
    local bytes=$1
    if [ $bytes -gt 1048576 ]; then
        echo "$(( bytes / 1048576 ))MB"
    elif [ $bytes -gt 1024 ]; then
        echo "$(( bytes / 1024 ))KB"
    else
        echo "${bytes}B"
    fi
}

# Function to get file size in bytes
get_file_size() {
    if [ -f "$1" ]; then
        stat -c%s "$1" 2>/dev/null || stat -f%z "$1" 2>/dev/null || echo "0"
    else
        echo "0"
    fi
}

# Function to get directory size in bytes
get_dir_size() {
    if [ -d "$1" ]; then
        du -sb "$1" 2>/dev/null | cut -f1 || echo "0"
    else
        echo "0"
    fi
}

# Build the site and time it
echo -e "\n${YELLOW}📦 Building site...${NC}"
BUILD_START=$(date +%s)

if bundle exec jekyll build > build.log 2>&1; then
    BUILD_END=$(date +%s)
    BUILD_TIME=$((BUILD_END - BUILD_START))
    echo -e "${GREEN}✅ Build completed in ${BUILD_TIME}s${NC}"
else
    echo -e "${RED}❌ Build failed! Check build.log${NC}"
    exit 1
fi

# Get current timestamp
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Analyze built site
if [ ! -d "_site" ]; then
    echo -e "${RED}❌ _site directory not found${NC}"
    exit 1
fi

echo -e "\n${YELLOW}📊 Analyzing site performance...${NC}"

# Total site size
TOTAL_SIZE=$(get_dir_size "_site")
TOTAL_SIZE_MB=$((TOTAL_SIZE / 1048576))

echo "Total site size: $(bytes_to_human $TOTAL_SIZE)"

# Critical file analysis
echo -e "\n${BLUE}📁 File Analysis:${NC}"

# Find largest files
echo "Largest files:"
find _site -type f -exec du -h {} + | sort -hr | head -10 | while read size file; do
    echo "  $size - ${file#_site/}"
done

# Image analysis
echo -e "\n${BLUE}🖼️  Image Analysis:${NC}"
TOTAL_IMAGES=0
OVERSIZED_IMAGES=0
IMAGE_SIZE=0

if find _site -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" | head -1 > /dev/null 2>&1; then
    while IFS= read -r img; do
        size=$(get_file_size "$img")
        IMAGE_SIZE=$((IMAGE_SIZE + size))
        TOTAL_IMAGES=$((TOTAL_IMAGES + 1))

        size_kb=$((size / 1024))
        if [ $size_kb -gt $MAX_IMAGE_SIZE_KB ]; then
            OVERSIZED_IMAGES=$((OVERSIZED_IMAGES + 1))
            echo -e "  ${RED}⚠️  Large image: ${img#_site/} ($(bytes_to_human $size))${NC}"
        fi
    done < <(find _site -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp")

    echo "Total images: $TOTAL_IMAGES"
    echo "Image size: $(bytes_to_human $IMAGE_SIZE)"
    echo "Oversized images (>500KB): $OVERSIZED_IMAGES"
else
    echo "No images found"
fi

# CSS analysis
echo -e "\n${BLUE}🎨 CSS Analysis:${NC}"
CSS_SIZE=0
CSS_FILES=0
LARGE_CSS=0

if find _site -name "*.css" | head -1 > /dev/null 2>&1; then
    while IFS= read -r css; do
        size=$(get_file_size "$css")
        CSS_SIZE=$((CSS_SIZE + size))
        CSS_FILES=$((CSS_FILES + 1))

        size_kb=$((size / 1024))
        if [ $size_kb -gt $MAX_CSS_SIZE_KB ]; then
            LARGE_CSS=$((LARGE_CSS + 1))
            echo -e "  ${YELLOW}⚠️  Large CSS: ${css#_site/} ($(bytes_to_human $size))${NC}"
        fi
    done < <(find _site -name "*.css")

    echo "CSS files: $CSS_FILES"
    echo "CSS size: $(bytes_to_human $CSS_SIZE)"
    echo "Large CSS files (>300KB): $LARGE_CSS"
else
    echo "No CSS files found"
fi

# JavaScript analysis
echo -e "\n${BLUE}⚡ JavaScript Analysis:${NC}"
JS_SIZE=0
JS_FILES=0

if find _site -name "*.js" | head -1 > /dev/null 2>&1; then
    while IFS= read -r js; do
        size=$(get_file_size "$js")
        JS_SIZE=$((JS_SIZE + size))
        JS_FILES=$((JS_FILES + 1))
    done < <(find _site -name "*.js")

    echo "JS files: $JS_FILES"
    echo "JS size: $(bytes_to_human $JS_SIZE)"
else
    echo "No JavaScript files found"
fi

# Performance warnings
echo -e "\n${BLUE}🚨 Performance Warnings:${NC}"
WARNINGS=0

if [ $TOTAL_SIZE_MB -gt $MAX_SITE_SIZE_MB ]; then
    echo -e "${RED}⚠️  Site size (${TOTAL_SIZE_MB}MB) exceeds target (${MAX_SITE_SIZE_MB}MB)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

if [ $OVERSIZED_IMAGES -gt 0 ]; then
    echo -e "${YELLOW}⚠️  $OVERSIZED_IMAGES oversized images found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

if [ $LARGE_CSS -gt 0 ]; then
    echo -e "${YELLOW}⚠️  $LARGE_CSS large CSS files found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

if [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ No performance warnings${NC}"
fi

# Generate JSON report
cat > "$REPORT_FILE" << EOF
{
  "timestamp": "$TIMESTAMP",
  "build_time": $BUILD_TIME,
  "total_size_bytes": $TOTAL_SIZE,
  "total_size_mb": $TOTAL_SIZE_MB,
  "images": {
    "count": $TOTAL_IMAGES,
    "size_bytes": $IMAGE_SIZE,
    "oversized_count": $OVERSIZED_IMAGES
  },
  "css": {
    "count": $CSS_FILES,
    "size_bytes": $CSS_SIZE,
    "large_count": $LARGE_CSS
  },
  "javascript": {
    "count": $JS_FILES,
    "size_bytes": $JS_SIZE
  },
  "warnings": $WARNINGS
}
EOF

echo -e "\n${GREEN}📄 Report saved to: $REPORT_FILE${NC}"

# Compare with baseline if it exists
if [ -f "$BASELINE_FILE" ]; then
    echo -e "\n${BLUE}📈 Comparison with baseline:${NC}"

    BASELINE_SIZE=$(jq -r '.total_size_bytes' "$BASELINE_FILE")
    BASELINE_BUILD_TIME=$(jq -r '.build_time' "$BASELINE_FILE")

    SIZE_DIFF=$((TOTAL_SIZE - BASELINE_SIZE))
    BUILD_DIFF=$((BUILD_TIME - BASELINE_BUILD_TIME))

    if [ $SIZE_DIFF -gt 0 ]; then
        echo -e "${RED}📈 Size increased by $(bytes_to_human $SIZE_DIFF)${NC}"
    elif [ $SIZE_DIFF -lt 0 ]; then
        echo -e "${GREEN}📉 Size decreased by $(bytes_to_human ${SIZE_DIFF#-})${NC}"
    else
        echo -e "${GREEN}📊 Size unchanged${NC}"
    fi

    if [ $BUILD_DIFF -gt 0 ]; then
        echo -e "${YELLOW}⏱️  Build time increased by ${BUILD_DIFF}s${NC}"
    elif [ $BUILD_DIFF -lt 0 ]; then
        echo -e "${GREEN}⏱️  Build time decreased by ${BUILD_DIFF#-}s${NC}"
    else
        echo -e "${GREEN}⏱️  Build time unchanged${NC}"
    fi
else
    echo -e "\n${BLUE}📊 Creating baseline for future comparisons...${NC}"
    cp "$REPORT_FILE" "$BASELINE_FILE"
    echo -e "${GREEN}✅ Baseline created${NC}"
fi

echo -e "\n${GREEN}🎉 Performance analysis complete!${NC}"