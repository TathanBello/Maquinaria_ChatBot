export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Contacto</h1>
      <p class="lead">Formulario completo con envío — pendiente en MVP.</p>
    </div>
    <div class="stub-card animate-fade-in">
      <i class="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
      <h2>Próximamente</h2>
      <p>Se integrará validación con <code>js/components/contact.js</code> y <code>services/contact.service.js</code>.</p>
      <a class="btn btn--primary" href="#/chatbot">Ir al chatbot</a>
    </div>
  `;
}
