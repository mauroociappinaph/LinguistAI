import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Writing Simple Instructions & Comments",
    explanation: "To write clear instructions, use the **imperative** (the base form of the verb). For comments in your notes, you can use the **Simple Present** to describe what something does.",
    usage: "This is essential for writing clear README files, checklists, or comments in your code. Simple, direct language is the most effective.",
    examples: [
        "**Open** the 'config' file.",
        "**Copy** the API key.",
        "This function **calculates** the total price.",
        "**Write down** the steps in a document."
    ],
    commonMistakes: [
        {
            incorrect: "You should to open the file.",
            correct: "Open the file.",
            explanation: "For direct instructions, the imperative is the clearest and most common form. Avoid adding extra words."
        },
        {
            incorrect: "This function it calculates the price.",
            correct: "This function calculates the price.",
            explanation: "The subject is 'This function'. You don't need to add 'it'."
        }
    ],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ the API key.",
        options: ["Copying", "Copy", "To copy"],
        answer: "Copy"
    },
    rules: []
};
