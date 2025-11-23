import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Softening Language & Professional Recommendations",
  explanation: "**Softening language**: 'Perhaps you could...', 'You might consider...', 'It might be worth...'\n**Recommendations**: 'I suggest...', 'It would help if...', 'Have you thought about...'\n**Constructive criticism**: 'One improvement could be...', 'The code would benefit from...'",

  usage: "Technical Reviews & Feedback:\n\n💭 **Suggestions**: 'Perhaps you could add more descriptive variable names?'\n🔄 **Improvements**: 'The code might benefit from input validation'\n✨ **Alternatives**: 'Have you considered using dependency injection here?'\n📚 **Education**: 'It would help if we documented this API endpoint'",
  rules: [
    {
      from: "Modal verbs for softening",
      to: "Could/would/might/may + base verb (You could add error handling)"
    },
    {
      from: "Polite questions",
      to: "Have you considered...? What do you think about...? (Have you considered using a different algorithm?)"
    },
    {
      from: "Conditional improvements",
      to: "Would/could/might + benefit/help/improve (The code would benefit from more comments)"
    }
  ],
  examples: [
    "**You could add some unit tests to ensure the function works correctly.**",
    "**Have you considered adding error handling for network timeouts?**",
    "**The code might benefit from extracting this logic into a separate utility function.**",
    "**It would be helpful if the documentation included usage examples.**",
    "**Perhaps you could refactor this to use async/await instead of promises.**",
    "**What do you think about adding some input validation here?**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: "soften-feedback",
    question: "Convert these direct statements into constructive feedback using softening language:",
    options: [
      "You could/You might/Have you considered",
      "Fix it, It's bad, That won't work",
      "Definitely should, Must be changed, Absolute requirement",
      "Incorrect approach, Bad decision, Wrong choice"
    ],
    answer: "You could/You might/Have you considered"
  }
};
