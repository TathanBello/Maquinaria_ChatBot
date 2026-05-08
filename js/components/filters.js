import { debounce } from '../utils.js';

/**
 * @param {HTMLElement} mountBefore - elemento antes del cual insertar la barra de filtros
 * @param {string} placeholder
 * @param {(query: string) => void} onFilter
 */
export function attachSearchFilter(mountBefore, placeholder, onFilter) {
  const wrap = document.createElement('div');
  wrap.className = 'form-group';
  wrap.style.marginBottom = '1.5rem';
  const input = document.createElement('input');
  input.type = 'search';
  input.className = 'form-control';
  input.placeholder = placeholder;
  input.setAttribute('aria-label', 'Filtrar');
  wrap.append(input);
  mountBefore.parentNode?.insertBefore(wrap, mountBefore);

  const run = debounce(() => {
    onFilter(input.value.trim().toLowerCase());
  }, 200);
  input.addEventListener('input', run);
}
