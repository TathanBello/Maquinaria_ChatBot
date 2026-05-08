/**
 * Stub: en producción enviarías a un backend o servicio de email.
 * @param {Record<string, string>} payload
 */
export async function submitContact(payload) {
  console.info('[contact.service] submitContact (stub)', payload);
  return { ok: true, message: 'Mensaje registrado (stub). Revisa la consola.' };
}
