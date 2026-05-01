/**
 * Testimonial rotation
 *
 * Testimonials are rendered server-side from `_data/testimonials.yml` via the
 * `_includes/testimonials.html` Liquid loop, so they're in the DOM at first
 * paint with no CLS. This script just rotates which one has the `.active`
 * class every 6 seconds for the fade animation.
 *
 * (File still named `firebase-*` for now to keep its <script> tag stable;
 * Firebase fetching was removed when testimonials moved to static YAML.)
 */
(function initTestimonialRotation() {
  function start() {
    var testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length <= 1) return;

    var currentIndex = 0;
    function showNext() {
      testimonials[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % testimonials.length;
      testimonials[currentIndex].classList.add('active');
    }

    setInterval(showNext, 6000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
