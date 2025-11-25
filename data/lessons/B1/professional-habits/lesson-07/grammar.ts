import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
    title: "Writing Simple Instructions & Comments",

    explanation:
        "When writing technical instructions, documentation, or internal notes, clarity is essential. Two structures are especially useful:\n\n" +
        "🔹 **Imperatives (base form of the verb)** — used for direct, actionable steps in guides, checklists, and README files.\n" +
        "Example: *'Open the file', 'Run the script', 'Install the dependencies'.*\n\n" +
        "🔹 **Simple Present** — used in comments or descriptions to explain what functions, components, or files do.\n" +
        "Example: *'This function **checks** user permissions', 'This route **returns** the user profile.'*\n\n" +
        "Mastering these forms helps you write professional, concise instructions and clean documentation that any developer can understand at a glance.",

    usage:
        "Use these structures when writing:\n\n" +
        "📁 **README files**\n" +
        "- *'Install the project dependencies.'*\n" +
        "- *'Run the server.'*\n\n" +
        "🧪 **Testing instructions**\n" +
        "- *'Open Postman and send a GET request to /users.'*\n" +
        "- *'Verify the response code.'*\n\n" +
        "💬 **Code comments**\n" +
        "- *'This function formats the date.'*\n" +
        "- *'This component handles the login logic.'*\n\n" +
        "🗒️ **Checklists**\n" +
        "- *'Create the environment variables file.'*\n" +
        "- *'Document the new endpoint.'*\n\n" +
        "Imperatives tell the user what to do. The simple present explains what something does. Both are fundamental in tech communication.",

    rules: [
        { from: "Imperative (base form)", to: "Use the base verb without a subject: 'Open the file.', 'Install the deps.'"},
        { from: "No subject", to: "Do NOT use 'you' in commands: incorrect → 'You open the file.'; correct → 'Open the file.'"},
        { from: "Negative imperative", to: "Use 'Don't + base verb' for prohibitions: 'Don't delete the config.'"},
        { from: "Polite requests", to: "Use 'Please + imperative' or modals for politeness: 'Please restart the server.' / 'Could you check the logs?'. "},
        { from: "Purpose with 'to'", to: "Use 'To + infinitive' to state purpose before an imperative: 'To save, click the button.'"},
        { from: "Simple Present for comments", to: "Describe what code/components do using simple present: 'This function returns a token.'"},
        { from: "Imperatives in UI copy", to: "Use short imperatives for buttons and microcopy: 'Save', 'Upload', 'Sign in'."},
        { from: "Step-by-step structure", to: "Number steps and start each with an imperative for clarity: '1. Clone the repo. 2. Install deps.'"},
        { from: "Let’s for collaborative actions", to: "Use 'Let's + base verb' to propose joint actions: 'Let's review the PR.'"},
        { from: "No 'to' after 'let's'", to: "Correct: 'Let's check the logs.' Incorrect: 'Let's to check the logs.'"},
        { from: "Avoid redundant subjects in comments", to: "Don't repeat the subject: incorrect → 'This function it calculates...'; correct → 'This function calculates...'"},
        { from: "Verb forms after verbs like 'need' or 'want'", to: "Use 'to + base' after 'need', 'want', 'plan': 'You need to run the migrations.'"}
    ],

    examples: [
        "**Open** the 'config' file.",
        "**Copy** the API key.",
        "**Run** the installation script.",
        "This function **calculates** the total price.",
        "This component **renders** the user card.",
        "**Write down** the steps in a document.",
        "This method **returns** the user token."
    ],

    commonMistakes: [
        {
            incorrect: "You should to open the file.",
            correct: "Open the file.",
            explanation: "Imperatives are direct and do not use 'to' or modal verbs like 'should' unless giving polite recommendations."
        },
        {
            incorrect: "This function it calculates the price.",
            correct: "This function calculates the price.",
            explanation: "Avoid repeating the subject. 'This function' already acts as the subject."
        },
        {
            incorrect: "To run the script, you need run the command.",
            correct: "To run the script, you need **to run** the command.",
            explanation: "After 'need', use 'to + base form'."
        }
    ],

    interactiveExercise: {
        type: 'fill-in-the-blank',
        question: "___ the API key.",
        options: ["Copying", "Copy", "To copy"],
        answer: "Copy"
    }
};
