import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Technical Metaphors and Analogies",
  explanation: "Use metaphors to explain complex technical concepts simply. Common IT metaphors:\n\n• 'like': Direct comparison\n• 'as...as': Equality comparison\n• 'acts as': Functional comparison\n\n**Examples**:\n• 'Docker is like a shipping container for code.'\n• 'The API acts as a bridge between services.'\n• 'Memory leaks are as dangerous as water leaks.'",
  usage: "Technical explanations, documentation, presentations to non-technical stakeholders",
  rules: [
    { from: "Simple comparison", to: "Git branches are like parallel universes for code." },
    { from: "Functional analogy", to: "A load balancer acts as a traffic controller." }
  ],
  examples: [
    "The cache works like a temporary storage bin.",
    "Kubernetes orchestrates containers like a conductor leads an orchestra.",
    "A firewall is like a security guard for your network."
  ],
  commonMistakes: [
    { incorrect: "Docker is same as VM.", correct: "Docker is like a VM but lighter.", explanation: "Use 'like' or 'similar to', not 'same as' unless truly identical." }
  ],
  writingExamples: ["Explanation: 'Think of microservices as LEGO blocks—each piece is independent but they connect to build something larger. The API gateway acts as the instruction manual that shows how pieces fit together.'"],
  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'A database index is _____ a book's table of contents.'",
    options: ["same", "like", "as", "equal"],
    answer: "like"
  }
};
