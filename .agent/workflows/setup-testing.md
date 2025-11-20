---
description: Configurar suite de testing completa (Vitest + React Testing Library)
---

# Setup de Testing Automatizado

Este workflow configura testing desde cero para alcanzar 70% de cobertura en 4 semanas.

## Estado Actual
❌ **0% cobertura de tests**
❌ Sin framework de testing configurado
❌ Sin tests unitarios, integración ni E2E

## Objetivo
✅ **70% cobertura en 4 semanas**
✅ Tests unitarios para store y servicios
✅ Tests de integración para componentes
✅ Tests E2E para flujos críticos

---

## Fase 1: Instalación y Configuración

### 1. Instalar dependencias
// turbo
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event happy-dom @vitest/ui
```

### 2. Configurar Vitest en vite.config.ts
Agregar al archivo existente:
```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  // ... config existente
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/']
    }
  }
});
```

### 3. Crear archivo de setup
Archivo `tests/setup.ts`:
```typescript
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Cleanup después de cada test
afterEach(() => {
  cleanup();
});
```

### 4. Agregar scripts a package.json
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:run": "vitest run"
  }
}
```

---

## Fase 2: Tests Unitarios (Prioridad ALTA)

### 1. Tests para Store (UserSlice)
Crear `tests/unit/store/userSlice.test.ts`:
```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { useStore } from '@/store/useStore';

describe('UserSlice', () => {
  beforeEach(() => {
    // Reset store antes de cada test
    useStore.setState({
      user: {
        name: 'Test User',
        currentLevel: 'A1',
        xp: 0,
        streak: 0,
        badges: [],
        completedLessons: []
      }
    });
  });

  it('should complete lesson and add XP', () => {
    const store = useStore.getState();
    store.completeLesson('lesson-1', 100);

    expect(store.user.xp).toBe(100);
    expect(store.user.completedLessons).toContain('lesson-1');
  });

  it('should not duplicate completed lessons', () => {
    const store = useStore.getState();
    store.completeLesson('lesson-1', 50);
    store.completeLesson('lesson-1', 50);

    expect(store.user.completedLessons).toHaveLength(1);
    expect(store.user.xp).toBe(100);
  });

  it('should toggle dark mode', () => {
    const store = useStore.getState();
    const initialDarkMode = store.darkMode;

    store.toggleDarkMode();
    expect(store.darkMode).toBe(!initialDarkMode);
  });
});
```

### 2. Tests para Servicios (Gemini)
Crear `tests/unit/services/gemini.test.ts`:
```typescript
import { describe, it, expect, vi } from 'vitest';
import { generateSpeech } from '@/services/gemini';
import * as audioStorage from '@/utils/audioStorage';

describe('Gemini TTS Service', () => {
  it('should use cached audio when available', async () => {
    const mockBlob = new Blob(['audio-data'], { type: 'audio/wav' });
    vi.spyOn(audioStorage, 'getCachedAudio').mockResolvedValue(mockBlob);

    const result = await generateSpeech('Hello', 'Kore');

    expect(result).toBeTruthy();
    expect(audioStorage.getCachedAudio).toHaveBeenCalledWith('Kore_Hello_5');
  });

  it('should call API when cache misses', async () => {
    vi.spyOn(audioStorage, 'getCachedAudio').mockResolvedValue(null);
    const spy = vi.spyOn(global, 'fetch');

    await generateSpeech('Test', 'Kore');

    // Verificar que se llamó a la API
    expect(spy).toHaveBeenCalled();
  });
});
```

### 3. Tests para Hooks
Crear `tests/unit/hooks/useSpeechRecognition.test.ts`:
```typescript
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

describe('useSpeechRecognition', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useSpeechRecognition());

    expect(result.current.isRecording).toBe(false);
    expect(result.current.transcript).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should reset state', () => {
    const { result } = renderHook(() => useSpeechRecognition());

    act(() => {
      result.current.reset();
    });

    expect(result.current.transcript).toBeNull();
    expect(result.current.error).toBeNull();
  });
});
```

---

## Fase 3: Tests de Integración

### 1. Test de Componente Dashboard
Crear `tests/integration/Dashboard.test.tsx`:
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dashboard } from '@/features/dashboard/Dashboard';

describe('Dashboard Integration', () => {
  it('should render user stats', () => {
    render(<Dashboard />);

    expect(screen.getByText(/XP/i)).toBeInTheDocument();
    expect(screen.getByText(/Streak/i)).toBeInTheDocument();
  });

  it('should display learning path', () => {
    render(<Dashboard />);

    expect(screen.getByText(/Learning Path/i)).toBeInTheDocument();
  });
});
```

---

## Fase 4: Ejecutar Tests

// turbo-all
```bash
# Ejecutar todos los tests
pnpm test:run

# Ver cobertura
pnpm test:coverage

# Modo watch durante desarrollo
pnpm test

# UI interactiva
pnpm test:ui
```

---

## Fase 5: CI/CD Integration (Opcional)

Crear `.github/workflows/tests.yml`:
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test:run
      - run: pnpm test:coverage
```

---

## Métricas de Éxito

| Semana | Cobertura | Tests | Componente |
|--------|-----------|-------|------------|
| 1 | 30% | 15 | Store + Utils |
| 2 | 50% | 30 | Services + Hooks |
| 3 | 65% | 45 | Componentes UI |
| 4 | 70% | 60+ | E2E + Integration |

## Tiempo Estimado
⏱️ **16 horas** (distribuidas en 4 semanas)

## Prioridad
🔴 **CRÍTICA** - Recomendación #2 del análisis técnico
