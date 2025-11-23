import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "The app is slow, check the database.",
    correct: "The app is slow because database queries need optimization.",
    explanation: "Use 'because' to explain the reason behind technical issues."
  },
  {
    incorrect: "Although it's expensive, we use it.",
    correct: "Although it's expensive, it scales well so we use it.",
    explanation: "Complete contrast statements with consequences using 'so'."
  },
  {
    incorrect: "If you do that, it breaks.",
    correct: "If you restart the service without graceful shutdown, it breaks.",
    explanation: "Use full conditional statements for clear technical explanations."
  }
];
