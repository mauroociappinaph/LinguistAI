import React, { useState } from 'react';
import { GrammarRule } from '../../../../types';

interface GrammarRulesProps {
  rules: GrammarRule[];
}

/**
 * GrammarRules Component
 * Displays grammar transformation rules in a clear, digestible format
 */
export const GrammarRules: React.FC<GrammarRulesProps> = ({ rules }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyRule = (rule: GrammarRule, index: number) => {
    const text = `${rule.from} → ${rule.to}`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-xl">Grammar Structure</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">Transformation patterns</p>
          </div>
        </div>

        {/* Rules counter badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{rules.length}</span>
          <span className="text-sm text-slate-400 dark:text-slate-500">rules</span>
        </div>
      </div>

      {/* Rules list */}
      <div className="space-y-4">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg"
          >
            {/* Rule number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              {idx + 1}
            </div>

            <div className="flex items-center gap-4">
              {/* From */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  From
                </div>
                <div className="font-mono text-base font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  {rule.from}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-6">
                <svg
                  className="w-7 h-7 text-indigo-500 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* To */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                  To
                </div>
                <div className="relative overflow-hidden font-mono text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{rule.to}</span>
                </div>
              </div>

              {/* Copy button */}
              <button
                onClick={() => handleCopyRule(rule, idx)}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                aria-label="Copy rule"
                title="Copy rule"
              >
                {copiedIndex === idx ? (
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer tip */}
      <div className="p-5 border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-indigo-500 rounded-lg">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-1">
              Quick Tip
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
              Pattern recognition is key! Notice how each transformation follows a consistent structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
