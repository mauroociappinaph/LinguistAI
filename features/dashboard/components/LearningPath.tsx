import React from 'react';
import { Lesson, UserState, Difficulty } from '../../../types';
import { Button } from '../../../components';

interface LearningPathProps {
  lessons: Lesson[];
  user: UserState;
  onStartLesson: (id: string) => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({ lessons, user, onStartLesson }) => {
  
  const handleViewCurriculum = () => {
    const element = document.getElementById('curriculum-list');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-10" id="curriculum-list">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Your Learning Path</h2>
        <button 
          onClick={handleViewCurriculum}
          className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-800 dark:hover:text-indigo-300 cursor-pointer transition-colors"
        >
          View Curriculum →
        </button>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson, idx) => {
          const isCompleted = user.completedLessons.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              className={`group relative bg-white dark:bg-slate-900 rounded-2xl p-1 border transition-all duration-300 ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-900/10'
                  : 'border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-lg'
              }`}
            >
              <div className="flex items-stretch">
                {/* Status Strip */}
                <div className={`w-2 rounded-l-xl ${isCompleted ? 'bg-emerald-500' : 'bg-indigo-500'}`}></div>

                <div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                        lesson.level === Difficulty.A1
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {lesson.level}
                      </span>
                      <span className="text-slate-400 text-xs font-medium">Lesson {idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
                      {lesson.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-xs text-slate-400 font-medium">Rewards</span>
                      <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                        +250 XP ⚡
                      </span>
                    </div>
                    {isCompleted ? (
                      <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    ) : (
                      <Button onClick={() => onStartLesson(lesson.id)} className="rounded-full px-6 shadow-indigo-200 dark:shadow-none shadow-md">
                        Start Lesson
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};