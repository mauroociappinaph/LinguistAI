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

export const lesson05: Lesson = {
  id: "edwl-5",
  title: "Navigating Applications & UI",
  level: Difficulty.A1,
  description: "Learn how to give and follow instructions for using software interfaces.",
  didYouKnow: "In web development, navigating between pages is called 'routing'. A 'route' is a specific URL path (like '/dashboard' or '/settings') that corresponds to a particular view or component in the application.",
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
