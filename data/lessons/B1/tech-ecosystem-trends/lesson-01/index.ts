import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
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

export const techEcosystemTrendsLesson01: Lesson = {
  id: "tet1",
  title: "DevOps & Cloud Infrastructure",
  level: Difficulty.B1,
  description: "Master technical communication in DevOps and cloud environments using acronyms, jargon, and infrastructure terminology.",
  didYouKnow: "DevOps engineers manage over 70% of enterprise applications, using complex terminology like CI/CD, IaC, and K8s. Understanding this technical jargon is essential for cloud-native careers.",

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
