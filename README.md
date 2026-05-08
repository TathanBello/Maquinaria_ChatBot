# 🏗️ HeavyAI — Plataforma de Maquinaria Pesada e Inteligencia Artificial

> Plataforma educativa y corporativa especializada en maquinaria pesada, formación técnica e inteligencia artificial aplicada al sector industrial.

---

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Variables de Entorno](#variables-de-entorno)
- [Ejecución Local](#ejecución-local)
- [Módulos del Sistema](#módulos-del-sistema)
- [Integración Chatbot IA](#integración-chatbot-ia)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Autor](#autor)

---

## 📌 Descripción General

**HeavyAI** es una landing page profesional, moderna y escalable orientada al sector de maquinaria pesada e inteligencia artificial. Está diseñada para ofrecer:

- Información técnica detallada sobre maquinaria pesada
- Catálogo de cursos de formación técnica
- Perfiles de instructores especializados
- Integración con Chatbot IA usando la API de Google Gemini
- Secciones de marcas líderes del sector

---

## ✨ Características

- ✅ Diseño **responsive** (móvil, tablet, escritorio)
- ✅ Arquitectura **modular y escalable**
- ✅ Menú lateral con **navegación suave**
- ✅ **Chatbot IA** integrado con Google Gemini
- ✅ Base de conocimiento **restringida al dominio**
- ✅ Formulario de contacto con **validaciones JS**
- ✅ Animaciones CSS suaves y **transiciones elegantes**
- ✅ Paleta **verde industrial + azul tecnológico**
- ✅ Cards modernas con sombras y efectos hover
- ✅ Estadísticas visuales animadas
- ✅ Código limpio, comentado y reutilizable

---

## 🛠️ Tecnologías

| Tecnología     | Versión / Detalle              |
|----------------|-------------------------------|
| HTML5          | Semántico y accesible          |
| CSS3           | Variables, Flexbox, Grid       |
| JavaScript     | ES6+ Vanilla, Módulos          |
| Google Gemini  | API v1beta (Gemini Flash)      |
| Google Fonts   | Tipografías corporativas       |
| Font Awesome   | Iconografía moderna            |

---

## 📁 Estructura del Proyecto

```
heavyai/
│
├── index.html                    # Punto de entrada principal
├── .env.example                  # Plantilla de variables de entorno
├── README.md                     # Documentación del proyecto
│
├── assets/
│   ├── images/
│   │   ├── hero/                 # Imágenes del hero banner
│   │   ├── machinery/            # Imágenes de maquinaria pesada
│   │   ├── brands/               # Logos de marcas
│   │   └── instructors/          # Fotos de instructores
│   ├── icons/                    # Íconos SVG personalizados
│   └── fonts/                    # Fuentes locales (si aplica)
│
├── css/
│   ├── variables.css             # Variables CSS globales (colores, fuentes, espaciado)
│   ├── reset.css                 # Reset y normalización de estilos
│   ├── typography.css            # Estilos tipográficos globales
│   ├── animations.css            # Animaciones y transiciones
│   ├── responsive.css            # Media queries globales
│   └── components/
│       ├── sidebar.css           # Menú lateral
│       ├── hero.css              # Hero section
│       ├── cards.css             # Cards reutilizables
│       ├── buttons.css           # Estilos de botones
│       ├── forms.css             # Formularios
│       ├── chatbot.css           # Interfaz del chatbot
│       ├── modals.css            # Ventanas modales
│       └── stats.css             # Estadísticas visuales
│
├── js/
│   ├── main.js                   # Punto de entrada JS, inicialización
│   ├── router.js                 # Enrutador SPA (navegación entre secciones)
│   ├── state.js                  # Gestión de estado global
│   ├── utils.js                  # Funciones utilitarias compartidas
│   └── components/
│       ├── sidebar.js            # Lógica del menú lateral
│       ├── hero.js               # Lógica del hero
│       ├── stats.js              # Animación de estadísticas
│       ├── cards.js              # Renderizado dinámico de cards
│       ├── filters.js            # Filtros para maquinaria y cursos
│       ├── contact.js            # Validación y envío del formulario
│       └── loader.js             # Manejo de carga de pantalla
│
├── components/
│   ├── Sidebar.html              # Template del menú lateral
│   ├── Hero.html                 # Template del hero section
│   ├── StatsSection.html         # Template de estadísticas
│   ├── MachineryCard.html        # Template de card de maquinaria
│   ├── CourseCard.html           # Template de card de curso
│   ├── InstructorCard.html       # Template de card de instructor
│   ├── BrandCard.html            # Template de card de marca
│   └── ContactForm.html          # Template del formulario de contacto
│
├── pages/
│   ├── home.js                   # Lógica y render del Home
│   ├── historia-ia.js            # Lógica e historia de la IA
│   ├── maquinaria.js             # Página de maquinaria pesada
│   ├── marcas.js                 # Página de marcas
│   ├── cursos.js                 # Página de cursos
│   ├── instructores.js           # Página de instructores
│   ├── contacto.js               # Página de contacto
│   ├── chatbot.js                # Página del chatbot IA
│   └── sobre-mi.js               # Página "Sobre mí"
│
├── data/
│   ├── machinery.json            # Datos de maquinaria pesada
│   ├── brands.json               # Datos de marcas
│   ├── courses.json              # Datos de cursos
│   ├── instructors.json          # Datos de instructores
│   ├── ai-history.json           # Historia de la IA
│   └── knowledge-base.js         # Base de conocimiento del chatbot
│
├── services/
│   ├── gemini.service.js         # Servicio de comunicación con Gemini API
│   ├── knowledge.service.js      # Servicio de consulta a base de conocimiento
│   └── contact.service.js        # Servicio para el formulario de contacto
│
├── config/
│   ├── app.config.js             # Configuración general de la app
│   ├── chatbot.config.js         # Configuración del chatbot y prompt del sistema
│   └── api.config.js             # Configuración de endpoints y claves
│
├── api/
│   ├── gemini.api.js             # Wrapper para la API de Gemini
│   └── endpoints.js              # Definición de rutas y endpoints externos
│
└── chatbot/
    ├── chatbot.ui.js             # Interfaz y renderizado del chatbot
    ├── chatbot.logic.js          # Lógica de procesamiento de mensajes
    ├── chatbot.history.js        # Gestión del historial de conversación
    └── chatbot.validator.js      # Validación de temas permitidos
```

---

## ✅ Requisitos Previos

Antes de comenzar asegúrate de tener instalado:

- **Navegador moderno** (Chrome 90+, Firefox 88+, Edge 90+, Safari 14+)
- **Visual Studio Code** u otro editor de código (recomendado)
- **Live Server** (extensión de VS Code) o cualquier servidor HTTP local
- **Git** para control de versiones
- **Cuenta en Google AI Studio** para obtener la API Key de Gemini

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/heavyai.git
cd heavyai
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` y agrega tu API Key de Gemini:

```env
GEMINI_API_KEY=tu_api_key_aquí
```

### 3. (Opcional) Instalar servidor local

Si tienes Node.js instalado:

```bash
npx serve .
```

O usa la extensión **Live Server** de VS Code haciendo clic derecho sobre `index.html` → *Open with Live Server*.

---

## ⚙️ Configuración

### `config/app.config.js`

```javascript
export const APP_CONFIG = {
  name: 'HeavyAI',
  version: '1.0.0',
  defaultSection: 'home',
  animationDuration: 300,       // ms
  statsAnimationDuration: 2000, // ms
  language: 'es',
};
```

### `config/chatbot.config.js`

```javascript
export const CHATBOT_CONFIG = {
  model: 'gemini-flash-latest',
  maxTokens: 1024,
  temperature: 0.7,
  systemPrompt: `Eres un asistente especializado ÚNICAMENTE en maquinaria pesada,
  cursos técnicos, instructores y la plataforma HeavyAI. Responde SOLO temas
  relacionados con estos dominios. Si te preguntan otro tema, responde:
  "Lo siento, actualmente solo puedo responder temas relacionados con
  maquinaria pesada, cursos e información del sistema."`,
  allowedTopics: ['maquinaria', 'cursos', 'instructores', 'marcas', 'jonathan', 'ia'],
};
```

---

## 🔐 Variables de Entorno

| Variable          | Descripción                          | Requerida |
|-------------------|--------------------------------------|-----------|
| `GEMINI_API_KEY`  | API Key de Google AI Studio (Gemini) | ✅ Sí     |

> ⚠️ **Importante:** Nunca subas tu archivo `.env` al repositorio. Está incluido en `.gitignore` por defecto.

### `.env.example`

```env
# Google AI Studio - Gemini API
# Obtén tu clave en: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_api_key_here
```

---

## ▶️ Ejecución Local

### Opción 1 — Live Server (VS Code)

1. Abre el proyecto en VS Code
2. Instala la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Clic derecho sobre `index.html` → **Open with Live Server**
4. Se abrirá automáticamente en `http://127.0.0.1:5500`

### Opción 2 — Node.js (`serve`)

```bash
npx serve .
# Disponible en http://localhost:3000
```

### Opción 3 — Python (si tienes Python instalado)

```bash
# Python 3
python -m http.server 8080
# Disponible en http://localhost:8080
```

---

## 📦 Módulos del Sistema

### 🏠 Home
Hero section con banner industrial, introducción a la IA, historia resumida, estadísticas animadas (máquinas disponibles, cursos activos, instructores, marcas) y cards informativas.

### 🤖 Historia de la IA
Línea de tiempo visual con hitos históricos de la inteligencia artificial y su evolución aplicada al sector industrial.

### 🚜 Maquinaria Pesada
Catálogo completo con fichas técnicas de 8+ tipos de maquinaria: excavadoras, retroexcavadoras, bulldozers, motoniveladoras, cargadores frontales, grúas hidráulicas, vibrocompactadores y minicargadores. Incluye precios en COP.

### 🏢 Marcas
Perfiles de 8 marcas líderes: Caterpillar, Komatsu, John Deere, Volvo CE, Hitachi, Hyundai Construction, CASE y JCB.

### 📚 Cursos
Cards de 7+ cursos técnicos con duración, nivel, modalidad, instructor, precio y certificación.

### 👨‍🏫 Instructores
Perfiles profesionales con especialidad, experiencia y habilidades en ingeniería pesada e IA industrial.

### 📬 Contacto
Formulario validado en JavaScript con campos de nombre, correo, teléfono y mensaje.

### 💬 Chatbot IA
Interfaz de chat conectada a Google Gemini, restringida a temas del dominio del sistema.

### 👤 Sobre Mí
Perfil de **Jonathan David Lancheros Bello**, 21 años, estudiante de ingeniería pesada con conocimientos en manejo y reparación de maquinaria.

---

## 🤖 Integración Chatbot IA

El chatbot usa la API de **Google Gemini** con el siguiente flujo:

```javascript
// services/gemini.service.js
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`;

export async function askGemini(userMessage) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': APP_CONFIG.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: buildPrompt(userMessage) }]
        }
      ]
    })
  });

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
```

El prompt incluye siempre el contexto del sistema y la base de conocimiento antes de la pregunta del usuario, garantizando respuestas restringidas al dominio.

### Obtener API Key de Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Crea o selecciona un proyecto
3. Genera una nueva API Key
4. Cópiala en tu archivo `.env`

---

## 🌐 Despliegue

### GitHub Pages

```bash
git add .
git commit -m "deploy: versión inicial"
git push origin main
# Activa GitHub Pages en Settings → Pages → Branch: main
```

### Netlify (arrastrar y soltar)

1. Entra a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto al panel de Netlify
3. Configura las variables de entorno en *Site settings → Environment*

### Vercel

```bash
npx vercel
# Sigue las instrucciones del CLI
```

> ⚠️ **Nota de seguridad:** En producción, la API Key de Gemini **no debe exponerse en el frontend**. Se recomienda crear un proxy backend (Node.js, Cloud Functions, etc.) que actúe como intermediario entre el cliente y la API de Gemini.

---

## 🤝 Contribución

1. Haz un fork del repositorio
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m "feat: descripción del cambio"`
4. Sube tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Jonathan David Lancheros Bello**

- 🎓 Estudiante de Ingeniería Pesada
- 🔧 Conocimientos en manejo y reparación de maquinaria pesada
- 🤖 Interesado en IA aplicada al sector industrial
- 📍 Colombia

---

<div align="center">
  <p>Desarrollado con ❤️ por Jonathan David Lancheros Bello</p>
  <p>HeavyAI © 2025 — Maquinaria Pesada + Inteligencia Artificial</p>
</div>
