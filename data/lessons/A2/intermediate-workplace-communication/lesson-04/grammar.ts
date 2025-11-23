import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Integrated Comparison Language for Framework Analysis",
  explanation:
    "This lesson integrates comparatives, superlatives, and relative clauses to perform comprehensive framework comparisons. Essential for technical decision-making and architecture discussions.\n\n" +
    "### Why it matters in IT:\n" +
    "Real-world technology decisions require combining multiple grammar structures:\n" +
    "• Comparatives: 'React is **faster than** Vue for large apps'\n" +
    "• Superlatives: 'React has **the largest** community'\n" +
    "• Relative clauses: 'Frameworks **that** prioritize performance'\n" +
    "• Combined: 'React, **which** is **more mature than** Svelte, is **the best choice** for teams **that** need stability'\n\n" +
    "### Integration Patterns:\n" +
    "**Pattern 1**: Comparative + Relative Clause\n" +
    "• 'Vue is easier to learn than Angular, especially for developers who are new to frontend.'\n\n" +
    "**Pattern 2**: Superlative + Justification\n" +
    "• 'React is the most popular framework because it has the largest ecosystem.'\n\n" +
    "**Pattern 3**: Trade-off Analysis\n" +
    "• 'While Angular is more structured than React, it's also more complex for beginners.'\n\n" +
    "**Pattern 4**: Recommendation with Evidence\n" +
    "• 'For projects that require rapid development, Vue is better than Angular and simpler than React.'",

  usage: "Use integrated comparison language when writing technical proposals, evaluating tools, participating in architecture discussions, or creating comparison reports.",

  rules: [
    {
      from: "Start with context (relative clause)",
      to: "For teams that prioritize developer experience, Vue is the best option."
    },
    {
      from: "Compare features (comparative)",
      to: "React is more flexible than Vue but less opinionated."
    },
    {
      from: "Identify the winner (superlative)",
      to: "Among all options, React has the most job opportunities."
    },
    {
      from: "Present trade-offs",
      to: "While Svelte is the fastest, it has the smallest community support."
    }
  ],

  examples: [
    "React, which is maintained by Meta, is more popular than Vue but less easy to learn.",
    "For developers who are new to frontend, Vue is the best starting point because it's simpler than React.",
    "Angular is the most structured framework, which makes it better for large enterprise teams.",
    "Svelte, which compiles to vanilla JavaScript, is faster than frameworks that use a virtual DOM.",
    "The framework that offers the best performance is Svelte, but React has better ecosystem support.",
    "Among frameworks that support TypeScript natively, Angular is the most opinionated.",
    "React is more widely used than Vue in the job market, making it the safer choice for career growth.",
    "Vue's documentation, which is clearer than Angular's, makes it easier for beginners to learn."
  ],

  commonMistakes: [
    {
      incorrect: "React is the better framework.",
      correct: "React is better than Vue for large-scale applications. OR React is the best framework for our needs.",
      explanation: "Use comparative 'better than' when comparing 2, or superlative 'the best' for 3+. Don't use 'the better'."
    },
    {
      incorrect: "Vue, that is easy to learn, is popular.",
      correct: "Vue, which is easy to learn, is popular.",
      explanation: "Use 'which' (not 'that') for non-defining clauses with commas."
    },
    {
      incorrect: "React has the bigger community than Vue.",
      correct: "React has a bigger community than Vue. OR React has the biggest community among all frameworks.",
      explanation: "Don't mix comparative and superlative. Use either 'bigger than' OR 'the biggest'."
    },
    {
      incorrect: "The framework what we chose is React.",
      correct: "The framework that we chose is React.",
      explanation: "Use 'that/which', never 'what' for relative clauses."
    }
  ],

  writingExamples: [
    "Technical proposal: 'After evaluating React, Vue, and Angular—the three most popular frontend frameworks—I recommend React for our project. React is more flexible than Angular, which allows our team to choose their preferred patterns. While Vue is easier to learn than React, React has better integration with the tools that we already use, particularly TypeScript and our existing Redux codebase. Additionally, React has the largest community, which means better support for the advanced features that we'll need.'",
    "Architecture document: 'The framework that best fits our requirements is Next.js, which is built on React. Next.js is faster than traditional React apps for server-side rendering, and it's simpler than setting up SSR manually. Among all meta-frameworks, Next.js is the most mature and has the best documentation. For teams that prioritize performance and SEO, Next.js is clearly the best choice.'",
    "Code review comment: 'The component library that you're proposing is interesting, but Material-UI, which is more established, might be better for our use case. Material-UI has more components than this library and better TypeScript support. While this newer library is lighter, Material-UI's larger community makes it the safer choice for long-term maintenance.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'Among the frameworks _____ we evaluated, React is _____ for teams _____ need strong TypeScript support.'",
    options: [
      "that / the best / who",
      "that / the best / that",
      "which / better / that",
      "what / best / who"
    ],
    answer: "that / the best / that"
  }
};
