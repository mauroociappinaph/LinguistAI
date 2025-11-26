import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson11: Lesson = {
  id: "db11",
  title: "Performance Debugging",
  level: Difficulty.A1,
  description: "Learn to debug performance issues using Present Continuous and connectors to identify slowdowns and analyze system bottlenecks.",
  didYouKnow: "Performance bugs affect 60% of user satisfaction. Slow applications lose 1% of users for every 100ms delay, equivalent to losing $250 million annually for large platforms.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Investigating why application performance degrades under load and identifying optimization opportunities.",
  speaking: "Database queries are taking 5 seconds because indexes aren't being used. When multiple users access simultaneously, the server is slowing down significantly. This leads to user frustration and higher bounce rates.",
  speakingPracticeMode: "explanation",

  readingActivity: {title: "Reading: Performance Debugging Best Practices",
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
  },
  listeningActivity: {
    title: "Performance Review",
    transcript: "The app is too slow.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Performance Terms",
    explanation: "Pronunciation of performance terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Performance Optimization",
    objective: "Discuss performance improvements.",
    aiPersona: "Tech Lead",
    initialMessage: "We need to optimize the API."
  }
};
