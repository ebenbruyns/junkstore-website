---
layout: splash
title: "Junk Store Blog"
description: "Tips, reviews, and updates for Steam Deck gaming. Weekly content from the Junk Store team."
permalink: /blog/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image_compressed.jpg
  actions:
    - label: "Try Junk Store 2.0 Free"
      url: "/buy_now/"
      class: "button buy-button"
excerpt: "Tips, reviews, and updates for Steam Deck gaming"
---

<section class="blog-header">
  <h1>What's New</h1>
  <p class="blog-subtitle">Weekly Junk Store tips, game compatibility updates, and Steam Deck gaming mastery guides.</p>
</section>

<!-- Category Filter -->
<section class="category-filter-section">
  <div class="category-filters">
    <button class="category-filter active" data-category="all">All Posts</button>
    <button class="category-filter" data-category="Weekly Update">Games Tested</button>
    <button class="category-filter" data-category="News">News</button>
    <button class="category-filter" data-category="Feature Release">Feature Releases</button>
    <button class="category-filter" data-category="Tip of the Week">Tips & Tricks</button>
  </div>
</section>

<section class="blog-posts-section">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  
  {% if sorted_posts.size > 0 %}
    <div class="posts-grid" id="posts-grid">
      {% for post in sorted_posts %}
        <article class="blog-post-card {% if forloop.index > 12 %}hidden-post{% endif %}" data-categories="{% for category in post.categories %}{{ category }}{% unless forloop.last %},{% endunless %}{% endfor %}" data-index="{{ forloop.index }}">
          {% if post.image %}
          <div class="post-image">
            <a href="{{ post.url | relative_url }}">
              <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" loading="lazy" width="400" height="225">
            </a>
          </div>
          {% endif %}
          
          <div class="post-content">
            <div class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%b %d, %Y" }}
              </time>
              {% if post.categories %}
                <span class="post-categories">
                  {% for category in post.categories limit: 2 %}
                    <span class="post-category">{{ category }}</span>
                  {% endfor %}
                </span>
              {% endif %}
            </div>
            
            <h3 class="post-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            
            {% if post.excerpt %}
            <div class="post-excerpt">
              {{ post.excerpt | strip_html | truncatewords: 25 }}
            </div>
            {% endif %}
            
            <div class="post-footer">
              <a href="{{ post.url | relative_url }}" class="read-more-btn">Read More <i class="fas fa-arrow-right"></i></a>
              {% if post.read_time %}
              <span class="read-time">
                <i class="fas fa-clock"></i> {{ post.read_time }}
              </span>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
    
    {% if sorted_posts.size > 12 %}
    <div class="blog-pagination">
      <button id="load-more-btn" class="load-more-btn">
        <i class="fas fa-plus"></i> Load More Posts
        <span class="load-count">({{ sorted_posts.size | minus: 12 }} more)</span>
      </button>
      <div class="pagination-info">
        <span id="posts-shown">12</span> of {{ sorted_posts.size }} posts shown
      </div>
    </div>
    {% endif %}
    
  {% else %}
    <div class="no-posts">
      <div class="no-posts-content">
        <i class="fas fa-blog" style="font-size: 3rem; color: #666; margin-bottom: 20px;"></i>
        <h3>Coming Soon!</h3>
        <p>We're preparing weekly game testing updates and Steam Deck insights.</p>
        <p>In the meantime, check out our <a href="/tested-games/">game compatibility database</a> with 600+ tested games.</p>
      </div>
    </div>
  {% endif %}
</section>

<section class="blog-cta-section">
  <div class="cta-box">
    <h3>🎮 Never Miss an Update</h3>
    <p>Join our community for the latest game testing results and Steam Deck tips:</p>
    <div class="social-links">
      <a href="https://www.reddit.com/r/JunkStore" target="_blank" rel="noopener" class="social-link reddit">
        <i class="fab fa-reddit"></i> r/JunkStore
      </a>
      <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener" class="social-link discord">
        <i class="fab fa-discord"></i> Discord
      </a>
      <a href="https://x.com/JunkStore4deck" target="_blank" rel="noopener" class="social-link twitter">
        <i class="fab fa-x-twitter"></i> Twitter
      </a>
    </div>
  </div>
</section>

<!-- Back to Top Button -->
<button id="back-to-top" class="back-to-top-btn" aria-label="Back to top">
  <i class="fas fa-chevron-up"></i>
</button>

<style>
/* Streamlined Blog Header */
.blog-header {
  text-align: center;
  padding: 20px 20px 15px 20px;
  margin-bottom: 25px;
}

.blog-header h1 {
  color: #66bfff;
  margin-bottom: 8px;
  font-size: 2.2rem;
  line-height: 1.2;
  font-weight: 600;
}

.blog-subtitle {
  font-size: 1rem !important;
  color: #ccc !important;
  font-weight: 400 !important;
  max-width: 600px;
  margin: 0 auto !important;
  line-height: 1.4 !important;
  text-align: center !important;
}

/* Category Filter Section */
.category-filter-section {
  margin: 0 0 30px 0;
  text-align: center;
}

.category-filters {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.category-filter {
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

.category-filter:hover {
  background: #2a3442;
  border-color: #66bfff;
  color: #fff;
}

.category-filter.active {
  background: #66bfff;
  color: #000;
  border-color: #66bfff;
}

.category-filter.active:hover {
  background: #cceeff;
  border-color: #cceeff;
}

/* Clean Blog Styling */

.blog-posts-section {
  margin-bottom: 60px;
}

.posts-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}

.blog-post-card {
  background: #1e2a38;
  border-radius: 12px;
  border: 1px solid #3a4a5c;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.blog-post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  border-color: #66bfff;
}

.post-image {
  height: 250px;
  overflow: hidden;
  background: #2a2a2a;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-post-card:hover .post-image img {
  transform: scale(1.05);
}

.post-content {
  padding: 25px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.85rem;
  color: #999;
}

.post-categories {
  display: flex;
  gap: 5px;
}

.post-category {
  background: #66bfff;
  color: #000;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.post-title {
  margin: 0 0 15px 0;
  font-size: 1.4rem;
  line-height: 1.3;
}

.post-title a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-title a:hover {
  color: #66bfff;
}

.post-excerpt {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.read-more-btn {
  background: #0056b3;
  color: #fff !important;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.read-more-btn:hover,
.read-more-btn:visited,
.read-more-btn:visited:hover {
  background: #004494;
  color: #fff !important;
  transform: translateY(-1px);
}

.read-time {
  color: #999;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.no-posts {
  text-align: center;
  padding: 80px 20px;
  background: #1e2a38;
  border-radius: 12px;
  border: 1px solid #3a4a5c;
}

.no-posts-content h3 {
  color: #66bfff;
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.no-posts-content p {
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 15px;
}

.no-posts-content a {
  color: #cceeff;
  text-decoration: none;
}

.no-posts-content a:hover {
  color: #66bfff;
  text-decoration: underline;
}

/* Pagination Styles */
.hidden-post {
  display: none;
}

.blog-pagination {
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: #1e2a38;
  border-radius: 12px;
  border: 1px solid #3a4a5c;
}

.load-more-btn {
  background: linear-gradient(135deg, #66bfff 0%, #4da6ff 100%);
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto 15px auto;
  box-shadow: 0 4px 15px rgba(102, 191, 255, 0.3);
}

.load-more-btn:hover {
  background: linear-gradient(135deg, #4da6ff 0%, #66bfff 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 191, 255, 0.4);
}

.load-more-btn:active {
  transform: translateY(0);
}

.load-more-btn.loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.load-count {
  font-size: 0.9rem;
  opacity: 0.9;
}

.pagination-info {
  color: #999;
  font-size: 0.9rem;
  font-style: italic;
}

/* Back to Top Button */
.back-to-top-btn {
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

.back-to-top-btn.visible {
  opacity: 1;
  visibility: visible;
}

.back-to-top-btn:hover {
  background: linear-gradient(135deg, #4da6ff 0%, #66bfff 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 191, 255, 0.4);
}

.back-to-top-btn:active {
  transform: translateY(-1px);
}

.blog-cta-section {
  background: linear-gradient(135deg, #2a3442 0%, #1e2a38 100%);
  border-radius: 12px;
  padding: 25px 20px;
  text-align: center;
  border: 1px solid #3a4a5c;
}

.cta-box h3 {
  color: #66bfff;
  margin: 0 0 12px 0;
  font-size: 1.4rem;
}

.cta-box p {
  color: #ccc;
  margin-bottom: 20px;
  font-size: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.social-link.reddit {
  background: #ff4500;
  color: white;
}

.social-link.discord {
  background: #5865f2;
  color: white;
}

.social-link.twitter {
  background: #1da1f2;
  color: white;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-color: #66bfff;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 1.8rem;
  }
  
  .blog-subtitle {
    font-size: 0.9rem !important;
  }
  
  .blog-header {
    padding: 15px 20px 10px 20px;
    margin-bottom: 20px;
  }
  
  /* Category Filter Mobile */
  .category-filters {
    gap: 10px;
  }
  
  .category-filter {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .posts-grid {
    gap: 20px;
  }
  
  .post-footer {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-link {
    width: 200px;
    justify-content: center;
  }
  
  /* Back to Top Mobile */
  .back-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const categoryFilters = document.querySelectorAll('.category-filter');
  const postCards = document.querySelectorAll('.blog-post-card');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const postsShown = document.getElementById('posts-shown');
  const backToTopBtn = document.getElementById('back-to-top');
  let currentlyShown = 12;
  let currentCategory = 'all';
  
  // Category Filtering
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const selectedCategory = this.getAttribute('data-category');
      currentCategory = selectedCategory;
      
      // Update active filter
      categoryFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      // Reset pagination
      currentlyShown = 12;
      updatePostsShownCount();
      
      // Filter posts
      let visibleCount = 0;
      postCards.forEach(card => {
        const postCategories = card.getAttribute('data-categories');
        const shouldShow = selectedCategory === 'all' || (postCategories && postCategories.includes(selectedCategory));
        
        if (shouldShow) {
          visibleCount++;
          if (visibleCount <= currentlyShown) {
            card.style.display = 'block';
            card.classList.remove('hidden-post');
          } else {
            card.style.display = 'none';
            card.classList.add('hidden-post');
          }
        } else {
          card.style.display = 'none';
          card.classList.add('hidden-post');
        }
      });
      
      // Update load more button
      updateLoadMoreButton(visibleCount);
      
      // Animate filtered results
      setTimeout(() => {
        const visibleCards = document.querySelectorAll('.blog-post-card[style="display: block"]');
        visibleCards.forEach((card, index) => {
          card.style.animation = `fadeInUp 0.3s ease forwards ${index * 0.1}s`;
        });
      }, 50);
    });
  });
  
  // Load More Functionality
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      this.classList.add('loading');
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
      
      setTimeout(() => {
        const hiddenPosts = getFilteredHiddenPosts();
        const postsToShow = Math.min(6, hiddenPosts.length); // Load 6 more at a time
        
        for (let i = 0; i < postsToShow; i++) {
          hiddenPosts[i].style.display = 'block';
          hiddenPosts[i].classList.remove('hidden-post');
          hiddenPosts[i].style.animation = `fadeInUp 0.3s ease forwards ${i * 0.1}s`;
        }
        
        currentlyShown += postsToShow;
        updatePostsShownCount();
        updateLoadMoreButton(getFilteredPostsCount());
        
        this.classList.remove('loading');
        this.innerHTML = '<i class="fas fa-plus"></i> Load More Posts <span class="load-count">(' + getFilteredHiddenPosts().length + ' more)</span>';
      }, 500); // Small delay for better UX
    });
  }
  
  function getFilteredPostsCount() {
    let count = 0;
    postCards.forEach(card => {
      const postCategories = card.getAttribute('data-categories');
      if (currentCategory === 'all' || (postCategories && postCategories.includes(currentCategory))) {
        count++;
      }
    });
    return count;
  }
  
  function getFilteredHiddenPosts() {
    const hiddenPosts = [];
    postCards.forEach(card => {
      const postCategories = card.getAttribute('data-categories');
      const shouldShow = currentCategory === 'all' || (postCategories && postCategories.includes(currentCategory));
      if (shouldShow && card.style.display === 'none') {
        hiddenPosts.push(card);
      }
    });
    return hiddenPosts;
  }
  
  function updatePostsShownCount() {
    if (postsShown) {
      const totalFiltered = getFilteredPostsCount();
      const actuallyShown = Math.min(currentlyShown, totalFiltered);
      postsShown.textContent = actuallyShown;
    }
  }
  
  function updateLoadMoreButton(totalFilteredPosts) {
    if (loadMoreBtn) {
      const remainingPosts = Math.max(0, totalFilteredPosts - currentlyShown);
      if (remainingPosts > 0) {
        loadMoreBtn.style.display = 'flex';
        loadMoreBtn.querySelector('.load-count').textContent = `(${remainingPosts} more)`;
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }
  
  // Back to Top Button
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // CSS Animation for fade in
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});
</script>