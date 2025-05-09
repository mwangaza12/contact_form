document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;
    const queryTypeChecked = document.querySelector('input[name="queryType"]:checked');

    // Simple email regex
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    // Error collection
    let errors = [];

    if (!firstName) errors.push("First name is required.");
    if (!lastName) errors.push("Last name is required.");
    if (!email || !emailRegex.test(email)) errors.push("Valid email is required.");
    if (!queryTypeChecked) errors.push("Please select a query type.");
    if (!message) errors.push("Message cannot be empty.");
    if (!consent) errors.push("You must consent to be contacted.");

    if (errors.length > 0) {
      alert("Form submission failed:\n\n" + errors.join("\n"));
    } else {
      alert("Form submitted successfully!");
    }
  });