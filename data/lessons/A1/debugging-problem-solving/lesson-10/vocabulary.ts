export const vocabulary = [
    {
      item: "root cause",
      explanation: "The fundamental underlying reason for a problem.",
      example: "We identified the root cause as a race condition in the thread pool.",
      pronunciation: "/rut kɔz/"
    }
  ];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
    title: "Root Cause Analysis Patterns",
    chunks: [
      {
        chunk: "[Problem] occurred because [cause]",
        usage: "Explaining direct causes of bugs"
      },
      {
        chunk: "When [trigger], [result]",
        usage: "Describing event triggers"
      },
      {
        chunk: "It [action] because [reason]",
        usage: "Personal investigation findings"
      }
    ]
  }];
