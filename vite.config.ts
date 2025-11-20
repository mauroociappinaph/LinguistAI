import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // URL del backend proxy (protege las API keys en el servidor)
        'process.env.BACKEND_PROXY_URL': JSON.stringify(env.VITE_BACKEND_PROXY_URL || 'http://localhost:3001'),
        'process.env.VITE_DEBUG_MODE': JSON.stringify(env.VITE_DEBUG_MODE)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
