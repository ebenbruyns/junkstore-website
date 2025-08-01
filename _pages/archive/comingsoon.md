---
layout: splash
title: "Junk Store 2.0 - Learn More"
permalink: /comingsoon/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
  actions:
    - label: "Buy Now"
      url: "/buy_now/"
      class: "button buy-button"
---
<div class="spacer mt-4"></div>

{% include testimonials.html %}

<h2>Junk Store 2.0 is now available for purchase!</h2>

  We’re excited to announce that Junk Store is now available for purchase!<br>
  While the core features are ready, there may still be some bugs or rough edges as we continue polishing the experience.<br>
  <div><strong>We offer a 7-day free trial</strong> so you can try everything before committing. Cancel anytime before the trial ends if you're not satisfied or want to avoid being billed.</div><br>
 
  To thank our early supporters, we’re offering a special discount valid through the end of the month.<br>
  💸 Use code <span style="color: green; font-weight: bold;">EarlyBird</span> at checkout for <strong>25% off</strong> — valid until <strong>July 31, 2025</strong><br>

  If you’ve previously purchased or contributed, a <strong>discount</strong> has been applied against the email you signed up with on Patreon or Ko-fi. This is our way of saying thanks for backing the project early.

  Get in early, explore all the new features, and help shape the future of Junk Store.

  <div style="text-align: center; margin-top: 2rem;">
  <a href="https://portal.junkstore.xyz" target="_blank" rel="noopener" class="button buy-button">Sign Up Now</a>
</div>

<details class="faq-box">
  <summary>A few important clarifications upfront</summary>
  <p></p>
<ul>
  <li>This new version does <strong>not</strong> share code with the open source version.</li>
  <li>The open source version will remain available for the community, free to use and collaborate on.</li>
  <li>Junk Store does not handle any credentials other than its own. Your platform accounts (Steam, GOG, etc.) are not touched or stored by Junk Store.</li>
</ul>
</details>
<details class="faq-box">
  <summary>Pricing</summary>
  <p></p>
  After a lot of thought (and number crunching), here’s where we’ve landed:
  <ul>
    <li><strong>Aproximately $3 USD/month</strong> (billed yearly at $40 USD) – 12 months of updates included</li>
    <li>Includes all extension presets (currently GOG, Epic, and Amazon — more to come)</li>
    <li>You keep everything released during your subscription</li>
    <li><strong>12-month renewal:</strong> Around $3 USD/month, billed annually at $40 — includes continued updates and support</li>
    <li><strong>7-day free trial</strong> – explore all features before committing</li>
    <li>Stripe handles billing — cancel anytime during the trial</li>
  </ul>
</details>

<details class="faq-box">
  <summary>How many devices can I install Junk Store on?</summary>
  <p></p>
    You can install Junk Store on up to <strong>five</strong> devices under a single license. We think this strikes a fair balance between flexibility and sustainability.
</details>

<!-- <details class="faq-box">
  <summary>Early Supporters & Rollout Plan</summary>
  <p></p>
  To thank our existing users and supporters, we’ll begin onboarding them first. Due to hosting and bandwidth costs, we’re rolling out in waves to stay sustainable. Based on past download volumes, an immediate public launch would burn through our budget fast — and we want to do this right.
  <br>
  <br>

  <br>
  <br>
  We also expect the first couple of weeks to be a bit bumpy — this is all new code, and no software survives first contact with real users. Scaling gradually helps us support everyone properly and fix issues as they come up.
</details> -->

<details class="faq-box">
  <summary>What’s New?</summary>
  <p></p>
    This version is fully standalone — no more Decky required.
  <ul>
  <li>Major performance boost</li>
  <li>Amazon support</li>
  <li>Download queue</li>
  <li>Simplified extension generation (no coding needed)</li>
  <li>1,000 game tab limit (up from 100)</li>
  <li>Built-in dependency installer (no more Proton Tricks)</li>
  <li>Localisation support for games</li>
  <li>Big stability improvements — just 2 breakages since October (neither affected Steam)</li>
  <li>Push L3+R3 to open the UI instantly</li>
  <li>…and more</li>
</ul>
<p>This is a complete rebuild based on everything we learned from the Decky version. It’s been rock solid in internal use and with testers.</p>
<table style="width:100%; table-layout:fixed;">
    <thead>
      <tr>
        <th style="width:33%;">Feature</th>
        <th style="width:33%;">Decky Version</th>
        <th style="width:33%;">Paid Version</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Epic</td><td>✅ Yes</td><td>✅ Yes</td></tr>
      <tr><td>UMU Fixes</td><td>✅Yes</td><td>✅ Yes</td></tr>
      <tr><td>GOG</td><td>💰 Paid</td><td>✅ Yes</td></tr>
      <tr><td>Amazon</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Download queue</td><td>❌ No</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
              ✅ Yes <span class="hover-label">👁️ Hover to view</span>
              <div class="gif-popup">
                <img src="/assets/images/jspro/tablegifs/download.gif" alt="Demo">
              </div><br>
          </td>
      </tr>
      <tr><td>Emulators</td><td>❌ No</td><td>✅ Yes</td></tr>     
      <tr><td>ROM download support</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>GOG DOS games</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>GOG ScummVM games</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Built-in extension updates</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Built-in help</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Offline artwork cache</td><td>❌ No</td><td>✅ Yes (per extension)</td></tr>
      <tr><td>Change game language</td><td>❌ No</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
              ✅ Yes <span class="hover-label">👁️ Hover to view</span>
              <div class="gif-popup">
                <img src="/assets/images/jspro/tablegifs/languageselection.gif" alt="Demo">
              </div><br> 
          </td>
      </tr>
      <tr><td>Selective DLC install</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Change launcher per game</td><td>❌ No</td>
          <td class="hover-popup" onmouseenter="restartGif(this)">
              ✅ Yes <span class="hover-label">👁️ Hover to view</span>
              <div class="gif-popup">
                <img src="/assets/images/jspro/tablegifs/changelauncher.gif" alt="Demo">
              </div><br>
          </td>
      </tr>
      <tr><td>Custom script hooks</td><td>❌ No</td><td>✅ Yes</td></tr>
      <tr><td>Cloud Saves</td><td>❌ No</td><td>⚠️ Experimental - need to enable per game</td></tr>
      <tr><td>Access Junk Store</td><td>📥 Decky menu</td><td>🗗 Select or Ctrl+3</td></tr>
      <tr><td>Releases</td><td>🔧 Decky process</td><td>🚀 Direct</td></tr>
      <tr><td>Performance</td><td>💯 100 games/tab</td><td>🔟🔟🔟 1000 games/tab</td></tr>
      <tr><td>Tinkering</td><td>🔒 Limited</td><td>🔧 Extensive</td></tr>
      <tr><td>Open extensibility</td><td>🧩 All code</td><td>🪄 Generator + code</td></tr>
      <tr>
        <td>Game dependency install</td>
        <td>🛠️ Manual<br>🧪 Proton Tricks</td>
        <td class="hover-popup" onmouseenter="restartGif(this)">
          ⚙️ Built-in <span class="hover-label">👁️ Hover to view</span>
          <div class="gif-popup">
            <img src="/assets/images/jspro/tablegifs/dependencies.gif" alt="Demo">
          </div><br>
          🛠️ Manual<br>
          🧪 Proton Tricks
        </td>
      </tr>
      <tr><td>Custom extensions</td><td>👨‍💻 Manual coding</td><td>🧙 Wizard-supported</td></tr>
      <tr><td>Customise extensions</td><td>💻 Code heavy</td><td>🧠 Generated + hooks</td></tr>
    </tbody>
  </table>
    <style>
      .hover-popup {
        position: relative;
        display: inline-block;
      }

      .hover-label {
        font-size: 0.8em;
        font-weight: bold;
        color: #0af; /* bright cyan for visibility */
        margin-left: 0.25em;
      }

      .hover-popup .gif-popup {
      display: none;
      position: fixed;
      top: 2em; /* space below icon/text */
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      background: #222;
      padding: 0.75em;
      border: 2px solid #0af;
      border-radius: 0.5em;
      box-shadow: 0 0 10px #0af;
      max-width: 90vw; /* prevent horizontal overflow */
      max-height: 70vh; /* prevent vertical overflow */
      overflow: auto;
      text-align: center;
      }

      .hover-popup:hover .gif-popup {
        display: block;
      }

      .hover-popup img {
        max-width: 1000px;
        max-height: 900px;
        display: block;
      }
  </style>
</details>

<details class="faq-box">
  <summary>What’s Coming Next?</summary>
  <p></P>
  If launch goes well, here’s what we plan to add:
  <ul>
  <li>Itch.io support first (and EA, Ubisoft, Battle.net if viable)</li>
  <li>Cloud saves (done right — failure is not an option)</li>
  <li>Game-specific presets</li>
  <li>Better extension creation tools</li>
  <li>Community extension sharing</li>
  <li>Full UI localisation</li>
  <li>Automated updates</li>
  <li>And more as the platform matures</li>
</ul>
</details>

<details class="faq-box">
  <summary>Why We Need to Charge?</summary>
  <p></p>
  Over <strong>250,000 people</strong> downloaded the free version of Junk Store. While not all will upgrade, we have to plan for the possibility that many will at least try the new version — and trying has a cost.
  <br>
  <br>
  There are over <strong>5 million Steam Deck users</strong>. If even a fraction of them download the installer (which is <strong>~100MB</strong>), that’s <strong>terabytes of bandwidth</strong>. And it doesn’t stop there: each user may make 20–30 server requests per day, depending on usage. Those requests cost money — and at scale, it adds up <em>very</em> fast.
  <br>
  <br>
  We want every user to get a <strong>7-day free trial</strong> — but those trials still incur real backend costs.
  <br>
  <br>
  And that’s just infrastructure. We’d love to grow the team and build bigger features like <strong>cloud saves, community sharing,</strong> and <strong>automated updates</strong> — but developers and testers aren’t free.
  <br>
  <br>
  Since we can’t predict how many people will pay, we’ve had to base our pricing model on the <strong>users who’ve already contributed</strong> — meaning their purchases need to cover trials, servers, and support. That’s why the pricing isn’t just a “nice-to-have” — it’s the only way to scale sustainably.
</details>

<details class="faq-box">
  <summary>I already paid or subscribed — and now you want me to pay again?</summary>
  <p></p>
  <strong>No — not unless you choose to upgrade.</strong>
  <br>
  <br>
    If you supported us before the public rollout of the new version, we’ll offer you a discount as a thank you. We're doing our best to be fair — both to our users and to ourselves. We know how hard it is to earn money. We're in the same boat, putting in long hours to build something valuable — not to squeeze anyone dry.
  <br>
  <br>
  <strong>You’re not expected to repurchase anything.</strong>
  <ul>
    <li>If you bought the GOG extension, it remains yours.</li>
    <li>If you’re happy with the existing Decky version, keep using it — it’s still available and supported.</li>
  </ul>
    The only time you’ll need to pay is if you want to upgrade to the new version. It’s a completely rewritten app — independent of Decky, faster, more robust, and built from scratch to deliver more.
  <br>
  <br>
  <strong>But that’s optional. No pressure.</strong>
</details>

<details class="faq-box">
  <summary>Why no lifetime option?</summary>
  <p></p>
    We’ve seriously thought about it — but whose lifetime do you mean?<br>
    Yours? The developer’s? The Steam Deck’s? The software’s (v2, v3, or beyond)?
  <br>
  <br>
    What if Valve discontinues the Steam Deck or changes how Steam works? You’d end up paying for “lifetime” access to something that may no longer be usable.
  <br>
  <br>
    Tech changes fast, and long-term promises aren’t realistic. That’s why we offer 12 months of updates from your purchase date — including any major version releases during that time.
  <br>
  <br>
    After those 12 months, you keep full access to the version you have. There’s no “kill switch” — it just stops updating unless you renew.
</details>

<details class="faq-box">
  <summary>Why not monthly subscriptions?</summary>
  <p></p>
    We don’t like them either. To offer monthly billing, we’d need strict licensing and always-online checks. That could mean losing access to Junk Store and your games when the subscription ends — and we don’t want that.
  <br>
  <br>
  Instead, we offer annual subscriptions with:
  <ul>
    <li>A full 7-day free trial</li>
    <li>Clear expectations and no future promises you’re paying for</li>
    <li>No pressure — if it’s not for you, walk away, no hard feelings</li>
  </ul>
    This isn’t about greed. We’re a small, independent team with no investors or funding. If the project grows, we’ll drop the price. But for now, we need to make sure it survives.
</details>

<details class="faq-box">
  <summary>When will I know how much of a discount I’m getting, or when I’ll get access?</summary>
  <p></p>
    Each user’s discount is tailored based on their individual support history — some gave more, and we’ve tried to reflect that in kind. You’ll see your discount when you sign up for the trial.
  <br>
  <br>
    That said, the data we had to work with wasn’t perfect. Some of it required manual sorting, so if your discount doesn’t look right, please reach out — we want to make sure everyone is treated fairly.
</details>

<details class="faq-box">
  <summary>How frequently will updates and fixes roll out in v2?</summary>
  <p></p>
    Now that we control the full release cycle, we can push updates more frequently and with less friction. While we can’t guarantee a fixed schedule, separating extensions from the core plugin means fixes and new features can roll out quickly — sometimes within minutes once verified. We’re also building stable, beta, and test release streams so users can choose how cutting-edge they want to be. The pipeline is still evolving, and we will be bringing on help to speed things up as resourcing permits.
  <br>
  <br>
    We understand some users might worry about updates after release. The core commitment is a stable, working product with ongoing maintenance and support. New features will come as development allows, but they’re not what you're paying for upfront.
  <br>
  <br>
    Users should base their purchase decision on what the product currently offers — not on promises or speculative future features. If the current feature set doesn’t meet their needs, they’re free to wait and buy once it supports what they’re looking for.
</details>

<details class="faq-box">
  <summary>How resilient is Junk Store to SteamOS updates, now that it’s separate from Decky?</summary>
  <p></p>
    Junk Store doesn’t rely on Decky Loader. Instead, it uses a lightweight system called <strong>junk-loader</strong>, built to be more resilient with SteamOS updates.
  <br>
  <br>
    Unlike Decky, junk-loader runs as a user-mode systemd service, meaning:
    <ul>
      <li>No <code>sudo</code> access or password required</li>
      <li>Cleaner system integration</li>
      <li>No conflicts if Decky is also installed</li>
    </ul>
    This approach avoids many of the breakages Decky users face and lets us push fixes more quickly.
  <br>
  <br>
    Since switching to our own loader, Junk Store has only broken three times — and never in a way that took Steam down with it. Even when things glitched, Steam kept running, and users weren’t locked out of their games.
  <br>
  <br>
    It’s impossible to fully predict what Valve will change in future updates, but because our system is much smaller and more focused than Decky’s, we’re less exposed to breakages. We don’t have to support hundreds of plugins, so we can move faster when things do change.
  <br>
  <br>
    We often catch issues before they reach stable builds, and we're working toward automated recovery updates, so if something breaks, it can “self-heal” without requiring action from you. That said, we’ll roll this out carefully — auto-updates can be risky if not done right, and we want to make sure they’re safe before enabling them for everyone.
</details>

<details class="faq-box">
  <summary>What’s the future of the GOG addon and its open-source availability?</summary>
  <p>
    We’re using the GOG addon as a canary in the coal mine. If enough people continue to support it by purchasing, that sends a clear signal we should keep investing time into both the GOG addon and maintaining the open-source code. However, if sales drop off significantly, it will indicate we can safely scale back or stop work on the open-source version without jeopardizing the project’s sustainability. We will keep the door open on this and revisit it in the future though. It all comes down to sustainability.
  </p>
  <strong>If not, will it be made clear to people that they’re purchasing something that’s receiving maintenance updates only?</strong>
  <p>
    Yes — we’ll be upfront about that. The GOG addon will continue to receive bug fixes and essential maintenance, but we’re not actively adding new features at this time. The older system is much more time-intensive to work with compared to our new version, which automates much of the heavy lifting. That’s where our focus currently lies, though we’ll keep reassessing based on user demand and available resources.<br><br>
    It’s important to understand that some features users want are simply too large to build within the limitations of the existing GOG extension. While backporting features from the new version would be nice, it would require roughly ten times the effort due to the new tooling and rearchitected design centered around it.
  </p>
</details>

<script>
  function restartGif(container) {
    const gif = container.querySelector("img");
    const src = gif.getAttribute("src").split("?")[0]; // remove any existing query
    gif.setAttribute("src", `${src}?t=${Date.now()}`); // force reload
  }
</script>
