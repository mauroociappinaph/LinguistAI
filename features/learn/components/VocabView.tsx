import React from 'react';
import { VocabularyItem, Lesson } from '../../../types';

interface VocabViewProps {
  lesson: Lesson;
}

export const VocabView: React.FC<VocabViewProps> = ({ lesson }) => {
  const renderVocabCard = (v: VocabularyItem) => (
      <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg text-indigo-900 dark:text-indigo-300">{v.item}</h4>
              <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{v.pronunciation}</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{v.explanation}</p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded text-xs text-indigo-700 dark:text-indigo-300 italic">
              "{v.example}"
          </div>
      </div>
  );

  return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-300">
          <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Key Vocabulary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.vocabulary.map((v, i) => <React.Fragment key={i}>{renderVocabCard(v)}</React.Fragment>)}
              </div>
          </div>
          
          <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Phrasal Verbs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {lesson.phrasalVerbs.map((v, i) => <React.Fragment key={i}>{renderVocabCard(v)}</React.Fragment>)}
              </div>
          </div>

           <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Useful Phrases</h3>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  {lesson.functionalChunks.chunks.map((chunk, i) => (
                      <div key={i} className="flex border-b border-slate-100 dark:border-slate-800 last:border-0 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <div className="w-1/2 font-medium text-indigo-700 dark:text-indigo-400">{chunk.chunk}</div>
                          <div className="w-1/2 text-sm text-slate-500 dark:text-slate-400">{chunk.usage}</div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};