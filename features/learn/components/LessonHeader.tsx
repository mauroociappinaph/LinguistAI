
import React from 'react';
import { Section } from '../constants';

interface LessonHeaderProps {
    sections: { id: Section; label: string }[];
    activeSection: Section;
    onSectionChange: (id: Section) => void;
    progress: number;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({ sections, activeSection, onSectionChange, progress }) => {
    return (
        <div className="sticky top-0 z-30 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-sm transition-all">
           <div className="w-full relative">
               {/* Progress Line */}
               <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-200 dark:bg-slate-800">
                   <div 
                      className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(79,70,229,0.6)]"
                      style={{ width: `${progress}%` }}
                   ></div>
               </div>

               <div className="flex items-center justify-center h-16 px-4 overflow-x-auto no-scrollbar">
                   <div className="flex items-center gap-1 md:gap-2">
                       {sections.map((section) => {
                         const isActive = activeSection === section.id;
                         return (
                           <button
                             key={section.id}
                             onClick={() => onSectionChange(section.id)}
                             className={`
                               px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                               ${isActive 
                                 ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40' 
                                 : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                               }
                             `}
                           >
                             {section.label}
                           </button>
                         );
                       })}
                   </div>
               </div>
           </div>
       </div>
    );
};
