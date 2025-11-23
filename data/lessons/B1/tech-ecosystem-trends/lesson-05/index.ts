import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';
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

export const techEcosystemTrendsLesson05: Lesson = {
  id: "tet5",
  title: "Project Roadmaps & Future Milestones",
  level: Difficulty.B1,
  description: "Master Future Perfect Passive and Continuous structures to report project milestones, roadmaps, and timeline achievements in strategic planning contexts.",
  didYouKnow: "Tech companies use quarterly (Q1-Q4) planning cycles to set and track milestones. Future Perfect structures are essential in roadmap presentations to clearly communicate what **will have been accomplished** by specific deadlines, helping stakeholders understand completion timelines.",

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
