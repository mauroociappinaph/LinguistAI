import React from 'react';

/**
 * Test component that throws an error to verify ErrorBoundary works
 * This component is only for testing purposes
 */
export const ErrorTestComponent: React.FC = () => {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('¡Error de prueba! El ErrorBoundary debería capturar esto.');
  }

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Test de Error Boundary
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Haz clic en el botón para lanzar un error y verificar que el Error Boundary funciona correctamente.
      </p>
      <button
        onClick={() => setShouldError(true)}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
      >
        Lanzar Error de Prueba
      </button>
    </div>
  );
};
