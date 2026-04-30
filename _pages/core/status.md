---
layout: junkstore-page
title: "Junk Store Pro Status"
description: "Junk Store Pro service status and uptime history for Steam Deck. Track our stability record, SteamOS update impact, and break history."
excerpt: "Service status and uptime record for Junk Store Pro on Steam Deck"
permalink: /status/
published: true
---

<div class="status-page">

<div class="status-card stable">
  <span class="status-badge stable">Stable</span>

  <div class="status-stats">
    <div class="status-stat">
      <div class="stat-number" id="status-days">--</div>
      <div class="stat-label">days stable</div>
    </div>
    <div class="status-stat">
      <div class="stat-number" id="status-updates-passed">--</div>
      <div class="stat-label" id="status-updates-passed-label">SteamOS updates passed</div>
    </div>
  </div>

  <div class="last-reset-info">
    <p id="status-steamos-line" style="display: none;"><span id="status-steamos-text"></span></p>
    <p><strong>Stable since:</strong> <span id="status-reset-date">Loading...</span></p>
    <p><strong>Last reset:</strong> <span id="status-reset-reason">Loading...</span></p>
  </div>
</div>

<div class="notes-section">
  <h2>Updates & Notes</h2>
  <p class="text-muted mb-2">
    Recent SteamOS and Junk Store updates that maintained compatibility.
  </p>

  <table id="notes-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="3" class="text-center text-muted">Loading...</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="history-section">
  <h2>Track Record</h2>

  <div id="track-record-clean" class="track-record-clean" style="display: none;">
    <p class="track-record-headline">
      <strong>Zero SteamOS-related breaks</strong> since
      <span id="track-record-since">launch</span>.
    </p>
    <p class="track-record-sub">
      If a future SteamOS update ever does affect Junk Store Pro, it'll be logged here
      together with the fix.
    </p>
  </div>

  <div id="track-record-stats" class="track-record-stats" style="display: none;">
    <div class="record-stat">
      <div class="record-stat__num" id="record-stat-breaks">--</div>
      <div class="record-stat__label">total breaks</div>
    </div>
    <div class="record-stat">
      <div class="record-stat__num" id="record-stat-longest">--</div>
      <div class="record-stat__label">longest stable streak (days)</div>
    </div>
    <div class="record-stat">
      <div class="record-stat__num" id="record-stat-percent">--</div>
      <div class="record-stat__label">days stable since launch</div>
    </div>
  </div>

  <table id="break-history-table" style="display: none;">
    <thead>
      <tr>
        <th>Date</th>
        <th>SteamOS</th>
        <th>Issue</th>
        <th>Fixed In</th>
        <th>Days Stable</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="5" class="text-center text-muted">Loading...</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="info-section">
  <h3>About this tracker</h3>
  <p>
    Junk Store Pro runs its own UI and navigation stack with very few touch points on Steam itself.
    No third-party app on Steam Deck is completely safe from updates, so we keep an honest record
    here of how we're holding up. When something does break, fixing it is our top priority.
  </p>
</div>

</div>
