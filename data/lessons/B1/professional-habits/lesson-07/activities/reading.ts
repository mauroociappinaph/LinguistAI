import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
    title: "Writing Effective Documentation",
    text:
        "Good documentation is essential for any development team. Here's a quick guide on how to write clear, helpful docs.\n\n" +
        "**Keep It Simple**\n" +
        "**Use** short sentences and simple language. **Avoid** technical jargon when possible. " +
        "**Write** in the imperative form for instructions: 'Install the package' instead of 'You should install the package.'\n\n" +
        "**Structure Your Content**\n" +
        "**Start** with a brief overview. **Break down** complex processes into numbered steps. " +
        "**Use** bullet points for lists. This function **validates** user input. This component **renders** the navigation bar.\n\n" +
        "**Add Examples**\n" +
        "**Include** code examples whenever possible. **Show** both correct and incorrect usage. " +
        "**Explain** why something works or doesn't work.\n\n" +
        "**Use Visual Aids**\n" +
        "**Add** screenshots to guide users through UI-based tasks. **Create** diagrams for complex architectures. " +
        "**Keep** images up to date when the interface changes.\n\n" +
        "**Maintain Your Docs**\n" +
        "**Review** documentation regularly. **Update** it when features change. **Remove** outdated information. " +
        "This method **returns** the current user session. This endpoint **accepts** POST requests only.\n\n" +
        "Remember: good documentation **saves** time for everyone on the team!",
    comprehensionQuestions: [
        {
            question: "What verb form should you use for instructions?",
            answer: "The imperative form (e.g., 'Install the package')."
        },
        {
            question: "Why should you add screenshots?",
            answer: "To guide users through UI-based tasks."
        }
    ]
};
