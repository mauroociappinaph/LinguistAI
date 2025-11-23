import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Microservices Architecture: Understanding System Components",
  text:
    "In modern software development, microservices architecture has become increasingly popular. But what exactly are the components that make this architecture work?\n\n" +
    "A microservice is a small, independent service that focuses on doing one thing well. The services that communicate with each other use APIs that are well-defined and versioned. Each microservice that runs in the system has its own database, which prevents the tight coupling that occurs in monolithic applications.\n\n" +
    "The API Gateway is the component that sits between clients and services. It's the entry point that handles all incoming requests. The gateway that we use in our system performs authentication, rate limiting, and request routing. Developers who work on the gateway need to understand load balancing and security protocols.\n\n" +
    "Service discovery is another critical component. The registry that maintains information about all running services must be highly available. When a service that needs to call another service starts up, it queries the service registry to find the endpoint that it should connect to.\n\n" +
    "The message queue is a component that enables asynchronous communication. Services that publish messages don't need to wait for services that consume those messages. This pattern, which separates producers from consumers, improves system resilience and scalability.\n\n" +
    "Monitoring and logging are essential in distributed systems. The tools that collect metrics from all services provide visibility into system health. Engineers who are responsible for operations rely on dashboards that aggregate data from multiple sources.\n\n" +
    "Teams that adopt microservices architecture face new challenges. The complexity that comes with distributed systems requires robust DevOps practices. However, the benefits that this architecture provides—independence, scalability, and fault isolation—often outweigh the challenges.",

  comprehensionQuestions: [
    {
      question: "What is the component that sits between clients and services called?",
      answer: "The API Gateway is the component that sits between clients and services."
    },
    {
      question: "What information does the service registry maintain?",
      answer: "The registry maintains information about all running services."
    },
    {
      question: "Why do services that publish messages not need to wait?",
      answer: "Because the message queue enables asynchronous communication, separating producers from consumers."
    },
    {
      question: "What prevents tight coupling in microservices?",
      answer: "Each microservice has its own database, which prevents tight coupling."
    },
    {
      question: "Who relies on dashboards that aggregate data?",
      answer: "Engineers who are responsible for operations rely on these dashboards."
    }
  ]
};
