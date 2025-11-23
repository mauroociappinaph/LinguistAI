import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Imperatives for Instructions + Present Simple for Explanations",
  explanation:
    "**Imperatives for Code Instructions**: Direct commands - 'Import the library', 'Initialize the variable'\n**Present Simple for Code Explanations**: Describes what code does - 'The function calculates totals', 'Method handles errors'\n**Passive Voice for Technical Writing**: Focuses on actions - 'Data is validated', 'Results are returned'",
  usage: "Code documentation and comments:\n\n📝 **Instructions**: 'Create a config file', 'Install dependencies'\n💭 **Comments**: 'Function validates user input'\n📖 **Documentation**: 'API returns user data in JSON format'",
  rules: [
    {
      from: "Setup instructions",
      to: "Imperative verb (Install, Configure, Create)"
    },
    {
      from: "Code explanations",
      to: "Subject + verb (Function + returns, Method + processes)"
    },
    {
      from: "Technical descriptions",
      to: "Passive structures (Data + is processed, Results + are displayed)"
    }
  ],
  examples: [
    "**Install** the required dependencies by running `npm install`.",
    "The function **calculates** the total price and **returns** the result.",
    "**Configure** the database connection with the following parameters.",
    "Method **validates** user input and **handles** error cases.",
    "Data **is processed** asynchronously and **results are cached**."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ the database connection and ___ the query.",
    options: ["Setup, Execute", "Setups, Executes", "Setting up, Executing", "Set up, Execute"],
    answer: "Set up, Execute"
  }
};
