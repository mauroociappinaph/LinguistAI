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
    },
    {
      item: "product discovery",
      explanation: "The process of identifying and validating customer needs before building solutions.",
      example: "During product discovery, we identified three main user pain points.",
      pronunciation: "/ˈprɑdʌkt dɪˈskʌvəri/"
    },
    {
      item: "OKR (Objectives and Key Results)",
      explanation: "A goal-setting framework used to define and track objectives and their outcomes.",
      example: "Our OKR for Q2 is to increase user retention by 20%.",
      pronunciation: "/oʊ keɪ ɑr/"
    },
    {
      item: "ROI (Return on Investment)",
      explanation: "A measure of the profitability or value gained from an investment.",
      example: "The ROI for implementing this feature is projected at 150%.",
      pronunciation: "/ɑr oʊ aɪ/"
    },
    {
      item: "value proposition",
      explanation: "The unique value a product or feature offers to customers.",
      example: "Our value proposition is fast deployment with zero downtime.",
      pronunciation: "/ˈvælju ˌprɑpəˈzɪʃən/"
    },
    {
      item: "pain point",
      explanation: "A specific problem experienced by customers or users.",
      example: "The biggest pain point was slow loading times.",
      pronunciation: "/peɪn pɔɪnt/"
    },
    {
      item: "opportunity solution tree",
      explanation: "A visual framework connecting customer outcomes to potential solutions.",
      example: "We used an opportunity solution tree to prioritize features.",
      pronunciation: "/ˌɑpərˈtunəti səˈluʃən tri/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "API Documentation & Prioritization Language Patterns",
    chunks: [
      {
        chunk: "[HTTP Method] [to/the] [endpoint] [to/perform action]",
        usage: "Formal API method descriptions in documentation"
      },
      // Prioritization Language
      {
        chunk: "This feature is **critical/essential** for [goal].",
        usage: "Expressing importance"
      },
      {
        chunk: "**It's vital that** we address [issue].",
        usage: "Emphasizing necessity"
      },
      {
        chunk: "The **top priority** should be [item].",
        usage: "Ranking importance"
      },
      {
        chunk: "**Compared to** [alternative], this approach is more [adjective].",
        usage: "Direct comparison"
      },
      {
        chunk: "**While** both solutions work, this one is **more cost-effective**.",
        usage: "Contrasting options"
      },
      {
        chunk: "**On balance**, the benefits **outweigh** the risks.",
        usage: "Weighing pros/cons"
      },
      {
        chunk: "**Given that** [context], we should [action].",
        usage: "Conditional justification"
      },
      {
        chunk: "**Based on** the data/research, it makes sense to [decision].",
        usage: "Evidence-based reasoning"
      },
      {
        chunk: "**The reason why** we prioritized this is [explanation].",
        usage: "Explaining rationale"
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
