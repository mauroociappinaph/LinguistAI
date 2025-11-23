import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "Python is most popular language.",
    correct: "Python is the most popular language.",
    explanation: "Superlatives always need 'the' before them."
  },
  {
    incorrect: "This is the more efficient solution I've found.",
    correct: "This is the most efficient solution I've found.",
    explanation: "'More' is comparative (2 things). Use 'most' for superlative (3+ things)."
  },
  {
    incorrect: "Redis is the most fast database.",
    correct: "Redis is the fastest database.",
    explanation: "'Fast' is short (1 syllable), so use -est, not 'most'."
  },
  {
    incorrect: "Vue is the most easy to learn.",
    correct: "Vue is the easiest to learn.",
    explanation: "'Easy' ends in -y. Change to -iest (easiest)."
  },
  {
    incorrect: "This is best solution.",
    correct: "This is the best solution.",
    explanation: "Don't forget 'the' before superlatives."
  },
  {
    incorrect: "React has the bigger community.",
    correct: "React has the biggest community.",
    explanation: "Use superlative (biggest) when implying it's #1 overall, not just comparing to one other."
  },
  {
    incorrect: "AWS is the popularest cloud platform.",
    correct: "AWS is the most popular cloud platform.",
    explanation: "'Popular' has 3 syllables, so use 'the most', not -est."
  }
];
