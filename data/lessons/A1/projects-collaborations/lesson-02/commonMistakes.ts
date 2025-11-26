import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{
        incorrect: "This code must be rewritten!",
        correct: "You should consider rewriting this code.",
        explanation:
          "Use 'should' for recommendations rather than imperatives like 'must', which sound too demanding."
      },
      {
        incorrect: "Add tests here.",
        correct: "You should add tests here.",
        explanation:
          "Include 'you' and 'should' to make feedback more collaborative and less direct."
      },
      {
        incorrect: "This could break.",
        correct: "This might break under some conditions.",
        explanation:
          "Use 'might' instead of 'could' when describing potential problems, 'could' implies capability."
      }
];
