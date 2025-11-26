import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Reporting Verbs: Present/Suggest/Recommend",
    explanation:
      "**'Present'** shows information: 'The team **presented** the quarterly results'. **'Suggest'** offers ideas: 'I **suggest** we move to microservices'. **'Recommend'** gives strong advice: 'I **recommend** implementing TDD'.\n\nThese verbs help in meetings: 'Sarah **presented** her research', 'John **suggested** a new approach', 'The architect **recommended** cloud migration'.",
    usage:
      "Use reporting verbs to:\n\n🎤 **Present information**: 'Team **presented** the sprint demo'\n💡 **Offer suggestions**: 'I **suggest** using React for the frontend'\n✅ **Make recommendations**: 'We **recommend** daily standups'\n\nChoose based on formality and confidence level.",
    rules: [
      {
        from: "Present information",
        to: "present + object (Present the findings)"
      },
      {
        from: "Offer ideas casually",
        to: "suggest + object/gerund (Suggest a solution/Suggest implementing)"
      },
      {
        from: "Give strong advice",
        to: "recommend + object/gerund (Recommend the change/Recomend starting)"
      }
    ],
    examples: [
      "The product owner **presented** the user requirements to the team.",
      "I **suggest** we schedule a planning meeting for tomorrow.",
      "The lead developer **recommended** using TypeScript for the project.",
      "Sarah **presented** her analysis of the performance issues.",
      "We **suggest** implementing automated testing for this feature."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The engineering team ___ starting with unit tests for new features.",
      options: ["present", "suggest", "recommend"],
      answer: "recommend"
    },
  commonMistakes
};
