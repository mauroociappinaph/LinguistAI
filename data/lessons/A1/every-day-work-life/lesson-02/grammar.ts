import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Present Continuous: Describing Current Activities",

  explanation:
    "The **present continuous** (am/is/are + verb-ing) is used to describe actions happening **right now**, **in progress**, or **around this moment**.\n\n" +
    "In the tech world, this tense is essential because it allows you to clearly communicate what you're working on at this exact stage of a project.\n\n" +
    "**Why it's crucial for developers and IT teams:**\n" +
    "- Used constantly in **daily stand-ups**: 'I'm fixing...', 'We're testing...'\n" +
    "- Helps clarify **current workload**: tasks, bugs, deployments, reviews\n" +
    "- Used in **meetings**, **pull request discussions**, **pair programming**, and **incident response**\n" +
    "- Perfect for describing **temporary actions**, not routines (‘I am deploying the update right now’)\n\n" +
    "Structure: **Subject + am/is/are + verb-ing**",

  usage:
    "Use the present continuous when describing **active tasks** during collaboration:\n\n" +
    "- 'I'm reviewing your PR.'\n" +
    "- 'She's testing the endpoint.'\n" +
    "- 'They’re setting up the new environment.'\n\n" +
    "Typical contexts in IT:\n" +
    "- Stand-ups and sprint meetings\n" +
    "- Deployment or debugging sessions\n" +
    "- Describing temporary states (e.g., 'The server is restarting')\n" +
    "- Explaining what you're doing in real time during a call or demo",

  rules: [
    { from: "I", to: "am + verb-ing" },
    { from: "He / She / It", to: "is + verb-ing" },
    { from: "We / You / They", to: "are + verb-ing" }
  ],

  examples: [
    // Real work tasks
    "I **am working** on the login bug.",
    "She **is testing** the new API endpoints.",
    "We **are developing** the mobile version of the app.",

    // Meetings & collaboration
    "They **are reviewing** your pull request right now.",
    "I **am checking** the logs to see the error.",
    "He **is deploying** the update to production.",

    // System states
    "The server **is restarting** after the patch.",
    "Our CI pipeline **is running** the tests.",
    "The app **is loading** the new configuration.",

    // Temporary professional situations
    "I'm **working** remotely this week.",
    "She's **using** a staging environment for debugging."
  ],

  commonMistakes: [
    {
      incorrect: "I work on the bug now.",
      correct: "I am working on the bug right now.",
      explanation:
        "Use present continuous for actions happening at this moment — not simple present."
    },
    {
      incorrect: "I am debug the code.",
      correct: "I am debugging the code.",
      explanation: "Always use the **verb-ing** form (debug → debugging)."
    },
    {
      incorrect: "He are testing the app.",
      correct: "He is testing the app.",
      explanation: "Use **is** for he/she/it."
    },
    {
      incorrect: "The server is crash.",
      correct: "The server is crashing.",
      explanation: "The verb must be in **-ing** form."
    },
    {
      incorrect: "I'm working on frontend every day.",
      correct: "I work on frontend every day.",
      explanation:
        "Daily habits → simple present. Present continuous is only for temporary/in-progress actions."
    }
  ],

  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "We ___ (develop) the new feature.",
    options: ["are developing", "is developing", "am developing"],
    answer: "are developing"
  }
};
