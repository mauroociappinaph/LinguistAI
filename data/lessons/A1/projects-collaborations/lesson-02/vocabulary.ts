export const vocabulary = [
    {
      item: "code review",
      explanation: "The process of examining someone's code to check for mistakes and suggest improvements.",
      example: "All pull requests require at least two code reviews.",
      pronunciation: "/koʊd rɪˈvju/"
    },
    {
      item: "pull request",
      explanation: "A request to merge code changes into the main branch of a repository.",
      example: "Please submit a pull request when your feature is ready.",
      pronunciation: "/pʊl rɪˈkwɛst/"
    },
    {
      item: "commit message",
      explanation: "A short description of the changes made in a code commit.",
      example: "Use clear commit messages to explain what changed and why.",
      pronunciation: "/kəˈmɪt ˈmɛsɪdʒ/"
    },
    {
      item: "refactor",
      explanation: "To restructure existing code without changing its functionality.",
      example: "We should refactor this method to improve readability.",
      pronunciation: "/ˈrifæktər/"
    },
    {
      item: "merge conflict",
      explanation: "A situation when changes in different branches conflict and can't be merged automatically.",
      example: "Resolve the merge conflict before submitting the pull request.",
      pronunciation: "/mɜrdʒ ˈkɒnflɪkt/"
    },
    {
      item: "code coverage",
      explanation: "A metric that shows how much of the code is tested.",
      example: "We aim for at least 80% code coverage on new features.",
      pronunciation: "/koʊd ˈkʌvərɪdʒ/"
    },
    {
      item: "linting",
      explanation: "The process of running automated tools to check code quality and style.",
      example: "The linter caught several style violations in your code.",
      pronunciation: "/ˈlɪntɪŋ/"
    },
    {
      item: "edge case",
      explanation: "A scenario that occurs outside of normal operating parameters.",
      example: "Consider what happens with empty arrays - that's an edge case.",
      pronunciation: "/ɛdʒ keɪs/"
    },
    {
      item: "best practice",
      explanation: "A method or technique recognized as most effective.",
      example: "This follows JavaScript best practices for error handling.",
      pronunciation: "/bɛst ˈpræktɪs/"
    },
    {
      item: "technical debt",
      explanation: "The extra development work that results from choosing quick solutions now instead of better solutions later.",
      example: "Adding this quick fix will create technical debt for later.",
      pronunciation: "/ˈtɛknɪkəl dɛt/"
    },
    {
      item: "accept change",
      explanation: "To approve and incorporate a suggested code modification.",
      example: "I'll accept your change and commit it to the branch.",
      pronunciation: "/əkˈsɛpt tʃeɪndʒ/"
    },
    {
      item: "resolve thread",
      explanation: "To mark a discussion comment as addressed in a code review.",
      example: "Please resolve the thread once the issue is fixed.",
      pronunciation: "/rɪˈzɑlv θrɛd/"
    },
    {
      item: "blocking issue",
      explanation: "A critical problem that prevents code from being merged or deployed.",
      example: "This security vulnerability is a blocking issue for deployment.",
      pronunciation: "/ˈblɑkɪŋ ˈɪʃu/"
    },
    {
      item: "nitpick",
      explanation: "A minor, unimportant criticism, often about coding style.",
      example: "I'll leave this as a nitpick - the extra semicolon isn't critical.",
      pronunciation: "/ˈnɪtˌpɪk/"
    }
  ];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
    title: "Code Review Communication Patterns",
    chunks: [
      {
        chunk: "This ___ be simplified/extracted/improved.",
        usage: "Suggesting code improvements"
      },
      {
        chunk: "Consider adding ___ for [reason].",
        usage: "Making specific recommendations"
      },
      {
        chunk: "This ___ cause issues with [concern].",
        usage: "Highlighting potential problems"
      },
      {
        chunk: "What do you think about ___ instead?",
        usage: "Offering alternative approaches"
      },
      {
        chunk: "Great work on ___, just need to ___ here.",
        usage: "Balanced feedback (positive + suggestion)"
      }
    ]
  }];
