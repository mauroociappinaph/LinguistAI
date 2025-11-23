import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson05: Lesson = {
  id: "eyc5",
  title: "Global State Concepts",
  level: Difficulty.B1,
  description: "Master present simple to explain global application architecture, system behaviors, and fundamental design patterns.",
  didYouKnow: "65% of software systems use global state management. Understanding how to explain architectural patterns helps developers communicate system design effectively.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining system architecture to new developers.",
  speaking: "Our application processes requests asynchronously using queues. Cache stores frequently accessed data, and load balancer distributes traffic across multiple servers.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: System Architecture Patterns",
    text: "Modern software systems employ various architectural patterns. Microservice architecture ensures services can deploy independently. Cache layers improve performance by storing frequently accessed data. Load balancers distribute incoming traffic to prevent server overload. Understanding these patterns helps developers make informed technical decisions.",
    comprehensionQuestions: [
      {
        question: "What does microservice architecture ensure?",
        answer: "Services can deploy independently."
      },
      {
        question: "What is the purpose of cache layers?",
        answer: "To improve performance by storing frequently accessed data."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Architecture Overview",
    transcript: "Our system architecture includes microservices that communicate via REST APIs. Each service runs independently with its own database. Cache improves response times, and load balancers ensure high availability by distributing traffic across multiple instances.",
    comprehensionQuestions: [
      {
        question: "How do microservices communicate?",
        answer: "Via REST APIs."
      },
      {
        question: "What ensures high availability?",
        answer: "Load balancers distributing traffic across multiple instances."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Architecture Terms",
    explanation: "Master pronunciation of key system architecture terminology.",
    examples: [
      {
        term: "architecture",
        phonetic: "/ˈɑrkɪˌtɛktʃər/",
        tip: "Five syllables, stress on second syllable."
      },
      {
        term: "asynchronous",
        phonetic: "/eɪˈsɪŋkrənəs/",
        tip: "Five syllables, primary stress on third, secondary on first."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Technical)",
      speakerBio: "Emma, Solutions Architect from Toronto",
      audioSrc: "",
      transcript: "In our architecture, the application processes requests using an event-driven model. Cache provides fast data access, and our load balancers use round-robin algorithms to distribute the workload. Everything runs on containerized infrastructure."
    }
  ],

  rolePlay: {
    title: "System Design Discussion",
    objective: "Explain your application's architecture using present simple to describe how different components work together.",
    aiPersona: "Technical Lead",
    initialMessage: "Show me how our application architecture works. Explain each major component's role."
  }
};
