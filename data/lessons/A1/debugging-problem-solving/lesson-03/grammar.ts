import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Present Simple & Passive Voice for Explanations",
    explanation:
      "**Present Simple**: Describes general processes - 'The function receives data and returns a result'\n**Passive Voice**: Focuses on action/results - 'The data is received and a result is returned'\n\nUse Present Simple for how systems work, Passive Voice for what happens to components:\n\n**'The server processes the request'** (active)\n**'The request is processed by the server'** (passive)",
    usage:
      "In technical explanations:\n\n⚙️ **Present Simple**: 'The button calls the submit function'\n📝 **Passive**: 'The form data is validated and saved'\n🔄 Both show processes without specifying time (except 'now' context)\n\nPassive emphasizes results: 'The bug is fixed' vs 'I fix the bug'",
    rules: [
      {
        from: "General processes",
        to: "Subject + verb (System + validates + data)"
      },
      {
        from: "Focus on action/result",
        to: "Subject + is/am/are + past participle (Data + is + validated)"
      },
      {
        from: "Passive without agent",
        to: "Remove 'by [person]' when agent is unimportant (File is uploaded)"
      }
    ],
    examples: [
      "The browser **sends** a GET request when you click the link.",
      "The request **is received** by the server and **is processed** immediately.",
      "Database connections **are managed** by the connection pool.",
      "User inputs **are validated** before **they are stored**.",
      "The cache **refreshes** every five minutes."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The form data ___ when the submit button ___ . [is validated/is clicked]",
      options: ["validates/is clicked", "is validated/clicks", "is validated/is clicked", "validates/clicks"],
      answer: "is validated/is clicked"
    },
  commonMistakes
};
