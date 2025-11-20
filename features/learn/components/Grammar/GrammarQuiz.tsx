import React, { useState } from 'react';
import { InteractiveExercise } from '../../../../types';
import { Button } from '../../../../components';

interface GrammarQuizProps {
  exercise: InteractiveExercise;
}

export const GrammarQuiz: React.FC<GrammarQuizProps> = ({ exercise }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheck = (option: string) => {
    setSelectedOption(option);
    if (option === exercise.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="bg-slate-900 dark:bg-black p-8 rounded-3xl shadow-lg text-center relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/50 to-purple-900/50 opacity-50 pointer-events-none"></div>
         
         <div className="relative z-10 max-w-2xl mx-auto">
             <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold tracking-wider mb-4 border border-indigo-500/30">QUICK CHECK</span>
             
             <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
                {exercise.question.replace('___', '_____')}
             </h3>

             <div className="flex flex-wrap justify-center gap-4">
                {exercise.options.map((option) => {
                    const isSelected = selectedOption === option;
                    const showResult = isSelected && isCorrect !== null;
                    let buttonStyle = "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700";
                    
                    if (showResult) {
                        if (isCorrect) buttonStyle = "bg-emerald-600 text-white border-emerald-500 ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900";
                        else buttonStyle = "bg-red-600 text-white border-red-500 ring-2 ring-red-400 ring-offset-2 ring-offset-slate-900";
                    } else if (isSelected) {
                         buttonStyle = "bg-indigo-600 text-white border-indigo-500";
                    }

                    return (
                        <button
                            key={option}
                            onClick={() => handleCheck(option)}
                            className={`px-6 py-3 rounded-xl border font-medium transition-all duration-200 ${buttonStyle}`}
                        >
                            {option}
                        </button>
                    );
                })}
             </div>

             {isCorrect !== null && (
                 <div className={`mt-6 text-sm font-bold animate-in fade-in slide-in-from-bottom-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                     {isCorrect ? "🎉 Correct! You've got it." : "Try again! Review the rules above."}
                 </div>
             )}
         </div>
    </div>
  );
};