import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson02: Lesson = {
  id: "ffc2",
  title: "Agreeing, Disagreeing & Comparing",
  level: Difficulty.B1,
  description: "Learn to express agreement, disagreement, and make technical comparisons using expressions plus comparatives and superlatives.",
  didYouKnow: "Technical discussions involve constant comparison of approaches. Studies show that clear comparison language improves team decision-making by 40%.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Participating in technical planning meetings discussing different architectural approaches.",
  speaking: "I completely agree that Kubernetes is more scalable than Docker Swarm, but I think Docker Swarm might be simpler to implement. However, AWS ECS is probably the most reliable managed solution.",
  speakingPracticeMode: "analysis",

  readingActivity: {
    title: "Reading: Technical Architecture Debate",
    text: "During technology selection discussions, team members often compare options using comparative and superlative forms. 'I agree that Vue.js is more lightweight than React, however, I think TypeScript is the most important consideration for our project.' These structures help teams make objective technical decisions.",
    comprehensionQuestions: [
      {
        question: "Why is Vue.js described as more lightweight?",
        answer: "Because it's being compared to React."
      },
      {
        question: "What is considered the most important consideration?",
        answer: "TypeScript."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Technology Comparison Discussion",
    transcript: "I see your point about using MongoDB for its flexibility, but I think PostgreSQL is more reliable for complex queries. That said, PostgreSQL is probably the most widely adopted database in enterprise applications. Would you agree an SQL solution is better for our use case?",
    comprehensionQuestions: [
      {
        question: "What advantage is mentioned for MongoDB?",
        answer: "Its flexibility."
      },
      {
        question: "Why would someone prefer PostgreSQL?",
        answer: "Because it's more reliable for complex queries."
      },
      {
        question: "What is PostgreSQL said to be?",
        answer: "The most widely adopted database in enterprise applications."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Comparative Forms",
    explanation: "Master pronunciation of comparatives and superlatives commonly used in technical discussions.",
    examples: [
      {
        term: "easier",
        phonetic: "/ˈiziər/",
        tip: "Two syllables, stress on first syllable. Drop the 'i' sound to make it quicker."
      },
      {
        term: "fastest",
        phonetic: "/ˈfæstɪst/",
        tip: "Two syllables, stress on first. Add 'est' clearly but quickly."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Scottish English (Technical)",
      speakerBio: "Iain, Tech Lead from Edinburgh",
      audioSrc: "",
      transcript: "Aye, I see your point about GraphQL being more flexible than REST, but I'd argue that REST is simpler to implement and debug. That said, REST is probably the most battle-tested approach for APIs. What do you think?"
    }
  ],

  rolePlay: {
    title: "Architecture Decision Debate",
    objective: "Use comparative and superlative structures to discuss and debate different technical approaches with colleagues.",
    aiPersona: "Senior Developer debating technology choices",
    initialMessage: "I think we should use Elixir, but what do you think? Don't you agree it's more scalable than Node.js?"
  }
};
