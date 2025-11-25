import React from 'react';
import { Target, Link, Puzzle, MessageSquare } from 'lucide-react';
import { Lesson } from '../../../types';
import { VocabularyHero } from './Vocabulary/VocabularyHero';
import { VocabularySection } from './Vocabulary/VocabularySection';
import { VocabularyCard } from './Vocabulary/VocabularyCard';
import { PhraseTable } from './Vocabulary/PhraseTable';

interface VocabViewProps {
  lesson: Lesson;
}

export const VocabView: React.FC<VocabViewProps> = ({ lesson }) => {
  // Calculate total terms for the hero section
  // Fix BUG-014: Memoizar cálculos costosos
  const totalTerms = useMemo(() => {
    return (
      (lesson.vocabulary?.keyTerms?.length || 0) +
      (lesson.vocabulary?.phrasalVerbs?.length || 0) +
      (lesson.vocabulary?.compoundWords?.length || 0) +
      (lesson.vocabulary?.functionalChunks?.length || 0)
    );
  }, [lesson.vocabulary]);

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <VocabularyHero
        totalTerms={totalTerms}
        learnedTerms={0} // This could be connected to real progress state later
        lessonTitle={lesson.title}
      />

      <div className="space-y-16 px-4 md:px-0">
        {/* Key Vocabulary - High Priority */}
        <VocabularySection
          title="Key Vocabulary"
          description="Essential terms you need to master for this lesson."
          icon={Target}
          count={lesson.vocabulary.length}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {lesson.vocabulary.map((v, i) => (
              <VocabularyCard
                key={i}
                variant="large"
                item={v}
                index={i}
                lessonId={lesson.id}
              />
            ))}
          </div>
        </VocabularySection>

        {/* Phrasal Verbs - Medium Priority */}
        {lesson.phrasalVerbs.length > 0 && (
          <VocabularySection
            title="Phrasal Verbs"
            description="Common verb combinations that change meaning."
            icon={Link}
            count={lesson.phrasalVerbs.length}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {lesson.phrasalVerbs.map((v, i) => (
                <VocabularyCard
                  key={i}
                  variant="medium"
                  item={v}
                  badge="Phrasal"
                  index={i}
                  lessonId={lesson.id}
                />
              ))}
            </div>
          </VocabularySection>
        )}

        {/* Compound Words - Medium Priority */}
        {lesson.compoundWords.length > 0 && (
          <VocabularySection
            title="Compound Words"
            description="Words formed by combining two or more words."
            icon={Puzzle}
            count={lesson.compoundWords.length}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {lesson.compoundWords.map((v, i) => (
                <VocabularyCard
                  key={i}
                  variant="medium"
                  item={v}
                  badge="Compound"
                  index={i}
                />
              ))}
            </div>
          </VocabularySection>
        )}

        {/* Useful Phrases - Contextual */}
        <VocabularySection
          title="Useful Phrases"
          description={lesson.functionalChunks.title}
          icon={MessageSquare}
          count={lesson.functionalChunks?.chunks?.length || 0}
        >
          {lesson.functionalChunks?.chunks && lesson.functionalChunks.chunks.length > 0 ? (
            <PhraseTable chunks={lesson.functionalChunks.chunks} />
          ) : (
            <div className="p-4 text-slate-500 italic bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
              No functional chunks available for this lesson.
            </div>
          )}
        </VocabularySection>
      </div>
    </div>
  );
};
