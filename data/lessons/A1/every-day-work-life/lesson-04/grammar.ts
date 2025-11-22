import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Present Continuous: Describing Activities",
    explanation: "The present continuous (am/is/are + verb-ing) describes actions happening right now or around this time. Very common in tech work for describing current tasks.",
    usage: "In daily stand-ups, code reviews, and team communications, use present continuous to talk about what you're working on now.",
    rules: [
        { from: "I", to: "am + verb-ing" },
        { from: "He/She/It", to: "is + verb-ing" },
        { from: "We/You/They", to: "are + verb-ing" },
    ],
    examples: [
        "I **am working** on the login bug.",
        "She **is testing** the new API.",
        "We **are developing** the mobile app.",
    ],
    commonMistakes: [
        {
            incorrect: "I work on the bug now.",
            correct: "I am working on the bug right now.",
            explanation: "Present continuous emphasizes the current moment.",
        },
        {
            incorrect: "I am debug the code.",
            correct: "I am debugging the code.",
            explanation: "Use verb-ing form (debugging, not debug).",
        },
    ],
    interactiveExercise: {
        type: "fill-in-the-blank",
        question: "We ___ (develop) the new feature.",
        options: ["are developing", "is developing", "am developing"],
        answer: "are developing",
    },
};
