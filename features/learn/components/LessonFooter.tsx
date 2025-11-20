import React from 'react';
import { Button } from '../../../components';

interface LessonFooterProps {
    onNext: () => void;
    onBack: () => void;
    nextLabel: string;
    showBack?: boolean;
}

export const LessonFooter: React.FC<LessonFooterProps> = ({ onNext, onBack, nextLabel, showBack = true }) => {
    return (
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
            <Button 
                variant="ghost" 
                onClick={onBack} 
                className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
                {showBack ? '← Back' : 'Exit Lesson'}
            </Button>
            
            <Button 
                onClick={onNext} 
                size="lg" 
                className="px-8 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none"
            >
                {nextLabel} →
            </Button>
        </div>
    );
};