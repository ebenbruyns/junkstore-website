---
layout: junkstore-splash
title: "Taking You to the Junk Store Portal"
description: "You're about to access the Junk Store Portal to start your free trial."
permalink: /portal-redirect/
header:
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/website_image_compressed.webp
  actions:
    - label: "Continue to Portal"
      url: "https://portal.junkstore.xyz"
      class: "button buy-button"
      id: "continueBtn"
excerpt: "You'll be redirected automatically, or click Continue to go now"
sitemap: false
---

<div class="interstitial-container">

  <div class="countdown-section">
    <span class="countdown-text">Redirecting in <span id="countdown">5</span> seconds...</span>
  </div>

  <p class="steps-intro" style="text-align: center;">What happens next:</p>

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

<style>
.interstitial-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

.steps-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.step-icon {
  width: 36px;
  height: 36px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
}

.step-label {
  color: #ccc;
  font-size: 0.85rem;
}

.step-arrow {
  color: #666;
  font-size: 1.25rem;
  margin: 0 0.25rem;
}

.countdown-section {
  text-align: center;
  margin-bottom: 1rem;
}

.skip-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

.countdown-text {
  color: #66bfff;
  font-size: 1rem;
}

#countdown {
  font-weight: bold;
}

.skip-checkbox {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #888;
  font-size: 0.85rem;
  cursor: pointer;
}

.skip-checkbox input {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.steps-intro {
  color: #aaa;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

@media (max-width: 480px) {
  .steps-container {
    gap: 0.5rem;
  }

  .step-icon {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }

  .step-label {
    font-size: 0.75rem;
  }

  .step-arrow {
    font-size: 1rem;
  }
}
</style>

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
