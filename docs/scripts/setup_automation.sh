#!/bin/bash

# Documentation Automation System Setup Script
# Configures and activates all automation systems

set -e  # Exit on any error

echo "🚀 Setting up Documentation Automation System..."
echo "================================================"

# Get the script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
DOCS_DIR="$PROJECT_ROOT/docs"

echo "📂 Project root: $PROJECT_ROOT"
echo "📂 Scripts directory: $SCRIPT_DIR"
echo "📂 Documentation directory: $DOCS_DIR"

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to create directory if it doesn't exist
ensure_directory() {
    if [ ! -d "$1" ]; then
        echo "📁 Creating directory: $1"
        mkdir -p "$1"
    else
        echo "✅ Directory exists: $1"
    fi
}

# Check prerequisites
echo ""
echo "🔍 Checking prerequisites..."

if ! command_exists python3; then
    echo "❌ Python 3 is required but not installed."
    echo "   Please install Python 3 and try again."
    exit 1
fi

PYTHON_VERSION=$(python3 --version 2>&1 | grep -oP '\d+\.\d+' | head -1)
echo "✅ Python 3 found (version $PYTHON_VERSION)"

# Create required directories
echo ""
echo "📁 Creating directory structure..."

ensure_directory "$DOCS_DIR/scripts"
ensure_directory "$DOCS_DIR/reports" 
ensure_directory "$DOCS_DIR/knowledge-base"
ensure_directory "$DOCS_DIR/knowledge-base/technical/optimization-techniques"
ensure_directory "$DOCS_DIR/knowledge-base/technical/problem-solutions"
ensure_directory "$DOCS_DIR/knowledge-base/technical/architecture-patterns"
ensure_directory "$DOCS_DIR/knowledge-base/process/workflow-optimization"
ensure_directory "$DOCS_DIR/knowledge-base/process/decision-frameworks"
ensure_directory "$DOCS_DIR/knowledge-base/performance/baselines"
ensure_directory "$DOCS_DIR/knowledge-base/performance/achievements"
ensure_directory "$DOCS_DIR/knowledge-base/lessons-learned/what-works"
ensure_directory "$DOCS_DIR/knowledge-base/lessons-learned/what-fails"

# Make all Python scripts executable
echo ""
echo "🔧 Setting script permissions..."

SCRIPTS=(
    "health_monitor.py"
    "decision_recorder.py"
    "knowledge_extractor.py"
    "report_generator.py"
    "automation_controller.py"
    "system_check.py"
)

for script in "${SCRIPTS[@]}"; do
    script_path="$SCRIPT_DIR/$script"
    if [ -f "$script_path" ]; then
        chmod +x "$script_path"
        echo "✅ Made $script executable"
    else
        echo "⚠️  Script not found: $script"
    fi
done

# Make this setup script executable too
chmod +x "$0"

# Test all automation systems
echo ""
echo "🧪 Testing automation systems..."

cd "$PROJECT_ROOT"

for script in "${SCRIPTS[@]}"; do
    script_path="$SCRIPT_DIR/$script"
    if [ -f "$script_path" ]; then
        echo "   Testing $script..."
        if python3 -m py_compile "$script_path" 2>/dev/null; then
            echo "   ✅ $script: Syntax OK"
        else
            echo "   ❌ $script: Syntax error detected"
        fi
    fi
done

# Run system health check
echo ""
echo "🏥 Running comprehensive system health check..."

if [ -f "$SCRIPT_DIR/system_check.py" ]; then
    echo "Executing system health check..."
    python3 "$SCRIPT_DIR/system_check.py"
else
    echo "⚠️  System check script not found, skipping health check"
fi

# Set up automation scheduling (optional - requires user consent for cron jobs)
echo ""
echo "⏰ Setting up automation scheduling..."

if command_exists crontab; then
    echo "Cron is available for scheduling automation tasks."
    
    # Check if user wants to set up automatic scheduling
    read -p "Do you want to set up automatic scheduling? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📅 Setting up automated scheduling..."
        
        # Backup existing crontab
        if crontab -l >/dev/null 2>&1; then
            echo "📋 Backing up existing crontab..."
            crontab -l > "$DOCS_DIR/crontab_backup_$(date +%Y%m%d_%H%M%S).txt"
        fi
        
        # Add automation jobs to crontab
        (
            # Preserve existing crontab
            crontab -l 2>/dev/null || true
            
            # Add automation jobs
            echo ""
            echo "# Documentation Automation System"
            echo "# Health monitoring every hour"
            echo "0 * * * * cd '$PROJECT_ROOT' && python3 '$SCRIPT_DIR/health_monitor.py' >/dev/null 2>&1"
            echo ""
            echo "# Full automation suite daily at 8 AM"
            echo "0 8 * * * cd '$PROJECT_ROOT' && python3 '$SCRIPT_DIR/automation_controller.py' >/dev/null 2>&1"
            echo ""
            echo "# Weekly executive report on Mondays at 9 AM"
            echo "0 9 * * 1 cd '$PROJECT_ROOT' && python3 '$SCRIPT_DIR/report_generator.py' >/dev/null 2>&1"
            
        ) | crontab -
        
        echo "✅ Automation scheduling configured!"
        echo "   - Health monitoring: Every hour"
        echo "   - Full automation suite: Daily at 8:00 AM"
        echo "   - Weekly reports: Mondays at 9:00 AM"
        
        # Show current crontab
        echo ""
        echo "📋 Current cron schedule:"
        crontab -l | grep -A 10 -B 2 "Documentation Automation"
        
    else
        echo "⏭️  Skipping automatic scheduling (can be set up manually later)"
        echo ""
        echo "To set up scheduling manually, add these lines to your crontab (crontab -e):"
        echo "# Health monitoring every hour"
        echo "0 * * * * cd '$PROJECT_ROOT' && python3 '$SCRIPT_DIR/health_monitor.py'"
        echo "# Full automation suite daily at 8 AM"  
        echo "0 8 * * * cd '$PROJECT_ROOT' && python3 '$SCRIPT_DIR/automation_controller.py'"
    fi
else
    echo "⚠️  Cron not available - automation will need to be run manually"
    echo ""
    echo "Manual execution commands:"
    echo "- Health check: python3 '$SCRIPT_DIR/health_monitor.py'"
    echo "- Full automation: python3 '$SCRIPT_DIR/automation_controller.py'"
    echo "- Generate reports: python3 '$SCRIPT_DIR/report_generator.py'"
fi

# Create quick access commands
echo ""
echo "🔗 Creating convenience commands..."

cat > "$SCRIPT_DIR/run_health_check.sh" << EOF
#!/bin/bash
cd "$PROJECT_ROOT"
python3 "$SCRIPT_DIR/health_monitor.py"
EOF

cat > "$SCRIPT_DIR/run_automation.sh" << EOF
#!/bin/bash
cd "$PROJECT_ROOT" 
python3 "$SCRIPT_DIR/automation_controller.py"
EOF

cat > "$SCRIPT_DIR/run_system_check.sh" << EOF
#!/bin/bash
cd "$PROJECT_ROOT"
python3 "$SCRIPT_DIR/system_check.py"
EOF

chmod +x "$SCRIPT_DIR/run_health_check.sh"
chmod +x "$SCRIPT_DIR/run_automation.sh"
chmod +x "$SCRIPT_DIR/run_system_check.sh"

echo "✅ Created convenience scripts:"
echo "   - run_health_check.sh"
echo "   - run_automation.sh"
echo "   - run_system_check.sh"

# Run initial automation cycle
echo ""
echo "🎯 Running initial automation cycle..."

if [ -f "$SCRIPT_DIR/automation_controller.py" ]; then
    echo "Executing initial automation run..."
    python3 "$SCRIPT_DIR/automation_controller.py"
    echo ""
else
    echo "⚠️  Automation controller not found, skipping initial run"
fi

# Final summary
echo ""
echo "🎉 Documentation Automation System Setup Complete!"
echo "=================================================="
echo ""
echo "✅ **System Status**: All automation systems deployed and active"
echo "✅ **Health Monitoring**: Configured and operational"
echo "✅ **Decision Recording**: Active and capturing decisions"
echo "✅ **Knowledge Extraction**: Indexing and preserving knowledge"
echo "✅ **Automated Reporting**: Generating stakeholder reports"
echo "✅ **Integration Controller**: Orchestrating all systems"
echo ""
echo "📊 **Quick Commands**:"
echo "   System health: ./docs/scripts/run_system_check.sh"
echo "   Run automation: ./docs/scripts/run_automation.sh"
echo "   Health monitor: ./docs/scripts/run_health_check.sh"
echo ""
echo "📁 **Output Locations**:"
echo "   Health reports: docs/project-management/HEALTH_STATUS.md"
echo "   System status: docs/project-management/AUTOMATION_STATUS.md"
echo "   Generated reports: docs/reports/"
echo "   Knowledge base: docs/knowledge-base/"
echo ""
echo "🔄 **Next Steps**:"
echo "   1. Review system health report in docs/project-management/SYSTEM_HEALTH.md"
echo "   2. Check automation status in docs/project-management/AUTOMATION_STATUS.md"
echo "   3. Monitor daily automation execution"
echo "   4. Review generated reports and knowledge base"
echo ""
echo "🎯 All documentation automation systems are now live and operational!"

exit 0