import React from 'react';
import { UserState } from '../../../types';

interface WelcomeHeaderProps {
  user: UserState;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-2">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Ready to continue your journey to fluency?
        </p>
      </div>
      <div className="text-right hidden md:block">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          Current Goal
        </p>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">
          Complete A1 Level
        </p>
      </div>
    </div>
  );
};
