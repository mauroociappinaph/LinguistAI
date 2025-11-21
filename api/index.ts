import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { generalLimiter, ttsLimiter, errorHandler } from './middleware/index.js';
import geminiRoutes from './routes/gemini.js';

// Cargar variables de entorno
dotenv.config({ path: '../.env' });

const app: Application = express();
const PORT = process.env.PORT || 3001;

// ==========================================
// Middleware de Seguridad
// ==========================================

// Helmet: Configura headers de seguridad HTTP
app.use(helmet());

// CORS: Permitir requests desde el frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' })); // Límite para imágenes en base64

// ==========================================
// Rate Limiting
// ==========================================

// Aplicar rate limiting general a todas las rutas de API
app.use('/api/', generalLimiter);

// Rate limiting específico para TTS (más estricto)
app.use('/api/gemini/tts', ttsLimiter);

// ==========================================
// Health Check
// ==========================================

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// ==========================================
// API Routes
// ==========================================

app.use('/api/gemini', geminiRoutes);

// ==========================================
// Error Handling
// ==========================================

// Catch-all para rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`
  });
});

// Middleware de manejo de errores (debe ser el último)
app.use(errorHandler);

// ==========================================
// Start Server
// ==========================================

app.listen(PORT, () => {
  console.log(`🚀 Backend proxy server running on port ${PORT}`);
  console.log(`📡 Health check available at http://localhost:${PORT}/health`);
  console.log(`🔐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});

// Para Vercel serverless
export default app;
