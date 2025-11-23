import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson09: Lesson = {
  id: "eyc9",
  title: "Technology Stack Explanations",
  level: Difficulty.B1,
  description: "Learn to explain technical stacks and technology choices using present simple for current infrastructure and past tenses for decisions made.",
  didYouKnow: "Senior developers spend up to 30% of their time explaining technology choices. Using appropriate tenses clearly communicates 'why' decisions were made and their current impact.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining technology choices to new team members or stakeholders.",
  speaking: "Our technology stack runs on cloud infrastructure. We chose AWS because it offers global availability. We have recently integrated Kubernetes for container orchestration.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Technology Selection Documentation",
    text: "Modern applications require careful technology selection. Our platform runs on AWS infrastructure with React frontend and Node.js backend. We chose these technologies because they support our scalability requirements and provide excellent developer productivity. Recently, we have upgraded to the latest framework versions for security and performance improvements.",
    comprehensionQuestions: [
      {
        question: "What criteria were used to choose the technology stack?",
        answer: "Scalability requirements and developer productivity."
      },
      {
        question: "What prompted the recent upgrades?",
        answer: "Security and performance improvements."
      }
    ]
  },

  listeningActivity: {
    title: "Technical Architecture Discussion",
    transcript: "The frontend uses React because it enables smooth user interfaces and has excellent state management. We selected Node.js for the backend since it allows full JavaScript stack development. Database runs on PostgreSQL which provides robust data consistency. We have recently started using Redis for caching to improve response times.",
    comprehensionQuestions: [
      {
        question: "Why was React selected for the frontend?",
        answer: "It enables smooth user interfaces and has excellent state management."
      },
      {
        question: "What is PostgreSQL selected for?",
        answer: "It provides robust data consistency."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Technology Terms",
    explanation: "Master pronunciation of key technology terms commonly used in stack discussions.",
    examples: [
      {
        term: "stack",
        phonetic: "/stæk/",
        tip: "Single syllable, short 'a' sound like 'back'."
      },
      {
        term: "infrastructure",
        phonetic: "/ˈɪnfrəˌstrʌktʃər/",
        tip: "Five syllables, stress on middle 'struc' syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Indian English (Technical)",
      speakerBio: "Rahul, Senior Developer from Bangalore",
      audioSrc: "",
      transcript: "Our tech stack includes React for frontend development, with Node.js backend running on AWS. We chose this combination because it provides excellent performance and scalable infrastructure. Currently, we have implemented microservices architecture to handle different business domains efficiently."
    }
  ],

  rolePlay: {
    title: "Technology Stack Interview",
    objective: "Explain your current technology stack and decision rationale to a potential employer.",
    aiPersona: "Technical Interviewer",
    initialMessage: "Can you walk me through the technology stack you currently work with and why you chose those particular technologies?"
  }
};
