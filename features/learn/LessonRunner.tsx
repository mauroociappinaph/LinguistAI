import React, { useEffect } from 'react';
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

export const LessonRunner: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessons, completeLesson } = useStore();
  const lesson = lessons.find(l => l.id === lessonId);

  const { activeSection, setActiveSection, progress, sections } = useLessonNavigation();

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  if (!lesson) return <div>Lesson not found</div>;

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
