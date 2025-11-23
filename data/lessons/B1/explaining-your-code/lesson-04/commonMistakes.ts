import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "We deprecate the old feature soon.",
    correct: "We will deprecate the old feature next quarter.",
    explanation: "Use 'will' for planned official actions and specify timelines for clarity."
  },
  {
    incorrect: "We going to upgrade the system.",
    correct: "We are going to upgrade the system next month.",
    explanation: "Use the correct contraction 'are going to' and specify when the action will happen."
  },
  {
    incorrect: "Old code will be replaced.",
    correct: "The old code will be gradually deprecated over 6 months.",
    explanation: "Technical changes need clear migration paths and timelines for stakeholders."
  }
];
