import { Lesson, Difficulty } from '../../../../../types';

export const lesson03: Lesson = {
  id: "com3",
  title: "Code Comments & Documentation",
  level: Difficulty.A1,
  description: "Learn to write clear code comments and technical documentation using imperative instruction and present simple for explaining code functionality.",
  didYouKnow: "Well-documented code reduces debugging time by 50% and new developer onboarding by 35%. Good documentation increases code maintainability and reduces technical debt.",

  grammar: {
    title: "Imperatives for Instructions + Present Simple for Explanations",
    explanation:
      "**Imperatives for Code Instructions**: Direct commands - 'Import the library', 'Initialize the variable'\n**Present Simple for Code Explanations**: Describes what code does - 'The function calculates totals', 'Method handles errors'\n**Passive Voice for Technical Writing**: Focuses on actions - 'Data is validated', 'Results are returned'",
    usage: "Code documentation and comments:\n\n📝 **Instructions**: 'Create a config file', 'Install dependencies'\n💭 **Comments**: 'Function validates user input'\n📖 **Documentation**: 'API returns user data in JSON format'",
    rules: [
      {
        from: "Setup instructions",
        to: "Imperative verb (Install, Configure, Create)"
      },
      {
        from: "Code explanations",
        to: "Subject + verb (Function + returns, Method + processes)"
      },
      {
        from: "Technical descriptions",
        to: "Passive structures (Data + is processed, Results + are displayed)"
      }
    ],
    examples: [
      "**Install** the required dependencies by running `npm install`.",
      "The function **calculates** the total price and **returns** the result.",
      "**Configure** the database connection with the following parameters.",
      "Method **validates** user input and **handles** error cases.",
      "Data **is processed** asynchronously and **results are cached**."
    ],
    commonMistakes: [
      {
        incorrect: "function calculate total",
        correct: "Calculates the total price using provided items",
        explanation:
          "Use complete sentences and clear subject-verb structure."
      },
      {
        incorrect: "do validation and process",
        correct: "Validate input data and process the results",
        explanation:
          "Use imperatives properly in instructions, present simple in descriptions."
      },
      {
        incorrect: "it returns data",
        correct: "The API returns user data in JSON format",
        explanation:
          "Include subject for clarity in technical documentation."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ the database connection and ___ the query.",
      options: ["Setup, Execute", "Setups, Executes", "Setting up, Executing", "Set up, Execute"],
      answer: "Set up, Execute"
    }
  },
  vocabulary: [
    {
      item: "comment",
      explanation: "A note in the code that explains its purpose or functionality.",
      example: "// This function validates user input before processing",
      pronunciation: "/ˈkɑmɛnt/"
    },
    {
      item: "documentation",
      explanation: "Written instructions and explanations for how to use code or systems.",
      example: "Complete documentation is essential for API usage.",
      pronunciation: "/ˌdɑkjʊmɛnˈteɪʃən/"
    },
    {
      item: "README",
      explanation: "A text file containing information about a project or software.",
      example: "Always update the README when adding new features.",
      pronunciation: "/ˈri mi/"
    },
    {
      item: "API",
      explanation: "Application Programming Interface - rules for how software components interact.",
      example: "The API provides methods for user authentication.",
      pronunciation: "/ˈæpi/"
    },
    {
      item: "endpoint",
      explanation: "A specific URL or connection point in an API.",
      example: "POST /users is the endpoint for creating new accounts.",
      pronunciation: "/ˈɛndˌpɔɪnt/"
    },
    {
      item: "parameter",
      explanation: "A variable passed to a function or method.",
      example: "The function takes an ID parameter and returns user data.",
      pronunciation: "/pəˈræmɪtər/"
    },
    {
      item: "deprecated",
      explanation: "Marked as no longer recommended for use, usually due to better alternatives.",
      example: "This method is deprecated - use the new version instead.",
      pronunciation: "/ˈdɛprɪˌkeɪtɪd/"
    },
    {
      item: "refactor",
      explanation: "To restructure existing code without changing its functionality.",
      example: "We need to refactor this method for better performance.",
      pronunciation: "/ˈrifæktər/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Code Documentation Patterns",
    chunks: [
      {
        chunk: "// ___ - [explanation]",
        usage: "Writing clear, descriptive code comments"
      },
      {
        chunk: "The [component] ___ and ___",
        usage: "Describing code functionality and behavior"
      },
      {
        chunk: "To use this, ___ first, then ___",
        usage: "Providing step-by-step usage instructions"
      }
    ]
  },
  scenario: "Writing clear code comments and API documentation for a team project.",
  speaking: "This function calculates totals. Install the dependencies first, then import the library. The method validates user input and returns formatted results. Update the README with the new endpoint documentation.",
  speakingPracticeMode: "documentation",

  readingActivity: {
    title: "Reading: Best Practices for Code Documentation",
    text: "Effective code documentation serves multiple audiences: developers maintaining code, new team members, and future contributors. Write comments that explain why, not just what. Use clear, descriptive variable names. Structure documentation with examples, parameters, and return values. Keep documentation current - outdated docs are worse than no documentation. Consider accessibility - explain complex business logic clearly. Use consistent formatting and language across all documentation.",
    comprehensionQuestions: [
      {
        question: "What should code comments explain?",
        answer: "Why code works a certain way, not just what it does."
      },
      {
        question: "What makes documentation more accessible?",
        answer: "Clear explanations of complex business logic."
      },
      {
        question: "Why must documentation stay current?",
        answer: "Outdated documentation is harmful to understanding."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Code Documentation Discussion",
    transcript: "For the authentication module, create a config file with your API keys. The AuthService class handles login, logout, and token refresh. This method validates the user credentials and returns a JWT token if successful. To implement, install the dependencies first, then set up the middleware. Update the API documentation to reflect the new error codes. The README explains how to configure the database connection properly.",
    comprehensionQuestions: [
      {
        question: "What does the AuthService class handle?",
        answer: "Login, logout, and token refresh operations."
      },
      {
        question: "What should you create first for authentication?",
        answer: "A config file with API keys."
      },
      {
        question: "What documentation needs updating?",
        answer: "The API documentation and README file."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Documentation Terms",
    explanation: "Master pronunciation of key terms used in code documentation and comments.",
    examples: [
      {
        term: "variable",
        phonetic: "/ˈvɛriəbəl/",
        tip: "Four syllables: 'var-ee-a-bel'. Stress on first and third syllables."
      },
      {
        term: "parameter",
        phonetic: "/pəˈræmɪtər/",
        tip: "Four syllables: 'par-am-e-ter'. Stress on third syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Vancouver)",
      speakerBio: "David, Technical Writer from Vancouver",
      audioSrc: "",
      transcript: "Alright, so this function takes an array of user IDs as the first parameter, queries the database for those specific records, and returns the results formatted as JSON. Make sure to validate the IDs before passing them to this method, eh? I've updated the comments to reflect the new error handling logic we added last week."
    }
  ],

  rolePlay: {
    title: "Writing Code Documentation",
    objective: "Practice writing clear code comments and documentation explanations.",
    aiPersona: "Senior developer reviewing code documentation",
    initialMessage: "I see you've added some comments, but could you explain what this function actually does for our users?"
  }
};
