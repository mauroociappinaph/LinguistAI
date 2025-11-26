import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson10: Lesson = {
  id: "db10",
  title: "Root Cause Analysis",
  level: Difficulty.A1,
  description: "Learn to analyze root causes of bugs using Past Simple and connectors to trace problems to their origin and understand why they occurred.",
  didYouKnow: "Root cause analysis solves 90% of repeating bugs. Understanding why problems occurred prevents them from happening again and saves development time in the long term.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Analyzing why a production bug occurred by tracing through the timeline of events and identifying the fundamental cause.",
  speaking: "The service crashed because the database connection pool exhausted. When traffic spiked during the marketing campaign, connections weren't being released properly. The root cause was a missing dispose method in the connection handler.",
  speakingPracticeMode: "explanation",

  readingActivity: {title: "Root Cause Analysis Process",
    text: "Root cause analysis involves systematically working backwards from symptoms to initial causes. Ask why repeatedly: symptom leads to direct cause, which leads to underlying condition, which leads to root cause. Document each level of analysis to ensure the complete picture emerges.",
    comprehensionQuestions: [
      {
        question: "What is the systematic process for root cause analysis?",
        answer: "Working backwards from symptoms to initial causes"
      },
      {
        question: "Why should you document each level of analysis?",
        answer: "To ensure the complete picture emerges"
      }
    ],
  },
  listeningActivity: {
    title: "Root Cause Discussion",
    transcript: "We found the root cause.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Root Cause Terms",
    explanation: "Pronunciation of analysis terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Root Cause Meeting",
    objective: "Discuss the root cause.",
    aiPersona: "Team Lead",
    initialMessage: "What was the root cause?"
  }
};
