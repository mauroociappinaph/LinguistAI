import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Personal & Possessive Pronouns",
  explanation: "Personal pronouns (I, you, he) replace nouns. Possessive pronouns (my, your, his) show ownership or relationship.",
  usage: "Use these to talk about yourself, your team, and your projects. For example: '**He** is our designer. **His** mockups are ready.'",
  rules: [
    { from: "I", to: "my" },
    { from: "You", to: "your" },
    { from: "He", to: "his" },
    { from: "She", to: "her" },
    { from: "It", to: "its" },
    { from: "We", to: "our" },
    { from: "They", to: "their" }
  ],
  examples: [
    "**I** am a developer. **My** company is growing.",
    "**She** is the designer. **Her** project is very interesting.",
    "**They** are the QA team. **Their** work is important."
  ],
  commonMistakes: [
    {
      incorrect: "Me company is growing.",
      correct: "My company is growing.",
      explanation: "To show possession for 'I', always use 'my'."
    },
    {
      incorrect: "They work is important.",
      correct: "Their work is important.",
      explanation: "'They' is a personal pronoun. To show that something belongs to 'them', use the possessive pronoun 'their'."
    }
  ],
  interactiveExercise
};
