import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
    title: "Setting Up Your Development Environment",
    audioSrc: "",
    transcript: "Alright team, let me walk you through the setup process. First, open your terminal. Then, navigate to your projects folder using the cd command. Next, clone the repository with git clone. After that, enter the project directory. Now, run npm install to get all the dependencies. This might take a few minutes, so don't close the terminal. Once that's done, copy the .env.example file and rename it to .env. Finally, run npm run dev to start the development server. Make sure you check that everything loads correctly at localhost:3000. If you run into any issues, let me know in the team chat.",
    comprehensionQuestions: [
        {
            question: "What is the first step in the setup process?",
            answer: "Open your terminal."
        },
        {
            question: "What command do you run to install dependencies?",
            answer: "npm install"
        },
        {
            question: "How do you start the development server?",
            answer: "Run npm run dev."
        }
    ]
};
