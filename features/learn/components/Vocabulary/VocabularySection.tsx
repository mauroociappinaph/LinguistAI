import React from 'react';
import { LucideIcon } from 'lucide-react';

interface VocabularySectionProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  count?: number;
  children: React.ReactNode;
  className?: string;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({
  title,
  description,
  icon: Icon,
  count,
  children,
  className = ''
}) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-end gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {title}
            </h3>
            {count !== undefined && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                {count}
              </span>
            )}
          </div>
          {description && (
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        {children}
      </div>
    </section>
  );
};
