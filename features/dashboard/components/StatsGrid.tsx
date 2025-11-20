import React from 'react';
import { UserState } from '../../../types';

interface StatsGridProps {
  user: UserState;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Level Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200/50 dark:shadow-none group transition-transform hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium backdrop-blur-md">Level</span>
          </div>
          <div className="flex items-baseline gap-1">
            <h3 className="text-4xl font-bold">{user.currentLevel}</h3>
            <span className="text-indigo-200 font-medium">/ C2</span>
          </div>
          <p className="text-sm text-indigo-100 mt-1 opacity-90">Intermediate Learner</p>

          <div className="mt-6 bg-black/20 rounded-full h-2 w-full overflow-hidden">
            <div className="bg-white/90 h-full rounded-full" style={{ width: '20%' }}></div>
          </div>
          <p className="text-[10px] text-indigo-200 mt-1 text-right">20% to A2</p>
        </div>
      </div>

      {/* XP Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all hover:-translate-y-1 group relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-50 dark:bg-yellow-900/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded text-xs font-bold">Top 10%</span>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{user.xp.toLocaleString()}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Total Experience</p>
        </div>
      </div>

      {/* Streak Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all hover:-translate-y-1 group relative overflow-hidden">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 dark:bg-red-900/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-2 h-6 rounded-full transform skew-x-[-10deg] ${i <= 5 ? 'bg-red-400' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{user.streak}</h3>
            <span className="text-xl">🔥</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Day Streak</p>
        </div>
      </div>
    </div>
  );
};
