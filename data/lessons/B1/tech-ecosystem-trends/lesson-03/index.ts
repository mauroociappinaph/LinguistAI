import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const techEcosystemTrendsLesson03: Lesson = {
  id: "tet3",
  title: "Technical Papers & Proposals",
  level: Difficulty.B1,
  description: "Master formal recommendations using modals (should/must/could) for professional technical writing and proposals.",
  didYouKnow: "Professional proposals use 'should' and 'must' to make recommendations: 'The architecture should be redesigned' is clearer than complex subjunctive forms.",

  grammar: {
    ...grammar,
    commonMistakes
  },
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,
  scenario: "Writing technical proposals and making formal recommendations to stakeholders.",
  speaking: "We recommend that the system should be redesigned to improve scalability. All security patches must be applied before deployment.",
  speakingPracticeMode: "formal-recommendations",
  readingActivity: {
    title: "Reading: Technical Proposal Structure",
    text: "Formal technical proposals use clear modal verbs to make recommendations. 'Should' indicates strong recommendations, while 'must' indicates requirements. For example: 'The system should be updated regularly' and 'All code must be reviewed before deployment.' This approach makes proposals clear and actionable.",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "Listening: Architectural Proposal Discussion",
    transcript: "We recommend that the monolithic architecture should be decomposed into microservices to enhance maintainability. All services must communicate via well-defined APIs, and we could implement a service mesh for better observability.",
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
    objective: "Practice defending technical recommendations using should/must/could and formal language.",
    aiPersona: "Technical committee member",
    initialMessage: "Can you explain the rationale behind your recommendation to implement this architectural change?"
  }
};
