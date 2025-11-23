import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [];

export const phrasalVerbs: VocabularyItem[] = [];

export const compoundWords: VocabularyItem[] = [];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Bug Investigation Communication Patterns",
  chunks: [
    {
      chunk: "___ [step] and ___ that [condition] is met",
      usage: "Systematic verification during debugging"
    },
    {
      chunk: "Check ___ - verify that [process] ___ [result]",
      usage: "Testing assumptions step by step"
    },
    {
      chunk: "Investigate ___ - findings ___ documented",
      usage: "Professional investigation reporting"
    }
  ]
};
