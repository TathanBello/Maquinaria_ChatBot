/**
 * @param {string} email
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * @param {string} phone
 */
export function isValidPhoneCO(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 12;
}

/**
 * @param {Record<string, string>} fields
 * @returns {Record<string, string>}
 */
export function validateContactForm(fields) {
  const errors = {};
  if (!fields.name || fields.name.trim().length < 2) errors.name = 'Ingresa un nombre válido.';
  if (!isValidEmail(fields.email || '')) errors.email = 'Correo electrónico no válido.';
  if (fields.phone && !isValidPhoneCO(fields.phone)) errors.phone = 'Teléfono no válido (10+ dígitos).';
  if (!fields.message || fields.message.trim().length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  return errors;
}
