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

export const lesson03: Lesson = {
  id: "edwl-3",
  title: "Following Instructions",
  level: Difficulty.A1,
  description: "Learn how to give and follow technical instructions using imperatives.",
  didYouKnow: "The project's 'README.md' file is the most important set of instructions for any developer. It typically tells you how to install, configure, and run the project for the first time. Following these instructions carefully is the first step in contributing to any new codebase.",
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
