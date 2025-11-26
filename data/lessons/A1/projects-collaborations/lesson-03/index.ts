import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson03: Lesson = {
  id: "pc3",
  title: "Team Meetings & Presentations",
  level: Difficulty.A1,
  description: "Learn to participate effectively in team meetings and deliver presentations using reporting verbs and meeting vocabulary in tech environments.",
  didYouKnow: "The average knowledge worker spends about 2 hours per day in meetings, with 25% of that time considered unproductive. Effective meetings require clear agendas, active participation, and defined outcomes. Presentation skills are crucial in tech roles, with 70% of developers expected to present their work regularly.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Participating in team meetings and delivering a sprint demo presentation using appropriate meeting language and presentation skills.",
  speaking: "Let me present the features we completed this sprint. I'd like to suggest we prioritize the user authentication first. Regarding our roadmap, I recommend implementing microservices for scalability.",
  speakingPracticeMode: "presentation",

  readingActivity: {title: "Reading: Effective Meeting Practices in Tech Teams",
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
    audioSrc: ""
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
