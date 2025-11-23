import { Lesson, Difficulty } from '../../../../../types';

export const techEcosystemTrendsLesson04: Lesson = {
  id: "tet4",
  title: "API Documentation & Standards",
  level: Difficulty.B1,
  description: "Master imperative structures and formal descriptive language for professional API documentation and technical specifications.",
  didYouKnow: "REST APIs require precise, formal documentation. Terms like 'endpoint', 'headers', 'authentication' must be consistently defined across development teams.",

  grammar: {
    title: "Imperative Structures & Formal Descriptive Language",
    explanation: "Using clear imperative forms for instructions: 'Send a POST request', formal descriptive language for API specifications, and precise technical terminology for documentation standards.",
    usage: "API Documentation, Technical Specifications, Development Guides",
    rules: [],
    examples: [],
    commonMistakes: [],
    interactiveExercise: {
      type: "api-instruction",
      question: "Create an imperative instruction for API usage: 'Send __ request to /users endpoint.'",
      options: ["a POST", "POST a", "send POST", "POST request"],
      answer: "a POST"
    }
  },

  vocabulary: [
    {
      item: "endpoint",
      explanation: "A specific URL where an API can be accessed for a particular operation.",
      example: "The POST /users endpoint allows creating new user accounts.",
      pronunciation: "/ˈendˌpɔɪnt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "API Documentation Patterns",
    chunks: [
      {
        chunk: "[HTTP Method] [to/the] [endpoint] [to/perform action]",
        usage: "Formal API method descriptions in documentation"
      }
    ]
  },

  scenario: "Technical documentation writing and API specification review.",
  speaking: "Send a GET request to the /users endpoint to retrieve user information.",
  speakingPracticeMode: "api-specification",
  readingActivity: {
    title: "Reading: API Documentation Best Practices",
    text: "Professional API documentation uses imperative language for instructions and formal descriptive language for specifications, ensuring developers can implement integrations correctly.",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "Listening: API Design Review Meeting",
    transcript: "The documentation clearly states to send a POST request with JSON payload to authenticate users through our OAuth2 endpoint.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: API Terminology",
    explanation: "Master pronunciation of essential API documentation terms.",
    examples: [{
      term: "endpoint",
      phonetic: "/ˈendˌpɔɪnt/",
      tip: "Two syllables, stress on first syllable"
    }]
  },
  globalAccentLab: [],
  rolePlay: {
    title: "API Documentation Review",
    objective: "Practice guiding developers through API documentation using formal imperative language.",
    aiPersona: "Senior Developer implementing your API",
    initialMessage: "I need to integrate with your authentication system. How do I make the login request?"
  }
};
