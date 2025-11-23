import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lesson } from '../../../types';
import { useStore } from '../../../store/useStore';

interface LessonItemProps {
  lesson: Lesson;
  index: number;
}

/**
 * LessonItem component displays an individual lesson within a module.
 * Clicking the lesson will navigate to it using react-router.
 */
const LessonItem: React.FC<LessonItemProps> = ({ lesson, index }) => {
  const navigate = useNavigate();
  const completedLessons = useStore((state) => state.user.completedLessons);

  const isCompleted = completedLessons.includes(lesson.id);

  const handleClick = () => {
    navigate(`/lesson/${lesson.id}`);
  };

  return (
    <button
      className={`lesson-item ${isCompleted ? 'completed' : ''}`}
      onClick={handleClick}
    >
      <div className="lesson-number">
        {isCompleted ? '✓' : index}
      </div>
      <div className="lesson-content">
        <h3 className="lesson-title">{lesson.title}</h3>
        {lesson.description && (
          <p className="lesson-description">{lesson.description}</p>
        )}
      </div>
      <div className="lesson-action">
        <span className="action-icon">→</span>
      </div>

      <style>{`
        .lesson-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .lesson-item:hover {
          border-color: #667eea;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          transform: translateX(4px);
        }

        .lesson-item:active {
          transform: scale(0.98);
        }

        .lesson-item.completed {
          border-color: #4caf50;
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(129, 199, 132, 0.05) 100%);
        }

        .lesson-item.completed .lesson-number {
          background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
          color: white;
        }

        .lesson-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .lesson-item:hover .lesson-number {
          transform: scale(1.1);
        }

        .lesson-content {
          flex: 1;
          min-width: 0;
        }

        .lesson-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #333;
          line-height: 1.4;
        }

        .lesson-description {
          margin: 0.25rem 0 0;
          font-size: 0.875rem;
          color: #666;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .lesson-action {
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .action-icon {
          font-size: 1.5rem;
          color: #667eea;
          font-weight: 700;
        }

        .lesson-item:hover .action-icon {
          transform: translateX(4px);
          display: inline-block;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .lesson-item {
            background: #2a2a2a;
            border-color: #404040;
          }

          .lesson-item:hover {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            border-color: #667eea;
          }

          .lesson-item.completed {
            background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(129, 199, 132, 0.1) 100%);
          }

          .lesson-title {
            color: #e0e0e0;
          }

          .lesson-description {
            color: #b0b0b0;
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .lesson-item {
            padding: 0.875rem;
          }

          .lesson-number {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .lesson-title {
            font-size: 1rem;
          }

          .lesson-description {
            font-size: 0.8rem;
            -webkit-line-clamp: 1;
          }

          .action-icon {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </button>
  );
};

export default LessonItem;
