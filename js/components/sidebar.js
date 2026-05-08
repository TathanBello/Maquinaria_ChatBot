import { qs, createEl } from '../utils.js';

const NAV = [
  { href: '#/home', icon: 'fa-house', label: 'Inicio' },
  { href: '#/historia-ia', icon: 'fa-robot', label: 'Historia de la IA' },
  { href: '#/maquinaria', icon: 'fa-truck-monster', label: 'Maquinaria' },
  { href: '#/marcas', icon: 'fa-industry', label: 'Marcas' },
  { href: '#/cursos', icon: 'fa-book', label: 'Cursos' },
  { href: '#/instructores', icon: 'fa-chalkboard-user', label: 'Instructores' },
  { href: '#/contacto', icon: 'fa-envelope', label: 'Contacto' },
  { href: '#/chatbot', icon: 'fa-comments', label: 'Chatbot IA' },
  { href: '#/sobre-mi', icon: 'fa-user', label: 'Sobre mí' },
];

export function initSidebar() {
  const sidebar = qs('#sidebar');
  const toggle = qs('#sidebar-toggle');
  if (!sidebar) return;

  const overlay = createEl('div', {
    className: 'sidebar-overlay',
    id: 'sidebar-overlay',
    'aria-hidden': 'true',
  });
  document.body.append(overlay);

  const logo = createEl('div', { className: 'sidebar__logo' });
  logo.append(
    createEl('div', { className: 'sidebar__logo-icon' }, [
      (() => {
        const i = document.createElement('i');
        i.className = 'fa-solid fa-gears';
        i.setAttribute('aria-hidden', 'true');
        return i;
      })(),
    ]),
  );
  logo.append(createEl('span', { className: 'sidebar__logo-text', text: 'HeavyAI' }));

  const nav = createEl('ul', { className: 'sidebar__nav' });
  NAV.forEach((item) => {
    const li = createEl('li');
    const a = createEl('a', {
      className: 'sidebar__link',
      href: item.href,
    });
    const icon = document.createElement('i');
    icon.className = `fa-solid ${item.icon}`;
    icon.setAttribute('aria-hidden', 'true');
    a.append(icon, document.createTextNode(` ${item.label}`));
    a.addEventListener('click', () => closeMobile());
    li.append(a);
    nav.append(li);
  });

  sidebar.innerHTML = '';
  sidebar.append(logo, nav);

  function openMobile() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
  }

  function closeMobile() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
  }

  toggle?.addEventListener('click', () => {
    if (sidebar.classList.contains('is-open')) closeMobile();
    else openMobile();
  });
  overlay.addEventListener('click', closeMobile);
}
