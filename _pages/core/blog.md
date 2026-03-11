---
layout: junkstore-page
title: "Junk Store Blog"
excerpt: "Junk Store news, feature updates, game compatibility results, and weekly tips"
description: "Tips, reviews, and updates for Steam Deck gaming with Epic, GOG, Amazon & itch games. Weekly content from the Junk Store team."
permalink: /blog/
---

<!-- Category Filter -->
<section class="blog-filters">
  <div class="blog-filter-pills">
    <button class="blog-filter-pill active" data-category="all">All Posts</button>
    <button class="blog-filter-pill" data-category="Weekly Update">Games Tested</button>
    <button class="blog-filter-pill" data-category="News">News</button>
    <button class="blog-filter-pill" data-category="Feature Release">Feature Releases</button>
    <button class="blog-filter-pill" data-category="Tip of the Week">Tips & Tricks</button>
  </div>
</section>

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}

{% if sorted_posts.size > 0 %}

<!-- Featured Post (Latest) -->
{% assign featured = sorted_posts.first %}
<section class="blog-featured" id="featured-section">
  <article class="featured-card" data-categories="{% for category in featured.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}">
    {% if featured.image %}
    <a href="{{ featured.url | relative_url }}" class="featured-card__image">
      <img src="{{ featured.image | relative_url }}" alt="{{ featured.title }}" loading="eager" width="600" height="338">
    </a>
    {% endif %}
    <div class="featured-card__content">
      <div class="featured-card__meta">
        {% if featured.categories %}
          {% for category in featured.categories limit: 1 %}
            <span class="featured-card__category">{{ category }}</span>
          {% endfor %}
        {% endif %}
        <span class="featured-card__date">{{ featured.date | date: "%B %d, %Y" }}</span>
        {% if featured.read_time %}
        <span class="featured-card__read-time">{{ featured.read_time }}</span>
        {% endif %}
      </div>
      <h2 class="featured-card__title">
        <a href="{{ featured.url | relative_url }}">{{ featured.title }}</a>
      </h2>
      {% if featured.excerpt %}
      <p class="featured-card__excerpt">{{ featured.excerpt | strip_html | truncatewords: 40 }}</p>
      {% endif %}
      <a href="{{ featured.url | relative_url }}" class="featured-card__btn">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
  </article>
</section>

<!-- Posts Grid -->
<section class="blog-grid-section">
  <div class="blog-grid" id="posts-grid">
    {% for post in sorted_posts offset: 1 %}
    <article class="grid-card {% if forloop.index > 8 %}grid-card--hidden{% endif %}" data-categories="{% for category in post.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}" data-index="{{ forloop.index }}">
      {% if post.image %}
      <a href="{{ post.url | relative_url }}" class="grid-card__image">
        <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy" width="400" height="225">
      </a>
      {% endif %}
      <div class="grid-card__content">
        <div class="grid-card__meta">
          {% if post.categories %}
            {% for category in post.categories limit: 1 %}
              <span class="grid-card__category">{{ category }}</span>
            {% endfor %}
          {% endif %}
          <span class="grid-card__date">{{ post.date | date: "%b %d, %Y" }}</span>
        </div>
        <h3 class="grid-card__title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        {% if post.excerpt %}
        <p class="grid-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<!-- Load More -->
{% if sorted_posts.size > 9 %}
<section class="blog-load-more">
  <button id="load-more-btn" class="load-more-btn">
    <i class="fas fa-plus"></i> Load More Posts
    <span class="load-count">({{ sorted_posts.size | minus: 9 }} more)</span>
  </button>
  <div class="load-more-info">
    <span id="posts-shown">8</span> of {{ sorted_posts.size | minus: 1 }} posts shown
  </div>
</section>
{% endif %}

{% else %}
<section class="blog-empty">
  <div class="blog-empty__content">
    <i class="fas fa-blog"></i>
    <h3>Coming Soon!</h3>
    <p>We're preparing weekly game testing updates and Steam Deck insights.</p>
    <p>In the meantime, check out our <a href="/tested-games/">game compatibility database</a> with 600+ tested games.</p>
  </div>
</section>
{% endif %}

<!-- Community CTA -->
<section class="blog-cta">
  <div class="blog-cta__box">
    <h3>Never Miss an Update</h3>
    <p>Join our community for the latest game testing results and Steam Deck tips:</p>
    <div class="blog-cta__links">
      <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="blog-cta__link blog-cta__link--reddit">
        <i class="fab fa-reddit"></i> Reddit
      </a>
      <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="blog-cta__link blog-cta__link--discord">
        <i class="fab fa-discord"></i> Discord
      </a>
      <a href="https://bsky.app/profile/junkstore.bsky.social" target="_blank" rel="noopener" class="blog-cta__link blog-cta__link--bluesky">
        <i class="fab fa-bluesky"></i> Bluesky
      </a>
      <a href="https://mastodon.social/@JunkStore" target="_blank" rel="noopener" class="blog-cta__link blog-cta__link--mastodon">
        <i class="fab fa-mastodon"></i> Mastodon
      </a>
      <a href="https://x.com/JunkStore4deck" target="_blank" rel="noopener" class="blog-cta__link blog-cta__link--twitter">
        <i class="fab fa-x-twitter"></i> Twitter
      </a>
      <a href="/feed.xml" class="blog-cta__link blog-cta__link--rss">
        <i class="fas fa-rss"></i> RSS Feed
      </a>
    </div>
  </div>
</section>

<!-- Back to Top -->
<button id="back-to-top" class="blog-back-to-top" aria-label="Back to top">
  <i class="fas fa-chevron-up"></i>
</button>


<!-- Styles moved to _sass/blog-landing.scss -->

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterPills = document.querySelectorAll('.blog-filter-pill');
  const featuredSection = document.getElementById('featured-section');
  const featuredCard = featuredSection ? featuredSection.querySelector('.featured-card') : null;
  const gridCards = document.querySelectorAll('.grid-card');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const postsShown = document.getElementById('posts-shown');
  const backToTopBtn = document.getElementById('back-to-top');

  let currentlyShown = 8;
  let currentCategory = 'all';

  // Category Filtering
  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-category');

      // Update active state
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      // Reset pagination
      currentlyShown = 8;

      // Filter featured
      if (featuredCard) {
        const featuredCategories = featuredCard.getAttribute('data-categories');
        const showFeatured = currentCategory === 'all' || (featuredCategories && featuredCategories.includes(currentCategory));
        featuredSection.style.display = showFeatured ? 'block' : 'none';
      }

      // Filter grid
      let visibleCount = 0;
      gridCards.forEach(card => {
        const cardCategories = card.getAttribute('data-categories');
        const shouldShow = currentCategory === 'all' || (cardCategories && cardCategories.includes(currentCategory));

        if (shouldShow) {
          visibleCount++;
          if (visibleCount <= currentlyShown) {
            card.style.display = 'block';
            card.classList.remove('grid-card--hidden');
          } else {
            card.style.display = 'none';
            card.classList.add('grid-card--hidden');
          }
        } else {
          card.style.display = 'none';
        }
      });

      updateLoadMore();
    });
  });

  // Load More
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      const hiddenCards = getFilteredHiddenCards();
      const toShow = Math.min(6, hiddenCards.length);

      for (let i = 0; i < toShow; i++) {
        hiddenCards[i].style.display = 'block';
        hiddenCards[i].classList.remove('grid-card--hidden');
      }

      currentlyShown += toShow;
      updateLoadMore();
    });
  }

  function getFilteredHiddenCards() {
    const hidden = [];
    gridCards.forEach(card => {
      const cardCategories = card.getAttribute('data-categories');
      const matches = currentCategory === 'all' || (cardCategories && cardCategories.includes(currentCategory));
      if (matches && card.classList.contains('grid-card--hidden')) {
        hidden.push(card);
      }
    });
    return hidden;
  }

  function getFilteredCount() {
    let count = 0;
    gridCards.forEach(card => {
      const cardCategories = card.getAttribute('data-categories');
      if (currentCategory === 'all' || (cardCategories && cardCategories.includes(currentCategory))) {
        count++;
      }
    });
    return count;
  }

  function updateLoadMore() {
    if (!loadMoreBtn) return;

    const total = getFilteredCount();
    const remaining = total - currentlyShown;

    if (remaining > 0) {
      loadMoreBtn.style.display = 'inline-flex';
      loadMoreBtn.querySelector('.load-count').textContent = `(${remaining} more)`;
    } else {
      loadMoreBtn.style.display = 'none';
    }

    if (postsShown) {
      postsShown.textContent = Math.min(currentlyShown, total);
    }
  }

  // Back to Top
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
</script>
