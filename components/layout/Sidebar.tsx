import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { View } from '../../types';

export const Sidebar: React.FC = () => {
  const { currentView, setView, darkMode, toggleDarkMode } = useStore();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<View | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // User progress data (esto vendría de tu store)
  const userProgress = {
    name: 'Alex',
    level: 'A1',
    levelProgress: 65, // Porcentaje
    streak: 7, // días
    points: 1250
  };

  const navItems = [
    { 
      id: View.DASHBOARD, 
      label: 'Dashboard', 
      icon: '📊',
      badge: null,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: View.CHAT, 
      label: 'AI Tutor', 
      icon: '💬',
      badge: 3, // Mensajes nuevos
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      id: View.EXPLORER, 
      label: 'Explore', 
      icon: '🌍',
      badge: null,
      gradient: 'from-emerald-500 to-teal-500'
    },
  ];

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowProfileMenu(false);
    if (showProfileMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showProfileMenu]);

  return (
    <aside 
      className={`
        ${isCollapsed ? 'w-20' : 'w-80'} 
        bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950
        border-r border-slate-200/50 dark:border-slate-800/50 
        hidden md:flex flex-col z-20 
        transition-all duration-500 ease-out
        shadow-xl relative
      `}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

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

      {/* Header/Logo */}
      <div className={`relative p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} h-24`}>
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

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
        {navItems.map((item, index) => {
          const isActive = currentView === item.id;
          const isHovered = hoveredItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                relative w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl 
                transition-all duration-300 group overflow-hidden
                ${isCollapsed ? 'justify-center' : ''}
                ${isActive 
                  ? 'bg-white dark:bg-slate-800 shadow-lg scale-105' 
                  : 'hover:bg-white/50 dark:hover:bg-slate-800/50 hover:scale-102'
                }
              `}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Active indicator */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-2xl`} />
              )}
              
              {/* Hover glow effect */}
              {(isActive || isHovered) && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 blur-xl`} />
              )}
              
              {/* Side indicator for active item */}
              {isActive && !isCollapsed && (
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${item.gradient} rounded-r-full`} />
              )}
              
              {/* Icon container */}
              <div className={`
                relative flex items-center justify-center
                w-10 h-10 rounded-xl
                ${isActive 
                  ? `bg-gradient-to-br ${item.gradient} shadow-lg` 
                  : 'bg-slate-100 dark:bg-slate-800'
                }
                transition-all duration-300
                ${isActive ? 'scale-110' : 'group-hover:scale-110'}
              `}>
                <span className={`text-xl ${isActive ? 'filter brightness-0 invert' : ''}`}>
                  {item.icon}
                </span>
                
                {/* Badge */}
                {item.badge && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                    {item.badge}
                  </div>
                )}
              </div>
              
              {/* Label */}
              {!isCollapsed && (
                <div className="flex-1 text-left animate-in slide-in-from-left-2 fade-in">
                  <span className={`
                    font-semibold text-sm
                    ${isActive 
                      ? 'bg-gradient-to-r ' + item.gradient + ' bg-clip-text text-transparent' 
                      : 'text-slate-700 dark:text-slate-300'
                    }
                  `}>
                    {item.label}
                  </span>
                </div>
              )}
              
              {/* Arrow indicator for active */}
              {isActive && !isCollapsed && (
                <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 px-1.5 py-0.5 bg-red-500 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1">
                    <div className="border-4 border-transparent border-r-slate-900 dark:border-r-slate-700" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="relative p-4 border-t border-slate-200/50 dark:border-slate-800/50 space-y-3">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className={`
            relative w-full flex items-center gap-4 px-4 py-3 rounded-2xl 
            text-slate-600 dark:text-slate-400 
            hover:bg-white dark:hover:bg-slate-800 
            transition-all duration-300 group overflow-hidden
            ${isCollapsed ? 'justify-center' : ''}
          `}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
            {darkMode ? (
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </div>
          
          {!isCollapsed && (
            <span className="relative font-medium text-sm">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </button>

        {/* User Profile */}
        <div 
          className={`
            relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900
            rounded-2xl p-4 border border-slate-200 dark:border-slate-700
            transition-all duration-300 cursor-pointer group
            ${isCollapsed ? 'flex justify-center' : ''}
          `}
          onClick={(e) => {
            e.stopPropagation();
            setShowProfileMenu(!showProfileMenu);
          }}
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl" />
          
          {!isCollapsed ? (
            <div className="relative space-y-3">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-60 animate-pulse" />
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    A
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    {userProgress.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full">
                      {userProgress.level}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {userProgress.points} pts
                    </span>
                  </div>
                </div>
                
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Level Progress</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{userProgress.levelProgress}%</span>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${userProgress.levelProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
              
              {/* Streak indicator */}
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-900/50">
                <span className="text-lg">🔥</span>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                  {userProgress.streak} day streak!
                </span>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur opacity-60" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
            </div>
          )}

          {/* Profile Menu Dropdown */}
          {showProfileMenu && !isCollapsed && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 animate-in slide-in-from-bottom-4 fade-in z-50">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left">
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left">
                <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Settings</span>
              </button>
              <div className="h-px bg-slate-200 dark:bg-slate-700 my-1" />
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left">
                <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-sm font-medium text-red-600 dark:text-red-400">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};