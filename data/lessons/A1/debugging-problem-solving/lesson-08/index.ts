import { Lesson, Difficulty } from '../../../../../types';

export const lesson08: Lesson = {
  id: "db8",
  title: "Bug Prioritization",
  level: Difficulty.A1,
  description: "Learn to prioritize bugs using comparatives to compare issue severity and impact on users and business.",
  didYouKnow: "80% of software bugs are never reported. Effective prioritization ensures teams fix the most critical issues first, reducing overall system risk by up to 60%.",

  grammar: {
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
    commonMistakes: [
      {
        incorrect: "This bug more important that one",
        correct: "This bug is more important than that one",
        explanation:
          "Complete with 'is' and use 'than', not 'that'."
      },
      {
        incorrect: "Criticaler bug",
        correct: "More critical bug",
        explanation:
          "'More critical' for longer adjectives, 'worse' for established forms."
      },
      {
        incorrect: "Much critical",
        correct: "Much more critical",
        explanation:
          "Use 'much more/less', not just 'much' with comparatives."
      }
    ],
    interactiveExercise: {
      type: "comparison-ranking",
      question: "Rank these bugs by severity (most to least): UI display error, data loss, slow load time, security breach",
      options: ["Security breach > Data loss > UI display error > Slow load time", "UI display error > Slow load time > Data loss > Security breach", "Slow load time > UI display error > Data loss > Security breach", "Data loss > Security breach > UI display error > Slow load time"],
      answer: "Security breach > Data loss > UI display error > Slow load time"
    }
  },
  vocabulary: [
    {
      item: "critical",
      explanation: "Of the greatest importance or urgency.",
      example: "This is a critical bug that affects payment processing.",
      pronunciation: "/ˈkrɪtɪkəl/"
    },
    {
      item: "severity",
      explanation: "The seriousness or gravity of an issue.",
      example: "We need to assess the severity of this login bug.",
      pronunciation: "/sɪˈvɛrɪti/"
    },
    {
      item: "impact",
      explanation: "The effect or influence something has on users or the system.",
      example: "The impact of this bug is affecting all registered users.",
      pronunciation: "/ˈɪmpækt/"
    }
  ],
  scenario: "Prioritizing bugs in a backlog, comparing their relative importance and business impact.",
  speaking: "The login failure is definitely more serious than the footer alignment issue. User data corruption is worse than just display problems. We should fix the payment validation errors first because they're blocking more users.",
  speakingPracticeMode: "assessment"
};
