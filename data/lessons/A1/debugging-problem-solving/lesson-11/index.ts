import { Lesson, Difficulty } from '../../../../../types';

export const lesson11: Lesson = {
  id: "db11",
  title: "Performance Debugging",
  level: Difficulty.A1,
  description: "Learn to debug performance issues using Present Continuous and connectors to identify slowdowns and analyze system bottlenecks.",
  didYouKnow: "Performance bugs affect 60% of user satisfaction. Slow applications lose 1% of users for every 100ms delay, equivalent to losing $250 million annually for large platforms.",

  grammar: {
    title: "Present Continuous + Connectors for Performance Issues",
    explanation:
      "**Present Continuous**: Ongoing performance problems - 'System is slowing down', 'Database is lagging'\n**Connectors**: Link performance issues and causes - 'Because, When, Results in, Leads to'\n\nPerformance analysis:\n\n🐌 **Current issues**: 'Database is taking 5 seconds to respond'\n⚡ **Cause/effect**: 'Responses are slowing down because queries are getting complex'\n📊 **Consequences**: 'Page load leads to timeouts'",
    usage:
      "Performance debugging:\n\n⚡ **Identification**: 'API is responding slowly when traffic increases'\n🔍 **Analysis**: 'CPU utilization is spiking during data processing'\n📈 **Impact**: 'User experience degrades when network is slow'",
    rules: [
      {
        from: "Ongoing slowdowns",
        to: "Subject + is/are + verb-ing (database + is + slowing)"
      },
      {
        from: "Performance connectors",
        to: "because/so/results in (slowing + because + overload)"
      },
      {
        from: "Impact statements",
        to: "leads to/results in (overload + leads to + crashes)"
      }
    ],
    examples: [
      "The application **is slowing down** because **memory usage is increasing** exponentially.",
      "**When** users **upload** large files, **the server is lagging** badly.",
      "Database queries **are taking** 3 seconds **because** indexes are missing.",
      "Page load time **results in** higher bounce rates and **lost revenue**.",
      "CPU utilization **leads to** server timeouts during peak traffic."
    ],
    commonMistakes: [
      {
        incorrect: "database slow",
        correct: "database is slowing down",
        explanation:
          "Use continuous for ongoing performance degradation."
      },
      {
        incorrect: "Because memory, app crash",
        correct: "Because memory is leaking, app crashes",
        explanation:
          "Complete clauses and use appropriate connector structure."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The server ___ because memory ___",
      options: ["is slowing down, is leaking", "slowed down, leaked", "slows down, leaks", "will slow down, will leak"],
      answer: "is slowing down, is leaking"
    }
  },
  vocabulary: [
    {
      item: "performance bottleneck",
      explanation: "A component that limits overall system performance.",
      example: "Database connection pooling is the performance bottleneck.",
      pronunciation: "/pərˈfɔrməns ˈbɑtəlˌnɛk/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Performance Debugging Patterns",
    chunks: [
      {
        chunk: "[System] is [verb-ing] because [reason]",
        usage: "Identifying performance degradation causes"
      },
      {
        chunk: "[Issue] results in/leads to [impact]",
        usage: "Measuring performance impact"
      }
    ]
  },
  scenario: "Investigating why application performance degrades under load and identifying optimization opportunities.",
  speaking: "Database queries are taking 5 seconds because indexes aren't being used. When multiple users access simultaneously, the server is slowing down significantly. This leads to user frustration and higher bounce rates.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Reading: Performance Debugging Best Practices",
    text: "Performance debugging requires systematic measurement and analysis. Start with user-perceived slowdowns: slow response times, stuck loading indicators, or unresponsive interfaces. Use profiling tools to identify bottlenecks: database queries, network requests, memory consumption, or CPU utilization. Document performance metrics before and after changes. Consider scalability: test with multiple users or large datasets.",
    comprehensionQuestions: [
      {
        question: "What is the starting point for performance debugging?",
        answer: "User-perceived slowdowns"
      },
      {
        question: "What should be measured in performance debugging?",
        answer: "Performance metrics before and after changes"
      },
      {
        question: "What aspect should be considered for future needs?",
        answer: "Scalability"
      }
    ],
  }
};
