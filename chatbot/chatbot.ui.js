import { processUserMessage } from './chatbot.logic.js';
import { addHistory, getHistory } from './chatbot.history.js';

/**
 * @param {HTMLElement} root
 */
export function mountChatbot(root) {
  root.innerHTML = `
    <div class="chatbot-panel" role="region" aria-label="Chatbot HeavyAI">
      <div class="chatbot-messages js-chat-messages"></div>
      <div class="chatbot-hint">Temas: maquinaria, cursos, marcas, instructores, HeavyAI. Configura la API Key en <code>config/api.config.js</code>.</div>
      <form class="chatbot-input-row js-chat-form">
        <label class="visually-hidden" for="chat-input">Escribe tu mensaje</label>
        <input id="chat-input" class="form-control js-chat-input" type="text" autocomplete="off" placeholder="Escribe tu pregunta…" required />
        <button type="submit" class="btn btn--primary js-chat-send">Enviar</button>
      </form>
    </div>
  `;

  const messagesEl = root.querySelector('.js-chat-messages');
  const form = root.querySelector('.js-chat-form');
  const input = root.querySelector('.js-chat-input');
  const sendBtn = root.querySelector('.js-chat-send');

  function appendBubble(role, text) {
    if (!messagesEl) return;
    const div = document.createElement('div');
    div.className =
      role === 'user' ? 'chat-bubble chat-bubble--user' : role === 'system' ? 'chat-bubble chat-bubble--system' : 'chat-bubble chat-bubble--bot';
    div.textContent = text;
    messagesEl.append(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  getHistory().forEach((m) => appendBubble(m.role, m.text));

  if (getHistory().length === 0) {
    const welcome =
      '¡Hola! Soy el asistente HeavyAI. Pregúntame por maquinaria, cursos, marcas o instructores.';
    addHistory('bot', welcome);
    appendBubble('bot', welcome);
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input?.value?.trim() || '';
    if (!text) return;
    input.value = '';
    addHistory('user', text);
    appendBubble('user', text);
    sendBtn.disabled = true;
    const thinking = document.createElement('div');
    thinking.className = 'chat-bubble chat-bubble--bot';
    thinking.textContent = '…';
    messagesEl?.append(thinking);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    try {
      const reply = await processUserMessage(text);
      thinking.remove();
      addHistory('bot', reply);
      appendBubble('bot', reply);
    } catch (err) {
      console.error(err);
      thinking.remove();
      const msg = 'Error al procesar el mensaje.';
      addHistory('system', msg);
      appendBubble('system', msg);
    } finally {
      sendBtn.disabled = false;
      input?.focus();
    }
  });

  input?.focus();
}
