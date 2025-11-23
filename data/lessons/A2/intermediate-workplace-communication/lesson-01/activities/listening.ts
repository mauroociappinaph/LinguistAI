import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Tech Lead Comparing Database Options",
  transcript:
    "Hey team, I've been evaluating different database solutions for our new project, and I want to share my findings.\n\n" +
    "PostgreSQL is more reliable than MongoDB for complex queries and transactions. It's also better at maintaining data integrity because of its ACID compliance. However, MongoDB is faster than PostgreSQL for certain use cases, especially when dealing with large amounts of unstructured data.\n\n" +
    "From a scalability perspective, MongoDB is easier to scale horizontally than PostgreSQL. You can add more servers to a MongoDB cluster more simply. But PostgreSQL is more mature than MongoDB and has been around longer, so it has better tooling and more community support.\n\n" +
    "Redis is completely different from both. It's much faster than either PostgreSQL or MongoDB for caching because it stores data in memory. However, it's less suitable than the other two for persistent data storage.\n\n" +
    "My recommendation? For our user authentication system, PostgreSQL is better than MongoDB because we need strong consistency. For our analytics pipeline, MongoDB might be more appropriate than PostgreSQL because we're dealing with flexible schemas. And for session management, Redis is definitely faster than both alternatives.\n\n" +
    "What do you think? Any questions?",

  comprehensionQuestions: [
    {
      question: "Why is PostgreSQL better for complex queries?",
      answer: "PostgreSQL is more reliable for complex queries and maintains better data integrity due to ACID compliance."
    },
    {
      question: "Which database is faster for caching?",
      answer: "Redis is much faster for caching because it stores data in memory."
    },
    {
      question: "Why is MongoDB easier to scale horizontally?",
      answer: "You can add more servers to a MongoDB cluster more simply than with PostgreSQL."
    },
    {
      question: "Which database does the speaker recommend for user authentication?",
      answer: "PostgreSQL, because it provides strong consistency which is needed for authentication."
    },
    {
      question: "What advantage does PostgreSQL have in terms of community?",
      answer: "PostgreSQL is more mature and has better tooling and more community support."
    }
  ],

  audioSrc: ""
};
