// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("reminderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const remindTime = new Date(document.getElementById("time").value);
  const now = new Date();
  const delay = remindTime - now;
  const status = document.getElementById("status");

  if (delay <= 0) {
    alert("Please choose a future time!");
    return;
  }

  status.textContent = "⏰ Reminder set! Your email will be sent at the scheduled time.";

  setTimeout(() => {
    const templateParams = {
      to_email: email,
      message: message
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
      .then(() => {
        status.textContent = "✅ Reminder email sent successfully!";
      })
      .catch((error) => {
        status.textContent = "❌ Failed to send email. Check console.";
        console.error("EmailJS Error:", error);
      });
  }, delay);
});
