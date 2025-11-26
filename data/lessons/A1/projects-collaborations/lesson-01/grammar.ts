import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Future Tenses: Will/Shall/Going to + Present/Future Continuous for Planning",
    explanation:
      "**'Will'** expresses spontaneous decisions and future plans, while **'Shall'** is more formal for suggestions and offers in planning contexts. Use **'going to'** for scheduled plans.\n\nIn project planning: '**We will finish** the user stories by Friday', '**Shall we schedule** a planning meeting?', '**We're going to start** the sprint tomorrow'.\n\n**Additional Planning Forms:**\n\n📋 **Present Continuous for scheduled future**: When plans are firmly scheduled with a specific time\n   Example: '*We **are deploying** the feature tomorrow at 3 PM*'\n\n🔄 **Future Continuous**: For actions that will be in progress at a future time\n   Example: '*This time next week, we **will be testing** the new release*'\n\nFuture tenses help teams discuss timelines, deadlines, and commitments in development cycles.",
    usage:
      "In sprint planning and project management conversations:\n\n📅 **Planning**: 'The team **will deliver** the feature next sprint'\n🤝 **Agreements**: '**Shall we review** the backlog today?'\n🎯 **Goals**: 'We **are going to implement** agile practices'\n📋 **Scheduled Plans**: '**We're deploying** tomorrow at 10 AM'\n⏱️ **Future Progress**: 'Next week we **will be working** on the API'\n\nUse different tenses for different planning contexts.",
    rules: [
      {
        from: "Spontaneous future",
        to: "will + infinitive (We'll assign tasks tomorrow)"
      },
      {
        from: "Formal suggestions",
        to: "shall + subject (Shall we start the sprint?)"
      },
      {
        from: "Scheduled plans",
        to: "going to + infinitive (We're going to demo next week)"
      },
      {
        from: "Present Continuous for scheduled future",
        to: "am/is/are + verb-ing (We're deploying tomorrow at 3 PM)"
      },
      {
        from: "Future Continuous for in-progress actions",
        to: "will be + verb-ing (We'll be testing next week)"
      }
    ],
    examples: [
      "**We will complete** the user stories by Friday.",
      "**Shall I create** the sprint backlog?",
      "**Our team is going to** implement the new design.",
      "**The product owner will** review the acceptance criteria.",
      "**Shall we schedule** the planning meeting for Monday?",
      "**We're deploying** the feature tomorrow at 3 PM.",
      "**The team is meeting** with the client on Friday.",
      "This time next week, **we'll be testing** the new release.",
      "At 10 AM tomorrow, **we'll be conducting** the stand-up."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The development team ___ deploy the application next week.",
      options: ["will", "shall", "going to"],
      answer: "will"
    },
  commonMistakes
};
