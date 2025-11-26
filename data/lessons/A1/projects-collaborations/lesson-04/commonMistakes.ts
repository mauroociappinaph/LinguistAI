import { CommonMistake } from "../../../../../types";

export const commonMistakes: CommonMistake[] = [
{
        incorrect: "The code broke because of we didn't test it.",
        correct: "The code broke because we didn't test it.",
        explanation:
          "Don't add 'of' after 'because'. Use 'because' + subject + verb directly."
      },
      {
        incorrect: "We deployed so that fix the issue.",
        correct: "We deployed so that we could fix the issue.",
        explanation:
          "After 'so that', use a full clause with subject and modal verb when needed."
      },
      {
        incorrect: "The bug occurred because the error handling wasn't there.",
        correct: "The bug occurred because the error handling wasn't implemented.",
        explanation:
          "Use more precise vocabulary. 'Wasn't there' sounds vague; 'wasn't implemented' is clearer."
      }
];
