import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Asking Questions & Giving Short Answers",
  explanation:
    "There are two main types of questions:\n\n1. **WH- Questions**: Used to ask for specific information (What?, Who?, Where?, etc.).\n\n2. **Yes/No Questions**: Used to confirm information. The answer is 'yes' or 'no'.\n\nShort answers sound more natural and polite, and they repeat the auxiliary verb (be, do, does).",
  usage:
    "Asking clear questions and giving natural short answers is essential in tech when collaborating, debugging, or planning tasks.",


  rules: [
    { from: "WH- Questions", to: "WH-word + auxiliary + subject + verb" },
    { from: "Yes/No Questions", to: "Auxiliary (be/do/does) + subject + verb" },
    { from: "Short Answers (be)", to: "Yes/No + subject + be" },
    { from: "Short Answers (do)", to: "Yes/No + subject + do/does" }
  ],

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
        "In Yes/No questions with 'to be', invert the subject and the verb (Are you...? Is he...?).",
    },
    {
      incorrect: "Does she is the designer?",
      correct: "Is she the designer?",
      explanation:
        "When the main verb is 'to be', do NOT use 'do/does'. Just invert the subject and verb.",
    },
  ],

  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ he have access to the server? -> No, he ___.",
    options: ["Do/do", "Does/doesn't", "Is/isn't"],
    answer: "Does/doesn't",
  },
};
