import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "First Conditional for Professional Suggestions",
  explanation: "**If Condition + Will Result**: 'If we refactor this code, it will be more maintainable'\n**Hypothetical situations**: Discuss potential improvements, bug fixes, and optimizations\n**Future consequences**: Connect current issues with future benefits",
  usage: "Code Reviews & Technical Feedback:\n\n📝 **Suggestions**: 'If we use TypeScript, the code will be more type-safe'\n🔧 **Improvements**: 'If we add error handling, the app will be more robust'\n🚀 **Optimization**: 'If we implement caching, performance will improve significantly'",
  rules: [
    {
      from: "Present condition",
      to: "If + present simple (If code is complex, it will be harder to maintain)"
    },
    {
      from: "Future result",
      to: "Will + infinitive (If we refactor, it will improve readability)"
    },
    {
      from: "Alternatives",
      to: "Unless (Unless we test thoroughly, we'll have bugs)"
    }
  ],
  examples: [
    "**If we use meaningful variable names, the code will be easier to understand.**",
    "**If we add unit tests, the application will be more reliable.**",
    "**If developers follow coding standards, collaboration will improve.**",
    "**If we implement error boundaries, the app won't crash on user errors.**",
    "**If we optimize database queries, page load times will decrease by 50%.**",
    "**If we add logging, debugging will be easier when issues occur.**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: "complete-sentence",
    question: "Create a constructive feedback statement: 'If developers (follow) documentation standards, onboarding new team members (will) be easier.'",
    options: [
      "follow, will be",
      "follows, will be",
      "followed, were",
      "following, is"
    ],
    answer: "follow, will be"
  }
};
