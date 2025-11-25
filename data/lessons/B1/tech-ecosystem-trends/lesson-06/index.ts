import { Lesson, Difficulty } from '../../../../../types';

export const lesson06: Lesson = {
  id: "tet6",
  title: "Writing API Docs: Imperative Tone",
  level: Difficulty.B1,
  description: "Master the imperative tone for writing clear, concise, and professional API documentation and technical instructions.",
  didYouKnow: "In technical documentation, using 'Click the button' (Imperative) is 30% faster to read than 'You should click the button'.",

  grammar: {
    title: "Imperative Tone in Documentation",
    explanation: "**The Imperative Mood:** Used to give direct instructions, commands, or advice.\\n\\n**Structure:** Base verb (without 'to' or subject).\\n- 'Click' (not 'You click')\\n- 'Install' (not 'To install')\\n\\n**Tone:** In technical writing, the imperative is not rude; it is efficient and standard.",
    usage: "API Docs, Readme files, Installation Guides:\\n\\n📝 **Instructions**: 'Run the command.'\\n⚠️ **Warnings**: 'Do not share your API key.'\\n🔄 **Steps**: 'Authenticate, then make the request.'",
    rules: [
      {
        from: "Standard instruction",
        to: "Base verb + object: 'Send the request.'"
      },
      {
        from: "Negative instruction",
        to: "Do not + base verb: 'Do not hardcode credentials.'"
      },
      {
        from: "Polite/Soft instruction (for support)",
        to: "Please + base verb: 'Please verify your email.'"
      }
    ],
    examples: [
      "**Install** the dependencies using npm.",
      "**Configure** the environment variables in the .env file.",
      "**Do not commit** the secrets to the repository.",
      "**Return** a 404 error if the resource is not found.",
      "**Use** the POST method to create a new user."
    ],
    commonMistakes: [
      {
        incorrect: "You should run the script.",
        correct: "Run the script.",
        explanation: "Remove 'You should' for cleaner documentation."
      },
      {
        incorrect: "To install the package.",
        correct: "Install the package.",
        explanation: "Don't use the infinitive 'To install' as a command."
      },
      {
        incorrect: "Not delete the database.",
        correct: "Do not delete the database.",
        explanation: "Use 'Do not' for negative imperatives."
      }
    ],
    interactiveExercise: {
      type: "transformation",
      question: "Make this instruction imperative: 'You need to update the config.'",
      options: [
        "Update the config.",
        "To update the config.",
        "You update the config.",
        "Updating the config."
      ],
      answer: "Update the config."
    }
  },

  vocabulary: [
    {
      item: "endpoint",
      explanation: "A specific URL where an API service can be accessed.",
      example: "Send a GET request to the /users endpoint.",
      pronunciation: "/ˈɛndpɔɪnt/"
    },
    {
      item: "payload",
      explanation: "The data sent in the body of an API request.",
      example: "Ensure the JSON payload contains the required fields.",
      pronunciation: "/ˈpeɪloʊd/"
    },
    {
      item: "query parameter",
      explanation: "Optional parameters added to the end of a URL.",
      example: "Use the 'limit' query parameter to paginate results.",
      pronunciation: "/ˈkwɪri pəˈræmɪtər/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Documentation Patterns",
    chunks: [
      {
        chunk: "To [goal], [imperative instruction]",
        usage: "Stating purpose before instruction (e.g., 'To save, click Save')"
      },
      {
        chunk: "Ensure that [condition]",
        usage: "Highlighting prerequisites"
      },
      {
        chunk: "Note: [Important information]",
        usage: "Adding critical context"
      }
    ]
  },

  scenario: "Writing documentation for a new public API endpoint.",
  speaking: "To authenticate, include the API key in the header. Send a POST request to the endpoint with the user data in the payload. Do not expose your secret key in client-side code.",
  speakingPracticeMode: "technical-instruction",

  readingActivity: {
    title: "Reading: API Reference",
    text: "Authentication: Include your API key in the Authorization header. Endpoints: Use /api/v1/users to manage user accounts. Rate Limiting: Do not exceed 100 requests per minute. Errors: Handle 4xx and 5xx responses gracefully. Note: All timestamps are returned in UTC.",
    comprehensionQuestions: [
      {
        question: "Where should the API key be included?",
        answer: "In the Authorization header."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Developer Onboarding",
    transcript: "First, clone the repository to your local machine. Then, install the dependencies using npm install. Create a .env file and copy the variables from .env.example. Finally, start the development server with npm run dev. Do not forget to check the console for any startup errors.",
    comprehensionQuestions: [
      {
        question: "What is the first step?",
        answer: "Clone the repository."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Technical Verbs",
    explanation: "Practice the stress in common technical verbs used in imperatives.",
    examples: [
      {
        term: "configure",
        phonetic: "/kənˈfɪɡjər/",
        tip: "Stress the second syllable: con-FIG-ure."
      },
      {
        term: "authenticate",
        phonetic: "/ɔˈθɛntɪkeɪt/",
        tip: "Stress the second syllable: au-THEN-ti-cate."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Tech Lead)",
      speakerBio: "David, Senior Dev from Austin",
      audioSrc: "",
      transcript: "Initialize the client with your credentials. Call the verify method to check the connection. If successful, proceed to fetch the user data. Handle any exceptions using a try-catch block."
    }
  ],

  rolePlay: {
    title: "Explaining an API Integration",
    objective: "Practice giving clear technical instructions using the imperative mood.",
    aiPersona: "Junior Developer",
    initialMessage: "I'm having trouble connecting to the API. What steps should I follow?"
  }
};
