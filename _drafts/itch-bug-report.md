---
title: "itch.io Integration - Bug Report"
permalink: /itch-bug-report/
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

<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="bug-report-form">
  <h2>🐛 Report an itch.io Integration Bug</h2>
  <p><em>Thank you for taking the time to report this bug! Please provide as much detail as possible to help us reproduce and resolve the issue quickly.</em></p>
  
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

  <!-- Device Information -->
  <fieldset class="form-section">
    <legend><strong>Device Information</strong></legend>
    
    <div class="form-group">
      <label><strong>Device:</strong></label>
      <div class="checkbox-group">
        <label><input type="checkbox" name="device" value="Steam Deck"> Steam Deck</label>
        <label><input type="checkbox" name="device" value="ASUS ROG Ally"> ASUS ROG Ally</label>
        <label><input type="checkbox" name="device" value="Lenovo Legion Go"> Lenovo Legion Go</label>
        <label><input type="checkbox" name="device" value="GPD"> GPD</label>
        <label><input type="checkbox" name="device" value="AYA NEO"> AYA NEO</label>
        <label><input type="checkbox" name="device" value="Desktop PC"> Desktop PC</label>
        <label><input type="checkbox" name="device" value="Laptop"> Laptop</label>
        <label><input type="checkbox" name="device" value="Other handheld"> Other handheld</label>
        <label><input type="checkbox" name="device" value="Other"> Other</label>
      </div>
      <input type="text" name="device-specify" placeholder="Specify if 'Other handheld' or 'Other' selected" style="margin-top: 8px;">
    </div>

    <div class="form-group">
      <label><strong>Operating System:</strong></label>
      <div class="checkbox-group">
        <label><input type="checkbox" name="os" value="SteamOS"> SteamOS</label>
        <label><input type="checkbox" name="os" value="Bazzite"> Bazzite</label>
        <label><input type="checkbox" name="os" value="Ubuntu"> Ubuntu</label>
        <label><input type="checkbox" name="os" value="Arch Linux"> Arch Linux</label>
        <label><input type="checkbox" name="os" value="Fedora"> Fedora</label>
        <label><input type="checkbox" name="os" value="Other Linux"> Other Linux distribution</label>
      </div>
      <input type="text" name="os-specify" placeholder="Specify if 'Other Linux distribution' selected" style="margin-top: 8px;">
    </div>

    <div class="form-group">
      <label for="os-version"><strong>OS Version/Build:</strong></label>
      <input type="text" name="os-version" id="os-version" placeholder="e.g., SteamOS 3.5.7, Ubuntu 22.04">
    </div>
  </fieldset>

  <!-- Bug Description -->
  <fieldset class="form-section">
    <legend><strong>Bug Description</strong></legend>
    
    <div class="form-group">
      <label for="what-happened"><strong>What happened:</strong></label>
      <textarea name="what-happened" id="what-happened" rows="4" required 
                placeholder="Describe what happened versus what you expected to happen. Include any error messages you saw."></textarea>
    </div>
  </fieldset>

  <!-- Steps to Reproduce -->
  <fieldset class="form-section">
    <legend><strong>Steps to Reproduce</strong></legend>
    
    <div class="form-group">
      <label for="steps"><strong>Please list the exact steps someone else could follow to reproduce this bug:</strong></label>
      <textarea name="steps" id="steps" rows="6" required 
                placeholder="1. Open JunkStore 2.0 extension&#10;2. Navigate to '...'&#10;3. Click on '...'&#10;4. Enter/select '...'&#10;5. Observe the error/unexpected behavior"></textarea>
    </div>
  </fieldset>

  <!-- Expected vs Actual Behavior -->
  <fieldset class="form-section">
    <legend><strong>Expected vs Actual Behavior</strong></legend>
    
    <div class="form-group">
      <label for="expected-behavior"><strong>What should have happened:</strong></label>
      <textarea name="expected-behavior" id="expected-behavior" rows="3" required></textarea>
    </div>

    <div class="form-group">
      <label for="actual-behavior"><strong>What actually happened:</strong></label>
      <textarea name="actual-behavior" id="actual-behavior" rows="3" required></textarea>
    </div>
  </fieldset>

  <!-- itch.io Games Affected -->
  <fieldset class="form-section">
    <legend><strong>itch.io Games Affected</strong></legend>
    
    <div class="form-group">
      <label><strong>How many games are affected:</strong></label>
      <div class="radio-group">
        <label><input type="radio" name="games-affected" value="single"> Single game (specify below)</label>
        <label><input type="radio" name="games-affected" value="multiple"> Multiple games (list below)</label>
        <label><input type="radio" name="games-affected" value="all"> All itch.io games</label>
        <label><input type="radio" name="games-affected" value="none"> No specific games (general functionality issue)</label>
      </div>
      <textarea name="games-list" rows="3" placeholder="List specific games here if applicable" style="margin-top: 8px;"></textarea>
    </div>
  </fieldset>

  <!-- Error Messages/Logs -->
  <div class="form-group">
    <label for="error-messages"><strong>Error Messages/Logs:</strong></label>
    <textarea name="error-messages" id="error-messages" rows="4" 
              placeholder="Paste any error messages or relevant log output here"></textarea>
  </div>

  <!-- Screenshots -->
  <div class="form-group">
    <label for="screenshots"><strong>Screenshots:</strong></label>
    <textarea name="screenshots" id="screenshots" rows="2" 
              placeholder="If applicable, describe screenshots or paste image links here"></textarea>
  </div>

  <!-- Additional Context -->
  <div class="form-group">
    <label for="additional-context"><strong>Additional Context:</strong></label>
    <textarea name="additional-context" id="additional-context" rows="4" 
              placeholder="Add any other context about the problem here - device specifications, specific games affected, workarounds found, etc."></textarea>
  </div>

  <input type="hidden" name="_subject" value="itch.io Bug Report">
  <input type="hidden" name="_next" value="https://junkstore.xyz/itch-bug-thanks/">
  
  <button type="submit" class="btn btn--primary btn--large">Submit Bug Report</button>
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

.bug-report-form {
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

.bug-report-form .checkbox-group label,
.bug-report-form .radio-group label {
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

.bug-report-form .checkbox-group input[type="checkbox"],
.bug-report-form .checkbox-group input[type="radio"],
.bug-report-form .radio-group input[type="checkbox"],
.bug-report-form .radio-group input[type="radio"] {
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

.bug-report-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #ffa366;
}

.bug-report-form p {
  text-align: center;
  color: #ccc;
  margin-bottom: 30px;
  font-style: italic;
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