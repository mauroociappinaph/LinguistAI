import { Application, Router } from 'express';
import fs from 'fs';
import path from 'path';

/**
 * Interfaz para representar un endpoint
 */
interface Endpoint {
  method: string;
  path: string;
  description?: string;
}

/**
 * Extrae todos los endpoints de una aplicación Express
 */
function extractEndpoints(app: Application): Endpoint[] {
  const endpoints: Endpoint[] = [];

  // Función recursiva para extraer rutas de un stack de Express
  function extractFromStack(stack: any[], basePath: string = '') {
    stack.forEach((layer) => {
      if (layer.route) {
        // Es una ruta directa
        const methods = Object.keys(layer.route.methods);
        methods.forEach((method) => {
          endpoints.push({
            method: method.toUpperCase(),
            path: basePath + layer.route.path,
          });
        });
      } else if (layer.name === 'router' && layer.handle.stack) {
        // Es un router montado
        const routerPath = layer.regexp.source
          .replace('\\/?', '')
          .replace('(?=\\/|$)', '')
          .replace(/\\\//g, '/')
          .replace(/\^/g, '')
          .replace(/\$/g, '');

        extractFromStack(layer.handle.stack, basePath + routerPath);
      }
    });
  }

  extractFromStack(app._router.stack);
  return endpoints;
}

/**
 * Genera ejemplos de payloads para cada endpoint
 */
function getExamplePayload(path: string, method: string): any {
  const payloadExamples: Record<string, any> = {
    '/api/gemini/chat': {
      history: [],
      newMessage: "Hello! Can you help me practice English?",
      systemInstruction: "You are a helpful English language learning assistant."
    },
    '/api/gemini/roleplay': {
      history: [],
      newMessage: "I'd like to order a coffee, please.",
      scenarioContext: "You are at a coffee shop ordering a drink",
      aiPersona: "a friendly barista"
    },
    '/api/gemini/pronunciation': {
      transcript: "Hello, how are you today?",
      context: "Greeting someone"
    },
    '/api/gemini/tts': {
      text: "Hello! Welcome to LinguistAI.",
      voiceName: "Kore"
    },
    '/api/gemini/vision': {
      imageData: "base64_encoded_image_data_here",
      prompt: "Describe this image in detail."
    },
    '/api/gemini/search': {
      query: "English grammar rules",
      context: "Learning resources"
    },
    '/api/gemini/grammar': {
      text: "I goes to the store yesterday."
    }
  };

  return payloadExamples[path] || {};
}

/**
 * Genera el comando curl para un endpoint
 */
function generateCurlCommand(endpoint: Endpoint, baseUrl: string = 'http://localhost:3001'): string {
  const { method, path } = endpoint;

  let curl = `curl -X ${method} "${baseUrl}${path}"`;

  // Agregar headers comunes
  curl += ` \\\n  -H "Content-Type: application/json"`;

  // Si es POST, agregar payload de ejemplo
  if (method === 'POST') {
    const payload = getExamplePayload(path, method);
    if (Object.keys(payload).length > 0) {
      const jsonPayload = JSON.stringify(payload, null, 2)
        .split('\n')
        .join('\n    ');
      curl += ` \\\n  -d '${jsonPayload}'`;
    }
  }

  return curl;
}

/**
 * Genera la descripción de un endpoint
 */
function getEndpointDescription(path: string): string {
  const descriptions: Record<string, string> = {
    '/': 'Health check endpoint',
    '/api/gemini/chat': 'Send a chat message to Gemini AI',
    '/api/gemini/roleplay': 'Start a roleplay conversation with AI persona',
    '/api/gemini/pronunciation': 'Analyze pronunciation and get feedback',
    '/api/gemini/tts': 'Generate speech from text (Text-to-Speech)',
    '/api/gemini/vision': 'Analyze an image with AI vision',
    '/api/gemini/search': 'Perform semantic search',
    '/api/gemini/grammar': 'Check and correct grammar'
  };

  return descriptions[path] || 'API endpoint';
}

/**
 * Genera el archivo curls.md
 */
export function generateCurlsMarkdown(app: Application, outputPath?: string): void {
  const endpoints = extractEndpoints(app);
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:3001';

  let markdown = `# LinguistAI Backend API - cURL Commands

> **Auto-generated documentation** for all available endpoints
>
> **Base URL:** \`${baseUrl}\`
> **Generated:** ${new Date().toISOString()}

---

## Table of Contents

`;

  // Agrupar endpoints por ruta base
  const groupedEndpoints: Record<string, Endpoint[]> = {};
  endpoints.forEach((endpoint) => {
    const category = endpoint.path.startsWith('/api/gemini')
      ? 'Gemini AI Endpoints'
      : 'General Endpoints';

    if (!groupedEndpoints[category]) {
      groupedEndpoints[category] = [];
    }
    groupedEndpoints[category].push(endpoint);
  });

  // Generar tabla de contenidos
  Object.keys(groupedEndpoints).forEach((category) => {
    markdown += `- [${category}](#${category.toLowerCase().replace(/\s+/g, '-')})\n`;
  });

  markdown += '\n---\n\n';

  // Generar documentación para cada categoría
  Object.entries(groupedEndpoints).forEach(([category, categoryEndpoints]) => {
    markdown += `## ${category}\n\n`;

    categoryEndpoints.forEach((endpoint, index) => {
      const description = getEndpointDescription(endpoint.path);
      const curl = generateCurlCommand(endpoint, baseUrl);

      markdown += `### ${index + 1}. ${endpoint.method} ${endpoint.path}\n\n`;
      markdown += `**Description:** ${description}\n\n`;
      markdown += '```bash\n';
      markdown += curl + '\n';
      markdown += '```\n\n';

      // Agregar ejemplo de respuesta esperada
      if (endpoint.method === 'POST') {
        markdown += '**Expected Response:**\n```json\n';

        if (endpoint.path.includes('/chat') || endpoint.path.includes('/roleplay')) {
          markdown += '{\n  "text": "AI response here..."\n}\n';
        } else if (endpoint.path.includes('/pronunciation')) {
          markdown += '{\n  "score": 8,\n  "feedback": "Good pronunciation!",\n  "breakdown": {\n    "grammar": 9,\n    "clarity": 8,\n    "relevance": 7\n  }\n}\n';
        } else if (endpoint.path.includes('/tts')) {
          markdown += '{\n  "audio": "base64_encoded_audio_data"\n}\n';
        } else if (endpoint.path.includes('/vision')) {
          markdown += '{\n  "text": "Image description..."\n}\n';
        } else if (endpoint.path.includes('/search')) {
          markdown += '{\n  "text": "Search results..."\n}\n';
        } else if (endpoint.path.includes('/grammar')) {
          markdown += '{\n  "correctedText": "I went to the store yesterday.",\n  "corrections": [\n    {\n      "original": "goes",\n      "corrected": "went",\n      "explanation": "Past tense required"\n    }\n  ]\n}\n';
        }

        markdown += '```\n\n';
      }

      markdown += '---\n\n';
    });
  });

  // Agregar sección de notas
  markdown += `## Notes

- All endpoints require \`Content-Type: application/json\` header
- Rate limiting is applied:
  - General endpoints: 100 requests per 15 minutes
  - TTS endpoint: 10 requests per 15 minutes
- For \`/api/gemini/vision\`, the \`imageData\` must be a base64-encoded image
- For \`/api/gemini/tts\`, available voice names: Kore, Puck, Charon, Aoede

## Environment Variables

Make sure these are set in your \`.env\` file:

\`\`\`bash
GEMINI_API_KEY=your_gemini_api_key_here
GROQ_API_KEY=your_groq_api_key_here
PORT=3001
\`\`\`

## Testing Tips

1. **Test health check first:**
   \`\`\`bash
   curl http://localhost:3001/
   \`\`\`

2. **Use jq for pretty JSON output:**
   \`\`\`bash
   curl -X POST "http://localhost:3001/api/gemini/chat" \\
     -H "Content-Type: application/json" \\
     -d '{"newMessage": "Hello!"}' | jq
   \`\`\`

3. **Save response to file:**
   \`\`\`bash
   curl -X POST "http://localhost:3001/api/gemini/tts" \\
     -H "Content-Type: application/json" \\
     -d '{"text": "Hello"}' > response.json
   \`\`\`

---

**Generated by LinguistAI Backend** | Last updated: ${new Date().toLocaleString()}
`;

  // Escribir el archivo
  const finalPath = outputPath || path.join(process.cwd(), 'curls.md');
  fs.writeFileSync(finalPath, markdown, 'utf-8');

  console.log(`✅ cURL documentation generated at: ${finalPath}`);
  console.log(`📝 Total endpoints documented: ${endpoints.length}`);
}
