import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
    { item: "command", explanation: "An instruction given to a computer program.", example: "Enter the 'git clone' command.", pronunciation: "/kəˈmɑːnd/" },
    { item: "terminal", explanation: "A text-based interface for running commands on the operating system.", example: "Open your terminal and type 'npm install'.", pronunciation: "/ˈtɜːrmɪnəl/" },
    { item: "line", explanation: "A row of text, especially in a code file or terminal.", example: "There is an error on line 42.", pronunciation: "" },
    { item: "argument", explanation: "A value passed to a command or function.", example: "The '-v' argument shows the version.", pronunciation: "/ˈɑːrɡjumənt/" },
    { item: "script", explanation: "A file containing a sequence of commands to be executed.", example: "I wrote a script to automate the process.", pronunciation: "/skrɪpt/" },
    { item: "dependency", explanation: "A software library or package that your code depends on to function.", example: "First, you need to install all the dependencies.", pronunciation: "/dɪˈpɛndənsi/" },
    { item: "carefully", explanation: "With great attention to detail; cautiously.", example: "Follow these instructions carefully.", pronunciation: "/ˈkɛərfəli/" },
    { item: "Could you repeat the command?", explanation: "Ask someone to repeat a command or instruction.", example: "A: 'Type 'npm install'.' B: 'Sorry, could you repeat the command?'", pronunciation: "" },
    { item: "Could you spell that?", explanation: "Ask someone to spell a difficult command or file name.", example: "A: 'Run the 'chmod' command.' B: 'Could you spell that?'", pronunciation: "" },
    { item: "What does 'dependency' mean?", explanation: "Ask for the meaning of a technical term in an instruction.", example: "The first step is 'install the dependency'. What does 'dependency' mean?", pronunciation: "" }
];

export const phrasalVerbs: VocabularyItem[] = [
    { item: "walk through", explanation: "To guide someone through a process step-by-step.", example: "Let me walk you through the installation process.", pronunciation: "" },
    { item: "try out", explanation: "To test something to see if it works or if you like it.", example: "I'm going to try out this new code editor.", pronunciation: "" },
    { item: "run into", explanation: "To encounter a problem or difficulty unexpectedly.", example: "I run into an error when I try to install the library.", pronunciation: "" }
];

export const compoundWords: VocabularyItem[] = [
    { item: "command line", explanation: "The text-based interface where you type commands. A synonym for terminal.", example: "I prefer to use the command line for Git.", pronunciation: "" },
    { item: "version control", explanation: "A system that records changes to a file or set of files over time so that you can recall specific versions later.", example: "Git is a popular version control system.", pronunciation: "" }
];

export const functionalChunks = {
    title: "Giving & Receiving Instructions",
    chunks: [
        {
            chunk: "Run the command...",
            usage: "Giving a direct instruction."
        },
        {
            chunk: "Make sure to...",
            usage: "Emphasizing an important step."
        },
        {
            chunk: "You need to install...",
            usage: "Stating a requirement."
        },
        {
            chunk: "I'm getting an error when I...",
            usage: "Reporting a problem during a process."
        }
    ]
};
