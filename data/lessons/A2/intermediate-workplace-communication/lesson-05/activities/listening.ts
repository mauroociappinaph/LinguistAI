import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Database Selection Discussion",
  transcript:
    "Team, we need to decide between PostgreSQL and MongoDB for our new service. Let me present the trade-offs.\n\n" +
    "While PostgreSQL offers ACID compliance, MongoDB provides better flexibility for unstructured data. Although our current data is mostly structured, we expect that to change as we add features.\n\n" +
    "Performance-wise, while MongoDB is faster for writes, PostgreSQL is better for complex queries. Although we prioritize read performance now, our write volume will increase significantly.\n\n" +
    "For team expertise, while our team knows PostgreSQL well, MongoDB's learning curve isn't steep. Although retraining takes time, the long-term benefits might outweigh the short-term costs.\n\n" +
    "Scalability presents interesting trade-offs. While MongoDB scales horizontally more easily, it sacrifices some data consistency guarantees. Although eventual consistency is acceptable for some features, critical transactions need ACID.\n\n" +
    "My recommendation: use PostgreSQL for transactional data and MongoDB for analytics and logs. While this adds operational complexity, it lets us optimize for each use case. Although managing two databases requires more effort, the performance benefits justify the cost.\n\n" +
    "What concerns do you have about this hybrid approach?",

  comprehensionQuestions: [
    {
      question: "What advantage does PostgreSQL offer over MongoDB?",
      answer: "PostgreSQL offers ACID compliance and is better for complex queries."
    },
    {
      question: "What is MongoDB faster at?",
      answer: "MongoDB is faster for writes."
    },
    {
      question: "What scaling trade-off does MongoDB involve?",
      answer: "While MongoDB scales horizontally more easily, it sacrifices some data consistency guarantees."
    },
    {
      question: "What is the speaker's recommendation?",
      answer: "Use PostgreSQL for transactional data and MongoDB for analytics and logs (hybrid approach)."
    },
    {
      question: "What is the drawback of the hybrid approach?",
      answer: "It adds operational complexity and requires more effort to manage two databases."
    }
  ],

  audioSrc: ""
};
