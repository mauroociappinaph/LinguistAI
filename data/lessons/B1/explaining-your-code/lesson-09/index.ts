import { Lesson, Difficulty } from '../../../../../types';

export const lesson09: Lesson = {
  id: "eyc9",
  title: "Technology Stack Explanations",
  level: Difficulty.B1,
  description: "Learn to explain technical stacks and technology choices using present simple for current infrastructure and past tenses for decisions made.",
  didYouKnow: "Senior developers spend up to 30% of their time explaining technology choices. Using appropriate tenses clearly communicates 'why' decisions were made and their current impact.",

  grammar: {
    title: "Present Simple + Past Tenses for Tech Stack",
    explanation: "**Present Simple**: Current architecture - 'Our system uses React'\n**Past Simple**: Decisions made - 'We chose PostgreSQL'\n**Present Perfect**: Recent changes - 'We have upgraded Node.js'",
    usage: "Tech Stack Communication:\n\n🏗️ **Current Setup**: 'Database runs on AWS'\n📋 **Rationale**: 'We chose Docker because it simplified deployment'\n🔄 **Recent**: 'We have migrated to microservices'",
    rules: [
      {
        from: "Current system state",
        to: "Present simple for existing infrastructure (runs on, uses, supports)"
      },
      {
        from: "Decision explanation",
        to: "Past simple for historical choices (chose, selected, decided)"
      },
      {
        from: "Recent changes",
        to: "Present perfect for recent adoptions/upgrades (have implemented, have upgraded)"
      }
    ],
    examples: [
      "**Our application runs** on cloud infrastructure and **serves** 10M users daily.",
      "**We selected** microservices architecture **because** it enables independent deployments.",
      "**The system supports** multiple authentication methods; **we implemented** OAuth last quarter.",
      "**Database queries are optimized** automatically; **designers chose** PostgreSQL for its reliability."
    ],
    commonMistakes: [
      {
        incorrect: "Our system will run on AWS.",
        correct: "Our system runs on AWS.",
        explanation: "Present simple for current reality, not future possibility."
      },
      {
        incorrect: "We choose React because it's popular.",
        correct: "We chose React because it provides excellent developer experience.",
        explanation: "Past simple for decisions made, provide specific rationale."
      },
      {
        incorrect: "We upgraded the framework.",
        correct: "We have upgraded to the latest framework version.",
        explanation: "Present perfect shows recent/current status of upgrade."
      }
    ],
    interactiveExercise: {
      type: "sentence-combination",
      question: "Explain a tech choice: 'Choose relational database for scalability → Use PostgreSQL → Completed migration last month'",
      options: [
        "We chose PostgreSQL because it supports scalability; we completed the migration last month.",
        "We choose PostgreSQL for scalability; we have completed the migration last month.",
        "We chose PostgreSQL because it supports scalability; we have completed the migration last month."
      ],
      answer: "We chose PostgreSQL because it supports scalability; we have completed the migration last month."
    }
  },
  vocabulary: [
    {
      item: "stack",
      explanation: "Complete set of software used to build applications.",
      example: "Our technology stack includes React, Node.js, and PostgreSQL.",
      pronunciation: "/stæk/"
    },
    {
      item: "infrastructure",
      explanation: "Underlying structure for systems and services.",
      example: "Cloud infrastructure provides scalable computing resources.",
      pronunciation: "/ˈɪnfrəˌstrʌktʃər/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Tech Stack Explanation Patterns",
    chunks: [
      {
        chunk: "[Tech] runs on/supports [platform/feature]",
        usage: "Describing current system specifications"
      },
      {
        chunk: "[Company/Team] chose [tech] because...",
        usage: "Explaining decision rationale"
      },
      {
        chunk: "We have implemented/upgraded to...",
        usage: "Describing recent changes or adoptions"
      }
    ]
  },
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
