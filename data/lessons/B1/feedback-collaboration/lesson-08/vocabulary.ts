import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "trade-off",
    explanation: "A balance achieved between two desirable but incompatible features.",
    example: "There's a trade-off between performance and code readability.",
    pronunciation: "/ˈtreɪd ɔf/"
  },
  {
    item: "scalability",
    explanation: "The capability of a system to handle a growing amount of work.",
    example: "If we used microservices, scalability would improve significantly.",
    pronunciation: "/ˌskeɪləˈbɪləti/"
  },
  {
    item: "bottleneck",
    explanation: "A point of congestion that reduces overall system performance.",
    example: "The database is a bottleneck — we ought to optimize the queries.",
    pronunciation: "/ˈbɑtəlˌnɛk/"
  },
  {
    item: "overhead",
    explanation: "Extra resources (time, memory, processing) required beyond the minimum necessary.",
    example: "This approach would reduce overhead significantly.",
    pronunciation: "/ˈoʊvərˌhɛd/"
  },
  {
    item: "maintainability",
    explanation: "How easily a system can be modified or updated.",
    example: "We had better consider maintainability over quick fixes.",
    pronunciation: "/meɪnˌteɪnəˈbɪləti/"
  },
  {
    item: "edge case",
    explanation: "An unusual or extreme situation that a system must handle.",
    example: "If we tested more edge cases, we would catch these bugs earlier.",
    pronunciation: "/ɛdʒ keɪs/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [];
export const compoundWords: VocabularyItem[] = [];

export const functionalChunks = {
  title: "Debating Technical Approaches",
  chunks: [
    {
      chunk: "If we **[past verb]**, we **could/would** [benefit].",
      usage: "Proposing hypothetical improvements"
    },
    {
      chunk: "We **ought to** consider [alternative].",
      usage: "Making formal recommendations"
    },
    {
      chunk: "You **had better** [action] because [consequence].",
      usage: "Strong advice with warning"
    },
    {
      chunk: "I **would rather** [option A] than [option B].",
      usage: "Expressing preference"
    },
    {
      chunk: "**What if** we [suggestion]? That **would** [outcome].",
      usage: "Proposing hypothetical scenarios"
    }
  ]
};
