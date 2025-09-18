#!/bin/bash

# Comprehensive Image Usage Audit
# Checks ALL images in assets/images against ALL content

echo "🔍 Comprehensive Image Usage Audit"
echo "=================================="

# Find ALL images
ALL_IMAGES=$(find assets/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" \) | grep -v "/backups/" | sort)
TOTAL_IMAGES=$(echo "$ALL_IMAGES" | wc -l)

echo "Found $TOTAL_IMAGES total images"

# Build site first
echo "Building site for analysis..."
bundle exec jekyll build > /dev/null 2>&1

UNUSED_IMAGES=()
USED_IMAGES=()
TOTAL_UNUSED_SIZE=0

echo ""
echo "Checking each image comprehensively..."

while IFS= read -r img; do
    if [ -n "$img" ]; then
        filename=$(basename "$img")
        rel_path="${img#assets/}"

        # Check in ALL possible locations
        FOUND=false

        # Check filename in all content
        if grep -r "$filename" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml _config.yml 2>/dev/null | grep -v "backups" > /dev/null; then
            FOUND=true
        fi

        # Check relative path
        if [ "$FOUND" = false ]; then
            if grep -r "$rel_path" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml _config.yml 2>/dev/null | grep -v "backups" > /dev/null; then
                FOUND=true
            fi
        fi

        # Check full path
        if [ "$FOUND" = false ]; then
            if grep -r "$img" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml _config.yml 2>/dev/null | grep -v "backups" > /dev/null; then
                FOUND=true
            fi
        fi

        # Check filename without extension (for different formats)
        if [ "$FOUND" = false ]; then
            base_filename="${filename%.*}"
            if grep -r "$base_filename" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml _config.yml 2>/dev/null | grep -v "backups" > /dev/null; then
                FOUND=true
            fi
        fi

        if [ "$FOUND" = true ]; then
            echo "✅ USED: $img"
            USED_IMAGES+=("$img")
        else
            echo "❌ UNUSED: $img"
            UNUSED_IMAGES+=("$img")

            # Calculate size
            if [ -f "$img" ]; then
                size=$(stat -c%s "$img" 2>/dev/null || stat -f%z "$img" 2>/dev/null || echo "0")
                TOTAL_UNUSED_SIZE=$((TOTAL_UNUSED_SIZE + size))
            fi
        fi
    fi
done <<< "$ALL_IMAGES"

echo ""
echo "📊 COMPREHENSIVE RESULTS:"
echo "Total images found: $TOTAL_IMAGES"
echo "Used images: ${#USED_IMAGES[@]}"
echo "Unused images: ${#UNUSED_IMAGES[@]}"

if [ ${#UNUSED_IMAGES[@]} -gt 0 ]; then
    echo ""
    echo "🗑️ UNUSED IMAGES (safe to remove):"
    for img in "${UNUSED_IMAGES[@]}"; do
        if [ -f "$img" ]; then
            size=$(stat -c%s "$img" 2>/dev/null || stat -f%z "$img" 2>/dev/null || echo "0")
            size_kb=$((size / 1024))
            echo "  - $img (${size_kb}KB)"
        fi
    done

    # Calculate total savings
    if [ $TOTAL_UNUSED_SIZE -gt 1048576 ]; then
        size_mb=$((TOTAL_UNUSED_SIZE / 1048576))
        echo ""
        echo "💾 Total space that can be saved: ${size_mb}MB"
    elif [ $TOTAL_UNUSED_SIZE -gt 1024 ]; then
        size_kb=$((TOTAL_UNUSED_SIZE / 1024))
        echo ""
        echo "💾 Total space that can be saved: ${size_kb}KB"
    fi

    # Create removal script
    echo ""
    echo "📝 Creating removal script..."
    cat > remove-unused-images.sh << 'EOL'
#!/bin/bash
# Auto-generated script to remove unused images
# Review this list before running!

echo "Moving unused images to backup..."
mkdir -p assets/images/backups/unused

EOL

    for img in "${UNUSED_IMAGES[@]}"; do
        echo "mv \"$img\" assets/images/backups/unused/" >> remove-unused-images.sh
    done

    echo 'echo "Unused images moved to backup"' >> remove-unused-images.sh
    chmod +x remove-unused-images.sh

    echo "✅ Created remove-unused-images.sh script"
    echo "   Review the list above, then run: ./remove-unused-images.sh"
else
    echo ""
    echo "✅ No unused images found!"
fi