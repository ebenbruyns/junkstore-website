---
title: "How to Change Proton Version in Junk Store"
description: "Step-by-step guide to check and change Proton versions for Epic/GOG games in Junk Store on Steam Deck. Fix black screen issues and optimize game compatibility."
excerpt: "Check and change which Proton version a game uses directly in Game Mode"
layout: junkstore-page
permalink: /tutorials/proton-versions/
categories: ["Universal"]
tags: ["proton", "compatibility", "both-versions"]
difficulty: "Intermediate"
---
{% include content-schema.html type="tutorial" id="proton-versions" %}

<p class="text-center">Fix black screens and compatibility issues by switching to a different Proton version.</p>

<div class="js-callout js-callout--warning">
<strong>Prerequisites:</strong> You need <strong>Junk Store</strong> installed, plus a way to install different Proton versions (Wine Cellar, ProtonUp-Qt, etc.) and some Proton versions already installed.
</div>

<hr>

<h3>When Do You Need to Change Proton Versions?</h3>

<p>If you experience any of these issues, try a different Proton version:</p>
<ul>
<li>Game shows a <strong>black screen</strong> then closes</li>
<li>Game <strong>won't launch</strong> at all</li>
<li>Game <strong>crashes immediately</strong></li>
</ul>

<h4>Recommended Proton Versions</h4>
<ul>
<li><strong>GE-Proton</strong> versions are generally recommended over standard Steam Proton</li>
<li><strong>Don't always update</strong> to the latest release - we find a stable version and stick with it</li>
<li><strong>Test before upgrading</strong> - newer isn't always better for game compatibility</li>
<li><strong>Keep 2-3 versions</strong> installed so you can switch if one doesn't work</li>
</ul>

<div class="js-callout js-callout--tip">
<strong>Pro Tip:</strong> Check <a href="https://www.protondb.com/" target="_blank" rel="noopener">ProtonDB.com</a> or our <a href="/games/tested/">Games Tested</a> page to see what works best for your specific game.
</div>

<hr>

<h3>Prerequisites: Install a Proton Manager</h3>

<p>You'll need a tool to download and manage different Proton versions. You have two good options:</p>

<h4>Option 1: Wine Cellar (Our Preferred for Game Mode)</h4>
<ul>
<li><strong>Decky plugin</strong> - works directly in Game Mode</li>
<li><strong>No Desktop Mode needed</strong> for downloads and management</li>
<li><strong>Requires restart</strong> after installing new Proton versions</li>
<li><strong>Installation:</strong> Search "Wine Cellar" in Decky Plugin Store</li>
</ul>

<h4>Option 2: ProtonUp-Qt (Desktop Mode)</h4>
<ul>
<li><strong>Desktop application</strong> - download from Discover Store</li>
<li><strong>Must use Desktop Mode</strong> to install new versions</li>
<li><strong>No restart required</strong> - updates apply when returning to Game Mode</li>
<li>Search "ProtonUp-Qt" in Discover Store</li>
</ul>

<p><strong>Quick Links:</strong> <a href="/tutorials/install-decky-plugin/">How to Install Junk Store</a></p>

<hr>

<h3>Method 1: Change Proton Version in Junk Store</h3>

<div class="install-guide">
<ol>

<li>
<strong>Open Your Game in Junk Store</strong>
<p>Start from the game screen <strong>inside Junk Store</strong> (not Steam library).</p>
<img src="/assets/images/proton-tutorial/FM'24%20JS%20Game%20Page.webp" alt="Game page in Junk Store" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Access Steam Game Properties</strong>
<p>Press <strong>Y</strong> to go to Steam's game page, then navigate to the <strong>gear/cog icon</strong> and press <strong>A</strong> to select.</p>
<img src="/assets/images/proton-tutorial/FM'24%20Steam%20App%20Page.webp" alt="Steam app page with cog icon" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Open Properties Menu</strong>
<p>Select <strong>Properties</strong> from the menu and press <strong>A</strong> to confirm.</p>
<img src="/assets/images/proton-tutorial/FM'24%20Properties%20Option%20Selection.webp" alt="Properties option in menu" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Navigate to Compatibility</strong>
<p>Go to the <strong>Compatibility</strong> tab. This is where you'll find Proton settings.</p>
<img src="/assets/images/proton-tutorial/FM'24%20Proton%20Version%20Screen.webp" alt="Compatibility tab with Proton settings" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Select Proton Version</strong>
<p>Navigate to the <strong>Proton dropdown menu</strong> and press <strong>A</strong> to open the list of available versions.</p>
<img src="/assets/images/proton-tutorial/FM%20Current%20Proton%20Version.webp" alt="Current Proton version dropdown" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Choose Your Version</strong>
<p>Select the <strong>Proton version</strong> you want to try and press <strong>A</strong> to confirm. The setting is <strong>automatically saved</strong> per game.</p>
<img src="/assets/images/proton-tutorial/FM'24%20Changing%20Proton%20Version.webp" alt="Changing Proton version" width="600" height="338" loading="lazy" />

<div class="js-callout js-callout--tip">
<strong>Saved Settings:</strong> Your Proton choice is remembered for this specific game, even after rebooting.
</div>
</li>

</ol>
</div>

<hr>

<h3>Method 2: Change via Steam Library</h3>

<p>You can also change Proton versions directly from Steam's library:</p>

<div class="install-guide">
<ol>

<li>
<strong>Find Your Game in Steam Library</strong>
<p>Locate your game in the <strong>Steam Library</strong>.</p>
<img src="/assets/images/proton-tutorial/Game%20Art%20Steam%20Library.webp" alt="Game in Steam Library" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Open Properties</strong>
<p>Press the <strong>Start/Options button</strong> (hamburger menu) and select <strong>Properties</strong>.</p>
<img src="/assets/images/proton-tutorial/Properties%20Menu%20from%20Steam%20Library.webp" alt="Properties menu from Steam Library" width="600" height="338" loading="lazy" />
</li>

<li>
<strong>Follow Method 1 Steps</strong>
<p>Follow <strong>Steps 4-6</strong> from Method 1 above to change the Proton version.</p>
</li>

</ol>
</div>

<hr>

<h3>Ready to Play!</h3>

<p>Once you've selected your Proton version:</p>
<ul>
<li><strong>Back out</strong> to the game screen</li>
<li>Press <strong>Play</strong> to launch with the new settings</li>
</ul>

<img src="/assets/images/proton-tutorial/FM'24%20Load%20Screen.webp" alt="Game loading screen" width="600" height="338" loading="lazy" />

<hr>

<h3>Troubleshooting Tips</h3>

<ul>
<li><strong>Game still won't work?</strong> Try a different GE-Proton version</li>
<li><strong>Need more versions?</strong> Use Wine Cellar to download additional options</li>
<li><strong>Unsure which version to use?</strong> Check our <a href="/games/tested/">compatibility database</a></li>
</ul>

<hr>

<div class="js-callout js-callout--help">
<h3>Stuck or need help?</h3>
<p><strong>Need setup help? We're here for you!</strong> Most issues are quick fixes.</p>

<p><strong>Quick fixes for common issues:</strong></p>
<ul>
<li><a href="/faq/">FAQ</a> - General questions</li>
<li><a href="/troubleshooting/">Troubleshooting</a> - Common issues</li>
</ul>

<p><strong>Still stuck?</strong> Join us on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> for community support.</p>
</div>
