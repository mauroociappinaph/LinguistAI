import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary } from './vocabulary';
import { phrasalVerbs } from './phrasalVerbs';
import { compoundWords } from './compoundWords';
import { functionalChunks } from './functionalChunks';
import {
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab,
  scenario,
  speaking,
  speakingPracticeMode,
  rolePlay
} from './activities';

export const lesson02: Lesson = {
  id: "iwc02",
  title: "Superlative Adjectives for Technology Rankings",
  level: Difficulty.A2,
  description: "Learn to rank and evaluate technologies using superlatives. Essential for writing reports and making recommendations.",
  didYouKnow: "The phrase 'the best' appears over 2 million times in technical documentation on GitHub. Developers constantly use superlatives to recommend tools: 'the fastest database,' 'the most reliable framework,' 'the easiest language to learn.' Mastering superlatives lets you participate in these critical discussions and make persuasive technical arguments backed by data and benchmarks.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks for Rankings",
    chunks: functionalChunks
  },

  scenario,
  speaking,
  speakingPracticeMode,
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab,
  rolePlay
};
