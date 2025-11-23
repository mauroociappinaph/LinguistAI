import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson02: Lesson = {
  id: "com2",
  title: "Meeting Communication & Presentations",
  level: Difficulty.A1,
  description: "Learn to lead meetings, present ideas, and handle Q&A sessions using formal presentation language and interactive communication skills.",
  didYouKnow: "Effective meetings save companies an average of $250 per person annually by reducing unnecessary follow-ups and decision delays. Well-structured presentations increase audience retention by 30%.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Leading a sprint review meeting and presenting project updates to stakeholders.",
  speaking: "Good morning everyone. The objective of today's sprint review is to demonstrate the completed features. We're currently implementing a new caching layer that is improving response times by 40%. The user authentication is working perfectly, and we're testing edge cases. Could anyone clarify the requirements for the mobile version? We'll discuss the next sprint objectives next.",
  speakingPracticeMode: "presentation",

  readingActivity: {
    title: "Reading: Effective Meeting Structure",
    text: "Successful meetings follow structured formats. Begin with clear objectives, review previous action items, cover main topics systematically, and end with agreed next steps. Presentations should use visuals, speak to both technical and non-technical audiences, anticipate questions, and always ask for feedback. Meeting effectiveness depends on active listening, note-taking, and ensuring everyone contributes. Document decisions, action items, and owners immediately to ensure follow-through.",
    comprehensionQuestions: [
      {
        question: "What should you begin meetings with?",
        answer: "Clear objectives and review of previous action items."
      },
      {
        question: "How should presentations address different audiences?",
        answer: "Using visuals and speaking to both technical and non-technical people."
      },
      {
        question: "What should be documented immediately after meetings?",
        answer: "Decisions, action items, and owners."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Sprint Review Presentation",
    transcript: "Hi team, welcome to our sprint 7 review. The objective is to showcase what we've completed and discuss next priorities. We're currently developing the payment integration, and initial results show it's processing transactions successfully with proper error handling. However, we're encountering edge cases with international payments. Could you provide more context on the localization requirements? We're also implementing automated testing that is catching 90% of regressions. Let me walk you through the demo now.",
    comprehensionQuestions: [
      {
        question: "What is the main purpose of the meeting?",
        answer: "To showcase completed work and discuss next priorities."
      },
      {
        question: "What is the team developing currently?",
        answer: "Payment integration feature."
      },
      {
        question: "What issue is affecting internationalization?",
        answer: "Edge cases with international payments."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Meeting and Presentation Terms",
    explanation: "Master pronunciation of key terms used in meetings and presentations.",
    examples: [
      {
        term: "executable",
        phonetic: "/ɪɡˈzɛkjʊtəbəl/",
        tip: "Five syllables: 'eg-zek-yoo-ta-bel'. Stress on third syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (New York)",
      speakerBio: "Maria, Product Manager from New York",
      audioSrc: "",
      transcript: "Alright folks, let's get started. We're currently running about 85% of our planned experiments, and the results are showin' we're definitely movin' the needle on user engagement. Could anybody fill me in on why the conversion rate is tankin' on mobile? We're gonna need to address that before we roll out the new feature set. Any thoughts?"
    }
  ],

  rolePlay: {
    title: "Leading a Project Update Meeting",
    objective: "Practice leading a meeting discussion and handling questions professionally.",
    aiPersona: "Team member asking questions during presentation",
    initialMessage: "I've been following along, but could you clarify the impact on our existing API endpoints?"
  }
};
