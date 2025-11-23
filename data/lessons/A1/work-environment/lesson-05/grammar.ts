import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Can/Can't for Abilities & Need to for Requirements",
  explanation:
    "Use **'can'** for current abilities and **'can't'** for limitations. Use **'need to'** for necessary requirements and actions. Combine them to discuss professional growth:\\n\\n**'I can code in Python'** (current ability)\\n**'I need to learn React'** (requirement)\\n**'I can't handle DevOps yet'** (limitation)\\n\\n**'Need'** is modal (=must) followed by infinitive without 'to'. Use **'don't need to'** for non-essentials.",
  usage:
    "In tech job conversations, use these to:\\n\\n🛠️ Describe technical skills\\n📚 Express learning requirements\\n🎯 Discuss career development\\n👥 Explain team capabilities\\n\\nUse 'can/can't' for what you do know, 'need to' for what you must acquire.",
  rules: [
    {
      from: "Current skills (positive)",
      to: "Can + infinitive (I can deploy apps)"
    },
    {
      from: "Skills you lack (negative)",
      to: "Can't + infinitive (She can't use APIs)"
    },
    {
      from: "Required skills (obligation)",
      to: "Need to + infinitive (We need to learn AWS)"
    },
    {
      from: "Unnecessary skills",
      to: "Don't need to + infinitive (They don't need to code Java)"
    }
  ],
  examples: [
    "**I can** handle database queries efficiently.",
    "**She can't** design user interfaces.",
    "**We need to** upgrade our cloud security.",
    "**You don't need to** know assembly language anymore.",
    "**Our team can** implement agile methodology."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Our developers ___ to attend the security training.",
    options: ["need", "needs", "needing", "needed"],
    answer: "need"
  }
};
