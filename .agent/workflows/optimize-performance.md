---
description: Optimizar performance con memoización, lazy loading y bundle optimization
---

# Optimización de Performance

Este workflow implementa las mejoras de performance identificadas en el análisis técnico.

## Objetivos
- Reducir bundle size de ~450KB a <350KB
- Mejorar First Contentful Paint (FCP)
- Eliminar re-renders innecesarios
- Optimizar conversión de audio

---

## Fase 1: Memoización de Componentes

### 1. Optimizar LessonRunner
Archivo `features/learn/LessonRunner.tsx`:

```typescript
import React, { useMemo, useCallback } from 'react';

export const LessonRunner: React.FC = () => {
  // ✅ Memoizar búsqueda de lesson
  const lesson = useMemo(
    () => lessons.find(l => l.id === activeLessonId),
    [lessons, activeLessonId]
  );

  // ✅ Memoizar componente activo
  const ActiveView = useMemo(() => {
    const viewMap: Record<string, React.ComponentType<any>> = {
      INTRO: LessonIntro,
      GRAMMAR: GrammarView,
      VOCAB: VocabView,
      READING: ReadingView,
      LISTENING: ListeningView,
      SPEAKING: SpeakingView,
      ACCENTS: AccentView,
      ROLE_PLAY: RolePlayView,
      QUIZ: QuizView
    };
    return viewMap[activeSection];
  }, [activeSection]);

  // ✅ Memoizar handlers
  const handleNext = useCallback(() => {
    if (nextSection) {
      setActiveSection(nextSection.id);
    } else {
      exitLesson();
    }
  }, [nextSection, setActiveSection, exitLesson]);

  const handleBack = useCallback(() => {
    if (previousSection) {
      setActiveSection(previousSection.id);
    } else {
      exitLesson();
    }
  }, [previousSection, setActiveSection, exitLesson]);

  return (
    <div>
      <LessonHeader ... />
      <ActiveView lesson={lesson} />
      {activeSection !== 'QUIZ' && (
        <LessonFooter
          onNext={handleNext}
          onBack={handleBack}
          ...
        />
      )}
    </div>
  );
};
```

### 2. Wrappear componentes pesados con React.memo
```typescript
// components/layout/Layout.tsx
export const Layout = React.memo(({ children }: LayoutProps) => {
  return <div className="app-layout">{children}</div>;
});

// features/dashboard/Dashboard.tsx
export const Dashboard = React.memo(() => {
  // ... componente
});
```

---

## Fase 2: Debouncing y Throttling

### 1. Crear hook de debounce
Archivo `hooks/useDebounce.ts`:
```typescript
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

### 2. Aplicar debounce en Speech Recognition
Archivo `hooks/useSpeechRecognition.ts`:
```typescript
import { useCallback, useRef } from 'react';

export const useSpeechRecognition = () => {
  const debounceTimer = useRef<NodeJS.Timeout>();

  const startRecording = useCallback(() => {
    if (!recognitionRef.current) return;

    // Limpiar timer anterior
    clearTimeout(debounceTimer.current);

    // Debounce de 300ms
    debounceTimer.current = setTimeout(() => {
      try {
        setTranscript(null);
        setError(null);
        recognitionRef.current.start();
      } catch (err) {
        console.error("Failed to start recording", err);
      }
    }, 300);
  }, []);

  // ... resto del hook
};
```

---

## Fase 3: Bundle Optimization

### 1. Configurar manual chunks en Vite
Archivo `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-ai': ['@google/genai'],
          'vendor-state': ['zustand'],

          // Separar features grandes
          'feature-learn': [
            './features/learn/LessonRunner',
            './features/learn/components'
          ],
          'feature-dashboard': ['./features/dashboard/Dashboard']
        }
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true
      }
    }
  }
});
```

### 2. Instalar bundle analyzer
```bash
pnpm add -D rollup-plugin-visualizer
```

Actualizar `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ]
});
```

### 3. Analizar bundle
// turbo
```bash
pnpm build
# Se abrirá automáticamente stats.html con visualización
```

---

## Fase 4: Audio Processing Optimization

### 1. Mover conversión PCM a Web Worker (Opcional)
Archivo `utils/audioWorker.ts`:
```typescript
// Worker para procesar audio en background
self.onmessage = (e: MessageEvent) => {
  const { pcmData, sampleRate } = e.data;
  const wavData = pcmToWav(pcmData, sampleRate);
  self.postMessage(wavData, [wavData.buffer]); // Transferable object
};

function pcmToWav(pcmData: Uint8Array, sampleRate: number): Uint8Array {
  // ... lógica existente
}
```

Actualizar `services/gemini/tts.ts`:
```typescript
const audioWorker = new Worker(
  new URL('../utils/audioWorker.ts', import.meta.url),
  { type: 'module' }
);

export const generateSpeech = async (text: string, voiceName = 'Kore') => {
  // ... código existente hasta obtener bytes

  // Procesar en worker
  return new Promise((resolve, reject) => {
    audioWorker.postMessage({ pcmData: bytes, sampleRate: 24000 });

    audioWorker.onmessage = (e) => {
      const wavBytes = e.data;
      const blob = new Blob([wavBytes], { type: 'audio/wav' });
      resolve(URL.createObjectURL(blob));
    };

    audioWorker.onerror = reject;
  });
};
```

---

## Fase 5: Lazy Loading Avanzado

### 1. Preload de rutas críticas
Archivo `App.tsx`:
```typescript
import { useEffect } from 'react';

const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard'));
const LessonRunner = React.lazy(() => import('./features/learn/LessonRunner'));

// Preload en hover
const preloadDashboard = () => import('./features/dashboard/Dashboard');
const preloadLesson = () => import('./features/learn/LessonRunner');

export const App = () => {
  useEffect(() => {
    // Preload dashboard al montar (ruta más común)
    preloadDashboard();
  }, []);

  return (
    <div
      onMouseEnter={() => preloadLesson()} // Preload on hover
    >
      <Suspense fallback={<LoadingSpinner />}>
        {renderView()}
      </Suspense>
    </div>
  );
};
```

### 2. Lazy load de datos pesados
```typescript
// Cargar lessons solo cuando se necesitan
const LESSONS = React.lazy(() => import('./data/lessons'));
```

---

## Fase 6: Optimización de Imágenes (Si aplica)

### 1. Instalar plugin de optimización
```bash
pnpm add -D vite-plugin-imagemin
```

```typescript
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ name: 'removeViewBox', active: false }]
      }
    })
  ]
});
```

---

## Fase 7: Configurar Compression

### 1. Habilitar gzip/brotli
```bash
pnpm add -D vite-plugin-compression
```

```typescript
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ]
});
```

---

## Métricas de Éxito

### Antes de Optimización
- Bundle size: ~450KB
- FCP: ? (sin medir)
- TTI: ? (sin medir)
- Console warnings: 2

### Después de Optimización
- Bundle size: <350KB (-22%)
- FCP: <1.5s
- TTI: <3s
- Console warnings: 0

---

## Comandos de Verificación

// turbo-all
```bash
# Analizar bundle
pnpm build

# Lighthouse audit
pnpm add -D @lighthouse-ci/cli
pnpm dlx lighthouse http://localhost:3000 --view

# Test de performance
pnpm test:performance
```

---

## Checklist de Optimización

- [ ] Memoizar componentes pesados
- [ ] Aplicar React.memo a componentes puros
- [ ] Agregar debouncing a speech recognition
- [ ] Configurar manual chunks en Vite
- [ ] Instalar y ejecutar bundle analyzer
- [ ] Eliminar console.logs de producción
- [ ] (Opcional) Implementar Web Worker para audio
- [ ] Preload de rutas críticas
- [ ] Habilitar compresión gzip/brotli
- [ ] Ejecutar Lighthouse audit

## Tiempo Estimado
⏱️ **6 horas** (sin Web Worker)
⏱️ **10 horas** (con Web Worker)

## Prioridad
🟡 **IMPORTANTE** - Recomendaciones #5, #9 del análisis técnico
