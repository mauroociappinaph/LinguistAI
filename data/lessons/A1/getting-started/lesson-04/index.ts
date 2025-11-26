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

const lesson04: Lesson = {
  id: "l4",
  title: "Asking Questions & Giving Short Answers",
  level: Difficulty.A1,
  description: "Learn how to ask WH- and Yes/No questions and give polite short answers in a professional context.",
  didYouKnow: "In API design, questions are fundamental. A 'query' to a database or a 'GET request' to an API are forms of asking 'What data matches these criteria?' or 'Where can I find this resource?'. The entire web is built on a question-and-answer model between clients and servers.",
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

export { lesson04 };
