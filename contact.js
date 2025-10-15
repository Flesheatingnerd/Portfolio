document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    response.innerHTML = "<p>Transmitting data...</p>";

    // Simulated message sending
    setTimeout(() => {
      response.innerHTML = "<p><strong>Overseer:</strong> Transmission received. The Operator will review your message shortly.</p>";
      form.reset();
    }, 2000);
  });
});
