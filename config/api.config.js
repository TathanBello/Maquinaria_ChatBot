/**
 * Clave de API de Gemini (orden de prioridad):
 * 1) window.__ENV__.GEMINI_API_KEY en index.html antes del script module
 * 2) config/api.config.local.js (copiar desde api.config.local.example.js; gitignored)
 * 3) Sustituir el placeholder al final de este archivo solo en local (no subir al repo)
 */
const fromWindow =
  typeof window !== 'undefined' && window.__ENV__ && window.__ENV__.GEMINI_API_KEY
    ? window.__ENV__.GEMINI_API_KEY
    : '';

let fromLocalFile = '';
try {
  const mod = await import(new URL('./api.config.local.js', import.meta.url));
  const k = mod.GEMINI_API_KEY;
  if (typeof k === 'string' && k && k !== 'your_api_key_here') {
    fromLocalFile = k;
  }
} catch {
  // Sin api.config.local.js: se usa window o el fallback de abajo.
}

/** Sustituye solo si no usas __ENV__ ni api.config.local.js */
const FALLBACK_KEY = 'your_api_key_here';

export const GEMINI_API_KEY = fromWindow || fromLocalFile || FALLBACK_KEY;
