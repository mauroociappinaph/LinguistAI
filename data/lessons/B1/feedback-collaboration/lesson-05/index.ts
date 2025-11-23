import { Lesson, Difficulty } from '../../../../../types';

export const lesson05: Lesson = {
  id: "ffc5",
  title: "Remote & Asynchronous Workflows",
  level: Difficulty.B1,
  description: "Learn to effectively communicate and delegate tasks in remote teams and asynchronous work environments using polite requests and clear delegation structures.",
  didYouKnow: "72% of developers work remotely or asynchronously. Teams who communicate clearly asynchronously are 40% more productive and report 25% higher satisfaction.",

  grammar: {
    title: "Polite Requests & Delegation Structures in Remote Teams",
    explanation: "**Polite delegation**: 'Could you look into this issue?', 'Would you be able to handle X?'\n**Clear ownership**: 'I'll handle the frontend', 'Sarah will take care of testing'\n**Asynchronous follow-up**: 'Please let me know when it's ready', 'I'll review it tomorrow'\n**Status updates**: 'I've started working on it', 'The task is almost complete'",

    usage: "Remote Team Communication:\n\n🗣️ **Task assignment**: 'Could you review the pull request today?'\n🎯 **Delegation**: 'Please let me know if you need help'\n📋 **Status updates**: 'I've started the database migration'\n🤝 **Collaboration**: 'I suggest we schedule a quick sync to discuss this'",
    rules: [
      {
        from: "Polite question forms",
        to: "Could/Would + subject + verb (Could you update the documentation?)"
      },
      {
        from: "Future commitment",
        to: "Will + infinitive for task ownership (Sarah will handle the deployment)"
      },
      {
        from: "Present continuous for current work",
        to: "Is/am/are + -ing for current status (I'm working on the API)"
      },
      {
        from: "Going to for planned actions",
        to: "Going to + infinitive for scheduled tasks (I'm going to review it tomorrow)"
      }
    ],
    examples: [
      "**Could you handle the database optimization task next sprint?**",
      "**Maria will take care of the user authentication feature.**",
      "**I'm currently working on the API integration but can help with testing tomorrow.**",
      "**Would you be able to review my changes before the end of the day?**",
      "**The platform team is going to handle the infrastructure migration over the weekend.**",
      "**Could you please update the task status when you're done?**"
    ],
    commonMistakes: [
      {
        incorrect: "Do the testing now.",
        correct: "Could you run the tests when you have time?",
        explanation: "Polite requests respect team members' schedules and workloads."
      },
      {
        incorrect: "I own this task.",
        correct: "I'm responsible for this task and will update the team tomorrow.",
        explanation: "Clear communication includes update schedules in remote environments."
      },
      {
        incorrect: "It's done.",
        correct: "I've completed the feature and documented the changes in Confluence.",
        explanation: "Detailed updates ensure remote team members stay aligned."
      }
    ],
    interactiveExercise: {
      type: "remote-communication",
      question: "Convert these direct commands into polite remote team communication:",
      options: [
        "Could you + verb, Would you be able to + verb, I'll let you know when",
        "Do it now, Handle this immediately, Start working on it soon",
        "I'm busy, Too much work, Cannot do it right now",
        "Not my responsibility, Ask someone else, Someone else should do it"
      ],
      answer: "Could you + verb, Would you be able to + verb, I'll let you know when"
    }
  },
  vocabulary: [
    {
      item: "delegation",
      explanation: "Assigning tasks or responsibilities to others.",
      example: "Clear delegation of tasks helps remote teams stay organized.",
      pronunciation: "/ˌdɛlɪˈɡeɪʃən/"
    },
    {
      item: "asynchronous",
      explanation: "Processes not happening simultaneously; communication delayed in time.",
      example: "Asynchronous communication allows global teams to collaborate effectively.",
      pronunciation: "/eɪˈsɪŋkrənəs/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Remote Team Communication Patterns",
    chunks: [
      {
        chunk: "[Could you/Would you] be able to [handle/review/look into] ___?",
        usage: "Polite task inquiries in remote work environments"
      },
      {
        chunk: "[I'm/He's/She's] going to [handle/finish/work on] ___",
        usage: "Clear task ownership and commitment announcements"
      },
      {
        chunk: "I'll [update/share/follow up] when [it's done/I have more info]",
        usage: "Asynchronous communication promises"
      }
    ]
  },
  scenario: "Managing project tasks and communication in a fully remote development team.",
  speaking: "Could you handle the user testing by tomorrow? I'll finish the integration today and then we can sync tomorrow morning. The design team will probably need to review it first though.",
  speakingPracticeMode: "coordination",
  readingActivity: {
    title: "Reading: Effective Remote Team Communication",
    text: "Successful remote teams rely on clear async communication and proper task delegation. Instead of interrupting colleagues immediately, team members ask 'Could you handle this issue?' and provide context. This approach respects different time zones and work patterns while ensuring smooth collaboration. Well-structured delegation includes clear ownership, deadlines, and follow-up plans.",
    comprehensionQuestions: [
      {
        question: "What is the advantage of asynchronous communication in remote teams?",
        answer: "It respects different time zones and work patterns."
      },
      {
        question: "What should good task delegation include?",
        answer: "Clear ownership, deadlines, and follow-up plans."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Remote Sprint Planning",
    transcript: "Alex, could you handle the API documentation this sprint? Maria will take ownership of the authentication module. I'll work on the payment integration and should have a draft ready by Wednesday. Let's sync on Friday to check progress - I might need some help with the error handling.",
    comprehensionQuestions: [
      {
        question: "What task is assigned to Alex?",
        answer: "The API documentation."
      },
      {
        question: "When is the team planning to sync for progress check?",
        answer: "On Friday."
      },
      {
        question: "What help does the speaker mention needing?",
        answer: "Help with the error handling."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Remote Work Terms",
    explanation: "Master pronunciation of terms essential for remote team coordination and asynchronous workflows.",
    examples: [
      {
        term: "delegation",
        phonetic: "/ˌdɛlɪˈɡeɪʃən/",
        tip: "Four syllables, stress on middle syllable. The 'g' is soft."
      },
      {
        term: "asynchronous",
        phonetic: "/eɪˈsɪŋkrənəs/",
        tip: "Four syllables, primary stress on third. Common shorthand 'async' sounds like 'ay-sync'."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "British English (Corporate)",
      speakerBio: "James, Product Manager from London",
      audioSrc: "",
      transcript: "Alex, I'm going to handle the stakeholder presentation. Could you be available for a quick sync tomorrow morning GMT? I'll share the slides beforehand so you can review them asynchronously. Does that work for you?"
    }
  ],
  rolePlay: {
    title: "Remote Project Coordination",
    objective: "Coordinate tasks and deadlines in a distributed team using appropriate delegation language and async communication structures.",
    aiPersona: "Scrum Master facilitating remote team communication",
    initialMessage: "That's a great demonstration everyone. Now we need to distribute the remaining sprint tasks. Can someone volunteer for the API refactoring?"
  }
};
  }
