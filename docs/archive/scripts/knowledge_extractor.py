#!/usr/bin/env python3
"""
Knowledge Extraction and Preservation Engine
Automatically captures and organizes project knowledge
"""

import os
import json
import re
import glob
from datetime import datetime

class KnowledgeExtractor:
    def __init__(self):
        self.project_root = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        self.knowledge_base_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'knowledge-base')
        self.docs_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'project-management')
        self.ensure_knowledge_structure()
    
    def ensure_knowledge_structure(self):
        """Create knowledge base directory structure"""
        dirs = [
            'technical/optimization-techniques',
            'technical/problem-solutions', 
            'technical/architecture-patterns',
            'process/workflow-optimization',
            'process/decision-frameworks',
            'performance/baselines',
            'performance/achievements',
            'lessons-learned/what-works',
            'lessons-learned/what-fails'
        ]
        
        for dir_path in dirs:
            full_path = os.path.join(self.knowledge_base_path, dir_path)
            os.makedirs(full_path, exist_ok=True)
    
    def extract_project_knowledge(self):
        """Extract knowledge from all project documentation"""
        print("🧠 Extracting knowledge from project documentation...")
        
        knowledge_items = []
        
        # Extract from existing documentation
        doc_knowledge = self.extract_from_documentation()
        knowledge_items.extend(doc_knowledge)
        
        # Extract performance insights
        performance_knowledge = self.extract_performance_insights()
        knowledge_items.extend(performance_knowledge)
        
        # Extract workflow patterns
        workflow_knowledge = self.extract_workflow_patterns()
        knowledge_items.extend(workflow_knowledge)
        
        # Save extracted knowledge
        for item in knowledge_items:
            self.save_knowledge_item(item)
        
        # Update knowledge index
        self.update_knowledge_index()
        
        print(f"✅ Extracted and preserved {len(knowledge_items)} knowledge items")
        return knowledge_items
    
    def extract_from_documentation(self):
        """Extract knowledge from existing project documents"""
        knowledge_items = []
        
        # Read key documents
        key_documents = [
            'PROGRESS.md',
            'CURRENT_BASELINE.md',
            'DECISIONS.md',
            'ROADMAP.md'
        ]
        
        for doc in key_documents:
            doc_path = os.path.join(self.docs_path, doc)
            if os.path.exists(doc_path):
                with open(doc_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Extract problem-solution patterns
                solutions = self.extract_solutions_from_content(content, doc)
                knowledge_items.extend(solutions)
        
        return knowledge_items
    
    def extract_solutions_from_content(self, content, source_doc):
        """Extract solution patterns from document content"""
        solutions = []
        
        # Look for solution patterns
        solution_patterns = [
            r'(?i)solved.*?by\s+(.*?)(?=\n|$)',
            r'(?i)fixed.*?using\s+(.*?)(?=\n|$)',
            r'(?i)resolved.*?through\s+(.*?)(?=\n|$)',
            r'(?i)achieved.*?via\s+(.*?)(?=\n|$)'
        ]
        
        for pattern in solution_patterns:
            matches = re.finditer(pattern, content)
            for match in matches:
                solution = {
                    'title': f"Solution from {source_doc}",
                    'description': match.group(1).strip(),
                    'source_document': source_doc,
                    'category': 'problem-solution',
                    'discovered_date': datetime.now().strftime('%Y-%m-%d'),
                    'confidence': 'medium'
                }
                solutions.append(solution)
        
        return solutions
    
    def extract_performance_insights(self):
        """Extract performance-related knowledge"""
        knowledge_items = []
        
        # Check for baseline document
        baseline_path = os.path.join(self.docs_path, 'CURRENT_BASELINE.md')
        if os.path.exists(baseline_path):
            with open(baseline_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract performance metrics
            metrics = re.findall(r'(\d+(?:\.\d+)?)\s*(MB|KB|ms|s|%)', content)
            if metrics:
                performance_item = {
                    'title': 'Current Performance Baseline',
                    'category': 'performance-baseline',
                    'metrics': metrics,
                    'source': 'CURRENT_BASELINE.md',
                    'date': datetime.now().strftime('%Y-%m-%d'),
                    'description': 'Key performance metrics extracted from baseline documentation'
                }
                knowledge_items.append(performance_item)
        
        return knowledge_items
    
    def extract_workflow_patterns(self):
        """Extract workflow and process patterns"""
        knowledge_items = []
        
        # Analyze project structure for workflow patterns
        workflow_item = {
            'title': 'Jekyll Website Project Structure',
            'category': 'architecture-pattern',
            'description': 'Standard Jekyll website project organization',
            'components': {
                '_pages': 'Page content and navigation',
                '_includes': 'Reusable template components',
                '_layouts': 'Page layout templates',
                '_data': 'Site data and configuration',
                'assets': 'Static assets (CSS, JS, images)',
                'docs': 'Project documentation'
            },
            'benefits': [
                'Clear separation of concerns',
                'Reusable components',
                'Maintainable structure'
            ],
            'date': datetime.now().strftime('%Y-%m-%d')
        }
        knowledge_items.append(workflow_item)
        
        return knowledge_items
    
    def save_knowledge_item(self, knowledge_item):
        """Save a knowledge item to the appropriate category"""
        category = knowledge_item.get('category', 'general')
        
        # Map categories to directories
        category_mapping = {
            'problem-solution': 'technical/problem-solutions',
            'performance-baseline': 'performance/baselines',
            'architecture-pattern': 'technical/architecture-patterns',
            'workflow-optimization': 'process/workflow-optimization',
            'general': 'lessons-learned/what-works'
        }
        
        target_dir = category_mapping.get(category, 'lessons-learned/what-works')
        dir_path = os.path.join(self.knowledge_base_path, target_dir)
        
        # Create filename
        title_clean = re.sub(r'[^\w\s-]', '', knowledge_item['title']).strip()
        title_clean = re.sub(r'[-\s]+', '-', title_clean)
        filename = f"{title_clean.lower()}-{datetime.now().strftime('%Y%m%d')}.md"
        
        file_path = os.path.join(dir_path, filename)
        
        # Generate markdown content
        content = self.create_knowledge_markdown(knowledge_item)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"📝 Saved knowledge item: {filename}")
    
    def create_knowledge_markdown(self, knowledge_item):
        """Generate markdown content for a knowledge item"""
        template = f"""# {knowledge_item['title']}
**Category**: {knowledge_item.get('category', 'General')}
**Date Discovered**: {knowledge_item.get('date', datetime.now().strftime('%Y-%m-%d'))}
**Source**: {knowledge_item.get('source', 'Project Analysis')}

## Description
{knowledge_item.get('description', 'Knowledge item extracted from project analysis')}

## Details
{self.format_knowledge_details(knowledge_item)}

## Applicability
This knowledge item can be applied to:
- Similar {knowledge_item.get('category', 'general')} scenarios
- Future project iterations
- Related technical challenges

## Success Factors
- Clear implementation approach
- Documented solution steps
- Measurable outcomes

---
*Generated by Knowledge Extraction Engine on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*
"""
        return template
    
    def format_knowledge_details(self, knowledge_item):
        """Format specific details based on knowledge type"""
        if 'metrics' in knowledge_item:
            details = "## Performance Metrics\n"
            for value, unit in knowledge_item['metrics']:
                details += f"- {value} {unit}\n"
            return details
        
        if 'components' in knowledge_item:
            details = "## Components\n"
            for component, description in knowledge_item['components'].items():
                details += f"- **{component}**: {description}\n"
            return details
        
        if 'benefits' in knowledge_item:
            details = "## Benefits\n"
            for benefit in knowledge_item['benefits']:
                details += f"- {benefit}\n"
            return details
        
        return knowledge_item.get('description', 'Details to be expanded')
    
    def update_knowledge_index(self):
        """Maintain searchable knowledge index"""
        index = {
            'last_updated': datetime.now().isoformat(),
            'total_items': 0,
            'categories': {},
            'recent_additions': [],
            'search_terms': {}
        }
        
        # Scan knowledge base and build index
        for root, dirs, files in os.walk(self.knowledge_base_path):
            for file in files:
                if file.endswith('.md'):
                    file_path = os.path.join(root, file)
                    category = os.path.relpath(root, self.knowledge_base_path)
                    
                    if category not in index['categories']:
                        index['categories'][category] = []
                    
                    index['categories'][category].append({
                        'filename': file,
                        'path': os.path.relpath(file_path, self.knowledge_base_path),
                        'modified': datetime.fromtimestamp(os.path.getmtime(file_path)).isoformat()
                    })
                    
                    index['total_items'] += 1
        
        # Save index
        index_path = os.path.join(self.knowledge_base_path, 'index.json')
        with open(index_path, 'w') as f:
            json.dump(index, f, indent=2)
        
        # Create markdown index
        self.create_markdown_index(index)
        
        print(f"📚 Knowledge index updated: {index['total_items']} items indexed")
    
    def create_markdown_index(self, index):
        """Create a human-readable markdown index"""
        markdown_content = f"""# Knowledge Base Index
**Last Updated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Total Items**: {index['total_items']}

## Categories

"""
        
        for category, items in index['categories'].items():
            markdown_content += f"### {category.replace('/', ' / ').title()}\n"
            markdown_content += f"*{len(items)} items*\n\n"
            
            for item in items:
                markdown_content += f"- [{item['filename'].replace('.md', '').replace('-', ' ').title()}]({item['path']})\n"
            
            markdown_content += "\n"
        
        markdown_content += """
## Usage

Use this knowledge base to:
- Find solutions to similar problems
- Understand successful patterns and approaches
- Learn from previous decisions and outcomes
- Access performance baselines and metrics

## Search Tips

- Browse categories for related knowledge
- Check recent additions for latest insights
- Use file names as search terms
- Reference source documents for full context

---
*Maintained automatically by the Knowledge Extraction Engine*
"""
        
        index_md_path = os.path.join(self.knowledge_base_path, 'README.md')
        with open(index_md_path, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

if __name__ == "__main__":
    extractor = KnowledgeExtractor()
    extractor.extract_project_knowledge()
    print("🧠 Knowledge extraction system activated")