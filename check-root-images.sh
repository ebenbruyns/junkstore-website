#!/bin/bash

echo "🔍 ROOT-LEVEL IMAGE ANALYSIS"
echo "============================"

# Define root level images
ROOT_IMAGES=(
    "eben.jpeg"
    "eben.png"
    "JSAvatar-44.webp"
    "JSAvatar-48.webp"
    "website_image_compressed.jpg"
    "website_image_compressed.webp"
    "website_image.jpg"
    "website_image.webp"
)

echo ""
for img in "${ROOT_IMAGES[@]}"; do
    echo "📄 $img:"

    # Check file size
    if [ -f "assets/images/$img" ]; then
        size=$(stat -c%s "assets/images/$img" 2>/dev/null || stat -f%z "assets/images/$img" 2>/dev/null || echo "0")
        size_kb=$((size / 1024))
        echo "   Size: ${size_kb}KB"
    fi

    # Check usage (excluding generated files and our own scripts)
    usage=$(grep -r "$img" _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md _config.yml 2>/dev/null | grep -v "_site" | grep -v ".sh" | wc -l)

    if [ $usage -gt 0 ]; then
        echo "   ✅ USED ($usage references)"
        grep -r "$img" _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md _config.yml 2>/dev/null | grep -v "_site" | grep -v ".sh" | head -2 | sed 's/^/      /'
    else
        echo "   ❌ UNUSED - No references in source files"

        # Check if it appears in built site (might be auto-generated)
        built_usage=$(grep -r "$img" _site/ 2>/dev/null | grep -v "image_audit" | grep -v ".sh" | wc -l)
        if [ $built_usage -gt 0 ]; then
            echo "      (but appears in built site - check for automatic usage)"
        fi
    fi
    echo ""
done

echo "🔍 DUPLICATES ANALYSIS:"
echo "====================="

# Check for duplicate content
echo ""
echo "📱 Avatar duplicates:"
echo "   JSAvatar-44.webp vs JSAvatar-48.webp"
echo "   Both are logos but different sizes"

echo ""
echo "👤 Eben duplicates:"
echo "   eben.jpeg vs eben.png"
echo "   Same person, different formats"

echo ""
echo "🌐 Website image duplicates:"
echo "   website_image.jpg vs website_image.webp"
echo "   website_image_compressed.jpg vs website_image_compressed.webp"
echo "   Multiple formats + compressed versions"

echo ""
echo "💡 RECOMMENDATIONS:"
echo "=================="
echo "1. Remove unused formats if WebP versions exist and are used"
echo "2. Keep different sizes (44px vs 48px) if both are needed"
echo "3. Remove compressed versions if regular versions work fine"