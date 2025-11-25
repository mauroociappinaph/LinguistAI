import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Verb 'to have' & Demonstratives",

    explanation:
        "The verb **'to have'** is used to talk about possession, characteristics, and resources — essential in tech when describing equipment, configurations, or system components.\n\n" +
        "Use **'have'** with *I, you, we, they* and **'has'** with *he, she, it*.\n\n" +
        "Demonstratives are used to point to specific objects depending on **number** and **distance**:\n\n" +
        "🔹 **this** — singular, near: *'This is my keyboard.'*\n" +
        "🔹 **that** — singular, far: *'That is the main server.'*\n" +
        "🔹 **these** — plural, near: *'These are my monitors.'*\n" +
        "🔹 **those** — plural, far: *'Those are the old computers.'*\n\n" +
        "Mastering these forms helps you describe your setup, request hardware, explain issues to IT, or document system parts clearly.",

    usage:
        "Use **'to have'** and demonstratives in:\n\n" +
        "💻 **Hardware descriptions**\n" +
        "- *'I have a 16-inch MacBook.'*\n" +
        "- *'She has a dual-monitor setup.'*\n\n" +
        "🛠️ **IT support conversations**\n" +
        "- *'This cable has a loose connector.'*\n" +
        "- *'That router has a configuration conflict.'*\n\n" +
        "📦 **Office or remote work setup descriptions**\n" +
        "- *'These chairs have adjustable height.'*\n" +
        "- *'Those screens are from the old office.'*\n\n" +
        "📘 **Documentation & onboarding**\n" +
        "- *'This module has two services.'*\n" +
        "- *'Those endpoints have deprecated parameters.'*\n\n" +
        "These structures help you be precise when referencing items, files, devices, or components.",

    rules: [
        { from: "I / You / We / They", to: "use **have** → 'They have a new router.'" },
        { from: "He / She / It", to: "use **has** → 'The server has a backup drive.'" },
        { from: "This (singular, near)", to: "Use with a single nearby object → 'This file has an error.'" },
        { from: "That (singular, far)", to: "Use with a single object far away (physical or conceptual) → 'That repo has old dependencies.'" },
        { from: "These (plural, near)", to: "Use with multiple nearby objects → 'These logs have useful details.'" },
        { from: "Those (plural, far)", to: "Use with multiple far objects → 'Those servers have outdated firmware.'" },
        { from: "Equipment descriptions", to: "Use 'to have' to describe devices, tools, accessories: 'I have a mechanical keyboard.'" },
        { from: "Software & system components", to: "'Have' describes attributes → 'This API has three endpoints.'" },
        { from: "No plural 's' on demonstratives", to: "Never say 'theses' or 'thoses'. Only 'these' and 'those'." },
        { from: "Negative form", to: "Use *don't have* / *doesn't have* → 'It doesn't have Wi-Fi support.'" }
    ],

    examples: [
        "I **have** a new laptop.",
        "She **has** two monitors.",
        "**This** keyboard is ergonomic.",
        "**That** server is down.",
        "**These** headphones have a microphone.",
        "**Those** cables are for the old printer.",
        "This API **has** two authenticated routes.",
        "Those logs **have** useful debugging info."
    ],

    commonMistakes: [
        {
            incorrect: "She have two monitors.",
            correct: "She has two monitors.",
            explanation: "Third-person singular always uses 'has'."
        },
        {
            incorrect: "This are my new headphones.",
            correct: "These are my new headphones.",
            explanation: "'This' is singular; 'these' is plural."
        }
    ],

    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ headphones have a microphone.",
        options: ["This", "That", "These"],
        answer: "These"
    }
};
