import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Microservices vs Monolith: The Great Architecture Trade-off",
  text:
    "One of the most debated topics in software architecture is the choice between microservices and monolithic architecture. While both have their merits, understanding the trade-offs is crucial.\n\n" +
    "**Microservices Advantages**: While microservices add operational complexity, they offer superior scalability. Each service can scale independently, which is more cost-effective than scaling an entire monolith. Although setting up microservices requires more initial effort, this pays off for systems that need to handle varying loads across different features.\n\n" +
    "**Development Trade-offs**: While microservices allow teams to work independently, they require robust communication protocols. Although this adds overhead, it enables faster parallel development. Monoliths, while simpler to develop initially, can become bottlenecks as teams grow.\n\n" +
    "**Deployment Considerations**: Although deploying microservices is more complex, it allows for independent releases. While this increases deployment frequency, it requires sophisticated CI/CD pipelines. Monoliths, while easier to deploy, risk system-wide outages from single bugs.\n\n" +
    "**Data Management**: While microservices can use different databases per service, this creates data consistency challenges. Although distributed transactions are complex, microservices better support diverse data needs. Monoliths, while offering simpler data management, can face database bottlenecks.\n\n" +
    "**The Verdict**: While neither approach is universally better, the choice depends on context. Although microservices offer benefits, they're only worth it for complex systems with independent scaling needs. For smaller teams and simpler applications, monoliths provide better value despite their limitations.",

  comprehensionQuestions: [
    {
      question: "What is the main advantage of microservices mentioned?",
      answer: "Microservices offer superior scalability with independent scaling of each service."
    },
    {
      question: "What is a disadvantage of microservices regarding deployment?",
      answer: "Deploying microservices is more complex and requires sophisticated CI/CD pipelines."
    },
    {
      question: "What trade-off does data management involve in microservices?",
      answer: "While microservices can use different databases per service, this creates data consistency challenges."
    },
    {
      question: "When are monoliths recommended according to the article?",
      answer: "For smaller teams and simpler applications, monoliths provide better value."
    },
    {
      question: "What is the overall conclusion about choosing between microservices and monoliths?",
      answer: "Neither approach is universally better; the choice depends on context and specific needs."
    }
  ]
};
