#!/usr/bin/env python3
"""
Schema Sync Script for Junk Store Website

Pulls FAQ, Troubleshooting, and Tutorial data from the Firebase JSON files
and generates JSON-LD schema markup for SEO.

Usage:
    python3 scripts/sync-schemas.py

Source: /home/annie/JunkStore/Projects/junkstore-games-tested/data/
Output: _includes/schemas/
"""

import json
import re
import html
import os
from pathlib import Path

# Paths
SOURCE_DIR = Path('/home/annie/JunkStore/Projects/junkstore-games-tested/data')
OUTPUT_DIR = Path(__file__).parent.parent / '_includes' / 'schemas'

def html_to_text(html_content):
    """Convert HTML to plain text for schema markup."""
    if not html_content:
        return ""
    # Decode HTML entities
    text = html.unescape(html_content)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Clean up whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def generate_faq_schema():
    """Generate FAQPage schema from faq.json."""
    faq_file = SOURCE_DIR / 'faq.json'

    with open(faq_file, 'r', encoding='utf-8') as f:
        faq_data = json.load(f)

    entries = []
    for item in faq_data:
        if item.get('isActive', False) and item.get('contentType') != 'quicktip':
            entries.append({
                "@type": "Question",
                "name": item.get('question', ''),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": html_to_text(item.get('answer', ''))
                }
            })

    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": entries
    }

    output_file = OUTPUT_DIR / 'faq.html'
    schema_json = json.dumps(schema, indent=2)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f'<script type="application/ld+json">\n{schema_json}\n</script>')

    print(f"FAQ schema: {len(entries)} entries -> {output_file}")
    return len(entries)

def generate_troubleshooting_schema():
    """Generate FAQPage schema from troubleshooting.json."""
    ts_file = SOURCE_DIR / 'troubleshooting.json'

    with open(ts_file, 'r', encoding='utf-8') as f:
        ts_data = json.load(f)

    entries = []
    for item in ts_data:
        if item.get('isActive', False):
            entries.append({
                "@type": "Question",
                "name": item.get('title', ''),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": html_to_text(item.get('solution', ''))
                }
            })

    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": entries
    }

    output_file = OUTPUT_DIR / 'troubleshooting.html'
    schema_json = json.dumps(schema, indent=2)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f'<script type="application/ld+json">\n{schema_json}\n</script>')

    print(f"Troubleshooting schema: {len(entries)} entries -> {output_file}")
    return len(entries)

def generate_tutorial_schemas():
    """Generate HowTo schemas from tutorials.json."""
    tutorials_file = SOURCE_DIR / 'tutorials.json'

    with open(tutorials_file, 'r', encoding='utf-8') as f:
        tutorials = json.load(f)

    count = 0
    for tutorial in tutorials:
        if not tutorial.get('isActive', False):
            continue

        tutorial_id = tutorial.get('id', '')
        if not tutorial_id:
            continue

        plain_content = html_to_text(tutorial.get('content', ''))

        schema = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": tutorial.get('title', ''),
            "description": tutorial.get('description', ''),
            "step": [{
                "@type": "HowToStep",
                "text": plain_content
            }]
        }

        output_file = OUTPUT_DIR / f'tutorial-{tutorial_id}.html'
        schema_json = json.dumps(schema, indent=2)
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f'<script type="application/ld+json">\n{schema_json}\n</script>')

        print(f"  Tutorial: {tutorial_id}")
        count += 1

    print(f"Tutorial schemas: {count} files generated")
    return count

def main():
    """Main entry point."""
    print("=" * 50)
    print("Junk Store Schema Sync")
    print("=" * 50)
    print(f"\nSource: {SOURCE_DIR}")
    print(f"Output: {OUTPUT_DIR}\n")

    # Ensure output directory exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Generate schemas
    faq_count = generate_faq_schema()
    ts_count = generate_troubleshooting_schema()
    tutorial_count = generate_tutorial_schemas()

    print("\n" + "=" * 50)
    print(f"Total: {faq_count} FAQ + {ts_count} Troubleshooting + {tutorial_count} Tutorials")
    print("=" * 50)
    print("\nDone! Run 'bundle exec jekyll build' to rebuild the site.")

if __name__ == '__main__':
    main()
