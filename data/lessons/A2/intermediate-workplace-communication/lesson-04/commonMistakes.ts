import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "React is the better for large teams.",
    correct: "React is better for large teams. OR React is the best option for large teams.",
    explanation: "Don't use 'the' with comparative 'better'. Use either 'better' OR 'the best'."
  },
  {
    incorrect: "Vue is more simple than Angular.",
    correct: "Vue is simpler than Angular.",
    explanation: "'Simple' is a short adjective. Use -er (simpler), not 'more'."
  },
  {
    incorrect: "React, that has a large ecosystem, is popular.",
    correct: "React, which has a large ecosystem, is popular.",
    explanation: "Use 'which' (not 'that') for non-defining clauses with commas."
  },
  {
    incorrect: "Angular is the most better documented framework.",
    correct: "Angular is the best documented framework.",
    explanation: "Don't use 'most' with irregular superlative 'best'."
  },
  {
    incorrect: "Developers they use React prefer hooks.",
    correct: "Developers who use React prefer hooks.",
    explanation: "Don't use redundant pronoun 'they' with relative clause."
  },
  {
    incorrect: "For teams that needs flexibility, React is best.",
    correct: "For teams that need flexibility, React is best.",
    explanation: "'Teams' is plural, so use 'need', not 'needs'."
  },
  {
    incorrect: "Svelte is fastest, but React is most popular.",
    correct: "Svelte is the fastest, but React is the most popular.",
    explanation: "Superlatives always need 'the' before them."
  }
];
