import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson01: Lesson = {
  id: "db1",
  title: "Bug Discovery & Reporting",
  level: Difficulty.A1,
  description: "Learn to identify and describe software bugs using past tense forms to report what happened and when issues occurred.",
  didYouKnow: "The term 'debugging' was popularized in 1947 by Admiral Grace Hopper when she found a moth trapped between relays in the Harvard Mark II computer - the first literal 'bug' in computing history. Today, debugging consumes 35-70% of development time, making it one of the most critical skills for developers.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Discovering and reporting a bug in a web application, describing what happened and when using past tense forms.",
  speaking: "I clicked the login button and the page froze completely. An error message appeared saying 'Connection timeout occurred'. The crash happened when I tried to submit the form with empty fields.",
  speakingPracticeMode: "conversation",

  readingActivity: {title: "Reading: Bug Report Examples",
    text: "During my testing today, I discovered several issues. When I clicked the 'Save Draft' button, the form disappeared completely. The error occurred at 3:45 PM on my local development environment. I tried to reproduce the issue with the staging server, but it worked fine there. A database timeout message appeared in the console logs. The problem happened when I submitted a form with special characters in the title field.",
    comprehensionQuestions: [
      {
        question: "What happened when the user clicked 'Save Draft'?",
        answer: "The form disappeared completely."
      },
      {
        question: "What time did the error occur?",
        answer: "3:45 PM."
      },
      {
        question: "What should the user try next?",
        answer: "Reproduce the issue with the staging server."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Developer Bug Report",
    transcript: "Okay team, I found a critical bug in the checkout process. When I clicked 'Complete Purchase', the app crashed and showed 'Internal Server Error'. The crash occurred every time I used a credit card ending in 4444. I tried the same steps with different cards and it worked fine, so it's card-specific. The error appeared immediately after submission, before any confirmation. I'll add this to the bug tracker with full reproduction steps.",
    comprehensionQuestions: [
      {
        question: "What happened when the user clicked 'Complete Purchase'?",
        answer: "The app crashed and showed 'Internal Server Error'."
      },
      {
        question: "Which cards failed?",
        answer: "Cards ending in 4444."
      },
      {
        question: "What solution will the user implement?",
        answer: "Add this to the bug tracker with full reproduction steps."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Bug-Related Terms",
    explanation: "Master the pronunciation of common terms used when describing and reporting software bugs.",
    examples: [
      {
        term: "occurred",
        phonetic: "/əˈkɜrd/",
        tip: "Three syllables: 'uh-kurred'. Stress on second syllable. Don't pronounce it like 'occur red'. Used when saying when something happened."
      },
      {
        term: "reproduce",
        phonetic: "/ˌriprəˈdus/",
        tip: "Three syllables: 'ree-pro-duce'. Stress on third syllable. Important for bug reports - means to make the problem happen again."
      },
      {
        term: "disappeared",
        phonetic: "/ˌdɪsəˈpɪrd/",
        tip: "Four syllables: 'dis-uh-peered'. Stress on third syllable. Used when UI elements vanish suddenly."
      },
      {
        term: "crashed",
        phonetic: "/kræʃt/",
        tip: "One syllable, past tense form. Add 't' sound. Common when apps stop working completely."
      },
      {
        term: "happened",
        phonetic: "/ˈhæpənd/",
        tip: "Two syllables: 'hap-end'. Second syllable very short. Common question word in debugging."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "British English (UK)",
      speakerBio: "Marcus, QA Analyst from Manchester",
      audioSrc: "",
      transcript: "A critical bug occurred in the booking system. When I clicked 'Confirm Reservation', the page froze completely. An error message appeared: 'Database Connection Failed'. The issue happened consistently when submitting forms with special characters in the address field. I tried with different browsers but the problem persisted."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Jenny, Frontend Developer from Sydney",
      audioSrc: "",
      transcript: "G'day team! Dangerous bug in the user profile section. I clicked 'Save Changes' and everything disappeared. The crash occurred when I uploaded a photo over 2MB. Error message said 'Upload failed unexpectedly'. I reproduced it three times - same result every go."
    }
  ]],
  rolePlay: {
    title: "Bug Discovery Meeting",
    objective: "Report a software bug you discovered, describing what happened, when it occurred, and steps to reproduce it using past tense forms.",
    aiPersona: "Developer receiving the bug report",
    initialMessage: "Hi there! I noticed something strange with the registration form. Can you walk me through what you observed? What steps did you take before the problem occurred?"
  }
};
