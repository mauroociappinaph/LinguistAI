import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary } from './vocabulary';
import {phrasalVerbs } from './phrasalVerbs';
import { compoundWords } from './compoundWords';
import { functionalChunks } from './functionalChunks';
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
  id: "iwc01",
  title: "Comparative Adjectives for Technical Decisions",
  level: Difficulty.A2,
  description: "Learn to compare frameworks, tools, and technologies using comparative adjectives. Essential for technical discussions and decision-making.",
  didYouKnow: "In Stack Overflow's 2023 Developer Survey, React was 'more loved' than Angular (40.6% vs 21.2%), but Svelte was rated 'easier to learn' than both. This shows that comparative language is fundamental to how developers evaluate and discuss technologies. When you write 'X is faster than Y,' you're not just making a claim—you're participating in the data-driven culture of the tech industry.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks for Comparisons",
    chunks: functionalChunks
  },

  scenario,
  speaking,
  speakingPracticeMode,
  readingActivity,
  listeningActivity,
  pronunciationClinic,
  globalAccentLab,
  rolePlay
};
