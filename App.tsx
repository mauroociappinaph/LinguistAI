import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useStore } from './store/useStore';
import { Layout } from './components';
import { LoginForm, SignUpForm } from './components/Auth';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  const { isAuthenticated, isLoading, initializeAuth } = useStore();
  const [showSignUp, setShowSignUp] = useState(false);

  // Inicializar autenticación al cargar la app
  useEffect(() => {
    let isMounted = true;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const cleanupFn = await initializeAuth();
      if (isMounted) {
        cleanup = cleanupFn;
      } else {
        // Si ya se desmontó, ejecutar cleanup inmediatamente
        cleanupFn();
      }
    };

    init();

    // Cleanup al desmontar el componente
    return () => {
      isMounted = false;
      if (cleanup) {
        cleanup();
      }
    };
  }, [initializeAuth]); // Fix BUG-001: Agregar dependencia

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

  // Authenticated - show main app with BrowserRouter, HelmetProvider and Error Boundary
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
