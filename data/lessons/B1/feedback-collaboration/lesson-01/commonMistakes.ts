import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
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
];
