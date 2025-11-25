
import React, { useState, useRef, useEffect } from 'react';
import { Lesson, AccentSample } from '../../../types';
import { generateSpeech } from '../../../services';

interface AccentViewProps {
  lesson: Lesson;
}

export const AccentView: React.FC<AccentViewProps> = ({ lesson }) => {
  return (
      <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 mb-6">
               <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">{lesson.pronunciationClinic.title}</h3>
               <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-4">{lesson.pronunciationClinic.explanation}</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {lesson.pronunciationClinic.examples.map((ex, i) => (
                       <div key={i} className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm">
                           <div className="flex justify-between">
                               <span className="font-bold text-slate-800 dark:text-slate-200">{ex.term}</span>
                               <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{ex.phonetic}</span>
                           </div>
                           <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{ex.tip}</p>
                       </div>
                   ))}
               </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Global IT Accent Lab</h3>
          <div className="grid gap-4">
              {lesson.globalAccentLab.map((acc, i) => (
                  <AccentCard key={i} sample={acc} />
              ))}
          </div>
      </div>
  );
};

const AccentCard: React.FC<{ sample: AccentSample }> = ({ sample }) => {
    const [audioSrc, setAudioSrc] = useState(sample.audioSrc);
    const [status, setStatus] = useState<'idle' | 'loading' | 'playing' | 'paused'>('idle');
    const audioRef = useRef<HTMLAudioElement>(null);
    const currentUrlRef = useRef<string | null>(null);

    // Cleanup function
    useEffect(() => {
        return () => {
            if (currentUrlRef.current) {
                URL.revokeObjectURL(currentUrlRef.current);
            }
        };
    }, []);

    // Ensure internal audio state stays in sync with component state
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => setStatus('idle');

        const onPause = () => {
            // Only set to paused if not ended and not seeking (if we had seeking)
            if (!audio.ended && !audio.error) {
                setStatus('paused');
            }
        };

        const onPlay = () => setStatus('playing');

        audio.addEventListener('ended', onEnded);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('play', onPlay);

        return () => {
            audio.removeEventListener('ended', onEnded);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('play', onPlay);
        };
    }, [audioSrc]);

    const handleTogglePlay = async () => {
        if (!audioRef.current) return;

        // Case 1: Audio exists and is playing -> Pause
        if (status === 'playing') {
            audioRef.current.pause();
            return;
        }

        // Case 2: Audio exists and is paused or idle -> Play/Resume
        if (audioSrc && status !== 'loading') {
            try {
                await audioRef.current.play();
            } catch (err: any) {
                // Ignore AbortError which happens when pausing while loading
                if (err.name !== 'AbortError') {
                    console.error("Playback failed:", err);
                    setStatus('idle');
                }
            }
            return;
        }

        // Case 3: Audio missing -> Generate then Play
        setStatus('loading');

        // Map accents to suitable voices
        const voiceMap: Record<string, string> = {
            'American': 'Kore',
            'British': 'Puck',
            'Australian': 'Fenrir',
            'German': 'Charon'
        };

        const voice = Object.keys(voiceMap).find(k => sample.accent.includes(k))
            ? voiceMap[Object.keys(voiceMap).find(k => sample.accent.includes(k))!]
            : 'Kore';

        // Validación robusta: trim y verificar si está vacío
        const trimmedTranscript = sample.transcript?.trim();

        if (!trimmedTranscript) {
            console.warn('[AccentView] Empty or whitespace-only transcript', {
                original: sample.transcript,
                accent: sample.accent
            });
            setStatus('idle');
            return;
        }

        const blob = await generateSpeech(trimmedTranscript, voice);

        if (blob) {
            // Cleanup previous URL
            if (currentUrlRef.current) {
                URL.revokeObjectURL(currentUrlRef.current);
            }

            const url = URL.createObjectURL(blob);
            currentUrlRef.current = url;
            setAudioSrc(url);

            // Short timeout to allow React to update the audio src in the DOM
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play().catch(err => {
                        console.error("Auto-play after generation failed:", err);
                        setStatus('idle');
                    });
                }
            }, 50);
        } else {
            setStatus('idle');
            // In a real app, show a toast/error message here
        }
    };

    return (
      <div className={`bg-white dark:bg-slate-900 p-5 rounded-xl border transition-all duration-300 flex flex-col md:flex-row gap-4 items-start md:items-center group ${status === 'playing' ? 'border-indigo-400 dark:border-indigo-500 shadow-md' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'}`}>
          <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-transform duration-500 ${status === 'playing' ? 'bg-indigo-100 dark:bg-indigo-900/50 scale-110 animate-pulse' : 'bg-slate-100 dark:bg-slate-800 group-hover:scale-110'}`}>
                  🌍
              </div>
          </div>
          <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate">{sample.accent}</h4>
                  {status === 'playing' && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                  )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 truncate">{sample.speakerBio}</p>

              <div className="flex items-center gap-3">
                  <button
                    onClick={handleTogglePlay}
                    disabled={status === 'loading'}
                    className={`
                        flex items-center justify-center w-10 h-10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900
                        ${status === 'loading' ? 'bg-indigo-50 dark:bg-indigo-900/30 cursor-wait' : ''}
                        ${status === 'playing' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-600 dark:text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-none'}
                    `}
                    aria-label={status === 'playing' ? "Pause audio" : status === 'loading' ? "Generating audio" : "Play audio"}
                    title={status === 'playing' ? "Pause" : "Play"}
                  >
                      {status === 'loading' ? (
                          <div className="w-4 h-4 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
                      ) : status === 'playing' ? (
                           <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                      ) : (
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      )}
                  </button>

                  <audio ref={audioRef} src={audioSrc || undefined} className="hidden" preload="none" />

                  {/* Status Text */}
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 min-w-[80px] transition-opacity duration-300">
                      {status === 'loading' && "Generating..."}
                      {status === 'playing' && "Playing"}
                      {status === 'paused' && "Paused"}
                      {status === 'idle' && "Listen"}
                  </span>
              </div>
          </div>
          <div className="flex-1 w-full md:w-auto bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
              <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 md:line-clamp-none">
                  "{sample.transcript}"
              </p>
          </div>
      </div>
    );
}
