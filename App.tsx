import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useStore } from './store/useStore';
import { Layout } from './components';
import { LoginForm, SignUpForm } from './components/Auth';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  const { isAuthenticated, isLoading, initializeAuth } = useStore();
  const [showSignUp, setShowSignUp] = useState(false);

  console.log('🚀 [APP] React Router DOM is ACTIVE - nuevo código cargando');

  // Inicializar autenticación al cargar la app
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    // Inicializar autenticación y guardar función de cleanup
    initializeAuth().then((cleanupFn) => {
      cleanup = cleanupFn;
    });

    // Cleanup al desmontar el componente
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []); // Sin dependencias para evitar re-inicializaciones

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

  // Authenticated - show main app with BrowserRouter and Error Boundary
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
