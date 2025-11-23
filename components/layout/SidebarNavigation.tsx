import React from 'react';
import { View } from '../../types';

interface SidebarNavigationProps {
  currentView: View;
  setView: (view: View) => void;
  isCollapsed: boolean;
  hoveredItem: View | null;
  setHoveredItem: (item: View | null) => void;
}

interface NavItem {
  id: View;
  label: string;
  icon: string;
  badge: number | null;
  gradient: string;
}

const navItems: NavItem[] = [
  {
    id: View.DASHBOARD,
    label: 'Dashboard',
    icon: '📊',
    badge: null,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: View.MY_VOCABULARY,
    label: 'My Vocabulary',
    icon: '📚',
    badge: null,
    gradient: 'from-purple-500 to-pink-500'
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

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  currentView,
  setView,
  isCollapsed,
  hoveredItem,
  setHoveredItem
}) => {
  return (
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
  );
};
