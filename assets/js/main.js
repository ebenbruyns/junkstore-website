document.addEventListener("DOMContentLoaded", function () {
  // Filter functionality for buttons (FAQ, Troubleshooting, etc.)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const contentBoxes = document.querySelectorAll(".content-box");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active state from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      contentBoxes.forEach((box) => {
        if (filter === "all" || box.classList.contains(filter)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });

});

