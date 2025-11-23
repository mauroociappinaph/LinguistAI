import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson04: Lesson = {
  id: "com4",
  title: "Stakeholder Communication & Updates",
  level: Difficulty.A1,
  description: "Learn to communicate effectively with stakeholders, provide regular updates, and manage expectations using present perfect for achievements and future tenses for planning.",
  didYouKnow: "90% of project failures are due to poor communication. Regular stakeholder updates increase project success rates by 25% and reduce surprises during delivery.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Providing project updates to stakeholders during a quarterly review meeting.",
  speaking: "I want to provide an update on the Q4 objectives. We have completed the user authentication module and increased performance by 35%. The team has resolved 95% of the reported bugs. We will launch the mobile application next month and expect to reach 100,000 users by year-end.",
  speakingPracticeMode: "presentation",

  readingActivity: {
    title: "Reading: Effective Stakeholder Communication",
    text: "Clear stakeholder communication requires consistent updates, transparent progress reporting, and proactive issue management. Regular meetings, status reports, and timely responses to concerns help maintain trust and keep projects on track.",
    comprehensionQuestions: [
      {
        question: "Why is consistent stakeholder communication important?",
        answer: "It helps maintain trust and keep projects on track."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Project Status Update",
    transcript: "I want to provide an update on our current sprint. We have successfully implemented the user login functionality and resolved the major security vulnerabilities. We will begin testing the payment integration module next week and expect completion by sprint end.",
    comprehensionQuestions: [
      {
        question: "What have they implemented successfully?",
        answer: "User login functionality and resolved security vulnerabilities."
      },
      {
        question: "What will they begin testing next week?",
        answer: "Payment integration module."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Stakeholder Terms",
    explanation: "Master key terms used in stakeholder communication.",
    examples: [
      {
        term: "stakeholder",
        phonetic: "/ˈsteɪkˌhoʊldər/",
        tip: "Four syllables: 'stayk-hohl-der'. Stress on second syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (Corporate)",
      speakerBio: "Sarah, Senior Project Manager from London",
      audioSrc: "",
      transcript: "I'd like to give you a quick update on the Q3 deliverables. We've successfully deployed the new analytics dashboard, and we've seen a 35% increase in user engagement. We're going to focus on the mobile optimization next, and we should have that ready by end of quarter."
    }
  ],

  rolePlay: {
    title: "Quarterly Business Review",
    objective: "Practice giving comprehensive project updates to executives using appropriate tense structures.",
    aiPersona: "Senior executive reviewing project progress",
    initialMessage: "Please walk me through where we stand with the current initiative."
  }
};
