import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "There is/are & Prepositions of Place",
  explanation: 
    "Use **'there is'** for singular things and **'there are'** for plural things to say that something exists. Combine them with prepositions of place to describe where things are.\n- **in**: inside something (in the office)\n- **on**: on a surface (on the desk)\n- **at**: at a specific point (at reception)\n- **next to**: beside something (next to the window)\n\nFor negation, use **'there isn't'** for singular and **'there aren't'** for plural to say that something does not exist.",
  usage: 
    "Use 'there is/are' and prepositions to describe your work environment, whether it's a physical office or a digital space like a project folder ('**There is** a new file **in** this folder.').\n\nYou can also use **'there isn't / there aren't'** to talk about missing items or empty spaces (e.g., '**There isn't** a printer in this room.').\n\nUse short questions for interaction: '**Is there** a coffee machine?', '**Are there** any chairs in the meeting room?'.",
  rules: [
    {
      from: "Subject",
      to: "Verb form"
    },
    {
      from: "Singular things",
      to: "There is + singular noun"
    },
    {
      from: "Plural things",
      to: "There are + plural noun"
    },
    {
      from: "Questions",
      to: "Is there/Are there + noun?"
    },
    {
      from: "Negation",
      to: "There isn't/aren't + noun"
    }
  ],
  examples: [
    "**There is** a monitor **on** my desk.",
    "**There are** two new developers **in** the team.",
    "Is there a coffee machine **next to** the kitchen?",
    "**There isn't** a printer in this office.",
    "Are there any spare chairs in the meeting room?"
  ],
  commonMistakes: [
    {
      incorrect: "There are a monitor on my desk.",
      correct: "There is a monitor on my desk.",
      explanation: 
        "Use 'there is' for singular nouns ('a monitor') and 'there are' for plural nouns ('two monitors')."
    },
    {
      incorrect: "The monitor is in my desk.",
      correct: "The monitor is on my desk.",
      explanation: 
        "Use 'on' for things that are on a surface. Use 'in' for things that are inside something, like 'in a drawer'."
    },
    {
      incorrect: "There are some chairs by the window?",
      correct: "Are there any chairs next to the window?",
      explanation: 
        "For questions, the auxiliary verb comes first: 'Is/Are there' instead of 'There is/are'."
    }
  ],
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ a coffee machine next to the kitchen?",
    options: ["Is there", "Are there", "There is"],
    answer: "Is there"
  }
};
