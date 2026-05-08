import { askGemini } from '../services/gemini.service.js';
import { isQueryInDomain, offDomainReply } from './chatbot.validator.js';

/**
 * @param {string} userText
 */
export async function processUserMessage(userText) {
  const trimmed = userText.trim();
  if (!trimmed) return '';
  if (!isQueryInDomain(trimmed)) return offDomainReply();
  return askGemini(trimmed);
}
