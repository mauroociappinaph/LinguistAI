import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { useLessonNavigation } from './hooks/useLessonNavigation';
import { LessonHeader } from './components/LessonHeader';
import { LessonFooter } from './components/LessonFooter';
import {
  LessonIntro,
  GrammarView,
  VocabView,
  ReadingView,
  ListeningView,
  SpeakingView,
  AccentView,
  RolePlayView,
  QuizView
} from './components';
import { SEOHead } from '../../components/SEO';
import { getSEOForRoute, getLessonStructuredData } from '../../utils/seoConfig';
import { loadLesson } from '../../data/lessonLoader';
import { CURRICULUM } from '../../data/curriculum';
import { Lesson } from '../../types';

export const LessonRunner: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessons, completeLesson } = useStore();

  // Local state for dynamic loading
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { activeSection, setActiveSection, progress, sections } = useLessonNavigation();

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Load lesson data
  useEffect(() => {
    const fetchLesson = async () => {
      if (!lessonId) return;

      setIsLoading(true);
      setError(null);

      try {
        // 1. Check if we have the full lesson in store (optional optimization)
        const storeLesson = lessons.find(l => l.id === lessonId);
        if (storeLesson && storeLesson.grammar) {
          setCurrentLesson(storeLesson);
          setIsLoading(false);
          return;
        }

        // 2. Find metadata to know where to load from
        let foundMetadata: { level: string; moduleId: string } | undefined;

        for (const module of CURRICULUM) {
          const lessonMeta = module.lessons.find(l => l.id === lessonId);
          if (lessonMeta) {
            foundMetadata = { level: module.level, moduleId: module.id };
            break;
          }
        }

        if (!foundMetadata) {
          throw new Error('Lesson not found in curriculum');
        }

        // 3. Load dynamic content
        const loadedLesson = await loadLesson(foundMetadata.level, foundMetadata.moduleId, lessonId);
        setCurrentLesson(loadedLesson);
      } catch (err) {
        console.error('Error loading lesson:', err);
        setError('Failed to load lesson content. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [lessonId, lessons]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !currentLesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 p-4">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Lesson Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {error || "We couldn't find the lesson you're looking for."}
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const lesson = currentLesson;

  // Safe defaults for lesson activities with complete structures
  const safeReading = lesson.readingActivity || {
    title: "Reading Content Available Soon",
    text: "This reading section is under development.\n\nPlease check back later or continue with other lesson sections.",
    comprehensionQuestions: []
  };

  const safeListening = lesson.listeningActivity || {
    title: "Listening Audio Available Soon",
    transcript: "This listening exercise is under development.\n\nAudio content will be available soon - please continue with other lesson sections.",
    comprehensionQuestions: [],
    audioSrc: ""
  };

  // Safe interactive exercise for QuizView
  const safeInteractiveExercise = lesson.grammar?.interactiveExercise || {
    type: "fill-in-the-blank",
    question: "Interactive quiz coming soon...",
    options: ["Soon"],
    answer: "Soon"
  };

  const safeRolePlay = lesson.rolePlay || {
    title: "Role Play Available Soon",
    objective: "This role play will be developed soon.",
    aiPersona: "AI Tutor",
    initialMessage: "This role play is coming soon! Please check back later or continue with other lesson sections."
  };

  const handleComplete = (id: string, xp: number) => {
      completeLesson(id, xp);
      navigate('/');  // Navegar a dashboard
  };

  // Navigation Logic
  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const isLastSection = currentIndex === sections.length - 1; // Quiz is usually last
  const nextSection = isLastSection ? null : sections[currentIndex + 1];
  const previousSection = currentIndex > 0 ? sections[currentIndex - 1] : null;

  const handleNext = () => {
      if (nextSection) {
          setActiveSection(nextSection.id);
      } else {
          // If for some reason we are at the end but not in QuizView (which handles completion itself)
          navigate('/');  // Volver a dashboard
      }
  };

  const handleBack = () => {
      if (previousSection) {
          setActiveSection(previousSection.id);
      } else {
          navigate('/');  // Volver a dashboard
      }
  };

  // Safe lesson object for components that need complete data
  const safeLesson = {
    ...lesson,
    readingActivity: safeReading,
    listeningActivity: safeListening,
    rolePlay: safeRolePlay,
    grammar: {
      ...lesson.grammar,
      interactiveExercise: safeInteractiveExercise
    }
  };

  // Generate dynamic SEO for this lesson
  const lessonSEO = getSEOForRoute(`/lesson/${lessonId}`, {
    title: `${lesson.title} - LinguistAI`,
    description: lesson.description || `Aprende ${lesson.title} con lecciones interactivas de inglés técnico para IT.`,
    structuredData: getLessonStructuredData(lesson.id, lesson.title, lesson.description || '')
  });

  return (
    <>
      <SEOHead {...lessonSEO} />
      <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950">
       <LessonHeader
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            progress={progress}
       />

       <div className="flex-1 w-full max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-8">
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out min-h-[60vh]">
              {activeSection === 'INTRO' && (
                  <LessonIntro lesson={safeLesson} onStart={() => setActiveSection('GRAMMAR')} />
              )}
              {activeSection === 'GRAMMAR' && <GrammarView grammar={lesson.grammar} />}
              {activeSection === 'VOCAB' && <VocabView lesson={safeLesson} />}
              {activeSection === 'READING' && <ReadingView activity={safeReading} />}
              {activeSection === 'LISTENING' && <ListeningView activity={safeListening} />}
              {activeSection === 'SPEAKING' && <SpeakingView lesson={safeLesson} />}
              {activeSection === 'ACCENTS' && <AccentView lesson={safeLesson} />}
              {activeSection === 'ROLE_PLAY' && <RolePlayView lesson={safeLesson} />}
              {activeSection === 'QUIZ' && <QuizView lesson={safeLesson} onComplete={handleComplete} />}
           </div>

           {/* Render Footer for all sections except Quiz (which has its own completion flow) */}
           {activeSection !== 'QUIZ' && (
             <LessonFooter
                onNext={handleNext}
                onBack={handleBack}
                nextLabel={activeSection === 'INTRO' ? 'Start Learning' : nextSection ? `Next: ${nextSection.label}` : 'Finish'}
                showBack={activeSection !== 'INTRO'}
             />
           )}
       </div>
    </div>
    </>
  );
};
