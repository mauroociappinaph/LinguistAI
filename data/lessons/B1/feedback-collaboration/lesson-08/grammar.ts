import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Hypotheticals & Recommendations in Technical Debates",

  explanation:
    "When debating technical approaches, you often need to discuss hypothetical situations and make strong recommendations.\n\n" +
    "**Second Conditional (Type 2)** — Unreal or unlikely present/future situations:\n" +
    "Structure: **If + past simple, ... would/could/might + infinitive**\n" +
    "Example: *'If we **refactored** this now, it **would** save time later.'*\n\n" +
    "**Advanced Modals** for strong recommendations:\n" +
    "- **ought to** = should (more formal)\n" +
    "- **had better** = strong advice (with consequence)\n" +
    "- **would rather** = preference",

  usage:
    "💡 **Hypothetical Situations:**\n" +
    "- 'If we **used** microservices, we **could** scale better.'\n" +
    "- 'If we **had** more time, we **would** implement automated testing.'\n\n" +
    "⚠️ **Strong Recommendations:**\n" +
    "- 'We **ought to** follow security best practices.'\n" +
    "- 'You **had better** back up the database before the migration.'\n" +
    "- 'I **would rather** use a proven library than build from scratch.'",

  rules: [
    {
      from: "Second Conditional",
      to: "If + past simple, ... would/could/might + infinitive"
    },
    {
      from: "ought to",
      to: "Formal recommendation (= should)"
    },
    {
      from: "had better",
      to: "Strong advice with implied consequence"
    },
    {
      from: "would rather",
      to: "Express preference between options"
    }
  ],

  examples: [
    "If we **refactored** this code, it **would** be more maintainable.",
    "If the team **had** more resources, we **could** complete this faster.",
    "We **ought to** implement proper logging here.",
    "You **had better** review the security implications before deploying.",
    "I **would rather** use TypeScript than JavaScript for this project.",
    "If we **switched** to microservices, we **could** scale each component independently.",
    "The team **ought to** consider performance optimization at this stage.",
    "You **had better** test this thoroughly — it affects the payment system."
  ],

  commonMistakes: [
    {
      incorrect: "If we will use microservices...",
      correct: "If we **used** microservices...",
      explanation: "Second conditional uses past simple in the 'if' clause, not 'will'."
    },
    {
      incorrect: "We ought implement this.",
      correct: "We **ought to** implement this.",
      explanation: "Don't forget 'to' after 'ought'."
    },
    {
      incorrect: "You better review this.",
      correct: "You **had better** review this.",
      explanation: "'Better' alone is informal; use 'had better' for correct grammar."
    },
    {
      incorrect: "I would rather to use React.",
      correct: "I **would rather use** React.",
      explanation: "Don't use 'to' after 'would rather' — use bare infinitive."
    }
  ],

  interactiveExercise: {
    type: "conditional-practice",
    question: "If we ___ (implement) caching, the app ___ (be) much faster.",
    options: [
      "implement / will be",
      "implemented / would be",
      "will implement / would be"
    ],
    answer: "implemented / would be"
  }
};
