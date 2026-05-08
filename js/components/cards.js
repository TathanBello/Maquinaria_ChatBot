import { formatPriceCOP } from '../utils.js';

/**
 * @param {Record<string, unknown>} m
 */
export function machineryCardHTML(m) {
  const img = m.image || 'https://placehold.co/400x250/161d26/0ea5e9?text=Maquinaria';
  const tags = (m.tags || []).map((t) => `<span class="tag">${String(t)}</span>`).join('');
  return `
    <article class="card">
      <img class="card__image" src="${img}" alt="${String(m.name)}" loading="lazy" width="400" height="250" />
      <div class="card__body">
        <h3 class="card__title">${String(m.name)}</h3>
        <div class="card__meta">
          <span><i class="fa-solid fa-weight-hanging" aria-hidden="true"></i> ${String(m.weight || '')}</span>
          <span><i class="fa-solid fa-bolt" aria-hidden="true"></i> ${String(m.power || '')}</span>
        </div>
        <p>${String(m.summary || '')}</p>
        <div class="card__price">${formatPriceCOP(Number(m.priceCOP) || 0)}</div>
        ${tags ? `<div class="card__tags">${tags}</div>` : ''}
      </div>
    </article>
  `;
}

/**
 * @param {Record<string, unknown>} c
 */
export function courseCardHTML(c) {
  const img = c.image || 'https://placehold.co/400x250/161d26/4a7c2e?text=Curso';
  return `
    <article class="card">
      <img class="card__image" src="${img}" alt="${String(c.title)}" loading="lazy" width="400" height="250" />
      <div class="card__body">
        <h3 class="card__title">${String(c.title)}</h3>
        <div class="card__meta">
          <span><i class="fa-regular fa-clock" aria-hidden="true"></i> ${String(c.duration || '')}</span>
          <span><i class="fa-solid fa-signal" aria-hidden="true"></i> ${String(c.level || '')}</span>
          <span><i class="fa-solid fa-chalkboard" aria-hidden="true"></i> ${String(c.modality || '')}</span>
        </div>
        <p>${String(c.description || '')}</p>
        <div class="card__meta">
          <span><i class="fa-solid fa-user-tie" aria-hidden="true"></i> ${String(c.instructor || '')}</span>
        </div>
        <div class="card__price">${formatPriceCOP(Number(c.priceCOP) || 0)}</div>
        ${c.certification ? `<span class="tag">${String(c.certification)}</span>` : ''}
      </div>
    </article>
  `;
}
