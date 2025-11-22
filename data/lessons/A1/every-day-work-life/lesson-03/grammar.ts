import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Imperatives for Instructions",
    explanation: "We use the imperative form (the base form of the verb) to give orders or instructions. It is simple and direct.",
    usage: "Imperatives are the foundation of technical instructions. You will see them in every README file, tutorial, and command line guide (e.g., '**Run** the script', '**Install** the dependencies').",
    examples: ["**Open** the terminal.", "**Run** the script.", "**Install** the dependencies."],
    commonMistakes: [
        {
            incorrect: "You open the terminal.",
            correct: "Open the terminal.",
            explanation: "When giving a command or instruction, the imperative form does not use a subject ('you')."
        },
        {
            incorrect: "Please to install the dependencies.",
            correct: "Please install the dependencies.",
            explanation: "The imperative is just the base form of the verb. Don't add 'to' before it."
        }
    ],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ the dependencies.",
        options: ["To install", "You install", "Install"],
        answer: "Install"
    },
    rules: []
};
