import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Modal Verbs: Should/Could/Might for Suggestions and Possibilities",
    explanation:
      "**'Should'** expresses recommendations and best practices: 'You **should** add error handling'. **'Could'** suggests options: 'You **could** refactor this function'. **'Might'** indicates possibilities: 'This **might** cause performance issues'.\n\nIn code reviews: 'This **should** follow our style guide', 'You **could** extract this to a separate method', 'The database call **might** timeout here'.",
    usage:
      "Use these modals to provide constructive feedback:\n\n✅ **Recommendations**: 'You **should** add unit tests'\n💡 **Suggestions**: 'This **could** be optimized'\n⚠️ **Concerns**: 'This **might** cause issues'\n\nBe specific and provide context for better feedback.",
    rules: [
      {
        from: "Strong recommendations",
        to: "should + infinitive (You should comment this code)"
      },
      {
        from: "Possible improvements",
        to: "could + infinitive (You could use a different algorithm)"
      },
      {
        from: "Potential issues",
        to: "might + infinitive (This might break under load)"
      }
    ],
    examples: [
      "You **should** add input validation to prevent security issues.",
      "This function **could** be made more readable with better variable names.",
      "The API call **might** fail if the network is slow.",
      "We **should** follow the existing code patterns in this project.",
      "You **could** consider using a design pattern for this solution."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The error handling ___ be improved with logging.",
      options: ["should", "could", "might"],
      answer: "should"
    },
  commonMistakes
};
