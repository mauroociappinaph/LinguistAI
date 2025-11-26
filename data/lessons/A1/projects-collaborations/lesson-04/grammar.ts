import { GrammarSection } from "../../../../../types";
import { commonMistakes } from "./commonMistakes";

export const grammar: GrammarSection = {
    title: "Past Tenses & Cause/Effect: Because/So That",
    explanation:
      "**'Because'** shows cause: 'The database crashed **because** of the memory leak'. **'So that'** shows purpose: 'We added logging **so that** we can debug issues'.\n\nIn problem-solving: 'The build failed **because** dependencies were missing', 'We implemented error handling **so that** users see helpful messages'.",
    usage:
      "Use in issue analysis:\n\n🔍 **Cause**: 'The error occurred **because** of input validation'\n🎯 **Purpose**: 'We added monitoring **so that** we can detect issues early'\n\nPast tenses for what happened, present for current analysis.",
    rules: [
      {
        from: "Cause relationship",
        to: "because + clause (Because the server crashed, the site was down)"
      },
      {
        from: "Purpose/result",
        to: "so that + clause (We added tests so that we prevent regression)"
      },
      {
        from: "Past complained problems",
        to: "Past simple for resolved issues, past perfect for sequence"
      }
    ],
    examples: [
      "The API failed **because** the authentication token expired.",
      "We implemented caching **so that** the page loads faster.",
      "The user **reported** the bug last week, and we **fixed** it yesterday.",
      "The server **had crashed** before we **identified** the memory leak.",
      "We added monitoring **so that** we can prevent future outages."
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The application crashed ___ of a null pointer exception.",
      options: ["because", "so that", "than"],
      answer: "because"
    },
  commonMistakes
};
