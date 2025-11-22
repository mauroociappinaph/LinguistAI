import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Articles, Comparatives & Preferences",
    explanation: "Use **articles** (a/an, the) for tools. Use **comparatives** to compare them ('-er' for short adjectives, 'more' for long adjectives). Use verbs like **like**, **don't like**, and **prefer** to state your opinion.\n\n- **better/worse** are irregular comparatives (good -> better, bad -> worse).",
    usage: "Use this language to discuss and justify your choice of tools. 'I **prefer** VS Code because it's **faster than** Atom.'",
    examples: [
        "I use **a** code editor. **The** editor is VS Code.",
        "VS Code is **faster than** Sublime Text.",
        "This framework is **more popular** than the old one.",
        "I **like** this IDE, but I **prefer** using a simple text editor.",
        "My new laptop is **better than** my old one."
    ],
    commonMistakes: [
        {
            incorrect: "VS Code is more fast than Sublime Text.",
            correct: "VS Code is faster than Sublime Text.",
            explanation: "For short, one-syllable adjectives like 'fast', add '-er' to make the comparative form."
        },
        {
            incorrect: "I use code editor.",
            correct: "I use a code editor.",
            explanation: "When talking about a singular, non-specific countable noun (like 'editor'), you need to use an article like 'a' or 'an'."
        }
    ],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "This framework is ___ than the old one.",
        options: ["popular", "more popular", "most popular"],
        answer: "more popular"
    },
    rules: []
};
