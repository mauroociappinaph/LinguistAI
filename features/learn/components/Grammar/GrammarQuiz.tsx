import React, { useState } from 'react';
import { InteractiveExercise } from '../../../../types';
import { Button } from '../../../../components';

interface GrammarQuizProps {
  exercise: InteractiveExercise;
}

/**
 * GrammarQuiz Component
 * Interactive quiz with gamified design and engaging feedback
 */
export const GrammarQuiz: React.FC<GrammarQuizProps> = ({ exercise }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);

  const handleCheck = (option: string) => {
    if (isCorrect !== null) return; // Prevent changing after correct answer

    setSelectedOption(option);
    setAttempts(prev => prev + 1);

    if (option === exercise.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      // Reset after showing error
      setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1500);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setAttempts(0);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 dark:from-black dark:via-indigo-950 dark:to-purple-950 rounded-3xl shadow-2xl overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Success confetti effect */}
      {isCorrect && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"
                style={{
                  top: `${50 + Math.random() * 20 - 10}%`,
                  left: `${50 + Math.random() * 20 - 10}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${1 + Math.random()}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/30 text-indigo-200 rounded-full text-xs font-bold tracking-wider mb-4 border border-indigo-400/30 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            QUICK CHECK
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            {exercise.question.replace('___', '_____')}
          </h3>

          {attempts > 0 && !isCorrect && (
            <p className="text-indigo-300 text-sm">
              Attempts: {attempts}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {exercise.options.map((option) => {
            const isSelected = selectedOption === option;
            const showResult = isSelected && isCorrect !== null;
            let buttonClasses = "group relative px-8 py-4 rounded-xl border-2 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";

            if (showResult) {
              if (isCorrect) {
                buttonClasses += " bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/50 animate-bounce";
              } else {
                buttonClasses += " bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/50 animate-shake";
              }
            } else if (isSelected) {
              buttonClasses += " bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/30";
            } else {
              buttonClasses += " bg-slate-800/50 hover:bg-slate-700/70 text-slate-200 border-slate-600 hover:border-indigo-400 backdrop-blur-sm";
            }

            return (
              <button
                key={option}
                onClick={() => handleCheck(option)}
                disabled={isCorrect !== null}
                className={buttonClasses}
              >
                {/* Glow effect on hover */}
                {!showResult && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                )}

                <span className="relative z-10 text-lg">{option}</span>

                {/* Check/Cross icon */}
                {showResult && (
                  <span className="ml-2 inline-block">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Message */}
        {isCorrect !== null && (
          <div className={`text-center animate-in fade-in slide-in-from-bottom-4 duration-500 ${isCorrect ? 'mb-6' : 'mb-4'}`}>
            {isCorrect ? (
              <div className="inline-flex flex-col items-center gap-3 bg-emerald-500/20 border border-emerald-400/50 rounded-2xl px-8 py-6 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-emerald-300">Perfect!</span>
                </div>
                <p className="text-emerald-200 text-sm">
                  You've mastered this concept! 🎉
                </p>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/50 rounded-xl px-6 py-3 backdrop-blur-sm">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-red-300 font-semibold">Not quite. Try again!</span>
              </div>
            )}
          </div>
        )}

        {/* Reset Button */}
        {isCorrect && (
          <div className="text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-200 border border-white/20 hover:border-white/40 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
          </div>
        )}

        {/* Hint */}
        {!isCorrect && attempts > 2 && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-start gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-xl px-5 py-3 backdrop-blur-sm max-w-md">
              <svg className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-left">
                <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">Hint</p>
                <p className="text-sm text-indigo-200">Review the grammar rules above for guidance.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
