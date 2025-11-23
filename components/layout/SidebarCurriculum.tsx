import React from 'react';
import { useStore } from '../../store/useStore';
import { CURRICULUM } from '../../data/curriculum';

interface SidebarCurriculumProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isCurriculumExpanded: boolean;
  setIsCurriculumExpanded: (expanded: boolean) => void;
  expandedModules: string[];
  setExpandedModules: (modules: string[] | ((prev: string[]) => string[])) => void;
}

export const SidebarCurriculum: React.FC<SidebarCurriculumProps> = ({
  isCollapsed,
  setIsCollapsed,
  isCurriculumExpanded,
  setIsCurriculumExpanded,
  expandedModules,
  setExpandedModules
}) => {
  return (
    <div className="mt-6 space-y-2">
      {/* Curriculum Header */}
      <button
          onClick={() => {
            if (isCollapsed) {
              setIsCollapsed(false);
              setIsCurriculumExpanded(true);
            } else {
              setIsCurriculumExpanded(!isCurriculumExpanded);
            }
          }}
          className={`
            relative w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl
            transition-all duration-300 group overflow-hidden
            ${isCollapsed ? 'justify-center' : ''}
            ${isCurriculumExpanded && !isCollapsed
              ? 'bg-white dark:bg-slate-800 shadow-lg scale-105'
              : 'hover:bg-white/50 dark:hover:bg-slate-800/50 hover:scale-102'
            }
          `}
        >
          {/* Active indicator */}
          {isCurriculumExpanded && !isCollapsed && (
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-10 rounded-2xl" />
          )}

          {/* Side indicator */}
          {isCurriculumExpanded && !isCollapsed && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-r-full" />
          )}

          {/* Icon container */}
          <div className={`
            relative flex items-center justify-center
            w-10 h-10 rounded-xl
            ${isCurriculumExpanded && !isCollapsed
              ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-lg'
              : 'bg-slate-100 dark:bg-slate-800'
            }
            transition-all duration-300
            ${isCurriculumExpanded && !isCollapsed ? 'scale-110' : 'group-hover:scale-110'}
          `}>
            <span className={`text-xl ${isCurriculumExpanded && !isCollapsed ? 'filter brightness-0 invert' : ''}`}>
              📚
            </span>
          </div>

          {/* Label */}
          {!isCollapsed && (
            <div className="flex-1 text-left animate-in slide-in-from-left-2 fade-in">
              <span className={`
                font-semibold text-sm
                ${isCurriculumExpanded
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent'
                  : 'text-slate-700 dark:text-slate-300'
                }
              `}>
                My Curriculum
              </span>
            </div>
          )}

          {/* Arrow */}
          {!isCollapsed && (
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isCurriculumExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}

          {/* Tooltip for collapsed state */}
          {isCollapsed && (
            <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
              My Curriculum
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1">
                <div className="border-4 border-transparent border-r-slate-900 dark:border-r-slate-700" />
              </div>
            </div>
          )}
        </button>

      {/* Curriculum Content */}
      {isCurriculumExpanded && !isCollapsed && (
        <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
          {CURRICULUM.map((module) => {
            const isModuleExpanded = expandedModules.includes(module.id);
            const completedLessons = useStore.getState().user.completedLessons;
            const completedCount = module.lessons.filter(l => completedLessons.includes(l.id)).length;
            const progressPercent = Math.round((completedCount / module.lessons.length) * 100);

            return (
              <div key={module.id} className="space-y-1">
                {/* Module Header */}
                <button
                  onClick={() => {
                    if (isModuleExpanded) {
                      setExpandedModules(prev => prev.filter(id => id !== module.id));
                    } else {
                      setExpandedModules(prev => [...prev, module.id]);
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-950/30 dark:hover:to-purple-950/30 transition-all group"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-xs">{isModuleExpanded ? '▼' : '▶'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate text-left">
                        {module.title}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                          {module.level}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          {completedCount}/{module.lessons.length}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Mini progress bar */}
                  <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </button>

                {/* Lessons List */}
                {isModuleExpanded && (
                  <div className="ml-3 pl-3 border-l-2 border-slate-200 dark:border-slate-700 space-y-1">
                    {module.lessons.map((lesson, index) => {
                      const isCompleted = completedLessons.includes(lesson.id);
                      // No hay isActive ya que no estamos en página de lección desde curriculum

                      return (
                        <a
                          key={lesson.id}
                          href={`/lesson/${lesson.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/lesson/${lesson.id}`;
                          }}
                          className={`
                            w-full flex items-center gap-2 px-2 py-1.5 rounded-lg
                            transition-all text-left group no-underline
                            hover:bg-slate-100 dark:hover:bg-slate-800
                          `}
                        >
                          <div className={`
                            w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold
                            ${isCompleted
                              ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                            }
                          `}>
                            {isCompleted ? '✓' : index + 1}
                          </div>
                          <p className={`
                            text-[11px] font-medium flex-1 truncate
                            text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200
                          `}>
                            {lesson.title}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
