/**
 * Firebase Pricing Loader
 * Fetches pricing config from Firestore and updates page elements dynamically
 *
 * Usage: Add data attributes to elements you want updated:
 *   data-pricing="price"        → $40 (with currency symbol)
 *   data-pricing="price-only"   → 40 (number only)
 *   data-pricing="trial"        → 7-day free trial
 *   data-pricing="trial-days"   → 7
 *   data-pricing="currency"     → $ (symbol only)
 *   data-pricing="portal-url"   → https://portal.junkstore.xyz
 *   data-pricing="weekly"       → Less than $1 (calculated from annual/52)
 *
 * Coupon elements (only shown if coupon is active):
 *   data-pricing="coupon-code"     → SAVE20
 *   data-pricing="coupon-discount" → 20% off
 *   data-pricing="coupon-desc"     → Sale description
 *   data-pricing="discounted"      → $32 (price after discount)
 *   data-pricing="original-crossed" → <s>$40</s> $32
 *
 * Promotion elements (scheduled promotions with auto-revert):
 *   data-pricing="promo-desc"      → Holiday Special! (shown if promo active)
 */

(async function loadPricing() {
  // Wait for Firebase to be ready
  if (!window.firebaseDb || !window.firebaseDoc || !window.firebaseGetDoc) {
    setTimeout(loadPricing, 100);
    return;
  }

  try {
    const db = window.firebaseDb;
    const pricingRef = window.firebaseDoc(db, 'config', 'pricing');
    const snapshot = await window.firebaseGetDoc(pricingRef);

    if (!snapshot.exists()) {
      console.warn('Pricing config not found in Firebase');
      return;
    }

    const pricing = snapshot.data();
    const symbol = pricing.currency_symbol || '$';
    let price = pricing.annual_price || 40;
    let trialDays = pricing.trial_days || 7;
    const portalUrl = pricing.portal_url || 'https://portal.junkstore.xyz';
    const coupon = pricing.coupon || {};
    const promotion = pricing.promotion || {};

    // Check if promotion is active and within date range
    let promoActive = false;
    let promoDesc = '';
    if (promotion.isActive) {
      const now = new Date();
      const startDate = promotion.startDate ? new Date(promotion.startDate) : null;
      const endDate = promotion.endDate ? new Date(promotion.endDate) : null;

      // Promotion is active if:
      // - No dates set (always active when enabled), or
      // - Current time is between start and end dates
      if (!startDate && !endDate) {
        promoActive = true;
      } else if (startDate && endDate && now >= startDate && now <= endDate) {
        promoActive = true;
      } else if (startDate && !endDate && now >= startDate) {
        promoActive = true;
      } else if (!startDate && endDate && now <= endDate) {
        promoActive = true;
      }

      if (promoActive) {
        // Apply promotional overrides
        if (promotion.trial_days) trialDays = promotion.trial_days;
        if (promotion.annual_price) price = promotion.annual_price;
        promoDesc = promotion.description || '';
        console.log('Promotion active:', { trialDays, price, promoDesc });
      }
    }

    // Calculate weekly price
    const weeklyPrice = Math.floor(price / 52);

    // Check if coupon is active and not expired
    let couponActive = coupon.isActive === true;
    if (couponActive && coupon.expiresAt) {
      const expiryDate = new Date(coupon.expiresAt);
      if (new Date() > expiryDate) {
        couponActive = false;
      }
    }

    // Calculate discounted price
    const discountPercent = coupon.discount_percent || 0;
    const discountedPrice = couponActive ? Math.round(price * (1 - discountPercent / 100)) : price;

    // Update all elements with data-pricing attribute
    document.querySelectorAll('[data-pricing]').forEach(el => {
      const type = el.getAttribute('data-pricing');

      switch (type) {
        case 'price':
          el.textContent = `${symbol}${price}`;
          break;
        case 'price-only':
          el.textContent = price;
          break;
        case 'trial':
          el.textContent = `${trialDays}-day free trial`;
          break;
        case 'trial-days':
          el.textContent = trialDays;
          break;
        case 'currency':
          el.textContent = symbol;
          break;
        case 'portal-url':
          if (el.tagName === 'A') {
            el.href = portalUrl;
          } else {
            el.textContent = portalUrl;
          }
          break;
        case 'weekly':
          el.textContent = `Less than ${symbol}${weeklyPrice}`;
          break;
        case 'coupon-code':
          if (couponActive && coupon.code) {
            el.textContent = coupon.code;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
        case 'coupon-discount':
          if (couponActive && discountPercent > 0) {
            el.textContent = `${discountPercent}% off`;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
        case 'coupon-desc':
          if (couponActive && coupon.description) {
            el.textContent = coupon.description;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
        case 'discounted':
          if (couponActive && discountPercent > 0) {
            el.textContent = `${symbol}${discountedPrice}`;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
        case 'original-crossed':
          if (couponActive && discountPercent > 0) {
            el.innerHTML = `<s style="opacity: 0.6">${symbol}${price}</s> ${symbol}${discountedPrice}`;
          } else {
            el.textContent = `${symbol}${price}`;
          }
          break;
        case 'promo-desc':
          if (promoActive && promoDesc) {
            el.textContent = promoDesc;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
      }
    });

    // Show/hide coupon containers
    document.querySelectorAll('[data-coupon-container]').forEach(el => {
      el.style.display = couponActive ? '' : 'none';
    });

    // Show/hide promo containers
    document.querySelectorAll('[data-promo-container]').forEach(el => {
      el.style.display = promoActive ? '' : 'none';
    });

    // Update portal links
    document.querySelectorAll('a[href*="portal.junkstore"]').forEach(link => {
      link.href = portalUrl;
    });

    console.log('Pricing loaded from Firebase:', { price, trialDays, couponActive, promoActive });

  } catch (error) {
    console.error('Error loading pricing:', error);
  }
})();
