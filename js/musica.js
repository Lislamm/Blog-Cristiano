const grid = document.getElementById('musicaGrid');

MUSICA.forEach(m => {
  const card = document.createElement('a');
  card.className = 'music-card card--link';
  card.href = `cancion.html?id=${m.id}`;
  card.innerHTML = `
    <div class="music-card__cover" style="background-image:url('${m.imagen}')"></div>
    <div class="music-card__body">
      <h3>${m.titulo}</h3>
      <p>${m.descripcion}</p>
      <span class="link">Ver playlist →</span>
    </div>
  `;
  grid.appendChild(card);
});