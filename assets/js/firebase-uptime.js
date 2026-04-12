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

    // Populate notes table
    const notesTable = document.getElementById('notes-table');
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

          sortedNotes.forEach(note => {
            const noteDate = note.date && note.date.toDate ? note.date.toDate() : new Date(note.date);
            const typeBadge = getNoteBadge(note.type);
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${noteDate.toLocaleDateString('en-NZ', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
              <td>${typeBadge}</td>
              <td>${note.text}</td>
            `;
            tbody.appendChild(row);
          });
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

    // Populate break history table
    // Filter out invalid entries (empty strings, nulls, entries without dates)
    const validHistory = (data.breakHistory || []).filter(entry => entry && typeof entry === 'object' && entry.date);

    if (historyTable && validHistory.length > 0) {
      const tbody = historyTable.querySelector('tbody');
      if (tbody) {
        tbody.innerHTML = '';

        // Sort by date descending (most recent first)
        const sortedHistory = [...validHistory].sort((a, b) => {
          const dateA = a.date.toDate ? a.date.toDate() : new Date(a.date);
          const dateB = b.date.toDate ? b.date.toDate() : new Date(b.date);
          return dateB - dateA;
        });

        sortedHistory.forEach(entry => {
          const entryDate = entry.date.toDate ? entry.date.toDate() : new Date(entry.date);
          // Convert newlines to <br> for multi-line reasons
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
    } else if (historyTable) {
      // No history yet
      const tbody = historyTable.querySelector('tbody');
      if (tbody) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">No break history recorded yet</td></tr>';
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
