import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson01: Lesson = {
  id: "eyc1",
  title: "Passive Voice in Technical Contexts",
  level: Difficulty.B1,
  description: "Master passive voice to explain technical processes and documentation where the focus is on the action rather than who performs it.",
  didYouKnow: "83% of technical documentation uses passive voice because it's objective and focuses on procedures rather than people. In code documentation, passive structures like 'is implemented', 'is configured', and 'is handled' are standard practice.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Writing comprehensive technical documentation for a new API endpoint that explains how authentication and error handling are implemented.",
  speaking: "The authentication service is implemented using JWT tokens. Each request is validated against the user's permissions. Errors are handled gracefully and logged for monitoring. The system is configured to scale automatically based on traffic patterns.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: Technical API Documentation",
    text: "The authentication API is designed to handle secure user login and session management. Requests are validated using JWT tokens, which are issued after successful credential verification. Invalid tokens are rejected immediately, and rate limiting is applied to prevent abuse. Error responses are formatted consistently, and all sensitive data is encrypted before transmission. The service is implemented using stateless architecture for optimal scalability.",
    comprehensionQuestions: [
      {
        question: "How are user requests validated?",
        answer: "Using JWT tokens after successful credential verification."
      },
      {
        question: "What happens to invalid tokens?",
        answer: "They are rejected immediately."
      },
      {
        question: "Why is stateless architecture used?",
        answer: "For optimal scalability."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Technical Architecture Explanation",
    transcript: "The system architecture is designed with microservices in mind. Each service is implemented independently and communicates via API calls. Data validation is handled at the entry point, and business logic is separated from presentation layer. Security measures are implemented at every level, and monitoring is configured throughout the entire stack.",
    comprehensionQuestions: [
      {
        question: "How do microservices communicate?",
        answer: "Via API calls."
      },
      {
        question: "Where is data validation handled?",
        answer: "At the entry point."
      },
      {
        question: "What is configured throughout the entire stack?",
        answer: "Monitoring."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Passive Voice Verbs",
    explanation: "Master the pronunciation of common past participles used in passive voice constructions in technical contexts.",
    examples: [
      {
        term: "implemented",
        phonetic: "/ˈɪmplɪˌmɛntɪd/",
        tip: "Emphasize the middle syllable, four syllables total."
      },
      {
        term: "configured",
        phonetic: "/kənˈfɪɡjərd/",
        tip: "Three syllables, stress on middle syllable."
      },
      {
        term: "optimized",
        phonetic: "/ˈɑptɪmaɪzd/",
        tip: "Three syllables, stress on first syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Technical)",
      speakerBio: "Alex, Senior Software Engineer from California",
      audioSrc: "",
      transcript: "The backend is implemented using Node.js and is configured to handle up to 10,000 concurrent connections. All requests are validated before being processed, and errors are handled gracefully with detailed logging. The system is designed to scale horizontally and is monitored continuously for performance issues."
    }
  ],

  rolePlay: {
    title: "Explaining API Documentation",
    objective: "Practice using passive voice to explain a new feature implementation to fellow developers.",
    aiPersona: "Colleague asking about recent changes",
    initialMessage: "Hey, I need to understand how this new payment integration was implemented. Can you walk me through it?"
  }
};
