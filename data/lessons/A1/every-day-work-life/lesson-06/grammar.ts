import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Simple Present & Simple Past for Stand-ups",
    explanation:
        "In daily stand-ups, developers typically answer three key questions: What did you do yesterday? What are you doing today? Do you have any blockers?\n\n" +
        "To communicate this effectively, two tenses are essential:\n\n" +
        "🔹 **Simple Past** — used to report completed tasks. It refers to finished actions from yesterday or earlier.\n" +
        "Example: *'Yesterday, I **fixed** the bug in the auth service.'*\n\n" +
        "🔹 **Simple Present** — used to describe today's plan or habitual responsibilities. It expresses tasks you intend to complete today.\n" +
        "Example: *'Today, I **work** on improving the dashboard performance.'*\n\n" +
        "Using these tenses correctly makes your communication clear, professional, and aligned with agile practices—especially during stand-ups, sprint reviews, Jira updates, commit messages, and documentation.",

    usage:
        "Use these tenses to structure your message during stand-ups:\n\n" +
        "🕒 **1. Reporting Yesterday (Simple Past):**\n" +
        "- *'Yesterday, I **validated** the API responses.'*\n" +
        "- *'I **finished** the unit tests for the auth module.'*\n\n" +
        "🕒 **2. Explaining Today’s Plan (Simple Present):**\n" +
        "- *'Today, I **work** on the payment integration.'*\n" +
        "- *'I **review** the pending PRs this morning.'*\n\n" +
        "🧱 **3. Mentioning Blockers:**\n" +
        "- *'I **can’t proceed** because the API is down.'*\n" +
        "- *'I **am stuck** with the database migration.'*\n\n" +
        "Mastering these forms helps you communicate clearly and concisely in tech environments.",

    rules: [
        {
            from: "Simple Past",
            to: "verb + -ed (for regular verbs)",
            /* note: "Irregular verbs change form (go → went, build → built)." */
        },
        {
            from: "Simple Present",
            to: "verb (base form) / verb + s for he/she/it",
            /* note: "Used for routines, plans for today, and general responsibilities." */
        }
    ],

    examples: [
        // Simple Past
        "Yesterday, I **reviewed** the pull request.",
        "Yesterday, we **completed** the UI integration.",
        "Yesterday, the team **fixed** two major bugs.",

        // Simple Present
        "Today, I **work** on the notifications module.",
        "I **write** documentation every morning.",
        "He **tests** the API before deployment."
    ],

    commonMistakes: [
        {
            incorrect: "Yesterday, I fix the bug.",
            correct: "Yesterday, I **fixed** the bug.",
            explanation: "Use simple past to talk about completed tasks."
        },
        {
            incorrect: "Today, I am work on the feature.",
            correct: "Today, I **work** on the feature.",
            explanation:
                "Use simple present for today's plan. Present continuous is for right now, not the whole day."
        },
        {
            incorrect: "He work on the backend.",
            correct: "He **works** on the backend.",
            explanation: "In simple present, add 's' for he/she/it."
        }
    ],

    interactiveExercise: {
        type: "fill-in-the-blank",
        question: "Yesterday, I ___ (fix) the bug.",
        options: ["fix", "fixed", "fixing"],
        answer: "fixed"
    }
};
