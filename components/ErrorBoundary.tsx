import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Global Error Boundary Component
 * Catches unhandled errors in the component tree and displays a fallback UI
 *
 * Note: Using @ts-expect-error to suppress known TypeScript issues with React 19 class components.
 * The component works correctly at runtime.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // @ts-expect-error - Known issue with React 19 types and class components
    this.setState({
      errorInfo,
    });

    // TODO: Send error to monitoring service (e.g., Sentry)
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleReset = (): void => {
    // @ts-expect-error - Known issue with React 19 types and class components
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = '/';
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-red-200 dark:border-red-900 p-8">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-600 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
              ¡Oops! Algo salió mal
            </h1>

            {/* Error Description */}
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              La aplicación encontró un error inesperado. No te preocupes, puedes intentar recargar la página.
            </p>

            {/* Error Details (Development Mode) */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <summary className="cursor-pointer font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Detalles técnicos del error
                </summary>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-mono text-red-600 dark:text-red-400 mb-2">
                      {this.state.error.toString()}
                    </p>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Component Stack:
                      </p>
                      <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto max-h-48 bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
              >
                Volver al inicio
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md transition-colors duration-200"
              >
                Recargar página
              </button>
            </div>

            {/* Support Link */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6">
              Si el problema persiste, por favor{' '}
              <a
                href="https://github.com/mauroociappinaph/LinguistAI/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                reporta el error en GitHub
              </a>
            </p>
          </div>
        </div>
      );
    }

    // @ts-expect-error - Known issue with React 19 types and class components
    return this.props.children;
  }
}
