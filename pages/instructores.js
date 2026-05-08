export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Instructores</h1>
      <p class="lead">Perfiles profesionales — galería completa en roadmap.</p>
    </div>
    <div class="stub-card animate-fade-in">
      <i class="fa-solid fa-chalkboard-user" aria-hidden="true"></i>
      <h2>Próximamente</h2>
      <p>Plantilla de datos en <code>data/instructors.json</code>.</p>
      <a class="btn btn--primary" href="#/cursos">Ver cursos</a>
    </div>
  `;
}
