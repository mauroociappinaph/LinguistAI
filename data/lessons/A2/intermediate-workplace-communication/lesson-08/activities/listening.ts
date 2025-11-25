import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Explaining Microservices to Product Team",
  transcript:
    "**Sarah (Tech Lead):** Thanks for joining this session. I want to explain our proposed microservices architecture in a way that makes sense for everyone.\\n\\n" +
    "Think of our current monolithic application as a traditional restaurant. One kitchen makes everything—appetizers, main courses, desserts. If the kitchen gets overwhelmed, the entire restaurant slows down. If the oven breaks, you can't serve anything, even cold salads.\\n\\n" +
    "Microservices are like a food court. Each vendor specializes in one thing—one makes pizza, another makes sushi, another makes burgers. They all operate independently. If the pizza oven breaks, you can still get sushi and burgers.\\n\\n" +
    "**Alex (Product Manager):** So each service is like a separate restaurant?\\n\\n" +
    "**Sarah:** Exactly! And just as each food court vendor can expand their kitchen independently when they get busy, each microservice can scale independently. If user authentication gets heavy traffic, we scale just that service, similar to how a popular pizza vendor might add more ovens.\\n\\n" +
    "**Mike (Business Analyst):** What about the downsides? This sounds more complex.\\n\\n" +
    "**Sarah:** Good question. The complexity is like managing a food court versus a single restaurant. In a food court, you need coordination—who handles payments? How do customers find vendors? Where's the seating? Similarly, microservices need an API gateway to route requests and service discovery to find services.\\n\\n" +
    "Think of the API gateway as the food court entrance with a directory. It tells customers where to find each vendor, similar to how our gateway routes requests to the right service.\\n\\n" +
    "**Alex:** How does this affect deployment?\\n\\n" +
    "**Sarah:** It's as flexible as food court vendors setting their own hours. One vendor can renovate their kitchen without affecting others. Similarly, we can update the payment service without touching user management. This is as independent as separate businesses in a mall.\\n\\n" +
    "**Mike:** What about data? How do services share information?\\n\\n" +
    "**Sarah:** Each service has its own database, similar to how each vendor has their own inventory. They communicate through APIs, much like vendors might coordinate through the food court management. It's not as simple as one shared kitchen, but it's as resilient as having independent businesses.",

  comprehensionQuestions: [
    {
      question: "What is the monolithic application compared to?",
      answer: "A traditional restaurant with one kitchen that makes everything."
    },
    {
      question: "What analogy is used for microservices?",
      answer: "A food court where each vendor specializes in one thing and operates independently."
    },
    {
      question: "How is independent scaling explained?",
      answer: "Like a popular pizza vendor adding more ovens when busy, each microservice can scale independently."
    },
    {
      question: "What is the API gateway compared to?",
      answer: "The food court entrance with a directory that tells customers where to find each vendor."
    },
    {
      question: "How is deployment flexibility explained?",
      answer: "Like food court vendors setting their own hours or renovating without affecting others—services can be updated independently."
    }
  ],

  audioSrc: ""
};
