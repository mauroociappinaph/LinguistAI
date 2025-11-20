import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../../../../components';
import { useSpeechRecognition } from '../../../../hooks';

interface RolePlayInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
  onAnalyze: (text: string) => void;
  isAnalyzing: boolean;
}

export const RolePlayInput: React.FC<RolePlayInputProps> = ({ 
  onSend, 
  isLoading, 
  onAnalyze, 
  isAnalyzing 
}) => {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isRecording, transcript, startRecording, stopRecording, isSupported, reset } = useSpeechRecognition();

  // Sync transcript to input with animation
  useEffect(() => {
    if (transcript) {
      setInput(transcript);
      // Add visual feedback when transcript updates
      inputRef.current?.classList.add('animate-pulse');
      setTimeout(() => {
        inputRef.current?.classList.remove('animate-pulse');
      }, 500);
    }
  }, [transcript]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add send animation
    const button = document.querySelector('[data-send-button]');
    button?.classList.add('scale-95');
    setTimeout(() => button?.classList.remove('scale-95'), 200);
    
    onSend(input);
    setInput('');
    reset();
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      reset();
      startRecording();
      setShowTooltip(false);
    }
  };

  const handleAnalyze = () => {
    if (input.trim().length > 3) {
      onAnalyze(input);
    }
  };

  // Character count for better UX
  const charCount = input.length;
  const maxChars = 500;

  return (
    <div className="relative">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.08)] dark:shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4">
            {/* Recording Status Bar */}
            {isRecording && (
              <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl p-4 border border-red-200/50 dark:border-red-800/50">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 animate-pulse" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="absolute inset-0 bg-red-500 rounded-full blur animate-ping" />
                      <span className="relative flex w-3 h-3 bg-red-500 rounded-full" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">
                        Listening...
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-3 bg-red-400 dark:bg-red-500 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-red-600/70 dark:text-red-400/70 italic max-w-xs truncate">
                    {transcript || "Start speaking..."}
                  </span>
                </div>
              </div>
            )}

            {/* Main Input Area */}
            <div className="relative">
              <div className={`
                relative flex gap-3 p-2 rounded-2xl transition-all duration-300
                ${isFocused 
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 shadow-lg shadow-indigo-500/10' 
                  : 'bg-slate-50 dark:bg-slate-800/50'
                }
              `}>
                {/* Voice Input Button */}
                {isSupported && (
                  <div className="relative">
                    <button
                      onClick={toggleRecording}
                      onMouseEnter={() => !isRecording && setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      className={`
                        relative p-3.5 rounded-xl transition-all duration-300 transform
                        ${isRecording 
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 scale-110' 
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105'
                        }
                        ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                      title={isRecording ? "Stop recording" : "Start voice input"}
                      disabled={isLoading}
                    >
                      {isRecording ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="6" width="12" height="12" rx="2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Tooltip */}
                    {showTooltip && !isRecording && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 animate-in fade-in slide-in-from-bottom-1">
                        Press to start voice input
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-slate-800" />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Text Input */}
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isRecording ? "Speak now..." : "Type your response here..."}
                    className={`
                      w-full bg-transparent px-4 py-3.5 pr-12 text-slate-700 dark:text-slate-200
                      placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-all
                      ${isRecording ? 'italic opacity-70' : ''}
                    `}
                    disabled={isLoading || isRecording}
                    autoFocus
                    maxLength={maxChars}
                  />
                  
                  {/* Character count */}
                  {input.length > 0 && (
                    <div className={`
                      absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors
                      ${charCount > maxChars * 0.9 ? 'text-orange-500' : 'text-slate-400'}
                    `}>
                      {charCount}/{maxChars}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {/* Pronunciation Check */}
                  {input.length > 3 && (
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || isLoading}
                      className={`
                        relative px-4 py-3 rounded-xl font-medium transition-all duration-300
                        ${isAnalyzing 
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' 
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105'
                        }
                        ${isLoading || isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                      title="Check pronunciation"
                    >
                      <div className="flex items-center gap-2">
                        {isAnalyzing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm">Analyzing...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            <span className="text-sm font-medium">Check</span>
                          </>
                        )}
                      </div>
                    </button>
                  )}

                  {/* Send Button */}
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading || isRecording}
                    data-send-button
                    className={`
                      relative p-3.5 rounded-xl transition-all duration-300 transform
                      ${input.trim() && !isLoading && !isRecording
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                      }
                    `}
                    title="Send message"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Input focus indicator */}
              {isFocused && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl pointer-events-none animate-pulse" />
              )}
            </div>

            {/* Helpful tips */}
            {!isRecording && !input && (
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                <span>Press Enter to send</span>
                <span>•</span>
                <span>Click mic for voice input</span>
                <span>•</span>
                <span>Type naturally</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};