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
    # Pages at the repo root, belonging to no section. The glossary is written
    # to be dipped into from anywhere in the docs, which is why it sits outside
    # them rather than inside extensions/.
    "": [
        "glossary.md",
    ],
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

# Files that are internal to the docs repo and should not be published, as
# paths from the repo root. The root README is the repo's own front page: it
# describes the directory layout for someone browsing on GitHub, and /docs/
# generates its own contents page, so publishing it would duplicate that.
SKIP = {"README.md", "CONTRIBUTING.md"}

DOCS_ROOT_URL = "/docs/"

# Human-readable names and blurbs for sections and groups live in
# _data/doc_sections.yml, not in this file, so the contents page, the sidebar,
# the breadcrumbs and this script all read them from one place.
SECTIONS_FILE = "_data/doc_sections.yml"
REDIRECTS_FILE = "_data/doc_redirects.yml"
URLS_FILE = "_data/doc_urls.yml"


def load_yaml(path, what):
    """Read one of the _data files, or return {} if it is not there."""
    if not os.path.isfile(path):
        return {}
    try:
        import yaml
    except ImportError:
        sys.exit(f"{path} exists but PyYAML is not installed.\n"
                 f"Install it (pip install pyyaml) or remove the file.")
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


def titlecase(name):
    """Fallback label for a folder nobody has described yet."""
    return name.replace("-", " ").replace("_", " ").capitalize()


def label_for(labels, section, group=None):
    """Human name for a section or one of its groups.

    Falls back to the title-cased folder name, so a folder added to the docs
    repo renders sensibly without anyone editing _data/doc_sections.yml first.
    """
    smeta = labels.get(section) or {}
    if group is None:
        return smeta.get("label") or titlecase(section)
    gmeta = (smeta.get("groups") or {}).get(group) or {}
    return gmeta.get("label") or titlecase(group)


def slug_for(srcpath):
    """Map a source path, relative to the docs repo root, to its URL slug.

    glossary.md                                  -> glossary
    extensions/README.md                         -> extensions
    extensions/guides/quickstart.md              -> extensions/guides/quickstart
    extensions/reference/settings.md             -> extensions/reference/settings

    The source tree is mirrored rather than flattened. The docs repo's own
    organisation is the authority, and keeping it means two pages can never
    collide: guides/settings.md and reference/settings.md are distinct paths
    and so are distinct URLs. Flattening them would have made one silently
    overwrite the other.

    A README is the index of whatever directory it sits in, so a future
    guides/README.md publishes at /docs/extensions/guides/.

    Paths are handled from the repo root rather than per section so that a page
    outside any section, such as the glossary, has a slug like any other, and
    so that a link crossing from one section to another resolves.
    """
    if os.path.basename(srcpath) == "README.md":
        return os.path.dirname(srcpath)
    return os.path.splitext(srcpath)[0]


def permalink_for(srcpath):
    return f"{DOCS_ROOT_URL}{slug_for(srcpath)}/"


def section_for(srcpath):
    """Top-level folder the page belongs to, "" for a page at the repo root.

    A section is a top-level directory: extensions/ is one, and the glossary,
    which deliberately sits outside any of them, belongs to none.
    """
    parts = srcpath.split(os.sep)
    return parts[0] if len(parts) > 1 else ""


def group_for(srcpath):
    """Subdirectory within the section, "" when the page sits directly in it.

    Drives the grouping on the contents page and in the sidebar.
    """
    parts = srcpath.split(os.sep)
    return os.sep.join(parts[1:-1]) if len(parts) > 2 else ""


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


def rewrite_links(text, srcpath, known):
    """Rewrite relative .md links to site permalinks, and image paths to assets.

    Targets are resolved relative to the source file and then against the set
    of every page in the repo, so a link that crosses out of its own section
    resolves. The three links to ../glossary.md from inside extensions/ are
    exactly that case.

    Resolution runs through the same slug function used to place the pages, so
    a link and its target cannot disagree about the URL.
    """
    srcdir = os.path.dirname(srcpath)
    unresolved = []

    def md_link(m):
        label, target, anchor = m.group(1), m.group(2), m.group(3) or ""
        resolved = os.path.normpath(os.path.join(srcdir, target))
        if resolved not in known:
            unresolved.append(f"{srcpath} -> {target}")
            return m.group(0)
        return f"[{label}]({permalink_for(resolved)}{anchor})"

    # [text](path.md) and [text](path.md#anchor), relative targets only.
    text = re.sub(r"\[([^\]]+)\]\((?!https?:|/|#)([^)#]+\.md)(#[^)]*)?\)", md_link, text)

    def img(m):
        alt, src = m.group(1), m.group(2)
        resolved = os.path.normpath(os.path.join(srcdir, src))
        # The path relative to the repo root is kept, matching how the files
        # are copied. Using the basename alone would collide the moment two
        # directories each had an images/ folder.
        return f"![{alt}](/assets/images/docs/{resolved})"

    # ![alt](images/foo.png), relative targets only.
    text = re.sub(r"!\[([^\]]*)\]\((?!https?:|/|data:)([^)]+)\)", img, text)

    return text, unresolved


def slugify(text):
    """Heading text to anchor, matching GitHub's scheme.

    The docs are also read on GitHub, so links written there against GitHub's
    anchors have to keep working here. Lowercase, inline markdown stripped,
    punctuation dropped, spaces to hyphens.
    """
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)   # links -> label
    s = re.sub(r"[`*_~]", "", s)                         # inline emphasis, code
    s = s.strip().lower()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"[\s-]+", "-", s).strip("-")


def add_heading_anchors(text):
    """Give every heading an explicit id.

    _config.yml sets kramdown auto_ids: false site-wide, so no heading anywhere
    gets an id of its own. Without one the cross-page #anchor links this script
    already emits point at nothing, and no table of contents can be built.

    Writing the id into the markdown fixes that for the docs alone, and keeps
    the anchors stable and readable rather than positional.
    """
    out, fenced, seen = [], False, {}

    for line in text.split("\n"):
        if line.lstrip().startswith(("```", "~~~")):
            fenced = not fenced
            out.append(line)
            continue

        m = None if fenced else re.match(r"^(#{2,6})\s+(.+?)\s*$", line)
        if not m or m.group(2).endswith("}"):
            out.append(line)
            continue

        hashes, heading = m.group(1), m.group(2)
        anchor = slugify(heading) or "section"
        # Two headings can legitimately share a name ("Example", "Notes").
        # Suffix repeats so every anchor on the page stays unique.
        seen[anchor] = seen.get(anchor, 0) + 1
        if seen[anchor] > 1:
            anchor = f"{anchor}-{seen[anchor]}"
        out.append(f"{hashes} {heading} {{#{anchor}}}")

    return "\n".join(out)


def yaml_quote(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def build_page(srcpath, text, order, known, redirects, labels):
    title = read_title(text, os.path.basename(srcpath))
    excerpt = truncate(first_paragraph(text))
    body, unresolved = rewrite_links(text, srcpath, known)
    body = add_heading_anchors(strip_h1(body))

    section = section_for(srcpath)

    # Titles are quoted because they contain colons ("Config layering: how a
    # value is resolved"), which YAML would otherwise read as a key separator.
    fm = [
        "---",
        "# Generated by scripts/import-docs.py from the junk-docs repository.",
        "# Do not edit: changes belong in that repo and will be overwritten here.",
        "layout: junkstore-docs",
        f"title: {yaml_quote(title)}",
        f"permalink: {permalink_for(srcpath)}",
        # Both quoted so a page outside any section, or sitting directly in
        # one, reads as an empty string rather than YAML null, which Liquid's
        # `where` filter cannot match against.
        f"doc_section: {yaml_quote(section)}",
        f"doc_group: {yaml_quote(group_for(srcpath))}",
        f"doc_order: {order}",
    ]
    if excerpt:
        # Lifted from the opening paragraph, so it is not printed as a subtitle
        # (it would repeat the first thing the page says). It is here for the
        # meta description and for the listings on the contents page.
        fm.append(f"excerpt: {yaml_quote(excerpt)}")
        fm.append(f"description: {yaml_quote(excerpt)}")

    # Names are quoted for the same reason as the title: several contain
    # colons, which YAML would read as a key separator inside a flow mapping.
    def crumb(name, url):
        return f"  - {{name: {yaml_quote(name)}, url: {url}}}"

    group = group_for(srcpath)
    permalink = permalink_for(srcpath)
    # The trail starts at Documentation, not Home: the masthead logo already
    # goes home and the crumb was just noise on every page.
    crumbs = [crumb("Documentation", DOCS_ROOT_URL)]
    if section:
        section_url = f"{DOCS_ROOT_URL}{section}/"
        crumbs.append(crumb(label_for(labels, section), section_url))
        if group:
            # A group is organisational and has no page of its own, so its
            # crumb points back at the section rather than at a URL that
            # would 404.
            crumbs.append(crumb(label_for(labels, section, group), section_url))
        if permalink != section_url:
            crumbs.append(crumb(title, permalink))
    else:
        # A page outside every section, such as the glossary. It hangs
        # directly off Documentation.
        crumbs.append(crumb(title, permalink))

    fm.append("breadcrumbs:")
    fm.extend(crumbs)

    old_urls = redirects.get(srcpath, [])
    if old_urls:
        fm.append("redirect_from:")
        fm.extend(f"  - {u}" for u in old_urls)

    fm.append("---")

    return "\n".join(fm) + "\n\n" + body.lstrip("\n"), unresolved


def collect(source):
    """Every publishable page, keyed by section, as paths from the repo root.

    A section is a top-level directory. Markdown sitting at the repo root
    belongs to no section and is keyed under "": the glossary is written to be
    read from anywhere in the docs, so it deliberately lives outside them.
    """
    sections = {}

    root_pages = sorted(
        fn for fn in os.listdir(source)
        if fn.endswith(".md")
        and os.path.isfile(os.path.join(source, fn))
        and fn not in SKIP
    )
    if root_pages:
        sections[""] = root_pages

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
                rel = os.path.relpath(os.path.join(dirpath, fn), source)
                # A README inside an images/ folder documents the images for
                # whoever is editing the repo, and is not a page.
                if rel in SKIP or os.path.basename(os.path.dirname(rel)) == "images":
                    continue
                pages.append(rel)
        if pages:
            sections[entry] = pages
    return sections


def order_pages(section, pages):
    """Reading order first, then anything unlisted, alphabetically.

    READING_ORDER is written per section with paths relative to that section,
    matching build-pdf.sh in the docs repo. Pages are carried around here as
    paths from the repo root, so the section prefix is added before comparing.
    """
    prefix = f"{section}/" if section else ""
    listed = [f"{prefix}{p}" for p in READING_ORDER.get(section, [])]
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

    redirects = load_redirects(sections)
    labels = load_yaml(SECTIONS_FILE, "section labels")

    print(f"source: {source}")
    total, all_unresolved, images = 0, [], 0
    published = {}   # permalink -> source path, for the collision guard

    # Every page in the repo, so a link that crosses out of its own section
    # still resolves. The glossary is linked from three pages inside
    # extensions/, which a per-section view could not see.
    known = {p for pages in sections.values() for p in pages}

    for section, pages in sections.items():
        print(f"\n{section or '(top level)'}/")
        ordered = order_pages(section, pages)

        for i, srcpath in enumerate(ordered):
            with open(os.path.join(source, srcpath), encoding="utf-8") as f:
                text = f.read()

            page, unresolved = build_page(srcpath, text, i, known,
                                          redirects, labels)
            all_unresolved.extend(unresolved)

            # Mirroring the source tree should make this impossible, since two
            # files cannot share a path. It is checked anyway because the cost
            # of being wrong is a page silently disappearing from the site.
            permalink = permalink_for(srcpath)
            clash = published.get(permalink)
            if clash:
                sys.exit(f"two source files both publish at {permalink}:\n"
                         f"  {clash}\n  {srcpath}\n"
                         f"Rename one of them in the docs repo.")
            published[permalink] = srcpath

            outpath = os.path.join(args.out, out_path_for(srcpath))
            os.makedirs(os.path.dirname(outpath), exist_ok=True)
            with open(outpath, "w", encoding="utf-8") as f:
                f.write(page)
            total += 1

        print(f"  {len(ordered)} pages")

    images = copy_images(source, args.assets)

    write_index(args.out, sections)
    print(f"\nwrote {total} pages + index, copied {images} images")

    check_redirect_targets(redirects, published)
    report_vanished_urls(published)

    if all_unresolved:
        print(f"\n{len(all_unresolved)} unresolved link(s), left as-is:", file=sys.stderr)
        for u in sorted(set(all_unresolved)):
            print(f"  {u}", file=sys.stderr)
        return 1
    return 0


def out_path_for(srcpath):
    """Where a page is written under _docs/.

    The source tree is mirrored, so the folder a page lives in upstream is the
    folder it lives in here. A README becomes index.md because _config.yml
    excludes README.md from the build, so a literal copy would be dropped.
    """
    if os.path.basename(srcpath) == "README.md":
        return os.path.join(os.path.dirname(srcpath), "index.md")
    return srcpath


def copy_images(source, assets):
    """Copy every image in the repo, keeping its path relative to the root.

    Walking the whole repo rather than just <section>/images/ means an image
    beside the page that uses it, or in guides/images/, is picked up too. Paths
    are kept so two directories can each have an images/ folder.

    Where a WebP and an original of the same name sit side by side, only the
    WebP is copied. The docs repo keeps the originals as a safety net and the
    markdown points at the WebP, so shipping both would put several megabytes
    on the site that no page ever references.
    """
    copied, superseded = 0, 0
    for dirpath, dirnames, filenames in os.walk(source):
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        names = set(filenames)
        for fn in sorted(filenames):
            stem, ext = os.path.splitext(fn)
            if ext.lower() not in (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"):
                continue
            if ext.lower() != ".webp" and f"{stem}.webp" in names:
                superseded += 1
                continue
            rel = os.path.relpath(os.path.join(dirpath, fn), source)
            dest = os.path.join(assets, rel)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            shutil.copy2(os.path.join(dirpath, fn), dest)
            copied += 1

    if superseded:
        print(f"  {superseded} original(s) skipped, superseded by a WebP")
    return copied


def load_redirects(sections):
    """Old URLs for pages that have been renamed, from _data/doc_redirects.yml.

    Keyed by the page as it exists now, so an entry reads as "these old URLs
    should now land here". Emitted as redirect_from front matter, which
    jekyll-redirect-from turns into redirecting stubs at build time.
    """
    data = load_yaml(REDIRECTS_FILE, "redirects")
    known = {p for pages in sections.values() for p in pages}
    stale = sorted(k for k in data if k not in known)
    if stale:
        sys.exit(f"{REDIRECTS_FILE} points at pages that no longer exist:\n" +
                 "\n".join(f"  {k}" for k in stale) +
                 "\nUpdate the key to the page's current path, or drop the entry.")

    return {k: (v if isinstance(v, list) else [v]) for k, v in data.items()}


def check_redirect_targets(redirects, published):
    """An old URL must not also be a live page, or one would shadow the other."""
    clashes = sorted(url for urls in redirects.values() for url in urls
                     if url in published)
    if clashes:
        sys.exit(f"{REDIRECTS_FILE} lists URLs that are also live pages:\n" +
                 "\n".join(f"  {u} is {published[u]}" for u in clashes))


def report_vanished_urls(published):
    """Warn about URLs that existed last run and do not now.

    A rename in the docs repo is otherwise invisible from here: the old URL
    just stops existing. This is the prompt to add a redirect for it. Only a
    warning, because deleting a page is a legitimate thing to do.
    """
    previous = set()
    if os.path.isfile(URLS_FILE):
        with open(URLS_FILE, encoding="utf-8") as f:
            previous = {line.strip()[2:] for line in f if line.startswith("- ")}

    gone = sorted(previous - set(published))
    if gone:
        print(f"\n{len(gone)} URL(s) no longer published:", file=sys.stderr)
        for u in gone:
            print(f"  {u}", file=sys.stderr)
        print(f"If these were renamed rather than deleted, add them to "
              f"{REDIRECTS_FILE}.", file=sys.stderr)

    with open(URLS_FILE, "w", encoding="utf-8") as f:
        f.write("# Every URL published under /docs/, written by "
                "scripts/import-docs.py.\n"
                "# Committed so a URL disappearing between runs can be spotted "
                "and redirected.\n")
        for url in sorted(published):
            f.write(f"- {url}\n")


def write_index(out, sections):
    """The contents page at /docs/.

    Only front matter and an include: the contents themselves are built in
    Liquid from site.docs, so a page or a whole folder added to the docs repo
    turns up here on the next import with nothing to update by hand. Writing
    the list out as markdown, as this used to, meant it went stale the moment
    anyone added a page.
    """
    summary = ("Documentation for Junk Store, covering how it works and how "
               "to extend it.")
    lines = [
        "---",
        "# Generated by scripts/import-docs.py.",
        "layout: junkstore-docs",
        "doc_index: true",
        'title: "Documentation"',
        f"permalink: {DOCS_ROOT_URL}",
        f"excerpt: {yaml_quote(summary)}",
        f"description: {yaml_quote(summary)}",
        "breadcrumbs:",
        f"  - {{name: {yaml_quote('Documentation')}, url: {DOCS_ROOT_URL}}}",
        "---",
        "",
        "{% include docs/contents.html %}",
        "",
    ]
    with open(os.path.join(out, "index.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


if __name__ == "__main__":
    sys.exit(main())
