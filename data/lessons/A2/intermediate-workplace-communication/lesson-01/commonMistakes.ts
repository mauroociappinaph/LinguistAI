import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "React is more fast than Vue.",
    correct: "React is faster than Vue.",
    explanation: "'Fast' is a short adjective (1 syllable), so we add -er, not 'more'."
  },
  {
    incorrect: "Kubernetes is complexer than Docker Swarm.",
    correct: "Kubernetes is more complex than Docker Swarm.",
    explanation: "'Complex' has 2+ syllables, so we use 'more', not -er."
  },
  {
    incorrect: "TypeScript is more better for large projects.",
    correct: "TypeScript is better for large projects.",
    explanation: "'Better' is already comparative. Don't use 'more' with irregular comparatives."
  },
  {
    incorrect: "This approach is more simple.",
    correct: "This approach is simpler.",
    explanation: "'Simple' has 2 syllables but ends in -le, so we use -er (simpler)."
  },
  {
    incorrect: "The new server is more cheap to maintain.",
    correct: "The new server is cheaper to maintain.",
    explanation: "'Cheap' is a short adjective, so we add -er."
  },
  {
    incorrect: "Our API is quicker that the old one.",
    correct: "Our API is quicker than the old one.",
    explanation: "Use 'than' (not 'that') when making comparisons."
  },
  {
    incorrect: "MongoDB is fastest than PostgreSQL.",
    correct: "MongoDB is faster than PostgreSQL.",
    explanation: "'Fastest' is superlative (the fastest). Use 'faster' for comparing two things."
  }
];
