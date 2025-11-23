import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "Application will process requests.",
    correct: "Application processes requests continuously.",
    explanation: "Use present simple for ongoing system behaviors, not future actions."
  },
  {
    incorrect: "Cache will improve performance.",
    correct: "Cache improves performance.",
    explanation: "Present simple describes general facts about system capabilities."
  },
  {
    incorrect: "The API validated input.",
    correct: "The API validates input.",
    explanation: "Describe current system behavior with present simple, not past actions."
  }
];
