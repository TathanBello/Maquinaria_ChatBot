import { setState, getState } from './state.js';
import { qs } from './utils.js';

/** @type {Record<string, () => Promise<{ render: (el: HTMLElement) => void | Promise<void> }>>} */
const routeLoaders = {
  home: () => import('../pages/home.js'),
  'historia-ia': () => import('../pages/historia-ia.js'),
  maquinaria: () => import('../pages/maquinaria.js'),
  marcas: () => import('../pages/marcas.js'),
  cursos: () => import('../pages/cursos.js'),
  instructores: () => import('../pages/instructores.js'),
  contacto: () => import('../pages/contacto.js'),
  chatbot: () => import('../pages/chatbot.js'),
  'sobre-mi': () => import('../pages/sobre-mi.js'),
};

/**
 * @returns {string}
 */
function getRouteFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  const segment = raw.split('/')[0] || 'home';
  return routeLoaders[segment] ? segment : 'home';
}

function updateSidebarActive() {
  const route = getState().currentRoute;
  document.querySelectorAll('.sidebar__link').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const r = href.replace('#/', '');
    link.classList.toggle('is-active', r === route);
  });
}

let loadId = 0;

async function navigate() {
  const id = ++loadId;
  const route = getRouteFromHash();
  setState({ currentRoute: route });
  updateSidebarActive();

  const outlet = qs('#app');
  if (!outlet) return;

  const loader = routeLoaders[route];
  if (!loader) return;

  outlet.innerHTML = '<p class="lead" style="padding:2rem;">Cargando…</p>';
  try {
    const mod = await loader();
    if (id !== loadId) return;
    await mod.render(outlet);
  } catch (e) {
    console.error(e);
    if (id !== loadId) return;
    outlet.innerHTML =
      '<p class="lead" style="color:var(--color-danger);">Error al cargar la página. Revisa la consola.</p>';
  }
}

export function initRouter() {
  window.addEventListener('hashchange', navigate);
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/home';
  }
  navigate();
}
