import React from 'react';
import { GrammarSection } from '../../../types';
import {
  GrammarHero,
  GrammarRules,
  GrammarContext,
  GrammarMistakes,
  GrammarWriting,
  GrammarCrucialIT,
  GrammarQuiz
} from './Grammar';

interface GrammarViewProps {
  grammar: GrammarSection;
}

/**
 * GrammarView Component
 * Main container for the grammar learning section with optimized layout
 */
export const GrammarView: React.FC<GrammarViewProps> = ({ grammar }) => {
  // Provide safe defaults for all grammar properties
  const safeGrammar = grammar || {};
  const safeTitle = safeGrammar.title || "Content coming soon...";
  const safeExplanation = safeGrammar.explanation || "This grammar section is under development.";
  const safeUsage = safeGrammar.usage || "Usage guide coming soon...";
  const safeRules = safeGrammar.rules || [];
  const safeExamples = safeGrammar.examples || [];
  const safeMistakes = safeGrammar.commonMistakes || [];

  return (
    <div className="space-y-8 pb-8">

      {/* 1. Hero Concept Card */}
      <div className="animate-in slide-in-from-top-4 fade-in duration-500">
        <GrammarHero title={safeTitle} explanation={safeExplanation} />
      </div>

      {/* 2. Grammar Rules */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-150">
        <GrammarRules rules={safeRules} />
      </div>

      {/* 3. Usage & Examples */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-200">
        <GrammarContext examples={safeExamples} usage={safeUsage} />
      </div>

      {/* 4. Common Mistakes */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300">
        <GrammarMistakes mistakes={safeMistakes} />
      </div>

      {/* 5. Writing Practice */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-350">
        <GrammarWriting writingExamples={safeGrammar.writingExamples} />
      </div>

      {/* 6. Why It's Crucial in IT */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-400">
        <GrammarCrucialIT whyCrucial={safeGrammar.whyCrucial} />
      </div>

      {/* 7. Quick Check (Interactive Exercise) */}
      {safeGrammar.interactiveExercise && (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-450">
          <GrammarQuiz exercise={safeGrammar.interactiveExercise} />
        </div>
      )}

    </div>
  );
};
