import React, { useState } from 'react';

interface GrammarContextProps {
  examples: string[];
  usage: string;
}

/**
 * GrammarContext Component
 * Displays grammar examples in context and usage notes with improved formatting
 */
export const GrammarContext: React.FC<GrammarContextProps> = ({ examples, usage }) => {
  const [showAllExamples, setShowAllExamples] = useState(false);

  const formatExample = (text: string) => {
    // Replaces **text** with styled spans
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">$1</span>');
  };

  const formatUsage = (text: string) => {
    return text
      .split('\n\n')
      .map((section, idx) => {
        // Detectar secciones con emojis
        if (section.match(/^🕒|^🧱/)) {
          const lines = section.split('\n');
          const header = lines[0];
          const items = lines.slice(1);

          return (
            <div key={idx} className="mb-6 last:mb-0">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                {header}
              </h5>
              <ul className="space-y-2">
                {items.map((item, itemIdx) => {
                  if (item.trim().startsWith('-')) {
                    const cleanItem = item.replace(/^-\s*/, '');
                    const formatted = cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600 dark:text-indigo-400">$1</strong>');
                    const italicFormatted = formatted.replace(/\*(.*?)\*/g, '<em class="text-slate-600 dark:text-slate-400 italic">$1</em>');

                    return (
                      <li key={itemIdx} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2"></span>
                        <span
                          className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1"
                          dangerouslySetInnerHTML={{ __html: italicFormatted }}
                        />
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          );
        }

        return (
          <p key={idx} className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
            {section}
          </p>
        );
      });
  };

  const displayedExamples = showAllExamples ? examples : examples.slice(0, 4);
  const hasMoreExamples = examples.length > 4;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 px-6 py-4 border-b border-emerald-100 dark:border-emerald-900/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500 rounded-lg shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">In Context</h3>
            <p className="text-xs text-emerald-700 dark:text-emerald-400">Real-world examples</p>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="p-6 flex-1 overflow-y-auto">
        <div className="space-y-3 mb-6">
          {displayedExamples.map((ex, idx) => (
            <div
              key={idx}
              className="group relative pl-5 py-3 border-l-3 border-emerald-300 dark:border-emerald-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl pr-4"
            >
              {/* Example number badge */}
              <div className="absolute -left-3 top-3 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                {idx + 1}
              </div>

              <p
                className="text-slate-700 dark:text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatExample(ex) }}
              />
            </div>
          ))}
        </div>

        {/* Show more/less button */}
        {hasMoreExamples && (
          <button
            onClick={() => setShowAllExamples(!showAllExamples)}
            className="w-full py-2 px-4 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {showAllExamples ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                Show {examples.length - 4} More Examples
              </>
            )}
          </button>
        )}

        {/* Usage Note Section */}
        <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-indigo-500 rounded-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">
              Usage Guide
            </h4>
          </div>
          <div className="text-sm">
            {formatUsage(usage)}
          </div>
        </div>
      </div>
    </div>
  );
};
