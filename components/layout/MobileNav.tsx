import React from 'react';
import { useStore } from '../../store/useStore';
import { View } from '../../types';

export const MobileNav: React.FC = () => {
  const { currentView, setView } = useStore();

  const navItems = [
    { id: View.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { id: View.CHAT, label: 'AI Tutor', icon: '💬' },
    { id: View.EXPLORER, label: 'Explore', icon: '🌍' },
  ];

  return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex justify-around p-4 z-50 safe-area-pb">
          {navItems.map((item) => (
             <button key={item.id} onClick={() => setView(item.id)} className={`flex flex-col items-center p-1 ${currentView === item.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                 <span className="text-2xl mb-0.5">{item.icon}</span>
                 <span className="text-[10px] font-medium">{item.label}</span>
             </button>
          ))}
      </div>
  );
};