import React, { useState } from 'react';
import { Module } from '../../../types';
import LessonItem from './LessonItem';


interface ModuleCardProps {
  module: Module;
}

/**
 * ModuleCard component displays a collapsible module with its lessons.
 * Includes expand/collapse functionality and visual indicators.
 */
const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const levelColors: Record<string, { bg: string; text: string; border: string }> = {
    A1: { bg: '#e3f2fd', text: '#1565c0', border: '#90caf9' },
    A2: { bg: '#f3e5f5', text: '#6a1b9a', border: '#ce93d8' },
    B1: { bg: '#fff3e0', text: '#e65100', border: '#ffb74d' },
    B2: { bg: '#fce4ec', text: '#c2185b', border: '#f48fb1' },
    C1: { bg: '#e8f5e9', text: '#2e7d32', border: '#81c784' },
    C2: { bg: '#fff8e1', text: '#f57f17', border: '#ffd54f' },
  };

  const colors = levelColors[module.level] || levelColors.A1;

  return (
    <div className="module-card">
      <button
        className="module-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="module-title-section">
          <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
          <div className="module-info">
            <h2 className="module-title">{module.title}</h2>
            <p className="module-description">{module.description}</p>
          </div>
        </div>
        <div className="module-meta">
          <span
            className="level-badge"
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              borderColor: colors.border
            }}
          >
            {module.level}
          </span>
          <span className="lesson-count">
            {module.lessons.length} {module.lessons.length === 1 ? 'lección' : 'lecciones'}
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="lessons-list">
          {module.lessons.map((lesson, index) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              index={index + 1}
            />
          ))}
        </div>
      )}

      <style>{`
        .module-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .module-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .module-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          color: white;
        }

        .module-header:hover {
          filter: brightness(1.05);
        }

        .module-header:active {
          transform: scale(0.98);
        }

        .module-title-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .expand-icon {
          font-size: 1rem;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .module-info {
          text-align: left;
        }

        .module-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .module-description {
          margin: 0.5rem 0 0;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .level-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.875rem;
          border: 2px solid;
          background: white;
        }

        .lesson-count {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        .lessons-list {
          padding: 1rem;
          background: #f8f9fa;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          animation: expandDown 0.3s ease-out;
        }

        @keyframes expandDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .module-card {
            background: #1e1e1e;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .module-card:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
          }

          .lessons-list {
            background: #2a2a2a;
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .module-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .module-title-section {
            width: 100%;
          }

          .module-meta {
            width: 100%;
            justify-content: space-between;
          }

          .module-title {
            font-size: 1.25rem;
          }

          .module-description {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ModuleCard;
