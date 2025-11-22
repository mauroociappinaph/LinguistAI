import React from 'react';
import { GrammarSection } from '../../../types';
import {
  GrammarHero,
  GrammarRules,
  GrammarContext,
  GrammarMistakes,
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
  return (
    <div className="space-y-8 pb-8">

      {/* 1. Hero Concept Card */}
      <div className="animate-in slide-in-from-top-4 fade-in duration-500">
        <GrammarHero title={grammar.title} explanation={grammar.explanation} />
      </div>

      {/* 2. Grammar Rules */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-150">
        <GrammarRules rules={grammar.rules} />
      </div>

      {/* 3. Usage & Examples */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-200">
        <GrammarContext examples={grammar.examples} usage={grammar.usage} />
      </div>

      {/* 4. Common Mistakes */}
      <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300">
        <GrammarMistakes mistakes={grammar.commonMistakes} />
      </div>

      {/* 5. Quick Check (Interactive Exercise) */}
      {grammar.interactiveExercise && (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-450">
          <GrammarQuiz exercise={grammar.interactiveExercise} />
        </div>
      )}

    </div>
  );
};
