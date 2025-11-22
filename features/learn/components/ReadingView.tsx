import React, { useState } from 'react';
import { ReadingActivity } from '../../../types';
import { ChevronDown, BookOpen, HelpCircle, CheckCircle } from 'lucide-react';

interface ReadingViewProps {
  activity: ReadingActivity;
}

interface ComprehensionQuestionProps {
  question: string;
  answer: string;
  index: number;
}

/**
 * Componente individual para cada pregunta de comprensión
 * Implementa un acordeón expandible con animaciones suaves
 */
const ComprehensionQuestion: React.FC<ComprehensionQuestionProps> = ({
  question,
  answer,
  index
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="group border-b border-indigo-800/30 last:border-0 pb-5 last:pb-0 transition-all duration-300"
    >
      {/* Pregunta */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-800/40 flex items-center justify-center text-indigo-200 font-semibold text-sm mt-0.5">
          {index + 1}
        </div>
        <div className="flex-1">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
            <p className="font-medium text-white leading-relaxed">
              {question}
            </p>
          </div>
        </div>
      </div>

      {/* Botón para revelar respuesta */}
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className="ml-11 flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors duration-200 group/btn"
        aria-expanded={isRevealed}
        aria-label={isRevealed ? "Ocultar respuesta" : "Mostrar respuesta"}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            isRevealed ? 'rotate-180' : ''
          }`}
        />
        <span>{isRevealed ? 'Ocultar respuesta' : 'Mostrar respuesta'}</span>
      </button>

      {/* Respuesta con animación */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isRevealed ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="ml-11 flex items-start gap-2 bg-indigo-900/40 rounded-lg p-4 border border-indigo-700/30">
          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-indigo-100 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Vista principal de Reading optimizada para una experiencia de lectura superior
 *
 * Mejoras implementadas:
 * - Tipografía optimizada para lectura digital (serif, line-height 1.8)
 * - Ancho máximo de 65-75 caracteres por línea para legibilidad óptima
 * - Jerarquía visual clara con separadores y espaciado generoso
 * - Preguntas de comprensión interactivas con acordeón
 * - Microanimaciones suaves y estados hover
 * - Diseño responsive y accesible
 */
export const ReadingView: React.FC<ReadingViewProps> = ({ activity }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Actividad de Lectura
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {activity.title}
          </h2>
        </div>
      </div>

      {/* Reading Content - Optimizado para lectura */}
      <article className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="px-8 py-10 md:px-12 md:py-14">
          {/* Contenedor con ancho máximo optimizado para lectura */}
          <div className="max-w-3xl mx-auto">
              {/* Custom Text Renderer */}
              <div className="font-serif text-lg md:text-xl leading-relaxed">
                {(activity.text || '').split('\n\n').map((block, blockIndex) => {
                  // Handle Lists
                  if (block.trim().startsWith('- ') || block.trim().startsWith('* ')) {
                    return (
                      <ul key={blockIndex} className="list-disc pl-6 mb-6 space-y-2 marker:text-indigo-500">
                        {block.split('\n').map((item, itemIndex) => (
                          <li key={itemIndex} className="text-slate-700 dark:text-slate-300 pl-2">
                            {item.replace(/^[-*]\s+/, '').split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={partIndex} className="font-bold text-indigo-700 dark:text-indigo-300">{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Handle Paragraphs
                  return (
                    <p key={blockIndex} className="mb-6 text-slate-700 dark:text-slate-300">
                      {block.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIndex} className="font-bold text-indigo-700 dark:text-indigo-300">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>
          </div>
        </div>

        {/* Separador visual sutil */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

        {/* Metadata o información adicional (opcional) */}
        <div className="px-8 py-4 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
            📖 Tómate tu tiempo para leer y comprender el contenido
          </p>
        </div>
      </article>

      {/* Comprehension Questions Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-900 to-purple-900 dark:from-indigo-950 dark:via-indigo-950 dark:to-purple-950 text-white rounded-3xl shadow-lg border border-indigo-800/50 overflow-hidden">
        {/* Header de la sección */}
        <div className="px-8 py-6 border-b border-indigo-800/30 bg-indigo-900/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-700/50 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Comprensión de Lectura</h3>
              <p className="text-sm text-indigo-300 mt-0.5">
                {(activity.comprehensionQuestions || []).length} {(activity.comprehensionQuestions || []).length === 1 ? 'pregunta' : 'preguntas'} para verificar tu comprensión
              </p>
            </div>
          </div>
        </div>

        {/* Lista de preguntas */}
        <div className="px-8 py-6 space-y-5">
          {(activity.comprehensionQuestions || []).map((q, i) => (
            <ComprehensionQuestion
              key={i}
              question={q?.question || 'Question coming soon...'}
              answer={q?.answer || 'Answer coming soon...'}
              index={i}
            />
          ))}
        </div>

        {/* Footer con tip */}
        <div className="px-8 py-4 bg-indigo-950/40 border-t border-indigo-800/30">
          <p className="text-sm text-indigo-300 text-center">
            💡 Intenta responder mentalmente antes de revelar las respuestas
          </p>
        </div>
      </section>
    </div>
  );
};
