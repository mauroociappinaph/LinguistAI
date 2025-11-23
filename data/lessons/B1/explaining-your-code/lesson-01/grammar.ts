import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Passive Voice for Technical Documentation",
  explanation: "**Passive Voice (be + past participle)**: Subject receives the action\n\n**When to Use Passive:** When explaining processes, documentation, or any situation where the agent (who does the action) is unimportant or unknown\n\n**Common Passive Patterns in Tech:**\n- `is/are + past participle`: 'The data is encrypted'\n- `was/were + past participle`: 'The bug was fixed'\n- `will be + past participle`: 'The feature will be released'",
  usage: "Technical Documentation & Code Explanations:\n\n📚 **Focus on Processes**: 'The API is designed to handle errors' (not 'developers design')\n🔧 **Configuration**: 'The server is configured automatically'\n📋 **Implementation Details**: 'The component is structured modularly'",
  rules: [
    {
      from: "Active to Passive - Present",
      to: "Object becomes subject + is/are + past participle"
    },
    {
      from: "Active to Passive - Past",
      to: "Object becomes subject + was/were + past participle"
    },
    {
      from: "No agent needed",
      to: "Passive voice when 'by someone' or 'by the system' is irrelevant"
    }
  ],
  examples: [
    "**The API is designed** to handle authentication requests securely.",
    "**System performance is optimized** through efficient algorithms.",
    "**The database is queried** using optimized SQL statements.",
    "**Dependencies are resolved** automatically by the package manager.",
    "**The code is reviewed** before being merged into the main branch.",
    "**Security vulnerabilities are identified** during automated scanning."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "sentence transformation",
    question: "Transform active sentences to passive for technical documentation: 'Developers implement this feature using React.'",
    options: ["This feature is implemented using React by developers.", "This feature is implemented using React.", "Using React, developers implement this feature.", "React implements this feature developers."],
    answer: "This feature is implemented using React."
  }
};
