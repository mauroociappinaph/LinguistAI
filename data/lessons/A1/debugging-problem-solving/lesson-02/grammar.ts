import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Can/Could for Polite Requests",
    explanation:
      "**'Can'** is direct and friendly: 'Can you help me debug this?'\n**'Could'** is more formal and polite: 'Could you take a look at my code?'\n\nUse both to:\n- Ask for debugging assistance\n- Request code reviews\n- Seek technical guidance\n\n'Could you explain why this error occurs?' 'Can you show me the debugging steps?'",
    usage:
      "In debugging conversations, use polite modals to:\n\n🤝 **Ask colleagues**: 'Could you help me with this bug?'\n🛠️ **Seek guidance**: 'Can you show me how to debug this?'\n📞 **Request support**: 'Could you explain this stack trace?'\n\nChoose based on relationship formality and urgency.",
    rules: [
      {
        from: "Direct requests",
        to: "Can + subject + help...? (Can you help me debug this?)"
      },
      {
        from: "More polite/formal",
        to: "Could + subject + help...? (Could you help me with this issue?)"
      },
      {
        from: "Specific assistance",
        to: "Can/Could + subject + show/explain...? (Can you show me how...?)"
      }
    ],
    examples: [
      "**Can you help me** debug this login function?",
      "**Could you take a look** at these error messages?",
      "**Can you show me** how to use the debugger?",
      "**Could you explain** why this variable is undefined?",
      "**Can you** guide me through the debugging process?"
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ you help me find the bug in this function?",
      options: ["Can", "Could", "Will"],
      answer: "Can"
    },
  commonMistakes
};
