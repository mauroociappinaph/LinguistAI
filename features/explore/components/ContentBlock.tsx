import React from 'react';
import { CheckCircle2, Book, MessageCircle, Star } from 'lucide-react';

type ContentBlockVariant = 'list-item' | 'definition' | 'example' | 'highlight';

interface ContentBlockProps {
  variant: ContentBlockVariant;
  icon?: string;
  title?: string;
  description?: string;
  text?: string;
  example?: string;
  className?: string;
}

/**
 * Componente genérico para mostrar bloques de contenido estructurado
 * Se adapta al tipo de contenido mediante variantes
 */
export const ContentBlock: React.FC<ContentBlockProps> = ({
  variant,
  title,
  description,
  text,
  example,
  className = '',
}) => {
  // Renderizado según variante
  switch (variant) {
    case 'list-item':
      return (
        <div className={`group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md transition-all duration-300 ${className}`}>
          <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex-1 space-y-2">
            {title && (
              <div className="font-bold text-slate-900 dark:text-white text-lg">
                {title}
              </div>
            )}
            {description && (
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {description}
              </div>
            )}
            {example && (
              <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-600 dark:text-slate-400 border-l-2 border-indigo-300 dark:border-indigo-700">
                <MessageCircle className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                <span className="italic">{example}</span>
              </div>
            )}
          </div>
        </div>
      );

    case 'definition':
      return (
        <div className={`p-6 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-100 dark:border-indigo-900/30 ${className}`}>
          <div className="flex items-start gap-3 mb-3">
            <Book className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1" />
            {title && (
              <div className="font-bold text-xl text-indigo-900 dark:text-indigo-300">
                {title}
              </div>
            )}
          </div>
          {description && (
            <div className="text-slate-700 dark:text-slate-300 pl-8 leading-relaxed">
              {description}
            </div>
          )}
          {example && (
            <div className="mt-4 ml-8 p-3 rounded-lg bg-white/80 dark:bg-slate-900/60 text-sm italic text-slate-600 dark:text-slate-400 shadow-sm">
              Example: {example}
            </div>
          )}
        </div>
      );

    case 'example':
      return (
        <div className={`p-5 rounded-xl bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30 ${className}`}>
          <div className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1" />
            <div className="flex-1">
              <div className="text-amber-900 dark:text-amber-200 italic font-medium leading-relaxed">
                "{text || example}"
              </div>
            </div>
          </div>
        </div>
      );

    case 'highlight':
      return (
        <div className={`p-5 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-l-4 border-yellow-400 dark:border-yellow-600 shadow-sm ${className}`}>
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <div className="flex-1">
              {title && (
                <div className="font-bold text-yellow-900 dark:text-yellow-300 mb-1">
                  {title}
                </div>
              )}
              <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {description || text}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
