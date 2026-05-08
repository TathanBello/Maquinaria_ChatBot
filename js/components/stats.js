import { APP_CONFIG } from '../../config/app.config.js';

/**
 * @param {HTMLElement} container
 * @param {{ value: number; label: string; suffix?: string }[]} items
 */
export function renderStats(container, items) {
  const grid = document.createElement('div');
  grid.className = 'stats-grid';
  items.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    const val = document.createElement('div');
    val.className = 'stat-card__value';
    val.textContent = '0';
    const lab = document.createElement('div');
    lab.className = 'stat-card__label';
    lab.textContent = item.label;
    card.append(val, lab);
    grid.append(card);
    animateValue(val, 0, item.value, APP_CONFIG.statsAnimationDuration, item.suffix || '');
  });
  container.append(grid);
}

/**
 * @param {HTMLElement} el
 * @param {number} start
 * @param {number} end
 * @param {number} duration
 * @param {string} suffix
 */
function animateValue(el, start, end, duration, suffix) {
  const startTime = performance.now();
  function frame(now) {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - (1 - t) ** 3;
    const current = Math.round(start + (end - start) * eased);
    el.textContent = `${current.toLocaleString('es-CO')}${suffix}`;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
