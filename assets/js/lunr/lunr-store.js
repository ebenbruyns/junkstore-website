---
layout: none
---
var store = [
  {%- for c in site.collections -%}
    {%- if forloop.last -%}
      {%- assign l = true -%}
    {%- endif -%}
    {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}
    {%- for doc in docs -%}
      {%- if doc.header.teaser -%}
        {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {
        "title": {{ doc.title | jsonify }},
        "excerpt": {{ doc.excerpt | markdownify | strip_html | jsonify }},
        "content": {{ doc.content | markdownify | strip_html | jsonify }},
        "url": {{ doc.url | jsonify }},
        "teaser": {{ teaser | jsonify }}
      }{%- unless forloop.last and l -%},{%- endunless -%}
    {%- endfor -%}
  {%- endfor -%}

  {%- for post in site.posts -%}
    {%- if post.search != false -%}
      {%- if post.header.teaser -%}
        {%- capture teaser -%}{{ post.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {%- if site.collections != empty -%},{%- endif -%}
      {
        "title": {{ post.title | jsonify }},
        "excerpt": {{ post.excerpt | markdownify | strip_html | jsonify }},
        "content": {{ post.content | markdownify | strip_html | jsonify }},
        "url": {{ post.url | jsonify }},
        "teaser": {{ teaser | jsonify }}
      }{%- unless forloop.last -%},{%- endunless -%}
    {%- endif -%}
  {%- endfor -%}

  {%- for page in site.html_pages -%}
    {%- if page.search != false -%}
      {%- if page.header.teaser -%}
        {%- capture teaser -%}{{ page.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {%- if site.collections != empty or site.posts != empty -%},{%- endif -%}
      {
        "title": {{ page.title | jsonify }},
        "excerpt": {{ page.excerpt | markdownify | strip_html | jsonify }},
        "content": {{ page.content | markdownify | strip_html | jsonify }},
        "url": {{ page.url | jsonify }},
        "teaser": {{ teaser | jsonify }}
      }{%- unless forloop.last -%},{%- endunless -%}
    {%- endif -%}
  {%- endfor -%}
];