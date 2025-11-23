import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "While React is good, but it's complex.",
    correct: "While React is good, it's complex.",
    explanation: "Don't use 'but' after 'while'—'while' already shows contrast."
  },
  {
    incorrect: "Although being expensive, AWS is reliable.",
    correct: "Although AWS is expensive, it's reliable. OR While AWS is expensive, it's reliable.",
    explanation: "Use a complete clause after 'although', not 'being + adjective'."
  },
  {
    incorrect: "React is flexible. While Vue is simple.",
    correct: "While React is flexible, Vue is simple.",
    explanation: "'While' connects clauses in one sentence, not separate sentences."
  },
  {
    incorrect: "Although the tool is good, however it costs too much.",
    correct: "Although the tool is good, it costs too much.",
    explanation: "Don't use 'however' after 'although'. Choose one."
  },
  {
    incorrect: "While faster, but MongoDB lacks ACID compliance.",
    correct: "While MongoDB is faster, it lacks ACID compliance.",
    explanation: "Complete the first clause and don't use 'but' with 'while'."
  },
  {
    incorrect: "Though Rust is safe, but it's hard to learn.",
    correct: "Although Rust is safe, it's hard to learn. OR While Rust is safe, it's hard to learn.",
    explanation: "Don't combine 'though/although' with 'but'."
  },
  {
    incorrect: "Svelte is innovative. Although it has small community.",
    correct: "Although Svelte is innovative, it has a small community.",
    explanation: "Make the surprising/negative clause come second when using 'although'."
  }
];
