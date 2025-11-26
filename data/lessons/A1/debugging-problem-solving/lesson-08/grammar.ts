import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Comparatives for Bug Assessment",
    explanation:
      "**Comparatives**: Compare bug severity and impact - 'This bug is more critical than that one'\n\nAssess relative importance:\n\n🔴 **Severity**: 'Crash > Data Loss > UI Glitch'\n📊 **Impact**: 'Affects all users > Affects power users > Rarely used'\n⚡ **Urgency**: 'Breaks core flow > Minor inconvenience'",
    usage:
      "Bug triage discussions:\n\n📈 **Impact comparison**: 'Loss of user data is more serious than display issues'\n👥 **User effect**: 'Blocking all users is worse than blocking individual accounts'\n💰 **Business priority**: 'Payment bugs are more critical than account settings'",
    rules: [
      {
        from: "Similar objects",
        to: "more/less adjective + than (more + critical + than)"
      },
      {
        from: "Different severity",
        to: "adjective + -er + than (worse + than, better + than)"
      },
      {
        from: "Doubles",
        to: "twice as + adj (twice as + critical)"
      }
    ],
    examples: [
      "Data corruption **is more serious** than a slow loading time.",
      "Security vulnerabilities **are more critical** than cosmetic issues.",
      "Blocking bugs **are worse** than minor annoyances in production.",
      "User login failure **is more damaging** than dashboard formatting errors.",
      "Payment processing bugs **are twice as important** as profile editing issues."
    ],
    interactiveExercise: {
      type: "comparison-ranking",
      question: "Rank these bugs by severity (most to least): UI display error, data loss, slow load time, security breach",
      options: ["Security breach > Data loss > UI display error > Slow load time", "UI display error > Slow load time > Data loss > Security breach", "Slow load time > UI display error > Data loss > Security breach", "Data loss > Security breach > UI display error > Slow load time"],
      answer: "Security breach > Data loss > UI display error > Slow load time"
    },
  commonMistakes
};
