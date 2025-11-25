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
      },
      // Optimizaciones de build para SEO y performance
      build: {
        // Minificación agresiva para reducir tamaño de archivos
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Eliminar console.logs en producción
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug']
          }
        },
        // Code splitting optimizado
        rollupOptions: {
          output: {
            // Separar vendor chunks para mejor caching
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendor': ['lucide-react'],
              'state-vendor': ['zustand'],
              'markdown-vendor': ['react-markdown'],
            },
            // Nombres de chunks más descriptivos
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
          }
        },
        // Advertir sobre chunks grandes (>500kb)
        chunkSizeWarningLimit: 500,
        // Sourcemaps solo en desarrollo
        sourcemap: mode === 'development',
        // Optimizar CSS
        cssCodeSplit: true,
        // Preload directives para recursos críticos
        modulePreload: {
          polyfill: true
        }
      },
      // Optimizaciones de assets
      assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp'],
    };
});
