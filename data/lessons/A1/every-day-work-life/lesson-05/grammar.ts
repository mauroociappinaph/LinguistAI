import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Imperatives for UI Actions",
    explanation: "We use imperative verbs to give clear instructions on how to use an application. These are direct actions the user needs to perform in the interface.",
    usage: "When guiding a user or a new team member through an application, use these simple imperative verbs to give clear, step-by-step instructions.",
    rules: [
        { from: "I", to: "am + verb-ing" },
        { from: "He/She/It", to: "is + verb-ing" },
        { from: "We/You/They", to: "are + verb-ing" },
    ],
    examples: [
        "**Click** on the 'Save' button.",
        "**Enter** your username and password.",
        "**Go to** the settings page.",
        "**Upload** your profile picture."
    ],
    commonMistakes: [
        {
            incorrect: "You go to the settings page.",
            correct: "Go to the settings page.",
            explanation: "When giving instructions, omit the subject 'you'. The imperative form is more direct and natural."
        },
        {
            incorrect: "For save, you click the button.",
            correct: "To save, click the button.",
            explanation: "To explain the purpose of an action, use the infinitive with 'to' (e.g., 'To save...'). The instruction itself remains in the imperative ('click...')."
        }
    ],
    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ your profile picture.",
        options: ["You upload", "To upload", "Upload"],
        answer: "Upload"
    }
};
