export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Sobre mí</h1>
      <p class="lead">Perfil académico y técnico.</p>
    </div>
    <div class="card-grid" style="grid-template-columns: 1fr;">
      <article class="card">
        <img class="card__image" src="https://placehold.co/800x320/1c2530/0ea5e9?text=Jonathan+Lancheros" alt="Foto placeholder" width="800" height="320" />
        <div class="card__body">
          <h2 class="card__title">Jonathan David Lancheros Bello</h2>
          <p>
            Tengo 21 años y soy estudiante de <strong>ingeniería pesada</strong>, con conocimientos en
            manejo y reparación de maquinaria. Me interesa la <strong>inteligencia artificial aplicada</strong>
            al sector industrial y la formación técnica.
          </p>
          <p>
            Este proyecto <strong>HeavyAI</strong> integra una SPA modular en JavaScript vanilla,
            datos JSON de catálogo y un chatbot conectado a Gemini para consultas del dominio.
          </p>
          <p class="lead">Colombia · Plataforma educativa</p>
          <a class="btn btn--secondary" href="#/contacto"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Contacto (próximamente)</a>
        </div>
      </article>
    </div>
  `;
}
