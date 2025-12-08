// Simple accessible form handling: validates required fields and reports via aria-live

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];
    const name = form.elements['name'];
    const email = form.elements['email'];

    // Reset aria-invalid
    [name, email].forEach(el => el.removeAttribute('aria-invalid'));

    if (!name.value.trim()) {
      errors.push('El nombre es obligatorio.');
      name.setAttribute('aria-invalid', 'true');
    }
    if (!email.value.trim()) {
      errors.push('El correo es obligatorio.');
      email.setAttribute('aria-invalid', 'true');
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      errors.push('El correo no tiene formato válido.');
      email.setAttribute('aria-invalid', 'true');
    }

    if (errors.length) {
      message.classList.remove('sr-only');
      message.textContent = 'Errores: ' + errors.join(' ');
      // Keep it visible for screen readers; we'll add a timeout to hide visually
      setTimeout(() => message.classList.add('sr-only'), 8000);
    } else {
      message.classList.remove('sr-only');
      message.textContent = 'Mensaje enviado correctamente. Gracias por tu aporte.';
      form.reset();
      setTimeout(() => message.classList.add('sr-only'), 5000);
    }
  });
});
