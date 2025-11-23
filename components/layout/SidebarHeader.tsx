import React from 'react';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isCollapsed,
  setIsCollapsed
}) => {
  return (
    <div className={`relative p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-24`}>
      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-4 top-10 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-2 rounded-full shadow-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        {isCollapsed ? (
          <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        )}
      </button>

      {!isCollapsed ? (
        <div className="flex items-center gap-3 overflow-hidden">
          {/* Animated Logo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
              </svg>
            </div>
          </div>

          <div className="animate-in slide-in-from-left-4 fade-in duration-300">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              LinguistAI
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Your AI Language Partner</p>
          </div>
        </div>
      ) : (
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-2xl shadow-lg">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
