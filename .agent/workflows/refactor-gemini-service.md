---
description: Refactorizar services/gemini.ts en módulos separados
---

# Refactorización del Servicio Gemini

Este workflow divide el archivo `services/gemini.ts` (284 líneas) en módulos especializados siguiendo el principio SRP (Single Responsibility Principle).

## Estructura Objetivo

```
services/
├── gemini/
│   ├── index.ts           # Barrel file con exports
│   ├── client.ts          # Factory para GoogleGenAI client
│   ├── chat.ts            # sendChatMessage, sendRolePlayMessage
│   ├── grammar.ts         # checkGrammarFast
│   ├── tts.ts             # generateSpeech + caching
│   ├── image.ts           # editImage
│   ├── pronunciation.ts   # analyzePronunciation
│   └── search.ts          # searchCulturalFact
└── audio/
    └── pcmConverter.ts    # pcmToWav, writeString (utils)
```

## Pasos de Ejecución

### 1. Crear estructura de carpetas
```bash
mkdir -p services/gemini services/audio
```

### 2. Extraer lógica de audio
Crear `services/audio/pcmConverter.ts` con:
- Función `pcmToWav(pcmData: Uint8Array, sampleRate: number): Uint8Array`
- Función helper `writeString(view: DataView, offset: number, string: string): void`

### 3. Crear client factory
Archivo `services/gemini/client.ts`:
```typescript
import { GoogleGenAI } from "@google/genai";

export const getClient = () => new GoogleGenAI({
  apiKey: process.env.API_KEY
});
```

### 4. Dividir servicios por funcionalidad

**Crear `services/gemini/grammar.ts`:**
- Exportar `checkGrammarFast(text: string): Promise<string>`

**Crear `services/gemini/chat.ts`:**
- Exportar `sendChatMessage(...)`
- Exportar `sendRolePlayMessage(...)`

**Crear `services/gemini/tts.ts`:**
- Exportar `generateSpeech(text: string, voiceName?: string): Promise<string | null>`
- Importar `pcmToWav` desde `../audio/pcmConverter`

**Crear `services/gemini/image.ts`:**
- Exportar `editImage(base64Image: string, prompt: string): Promise<string | null>`

**Crear `services/gemini/pronunciation.ts`:**
- Exportar interface `PronunciationResult`
- Exportar `analyzePronunciation(...)`

**Crear `services/gemini/search.ts`:**
- Exportar `searchCulturalFact(query: string)`

### 5. Crear barrel file
Archivo `services/gemini/index.ts`:
```typescript
export * from './chat';
export * from './grammar';
export * from './tts';
export * from './image';
export * from './pronunciation';
export * from './search';
export { getClient } from './client';
```

### 6. Actualizar imports en componentes
Buscar y reemplazar en todo el proyecto:
```typescript
// Antes
import { sendChatMessage } from '../../services/gemini';

// Después
import { sendChatMessage } from '@/services/gemini';
```

### 7. Eliminar archivo original
```bash
rm services/gemini.ts
```

### 8. Verificar que todo funciona
// turbo
```bash
pnpm run dev
```

## Beneficios Esperados

✅ **Mejor mantenibilidad:** Cada archivo tiene una responsabilidad única
✅ **Testing más fácil:** Cada función puede testearse aisladamente
✅ **Tree-shaking mejorado:** Bundler puede eliminar código no usado
✅ **Código más legible:** Archivos de ~50 líneas vs 284

## Tiempo Estimado
⏱️ **4 horas** (incluyendo testing)

## Prioridad
🟡 **IMPORTANTE** - Recomendación #6 del análisis técnico
