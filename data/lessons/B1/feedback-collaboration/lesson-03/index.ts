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

export const lesson03: Lesson = {
  id: "ffc3",
  title: "Reporting Meetings & Discussions",
  level: Difficulty.B1,
  description: "Master reported speech to summarize meetings, document decisions, and report technical discussions professionally.",
  didYouKnow: "Studies show that 70% of workplace miscommunication happens because meeting outcomes aren't properly documented. Using reported speech correctly ensures everyone stays aligned on decisions and action items.",

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
