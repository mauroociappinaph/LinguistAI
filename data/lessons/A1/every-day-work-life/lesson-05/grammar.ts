import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Imperatives for UI Actions",

  explanation:
    "We use **imperative verbs** to give clear, direct instructions. In UI/UX contexts, imperatives guide users through actions such as clicking, entering data, or navigating through an interface.\n\n" +
    "In the tech world, imperatives appear in:\n" +
    "- User onboarding\n" +
    "- Tutorials and documentation\n" +
    "- UI labels and tooltips\n" +
    "- QA test cases and steps\n\n" +
    "Imperatives use the **base form of the verb** and never include a subject (you).",

  usage:
    "Use imperatives to give step-by-step instructions:\n" +
    "- 'Click the button.'\n" +
    "- 'Open the dashboard.'\n" +
    "- 'Enter your credentials.'\n\n" +
    "They are essential for:\n" +
    "- Writing documentation\n" +
    - "Designing UI texts (microcopy)\n" +
    "- Guiding users during demos or onboarding",

  rules: [
    { from: "Imperative (base form)", to: "Click, Open, Enter, Upload, Go, Save" },
    { from: "Negative imperative", to: "Don’t + base verb → Don’t refresh the page." },
    { from: "Imperatives with ‘Please’", to: "Adds politeness → Please try again." },
    { from: "Imperatives with ‘Let’s’", to: "Used to make suggestions → Let’s check the logs." }
  ],

  examples: [
    "**Click** on the 'Save' button.",
    "**Enter** your username and password.",
    "**Go to** the settings page.",
    "**Upload** your profile picture.",
    "**Refresh** the page to load new data.",
    "**Don’t close** the tab during the installation.",
     "**Let’s review** the code together.",
    "**Let’s check** the logs before deploying.",
    "**Let’s open** the console to debug this.",
    "**Let’s test** the endpoint again.",
    "**Let’s compare** the versions."
  ],

  commonMistakes: [
    {
      incorrect: "You go to the settings page.",
      correct: "Go to the settings page.",
      explanation: "Imperatives do not use subjects like 'you'."
    },
    {
      incorrect: "For save, you click the button.",
      correct: "To save, click the button.",
      explanation:
        "Use 'to + verb' to explain purpose. The action itself stays in the imperative."
    },
    {
      incorrect: "Let's to check the logs.",
      correct: "Let's check the logs.",
      explanation: "'Let’s' is followed by the base verb, not 'to + verb'."
    }
  ],

  interactiveExercise: {
    type: 'fill-in-the-blank',
    question: "___ your profile picture.",
    options: ["You upload", "To upload", "Upload"],
    answer: "Upload"
  }
};
