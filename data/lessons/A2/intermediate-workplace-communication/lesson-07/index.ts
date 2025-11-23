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

export const lesson07: Lesson = {
  id: "iwc07",
  title: "Basic Proposals with Modal Verbs",
  level: Difficulty.A2,
  description: "Create technical proposals using modal verbs for recommendations.",
  didYouKnow: "Senior engineers use modal verbs to make balanced, professional recommendations.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks",
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
