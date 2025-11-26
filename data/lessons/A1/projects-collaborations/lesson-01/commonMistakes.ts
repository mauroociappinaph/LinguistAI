import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{
        incorrect: "We shall deliver the sprint.",
        correct: "We will deliver the sprint.",
        explanation:
          "Use 'will' for simple future actions, 'shall' is more formal for suggestions or questions."
      },
      {
        incorrect: "Shall I will assign the tasks?",
        correct: "Shall I assign the tasks?",
        explanation:
          "Don't combine modal verbs. Choose either 'will', 'shall', or 'going to'."
      },
      {
        incorrect: "We're going to will start tomorrow.",
        correct: "We're going to start tomorrow.",
        explanation:
          "Don't use 'will' with 'going to'. 'Going to' already indicates future."
      }
];
