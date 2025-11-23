import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "eyc1",
  title: "Passive Voice in Technical Contexts",
  level: Difficulty.B1,
  description: "Master passive voice to explain technical processes and documentation where the focus is on the action rather than who performs it.",
  didYouKnow: "83% of technical documentation uses passive voice because it's objective and focuses on procedures rather than people. In code documentation, passive structures like 'is implemented', 'is configured', and 'is handled' are standard practice.",

  grammar: {
    title: "Passive Voice for Technical Documentation",
    explanation: "**Passive Voice (be + past participle)**: Subject receives the action\n\n**When to Use Passive:** When explaining processes, documentation, or any situation where the agent (who does the action) is unimportant or unknown\n\n**Common Passive Patterns in Tech:**\n- `is/are + past participle`: 'The data is encrypted'\n- `was/were + past participle`: 'The bug was fixed'\n- `will be + past participle`: 'The feature will be released'",
    usage: "Technical Documentation & Code Explanations:\n\n📚 **Focus on Processes**: 'The API is designed to handle errors' (not 'developers design')\n🔧 **Configuration**: 'The server is configured automatically'\n📋 **Implementation Details**: 'The component is structured modularly'",
    rules: [
      {
        from: "Active to Passive - Present",
        to: "Object becomes subject + is/are + past participle"
      },
      {
        from: "Active to Passive - Past",
        to: "Object becomes subject + was/were + past participle"
      },
      {
        from: "No agent needed",
        to: "Passive voice when 'by someone' or 'by the system' is irrelevant"
      }
    ],
    examples: [
      "**The API is designed** to handle authentication requests securely.",
      "**System performance is optimized** through efficient algorithms.",
      "**The database is queried** using optimized SQL statements.",
      "**Dependencies are resolved** automatically by the package manager.",
      "**The code is reviewed** before being merged into the main branch.",
      "**Security vulnerabilities are identified** during automated scanning."
    ],
    commonMistakes: [
      {
        incorrect: "Developers write tests for all functions",
        correct: "Tests are written for all functions.",
        explanation: "Use passive when the agent is obvious or irrelevant."
      },
      {
        incorrect: "We optimize the database for better performance.",
        correct: "The database is optimized for better performance.",
        explanation: "Focus on what happens to the database, not who does it."
      },
      {
        incorrect: "The team configures the CI/CD pipeline every month.",
        correct: "The CI/CD pipeline is configured automatically.",
        explanation: "Passive voice removes unnecessary detail when documenting processes."
      }
    ],
    interactiveExercise: {
      type: "sentence transformation",
      question: "Transform active sentences to passive for technical documentation: 'Developers implement this feature using React.'",
      options: ["This feature is implemented using React by developers.", "This feature is implemented using React.", "Using React, developers implement this feature.", "React implements this feature developers."],
      answer: "This feature is implemented using React."
    }
  },
  vocabulary: [
    {
      item: "implement",
      explanation: "To put a plan, decision, or agreed system into operation.",
      example: "The cryptography algorithm is implemented in the security module.",
      pronunciation: "/ˈɪmplɪˌmɛnt/"
    },
    {
      item: "configure",
      explanation: "To set up or arrange something in a particular way.",
      example: "The application is configured to handle high traffic loads.",
      pronunciation: "/kənˈfɪɡjər/"
    },
    {
      item: "optimize",
      explanation: "To make something as good or effective as possible.",
      example: "Database queries are optimized for better performance.",
      pronunciation: "/ˈɑptɪmaɪz/"
    },
    {
      item: "deploy",
      explanation: "To put software into production or use.",
      example: "The new release is deployed to all servers simultaneously.",
      pronunciation: "/dɪˈplɔɪ/"
    },
    {
      item: "integrate",
      explanation: "To combine or incorporate different systems or elements.",
      example: "Third-party services are integrated via RESTful APIs.",
      pronunciation: "/ˈɪntɪɡreɪt/"
    },
    {
      item: "validate",
      explanation: "To check or confirm that something is correct or acceptable.",
      example: "User input is validated before processing.",
      pronunciation: "/ˈvælɪdeɪt/"
    },
    {
      item: "maintain",
      explanation: "To keep something in good condition or working order.",
      example: "Code standards are maintained throughout the project.",
      pronunciation: "/meɪnˈteɪn/"
    },
    {
      item: "document",
      explanation: "To record or write information about something.",
      example: "All APIs are documented following OpenAPI specifications.",
      pronunciation: "/ˈdɑkjumənt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Technical Documentation Patterns",
    chunks: [
      {
        chunk: "[Component/Process] is [action+past participle]",
        usage: "Describing current system states and configurations"
      },
      {
        chunk: "[Feature] was [action+past participle] to [purpose]",
        usage: "Explaining implementation decisions in code comments"
      },
      {
        chunk: "[Process] is handled [automatically/manually]",
        usage: "Documenting system behaviors and automation"
      }
    ]
  },
  scenario: "Writing comprehensive technical documentation for a new API endpoint that explains how authentication and error handling are implemented.",
  speaking: "The authentication service is implemented using JWT tokens. Each request is validated against the user's permissions. Errors are handled gracefully and logged for monitoring. The system is configured to scale automatically based on traffic patterns.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Reading: Technical API Documentation",
    text: "The authentication API is designed to handle secure user login and session management. Requests are validated using JWT tokens, which are issued after successful credential verification. Invalid tokens are rejected immediately, and rate limiting is applied to prevent abuse. Error responses are formatted consistently, and all sensitive data is encrypted before transmission. The service is implemented using stateless architecture for optimal scalability.",
    comprehensionQuestions: [
      {
        question: "How are user requests validated?",
        answer: "Using JWT tokens after successful credential verification."
      },
      {
        question: "What happens to invalid tokens?",
        answer: "They are rejected immediately."
      },
      {
        question: "Why is stateless architecture used?",
        answer: "For optimal scalability."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Technical Architecture Explanation",
    transcript: "The system architecture is designed with microservices in mind. Each service is implemented independently and communicates via API calls. Data validation is handled at the entry point, and business logic is separated from presentation layer. Security measures are implemented at every level, and monitoring is configured throughout the entire stack.",
    comprehensionQuestions: [
      {
        question: "How do microservices communicate?",
        answer: "Via API calls."
      },
      {
        question: "Where is data validation handled?",
        answer: "At the entry point."
      },
      {
        question: "What is configured throughout the entire stack?",
        answer: "Monitoring."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Passive Voice Verbs",
    explanation: "Master the pronunciation of common past participles used in passive voice constructions in technical contexts.",
    examples: [
      {
        term: "implemented",
        phonetic: "/ˈɪmplɪˌmɛntɪd/",
        tip: "Emphasize the middle syllable, four syllables total."
      },
      {
        term: "configured",
        phonetic: "/kənˈfɪɡjərd/",
        tip: "Three syllables, stress on middle syllable."
      },
      {
        term: "optimized",
        phonetic: "/ˈɑptɪmaɪzd/",
        tip: "Three syllables, stress on first syllable."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (Technical)",
      speakerBio: "Alex, Senior Software Engineer from California",
      audioSrc: "",
      transcript: "The backend is implemented using Node.js and is configured to handle up to 10,000 concurrent connections. All requests are validated before being processed, and errors are handled gracefully with detailed logging. The system is designed to scale horizontally and is monitored continuously for performance issues."
    }
  ],
  rolePlay: {
    title: "Explaining API Documentation",
    objective: "Practice using passive voice to explain a new feature implementation to fellow developers.",
    aiPersona: "Colleague asking about recent changes",
    initialMessage: "Hey, I need to understand how this new payment integration was implemented. Can you walk me through it?"
  }
};
