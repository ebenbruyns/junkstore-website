---
layout: junkstore-splash
title: "Taking You to the Junk Store Portal"
description: "You're about to access the Junk Store Portal to start your free trial."
permalink: /portal-redirect/
excerpt: "You'll be redirected automatically, or click Continue to go now"
sitemap: false
---

<div class="interstitial-container">

  <div class="countdown-section">
    <span class="countdown-text">Redirecting in <span id="countdown">5</span> seconds...</span>
  </div>

  <p class="steps-intro">What happens next:</p>

  <div class="steps-container">
    <div class="step">
      <div class="step-icon">1</div>
      <div class="step-label">Create account</div>
    </div>
    <div class="step-arrow">→</div>
    <div class="step">
      <div class="step-icon">2</div>
      <div class="step-label">Download app</div>
    </div>
    <div class="step-arrow">→</div>
    <div class="step">
      <div class="step-icon">3</div>
      <div class="step-label">Start playing</div>
    </div>
  </div>

  <div class="skip-section">
    <label class="skip-checkbox">
      <input type="checkbox" id="skipNextTime">
      Don't show this again
    </label>
  </div>

</div>

<script>
(function() {
  const PORTAL_URL = 'https://portal.junkstore.xyz';
  const STORAGE_KEY = 'junkstore_skip_interstitial';

  // Check if user opted to skip
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    window.location.href = PORTAL_URL;
    return;
  }

  // Countdown logic
  let seconds = 5;
  const countdownEl = document.querySelector('#countdown');
  const continueBtn = document.querySelector('.page__hero-actions .button');
  const skipCheckbox = document.getElementById('skipNextTime');

  const timer = setInterval(function() {
    seconds--;
    if (countdownEl) {
      countdownEl.textContent = seconds;
    }

    if (seconds <= 0) {
      clearInterval(timer);
      savePreferenceAndRedirect();
    }
  }, 1000);

  // Continue button click (hero button)
  if (continueBtn) {
    continueBtn.addEventListener('click', function(e) {
      e.preventDefault();
      clearInterval(timer);
      savePreferenceAndRedirect();
    });
  }

  function savePreferenceAndRedirect() {
    if (skipCheckbox && skipCheckbox.checked) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    window.location.href = PORTAL_URL;
  }
})();
</script>
