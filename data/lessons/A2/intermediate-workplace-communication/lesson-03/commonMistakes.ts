import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "The API, that handles payments, is secure.",
    correct: "The API that handles payments is secure.",
    explanation: "Don't use commas with defining relative clauses."
  },
  {
    incorrect: "The developer which wrote this code left.",
    correct: "The developer who wrote this code left.",
    explanation: "Use 'who' for people, not 'which'."
  },
  {
    incorrect: "The service what sends emails is down.",
    correct: "The service that sends emails is down.",
    explanation: "Use 'that' or 'which', never 'what' in defining clauses."
  },
  {
    incorrect: "Developers they work remotely need VPN.",
    correct: "Developers who work remotely need VPN.",
    explanation: "Don't use redundant pronouns with relative clauses."
  },
  {
    incorrect: "The API who handles authentication...",
    correct: "The API that handles authentication...",
    explanation: "Use 'that/which' for things, not 'who'."
  },
  {
    incorrect: "The function where processes data...",
    correct: "The function that processes data...",
    explanation: "Use 'that/which', not 'where' for things."
  },
  {
    incorrect: "Users that has admin access can delete files.",
    correct: "Users who have admin access can delete files.",
    explanation: "'Users' is plural, so use 'have', not 'has'. Also 'who' not 'that' for people."
  }
];
