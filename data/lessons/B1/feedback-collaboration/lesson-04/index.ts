import { Lesson, Difficulty } from '../../../../../types';

export const lesson04: Lesson = {
  id: "ffc4",
  title: "Constructive Feedback & Reviews",
  level: Difficulty.B1,
  description: "Master softening language and giving recommendations in technical reviews to maintain positive team dynamics while improving code quality.",
  didYouKnow: "Teams with constructive feedback cultures are 50% more likely to deliver high-quality code. However, 70% of developers report negative feedback experiences.",

  grammar: {
    title: "Softening Language & Professional Recommendations",
    explanation: "**Softening language**: 'Perhaps you could...', 'You might consider...', 'It might be worth...'\n**Recommendations**: 'I suggest...', 'It would help if...', 'Have you thought about...'\n**Constructive criticism**: 'One improvement could be...', 'The code would benefit from...'",

    usage: "Technical Reviews & Feedback:\n\n💭 **Suggestions**: 'Perhaps you could add more descriptive variable names?'\n🔄 **Improvements**: 'The code might benefit from input validation'\n✨ **Alternatives**: 'Have you considered using dependency injection here?'\n📚 **Education**: 'It would help if we documented this API endpoint'",
    rules: [
      {
        from: "Modal verbs for softening",
        to: "Could/would/might/may + base verb (You could add error handling)"
      },
      {
        from: "Polite questions",
        to: "Have you considered...? What do you think about...? (Have you considered using a different algorithm?)"
      },
      {
        from: "Conditional improvements",
        to: "Would/could/might + benefit/help/improve (The code would benefit from more comments)"
      }
    ],
    examples: [
      "**You could add some unit tests to ensure the function works correctly.**",
      "**Have you considered adding error handling for network timeouts?**",
      "**The code might benefit from extracting this logic into a separate utility function.**",
      "**It would be helpful if the documentation included usage examples.**",
      "**Perhaps you could refactor this to use async/await instead of promises.**",
      "**What do you think about adding some input validation here?**"
    ],
    commonMistakes: [
      {
        incorrect: "Fix this.",
        correct: "You might want to fix this small issue.",
        explanation: "Direct commands can be perceived as harsh; use softening language in reviews."
      },
      {
        incorrect: "That's wrong.",
        correct: "There might be an alternative approach we could consider.",
        explanation: "Addressing problems constructively helps team relationships and solution quality."
      },
      {
        incorrect: "You should do X.",
        correct: "Have you thought about trying approach X?",
        explanation: "Questions invite discussion and demonstrate collaborative spirit."
      }
    ],
    interactiveExercise: {
      type: "soften-feedback",
      question: "Convert these direct statements into constructive feedback using softening language:",
      options: [
        "You could/You might/Have you considered",
        "Fix it, It's bad, That won't work",
        "Definitely should, Must be changed, Absolute requirement",
        "Incorrect approach, Bad decision, Wrong choice"
      ],
      answer: "You could/You might/Have you considered"
    }
  },
  vocabulary: [
    {
      item: "constructive",
      explanation: "Providing helpful feedback that leads to improvement.",
      example: "I always try to give constructive feedback in code reviews.",
      pronunciation: "/kənˈstrʌktɪv/"
    },
    {
      item: "refactor",
      explanation: "Restructure existing code without changing its external behavior.",
      example: "I suggest we refactor this function to improve readability.",
      pronunciation: "/ˈriːfæktər/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Constructive Review Patterns",
    chunks: [
      {
        chunk: "[You/We] might consider/try [using/adding/implementing] ___",
        usage: "Suggesting improvements politely in code reviews"
      },
      {
        chunk: "It would [be helpful/better inst/make sense] if ___",
        usage: "Offering recommendations without direct criticism"
      },
      {
        chunk: "Have you [thought about/considered/tried] ___?",
        usage: "Inviting discussion on alternative approaches"
      }
    ]
  },
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
