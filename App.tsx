import React, { Suspense } from 'react';
import { useStore } from './store/useStore';
import { Layout } from './components';
import { View } from './types';

// Lazy load features
const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard').then(module => ({ default: module.Dashboard })));
const LessonRunner = React.lazy(() => import('./features/learn/LessonRunner').then(module => ({ default: module.LessonRunner })));
const AiTutor = React.lazy(() => import('./features/chat/AiTutor').then(module => ({ default: module.AiTutor })));
const CulturalExplorer = React.lazy(() => import('./features/explore/CulturalExplorer').then(module => ({ default: module.CulturalExplorer })));

const App: React.FC = () => {
  const { currentView } = useStore();

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.LESSON:
        return <LessonRunner />;
      case View.CHAT:
        return <AiTutor />;
      case View.EXPLORER:
        return <CulturalExplorer />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      <Suspense fallback={
        <div className="flex items-center justify-center h-full text-indigo-600 dark:text-indigo-400">
          <svg className="animate-spin h-10 w-10" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      }>
        {renderView()}
      </Suspense>
    </Layout>
  );
};

export default App;