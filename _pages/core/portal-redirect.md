---
layout: splash
title: "Taking You to the Portal"
description: "You're about to access the Junk Store Portal to start your free trial."
permalink: /portal-redirect/
header:
  overlay_color: "#000"
  overlay_filter: "0.7"
  overlay_image: /assets/images/website_image_compressed.webp
sitemap: false
---

<div class="interstitial-container">
  <h1>Taking you to the Junk Store Portal...</h1>

  <div class="steps-container">
    <div class="step">
      <div class="step-icon">1</div>
      <div class="step-text">
        <strong>Create your account</strong>
        <span>Quick signup with email</span>
      </div>
    </div>

    <div class="step">
      <div class="step-icon">2</div>
      <div class="step-text">
        <strong>Download the app</strong>
        <span>Get Junk Store Pro for Steam Deck</span>
      </div>
    </div>

    <div class="step">
      <div class="step-icon">3</div>
      <div class="step-text">
        <strong>Start playing</strong>
        <span>Your games in Game Mode in minutes</span>
      </div>
    </div>
  </div>

  <div class="redirect-section">
    <p class="countdown-text">Redirecting in <span id="countdown">5</span> seconds...</p>

    <a href="https://portal.junkstore.xyz" id="continueBtn" class="button buy-button large">Continue to Portal</a>

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
  padding: 2rem 1rem;
  text-align: center;
}

.interstitial-container h1 {
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: #fff;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  text-align: left;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.25rem;
}

.step-icon {
  width: 40px;
  height: 40px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  color: #fff;
  flex-shrink: 0;
}

.step-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.step-text strong {
  color: #fff;
  font-size: 1.1rem;
}

.step-text span {
  color: #aaa;
  font-size: 0.9rem;
}

.redirect-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.countdown-text {
  color: #66bfff;
  font-size: 1.1rem;
  margin: 0;
}

#countdown {
  font-weight: bold;
  font-size: 1.3rem;
}

.button.large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.skip-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.skip-checkbox input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .interstitial-container h1 {
    font-size: 1.4rem;
  }

  .step {
    padding: 0.875rem 1rem;
  }

  .step-icon {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }

  .step-text strong {
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
  const countdownEl = document.getElementById('countdown');
  const continueBtn = document.getElementById('continueBtn');
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

  // Continue button click
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
