---
layout: junkstore-page
title: "Junk Store Pro Status"
description: "Junk Store Pro service status and uptime history for Steam Deck. Track our stability record, SteamOS and Steam Client update impact, and break history."
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

{%- comment -%}
  Break history comes from the admin app's reset flow. Each entry is a
  stable period that ended: brokeDate = when that period started, fixedDate =
  when it ended (the reset), reason = what broke it. Days stable is derived
  from the two dates. Drop entries with no brokeDate (legacy data noise).
{%- endcomment -%}
{%- assign valid_breaks = "" | split: "" -%}
{%- for entry in uptime.breakHistory -%}
  {%- if entry.brokeDate and entry.brokeDate != "" -%}
    {%- assign valid_breaks = valid_breaks | push: entry -%}
  {%- endif -%}
{%- endfor -%}
{%- assign sorted_breaks = valid_breaks | sort: "fixedDate" | reverse -%}
{%- assign last_break = sorted_breaks | first -%}
{%- if last_break -%}
  {%- assign lb_start = last_break.brokeDate | date: "%s" | plus: 0 -%}
  {%- assign lb_end = last_break.fixedDate | date: "%s" | plus: 0 -%}
  {%- assign previous_streak_days = lb_end | minus: lb_start | divided_by: 86400 -%}
{%- endif -%}

{%- comment -%} Sort notes most-recent-first {%- endcomment -%}
{%- assign sorted_notes = uptime.notes | sort: "date" | reverse -%}

{%- comment -%}
  Extract the most recent SteamOS version from stable notes. Format-tolerant —
  works with both "[SteamOS X.Y.Z Release](...)" and "[SteamOS X.Y.Z](...)".
  Build-time derivation eliminates the JS rewrite that was causing CLS on the
  status card when the launch version differed from current.
{%- endcomment -%}
{%- assign current_steamos = uptime.steamosVersion -%}
{%- for note in sorted_notes -%}
  {%- if note.type == "stable" -%}
    {%- assign parts = note.text | split: "SteamOS " -%}
    {%- if parts.size > 1 -%}
      {%- assign rest = parts[1] | split: "]" | first | split: " " | first | split: ")" | first -%}
      {%- if rest contains "." -%}
        {%- assign current_steamos = rest -%}
        {%- break -%}
      {%- endif -%}
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}

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
      {%- if current_steamos == uptime.steamosVersion -%}
      <strong>SteamOS:</strong> {{ uptime.steamosVersion }}
      {%- else -%}
      <strong>SteamOS:</strong> {{ uptime.steamosVersion }} at launch &middot; {{ current_steamos }} current
      {%- endif -%}
    </p>
    <p><strong>Stable since:</strong> {{ uptime.lastResetDate | date: "%-d %B %Y" }}</p>
    {%- if last_break -%}
    {%- comment -%}
      After a break the full write-up lives in the Track Record table below, so
      the card just carries the headline facts: how long the last run was and
      which Pro version fixed it.
    {%- endcomment -%}
    <p><strong>Previous streak:</strong> {{ previous_streak_days }} days ({{ last_break.brokeDate | date: "%-d %b %Y" }} to {{ last_break.fixedDate | date: "%-d %b %Y" }})</p>
    {%- assign fixed_in = last_break.fixedIn | default: uptime.fixedIn -%}
    <p><strong>Fixed in:</strong> {% if fixed_in != blank %}Junk Store Pro {{ fixed_in }}{% else %}fix in progress{% endif %}</p>
    {%- else -%}
    <p><strong>Tracking since:</strong> {{ uptime.resetReason | markdownify | remove: "<p>" | remove: "</p>" | replace: '<a ', '<a target="_blank" rel="noopener noreferrer" ' }}</p>
    {%- endif -%}
  </div>
</div>

<div class="notes-section">
  <h2>Updates &amp; Notes</h2>
  <p class="text-muted mb-2">
    Recent SteamOS, Steam Client and Junk Store updates, and how Junk Store Pro held up.
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
      <strong>Zero breaks</strong> since {{ uptime.lastResetDate | date: "%-d %B %Y" }}.
    </p>
    <p class="track-record-sub">
      If a SteamOS or Steam Client update ever does affect Junk Store Pro, it'll be logged here
      together with the fix.
    </p>
  </div>
  {%- else -%}
  {%- comment -%}
    Longest streak includes the current run. Days tracked = every stable
    period so far plus the current one.
  {%- endcomment -%}
  {%- assign longest_streak = days_at_build -%}
  {%- assign total_days_tracked = days_at_build -%}
  {%- for b in sorted_breaks -%}
    {%- assign b_start = b.brokeDate | date: "%s" | plus: 0 -%}
    {%- assign b_end = b.fixedDate | date: "%s" | plus: 0 -%}
    {%- assign d = b_end | minus: b_start | divided_by: 86400 -%}
    {%- if d > longest_streak -%}{%- assign longest_streak = d -%}{%- endif -%}
    {%- assign total_days_tracked = total_days_tracked | plus: d -%}
  {%- endfor -%}
  {%- assign break_count = sorted_breaks.size -%}

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
      <div class="record-stat__num">{{ total_days_tracked }}</div>
      <div class="record-stat__label">days tracked since launch</div>
    </div>
  </div>

  <table id="break-history-table">
    <thead>
      <tr>
        <th>Stable period</th>
        <th>Days</th>
        <th>What broke</th>
        <th>Fixed in</th>
      </tr>
    </thead>
    <tbody>
      {%- for entry in sorted_breaks -%}
        {%- assign e_start = entry.brokeDate | date: "%s" | plus: 0 -%}
        {%- assign e_end = entry.fixedDate | date: "%s" | plus: 0 -%}
        {%- assign e_days = e_end | minus: e_start | divided_by: 86400 -%}
      <tr>
        <td>{{ entry.brokeDate | date: "%-d %b %Y" }} to {{ entry.fixedDate | date: "%-d %b %Y" }}</td>
        <td>{{ e_days }}</td>
        <td>{{ entry.reason | default: "Unknown" | markdownify | remove: "<p>" | remove: "</p>" | replace: '<a ', '<a target="_blank" rel="noopener noreferrer" ' }}</td>
        <td>{{ entry.fixedIn | default: "Pending" }}</td>
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
