import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson01: Lesson = {
  id: "com1",
  title: "Professional Emails & Written Communication",
  level: Difficulty.A1,
  description: "Learn to write professional emails, Slack messages, and documentation using formal language and appropriate structure for tech workplace communication.",
  didYouKnow: "Developers spend 25% of their time communicating in writing - effective written communication reduces misunderstanding by 90% and speeds up project delivery by 20%.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Writing a professional email requesting code review for your new feature implementation.",
  speaking: "Dear team, I've completed the user registration feature. Would you be able to review the code and provide feedback? The implementation includes form validation, password encryption, and error handling. Could you schedule a code review meeting sometime this week?",
  speakingPracticeMode: "documentation",

  readingActivity: {
    title: "Reading: Professional Email Structure in Tech Companies",
    text: "Effective professional communication in tech workplaces follows specific patterns. Start with clear subject lines, address recipients appropriately, provide context before making requests, and close professionally. Always include enough information for recipients to understand the situation without additional email exchanges. Use standard abbreviations but explain them if communicating with non-technical stakeholders. Structure your message with bullet points or numbered lists when appropriate to improve readability.",
    comprehensionQuestions: [
      {
        question: "What should you include in a subject line?",
        answer: "Clear and descriptive information about the message content."
      },
      {
        question: "Why provide context before making requests?",
        answer: "So recipients understand the situation without additional questions."
      },
      {
        question: "How can you improve readability in emails?",
        answer: "Use bullet points, numbered lists, or clear formatting."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Professional Meeting Communication",
    transcript: "Good morning team. I've completed the user authentication module and would like to schedule a code review. The implementation includes OAuth integration, password reset functionality, and security middleware. Could you let me know your availability for a review session? I estimate it will take about 45 minutes. Also, I've documented the API endpoints - would you be able to review the documentation as well?",
    comprehensionQuestions: [
      {
        question: "What components were included in the implementation?",
        answer: "OAuth integration, password reset functionality, and security middleware."
      },
      {
        question: "What is the estimated duration of the review?",
        answer: "About 45 minutes."
      },
      {
        question: "What additional item is requested for review?",
        answer: "The API endpoints documentation."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Communication Terms",
    explanation: "Master pronunciation of key terms used in professional workplace communication.",
    examples: [
      {
        term: "authentication",
        phonetic: "/ɔˌθɛntɪˈkeɪʃən/",
        tip: "Five syllables: 'au-then-ti-kay-shun'. Stress on fourth syllable."
      },
      {
        term: "implementation",
        phonetic: "/ˌɪmplɪmɛnˈteɪʃən/",
        tip: "Five syllables: 'im-ple-men-tay-shun'. Stress on fourth syllable."
      },
      {
        term: "documentation",
        phonetic: "/ˌdɑkjʊmɛnˈteɪʃən/",
        tip: "Five syllables: 'doc-u-men-tay-shun'. Stress on fourth syllable."
      },
      {
        term: "availability",
        phonetic: "/əˌveɪləˈbɪlɪti/",
        tip: "Six syllables: 'a-vay-la-bil-i-ty'. Stress on fourth syllable."
      },
      {
        term: "integration",
        phonetic: "/ˌɪntɪˈɡreɪʃən/",
        tip: "Five syllables: 'in-ti-gray-shun'. Stress on fourth syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Silicon Valley)",
      speakerBio: "Jordan, Senior Developer from San Francisco",
      audioSrc: "",
      transcript: "Hey folks, I've got the new API integration working. Basically, it sends HTTP requests to the external service and handles all error cases. Could you guys take a look and give me some feedback? I think it's ready for production, but I'd love a second set of eyes on it. Let me know when works best for you."
    },
    {
      accent: "British English (London)",
      speakerBio: "Priya, Product Owner from London",
      audioSrc: "",
      transcript: "Hello everyone, the latest sprint has been completed and deployed successfully. The user login time has improved by 40%. Could you please update the documentation to reflect these changes? Also, the stakeholder presentation needs finalising - would you be able to review it before tomorrow's demo? Many thanks."
    }
  ],

  rolePlay: {
    title: "Requesting Feedback on Work",
    objective: "Practice politely requesting feedback and updates in professional communication.",
    aiPersona: "Senior colleague providing feedback",
    initialMessage: "Sure, I'd be happy to help with this. Can you tell me a bit about what you've implemented so far?"
  }
};
