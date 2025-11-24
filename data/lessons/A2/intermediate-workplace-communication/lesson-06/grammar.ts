import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Present Perfect for System Analysis",
  explanation:
    "Present Perfect connects past actions to current system state. Essential for incident reports, performance analysis, and status updates.\n\n" +
    "### Why it matters in IT:\n" +
    "System analysis requires linking historical events to current state:\n" +
    "• Recent deployments affecting current performance\n" +
    "• Bugs that have been discovered and need fixing\n" +
    "• Performance degradations that started at some point\n" +
    "• Incidents that have impacted availability\n\n" +
    "### Structure:\n" +
    "**have/has + past participle**\n" +
    "• 'The service has crashed three times this week.'\n" +
    "• 'We've identified the root cause.'\n" +
    "• 'The database has been slow since the migration.'\n\n" +
    "**Common time markers**:\n" +
    "• **since** (point in time): 'since Monday', 'since the deployment'\n" +
    "• **for** (duration): 'for two hours', 'for three days'\n" +
    "• **already** (completed sooner than expected): 'We've already fixed the bug.'\n" +
    "• **yet** (in questions/negatives): 'Has the service recovered yet?'\n" +
    "• **just** (very recently): 'The system has just gone down.'\n\n" +
    "**Present Perfect vs Simple Past**:\n" +
    "• Present Perfect: 'The API has been slow.' (still relevant now)\n" +
    "• Simple Past: 'The API was slow yesterday.' (specific time, not relevant now)",

  usage: "Use in incident reports, postmortems, status updates, root cause analysis, performance reviews, sprint retrospectives, and system health checks.",

  rules: [
    {
      from: "Recent events affecting present",
      to: "The deployment has caused a 20% increase in error rates."
    },
    {
      from: "Unspecified time (experience)",
      to: "We've encountered this memory leak before."
    },
    {
      from: "Since + point in time",
      to: "Performance has degraded since the database migration last week."
    },
    {
      from: "For + duration",
      to: "The cache has been full for three hours now."
    },
    {
      from: "Just/already/yet in recent updates",
      to: "We've just deployed the fix. The issue hasn't been resolved yet, but we've already identified the bottleneck."
    }
  ],

  examples: [
    "The service has crashed five times in the last 24 hours.",
    "We've identified the root cause as a memory leak in the parser module.",
    "The database has been experiencing slow queries since the migration.",
    "Performance has improved significantly after the optimization.",
    "The API response time has decreased from 500ms to 120ms.",
    "We've observed unusual spikes in CPU usage over the past week.",
    "The cache invalidation issue has caused 15% of requests to fail.",
    "The monitoring system has detected three anomalies in the last hour.",
    "The load balancer has been distributing traffic unevenly since Tuesday.",
    "We've rolled back the deployment that has been causing errors.",
    "The indexing process has been running for six hours without completion.",
    "Network latency has increased by 40% since the infrastructure change."
  ],

  commonMistakes: [
    {
      incorrect: "The system crashed yesterday.",
      correct: "The system has crashed. (if still relevant)",
      explanation: "Use Present Perfect when the past event affects the present. Use Simple Past with specific time markers like 'yesterday'."
    },
    {
      incorrect: "We have deployed the fix yesterday.",
      correct: "We deployed the fix yesterday.",
      explanation: "Don't use Present Perfect with specific past time markers (yesterday, last week, in 2023)."
    },
    {
      incorrect: "The service is down since 3 PM.",
      correct: "The service has been down since 3 PM.",
      explanation: "Use Present Perfect (not present simple) with 'since' and 'for'."
    },
    {
      incorrect: "How long the database is slow?",
      correct: "How long has the database been slow?",
      explanation: "Use Present Perfect for duration questions: 'How long has...?'"
    },
    {
      incorrect: "We already have fixed the bug.",
      correct: "We have already fixed the bug. OR We've already fixed the bug.",
      explanation: "'Already' goes between 'have' and the past participle."
    },
    {
      incorrect: "The API didn't recover yet.",
      correct: "The API hasn't recovered yet.",
      explanation: "Use Present Perfect (not Simple Past) with 'yet' in negative sentences."
    }
  ],

  writingExamples: [
    "Incident Report: 'The authentication service has been experiencing intermittent failures since 14:30 UTC. We've identified the issue as a database connection pool exhaustion. The service has recovered, but we've observed three similar incidents in the past month. Root cause analysis has revealed that connection timeouts have increased by 300% since the last deployment.'",
    "Postmortem: 'On November 15th, the payment processing system experienced a complete outage that has affected approximately 5,000 transactions. Investigation has shown that a recent code change has introduced a race condition in the transaction handler. We've implemented a fix and have deployed it to production. The system has been stable for 48 hours since the fix.'",
    "Performance Review: 'Over the past quarter, we've made significant improvements to the search indexing pipeline. Query performance has improved by 60%, and we've reduced indexing time from 4 hours to 45 minutes. The changes have been live for two weeks, and we haven't observed any regressions. User satisfaction scores have increased from 3.2 to 4.5 since these optimizations.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'The service _____ three times today, and we _____ the root cause yet.'",
    options: [
      "crashed / didn't find",
      "has crashed / didn't find",
      "crashed / haven't found",
      "has crashed / haven't found"
    ],
    answer: "has crashed / haven't found"
  }
};
