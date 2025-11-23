import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "ffc1",
  title: "Giving Feedback",
  level: Difficulty.B1,
  description: "Learn to give constructive feedback using first conditional for suggestions and improvements in code reviews and team discussions.",
  didYouKnow: "76% of developers consider feedback crucial for growth, but only 29% feel comfortable receiving it. Learning to give feedback professionally is essential for technical careers.",

  grammar: {
    title: "First Conditional for Professional Suggestions",
    explanation: "**If Condition + Will Result**: 'If we refactor this code, it will be more maintainable'\n**Hypothetical situations**: Discuss potential improvements, bug fixes, and optimizations\n**Future consequences**: Connect current issues with future benefits",
    usage: "Code Reviews & Technical Feedback:\n\n📝 **Suggestions**: 'If we use TypeScript, the code will be more type-safe'\n🔧 **Improvements**: 'If we add error handling, the app will be more robust'\n🚀 **Optimization**: 'If we implement caching, performance will improve significantly'",
    rules: [
      {
        from: "Present condition",
        to: "If + present simple (If code is complex, it will be harder to maintain)"
      },
      {
        from: "Future result",
        to: "Will + infinitive (If we refactor, it will improve readability)"
      },
      {
        from: "Alternatives",
        to: "Unless (Unless we test thoroughly, we'll have bugs)"
      }
    ],
    examples: [
      "**If we use meaningful variable names, the code will be easier to understand.**",
      "**If we add unit tests, the application will be more reliable.**",
      "**If developers follow coding standards, collaboration will improve.**",
      "**If we implement error boundaries, the app won't crash on user errors.**",
      "**If we optimize database queries, page load times will decrease by 50%.**",
      "**If we add logging, debugging will be easier when issues occur.**"
    ],
    commonMistakes: [
      {
        incorrect: "If we refactor this, it improves performance.",
        correct: "If we refactor this, it will improve performance.",
        explanation: "Use 'will' for future consequences in conditional sentences."
      },
      {
        incorrect: "If developers write good code, it will be easier.",
        correct: "If developers write good code, maintenance will be easier.",
        explanation: "Connect the condition to a specific future benefit."
      },
      {
        incorrect: "If we test properly, bugs don't happen.",
        correct: "If we test properly, we won't have unexpected bugs.",
        explanation: "Use negative forms correctly in the result clause."
      }
    ],
    interactiveExercise: {
      type: "complete-sentence",
      question: "Create a constructive feedback statement: 'If developers (follow) documentation standards, onboarding new team members (will) be easier.'",
      options: [
        "follow, will be",
        "follows, will be",
        "followed, were",
        "following, is"
      ],
      answer: "follow, will be"
    }
  },
  vocabulary: [
    {
      item: "refactor",
      explanation: "Restructure code without changing functionality.",
      example: "If we refactor this component, it will be more modular.",
      pronunciation: "/riːˈfæktər/"
    },
    {
      item: "maintainable",
      explanation: "Easy to maintain and modify.",
      example: "If the code is maintainable, future changes will be less risky.",
      pronunciation: "/meɪnˈteɪnəbəl/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Constructive Feedback Patterns",
    chunks: [
      {
        chunk: "If we [implement/improve/add] __, [it/the code/performance] will [be/do] __",
        usage: "Making technical suggestions professionally"
      },
      {
        chunk: "[This approach/The current solution] could [be/become] [more/better/more efficient] if __",
        usage: "Offering alternatives without direct criticism"
      }
    ]
  },
  scenario: "Giving feedback during code review meetings.",
  speaking: "If we add proper error handling to this function, it will prevent unexpected crashes. The code will be more robust and handle edge cases gracefully.",
  speakingPracticeMode: "feedback",
  readingActivity: {
    title: "Reading: Effective Code Review Comments",
    text: "Providing constructive feedback is essential in software development. When reviewers suggest improvements, they often use conditional language to show potential benefits without sounding critical. 'If we add test coverage here, future changes will be safer.' This approach focuses on positive outcomes rather than pointing out flaws.",
    comprehensionQuestions: [
      {
        question: "Why is conditional language useful in code review feedback?",
        answer: "It shows potential benefits without sounding critical."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Code Review Discussion",
    transcript: "I see this function is quite long. If we break it down into smaller functions, it will be easier to test and maintain. Each function should have a single responsibility, which will make the code more modular overall.",
    comprehensionQuestions: [
      {
        question: "What improvement is suggested in the feedback?",
        answer: "Breaking down long functions into smaller ones."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Technical Feedback Terms",
    explanation: "Master pronunciation of commonly used terms in code review and feedback sessions.",
    examples: [
      {
        term: "refactor",
        phonetic: "/riːˈfæktər/",
        tip: "Three syllables, stress on first syllable. 'Re-fact-or'."
      },
      {
        term: "maintainable",
        phonetic: "/meɪnˈteɪnəbəl/",
        tip: "Four syllables, stress on middle syllable."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (Technical)",
      speakerBio: "Sarah, Senior Developer from San Francisco",
      audioSrc: "",
      transcript: "If we implement proper input validation on this form, it won't throw errors when users enter unexpected data. The user experience will be much smoother and we won't get support tickets from confused customers."
    }
  ],
  rolePlay: {
    title: "Code Review Feedback Session",
    objective: "Practice giving constructive feedback using first conditional for technical improvements.",
    aiPersona: "Junior Developer receiving feedback",
    initialMessage: "Could you review my pull request? I implemented the new feature but want to make sure it's ready for production."
  }
};
