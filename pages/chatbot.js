import { mountChatbot } from '../chatbot/chatbot.ui.js';

export async function render(root) {
  root.innerHTML = `
    <div class="section-header">
      <h1>Chatbot IA</h1>
      <p class="lead">Asistente basado en Google Gemini con contexto HeavyAI y validación de temas.</p>
    </div>
    <div class="chatbot-page">
      <div id="chatbot-mount"></div>
    </div>
  `;
  const mount = root.querySelector('#chatbot-mount');
  if (mount) mountChatbot(mount);
}
