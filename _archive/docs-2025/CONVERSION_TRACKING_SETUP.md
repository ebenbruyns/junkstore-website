# Conversion Tracking Setup Guide

**Using your existing Google Tag Manager (GTM-5QM6MSX6) and Google Analytics 4 (G-E2Y00GCMSG)**

## What We Added

✅ **JavaScript tracking script** (`/assets/js/conversion-tracking.js`)
- Respects existing cookie consent (only runs if user accepted)
- Uses your existing GTM and GA4 setup
- No new user data collected
- No additional privacy concerns

✅ **Enhanced button tracking** on homepage pricing section
- Tracks "Start Free Trial" clicks as conversions
- Tracks secondary button engagement
- Provides context about where clicks happened

## Google Tag Manager Configuration

### Step 1: Create Goals in GA4 (Optional)
1. Go to Google Analytics 4 → Configure → Conversions
2. Click "New conversion event"
3. Add these event names as conversions:
   - `trial_signup` (primary conversion)
   - `form_submit` (secondary conversion)
   - `video_complete` (engagement conversion)

### Step 2: Verify Events Are Coming Through
1. Go to GA4 → Reports → Realtime
2. Test your site (make sure you accept cookies)
3. Click "Start Free Trial" button
4. Should see `trial_signup` event in realtime report

### Step 3: Set Up Custom Reports (Optional)
Create reports to track:
- **Homepage to trial conversion rate**
- **Mobile vs desktop performance**
- **Which content sections drive most conversions**

## What Gets Tracked

### Primary Conversions
- **Trial signup clicks** (`trial_signup` event)
- **Form submissions** (`form_submit` event)

### Engagement Metrics
- **Secondary button clicks** (gallery, comparison pages)
- **Video interactions** (play, complete)
- **Deep scroll engagement** (75% page scroll)
- **High-value page visits** (pricing, tutorials, FAQ)

### Context Data
- **Button location** (hero, pricing, features section)
- **Page context** (which page the conversion happened on)
- **User journey flow** (how they navigated before converting)

## Privacy Compliance

✅ **Same privacy controls apply:**
- Users who decline cookies = no tracking
- Users who accept cookies = enhanced insights
- No additional personal data collected
- Uses existing opt-out mechanisms

✅ **No changes needed to privacy policy** - we're using existing analytics more effectively

## What You'll Be Able to Measure

1. **Conversion Rate Optimization:**
   - Which homepage sections convert best
   - Mobile vs desktop conversion rates
   - Effect of messaging changes on signups

2. **Content Performance:**
   - Which pages lead to most trial signups
   - How tutorial engagement affects conversions
   - Video completion rates and impact

3. **User Journey Insights:**
   - Common paths to conversion
   - Where users drop off in the funnel
   - Most effective entry points

## Testing the Setup

1. **Accept cookies** on your site
2. **Click "Start Free Trial"** button
3. **Check GA4 Realtime** reports for `trial_signup` event
4. **Check GTM Preview** mode to see events firing

## Benefits

- **Strategic insights** without privacy concerns
- **Optimize conversion flow** based on data
- **Measure impact** of content changes
- **Improve user experience** based on behavior patterns

---

**This uses your existing tracking infrastructure more effectively - no new data collection or privacy implications.**