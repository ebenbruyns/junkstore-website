#!/usr/bin/env python3
"""Check that every link into the user manual still points at something.

Tutorials link into /docs/user/ pages, and those pages are generated from the
junk-docs repo by import-docs.py. Rename a heading over there and the tutorial
link quietly stops working: Jekyll doesn't check anchors, and a wrong #fragment
still returns the page. This catches that.

Checks each /docs/ URL found in _tutorials, _pages and _posts:

  - the page exists in _docs
  - the #anchor, if there is one, matches a heading id on that page

Run it after importing the docs, since it reads the generated _docs:

    python3 scripts/import-docs.py
    python3 scripts/check-doc-links.py

Exits non-zero if anything is broken, so it can gate a build.
"""

import os
import re
import sys

DOCS_DIR = "_docs"
SEARCH_DIRS = ["_tutorials", "_pages", "_posts"]
DOCS_URL = "/docs/"

# href="/docs/user/game-settings/#lang-and-host_lc_all" and the markdown form.
LINK_RE = re.compile(r'["(](/docs/[^"()\s]*)["()\s]')
# Anchors are written into the markdown by import-docs.py as {#some-id}.
ANCHOR_RE = re.compile(r"^#{1,6}\s+.*?\{#([^}]+)\}\s*$", re.MULTILINE)


def anchors_for(path):
    """Every heading id on a generated docs page."""
    with open(path, encoding="utf-8") as f:
        return set(ANCHOR_RE.findall(f.read()))


def docs_index():
    """Map each /docs/ URL to the file behind it, with its anchors."""
    index = {}
    for root, _dirs, files in os.walk(DOCS_DIR):
        for name in files:
            if not name.endswith(".md"):
                continue
            path = os.path.join(root, name)
            rel = os.path.relpath(path, DOCS_DIR)[: -len(".md")]
            # index.md is the section's own page, at the directory's URL.
            slug = os.path.dirname(rel) if os.path.basename(rel) == "index" else rel
            url = f"{DOCS_URL}{slug}/" if slug else DOCS_URL
            index[url] = (path, anchors_for(path))
    return index


def links_in(path):
    with open(path, encoding="utf-8") as f:
        return LINK_RE.findall(f.read())


def main():
    if not os.path.isdir(DOCS_DIR):
        print(f"{DOCS_DIR}/ not found. Run scripts/import-docs.py first.")
        return 2

    index = docs_index()
    problems = []
    checked = 0

    for directory in SEARCH_DIRS:
        for root, _dirs, files in os.walk(directory):
            for name in sorted(files):
                if not name.endswith(".md"):
                    continue
                source = os.path.join(root, name)
                for link in links_in(source):
                    checked += 1
                    page, _, anchor = link.partition("#")
                    if not page.endswith("/"):
                        page += "/"
                    if page not in index:
                        problems.append(f"{source}: no such page {page}")
                        continue
                    if anchor and anchor not in index[page][1]:
                        problems.append(
                            f"{source}: {page} has no anchor #{anchor}"
                        )

    for problem in problems:
        print(problem)

    print(f"\n{checked} link(s) checked, {len(problems)} broken")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
