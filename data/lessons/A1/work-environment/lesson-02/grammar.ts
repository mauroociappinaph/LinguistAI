import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Prepositions for Digital Locations",
  explanation:
    "**'In'** for inside digital spaces, **'on'** for online platforms, **'from'** for remote locations.\\n\\n- **in** a meeting (virtual space)\\n- **on** Teams/Zoom/Slack (platforms)\\n- **from** home/office/café (physical locations)\\n\\nUse these prepositions to describe your remote work setup: 'We're meeting **in** Google Meet!', 'Share that document **on** Slack', 'She works **from** multiple locations'.",
  usage:
    "In remote work, these prepositions help you communicate clearly:\\n\\n**'Log in'** to systems, **'attend'** meetings online, **'connect from'** anywhere.\\n\\nExamples: 'I'm connecting **from** my home office', 'Join the call **on** Microsoft Teams', 'The files are **in** the shared drive'.",
  rules: [
    {
      from: "Digital platforms",
      to: "on (on Slack, on Teams, on GitHub)"
    },
    {
      from: "Virtual meetings/call",
      to: "in (in a meeting, in a call)"
    },
    {
      from: "Physical locations when working remotely",
      to: "from (from home, from the office, from a café)"
    }
  ],
  examples: [
    "We're discussing this **on** Slack.",
    "The team works **from** home today.",
    "Join the call **in** Zoom at 3 PM.",
    "**From** my home office, I can see...",
    "Save the file **in** the shared folder."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Join the standup ___ Teams at 9 AM.",
    options: ["in", "on", "from", "at"],
    answer: "on"
  }
};
