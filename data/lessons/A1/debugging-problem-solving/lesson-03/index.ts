import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson03: Lesson = {
  id: "db3",
  title: "Explaining Issues Clearly",
  level: Difficulty.A1,
  description: "Learn to clearly explain software issues and solutions using Present Simple for general processes and Passive Voice to focus on actions and results.",
  didYouKnow: "The passive voice is used in 80% of technical documentation because it focuses on the action rather than who performs it. This makes documentation more objective and professional in technical communication.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining a technical issue and its solution to team members using clear, process-focused language.",
  speaking: "When users submit the form, the data is received by the server but it is not validated properly. The validation library returns null instead of throwing an error, so invalid data is stored in the database.",
  speakingPracticeMode: "explanation",

  readingActivity: {title: "Reading: Explaining System Behavior",
    text: "Clear explanations of system behavior use specific, action-focused language. When users log in, the authentication middleware intercepts the request and validates credentials. The password is hashed and compared with the stored hash. If credentials match, a JWT token is generated and returned. Invalid attempts are logged in the security system but user feedback is not provided. This silent failure creates confusion because users expect clear error messages when authentication fails.",
    comprehensionQuestions: [
      {
        question: "What happens when users submit login credentials?",
        answer: "The authentication middleware intercepts the request and validates credentials."
      },
      {
        question: "What happens when credentials match?",
        answer: "A JWT token is generated and returned."
      },
      {
        question: "Why are users confused about authentication failures?",
        answer: "No error messages are provided for invalid attempts."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Technical Issue Explanation",
    transcript: "Let me explain how this payment processing issue works. When customers click 'Complete Purchase', the frontend submits the order data. The backend receives the request and validates the payment information. A connection is established with the payment processor, and the transaction is authorized. However, the success response is not properly handled - it gets lost somewhere in the pipeline. Customers see a loading spinner but never get confirmation. The order is actually placed, but the UI never reflects that.",
    comprehensionQuestions: [
      {
        question: "What action triggers the payment process?",
        answer: "Clicking 'Complete Purchase'."
      },
      {
        question: "Where is the issue in the payment flow?",
        answer: "The success response is not properly handled."
      },
      {
        question: "What happens to the order even with the bug?",
        answer: "The order is actually placed."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Process Explanation Terms",
    explanation: "Master key terms used when explaining technical processes and system behaviors.",
    examples: [
      {
        term: "triggered",
        phonetic: "/ˈtrɪɡərd/",
        tip: "Two syllables: 'trig-gered'. Stress on first syllable. Means 'caused to happen'."
      },
      {
        term: "processed",
        phonetic: "/ˈprɔsɛst/",
        tip: "Two syllables: 'proc-essed'. Stress on first syllable. Means 'handled' or 'dealt with'."
      },
      {
        term: "validated",
        phonetic: "/ˈvælɪdeɪtɪd/",
        tip: "Four syllables: 'val-i-day-ted'. Stress on third syllable. Means 'checked for correctness'."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "American English (California)",
      speakerBio: "Alex, Systems Architect from Silicon Valley",
      audioSrc: "",
      transcript: "Here's what happens when the load balancer receives traffic. The request is first authenticated, then routed to an available server. The server processes the request and returns a response. But sometimes, the response gets cached incorrectly and stale data is served. That's why users see outdated information."
    },
    {
      accent: "British English (Manchester)",
      speakerBio: "Sarah, Backend Developer from Manchester",
      audioSrc: "",
      transcript: "Let me explain the database issue. When user data is submitted, it passes through the validation middleware. The data is then sanitized and stored in the database. However, the sanitization process strips out certain characters that should be preserved. That's why unusual names get corrupted during the saving process."
    }
  ]],
  rolePlay: {
    title: "Technical Issue Explanation",
    objective: "Clearly explain how a technical issue occurs and its effects using present tenses and passive voice.",
    aiPersona: "QA tester experiencing the bug",
    initialMessage: "I keep running into this strange behavior. Can you explain what's supposed to happen step by step?"
  }
};
