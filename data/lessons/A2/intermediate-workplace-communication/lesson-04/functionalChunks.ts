import { FunctionalChunk } from '../../../../../types';

export const functionalChunks: FunctionalChunk[] = [
  {
    chunk: "After evaluating X, Y, and Z, I recommend...",
    usage: "Present a recommendation after analysis."
  },
  {
    chunk: "While X is [advantage], Y is [advantage], making Z the best choice.",
    usage: "Present trade-offs and reach a conclusion."
  },
  {
    chunk: "For teams/projects that [requirement], X is better than Y.",
    usage: "Context-specific recommendation."
  },
  {
    chunk: "The main trade-off is between [feature A] and [feature B].",
    usage: "Identify key decision factors."
  },
  {
    chunk: "Among all options, X stands out as the most [quality].",
    usage: "Highlight winner in comparison."
  },
  {
    chunk: "X, which is [description], is [comparative/superlative].",
    usage: "Combine relative clause with comparison."
  },
  {
    chunk: "From a [perspective] point of view, X is the better choice.",
    usage: "Justify from specific angle (cost, performance, etc.)."
  }
];
