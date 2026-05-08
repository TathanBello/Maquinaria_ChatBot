import { CHATBOT_CONFIG } from '../config/chatbot.config.js';

/**
 * @param {string} fullPrompt - system + knowledge + user en un solo bloque de texto
 */
export function buildGenerateContentBody(fullPrompt) {
  return {
    contents: [{ parts: [{ text: fullPrompt }] }],
    generationConfig: {
      maxOutputTokens: CHATBOT_CONFIG.maxTokens,
      temperature: CHATBOT_CONFIG.temperature,
    },
  };
}
