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

export const lesson08: Lesson = {
  id: "edwl-8",
  title: "Describing Your Tech Setup",
  level: Difficulty.A1,
  description: "Learn how to describe your equipment and workspace using 'to have' and demonstratives.",
  didYouKnow: "In user interface design, the item a user is currently interacting with is often referred to in the code as 'this'. For example, `this.onClick()` might refer to the specific button that was just clicked.",
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
