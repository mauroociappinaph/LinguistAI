import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
    title: "Daily Stand-up Update",
    audioSrc: "",
    transcript: "Good morning everyone. I'm currently working on the authentication module. I'm implementing OAuth2 integration with Google and GitHub. I'm also debugging some issues with the session management. The team is developing the new dashboard interface, and we're making good progress. I'm testing the login flow right now to make sure everything works smoothly. I'm planning to finish this by end of day. Sarah is reviewing my pull request, and John is developing the mobile version. We're all collaborating closely on this feature.",
    comprehensionQuestions: [
        {
            question: "What is the speaker currently working on?",
            answer: "The authentication module with OAuth2 integration."
        },
        {
            question: "What is the speaker testing right now?",
            answer: "The login flow."
        },
        {
            question: "What is the team developing?",
            answer: "The new dashboard interface."
        }
    ]
};
