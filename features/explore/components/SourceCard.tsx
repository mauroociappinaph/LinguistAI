import React from 'react';

interface SourceCardProps {
  title: string;
  uri: string;
  index: number;
}

/**
 * Componente para mostrar una fuente de información de forma visual mejorada
 */
export const SourceCard: React.FC<SourceCardProps> = ({ title, uri, index }) => {
  // Extraer dominio de la URL
  const getDomain = (url: string): string => {
    try {
      const domain = new URL(url).hostname;
      return domain.replace('www.', '');
    } catch {
      return 'Fuente';
    }
  };

  const domain = getDomain(uri);

  return (
    <a
      href={uri}
      target="_blank"
      rel="noreferrer"
      className="group block p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        {/* Número de fuente */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-semibold text-sm">
          {index + 1}
        </div>

        {/* Contenido */}
        <div className="flex-1 min-w-0">
          {/* Título */}
          <div className="font-medium text-slate-900 dark:text-white mb-1 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </div>

          {/* Dominio */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              🔗 {domain}
            </span>
          </div>
        </div>

        {/* Icono de enlace externo */}
        <div className="flex-shrink-0 text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
