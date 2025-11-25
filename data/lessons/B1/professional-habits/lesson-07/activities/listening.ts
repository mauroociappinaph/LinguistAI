import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
    title: "Writing Good Documentation",
    audioSrc: "",
    transcript: "Let me explain how we write documentation here. First, start with a clear title that describes what the feature does. Then, write a brief overview in simple language. Break down complex processes into numbered steps. Use bullet points for lists—it makes everything easier to read. Add code examples whenever possible. This helps developers understand how to use the API. Include screenshots for UI-related features. Make sure you explain all the parameters and their types. Finally, add a troubleshooting section at the end. This section answers common questions and helps users solve problems quickly. Remember, good documentation saves everyone time.",
    comprehensionQuestions: [
        {
            question: "What should you start with when writing documentation?",
            answer: "A clear title that describes what the feature does."
        },
        {
            question: "Why should you add code examples?",
            answer: "To help developers understand how to use the API."
        },
        {
            question: "What goes in the troubleshooting section?",
            answer: "Common questions and solutions to help users solve problems quickly."
        }
    ]
};
