export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Historia de la IA</h1>
      <p class="lead">Esta sección estará disponible en la versión completa con línea de tiempo interactiva.</p>
    </div>
    <div class="stub-card animate-fade-in">
      <i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
      <h2>Próximamente</h2>
      <p>Aquí verás hitos históricos y su relación con el sector industrial.</p>
      <a class="btn btn--primary" href="#/home">Volver al inicio</a>
    </div>
  `;
}
