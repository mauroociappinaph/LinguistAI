import React from 'react';
import { CommonMistake } from '../../../../types';

interface GrammarMistakesProps {
  mistakes: CommonMistake[];
}

/**
 * GrammarMistakes Component
 * Displays common grammar mistakes with clear visual comparison
 */
export const GrammarMistakes: React.FC<GrammarMistakesProps> = ({ mistakes }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Common Pitfalls</h3>
          <p className="text-sm text-amber-600 dark:text-amber-400">Learn from these frequent mistakes</p>
        </div>
      </div>

      {/* Mistakes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {mistakes.map((mistake, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Mistake number badge */}
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 px-5 py-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 bg-slate-600 dark:bg-slate-700 text-white text-xs font-bold rounded-full">
                  {idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                  Mistake #{idx + 1}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Incorrect Example */}
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
                      Incorrect
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 line-through decoration-red-400 dark:decoration-red-600 decoration-2 opacity-75">
                      {mistake.incorrect}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow separator */}
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-red-300 to-emerald-300 dark:from-red-700 dark:to-emerald-700"></div>
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-500 dark:from-emerald-700 dark:to-emerald-500"></div>
                </div>
              </div>

              {/* Correct Example */}
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                      Correct
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {mistake.correct}
                    </p>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Why?</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {mistake.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tip */}
      <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-5 rounded-2xl border border-amber-200 dark:border-amber-900/30">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-amber-500 rounded-lg">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-1">
              Pro Tip
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-400 leading-relaxed">
              Practice these corrections until they become automatic. The more you use the correct forms, the more natural they'll feel in conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
