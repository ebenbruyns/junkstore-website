---
layout: splash
title: "Junk Store in Action - Videos & Screenshots"
description: "See Junk Store in action on Steam Deck - videos, GIFs & screenshots. Everything done in Game Mode, no Desktop Mode required."
permalink: /gallery/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/website_image.jpg
excerpt: "Explore Junk Store in action: GIFs, videos, and articles."
classes: wide
---
<div class="spacer mt-4"></div>

**See the difference: Everything shown here is done in Game Mode with your Steam Deck's controller.** No Desktop Mode switching, no mouse required—just pure handheld gaming as intended.

<!-- Animated GIFs Section -->
<h2>Game Mode Features (Click to animate)</h2>
<div class="media-grid">

  <div class="media-item">
    <img 
      class="gif-click" 
      src="/assets/images/jspro/gallery/download-still.jpg" 
      data-gif="/assets/images/jspro/gallery/download.gif" 
      alt="Cloud saves" 
      data-still="/assets/images/jspro/gallery/download-still.jpg"
    >
    <p class="caption-title">Download Queue</p>
    <p class="caption">Manage multiple downloads across stores - change order, pause or cancel individual downloads.</p>
  </div>

  <div class="media-item">
    <img 
      class="gif-click" 
      src="/assets/images/jspro/gallery/language-still.jpg" 
      data-gif="/assets/images/jspro/gallery/languageselection.gif" 
      alt="Install dependencies" 
      data-still="/assets/images/jspro/gallery/language-still.jpg"
    >
    <p class="caption-title">Select Language for Game</p>
    <p class="caption">One-click install of languages for games that support them.</p>
  </div>


  <div class="media-item">
    <img 
      class="gif-click" 
      src="/assets/images/jspro/gallery/dependencies-still.jpg" 
      data-gif="/assets/images/jspro/gallery/dependencies.gif" 
      alt="Install dependencies" 
      data-still="/assets/images/jspro/gallery/dependencies-still.jpg"
    >
    <p class="caption-title">Install Dependencies</p>
    <p class="caption">One-click install for common libraries like VC++ Redist, DirectX, .Net etc.</p>
  </div>

  <div class="media-item">
    <img 
      class="gif-click" 
      src="/assets/images/jspro/gallery/changelauncher-still.jpg" 
      data-gif="/assets/images/jspro/gallery/changelauncher.gif" 
      alt="Change launcher" 
      data-still="/assets/images/jspro/gallery/changelauncher-still.jpg"
    >
    <p class="caption-title">Change Launcher</p>
    <p class="caption">Switch between ScummVm, Dosbox, Dolphin, etc..</p>
  </div>

</div>

---

<!-- Junk Store in Action Section -->
<h2>Junk Store in Action</h2>
<div class="media-grid">

 <div class="media-item">
  <a href="https://youtu.be/kDKQyL5iLSg" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/kDKQyL5iLSg/hqdefault.jpg" alt="How to Install Junk Store 2.0 on Steam Deck">
  </a>
  <p class="caption-title">How to Install Junk Store 2.0 on Steam Deck</p>
  <p class="caption">Step-by-step video tutorial on downloading and installing Junk Store 2.0</p>
</div>


</div>
---

<!-- Video & Article Section -->
<h2>Interviews with the Developer</h2>
<div class="media-grid">

  <div class="media-item">
    <a href="https://youtu.be/iRVFqHGkqio?si=H3RnIVYtWN6vxsaC" target="_blank" rel="noopener noreferrer">
      <img src="https://img.youtube.com/vi/iRVFqHGkqio/hqdefault.jpg" alt="Interview with Gardiner Bryant (Video)">
    </a>
    <p class="caption-title">Interview with Gardiner Bryant (Video) - June 2025</p>
    <p class="caption">Listen to the dev behind Junk Store discuss development, features and why he created Junk Store.</p>
  </div>

  <div class="media-item">
    <a href="https://gardinerbryant.com/an-interview-with-the-dev-behind-junk-store/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/JSInstall/Doom 64.jpeg" alt="Interview with Gardiner Bryant (Article)">
    </a>
    <p class="caption-title">Interview with PerfectDark (Article) - July 2024</p>
    <p class="caption">A deep dive into the philosophy behind Junk Store early on development.</p>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".gif-click");

  function unzoomAll() {
    imgs.forEach(img => {
      img.classList.remove("zoomed");
      img.src = img.getAttribute("data-still");
    });
  }

  imgs.forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation(); // prevent event bubbling to document click
      const isZoomed = img.classList.contains("zoomed");

      // Unzoom all first
      unzoomAll();

      if (!isZoomed) {
        // Zoom this one and switch to GIF
        img.src = img.getAttribute("data-gif");
        img.classList.add("zoomed");
      }
    });
  });

  // Click anywhere else closes all zooms
  document.addEventListener("click", () => {
    unzoomAll();
  });
});
</script>
