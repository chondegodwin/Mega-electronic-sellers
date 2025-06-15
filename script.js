document.getElementById('contactForm').addEventListener('submit', function (e) {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!firstName || !lastName || !phone || !email) {
    alert("Please fill in all fields.");
    e.preventDefault();
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    e.preventDefault();
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});
