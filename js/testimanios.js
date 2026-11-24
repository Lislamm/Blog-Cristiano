const grid = document.getElementById('testimoniosGrid');

TESTIMONIOS.forEach(t => {
  const card = document.createElement('a');
  card.className = 'card card--link';
  card.href = `testimonio.html?id=${t.id}`;
  card.innerHTML = `
    <div class="card__img" style="background-image:url('${t.imagen}')"></div>
    <div class="card__body">
      <span class="card__category">Testimonio</span>
      <h3 class="card__title">${t.titulo}</h3>
      <p class="card__text">${t.resumen}</p>
      <span class="link">Leer completo →</span>
    </div>
  `;
  grid.appendChild(card);
});