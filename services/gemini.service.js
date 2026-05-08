import { CHATBOT_CONFIG } from '../config/chatbot.config.js';
import { GEMINI_API_KEY } from '../config/api.config.js';
import { getGeminiGenerateContentUrl } from '../api/endpoints.js';
import { buildGenerateContentBody } from '../api/gemini.api.js';
import { getKnowledgeContext } from './knowledge.service.js';

/**
 * @param {string} userMessage
 */
export async function askGemini(userMessage) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_api_key_here') {
    return 'Configura tu GEMINI_API_KEY en config/api.config.js o en window.__ENV__ para usar el chatbot.';
  }

  const fullPrompt = `${CHATBOT_CONFIG.systemPrompt}

CONTEXTO (HeavyAI):
${getKnowledgeContext()}

USUARIO:
${userMessage}`;

  const url = getGeminiGenerateContentUrl();
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY,
    },
    body: JSON.stringify(buildGenerateContentBody(fullPrompt)),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.error?.message || res.statusText || 'Error HTTP';
    return `Error de la API: ${msg}`;
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return text || 'No se recibió respuesta del modelo.';
}
