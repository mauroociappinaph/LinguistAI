import { Lesson, Difficulty } from '../../../../../types';

export const lesson06: Lesson = {
  id: "com6",
  title: "Stakeholder Communication & Updates",
  level: Difficulty.A1,
  description: "Learn to communicate progress, provide updates, and manage stakeholder expectations using present perfect for accomplishments and future tenses for commitments.",
  didYouKnow: "Projects with regular stakeholder communication are 70% more likely to succeed. Present perfect perfectly captures 'what we have achieved so far,' while future tenses set clear expectations for what will happen.",

  grammar: {
    title: "Present Perfect + Future Tenses for Updates",
    explanation: "**Present Perfect for Achievements**: 'We have completed X tasks', 'The system has processed Y requests'\n**Future for Commitments**: 'We will deliver by Friday', 'The team will implement the feature'\n\n**Combined**: 'We have finished testing and we will deploy next week'",
    usage: "Stakeholder updates:\n\n📊 **Progress reports**: 'We have implemented 80% of requirements'\n🎯 **Future commitments**: 'We will complete the milestone by EOW'\n🔄 **Combined**: 'We have resolved the blocking issues, so we will meet the deadline'",
    rules: [
      {
        from: "Completed work",
        to: "Have/has + past participle (have + completed, has + improved)"
      },
      {
        from: "Future plans",
        to: "Will + base verb (will + deliver, will + update)"
      },
      {
        from: "Be going to",
        to: "Am/is/are going to + verb (going to + ship)"
      }
    ],
    examples: [
      "**We have completed** the API development and **will begin** testing tomorrow.",
      "**The team has delivered** the core functionality; **we are going to** add polish next.",
      "**We have resolved** 90% of the bugs and **will finish** the remaining ones today.",
      "**Management has approved** the budget; **we will allocate** resources immediately.",
      "**We have achieved** our sprint goals but **will reassess** priorities for next week."
    ],
    commonMistakes: [
      {
        incorrect: "We completed the feature yesterday.",
        correct: "We have completed the feature since the last update.",
        explanation: "Use present perfect to connect past achievements with current status."
      },
      {
        incorrect: "Will deliver mobile app next month.",
        correct: "We will deliver the mobile app by end of next month.",
        explanation: "Be specific about timelines in professional communications."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The team ___ completed the testing phase and ___ conduct user acceptance testing next week.",
      options: ["have, will", "has, is going to", "completed, will", "had, would"],
      answer: "has, is going to"
    }
  },
  vocabulary: [
    {
      item: "milestone",
      explanation: "A significant point or event in a project timeline that marks progress.",
      example: "We have reached the beta release milestone and will celebrate with the team.",
      pronunciation: "/ˈmaɪlˌstoʊn/"
    },
    {
      item: "deliverable",
      explanation: "A tangible or intangible item produced as a result of a project.",
      example: "The user authentication module we have developed is a key deliverable for this sprint.",
      pronunciation: "/dɪˈlɪvərəbəl/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Progress Update Communication Patterns",
    chunks: [
      {
        chunk: "We have [completed/accomplished] ___ and will [do] ___",
        usage: "Reporting achievements and future plans"
      },
      {
        chunk: "The team has [achieved] ___ ; we are going to [focus on] ___",
        usage: "Transitioning between past achievements and future focus"
      }
    ]
  },
  scenario: "Providing a project status update to stakeholders, summarizing what has been accomplished and what will be delivered next.",
  speaking: "We have completed the database migration successfully and will begin user testing next week. Management has approved the timeline extension, so we are going to meet our revised deadlines. The team has resolved all critical issues and will focus on performance optimization going forward.",
  speakingPracticeMode: "presentation",
  readingActivity: {
    title: "Reading: Effective Stakeholder Communication",
    text: "Clear stakeholder communication requires consistent updates, transparent progress reporting, and proactive issue management. Regular meetings, status reports, and timely responses to concerns help maintain trust and keep projects on track.",
    comprehensionQuestions: [
      {
        question: "Why is consistent stakeholder communication important?",
        answer: "It helps maintain trust and keep projects on track."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Project Status Update",
    transcript: "I want to provide an update on our current sprint. We have successfully implemented the user login functionality and resolved the major security vulnerabilities. We will begin testing the payment integration module next week and expect completion by sprint end.",
    comprehensionQuestions: [
      {
        question: "What have they implemented successfully?",
        answer: "User login functionality and resolved security vulnerabilities."
      },
      {
        question: "What will they begin testing next week?",
        answer: "Payment integration module."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Stakeholder Terms",
    explanation: "Master key terms used in stakeholder communication.",
    examples: [
      {
        term: "stakeholder",
        phonetic: "/ˈsteɪkˌhoʊldər/",
        tip: "Four syllables: 'stayk-hohl-der'. Stress on second syllable."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "British English (Corporate)",
      speakerBio: "Sarah, Senior Project Manager from London",
      audioSrc: "",
      transcript: "I'd like to give you a quick update on the Q3 deliverables. We've successfully deployed the new analytics dashboard, and we've seen a 35% increase in user engagement. We're going to focus on the mobile optimization next, and we should have that ready by end of quarter."
    }
  ],
  rolePlay: {
    title: "Quarterly Business Review",
    objective: "Practice giving comprehensive project updates to executives using appropriate tense structures.",
    aiPersona: "Senior executive reviewing project progress",
    initialMessage: "Please walk me through where we stand with the current initiative."
  }
};
