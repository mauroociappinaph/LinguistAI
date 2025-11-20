import React, { useState, useRef, useEffect } from 'react';
import { Lesson } from '../../../types';
import { sendRolePlayMessage, analyzePronunciation, PronunciationResult } from '../../../services';
import { RolePlayInput, RolePlayFeedback } from './RolePlay';

interface RolePlayHeaderProps {
  title: string;
  objective: string;
  aiPersona: string;
  messageCount: number;
  sessionTime: string;
}

const RolePlayHeader: React.FC<RolePlayHeaderProps> = ({ 
  title, 
  objective, 
  aiPersona, 
  messageCount,
  sessionTime 
}) => (
  <div className="relative bg-gradient-to-br from-white to-indigo-50 dark:from-slate-900 dark:to-indigo-950/20 rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 mb-6 overflow-hidden">
    {/* Animated background decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    
    <div className="relative p-6">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          {/* Animated icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl blur animate-pulse" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform hover:scale-110 transition-transform">
              🎭
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-slate-500 dark:text-slate-400">Interactive Scenario</span>
              <span className="text-xs px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold">
                LIVE
              </span>
            </div>
          </div>
        </div>
        
        {/* Session stats */}
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{messageCount}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Messages</div>
          </div>
          <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{sessionTime}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Duration</div>
          </div>
        </div>
      </div>
      
      {/* Info cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all hover:shadow-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Your Mission
              </h4>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {objective}
            </p>
          </div>
        </div>
        
        <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all hover:shadow-lg">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                AI Persona
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full blur animate-pulse" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  AI
                </div>
              </div>
              <div>
                <p className="text-sm font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {aiPersona}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ready to chat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface RolePlayMessageProps {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  index: number;
}

const RolePlayMessage: React.FC<RolePlayMessageProps> = ({ role, text, timestamp, index }) => {
  const isUser = role === 'user';
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div className={`
      flex ${isUser ? 'justify-end' : 'justify-start'} 
      transform transition-all duration-500 ease-out
      ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}
    `}>
      {!isUser && (
        <div className="flex flex-col items-center mr-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl blur animate-pulse" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">
              AI
            </div>
          </div>
          <div className="w-0.5 h-3 bg-gradient-to-b from-violet-500/20 to-transparent mt-1" />
        </div>
      )}
      
      <div className={`group max-w-[75%]`}>
        <div className={`
          relative p-5 rounded-3xl shadow-lg border backdrop-blur-sm
          ${isUser 
            ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-tr-sm border-indigo-500 shadow-indigo-500/20' 
            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm border-slate-200 dark:border-slate-700'
          }
          hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
        `}>
          {/* Message glow effect */}
          {!isUser && (
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl blur-xl" />
          )}
          
          <p className="relative whitespace-pre-wrap leading-relaxed font-medium">
            {text}
          </p>
          
          {/* Timestamp */}
          <div className={`
            mt-2 text-xs opacity-70
            ${isUser ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}
          `}>
            {timestamp}
          </div>
        </div>
        
        {/* Tail */}
        <div className={`
          absolute bottom-5 w-4 h-4 transform rotate-45
          ${isUser 
            ? 'right-[-8px] bg-indigo-700' 
            : 'left-[-8px] bg-white dark:bg-slate-800'
          }
        `} />
      </div>
      
      {isUser && (
        <div className="flex flex-col items-center ml-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white text-sm font-bold shadow-lg">
            You
          </div>
          <div className="w-0.5 h-3 bg-gradient-to-b from-slate-500/20 to-transparent mt-1" />
        </div>
      )}
    </div>
  );
};

const TypingIndicator: React.FC = () => (
  <div className="flex justify-start animate-in slide-in-from-bottom-4 fade-in duration-300">
    <div className="flex items-start gap-3">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl blur animate-pulse" />
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg animate-pulse">
          AI
        </div>
      </div>
      
      <div className="relative bg-white dark:bg-slate-800 px-6 py-4 rounded-3xl rounded-tl-sm shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mr-2">Thinking</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface RolePlayViewProps {
  lesson: Lesson;
}

export const RolePlayView: React.FC<RolePlayViewProps> = ({ lesson }) => {
  const scenario = lesson.rolePlay;
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string; timestamp: string }[]>([
    { 
      role: 'model', 
      text: scenario.initialMessage,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sessionStartTime] = useState(Date.now());
  const [sessionDuration, setSessionDuration] = useState('0:00');
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Update session duration
  useEffect(() => {
    const interval = setInterval(() => {
      const duration = Date.now() - sessionStartTime;
      const minutes = Math.floor(duration / 60000);
      const seconds = Math.floor((duration % 60000) / 1000);
      setSessionDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionStartTime]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, pronunciationResult]);

  const handleSend = async (text: string) => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', text, timestamp }]);
    setIsLoading(true);
    setPronunciationResult(null);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await sendRolePlayMessage(
      history,
      text,
      scenario.objective,
      scenario.aiPersona
    );

    const responseTimestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'model', text: response.text, timestamp: responseTimestamp }]);
    setIsLoading(false);
  };

  const handleAnalyzePronunciation = async (text: string) => {
    setIsAnalyzing(true);
    try {
      const lastAiMessage = messages.filter(m => m.role === 'model').pop()?.text || scenario.initialMessage;
      const context = `Replying to: "${lastAiMessage}" in scenario: ${scenario.objective}`;
      
      const result = await analyzePronunciation(text, context);
      setPronunciationResult(result);
    } catch (error) {
      console.error("Failed to analyze", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const userMessageCount = messages.filter(m => m.role === 'user').length;

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500 h-[calc(100vh-180px)] flex flex-col">
      {/* Enhanced Header */}
      <RolePlayHeader 
        title={scenario.title} 
        objective={scenario.objective} 
        aiPersona={scenario.aiPersona}
        messageCount={userMessageCount}
        sessionTime={sessionDuration}
      />

      {/* Enhanced Chat Container */}
      <div className="flex-1 relative bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/10 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden flex flex-col">
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-violet-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Messages Area with enhanced styling */}
        <div 
          ref={messagesContainerRef}
          className="relative flex-1 overflow-y-auto p-6 space-y-5 scroll-smooth scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600"
        >
          {/* Welcome badge */}
          {messages.length === 1 && (
            <div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-800">
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  🎬 Scene started • Speak naturally and practice your skills
                </p>
              </div>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <RolePlayMessage 
              key={idx} 
              role={msg.role} 
              text={msg.text}
              timestamp={msg.timestamp}
              index={idx}
            />
          ))}
          
          {isLoading && <TypingIndicator />}
          
          <div ref={bottomRef} />
        </div>

        {/* Pronunciation Feedback Overlay */}
        {pronunciationResult && (
          <RolePlayFeedback 
            result={pronunciationResult} 
            onClose={() => setPronunciationResult(null)} 
          />
        )}

        {/* Enhanced Input Area */}
        <RolePlayInput 
          onSend={handleSend} 
          isLoading={isLoading} 
          onAnalyze={handleAnalyzePronunciation}
          isAnalyzing={isAnalyzing}
        />
      </div>
    </div>
  );
};