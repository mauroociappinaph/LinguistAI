import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Simple Present & Simple Past for Stand-ups",
    explanation: "In daily stand-ups, you use two main tenses:\n\n- **Simple Past**: to report what you completed ('Yesterday, I **fixed** the bug.').\n- **Simple Present**: to state your plan for today ('Today, I **work** on...').",
    usage: "Use this grammar to report your progress in daily meetings.",
    examples: [
        "Yesterday, I **worked** on the login page.",
        "Today, I **work** on the user profile."
    ],
    commonMistakes: [],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "Yesterday, I ___ (fix) the bug.",
        options: ["fix", "fixed", "fixing"],
        answer: "fixed"
    },
    rules: []
};
