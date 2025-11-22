import React from 'react';
import { useStore } from '../../store/useStore';
import { WelcomeHeader } from './components/WelcomeHeader';
import { StatsGrid } from './components/StatsGrid';
import { BadgesSection } from './components/BadgesSection';

export const Dashboard: React.FC = () => {
  const { user, lessons, startLesson } = useStore();

  return (
    <div className="space-y-10 fade-in">
      <WelcomeHeader user={user} />
      <StatsGrid user={user} />
      <BadgesSection user={user} />
    </div>
  );
};
