#!/bin/bash

# Image Optimization Script for Junk Store Website
# Finds unused images, creates backups, and optimizes oversized files

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🖼️  Junk Store Image Optimizer${NC}"
echo "================================"

# Create backup directory
BACKUP_DIR="assets/images/backups"
mkdir -p "$BACKUP_DIR"

# Function to get file size in bytes
get_file_size() {
    if [ -f "$1" ]; then
        stat -c%s "$1" 2>/dev/null || stat -f%z "$1" 2>/dev/null || echo "0"
    else
        echo "0"
    fi
}

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

echo -e "\n${YELLOW}🔍 Step 1: Finding all images...${NC}"

# Find all images in assets
ALL_IMAGES=$(find assets/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" \) | grep -v "/backups/" | sort)
TOTAL_IMAGES=$(echo "$ALL_IMAGES" | wc -l)

echo "Found $TOTAL_IMAGES images in assets/images/"

echo -e "\n${YELLOW}🔍 Step 2: Analyzing image usage...${NC}"

# Build the site first to have current _site
echo "Building site to check usage..."
bundle exec jekyll build > /dev/null 2>&1

USED_IMAGES=""
UNUSED_IMAGES=""
USED_COUNT=0
UNUSED_COUNT=0

echo "Checking which images are actually used..."

while IFS= read -r img; do
    # Get just the filename and path relative to assets/
    rel_path="${img#assets/}"
    filename=$(basename "$img")

    # Check if image is referenced anywhere in source files or built site
    if grep -r "$filename" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
        USED_IMAGES="$USED_IMAGES$img\n"
        USED_COUNT=$((USED_COUNT + 1))
    else
        # Also check the relative path
        if grep -r "$rel_path" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
            USED_IMAGES="$USED_IMAGES$img\n"
            USED_COUNT=$((USED_COUNT + 1))
        else
            UNUSED_IMAGES="$UNUSED_IMAGES$img\n"
            UNUSED_COUNT=$((UNUSED_COUNT + 1))
            echo -e "  ${RED}❌ Unused: $img${NC}"
        fi
    fi
done <<< "$ALL_IMAGES"

echo -e "${GREEN}✅ Used images: $USED_COUNT${NC}"
echo -e "${YELLOW}⚠️  Unused images: $UNUSED_COUNT${NC}"

echo -e "\n${YELLOW}🔍 Step 3: Analyzing oversized images...${NC}"

OVERSIZED_IMAGES=""
OVERSIZED_COUNT=0
TOTAL_OVERSIZED_SIZE=0

while IFS= read -r img; do
    if [ -n "$img" ]; then
        size=$(get_file_size "$img")
        size_kb=$((size / 1024))

        if [ $size_kb -gt 500 ]; then
            OVERSIZED_IMAGES="$OVERSIZED_IMAGES$img\n"
            OVERSIZED_COUNT=$((OVERSIZED_COUNT + 1))
            TOTAL_OVERSIZED_SIZE=$((TOTAL_OVERSIZED_SIZE + size))
            echo -e "  ${RED}📏 Large: $img ($(bytes_to_human $size))${NC}"
        fi
    fi
done <<< "$(echo -e "$USED_IMAGES")"

echo -e "${YELLOW}📊 Found $OVERSIZED_COUNT oversized images totaling $(bytes_to_human $TOTAL_OVERSIZED_SIZE)${NC}"

# Summary and recommendations
echo -e "\n${BLUE}📋 Summary:${NC}"
echo "Total images: $TOTAL_IMAGES"
echo "Used images: $USED_COUNT"
echo "Unused images: $UNUSED_COUNT"
echo "Oversized used images: $OVERSIZED_COUNT"

if [ $UNUSED_COUNT -gt 0 ]; then
    echo -e "\n${YELLOW}💾 Would you like to remove unused images? They will be moved to $BACKUP_DIR${NC}"
fi

if [ $OVERSIZED_COUNT -gt 0 ]; then
    echo -e "\n${YELLOW}🔧 Optimization opportunities:${NC}"
    echo "- Resize oversized images to reduce file size"
    echo "- Convert large PNGs to WebP format"
    echo "- Optimize GIFs (consider converting to MP4)"
    echo "- Use responsive image sizes"
fi

# Save detailed report
cat > "image-analysis-report.txt" << EOF
Image Analysis Report - $(date)
================================

Total Images: $TOTAL_IMAGES
Used Images: $USED_COUNT
Unused Images: $UNUSED_COUNT
Oversized Images: $OVERSIZED_COUNT

UNUSED IMAGES:
$(echo -e "$UNUSED_IMAGES" | grep -v "^$" || echo "None")

OVERSIZED IMAGES (>500KB):
$(echo -e "$OVERSIZED_IMAGES" | grep -v "^$" || echo "None")

EOF

echo -e "\n${GREEN}📄 Detailed report saved to: image-analysis-report.txt${NC}"

# Interactive options
echo -e "\n${BLUE}🛠️  Next Steps:${NC}"
echo "1. Remove unused images (moves to backup)"
echo "2. Optimize oversized images"
echo "3. Analyze and convert to optimal formats"
echo "4. View detailed analysis report"
echo ""
echo "Run with options:"
echo "  ./image-optimizer.sh --remove-unused    # Remove unused images"
echo "  ./image-optimizer.sh --optimize          # Optimize oversized images"
echo "  ./image-optimizer.sh --backup-large      # Backup oversized images"
echo "  ./image-optimizer.sh --format-analysis  # Analyze optimal formats"
echo "  ./image-optimizer.sh --convert-webp     # Convert to WebP where beneficial"

# Handle command line options
if [ "$1" = "--remove-unused" ]; then
    echo -e "\n${YELLOW}🗑️  Removing unused images...${NC}"

    if [ $UNUSED_COUNT -gt 0 ]; then
        echo -e "$UNUSED_IMAGES" | while IFS= read -r img; do
            if [ -n "$img" ] && [ -f "$img" ]; then
                # Create backup directory structure
                backup_path="$BACKUP_DIR/$(dirname "${img#assets/images/}")"
                mkdir -p "$backup_path"

                # Move to backup
                mv "$img" "$backup_path/"
                echo -e "  ${GREEN}✅ Moved: $img${NC}"
            fi
        done
        echo -e "${GREEN}🎉 Moved $UNUSED_COUNT unused images to backup${NC}"
    else
        echo -e "${GREEN}✅ No unused images to remove${NC}"
    fi

elif [ "$1" = "--backup-large" ]; then
    echo -e "\n${YELLOW}💾 Backing up oversized images...${NC}"

    if [ $OVERSIZED_COUNT -gt 0 ]; then
        echo -e "$OVERSIZED_IMAGES" | while IFS= read -r img; do
            if [ -n "$img" ] && [ -f "$img" ]; then
                # Create backup directory structure
                backup_path="$BACKUP_DIR/$(dirname "${img#assets/images/}")"
                mkdir -p "$backup_path"

                # Copy to backup (don't move yet, we'll optimize in place)
                cp "$img" "$backup_path/"
                echo -e "  ${GREEN}✅ Backed up: $img${NC}"
            fi
        done
        echo -e "${GREEN}🎉 Backed up $OVERSIZED_COUNT oversized images${NC}"
    else
        echo -e "${GREEN}✅ No oversized images to backup${NC}"
    fi

elif [ "$1" = "--optimize" ]; then
    echo -e "\n${YELLOW}🔧 Optimizing oversized images...${NC}"
    echo "This requires ImageMagick. Checking availability..."

    if command -v magick > /dev/null 2>&1 || command -v convert > /dev/null 2>&1; then
        echo -e "${GREEN}✅ ImageMagick found${NC}"

        # Use 'magick' if available, fallback to 'convert'
        if command -v magick > /dev/null 2>&1; then
            MAGICK_CMD="magick"
        else
            MAGICK_CMD="convert"
        fi

        echo -e "$OVERSIZED_IMAGES" | while IFS= read -r img; do
            if [ -n "$img" ] && [ -f "$img" ]; then
                original_size=$(get_file_size "$img")
                echo -e "\n  ${BLUE}🔧 Optimizing: $img ($(bytes_to_human $original_size))${NC}"

                # Different optimization strategies based on file type
                case "$img" in
                    *.png)
                        # For PNGs: reduce quality and resize if very large
                        $MAGICK_CMD "$img" -quality 80 -resize '1600x1600>' -strip "$img.tmp"
                        ;;
                    *.jpg|*.jpeg)
                        # For JPEGs: optimize quality and resize
                        $MAGICK_CMD "$img" -quality 75 -resize '1600x1600>' -strip "$img.tmp"
                        ;;
                    *.gif)
                        # For GIFs: optimize colors and resize (be more conservative)
                        $MAGICK_CMD "$img" -coalesce -resize '1400x1400>' -colors 256 -strip "$img.tmp"
                        ;;
                    *)
                        # Skip unknown formats
                        echo -e "    ${YELLOW}⚠️  Skipping unknown format${NC}"
                        continue
                        ;;
                esac

                if [ -f "$img.tmp" ]; then
                    new_size=$(get_file_size "$img.tmp")
                    savings=$((original_size - new_size))

                    if [ $new_size -lt $original_size ]; then
                        mv "$img.tmp" "$img"
                        echo -e "    ${GREEN}✅ Saved $(bytes_to_human $savings) ($(((savings * 100) / original_size))% reduction)${NC}"
                    else
                        rm "$img.tmp"
                        echo -e "    ${YELLOW}⚠️  No improvement, keeping original${NC}"
                    fi
                else
                    echo -e "    ${RED}❌ Optimization failed${NC}"
                fi
            fi
        done

        echo -e "\n${GREEN}🎉 Image optimization complete!${NC}"
        echo -e "${BLUE}💡 Run ./performance-monitor.sh to see total savings${NC}"

    else
        echo -e "${RED}❌ ImageMagick not found${NC}"
        echo "Install with: sudo apt install imagemagick (Ubuntu/Debian)"
        echo "Or: brew install imagemagick (macOS)"
    fi

elif [ "$1" = "--format-analysis" ]; then
    echo -e "\n${YELLOW}🔍 Analyzing optimal image formats...${NC}"

    # Build site first
    bundle exec jekyll build > /dev/null 2>&1

    USED_IMAGES=""
    while IFS= read -r img; do
        filename=$(basename "$img")
        rel_path="${img#assets/}"

        # Check if image is used
        if grep -r "$filename" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
            USED_IMAGES="$USED_IMAGES$img\n"
        elif grep -r "$rel_path" _site/ _pages/ _posts/ _includes/ _layouts/ _data/ _drafts/ *.md *.yml 2>/dev/null | grep -v "backups" > /dev/null; then
            USED_IMAGES="$USED_IMAGES$img\n"
        fi
    done <<< "$ALL_IMAGES"

    echo -e "${BLUE}📊 Format Analysis Results:${NC}"
    echo ""

    SHOULD_BE_WEBP=()
    SHOULD_BE_JPG=()
    SHOULD_BE_PNG=()
    ALREADY_OPTIMAL=()

    while IFS= read -r img; do
        if [ -n "$img" ] && [ -f "$img" ]; then
            size=$(get_file_size "$img")
            size_kb=$((size / 1024))

            case "$img" in
                *.webp)
                    echo -e "  ${GREEN}✅ $img - Already WebP ($(bytes_to_human $size))${NC}"
                    ALREADY_OPTIMAL+=("$img")
                    ;;
                *.png)
                    # Check if there's a WebP version
                    webp_version="${img%.png}.webp"
                    if [ -f "$webp_version" ]; then
                        webp_size=$(get_file_size "$webp_version")
                        if [ $webp_size -lt $size ]; then
                            savings=$((size - webp_size))
                            echo -e "  ${YELLOW}🔄 $img - Use existing WebP instead (save $(bytes_to_human $savings))${NC}"
                        else
                            echo -e "  ${GREEN}✅ $img - PNG is smaller than WebP${NC}"
                            ALREADY_OPTIMAL+=("$img")
                        fi
                    else
                        # Large PNGs should be WebP
                        if [ $size_kb -gt 200 ]; then
                            echo -e "  ${BLUE}🔄 $img - Convert to WebP ($(bytes_to_human $size))${NC}"
                            SHOULD_BE_WEBP+=("$img")
                        else
                            echo -e "  ${GREEN}✅ $img - Small PNG is fine ($(bytes_to_human $size))${NC}"
                            ALREADY_OPTIMAL+=("$img")
                        fi
                    fi
                    ;;
                *.jpg|*.jpeg)
                    # Check if there's a WebP version
                    webp_version1="${img%.jpg}.webp"
                    webp_version2="${img%.jpeg}.webp"
                    webp_version="$webp_version1"
                    [ -f "$webp_version2" ] && webp_version="$webp_version2"

                    if [ -f "$webp_version" ]; then
                        webp_size=$(get_file_size "$webp_version")
                        if [ $webp_size -lt $size ]; then
                            savings=$((size - webp_size))
                            echo -e "  ${YELLOW}🔄 $img - Use existing WebP instead (save $(bytes_to_human $savings))${NC}"
                        else
                            echo -e "  ${GREEN}✅ $img - JPG is smaller than WebP${NC}"
                            ALREADY_OPTIMAL+=("$img")
                        fi
                    else
                        # Large JPGs should be WebP
                        if [ $size_kb -gt 300 ]; then
                            echo -e "  ${BLUE}🔄 $img - Convert to WebP ($(bytes_to_human $size))${NC}"
                            SHOULD_BE_WEBP+=("$img")
                        else
                            echo -e "  ${GREEN}✅ $img - JPG size is fine ($(bytes_to_human $size))${NC}"
                            ALREADY_OPTIMAL+=("$img")
                        fi
                    fi
                    ;;
                *.gif)
                    if [ $size_kb -gt 1000 ]; then
                        echo -e "  ${RED}⚠️  $img - Large GIF, consider MP4 ($(bytes_to_human $size))${NC}"
                    else
                        echo -e "  ${GREEN}✅ $img - GIF is appropriate ($(bytes_to_human $size))${NC}"
                        ALREADY_OPTIMAL+=("$img")
                    fi
                    ;;
            esac
        fi
    done <<< "$(echo -e "$USED_IMAGES")"

    echo ""
    echo -e "${BLUE}📋 Summary:${NC}"
    echo "Should convert to WebP: ${#SHOULD_BE_WEBP[@]} images"
    echo "Already optimal format: ${#ALREADY_OPTIMAL[@]} images"

elif [ "$1" = "--convert-webp" ]; then
    echo -e "\n${YELLOW}🔄 Converting images to WebP...${NC}"

    if command -v magick > /dev/null 2>&1 || command -v convert > /dev/null 2>&1; then
        echo -e "${GREEN}✅ ImageMagick found${NC}"

        # Use 'magick' if available, fallback to 'convert'
        if command -v magick > /dev/null 2>&1; then
            MAGICK_CMD="magick"
        else
            MAGICK_CMD="convert"
        fi

        # Find large images that should be converted to WebP
        find assets/images -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | while read img; do
            if [ -f "$img" ]; then
                size=$(get_file_size "$img")
                size_kb=$((size / 1024))

                # Convert large images to WebP
                if [ $size_kb -gt 200 ]; then
                    webp_file="${img%.*}.webp"

                    # Only convert if WebP doesn't exist or is older
                    if [ ! -f "$webp_file" ] || [ "$img" -nt "$webp_file" ]; then
                        echo -e "  ${BLUE}🔄 Converting: $img${NC}"

                        case "$img" in
                            *.png)
                                $MAGICK_CMD "$img" -quality 90 "$webp_file"
                                ;;
                            *.jpg|*.jpeg)
                                $MAGICK_CMD "$img" -quality 85 "$webp_file"
                                ;;
                        esac

                        if [ -f "$webp_file" ]; then
                            original_size=$(get_file_size "$img")
                            webp_size=$(get_file_size "$webp_file")

                            if [ $webp_size -lt $original_size ]; then
                                savings=$((original_size - webp_size))
                                echo -e "    ${GREEN}✅ Saved $(bytes_to_human $savings) ($(((savings * 100) / original_size))% reduction)${NC}"
                            else
                                rm "$webp_file"
                                echo -e "    ${YELLOW}⚠️  WebP was larger, keeping original${NC}"
                            fi
                        fi
                    else
                        echo -e "  ${GREEN}✅ WebP already exists: $webp_file${NC}"
                    fi
                fi
            fi
        done

        echo -e "\n${GREEN}🎉 WebP conversion complete!${NC}"
        echo -e "${BLUE}💡 Update your HTML/Markdown to use WebP files for better performance${NC}"
    else
        echo -e "${RED}❌ ImageMagick not found${NC}"
        echo "Install with: sudo apt install imagemagick (Ubuntu/Debian)"
        echo "Or: brew install imagemagick (macOS)"
    fi
fi

echo -e "\n${GREEN}🎉 Image analysis complete!${NC}"