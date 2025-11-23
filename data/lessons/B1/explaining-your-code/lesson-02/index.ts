import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson02: Lesson = {
  id: "eyc2",
  title: "Presenting Your Work",
  level: Difficulty.B1,
  description: "Use present perfect to showcase completed work, recent achievements, and current relevance in professional presentations.",
  didYouKnow: "Present perfect appears in 65% of technical presentations because it bridges past achievements with current expertise. Phrases like 'I have implemented', 'We have developed', and 'The team has delivered' demonstrate track record and current capability.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Delivering a project status presentation highlighting recent achievements and progress to management.",
  speaking: "We have delivered the new user dashboard according to schedule. The team has implemented responsive design and improved loading times by 60%. I have personally led the frontend development and have worked with our design system for 2 years.",
  speakingPracticeMode: "presentation",

  readingActivity: {
    title: "Reading: Present Perfect in Technical Presentations",
    text: "Present perfect tense is essential in technical presentations because it connects past work with current relevance. Developers use it to showcase experience and achievements that demonstrate current expertise. For example, 'I have developed scalable systems' shows both past experience and current capability.\n\nThis tense creates credibility by linking historical performance with current knowledge. Stakeholders want to know not only what you've done, but how that experience makes you qualified for future challenges.",
    comprehensionQuestions: [
      {
        question: "Why is present perfect essential in technical presentations?",
        answer: "It connects past work with current relevance."
      },
      {
        question: "What does 'I have developed scalable systems' demonstrate?",
        answer: "Both past experience and current capability."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Project Achievement Presentation",
    transcript: "I have successfully led three major refactoring projects this year. The team has optimized database queries resulting in 40% performance improvement. We have implemented automated testing across all services, and I have mentored junior developers on best practices. This experience has prepared us well for the next phase.",
    comprehensionQuestions: [
      {
        question: "What percentage of performance improvement was achieved?",
        answer: "40% performance improvement."
      },
      {
        question: "What was implemented across all services?",
        answer: "Automated testing."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Achievement Words",
    explanation: "Master pronunciation of common achievement and result words used in professional presentations.",
    examples: [
      {
        term: "achieved",
        phonetic: "/əˈtʃɪvd/",
        tip: "Three syllables, stress on middle syllable. Clearly pronounce the 'ch' sound."
      },
      {
        term: "implemented",
        phonetic: "/ˈɪmplɪˌmɛntɪd/",
        tip: "Four syllables, reduce the 'i' sounds to make them quicker."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (Professional)",
      speakerBio: "Mark, Project Manager from Manchester",
      audioSrc: "",
      transcript: "We have delivered the project ahead of schedule and have implemented all the core features successfully. The team has exceeded expectations on performance metrics, and I have personally led the quality assurance process. We're well positioned for the next development cycle."
    }
  ],

  rolePlay: {
    title: "Achievement Presentation",
    objective: "Practice presenting recent achievements using present perfect tense to showcase technical expertise and results to management.",
    aiPersona: "Senior Manager reviewing team performance",
    initialMessage: "Please walk me through what your team has accomplished this quarter."
  }
};
