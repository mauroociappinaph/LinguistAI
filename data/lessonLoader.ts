import { Lesson } from '../types';

/**
 * Lesson Loader Utility
 * Proporciona carga dinámica (lazy loading) de lecciones para reducir el bundle inicial
 */

// Cache de lecciones cargadas para evitar re-importar
const lessonCache = new Map<string, Lesson>();

/**
 * Tipos de loaders para cada nivel y módulo
 */
/**
 * Tipos de loaders para cada nivel y módulo
 */
type LessonLoader = () => Promise<any>;

/**
 * Mapa de loaders para todas las lecciones
 * Organizado por nivel > módulo > lección
 */
const lessonLoaders: Record<string, Record<string, Record<string, LessonLoader>>> = {
  A1: {
    'getting-started': {
      'gs1': () => import('./lessons/A1/getting-started/lesson-01/index'),
      'l2': () => import('./lessons/A1/getting-started/lesson-02/index'),
      'l3': () => import('./lessons/A1/getting-started/lesson-03/index'),
      'l4': () => import('./lessons/A1/getting-started/lesson-04/index'),
      'l5': () => import('./lessons/A1/getting-started/lesson-05/index'),
      'l6': () => import('./lessons/A1/getting-started/lesson-06/index'),
      'gs7': () => import('./lessons/A1/getting-started/lesson-07/index'),
    },
    'work-environment': {
      'we1': () => import('./lessons/A1/work-environment/lesson-01/index'),
      'we2': () => import('./lessons/A1/work-environment/lesson-02/index'),
      'we3': () => import('./lessons/A1/work-environment/lesson-03/index'),
      'we4': () => import('./lessons/A1/work-environment/lesson-04/index'),
      'we5': () => import('./lessons/A1/work-environment/lesson-05/index'),
      'we6': () => import('./lessons/A1/work-environment/lesson-06/index'),
    },
    'projects-collaborations': {
      'pc1': () => import('./lessons/A1/projects-collaborations/lesson-01/index'),
      'pc2': () => import('./lessons/A1/projects-collaborations/lesson-02/index'),
      'pc3': () => import('./lessons/A1/projects-collaborations/lesson-03/index'),
      'pc4': () => import('./lessons/A1/projects-collaborations/lesson-04/index'),
    },
    'communication-at-work': {
      'com1': () => import('./lessons/A1/communication-at-work/lesson-01/index'),
      'com2': () => import('./lessons/A1/communication-at-work/lesson-02/index'),
      'com3': () => import('./lessons/A1/communication-at-work/lesson-03/index'),
      'com4': () => import('./lessons/A1/communication-at-work/lesson-04/index'),
      'com5': () => import('./lessons/A1/communication-at-work/lesson-05/index'),
      'com6': () => import('./lessons/A1/communication-at-work/lesson-06/index'),
    },
    'debugging-problem-solving': {
      'db1': () => import('./lessons/A1/debugging-problem-solving/lesson-01/index'),
      'db2': () => import('./lessons/A1/debugging-problem-solving/lesson-02/index'),
      'db3': () => import('./lessons/A1/debugging-problem-solving/lesson-03/index'),
      'db4': () => import('./lessons/A1/debugging-problem-solving/lesson-04/index'),
      'db5': () => import('./lessons/A1/debugging-problem-solving/lesson-05/index'),
      'db6': () => import('./lessons/A1/debugging-problem-solving/lesson-06/index'),
      'db7': () => import('./lessons/A1/debugging-problem-solving/lesson-07/index'),
      'db8': () => import('./lessons/A1/debugging-problem-solving/lesson-08/index'),
      'db9': () => import('./lessons/A1/debugging-problem-solving/lesson-09/index'),
      'db10': () => import('./lessons/A1/debugging-problem-solving/lesson-10/index'),
      'db11': () => import('./lessons/A1/debugging-problem-solving/lesson-11/index'),
      'db12': () => import('./lessons/A1/debugging-problem-solving/lesson-12/index'),
    },
  },
  A2: {
    'intermediate-workplace-communication': {
      'iwc01': () => import('./lessons/A2/intermediate-workplace-communication/lesson-01/index'),
      'iwc02': () => import('./lessons/A2/intermediate-workplace-communication/lesson-02/index'),
      'iwc03': () => import('./lessons/A2/intermediate-workplace-communication/lesson-03/index'),
      'iwc04': () => import('./lessons/A2/intermediate-workplace-communication/lesson-04/index'),
      'iwc05': () => import('./lessons/A2/intermediate-workplace-communication/lesson-05/index'),
      'iwc06': () => import('./lessons/A2/intermediate-workplace-communication/lesson-06/index'),
      'iwc07': () => import('./lessons/A2/intermediate-workplace-communication/lesson-07/index'),
      'iwc08': () => import('./lessons/A2/intermediate-workplace-communication/lesson-08/index'),
      'iwc9': () => import('./lessons/A2/intermediate-workplace-communication/lesson-09/index'),
    },
  },
  B1: {
    'explaining-your-code': {
      'eyc1': () => import('./lessons/B1/explaining-your-code/lesson-01/index'),
      'eyc2': () => import('./lessons/B1/explaining-your-code/lesson-02/index'),
      'eyc3': () => import('./lessons/B1/explaining-your-code/lesson-03/index'),
      'eyc4': () => import('./lessons/B1/explaining-your-code/lesson-04/index'),
      'eyc5': () => import('./lessons/B1/explaining-your-code/lesson-05/index'),
      'eyc6': () => import('./lessons/B1/explaining-your-code/lesson-06/index'),
      'eyc7': () => import('./lessons/B1/explaining-your-code/lesson-07/index'),
      'eyc8': () => import('./lessons/B1/explaining-your-code/lesson-08/index'),
      'eyc9': () => import('./lessons/B1/explaining-your-code/lesson-09/index'),
    },
    'feedback-collaboration': {
      'ffc1': () => import('./lessons/B1/feedback-collaboration/lesson-01/index'),
      'ffc2': () => import('./lessons/B1/feedback-collaboration/lesson-02/index'),
      'ffc3': () => import('./lessons/B1/feedback-collaboration/lesson-03/index'),
      'ffc4': () => import('./lessons/B1/feedback-collaboration/lesson-04/index'),
      'ffc5': () => import('./lessons/B1/feedback-collaboration/lesson-05/index'),
      'ffc8': () => import('./lessons/B1/feedback-collaboration/lesson-08/index'),
    },
    'professional-habits': {
      'edwl-1': () => import('./lessons/B1/professional-habits/lesson-01/index'),
      'edwl-2': () => import('./lessons/B1/professional-habits/lesson-02/index'),
      'edwl-3': () => import('./lessons/B1/professional-habits/lesson-03/index'),
      'edwl-4': () => import('./lessons/B1/professional-habits/lesson-04/index'),
      'edwl-5': () => import('./lessons/B1/professional-habits/lesson-05/index'),
      'edwl-6': () => import('./lessons/B1/professional-habits/lesson-06/index'),
      'edwl-7': () => import('./lessons/B1/professional-habits/lesson-07/index'),
      'edwl-8': () => import('./lessons/B1/professional-habits/lesson-08/index'),
    },
    'tech-ecosystem-trends': {
      'tet1': () => import('./lessons/B1/tech-ecosystem-trends/lesson-01/index'),
      'tet2': () => import('./lessons/B1/tech-ecosystem-trends/lesson-02/index'),
      'tet3': () => import('./lessons/B1/tech-ecosystem-trends/lesson-03/index'),
      'tet4': () => import('./lessons/B1/tech-ecosystem-trends/lesson-04/index'),
      'tet5': () => import('./lessons/B1/tech-ecosystem-trends/lesson-05/index'),
      'tet6': () => import('./lessons/B1/tech-ecosystem-trends/lesson-06/index'),
      'tet7': () => import('./lessons/B1/tech-ecosystem-trends/lesson-07/index'),
    },
    'career-development': {
      'cd1': () => import('./lessons/B1/career-development/lesson-01/index'),
      'cd2': () => import('./lessons/B1/career-development/lesson-02/index'),
    },
  },
  B2: {
    'project-management': {
      'pm1': () => import('./lessons/B2/project-management/lesson-01/index'),
    },
    'technical-presentations': {
      'tp1': () => import('./lessons/B2/technical-presentations/lesson-01/index'),
    },
  },
  C1: {
    'advanced-technical-writing': {
      'atw1': () => import('./lessons/C1/advanced-technical-writing/lesson-01/index'),
      'atw2': () => import('./lessons/C1/advanced-technical-writing/lesson-02/index'),
      'atw3': () => import('./lessons/C1/advanced-technical-writing/lesson-03/index'),
    },
  },
};

/**
 * Carga una lección de forma dinámica
 * @param level - Nivel CEFR (A1, A2, B1, B2, C1)
 * @param moduleId - ID del módulo
 * @param lessonId - ID de la lección
 * @returns Promise con los datos de la lección
 */
export const loadLesson = async (
  level: string,
  moduleId: string,
  lessonId: string
): Promise<Lesson> => {
  const cacheKey = `${level}/${moduleId}/${lessonId}`;

  // Verificar cache primero
  if (lessonCache.has(cacheKey)) {
    return lessonCache.get(cacheKey)!;
  }

  // Obtener el loader
  const loader = lessonLoaders[level]?.[moduleId]?.[lessonId];

  if (!loader) {
    throw new Error(`Lesson not found: ${cacheKey}`);
  }

  // Cargar la lección
  const module = await loader();

  // Intentar obtener la lección del default export o de una exportación nombrada
  let lesson = module.default;

  if (!lesson) {
    // Buscar la primera exportación que parezca una lección (tiene id, title, level)
    const possibleLesson = Object.values(module).find((exp: any) =>
      exp && typeof exp === 'object' && 'id' in exp && 'title' in exp && 'level' in exp
    );

    if (possibleLesson) {
      lesson = possibleLesson as Lesson;
    }
  }

  if (!lesson) {
    throw new Error(`Could not find lesson export in module for ${cacheKey}`);
  }

  // Guardar en cache
  lessonCache.set(cacheKey, lesson);

  return lesson;
};

/**
 * Pre-carga múltiples lecciones en paralelo
 * Útil para pre-cargar las lecciones de un módulo completo
 */
export const preloadLessons = async (
  level: string,
  moduleId: string,
  lessonIds: string[]
): Promise<void> => {
  await Promise.all(
    lessonIds.map(lessonId => loadLesson(level, moduleId, lessonId))
  );
};

/**
 * Limpia el cache de lecciones
 * Útil para liberar memoria si es necesario
 */
export const clearLessonCache = (): void => {
  lessonCache.clear();
};
