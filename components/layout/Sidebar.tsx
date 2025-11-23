import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarCurriculum } from './SidebarCurriculum';
import { SidebarFooter } from './SidebarFooter';


export const Sidebar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useStore();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isCurriculumExpanded, setIsCurriculumExpanded] = useState(true);
  const [expandedModules, setExpandedModules] = useState<string[]>(['getting-started']);

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

      <SidebarHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <SidebarNavigation
        isCollapsed={isCollapsed}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
      />

      <SidebarCurriculum
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isCurriculumExpanded={isCurriculumExpanded}
        setIsCurriculumExpanded={setIsCurriculumExpanded}
        expandedModules={expandedModules}
        setExpandedModules={setExpandedModules}
      />

      <SidebarFooter
        isCollapsed={isCollapsed}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </aside>
  );
};
