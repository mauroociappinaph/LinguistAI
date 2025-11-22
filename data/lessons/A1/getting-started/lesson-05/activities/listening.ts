import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Advice from a Senior Developer",
  audioSrc: "", // Placeholder for future audio file
  transcript:
    "**Senior Dev:** Hey, I noticed you're struggling with that bug. Do you want **to take** a break?\n" +
    "**Junior Dev:** No, I want **to finish** this ticket first. But I keep **getting** stuck.\n" +
    "**Senior Dev:** **Debugging** can be frustrating. Have you tried **reading** the documentation again?\n" +
    "**Junior Dev:** I tried, but **understanding** the official docs is hard for me.\n" +
    "**Senior Dev:** I recommend **looking** at some examples on GitHub. **Seeing** the code in context helps.\n" +
    "**Junior Dev:** That's a good idea. I plan **to search** for similar projects tonight.\n" +
    "**Senior Dev:** Great. Remember, **learning** to code takes time. Don't give up!",
  comprehensionQuestions: [
    {
      question: "What does the Junior Dev want to do?",
      answer: "He wants to finish the ticket."
    },
    {
      question: "What does the Senior Dev recommend?",
      answer: "He recommends looking at examples on GitHub."
    },
    {
      question: "Why does the Junior Dev find the documentation difficult?",
      answer: "Understanding it is hard for him."
    }
  ]
};
