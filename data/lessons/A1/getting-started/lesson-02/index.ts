
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

const lesson02: Lesson = {
  id: "l2",
  title: "Personal Information",
  level: Difficulty.A1,
  description: "Learn how to discuss your role, team, and projects using personal and possessive pronouns.",
  didYouKnow: "In computing, your 'personal information' is often stored as key-value pairs in a database or a configuration file (e.g., `name: 'Maria'`, `position: 'QA Engineer'`). This structured data is fundamental to how applications manage user profiles.",
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
export default lesson02;
