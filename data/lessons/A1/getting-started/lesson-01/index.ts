
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

const lesson01: Lesson = {
  id: "l1",
  title: "Personal Introduction in IT",
  level: Difficulty.A1,
  description: "Learn how to introduce yourself professionally in the tech industry.",
  didYouKnow: "In Git, your identity is permanently attached to every code change you make. When you configure Git with 'git config --global user.name \"Your Name\"' and 'git config --global user.email \"your.email@company.com\"', you're creating your professional digital signature. This information becomes part of the permanent record visible to your entire team, future maintainers, and anyone who examines the project's history. Choose carefully - it's your professional fingerprint on the codebase.\n\nThink of it as every commit being signed: \"This change was made by [Your Name] on [Date], and I stand by this work.\"",
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

export default lesson01;
