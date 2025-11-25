import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Feature Proposal Discussion",
  transcript:
    "**Alex (Product Manager):** Thanks for joining this planning session. I'd like to discuss adding real-time notifications to our application. Sarah, could you share your technical perspective?\\n\\n" +
    "**Sarah (Tech Lead):** Sure. I think we should consider two approaches: WebSockets or Server-Sent Events. WebSockets would give us bidirectional communication, which might be useful for future features. However, SSE could be simpler for our current needs.\\n\\n" +
    "**Mike (Backend Engineer):** We must ensure the solution can handle at least 50,000 concurrent connections. Our current infrastructure might not support that load.\\n\\n" +
    "**Sarah:** Good point. We would need to add Redis for pub/sub functionality, which could also improve our caching strategy. The implementation might take 6-8 weeks.\\n\\n" +
    "**Alex:** What about the mobile apps? Would this work for iOS and Android?\\n\\n" +
    "**Sarah:** It should work fine. We could use native WebSocket libraries on both platforms. The mobile teams might need a week or two to integrate, but it shouldn't be a blocker.\\n\\n" +
    "**Mike:** We should also think about fallback mechanisms. What if the WebSocket connection fails?\\n\\n" +
    "**Sarah:** Excellent question. We must implement graceful degradation. The app should fall back to polling if the WebSocket connection drops. We could poll every 30 seconds as a fallback.\\n\\n" +
    "**Alex:** What would be the infrastructure costs?\\n\\n" +
    "**Mike:** We would need to scale up our server capacity. The additional cost might be around $2,000 per month initially, but it could increase with user growth.\\n\\n" +
    "**Sarah:** I would recommend starting with a proof-of-concept. We could implement notifications for just one feature first—maybe new messages. This would allow us to test the infrastructure before rolling it out everywhere.\\n\\n" +
    "**Alex:** That sounds reasonable. Should we prioritize this over the search improvements?\\n\\n" +
    "**Sarah:** I think we should. Real-time notifications could significantly improve user engagement, which might have a bigger impact than search improvements.\\n\\n" +
    "**Mike:** Agreed. We could start the proof-of-concept next sprint if we get approval today.",

  comprehensionQuestions: [
    {
      question: "What two technical approaches does Sarah mention?",
      answer: "WebSockets and Server-Sent Events (SSE)."
    },
    {
      question: "How many concurrent connections must the solution handle?",
      answer: "At least 50,000 concurrent connections."
    },
    {
      question: "What would they need to add for pub/sub functionality?",
      answer: "They would need to add Redis."
    },
    {
      question: "What fallback mechanism does Sarah suggest?",
      answer: "The app should fall back to polling every 30 seconds if the WebSocket connection drops."
    },
    {
      question: "What does Sarah recommend starting with?",
      answer: "A proof-of-concept implementing notifications for just one feature (new messages)."
    }
  ],

  audioSrc: ""
};
