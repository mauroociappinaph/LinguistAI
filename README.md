
### Resumen Ejecutivo
**LinguistAI** es una plataforma educativa de aprendizaje de inglés de próxima generación (A1-C2) impulsada por Inteligencia Artificial generativa. Utiliza una arquitectura modular basada en React y Zustand en el frontend, integrándose directamente con el ecosistema Google Gemini (Flash Lite, Pro 3, Imagen, TTS) para ofrecer tutoría en tiempo real, análisis de pronunciación, edición de imágenes para vocabulario visual, narración de lecciones mediante voz sintética de alta fidelidad y role-play inmersivo. Este documento detalla la arquitectura, configuración y despliegue para desarrolladores que utilicen el entorno **Antigravity**.

---

# LinguistAI - Technical Documentation

## Índice
1. [Arquitectura del Sistema](#1-arquitectura-del-sistema)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Flujo de Ejecución](#3-flujo-de-ejecución)
4. [Dependencias Externas](#4-dependencias-externas)
5. [Configuración y Secretos](#5-configuración-y-secretos)
6. [Instalación en Antigravity](#6-instalación-en-antigravity)
7. [Integración de IA (Google Gemini)](#7-integración-de-ia-google-gemini)
8. [Optimización de Audio y Caching](#8-optimización-de-audio-y-caching)
9. [Pruebas y Verificación](#9-pruebas-y-verificación)
10. [Despliegue](#10-despliegue)
11. [Scripts Útiles](#11-scripts-útiles)
12. [Seguridad y Privacidad](#12-seguridad-y-privacidad)
13. [Troubleshooting](#13-troubleshooting)
14. [Workflows de Automatización](#14-workflows-de-automatización)
15. [Cómo Contribuir](#15-cómo-contribuir)
16. [Apéndices](#16-apéndices)

---

## 1. Arquitectura del Sistema

LinguistAI sigue una arquitectura basada en **Features** (características) con un manejo de estado distribuido. Aunque actualmente opera con persistencia local (Client-Side heavy), está diseñada para escalar a una arquitectura Full-Stack.

### Diagrama de Alto Nivel

```mermaid
graph TD
    User[Usuario / Browser] -->|HTTPS| CDN[CDN / Edge Layer]
    CDN -->|Serve Assets| Client[React Client (LinguistAI)]

    subgraph "Client Layer (Antigravity Dev Env)"
        Store[Zustand Store (User & UI Slices)]
        Nav[Lesson Router]
        Hooks[Custom Hooks (Speech, Nav)]
        AudioEngine[PCM to WAV Converter]
        IndexedDB[Audio Storage Layer]

        Client --> Store
        Client --> Nav
        Client --> Hooks
        Client --> AudioEngine
        AudioEngine <--> IndexedDB
    end

    subgraph "AI Services Layer"
        GeminiFlash[Gemini 2.5 Flash (Fast Tasks)]
        GeminiPro[Gemini 3 Pro (Reasoning/Chat)]
        GeminiVision[Gemini Flash Image (Visuals)]
        GeminiTTS[Gemini 2.5 Flash TTS (Audio Generation)]
    end

    subgraph "Persistence"
        LocalStorage[Browser Storage (Dev/MVP)]
        DB[(PostgreSQL - Planned)]
    end

    Client -->|API Calls| GeminiFlash
    Client -->|API Calls| GeminiPro
    Client -->|API Calls| GeminiVision
    Client -->|API Calls| GeminiTTS
    Store <--> LocalStorage
```

### Servicios y Responsabilidades

*   **Frontend (Core):** React + TypeScript + Vite. Responsable del renderizado, enrutamiento de lecciones (`LessonRunner`) y captura de eventos (voz/texto).
*   **State Management:** Zustand. Dividido en `UserSlice` (persistencia de progreso, XP, badges) y `UISlice` (navegación efímera, historial de chat).
*   **AI Integration Service:** Capa de abstracción (`services/gemini.ts`) que normaliza las llamadas a los diferentes modelos de Google GenAI.
*   **Dynamic Audio Engine:** Sistema capaz de sintetizar voz en tiempo real (`generateSpeech`) convirtiendo streams PCM crudos de la API de Gemini a formato WAV reproducible en el navegador, con soporte para Caching en IndexedDB.
*   **Lesson Registry:** Sistema de datos distribuido (`data/lessons/...`) que actúa como CMS estático para el contenido educativo, cargando módulos bajo demanda.

---

## 🚀 Getting Started

### Prerequisitos

- Node.js 18+
- pnpm 8+
- Cuenta de Google AI Studio

### Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/LinguistAI.git
cd LinguistAI
```

2. **Instalar dependencias:**
```bash
pnpm install
```

3. **Configurar variables de entorno:**
```bash
cp .env.example .env
```

4. **Obtener API key de Gemini:**
- Ve a: https://aistudio.google.com/app/apikey
- Crea una nueva API key
- Copia la key

5. **Editar `.env` con tu API key:**
```env
GEMINI_API_KEY=AIzaSy_tu_key_aqui
```

6. **Iniciar servidor de desarrollo:**
```bash
pnpm dev
```

7. **Abrir en navegador:**
```
http://localhost:3000
```

### ⚠️ Importante: Seguridad

Este proyecto actualmente **expone la API key en el cliente** durante desarrollo.

**Para producción**, debes implementar un backend proxy siguiendo el workflow:
```
/security-fix-backend-proxy
```

Ver [Workflows de Automatización](#14-workflows-de-automatización) para más detalles.

---

---

## 8. Optimización de Audio y Caching

LinguistAI implementa estrategias avanzadas para minimizar la latencia y el costo de generación de audio mediante IA.

### Por qué el audio puede tardar
El proceso de generación TTS (Text-to-Speech) implica varios pasos costosos:
1.  **Network Latency:** Envío de texto a Google Cloud y espera del procesamiento del modelo `gemini-2.5-flash-preview-tts`.
2.  **Model Inference:** El modelo debe generar la onda de audio completa antes de devolverla (actualmente no usamos streaming chunked para simplificar la reproducción HTML5).
3.  **Client Processing:** El navegador debe decodificar Base64 y convertir Raw PCM (Pulse Code Modulation) a WAV añadiendo encabezados binarios en el hilo principal.

### Estrategia de Optimización: IndexedDB Caching
Para resolver esto, hemos implementado una capa de persistencia local usando **IndexedDB**.

1.  **Hash Key:** Se genera una clave única basada en el texto y la voz solicitada (ej: `Kore_Hello world_11`).
2.  **Check Cache:** Antes de llamar a la API, el sistema consulta `LinguistAI_AudioCache` en el navegador.
3.  **Hit:** Si existe, se devuelve un `Blob URL` instantáneamente (0ms latencia, $0 costo).
4.  **Miss:** Si no existe, se llama a Gemini, se procesa el audio y se guarda en IndexedDB para el futuro.

### Opciones de Almacenamiento Evaluadas

| Método | Recomendado | Razón |
| :--- | :--- | :--- |
| **localStorage** | ❌ No | Límite de 5MB, síncrono (bloquea UI), mala performance con strings Base64 largos. |
| **Cache API** | ⚠️ Parcial | Bueno para Requests HTTP completos, pero complejo para manejar Blobs generados dinámicamente por SDK. |
| **IndexedDB** | ✅ **Sí** | Asíncrono, soporta grandes volúmenes de datos binarios (Blobs) nativamente. |
| **FileSystem API** | ❌ No | Demasiados permisos de seguridad requeridos, mala UX para web apps simples. |

### Implementación Técnica
El archivo `utils/audioStorage.ts` maneja la apertura de la base de datos y las transacciones. Se guardan objetos `Blob` con MIME type `audio/wav`. Esto permite que el audio persista incluso si el usuario cierra la pestaña o reinicia el navegador.

---

## 9. Pruebas y Verificación

### Comandos de Prueba
```bash
# Ejecutar tests unitarios (Vitest)
pnpm test

# Ejecutar tests con UI
pnpm test:ui
```

### Checklist de Verificación Manual
1.  [ ] **Dashboard:** Carga correcta de Stats y Learning Path.
2.  [ ] **Lesson Runner:** Navegación fluida entre secciones.
3.  [ ] **Audio Caching:** Reproducir un audio, recargar la página y reproducirlo de nuevo. La segunda vez debe ser instantánea (verificar Network tab: no debe haber llamada a Google).
4.  [ ] **Audio Controls:** Probar Play/Pause/Resume en `AccentView`.
5.  [ ] **Microphone:** `SpeakingView` solicita permisos y transcribe voz.
6.  [ ] **AI Response:** `AiTutor` responde mensajes.

---

## 10. Despliegue

### Build para Producción
```bash
pnpm build
```
Genera la carpeta `dist/` optimizada.

### Docker (Opcional)
Si se despliega en contenedor:

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 11. Scripts Útiles

Definidos en `package.json`:

*   `pnpm dev`: Servidor de desarrollo.
*   `pnpm build`: Compilación prod.
*   `pnpm lint`: Verificación de estilo (ESLint).
*   `pnpm preview`: Vista previa local del build de producción.

---

## 12. Seguridad y Privacidad

*   **API Keys:** Nunca exponer la API Key en el código cliente si la app es pública.
*   **Datos de Voz:** El audio procesado por Web Speech API puede enviarse a proveedores del navegador.
*   **Persistencia:** Los datos del usuario y audios cacheados viven en el dispositivo del usuario (`localStorage` / `IndexedDB`).

---

## 13. Troubleshooting

**Error: "The element has no supported sources"**
*   *Solución:* El sistema intentará generar el audio automáticamente. Si falla, verifica la API Key y la conexión a internet.

**Error: "Audio load error"**
*   *Causa:* URL externa inaccesible o fallo en generación.
*   *Diagnóstico:* Revisar consola para errores de IndexedDB o API 403.

**Error: "Permission denied" en Micrófono**
*   *Solución:* Verificar permisos del sitio y asegurar HTTPS.

---

## 14. Workflows de Automatización

LinguistAI incluye workflows automatizados en `.agent/workflows/` para facilitar tareas de refactorización, testing y optimización.

### Workflows Disponibles

#### 🔧 `/refactor-gemini-service`
Divide el archivo `services/gemini.ts` (284 líneas) en módulos especializados.

**Resultado:**
```
services/gemini/
├── chat.ts          # Funciones de chat
├── tts.ts           # Text-to-Speech
├── grammar.ts       # Corrección gramatical
├── image.ts         # Edición de imágenes
├── pronunciation.ts # Análisis de pronunciación
└── search.ts        # Búsqueda cultural
```

**Tiempo estimado:** 4 horas
**Prioridad:** Media

---

#### 🧪 `/setup-testing`
Configura suite de testing completa con Vitest + React Testing Library.

**Incluye:**
- Configuración de Vitest en `vite.config.ts`
- Tests unitarios para store y services
- Tests de integración para componentes
- Scripts npm (`test`, `test:ui`, `test:coverage`)

**Objetivo:** 70% cobertura en 4 semanas
**Tiempo estimado:** 16 horas
**Prioridad:** Crítica

---

#### 🔒 `/security-fix-backend-proxy`
Implementa backend proxy para proteger API key de Gemini.

**Solución:**
- Backend Express con rate limiting
- Endpoints proxy para servicios Gemini
- Variables de entorno seguras
- CORS configurado

**⚠️ CRÍTICO:** Resuelve vulnerabilidad de API key expuesta en cliente.

**Tiempo estimado:** 8 horas
**Prioridad:** Crítica

---

#### ⚡ `/optimize-performance`
Optimiza performance con memoización, bundle optimization y lazy loading.

**Incluye:**
- Memoización de componentes pesados
- Debouncing en speech recognition
- Manual chunks en Vite
- Bundle analyzer
- Eliminación de console.logs en producción

**Objetivo:** Reducir bundle de ~450KB a <350KB
**Tiempo estimado:** 6-10 horas
**Prioridad:** Importante

---

### Cómo Usar los Workflows

1. **Desde Antigravity:**
   ```
   /refactor-gemini-service
   /setup-testing
   /security-fix-backend-proxy
   /optimize-performance
   ```

2. **Manualmente:**
   Abrir el archivo `.agent/workflows/[nombre-workflow].md` y seguir los pasos.

### Análisis Técnico Completo

Para un análisis exhaustivo del proyecto, consultar:
```
/Users/mauroociappina/.gemini/antigravity/brain/[session-id]/analysis-report.md
```

El análisis incluye:
- Evaluación de arquitectura y calidad de código
- Auditoría de seguridad
- Recomendaciones priorizadas (16 items)
- Propuesta de reestructuración
- Roadmap de 4 semanas

---

## 15. Cómo Contribuir

1.  Fork del repositorio.
2.  Crear rama `feature/nueva-funcionalidad`.
3.  Seguir estilo de código.
4.  Abrir PR con descripción de cambios.

---

## 16. Apéndices

### .env.example
```bash
VITE_API_KEY=AIzaSyYourKeyHere...
VITE_APP_VERSION=1.0.0
```
