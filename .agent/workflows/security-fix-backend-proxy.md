---
description: Implementar backend proxy para proteger API key de Gemini
---

# Security Fix: Backend Proxy para Gemini API

⚠️ **VULNERABILIDAD CRÍTICA DETECTADA**
La API key de Google Gemini está expuesta en el código cliente (bundle de producción).

## Riesgo Actual
🔴 **Nivel 10/10** - Cualquier usuario puede:
- Extraer la API key desde DevTools
- Usar la key sin límites
- Generar facturación descontrolada
- Agotar cuota del proyecto

---

## Solución: Backend Proxy Pattern

```
┌─────────────┐      ┌──────────────┐      ┌────────────────┐
│   Browser   │ ───> │   Backend    │ ───> │  Gemini API    │
│  (React)    │      │  (Express)   │      │                │
└─────────────┘      └──────────────┘      └────────────────┘
   Sin API Key        API Key segura         Protegido
```

---

## Fase 1: Crear Backend con Express

### 1. Instalar dependencias del backend
```bash
cd /Users/mauroociappina/Desktop/Linguist\ AI/LinguistAI
mkdir backend
cd backend
pnpm init
pnpm add express cors dotenv @google/genai
pnpm add -D @types/express @types/cors @types/node tsx nodemon
```

### 2. Crear estructura del backend
```bash
mkdir -p src/routes src/services src/middleware
touch src/index.ts src/routes/gemini.ts src/services/gemini.ts src/middleware/rateLimiter.ts
```

### 3. Configurar servidor Express
Archivo `backend/src/index.ts`:
```typescript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import geminiRoutes from './routes/gemini';
import { rateLimiter } from './middleware/rateLimiter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use('/api', rateLimiter);

// Routes
app.use('/api/gemini', geminiRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
```

### 4. Crear rate limiter
Archivo `backend/src/middleware/rateLimiter.ts`:
```typescript
import { Request, Response, NextFunction } from 'express';

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60000; // 1 minuto
  const maxRequests = 30; // 30 requests por minuto

  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    next();
  } else if (record.count < maxRequests) {
    record.count++;
    next();
  } else {
    res.status(429).json({
      error: 'Too many requests. Please try again later.'
    });
  }
};
```

### 5. Crear rutas Gemini
Archivo `backend/src/routes/gemini.ts`:
```typescript
import express from 'express';
import {
  handleChatMessage,
  handleRolePlayMessage,
  handleGrammarCheck,
  handleTTS,
  handleImageEdit,
  handlePronunciation,
  handleSearch
} from '../services/gemini';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { history, message } = req.body;
    const result = await handleChatMessage(history, message);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Chat service failed' });
  }
});

router.post('/roleplay', async (req, res) => {
  try {
    const { history, message, scenarioContext, aiPersona } = req.body;
    const result = await handleRolePlayMessage(history, message, scenarioContext, aiPersona);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Roleplay service failed' });
  }
});

router.post('/grammar', async (req, res) => {
  try {
    const { text } = req.body;
    const result = await handleGrammarCheck(text);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Grammar check failed' });
  }
});

router.post('/tts', async (req, res) => {
  try {
    const { text, voiceName } = req.body;
    const audioUrl = await handleTTS(text, voiceName);
    res.json({ audioUrl });
  } catch (error) {
    res.status(500).json({ error: 'TTS generation failed' });
  }
});

router.post('/image', async (req, res) => {
  try {
    const { base64Image, prompt } = req.body;
    const result = await handleImageEdit(base64Image, prompt);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Image edit failed' });
  }
});

router.post('/pronunciation', async (req, res) => {
  try {
    const { transcript, context } = req.body;
    const result = await handlePronunciation(transcript, context);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Pronunciation analysis failed' });
  }
});

router.post('/search', async (req, res) => {
  try {
    const { query } = req.body;
    const result = await handleSearch(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

export default router;
```

### 6. Migrar lógica de servicios
Copiar el contenido actual de `frontend/services/gemini.ts` a `backend/src/services/gemini.ts` y exportar funciones handler.

### 7. Configurar variables de entorno
Archivo `backend/.env`:
```env
GEMINI_API_KEY=tu_api_key_aqui
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 8. Agregar scripts npm
Archivo `backend/package.json`:
```json
{
  "scripts": {
    "dev": "nodemon --exec tsx src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

---

## Fase 2: Actualizar Frontend

### 1. Crear nuevo servicio API client
Archivo `frontend/services/api.ts`:
```typescript
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async sendChatMessage(history: any[], message: string) {
    return this.request('/gemini/chat', {
      method: 'POST',
      body: JSON.stringify({ history, message }),
    });
  }

  async generateSpeech(text: string, voiceName: string = 'Kore') {
    return this.request<{ audioUrl: string }>('/gemini/tts', {
      method: 'POST',
      body: JSON.stringify({ text, voiceName }),
    });
  }

  // ... otros métodos
}

export const apiClient = new ApiClient();
```

### 2. Actualizar componentes
Buscar y reemplazar:
```typescript
// Antes
import { sendChatMessage } from '@/services/gemini';

// Después
import { apiClient } from '@/services/api';
const result = await apiClient.sendChatMessage(history, message);
```

### 3. Remover API key del frontend
Editar `vite.config.ts`:
```diff
- define: {
-   'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
- }
```

### 4. Agregar variable de entorno frontend
Archivo `frontend/.env`:
```env
VITE_API_URL=http://localhost:3001/api
```

---

## Fase 3: Testing y Verificación

// turbo
```bash
# Terminal 1 - Backend
cd backend
pnpm dev

# Terminal 2 - Frontend
cd ..
pnpm dev
```

### Checklist de verificación:
- [ ] Backend responde en `http://localhost:3001/health`
- [ ] Chat funciona correctamente
- [ ] TTS genera audio
- [ ] Rate limiter bloquea después de 30 requests
- [ ] DevTools no muestra API key en ningún lado
- [ ] Errores se manejan gracefully

---

## Fase 4: Deploy a Producción

### Opción 1: Vercel (Recomendado)
```bash
# Backend
cd backend
vercel deploy

# Frontend
cd ..
vercel deploy --env VITE_API_URL=https://tu-backend.vercel.app/api
```

### Opción 2: Railway
```bash
railway login
railway init
railway up
```

---

## Beneficios Logrados

✅ **Seguridad:** API key protegida en servidor
✅ **Control:** Rate limiting y monitoreo centralizado
✅ **Escalabilidad:** Lógica de negocio en backend
✅ **Caching:** Posibilidad de cachear respuestas en servidor

## Tiempo Estimado
⏱️ **8 horas** (backend + integración + testing)

## Prioridad
🔴 **CRÍTICA** - Recomendación #1 del análisis técnico

---

## Nota Final
⚠️ Este es el único blocker crítico para un deploy público seguro.
