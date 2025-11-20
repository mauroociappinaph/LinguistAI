import React from 'react';

interface GrammarContextProps {
  examples: string[];
  usage: string;
}

export const GrammarContext: React.FC<GrammarContextProps> = ({ examples, usage }) => {
  
  const formatExample = (text: string) => {
    // Replaces **text** with styled spans
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-1 rounded">$1</span>');
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.003 8.003 0 01-8.354-5.646M12 7a8 8 0 100 16 8 8 0 000-16z" /></svg>
            In Context
        </h3>

        <div className="space-y-4">
            {examples.map((ex, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-500 transition-colors py-1">
                    <p 
                        className="text-slate-700 dark:text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formatExample(ex) }} 
                    />
                </div>
            ))}
        </div>

        <div className="mt-8 bg-indigo-50 dark:bg-slate-800 p-5 rounded-2xl">
            <h4 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2 uppercase tracking-wider">Usage Note</h4>
            <p className="text-sm text-indigo-800 dark:text-slate-400 whitespace-pre-wrap leading-relaxed">
                {usage}
            </p>
        </div>
    </div>
  );
};