import { Lesson, Difficulty } from '../../../../../types';

export const lesson06: Lesson = {
  id: "eyc6",
  title: "Software Development Lifecycle",
  level: Difficulty.B1,
  description: "Learn to describe SDLC phases using passive voice for development processes and workflow explanations.",
  didYouKnow: "80% of software projects follow some form of SDLC methodology. Describing processes in passive voice creates clear, team-independent documentation that ensures consistency across the organization.",

  grammar: {
    title: "Passive Voice for SDLC Processes",
    explanation: "**Passive in SDLC**: 'Code is reviewed', 'Tests are automated', 'Features are deployed'\n**Process Focus**: Emphasizes what happens rather than who does it\n**Standard Documentation**: 'Requirements are gathered', 'Code is committed', 'Bugs are tracked'",
    usage: "📋 **SDLC Documentation**: Use passive for standardized processes\n🏗️ **Process Flows**: 'Requirements are analyzed, code is developed, tests are executed'\n📝 **Checklists**: 'Features are peer-reviewed, bugs are documented, releases are signed off'",
    rules: [
      {
        from: "Process description",
        to: "Object + is/are + past participle (Code + is + reviewed)"
      },
      {
        from: "Standard procedures",
        to: "Passive to describe regulated, standard processes"
      },
      {
        from: "Documentation style",
        to: "Use passive for official documentation and checklists"
      }
    ],
    examples: [
      "**Requirements are gathered** at project initiation phase.",
      "**Code is reviewed** before being merged to main branch.",
      "**Tests are automated** as part of CI/CD pipeline.",
      "**Features are deployed** automatically to staging environment.",
      "**Bugs are tracked** in the issue management system."
    ],
    commonMistakes: [
      {
        incorrect: "Developers review code.",
        correct: "Code is reviewed by developers.",
        explanation: "Passive voice focuses on the process, not the person."
      },
      {
        incorrect: "We automated tests.",
        correct: "Tests are automated.",
        explanation: "Passive voice removes personal pronouns for process documentation."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Complete with passive voice: 'Bugs ___ (track) in the issue management system and features ___ (test) before deployment.'",
      options: ["are tracked, are tested", "track, test", "tracked, tested"],
      answer: "are tracked, are tested"
    }
  },
  vocabulary: [
    {
      item: "requirement",
      explanation: "Specification of what a system should do.",
      example: "Requirements are gathered at planning phase.",
      pronunciation: "/rɪˈkwaɪərmənt/"
    },
    {
      item: "commit",
      explanation: "To save changes to version control.",
      example: "Code is committed after review.",
      pronunciation: "/kəˈmɪt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "SDLC Communication Patterns",
    chunks: [
      {
        chunk: "[Requirement/Task] is [past participle] during [phase]",
        usage: "Describing SDLC processes and timelines"
      },
      {
        chunk: "[Process] is automated/maintained/standardized",
        usage: "Explaining process optimization and quality assurance"
      }
    ]
  },
  scenario: "Explaining the development lifecycle to stakeholders.",
  speaking: "Requirements are gathered first. Code is developed following standards. Tests are written and automated. Features are deployed through CI/CD pipeline.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Reading: SDLC Process Documentation",
    text: "Modern software development requires clear documentation of processes. Code is committed regularly, requirements are gathered systematically, and features are deployed automatically. This standardization ensures quality and allows new team members to understand workflow quickly.",
    comprehensionQuestions: [
      {
        question: "Why is process documentation important in SDLC?",
        answer: "It ensures standardization and allows new team members to understand workflow."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Development Process Explanation",
    transcript: "Our SDLC starts with requirements gathering. Features are designed, code is developed and tested, then deployments are automated. Quality checks are performed at each stage.",
    comprehensionQuestions: [
      {
        question: "What is the first step in our SDLC?",
        answer: "Requirements gathering."
      },
      {
        question: "What is performed at each stage?",
        answer: "Quality checks."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: SDLC Terms",
    explanation: "Master pronunciation of key SDLC terminology used in process documentation.",
    examples: [
      {
        term: "lifecycle",
        phonetic: "/ˈlaɪfˈsaɪkəl/",
        tip: "Four syllables, stress on first syllable."
      },
      {
        term: "automation",
        phonetic: "/ˌɑtəˈmeɪʃən/",
        tip: "Five syllables, stress on third."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "British English (Technical)",
      speakerBio: "Vicky, Technical Program Manager from Scotland",
      audioSrc: "",
      transcript: "In our SDLC, requirements are gathered comprehensively, code is developed following strict standards, and features are deployed automatically through our CI/CD pipeline. Everything is well documented and processes are clearly defined."
    }
  ],
  rolePlay: {
    title: "Explaining SDLC to New Team Member",
    objective: "Practice using passive voice to explain the development process clearly and comprehensively.",
    aiPersona: "New developer asking about company processes",
    initialMessage: "Could you explain how development works here? I'm new and want to understand the process."
  }
};
