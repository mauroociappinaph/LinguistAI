import { Lesson, Difficulty } from '../../../../../types';

export const lesson05: Lesson = {
  id: "eyc5",
  title: "Global State Concepts",
  level: Difficulty.B1,
  description: "Master present simple to explain global application architecture, system behaviors, and fundamental design patterns.",
  didYouKnow: "65% of software systems use global state management. Understanding how to explain architectural patterns helps developers communicate system design effectively.",

  grammar: {
    title: "Present Simple for System Architecture",
    explanation: "**Present Simple (base form)**: Describes how systems work - 'Application stores data in memory'\n**Universal Facts**: 'Cache improves performance'\n**General Rules**: 'Load balancer distributes traffic'\n**Patterns & Behaviors**: 'Algorithm sorts data efficiently'",
    usage: "Architecture Explanations:\n\n🏗️ **Design patterns**: 'Singleton pattern ensures single instance'\n⚙️ **System behaviors**: 'Queue processes messages asynchronously'\n📊 **Data flow**: 'API validates input before processing'",
    rules: [
      {
        from: "Current system behaviors",
        to: "Subject + verb (Cache + improves, API + validates)"
      },
      {
        from: "Universal technical facts",
        to: "Statement of immutable truths (Docker containers package applications)"
      },
      {
        from: "Architecture descriptions",
        to: "Passive or active forms as appropriate (Data flows through pipeline)"
      }
    ],
    examples: [
      "**Application processes** requests in defined order.",
      "**Cache stores** frequently accessed data.",
      "**Load balancer distributes** traffic across servers.",
      "**API validates** input before processing.",
      "**Database indexes** improve query performance."
    ],
    commonMistakes: [
      {
        incorrect: "Application will process requests.",
        correct: "Application processes requests continuously.",
        explanation: "Use present simple for ongoing system behaviors, not future actions."
      },
      {
        incorrect: "Cache will improve performance.",
        correct: "Cache improves performance.",
        explanation: "Present simple describes general facts about system capabilities."
      },
      {
        incorrect: "The API validated input.",
        correct: "The API validates input.",
        explanation: "Describe current system behavior with present simple, not past actions."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Complete with present simple: 'The microservice architecture ___ (decouple) services so each ___ (can deploy) independently.'",
      options: [
        "decouples, can deploy",
        "decouples, deploys",
        "decoupling, can deployed",
        "decoupled, deployed"
      ],
      answer: "decouples, can deploy"
    }
  },
  vocabulary: [
    {
      item: "cache",
      explanation: "Store of data for quick access.",
      example: "Cache improves response times.",
      pronunciation: "/kæʃ/"
    },
    {
      item: "asynchronous",
      explanation: "Operations that don't block other processes.",
      example: "Queue processes messages asynchronously.",
      pronunciation: "/eɪˈsɪŋkrənəs/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Technical Logic Patterns",
    chunks: [
      {
        chunk: "If [condition], [result] because [reason]",
        usage: "Explaining technical cause-and-effect relationships"
      },
      {
        chunk: "Although [trade-off], [main benefit] so [action]",
        usage: "Justifying technical decisions with balanced analysis"
      }
    ]
  },
  scenario: "",
  speaking: "",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "",
    text: "",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "",
    transcript: "",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "",
    explanation: "",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "",
    objective: "",
    aiPersona: "",
    initialMessage: ""
  }
};
