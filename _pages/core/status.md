---
layout: junkstore-page
title: "Junk Store Pro Status"
description: "Junk Store Pro service status and uptime history for Steam Deck. Track our stability record, SteamOS update impact, and break history."
excerpt: "Service status and uptime record for Junk Store Pro on Steam Deck"
permalink: /status/
published: true
---

{%- assign uptime = site.data.uptime -%}
{%- assign reset_seconds = uptime.lastResetDate | date: "%s" | plus: 0 -%}
{%- assign now_seconds = "now" | date: "%s" | plus: 0 -%}
{%- assign diff_seconds = now_seconds | minus: reset_seconds -%}
{%- assign days_at_build = diff_seconds | divided_by: 86400 -%}

{%- comment -%}
  Count Steam Client Stable updates posted after the reset. Steam Client Stable
  releases are the highest-impact updates (they reach the public stable channel
  on every Deck), so this is the metric we headline. SteamOS updates — and
  client betas — are tracked separately via the notes table below but don't
  contribute to this counter.
{%- endcomment -%}
{%- assign stable_passed = 0 -%}
{%- for note in uptime.notes -%}
  {%- if note.type == "client-stable" -%}
    {%- assign n_seconds = note.date | date: "%s" | plus: 0 -%}
    {%- if n_seconds > reset_seconds -%}
      {%- assign stable_passed = stable_passed | plus: 1 -%}
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}

{%- comment -%} Filter break history: drop empty/null entries (legacy data noise) {%- endcomment -%}
{%- assign valid_breaks = "" | split: "" -%}
{%- for entry in uptime.breakHistory -%}
  {%- if entry.date and entry.date != "" -%}
    {%- assign valid_breaks = valid_breaks | push: entry -%}
  {%- endif -%}
{%- endfor -%}

{%- comment -%} Sort notes most-recent-first {%- endcomment -%}
{%- assign sorted_notes = uptime.notes | sort: "date" | reverse -%}

<div class="status-page">

<div class="status-card stable">
  <span class="status-badge stable">Stable</span>

  <div class="status-stats">
    <div class="status-stat">
      <div class="stat-number"
           data-status-days
           data-reset-date="{{ uptime.lastResetDate }}">{{ days_at_build }}</div>
      <div class="stat-label">days stable</div>
    </div>
    <div class="status-stat">
      <div class="stat-number">{{ stable_passed }}</div>
      <div class="stat-label">Steam Client update{% if stable_passed != 1 %}s{% endif %} passed</div>
    </div>
  </div>

  <div class="last-reset-info">
    <p id="status-steamos-line">
      <span data-status-steamos-text><strong>SteamOS:</strong> {{ uptime.steamosVersion }}</span>
    </p>
    <p><strong>Stable since:</strong> {{ uptime.lastResetDate | date: "%-d %B %Y" }}</p>
    <p><strong>Last reset:</strong> {{ uptime.resetReason }}</p>
  </div>
</div>

<div class="notes-section">
  <h2>Updates &amp; Notes</h2>
  <p class="text-muted mb-2">
    Recent SteamOS and Junk Store updates that maintained compatibility.
  </p>

  {%- if sorted_notes.size > 0 -%}
  <table id="notes-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {%- for note in sorted_notes -%}
        {%- assign hidden_class = "" -%}
        {%- if forloop.index > 5 -%}{%- assign hidden_class = " hidden-note" -%}{%- endif -%}
      <tr class="note-row{{ hidden_class }}"{% if forloop.index > 5 %} style="display: none;"{% endif %}>
        <td>{{ note.date | date: "%-d %b %Y" }}</td>
        <td>
          {%- case note.type -%}
            {%- when "stable" -%}<span class="note-badge stable">SteamOS Stable</span>
            {%- when "beta" -%}<span class="note-badge beta">SteamOS Beta</span>
            {%- when "client-stable" -%}<span class="note-badge client-stable">Steam Client Stable</span>
            {%- when "client-beta" -%}<span class="note-badge client-beta">Steam Client Beta</span>
            {%- when "release" -%}<span class="note-badge release">Junk Store</span>
            {%- else -%}<span class="note-badge info">Info</span>
          {%- endcase -%}
        </td>
        <td>{{ note.text | markdownify | remove: "<p>" | remove: "</p>" | replace: '<a ', '<a target="_blank" rel="noopener noreferrer" ' }}</td>
      </tr>
      {%- endfor -%}
      {%- if sorted_notes.size > 5 -%}
      <tr id="show-all-notes-row">
        <td colspan="3" class="text-center">
          <button type="button" class="show-all-notes-btn" id="show-all-notes-btn">
            Show all {{ sorted_notes.size }} notes
          </button>
        </td>
      </tr>
      {%- endif -%}
    </tbody>
  </table>
  {%- else -%}
  <p class="text-center text-muted">No notes yet</p>
  {%- endif -%}
</div>

<div class="history-section">
  <h2>Track Record</h2>

  {%- if valid_breaks.size == 0 -%}
  <div class="track-record-clean">
    <p class="track-record-headline">
      <strong>Zero SteamOS-related breaks</strong> since {{ uptime.lastResetDate | date: "%-d %B %Y" }}.
    </p>
    <p class="track-record-sub">
      If a future SteamOS update ever does affect Junk Store Pro, it'll be logged here
      together with the fix.
    </p>
  </div>
  {%- else -%}
  {%- assign sorted_breaks = valid_breaks | sort: "date" | reverse -%}
  {%- assign longest_streak = days_at_build -%}
  {%- assign total_days_tracked = days_at_build -%}
  {%- for b in sorted_breaks -%}
    {%- assign d = b.daysStable | default: 0 -%}
    {%- if d > longest_streak -%}{%- assign longest_streak = d -%}{%- endif -%}
    {%- assign total_days_tracked = total_days_tracked | plus: d -%}
  {%- endfor -%}
  {%- assign break_count = sorted_breaks.size -%}
  {%- assign stable_days = total_days_tracked | minus: break_count -%}
  {%- if total_days_tracked > 0 -%}
    {%- assign stable_pct = stable_days | times: 1000 | divided_by: total_days_tracked -%}
    {%- assign stable_pct_decimal = stable_pct | divided_by: 10 -%}
  {%- else -%}
    {%- assign stable_pct_decimal = 100 -%}
  {%- endif -%}

  <div class="track-record-stats">
    <div class="record-stat">
      <div class="record-stat__num">{{ break_count }}</div>
      <div class="record-stat__label">total break{% if break_count != 1 %}s{% endif %}</div>
    </div>
    <div class="record-stat">
      <div class="record-stat__num">{{ longest_streak }}</div>
      <div class="record-stat__label">longest stable streak (days)</div>
    </div>
    <div class="record-stat">
      <div class="record-stat__num">{{ stable_pct_decimal }}%</div>
      <div class="record-stat__label">days stable since launch</div>
    </div>
  </div>

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
      {%- for entry in sorted_breaks -%}
      <tr>
        <td>{{ entry.date | date: "%-d %b %Y" }}</td>
        <td>{{ entry.steamosVersion | default: "Unknown" }}</td>
        <td>{{ entry.reason | default: "Unknown" | newline_to_br }}</td>
        <td>{{ entry.fixedIn | default: "-" }}</td>
        <td>{{ entry.daysStable | default: 0 }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
  {%- endif -%}
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

<script>
(function () {
  // Live "days since reset" — Liquid renders the build-day count, this updates
  // it on page load so visitors viewing days/weeks after deploy see the right
  // number without waiting for a rebuild. Same number length most of the time,
  // so no CLS.
  document.querySelectorAll('[data-status-days]').forEach(function (el) {
    var resetDate = el.getAttribute('data-reset-date');
    if (!resetDate) return;
    var reset = new Date(resetDate);
    if (isNaN(reset)) return;
    var diffMs = Date.now() - reset.getTime();
    var days = Math.floor(diffMs / 86400000);
    if (days >= 0 && String(days) !== el.textContent.trim()) {
      el.textContent = days;
    }
  });

  // If the most recent stable note has a different SteamOS version embedded
  // in its text (regex match), append "· X.Y.Z current" to the launch line.
  // The launch version is already rendered statically so there's no flash if
  // we don't append.
  var steamosTextEl = document.querySelector('[data-status-steamos-text]');
  if (steamosTextEl) {
    var stableNotes = Array.from(document.querySelectorAll('.note-row'))
      .filter(function (row) { return row.querySelector('.note-badge.stable'); });
    var versionRegex = /(?:SteamOS\s+v?)?(\d+\.\d+(?:\.\d+)?)/i;
    for (var i = 0; i < stableNotes.length; i++) {
      var noteText = stableNotes[i].querySelector('td:last-child')?.textContent || '';
      var m = noteText.match(versionRegex);
      if (m) {
        var current = m[1];
        var launchHtml = steamosTextEl.innerHTML;
        var launchVersion = (launchHtml.match(/(\d+\.\d+(?:\.\d+)?)/) || [])[1];
        if (launchVersion && current !== launchVersion) {
          steamosTextEl.innerHTML = '<strong>SteamOS:</strong> ' + launchVersion + ' at launch &middot; ' + current + ' current';
        }
        break;
      }
    }
  }

  // Show-all-notes button: reveals the .hidden-note rows and removes itself
  var showAllBtn = document.getElementById('show-all-notes-btn');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', function () {
      document.querySelectorAll('.hidden-note').forEach(function (row) {
        row.style.display = '';
        row.classList.remove('hidden-note');
      });
      var btnRow = document.getElementById('show-all-notes-row');
      if (btnRow) btnRow.remove();
    });
  }
})();
</script>
