
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

export const lesson03: Lesson = {
  id: "l3",
  title: "Numbers, Dates, and Schedules",
  level: Difficulty.A1,
  description: "Master prepositions of time to schedule meetings and discuss deadlines effectively.",
  didYouKnow: "In American English, dates are often written Month/Day/Year (e.g., 12/25/2024), while in British English it's Day/Month/Year (e.g., 25/12/2024). This is important for international teams!",
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
export default lesson03;
