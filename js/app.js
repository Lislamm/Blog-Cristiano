// Año footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Formulario contacto (solo existe en contacto.html)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (form && formMessage) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '✅ ¡Mensaje recibido! Pronto oraremos por ti.';
    form.reset();
    setTimeout(() => { formMessage.textContent = ''; }, 5000);
  });
}