import { qs } from '../utils.js';

export function hidePageLoader() {
  const el = qs('#page-loader');
  if (el) {
    el.classList.add('is-hidden');
    setTimeout(() => el.remove(), 400);
  }
}

export function showInlineLoader(message = 'Cargando…') {
  const p = document.createElement('p');
  p.className = 'lead';
  p.style.padding = '2rem';
  p.textContent = message;
  return p;
}
