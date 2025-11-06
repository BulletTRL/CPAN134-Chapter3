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


// Contact Form Validation Setup
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    document.querySelectorAll(".error-message").forEach(el => el.classList.remove("active"));
    [firstName, lastName, email, message].forEach(el => el.classList.remove("error"));

    const nameRegex = /^[A-Za-z\s'-]+$/;
    if (!firstName.value.trim() || !nameRegex.test(firstName.value)) {
      showError(firstName, "First name is required and cannot contain numbers or symbols.");
      valid = false;
    }

    if (lastName.value.trim() && !nameRegex.test(lastName.value)) {
      showError(lastName, "Last name cannot contain numbers or symbols.");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    if (!message.value.trim()) {
      showError(message, "Please enter a message before sending.");
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function showError(input, message) {
    const error = input.parentElement.querySelector(".error-message");
    error.textContent = message;
    error.classList.add("active");
    input.classList.add("error");
  }
});
