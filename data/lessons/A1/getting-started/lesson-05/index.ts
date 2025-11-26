import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import {
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  rolePlay
} from './activities';

const lesson05: Lesson = {
  id: "l5",
  title: "Learning in Context: How Your Brain Works",
  level: Difficulty.A1,
  description: "Understand the difference between explicit and implicit learning to master English.",
  didYouKnow: "Senior developers can often 'spot' a 'code smell' (a possible problem in code) very fast. It feels like intuition. This is because their brain has implicitly learned from thousands of code examples and automatically recognizes patterns of good and bad code. This is implicit learning in action.",
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  scenario: "Explain to a new junior developer why reading a lot of the team's existing code is just as important as reading the official documentation.",
  speaking: "Think about how you learned your first programming language. How much did you learn from tutorials (explicit) versus how much you learned from building projects and seeing examples (implicit)? Both are important.",
  speakingPracticeMode: 'feedback',
  readingActivity,
  functionalChunks,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab: [],
  rolePlay
};
export default lesson05;
