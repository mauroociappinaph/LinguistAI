import { Lesson, Difficulty } from '../../../../../types';

export const lesson04: Lesson = {
  id: "eyc4",
  title: "Legacy Systems & Deprecation",
  level: Difficulty.B1,
  description: "Learn to explain future developments using will/going to forms when discussing legacy systems, deprecation, and migration strategies.",
  didYouKnow: "65% of enterprise applications are legacy systems. Using future forms clearly communicates when and how old technologies will be replaced, helping teams plan transitions smoothly.",

  grammar: {
    title: "Future Forms for Technical Evolution",
    explanation: "**Will + infinitive**: Spontaneous decisions - 'We'll deprecate this API'\n**Going to + infinitive**: Planned decisions - 'We're going to migrate to cloud'\n**Will be + -ing**: Processes in progress - 'The system will be undergoing maintenance'",
    usage: "Technical Planning & Roadmaps:\n\n📅 **Deprecation warnings**: 'This feature will be removed in v2.0'\n🌐 **Migration plans**: 'We are going to implement containerization'\n🔄 **Maintenance**: 'Database will be undergoing optimization'",
    rules: [
      {
        from: "Spontaneous decisions",
        to: "Will + infinitive (I'll archive this, We'll refactor it)"
      },
      {
        from: "Pre-planned actions",
        to: "Going to + infinitive (Going to modernize, Going to sunset)"
      },
      {
        from: "Formal announcements",
        to: "Will be + past participle (will be deprecated, will be migrated)"
      }
    ],
    examples: [
      "**Legacy authentication will be deprecated** by end of Q2; **we're going to** implement OAuth instead.",
      "**Database migration is going to begin** next sprint; **backup will be created** automatically.",
      "**This framework will be upgraded** to support the new requirements if performance drops.",
      "**The old API endpoints will be removed** in version 2.0; **we are going to** provide migration guides.",
      "**Security patches are going to be applied** automatically; **manual intervention will be required** only for critical systems."
    ],
    commonMistakes: [
      {
        incorrect: "We deprecate the old feature soon.",
        correct: "We will deprecate the old feature next quarter.",
        explanation: "Use 'will' for planned official actions and specify timelines for clarity."
      },
      {
        incorrect: "We going to upgrade the system.",
        correct: "We are going to upgrade the system next month.",
        explanation: "Use the correct contraction 'are going to' and specify when the action will happen."
      },
      {
        incorrect: "Old code will be replaced.",
        correct: "The old code will be gradually deprecated over 6 months.",
        explanation: "Technical changes need clear migration paths and timelines for stakeholders."
      }
    ],
    interactiveExercise: {
      type: "sentence-combination",
      question: "Combine to create a technical deprecation announcement: 'legacy database / will be / upgraded / next month'",
      options: [
        "Legacy database will be upgraded next month.",
        "The legacy database will be upgraded next month.",
        "Legacy database is going to be upgraded next month.",
        "The legacy database will be migrated next month."
      ],
      answer: "The legacy database will be upgraded next month."
    }
  },
  vocabulary: [
    {
      item: "deprecate",
      explanation: "To mark something as no longer recommended for use, usually a software feature or API.",
      example: "This API endpoint will be deprecated in the next major version.",
      pronunciation: "/ˈdɛprəˌkeɪt/"
    },
    {
      item: "migrate",
      explanation: "To move data or functionality from one system to another.",
      example: "We are going to migrate all user data to the new database schema.",
      pronunciation: "/maɪˈɡreɪt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Future Technical Changes Patterns",
    chunks: [
      {
        chunk: "[Feature/System] will be [action] by [time]",
        usage: "Announcing planned changes and timelines"
      }
    ]
  },
  scenario: "Explaining technology migration and deprecation plans to development team and stakeholders.",
  speaking: "The legacy logging system will be deprecated by next quarter. We're going to implement centralized logging instead, which will improve monitoring capabilities.",
  speakingPracticeMode: "planning",
  readingActivity: {
    title: "Reading: Technical Migration Planning",
    text: "Large software projects often require careful migration planning. Legacy systems that have served well for years will be deprecated to make way for more modern, scalable solutions. Teams must communicate these changes clearly, providing detailed timelines and migration paths.\n\nUsing future tenses helps stakeholders understand when changes will occur and what new systems will be implemented. This transparency builds trust and allows for proper planning.",
    comprehensionQuestions: [
      {
        question: "Why is migration planning important in large software projects?",
        answer: "To make way for more modern, scalable solutions."
      },
      {
        question: "What does using future tenses help stakeholders understand?",
        answer: "When changes will occur and what new systems will be implemented."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Deprecation Announcement",
    transcript: "Good morning team. We're announcing that our legacy authentication system will be deprecated by the end of Q3. We'll be migrating to a more secure OAuth 2.0 implementation. The migration will be phased, with the new system going live in Q4. Training sessions are scheduled for next month.",
    comprehensionQuestions: [
      {
        question: "When will the legacy authentication system be deprecated?",
        answer: "By the end of Q3."
      },
      {
        question: "What will replace the legacy system?",
        answer: "OAuth 2.0 implementation."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Future Tense Technical Terms",
    explanation: "Master pronunciation of technical terms commonly used with future tenses in planning, migration, and deprecation discussions.",
    examples: [
      {
        term: "migration",
        phonetic: "/maɪˈɡreɪʃən/",
        tip: "Four syllables, stress on second. Sounds like 'my-gray-shun'."
      },
      {
        term: "deprecation",
        phonetic: "/ˌdɛprəˈkeɪʃən/",
        tip: "Four syllables, stress on third. Commonly mispronounced in technical contexts."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "Australian English (Technical)",
      speakerBio: "Sarah, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Fair dinkum, that legacy database is getting a bit long in the tooth. We'll be deprecating it by the end of the year and migrating everything to the new cloud-based solution. No dramas, we've got a solid transition plan."
    }
  ],
  rolePlay: {
    title: "Deprecation Planning Meeting",
    objective: "Practice explaining technology migration plans using future forms to communicate changes to a development team.",
    aiPersona: "Engineering Manager",
    initialMessage: "I've seen the migration proposal. Walk me through the timeline and what will be replaced."
  }
};
