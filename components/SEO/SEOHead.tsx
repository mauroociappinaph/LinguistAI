import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOConfig } from '../../utils/seoConfig';

interface SEOHeadProps extends Partial<SEOConfig> {
  children?: React.ReactNode;
}

/**
 * SEOHead Component
 * Componente reutilizable para gestionar meta tags dinámicos
 * Usa react-helmet-async para actualizar el <head> en cada ruta
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  structuredData,
  children
}) => {
  // Construir URL completa para Open Graph
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullImageUrl = image?.startsWith('http')
    ? image
    : `${typeof window !== 'undefined' ? window.location.origin : ''}${image || '/og-image.png'}`;

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {author && <meta name="author" content={author} />}

      {/* Canonical URL */}
      {fullUrl && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph Tags */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {type && <meta property="og:type" content={type} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      {image && <meta property="og:image" content={fullImageUrl} />}
      <meta property="og:site_name" content="LinguistAI" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={fullImageUrl} />}
      {/* Agrega tu handle de Twitter cuando lo tengas */}
      {/* <meta name="twitter:site" content="@linguistai" /> */}
      {/* <meta name="twitter:creator" content="@linguistai" /> */}

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Contenido adicional personalizado */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
