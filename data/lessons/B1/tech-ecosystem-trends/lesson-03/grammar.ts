import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Subjunctive, Nominalization & Advanced Indirect Speech",
  explanation: "Using formal subjunctive structures like 'recommend that...', nominalization for academic style, and complex indirect speech patterns for professional proposals.",
  usage: "Technical Documentation, Research Papers & Proposals",
  rules: [ {
      from: "Formal recommendations",
      to: "Use subjunctive base verb: 'We recommend that the system **be** updated.'"
    },
    {
      from: "Nominalization",
      to: "Convert verbs to nouns for academic style: 'decide → make a decision', 'analyze → conduct an analysis'"
    },
    {
      from: "Advanced indirect speech",
      to: "Shift tenses and modals: 'will → would', 'can → could', 'must → had to / would need to'"
    }],
   examples: [
    "We suggest that the report **be submitted** before Friday.",
    "The **implementation** of automated backups improved reliability.",
    "The engineer stated that the system **would require** further testing."
  ],
  commonMistakes: [],
  interactiveExercise: {
    type: "subjunctive-practice",
    question: "Complete the subjunctive: 'We recommend that the system ___ redesigned.'",
    options: ["be", "is", "will be", "was"],
    answer: "be"
  }
};
