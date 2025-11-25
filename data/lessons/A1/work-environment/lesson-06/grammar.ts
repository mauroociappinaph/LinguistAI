import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
  title: "Possessive 's for Roles & Ownership",
  explanation:
    "We use **'s** after a noun (usually a person or a role) to show possession or relationship. For plural nouns ending in 's', add an apostrophe after the s (e.g., 'The designers' mockups are ready').",

  usage:
    "Use the possessive 's to talk about who is responsible for what. It shows relationships and ownership in a team (e.g., 'This is **Sarah's** task', 'That is the **designer's** mockup'). You can also use questions and negations to practice possession: 'Is this the developer’s responsibility?' or 'This isn't the QA's task.'",

  rules: [],
  examples: [
    "**This is John's computer.**",
    "**The designer's mockups are ready.**",
    "**What is the developer's responsibility?**",
    "**The developers' laptops are ready.**",
    "**Is this the developer's responsibility?**",
    "**This isn't the QA's task.**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: 'fill-in-the-blank',
    question: "What is the ___ responsibility?",
    options: ["developer his", "of the developer", "developer's"],
    answer: "developer's"
  }
};
