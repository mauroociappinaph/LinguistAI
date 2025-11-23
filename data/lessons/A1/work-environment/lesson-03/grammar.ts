import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Simple Present for Roles & Responsibilities",
  explanation:
    "We use the **Simple Present** to describe the usual responsibilities and tasks of each role in a team. Remember to add an **-s** to the end of the verb for 'he', 'she', or a singular role. You can also use questions and negations to talk about tasks: 'Does the designer create the mockups?' or 'The tester doesn't check the API endpoints.'",
  usage:
    "Use the Simple Present to describe the permanent responsibilities of different roles in your team (e.g., 'The designer **creates** mockups', 'The QA team **finds** bugs'). Practice asking short questions and using negations: 'Does the PM plan the sprint?', 'The sysadmin doesn't reboot the servers without notice.'",
  rules: [
    {
      from: "Base verb (I/You/We/They)",
      to: "Same as base form"
    },
    {
      from: "Base verb + -s (He/She/It/Singular role)",
      to: "Adds -s for third person"
    },
    {
      from: "Questions",
      to: "Do/Does + subject + base verb"
    },
    {
      from: "Negatives",
      to: "Subject + doesn't + base verb"
    }
  ],
  examples: [
    "**The designer creates the mockups.**",
    "**The tester finds bugs.**",
    "**The Product Manager plans the work.**",
    "**Does the QA team find all critical bugs?**",
    "**The sysadmin doesn't reboot the servers without notice.**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The PM ___ the sprint tasks.",
    options: ["plan", "plans", "is planning"],
    answer: "plans"
  }
};
