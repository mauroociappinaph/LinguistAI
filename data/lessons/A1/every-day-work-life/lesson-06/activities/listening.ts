import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
    title: "Stand-up Report",
    audioSrc: "",
    transcript: "Morning team. Yesterday, I completed the database migration and deployed the hotfix to production. I also reviewed three pull requests from the frontend team and fixed a critical bug in the payment service. Today, I work on optimizing the search queries. I plan to refactor the API endpoints and write unit tests for the new features. I also need to update the documentation for the authentication flow. No blockers at the moment, but I'll need Sarah's input on the database schema changes later this afternoon.",
    comprehensionQuestions: [
        {
            question: "What did the speaker complete yesterday?",
            answer: "The database migration and deployed the hotfix to production."
        },
        {
            question: "What does the speaker plan to do today?",
            answer: "Optimize the search queries, refactor the API endpoints, and write unit tests."
        },
        {
            question: "Does the speaker have any blockers?",
            answer: "No blockers at the moment."
        }
    ]
};
