# Backend Proxy para LinguistAI

Backend proxy con Express para proteger las API keys de Gemini y Groq, implementando rate limiting y seguridad.

## Instalación

```bash
cd api
pnpm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Configura las variables de entorno en `.env`:
```env
GEMINI_API_KEY=tu_api_key_de_gemini
GROQ_API_KEY=tu_api_key_de_groq
FRONTEND_URL=http://localhost:3000
PORT=3001
NODE_ENV=development
```

## Desarrollo

Ejecutar el servidor en modo desarrollo:
```bash
pnpm dev
```

El servidor estará corriendo en `http://localhost:3001`

### Desarrollo Concurrente (Frontend + Backend)

Desde la raíz del proyecto:
```bash
pnpm dev:all
```

## Endpoints

### Gemini API

- `POST /api/gemini/chat` - Chat normal
- `POST /api/gemini/roleplay` - Chat de roleplay
- `POST /api/gemini/pronunciation` - Análisis de pronunciación
- `POST /api/gemini/tts` - Text-to-speech
- `POST /api/gemini/vision` - Análisis de imágenes
- `POST /api/gemini/search` - Búsquedas semánticas
- `POST /api/gemini/grammar` - Corrección gramatical

### Health Check

- `GET /health` - Verificar estado del servidor

## Rate Limiting

- **General**: 100 requests por 15 minutos por IP
- **TTS**: 20 requests por 15 minutos por IP (más estricto debido al costo)

Los headers de rate limit se incluyen en cada respuesta:
- `RateLimit-Limit`: Límite total de requests
- `RateLimit-Remaining`: Requests restantes
- `RateLimit-Reset`: Timestamp de reset

## Seguridad

- **Helmet.js**: Headers de seguridad HTTP
- **CORS**: Configurado para permitir solo el frontend
- **Validación**: Validación de inputs en cada endpoint
- **Environment Variables**: API keys protegidas en el servidor

## Deploy a Vercel

El backend se despliega como funciones serverless en Vercel.

### Configurar Variables de Entorno en Vercel

1. Ve al dashboard de Vercel
2. Selecciona tu proyecto
3. Settings > Environment Variables
4. Agrega:
   - `GEMINI_API_KEY`
   - `GROQ_API_KEY`
   - `FRONTEND_URL` (URL de producción del frontend)

### Deploy

```bash
vercel --prod
```

## Estructura

```
api/
├── index.ts              # Servidor Express principal
├── clients.ts            # Clientes singleton de Gemini y Groq
├── routes/
│   └── gemini.ts        # Rutas de la API Gemini
├── middleware/
│   ├── rateLimiter.ts   # Rate limiting
│   └── errorHandler.ts  # Manejo de errores
├── package.json
├── tsconfig.json
└── .env.example
```

## Testing

### Manual

Probar un endpoint con curl:
```bash
curl -X POST http://localhost:3001/api/gemini/chat \
  -H "Content-Type: application/json" \
  -d '{"history": [], "newMessage": "Hello, how are you?"}'
```

### Rate Limit Testing

Hacer múltiples requests para probar el rate limiting:
```bash
for i in {1..110}; do
  curl -X POST http://localhost:3001/api/gemini/chat \
    -H "Content-Type: application/json" \
    -d '{"history": [], "newMessage": "Test"}' &
done
```

Después de ~100 requests, deberías recibir un error 429.
