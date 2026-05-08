import { CHATBOT_CONFIG } from '../config/chatbot.config.js';

/**
 * @param {string} [modelId]
 */
export function getGeminiGenerateContentUrl(modelId = CHATBOT_CONFIG.model) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent`;
}
