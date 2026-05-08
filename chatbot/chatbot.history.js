import { clearChatHistory, getState, pushChatMessage } from '../js/state.js';

/**
 * @param {'user' | 'bot' | 'system'} role
 * @param {string} text
 */
export function addHistory(role, text) {
  pushChatMessage({ role, text });
}

export function getHistory() {
  return getState().chatHistory;
}

export function resetHistory() {
  clearChatHistory();
}
