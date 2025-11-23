import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary } from './vocabulary';
import { phrasalVerbs } from './phrasalVerbs';
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

export const lesson05: Lesson = {
  id: "iwc05",
  title: "Ecosystem Trade-offs: While and Although",
  level: Difficulty.A2,
  description: "Learn to express technology trade-offs professionally using while and although. Essential for balanced technical decision-making and architecture discussions.",
  didYouKnow: "Every major tech company publishes Architecture Decision Records (ADRs) that extensively use trade-off language. Netflix's ADRs frequently include phrases like 'While microservices add complexity, they enable...' and 'Although this increases operational overhead, the benefits include...'. Learning to express trade-offs clearly isn't just good English—it's how senior engineers communicate decisions and build consensus around difficult choices.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks: {
    title: "Functional Chunks for Trade-off Analysis",
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
