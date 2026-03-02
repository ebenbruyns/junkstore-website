#!/bin/bash

# Junk Store Website - Lighthouse Performance Testing
# Runs Google Lighthouse to test Core Web Vitals
# Usage: ./scripts/test-lighthouse.sh [options]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Default settings
URL="http://localhost:4000"
MODE="mobile"
AUTO_SERVER=false
OUTPUT_DIR="lighthouse-reports"
OPEN_REPORT=false

# Help text
show_help() {
    echo "Lighthouse Performance Testing for Junk Store Website"
    echo ""
    echo "Usage: ./scripts/test-lighthouse.sh [options]"
    echo ""
    echo "Options:"
    echo "  --auto           Auto-start Jekyll server (will stop when done)"
    echo "  --desktop        Run desktop test (default: mobile)"
    echo "  --mobile         Run mobile test (default)"
    echo "  --both           Run both mobile and desktop tests"
    echo "  --url URL        Test specific URL (default: http://localhost:4000)"
    echo "  --page PATH      Test specific page (e.g., /features/)"
    echo "  --open           Open HTML report after testing"
    echo "  --help           Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./scripts/test-lighthouse.sh --auto                    # Quick mobile test"
    echo "  ./scripts/test-lighthouse.sh --auto --desktop          # Desktop test"
    echo "  ./scripts/test-lighthouse.sh --auto --both             # Both modes"
    echo "  ./scripts/test-lighthouse.sh --page /features/         # Test specific page"
    echo ""
    echo "Prerequisites:"
    echo "  npm install -g lighthouse"
    echo ""
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --auto)
            AUTO_SERVER=true
            shift
            ;;
        --desktop)
            MODE="desktop"
            shift
            ;;
        --mobile)
            MODE="mobile"
            shift
            ;;
        --both)
            MODE="both"
            shift
            ;;
        --url)
            URL="$2"
            shift 2
            ;;
        --page)
            URL="http://localhost:4000$2"
            shift 2
            ;;
        --open)
            OPEN_REPORT=true
            shift
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo -e "${RED}Error: Lighthouse CLI not installed${NC}"
    echo ""
    echo "Install with: npm install -g lighthouse"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Start Jekyll server if requested
JEKYLL_PID=""
if [ "$AUTO_SERVER" = true ]; then
    echo -e "${BLUE}Starting Jekyll server...${NC}"
    bundle exec jekyll serve --detach > /dev/null 2>&1
    JEKYLL_PID=$(pgrep -f "jekyll serve" | head -1)

    # Wait for server to be ready
    echo -n "Waiting for server"
    for i in {1..30}; do
        if curl -s http://localhost:4000 > /dev/null 2>&1; then
            echo -e " ${GREEN}Ready!${NC}"
            break
        fi
        echo -n "."
        sleep 1
    done

    if ! curl -s http://localhost:4000 > /dev/null 2>&1; then
        echo -e " ${RED}Failed to start server${NC}"
        exit 1
    fi
fi

# Function to run Lighthouse test
run_lighthouse() {
    local test_mode=$1
    local preset=""
    local label=""

    if [ "$test_mode" = "desktop" ]; then
        preset="--preset=desktop"
        label="Desktop"
    else
        preset=""
        label="Mobile"
    fi

    local timestamp=$(date +%Y%m%d-%H%M%S)
    local report_name="lighthouse-${test_mode}-${timestamp}"

    echo ""
    echo -e "${CYAN}======================================${NC}"
    echo -e "${CYAN}  Lighthouse ${label} Test${NC}"
    echo -e "${CYAN}  URL: ${URL}${NC}"
    echo -e "${CYAN}======================================${NC}"
    echo ""

    # Run Lighthouse
    lighthouse "$URL" \
        $preset \
        --output=html,json \
        --output-path="${OUTPUT_DIR}/${report_name}" \
        --chrome-flags="--headless --no-sandbox" \
        --quiet

    # Parse and display results
    if [ -f "${OUTPUT_DIR}/${report_name}.report.json" ]; then
        display_results "${OUTPUT_DIR}/${report_name}.report.json" "$label"

        if [ "$OPEN_REPORT" = true ] && [ -f "${OUTPUT_DIR}/${report_name}.report.html" ]; then
            xdg-open "${OUTPUT_DIR}/${report_name}.report.html" 2>/dev/null || \
            open "${OUTPUT_DIR}/${report_name}.report.html" 2>/dev/null || \
            echo "Report saved to: ${OUTPUT_DIR}/${report_name}.report.html"
        fi
    fi
}

# Function to display results with colors
display_results() {
    local json_file=$1
    local label=$2

    # Extract scores using grep and sed (avoiding jq dependency)
    local perf=$(grep -o '"performance":[0-9.]*' "$json_file" | head -1 | cut -d: -f2)
    local access=$(grep -o '"accessibility":[0-9.]*' "$json_file" | head -1 | cut -d: -f2)
    local best=$(grep -o '"best-practices":[0-9.]*' "$json_file" | head -1 | cut -d: -f2)
    local seo=$(grep -o '"seo":[0-9.]*' "$json_file" | head -1 | cut -d: -f2)

    # Convert to percentages
    perf=$(echo "$perf * 100" | bc 2>/dev/null | cut -d. -f1 || echo "??")
    access=$(echo "$access * 100" | bc 2>/dev/null | cut -d. -f1 || echo "??")
    best=$(echo "$best * 100" | bc 2>/dev/null | cut -d. -f1 || echo "??")
    seo=$(echo "$seo * 100" | bc 2>/dev/null | cut -d. -f1 || echo "??")

    echo -e "${BLUE}${label} Results:${NC}"
    echo ""
    print_score "Performance" "$perf"
    print_score "Accessibility" "$access"
    print_score "Best Practices" "$best"
    print_score "SEO" "$seo"
    echo ""
}

# Function to print score with color coding
print_score() {
    local name=$1
    local score=$2
    local color=$RED
    local emoji="🔴"

    if [ "$score" != "??" ]; then
        if [ "$score" -ge 90 ]; then
            color=$GREEN
            emoji="🟢"
        elif [ "$score" -ge 50 ]; then
            color=$YELLOW
            emoji="🟡"
        fi
    fi

    printf "  %s %-15s ${color}%3s${NC}\n" "$emoji" "$name:" "$score"
}

# Run tests based on mode
if [ "$MODE" = "both" ]; then
    run_lighthouse "mobile"
    run_lighthouse "desktop"
elif [ "$MODE" = "desktop" ]; then
    run_lighthouse "desktop"
else
    run_lighthouse "mobile"
fi

# Stop Jekyll server if we started it
if [ -n "$JEKYLL_PID" ]; then
    echo -e "${BLUE}Stopping Jekyll server...${NC}"
    pkill -f "jekyll serve" 2>/dev/null || true
fi

echo ""
echo -e "${GREEN}Reports saved to: ${OUTPUT_DIR}/${NC}"
echo ""
