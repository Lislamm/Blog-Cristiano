const grid = document.getElementById('devocionalesGrid');

DEVOCIONALES.forEach(d => {
  const card = document.createElement('a');
  card.className = 'card card--link';
  card.href = `devocional.html?id=${d.id}`;
  card.innerHTML = `
    <div class="card__img" style="background-image:url('${d.imagen}')"></div>
    <div class="card__body">
      <span class="card__category">${d.categoria}</span>
      <h3 class="card__title">${d.titulo}</h3>
      <p class="card__text">${d.resumen}</p>
      <span class="link">Leer devocional →</span>
    </div>
  `;
  grid.appendChild(card);
});