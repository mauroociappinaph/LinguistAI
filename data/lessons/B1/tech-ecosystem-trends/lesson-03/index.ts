import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const techEcosystemTrendsLesson03: Lesson = {
  id: "tet3",
  title: "Technical Papers & Proposals",
  level: Difficulty.B1,
  description: "Master advanced grammar for formal technical writing including subjunctive, nominalization, and indirect speech.",
  didYouKnow: "Research papers use subjunctive mood: 'We recommend that the architecture be redesigned.'",

  grammar: {
    ...grammar,
    commonMistakes
  },
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,
  scenario: "Technical proposal writing and paper discussions.",
  speaking: "We recommend that the system be redesigned to improve scalability.",
  speakingPracticeMode: "subjunctive",
  readingActivity: {
    title: "Reading: Technical Proposal Structure",
    text: "Formal technical proposals use subjunctive mood to make recommends that incorporate best practices and established standards.",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "Listening: Architectural Proposal Discussion",
    transcript: "We recommend that the monolithic architecture be decomposed into microservices to enhance maintainability.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Technical Writing Terms",
    explanation: "Master pronunciation of formal technical writing vocabulary.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Technical Proposal Defense",
    objective: "Practice defending technical recommendations using subjunctive and formal language.",
    aiPersona: "Research committee member",
    initialMessage: "Can you explain the rationale behind your recommendation to implement this architectural change?"
  }
};
