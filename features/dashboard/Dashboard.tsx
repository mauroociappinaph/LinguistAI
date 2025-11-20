import React from 'react';
import { useStore } from '../../store/useStore';
import { WelcomeHeader } from './components/WelcomeHeader';
import { StatsGrid } from './components/StatsGrid';
import { LearningPath } from './components/LearningPath';
import { BadgesSection } from './components/BadgesSection';

export const Dashboard: React.FC = () => {
  const { user, lessons, startLesson } = useStore();

  return (
    <div className="space-y-10 fade-in">
      <WelcomeHeader user={user} />
      <StatsGrid user={user} />
      <LearningPath lessons={lessons} user={user} onStartLesson={startLesson} />
      <BadgesSection user={user} />
    </div>
  );
};