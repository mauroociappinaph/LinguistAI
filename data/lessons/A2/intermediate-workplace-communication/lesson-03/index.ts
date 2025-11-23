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

export const lesson03: Lesson = {
  id: "iwc03",
  title: "Defining Relative Clauses for API Descriptions",
  level: Difficulty.A2,
  description: "Learn to use that/which/who to precisely describe systems, APIs, and team roles. Essential for clear technical documentation and communication.",
  didYouKnow: "Technical documentation uses relative clauses constantly. In the official React documentation, phrases like 'components that render' and 'props that change' appear hundreds of times. The AWS documentation uses 'services that provide' and 'resources that require' to clearly distinguish between different cloud components. Mastering defining relative clauses makes your documentation unambiguous and professional.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks for System Descriptions",
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
