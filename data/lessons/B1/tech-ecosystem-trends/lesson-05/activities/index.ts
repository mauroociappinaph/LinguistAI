export const scenario = "Presenting a product roadmap to stakeholders, explaining what will have been accomplished by specific quarterly milestones.";

export const speaking = "By the end of Q2, the API integration will have been completed and all security audits will have been finished. The mobile app will have been tested across all platforms. By Q3, the entire system will have been deployed to production.";

export const speakingPracticeMode = "presentation" as const;

export const readingActivity = {
  title: "Reading: Annual Product Roadmap",
  text: "Our 2024 roadmap outlines key milestones across four quarters. By Q1, the database migration will have been completed, and the new authentication system will have been implemented. All legacy code will have been refactored by Q2. By the end of Q3, the API documentation will have been published, and developer onboarding will have been streamlined. By Q4, performance optimizations will have been applied across the platform, and the system will have been scaled to handle 10x traffic.",
  comprehensionQuestions: [
    {
      question: "What will have happened by Q1?",
      answer: "The database migration will have been completed and the new authentication system will have been implemented."
    },
    {
      question: "When will all legacy code have been refactored?",
      answer: "By Q2."
    },
    {
      question: "What will the system be able to handle by Q4?",
      answer: "10x traffic (after performance optimizations)."
    }
  ]
};

export const listeningActivity = {
  title: "Listening: Quarterly Review Meeting",
  transcript: "Let me walk you through our progress. By the end of this quarter, all critical bugs will have been resolved. The new feature set will have been tested thoroughly. Looking ahead to Q3, the mobile version will have been launched, and user feedback will have been incorporated into the next iteration.",
  comprehensionQuestions: [
    {
      question: "What will have been resolved by end of quarter?",
      answer: "All critical bugs."
    },
    {
      question: "What will have happened by Q3?",
      answer: "The mobile version will have been launched."
    },
    {
      question: "What will have been incorporated?",
      answer: "User feedback (into the next iteration)."
    }
  ],
  audioSrc: ""
};

export const pronunciationClinic = {
  title: "Pronunciation: Future Perfect Structures",
  explanation: "Master the pronunciation of Future Perfect passive constructions used in project planning.",
  examples: [
    {
      term: "will have been",
      phonetic: "/wɪl hæv bɪn/",
      tip: "Often contracted in speech to 'will've been' - sounds like 'wil-uv-been'."
    },
    {
      term: "completed",
      phonetic: "/kəmˈplitɪd/",
      tip: "Three syllables: com-PLEE-ted. Stress on second syllable."
    },
    {
      term: "milestone",
      phonetic: "/ˈmaɪlˌstoʊn/",
      tip: "Two syllables: MILE-stone. Equal stress on both parts."
    },
    {
      term: "quarter",
      phonetic: "/ˈkwɔrtər/",
      tip: "Two syllables: KWAR-ter. Don't pronounce the 'u'."
    }
  ]
};

export const globalAccentLab = [
  {
    accent: "American English (Corporate)",
    speakerBio: "Rachel, VP of Engineering from New York",
    audioSrc: "",
    transcript: "By the end of Q2, our infrastructure will have been modernized. All services will have been containerized, and the CI/CD pipeline will have been optimized. We're confident these milestones will have been achieved on schedule."
  },
  {
    accent: "British English (London)",
    speakerBio: "Thomas, Product Manager from London",
    audioSrc: "",
    transcript: "Looking at our roadmap, by September all user research will have been completed, and the design system will have been finalized. The beta version will have been released to early adopters by October."
  }
];

export const rolePlay = {
  title: "Quarterly Roadmap Presentation",
  objective: "Practice using Future Perfect Passive to present project milestones to stakeholders.",
  aiPersona: "Stakeholder asking about project timeline",
  initialMessage: "Can you walk me through the roadmap? What will have been delivered by the end of each quarter?"
};
