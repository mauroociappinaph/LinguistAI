import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Explaining Docker to Non-Technical Stakeholders",
  text:
    "**Making Complex Technology Accessible**\\n\\n" +
    "When explaining Docker to business stakeholders, technical jargon creates barriers. Instead, think of Docker as a shipping container system for software.\\n\\n" +
    "**The Shipping Container Analogy**\\n\\n" +
    "Just as shipping containers revolutionized global trade, Docker containers are transforming software deployment. Before containers, shipping goods was chaotic—different cargo required different handling. Similarly, deploying software was unpredictable—what worked on one server might fail on another.\\n\\n" +
    "Think of a Docker container as a standardized shipping container. Just like a shipping container can hold anything—furniture, electronics, food—and can be moved by any ship, truck, or train, a Docker container packages your application with everything it needs and can run anywhere: your laptop, a test server, or the cloud.\\n\\n" +
    "**The Benefits Explained Simply**\\n\\n" +
    "The consistency is like having a recipe that works the same way in any kitchen. If it works in development, it works in production. This is as reliable as knowing a shipping container that fits on one ship will fit on any ship.\\n\\n" +
    "Portability works much like how shipping containers made global trade efficient. You can move your application between different environments as easily as moving a container between ships. The application doesn't care where it's running, similar to how cargo doesn't care which ship it's on.\\n\\n" +
    "**Resource Efficiency**\\n\\n" +
    "Containers are similar to apartments in a building. Just as multiple apartments share the same building infrastructure (plumbing, electricity, structure), multiple containers share the same operating system. This is as efficient as having 100 apartments in one building versus 100 separate houses.\\n\\n" +
    "Traditional virtual machines are like having separate houses—each needs its own foundation, utilities, and structure. Containers are like apartments—they share infrastructure while maintaining privacy and independence.\\n\\n" +
    "**The Business Impact**\\n\\n" +
    "For the business, Docker is like having a standardized production line. It's as predictable as manufacturing, as portable as shipping containers, and as efficient as apartment living. The technology might be complex, but the concept is as simple as these everyday examples.",

  comprehensionQuestions: [
    {
      question: "What is Docker compared to in the main analogy?",
      answer: "Docker is compared to a shipping container system for software."
    },
    {
      question: "How are Docker containers similar to shipping containers?",
      answer: "Both are standardized, can hold different contents, and can be moved anywhere (containers run anywhere, shipping containers can be moved by any transport)."
    },
    {
      question: "What analogy is used to explain resource efficiency?",
      answer: "Containers are compared to apartments in a building sharing infrastructure, versus virtual machines being like separate houses."
    },
    {
      question: "What does the recipe analogy explain?",
      answer: "The recipe analogy explains consistency—if it works in development, it works in production, like a recipe working the same in any kitchen."
    },
    {
      question: "How is Docker's business impact described?",
      answer: "Docker is described as being like a standardized production line—predictable, portable, and efficient."
    }
  ]
};
