import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson01: Lesson = {
  id: "ffc1",
  title: "Giving Feedback",
  level: Difficulty.B1,
  description: "Learn to give constructive feedback using first conditional for suggestions and improvements in code reviews and team discussions.",
  didYouKnow: "76% of developers consider feedback crucial for growth, but only 29% feel comfortable receiving it. Learning to give feedback professionally is essential for technical careers.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Giving feedback during code review meetings.",
  speaking: "If we add proper error handling to this function, it will prevent unexpected crashes. The code will be more robust and handle edge cases gracefully.",
  speakingPracticeMode: "feedback",

  readingActivity: {
    title: "Reading: Effective Code Review Comments",
    text: "Providing constructive feedback is essential in software development. When reviewers suggest improvements, they often use conditional language to show potential benefits without sounding critical. 'If we add test coverage here, future changes will be safer.' This approach focuses on positive outcomes rather than pointing out flaws.",
    comprehensionQuestions: [
      {
        question: "Why is conditional language useful in code review feedback?",
        answer: "It shows potential benefits without sounding critical."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Code Review Discussion",
    transcript: "I see this function is quite long. If we break it down into smaller functions, it will be easier to test and maintain. Each function should have a single responsibility, which will make the code more modular overall.",
    comprehensionQuestions: [
      {
        question: "What improvement is suggested in the feedback?",
        answer: "Breaking down long functions into smaller ones."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Technical Feedback Terms",
    explanation: "Master pronunciation of commonly used terms in code review and feedback sessions.",
    examples: [
      {
        term: "refactor",
        phonetic: "/riːˈfæktər/",
        tip: "Three syllables, stress on first syllable. 'Re-fact-or'."
      },
      {
        term: "maintainable",
        phonetic: "/meɪnˈteɪnəbəl/",
        tip: "Four syllables, stress on middle syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Technical)",
      speakerBio: "Sarah, Senior Developer from San Francisco",
      audioSrc: "",
      transcript: "If we implement proper input validation on this form, it won't throw errors when users enter unexpected data. The user experience will be much smoother and we won't get support tickets from confused customers."
    }
  ],

  rolePlay: {
    title: "Code Review Feedback Session",
    objective: "Practice giving constructive feedback using first conditional for technical improvements.",
    aiPersona: "Junior Developer receiving feedback",
    initialMessage: "Could you review my pull request? I implemented the new feature but want to make sure it's ready for production."
  }
};
