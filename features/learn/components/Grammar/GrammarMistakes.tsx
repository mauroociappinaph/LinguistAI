import React from 'react';
import { CommonMistake } from '../../../../types';

interface GrammarMistakesProps {
  mistakes: CommonMistake[];
}

export const GrammarMistakes: React.FC<GrammarMistakesProps> = ({ mistakes }) => {
  return (
    <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 p-1.5 rounded-lg">⚠️</span>
              Common Pitfalls
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mistakes.map((mistake, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col">
                      <div className="flex-1 p-5 grid grid-cols-1 gap-4">
                           {/* Incorrect Side */}
                           <div className="relative pl-8 opacity-75">
                               <div className="absolute left-0 top-0.5 w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">✕</div>
                               <p className="text-red-600/80 dark:text-red-400 line-through decoration-red-300 dark:decoration-red-700">{mistake.incorrect}</p>
                           </div>
                           
                           {/* Correct Side */}
                           <div className="relative pl-8">
                               <div className="absolute left-0 top-0.5 w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                               <p className="font-medium text-slate-900 dark:text-white">{mistake.correct}</p>
                           </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-3 px-5 border-t border-slate-100 dark:border-slate-800">
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                             Reason: <span className="font-normal">{mistake.explanation}</span>
                          </p>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  );
};