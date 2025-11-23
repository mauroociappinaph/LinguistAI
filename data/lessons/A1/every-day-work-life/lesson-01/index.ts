import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';
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

export const lesson01: Lesson = {
  id: "edwl-1",
  title: "Daily Routine in Tech",
  level: Difficulty.A1,
  description: "Learn how to describe your daily routine using adverbs of frequency and comparisons.",
  didYouKnow: "Many tech routines are automated using 'cron jobs' (on Linux/Mac) or 'Scheduled Tasks' (on Windows). These are scripts that run automatically at a specific time or on a recurring schedule, performing tasks like daily backups, sending report emails, or cleaning up temporary files.",
  grammar: {
    ...grammar,
    commonMistakes
  },
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
