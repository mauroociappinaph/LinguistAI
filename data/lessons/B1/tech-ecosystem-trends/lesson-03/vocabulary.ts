import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [];

export const phrasalVerbs: VocabularyItem[] = [];

export const compoundWords: VocabularyItem[] = [];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Formal Technical Writing",
  chunks: [{
    chunk: "We recommend that [subject] [verb-subjunctive] [object]",
    usage: "Making formal suggestions in technical proposals"
  }]
};
