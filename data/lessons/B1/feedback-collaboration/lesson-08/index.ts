import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';
import {
  scenario,
  speaking,
  speakingPracticeMode,
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab,
  rolePlay
} from './activities';

export const lesson08: Lesson = {
  id: "ffc8",
  title: "Technical Debates & Argumentation",
  level: Difficulty.B1,
  description: "Master hypothetical scenarios and strong recommendations using Second Conditional and advanced modals (ought to, had better, would rather) for professional technical debates.",
  didYouKnow: "Research shows that teams that constructively debate technical decisions make 30% fewer critical errors in production. Using appropriate conditional language helps keep debates professional and focused on solutions rather than personal preferences.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,
  scenario,
  speaking,
  speakingPracticeMode,
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab,
  rolePlay
};
