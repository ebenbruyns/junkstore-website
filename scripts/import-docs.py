#!/usr/bin/env python3
"""Import the junk-docs repository into the Jekyll site.

Reads plain markdown from the docs repo and writes Jekyll pages into _docs/,
adding front matter, rewriting relative links to permalinks, and copying images
to assets/images/docs/.

The docs repo stays free of Jekyll metadata: it builds a PDF and reads on GitHub
without knowing this site exists. Everything site-specific lives here.

Generated output is gitignored. Run this before serving or building:

    python3 scripts/import-docs.py
    bundle exec jekyll serve

Source defaults to ../junk-docs, override with --source. Once the docs repo is
public and added as a submodule, point this at _vendor/junk-docs.
"""

import argparse
import os
import re
import shutil
import sys

# Reading order per section. Mirrors build-pdf.sh in the docs repo, which is the
# only other place the order is recorded. Pages not listed here are still
# imported, but sort after these and alphabetically among themselves.
READING_ORDER = {
    "extensions": [
        "README.md",
        "introduction.md",
        "workflows.md",
        "guides/quickstart.md",
        "guides/overriding-actions.md",
        "guides/authoring-by-hand.md",
        "guides/emulators-and-roms.md",
        "guides/when-a-game-will-not-run.md",
        "concepts/how-extensions-are-found.md",
        "concepts/how-launching-works.md",
        "concepts/config-schema.md",
        "concepts/config-layering.md",
        "concepts/the-generator.md",
        "reference/custom-scripts.md",
        "reference/script-output.md",
        "reference/static-json.md",
        "reference/downloader-protocol.md",
        "reference/settings.md",
        "reference/actions-and-types.md",
        "reference/download-methods.md",
        "reference/dosbox-import.md",
        "reference/sharing-and-licensing.md",
        "troubleshooting.md",
    ],
}

# Human-readable section names, for breadcrumbs and the index.
SECTION_TITLES = {
    "extensions": "Extensions",
}

SECTION_BLURBS = {
    "extensions": (
        "Writing extensions: the scripts Junk Store calls, what they receive, "
        "what they must print, and how configuration reaches them."
    ),
}

# Files that are internal to the docs repo and should not be published.
SKIP = {"images/README.md"}

DOCS_ROOT_URL = "/docs/"


def slug_for(section, relpath):
    """Map a source path to its published URL slug.

    extensions/README.md               -> extensions
    extensions/guides/quickstart.md    -> extensions/quickstart
    extensions/reference/settings.md   -> extensions/settings

    Subdirectories are flattened: guides/ and reference/ are organisational in
    the repo but would make for needlessly deep URLs. Basenames are unique
    across the tree, which is checked below.
    """
    if relpath == "README.md":
        return section
    return f"{section}/{os.path.splitext(os.path.basename(relpath))[0]}"


def permalink_for(section, relpath):
    return f"{DOCS_ROOT_URL}{slug_for(section, relpath)}/"


def read_title(text, fallback):
    """First H1 becomes the page title."""
    m = re.search(r"^#\s+(.+?)\s*$", text, re.MULTILINE)
    return m.group(1).strip() if m else fallback


def strip_h1(text):
    """Remove the leading H1; the layout renders page.title as the heading."""
    return re.sub(r"^#\s+.+?\n+", "", text, count=1, flags=re.MULTILINE)


def first_paragraph(text):
    """First real paragraph, flattened, for the excerpt and meta description."""
    body = strip_h1(text)
    for block in body.split("\n\n"):
        block = block.strip()
        if not block or block.startswith(("#", "|", "```", ">", "-", "*", "!")):
            continue
        flat = " ".join(block.split())
        flat = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", flat)   # links -> text
        flat = re.sub(r"\*\*([^*]+)\*\*", r"\1", flat)          # bold -> text
        flat = re.sub(r"`([^`]+)`", r"\1", flat)                # code -> text
        return flat
    return ""


def truncate(s, limit=160):
    if len(s) <= limit:
        return s
    cut = s[:limit].rsplit(" ", 1)[0]
    return cut.rstrip(".,;:") + "…"


def rewrite_links(text, section, relpath, known):
    """Rewrite relative .md links to site permalinks, and image paths to assets.

    Link targets are resolved relative to the source file, then mapped through
    the same slug function used to place pages, so the two cannot disagree.
    """
    srcdir = os.path.dirname(relpath)
    unresolved = []

    def md_link(m):
        label, target, anchor = m.group(1), m.group(2), m.group(3) or ""
        resolved = os.path.normpath(os.path.join(srcdir, target))
        if resolved not in known:
            unresolved.append(f"{section}/{relpath} -> {target}")
            return m.group(0)
        return f"[{label}]({permalink_for(section, resolved)}{anchor})"

    # [text](path.md) and [text](path.md#anchor), relative targets only.
    text = re.sub(r"\[([^\]]+)\]\((?!https?:|/|#)([^)#]+\.md)(#[^)]*)?\)", md_link, text)

    def img(m):
        alt, src = m.group(1), m.group(2)
        resolved = os.path.normpath(os.path.join(srcdir, src))
        return f"![{alt}](/assets/images/docs/{section}/{os.path.basename(resolved)})"

    # ![alt](images/foo.png), relative targets only.
    text = re.sub(r"!\[([^\]]*)\]\((?!https?:|/|data:)([^)]+)\)", img, text)

    return text, unresolved


def yaml_quote(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def build_page(section, relpath, text, order, known):
    title = read_title(text, os.path.basename(relpath))
    excerpt = truncate(first_paragraph(text))
    body, unresolved = rewrite_links(text, section, relpath, known)
    body = strip_h1(body)

    # Names are quoted: titles contain colons ("Config layering: how a value is
    # resolved"), which YAML would otherwise read as a key separator inside the
    # flow mapping and fail to parse the whole page.
    def crumb(name, url):
        return f"  - {{name: {yaml_quote(name)}, url: {url}}}"

    section_title = SECTION_TITLES.get(section, section)
    crumbs = [crumb("Home", "/"), crumb("Documentation", DOCS_ROOT_URL)]
    if relpath == "README.md":
        crumbs.append(crumb(section_title, permalink_for(section, relpath)))
    else:
        crumbs.append(crumb(section_title, f"{DOCS_ROOT_URL}{section}/"))
        crumbs.append(crumb(title, permalink_for(section, relpath)))

    fm = [
        "---",
        "# Generated by scripts/import-docs.py from the junk-docs repository.",
        "# Do not edit: changes belong in that repo and will be overwritten here.",
        "layout: junkstore-page",
        f"title: {yaml_quote(title)}",
        f"permalink: {permalink_for(section, relpath)}",
        f"doc_section: {section}",
        f"doc_order: {order}",
    ]
    if excerpt:
        fm.append(f"excerpt: {yaml_quote(excerpt)}")
        fm.append(f"description: {yaml_quote(excerpt)}")
    fm.append("breadcrumbs:")
    fm.extend(crumbs)
    fm.append("---")

    return "\n".join(fm) + "\n\n" + body.lstrip("\n"), unresolved


def collect(source):
    """Find sections and their pages. A section is a top-level directory."""
    sections = {}
    for entry in sorted(os.listdir(source)):
        sdir = os.path.join(source, entry)
        if not os.path.isdir(sdir) or entry.startswith((".", "_")):
            continue
        pages = []
        for dirpath, dirnames, filenames in os.walk(sdir):
            dirnames[:] = [d for d in dirnames if not d.startswith(".")]
            for fn in sorted(filenames):
                if not fn.endswith(".md"):
                    continue
                rel = os.path.relpath(os.path.join(dirpath, fn), sdir)
                if rel in SKIP:
                    continue
                pages.append(rel)
        if pages:
            sections[entry] = pages
    return sections


def order_pages(section, pages):
    """Reading order first, then anything unlisted, alphabetically."""
    listed = READING_ORDER.get(section, [])
    ranked = [p for p in listed if p in pages]
    extra = sorted(p for p in pages if p not in listed)
    if extra:
        print(f"  note: not in reading order, appended: {', '.join(extra)}")
    return ranked + extra


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--source", default=None,
                    help="path to the junk-docs repo (default: ../junk-docs, "
                         "or _vendor/junk-docs if that exists)")
    ap.add_argument("--out", default="_docs", help="collection directory (default: _docs)")
    ap.add_argument("--assets", default="assets/images/docs",
                    help="where images are copied (default: assets/images/docs)")
    args = ap.parse_args()

    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(here)

    source = args.source
    if source is None:
        vendored = os.path.join(here, "_vendor", "junk-docs")
        source = vendored if os.path.isdir(vendored) else os.path.join(here, "..", "junk-docs")
    source = os.path.abspath(source)

    if not os.path.isdir(source):
        sys.exit(f"docs source not found: {source}\n"
                 f"Pass --source, or clone the docs repo next to this one.")

    sections = collect(source)
    if not sections:
        sys.exit(f"no documentation sections found under {source}")

    # Clean, so a page deleted upstream does not linger as a published URL.
    for path in (args.out, args.assets):
        if os.path.isdir(path):
            shutil.rmtree(path)
    os.makedirs(args.out, exist_ok=True)

    print(f"source: {source}")
    total, all_unresolved, images = 0, [], 0

    for section, pages in sections.items():
        print(f"\n{section}/")
        ordered = order_pages(section, pages)
        known = set(ordered)

        for i, relpath in enumerate(ordered):
            with open(os.path.join(source, section, relpath), encoding="utf-8") as f:
                text = f.read()

            page, unresolved = build_page(section, relpath, text, i, known)
            all_unresolved.extend(unresolved)

            outpath = os.path.join(args.out, f"{slug_for(section, relpath).replace('/', '-')}.md")
            with open(outpath, "w", encoding="utf-8") as f:
                f.write(page)
            total += 1

        imgdir = os.path.join(source, section, "images")
        if os.path.isdir(imgdir):
            dest = os.path.join(args.assets, section)
            os.makedirs(dest, exist_ok=True)
            for fn in sorted(os.listdir(imgdir)):
                if fn.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg")):
                    shutil.copy2(os.path.join(imgdir, fn), os.path.join(dest, fn))
                    images += 1

        print(f"  {len(ordered)} pages")

    write_index(args.out, sections)
    print(f"\nwrote {total} pages + index, copied {images} images")

    if all_unresolved:
        print(f"\n{len(all_unresolved)} unresolved link(s), left as-is:", file=sys.stderr)
        for u in sorted(set(all_unresolved)):
            print(f"  {u}", file=sys.stderr)
        return 1
    return 0


def write_index(out, sections):
    """A landing page at /docs/ listing the sections."""
    lines = [
        "---",
        "# Generated by scripts/import-docs.py.",
        "layout: junkstore-page",
        'title: "Documentation"',
        f"permalink: {DOCS_ROOT_URL}",
        'excerpt: "Documentation for Junk Store, covering how it works and how to extend it."',
        'description: "Documentation for Junk Store, covering how it works and how to extend it."',
        "breadcrumbs:",
        f"  - {{name: {yaml_quote('Home')}, url: /}}",
        f"  - {{name: {yaml_quote('Documentation')}, url: {DOCS_ROOT_URL}}}",
        "---",
        "",
    ]
    for section in sections:
        title = SECTION_TITLES.get(section, section.replace("-", " ").title())
        blurb = SECTION_BLURBS.get(section, "")
        lines.append(f"## [{title}]({DOCS_ROOT_URL}{section}/)")
        lines.append("")
        if blurb:
            lines.append(blurb)
            lines.append("")

    with open(os.path.join(out, "index.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


if __name__ == "__main__":
    sys.exit(main())
