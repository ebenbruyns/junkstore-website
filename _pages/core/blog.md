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

<style>
/* ==========================================================================
   Blog Redesign Mockup Styles
   ========================================================================== */

/* Filter Pills */
.blog-filters {
  margin-bottom: 2rem;
}

.blog-filter-pills {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.blog-filter-pill {
  background: #1e2a38;
  color: #ccc;
  border: 2px solid #3a4a5c;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.blog-filter-pill:hover {
  background: #2a3442;
  border-color: #66bfff;
  color: #fff;
}

.blog-filter-pill.active {
  background: #66bfff;
  color: #000;
  border-color: #66bfff;
}

/* Featured Card */
.blog-featured {
  margin-bottom: 2.5rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: #1e2a38;
  border-radius: 12px;
  border: 1px solid #3a4a5c;
  overflow: hidden;
  transition: all 0.3s ease;
}

.featured-card:hover {
  border-color: #66bfff;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.featured-card__image {
  display: block;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
}

.featured-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:hover .featured-card__image img {
  transform: scale(1.03);
}

.featured-card__content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-card__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #999;
}

.featured-card__category {
  background: #66bfff;
  color: #000;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.featured-card__title {
  font-size: 1.8rem;
  line-height: 1.3;
  margin: 0 0 1rem 0;
  color: #fff;
}

.featured-card__title a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.featured-card__title a:hover {
  color: #66bfff;
}

.featured-card__excerpt {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.featured-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0056b3;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  width: fit-content;
}

.featured-card__btn:hover {
  background: #004494;
  transform: translateY(-2px);
}

/* Posts Grid */
.blog-grid-section {
  margin-bottom: 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.grid-card {
  background: #1e2a38;
  border-radius: 10px;
  border: 1px solid #3a4a5c;
  overflow: hidden;
  transition: all 0.3s ease;
}

.grid-card:hover {
  transform: translateY(-4px);
  border-color: #66bfff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.grid-card--hidden {
  display: none;
}

.grid-card__image {
  display: block;
  height: 180px;
  overflow: hidden;
}

.grid-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-card:hover .grid-card__image img {
  transform: scale(1.05);
}

.grid-card__content {
  padding: 1.25rem;
}

.grid-card__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  color: #999;
}

.grid-card__category {
  background: #66bfff;
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
}

.grid-card__title {
  font-size: 1.15rem;
  line-height: 1.35;
  margin: 0 0 0.75rem 0;
}

.grid-card__title a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.grid-card__title a:hover {
  color: #66bfff;
}

.grid-card__excerpt {
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Load More */
.blog-load-more {
  text-align: center;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.load-more-btn {
  background: linear-gradient(135deg, #66bfff 0%, #4da6ff 100%);
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.load-more-btn:hover {
  background: linear-gradient(135deg, #4da6ff 0%, #66bfff 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 191, 255, 0.4);
}

.load-count {
  opacity: 0.9;
  font-size: 0.9rem;
}

.load-more-info {
  color: #999;
  font-size: 0.85rem;
}

/* Empty State */
.blog-empty {
  text-align: center;
  padding: 60px 20px;
  background: #1e2a38;
  border-radius: 12px;
  border: 1px solid #3a4a5c;
  margin-bottom: 2rem;
}

.blog-empty__content i {
  font-size: 3rem;
  color: #666;
  margin-bottom: 20px;
}

.blog-empty__content h3 {
  color: #66bfff;
  margin-bottom: 15px;
}

.blog-empty__content p {
  color: #ccc;
  margin-bottom: 10px;
}

.blog-empty__content a {
  color: #66bfff;
}

/* Community CTA */
.blog-cta {
  margin-bottom: 2rem;
}

.blog-cta__box {
  background: linear-gradient(135deg, #2a3442 0%, #1e2a38 100%);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #3a4a5c;
}

.blog-cta__box h3 {
  color: #66bfff;
  margin: 0 0 0.75rem 0;
  font-size: 1.4rem;
}

.blog-cta__box p {
  color: #ccc;
  margin-bottom: 1.5rem;
  text-align: center;
}

.blog-cta__links {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.blog-cta__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  color: #fff;
}

.blog-cta__link--reddit { background: #c23a00; }
.blog-cta__link--discord { background: #4752c4; }
.blog-cta__link--bluesky { background: #0085ff; }
.blog-cta__link--mastodon { background: #563acc; }
.blog-cta__link--twitter { background: #1a8cd8; }
.blog-cta__link--rss { background: #e67e22; }

.blog-cta__link,
.blog-cta__link:visited {
  color: #fff !important;
}

.blog-cta__link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Back to Top */
.blog-back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #66bfff 0%, #4da6ff 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(102, 191, 255, 0.3);
}

.blog-back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.blog-back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 191, 255, 0.4);
}

/* Mobile Responsive */
@media (max-width: 900px) {
  .featured-card {
    grid-template-columns: 1fr;
  }

  .featured-card__image {
    min-height: 220px;
  }

  .featured-card__content {
    padding: 1.5rem;
  }

  .featured-card__title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .blog-filter-pills {
    gap: 8px;
  }

  .blog-filter-pill {
    padding: 8px 16px;
    font-size: 0.85rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .grid-card__image {
    height: 200px;
  }

  .blog-cta__links {
    gap: 0.4rem;
  }

  .blog-cta__link {
    padding: 6px 10px;
    font-size: 0.8rem;
  }

  .blog-back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}
</style>

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
