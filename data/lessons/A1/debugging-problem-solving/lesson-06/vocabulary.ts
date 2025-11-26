export const vocabulary = [];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
    title: "Code Review Discussion Patterns",
    chunks: [
      {
        chunk: "___ [action] because [reason]",
        usage: "Explaining why code changes are needed"
      },
      {
        chunk: "If [condition] ___ , then [result] ___",
        usage: "Describing conditional behaviors in code"
      },
      {
        chunk: "__ [issue] ___ when [moment]",
        usage: "Timing causes of bugs during review"
      },
      {
        chunk: "First [process] ___ , then [next] ___",
        usage: "Explaining sequence of operations"
      }
    ]
  }];
