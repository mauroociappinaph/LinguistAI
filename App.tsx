import React, { Suspense, useEffect, useState } from 'react';
import { useStore } from './store/useStore';
import { Layout } from './components';
import { LoginForm, SignUpForm } from './components/Auth';
import { View } from './types';

// Lazy load features
const Dashboard = React.lazy(() => import('./features/dashboard/Dashboard').then(module => ({ default: module.Dashboard })));
const LessonRunner = React.lazy(() => import('./features/learn/LessonRunner').then(module => ({ default: module.LessonRunner })));
const AiTutor = React.lazy(() => import('./features/chat/AiTutor').then(module => ({ default: module.AiTutor })));
const CulturalExplorer = React.lazy(() => import('./features/explore/CulturalExplorer').then(module => ({ default: module.CulturalExplorer })));
const MyVocabulary = React.lazy(() => import('./features/dashboard/MyVocabulary').then(module => ({ default: module.MyVocabulary })));

const App: React.FC = () => {
  const { currentView, isAuthenticated, isLoading, initializeAuth } = useStore();
  const [showSignUp, setShowSignUp] = useState(false);

  // Inicializar autenticación al cargar la app
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

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
      case View.MY_VOCABULARY:
        return <MyVocabulary />;
      default:
        return <Dashboard />;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  // Show auth forms if not authenticated
  if (!isAuthenticated) {
    return showSignUp ? (
      <SignUpForm
        onSuccess={() => window.location.reload()}
        onSwitchToLogin={() => setShowSignUp(false)}
      />
    ) : (
      <LoginForm
        onSuccess={() => window.location.reload()}
        onSwitchToSignup={() => setShowSignUp(true)}
      />
    );
  }

  // Authenticated - show main app
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
