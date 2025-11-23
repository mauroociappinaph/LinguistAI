import React, { useState, useRef, useEffect } from 'react';
import { ListeningActivity } from '../../../types';
import { generateSpeech } from '../../../services';

interface ListeningViewProps {
  activity: ListeningActivity;
}

export const ListeningView: React.FC<ListeningViewProps> = ({ activity }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>(activity.audioSrc);
  const [loadError, setLoadError] = useState(false);

  // Initialize or recover audio source
  useEffect(() => {
      setAudioSrc(activity.audioSrc);
      setLoadError(false);
      setIsPlaying(false);

      // If initial src is empty, trigger generation immediately
      if (!activity.audioSrc && activity.transcript) {
          handleGenerateAudio();
      }
  }, [activity]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
        if(isFinite(audio.duration)) setDuration(audio.duration);
    };
    const onEnded = () => setIsPlaying(false);
    const onError = () => {
        if (audioSrc && !isGenerating) {
            console.warn("Audio load error, attempting generation...");
            setLoadError(true);
            // Attempt fallback generation
            handleGenerateAudio();
        }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [audioSrc, isGenerating]);

  const handleGenerateAudio = async () => {
      // Validación robusta: trim y verificar si está vacío
      const trimmedTranscript = activity.transcript?.trim();

      if (!trimmedTranscript) {
          console.warn('[ListeningView] Empty or whitespace-only transcript, cannot generate audio', {
              original: activity.transcript,
              trimmed: trimmedTranscript,
              type: typeof activity.transcript
          });
          setLoadError(true);
          setIsGenerating(false);
          return;
      }

      setIsGenerating(true);
      setLoadError(false);

      try {
          const generatedUrl = await generateSpeech(trimmedTranscript);

          if (generatedUrl) {
              setAudioSrc(generatedUrl);
              setLoadError(false);
          } else {
              console.error('[ListeningView] generateSpeech returned null');
              setLoadError(true);
          }
      } catch (error) {
          console.error('[ListeningView] Audio generation failed:', error);
          setLoadError(true);
      } finally {
          setIsGenerating(false);
      }
  };

  const togglePlay = async () => {
    if (audioRef.current && !loadError && !isGenerating) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        try {
          await audioRef.current.play();
        } catch (e: any) {
          // Ignore AbortError which happens when pausing while loading
          if (e.name !== 'AbortError') {
             console.error("Playback failed", e);
             setIsPlaying(false);
          }
        }
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current && !loadError) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setIsMuted(vol === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      audioRef.current.volume = newMuteState ? 0 : volume;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
      <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
           {/* Audio Player Card */}
           <div className="bg-slate-900 dark:bg-black text-white p-8 rounded-3xl shadow-lg flex flex-col items-center border border-slate-800 relative overflow-hidden">
               {/* Background Glow */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100 scale-150' : 'opacity-30 scale-100'}`}></div>

               {/* Icon / Visualization */}
               <div className="relative z-10 mb-6">
                   <div className={`w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 ${isPlaying ? 'scale-110' : 'scale-100'}`}>
                       {loadError ? (
                           <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       ) : isGenerating ? (
                           <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       ) : isPlaying ? (
                           <div className="flex gap-1 items-end h-8">
                               <div className="w-1.5 bg-white rounded-full animate-[bounce_1s_infinite] h-4"></div>
                               <div className="w-1.5 bg-white rounded-full animate-[bounce_1.2s_infinite] h-8"></div>
                               <div className="w-1.5 bg-white rounded-full animate-[bounce_0.8s_infinite] h-6"></div>
                           </div>
                       ) : (
                           <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       )}
                   </div>
               </div>

               <h3 className="relative z-10 font-bold text-xl mb-1">{activity.title}</h3>
               <p className="relative z-10 text-slate-400 text-sm mb-8">
                   {isGenerating ? "Generating AI Narration..." : "Audio Lesson"}
               </p>

               {/* Custom Controls */}
               <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                   <audio ref={audioRef} src={audioSrc || undefined} className="hidden" />

                   {loadError && !isGenerating ? (
                       <div className="text-center py-4 flex flex-col items-center justify-center h-[88px]">
                           <p className="text-red-300 text-sm font-medium bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">Audio Unavailable</p>
                           <button onClick={handleGenerateAudio} className="text-indigo-300 text-xs mt-2 hover:text-white underline">Retry Generation</button>
                       </div>
                   ) : (
                       <>
                           {/* Progress Bar */}
                           <div className="flex items-center gap-3 text-xs font-mono text-slate-300 mb-3">
                               <span>{formatTime(currentTime)}</span>
                               <div className="flex-1 relative h-1.5 bg-slate-700 rounded-full group cursor-pointer">
                                   <div
                                       className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full pointer-events-none"
                                       style={{ width: `${(duration > 0 ? currentTime / duration : 0) * 100}%` }}
                                   ></div>
                                   <input
                                       type="range"
                                       min={0}
                                       max={duration || 0}
                                       value={currentTime}
                                       onChange={handleSeek}
                                       disabled={isGenerating}
                                       className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                                   />
                               </div>
                               <span>{formatTime(duration)}</span>
                           </div>

                           {/* Buttons Row */}
                           <div className="flex items-center justify-between">
                               {/* Volume Control */}
                               <div className="flex items-center gap-2 w-24">
                                   <button onClick={toggleMute} className="text-slate-300 hover:text-white transition-colors">
                                       {isMuted || volume === 0 ? (
                                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                                       ) : (
                                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                                       )}
                                   </button>
                                   <input
                                       type="range"
                                       min="0"
                                       max="1"
                                       step="0.01"
                                       value={isMuted ? 0 : volume}
                                       onChange={handleVolumeChange}
                                       className="w-16 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                                   />
                               </div>

                               {/* Play/Pause Button */}
                               <button
                                   onClick={togglePlay}
                                   disabled={isGenerating}
                                   className={`w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg ${isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}
                               >
                                   {isPlaying ? (
                                       <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                   ) : (
                                       <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                   )}
                               </button>

                               {/* Spacer to balance layout */}
                               <div className="w-24 text-right">
                                   <span className="text-xs text-slate-400">1.0x</span>
                               </div>
                           </div>
                       </>
                   )}
               </div>
           </div>

           <div className="w-full text-left bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
               <div className="flex items-center gap-2 mb-4">
                   <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-md">
                       <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                   </div>
                   <h4 className="font-bold text-slate-800 dark:text-white text-sm uppercase tracking-wide">Transcript</h4>
               </div>
               <p className="text-slate-600 dark:text-slate-300 text-sm leading-loose font-medium border-l-4 border-indigo-200 dark:border-indigo-900 pl-4">
                   {activity.transcript || 'Transcript coming soon...'}
               </p>
           </div>

           <div className="bg-indigo-50 dark:bg-slate-900 p-6 rounded-2xl border border-indigo-100 dark:border-slate-800">
               <h4 className="font-bold text-indigo-900 dark:text-white mb-4 flex items-center gap-2">
                   <span>✅</span> Comprehension Check
               </h4>
               <div className="space-y-3">
                   {(activity.comprehensionQuestions || []).map((q, i) => (
                       <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-indigo-100 dark:border-slate-700/50">
                           <p className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2">{q?.question || 'Question coming soon...'}</p>
                           <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 w-fit px-3 py-1.5 rounded-lg">
                               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                               {q?.answer || 'Answer coming soon...'}
                           </div>
                       </div>
                   ))}
               </div>
           </div>
      </div>
  );
};
