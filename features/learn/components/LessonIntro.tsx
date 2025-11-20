import React from 'react';
import { Lesson } from '../../../types';

interface LessonIntroProps {
  lesson: Lesson;
  onStart: () => void;
}

export const LessonIntro: React.FC<LessonIntroProps> = ({ lesson }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mt-4 animate-in fade-in duration-500">
       <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider text-sm uppercase mb-2 block">{lesson.level} • {lesson.id}</span>
       <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">{lesson.title}</h1>
       <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{lesson.description}</p>
       
       <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 text-left rounded-r-xl mb-8">
           <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">Did You Know? 💡</h4>
           <p className="text-yellow-900 dark:text-yellow-100 opacity-90">{lesson.didYouKnow}</p>
       </div>
    </div>
  );
};