import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Welcoming & Giving Simple Instructions",
  explanation:
    "Use friendly, welcoming phrases to greet new members. Use simple imperatives (the base form of the verb) to guide them through their first steps in a clear and direct way. You can also use short questions and negations to check understanding or provide guidance: 'Have you opened the guide?' or 'Don't forget to set up your account.'",
  usage:
    "When a new person joins your team, use these friendly phrases and simple imperatives to make them feel welcome and guide them through their first setup tasks. Practice short questions to confirm actions and negations to remind them what not to do.",
  rules: [
    {
      from: "Welcome phrases",
      to: "Welcome to... , Let me introduce..., First, please..."
    },
    {
      from: "Imperative verbs",
      to: "Base form of verb (actions: open, access, create)"
    },
    {
      from: "Questions",
      to: "Have you...? , Do you need...?"
    },
    {
      from: "Negations",
      to: "Don't... , Don't forget to..."
    }
  ],
  examples: [
    "**Welcome** to the team!",
    "**Let me introduce** you to our project manager.",
    "First, **open** this guide.",
    "**Please set up** your accounts.",
    "Don't **log in** before setting up your account.",
    "Have you **accessed** the repository?",
    "**Follow** the guide to complete the initial setup."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ to the team!",
    options: ["You welcome", "Welcoming", "Welcome"],
    answer: "Welcome"
  }
};
