/**
 * Firebase Testimonials Loader
 * Fetches testimonials from Firestore and renders them with rotation
 */

(async function loadTestimonials() {
  // Wait for Firebase to be ready
  if (!window.firebaseDb) {
    console.log('Firebase not ready for testimonials, retrying...');
    setTimeout(loadTestimonials, 100);
    return;
  }

  const testimonialContainer = document.getElementById('testimonial-display');
  if (!testimonialContainer) {
    console.log('Testimonial container not found on this page');
    return;
  }

  console.log('Loading testimonials from Firebase...');

  try {
    const db = window.firebaseDb;
    const testimonialRef = window.firebaseCollection(db, 'testimonials');
    const snapshot = await window.firebaseGetDocs(testimonialRef);

    console.log('Firebase testimonials snapshot:', snapshot.empty ? 'empty' : `${snapshot.size} items`);

    if (snapshot.empty) {
      testimonialContainer.innerHTML = '<div class="testimonial-item active"><p class="testimonial-quote">No testimonials available.</p></div>';
      return;
    }

    // Get all testimonials
    const testimonials = [];
    snapshot.forEach(doc => {
      const item = doc.data();
      // Only include active testimonials (or all if no isActive field)
      if (item.isActive !== false) {
        testimonials.push(item);
      }
    });

    // Sort by order if available
    testimonials.sort((a, b) => (a.order || 0) - (b.order || 0));

    console.log(`Rendering ${testimonials.length} testimonials`);

    // Render testimonials
    let html = '';
    testimonials.forEach((testimonial, index) => {
      const isActive = index === 0 ? ' active' : '';
      const name = testimonial.name || testimonial.author || 'Anonymous';
      const text = testimonial.text || testimonial.quote || '';

      html += `
        <div class="testimonial-item${isActive}" data-index="${index}">
          <blockquote class="testimonial-quote">"${text}"</blockquote>
          <cite class="testimonial-author">— ${name}</cite>
        </div>
      `;
    });

    testimonialContainer.innerHTML = html;

    // Initialize rotation
    initTestimonialRotation();

  } catch (error) {
    console.error('Error loading testimonials from Firebase:', error);
    testimonialContainer.innerHTML = '<div class="testimonial-item active"><p class="testimonial-quote">Unable to load testimonials.</p></div>';
  }
})();

function initTestimonialRotation() {
  const testimonials = document.querySelectorAll('.testimonial-item');
  if (testimonials.length <= 1) return;

  let currentIndex = 0;
  let autoRotate;

  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
    currentIndex = index;
  }

  function nextTestimonial() {
    const next = (currentIndex + 1) % testimonials.length;
    showTestimonial(next);
  }

  function startAutoRotate() {
    autoRotate = setInterval(nextTestimonial, 6000);
  }

  // Start auto rotation
  startAutoRotate();
}
