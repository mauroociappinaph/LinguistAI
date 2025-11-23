import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Perfect for Achievements + Future for Planning",
  explanation:
    "**Present Perfect for Accomplishments**: 'We have completed', 'Team has delivered'\n**Future for Upcoming Work**: 'We will deliver', 'Team will complete'\n**Present Simple for Current Status**: 'Project runs smoothly', 'System performs well'",
  usage: "Stakeholder communication:\n\n📈 **Achievements**: 'We have increased performance by 40%'\n🔮 **Plans**: 'We will deploy next week'\n📊 **Current state**: 'The application handles 1M users daily'",
  rules: [
    {
      from: "Completed work",
      to: "Have/has + past participle (have + completed, has + improved)"
    },
    {
      from: "Future commitments",
      to: "Will + verb (will + deliver, will + implement)"
    },
    {
      from: "Current capabilities",
      to: "Subject + verb (System + supports, Application + processes)"
    }
  ],
  examples: [
    "**We have implemented** the new authentication system successfully.",
    "**The team has increased** performance by optimizing database queries.",
    "**We will deliver** the mobile app version next quarter.",
    "**The application now supports** over 50,000 concurrent users.",
    "**Management has approved** the budget for infrastructure scaling."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The team ___ completed the testing phase and ___ conduct user acceptance testing next week.",
    options: ["have, will", "has, is going to", "completed, will", "had, would"],
    answer: "has, is going to"
  }
};
