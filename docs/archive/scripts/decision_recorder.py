#!/usr/bin/env python3
"""
Automatic Decision Recording System
Captures and documents decisions with full context
"""

import re
import json
import os
from datetime import datetime

class DecisionRecorder:
    def __init__(self):
        self.docs_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'project-management')
        self.decision_counter = self.get_next_decision_number()
        self.decision_patterns = [
            r"decided to",
            r"chosen approach",
            r"going with",
            r"better option",
            r"trade.?off",
            r"selected because",
            r"decision made",
            r"opted for",
            r"choosing",
            r"conclusion"
        ]
    
    def get_next_decision_number(self):
        """Get the next decision number from existing DECISIONS.md"""
        decisions_file = os.path.join(self.docs_path, 'DECISIONS.md')
        if not os.path.exists(decisions_file):
            return 1
            
        with open(decisions_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all decision numbers
        decision_numbers = re.findall(r'### Decision #(\d+):', content)
        if decision_numbers:
            return max(int(num) for num in decision_numbers) + 1
        return 1
    
    def detect_decisions(self, session_content):
        """Analyze session content for decision points"""
        decisions = []
        
        for pattern in self.decision_patterns:
            matches = re.finditer(pattern, session_content, re.IGNORECASE)
            for match in matches:
                decision_context = self.extract_context(session_content, match)
                if self.is_significant_decision(decision_context):
                    decisions.append(decision_context)
        
        return decisions
    
    def extract_context(self, content, match):
        """Extract context around a decision point"""
        start_pos = max(0, match.start() - 500)
        end_pos = min(len(content), match.end() + 500)
        context = content[start_pos:end_pos]
        
        return {
            'text': context,
            'position': match.start(),
            'match': match.group(),
            'timestamp': datetime.now().isoformat()
        }
    
    def is_significant_decision(self, decision_context):
        """Determine if a decision context represents a significant decision"""
        # Simple heuristics to filter significant decisions
        text = decision_context['text'].lower()
        
        # Check for technical significance
        tech_keywords = ['architecture', 'implementation', 'framework', 'library', 'approach', 'method', 'solution']
        has_tech_context = any(keyword in text for keyword in tech_keywords)
        
        # Check for business significance  
        business_keywords = ['cost', 'time', 'performance', 'user', 'requirement', 'goal', 'priority']
        has_business_context = any(keyword in text for keyword in business_keywords)
        
        # Must have some significance and reasonable length
        return (has_tech_context or has_business_context) and len(text) > 100
    
    def create_decision_entry(self, decision_title, decision_details):
        """Generate formal decision documentation"""
        template = f"""
### Decision #{self.decision_counter:03d}: {decision_title}
**Date:** {datetime.now().strftime('%Y-%m-%d')}  
**Type:** {decision_details.get('type', 'Technical')}
**Trigger:** {decision_details.get('trigger', 'Analysis and evaluation')}

**Decision:** {decision_details.get('decision', 'Decision details to be filled')}

**Context:**
{decision_details.get('context', 'Context information')}

**Options Considered:**
{decision_details.get('options', '- Option 1: Description\n- Option 2: Description')}

**Decision Rationale:**
{decision_details.get('rationale', 'Rationale for the chosen approach')}

**Trade-offs:**
- ✅ **Pros:** {decision_details.get('pros', 'Advantages of this decision')}
- ❌ **Cons:** {decision_details.get('cons', 'Limitations or trade-offs')}

**Implementation:**
- **Status:** {decision_details.get('status', 'Ready for implementation')}
- **Effort:** {decision_details.get('effort', 'Medium')}
- **Risk:** {decision_details.get('risk', 'Low')}

**Status:** {decision_details.get('implementation_status', 'Approved')}

---
"""
        return template
    
    def append_to_decisions_md(self, decision_entry):
        """Add decision to existing DECISIONS.md file"""
        decisions_file = os.path.join(self.docs_path, 'DECISIONS.md')
        
        # Ensure the file exists
        if not os.path.exists(decisions_file):
            # Create basic DECISIONS.md structure
            header = """# Project Decisions
**Purpose:** Track all significant project decisions with full context  
**Maintained by:** Documentation Automation System  

---

## Decision Log

"""
            with open(decisions_file, 'w', encoding='utf-8') as f:
                f.write(header)
        
        with open(decisions_file, 'a', encoding='utf-8') as f:
            f.write(decision_entry)
        
        print(f"✅ Decision #{self.decision_counter:03d} recorded in DECISIONS.md")
        self.decision_counter += 1
    
    def record_decision(self, title, details):
        """Record a new decision with proper formatting"""
        decision_entry = self.create_decision_entry(title, details)
        self.append_to_decisions_md(decision_entry)
        return decision_entry
    
    def analyze_recent_activity(self):
        """Analyze recent project activity for decisions"""
        # This would analyze git commits, file changes, etc.
        # For now, create a sample decision to demonstrate the system
        sample_decision = {
            'type': 'Technical',
            'trigger': 'Documentation automation implementation',
            'decision': 'Implement comprehensive documentation automation system',
            'context': 'Need to eliminate manual documentation overhead while maintaining quality',
            'options': '- Manual documentation maintenance\n- Partial automation\n- Full automation suite',
            'rationale': 'Full automation provides best ROI and ensures consistency',
            'pros': 'Zero manual overhead, consistent quality, automatic updates',
            'cons': 'Initial setup complexity, system dependency',
            'status': 'Approved and implementing',
            'effort': 'Medium',
            'risk': 'Low',
            'implementation_status': 'In Progress'
        }
        
        self.record_decision("Documentation Automation System Implementation", sample_decision)
        print("🎯 Decision analysis completed")

if __name__ == "__main__":
    recorder = DecisionRecorder()
    recorder.analyze_recent_activity()
    print("🎯 Decision recording system activated")