import React from 'react';
import { useStore } from '../../store/useStore';
import { WelcomeHeader } from './components/WelcomeHeader';
import { StatsGrid } from './components/StatsGrid';
import { BadgesSection } from './components/BadgesSection';
import { SEOHead } from '../../components/SEO';
import { getSEOForRoute, ORGANIZATION_STRUCTURED_DATA } from '../../utils/seoConfig';

export const Dashboard: React.FC = () => {
  const { user, lessons } = useStore();
  const seoConfig = getSEOForRoute('/');

  return (
    <>
      <SEOHead {...seoConfig} structuredData={ORGANIZATION_STRUCTURED_DATA} />
      <div className="space-y-10 fade-in">
        <WelcomeHeader user={user} />
        <StatsGrid user={user} />
        <BadgesSection user={user} />
      </div>
    </>
  );
};
