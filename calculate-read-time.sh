#!/bin/bash

# Calculate read time for blog posts
# Usage: ./calculate-read-time.sh <path-to-blog-post.md>

if [ -z "$1" ]; then
    echo "Usage: ./calculate-read-time.sh <path-to-blog-post.md>"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Error: File not found: $1"
    exit 1
fi

# Extract content between front matter and style block
# Skip first --- to ---, then skip from <style> onwards
word_count=$(sed -n '/^---$/,/^---$/!p' "$1" | sed -n '/^<style>/q;p' | wc -w)

# Average reading speed: 225 words per minute
# Add 30 seconds buffer for images/scanning
reading_speed=225
buffer_seconds=30

# Calculate minutes
read_seconds=$((word_count * 60 / reading_speed + buffer_seconds))
read_minutes=$((read_seconds / 60))

# Round up if there are remaining seconds
if [ $((read_seconds % 60)) -gt 0 ]; then
    read_minutes=$((read_minutes + 1))
fi

# Minimum 1 minute
if [ $read_minutes -lt 1 ]; then
    read_minutes=1
fi

echo "Word count: $word_count words"
echo "Estimated read time: $read_minutes min read"
echo ""
echo "To update the post, use:"
echo "  read_time: \"$read_minutes min read\""
