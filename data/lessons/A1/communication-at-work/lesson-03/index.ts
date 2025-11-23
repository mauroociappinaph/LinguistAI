import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson03: Lesson = {
  id: "com3",
  title: "Code Comments & Documentation",
  level: Difficulty.A1,
  description: "Learn to write clear code comments and technical documentation using imperative instruction and present simple for explaining code functionality.",
  didYouKnow: "Well-documented code reduces debugging time by 50% and new developer onboarding by 35%. Good documentation increases code maintainability and reduces technical debt.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Writing clear code comments and API documentation for a team project.",
  speaking: "This function calculates totals. Install the dependencies first, then import the library. The method validates user input and returns formatted results. Update the README with the new endpoint documentation.",
  speakingPracticeMode: "documentation",

  readingActivity: {
    title: "Reading: Best Practices for Code Documentation",
    text: "Effective code documentation serves multiple audiences: developers maintaining code, new team members, and future contributors. Write comments that explain why, not just what. Use clear, descriptive variable names. Structure documentation with examples, parameters, and return values. Keep documentation current - outdated docs are worse than no documentation. Consider accessibility - explain complex business logic clearly. Use consistent formatting and language across all documentation.",
    comprehensionQuestions: [
      {
        question: "What should code comments explain?",
        answer: "Why code works a certain way, not just what it does."
      },
      {
        question: "What makes documentation more accessible?",
        answer: "Clear explanations of complex business logic."
      },
      {
        question: "Why must documentation stay current?",
        answer: "Outdated documentation is harmful to understanding."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Code Documentation Discussion",
    transcript: "For the authentication module, create a config file with your API keys. The AuthService class handles login, logout, and token refresh. This method validates the user credentials and returns a JWT token if successful. To implement, install the dependencies first, then set up the middleware. Update the API documentation to reflect the new error codes. The README explains how to configure the database connection properly.",
    comprehensionQuestions: [
      {
        question: "What does the AuthService class handle?",
        answer: "Login, logout, and token refresh operations."
      },
      {
        question: "What should you create first for authentication?",
        answer: "A config file with API keys."
      },
      {
        question: "What documentation needs updating?",
        answer: "The API documentation and README file."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Documentation Terms",
    explanation: "Master pronunciation of key terms used in code documentation and comments.",
    examples: [
      {
        term: "variable",
        phonetic: "/ˈvɛriəbəl/",
        tip: "Four syllables: 'var-ee-a-bel'. Stress on first and third syllables."
      },
      {
        term: "parameter",
        phonetic: "/pəˈræmɪtər/",
        tip: "Four syllables: 'par-am-e-ter'. Stress on third syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Vancouver)",
      speakerBio: "David, Technical Writer from Vancouver",
      audioSrc: "",
      transcript: "Alright, so this function takes an array of user IDs as the first parameter, queries the database for those specific records, and returns the results formatted as JSON. Make sure to validate the IDs before passing them to this method, eh? I've updated the comments to reflect the new error handling logic we added last week."
    }
  ],

  rolePlay: {
    title: "Writing Code Documentation",
    objective: "Practice writing clear code comments and documentation explanations.",
    aiPersona: "Senior developer reviewing code documentation",
    initialMessage: "I see you've added some comments, but could you explain what this function actually does for our users?"
  }
};
