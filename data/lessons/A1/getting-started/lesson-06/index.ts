import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import {
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  rolePlay
} from './activities';

export const lesson06: Lesson = {
  id: "l6",
  title: "Thinking in Systems: Top-Down & Bottom-Up",
  level: Difficulty.A1,
  description: "Understand the difference between top-down and bottom-up approaches in system design and problem-solving.",
  didYouKnow: "The Waterfall model of software development is a classic 'top-down' approach: you define all requirements, then do all design, then all implementation. Agile methodologies are more 'bottom-up': you build small, functional pieces of the product and integrate them, adapting the plan as you go.",
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  scenario: "Explain your problem-solving strategy for a complex bug to a colleague, clarifying whether you are using a top-down or bottom-up approach.",
  speaking: "For this project, I prefer a bottom-up approach. Let's build and test the small, individual components first. Then, we can integrate them into the larger system.",
  speakingPracticeMode: 'feedback',
  readingActivity,
  functionalChunks,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab: [],
  rolePlay
};
