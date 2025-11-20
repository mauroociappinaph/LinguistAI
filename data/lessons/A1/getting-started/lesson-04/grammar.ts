import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  rules: [],
  title: "Asking Questions & Giving Short Answers",
  explanation:
    "There are two main types of questions:\n\n1.  **WH- Questions**: To ask for specific information (What?, Who?, Where?, etc.).\n\n2.  **Yes/No Questions**: To confirm information. The answer is 'yes' or 'no'.\n\nWhen answering Yes/No questions, it is natural to use short answers with the auxiliary verb (be, do) to sound more polite and fluent.",
  usage:
    "Asking good questions is a key skill for a developer. Giving natural short answers is key for smooth communication.",
  examples: [
    "**What** is your job title?",
    "**When** is the meeting?",
    "**Is** she the new designer? -> Yes, she **is**.",
    "**Are** you from Spain? -> No, I**'m not**.",
    "**Do** you work on the frontend team? -> Yes, I **do**.",
    "**Does** he have access to the server? -> No, he **doesn't**.",
  ],
  commonMistakes: [
    {
      incorrect: "You are the new designer?",
      correct: "Are you the new designer?",
      explanation:
        "For Yes/No questions with 'to be', invert the subject and the verb (Are you...? Is he...?)",
    },
    {
      incorrect: "Does she is the designer?",
      correct: "Is she the designer?",
      explanation:
        "When the main verb is 'to be', you don't need the auxiliary 'do/does'. Just invert the subject and verb.",
    },
  ],
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ he have access to the server? -> No, he ___.",
    options: ["Do/do", "Does/doesn't", "Is/isn't"],
    answer: "Does/doesn't",
  },
};
