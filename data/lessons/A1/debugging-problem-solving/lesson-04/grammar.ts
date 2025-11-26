import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Imperatives for Instructions & Reports",
    explanation:
      "**Imperatives**: Direct commands for actions - 'Fill in the bug report' 'Test the login form'\n\nUse as checklists and instructions:\n\n📋 **Bug reports**: 'Document the steps, Include screenshots'\n✅ **Checklists**: 'Verify user accounts, Check error logs'\n🎯 **Instructions**: 'Reproduce the bug, Note the environment'",
    usage:
      "In technical documentation:\n\n📝 **Bug tracking**: 'Reproduce the issue, Note the steps'\n🗂️ **Quality control**: 'Verify the deployment, Check database'\n🔧 **Troubleshooting**: 'Restart the server, Clear cache'",
    rules: [
      {
        from: "Commands for actions",
        to: "Base verb (Check, Test, Verify)"
      },
      {
        from: "Multiple actions",
        to: "Verb + and + verb (Check and test, Verify and confirm)"
      },
      {
        from: "With objects",
        to: "Verb + object (Check the logs, Test the function)"
      }
    ],
    examples: [
      "**Document** everything you see when the bug occurs.",
      "**Include** screenshots and **describe** the expected behavior.",
      "**Test** the bug in different browsers and **note** the results.",
      "**Verify** that the issue exists in the staging environment.",
      "**Follow** this checklist before submitting your report."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ the bug report and ___ all necessary details.",
      options: ["Fill, Include", "Filled, Included", "Fills, Includes", "Filling, Including"],
      answer: "Fill, Include"
    },
  commonMistakes
};
