# Análisis de Arquitectura: Directorio `data`

## 1. Resumen Ejecutivo
La arquitectura actual del directorio `data` presenta **inconsistencias significativas** en la estructura de las lecciones y los patrones de exportación. Mientras que algunas lecciones siguen un enfoque modular y escalable, otras son monolíticas, lo que dificulta el mantenimiento y viola principios de diseño como SRP. Sin embargo, el uso de definiciones de tipos centralizadas en `types.ts` es un punto positivo.

## 2. Evaluación Detallada

### 2.1. Consistencia y Modularización
**Estado: Inconsistente**
Existen dos patrones concurrentes para definir lecciones:
1.  **Patrón Monolítico (A1/work-environment/lesson-01):** Todo el contenido (gramática, vocabulario, actividades) se define en un único archivo `index.ts`. Esto hace que el archivo sea largo y difícil de navegar.
2.  **Patrón Modular (B1/explaining-your-code/lesson-01):** El contenido se divide en archivos específicos (`grammar.ts`, `vocabulary.ts`, etc.) y se importa en `index.ts`. Este es el enfoque recomendado.

Además, `curriculum.ts` importa lecciones de manera inconsistente:
-   Algunas desde el índice del módulo (`lessons/A1/index`).
-   Otras directamente desde el archivo de la lección (`lessons/A1/work-environment/lesson-01`).
-   Otras desde índices intermedios.

### 2.2. Principio de Responsabilidad Única (SRP)
**Estado: Violado en lecciones monolíticas**
En las lecciones monolíticas, el archivo `index.ts` tiene múltiples razones para cambiar: si se actualiza el vocabulario, la gramática o las actividades. El patrón modular respeta mejor el SRP, separando cada dominio de contenido en su propio archivo.

### 2.3. Barrel Pattern / Index Exports
**Estado: Inconsistente**
Se observan diferentes estilos de exportación:
-   `export { alias as name } from './module'`
-   `export * from './module'`
-   Algunos directorios tienen `index.ts` que agregan todo, otros no son utilizados consistentemente por `curriculum.ts`.

### 2.4. DRY (Don't Repeat Yourself)
**Estado: Parcialmente Cumplido**
-   **Positivo:** Los tipos (`Lesson`, `GrammarSection`, etc.) están centralizados en `types.ts`, evitando duplicación de definiciones.
-   **Negativo:** La estructura de los archivos de lección se repite manualmente. Si se decide cambiar la estructura de una lección, se debe refactorizar manualmente en muchos lugares debido a la falta de una "fábrica" o utilidades de generación de contenido, aunque esto es aceptable en archivos de datos puros.

## 3. Recomendaciones y Plan de Acción

### 3.1. Estandarizar la Estructura de Lecciones
Convertir todas las lecciones al **Patrón Modular**.
-   Cada lección debe ser un directorio.
-   Archivos separados para: `grammar.ts`, `vocabulary.ts`, `activities.ts` (o separados por tipo de actividad), `commonMistakes.ts`.
-   `index.ts` solo debe ensamblar y exportar el objeto `Lesson`.

### 3.2. Unificar el Barrel Pattern
Implementar una jerarquía estricta de exportaciones:
1.  `lesson-XX/index.ts`: Exporta la lección individual.
2.  `module-name/index.ts`: Re-exporta todas las lecciones del módulo (`export * from './lesson-01';`).
3.  `level/index.ts` (ej. `A1/index.ts`): Re-exporta los módulos (`export * as WorkEnvironment from './work-environment';` o similar, para evitar colisiones de nombres si no se usan alias únicos).

### 3.3. Refactorizar `curriculum.ts`
Actualizar `curriculum.ts` para que solo importe desde los índices de nivel (`lessons/A1/index`, `lessons/B1/index`) o, como máximo, desde los índices de módulo. Evitar importaciones directas a archivos profundos.

### 3.4. Nomenclatura
Asegurar que los IDs y nombres de variables exportadas sigan una convención estricta (ej. `moduleNameLessonXX`) para facilitar las importaciones y evitar colisiones.
