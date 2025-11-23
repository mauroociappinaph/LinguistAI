import { Lesson, Difficulty } from '../../../../../types';

export const lesson03: Lesson = {
  id: "pc3",
  title: "Team Meetings & Presentations",
  level: Difficulty.A1,
  description: "Learn to participate effectively in team meetings and deliver presentations using reporting verbs and meeting vocabulary in tech environments.",
  didYouKnow: "The average knowledge worker spends about 2 hours per day in meetings, with 25% of that time considered unproductive. Effective meetings require clear agendas, active participation, and defined outcomes. Presentation skills are crucial in tech roles, with 70% of developers expected to present their work regularly.",

  grammar: {
    title: "Reporting Verbs: Present/Suggest/Recommend",
    explanation:
      "**'Present'** shows information: 'The team **presented** the quarterly results'. **'Suggest'** offers ideas: 'I **suggest** we move to microservices'. **'Recommend'** gives strong advice: 'I **recommend** implementing TDD'.\n\nThese verbs help in meetings: 'Sarah **presented** her research', 'John **suggested** a new approach', 'The architect **recommended** cloud migration'.",
    usage:
      "Use reporting verbs to:\n\n🎤 **Present information**: 'Team **presented** the sprint demo'\n💡 **Offer suggestions**: 'I **suggest** using React for the frontend'\n✅ **Make recommendations**: 'We **recommend** daily standups'\n\nChoose based on formality and confidence level.",
    rules: [
      {
        from: "Present information",
        to: "present + object (Present the findings)"
      },
      {
        from: "Offer ideas casually",
        to: "suggest + object/gerund (Suggest a solution/Suggest implementing)"
      },
      {
        from: "Give strong advice",
        to: "recommend + object/gerund (Recommend the change/Recomend starting)"
      }
    ],
    examples: [
      "The product owner **presented** the user requirements to the team.",
      "I **suggest** we schedule a planning meeting for tomorrow.",
      "The lead developer **recommended** using TypeScript for the project.",
      "Sarah **presented** her analysis of the performance issues.",
      "We **suggest** implementing automated testing for this feature."
    ],
    commonMistakes: [
      {
        incorrect: "I suggest you to change the design.",
        correct: "I suggest changing the design.",
        explanation:
          "After 'suggest', use a gerund (verb-ing) or noun phrase, not 'you to + verb'."
      },
      {
        incorrect: "The manager presented about the new project.",
        correct: "The manager presented the new project.",
        explanation:
          "'Present' takes a direct object. Use 'presented about' only when no specific object follows."
      },
      {
        incorrect: "I recommend you to join the meeting.",
        correct: "I recommend joining the meeting.",
        explanation:
          "Use gerund form with 'recommend'. Use 'recommend that + subject + verb' for personal recommendations."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The engineering team ___ starting with unit tests for new features.",
      options: ["present", "suggest", "recommend"],
      answer: "recommend"
    }
  },
  vocabulary: [
    {
      item: "standup",
      explanation: "A brief daily meeting where team members share progress and blockers.",
      example: "We have a 15-minute standup every morning.",
      pronunciation: "/ˈstændʌp/"
    },
    {
      item: "demo",
      explanation: "A demonstration of completed work or features to stakeholders.",
      example: "The sprint demo showed all the new features we developed.",
      pronunciation: "/ˈdɛmoʊ/"
    },
    {
      item: "agenda",
      explanation: "A list of items to be discussed in a meeting.",
      example: "Let's review the agenda before we start the meeting.",
      pronunciation: "/əˈdʒɛndə/"
    },
    {
      item: "stakeholder",
      explanation: "A person with an interest or concern in the project.",
      example: "All project stakeholders attended the review meeting.",
      pronunciation: "/ˈsteɪkˌhoʊldər/"
    },
    {
      item: "blocker",
      explanation: "An obstacle or problem that prevents progress on a task.",
      example: "The database connectivity issue is our main blocker right now.",
      pronunciation: "/ˈblɑkər/"
    },
    {
      item: "roadmap",
      explanation: "A strategic plan showing future development direction.",
      example: "The product roadmap shows feature releases for the next six months.",
      pronunciation: "/ˈroʊdˌmæp/"
    },
    {
      item: "milestone",
      explanation: "A significant point or event in a project timeline.",
      example: "Completing the beta version is our next milestone.",
      pronunciation: "/ˈmaɪlˌstoʊn/"
    },
    {
      item: "retrospective",
      explanation: "A meeting to discuss what went well and what could be improved.",
      example: "The sprint retrospective helps us learn from our experiences.",
      pronunciation: "/ˌrɛtrəˈspɛktɪv/"
    },
    {
      item: "minutes",
      explanation: "A written record of what was discussed and decided in a meeting.",
      example: "I'll send the meeting minutes to all attendees.",
      pronunciation: "/ˈmɪnɪts/"
    },
    {
      item: "facilitate",
      explanation: "To make an action or process easier or to help coordinate a group activity.",
      example: "The scrum master facilitates the agile ceremonies.",
      pronunciation: "/fəˈsɪlɪteɪt/"
    },
    {
      item: "prioritize",
      explanation: "To arrange or deal with things in order of importance.",
      example: "We need to prioritize the critical bugs for this release.",
      pronunciation: "/praɪˈɔrətaɪz/"
    },
    {
      item: "escalate",
      explanation: "To make a problem or issue more serious or important.",
      example: "This issue needs to be escalated to senior management.",
      pronunciation: "/ˈɛskəleɪt/"
    },
    {
      item: "align on",
      explanation: "To reach agreement on something within a group.",
      example: "The team needs to align on the project timeline.",
      pronunciation: "/əˈlaɪn ɔn/"
    },
    {
      item: "follow up",
      explanation: "To take further action or contact someone after an initial meeting or communication.",
      example: "I'll follow up with you tomorrow about the project status.",
      pronunciation: "/ˈfɑloʊ ʌp/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Meeting and Presentation Communication Patterns",
    chunks: [
      {
        chunk: "I'd like to ___ [present/suggest/recommend] that...",
        usage: "Introducing ideas in meetings"
      },
        {
        chunk: "Let me walk you through ___",
        usage: "Starting presentations or demos"
      },
      {
        chunk: "To align on ___, I propose/___",
        usage: "Seeking agreement on topics"
      },
      {
        chunk: "Regarding the agenda item about ___, ___",
        usage: "Transitioning between meeting topics"
      },
      {
        chunk: "We should follow up on ___",
        usage: "Planning next steps from meetings"
      }
    ]
  },
  scenario: "Participating in team meetings and delivering a sprint demo presentation using appropriate meeting language and presentation skills.",
  speaking: "Let me present the features we completed this sprint. I'd like to suggest we prioritize the user authentication first. Regarding our roadmap, I recommend implementing microservices for scalability.",
  speakingPracticeMode: "presentation",

  readingActivity: {
    title: "Reading: Effective Meeting Practices in Tech Teams",
    text: "Effective meetings require structure and participation. **Agendas** help focus discussions and ensure efficient use of time. **Stakeholders** should be identified and included appropriately. During **demos**, presenters **suggest** improvements while acknowledging accomplishments. **Blockers** must be communicated clearly with recommended solutions. **Follow-up** actions should be assigned with clear ownership and deadlines.",
    comprehensionQuestions: [
      {
        question: "What helps focus meeting discussions?",
        answer: "Agendas."
      },
      {
        question: "What should presenters do during demos?",
        answer: "Suggest improvements while acknowledging accomplishments."
      },
      {
        question: "What should be assigned in follow-up actions?",
        answer: "Clear ownership and deadlines."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Sprint Demo Meeting",
    transcript: "Welcome everyone to our sprint demo. Let me walk you through what we've accomplished. First, I'd like to present the new login functionality - it's working well with proper error handling. Sarah, can you suggest any improvements? Regarding the blockers, we've resolved most issues but need to escalate the database performance problem. I recommend we schedule a follow-up meeting next week to discuss the roadmap priorities.",
    comprehensionQuestions: [
      {
        question: "What is the speaker presenting?",
        answer: "The new login functionality."
      },
      {
        question: "What does the speaker want Sarah to do?",
        answer: "Suggest improvements."
      },
      {
        question: "What does the speaker recommend?",
        answer: "Schedule a follow-up meeting."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Meeting and Project Terms",
    explanation: "Master the pronunciation of key terms used in professional meetings, presentations, and project management discussions.",
    examples: [
      {
        term: "agenda",
        phonetic: "/əˈdʒɛndə/",
        tip: "Four syllables: 'a-jen-da'. Stress on third syllable. Common in business English."
      },
      {
        term: "stakeholder",
        phonetic: "/ˈsteɪkˌhoʊldər/",
        tip: "Three syllables: 'stake-hold-er'. Stress on first syllable. Important in project contexts."
      },
      {
        term: "blocker",
        phonetic: "/ˈblɑkər/",
        tip: "Two syllables: 'block-er'. Short 'o' sound. Used when describing impediments."
      },
      {
        term: "roadmap",
        phonetic: "/ˈroʊdˌmæp/",
        tip: "Two syllables: 'road-map'. Stress on first word. Similar to map but with 'road'."
      },
      {
        term: "facilitate",
        phonetic: "/fəˈsɪlɪteɪt/",
        tip: "Four syllables: 'fa-cil-i-tate'. Stress on penultimate syllable. Means to make easier."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Toronto)",
      speakerBio: "Alex, Project Manager from Toronto",
      audioSrc: "",
      transcript: "Alright, let's get started with this demo. I'll walk you through the user interface changes we made. The stakeholders should like this approach, and I'd recommend rolling it out to beta next week. Any questions before we move to the roadmap?"
    },
    {
      accent: "Indian English (Bangalore)",
      speakerBio: "Priya, Tech Lead from Bangalore",
      audioSrc: "",
      transcript: "Good afternoon, team. I would like to present our progress on the mobile app. We had some blockers with the API integration, but we've resolved most issues. I suggest we prioritize the user testing phase next. Shall we follow up on this tomorrow?"
    }
  ],

  rolePlay: {
    title: "Sprint Review Presentation",
    objective: "Deliver a sprint demo presentation to stakeholders and facilitate discussion about completed work and future priorities.",
    aiPersona: "Product manager attending the sprint demo",
    initialMessage: "Thank you for the presentation. I have some questions about the architecture decisions and want to suggest some potential improvements for the user experience."
  }
};
