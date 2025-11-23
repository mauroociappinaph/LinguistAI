import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

// Pages
import { Dashboard } from '../features/dashboard/Dashboard';
import CurriculumView from '../features/curriculum/CurriculumView';
import { MyVocabulary } from '../features/dashboard/MyVocabulary';
import { CulturalExplorer } from '../features/explore/CulturalExplorer';
import { LessonRunner } from '../features/learn/LessonRunner';


/**
 * PrivateRoute: Protege rutas que requieren autenticación
 */
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const isLoading = useStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Cargando...</div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

/**
 * AppRoutes: Configuración central de todas las rutas de la aplicación
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/login" element={<div>Login Page (to be implemented)</div>} />

      {/* Rutas Protegidas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/curriculum"
        element={
          <PrivateRoute>
            <CurriculumView />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-vocabulary"
        element={
          <PrivateRoute>
            <MyVocabulary />
          </PrivateRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <CulturalExplorer />
          </PrivateRoute>
        }
      />
      <Route
        path="/lesson/:lessonId"
        element={
          <PrivateRoute>
            <LessonRunner />
          </PrivateRoute>
        }
      />

      {/* Ruta por defecto - redirect a dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
