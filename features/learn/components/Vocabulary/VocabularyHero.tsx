import React from 'react';
import { BookOpen, Star, Zap } from 'lucide-react';

interface VocabularyHeroProps {
  totalTerms: number;
  learnedTerms?: number;
  lessonTitle: string;
}

export const VocabularyHero: React.FC<VocabularyHeroProps> = ({
  totalTerms,
  learnedTerms = 0,
  lessonTitle
}) => {
  const progress = Math.min(100, Math.round((learnedTerms / totalTerms) * 100));

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-900 text-white shadow-xl mb-10">
      {/* Background Patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 p-8 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-indigo-50 border border-white/10">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Vocabulary Builder</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Mastering <span className="text-indigo-200">{lessonTitle}</span>
            </h2>

            <p className="text-indigo-100 text-lg leading-relaxed max-w-xl">
              Expand your professional lexicon with {totalTerms} essential terms, phrases, and expressions designed for real-world application.
            </p>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px] bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between items-center text-sm font-medium text-indigo-100">
              <span>Lesson Progress</span>
              <span>{progress}%</span>
            </div>

            <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between gap-2 text-xs text-indigo-200 mt-1">
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-300" />
                <span>{totalTerms} Terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-emerald-300" />
                <span>{learnedTerms} Learned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
