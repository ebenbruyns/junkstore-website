/**
 * Pricing renderer
 *
 * Reads pricing config from `window.JS_PRICING` (injected synchronously in
 * <head> by _includes/pricing-config.html, sourced from _data/pricing.yml)
 * and updates all `data-pricing="..."` elements on the page.
 *
 * Originally fetched from Firebase; moved to static YAML so prices render at
 * first paint with no flicker. Date-based promotion/coupon active-checks still
 * happen client-side because the page might be cached when a promo starts/ends.
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

(function applyPricing() {
  function run() {
    var pricing = window.JS_PRICING;
    if (!pricing) {
      console.warn('window.JS_PRICING not set — pricing-config include missing from <head>');
      return;
    }

    var symbol = pricing.currency_symbol || '$';
    var price = pricing.annual_price || 40;
    var trialDays = pricing.trial_days || 7;
    var portalUrl = pricing.portal_url || 'https://portal.junkstore.xyz';
    var coupon = pricing.coupon || {};
    var promotion = pricing.promotion || {};

    // Promotion: active if isActive AND within date window (or no dates set)
    var promoActive = false;
    var promoDesc = '';
    if (promotion.isActive) {
      var now = new Date();
      var startDate = promotion.startDate ? new Date(promotion.startDate) : null;
      var endDate = promotion.endDate ? new Date(promotion.endDate) : null;

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
        if (promotion.trial_days) trialDays = promotion.trial_days;
        if (promotion.annual_price) price = promotion.annual_price;
        promoDesc = promotion.description || '';
      }
    }

    var weeklyPrice = Math.floor(price / 52);

    // Coupon: active if isActive flag set AND not expired
    var couponActive = coupon.isActive === true;
    if (couponActive && coupon.expiresAt) {
      if (new Date() > new Date(coupon.expiresAt)) couponActive = false;
    }

    var discountPercent = coupon.discount_percent || 0;
    var discountedPrice = couponActive ? Math.round(price * (1 - discountPercent / 100)) : price;

    document.querySelectorAll('[data-pricing]').forEach(function (el) {
      var type = el.getAttribute('data-pricing');

      switch (type) {
        case 'price':
          el.textContent = symbol + price;
          break;
        case 'price-only':
          el.textContent = price;
          break;
        case 'trial':
          el.textContent = trialDays + '-day free trial';
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
          el.textContent = 'Less than ' + symbol + weeklyPrice;
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
            el.textContent = discountPercent + '% off';
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
            el.textContent = symbol + discountedPrice;
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
          break;
        case 'original-crossed':
          if (couponActive && discountPercent > 0) {
            el.innerHTML = '<s style="opacity: 0.6">' + symbol + price + '</s> ' + symbol + discountedPrice;
          } else {
            el.textContent = symbol + price;
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

    document.querySelectorAll('[data-coupon-container]').forEach(function (el) {
      el.style.display = couponActive ? '' : 'none';
    });

    document.querySelectorAll('[data-promo-container]').forEach(function (el) {
      el.style.display = promoActive ? '' : 'none';
    });

    document.querySelectorAll('a[href*="portal.junkstore"]').forEach(function (link) {
      link.href = portalUrl;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
