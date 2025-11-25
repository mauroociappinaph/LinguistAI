import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Prepositions of Place: Describing UI Layouts",
  explanation:
    "**Prepositions of place** are essential for describing user interfaces (UI). You need them to explain where elements are located on the screen.\n\n" +
    "**Key Prepositions for UI:**\n" +
    "- **at the top / bottom**: 'The navbar is at the top.'\n" +
    "- **on the left / right**: 'The sidebar is on the left.'\n" +
    "- **in the center / middle**: 'The modal is in the center.'\n" +
    "- **next to**: 'The button is next to the input field.'\n" +
    "- **below / under**: 'The error message is below the form.'\n" +
    "- **above**: 'The title is above the image.'\n" +
    "- **between**: 'The logo is between the menu items.'\n\n" +
    "Use these to give precise feedback on designs and layouts.",
  usage:
    "Use these prepositions when discussing designs, wireframes, or bugs related to layout.\n\n" +
    "**Common Contexts:**\n" +
    "- Design Reviews: 'Move the button to the right.'\n" +
    "- Bug Reports: 'The footer is overlapping the content.'\n" +
    "- Frontend Development: 'Position the element in the center.'",
  rules: [
    { from: "At", to: "Specific points (at the top, at the bottom)" },
    { from: "On", to: "Surfaces/Sides (on the left, on the screen)" },
    { from: "In", to: "Enclosed spaces (in the header, in the box)" }
  ],
  examples: [
    "The search bar is **at the top** of the page.",
    "The menu is **on the left** side.",
    "The copyright is **at the bottom**.",
    "The image is **in the center** of the screen.",
    "The label is **above** the input field.",
    "The error is **below** the button."
  ],
  commonMistakes: [
    {
      incorrect: "The button is in the top.",
      correct: "The button is at the top.",
      explanation: "Use 'at' for top and bottom."
    },
    {
      incorrect: "The sidebar is in the left.",
      correct: "The sidebar is on the left.",
      explanation: "Use 'on' for left and right sides."
    }
  ],
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The navigation bar is usually ___ the top of the page.",
    options: ["at", "in", "on"],
    answer: "at"
  }
};
