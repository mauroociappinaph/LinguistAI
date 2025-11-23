import React from 'react';
import { NavLink } from 'react-router-dom';

export const MobileNav: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/explore', label: 'Explore', icon: '🌍' },
    { path: '/my-vocabulary', label: 'Vocabulary', icon: '📚' },
  ];

  return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex justify-around p-4 z-50 safe-area-pb">
          {navItems.map((item) => (
             <NavLink
               key={item.path}
               to={item.path}
               className={({ isActive }) => `flex flex-col items-center p-1 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}
             >
                 <span className="text-2xl mb-0.5">{item.icon}</span>
                 <span className="text-[10px] font-medium">{item.label}</span>
             </NavLink>
          ))}
      </div>
  );
};
