export const grammar = {
  title: "Describing Processes with Compound Adjectives",
  explanation:
    "Compound adjectives like 'top-down' and 'bottom-up' are used to describe the direction or style of a process. They are powerful words for explaining how systems are designed or how problems are solved.",
  usage:
    "In tech, you use these to describe development methodologies (Waterfall is top-down, Agile can be bottom-up), problem-solving strategies, or system design.",
  examples: [
    "We are using a **top-down approach** to design the architecture.",
    "This is a **bottom-up process**, starting with the smallest components.",
    "His **top-down thinking** helps him see the big picture.",
  ],
  commonMistakes: [
    {
      incorrect: "This is a process bottom up.",
      correct: "This is a bottom-up process.",
      explanation:
        "When used before a noun, a compound adjective like 'bottom-up' comes before the noun it describes.",
    },

    {
      incorrect: "We use a top down approach.",
      correct: "We use a top-down approach.",
      explanation:
        "When a compound adjective like 'top-down' comes before a noun, it is usually hyphenated.",
    },
  ],
  interactiveExercise: {
    type: "fill-in-the-blank" as const,
    question: "This is a ___, starting with the smallest components.",
    options: ["process bottom-up", "bottom-up process", "bottom process up"],
    answer: "bottom-up process",
  },
  rules: []
};
