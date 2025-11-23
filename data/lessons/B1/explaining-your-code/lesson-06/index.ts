import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson06: Lesson = {
  id: "eyc6",
  title: "Software Development Lifecycle",
  level: Difficulty.B1,
  description: "Learn to describe SDLC phases using passive voice for development processes and workflow explanations.",
  didYouKnow: "80% of software projects follow some form of SDLC methodology. Describing processes in passive voice creates clear, team-independent documentation that ensures consistency across the organization.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining the development lifecycle to stakeholders.",
  speaking: "Requirements are gathered first. Code is developed following standards. Tests are written and automated. Features are deployed through CI/CD pipeline.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: SDLC Process Documentation",
    text: "Modern software development requires clear documentation of processes. Code is committed regularly, requirements are gathered systematically, and features are deployed automatically. This standardization ensures quality and allows new team members to understand workflow quickly.",
    comprehensionQuestions: [
      {
        question: "Why is process documentation important in SDLC?",
        answer: "It ensures standardization and allows new team members to understand workflow."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Development Process Explanation",
    transcript: "Our SDLC starts with requirements gathering. Features are designed, code is developed and tested, then deployments are automated. Quality checks are performed at each stage.",
    comprehensionQuestions: [
      {
        question: "What is the first step in our SDLC?",
        answer: "Requirements gathering."
      },
      {
        question: "What is performed at each stage?",
        answer: "Quality checks."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: SDLC Terms",
    explanation: "Master pronunciation of key SDLC terminology used in process documentation.",
    examples: [
      {
        term: "lifecycle",
        phonetic: "/ˈlaɪfˈsaɪkəl/",
        tip: "Four syllables, stress on first syllable."
      },
      {
        term: "automation",
        phonetic: "/ˌɑtəˈmeɪʃən/",
        tip: "Five syllables, stress on third."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (Technical)",
      speakerBio: "Vicky, Technical Program Manager from Scotland",
      audioSrc: "",
      transcript: "In our SDLC, requirements are gathered comprehensively, code is developed following strict standards, and features are deployed automatically through our CI/CD pipeline. Everything is well documented and processes are clearly defined."
    }
  ],

  rolePlay: {
    title: "Explaining SDLC to New Team Member",
    objective: "Practice using passive voice to explain the development process clearly and comprehensively.",
    aiPersona: "New developer asking about company processes",
    initialMessage: "Could you explain how development works here? I'm new and want to understand the process."
  }
};
