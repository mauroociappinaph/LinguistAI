import React, { useState } from 'react';
import { Lesson } from '../../../types';
import { Button } from '../../../components';

interface QuizViewProps {
  lesson: Lesson;
  onComplete: (id: string, xp: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ lesson, onComplete }) => {
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  
  const exercise = lesson.grammar.interactiveExercise;
      
  const checkAnswer = () => {
      if (selectedQuizOption === exercise.answer) {
          setQuizFeedback("Correct! You've mastered this concept.");
      } else {
          setQuizFeedback("Incorrect. Try again or review the grammar section.");
      }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 animate-in zoom-in-95 duration-300">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-indigo-100 dark:border-slate-800 text-center">
            <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold tracking-wider mb-4">FINAL CHALLENGE</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{exercise.question}</h3>
            
            <div className="space-y-3 mb-8">
                {exercise.options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => { setSelectedQuizOption(opt); setQuizFeedback(null); }}
                        className={`w-full p-4 rounded-xl border-2 font-medium transition-all ${
                            selectedQuizOption === opt 
                                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200' 
                                : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-600'
                        }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>

            {quizFeedback && (
                 <div className={`p-4 rounded-xl mb-6 ${quizFeedback.includes('Correct') ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
                     {quizFeedback}
                 </div>
            )}

            {!quizFeedback || !quizFeedback.includes('Correct') ? (
                <Button size="lg" className="w-full" onClick={checkAnswer} disabled={!selectedQuizOption}>
                    Check Answer
                </Button>
            ) : (
                <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => onComplete(lesson.id, 250)}>
                    Complete Lesson (+250 XP)
                </Button>
            )}
        </div>
    </div>
  );
};