import { Lesson, Difficulty } from '../../../../../types';

export const lesson04: Lesson = {
  id: "com4",
  title: "Stakeholder Communication & Updates",
  level: Difficulty.A1,
  description: "Learn to communicate effectively with stakeholders, provide regular updates, and manage expectations using present perfect for achievements and future tenses for planning.",
  didYouKnow: "90% of project failures are due to poor communication. Regular stakeholder updates increase project success rates by 25% and reduce surprises during delivery.",

  grammar: {
    title: "Present Perfect for Achievements + Future for Planning",
    explanation:
      "**Present Perfect for Accomplishments**: 'We have completed', 'Team has delivered'\n**Future for Upcoming Work**: 'We will deliver', 'Team will complete'\n**Present Simple for Current Status**: 'Project runs smoothly', 'System performs well'",
    usage: "Stakeholder communication:\n\n📈 **Achievements**: 'We have increased performance by 40%'\n🔮 **Plans**: 'We will deploy next week'\n📊 **Current state**: 'The application handles 1M users daily'",
    rules: [
      {
        from: "Completed work",
        to: "Have/has + past participle (have + completed, has + improved)"
      },
      {
        from: "Future commitments",
        to: "Will + verb (will + deliver, will + implement)"
      },
      {
        from: "Current capabilities",
        to: "Subject + verb (System + supports, Application + processes)"
      }
    ],
    examples: [
      "**We have implemented** the new authentication system successfully.",
      "**The team has increased** performance by optimizing database queries.",
      "**We will deliver** the mobile app version next quarter.",
      "**The application now supports** over 50,000 concurrent users.",
      "**Management has approved** the budget for infrastructure scaling."
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
      },
      {
        incorrect: "The project runs on schedule.",
        correct: "The project currently supports 50,000 concurrent users.",
        explanation: "Use present simple for current capabilities and avoid vague statements."
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
      item: "stakeholder",
      explanation: "Someone with interest in a project, such as managers, users, or investors.",
      example: "We need to inform all stakeholders about the upcoming deployment.",
      pronunciation: "/ˈsteɪkˌhoʊldər/"
    },
    {
      item: "milestone",
      explanation: "Important point or event in a project timeline.",
      example: "Completing the beta release was a major milestone.",
      pronunciation: "/ˈmaɪlˌstoʊn/"
    },
    {
      item: "roadmap",
      explanation: "Plan showing the direction and timeline for future development.",
      example: "The product roadmap shows mobile development starting next quarter.",
      pronunciation: "/ˈroʊdˌmæp/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Stakeholder Communication Patterns",
    chunks: [
      {
        chunk: "I want to provide an update on ___",
        usage: "Starting status updates"
      },
      {
        chunk: "We have ___ and will ___ next",
        usage: "Reporting progress and plans"
      },
      {
        chunk: "This means ___ for [stakeholders]",
        usage: "Explaining impacts"
      }
    ]
  },
  scenario: "Providing project updates to stakeholders during a quarterly review meeting.",
  speaking: "I want to provide an update on the Q4 objectives. We have completed the user authentication module and increased performance by 35%. The team has resolved 95% of the reported bugs. We will launch the mobile application next month and expect to reach 100,000 users by year-end.",
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
