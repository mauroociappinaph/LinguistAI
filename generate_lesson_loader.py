#!/usr/bin/env python3
import os
import re

base = "/Users/mauroociappina/Desktop/Linguist AI/LinguistAI/data/lessons"

modules = {
    "A1": [
        "getting-started",
        "work-environment",
        "projects-collaborations",
        "communication-at-work",
        "debugging-problem-solving"
    ],
    "A2": [
        "intermediate-workplace-communication"
    ],
    "B1": [
        "explaining-your-code",
        "feedback-collaboration",
        "professional-habits",
        "tech-ecosystem-trends"
    ],
    "B2": [
        "project-management"
    ],
    "C1": [
        "advanced-technical-writing"
    ]
}

print("import { Lesson } from '../types';")
print("")
print("/**")
print(" * Lesson Loader Utility")
print(" * Proporciona carga dinámica (lazy loading) de lecciones para reducir el bundle inicial")
print(" */")
print("")
print("// Cache de lecciones cargadas para evitar re-importar")
print("const lessonCache = new Map<string, Lesson>();")
print("")
print("/**")
print(" * Tipos de loaders para cada nivel y módulo")
print(" */")
print("type LessonLoader = () => Promise<{ default: Lesson }>;")
print("")
print("/**")
print(" * Mapa de loaders para todas las lecciones")
print(" * Organizado por nivel > módulo > lección")
print(" */")
print("const lessonLoaders: Record<string, Record<string, Record<string, LessonLoader>>> = {")

for level, module_list in modules.items():
    print(f"  {level}: {{")
    for module_id in module_list:
        module_dir = os.path.join(base, level, module_id)
        if not os.path.exists(module_dir):
            continue
        
        print(f"    '{module_id}': {{")
        
        lessons = sorted([d for d in os.listdir(module_dir) if d.startswith('lesson-')])
        
        for lesson_dir in lessons:
            index_file = os.path.join(module_dir, lesson_dir, 'index.ts')
            if not os.path.exists(index_file):
                continue
            
            with open(index_file, 'r') as f:
                content = f.read()
            
            # Extract id
            id_match = re.search(r'id:\s*["\']([^"\']+)["\']', content)
            
            if id_match:
                real_id = id_match.group(1)
                print(f"      '{real_id}': () => import('./lessons/{level}/{module_id}/{lesson_dir}/index'),")
        
        print("    },")
    print("  },")

print("};")
print("")
print("/**")
print(" * Carga una lección de forma dinámica")
print(" * @param level - Nivel CEFR (A1, A2, B1, B2, C1)")
print(" * @param moduleId - ID del módulo")
print(" * @param lessonId - ID de la lección")
print(" * @returns Promise con los datos de la lección")
print(" */")
print("export const loadLesson = async (")
print("  level: string,")
print("  moduleId: string,")
print("  lessonId: string")
print("): Promise<Lesson> => {")
print("  const cacheKey = `${level}/${moduleId}/${lessonId}`;")
print("")
print("  // Verificar cache primero")
print("  if (lessonCache.has(cacheKey)) {")
print("    return lessonCache.get(cacheKey)!;")
print("  }")
print("")
print("  // Obtener el loader")
print("  const loader = lessonLoaders[level]?.[moduleId]?.[lessonId];")
print("")
print("  if (!loader) {")
print("    throw new Error(`Lesson not found: ${cacheKey}`);")
print("  }")
print("")
print("  // Cargar la lección")
print("  const module = await loader();")
print("  const lesson = module.default;")
print("")
print("  // Guardar en cache")
print("  lessonCache.set(cacheKey, lesson);")
print("")
print("  return lesson;")
print("};")
print("")
print("/**")
print(" * Pre-carga múltiples lecciones en paralelo")
print(" * Útil para pre-cargar las lecciones de un módulo completo")
print(" */")
print("export const preloadLessons = async (")
print("  level: string,")
print("  moduleId: string,")
print("  lessonIds: string[]")
print("): Promise<void> => {")
print("  await Promise.all(")
print("    lessonIds.map(lessonId => loadLesson(level, moduleId, lessonId))")
print("  );")
print("};")
print("")
print("/**")
print(" * Limpia el cache de lecciones")
print(" * Útil para liberar memoria si es necesario")
print(" */")
print("export const clearLessonCache = (): void => {")
print("  lessonCache.clear();")
print("};")

