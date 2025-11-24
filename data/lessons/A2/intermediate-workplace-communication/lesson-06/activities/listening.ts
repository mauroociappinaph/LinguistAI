import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "System Performance Review Meeting",
  transcript:
    "**Sarah (Tech Lead):** Good morning everyone. Let's review the system performance metrics for this month. Overall, things have been improving, but we've noticed some concerning trends.\\n\\n" +
    "**Mike (DevOps Engineer):** Yeah, I've been monitoring the dashboard. The API response time has decreased significantly since we implemented caching. We've gone from an average of 800ms to 250ms.\\n\\n" +
    "**Sarah:** That's excellent progress, Mike. How long has the cache been running?\\n\\n" +
    "**Mike:** For about three weeks now, and we haven't encountered any cache invalidation issues. The hit rate has been stable at around 85%.\\n\\n" +
    "**Lisa (Backend Developer):** I've been tracking the database query performance as well. We've identified three slow queries that have been affecting load times. I've already optimized two of them, and the third one is being tested.\\n\\n" +
    "**Sarah:** Good work. What's the impact been so far?\\n\\n" +
    "**Lisa:** Well, page load times have improved by 40%. The optimization has been live for five days, and we've observed consistent improvements.\\n\\n" +
    "**Mike:** One thing that concerns me is the memory usage. It has been steadily increasing over the past two weeks. We haven't hit any critical thresholds yet, but if this pattern continues, we might face issues next month.\\n\\n" +
    "**Sarah:** Have you identified the cause?\\n\\n" +
    "**Mike:** Not yet. We've been profiling the application, but we haven't found the source of the leak. I've narrowed it down to either the background job processor or the session management system.\\n\\n" +
    "**Lisa:** I've experienced something similar before. It might be related to how we're handling WebSocket connections. Have you checked connection cleanup?\\n\\n" +
    "**Mike:** Actually, I haven't. That's a good point. I'll investigate that this afternoon.\\n\\n" +
    "**Sarah:** Excellent. Let me summarize what we've accomplished and what needs attention. We've successfully reduced API response times and optimized database queries. However, we've discovered a potential memory leak that requires immediate investigation. Mike, can you report back by end of day tomorrow?\\n\\n" +
    "**Mike:** Absolutely. I'll have a root cause analysis ready by then.",

  comprehensionQuestions: [
    {
      question: "How much has the API response time decreased?",
      answer: "From an average of 800ms to 250ms since implementing caching."
    },
    {
      question: "How long has the cache been running without issues?",
      answer: "For about three weeks with a stable hit rate of around 85%."
    },
    {
      question: "What has Lisa been working on?",
      answer: "Tracking and optimizing database query performance that has been affecting load times."
    },
    {
      question: "How much have page load times improved?",
      answer: "Page load times have improved by 40%."
    },
    {
      question: "What concern does Mike raise about memory usage?",
      answer: "Memory usage has been steadily increasing over the past two weeks and might become an issue next month."
    }
  ],

  audioSrc: ""
};
