import React from 'react';
import { CURRICULUM } from '../../data/curriculum';
import ModuleCard from './components/ModuleCard';

/**
 * CurriculumView component displays all available modules and their lessons
 * in a clear, hierarchical, and didactic manner.
 */
const CurriculumView: React.FC = () => {
  return (
    <div className="curriculum-view">
      <div className="curriculum-header">
        <h1>📚 Mi Curriculum de Aprendizaje</h1>
        <p className="curriculum-subtitle">
          Explora todos los módulos y lecciones disponibles organizados por nivel
        </p>
      </div>

      <div className="modules-container">
        {CURRICULUM.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>

      <style>{`
        .curriculum-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .curriculum-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .curriculum-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .curriculum-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .modules-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .curriculum-subtitle {
            color: rgba(255, 255, 255, 0.7);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .curriculum-view {
            padding: 1rem;
          }

          .curriculum-header h1 {
            font-size: 2rem;
          }

          .curriculum-subtitle {
            font-size: 1rem;
          }

          .modules-container {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CurriculumView;
