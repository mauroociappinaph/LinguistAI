import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "Developers write tests for all functions",
    correct: "Tests are written for all functions.",
    explanation: "Use passive when the agent is obvious or irrelevant."
  },
  {
    incorrect: "We optimize the database for better performance.",
    correct: "The database is optimized for better performance.",
    explanation: "Focus on what happens to the database, not who does it."
  },
  {
    incorrect: "The team configures the CI/CD pipeline every month.",
    correct: "The CI/CD pipeline is configured automatically.",
    explanation: "Passive voice removes unnecessary detail when documenting processes."
  }
];
