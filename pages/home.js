import { APP_CONFIG } from '../config/app.config.js';
import { buildHeroHTML } from '../js/components/hero.js';
import { renderStats } from '../js/components/stats.js';

export async function render(root) {
  const [machRes, courseRes] = await Promise.all([
    fetch(new URL('../data/machinery.json', import.meta.url)),
    fetch(new URL('../data/courses.json', import.meta.url)),
  ]);
  const machinery = await machRes.json();
  const courses = await courseRes.json();

  const actions = `
    <a class="btn btn--primary" href="#/maquinaria">Ver maquinaria</a>
    <a class="btn btn--secondary" href="#/chatbot">Probar chatbot</a>
  `;

  root.innerHTML = `
    ${buildHeroHTML({
      title: `${APP_CONFIG.name}: <span class="text-gradient">Maquinaria + IA</span>`,
      subtitle:
        'Plataforma educativa y corporativa: catálogo técnico, cursos y asistente con Gemini restringido al dominio.',
      badge: 'Sector industrial · Colombia',
      bgImage: 'https://placehold.co/1400x500/0f1419/4a7c2e?text=HeavyAI+Hero',
      actions,
    })}
    <div class="section-header">
      <h2>Indicadores</h2>
      <p class="lead">Datos orientativos del catálogo demo.</p>
    </div>
    <div id="home-stats"></div>
    <div class="section-header">
      <h2>Explora el sistema</h2>
      <p class="lead">Navega por el menú lateral o usa los accesos rápidos.</p>
    </div>
    <div class="card-grid">
      <article class="card">
        <div class="card__body">
          <h3 class="card__title">Maquinaria pesada</h3>
          <p>Fichas técnicas y precios en COP.</p>
          <a class="btn btn--sm btn--primary" href="#/maquinaria">Ir</a>
        </div>
      </article>
      <article class="card">
        <div class="card__body">
          <h3 class="card__title">Cursos</h3>
          <p>Programas con nivel, modalidad y certificación.</p>
          <a class="btn btn--sm btn--primary" href="#/cursos">Ir</a>
        </div>
      </article>
      <article class="card">
        <div class="card__body">
          <h3 class="card__title">Chatbot IA</h3>
          <p>Consultas sobre el dominio HeavyAI vía Gemini.</p>
          <a class="btn btn--sm btn--primary" href="#/chatbot">Ir</a>
        </div>
      </article>
    </div>
  `;

  const statsMount = root.querySelector('#home-stats');
  if (statsMount) {
    renderStats(statsMount, [
      { value: machinery.length, label: 'Tipos de maquinaria' },
      { value: courses.length, label: 'Cursos activos' },
      { value: 2, label: 'Instructores demo' },
      { value: 8, label: 'Marcas referenciadas' },
    ]);
  }
}
