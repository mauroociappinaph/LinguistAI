import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{
        incorrect: "The code check by linter.",
        correct: "The code is checked by the linter.",
        explanation:
          "Use correct passive structure: be + past participle."
      },
      {
        incorrect: "The API returns data then the data processed.",
        correct: "The API returns data and then the data is processed.",
        explanation:
          "Use proper sequence with 'then' or 'and then' and consistent tense."
      },
      {
        incorrect: "Errors are logging.",
        correct: "Errors are logged.",
        explanation:
          "Irregular verbs in passive: log → logged (not logging)."
      }
];
