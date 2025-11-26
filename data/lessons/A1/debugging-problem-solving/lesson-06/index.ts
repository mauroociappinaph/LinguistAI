import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson06: Lesson = {
  id: "db6",
  title: "Code Review Debugging",
  level: Difficulty.A1,
  description: "Learn to discuss code review findings and debugging issues using Past Simple for specific events and connectors for relationships.",
  didYouKnow: "Code reviews catch 60% of bugs before they reach production. Effective communication during code review process helps teams write better code and build stronger debugging skills.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Discussing findings from a code review and explaining how to address identified bugs and issues.",
  speaking: "The code failed because the null check was missing. When users submitted empty forms, the application crashed. So we added validation to prevent null values from being processed.",
  speakingPracticeMode: "explanation",

  readingActivity: {title: "Reading: Effective Code Review Communication",
    text: "Good code review discussion uses clear, chronological explanations. Start with what happened: 'The tests failed because the database schema changed.' Explain the sequence: 'First, developers updated the schema, then existing queries broke.' Describe the solution process: 'We identified the mismatch, updated the queries accordingly, and then re-ran the tests.' Use professional language and focus on facts rather than blame. Provide context for future reference so others understand why changes were necessary.",
    comprehensionQuestions: [
      {
        question: "How should you structure code review explanations?",
        answer: "Start with what happened, explain sequence, describe solution."
      },
      {
        question: "Why provide context in code reviews?",
        answer: "So others understand why changes were necessary."
      },
      {
        question: "What should you focus on in review discussions?",
        answer: "Facts rather than blame."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Code Review Discussion",
    transcript: "During the code review, we noticed the authentication logic failed because the token validation was incomplete. When users tried to access protected routes, they got redirected incorrectly. The team investigated and found that the JWT verification was missing expiration checks. So we added proper validation, and then updated the error handling to display meaningful messages instead of generic ones.",
    comprehensionQuestions: [
      {
        question: "What failed in the authentication logic?",
        answer: "Token validation was incomplete."
      },
      {
        question: "When did the issue occur?",
        answer: "When users tried to access protected routes."
      },
      {
        question: "What was ultimately added to fix the issue?",
        answer: "Proper validation with expiration checks."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Code Review Terms",
    explanation: "Master pronunciation of common terms used in code review discussions and debugging sessions.",
    examples: [
      {
        term: "because",
        phonetic: "/bɪˈkɔz/",
        tip: "Two syllables: 'be-cause'. Stress on second syllable. Sound like 'cos rather than 'be-cause'."
      },
      {
        term: "because",
        phonetic: "/bɪˈkɔz/",
        tip: "Two syllables: 'be-cause'. Connect to next word with 'z' sound."
      },
      {
        term: "validation",
        phonetic: "/ˌvælɪˈdeɪʃən/",
        tip: "Four syllables: 'val-i-day-shun'. Stress on third syllable."
      },
      {
        term: "authentication",
        phonetic: "/ɔˌθɛntɪˈkeɪʃən/",
        tip: "Five syllables: 'au-then-ti-kay-shun'. Stress on fourth syllable."
      },
      {
        term: "migration",
        phonetic: "/maɪˈɡreɪʃən/",
        tip: "Four syllables: 'my-gray-shun'. Stress on third syllable."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "British English (London)",
      speakerBio: "Marcus, Tech Lead from London",
      audioSrc: "",
      transcript: "In the code review, the database migration broke the application because the queries weren't updated. When we deployed to staging, everything failed completely. So we had to rollback and then fix all the affected queries. Bloody nightmare, but we sorted it eventually."
    }
  ]],
  rolePlay: {
    title: "Code Review Feedback Session",
    objective: "Explain code review findings clearly using past tenses and connectors to help developers understand the issues and solutions.",
    aiPersona: "Senior developer conducting code review",
    initialMessage: "Looking at your pull request, some tests are failing. Can you walk me through what happened during development?"
  }
};
