/**
 * Junk Store Conversion Tracking
 * Tracks meaningful user actions to understand what drives trial signups
 * Only runs when user has accepted cookies (GTM loaded)
 */

window.addEventListener('load', function() {
  // Only track if user consented (dataLayer exists from GTM)
  if (typeof dataLayer !== 'undefined') {
    initTracking();
  }
});

function initTracking() {
  trackTrialButtons();
  trackNavigationIntent();
  trackContentEngagement();
  trackHelpUsage();
}

/**
 * CONVERSION TRACKING
 * Track all paths to trial signup
 */
function trackTrialButtons() {
  // Primary CTA buttons - "Try Free" / "Get Started" / "Buy Now"
  var ctaSelectors = [
    { selector: '.buy-button', location: 'unknown' },
    { selector: 'a[href*="/buy_now"]', location: 'unknown' },
    { selector: 'a[href*="/get_started"]', location: 'unknown' },
    { selector: '.inline-blog-cta-button', location: 'blog_cta' }
  ];

  ctaSelectors.forEach(function(cta) {
    document.querySelectorAll(cta.selector).forEach(function(btn) {
      btn.addEventListener('click', function() {
        var location = getButtonLocation(this) || cta.location;

        pushEvent('cta_click', {
          'cta_text': this.textContent.trim().substring(0, 50),
          'cta_location': location,
          'page_path': window.location.pathname
        });
      });
    });
  });
}

/**
 * INTENT TRACKING
 * Track which pages people visit (shows purchase intent)
 */
function trackNavigationIntent() {
  var intentPages = {
    '/buy_now/': 'high_intent',
    '/get_started/': 'high_intent',
    '/pricing/': 'high_intent',
    '/comparison/': 'comparing_options',
    '/gallery/': 'exploring_features',
    '/tutorials/': 'learning',
    '/help/': 'needs_help',
    '/faq/': 'has_questions',
    '/tested-games/': 'checking_compatibility'
  };

  var path = window.location.pathname;

  for (var page in intentPages) {
    if (path.includes(page)) {
      pushEvent('page_intent', {
        'intent_type': intentPages[page],
        'page_path': path
      });
      break;
    }
  }
}

/**
 * ENGAGEMENT TRACKING
 * Track how deeply people engage with content
 */
function trackContentEngagement() {
  // Scroll depth tracking
  var scrollMilestones = [25, 50, 75, 90];
  var scrollTracked = {};

  window.addEventListener('scroll', function() {
    var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

    scrollMilestones.forEach(function(milestone) {
      if (scrollPercent >= milestone && !scrollTracked[milestone]) {
        scrollTracked[milestone] = true;
        pushEvent('scroll_depth', {
          'depth_percent': milestone,
          'page_path': window.location.pathname
        });
      }
    });
  });

  // Time on page tracking (30s, 60s, 120s)
  var timeOnPage = 0;
  var timeTracked = {};
  var timeMilestones = [30, 60, 120];

  setInterval(function() {
    timeOnPage++;
    timeMilestones.forEach(function(seconds) {
      if (timeOnPage === seconds && !timeTracked[seconds]) {
        timeTracked[seconds] = true;
        pushEvent('time_on_page', {
          'seconds': seconds,
          'page_path': window.location.pathname
        });
      }
    });
  }, 1000);

  // Video plays
  document.querySelectorAll('video').forEach(function(video) {
    video.addEventListener('play', function() {
      pushEvent('video_play', {
        'video_src': this.src || 'embedded',
        'page_path': window.location.pathname
      });
    });
  });
}

/**
 * HELP/SUPPORT TRACKING
 * Track what help content people use (identifies pain points)
 */
function trackHelpUsage() {
  // FAQ accordion opens
  document.querySelectorAll('.faq-question, .category-header').forEach(function(el) {
    el.addEventListener('click', function() {
      var questionText = this.textContent.trim().substring(0, 100);
      pushEvent('faq_open', {
        'question': questionText,
        'page_path': window.location.pathname
      });
    });
  });

  // Tutorial clicks
  document.querySelectorAll('.tutorial-item a, .tip-item a').forEach(function(link) {
    link.addEventListener('click', function() {
      pushEvent('tutorial_click', {
        'tutorial_title': this.textContent.trim().substring(0, 100),
        'page_path': window.location.pathname
      });
    });
  });

  // Search usage
  var searchInput = document.querySelector('#faq-search, .search-input, [type="search"]');
  if (searchInput) {
    var searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      var query = this.value;
      searchTimeout = setTimeout(function() {
        if (query.length > 2) {
          pushEvent('help_search', {
            'search_query': query.substring(0, 100),
            'page_path': window.location.pathname
          });
        }
      }, 1000); // Wait 1s after typing stops
    });
  }
}

/**
 * HELPER FUNCTIONS
 */
function getButtonLocation(button) {
  // Determine where on the page the button is
  var parent = button.closest('section, header, footer, .hero, .pricing-section, .pricing-highlight, .inline-blog-cta');

  if (!parent) return 'unknown';

  if (parent.classList.contains('hero') || parent.tagName === 'HEADER') return 'hero';
  if (parent.classList.contains('pricing-section') || parent.classList.contains('pricing-highlight')) return 'pricing';
  if (parent.classList.contains('inline-blog-cta')) return 'blog_inline_cta';
  if (parent.tagName === 'FOOTER') return 'footer';

  // Check by section ID or class
  var id = parent.id || '';
  if (id.includes('feature')) return 'features';
  if (id.includes('testimonial')) return 'testimonials';

  return 'content';
}

function pushEvent(eventName, eventData) {
  // Send to GTM dataLayer
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      'event': eventName,
      ...eventData
    });
  }

  // Debug logging (remove in production or keep for troubleshooting)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('📊 Event:', eventName, eventData);
  }
}
