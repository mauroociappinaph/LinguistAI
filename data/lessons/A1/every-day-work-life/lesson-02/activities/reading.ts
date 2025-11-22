import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
    title: "Choosing the Right Code Editor",
    text:
        "When I started my first developer job, I had to choose **a** code editor. My team recommended two options: VS Code and Sublime Text.\n\n" +
        "I tried both editors for a week. VS Code is **more popular than** Sublime Text in our company. It has **better** integration with Git, and the extension marketplace is **larger**. " +
        "However, Sublime Text is **faster than** VS Code when opening large files.\n\n" +
        "After testing both, I made my decision. I **prefer** VS Code **to** Sublime Text because it's **more flexible** and has a stronger community. " +
        "I **like using** extensions for linting and debugging. My colleague **prefers** Sublime Text because it's lighter and **simpler**.\n\n" +
        "In the end, **the** best tool depends on your workflow. I **don't like** heavy IDEs for small projects, but I **love** VS Code for full-stack development.",
    comprehensionQuestions: [
        {
            question: "Why does the author prefer VS Code?",
            answer: "Because it's more flexible and has a stronger community."
        },
        {
            question: "What is Sublime Text better at?",
            answer: "It's faster when opening large files."
        }
    ]
};
