import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Modal Verbs for Technical Proposals",
  explanation: "Use modals (should, could, would, might) to make professional recommendations and suggestions.\n\n**Should**: Strong recommendation\n• 'We should migrate to microservices.'\n\n**Could**: Possibility/option\n• 'We could use Redis for caching.'\n\n**Would**: Conditional benefit\n• 'This would improve performance.'",
  usage: "Technical proposals, architecture decisions, recommendations",
  rules: [
    { from: "Strong recommendation", to: "We should implement CI/CD." },
    { from: "Suggestion", to: "We could adopt TypeScript." }
  ],
  examples: [
    "We should prioritize security updates.",
    "This approach would reduce technical debt.",
    "We could migrate incrementally to minimize risk."
  ],
  commonMistakes: [
    { incorrect: "We must use React.", correct: "We should use React (unless truly mandatory).", explanation: "'Must' is too strong for most technical recommendations." }
  ],
  writingExamples: ["Proposal: 'We should adopt GraphQL as it would reduce API calls by 60%. We could start with a pilot project to validate the approach.'"],
  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete a polite recommendation: 'We _____ consider using Docker for consistency.'",
    options: ["must", "should", "have to", "need"],
    answer: "should"
  }
};
