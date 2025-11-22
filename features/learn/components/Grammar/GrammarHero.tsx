import React from 'react';
import { GrammarSection } from '../../../../types';

interface GrammarHeroProps {
  title: string;
  explanation: string;
}

/**
 * GrammarHero Component
 * Displays the main grammar concept with full explanation and engaging visual design
 */
export const GrammarHero: React.FC<GrammarHeroProps> = ({ title, explanation }) => {

  // Función para formatear el texto con markdown básico
  const formatText = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, idx) => {
        // Detectar si es un título o bullet point
        if (paragraph.startsWith('🔹')) {
          const parts = paragraph.split('—');
          const bulletTitle = parts[0].replace('🔹 **', '').replace('**', '').trim();
          const bulletContent = parts[1]?.trim() || '';

          return (
            <div key={idx} className="flex gap-3 items-start mb-4">
              <span className="flex-shrink-0 w-2 h-2 bg-indigo-300 rounded-full mt-2"></span>
              <div>
                <span className="font-bold text-white">{bulletTitle}</span>
                <span className="text-indigo-100"> — {bulletContent}</span>
              </div>
            </div>
          );
        }

        // Formatear texto con **bold**
        const formattedParagraph = paragraph
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="text-indigo-200 italic">$1</em>');

        return (
          <p
            key={idx}
            className="mb-4 text-indigo-50 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedParagraph }}
          />
        );
      });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 dark:from-indigo-900 dark:via-purple-900 dark:to-slate-900 rounded-3xl shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full -ml-16 -mb-16 blur-3xl pointer-events-none"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 p-8 md:p-10">
        {/* Header badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">Grammar Focus</span>
            <div className="w-12 h-0.5 bg-indigo-300 mt-1 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">
          {title}
        </h2>

        {/* Explanation content */}
        <div className="max-w-4xl">
          <div className="text-base md:text-lg">
            {formatText(explanation)}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 text-indigo-200 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Master this concept to improve your professional communication</span>
          </div>
        </div>
      </div>
    </div>
  );
};
