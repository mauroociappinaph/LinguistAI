import React, { useEffect, useState } from 'react';
import { PronunciationResult } from '../../../../services';

interface RolePlayFeedbackProps {
  result: PronunciationResult;
  onClose: () => void;
}

export const RolePlayFeedback: React.FC<RolePlayFeedbackProps> = ({ result, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateMetrics, setAnimateMetrics] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    setIsVisible(true);
    setTimeout(() => setAnimateMetrics(true), 300);
    
    // Auto-close after 10 seconds
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'from-emerald-500 to-teal-500';
    if (score >= 5) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 9) return '🌟';
    if (score >= 8) return '🎯';
    if (score >= 6) return '👍';
    if (score >= 4) return '💪';
    return '📚';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 9) return 'Outstanding!';
    if (score >= 8) return 'Excellent work!';
    if (score >= 6) return 'Good job!';
    if (score >= 4) return 'Keep practicing!';
    return 'Room for improvement';
  };

  const getMetricColor = (value: number) => {
    if (value >= 8) return 'from-emerald-400 to-emerald-500';
    if (value >= 5) return 'from-indigo-400 to-indigo-500';
    return 'from-slate-400 to-slate-500';
  };

  const getMetricIcon = (label: string) => {
    switch(label) {
      case 'Grammar':
        return (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'Clarity':
        return (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case 'Relevance':
        return (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop blur */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Feedback Card */}
      <div className={`
        fixed bottom-24 left-4 right-4 max-w-lg mx-auto z-30
        transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
      `}>
        <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 animate-gradient" />
          
          {/* Content */}
          <div className="relative p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-4">
                {/* Animated Score Circle */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getScoreColor(result.score)} blur-lg opacity-60 animate-pulse`} />
                  <div className={`
                    relative w-14 h-14 rounded-2xl bg-gradient-to-br ${getScoreColor(result.score)} 
                    flex items-center justify-center text-white shadow-xl
                    transform transition-all duration-700 ${animateMetrics ? 'rotate-0 scale-100' : '-rotate-12 scale-0'}
                  `}>
                    <span className="text-xl font-bold">{result.score}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {getScoreMessage(result.score)}
                    </h4>
                    <span className="text-xl animate-bounce">{getScoreEmoji(result.score)}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    AI-Powered Analysis Complete
                  </p>
                </div>
              </div>
              
              {/* Close button */}
              <button 
                onClick={onClose} 
                className="group p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Feedback Message */}
            <div className="mb-5">
              <div className="relative">
                <div className="absolute -left-1 -top-1 text-4xl text-slate-200 dark:text-slate-700">"</div>
                <p className="relative bg-gradient-to-r from-slate-50 to-indigo-50 dark:from-slate-800 dark:to-indigo-900/20 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                    {result.feedback}
                  </span>
                </p>
                <div className="absolute -right-1 -bottom-1 text-4xl text-slate-200 dark:text-slate-700">"</div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Grammar', val: result.breakdown.grammar },
                { label: 'Clarity', val: result.breakdown.clarity },
                { label: 'Relevance', val: result.breakdown.relevance }
              ].map((metric, idx) => (
                <div 
                  key={metric.label} 
                  className={`
                    relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700/50 
                    rounded-2xl p-3 overflow-hidden transform transition-all duration-500
                    ${animateMetrics ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                  `}
                  style={{ transitionDelay: `${idx * 100 + 400}ms` }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl" />
                  
                  <div className="relative">
                    {/* Label with icon */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="text-indigo-500 dark:text-indigo-400">
                        {getMetricIcon(metric.label)}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-2 w-full bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getMetricColor(metric.val)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animateMetrics ? `${metric.val * 10}%` : '0%',
                          transitionDelay: `${idx * 100 + 500}ms`
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                    </div>
                    
                    {/* Score */}
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {metric.val}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tips section */}
            {result.score < 7 && (
              <div className={`
                mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 
                rounded-xl border border-indigo-100 dark:border-indigo-900/50
                transform transition-all duration-700 ${animateMetrics ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: '800ms' }}
              >
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  💡 Tip: Focus on clear pronunciation and natural pacing. Practice makes perfect!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};