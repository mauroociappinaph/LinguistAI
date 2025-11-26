import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Present Continuous for Dynamic Issues",
    explanation:
      "**Present Continuous**: Shows ongoing actions and changing states - 'The button is flickering', 'Data is loading incorrectly'\n\nDescribe UI problems as they occur:\n\n🔄 **Visual issues**: 'The loading spinner is spinning endlessly'\n💾 **Data problems**: 'The list is not updating with new items'\n📱 **State changes**: 'The modal is staying open when it should close'",
    usage:
      "Talk about UI behaviors and data flows:\n\n⌛ **Loading states**: 'The page is loading slowly'\n🔄 **Animation issues**: 'Icons are jumping around'\n📊 **Data display**: 'Numbers are showing wrong values'\n⚠️ **Error states**: 'Error messages are appearing incorrectly'",
    rules: [
      {
        from: "Ongoing visual problems",
        to: "Subject + is/are + -ing verb (Button + is + flickering)"
      },
      {
        from: "Dynamic data issues",
        to: "Data + is/are + verb-ing (Records + are + loading)"
      },
      {
        from: "Changing states",
        to: "State + is + verb-ing (Loading state + is + showing)"
      }
    ],
    examples: [
      "The loading spinner **is spinning endlessly** and **confusing** users.",
      "The dropdown menu **is closing** automatically when it shouldn't.",
      "Data **is updating** in the wrong order and **causing** display issues.",
      "The button **is changing** colors randomly when users click it.",
      "Error messages **are appearing** even when inputs are valid."
    ],
    interactiveExercise: {
      type: "sentence-builder",
      question: "The spinner [is] ___ endlessly",
      options: ["is spinning", "spins", "spun", "will spin"],
      answer: "is spinning"
    },
  commonMistakes
};
