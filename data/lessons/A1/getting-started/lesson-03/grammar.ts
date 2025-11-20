import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Prepositions of Time (at, on, in)",

  explanation:
    "English uses different prepositions depending on how *specific* the time reference is. Understanding this will help you talk naturally about schedules, deadlines, meetings, and project timelines.\n\n" +
    "• **at** → very specific moments (exact times, night, special expressions)\n" +
    "• **on** → days and dates\n" +
    "• **in** → longer periods (months, years, seasons, parts of the day)\n\n" +
    "👉 **Remember:** The more specific the time, the smaller the unit, the more likely you use **at**.",

  usage:
    "Use these prepositions to communicate timelines clearly in stand-ups, planning meetings, or when coordinating tasks across teams and time zones. They help avoid confusion and make scheduling more precise.",

  rules: [
    { from: "Specific Time (3 PM, midnight)", to: "at" },
    { from: "Day / Date (Monday, July 15th)", to: "on" },
    { from: "Month / Year / Period (August, 2025, the morning)", to: "in" }
  ],

  examples: [
    "✔️ The daily stand-up is **at** 9:30 AM.",
    "✔️ We have a code review **at** noon.",
    "✔️ Our team meeting is **on** Wednesday.",
    "✔️ The next release is **on** March 10th.",
    "✔️ The feature will be tested **in** October.",
    "✔️ The product roadmap will be updated **in** 2025.",
    "✔️ We usually deploy **in** the evening.",
    "\n💡 *Tip: If it's a calendar day → use **on**. If it's a time on the clock → use **at**.*"
  ],

  commonMistakes: [
    {
      incorrect: "The meeting is on 3 o'clock.",
      correct: "The meeting is at 3 o'clock.",
      explanation: "Clock times always use **at**, not **on**."
    },
    {
      incorrect: "We launch the new version on July.",
      correct: "We launch the new version in July.",
      explanation: "Months use **in**, even if the date is not specified."
    },
    {
      incorrect: "The sprint starts in Monday.",
      correct: "The sprint starts on Monday.",
      explanation: "Days of the week always use **on**."
    }
  ],

  interactiveExercise
};
