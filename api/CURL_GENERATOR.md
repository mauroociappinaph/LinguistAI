# Generador Automático de Documentación cURL

## 📝 Descripción

Este sistema genera automáticamente un archivo `curls.md` con todos los endpoints del servidor backend, incluyendo:
- ✅ Comandos cURL listos para copiar y pegar
- ✅ Ejemplos de payloads para cada endpoint
- ✅ Respuestas esperadas
- ✅ Descripciones de cada endpoint
- ✅ Notas sobre rate limiting y configuración

## 🚀 Uso

### Generar documentación

```bash
pnpm run generate:docs
```

Esto creará/actualizará el archivo `curls.md` en la raíz del proyecto API.

### Resultado

El comando generará un archivo markdown completo con:
- Tabla de contenidos
- Endpoints agrupados por categoría
- Comandos cURL con ejemplos reales
- Respuestas esperadas en formato JSON
- Notas de configuración y tips de testing

## 📁 Archivos

- **`utils/generate-curls.ts`**: Lógica principal del generador
  - Extrae endpoints de Express automáticamente
  - Genera comandos cURL con payloads de ejemplo
  - Crea documentación en formato Markdown

- **`scripts/generate-docs.ts`**: Script ejecutable
  - Monta todas las rutas de la aplicación
  - Llama al generador
  - Se ejecuta con `pnpm run generate:docs`

- **`curls.md`**: Archivo generado (auto-actualizable)
  - Documentación completa de la API
  - Lista para usar en testing manual

## ✨ Características

### 1. Extracción Automática
El generador recorre el stack de Express y extrae todos los endpoints registrados, sin necesidad de mantener documentación manual.

### 2. Ejemplos Realistas
Cada endpoint incluye payloads de ejemplo basados en los casos de uso reales de la aplicación.

### 3. Sin Dependencias Externas
Solo usa Node + Express, sin Swagger, Postman u otras herramientas externas.

### 4. Siempre Actualizado
Ejecuta `pnpm run generate:docs` después de agregar nuevos endpoints para mantener la documentación sincronizada.

## 🔧 Personalización

### Agregar nuevos endpoints

1. Crea el endpoint en tu router (ej: `routes/gemini.ts`)
2. Ejecuta `pnpm run generate:docs`
3. El nuevo endpoint aparecerá automáticamente en `curls.md`

### Personalizar payloads de ejemplo

Edita la función `getExamplePayload()` en `utils/generate-curls.ts`:

```typescript
function getExamplePayload(path: string, method: string): any {
  const payloadExamples: Record<string, any> = {
    '/api/tu-nuevo-endpoint': {
      campo1: "valor ejemplo",
      campo2: 123
    },
    // ... más ejemplos
  };

  return payloadExamples[path] || {};
}
```

### Personalizar descripciones

Edita la función `getEndpointDescription()` en `utils/generate-curls.ts`:

```typescript
function getEndpointDescription(path: string): string {
  const descriptions: Record<string, string> = {
    '/api/tu-nuevo-endpoint': 'Descripción de tu endpoint',
    // ... más descripciones
  };

  return descriptions[path] || 'API endpoint';
}
```

## 📊 Ejemplo de Salida

```markdown
### 1. POST /api/gemini/chat

**Description:** Send a chat message to Gemini AI

\`\`\`bash
curl -X POST "http://localhost:3001/api/gemini/chat" \\
  -H "Content-Type: application/json" \\
  -d '{
    "history": [],
    "newMessage": "Hello! Can you help me practice English?",
    "systemInstruction": "You are a helpful English language learning assistant."
  }'
\`\`\`

**Expected Response:**
\`\`\`json
{
  "text": "AI response here..."
}
\`\`\`
```

## 🎯 Ventajas

1. **Documentación siempre sincronizada** con el código
2. **Testing manual simplificado** - solo copia y pega
3. **Onboarding rápido** para nuevos desarrolladores
4. **Sin herramientas externas** - todo en Node/Express
5. **Fácil de mantener** - un solo comando

## 🔄 Workflow Recomendado

1. Desarrolla tu endpoint en Express
2. Ejecuta `pnpm run generate:docs`
3. Abre `curls.md` y copia el comando cURL
4. Prueba el endpoint en tu terminal
5. Commitea tanto el código como el `curls.md` actualizado

---

**Generado automáticamente por LinguistAI Backend**
