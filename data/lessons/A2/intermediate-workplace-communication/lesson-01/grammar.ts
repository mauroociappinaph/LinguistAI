import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Comparative Adjectives for Framework Comparison",
  explanation:
    "Comparatives allow you to compare two frameworks, tools, or technologies. This is essential when making technical decisions, writing documentation, or participating in architecture discussions.\n\n" +
    "### Why it matters in IT:\n" +
    "Choosing the right tool often requires comparing options. You'll use comparatives in:\n" +
    "• Tech discussions and decision-making meetings\n" +
    "• Technical documentation and blog posts\n" +
    "• Code reviews when suggesting alternatives\n" +
    "• Performance analysis and benchmarking\n\n" +
    "### Structure:\n" +
    "**Short adjectives (1 syllable)**: Add **-er** + **than**\n" +
    "• fast → faster than\n" +
    "• small → smaller than\n" +
    "• old → older than\n\n" +
    "**Long adjectives (2+ syllables)**: Use **more** + adjective + **than**\n" +
    "• complex → more complex than\n" +
    "• powerful → more powerful than\n" +
    "• efficient → more efficient than\n\n" +
    "**Irregular forms**:\n" +
    "• good → better than\n" +
    "• bad → worse than\n" +
    "• many/much → more than\n" +
    "• little → less than",

  usage: "Use comparatives when analyzing trade-offs, recommending tools, writing technical comparisons, or discussing performance metrics.",

  rules: [
    {
      from: "Short adjective + -er + than",
      to: "Redis is faster than traditional databases for caching."
    },
    {
      from: "more + long adjective + than",
      to: "Kubernetes is more complex than Docker Swarm."
    },
    {
      from: "Irregular: better/worse",
      to: "TypeScript is better than JavaScript for large codebases."
    },
    {
      from: "Spelling changes: -y → -ier",
      to: "Docker containers are lighter (not more light) than VMs."
    }
  ],

  examples: [
    "React has a larger community than Svelte.",
    "Vue is easier to learn than Angular.",
    "GraphQL is more flexible than REST for complex queries.",
    "NoSQL databases are faster than SQL for certain workloads.",
    "Microservices are more scalable than monolithic architecture.",
    "Python is simpler than Java for scripting tasks.",
    "Static typing is better than dynamic typing for maintainability.",
    "WebAssembly is faster than JavaScript for compute-intensive operations."
  ],

  commonMistakes: [
    {
      incorrect: "Redis is more fast than PostgreSQL.",
      correct: "Redis is faster than PostgreSQL.",
      explanation: "'Fast' is a short adjective, so we add -er, not 'more'."
    },
    {
      incorrect: "Kubernetes is complexer than Docker.",
      correct: "Kubernetes is more complex than Docker.",
      explanation: "'Complex' is a long adjective (2 syllables), so we use 'more', not -er."
    },
    {
      incorrect: "TypeScript is more better than JavaScript.",
      correct: "TypeScript is better than JavaScript.",
      explanation: "'Better' is already the comparative form of 'good'. Don't add 'more'."
    }
  ],

  writingExamples: [
    "When comparing frameworks, structure your argument: 'React is more popular than Vue because it has a larger ecosystem and more job opportunities. However, Vue is easier to learn, making it better for beginners.'",
    "In technical documentation: 'Our new caching layer is 40% faster than the previous implementation and consumes less memory under high load.'",
    "During code review: 'Using a Map data structure would be more efficient than an array for this use case because lookups are O(1) instead of O(n).'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete the sentence: 'Docker containers are _____ VMs because they share the host OS kernel.'",
    options: [
      "more light than",
      "lighter than",
      "more lighter than",
      "light than"
    ],
    answer: "lighter than"
  }
};
