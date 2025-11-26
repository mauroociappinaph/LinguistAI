import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Past Simple + Connectors for Reviews",
    explanation:
      "**Past Simple**: Completed actions in code reviews - 'The code failed, We fixed it'\n**Connectors**: Link ideas and show relationships - 'If/then, Because, When'\n\nTechnical discussion patterns:\n\n🔍 **Problems Found**: 'The function failed because null was returned'\n🏗️ **Solutions**: 'We changed it to throw an error instead'\n🤝 **Explanations**: 'Then the issue was resolved'",
    usage:
      "Code review communication:\n\n📝 **Findings**: 'The test failed when we deployed'\n💡 **Reasons**: 'Because the API changed and wasn't updated'\n✅ **Actions**: 'So we updated the endpoint and retested'",
    rules: [
      {
        from: "Past events",
        to: "Subject + verb-ed (Code + ran, Test + failed)"
      },
      {
        from: "Cause/effect",
        to: "Because/so/then (Because API changed, so code failed)"
      },
      {
        from: "Connections",
        to: "When/if/but (When deployed, if fails, code works)"
      }
    ],
    examples: [
      "The unit test **failed** because the function **returned** null unexpectedly.",
      "**When** we **merged** the code, the build **broke** completely.",
      "**Because** the database **migrated**, all queries **stopped** working.",
      "**But** the code **worked** locally, so we **investigated** environment differences.",
      "**Then** we **fixed** the configuration and everything **ran** smoothly."
    ],
    interactiveExercise: {
      type: "multiple-choice",
      question: "'The code ___ because the function ___. Then we ___ it.'",
      options: [
        "failed - returns null - fixed",
        "fails - returned null - fix",
        "failed - returned null - fixed",
        "fail - return null - fixed"
      ],
      answer: "failed - returned null - fixed"
    },
  commonMistakes
};
