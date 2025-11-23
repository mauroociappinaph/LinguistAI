import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson08: Lesson = {
  id: "eyc8",
  title: "Debugging Communication Strategies",
  level: Difficulty.B1,
  description: "Learn to explain debugging processes and issue resolution using past tenses and present perfect for problem-solving scenarios.",
  didYouKnow: "Software developers spend 60% of debugging time explaining problems to others. Clear debugging communication prevents team misunderstandings and speeds up resolution.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining debugging process during stand-up meetings.",
  speaking: "I identified the performance issue yesterday. We have traced it to inefficient database queries. The problem was causing slow response times for users.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: Debugging Communication Best Practices",
    text: "Effective debugging communication uses specific tenses to convey different aspects of problem-solving. Past simple describes specific debugging actions taken. Present perfect shows current investigation status. Past continuous describes system behavior during failures.",
    comprehensionQuestions: [
      {
        question: "What tense describes specific debugging actions?",
        answer: "Past simple."
      },
      {
        question: "What does present perfect show?",
        answer: "Current investigation status."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Debug Report Presentation",
    transcript: "Database connection failures occurred last night. We have identified slow query performance as the root cause. Server was processing multiple concurrent requests when the issue manifested.",
    comprehensionQuestions: [
      {
        question: "What was the root cause identified?",
        answer: "Slow query performance."
      },
      {
        question: "When did the failures occur?",
        answer: "Last night."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Debugging Terms",
    explanation: "Master pronunciation of terms used in debugging explanations and reports.",
    examples: [
      {
        term: "debug",
        phonetic: "/diˈbʌɡ/",
        tip: "Two syllables, stress on second syllable."
      },
      {
        term: "trace",
        phonetic: "/treɪs/",
        tip: "One syllable, single vowel sound."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "South African English (Technical)",
      speakerBio: "Nkosi, QA Engineer from Johannesburg",
      audioSrc: "",
      transcript: "The system crashed at 3 AM local time. We traced the issue to memory leaks in the session management. Server was running high-load while processing user analytics when the problem occurred."
    }
  ],

  rolePlay: {
    title: "Debug Session Summary",
    objective: "Use past tenses and present perfect to explain debugging findings and resolution progress to your team.",
    aiPersona: "Team Lead",
    initialMessage: "What have you found so far about the reported issue? Please explain our debugging progress."
  }
};
