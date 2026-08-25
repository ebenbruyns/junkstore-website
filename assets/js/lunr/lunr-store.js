---
layout: none
---
{%- comment -%}
  The site-wide search index behind /search/.

  Downloaded whole and turned into a Lunr index in the browser, so everything
  put in here is paid for twice: once on the wire, once as main-thread time
  building the index before the box will answer. It reached 2.5 MB and a 591 ms
  synchronous build by indexing the full text of every page on the site,
  a thousand of which are game pages.

  Three rules keep it honest:

  1. Game and franchise pages carry a title and an excerpt, not their body.
     A game is looked up by name, and the pages that do that properly are
     /games/ and /games/tested/, whose table search filters by name, publisher
     and store. A thousand game descriptions in here buried the 45
     documentation pages under sheer weight and could not be tuned out.

  2. Nothing is indexed twice. `posts` is declared as a collection in
     _config.yml, so site.collections already contains it. Looping over
     site.posts as well, which is what this file used to do, put all 171 blog
     posts in the index in duplicate and showed them twice in the results.

  3. Nothing without a title. site.html_pages includes redirect stubs and
     other output with no title of its own, which rendered as 46 blank,
     clickable results.

  Commas are emitted before each entry rather than after, using `sep`, so that
  which loops produce entries and which come out empty stops mattering. The
  previous approach tracked forloop.last across three loops and a flag.
{%- endcomment -%}

{%- comment -%}
  Collections whose body text is not worth its weight. Both are indexed by
  name so a search still finds them; neither contributes prose.
{%- endcomment -%}
{%- assign title_only = "games,franchises" | split: "," -%}

{%- comment -%}
  Post folders whose body is a list of games rather than an argument.

  The weekly roundups and the backlog hauls are 36 of the 86 posts, and each
  carries a compatibility note per game: Proton version, what needed setting,
  what did not work. Indexed in full, a search for "proton" returned the Proton
  documentation and then fifteen roundups that are not about Proton at all and
  mention it once per game in passing.

  Their titles and intros stay indexed, so a roundup is still findable as a
  roundup. What is dropped is the per-game detail, which lives on the game's
  own page and is searchable properly at /games/tested/.

  Matched on the source folder rather than on categories, which was tried
  first and caught only 13 of the 36: these posts carry three different
  category sets between them ("Weekly Update, Game Compatibility",
  "Giveaway Testing", "Backlog Testing"), and older posts have their category
  remapped at render, so the front matter is not what is displayed. The folder
  a post is filed in is the one stable signal.
{%- endcomment -%}
{%- assign title_only_paths = "_posts/weekly-updates/,_posts/testing-updates/" | split: "," -%}

{%- comment -%}
  What a result gets labelled as. Keyed by collection label, falling back to
  the capitalised label, so a new collection appears sensibly without an edit.
{%- endcomment -%}
{%- assign type_labels = "docs:Documentation,posts:Blog,tutorials:Tutorials,troubleshooting:Troubleshooting,games:Games,franchises:Franchises,pages:Pages" | split: "," -%}

var store = [
{%- assign sep = "" -%}

{%- for c in site.collections -%}
  {%- assign label = c.label -%}
  {%- assign collection_has_body = true -%}
  {%- if title_only contains label -%}
    {%- assign collection_has_body = false -%}
  {%- endif -%}

  {%- assign type = label | capitalize -%}
  {%- for pair in type_labels -%}
    {%- assign kv = pair | split: ":" -%}
    {%- if kv[0] == label -%}
      {%- assign type = kv[1] -%}
    {%- endif -%}
  {%- endfor -%}

  {%- for doc in c.docs -%}
    {%- if doc.search == false -%}{%- continue -%}{%- endif -%}
    {%- if doc.title == nil or doc.title == "" -%}{%- continue -%}{%- endif -%}

    {%- comment -%}
      Per page, not just per collection: the folder a post is filed in can
      take its body out of the index while the rest of the blog keeps theirs.
    {%- endcomment -%}
    {%- assign body_wanted = collection_has_body -%}
    {%- if body_wanted -%}
      {%- for prefix in title_only_paths -%}
        {%- if doc.path contains prefix -%}
          {%- assign body_wanted = false -%}
          {%- break -%}
        {%- endif -%}
      {%- endfor -%}
    {%- endif -%}
    {{ sep }}{
      "title": {{ doc.title | jsonify }},
      "type": {{ type | jsonify }},
      {%- comment -%}
        A game's excerpt is its store description, and at full length the 1,083
        of them were 44% of this file on their own. Cut to a line: enough to
        recognise the game under its title in a result, without carrying a
        thousand marketing paragraphs that /games/tested/ already searches
        properly.
      {%- endcomment -%}
      "excerpt": {% if collection_has_body %}{{ doc.excerpt | markdownify | strip_html | strip_newlines | jsonify }}{% else %}{{ doc.excerpt | markdownify | strip_html | strip_newlines | truncatewords: 22 | jsonify }}{% endif %},
      {%- comment -%}
        Bounded rather than whole. A weekly update post lists a hundred games
        and runs to thousands of words; past the first few hundred it stops
        being what the page is about and starts being a long tail that matches
        every query weakly.
      {%- endcomment -%}
      "content": {% if body_wanted %}{{ doc.content | markdownify | strip_html | strip_newlines | truncatewords: 600 | jsonify }}{% else %}""{% endif %},
      {%- comment -%}
        A weight for the whole document, applied as a Lunr document boost.

        Dropping the roundups' bodies was not enough on its own. Every one of
        them ends its intro with the same sentence, "Tested with GE-Proton -
        Junk Store Game Mode setup included", so 19 of the 54 match a search
        for "proton" on the excerpt alone, and the excerpt is weighted four
        times. The result was the Proton documentation followed by fifteen
        roundups that have nothing to say about Proton.

        Weighted down rather than filtered out, and not by stripping that
        sentence, which would be a guess at wording that will change. A
        roundup can still win when it genuinely is the best answer, which is
        what a search for a game name in one of them should do.
      {%- endcomment -%}
      {%- unless body_wanted -%}{%- if collection_has_body -%}"boost": 0.15,{%- endif -%}{%- endunless -%}
      "url": {{ doc.url | jsonify }}
    }
    {%- assign sep = "," -%}
  {%- endfor -%}
{%- endfor -%}

{%- comment -%}
  Standalone pages, which are not part of any collection. site.html_pages also
  carries redirect stubs and generated output, hence the title check above and
  again here.
{%- endcomment -%}
{%- for page in site.html_pages -%}
  {%- if page.search == false -%}{%- continue -%}{%- endif -%}
  {%- if page.title == nil or page.title == "" -%}{%- continue -%}{%- endif -%}
  {{ sep }}{
    "title": {{ page.title | jsonify }},
    "type": "Pages",
    "excerpt": {{ page.excerpt | markdownify | strip_html | strip_newlines | jsonify }},
    "content": {{ page.content | markdownify | strip_html | strip_newlines | truncatewords: 600 | jsonify }},
    "url": {{ page.url | jsonify }}
  }
  {%- assign sep = "," -%}
{%- endfor -%}
];
