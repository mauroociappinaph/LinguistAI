import React from 'react';
import { GrammarSection } from '../../../../types';

interface GrammarHeroProps {
  title: string;
  explanation: string;
}

export const GrammarHero: React.FC<GrammarHeroProps> = ({ title, explanation }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 opacity-90">
                <span className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">Grammar Focus</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{title}</h2>
            <div className="prose prose-invert prose-lg max-w-none opacity-90 leading-relaxed">
                {explanation.split('\n')[0]}
            </div>
        </div>
    </div>
  );
};