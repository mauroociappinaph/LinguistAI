/**
 * SEO Configuration
 * Configuración centralizada de meta tags, Open Graph, Twitter Cards y datos estructurados
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, any>;
}

// Configuración base de la aplicación
export const DEFAULT_SEO: SEOConfig = {
  title: 'LinguistAI - Aprende Inglés con IA para Profesionales IT',
  description: 'Plataforma de aprendizaje de inglés potenciada por IA, diseñada específicamente para profesionales de IT y desarrollo de software. Mejora tu inglés técnico con lecciones personalizadas.',
  keywords: [
    'aprender inglés',
    'inglés para IT',
    'inglés técnico',
    'inglés para programadores',
    'IA educación',
    'aprendizaje personalizado',
    'inglés profesional',
    'curso de inglés',
    'LinguistAI'
  ],
  image: '/og-image.png', // Necesitarás crear esta imagen
  url: 'https://linguistai.vercel.app', // Ajusta según tu dominio
  type: 'website',
  author: 'LinguistAI Team'
};

// Configuración SEO por ruta
export const ROUTE_SEO: Record<string, Partial<SEOConfig>> = {
  '/': {
    title: 'Dashboard - LinguistAI',
    description: 'Tu panel de control personalizado. Visualiza tu progreso, estadísticas de aprendizaje y continúa tu camino hacia la fluidez en inglés técnico.',
    keywords: ['dashboard', 'progreso', 'estadísticas', 'aprendizaje']
  },
  '/curriculum': {
    title: 'Curriculum - LinguistAI',
    description: 'Explora nuestro curriculum completo de inglés para IT. Desde nivel A1 hasta C1, con lecciones especializadas en comunicación técnica, desarrollo de software y más.',
    keywords: ['curriculum', 'lecciones', 'cursos', 'niveles', 'A1', 'A2', 'B1', 'B2', 'C1'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': 'LinguistAI - Curso de Inglés para IT',
      'description': 'Curso completo de inglés técnico para profesionales de IT y desarrollo de software',
      'provider': {
        '@type': 'Organization',
        'name': 'LinguistAI',
        'sameAs': 'https://linguistai.vercel.app'
      },
      'educationalLevel': 'Beginner to Advanced (A1-C1)',
      'inLanguage': 'en',
      'availableLanguage': ['es', 'en']
    }
  },
  '/my-vocabulary': {
    title: 'Mi Vocabulario - LinguistAI',
    description: 'Gestiona y revisa tu vocabulario técnico personalizado. Practica palabras, phrasal verbs y expresiones específicas del mundo IT.',
    keywords: ['vocabulario', 'palabras', 'phrasal verbs', 'práctica', 'repaso']
  },
  '/explore': {
    title: 'Explorador Cultural - LinguistAI',
    description: 'Descubre la cultura tech global. Explora contenido auténtico, artículos técnicos y recursos culturales para mejorar tu comprensión del inglés en contextos reales.',
    keywords: ['cultura', 'explorar', 'contenido', 'artículos', 'recursos']
  },
  '/lesson/:lessonId': {
    title: 'Lección - LinguistAI',
    description: 'Aprende inglés técnico con lecciones interactivas potenciadas por IA. Gramática, vocabulario, listening, speaking y más.',
    keywords: ['lección', 'aprender', 'gramática', 'vocabulario', 'práctica']
  }
};

// Datos estructurados de la organización
export const ORGANIZATION_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'LinguistAI',
  'url': 'https://linguistai.vercel.app',
  'logo': 'https://linguistai.vercel.app/logo.png',
  'description': 'Plataforma de aprendizaje de inglés potenciada por IA para profesionales IT',
  'sameAs': [
    // Agrega tus redes sociales aquí cuando las tengas
    // 'https://twitter.com/linguistai',
    // 'https://linkedin.com/company/linguistai'
  ]
};

// Datos estructurados de la aplicación web
export const WEB_APPLICATION_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': 'LinguistAI',
  'url': 'https://linguistai.vercel.app',
  'applicationCategory': 'EducationalApplication',
  'operatingSystem': 'Web Browser',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'description': 'Plataforma de aprendizaje de inglés potenciada por IA para profesionales IT'
};

/**
 * Genera meta tags SEO para una ruta específica
 */
export const getSEOForRoute = (path: string, customData?: Partial<SEOConfig>): SEOConfig => {
  // Buscar configuración exacta o usar patrón
  let routeConfig = ROUTE_SEO[path];

  // Si no hay match exacto, buscar patrones (ej: /lesson/:lessonId)
  if (!routeConfig) {
    const patternKey = Object.keys(ROUTE_SEO).find(key => {
      if (key.includes(':')) {
        const pattern = key.replace(/:[^/]+/g, '[^/]+');
        return new RegExp(`^${pattern}$`).test(path);
      }
      return false;
    });

    if (patternKey) {
      routeConfig = ROUTE_SEO[patternKey];
    }
  }

  return {
    ...DEFAULT_SEO,
    ...routeConfig,
    ...customData,
    keywords: [
      ...(DEFAULT_SEO.keywords || []),
      ...(routeConfig?.keywords || []),
      ...(customData?.keywords || [])
    ]
  };
};

/**
 * Genera datos estructurados para una lección específica
 */
export const getLessonStructuredData = (lessonId: string, lessonTitle: string, lessonDescription: string) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    'name': lessonTitle,
    'description': lessonDescription,
    'educationalLevel': 'Intermediate',
    'inLanguage': 'en',
    'learningResourceType': 'Lesson',
    'isPartOf': {
      '@type': 'Course',
      'name': 'LinguistAI - Curso de Inglés para IT'
    }
  };
};
