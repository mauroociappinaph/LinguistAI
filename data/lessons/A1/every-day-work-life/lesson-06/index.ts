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

export const lesson06: Lesson = {
  id: "edwl-6",
  title: "IT Routines & Reporting",
  level: Difficulty.A1,
  description: "Learn how to report your progress in daily stand-ups using Simple Past and Simple Present tenses.",
  didYouKnow: "The 'daily stand-up' meeting comes from agile methodologies like Scrum. The idea of standing up is to keep the meeting short and focused—if people are standing, they are less likely to get too comfortable and talk for a long time!",
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
