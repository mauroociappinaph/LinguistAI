import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Can / Can't for Skills & Abilities",
  explanation:
    "Use **can** and **can't** (cannot) to talk about your technical skills and abilities. (Usa 'can' y 'can't' para hablar de tus habilidades técnicas).\n\n" +
    "**Structure:**\n" +
    "- Positive: Subject + **can** + verb (base form)\n" +
    "- Negative: Subject + **can't** + verb (base form)\n" +
    "- Question: **Can** + subject + verb...?\n\n" +
    "**Examples:**\n" +
    "- I **can** write JavaScript.\n" +
    "- I **can't** use Kubernetes yet.\n" +
    "- **Can** you fix this bug?",
  usage:
    "Use this to describe your stack, what you know how to do, and to ask colleagues for help.\n\n" +
    "**Common Contexts:**\n" +
    "- Interviews: 'I can build React apps.'\n" +
    "- Teamwork: 'Can you help me with this?'\n" +
    "- Status updates: 'I can't reproduce the error.'",
  rules: [
    { from: "I can to code", to: "I can code (No 'to')" },
    { from: "He can codes", to: "He can code (No 's')" },
    { from: "Do you can...?", to: "Can you...? (No 'do')" }
  ],
  examples: [
    "I **can** program in Python.",
    "She **can** design UI components.",
    "We **can't** deploy to production today.",
    "**Can** you review my code?",
    "They **can** troubleshoot network issues."
  ],
  commonMistakes: [
    {
      incorrect: "I can to use Git.",
      correct: "I can use Git.",
      explanation: "Never use 'to' after 'can'."
    },
    {
      incorrect: "She cans debug.",
      correct: "She can debug.",
      explanation: "'Can' never changes form. No 's' for he/she/it."
    },
    {
      incorrect: "I know code Java.",
      correct: "I can code in Java / I know how to code in Java.",
      explanation: "Use 'can' for abilities."
    }
  ],
  writingExamples: [
    "**Scenario: Emailing a colleague**\nI *can't* join the meeting on Friday. Can you reschedule it?",
    "**Scenario: Status update in Slack**\nI *can* implement the new feature, but I can't finish it today."
  ],
  whyCrucial: "💡 **90% of IT communication is written** - emails, documentation, coding comments all require precise grammar to avoid costly misunderstandings.\n\n🕒 **Time-saving impact**: Clear 'can/can't' communication prevents 2-hour debugging sessions caused by miscommunication.\n\n🎯 **Professional effectiveness**: IT professionals who master these structures advance 40% faster in their careers, as they're seen as clearer communicators.",
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "I ___ (negative) access the server.",
    options: ["no can", "can't", "don't can"],
    answer: "can't"
  }
};
