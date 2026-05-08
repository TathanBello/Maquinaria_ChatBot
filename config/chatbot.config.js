/** @type {{ model: string; maxTokens: number; temperature: number; systemPrompt: string; allowedTopics: string[] }} */
export const CHATBOT_CONFIG = {
  model: 'gemini-flash-latest',
  maxTokens: 1024,
  temperature: 0.7,
  systemPrompt: `Eres un asistente especializado ÚNICAMENTE en maquinaria pesada,
cursos técnicos, instructores, marcas del sector y la plataforma HeavyAI.
Responde SOLO temas relacionados con estos dominios. Si te preguntan otro tema, responde exactamente:
"Lo siento, actualmente solo puedo responder temas relacionados con maquinaria pesada, cursos e información del sistema."`,
  allowedTopics: ['maquinaria', 'cursos', 'instructores', 'marcas', 'jonathan', 'ia', 'heavyai', 'excavadora', 'bulldozer', 'komatsu', 'caterpillar', 'contacto', 'curso', 'formación'],
};
