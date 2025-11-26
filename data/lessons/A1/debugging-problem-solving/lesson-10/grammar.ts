import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Past Simple + Connectors for Root Cause Analysis",
    explanation:
      "**Past Simple**: Completed actions that caused the issue - 'The server crashed', 'The code failed'\n**Connectors**: Link causes and effects - 'Because, When, So, Then, Since'\n\nProblem investigation:\n\n🔍 **Sequence**: 'Server restarted, then database disconnected'\n💡 **Reasons**: 'Code failed because validation was missing'\n🎯 **Root cause**: 'Issue occurred when config file changed'",
    usage:
      "Root cause conversations:\n\n📝 **Chronology**: 'User logged in, clicked submit, then app froze'\n🔗 **Causal links**: 'Server crashed because memory ran out'\n🎯 **Discovery**: 'Bug appeared when library was updated'",
    rules: [
      {
        from: "Chronological events",
        to: "verb-ed + then + verb-ed (crashed + then + restarted)"
      },
      {
        from: "Causal relationships",
        to: "because + clause (because + connection failed)"
      },
      {
        from: "Triggers",
        to: "when + past event (when + deployed)"
      }
    ],
    examples: [
      "The server **crashed** because **memory leaked** during the operation.",
      "**When** we **deployed** the code, **users couldn't log in** anymore.",
      "**Since** the database **migrated**, **all queries returned** null values.",
      "The API **failed** **because** the authentication token **expired**.",
      "**Then** the backend **returned** 500 errors **after** the load balancer **redirected** traffic."
    ],
    interactiveExercise: {
      type: "root-cause",
      question: "Identify the root cause: The server crashed because of a memory leak.",
      options: ["Server crash", "Memory leak"],
      answer: "Memory leak"
    },
  commonMistakes
};
