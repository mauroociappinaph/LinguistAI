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

export const lesson02: Lesson = {
  id: "edwl-2",
  title: "Tools of the Trade",
  level: Difficulty.A1,
  description: "Learn to talk about your development tools using comparatives and preferences.",
  didYouKnow: "The difference between a 'framework' and a 'library' is a key concept. With a library, *you* call the code (e.g., `myChart = new ChartLibrary()`). With a framework, *it* calls your code (the framework tells your component when to render). This is called 'Inversion of Control'.",
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
