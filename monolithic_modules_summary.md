# Módulos Monolíticos Identificados para Refactorización

## Resumen

Después de analizar el directorio `data/lessons`, identifiqué los siguientes módulos que requieren refactorización de monolítico a modular:

## ✅ Módulos Ya Refactorizados

1. **A1/work-environment** (6 lecciones) - ✅ Completado
2. **A1/getting-started** (7 lecciones) - ✅ Ya modular
3. **B1/explaining-your-code** - ✅ Ya modular
4. **B1/feedback-collaboration** - ✅ Ya modular
5. **B1/professional-habits** - ✅ Ya modular
6. **B1/tech-ecosystem-trends** - ✅ Ya modular (con correcciones aplicadas)

## ❌ Módulos Monolíticos Pendientes

### A1 Level

1. **projects-collaborations** (4 lecciones)
   - Tamaño promedio: ~300 líneas por lección
   - Prioridad: Alta (A1 es nivel básico)

2. **communication-at-work** (6 lecciones)
   - Tamaño promedio: ~250 líneas por lección
   - Prioridad: Alta

3. **debugging-problem-solving** (12 lecciones)
   - Tamaño promedio: ~270 líneas por lección
   - Prioridad: Media (muchas lecciones, pero patrón repetitivo)

### A2 Level

4. **intermediate-workplace-communication** (9 lecciones)
   - Estado: Necesita verificación
   - Prioridad: Media

### B2 y C1 Levels

5. **project-management** (1 lección)
   - Estado: Necesita verificación
   - Prioridad: Baja (solo 1 lección)

6. **advanced-technical-writing** (2 lecciones)
   - Estado: Necesita verificación
   - Prioridad: Baja

## Estimación de Trabajo

### Por Lección
- Crear `grammar.ts`: 2-3 min
- Crear `vocabulary.ts`: 2-3 min
- Crear `commonMistakes.ts`: 1-2 min
- Actualizar `index.ts`: 1 min
- **Total por lección: ~8 minutos**

### Por Módulo
- **projects-collaborations**: 4 lecciones × 8 min = ~32 min
- **communication-at-work**: 6 lecciones × 8 min = ~48 min
- **debugging-problem-solving**: 12 lecciones × 8 min = ~96 min

**Total estimado para A1**: ~3 horas

## Recomendación

Sugiero proceder en el siguiente orden:

1. **Fase 1** (Prioridad Alta): `projects-collaborations` + `communication-at-work` (~1.5 horas)
2. **Fase 2** (Prioridad Media): `debugging-problem-solving` (~1.5 horas)
3. **Fase 3** (Prioridad Baja): Verificar y refactorizar A2/B2/C1 si es necesario

¿Querés que proceda con la Fase 1 ahora, o preferís que haga todo de una vez?
