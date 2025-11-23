import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson07: Lesson = {
  id: "eyc7",
  title: "Narrating Professional Experiences",
  level: Difficulty.B1,
  description: "Learn to share professional experiences using narrative tenses - Present Perfect for ongoing experience and Past Simple for specific events.",
  didYouKnow: "Engineers spend 40% of work time communicating about their work. Storytelling skills help developers advance their careers and influence technical decisions.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Sharing professional background during interviews or team introductions.",
  speaking: "I have worked in software development for 6 years. I led the transition to microservices at my previous company and have implemented continuous integration pipelines at three different organizations.",
  speakingPracticeMode: "narrative",

  readingActivity: {
    title: "Reading: Professional Experience Narration",
    text: "Effective communication about work experience requires mixing past simple for specific events with present perfect for ongoing capabilities. 'I developed a mobile app in 2021 and have led five successful deployments.' This combination allows stakeholders to understand both historical achievements and current relevance.",
    comprehensionQuestions: [
      {
        question: "Why should developers mix tense forms in experience narration?",
        answer: "To show both historical achievements and current relevance."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Professional Background Discussion",
    transcript: "I have worked in tech for eight years. I started with Java development and have expanded into full-stack roles. I led the digital transformation project last year and have modernized three legacy apps since joining the company.",
    comprehensionQuestions: [
      {
        question: "How did the speaker start their career?",
        answer: "With Java development."
      },
      {
        question: "What leadership experience do they have?",
        answer: "Led the digital transformation project."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Terms",
    explanation: "Master pronunciation of terms commonly used in professional experience narration.",
    examples: [
      {
        term: "experience",
        phonetic: "/ɪkˈspɪriəns/",
        tip: "Four syllables, stress on middle syllable."
      },
      {
        term: "expertise",
        phonetic: "/ˌɛkspɜrˈtiːz/",
        tip: "Three syllables, stress on middle."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Irish English (Professional)",
      speakerBio: "Liam, Senior Developer from Dublin",
      audioSrc: "",
      transcript: "I have worked in development for nearly a decade now. I specialize in cloud infrastructure and have implemented scalable solutions across multiple enterprises. Glad to be part of this innovative team."
    }
  ],

  rolePlay: {
    title: "Professional Background Interview",
    objective: "Use narrative tenses to share relevant professional experience and expertise with an interviewer.",
    aiPersona: "Hiring Manager",
    initialMessage: "Can you walk me through your professional background and what experience you bring to this role?"
  }
};
