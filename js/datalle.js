const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'), 10) || 1;

// Detectar qué página es por el contenedor presente
const contDev = document.getElementById('detalleContenido');
const contMus = document.getElementById('detallePlaylist');
const contTes = document.getElementById('detalleTestimonio');

/* ========== DEVOCIONAL ========== */
if (contDev) {
  const d = DEVOCIONALES.find(x => x.id === id) || DEVOCIONALES[0];
  document.title = d.titulo + ' | Fuego Joven';

  contDev.innerHTML = `
    <a href="devocionales.html" class="back-link">← Volver a devocionales</a>
    <div class="detail__hero" style="background-image:url('${d.imagen}')">
      <div class="detail__hero-overlay"></div>
      <div class="detail__hero-content">
        <span class="card__category">${d.categoria} · ${d.fecha}</span>
        <h1 class="detail__title">${d.titulo}</h1>
        <p class="detail__author">Por ${d.autor}</p>
      </div>
    </div>
    <div class="detail__body">
      <blockquote class="detail__verse">${d.versiculo}</blockquote>
      ${d.contenido.map(p => `<p>${p}</p>`).join('')}
      <div class="detail__share">
        <strong>Comparte:</strong>
        <a href="#" class="btn btn--ghost">WhatsApp</a>
        <a href="#" class="btn btn--ghost">Instagram</a>
        <a href="#" class="btn btn--ghost">Copiar link</a>
      </div>
    </div>
  `;

  // Otros devocionales
  const otros = document.getElementById('otrosDevocionales');
  DEVOCIONALES.filter(x => x.id !== d.id).forEach(o => {
    const card = document.createElement('a');
    card.className = 'card card--link';
    card.href = `devocional.html?id=${o.id}`;
    card.innerHTML = `
      <div class="card__img" style="background-image:url('${o.imagen}')"></div>
      <div class="card__body">
        <span class="card__category">${o.categoria}</span>
        <h3 class="card__title">${o.titulo}</h3>
        <p class="card__text">${o.resumen}</p>
        <span class="link">Leer →</span>
      </div>
    `;
    otros.appendChild(card);
  });
}

/* ========== MÚSICA ========== */
if (contMus) {
  const m = MUSICA.find(x => x.id === id) || MUSICA[0];
  document.title = m.titulo + ' | Fuego Joven';

  contMus.innerHTML = `
    <a href="musica.html" class="back-link">← Volver a música</a>
    <div class="detail__hero" style="background-image:url('${m.imagen}')">
      <div class="detail__hero-overlay"></div>
      <div class="detail__hero-content">
        <span class="card__category">Playlist</span>
        <h1 class="detail__title">${m.titulo}</h1>
        <p class="detail__author">${m.descripcion}</p>
      </div>
    </div>
    <div class="detail__body">
      <h2 class="detail__subtitle">Canciones</h2>
      <ol class="song-list">
        ${m.canciones.map(c => `<li>${c}</li>`).join('')}
      </ol>
    </div>
  `;

  const otras = document.getElementById('otrasPlaylists');
  MUSICA.filter(x => x.id !== m.id).forEach(o => {
    const card = document.createElement('a');
    card.className = 'music-card card--link';
    card.href = `cancion.html?id=${o.id}`;
    card.innerHTML = `
      <div class="music-card__cover" style="background-image:url('${o.imagen}')"></div>
      <div class="music-card__body">
        <h3>${o.titulo}</h3>
        <p>${o.descripcion}</p>
        <span class="link">Ver →</span>
      </div>
    `;
    otras.appendChild(card);
  });
}

/* ========== TESTIMONIO ========== */
if (contTes) {
  const t = TESTIMONIOS.find(x => x.id === id) || TESTIMONIOS[0];
  document.title = t.titulo + ' | Fuego Joven';

  contTes.innerHTML = `
    <a href="testimonios.html" class="back-link">← Volver a testimonios</a>
    <div class="detail__hero" style="background-image:url('${t.imagen}')">
      <div class="detail__hero-overlay"></div>
      <div class="detail__hero-content">
        <span class="card__category">Testimonio · ${t.edad}</span>
        <h1 class="detail__title">${t.titulo}</h1>
        <p class="detail__author">— ${t.autor}</p>
      </div>
    </div>
    <div class="detail__body">
      ${t.contenido.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;

  const otros = document.getElementById('otrosTestimonios');
  TESTIMONIOS.filter(x => x.id !== t.id).forEach(o => {
    const card = document.createElement('a');
    card.className = 'card card--link';
    card.href = `testimonio.html?id=${o.id}`;
    card.innerHTML = `
      <div class="card__img" style="background-image:url('${o.imagen}')"></div>
      <div class="card__body">
        <span class="card__category">Testimonio</span>
        <h3 class="card__title">${o.titulo}</h3>
        <p class="card__text">${o.resumen}</p>
        <span class="link">Leer →</span>
      </div>
    `;
    otros.appendChild(card);
  });
}