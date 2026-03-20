---
title: "How to Enable LSFG Frame Generation"
description: "Step-by-step guide to enable LSFG-VK (Lossless Scaling Frame Generation) in Junk Store on Steam Deck. No manual launch arguments needed."
excerpt: "Boost frame rates with LSFG-VK (Lossless Scaling Frame Generation) using built-in Junk Store toggles"
layout: junkstore-page
permalink: /tutorials/lsfg-frame-generation
categories: ["Universal"]
tags: ["lsfg", "frame-generation", "performance", "both-versions"]
difficulty: "Intermediate"
---

<p class="text-center">Boost your frame rates with LSFG-VK (Lossless Scaling Frame Generation) - built into Junk Store with simple toggles.</p>

<div class="js-callout js-callout--warning">
  <strong>Prerequisites:</strong> You need <strong>Lossless Scaling</strong> from Steam (paid) and the <strong>lsfg-vk</strong> dependency installed.
</div>

<div class="js-callout js-callout--tip">
  <strong>Note:</strong> LSFG doesn't work with all games and may actually make some games perform worse. Your mileage may vary.
</div>

<hr>

<h3>Requirements</h3>

<p>Before you start, you'll need two things:</p>

<h4>1. Lossless Scaling (Steam)</h4>

<p>Purchase and install <strong>Lossless Scaling</strong> from Steam. Once installed:</p>
<ul>
  <li>Right-click the app in Steam</li>
  <li>Select <strong>Properties</strong></li>
  <li>Go to <strong>Betas</strong></li>
  <li>Select <strong>Linux Beta</strong> from the dropdown</li>
</ul>

<h4>2. Install lsfg-vk</h4>

<p>Run this command in Desktop Mode (Konsole):</p>

<pre><code>curl -fsSL https://raw.githubusercontent.com/ebenbruyns/lsfg-vk-deck-installer/refs/heads/main/install.sh | bash</code></pre>

<p>Once installed, Junk Store will automatically detect and use it.</p>

<div class="js-callout js-callout--tip">
  <strong>Pro Tip:</strong> You don't need the separate Decky LSFG-VK plugin if you're using Junk Store. Our built-in integration handles everything.
</div>

<hr>

<h3>How to Enable LSFG in Junk Store</h3>

<div class="install-guide">
<ol>

<li>
  <strong>Open Settings Menu</strong>
  <p>From the game page in Junk Store, click the <strong>Settings</strong> menu (cog icon).</p>
  <img src="/assets/images/tutorials/lsfg/cp2077cog.webp" alt="Settings menu cog icon" width="600" height="338" loading="lazy" />
</li>

<li>
  <strong>Select Proton Configs</strong>
  <p>Select <strong>Proton Configs</strong> from the menu.</p>
  <img src="/assets/images/tutorials/lsfg/protonconfig.webp" alt="Proton Configs option" width="600" height="338" loading="lazy" />
</li>

<li>
  <strong>Show All Options</strong>
  <p>Set the dropdown to <strong>All</strong> to reveal advanced options.</p>
  <img src="/assets/images/tutorials/lsfg/alldropdown.webp" alt="Dropdown set to All" width="600" height="338" loading="lazy" />
</li>

<li>
  <strong>Enable LSFG</strong>
  <p>Find the <strong>LSFG</strong> section and enable LSFG-VK. Tweak the settings if needed.</p>
  <img src="/assets/images/tutorials/lsfg/lsfgvksettings.webp" alt="LSFG-VK settings" width="600" height="338" loading="lazy" />

  <div class="js-callout js-callout--warning">
    <strong>Important:</strong> Both LSFG settings need to say <strong>Enable</strong> for LSFG-VK to work.
  </div>
</li>

<li>
  <strong>Save Changes</strong>
  <p>Press <strong>X</strong> to save your changes!</p>
</li>

</ol>
</div>

<hr>

<h3>Troubleshooting</h3>

<ul>
  <li><strong>LSFG not working?</strong> Try a different Proton version. Some games work better with specific GE-Proton releases.</li>
  <li><strong>Settings not saving?</strong> Make sure you press X to save before exiting.</li>
</ul>

<hr>

<div class="js-callout js-callout--help">
  <h3>Stuck or need help?</h3>
  <p><strong>Need setup help? We're here for you!</strong> Most issues are quick fixes.</p>

  <p><strong>Quick fixes for common issues:</strong></p>
  <ul>
    <li><a href="/help/#faq">FAQ</a> - General questions</li>
    <li><a href="/help/#troubleshooting">Troubleshooting</a> - Common issues</li>
  </ul>

  <p><strong>Still stuck?</strong> Join us on <a href="https://discord.gg/6mRUhR6Teh">Discord</a> for community support.</p>
</div>
