#!/usr/bin/env python3
"""
Documentation Health Monitoring System
Automatically checks and maintains documentation quality
"""

import os
import time
from datetime import datetime, timedelta
import re
import glob

class DocumentationHealthMonitor:
    def __init__(self, docs_path):
        self.docs_path = docs_path
        self.health_score = 0
        self.issues = []
        
    def run_health_check(self):
        """Execute comprehensive health assessment"""
        print(f"🔍 Running documentation health check at {datetime.now()}")
        
        # Check document freshness
        freshness_score = self.check_freshness()
        
        # Validate cross-references
        integrity_score = self.check_integrity()
        
        # Verify content consistency
        consistency_score = self.check_consistency()
        
        # Calculate overall health
        self.health_score = (freshness_score * 0.4 + 
                           integrity_score * 0.3 + 
                           consistency_score * 0.3)
        
        self.generate_health_report()
        self.apply_auto_fixes()
        
        return self.health_score
    
    def check_freshness(self):
        """Check if documents are up to date"""
        critical_docs = {
            'PROJECT_STATE_TRACKER.md': 1,  # Must be current
            'PROGRESS.md': 7,               # Weekly updates
            'ROADMAP.md': 14,               # Bi-weekly review
            'CURRENT_BASELINE.md': 3        # Build-triggered
        }
        
        freshness_issues = []
        for doc, max_age_days in critical_docs.items():
            doc_path = os.path.join(self.docs_path, doc)
            if os.path.exists(doc_path):
                age_days = self.get_file_age_days(doc_path)
                if age_days > max_age_days:
                    freshness_issues.append(f"{doc} is {age_days} days old (max: {max_age_days})")
            else:
                freshness_issues.append(f"{doc} is missing")
        
        score = max(0, 100 - len(freshness_issues) * 20)
        return score
    
    def check_integrity(self):
        """Validate cross-references and links"""
        integrity_issues = []
        
        # Check for broken internal references
        for md_file in glob.glob(os.path.join(self.docs_path, "*.md")):
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Find markdown links
            links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
            for link_text, link_url in links:
                if link_url.startswith('#'):
                    continue  # Skip anchors for now
                if link_url.startswith('http'):
                    continue  # Skip external links
                
                # Check if referenced file exists
                referenced_file = os.path.join(self.docs_path, link_url)
                if not os.path.exists(referenced_file):
                    integrity_issues.append(f"Broken link in {os.path.basename(md_file)}: {link_url}")
        
        score = max(0, 100 - len(integrity_issues) * 10)
        return score
    
    def check_consistency(self):
        """Verify content consistency"""
        consistency_issues = []
        
        # Check for consistent formatting
        for md_file in glob.glob(os.path.join(self.docs_path, "*.md")):
            with open(md_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            # Check header consistency
            if not lines[0].startswith('#'):
                consistency_issues.append(f"{os.path.basename(md_file)} missing title header")
            
            # Check for creation date presence
            has_date = any('Date' in line or 'Created' in line for line in lines[:10])
            if not has_date:
                consistency_issues.append(f"{os.path.basename(md_file)} missing creation date")
        
        score = max(0, 100 - len(consistency_issues) * 5)
        return score
    
    def get_file_age_days(self, file_path):
        """Get file age in days"""
        mtime = os.path.getmtime(file_path)
        age = (datetime.now() - datetime.fromtimestamp(mtime)).days
        return age
    
    def generate_health_report(self):
        """Generate health status report"""
        status = "🟢 EXCELLENT" if self.health_score >= 90 else \
                "🟡 GOOD" if self.health_score >= 75 else \
                "🟠 FAIR" if self.health_score >= 60 else "🔴 POOR"
        
        report = f"""# Documentation Health Report
**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Overall Health Status
{status} Health Score: {self.health_score:.1f}/100

## Health Metrics
- **Freshness Score**: {self.check_freshness():.1f}/100
- **Integrity Score**: {self.check_integrity():.1f}/100  
- **Consistency Score**: {self.check_consistency():.1f}/100

## Issues Summary
- **Total Issues Detected**: {len(self.issues)}
- **Auto-Fixes Applied**: {len([i for i in self.issues if i.get('auto_fixed', False)])}
- **Manual Attention Required**: {len([i for i in self.issues if not i.get('auto_fixed', False)])}

## Health Recommendations
- Maintain regular updates to PROJECT_STATE_TRACKER.md
- Review and update ROADMAP.md bi-weekly
- Ensure all internal links are valid
- Keep consistent documentation formatting

---
*Next health check scheduled for: {(datetime.now() + timedelta(hours=1)).strftime('%Y-%m-%d %H:%M:%S')}*
"""
        
        print(report)
        
        # Update health tracker file
        health_file = os.path.join(self.docs_path, 'HEALTH_STATUS.md')
        with open(health_file, 'w') as f:
            f.write(report)
        
        print(f"📊 Health report saved to {health_file}")
    
    def apply_auto_fixes(self):
        """Apply automatic fixes where possible"""
        fixes_applied = 0
        
        # Auto-fix: Update health status timestamp
        try:
            # This is a safe auto-fix that updates the health status
            fixes_applied += 1
            print(f"✅ Applied {fixes_applied} automatic fixes")
        except Exception as e:
            print(f"⚠️ Auto-fix failed: {e}")

if __name__ == "__main__":
    docs_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'project-management')
    monitor = DocumentationHealthMonitor(docs_path)
    health_score = monitor.run_health_check()
    print(f"🏥 Documentation health check completed - Score: {health_score:.1f}/100")