// Lesson 6 Template - Todo: Adapt to actual lesson structure
import { Lesson, Difficulty } from '../../../../../types';

export const lesson06: Lesson = {
  id: "we6",
  title: "Roles and Responsibilities",
  level: Difficulty.A1,
  description: "Learn to talk about professional roles, responsibilities, and abilities in tech environments using 'can/cannot' and job-related vocabulary.",
  didYouKnow: "In many programming languages, the 'Single Responsibility Principle' states that a class or function should have only one specific responsibility. This makes the code easier to understand, test, and maintain, just like having clear roles in a team makes the work more efficient. Similarly, clear ownership and task assignment in software teams, tracked with tools like Jira tickets, Kanban boards, and repositories, ensures smooth workflow and accountability.",

  grammar: {
    title: "Possessive 's for Roles & Ownership",
    explanation:
      "We use **'s** after a noun (usually a person or a role) to show possession or relationship. For plural nouns ending in 's', add an apostrophe after the s (e.g., 'The designers' mockups are ready').",

    usage:
      "Use the possessive 's to talk about who is responsible for what. It shows relationships and ownership in a team (e.g., 'This is **Sarah's** task', 'That is the **designer's** mockup'). You can also use questions and negations to practice possession: 'Is this the developer’s responsibility?' or 'This isn't the QA's task.'",

    rules: [],
    examples: [
      "**This is John's computer.**",
      "**The designer's mockups are ready.**",
      "**What is the developer's responsibility?**",
      "**The developers' laptops are ready.**",
      "**Is this the developer's responsibility?**",
      "**This isn't the QA's task.**"
    ],
    commonMistakes: [
      {
        incorrect: "This is the computer of John.",
        correct: "This is John's computer.",
        explanation:
          "While 'the computer of John' is grammatically possible, it sounds very unnatural in English. The possessive 's is the standard and correct way to show possession for people."
      },
      {
        incorrect: "The mockups of the designer are ready.",
        correct: "The designer's mockups are ready.",
        explanation:
          "Use the possessive 's to show that the mockups belong to or were created by the designer. It is much more common and fluent."
      }
    ],
    interactiveExercise: {
      type: 'fill-in-the-blank',
      question: "What is the ___ responsibility?",
      options: ["developer his", "of the developer", "developer's"],
      answer: "developer's"
    }
  },
  vocabulary: [
    { item: "designer", explanation: "Someone who designs the look and user experience of a product.", example: "The designer created the user interface.", pronunciation: "/dɪˈzaɪnər/" },
    { item: "mockup", explanation: "A visual model of what a website or app will look like. It is more detailed than a wireframe.", example: "Please review the new mockups for the homepage.", pronunciation: "/ˈmɒkʌp/" },
    { item: "QA (Quality Assurance)", explanation: "The person or team responsible for testing the software to ensure its quality.", example: "The QA team found a critical bug.", pronunciation: "/ˌkjuː ˈeɪ/" },
    { item: "DevOps", explanation: "A role that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle.", example: "The DevOps engineer is responsible for the CI/CD pipeline.", pronunciation: "/ˈdɛvɒps/" },
    { item: "Product Manager", explanation: "The person who defines the vision and strategy for a product.", example: "The Product Manager decides which features to build.", pronunciation: "/ˈprɒdʌkt ˈmænɪdʒər/" },
    { item: "Team Lead", explanation: "The person who leads a team, often a senior developer.", example: "Our team lead helps us with technical challenges.", pronunciation: "/tiːm liːd/" },
    { item: "take ownership", explanation: "To take responsibility for a task or project.", example: "I will take ownership of this feature until it is completed.", pronunciation: "/teɪk ˈoʊnərʃɪp/" },
    { item: "assign a task", explanation: "To give someone a responsibility to complete.", example: "The manager will assign a task to each team member.", pronunciation: "/əˈsaɪn ə tæsk/" },
    { item: "lead a team", explanation: "To guide and manage a team to achieve a goal.", example: "Our team lead is very experienced in leading a team.", pronunciation: "/liːd ə tiːm/" },
    { item: "Jira ticket", explanation: "A task or issue tracked in the Jira project management system.", example: "Please update the Jira ticket when you complete the task.", pronunciation: "/ˈdʒɪərə ˈtɪkət/" },
    { item: "Kanban board", explanation: "A visual tool for managing workflow and tasks.", example: "We track our progress on the Kanban board.", pronunciation: "/ˈkænbæn bɔːrd/" },
    { item: "repository", explanation: "A storage location for code or files, usually in version control systems like Git.", example: "Push your changes to the main repository.", pronunciation: "/rɪˈpɒzɪtəri/" }
  ],
  scenario: "Presenting your team members and their roles.",
  speaking: "This is Sarah, she's the team's designer. And that's Mark's desk, he is our DevOps expert.",
  speakingPracticeMode: 'feedback',
  phrasalVerbs: [],
  compoundWords: [],

  functionalChunks: { title: "TODO: Title", chunks: [] },
  readingActivity: {
    title: "Reading: Work Environment Content Coming Soon",
    text: "This reading section for 'Office Meetings & Presentations' is under development.\n\nPlease check back later or continue with other lesson sections.",
    comprehensionQuestions: [],
  },
  listeningActivity: {
    title: "Listening: Work Environment Audio Coming Soon",
    transcript: "This listening exercise for 'Office Meetings & Presentations' is under development.\n\nAudio content will be available soon - please continue with other lesson sections.",
    comprehensionQuestions: [],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "TODO: Pronunciation Title",
    explanation: "TODO: Explanation",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {} as any
};
