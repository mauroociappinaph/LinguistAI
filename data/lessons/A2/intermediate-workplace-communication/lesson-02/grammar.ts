import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Superlative Adjectives for Ranking Technologies",
  explanation:
    "Superlatives help you identify the best, fastest, most efficient option among three or more technologies. Essential for making recommendations and justifying choices.\n\n" +
    "### Why it matters in IT:\n" +
    "When evaluating multiple solutions, you need to identify the top performer. Superlatives are used in:\n" +
    "• Technology rankings and comparisons\n" +
    "• Performance benchmarks and reports\n" +
    "• Recommendation reports for stakeholders\n" +
    "• Awards, certifications, and tech reviews\n\n" +
    "### Structure:\n" +
    "**Short adjectives (1 syllable)**: **the** + adjective + **-est**\n" +
    "• fast → the fastest\n" +
    "• small → the smallest\n" +
    "• old → the oldest\n\n" +
    "**Long adjectives (2+ syllables)**: **the most/least** + adjective\n" +
    "• complex → the most complex\n" +
    "• powerful → the most powerful\n" +
    "• efficient → the least efficient\n\n" +
    "**Irregular forms**:\n" +
    "• good → the best\n" +
    "• bad → the worst\n" +
    "• many → the most\n" +
    "• little → the least",

  usage: "Use superlatives when ranking technologies among 3+ options, writing comparison reports, presenting to stakeholders, or citing industry standards.",

  rules: [
    {
      from: "the + short adjective + -est",
      to: "Redis is the fastest option for caching among all the databases we tested."
    },
    {
      from: "the most + long adjective",
      to: "Kubernetes is the most popular container orchestration platform in the industry."
    },
    {
      from: "Irregular: the best/worst",
      to: "React is currently the best choice for our frontend needs."
    },
    {
      from: "Spelling: -y → -iest",
      to: "Vue is the easiest (not *most easy) framework to learn for beginners."
    }
  ],

  examples: [
    "Python is the most popular programming language for data science.",
    "Rust is one of the fastest languages for systems programming.",
    "AWS is the largest cloud platform by market share.",
    "Redis is the fastest in-memory data store.",
    "TypeScript is the best option for large-scale applications.",
    "MongoDB is one of the most flexible NoSQL databases.",
    "Visual Studio Code is the most widely used code editor.",
    "GraphQL is the most efficient API query language for complex data."
  ],

  commonMistakes: [
    {
      incorrect: "React is the most fast framework.",
      correct: "React is the fastest framework.",
      explanation: "'Fast' is short (1 syllable), so we use -est, not 'most'."
    },
    {
      incorrect: "This is the better solution I've found.",
      correct: "This is the best solution I've found.",
      explanation: "'Better' is comparative (comparing 2). Use 'best' for superlative (3+)."
    },
    {
      incorrect: "Python is most popular language.",
      correct: "Python is the most popular language.",
      explanation: "Superlatives always need 'the' before them."
    },
    {
      incorrect: "Vue is the most easy to learn.",
      correct: "Vue is the easiest to learn.",
      explanation: "'Easy' ends in -y, so we change it to -iest (easiest)."
    },
    {
      incorrect: "This is the popularest framework.",
      correct: "This is the most popular framework.",
      explanation: "'Popular' has 3 syllables, so we use 'the most', not -est."
    }
  ],

  writingExamples: [
    "In our evaluation of 5 frontend frameworks, React emerged as the most versatile and the best supported by the community. Vue was the easiest to learn, while Angular proved to be the most structured for enterprise applications.",
    "According to Stack Overflow's 2023 survey, Rust is the most loved programming language for the eighth consecutive year, demonstrating its position as one of the best choices for developers prioritizing performance and safety.",
    "Among the three cloud platforms (AWS, Azure, GCP), AWS offers the most services and the largest market share, making it the safest choice for enterprise deployments."
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: Among all the databases we tested, PostgreSQL proved to be _____ for complex queries.",
    options: [
      "the more reliable",
      "the most reliable",
      "the reliablest",
      "most reliable"
    ],
    answer: "the most reliable"
  }
};
