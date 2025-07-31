/**
 * Enhanced Conversion Tracking for Junk Store
 * Uses existing Google Tag Manager - no new user data collected
 * Respects existing cookie consent preferences
 */

// Only load if user has consented to analytics (respects existing privacy settings)
window.addEventListener('load', function() {
  // Check if GTM is loaded (means user consented)
  if (typeof dataLayer !== 'undefined') {
    setupConversionTracking();
  }
});

function setupConversionTracking() {
  // Track primary conversion buttons
  trackButtons('.buy-button', 'conversion', 'trial_signup');
  
  // Track secondary engagement buttons
  trackButtons('.button-secondary', 'engagement', 'explore_features');
  
  // Track navigation to key pages
  trackPageViews();
  
  // Track video interactions if present
  trackVideoInteractions();
  
  // Track form interactions
  trackFormInteractions();
}

function trackButtons(selector, category, action) {
  document.querySelectorAll(selector).forEach(function(button) {
    button.addEventListener('click', function(e) {
      var label = getButtonLabel(this);
      
      // Send event to existing Google Tag Manager
      if (typeof gtag !== 'undefined') {
        gtag('event', action, {
          'event_category': category,
          'event_label': label,
          'page_location': window.location.href,
          'page_title': document.title
        });
      }
      
      // Also send to dataLayer for GTM
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
          'event': 'button_click',
          'button_category': category,
          'button_action': action,
          'button_label': label,
          'page_location': window.location.href
        });
      }
    });
  });
}

function getButtonLabel(button) {
  // Determine context based on page section
  var section = 'unknown';
  var buttonText = button.textContent.trim().toLowerCase().replace(/\s+/g, '_');
  
  // Find parent section
  var parent = button.closest('section, .pricing-highlight, header');
  if (parent) {
    if (parent.classList.contains('pricing-highlight')) section = 'pricing';
    else if (parent.tagName === 'HEADER') section = 'hero';
    else if (parent.classList.contains('key-features')) section = 'features';
    else section = 'content';
  }
  
  return section + '_' + buttonText;
}

function trackPageViews() {
  // Track high-value page visits
  var highValuePages = ['/buy_now/', '/gallery/', '/comparison/', '/tutorials/', '/faq/'];
  var currentPath = window.location.pathname;
  
  if (highValuePages.some(page => currentPath.includes(page))) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view_high_value', {
        'event_category': 'engagement',
        'event_label': currentPath,
        'page_location': window.location.href
      });
    }
  }
}

function trackVideoInteractions() {
  // Track video play/completion if videos are present
  document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]').forEach(function(video) {
    if (video.tagName === 'VIDEO') {
      video.addEventListener('play', function() {
        trackVideoEvent('play', this.src || 'embedded_video');
      });
      
      video.addEventListener('ended', function() {
        trackVideoEvent('complete', this.src || 'embedded_video');
      });
    }
  });
}

function trackVideoEvent(action, videoSrc) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'video_' + action, {
      'event_category': 'engagement',
      'event_label': videoSrc,
      'page_location': window.location.href
    });
  }
}

function trackFormInteractions() {
  // Track form submissions and newsletter signups
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      var formType = this.id || this.className || 'unknown_form';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'conversion',
          'event_label': formType,
          'page_location': window.location.href
        });
      }
    });
  });
}

// Track scroll depth for engagement measurement
var scrollTracked = false;
window.addEventListener('scroll', function() {
  if (!scrollTracked && window.scrollY > (document.body.scrollHeight * 0.75)) {
    scrollTracked = true;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'scroll_depth_75', {
        'event_category': 'engagement',
        'event_label': 'deep_engagement',
        'page_location': window.location.href
      });
    }
  }
});