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

export const GrammarView: React.FC<GrammarViewProps> = ({ grammar }) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-8 duration-500 pb-8">
      
      {/* 1. Hero Concept Card */}
      <GrammarHero title={grammar.title} explanation={grammar.explanation} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 2. The "Formula" (Rules) - Span 5 */}
        <div className="lg:col-span-5 space-y-6">
            <GrammarRules rules={grammar.rules} />
        </div>

        {/* 3. Usage & Examples - Span 7 */}
        <div className="lg:col-span-7 space-y-6">
             <GrammarContext examples={grammar.examples} usage={grammar.usage} />
        </div>
      </div>

      {/* 4. Common Mistakes (Do's and Don'ts) */}
      <GrammarMistakes mistakes={grammar.commonMistakes} />

      {/* 5. Quick Check (Interactive Exercise) */}
      {grammar.interactiveExercise && (
        <GrammarQuiz exercise={grammar.interactiveExercise} />
      )}

    </div>
  );
};