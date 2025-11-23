import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson06: Lesson = {
  id: "com6",
  title: "Stakeholder Communication & Updates",
  level: Difficulty.A1,
  description: "Learn to communicate progress, provide updates, and manage stakeholder expectations using present perfect for accomplishments and future tenses for commitments.",
  didYouKnow: "Projects with regular stakeholder communication are 70% more likely to succeed. Present perfect perfectly captures 'what we have achieved so far,' while future tenses set clear expectations for what will happen.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Providing a project status update to stakeholders, summarizing what has been accomplished and what will be delivered next.",
  speaking: "We have completed the database migration successfully and will begin user testing next week. Management has approved the timeline extension, so we are going to meet our revised deadlines. The team has resolved all critical issues and will focus on performance optimization going forward.",
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
