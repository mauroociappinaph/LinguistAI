import React, { useState } from 'react';
import { Lesson } from '../../../types';
import { Button } from '../../../components';
import { analyzePronunciation, PronunciationResult } from '../../../services';
import { useSpeechRecognition } from '../../../hooks';

interface SpeakingViewProps {
  lesson: Lesson;
}

export const SpeakingView: React.FC<SpeakingViewProps> = ({ lesson }) => {
  const { 
    isRecording, 
    transcript, 
    error, 
    startRecording, 
    stopRecording,
    isSupported 
  } = useSpeechRecognition();

  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const toggleRecording = () => {
    if (!isSupported) return;
    if (isRecording) {
      stopRecording();
    } else {
      setResult(null);
      setAnalysisError(null);
      startRecording();
    }
  };

  const analyzeSpeech = async () => {
    if (!transcript) return;
    setIsAnalyzing(true);
    setAnalysisError(null);
    
    try {
      const data = await analyzePronunciation(transcript, lesson.speaking);
      setResult(data);
    } catch (e) {
      setAnalysisError("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderScoreBar = (label: string, score: number, colorClass: string) => (
    <div className="mb-3">
        <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-500 dark:text-slate-400">
            <span>{label}</span>
            <span>{score}/10</span>
        </div>
        <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClass}`} 
                style={{ width: `${score * 10}%` }}
            ></div>
        </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-300">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Speaking Practice</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-lg mx-auto">
          Read the scenario and record your answer. Focus on fluency and using the target grammar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Scenario & Result */}
        <div className="space-y-6">
             {/* Scenario Card */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">Scenario</h3>
                <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">
                    {lesson.scenario}
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Your Task</h4>
                    <p className="text-slate-600 dark:text-slate-300 italic">
                    "{lesson.speaking}"
                    </p>
                </div>
            </div>

            {/* Result Section */}
            {result && (
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden animate-in zoom-in-95">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold">Analysis Complete</h3>
                            <p className="text-indigo-100 text-sm">Here is how you performed</p>
                        </div>
                        <div className="bg-white/20 p-2 rounded-lg text-2xl font-bold backdrop-blur-sm">
                            {result.score}<span className="text-sm opacity-75">/10</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                            {renderScoreBar("Grammar", result.breakdown.grammar, "bg-indigo-500")}
                            {renderScoreBar("Clarity", result.breakdown.clarity, "bg-emerald-500")}
                            {renderScoreBar("Relevance", result.breakdown.relevance, "bg-amber-500")}
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">AI Tutor Feedback</h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {result.feedback}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Right Column: Recording Interface */}
        <div className="bg-slate-900 dark:bg-black p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center border border-slate-800 relative overflow-hidden min-h-[400px]">
            {/* Visualizer Background Effect */}
            {isRecording && (
              <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-20 pointer-events-none h-full">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="w-3 bg-indigo-500 rounded-full animate-pulse" style={{ height: `${20 + Math.random() * 60}%`, animationDuration: `${0.4 + Math.random() * 0.5}s` }}></div>
                 ))}
              </div>
            )}

            <div className={`relative z-10 mb-8 transition-all duration-300 ${isRecording ? 'scale-110' : ''}`}>
               <button 
                 onClick={toggleRecording}
                 className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                   isRecording 
                   ? 'bg-red-500 hover:bg-red-600 ring-8 ring-red-500/20' 
                   : 'bg-indigo-600 hover:bg-indigo-500 ring-8 ring-indigo-600/20'
                 }`}
               >
                 {isRecording ? (
                   <div className="w-8 h-8 bg-white rounded-md animate-pulse"></div>
                 ) : (
                   <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                   </svg>
                 )}
               </button>
            </div>

            <p className="text-slate-400 font-medium mb-8 h-6 uppercase tracking-widest text-xs">
              {error ? <span className="text-red-400">{error}</span> : analysisError ? <span className="text-red-400">{analysisError}</span> : isRecording ? "Listening..." : transcript ? "Recording Captured" : "Tap mic to start"}
            </p>

            {transcript && !isRecording && (
               <div className="w-full animate-in fade-in slide-in-from-bottom-4 max-w-sm">
                  <div className="bg-slate-800 p-5 rounded-2xl text-left mb-6 border border-slate-700 shadow-inner">
                     <p className="text-slate-400 text-xs uppercase font-bold mb-2">You said:</p>
                     <p className="text-white text-sm italic leading-relaxed">"{transcript}"</p>
                  </div>
                  <Button onClick={analyzeSpeech} isLoading={isAnalyzing} className="w-full py-4 bg-white text-slate-900 hover:bg-indigo-50 border-none font-bold">
                     Analyze Pronunciation
                  </Button>
               </div>
            )}
        </div>
      </div>
    </div>
  );
};