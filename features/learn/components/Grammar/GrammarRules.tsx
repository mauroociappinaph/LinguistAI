import React, { useState } from 'react';
import { GrammarRule } from '../../../../types';

interface GrammarRulesProps {
  rules: GrammarRule[];
}

export const GrammarRules: React.FC<GrammarRulesProps> = ({ rules }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyRule = (rule: GrammarRule, index: number) => {
    const text = `${rule.from} → ${rule.to}`;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl" />
      
      {/* Header */}
      <div className="relative mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            {/* Animated icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl blur animate-pulse" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Grammar Structure
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Transform patterns with confidence
              </p>
            </div>
          </div>
          
          {/* Rules counter badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{rules.length}</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">rules</span>
          </div>
        </div>
      </div>
      
      {/* Rules list with improved animations */}
      <div className="relative flex-1 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 pr-2">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover glow effect */}
            {hoveredIndex === idx && (
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl transition-opacity duration-500" />
            )}
            
            <div className="relative flex items-center gap-3 bg-white dark:bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {/* Rule number */}
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              
              {/* From */}
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                  {rule.from}
                </div>
              </div>
              
              {/* Arrow with animation */}
              <div className="flex-shrink-0 flex items-center px-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" />
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
                  <svg 
                    className={`w-5 h-5 text-indigo-500 transition-transform duration-300 ${hoveredIndex === idx ? 'translate-x-1' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              {/* To */}
              <div className="flex-1 min-w-0">
                <div className="relative overflow-hidden font-mono text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{rule.to}</span>
                </div>
              </div>
              
              {/* Copy button */}
              <button
                onClick={() => handleCopyRule(rule, idx)}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Copy rule"
              >
                <div className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                  {copiedIndex === idx ? (
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced footer */}
      <div className="relative mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl">
          <div className="flex-shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Quick Tip
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pattern recognition is key! Notice how each transformation follows a consistent structure. Practice these patterns to build fluency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};