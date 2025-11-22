import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Verb 'to have' & Demonstratives",
    explanation: "Use the verb **'to have'** to talk about possession. For 'he', 'she', 'it', use **'has'**. Use **demonstratives** (this, that, these, those) to point to specific objects.\n\n- **this** (singular, near): 'This is my keyboard.'\n- **that** (singular, far): 'That is the main server.'\n- **these** (plural, near): 'These are my monitors.'\n- **those** (plural, far): 'Those are the old computers.'",
    usage: "Use this grammar to describe your equipment and workspace. It's essential for asking for new equipment or explaining your setup to IT support.",
    examples: [
        "I **have** a new laptop.",
        "She **has** two monitors.",
        "**This** keyboard is ergonomic.",
        "**That** server is down.",
        "**These** headphones have a microphone.",
        "**Those** cables are for the old printer."
    ],
    commonMistakes: [
        {
            incorrect: "She have two monitors.",
            correct: "She has two monitors.",
            explanation: "For third-person singular (he, she, it), use 'has', not 'have'."
        },
        {
            incorrect: "This are my new headphones.",
            correct: "These are my new headphones.",
            explanation: "'This' is for a singular object that is near. 'These' is for plural objects that are near."
        }
    ],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ headphones have a microphone.",
        options: ["This", "That", "These"],
        answer: "These"
    },
    rules: []
};
