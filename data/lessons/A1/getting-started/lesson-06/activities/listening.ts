import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Choosing the Right Architecture",
  audioSrc: "", // Placeholder
  transcript:
    "**Architect:** We need to decide between a Monolith and Microservices for the new project.\n" +
    "**Dev:** Well, a Monolith is **simpler than** Microservices to start with. It's **easier** to deploy.\n" +
    "**Architect:** True, but Microservices are **more scalable**. If one service fails, the others keep working.\n" +
    "**Dev:** Yes, but Microservices are also **more complex** to manage. We need a **stronger** DevOps culture.\n" +
    "**Architect:** I agree. For now, the **safest** option is to start with a modular Monolith. It's the **best** of both worlds.",
  comprehensionQuestions: [
    {
      question: "Which architecture is simpler to start with?",
      answer: "A Monolith is simpler."
    },
    {
      question: "What is the main advantage of Microservices mentioned?",
      answer: "They are more scalable."
    },
    {
      question: "What is the 'safest' option according to the Architect?",
      answer: "A modular Monolith."
    }
  ]
};
