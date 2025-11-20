import React from 'react';
import { UserState } from '../../../types';

interface BadgesSectionProps {
  user: UserState;
}

export const BadgesSection: React.FC<BadgesSectionProps> = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold">Achievements</h3>
            <p className="text-slate-400 text-sm">Show off your progress</p>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
            {user.badges.length} Earned
          </span>
        </div>

        <div className="flex gap-6 flex-wrap">
          {user.badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/5 flex items-center justify-center text-3xl shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 cursor-pointer">
                🏆
              </div>
              <span className="text-xs mt-3 font-medium text-slate-300 group-hover:text-white transition-colors">
                {badge}
              </span>
            </div>
          ))}
          {/* Locked Placeholder */}
          <div className="flex flex-col items-center opacity-50 grayscale">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-2xl">
              🔒
            </div>
            <span className="text-xs mt-3 font-medium text-slate-500">Next Badge</span>
          </div>
        </div>
      </div>
    </div>
  );
};
