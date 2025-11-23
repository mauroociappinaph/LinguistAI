import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Future Perfect Passive & Continuous for Roadmap Milestones",

  explanation:
    "When reporting future milestones and project roadmaps, two advanced structures are used:\n\n" +
    "**Future Perfect Passive** — When something will be completed by a future point:\n" +
    "Structure: **will have been + past participle**\n" +
    "Example: *'The API **will have been deployed** by Q2.'*\n" +
    "Use: Focuses on **completion** of milestones\n\n" +
    "**Future Perfect Continuous** (Advanced) — Emphasizes duration up to a future point:\n" +
    "Structure: **will have been + verb-ing**\n" +
    "Example: *'By then, we **will have been working** on this for 6 months.'*\n" +
    "Use: Focuses on **duration** of ongoing work",

  usage:
    "🎯 **Milestone Reporting (Passive - Focus on completion):**\n" +
    "- 'The feature **will have been released** by end of Q3.'\n" +
    "- 'All bugs **will have been resolved** before launch.'\n" +
    "- 'The migration **will have been completed** by next quarter.'\n\n" +
    "⏱️ **Duration Emphasis (Continuous - Focus on time invested):**\n" +
    "- 'By release, we **will have been developing** for a year.'\n" +
    "- 'Next week, we **will have been testing** for three weeks.'\n" +
    "- 'By Q4, the team **will have been using** this framework for two years.'",

  rules: [
    {
      from: "Future Perfect Passive",
      to: "will have been + past participle (focus on completion)"
    },
    {
      from: "Future Perfect Continuous (Advanced)",
      to: "will have been + verb-ing (focus on duration)"
    }
  ],

  examples: [
    // Future Perfect Passive
    "The migration **will have been completed** by next quarter.",
    "All features **will have been tested** before the launch.",
    "The database **will have been optimized** by the end of the sprint.",
    "The security audit **will have been finished** by Friday.",

    // Future Perfect Continuous (Advanced - marked as optional)
    "By March, we **will have been working** on this project for six months.",
    "Next Friday, the team **will have been testing** for three weeks.",
    "By then, I **will have been using** this framework for two years."
  ],

  commonMistakes: [
    {
      incorrect: "The feature will have deployed by Q2.",
      correct: "The feature **will have been deployed** by Q2.",
      explanation: "Don't forget 'been' in Future Perfect Passive."
    },
    {
      incorrect: "We will been working for a year.",
      correct: "We **will have been working** for a year.",
      explanation: "Don't forget 'have' in Future Perfect structures."
    },
    {
      incorrect: "The API will be deployed by Q2.",
      correct: "The API **will have been deployed** by Q2.",
      explanation: "Use Future Perfect Passive (will have been) for completed milestones, not simple future passive (will be)."
    }
  ],

  interactiveExercise: {
    type: "transformation",
    question: "Transform: 'We will complete the migration by June.' (Future Perfect Passive)",
    options: [
      "The migration will be completed by June.",
      "The migration will have been completed by June.",
      "The migration will have completed by June."
    ],
    answer: "The migration will have been completed by June."
  }
};
