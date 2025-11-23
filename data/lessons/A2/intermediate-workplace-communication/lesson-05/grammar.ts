import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Expressing Trade-offs with 'While' and 'Although'",
  explanation:
    "Trade-off analysis requires balancing competing advantages. Use 'while' and 'although' to present contrasts professionally.\n\n" +
    "### Why it matters in IT:\n" +
    "Technology decisions always involve trade-offs:\n" +
    "• Performance vs. Developer Experience\n" +
    "• Flexibility vs. Structure\n" +
    "• Maturity vs. Innovation\n" +
    "• Cost vs. Features\n\n" +
    "### Structure:\n" +
    "**While** + [advantage A], [disadvantage A/advantage B]\n" +
    "• 'While React is flexible, it requires more setup.'\n" +
    "• 'While MongoDB is faster for writes, PostgreSQL offers better data integrity.'\n\n" +
    "**Although** + [disadvantage], [main point]\n" +
    "• 'Although Angular has a steep learning curve, it's excellent for large teams.'\n" +
    "• 'Although the library is new, it's already production-ready.'\n\n" +
    "**Balanced Trade-off Pattern**:\n" +
    "'While X is [advantage], Y is [advantage], so the choice depends on [factor].'",

  usage: "Use trade-off language when evaluating tools, presenting pros/cons, writing architecture decisions, or explaining technology choices.",

  rules: [
    {
      from: "While + advantage, disadvantage/contrast",
      to: "While Vue is easier to learn, React has better job opportunities."
    },
    {
      from: "Although + disadvantage, main argument",
      to: "Although TypeScript adds complexity, the type safety is worth it."
    },
    {
      from: "Present both sides fairly",
      to: "While GraphQL reduces over-fetching, REST is simpler for basic CRUD operations."
    },
    {
      from: "End with recommendation when needed",
      to: "While both are viable, React is better for our specific use case."
    }
  ],

  examples: [
    "While microservices offer better scalability, they add operational complexity.",
    "Although NoSQL databases are faster for certain queries, SQL databases provide better consistency.",
    "While AWS has the largest ecosystem, it's also the most expensive option.",
    "Although Rust is safer than C++, it has a steeper learning curve.",
    "While serverless reduces infrastructure management, it can be more costly at scale.",
    "Although the library is lightweight, it lacks some features that Redux provides.",
    "While TypeScript catches bugs at compile time, it requires additional build steps.",
    "Although Docker simplifies deployment, it adds a layer of abstraction to debug."
  ],

  commonMistakes: [
    {
      incorrect: "While React is popular, but Vue is easier.",
      correct: "While React is popular, Vue is easier.",
      explanation: "Don't use 'but' after 'while'—'while' already expresses contrast."
    },
    {
      incorrect: "Although the tool is good, however it's expensive.",
      correct: "Although the tool is good, it's expensive.",
      explanation: "Don't use 'however' after 'although'—choose one contrast word."
    },
    {
      incorrect: "While being new, the framework is mature.",
      correct: "Although the framework is new, it's mature. OR While the framework is new, it's already mature.",
      explanation: "Use 'although' (not 'while') for surprising contrasts."
    },
    {
      incorrect: "React is flexible. While Angular is structured.",
      correct: "While React is flexible, Angular is structured.",
      explanation: "'While' connects clauses in one sentence, not separate sentences."
    }
  ],

  writingExamples: [
    "Architecture Decision Record: 'While GraphQL provides more flexible querying capabilities than REST, it introduces additional complexity in caching and tooling. Although our team lacks GraphQL experience, the long-term benefits of reducing over-fetching outweigh the initial learning curve. We recommend adopting GraphQL for our new API, while keeping REST for legacy endpoints.'",
    "Technical proposal: 'While Kubernetes offers superior orchestration features, Docker Swarm is simpler to set up and maintain. Although Kubernetes has better community support, our small team may struggle with its complexity. For our current scale (3 services, 5 developers), Docker Swarm provides better value. While this may change as we grow, it's the right choice for now.'",
    "Code review: 'While this approach is more performant, it sacrifices readability. Although premature optimization is risky, this particular bottleneck justifies the complexity. Consider adding detailed comments explaining the optimization.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: '_____ PostgreSQL offers better data integrity, MongoDB is _____ for unstructured data.'",
    options: [
      "While / better",
      "Although / better",
      "While / the best",
      "Because / better"
    ],
    answer: "While / better"
  }
};
