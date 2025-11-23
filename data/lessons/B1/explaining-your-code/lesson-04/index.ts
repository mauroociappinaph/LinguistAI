import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson04: Lesson = {
  id: "eyc4",
  title: "Legacy Systems & Deprecation",
  level: Difficulty.B1,
  description: "Learn to explain future developments using will/going to forms when discussing legacy systems, deprecation, and migration strategies.",
  didYouKnow: "65% of enterprise applications are legacy systems. Using future forms clearly communicates when and how old technologies will be replaced, helping teams plan transitions smoothly.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining technology migration and deprecation plans to development team and stakeholders.",
  speaking: "The legacy logging system will be deprecated by next quarter. We're going to implement centralized logging instead, which will improve monitoring capabilities.",
  speakingPracticeMode: "planning",

  readingActivity: {
    title: "Reading: Technical Migration Planning",
    text: "Large software projects often require careful migration planning. Legacy systems that have served well for years will be deprecated to make way for more modern, scalable solutions. Teams must communicate these changes clearly, providing detailed timelines and migration paths.\n\nUsing future tenses helps stakeholders understand when changes will occur and what new systems will be implemented. This transparency builds trust and allows for proper planning.",
    comprehensionQuestions: [
      {
        question: "Why is migration planning important in large software projects?",
        answer: "To make way for more modern, scalable solutions."
      },
      {
        question: "What does using future tenses help stakeholders understand?",
        answer: "When changes will occur and what new systems will be implemented."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Deprecation Announcement",
    transcript: "Good morning team. We're announcing that our legacy authentication system will be deprecated by the end of Q3. We'll be migrating to a more secure OAuth 2.0 implementation. The migration will be phased, with the new system going live in Q4. Training sessions are scheduled for next month.",
    comprehensionQuestions: [
      {
        question: "When will the legacy authentication system be deprecated?",
        answer: "By the end of Q3."
      },
      {
        question: "What will replace the legacy system?",
        answer: "OAuth 2.0 implementation."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Future Tense Technical Terms",
    explanation: "Master pronunciation of technical terms commonly used with future tenses in planning, migration, and deprecation discussions.",
    examples: [
      {
        term: "migration",
        phonetic: "/maɪˈɡreɪʃən/",
        tip: "Four syllables, stress on second. Sounds like 'my-gray-shun'."
      },
      {
        term: "deprecation",
        phonetic: "/ˌdɛprəˈkeɪʃən/",
        tip: "Four syllables, stress on third. Commonly mispronounced in technical contexts."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Australian English (Technical)",
      speakerBio: "Sarah, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Fair dinkum, that legacy database is getting a bit long in the tooth. We'll be deprecating it by the end of the year and migrating everything to the new cloud-based solution. No dramas, we've got a solid transition plan."
    }
  ],

  rolePlay: {
    title: "Deprecation Planning Meeting",
    objective: "Practice explaining technology migration plans using future forms to communicate changes to a development team.",
    aiPersona: "Engineering Manager",
    initialMessage: "I've seen the migration proposal. Walk me through the timeline and what will be replaced."
  }
};
