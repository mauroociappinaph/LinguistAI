import React, { useState } from 'react';
import { Volume2, BookmarkPlus, Check } from 'lucide-react';
import { VocabularyItem } from '../../../../types';
import { addVocabularyItem } from '../../../../services/supabase/vocabulary';
import { useStore } from '../../../../store/useStore';

interface VocabularyCardProps {
  variant: 'large' | 'small';
  item: VocabularyItem;
  index: number;
  lessonId?: string;
}

export const VocabularyCard: React.FC<VocabularyCardProps> = ({
  item,
  variant = 'medium',
  badge,
  index = 0,
  lessonId
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { isAuthenticated } = useStore();

  const handleSaveVocabulary = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated || isSaved || isSaving) return;

    setIsSaving(true);
    try {
      const { addVocabularyWord } = useStore.getState();
      await addVocabularyWord(item.item, item.explanation, lessonId);
      setIsSaved(true);
    } catch (error) {
      console.error('Error saving vocabulary:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();

    if ('speechSynthesis' in window) {
      // Cancel any current speaking
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(item.item);
      utterance.lang = 'en-US'; // Default to English
      utterance.rate = 0.9; // Slightly slower for clarity

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  // Animation delay based on index
  const animationStyle = {
    animationDelay: `${index * 100}ms`
  };

  if (variant === 'large') {
    return (
      <div
        className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
        style={animationStyle}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.item}
              </h3>
              {badge && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                  {badge}
                </span>
              )}
            </div>
            <span className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono text-sm">
              {item.pronunciation}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePlayAudio}
              className={`p-3 rounded-full transition-all duration-300 ${
                isPlaying
                  ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400 scale-110'
                  : 'bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-indigo-400'
              }`}
              aria-label="Play pronunciation"
            >
              {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
            </button>
            {isAuthenticated && (
              <button
                onClick={handleSaveVocabulary}
                disabled={isSaved || isSaving}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isSaved
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400'
                    : 'bg-slate-50 text-slate-400 hover:bg-green-50 hover:text-green-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-green-400 disabled:opacity-50'
                }`}
                aria-label="Save to my vocabulary"
                title="Save to my vocabulary"
              >
                {isSaved ? <Check className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.explanation}
          </p>

          <div className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/10 p-3 rounded-r-lg">
            <p className="text-sm text-indigo-800 dark:text-indigo-200 italic">
              "{item.example}"
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Medium and Compact variants share similar structure but different sizing
  return (
    <div
      className={`group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards ${
        variant === 'compact' ? 'p-4' : 'p-5'
      }`}
      style={animationStyle}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className={`font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${
              variant === 'compact' ? 'text-base' : 'text-lg'
            }`}>
              {item.item}
            </h4>
            {badge && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {badge}
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            {item.pronunciation}
          </span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={handlePlayAudio}
            className={`p-2 rounded-full transition-colors ${
              isPlaying
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                : 'text-slate-300 hover:text-indigo-500 dark:text-slate-600 dark:hover:text-indigo-400'
            }`}
          >
            <Volume2 className="w-4 h-4" />
          </button>
          {isAuthenticated && (
            <button
              onClick={handleSaveVocabulary}
              disabled={isSaved || isSaving}
              className={`p-2 rounded-full transition-colors ${
                isSaved
                  ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30'
                  : 'text-slate-300 hover:text-green-500 dark:text-slate-600 dark:hover:text-green-400 disabled:opacity-50'
              }`}
              title="Save to my vocabulary"
            >
              {isSaved ? <Check className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      <p className={`text-slate-600 dark:text-slate-300 mb-3 ${
        variant === 'compact' ? 'text-xs line-clamp-2' : 'text-sm'
      }`}>
        {item.explanation}
      </p>

      <div className={`text-indigo-600 dark:text-indigo-300 italic ${
        variant === 'compact' ? 'text-[11px]' : 'text-xs'
      }`}>
        "{item.example}"
      </div>
    </div>
  );
};
