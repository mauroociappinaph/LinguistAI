import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Postmortem Report: Payment Service Outage",
  text:
    "**Incident Summary**\\n\\n" +
    "On November 18, 2024, our payment processing service experienced a complete outage that affected approximately 15,000 transactions over a 4-hour period. The incident has been classified as Severity 1 due to revenue impact.\\n\\n" +
    "**Timeline**\\n\\n" +
    "The service has been stable for six months prior to this incident. At 14:23 UTC, our monitoring system detected an unusual spike in database connection timeouts. Within minutes, the payment API response time has increased from 150ms to over 5000ms, making the service effectively unusable.\\n\\n" +
    "We've observed three previous warnings about connection pool exhaustion in the past week, but they have resolved automatically. This time, the issue hasn't recovered on its own.\\n\\n" +
    "**Root Cause**\\n\\n" +
    "Our investigation has revealed that a recent code change has introduced a database connection leak. The payment processor has been holding connections open without releasing them properly. Over the course of several hours, the connection pool has filled up completely.\\n\\n" +
    "The problem has been exacerbated by increased Black Friday traffic. Under normal load, the leak hasn't been noticeable, but our traffic has doubled since the sale started.\\n\\n" +
    "**Resolution**\\n\\n" +
    "At 15:45 UTC, we've rolled back to version 2.4.2, which didn't have the connection leak. The service has recovered within 10 minutes of the rollback. Performance has been normal since then.\\n\\n" +
    "We've already implemented a permanent fix in version 2.5.1, which includes proper connection management and has passed stress testing. The fix has been deployed to production and we haven't seen any regressions.\\n\\n" +
    "**Lessons Learned**\\n\\n" +
    "Since this incident, we've improved our monitoring to detect connection leaks earlier. We've also added automated stress tests that simulate high traffic conditions. These improvements have been in place for 48 hours and have already prevented one potential issue.",

  comprehensionQuestions: [
    {
      question: "How long has the payment service been stable before the outage?",
      answer: "The service has been stable for six months."
    },
    {
      question: "What happened to the API response time during the incident?",
      answer: "The API response time has increased from 150ms to over 5000ms."
    },
    {
      question: "What has the investigation revealed as the root cause?",
      answer: "A recent code change has introduced a database connection leak in the payment processor."
    },
    {
      question: "How long has the connection pool leak been going on?",
      answer: "Over the course of several hours, the connection pool has filled up completely."
    },
    {
      question: "Have they seen any issues since implementing the permanent fix?",
      answer: "No, they haven't seen any regressions since deploying the fix."
    }
  ]
};
