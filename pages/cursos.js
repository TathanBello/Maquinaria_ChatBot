import { courseCardHTML } from '../js/components/cards.js';
import { attachSearchFilter } from '../js/components/filters.js';

export async function render(root) {
  const res = await fetch(new URL('../data/courses.json', import.meta.url));
  /** @type {Record<string, unknown>[]} */
  const all = await res.json();

  root.innerHTML = `
    <div class="section-header">
      <h1>Cursos técnicos</h1>
      <p class="lead">Formación alineada a operación, mantenimiento e ingeniería de obra.</p>
    </div>
    <div id="courses-grid" class="card-grid"></div>
  `;

  const grid = root.querySelector('#courses-grid');
  if (!grid) return;

  function renderList(list) {
    grid.innerHTML = list.map((c) => courseCardHTML(c)).join('');
  }

  renderList(all);
  attachSearchFilter(grid, 'Buscar curso por título o instructor…', (q) => {
    if (!q) {
      renderList(all);
      return;
    }
    const filtered = all.filter((c) => {
      const hay = `${c.title} ${c.instructor} ${c.description}`.toLowerCase();
      return hay.includes(q);
    });
    renderList(filtered);
  });
}
