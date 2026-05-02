---
layout: junkstore-splash
title: "Junk Store Pro Gallery: Steam Deck Game Mode Demos"
hero_title: "Junk Store Pro Gallery"
description: "See Junk Store Pro in action on Steam Deck. Download queue, language selection, dependency installs and more — all from Game Mode."
permalink: /features/gallery/
classes: wide
excerpt: "See Junk Store Pro running in Game Mode — short demos, no Desktop Mode required"
---

{% include features/nav-tabs.html active="gallery" %}

<!-- Dark overlay for zoomed content -->
<div class="gallery-overlay" id="galleryOverlay"></div>

<!-- Animated GIFs Section -->
<h2 class="section-heading">Game Mode Features (Tap to play)</h2>
<div class="media-grid">

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/download-still.jpg"
        data-gif="/assets/images/jspro/gallery/download.webm"
        alt="Download queue management"
        data-still="/assets/images/jspro/gallery/download-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Download Queue</p>
    <p class="caption">Manage multiple downloads across stores - change order, pause or cancel individual downloads.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/language-still.jpg"
        data-gif="/assets/images/jspro/gallery/languageselection.webm"
        alt="Language selection"
        data-still="/assets/images/jspro/gallery/language-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Select Language for Game</p>
    <p class="caption">One-click install of languages for games that support them.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/dependencies-still.jpg"
        data-gif="/assets/images/jspro/gallery/dependencies.webm"
        alt="Install dependencies"
        data-still="/assets/images/jspro/gallery/dependencies-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Install Dependencies</p>
    <p class="caption">One-click install for common libraries like VC++ Redist, DirectX, .Net etc.</p>
  </div>

  <div class="media-item">
    <div class="gif-wrapper">
      <img
        class="gif-click"
        src="/assets/images/jspro/gallery/changelauncher-still.jpg"
        data-gif="/assets/images/jspro/gallery/changelauncher.webm"
        alt="Change launcher"
        data-still="/assets/images/jspro/gallery/changelauncher-still.jpg"
        loading="lazy"
      >
    </div>
    <p class="caption-title">Change Launcher</p>
    <p class="caption">Switch between ScummVm, Dosbox, Dolphin, etc.</p>
  </div>

</div>

<hr class="section-divider">

<!-- Junk Store in Action Section -->
<h2 class="section-heading">Junk Store in Action</h2>
<div class="media-grid">

 <div class="media-item">
  <a href="https://youtu.be/DI-5Wdvu7Kw" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/DI-5Wdvu7Kw/hqdefault.jpg" alt="Junk Store Pro v3 - The Biggest Update Yet" loading="lazy" width="320" height="180">
  </a>
  <p class="caption-title">Junk Store Pro v3 - The Biggest Update Yet</p>
  <p class="caption">Version 3 just dropped and it's pretty choice. Faster, cleaner, and packed with goodies.</p>
</div>

 <div class="media-item">
  <a href="https://youtu.be/kDKQyL5iLSg" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/kDKQyL5iLSg/hqdefault.jpg" alt="How to Install Junk Store Pro on Steam Deck" loading="lazy" width="320" height="180">
  </a>
  <p class="caption-title">How to Install Junk Store Pro on Steam Deck</p>
  <p class="caption">Step-by-step video tutorial on downloading and installing Junk Store Pro</p>
</div>

</div>

<section class="simple-cta">
  <h2>Ready to Try It Yourself?</h2>
  <p class="guarantee">7-day free trial · No commitment · Cancel anytime</p>
  <div class="cta-buttons">
    <a href="/portal-redirect/" rel="noopener" class="button buy-button large" data-event="click" data-category="conversion" data-action="trial_signup" data-label="gallery_tab_cta">Start Free Trial</a>
  </div>
</section>

<script>
// Gallery zoom/play behavior — extracted from original /features/ tab JS.
document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('galleryOverlay');

  function unzoomAll() {
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) closeBtn.remove();

    if (overlay) overlay.classList.remove('active');

    document.querySelectorAll('.gif-wrapper.playing').forEach(wrapper => {
      wrapper.classList.remove('playing');
    });

    document.querySelectorAll('img.gif-click.zoomed').forEach(zoomedImg => {
      const stillSrc = zoomedImg.getAttribute("data-still");
      const gifSrc = zoomedImg.getAttribute("data-gif");
      const altText = zoomedImg.getAttribute("alt");
      zoomedImg.outerHTML = `<img class="gif-click" src="${stillSrc}" data-gif="${gifSrc}" alt="${altText}" data-still="${stillSrc}" loading="lazy">`;
    });

    document.querySelectorAll('.gif-click').forEach(img => {
      img.classList.remove("zoomed");
      if (img.tagName === 'IMG') {
        img.src = img.getAttribute("data-still");
      }
    });

    attachClickListeners();
  }

  function attachClickListeners() {
    const currentImgs = document.querySelectorAll(".gif-click");
    currentImgs.forEach(img => {
      img.removeEventListener("click", handleClick);
      img.addEventListener("click", handleClick);
    });
  }

  function handleClick(e) {
    e.stopPropagation();
    const img = e.target;
    const wrapper = img.closest('.gif-wrapper');
    const isZoomed = img.classList.contains("zoomed");

    unzoomAll();

    if (!isZoomed) {
      if (overlay) overlay.classList.add('active');
      if (wrapper) wrapper.classList.add('playing');

      const webmSrc = img.getAttribute("data-gif");
      const gifSrc = webmSrc.replace('.webm', '.gif');
      const stillSrc = img.getAttribute("data-still");
      const altText = img.getAttribute("alt");

      img.outerHTML = `<img class="gif-click zoomed" src="${gifSrc}" alt="${altText}" data-gif="${webmSrc}" data-still="${stillSrc}" loading="lazy">`;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'close-btn';
      closeBtn.innerHTML = '&times;';
      document.body.appendChild(closeBtn);

      setTimeout(() => {
        attachClickListeners();
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          unzoomAll();
        });
      }, 0);
    }
  }

  attachClickListeners();

  if (overlay) {
    overlay.addEventListener("click", unzoomAll);
  }
  document.addEventListener("click", (e) => {
    if (!e.target.closest('.gif-wrapper') && !e.target.classList.contains('close-btn')) {
      unzoomAll();
    }
  });
});
</script>
