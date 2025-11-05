document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio script loaded successfully.");

  const toggleButtons = document.querySelectorAll(".toggle-details");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isVisible = details.classList.contains("visible");

      if (isVisible) {
        details.classList.remove("visible");
        button.textContent = "Show Details";
      } else {
        details.classList.add("visible");
        button.textContent = "Hide Details";
      }
    });
  });
});
