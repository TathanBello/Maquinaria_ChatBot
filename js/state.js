/** @type {{ currentRoute: string; chatHistory: { role: string; text: string }[] }} */
const state = {
  currentRoute: 'home',
  chatHistory: [],
};

/**
 * @param {Partial<typeof state>} patch
 */
export function setState(patch) {
  Object.assign(state, patch);
}

export function getState() {
  return state;
}

/**
 * @param {{ role: string; text: string }} msg
 */
export function pushChatMessage(msg) {
  state.chatHistory.push(msg);
}

export function clearChatHistory() {
  state.chatHistory = [];
}
