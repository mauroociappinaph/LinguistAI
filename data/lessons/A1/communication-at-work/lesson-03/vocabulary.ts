export const vocabulary = [
  {
    item: "comment",
    explanation: "A note in the code that explains its purpose or functionality.",
    example: "// This function validates user input before processing",
    pronunciation: "/ˈkɑmɛnt/"
  },
  {
    item: "documentation",
    explanation: "Written instructions and explanations for how to use code or systems.",
    example: "Complete documentation is essential for API usage.",
    pronunciation: "/ˌdɑkjʊmɛnˈteɪʃən/"
  },
  {
    item: "README",
    explanation: "A text file containing information about a project or software.",
    example: "Always update the README when adding new features.",
    pronunciation: "/ˈri mi/"
  },
  {
    item: "API",
    explanation: "Application Programming Interface - rules for how software components interact.",
    example: "The API provides methods for user authentication.",
    pronunciation: "/ˈæpi/"
  },
  {
    item: "endpoint",
    explanation: "A specific URL or connection point in an API.",
    example: "POST /users is the endpoint for creating new accounts.",
    pronunciation: "/ˈɛndˌpɔɪnt/"
  },
  {
    item: "parameter",
    explanation: "A variable passed to a function or method.",
    example: "The function takes an ID parameter and returns user data.",
    pronunciation: "/pəˈræmɪtər/"
  },
  {
    item: "deprecated",
    explanation: "Marked as no longer recommended for use, usually due to better alternatives.",
    example: "This method is deprecated - use the new version instead.",
    pronunciation: "/ˈdɛprɪˌkeɪtɪd/"
  },
  {
    item: "refactor",
    explanation: "To restructure existing code without changing its functionality.",
    example: "We need to refactor this method for better performance.",
    pronunciation: "/ˈrifæktər/"
  }
];

export const phrasalVerbs = [];

export const compoundWords = [];

export const functionalChunks = {
  title: "Code Documentation Patterns",
  chunks: [
    {
      chunk: "// ___ - [explanation]",
      usage: "Writing clear, descriptive code comments"
    },
    {
      chunk: "The [component] ___ and ___",
      usage: "Describing code functionality and behavior"
    },
    {
      chunk: "To use this, ___ first, then ___",
      usage: "Providing step-by-step usage instructions"
    }
  ]
};
