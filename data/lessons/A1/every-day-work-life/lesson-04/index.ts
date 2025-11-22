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
  title: "Current Actions",
  level: Difficulty.A1,
  description: "Learn how to describe what you are working on right now using the Present Continuous tense.",
  didYouKnow: "The present continuous is particularly useful in tech because software development is dynamic - what you're working on changes frequently. 'I was debugging yesterday, I am implementing today, and I will be testing tomorrow.'",
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
