import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson04: Lesson = {
  id: "ffc4",
  title: "Constructive Feedback & Reviews",
  level: Difficulty.B1,
  description: "Master softening language and giving recommendations in technical reviews to maintain positive team dynamics while improving code quality.",
  didYouKnow: "Teams with constructive feedback cultures are 50% more likely to deliver high-quality code. However, 70% of developers report negative feedback experiences.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Writing code review comments that maintain positive team relationships.",
  speaking: "Thank you for submitting this PR! You might consider adding some input validation to prevent edge case errors. It would also be helpful if we added a brief test case to demonstrate the functionality.",
  speakingPracticeMode: "feedback",

  readingActivity: {
    title: "Reading: Principles of Constructive Feedback",
    text: "Effective feedback in technical environments focuses on solutions rather than problems. Instead of 'This code is bad,' use 'Have you considered this alternative approach?' This creates a collaborative culture where team members feel supported and encouraged to improve. Constructive feedback helps teams deliver better software while maintaining positive working relationships.",
    comprehensionQuestions: [
      {
        question: "What is the key difference between constructive feedback and other feedback?",
        answer: "It focuses on solutions rather than problems."
      },
      {
        question: "Why is constructive feedback important for technical teams?",
        answer: "It helps deliver better software while maintaining positive relationships."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Constructive Code Review Session",
    transcript: "Great work on this feature! You might consider extracting this logic into a separate component to improve reusability. Have you thought about adding some type checking here? It would make the code more robust overall. Overall, excellent contribution!",
    comprehensionQuestions: [
      {
        question: "What specific suggestion is made about code organization?",
        answer: "Extracting logic into a separate component for reusability."
      },
      {
        question: "What alternative does the reviewer suggest?",
        answer: "Adding some type checking."
      },
      {
        question: "What is the overall tone of the feedback?",
        answer: "Positive and supportive."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Review and Feedback Terms",
    explanation: "Master pronunciation of terms commonly used in constructive feedback and code reviews.",
    examples: [
      {
        term: "constructive",
        phonetic: "/kənˈstrʌktɪv/",
        tip: "Three syllables, stress on second. The 'c' is soft like 'c' in 'cent'."
      },
      {
        term: "recommendation",
        phonetic: "/ˌrɛkəmənˈdeɪʃən/",
        tip: "Four syllables, stress on middle syllable. Common to pronounce as 'reccommendation'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Polite)",
      speakerBio: "Jordan, Sr. Developer from Toronto",
      audioSrc: "",
      transcript: "Excellent PR! You might want to consider adding a README update to document this change. Have you thought about including some integration tests? Overall, I really appreciate the thoroughness of your implementation!"
    }
  ],

  rolePlay: {
    title: "Code Review Feedback",
    objective: "Use softening language to provide constructive feedback on a team member's code submission.",
    aiPersona: "Senior developer reviewing junior developer's pull request",
    initialMessage: "I've reviewed your pull request and have some suggestions that could make it even better. Where would you like me to start?"
  }
};
