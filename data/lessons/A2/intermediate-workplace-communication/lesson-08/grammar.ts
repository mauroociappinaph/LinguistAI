import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Using Metaphors and Analogies in Technical Explanations",
  explanation:
    "Metaphors and analogies help explain complex technical concepts by comparing them to familiar ideas. Essential for documentation, presentations, and teaching.\n\n" +
    "### Why it matters in IT:\n" +
    "Technical communication often requires:\n" +
    "• Explaining complex systems to non-technical stakeholders\n" +
    "• Making abstract concepts concrete and relatable\n" +
    "• Simplifying architecture decisions for business teams\n" +
    "• Onboarding new developers with clear mental models\n\n" +
    "### Key Structures:\n" +
    "**Like** (simple comparison)\n" +
    "• 'A load balancer is like a traffic cop directing cars.'\n" +
    "• 'Caching works like a bookmark in a book.'\n\n" +
    "**As...as** (equality comparison)\n" +
    "• 'This API is as fast as the previous version.'\n" +
    "• 'The new system is as reliable as the old one.'\n\n" +
    "**Similar to** (formal comparison)\n" +
    "• 'GraphQL is similar to ordering à la carte at a restaurant.'\n" +
    "• 'Microservices are similar to a team of specialists.'\n\n" +
    "**Think of X as Y** (conceptual mapping)\n" +
    "• 'Think of Docker containers as shipping containers for code.'\n" +
    "• 'Think of Git branches as parallel universes for your code.'\n\n" +
    "**X is to Y as A is to B** (analogy)\n" +
    "• 'RAM is to a computer as a desk is to an office worker.'\n" +
    "• 'A database index is to data as a book index is to content.'",

  usage: "Use in technical documentation, presentations to non-technical audiences, code reviews, onboarding materials, and architecture explanations.",

  rules: [
    {
      from: "Like (simple metaphor)",
      to: "A firewall is like a security guard checking IDs at the entrance."
    },
    {
      from: "As...as (comparison)",
      to: "This solution is as scalable as our previous architecture."
    },
    {
      from: "Similar to (formal comparison)",
      to: "Redux is similar to a global event bus with state management."
    },
    {
      from: "Think of X as Y",
      to: "Think of API rate limiting as a speed limit on a highway."
    },
    {
      from: "X is to Y as A is to B",
      to: "CSS is to HTML as clothing is to a person."
    }
  ],

  examples: [
    "A load balancer is like a restaurant host distributing customers to different tables.",
    "Think of Kubernetes as an orchestra conductor coordinating all the musicians.",
    "The database is as critical to our app as the foundation is to a building.",
    "Git is similar to a time machine that lets you travel through your code's history.",
    "A CDN works like having copies of a book in libraries around the world.",
    "An API is like a waiter taking your order to the kitchen and bringing back food.",
    "Caching is as important for performance as a shortcut is for a commute.",
    "Think of microservices as a food court where each vendor specializes in one thing.",
    "A reverse proxy is similar to a receptionist routing calls to the right department.",
    "Memory leaks are like leaving the water running—eventually, you'll flood.",
    "Docker containers are as portable as shipping containers.",
    "Think of environment variables as settings on your phone that change how apps behave."
  ],

  commonMistakes: [
    {
      incorrect: "A database is like as a filing cabinet.",
      correct: "A database is like a filing cabinet.",
      explanation: "Don't use 'like as' together. Use either 'like' OR 'as'."
    },
    {
      incorrect: "Think of API as like a menu.",
      correct: "Think of an API as a menu. OR An API is like a menu.",
      explanation: "Don't combine 'as' and 'like'. Choose one structure."
    },
    {
      incorrect: "This is similar as the previous version.",
      correct: "This is similar to the previous version.",
      explanation: "Use 'similar to', not 'similar as'."
    },
    {
      incorrect: "Caching works as like a bookmark.",
      correct: "Caching works like a bookmark.",
      explanation: "Don't use 'as like'. Use 'like' for simple comparisons."
    },
    {
      incorrect: "The system is as fast than before.",
      correct: "The system is as fast as before.",
      explanation: "Use 'as...as' for equality comparisons, not 'as...than'."
    },
    {
      incorrect: "Think of containers like shipping boxes.",
      correct: "Think of containers as shipping boxes.",
      explanation: "Use 'think of X as Y', not 'think of X like Y'."
    },
    {
      incorrect: "APIs are like to menus in restaurants.",
      correct: "APIs are like menus in restaurants.",
      explanation: "Don't use 'like to'. Use 'like' directly before the comparison."
    },
    {
      incorrect: "This approach is more better as the old one.",
      correct: "This approach is better than the old one.",
      explanation: "Use 'better than' for superiority, not 'more better as'."
    },
    {
      incorrect: "Microservices is similar with a team.",
      correct: "Microservices are similar to a team.",
      explanation: "Use 'similar to', not 'similar with'. Also, 'microservices' is plural."
    },
    {
      incorrect: "The cache is as same as a bookmark.",
      correct: "The cache is like a bookmark. OR The cache works the same way as a bookmark.",
      explanation: "Don't use 'as same as'. Use 'like' or 'the same way as'."
    }
  ],

  writingExamples: [
    "Technical Documentation: 'Think of our authentication system as a bouncer at a club. Just like a bouncer checks IDs before letting people in, our auth system verifies credentials before granting access. The JWT token is like a wristband that proves you've already been checked—you can show it to enter different areas (endpoints) without being checked again. Session management is similar to the bouncer remembering regular customers.'",
    "Architecture Explanation: 'Our microservices architecture is like a food court. Each service is like a specialized vendor—one makes pizza, another makes sushi, another makes burgers. They all operate independently, but customers (clients) can order from multiple vendors. The API gateway is like the food court entrance where you get a map of all vendors. This is as different from a monolith as a food court is from a traditional restaurant where one kitchen makes everything.'",
    "Code Review Comment: 'This caching strategy is similar to how browsers cache images. Just like a browser stores images locally to avoid downloading them again, we're storing API responses in Redis. The cache invalidation logic works like the browser's 'hard refresh'—it clears the cache when we know the data has changed. This approach is as effective as our previous solution but much simpler to maintain.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'Think of a database _____ a library, and queries _____ requests for specific books.'",
    options: [
      "like / like",
      "as / as",
      "like / as",
      "as / like"
    ],
    answer: "as / as"
  }
};
