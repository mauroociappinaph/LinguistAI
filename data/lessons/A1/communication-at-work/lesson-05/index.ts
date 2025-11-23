import { Lesson, Difficulty } from '../../../../../types';

export const lesson05: Lesson = {
  id: "com5",
  title: "Making Suggestions & Recommendations",
  level: Difficulty.A1,
  description: "Learn to provide professional feedback, make technical suggestions, and offer constructive recommendations using modals, passive voice, and connectors in a collaborative work environment.",
  didYouKnow: "Effective suggestions in technical environments use tentative language that invites discussion. The phrase 'have you considered...' opens 70% more collaboration than direct statements like 'You should do...' in code reviews.",

  grammar: {
    title: "Modals (should/could) + Passive Voice + Connectors",
    explanation:
      "**Modals for Tentative Suggestions**: 'Should' for recommendations, 'Could' for possibilities - 'This should be clarified'\n**Passive Voice for Objective Analysis**: Focuses on what's needed, not who - 'Code should be refactored', 'Documentation needs updating'\n**Connectors for Rationale**: 'Because... so...', 'Since... we could...'\n\nPerfect for constructive tech feedback: 'This code should be optimized because it processes too many records'",
    usage:
      "Professional suggestion patterns:\n\n💡 **Constructive**: 'This could be improved because...'\n🔧 **Technical**: 'The database should be indexed for better performance'\n👥 **Team focus**: 'We could implement... since it would...'",
    rules: [
      {
        from: "Suggestions",
        to: "Should + subject + verb (Code should be restructured)"
      },
      {
        from: "Possibilities",
        to: "Could + subject + verb (You could add validation)"
      },
      {
        from: "Objective recommendations",
        to: "Should + passive (API should be documented, Tests should be written)"
      }
    ],
    examples: [
      "**This feature should be implemented** because users need it for compliance.",
      "**The code could be optimized** since performance is being affected.",
      "**Documentation should be updated** whenever APIs change.",
      "**We should consider refactoring** because the current structure is complex.",
      "**Tests should be added** to prevent regressions in the future."
    ],
    commonMistakes: [
      {
        incorrect: "Change this code.",
        correct: "This code should be updated because...",
        explanation:
          "Use modals and provide context/rationale for professional suggestions."
      },
      {
        incorrect: "You write better tests.",
        correct: "Tests should be written more comprehensively.",
        explanation:
          "Use passive voice to focus on tasks rather than blame individuals."
      },
      {
        incorrect: "The API needs fixing.",
        correct: "The API should be revised since it returns inconsistent data.",
        explanation:
          "Use 'should' and provide technical reasoning for recommendations."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The database ___ indexed because query performance ___ slow.",
      options: ["should be, is being", "should be, is", "could be, has been", "will be, becomes"],
      answer: "should be, is"
    }
  },
  vocabulary: [
    {
      item: "refactor",
      explanation: "To restructure existing code without changing its functionality for better maintainability.",
      example: "The legacy code should be refactored before adding new features.",
      pronunciation: "/ˌriˈfæktər/"
    },
    {
      item: "optimization",
      explanation: "The process of making something better and more efficient.",
      example: "Database optimization could improve response times significantly.",
      pronunciation: "/ˌɑptɪməˈzeɪʃən/"
    },
    {
      item: "best practices",
      explanation: "Generally recommended methods or techniques that have proven effective.",
      example: "We should follow best practices for error handling throughout the application.",
      pronunciation: "/bɛst ˈpræktɪsɪz/"
    },
    {
      item: "scalability",
      explanation: "The ability of a system to handle increased workload without performance degradation.",
      example: "The architecture should be reviewed for scalability before launch.",
      pronunciation: "/ˌskeɪləˈbɪləti/"
    },
    {
      item: "maintenance",
      explanation: "The work needed to keep something in good working condition.",
      example: "Code maintenance could be reduced if we implement cleaner architecture.",
      pronunciation: "/ˈmeɪntənəns/"
    },
    {
      item: "flexibility",
      explanation: "The ability to adapt to changing requirements or conditions.",
      example: "The design should provide flexibility for future feature additions.",
      pronunciation: "/ˌflɛksəˈbɪləti/"
    },
    {
      item: "user experience",
      explanation: "The overall experience and satisfaction of users when interacting with a product.",
      example: "User experience should be prioritized in all design decisions.",
      pronunciation: "/ˈjuːzər ɪkˈspɪriəns/"
    },
    {
      item: "compatibility",
      explanation: "The ability of different systems or components to work together.",
      example: "The new framework should be tested for compatibility with existing systems.",
      pronunciation: "/kəmˌpætəˈbɪləti/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Suggestion Patterns",
    chunks: [
      {
        chunk: "[Component/Feature] should be [improved] because [reason]",
        usage: "Making technical suggestions with justifications"
      },
      {
        chunk: "We could [implement] [solution] since it would [benefit]",
        usage: "Offering alternatives with benefits"
      },
      {
        chunk: "Have you considered [approach]? It might [advantage]",
        usage: "Gentle suggestions inviting discussion"
      }
    ]
  },
  scenario: "Providing constructive feedback in a code review and suggesting technical improvements using professional, collaborative language.",
  speaking: "This authentication module should be refactored because it has too many responsibilities. We could implement the single responsibility principle since it would make testing easier. Have you considered using dependency injection? It might provide better flexibility for future changes.",
  speakingPracticeMode: "constructive",
  readingActivity: {
    title: "Reading: The Art of Technical Suggestions",
    text: "Effective technical suggestions in professional environments require careful language that focuses on improvement rather than criticism. Rather than saying 'your code is bad,' frame suggestions as 'the code could be more maintainable' or 'this approach offers better scalability.' Use inclusive language like 'we could consider' to invite collaboration. Always provide rationale for suggestions, explaining how proposed changes benefit maintainability, performance, user experience, or future development. Professional feedback strengthens team relationships while improving code quality.",
    comprehensionQuestions: [
      {
        question: "Why is careful language important in technical suggestions?",
        answer: "It focuses on improvement rather than criticism."
      },
      {
        question: "What type of language invites collaboration?",
        answer: "Inclusive language like 'we could consider'."
      },
      {
        question: "What should you always provide with suggestions?",
        answer: "Rationale explaining the benefits of changes."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Code Review Feedback",
    transcript: "I appreciate you sharing your implementation approach. This logic should definitely be extracted into a separate service because it's becoming quite complex. We could implement the strategy pattern here since it would make testing much easier. Have you considered using async/await instead? It might provide better error handling for database timeouts.",
    comprehensionQuestions: [
      {
        question: "What should be extracted into a separate service?",
        answer: "The complex logic."
      },
      {
        question: "What pattern is suggested for easier testing?",
        answer: "The strategy pattern."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Suggestion Terms",
    explanation: "Master pronunciation of key terms used when making professional suggestions and recommendations.",
    examples: [
      {
        term: "consider",
        phonetic: "/kənˈsɪdər/",
        tip: "Three syllables: 'con-sid-er'. Stress on second syllable. Means to think about or evaluate."
      },
      {
        term: "implement",
        phonetic: "/ˈɪmplɪmɛnt/",
        tip: "Three syllables: 'im-ple-ment'. Stress on first syllable. Means to put into practice."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Irish English (Dublin)",
      speakerBio: "Liam, Senior Engineer from Dublin",
      audioSrc: "",
      transcript: "This architecture should be simplified before we scale further. We could implement microservices since it would make deployment much easier. Have you considered containerization? It might solve all our environment issues in one go. Fair play to you for thinking ahead though!"
    }
  ],

  rolePlay: {
    title: "Providing Code Review Feedback",
    objective: "Practice giving constructive suggestions during code reviews using modal verbs and professional language.",
    aiPersona: "Junior developer receiving feedback",
    initialMessage: "Thanks for reviewing my code. What do you think of the approach I took?"
  }
};
