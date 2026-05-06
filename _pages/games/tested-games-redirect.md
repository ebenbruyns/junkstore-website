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
    // Smart redirect: if ?game=<slug> is present, look it up in games-table.json
    // and route to the proper individual game page (/games/{store}/{slug}/).
    // Otherwise fall back to the games-tested hub.
    (async function () {
      const slug = new URLSearchParams(window.location.search).get('game');
      if (!slug) {
        window.location.replace('/games/tested/');
        return;
      }
      try {
        const res = await fetch('/assets/data/games-table.json');
        const data = await res.json();
        const match = data.games && data.games.find(g => g.slug === slug);
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
