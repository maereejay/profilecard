document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    let valid = true;

    // Reset error messages
    document
      .querySelectorAll(".error")
      .forEach((err) => (err.textContent = ""));

    // Full Name validation
    if (name.value.trim() === "") {
      document.getElementById("error-name").textContent =
        "Full name is required.";
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value.trim() === "") {
      document.getElementById("error-email").textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
      valid = false;
    }

    // Subject validation
    if (subject.value.trim() === "") {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
      document.getElementById("error-message").textContent =
        "Message is required.";
      valid = false;
    } else if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      success.hidden = false;
      this.reset();
    } else {
      success.hidden = true;
    }
  });
