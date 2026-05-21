---
layout: null
permalink: /tested-games/
sitemap: false
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/games/tested/">
  <link rel="canonical" href="https://www.junkstore.xyz/games/tested/">
  <title>Redirecting to Games Database</title>
  <script>
    // Smart redirect: if ?game=<value> is present, look it up in games-table.json
    // (by slug first, then by title for legacy links) and route to the proper
    // individual game page (/games/{store}/{slug}/). Otherwise fall back to hub.
    (async function () {
      const param = new URLSearchParams(window.location.search).get('game');
      if (!param) {
        window.location.replace('/games/tested/');
        return;
      }
      const normalize = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
      const target = normalize(param);
      try {
        const res = await fetch('/assets/data/games-table.json');
        const data = await res.json();
        const games = (data && data.games) || [];
        const match =
          games.find(g => g.slug === param) ||
          games.find(g => normalize(g.slug) === target) ||
          games.find(g => normalize(g.title) === target);
        if (match && match.storefront && match.slug) {
          window.location.replace('/games/' + match.storefront.toLowerCase() + '/' + match.slug + '/');
          return;
        }
      } catch (e) {}
      window.location.replace('/games/tested/');
    })();
  </script>
</head>
<body>
  <p>This page has moved. <a href="/games/tested/">Click here if not redirected automatically.</a></p>
</body>
</html>
