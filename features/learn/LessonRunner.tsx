import React, { useEffect } from 'react';
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

export const LessonRunner: React.FC = () => {
  const { lessons, activeLessonId, completeLesson, exitLesson } = useStore();
  const lesson = lessons.find(l => l.id === activeLessonId);
  
  const { activeSection, setActiveSection, progress, sections } = useLessonNavigation();

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  if (!lesson) return <div>Lesson not found</div>;

  const handleComplete = (id: string, xp: number) => {
      completeLesson(id, xp);
      exitLesson();
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
          exitLesson();
      }
  };

  const handleBack = () => {
      if (previousSection) {
          setActiveSection(previousSection.id);
      } else {
          exitLesson();
      }
  };

  return (
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
                  <LessonIntro lesson={lesson} onStart={() => setActiveSection('GRAMMAR')} />
              )}
              {activeSection === 'GRAMMAR' && <GrammarView grammar={lesson.grammar} />}
              {activeSection === 'VOCAB' && <VocabView lesson={lesson} />}
              {activeSection === 'READING' && <ReadingView activity={lesson.readingActivity} />}
              {activeSection === 'LISTENING' && <ListeningView activity={lesson.listeningActivity} />}
              {activeSection === 'SPEAKING' && <SpeakingView lesson={lesson} />}
              {activeSection === 'ACCENTS' && <AccentView lesson={lesson} />}
              {activeSection === 'ROLE_PLAY' && <RolePlayView lesson={lesson} />}
              {activeSection === 'QUIZ' && <QuizView lesson={lesson} onComplete={handleComplete} />}
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
  );
};