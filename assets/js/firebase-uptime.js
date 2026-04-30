/**
 * Firebase Uptime Tracker
 * Fetches uptime data from Firestore via Cloudflare Worker cache
 * Works in footer (all pages) and on the status page
 */
(async function loadUptime() {
  // Wait for cache client to be ready
  if (!window.fetchCachedDocument) {
    setTimeout(loadUptime, 100);
    return;
  }

  // Render a note's text. HTML-escape everything first (XSS defense — note
  // authors are Firebase-authed admins but defense-in-depth costs nothing),
  // then convert `[text](https://...)` markdown links into <a> tags.
  function renderNoteText(raw) {
    if (!raw) return '';
    const escaped = String(raw)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return escaped.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      (_, text, url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
    );
  }

  try {
    // Fetch from Cloudflare Worker cache instead of direct Firebase
    const data = await window.fetchCachedDocument('metadata/uptime');

    if (!data) {
      console.log('Uptime document not found');
      return;
    }

    // Handle both Firestore Timestamp and string formats
    let resetDate;
    if (data.lastResetDate && data.lastResetDate.toDate) {
      resetDate = data.lastResetDate.toDate();
    } else if (data.lastResetDate) {
      resetDate = new Date(data.lastResetDate);
    } else {
      console.log('No lastResetDate found');
      return;
    }

    const now = new Date();
    const diffTime = Math.abs(now - resetDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Update footer tracker
    const tracker = document.getElementById('uptime-tracker');
    const daysEl = document.getElementById('uptime-days');

    if (tracker && daysEl) {
      daysEl.textContent = diffDays;
      tracker.style.display = 'block';

      // Add milestone class for special counts
      const milestones = [7, 30, 60, 90];
      if (milestones.includes(diffDays) || diffDays >= 100) {
        tracker.classList.add('uptime-milestone');
      }
    }

    // Update homepage badge if present
    const homepageBadge = document.getElementById('homepage-uptime');
    const homepageDays = document.getElementById('homepage-uptime-days');
    if (homepageBadge && homepageDays) {
      homepageDays.textContent = diffDays;
      homepageBadge.style.display = '';
    }

    // Update status page elements if present
    const statusDays = document.getElementById('status-days');
    const statusDate = document.getElementById('status-reset-date');
    const statusReason = document.getElementById('status-reset-reason');
    const statusSteamOS = document.getElementById('status-steamos-version');
    const historyTable = document.getElementById('break-history-table');

    if (statusDays) {
      statusDays.textContent = diffDays;
    }

    if (statusDate) {
      statusDate.textContent = resetDate.toLocaleDateString('en-NZ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }

    if (statusReason) {
      // Convert newlines to <br> for multi-line reasons
      const reasonHtml = (data.resetReason || 'Initial setup').replace(/\n/g, '<br>');
      statusReason.innerHTML = reasonHtml;
    }

    if (statusSteamOS) {
      statusSteamOS.textContent = data.steamosVersion || 'N/A';
    }

    // Stability stats: count SteamOS *stable* updates passed since reset, and
    // derive the latest stable version from the most recent stable note.
    const versionRegex = /(?:SteamOS\s+v?)?(\d+\.\d+(?:\.\d+)?)/i;
    let stableUpdatesPassed = 0;
    let currentSteamosVersion = null;

    if (Array.isArray(data.notes) && data.notes.length > 0) {
      const stableNotes = data.notes
        .filter(n => n && n.type === 'stable')
        .map(n => ({
          ...n,
          _date: n.date && n.date.toDate ? n.date.toDate() : new Date(n.date)
        }))
        .filter(n => !isNaN(n._date))
        .sort((a, b) => b._date - a._date);

      stableUpdatesPassed = stableNotes.filter(n => n._date > resetDate).length;

      for (const n of stableNotes) {
        const m = (n.text || '').match(versionRegex);
        if (m) {
          currentSteamosVersion = m[1];
          break;
        }
      }
    }

    const updatesPassedEl = document.getElementById('status-updates-passed');
    const updatesPassedLabel = document.getElementById('status-updates-passed-label');
    if (updatesPassedEl) {
      updatesPassedEl.textContent = stableUpdatesPassed;
    }
    if (updatesPassedLabel) {
      updatesPassedLabel.textContent =
        stableUpdatesPassed === 1 ? 'SteamOS update passed' : 'SteamOS updates passed';
    }

    const steamosLine = document.getElementById('status-steamos-line');
    const steamosText = document.getElementById('status-steamos-text');
    if (steamosLine && steamosText && data.steamosVersion) {
      const launch = data.steamosVersion;
      let html;
      if (currentSteamosVersion && currentSteamosVersion !== launch) {
        html = '<strong>SteamOS:</strong> ' + launch + ' at launch &middot; ' + currentSteamosVersion + ' current';
      } else {
        html = '<strong>SteamOS:</strong> ' + launch;
      }
      steamosText.innerHTML = html;
      steamosLine.style.display = '';
    }

    // Populate notes table
    const notesTable = document.getElementById('notes-table');
    const NOTES_LIMIT = 5;
    try {
      if (notesTable && data.notes && data.notes.length > 0) {
        const tbody = notesTable.querySelector('tbody');
        if (tbody) {
          tbody.innerHTML = '';

          // Sort by date descending (most recent first)
          const sortedNotes = [...data.notes].sort((a, b) => {
            const dateA = a.date && a.date.toDate ? a.date.toDate() : new Date(a.date);
            const dateB = b.date && b.date.toDate ? b.date.toDate() : new Date(b.date);
            return dateB - dateA;
          });

          // Show only first 5 notes initially
          const notesToShow = sortedNotes.slice(0, NOTES_LIMIT);
          const hiddenNotes = sortedNotes.slice(NOTES_LIMIT);

          notesToShow.forEach(note => {
            const noteDate = note.date && note.date.toDate ? note.date.toDate() : new Date(note.date);
            const typeBadge = getNoteBadge(note.type);
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${noteDate.toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
              <td>${typeBadge}</td>
              <td>${renderNoteText(note.text)}</td>
            `;
            tbody.appendChild(row);
          });

          // Add hidden rows if there are more than 5 notes
          hiddenNotes.forEach(note => {
            const noteDate = note.date && note.date.toDate ? note.date.toDate() : new Date(note.date);
            const typeBadge = getNoteBadge(note.type);
            const row = document.createElement('tr');
            row.classList.add('hidden-note');
            row.style.display = 'none';
            row.innerHTML = `
              <td>${noteDate.toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
              <td>${typeBadge}</td>
              <td>${renderNoteText(note.text)}</td>
            `;
            tbody.appendChild(row);
          });

          // Add "Show all" button if there are hidden notes
          if (hiddenNotes.length > 0) {
            const showAllRow = document.createElement('tr');
            showAllRow.id = 'show-all-notes-row';
            showAllRow.innerHTML = `
              <td colspan="3" class="text-center">
                <button type="button" class="show-all-notes-btn" id="show-all-notes-btn">
                  Show all ${sortedNotes.length} notes
                </button>
              </td>
            `;
            tbody.appendChild(showAllRow);

            // Add click handler
            document.getElementById('show-all-notes-btn').addEventListener('click', function() {
              document.querySelectorAll('.hidden-note').forEach(row => {
                row.style.display = '';
              });
              document.getElementById('show-all-notes-row').remove();
            });
          }
        }
      } else if (notesTable) {
        const tbody = notesTable.querySelector('tbody');
        if (tbody) {
          tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">No notes yet</td></tr>';
        }
      }
    } catch (notesError) {
      console.error('Error loading notes:', notesError);
      if (notesTable) {
        const tbody = notesTable.querySelector('tbody');
        if (tbody) {
          tbody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">Error loading notes</td></tr>';
        }
      }
    }

    // Populate Track Record section
    const validHistory = (data.breakHistory || []).filter(entry => entry && typeof entry === 'object' && entry.date);
    const trackRecordClean = document.getElementById('track-record-clean');
    const trackRecordStats = document.getElementById('track-record-stats');
    const trackRecordSince = document.getElementById('track-record-since');

    if (validHistory.length === 0) {
      // Clean record: show affirmative statement, hide stats + table
      if (trackRecordSince) {
        trackRecordSince.textContent = resetDate.toLocaleDateString('en-NZ', {
          year: 'numeric', month: 'long', day: 'numeric'
        });
      }
      if (trackRecordClean) trackRecordClean.style.display = '';
      if (trackRecordStats) trackRecordStats.style.display = 'none';
      if (historyTable) historyTable.style.display = 'none';
    } else {
      // Have breaks: show stats strip + detail table, hide clean message
      if (trackRecordClean) trackRecordClean.style.display = 'none';

      // Sort by date descending
      const sortedHistory = [...validHistory].sort((a, b) => {
        const dateA = a.date.toDate ? a.date.toDate() : new Date(a.date);
        const dateB = b.date.toDate ? b.date.toDate() : new Date(b.date);
        return dateB - dateA;
      });

      // Compute summary stats
      const currentStreakDays = diffDays;
      const previousStreaks = sortedHistory.map(e => Number(e.daysStable) || 0);
      const longestStreak = Math.max(currentStreakDays, ...previousStreaks);
      const totalDaysTracked = previousStreaks.reduce((a, b) => a + b, 0) + currentStreakDays;
      // "Days stable" assumes ~1 day downtime per break (conservative). If we ever
      // track fix duration, swap this for a precise number.
      const daysBroken = sortedHistory.length;
      const stablePercent = totalDaysTracked > 0
        ? Math.round(((totalDaysTracked - daysBroken) / totalDaysTracked) * 100 * 10) / 10
        : 100;

      const breaksEl = document.getElementById('record-stat-breaks');
      const longestEl = document.getElementById('record-stat-longest');
      const percentEl = document.getElementById('record-stat-percent');
      if (breaksEl) breaksEl.textContent = sortedHistory.length;
      if (longestEl) longestEl.textContent = longestStreak;
      if (percentEl) percentEl.textContent = stablePercent + '%';
      if (trackRecordStats) trackRecordStats.style.display = '';

      if (historyTable) {
        historyTable.style.display = '';
        const tbody = historyTable.querySelector('tbody');
        if (tbody) {
          tbody.innerHTML = '';
          sortedHistory.forEach(entry => {
            const entryDate = entry.date.toDate ? entry.date.toDate() : new Date(entry.date);
            const reasonHtml = (entry.reason || 'Unknown').replace(/\n/g, '<br>');
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${entryDate.toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
              <td>${entry.steamosVersion || 'Unknown'}</td>
              <td>${reasonHtml}</td>
              <td>${entry.fixedIn || '-'}</td>
              <td>${entry.daysStable || 0}</td>
            `;
            tbody.appendChild(row);
          });
        }
      }
    }

  } catch (error) {
    console.error('Error loading uptime:', error);
  }

  function getNoteBadge(type) {
    const badges = {
      'beta': '<span class="note-badge beta">SteamOS Beta</span>',
      'stable': '<span class="note-badge stable">SteamOS Stable</span>',
      'release': '<span class="note-badge release">Junk Store</span>'
    };
    return badges[type] || '<span class="note-badge info">Info</span>';
  }
})();
