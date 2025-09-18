#!/bin/bash

# Check image usage including drafts
# Safer analysis before removing images

echo "🔍 Checking image usage in all content..."

# List all the "unused" images from the previous report
POTENTIALLY_UNUSED=(
    "assets/images/blog/2.0-addvar.jpg"
    "assets/images/blog/2.0-menu.jpg"
    "assets/images/blog/addvar-blog.png"
    "assets/images/blog/addvar-blog-thumb.jpg"
    "assets/images/blog/aug19-hero-original.jpg"
    "assets/images/blog/both-menu-advanced.png"
    "assets/images/blog/both-menu.jpg"
    "assets/images/blog/custom-launch-arguments-facebook.png"
    "assets/images/blog/custom-launch-arguments-hero.png"
    "assets/images/blog/custom-launch-arguments-hero-thumb.jpg"
    "assets/images/blog/custom-launch-arguments-square.png"
    "assets/images/blog/custom-launch-arguments-twitter.png"
    "assets/images/blog/decky-advar.jpg"
    "assets/images/blog/itch-feedback-hero.jpg"
    "assets/images/blog/protonmenu.jpg"
    "assets/images/gogext/jstabs.webp"
    "assets/images/JSAvatar-44.webp"
    "assets/images/jspro/install2.0/epic.webp"
    "assets/images/jspro/install2.0/gog.webp"
    "assets/images/website_image.webp"
)

ACTUALLY_UNUSED=()
USED_IN_DRAFTS=()

echo ""
echo "📝 Checking each image..."

for img in "${POTENTIALLY_UNUSED[@]}"; do
    filename=$(basename "$img")

    # Check in all content (including drafts)
    if grep -r "$filename" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
        echo "✅ USED: $img (found in content)"
        USED_IN_DRAFTS+=("$img")
    else
        # Also check the relative path
        rel_path="${img#assets/}"
        if grep -r "$rel_path" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
            echo "✅ USED: $img (found in content)"
            USED_IN_DRAFTS+=("$img")
        else
            echo "❌ UNUSED: $img"
            ACTUALLY_UNUSED+=("$img")
        fi
    fi
done

echo ""
echo "📊 Summary:"
echo "Images that ARE used (including in drafts): ${#USED_IN_DRAFTS[@]}"
echo "Images that are ACTUALLY unused: ${#ACTUALLY_UNUSED[@]}"

echo ""
echo "🗑️ Safe to remove (actually unused):"
for img in "${ACTUALLY_UNUSED[@]}"; do
    echo "  - $img"
done

echo ""
echo "✅ Keep (used in drafts or content):"
for img in "${USED_IN_DRAFTS[@]}"; do
    echo "  - $img"
done

# Calculate sizes
TOTAL_UNUSED_SIZE=0
for img in "${ACTUALLY_UNUSED[@]}"; do
    if [ -f "$img" ]; then
        size=$(stat -c%s "$img" 2>/dev/null || stat -f%z "$img" 2>/dev/null || echo "0")
        TOTAL_UNUSED_SIZE=$((TOTAL_UNUSED_SIZE + size))
    fi
done

if [ $TOTAL_UNUSED_SIZE -gt 1048576 ]; then
    size_mb=$((TOTAL_UNUSED_SIZE / 1048576))
    echo ""
    echo "💾 Total space that can be saved: ${size_mb}MB"
elif [ $TOTAL_UNUSED_SIZE -gt 1024 ]; then
    size_kb=$((TOTAL_UNUSED_SIZE / 1024))
    echo ""
    echo "💾 Total space that can be saved: ${size_kb}KB"
fi