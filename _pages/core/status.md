---
layout: junkstore-page
title: "Junk Store Pro Status"
description: "Junk Store Pro service status and uptime history for Steam Deck. Track our stability record, SteamOS update impact, and break history."
excerpt: "Service status and uptime record for Junk Store Pro on Steam Deck"
permalink: /status/
---

<style>
.page__title {
  text-align: center;
}

.status-card {
  background: linear-gradient(135deg, #1a1d24 0%, #252a34 100%);
  border: 2px solid #2ecc71;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.status-card.stable {
  border-color: #2ecc71;
}

.status-card.unstable {
  border-color: #e74c3c;
}

.status-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.status-badge.stable {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
}

.status-badge.unstable {
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
}

.days-count {
  font-size: 4rem;
  font-weight: bold;
  color: #2ecc71;
  line-height: 1;
  margin: 0.5rem 0;
}

.days-label {
  font-size: 1.2rem;
  color: #aaa;
}

.last-reset-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.last-reset-info p {
  margin: 0.25rem 0;
  color: #888;
}

.last-reset-info strong {
  color: #ccc;
}

.history-section {
  margin-top: 3rem;
}

.history-section h2 {
  color: #e67300;
  border-bottom: 2px solid #444;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

#break-history-table {
  width: 100%;
  border-collapse: collapse;
}

#break-history-table th {
  background: #252a34;
  color: #e67300;
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 2px solid #444;
}

#break-history-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  color: #ccc;
}

#break-history-table tr:hover td {
  background: rgba(255,255,255,0.05);
}

.info-section {
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(230, 115, 0, 0.1);
  border-left: 4px solid #e67300;
  border-radius: 0 8px 8px 0;
}

.info-section h3 {
  color: #e67300;
  margin-top: 0;
}

.info-section p {
  color: #aaa;
  margin-bottom: 0;
}
</style>

<div class="status-card stable">
  <span class="status-badge stable">Stable</span>
  <div class="days-count" id="status-days">--</div>
  <div class="days-label">days since last SteamOS-related issue</div>

  <div class="last-reset-info">
    <p><strong>Last Reset:</strong> <span id="status-reset-date">Loading...</span></p>
    <p><strong>Reason:</strong> <span id="status-reset-reason">Loading...</span></p>
    <p><strong>SteamOS Version:</strong> <span id="status-steamos-version">Loading...</span></p>
  </div>
</div>

<div class="history-section">
  <h2>Break History</h2>
  <p style="color: #888; margin-bottom: 1rem;">
    A record of times when SteamOS updates caused compatibility issues with Junk Store Pro.
  </p>

  <table id="break-history-table">
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
        <td colspan="4" class="text-center" style="color: #888;">Loading...</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="info-section">
  <h3>About This Tracker</h3>
  <p>
    SteamOS updates occasionally introduce changes that affect third-party applications like Junk Store.
    This tracker monitors our compatibility and helps the community understand our stability over time.
    When issues occur, we work quickly to release fixes, usually within hours of discovering the problem.
  </p>
</div>
