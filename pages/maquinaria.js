import { machineryCardHTML } from '../js/components/cards.js';
import { attachSearchFilter } from '../js/components/filters.js';

export async function render(root) {
  const res = await fetch(new URL('../data/machinery.json', import.meta.url));
  /** @type {Record<string, unknown>[]} */
  const all = await res.json();

  root.innerHTML = `
    <div class="section-header">
      <h1>Maquinaria pesada</h1>
      <p class="lead">Catálogo demo con especificaciones y precios orientativos en COP.</p>
    </div>
    <div id="machinery-grid" class="card-grid"></div>
  `;

  const grid = root.querySelector('#machinery-grid');
  if (!grid) return;

  function renderList(list) {
    grid.innerHTML = list.map((m) => machineryCardHTML(m)).join('');
  }

  renderList(all);
  attachSearchFilter(grid, 'Buscar por nombre, tipo o etiqueta…', (q) => {
    if (!q) {
      renderList(all);
      return;
    }
    const filtered = all.filter((m) => {
      const hay = `${m.name} ${m.type} ${(m.tags || []).join(' ')} ${m.summary}`.toLowerCase();
      return hay.includes(q);
    });
    renderList(filtered);
  });
}
