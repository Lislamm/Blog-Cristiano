/* ===== AÑO DEL FOOTER ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== MENÚ MÓVIL ===== */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav__list a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* ===== DEVOCIONALES DINÁMICOS ===== */
const devocionales = [
  {
    categoria: "Fe",
    titulo: "Cuando Dios parece callar",
    texto:
      "El silencio no es ausencia. Aprende a escuchar a Dios incluso cuando no sientes Su respuesta inmediata.",
    imagen:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800",
  },
  {
    categoria: "Identidad",
    titulo: "Eres más de lo que crees",
    texto:
      "Tu valor no depende de likes ni de lo que otros digan. En Cristo, tu identidad es firme y eterna.",
    imagen:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800",
  },
  {
    categoria: "Oración",
    titulo: "Aprender a orar sin fórmulas",
    texto:
      "La oración no es un discurso perfecto, es una conversación real con un Padre que te ama.",
    imagen:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800",
  },
];

const grid = document.getElementById("devocionalesGrid");
devocionales.forEach((d) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card__img" style="background-image:url('${d.imagen}')"></div>
    <div class="card__body">
      <span class="card__category">${d.categoria}</span>
      <h3 class="card__title">${d.titulo}</h3>
      <p class="card__text">${d.texto}</p>
      <a href="#" class="link">Leer más →</a>
    </div>
  `;
  grid.appendChild(card);
});

/* ===== TESTIMONIOS ===== */
const testimonios = [
  {
    texto:
      "Conocí a Cristo en la universidad y mi vida cambió por completo. Este blog me ayuda a mantenerme firme cada día.",
    autor: "— Daniel, 21 años",
  },
  {
    texto:
      "Antes me sentía sola, pero en esta comunidad encontré hermanos que oran conmigo y me impulsan a crecer.",
    autor: "— Laura, 19 años",
  },
  {
    texto:
      "Los devocionales son cortos pero profundos. Justo lo que necesito para empezar mi día con Dios.",
    autor: "— Andrés, 24 años",
  },
];

const contTest = document.getElementById("testimonials");
testimonios.forEach((t) => {
  const el = document.createElement("div");
  el.className = "testimonial";
  el.innerHTML = `
    <p class="testimonial__text">${t.texto}</p>
    <span class="testimonial__author">${t.autor}</span>
  `;
  contTest.appendChild(el);
});

/* ===== FORMULARIO ===== */
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ ¡Mensaje recibido! Pronto oraremos por ti.";
  form.reset();
  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});
