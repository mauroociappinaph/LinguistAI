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

export const lesson07: Lesson = {
  id: "edwl-7",
  title: "Basic Documentation & Notes",
  level: Difficulty.A1,
  description: "Learn how to write clear instructions and notes using imperatives and simple present tense.",
  didYouKnow: "In tech, documentation is often written in 'Markdown' (.md), a lightweight markup language. It allows you to format text using simple syntax, like using '#' for a heading or '*' for a bullet point. Websites like GitHub automatically render Markdown files, making them easy to read.",
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
