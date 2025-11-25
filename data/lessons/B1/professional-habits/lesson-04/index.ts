import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
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

export const lesson04: Lesson = {
  id: "edwl-4",
  title: "UI Layouts & Prepositions",
  level: Difficulty.A1,
  description: "Learn to describe user interface layouts using prepositions of place (at the top, on the left, below).",
  didYouKnow: "Clear communication about UI layout prevents design implementation errors. 'Pixel perfect' implementation often depends on understanding precise positional language.",
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
