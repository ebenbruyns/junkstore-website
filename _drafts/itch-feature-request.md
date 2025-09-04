---
title: "itch.io Integration - Feature Request"
permalink: /itch-feature-request/
layout: single
published: false
search: false
---

<div class="github-option">
  <p><strong>Prefer GitHub?</strong> 
  <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues" class="btn btn--secondary">
    Create Issue on GitHub
  </a></p>
</div>

<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="feature-request-form">
  <h2>💡 Request an itch.io Integration Feature</h2>
  
  <!-- Contact Information -->
  <div class="form-group">
    <label for="contact-method"><strong>How can we reach you?</strong> (optional - only if you want updates)</label>
    <select name="contact-method" id="contact-method">
      <option value="">I don't need updates</option>
      <option value="discord">Discord username</option>
      <option value="reddit">Reddit username</option>
      <option value="email">Email address</option>
    </select>
  </div>

  <div class="form-group">
    <label for="contact-info"><strong>Contact Info</strong> (optional)</label>
    <input type="text" name="contact-info" id="contact-info" 
           placeholder="Only fill if you selected an option above">
  </div>

  <!-- Feature Summary -->
  <fieldset class="form-section">
    <legend><strong>Feature Summary</strong></legend>
    
    <div class="form-group">
      <label for="feature-summary"><strong>Brief description of the feature:</strong></label>
      <input type="text" name="feature-summary" id="feature-summary" required
             placeholder="e.g., Support for Linux native itch games">
    </div>
  </fieldset>

  <!-- Problem/Use Case -->
  <fieldset class="form-section">
    <legend><strong>Problem/Use Case</strong></legend>
    
    <div class="form-group">
      <label for="problem-description"><strong>What problem would this feature solve?</strong></label>
      <textarea name="problem-description" id="problem-description" rows="6" required 
                placeholder="Currently, when I try to [specific task], I have to [current workaround] which is [problematic/time-consuming] because [specific reason]. This affects my workflow by [impact description]."></textarea>
    </div>
  </fieldset>

  <!-- Proposed Solution -->
  <fieldset class="form-section">
    <legend><strong>Proposed Solution</strong></legend>
    
    <div class="form-group">
      <label for="proposed-solution"><strong>How should this feature work?</strong></label>
      <textarea name="proposed-solution" id="proposed-solution" rows="6" required 
                placeholder="I propose adding [specific feature] that would allow users to [functionality]. This could work by [detailed description of how it would function]. Users would benefit because [specific advantages]."></textarea>
    </div>
  </fieldset>

  <!-- Feature Scope -->
  <fieldset class="form-section">
    <legend><strong>Feature Scope</strong></legend>
    
    <div class="form-group">
      <label><strong>How would you categorize this feature request:</strong></label>
      <div class="checkbox-group">
        <label><input type="checkbox" name="feature-scope" value="itch.io integration improvement"> itch.io integration improvement</label>
        <label><input type="checkbox" name="feature-scope" value="Quality of life improvement"> Quality of life improvement</label>
        <label><input type="checkbox" name="feature-scope" value="Other"> Other (specify below)</label>
      </div>
      <input type="text" name="feature-scope-other" placeholder="Specify if 'Other' selected" style="margin-top: 8px;">
    </div>
  </fieldset>

  <!-- Priority Level -->
  <fieldset class="form-section">
    <legend><strong>Priority Level</strong></legend>
    
    <div class="form-group">
      <label><strong>How important is this feature to your workflow:</strong></label>
      <div class="radio-group">
        <label><input type="radio" name="priority" value="critical" required> Critical - I can't use the itch extension effectively without this</label>
        <label><input type="radio" name="priority" value="high" required> High - This would significantly improve my experience</label>
        <label><input type="radio" name="priority" value="medium" required> Medium - This would be a nice addition</label>
        <label><input type="radio" name="priority" value="low" required> Low - This is a minor convenience</label>
      </div>
    </div>
  </fieldset>

  <!-- Additional Context -->
  <div class="form-group">
    <label for="additional-context"><strong>Additional Context:</strong></label>
    <textarea name="additional-context" id="additional-context" rows="4" 
              placeholder="Add any other context, mockups, screenshots, or examples that would help illustrate your request"></textarea>
  </div>

  <input type="hidden" name="_subject" value="itch.io Feature Request">
  <input type="hidden" name="_next" value="https://junkstore.xyz/itch-feature-thanks/">
  
  <button type="submit" class="btn btn--primary btn--large">Submit Feature Request</button>
</form>

<style>
.github-option {
  background: #333;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: center;
}

.github-option p {
  margin: 0;
  color: #ffa366;
}

.btn--secondary {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  margin-left: 10px;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn--secondary:hover {
  background: #555;
  transform: translateY(-1px);
}

.feature-request-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-section {
  border: 1px solid #444;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  background: #1a1a1a;
}

.form-section legend {
  color: #ffa366;
  font-weight: 600;
  font-size: 16px;
  padding: 0 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #ffa366;
  font-weight: 600;
}

.feature-request-form .checkbox-group label,
.feature-request-form .radio-group label {
  display: flex !important;
  align-items: flex-start !important;
  margin-bottom: 8px;
  font-weight: normal !important;
  color: #fff !important;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}

.feature-request-form .checkbox-group input[type="checkbox"],
.feature-request-form .checkbox-group input[type="radio"],
.feature-request-form .radio-group input[type="checkbox"],
.feature-request-form .radio-group input[type="radio"] {
  width: auto !important;
  height: auto !important;
  margin: 0 8px 0 0 !important;
  padding: 0 !important;
  flex-shrink: 0;
  min-width: 16px;
  position: relative;
  vertical-align: baseline !important;
  line-height: 1 !important;
  display: inline-block !important;
  transform: translateY(7px) !important;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #444;
  background: #222;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ffa366;
}

.feature-request-form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #ffa366;
}

.btn {
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--primary {
  background: linear-gradient(135deg, #ffa366, #ff8c42);
  color: #000;
}

.btn--primary:hover {
  background: linear-gradient(135deg, #ff8c42, #ffa366);
  transform: translateY(-2px);
}
</style>