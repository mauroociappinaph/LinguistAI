import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "pm1",
  title: "Future Perfect Passive: Reporting Future Milestones",
  level: Difficulty.B2,
  description: "Master the Future Perfect Passive to describe project milestones and deliverables that will be completed before a specific future point.",
  didYouKnow: "In project management, 'will have been completed' is used 3x more often than 'will complete' because it emphasizes the finished state of deliverables.",

  grammar: {
    title: "Future Perfect Passive",
    explanation: "**Structure:** will have been + past participle\\n\\n**Use:** To describe actions that will be completed before a specific point in the future.\\n\\n**Context in PM:** Reporting milestones, sprint goals, and release timelines.\\n\\n**Key Pattern:** By [time/date], [deliverable] will have been [completed/deployed/tested].",
    usage: "Project Milestones & Sprint Planning:\\n\\n📅 **Sprint Goals**: 'By Friday, all user stories will have been completed.'\\n🚀 **Release Planning**: 'The feature will have been deployed by Q2.'\\n✅ **Status Updates**: 'By the end of the week, the bug will have been fixed.'",
    rules: [
      {
        from: "Future Perfect Passive Formation",
        to: "will have been + past participle (completed, deployed, tested, reviewed)"
      },
      {
        from: "Time markers",
        to: "by [time], by the time [event], before [deadline]"
      },
      {
        from: "Negative form",
        to: "will not have been + past participle"
      }
    ],
    examples: [
      "By the end of Sprint 5, **all critical bugs will have been resolved**.",
      "The API **will have been documented** before the public release.",
      "By next Monday, the code review **will have been completed**.",
      "The deployment **will have been tested** in staging by Friday.",
      "By Q3, the migration **will have been finished** and verified."
    ],
    commonMistakes: [
      {
        incorrect: "By Friday, we will complete the feature.",
        correct: "By Friday, the feature will have been completed.",
        explanation: "Use Future Perfect Passive to emphasize the completed state, not the action."
      },
      {
        incorrect: "The bug will have fixed by tomorrow.",
        correct: "The bug will have been fixed by tomorrow.",
        explanation: "Don't forget 'been' in the passive structure."
      },
      {
        incorrect: "By next week, we will have been deploy the app.",
        correct: "By next week, the app will have been deployed.",
        explanation: "Use past participle (deployed), not base form (deploy)."
      }
    ],
    interactiveExercise: {
      type: "sentence-completion",
      question: "Complete: 'By the end of the sprint, all tasks ___ (complete).'",
      options: [
        "will complete",
        "will have completed",
        "will have been completed",
        "will be completing"
      ],
      answer: "will have been completed"
    }
  },

  vocabulary: [
    {
      item: "milestone",
      explanation: "A significant point or event in a project timeline.",
      example: "The first milestone will have been reached by the end of Q1.",
      pronunciation: "/ˈmaɪlstoʊn/"
    },
    {
      item: "deliverable",
      explanation: "A tangible or intangible output produced as part of a project.",
      example: "All deliverables will have been submitted before the deadline.",
      pronunciation: "/dɪˈlɪvərəbl/"
    },
    {
      item: "rollout",
      explanation: "The process of introducing a new product or service.",
      example: "The rollout will have been completed across all regions by June.",
      pronunciation: "/ˈroʊlaʊt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Milestone Reporting Patterns",
    chunks: [
      {
        chunk: "By [time/date], [deliverable] will have been [completed/deployed/tested]",
        usage: "Reporting future completion of tasks"
      },
      {
        chunk: "By the time [event happens], [action] will have been [done]",
        usage: "Describing sequential future events"
      },
      {
        chunk: "All [items] will have been [action] before [deadline]",
        usage: "Emphasizing completion before a specific point"
      }
    ]
  },

  scenario: "You are presenting the project timeline to stakeholders and need to describe what will be completed by specific dates.",
  speaking: "By the end of Q2, the MVP will have been developed and tested. All critical features will have been implemented, and the security audit will have been completed before the public launch.",
  speakingPracticeMode: "milestone-reporting",

  readingActivity: {
    title: "Reading: Project Timeline Communication",
    text: "Effective project managers use Future Perfect Passive to communicate clear expectations. For example: 'By the sprint review, all user stories will have been completed and demoed.' This structure emphasizes the finished state rather than the ongoing work, which helps stakeholders understand exactly what to expect.",
    comprehensionQuestions: [
      {
        question: "Why do project managers prefer Future Perfect Passive?",
        answer: "It emphasizes the finished state of deliverables."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Sprint Planning Meeting",
    transcript: "Let's review our commitments for Sprint 10. By the end of the sprint, the authentication module will have been fully implemented. The database migration will have been tested in staging, and all documentation will have been updated. We expect that by Friday, code reviews will have been completed for all pull requests.",
    comprehensionQuestions: [
      {
        question: "What will be completed by the end of the sprint?",
        answer: "The authentication module, database migration testing, and documentation updates."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Future Perfect Passive",
    explanation: "Practice the rhythm and linking in Future Perfect Passive structures.",
    examples: [
      {
        term: "will have been completed",
        phonetic: "/wɪl həv bɪn kəmˈpliːtɪd/",
        tip: "Link 'will have' → 'will've' in natural speech."
      },
      {
        term: "will have been deployed",
        phonetic: "/wɪl həv bɪn dɪˈplɔɪd/",
        tip: "Stress on 'ployed', not 'de'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (PM)",
      speakerBio: "Sarah, Project Manager from Seattle",
      audioSrc: "",
      transcript: "By the end of Q3, the platform migration will have been completed. All legacy systems will have been decommissioned, and the new infrastructure will have been fully tested and documented."
    }
  ],

  rolePlay: {
    title: "Sprint Planning Discussion",
    objective: "Practice using Future Perfect Passive to describe sprint commitments and milestones.",
    aiPersona: "Product Owner",
    initialMessage: "Can you walk me through what will be delivered by the end of this sprint?"
  }
};
