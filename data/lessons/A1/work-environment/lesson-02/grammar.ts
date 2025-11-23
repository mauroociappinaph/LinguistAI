import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Prepositions for Digital Locations",
  explanation:
    "**'In'** para espacios digitales, **'on'** para plataformas online, **'from'** para ubicaciones remotas.\\n\\n- **in** a meeting (espacio virtual)\\n- **on** Teams/Zoom/Slack (plataformas)\\n- **from** home/office/café (ubicaciones físicas)\\n\\nUsa estas preposiciones para describir tu configuración de trabajo remoto: 'We're meeting **in** Google Meet!', 'Share that document **on** Slack', 'She works **from** multiple locations'.",
  usage:
    "En trabajo remoto, estas preposiciones te ayudan a comunicarte claramente:\\n\\n**'Log in'** a los sistemas, **'attend'** reuniones online, **'connect from'** cualquier lugar.\\n\\nEjemplos: 'I'm connecting **from** my home office', 'Join the call **on** Microsoft Teams', 'The files are **in** the shared drive'.",
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
