import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson05: Lesson = {
  id: "ffc5",
  title: "Remote & Asynchronous Workflows",
  level: Difficulty.B1,
  description: "Learn to effectively communicate and delegate tasks in remote teams and asynchronous work environments using polite requests and clear delegation structures.",
  didYouKnow: "72% of developers work remotely or asynchronously. Teams who communicate clearly asynchronously are 40% more productive and report 25% higher satisfaction.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

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
