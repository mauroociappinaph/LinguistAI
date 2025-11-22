import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
    title: "Setting Up Your Development Environment",
    text:
        "Welcome to the team! Let's set up your development environment step by step.\n\n" +
        "**Step 1: Install Node.js**\n" +
        "**Download** the latest LTS version from the official website. **Run** the installer and **follow** the setup wizard. " +
        "**Don't** change the default installation path unless necessary.\n\n" +
        "**Step 2: Clone the Repository**\n" +
        "**Open** your terminal. **Navigate** to your projects folder. **Run** the following command:\n" +
        "`git clone https://github.com/company/project.git`\n\n" +
        "**Step 3: Install Dependencies**\n" +
        "**Enter** the project directory. **Run** `npm install` to install all dependencies. This may take a few minutes. " +
        "**Don't close** the terminal while the installation is running.\n\n" +
        "**Step 4: Configure Environment Variables**\n" +
        "**Copy** the `.env.example` file and **rename** it to `.env`. **Open** the file and **add** your API keys.\n\n" +
        "Let's verify everything is working correctly. **Run** `npm run dev` to start the development server. " +
        "**Check** that the application opens at `http://localhost:3000`.\n\n" +
        "If you encounter any issues, **don't hesitate** to ask for help in the team chat!",
    comprehensionQuestions: [
        {
            question: "What should you do after cloning the repository?",
            answer: "Enter the project directory and run npm install."
        },
        {
            question: "How do you verify everything is working?",
            answer: "Run npm run dev and check that the application opens at localhost:3000."
        }
    ]
};
