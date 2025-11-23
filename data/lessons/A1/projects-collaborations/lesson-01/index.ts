import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "pc1",
  title: "Project Planning & Sprint Management",
  level: Difficulty.A1,
  description: "Learn to plan projects and manage sprints using future tenses and project management vocabulary in agile development environments.",
  didYouKnow: "Agile methodologies, which popularized sprint planning, were originally developed for software development but are now used across industries. The average sprint duration is 2 weeks, allowing teams to adapt quickly to changes while maintaining steady progress. Sprint planning meetings typically last 1-2 hours per week of sprint duration.",

  grammar: {
    title: "Future Tenses: Will/Shall for Planning",
    explanation:
      "**'Will'** expresses spontaneous decisions and future plans, while **'Shall'** is more formal for suggestions and offers in planning contexts. Use **'going to'** for scheduled plans.\n\nIn project planning: '**We will finish** the user stories by Friday', '**Shall we schedule** a planning meeting?', '**We're going to start** the sprint tomorrow'.\n\nFuture tenses help teams discuss timelines, deadlines, and commitments in development cycles.",
    usage:
      "In sprint planning and project management conversations:\n\n📅 **Planning**: 'The team **will deliver** the feature next sprint'\n🤝 **Agreements**: '**Shall we review** the backlog today?'\n🎯 **Goals**: 'We **are going to implement** agile practices'\n\nUse different tenses for different planning contexts.",
    rules: [
      {
        from: "Spontaneous future",
        to: "will + infinitive (We'll assign tasks tomorrow)"
      },
      {
        from: "Formal suggestions",
        to: "shall + subject (Shall we start the sprint?)"
      },
      {
        from: "Scheduled plans",
        to: "going to + infinitive (We're going to demo next week)"
      }
    ],
    examples: [
      "**We will complete** the user stories by Friday.",
      "**Shall I create** the sprint backlog?",
      "**Our team is going to** implement the new design.",
      "**The product owner will** review the acceptance criteria.",
      "**Shall we schedule** the planning meeting for Monday?"
    ],
    commonMistakes: [
      {
        incorrect: "We shall deliver the sprint.",
        correct: "We will deliver the sprint.",
        explanation:
          "Use 'will' for simple future actions, 'shall' is more formal for suggestions or questions."
      },
      {
        incorrect: "Shall I will assign the tasks?",
        correct: "Shall I assign the tasks?",
        explanation:
          "Don't combine modal verbs. Choose either 'will', 'shall', or 'going to'."
      },
      {
        incorrect: "We're going to will start tomorrow.",
        correct: "We're going to start tomorrow.",
        explanation:
          "Don't use 'will' with 'going to'. 'Going to' already indicates future."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The development team ___ deploy the application next week.",
      options: ["will", "shall", "going to"],
      answer: "will"
    }
  },
  vocabulary: [
    {
      item: "sprint",
      explanation: "A set period of time during which specific work has to be completed and made ready for review.",
      example: "Our development sprints are two weeks long.",
      pronunciation: "/sprɪnt/"
    },
    {
      item: "backlog",
      explanation: "A list of tasks or features that need to be completed.",
      example: "We need to prioritize items in the product backlog.",
      pronunciation: "/ˈbækˌlɔg/"
    },
    {
      item: "user story",
      explanation: "A description of a feature from the end-user's perspective.",
      example: "Each user story includes acceptance criteria.",
      pronunciation: "/ˈyuzər ˈstɔri/"
    },
    {
      item: "scrum",
      explanation: "An agile framework for managing complex projects.",
      example: "Our team uses scrum methodology for project management.",
      pronunciation: "/skrʌm/"
    },
    {
      item: "milestone",
      explanation: "A significant point in a project timeline.",
      example: "Completing the MVP is our next milestone.",
      pronunciation: "/ˈmaɪlˌstəʊn/"
    },
    {
      item: "burndown",
      explanation: "A chart showing the amount of work remaining over time.",
      example: "The burndown chart helps track sprint progress.",
      pronunciation: "/ˈbɜrndəʊn/"
    },
    {
      item: "iteration",
      explanation: "A single development cycle in an agile process.",
      example: "Each iteration ends with a working product increment.",
      pronunciation: "/ˌɪtəˈreɪʃən/"
    },
    {
      item: "capacity planning",
      explanation: "The process of determining the team's available work capacity.",
      example: "Capacity planning helps us estimate sprint goals accurately.",
      pronunciation: "/kəˈpæsəti ˈplænɪŋ/"
    },
    {
      item: "grooming session",
      explanation: "A meeting to prepare backlog items for future sprints.",
      example: "We hold backlog grooming sessions every week.",
      pronunciation: "/ˈgrumɪŋ ˈsɛʃən/"
    },
    {
      item: "definition of done",
      explanation: "A set of criteria that must be met for a task to be considered complete.",
      example: "Code review, testing, and documentation are part of our definition of done.",
      pronunciation: "/ˌdɛfəˈnɪʃən əv dʌn/"
    },
    {
      item: "commit to sprint",
      explanation: "To agree to complete certain work items within a sprint.",
      example: "The team should only commit to work they can realistically complete.",
      pronunciation: "/kəˈmɪt tə sprɪnt/"
    },
    {
      item: "velocity",
      explanation: "A measure of how much work a team can complete in a sprint.",
      example: "Our team velocity has improved over the last three sprints.",
      pronunciation: "/vəˈlɑsəti/"
    },
    {
      item: "increment",
      explanation: "A working piece of product that adds value to previous increments.",
      example: "Each sprint delivers a valuable product increment.",
      pronunciation: "/ˈɪŋkrəmənt/"
    },
    {
      item: "retrospective",
      explanation: "A meeting held at the end of a sprint to discuss what went well and what could be improved.",
      example: "The sprint retrospective helps us improve our processes.",
      pronunciation: "/ˌrɛtrəˈspɛktɪv/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Sprint Planning Communication Patterns",
    chunks: [
      {
        chunk: "We ___ deliver [feature] by the end of the sprint.",
        usage: "Making sprint commitments"
      },
      {
        chunk: "___ we move this to the next sprint?",
        usage: "Discussing backlog prioritization"
      },
      {
        chunk: "Our capacity ___ allow us to take [number] story points.",
        usage: "Capacity planning discussions"
      },
      {
        chunk: "The definition of ___ includes [criteria].",
        usage: "Defining completion criteria"
      },
      {
        chunk: "We ___ review the burndown chart tomorrow.",
        usage: "Tracking progress commitments"
      }
    ]
  },
  scenario: "Participating in sprint planning meeting and discussing team capacity and sprint goals.",
  speaking: "In our next sprint, we will develop the login feature with the acceptance criteria. We are going to estimate the user stories and commit to what we can realistically complete.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Agile Sprint Planning Guide",
    text: "Successful sprint planning requires clear communication and realistic commitments. **We will** begin the sprint planning meeting with backlog review. **The product owner will** present the prioritized user stories with acceptance criteria. **The development team will** discuss capacity and estimate effort using story points. **We are going to** identify dependencies and technical challenges early. **We shall** evaluate the team's velocity from previous sprints to ensure commitment realism. Quality standards and definition of done **will be** reviewed before commitment.",
    comprehensionQuestions: [
      {
        question: "Who presents the prioritized user stories?",
        answer: "The product owner."
      },
      {
        question: "What will be reviewed before commitment?",
        answer: "Quality standards and definition of done."
      },
      {
        question: "How will effort be estimated?",
        answer: "Using story points."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Sprint Planning Meeting",
    transcript: "Right team, let's start our sprint planning. We've got 8 story points capacity for this sprint. The product owner will present the backlog items. This login feature looks ready - we will implement it with proper validation. Shall we add automated tests to the definition of done? Our velocity last sprint was 7 points, so we are going to be conservative with commitments. Each developer should commit to tasks they feel confident about completing.",
    comprehensionQuestions: [
      {
        question: "What is the team's sprint capacity?",
        answer: "8 story points."
      },
      {
        question: "What will the team implement?",
        answer: "The login feature."
      },
      {
        question: "What was the team's velocity last sprint?",
        answer: "7 points."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Agile Methodology Terms",
    explanation: "Master the pronunciation of key sprint planning and agile methodology vocabulary used in professional software development environments.",
    examples: [
      {
        term: "sprint",
        phonetic: "/sprɪnt/",
        tip: "One syllable, like 'print' but with 's'. Short 'i' sound. Not 'spront'."
      },
      {
        term: "backlog",
        phonetic: "/ˈbækˌlɔg/",
        tip: "Two syllables: 'back-log'. Stress on first syllable. The 'g' at the end is soft."
      },
      {
        term: "scrum",
        phonetic: "/skrʌm/",
        tip: "One syllable, rhymes with 'drum'. Short 'u' sound. Not 'scr-um'."
      },
      {
        term: "burndown",
        phonetic: "/ˈbɜrndəʊn/",
        tip: "Two syllables: 'burn-down'. Stress on first syllable. Like 'burned down' but as one word."
      },
      {
        term: "velocity",
        phonetic: "/vəˈlɑsəti/",
        tip: "Four syllables: 've-loc-i-ty'. Stress on third syllable. 'vel' like 'well', 'ty' like 'tee'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Silicon Valley)",
      speakerBio: "Sarah, Scrum Master from San Francisco",
      audioSrc: "",
      transcript: "Okay team, let's dive into this sprint planning. We've got solid capacity this time around - I'd say we can commit to about 12 story points. The product owner will walk us through the backlog. We will prioritize the user authentication feature. What do you think - shall we break it down into smaller user stories?"
    },
    {
      accent: "British English (London)",
      speakerBio: "James, Product Owner from London",
      audioSrc: "",
      transcript: "Right, let's get this sprint planned properly. The team will need to review the backlog items first. I think we can probably commit to 10 points this time. We are going to include the testing criteria in our definition of done. Shall we schedule the grooming session for tomorrow morning?"
    }
  ],

  rolePlay: {
    title: "Sprint Planning Meeting",
    objective: "Participate in a sprint planning meeting, estimate user stories, and commit to sprint goals using appropriate planning language and future tenses.",
    aiPersona: "Scrum Master facilitating the planning meeting",
    initialMessage: "Welcome to sprint planning. Let's start with the backlog review. What user stories shall we consider for this sprint, and how many story points do you think we can commit to?"
  }
};
