---
layout: none
---
{%- comment -%}
  Search behaviour for /search/. The index it reads is built by lunr-store.js,
  which explains what is and is not in it.
{%- endcomment -%}
(function () {
  'use strict';

  /* Enough to find what you meant, few enough that a query like "the" does not
     build several hundred DOM nodes on every keystroke. */
  var MAX_RESULTS = 50;

  var idx = lunr(function () {
    this.ref('id');
    /* Weighted. Unweighted, all three fields counted the same and a game page
       that happened to say "proton" five times outranked the documentation
       page called Proton settings. */
    this.field('title', { boost: 10 });
    this.field('excerpt', { boost: 4 });
    this.field('content');

    /* The trimmer is deliberately left in place. Removing it, which this file
       used to do, keeps punctuation attached to tokens, so "settings." is
       indexed as a different word from "settings" and a search for one misses
       the other. */

    for (var item in store) {
      this.add({
        title: store[item].title,
        excerpt: store[item].excerpt,
        content: store[item].content,
        id: item
      }, {
        /* Per-document weight, set in lunr-store.js for pages whose wording
           makes them match far more often than they deserve to. Absent for
           almost everything, which is a weight of 1. */
        boost: store[item].boost || 1
      });
    }
  });

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;',
               '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function summarise(entry) {
    var text = entry.excerpt || entry.content || '';
    var words = text.split(/\s+/).filter(Boolean);
    if (!words.length) return '';
    var cut = words.slice(0, 28).join(' ');
    return escapeHtml(cut) + (words.length > 28 ? '…' : '');
  }

  /* Not simply a DOMContentLoaded listener. lunr-search-scripts-deferred.html
     injects this file when the search box is focused, which is long after that
     event has been and gone, so a listener alone would never run. */
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var searchInput = document.getElementById('search');
    var resultDiv = document.getElementById('results');
    if (!searchInput || !resultDiv) return;

    function run() {
      var raw = searchInput.value.trim();

      if (!raw) {
        resultDiv.innerHTML = '';
        return;
      }

      var terms = raw.toLowerCase().split(lunr.tokenizer.separator).filter(Boolean);
      /* A trailing space means the last word is finished, so it stops being
         treated as a prefix and stops matching everything that starts with it. */
      var typing = !/\s$/.test(searchInput.value);

      var result = idx.query(function (q) {
        terms.forEach(function (term, n) {
          q.term(term, { boost: 100 });
          if (typing && n === terms.length - 1) {
            q.term(term, {
              usePipeline: false,
              wildcard: lunr.Query.wildcard.TRAILING,
              boost: 10
            });
          }
          q.term(term, { usePipeline: false, editDistance: 1, boost: 1 });
        });
      });

      var shown = result.slice(0, MAX_RESULTS);
      var html = '<p class="results__found">' + result.length +
                 ' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}' +
                 (result.length > shown.length
                   ? ', showing the first ' + shown.length
                   : '') +
                 '</p>';

      html += shown.map(function (hit) {
        var entry = store[hit.ref];
        /* The label matters more than it looks: without it a documentation
           page, a blog post and a game page are three identical rows and the
           reader cannot tell which kind of answer they are about to get. */
        var type = entry.type
          ? '<span class="archive__item-type">' + escapeHtml(entry.type) + '</span>'
          : '';
        return '<div class="list__item">' +
                 '<article class="archive__item" itemscope' +
                 ' itemtype="https://schema.org/CreativeWork">' +
                   '<h2 class="archive__item-title" itemprop="headline">' +
                     '<a href="' + escapeHtml(entry.url) + '" rel="permalink">' +
                       escapeHtml(entry.title) + '</a>' + type +
                   '</h2>' +
                   '<div class="archive__item-excerpt" itemprop="description">' +
                     summarise(entry) + '</div>' +
                 '</article>' +
               '</div>';
      }).join('');

      resultDiv.innerHTML = html;
    }

    /* Debounced. This used to run on every keyup, so a query was executed and
       every hit re-rendered once per letter typed. */
    var queued = null;
    searchInput.addEventListener('input', function () {
      window.clearTimeout(queued);
      queued = window.setTimeout(run, 120);
    });

    /* A term carried in on the URL, so a link can open the page with results
       already on screen. */
    var initial = new URLSearchParams(window.location.search).get('q');
    if (initial) {
      searchInput.value = initial;
      run();
    }
  });
})();
