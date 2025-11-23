import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "Do the testing now.",
    correct: "Could you run the tests when you have time?",
    explanation: "Polite requests respect team members' schedules and workloads."
  },
  {
    incorrect: "I own this task.",
    correct: "I'm responsible for this task and will update the team tomorrow.",
    explanation: "Clear communication includes update schedules in remote environments."
  },
  {
    incorrect: "It's done.",
    correct: "I've completed the feature and documented the changes in Confluence.",
    explanation: "Detailed updates ensure remote team members stay aligned."
  }
];
