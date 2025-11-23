import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson05: Lesson = {
  id: "com5",
  title: "Making Suggestions & Recommendations",
  level: Difficulty.A1,
  description: "Learn to provide professional feedback, make technical suggestions, and offer constructive recommendations using modals, passive voice, and connectors in a collaborative work environment.",
  didYouKnow: "Effective suggestions in technical environments use tentative language that invites discussion. The phrase 'have you considered...' opens 70% more collaboration than direct statements like 'You should do...' in code reviews.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Providing constructive feedback in a code review and suggesting technical improvements using professional, collaborative language.",
  speaking: "This authentication module should be refactored because it has too many responsibilities. We could implement the single responsibility principle since it would make testing easier. Have you considered using dependency injection? It might provide better flexibility for future changes.",
  speakingPracticeMode: "constructive",

  readingActivity: {
    title: "Reading: The Art of Technical Suggestions",
    text: "Effective technical suggestions in professional environments require careful language that focuses on improvement rather than criticism. Rather than saying 'your code is bad,' frame suggestions as 'the code could be more maintainable' or 'this approach offers better scalability.' Use inclusive language like 'we could consider' to invite collaboration. Always provide rationale for suggestions, explaining how proposed changes benefit maintainability, performance, user experience, or future development. Professional feedback strengthens team relationships while improving code quality.",
    comprehensionQuestions: [
      {
        question: "Why is careful language important in technical suggestions?",
        answer: "It focuses on improvement rather than criticism."
      },
      {
        question: "What type of language invites collaboration?",
        answer: "Inclusive language like 'we could consider'."
      },
      {
        question: "What should you always provide with suggestions?",
        answer: "Rationale explaining the benefits of changes."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Code Review Feedback",
    transcript: "I appreciate you sharing your implementation approach. This logic should definitely be extracted into a separate service because it's becoming quite complex. We could implement the strategy pattern here since it would make testing much easier. Have you considered using async/await instead? It might provide better error handling for database timeouts.",
    comprehensionQuestions: [
      {
        question: "What should be extracted into a separate service?",
        answer: "The complex logic."
      },
      {
        question: "What pattern is suggested for easier testing?",
        answer: "The strategy pattern."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Suggestion Terms",
    explanation: "Master pronunciation of key terms used when making professional suggestions and recommendations.",
    examples: [
      {
        term: "consider",
        phonetic: "/kənˈsɪdər/",
        tip: "Three syllables: 'con-sid-er'. Stress on second syllable. Means to think about or evaluate."
      },
      {
        term: "implement",
        phonetic: "/ˈɪmplɪmɛnt/",
        tip: "Three syllables: 'im-ple-ment'. Stress on first syllable. Means to put into practice."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Irish English (Dublin)",
      speakerBio: "Liam, Senior Engineer from Dublin",
      audioSrc: "",
      transcript: "This architecture should be simplified before we scale further. We could implement microservices since it would make deployment much easier. Have you considered containerization? It might solve all our environment issues in one go. Fair play to you for thinking ahead though!"
    }
  ],

  rolePlay: {
    title: "Providing Code Review Feedback",
    objective: "Practice giving constructive suggestions during code reviews using modal verbs and professional language.",
    aiPersona: "Junior developer receiving feedback",
    initialMessage: "Thanks for reviewing my code. What do you think of the approach I took?"
  }
};
