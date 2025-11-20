import React from 'react';
import { ReadingActivity } from '../../../types';

interface ReadingViewProps {
  activity: ReadingActivity;
}

export const ReadingView: React.FC<ReadingViewProps> = ({ activity }) => {
  return (
      <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
           <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
               <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">{activity.title}</h3>
               <div className="prose prose-lg dark:prose-invert text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed font-serif">
                   {activity.text}
               </div>
           </div>
           
           <div className="bg-indigo-900 dark:bg-indigo-950 text-white p-6 rounded-2xl border border-indigo-800">
               <h4 className="font-bold mb-4">Comprehension Check</h4>
               <div className="space-y-4">
                   {activity.comprehensionQuestions.map((q, i) => (
                       <div key={i} className="border-b border-indigo-800 pb-4 last:border-0">
                           <p className="font-medium mb-2">Q: {q.question}</p>
                           <p className="text-indigo-300 text-sm">A: {q.answer}</p>
                       </div>
                   ))}
               </div>
           </div>
      </div>
  );
};