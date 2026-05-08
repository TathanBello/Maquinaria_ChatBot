/**
 * @param {string} selector
 * @param {ParentNode} [root]
 * @returns {HTMLElement | null}
 */
export function qs(selector, root = document) {
  return root.querySelector(selector);
}

/**
 * @param {string} selector
 * @param {ParentNode} [root]
 * @returns {NodeListOf<HTMLElement>}
 */
export function qsa(selector, root = document) {
  return root.querySelectorAll(selector);
}

/**
 * @param {string} tag
 * @param {Record<string, string>} [attrs]
 * @param {string | Node | (string | Node)[]} [children]
 * @returns {HTMLElement}
 */
export function createEl(tag, attrs = {}, children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'className') el.className = v;
    else if (k === 'text') el.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else el.setAttribute(k, v);
  });
  if (children != null) {
    const list = Array.isArray(children) ? children : [children];
    list.forEach((c) => {
      if (typeof c === 'string') el.append(document.createTextNode(c));
      else if (c) el.append(c);
    });
  }
  return el;
}

/**
 * @param {number} amount
 * @returns {string}
 */
export function formatPriceCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * @param {(...args: unknown[]) => void} fn
 * @param {number} wait
 * @returns {(...args: unknown[]) => void}
 */
export function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
