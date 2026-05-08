import { APP_CONFIG } from '../config/app.config.js';
import { initSidebar } from './components/sidebar.js';
import { initRouter } from './router.js';
import { hidePageLoader } from './components/loader.js';

document.title = `${APP_CONFIG.name} — Maquinaria Pesada + IA`;

initSidebar();
initRouter();

window.requestAnimationFrame(() => {
  hidePageLoader();
});
