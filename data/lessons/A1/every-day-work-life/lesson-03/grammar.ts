import { GrammarSection } from '../../../../../types';


export const grammar: GrammarSection = {
  title: "Imperatives for Technical Instructions",

  explanation:
    "Imperatives are one of the most important structures in the tech world. They are used to give **clear, direct instructions** — exactly what you find in documentation, READMEs, onboarding guides, and CLI workflows.\n\n" +
    "The form is extremely simple: **use the base form of the verb** with no subject and no conjugation.\n\n" +
    "**Examples:**\n" +
    "- '**Run** the script'\n" +
    "- '**Open** the terminal'\n" +
    "- '**Install** the dependencies'\n\n" +
    "Imperatives help developers give concise instructions without ambiguity. This is why almost every guide, command, or setup step in the tech industry uses this form.\n\n" +
    "**Imperatives with ‘Let’s’**\n" +
    "Use **'Let's + verb'** to make suggestions, propose collaborative actions, or guide a group through a process.\n\n" +
    "In IT, this is extremely common when working in teams, pair programming, walkthroughs, and debugging sessions.\n\n" +
    "**Examples:**\n" +
    "- \"Let's check the logs.\"\n" +
    "- \"Let's deploy the update.\"\n" +
    "- \"Let's review the pull request.\"\n" +
    "- \"Let's restart the service and test again.\"\n\n" +
    "'Let's' is less direct than a command — it creates a sense of teamwork and shared action.",

  usage:
    "Use imperatives for step-by-step instructions or actions a user or developer needs to perform.\n\n" +
    "**Where imperatives appear in IT:**\n" +
    "- Documentation and READMEs\n" +
    "- CLI instructions\n" +
    "- System messages, warnings, onboarding guides\n\n" +
    "**Use 'Let's' when:**\n" +
    "- Collaborating with teammates\n" +
    - "Running debugging sessions together\n" +
    - "Proposing steps during meetings (e.g., stand-ups, planning, reviews)\n" +
    - "Working through tasks with junior developers or onboarding new hires\n\n" +
    "'Let's' makes the command **inclusive**, softening the tone while still guiding the action.",

  rules: [
    {
      from: "Verb (base form)",
      to: "Used to give direct commands (e.g., Install / Run / Open)"
    },
    {
      from: "Don't + verb",
      to: "Used to give negative commands (e.g., Don't delete this file)"
    },
    {
      from: "Let's + verb",
      to: "Used to make suggestions or propose collaborative actions"
    }
  ],

  examples: [
    "**CLI Instructions:** 'Run the script.', 'Open the terminal.', 'Install the dependencies.'",
    "**README Steps:** 'Clone the repository.', 'Create a new branch.', 'Push your changes.'",
    "**Warnings:** 'Don't shut down the server.', 'Don't modify this file.'",
    "**Collaborative Actions:** 'Let's debug the error.', 'Let's test the endpoint.', 'Let's merge the PR.'"
  ],

  commonMistakes: [
    {
      incorrect: "You open the terminal.",
      correct: "Open the terminal.",
      explanation:
        "Imperatives do not use a subject. Start directly with the verb."
    },
    {
      incorrect: "Please to install the dependencies.",
      correct: "Please install the dependencies.",
      explanation:
        "Never use 'to' after 'please'. The imperative is always the base form."
    },
    {
      incorrect: "Don't to modify this file.",
      correct: "Don't modify this file.",
      explanation:
        "Negative imperatives use 'don't + verb', not 'don't to + verb'."
    },
    {
      incorrect: "Let's to check the logs.",
      correct: "Let's check the logs.",
      explanation:
        "'Let's' is always followed by the base form without 'to'."
    }
  ],

  interactiveExercise: {
    type: 'fill-in-the-blank',
    question: "___ the dependencies before running the app.",
    options: ["To install", "You install", "Install"],
    answer: "Install"
  }
};
