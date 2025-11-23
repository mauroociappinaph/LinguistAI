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

export const lesson04: Lesson = {
  id: "iwc04",
  title: "Framework Comparisons: Integrated Analysis",
  level: Difficulty.A2,
  description: "Apply comparatives, superlatives, and relative clauses to perform comprehensive framework comparisons. Essential for technical decision-making and architecture discussions.",
  didYouKnow: "The State of JS survey, which polls over 20,000 developers annually, uses comparison language extensively: 'Most loved', 'Highest satisfaction', 'Fastest growing', 'Most widely used'. Framework documentation constantly compares features: 'React is more flexible than...', 'Vue has the simplest API among...'. Mastering integrated comparison language is essential for participating in these industry-wide discussions and making data-driven technical decisions.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks for Framework Comparison",
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
