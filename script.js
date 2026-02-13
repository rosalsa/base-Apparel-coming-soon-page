const form = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!validateEmail(emailValue)) {
    form.classList.add('form-error');
  } else {
    form.classList.remove('form-error');
    alert('Thank you for subscribing!');
    emailInput.value = '';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

emailInput.addEventListener('input', () => {
  if (form.classList.contains('form-error')) {
    form.classList.remove('form-error');
  }
});