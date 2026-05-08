import { CHATBOT_CONFIG } from '../config/chatbot.config.js';

/**
 * Heurística simple: si no hay coincidencia con temas permitidos, no llamamos a la API.
 * @param {string} text
 */
export function isQueryInDomain(text) {
  const t = (text || '').toLowerCase().trim();
  if (!t) return false;
  if (t.length <= 2) return true;
  const greetings = /^(hola|buen|buenas|gracias|ok|vale|hey|hi)\b/;
  if (greetings.test(t)) return true;
  return CHATBOT_CONFIG.allowedTopics.some((k) => t.includes(k.toLowerCase()));
}

export function offDomainReply() {
  return 'Lo siento, actualmente solo puedo responder temas relacionados con maquinaria pesada, cursos e información del sistema.';
}
