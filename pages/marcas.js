export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Marcas</h1>
      <p class="lead">Perfiles de fabricantes líderes — contenido ampliado en la siguiente iteración.</p>
    </div>
    <div class="stub-card animate-fade-in">
      <i class="fa-solid fa-industry" aria-hidden="true"></i>
      <h2>Próximamente</h2>
      <p>Los datos base ya existen en <code>data/brands.json</code> para futuras cards.</p>
      <a class="btn btn--primary" href="#/home">Volver al inicio</a>
    </div>
  `;
}
