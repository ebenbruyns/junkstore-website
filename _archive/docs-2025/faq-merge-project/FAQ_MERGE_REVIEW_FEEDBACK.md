# FAQ MERGE REVIEW - CLARITY & FLOW FEEDBACK

## ✅ MERGE #2 - Trustworthy/Credentials

**Status:** Good merge! Just minor fixes needed.

### Issues Found:
1. **Line 178:** Double closing tag - has `</strong>` twice
   - Current: `We prioritize user security and transparency in how we handle your gaming credentials.</strong>`
   - Should be: `We prioritize user security and transparency in how we handle your gaming credentials.`

2. **Bottom line:** A bit long but makes sense. Consider breaking into two sentences:
   - Current: "...has been trusted by hundreds of thousands of Steam Deck users across both versions. Your credentials are handled using industry-standard practices by established tools in the Linux gaming community."
   - Suggest: "...has been trusted by thousands of Steam Deck users across both versions. Your credentials are handled using industry-standard practices by established tools in the Linux gaming community."

### Corrected Version:
```html
<p></p>
    <strong>Yes, Junk Store is trustworthy.</strong> We prioritize user security and transparency in how we handle your gaming credentials.
  <br>
  <br>
    <strong>Developer Credentials:</strong>
    <ul>
      <li>Developed by a cybersecurity expert and white-hat professional</li>
      <li>You can verify our lead developer's credentials on <a href="https://www.linkedin.com/in/eben-bruyns/" target="_blank">LinkedIn</a></li>
      <li>Open-source Decky plugin code is publicly auditable on <a href="https://github.com/ebenbruyns/junkstore" target="_blank">GitHub</a></li>
      <li>Active in Steam Deck community since launch with established reputation</li>
    </ul>
    <strong>Credential Security:</strong>
    <ul>
      <li><strong>No password storage:</strong> Junk Store never stores your Epic, GOG, Amazon, or itch.io (beta) passwords</li>
      <li><strong>Token-based authentication:</strong> Uses secure login tokens provided by each platform</li>
      <li><strong>Local storage only:</strong> All tokens stored locally on your Steam Deck</li>
      <li><strong>Standard OAuth flow:</strong> Same login method used by official store websites</li>
    </ul>
    <strong>Privacy Protection:</strong>
    <ul>
      <li><strong>No personal data collection:</strong> We don't collect or store personal information</li>
      <li><strong>No game tracking:</strong> Your gaming habits aren't monitored or reported</li>
      <li><strong>Local operation:</strong> Most functionality works entirely offline</li>
    </ul>
    <strong>Technical Trust Factors:</strong>
    <ul>
      <li><strong>Established developer:</strong> Active in Steam Deck community since launch with well-established security credentials</li>
      <li><strong>Transparent development:</strong> Regular updates with clear changelogs (2.0 Professional version)</li>
      <li><strong>Professional maintenance:</strong> Consistent updates and bug fixes (2.0 Professional version)</li>
    </ul>
    <strong>Bottom line:</strong> Junk Store has been trusted by thousands of Steam Deck users across both versions. Your credentials are handled using industry-standard practices by established tools in the Linux gaming community.
```

---

## ⚠️ MERGE #3 - GOG DOS/ScummVM Support

**Status:** Needs HTML structure fixes

### Issues Found:
1. **HTML structure broken** - You have `<strong>2.0 Version</strong></summary>` which includes a closing `</summary>` tag that shouldn't be there
2. **Missing proper section structure**

### Suggested Corrected Version:
```html
<p></p>
    <strong>Junk Store 2.0:</strong>
    <br>
    <strong>Yes.</strong> In Junk Store 2.0, both <strong>DOS</strong> and <strong>ScummVM</strong> games downloaded via GOG are supported.
  <br>
  <br>
    These games will automatically launch using the <strong>Flatpak versions</strong> of <code>ScummVM</code> and <code>DosBox</code> once installed.
  <br>
  <br>
    <strong>Decky Plugin:</strong>
    <br>
    <strong>No.</strong> DOS games and some ScummVM titles are not supported by the GOG extension in the Decky version of Junk Store.
```

---

## ⚠️ MERGE #4 - Install/Uninstall Game

**Status:** Good idea but HTML structure needs fixing

### Issues Found:
1. **Line 385:** Typo - `<stong>` should be `<strong>`
2. **Structure problem:** The version-specific notes are inside `<li>` tags but outside the `<ul>` - this breaks HTML
3. **Flow issue:** The version differences should be shown differently

### Suggested Corrected Version:
```html
<p></p>
  <strong>To install a game in Junk Store:</strong>
  <ul>
    <li>Open the game's page in Junk Store and click install</li>
  </ul>

  <strong>Download behavior:</strong>
  <ul>
    <li><strong>Junk Store 2.0:</strong> Games are added to the download queue - you can navigate away and continue using Junk Store while they install</li>
    <li><strong>Decky Plugin:</strong> Remember to stay on the game page until installation is complete</li>
  </ul>

  <strong>To uninstall a game in Junk Store:</strong>
  <ol>
    <li>Open the game's page in Junk Store</li>
    <li>Open the <strong>☰ Slider menu</strong> and select <strong>Uninstall</strong></li>
    <li>
      Manually delete any leftover files to free up space:
      <ul>
        <li><strong>Epic:</strong> <code>~/Games/epic</code> or <code>/*your-SD-card*/Games/epic</code></li>
        <li><strong>GOG:</strong> <code>~/Games/gog</code> or <code>/*your-SD-card*/Games/gog</code></li>
        <li><strong>Amazon:</strong> <code>~/Games/amazon</code> or <code>/*your-SD-card*/Games/amazon</code></li>
      </ul>
    </li>
  </ol>
  <strong>Important:</strong> Uninstalling removes all local save data. To back up saves first, see "How do I find save data for my games?" below.
```

---

## ✅ MERGE #5 - Change Proton Version

**Status:** Good choice to use Decky version

**Action needed:** Just update the internal URL as you noted.
- Current: `{{ '/troubleshooting/decky/' | relative_url }}#proton-ge-installation`
- Update to unified tutorial URL when ready

---

## ✅ MERGE #7 - Kingdom Hearts

**Status:** Confirmed - remove this question entirely

Noted! This question will be removed from the unified FAQ.

---

## ⚠️ MERGE #8 - Report Bug

**Status:** Good merge, just needs formatting cleanup

### Suggested Corrected Version:
```html
<p></p>
    We really appreciate bug reports! Like you, we want Junk Store to just work. If you come across a bug, please let us know. If we don't know about it, we can't fix it.
  <br>
  <br>
    <strong>Submit bugs on GitHub so we can track them properly:</strong>
  <ul>
    <li><strong>Junk Store 2.0:</strong> <a href="https://github.com/SDK-Innovation/JunkStoreBugs/issues/new" target="_blank" rel="noopener">Submit a bug report</a></li>
    <li><strong>Decky Plugin:</strong> <a href="https://github.com/ebenbruyns/junkstore/issues/new/choose" target="_blank" rel="noopener">Submit a bug report</a></li>
  </ul>
    You'll need a GitHub account to submit an issue. It's free to create one if you don't already have it.
  <br>
  <br>
    <strong>Note:</strong> Bug reports aren't support tickets. If you need help or aren't sure if it's a bug, please ask in our <a href="https://discord.gg/6mRUhR6Teh" target="_blank" rel="noopener">Discord server</a> first.
```

---

## ⚠️ MERGE #9 - Cloud Saves Support

**Status:** Same HTML structure issue as MERGE #3

### Issues Found:
1. Incorrect HTML structure with `</summary>` tags
2. Missing proper section formatting

### Suggested Corrected Version:
```html
<p></p>
    <strong>Junk Store 2.0:</strong>
    <br>
    Junk Store 2.0 currently offers <strong>experimental cloud save support</strong> for <strong>Epic</strong> and <strong>GOG</strong>. However, this feature is intended only for advanced users who understand and accept the risks involved — including the potential for save data loss.
  <br>
  <br>
    <strong>Important:</strong> We do <em>not</em> offer technical support for issues related to cloud saves at this time. If you choose to enable it, please make sure you're confident in your ability to troubleshoot and back up your save data manually if needed.
  <br>
  <br>
    <strong>Note:</strong> Not all games from either platform support cloud saves.
  <br>
  <br>
    <strong>Decky Plugin:</strong>
    <br>
    <strong>No, cloud saves are not supported.</strong> We don't want users to run the risk of losing their game saves.
  <br>
  <br>
    <strong>Technical details:</strong>
  <ul>
    <li><strong>Epic Games:</strong> While Legendary supports this, we haven't implemented it due to potential data loss risks</li>
    <li><strong>GOG Games:</strong> Not implemented as it isn't a trivial problem to solve and requires more resources than currently available</li>
    <li><strong>Manual configuration:</strong> Tech-savvy users can manually configure via CLI, but it's not recommended</li>
  </ul>
```

---

## ✅ MERGE #10 - Third-Party Launchers

**Status:** Good choice to use 2.0 version

The 2.0 version is cleaner and more concise. No changes needed!

---

## 📊 Summary

**Overall:** Your merges are well thought out! Just need to fix:
1. **HTML structure issues** in merges #3, #4, and #9 (removed stray tags)
2. **Minor formatting** improvements in merges #2 and #8
3. **Typo fix** in merge #4 (`<stong>` → `<strong>`)

All the corrected versions are provided above. The content flow and logic are excellent - you did a great job combining the different versions!

**Next step:** Would you like me to apply these corrections and proceed with generating the unified FAQ?
