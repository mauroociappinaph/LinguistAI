
import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Prepositions of Time (at, on, in)",
  explanation:
    "We use specific prepositions for time:\n- **at**: for specific times (e.g., at 3:00 PM).\n- **on**: for days and dates (e.g., on Monday, on July 15th).\n- **in**: for long periods like months, years, or parts of the day (e.g., in August, in 2024, in the morning).",
  usage:
    "In tech, schedules are everything. Use these prepositions to talk correctly about deadlines, meetings, and project timelines.",
  rules: [
    { from: "Specific Time", to: "at" },
    { from: "Day / Date", to: "on" },
    { from: "Month / Year", to: "in" }
  ],
  examples: [
    "The meeting is **at** 3 o'clock.",
    "Our sprint ends **on** Friday.",
    "The project will launch **in** Q3."
  ],
  commonMistakes: [
    {
      incorrect: "The meeting is on 3 o'clock.",
      correct: "The meeting is at 3 o'clock.",
      explanation: "For specific clock times, always use 'at'."
    },
    {
      incorrect: "The project will launch on Q3.",
      correct: "The project will launch in Q3.",
      explanation:
        "For longer periods like months, quarters, and years, use 'in'."
    }
  ],
  interactiveExercise
};
