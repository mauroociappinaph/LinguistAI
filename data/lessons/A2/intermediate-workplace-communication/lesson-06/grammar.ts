import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Present Perfect for System Analysis",
  explanation: "Use Present Perfect to describe recent system changes and their current impact. Essential for status updates and root cause analysis.\n\n**Structure**: have/has + past participle\n• 'The service has crashed three times this week.'\n• 'We've identified the bottleneck.'\n\n**Use when**: Connecting past events to present state",
  usage: "Status reports, incident analysis, code reviews, sprint retrospectives",
  rules: [
    { from: "Recent impact", to: "The recent deployment has improved performance by 40%." },
    { from: "Unspecified time", to: "We've encountered this bug before." }
  ],
  examples: [
    "The database has been slow since the migration.",
    "We've optimized the query execution time.",
    "The API response times have decreased significantly."
  ],
  commonMistakes: [
    { incorrect: "The system crashed yesterday.", correct: "The system has crashed (if still relevant now).", explanation: "Use Present Perfect when the past event affects the present." }
  ],
  writingExamples: ["System analysis: 'The cache invalidation issue has caused 15% of requests to fail. We've implemented a fix that has reduced errors to 2%.'"],
  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'The service _____ three times today.'",
    options: ["crashed", "has crashed", "is crashing", "crashes"],
    answer: "has crashed"
  }
};
