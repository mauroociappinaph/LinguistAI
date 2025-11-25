import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "atw2",
  title: "Advanced Structures for Formal Writing",
  level: Difficulty.C1,
  description: "Master non-defining clauses, participle clauses, causatives, and reporting verbs for sophisticated technical documentation.",
  didYouKnow: "Technical white papers use participle clauses 4x more than regular documentation to create concise, professional sentences.",

  grammar: {
    title: "Advanced Structures for Formal Writing",
    explanation: "**Non-defining Relative Clauses:** Add extra information (use commas).\\n- 'The API, which was released last month, handles authentication.'\\n\\n**Participle Clauses:** Reduce wordiness.\\n- 'Having completed the tests, we deployed to production.'\\n\\n**Causatives:** Describe delegation.\\n- 'We had the system audited by security experts.'\\n\\n**Reporting Verbs:** Formal citations.\\n- 'The study suggests that performance improves...'",
    usage: "Formal Reports & White Papers:\\n\\n📋 **Documentation**: 'The framework, which supports multiple languages, simplifies development.'\\n🔬 **Research**: 'Having analyzed the data, we concluded that...'\\n👥 **Delegation**: 'We had the code reviewed by senior engineers.'",
    rules: [
      {
        from: "Non-defining clauses",
        to: "Use commas: 'The system, which was built in 2020, is still reliable.'"
      },
      {
        from: "Participle clauses",
        to: "Present: Having/Being + past participle. Past: Having been + past participle"
      },
      {
        from: "Causatives",
        to: "have/get + object + past participle"
      },
      {
        from: "Reporting verbs",
        to: "suggest, indicate, demonstrate, reveal + that-clause"
      }
    ],
    examples: [
      "**Non-defining**: The database, **which was migrated last quarter**, now handles 10M requests daily.",
      "**Participle**: **Having completed the security audit**, we proceeded with the launch.",
      "**Causative**: We **had the infrastructure reviewed** by AWS specialists.",
      "**Reporting**: The metrics **suggest that** user engagement has increased by 30%.",
      "**Combined**: **Having been tested** thoroughly, the feature, **which includes AI capabilities**, was deployed."
    ],
    commonMistakes: [
      {
        incorrect: "The API which was released last month is stable.",
        correct: "The API, which was released last month, is stable.",
        explanation: "Non-defining clauses need commas (extra information)."
      },
      {
        incorrect: "Completed the tests, we deployed.",
        correct: "Having completed the tests, we deployed.",
        explanation: "Use 'Having' + past participle for participle clauses."
      },
      {
        incorrect: "We had reviewed the code by experts.",
        correct: "We had the code reviewed by experts.",
        explanation: "Causative: have + object + past participle."
      }
    ],
    interactiveExercise: {
      type: "sentence-combination",
      question: "Combine using a participle clause: 'We finished testing. We deployed to production.'",
      options: [
        "Finishing testing, we deployed to production.",
        "Having finished testing, we deployed to production.",
        "We finished testing and deployed to production.",
        "After we finished testing, we deployed to production."
      ],
      answer: "Having finished testing, we deployed to production."
    }
  },

  vocabulary: [
    {
      item: "audit",
      explanation: "A systematic examination or review.",
      example: "We had the security audit conducted by external consultants.",
      pronunciation: "/ˈɔdɪt/"
    },
    {
      item: "delegation",
      explanation: "The assignment of responsibility to another person.",
      example: "Effective delegation requires clear communication of expectations.",
      pronunciation: "/ˌdɛləˈɡeɪʃən/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Advanced Formal Patterns",
    chunks: [
      {
        chunk: "[System/Feature], which [extra info], [main clause]",
        usage: "Adding non-essential information formally"
      },
      {
        chunk: "Having [completed/analyzed/tested] [object], [result]",
        usage: "Showing sequence of events concisely"
      },
      {
        chunk: "We had [object] [reviewed/audited/tested] by [experts]",
        usage: "Describing professional delegation"
      }
    ]
  },

  scenario: "Writing a technical white paper or formal proposal for enterprise clients.",
  speaking: "The platform, which was developed over two years, integrates seamlessly with existing systems. Having conducted extensive user testing, we identified key improvement areas. We had the architecture reviewed by industry experts, who suggested that scalability could be enhanced through microservices.",
  speakingPracticeMode: "formal-presentation",

  readingActivity: {
    title: "Reading: Technical White Paper",
    text: "The cloud infrastructure, which supports over 100 million users, demonstrates exceptional reliability. Having been stress-tested under peak conditions, the system proved capable of handling 5x normal traffic. We had the security protocols audited by certified professionals, who indicated that our implementation exceeds industry standards.",
    comprehensionQuestions: [
      {
        question: "What advanced structures are used in this text?",
        answer: "Non-defining clauses, participle clauses, causatives, and reporting verbs."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Executive Briefing",
    transcript: "The migration project, which began in Q1, has exceeded expectations. Having completed the pilot phase, we're ready for full rollout. We had the performance benchmarks validated by third-party analysts, who confirmed that response times improved by 40%.",
    comprehensionQuestions: [
      {
        question: "What did third-party analysts confirm?",
        answer: "Response times improved by 40%."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Complex Structures",
    explanation: "Practice intonation in long, complex sentences with multiple clauses.",
    examples: [
      {
        term: "Having completed the analysis",
        phonetic: "/ˈhævɪŋ kəmˈpliːtɪd ði əˈnæləsɪs/",
        tip: "Pause slightly after 'analysis' before the main clause."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Executive)",
      speakerBio: "Michael, CTO from Silicon Valley",
      audioSrc: "",
      transcript: "The platform, which was architected for global scale, supports multiple deployment models. Having evaluated various cloud providers, we selected AWS for its comprehensive service offering. We had the infrastructure design reviewed by enterprise architects, who recommended a multi-region strategy."
    }
  ],

  rolePlay: {
    title: "Executive Technical Presentation",
    objective: "Practice using advanced structures to present technical solutions to C-level executives.",
    aiPersona: "CEO",
    initialMessage: "Can you present the technical strategy using formal, executive-level language?"
  }
};
