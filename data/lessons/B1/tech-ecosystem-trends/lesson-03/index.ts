import { Lesson, Difficulty } from '../../../../../types';

export const techEcosystemTrendsLesson03: Lesson = {
  id: "tet3",
  title: "Technical Papers & Proposals",
  level: Difficulty.B1,
  description: "Master advanced grammar for formal technical writing including subjunctive, nominalization, and indirect speech.",
  didYouKnow: "Research papers use subjunctive mood: 'We recommend that the architecture be redesigned.'",

  grammar: {
    title: "Subjunctive, Nominalization & Advanced Indirect Speech",
    explanation: "Using formal subjunctive structures like 'recommend that...', nominalization for academic style, and complex indirect speech patterns for professional proposals.",
    usage: "Technical Documentation, Research Papers & Proposals",
    rules: [],
    examples: [],
    commonMistakes: [],
    interactiveExercise: {
      type: "subjunctive-practice",
      question: "Complete the subjunctive: 'We recommend that the system ___ redesigned.'",
      options: ["be", "is", "will be", "was"],
      answer: "be"
    }
  },

  vocabulary: [],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Formal Technical Writing",
    chunks: [{
      chunk: "We recommend that [subject] [verb-subjunctive] [object]",
      usage: "Making formal suggestions in technical proposals"
    }]
  },

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
