import { Lesson, Difficulty } from '../../../../../types';

export const lesson08: Lesson = {
  id: "eyc8",
  title: "Debugging Communication Strategies",
  level: Difficulty.B1,
  description: "Learn to explain debugging processes and issue resolution using past tenses and present perfect for problem-solving scenarios.",

  grammar: {
    title: "Past Tenses for Troubleshooting",
    explanation: "**Past Simple**: Specific debugging steps - 'I identified the bug yesterday'\n**Present Perfect**: Ongoing investigation - 'We have found the root cause'\n**Past Continuous**: Process description - 'System was processing requests when crash occurred'",
    usage: "Debug Communication:\n\n🔍 **Issue Description**: 'Application crashed this morning'\n🔧 **Investigation**: 'We have checked the logs'\n✅ **Resolution**: 'Problem was resolved by updating dependencies'",
    rules: [
      {
        from: "Specific debugging actions",
        to: "Past simple for completed troubleshooting steps (found, fixed)"
      },
      {
        from: "Ongoing investigation",
        to: "Present perfect for current status (have identified, have resolved)"
      },
      {
        from: "Process description",
        to: "Past continuous for system state during issue (was running, was processing)"
      }
    ],
    examples: [
      "**The application crashed** this morning and **was losing** database connections.",
      "**We have identified** the root cause; **it occurred** when synthetic monitoring tested the API.",
      "**Server was responding** but **database connection failed** during peak load.",
      "**Developers investigated** the logs **but did not find** the issue immediately."
    ],
    commonMistakes: [
      {
        incorrect: "Application crashes yesterday.",
        correct: "Application crashed yesterday.",
        explanation: "Past simple for completed events, use proper verb forms."
      },
      {
        incorrect: "We investigated the problem already.",
        correct: "We have already investigated the problem.",
        explanation: "Present perfect shows current status/relevance of investigation."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Complete the troubleshooting scenario: 'Server ___ (crash) last night while ___ (process) financial transactions. We ___ (identify) the issue and ___ (fix) it this morning.'",
      options: ["crashed, was processing, have identified, fixed", "crashed, processing, identified, fixed", "crashes, was processing, identified, fixed"],
      answer: "crashed, was processing, have identified, fixed"
    }
  },
  vocabulary: [
    {
      item: "debug",
      explanation: "To find and remove errors from software.",
      example: "I debugged the memory leak issue yesterday.",
      pronunciation: "/diˈbʌɡ/"
    },
    {
      item: "trace",
      explanation: "To follow the execution path of a program.",
      example: "We traced the error back to the database connection.",
      pronunciation: "/treɪs/"
    }
  ],
  didYouKnow: "Software developers spend 60% of debugging time explaining problems to others. Clear debugging communication prevents team misunderstandings and speeds up resolution.",
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Debugging Communication Patterns",
    chunks: [
      {
        chunk: "[Issue] occurred when [system state]",
        usage: "Describing problem conditions and timing"
      },
      {
        chunk: "We have [investigated/identified/resolved] the [problem]",
        usage: "Reporting debugging progress and status"
      }
    ]
  },
  scenario: "Explaining debugging process during stand-up meetings.",
  speaking: "I identified the performance issue yesterday. We have traced it to inefficient database queries. The problem was causing slow response times for users.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Reading: Debugging Communication Best Practices",
    text: "Effective debugging communication uses specific tenses to convey different aspects of problem-solving. Past simple describes specific debugging actions taken. Present perfect shows current investigation status. Past continuous describes system behavior during failures.",
    comprehensionQuestions: [
      {
        question: "What tense describes specific debugging actions?",
        answer: "Past simple."
      },
      {
        question: "What does present perfect show?",
        answer: "Current investigation status."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Debug Report Presentation",
    transcript: "Database connection failures occurred last night. We have identified slow query performance as the root cause. Server was processing multiple concurrent requests when the issue manifested.",
    comprehensionQuestions: [
      {
        question: "What was the root cause identified?",
        answer: "Slow query performance."
      },
      {
        question: "When did the failures occur?",
        answer: "Last night."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Debugging Terms",
    explanation: "Master pronunciation of terms used in debugging explanations and reports.",
    examples: [
      {
        term: "debug",
        phonetic: "/diˈbʌɡ/",
        tip: "Two syllables, stress on second syllable."
      },
      {
        term: "trace",
        phonetic: "/treɪs/",
        tip: "One syllable, single vowel sound."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "South African English (Technical)",
      speakerBio: "Nkosi, QA Engineer from Johannesburg",
      audioSrc: "",
      transcript: "The system crashed at 3 AM local time. We traced the issue to memory leaks in the session management. Server was running high-load while processing user analytics when the problem occurred."
    }
  ],
  rolePlay: {
    title: "Debug Session Summary",
    objective: "Use past tenses and present perfect to explain debugging findings and resolution progress to your team.",
    aiPersona: "Team Lead",
    initialMessage: "What have you found so far about the reported issue? Please explain our debugging progress."
  }
};
