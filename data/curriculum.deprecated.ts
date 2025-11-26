/**
 * DEPRECATED: This file contains static imports of all lessons
 *
 * ⚠️ DO NOT IMPORT FROM THIS FILE IN NEW CODE
 *
 * This file is kept for backward compatibility only.
 * For new code, use:
 * - `data/curriculumMetadata.ts` for module/lesson structure
 * - `data/lessonLoader.ts` for dynamic lesson loading
 *
 * The static imports in this file cause ALL lesson content to be bundled
 * in the initial JavaScript bundle, significantly increasing load time.
 *
 * Migration guide:
 * 1. Replace `import { CURRICULUM } from './curriculum'`
 *    with `import { CURRICULUM } from './curriculumMetadata'`
 * 2. Use `loadLesson(level, moduleId, lessonId)` to load lesson content on-demand
 */

// This file will be removed in a future version once all references are migrated
export {};
