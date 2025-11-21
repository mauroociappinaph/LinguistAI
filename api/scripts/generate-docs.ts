#!/usr/bin/env ts-node

/**
 * Script para generar documentación de cURL automáticamente
 * Uso: pnpm run generate:docs
 */

import express from 'express';
import { generateCurlsMarkdown } from '../utils/generate-curls.js';
import geminiRoutes from '../routes/gemini.js';

// Crear una instancia temporal de Express para extraer las rutas
const app = express();

// Montar las rutas (igual que en index.ts)
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'LinguistAI Backend API is running',
    version: '1.0.0'
  });
});

app.use('/api/gemini', geminiRoutes);

// Generar la documentación
console.log('🚀 Generating cURL documentation...\n');
generateCurlsMarkdown(app);
console.log('\n✨ Done!');
