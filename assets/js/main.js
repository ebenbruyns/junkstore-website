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

  // Highlight.js for syntax highlighting
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js";
  script.onload = function() {
    // Initialize highlight.js for syntax highlighting
    hljs.highlightAll();
  };
  document.head.appendChild(script);

  // Copy code function for the copy button
  function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const codeText = codeBlock.textContent;

    // Create a temporary textarea to copy the code
    const textArea = document.createElement("textarea");
    textArea.value = codeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Optional: Show a success message after copying
    button.textContent = "Copied!";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  }

  // Attach copy functionality to the copy buttons
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      copyCode(this);
    });
  });

});

