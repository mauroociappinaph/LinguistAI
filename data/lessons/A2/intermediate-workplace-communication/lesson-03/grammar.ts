import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Defining Relative Clauses for API and System Descriptions",
  explanation:
    "Defining relative clauses help you specify exactly which technology, API, or system you're referring to. Essential for clear technical documentation and communication.\n\n" +
    "### Why it matters in IT:\n" +
    "In tech discussions, you constantly need to distinguish between similar components:\n" +
    "• 'The API **that** handles authentication' vs 'The API **that** processes payments'\n" +
    "• 'Developers **who** work remotely' vs 'Developers **who** specialize in backend'\n" +
    "• Documentation and technical writing\n" +
    "• Code comments and PR descriptions\n\n" +
    "### Structure:\n" +
    "**that/which** → for things (APIs, systems, frameworks, tools)\n" +
    "• The database **that** stores user data\n" +
    "• The service **which** sends email notifications\n\n" +
    "**who** → for people (developers, users, engineers)\n" +
    "• The developer **who** wrote this code\n" +
    "• Users **who** have admin privileges\n\n" +
    "**Defining clauses** provide essential information (no commas needed)",

  usage: "Use defining relative clauses when you need to specify which specific thing or person you're talking about in technical contexts.",

  rules: [
    {
      from: "that/which for systems/tools",
      to: "The API that handles authentication is down."
    },
    {
      from: "who for people",
      to: "Developers who work remotely need good communication skills."
    },
    {
      from: "No commas (essential info)",
      to: "The service that sends notifications has a bug. (NOT: The service, that sends notifications, has a bug.)"
    },
    {
      from: "Can omit 'that' when it's the object",
      to: "The bug [that] we fixed yesterday is back. (Can omit 'that')"
    }
  ],

  examples: [
    "The framework that we chose is React.",
    "APIs that return JSON are easier to consume.",
    "The developer who wrote this module left last month.",
    "The database which stores customer data is PostgreSQL.",
    "Users who have premium accounts get priority support.",
    "The endpoint that handles file uploads needs optimization.",
    "Engineers who specialize in DevOps are in high demand.",
    "The library that provides HTTP clients is Axios."
  ],

  commonMistakes: [
    {
      incorrect: "The API, that handles payments, is secure.",
      correct: "The API that handles payments is secure.",
      explanation: "Don't use commas with defining relative clauses (essential information)."
    },
    {
      incorrect: "The developer which wrote this code is on vacation.",
      correct: "The developer who wrote this code is on vacation.",
      explanation: "Use 'who' for people, not 'which'."
    },
    {
      incorrect: "The service what sends emails is broken.",
      correct: "The service that sends emails is broken.",
      explanation: "Use 'that' or 'which', not 'what', for defining clauses."
    },
    {
      incorrect: "Developers they work remotely need VPN access.",
      correct: "Developers who work remotely need VPN access.",
      explanation: "Don't use 'they' after 'developers' when using a relative clause."
    }
  ],

  writingExamples: [
    "Technical documentation: 'The authenticate() function that is located in auth.service.ts validates the JWT token that the client sends in the Authorization header.'",
    "Bug report: 'The bug that we discovered affects users who have multiple sessions active. The session management service that handles concurrent logins needs to be updated.'",
    "Code review comment: 'The function that you added handles edge cases that we missed before. Developers who review this PR should pay special attention to the validation logic.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: The engineer _____ maintains the CI/CD pipeline is working on a new deployment strategy.",
    options: [
      "which",
      "that",
      "who",
      "what"
    ],
    answer: "who"
  }
};
