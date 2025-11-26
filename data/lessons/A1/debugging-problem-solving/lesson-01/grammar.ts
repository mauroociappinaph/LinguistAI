import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Past Simple: Describing Problems",
    explanation:
      "**Past Simple** is used for completed actions in the past, especially when reporting bugs and describing what happened.\n\nAdd '-ed' regular verbs (clicked, crashed, appeared).\nUse 'was/were' for states (the button **was** disabled).\nUse 'did + base verb' for questions (did the error appear?)\n\n'I **clicked** the submit button, but the app **crashed**.'",
    usage:
      "Use Past Simple when:\n\n🐛 Reporting bugs: 'The page **crashed** when I logged in'\n📱 Describing steps: 'I **clicked** save, but nothing **happened**'\n⏰ Explaining timing: 'The error **occurred** at 2:30 PM'\n\nFocus on what happened, when, and in what order.",
    rules: [
      {
        from: "Regular verbs",
        to: "verb + '-ed' (crash → crashed, appear → appeared)"
      },
      {
        from: "Irregular verbs",
        to: "different past form (go → went, do → did)"
      },
      {
        from: "Questions",
        to: "Did + subject + base verb? (Did the error appear?)"
      },
      {
        from: "States with 'be'",
        to: "was/were (The connection was slow)"
      }
    ],
    examples: [
      "**I clicked** the login button, but the form **disappeared**.",
      "**The error occurred** when I submitted the comment.",
      "**Was** the button visible before the crash?",
      "**She reported** the bug yesterday afternoon.",
      "**Did** the loading icon spin at all?"
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "I ___ the submit button and the form ___ completely.",
      options: ["clicked/disappeared", "click/disappeared", "clicked/disappear", "click/disappear"],
      answer: "clicked/disappeared"
    },
  commonMistakes
};
