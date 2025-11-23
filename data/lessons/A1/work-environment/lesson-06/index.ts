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

  functionalChunks: {
    title: "Team Roles and Communication Patterns",
    chunks: [
      {
        chunk: "This is [name], [role]. [Possessive] responsibility is [task]",
        usage: "Introduce team members and their responsibilities"
      },
      {
        chunk: "I am responsible for [task/area]",
        usage: "Explain your own role in the project"
      },
      {
        chunk: "[Name] owns the [feature/task] work",
        usage: "Describe who leads specific areas"
      },
      {
        chunk: "We use [tool] to track [job descriptions/work assignments]",
        usage: "Explain systems for role management"
      },
      {
        chunk: "The [role]'s responsibility includes [duties]",
        usage: "Detail what different positions do"
      }
    ]
  },
  readingActivity: {
    title: "Reading: TechTeam - Our Roles and Responsibilities",
    text: "TechCorp has a structured development team with clear responsibilities. Our **Product Manager** defines the product vision and prioritizes features. The **designer's** mockups guide the visual direction, while our developers write clean code. The **DevOps** engineer manages deployment and infrastructure. The **QA** team ensures quality through comprehensive testing. Each team member takes ownership of their tasks, tracked on our **Kanban board**. For specific issues, developers assign **Jira tickets**. The **team lead** coordinates everything to ensure smooth delivery. This clear separation of roles helps us deliver better software products.",
    comprehensionQuestions: [
      {
        question: "Who defines the product vision?",
        answer: "The Product Manager."
      },
      {
        question: "What does the DevOps engineer manage?",
        answer: "Deployment and infrastructure."
      },
      {
        question: "How are tasks tracked?",
        answer: "On our Kanban board."
      },
      {
        question: "What does the QA team ensure?",
        answer: "Quality through comprehensive testing."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Team Introduction",
    transcript: "Hello everyone, let me introduce our team. This is Anna, our Product Manager. Anna's responsibility is defining the product roadmap and prioritizing features. Next to her is Carlos, the lead designer. Carlos's mockups are always innovative. Here's Michael, he's the DevOps engineer. Michael's responsibility includes managing our servers and deployments. And finally, Sarah is our QA specialist. Sarah ensures all our code meets quality standards. Everyone takes ownership of their tasks and we track everything on our Kanban board and Jira tickets. This clear structure helps us deliver excellent software.",
    comprehensionQuestions: [
      {
        question: "What is Anna's role?",
        answer: "Product Manager."
      },
      {
        question: "What does Carlos create?",
        answer: "Mockups."
      },
      {
        question: "What does Michael manage?",
        answer: "Servers and deployments."
      },
      {
        question: "How do they track tasks?",
        answer: "On Kanban board and Jira tickets."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Tech Team Titles",
    explanation: "Master the pronunciation of key tech positions and terminology. These titles are commonly used in software development environments and help with clear communication in team settings.",
    examples: [
      {
        term: "DevOps",
        phonetic: "/ˈdɛvɒps/",
        tip: "Three syllables: 'Dev'-'Ops'. Stress the first syllable. Don't pronounce it as 'Dev-oops' or 'develops'."
      },
      {
        term: "Product Manager",
        phonetic: "/ˈprɒdʌkt ˈmænɪdʒər/",
        tip: "Four syllables: 'prod-uct man-ag-er'. Primary stress on 'man', secondary on 'prod'. Don't shorten 'manager' to 'man-ag-er' with eastern sound."
      },
      {
        term: "Jira",
        phonetic: "/ˈdʒɪərə/",
        tip: "Two syllables: 'Ji-ra'. Like 'gear-a' but with 'jee'. Commonly used tool for project tracking in tech teams."
      },
      {
        term: "mockup",
        phonetic: "/ˈmɒkʌp/",
        tip: "Two syllables: 'mock-up'. Stress on first syllable. Used by designers to show how websites/apps will look."
      },
      {
        term: "repository",
        phonetic: "/rɪˈpɒzɪtəri/",
        tip: "Five syllables: 're-pos-i-tor-y'. Primary stress on third syllable. Common term in version control systems like Git."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (US Tech)",
      speakerBio: "Mark, Senior Developer from San Francisco",
      audioSrc: "",
      transcript: "Okay team, let me introduce everyone. This is Lisa, she's our Product Manager. Lisa owns the feature prioritization and user stories. Next is Alex, our lead designer. Alex's mockups are driving our UI direction. And here's Sarah, our DevOps engineer. Sarah's responsibility covers all the deployment pipelines. We track everything on our Kanban board and use Jira tickets for bugs and features."
    },
    {
      accent: "British English (UK)",
      speakerBio: "James, Team Lead from Manchester",
      audioSrc: "",
      transcript: "Right, everyone, let me introduce our team. This is Emma, the Product Manager. Emma's responsibility is managing the product roadmap. Next is David, our senior designer. David's mockups are always spot on. And finally, there's Karen, our DevOps specialist. Karen handles all the infrastructure and deployment. We assign tickets via Jira and track our work on the Kanban board."
    }
  ],
  rolePlay: {
    title: "Team Meeting Introduction",
    objective: "Introduce team members to a new colleague and explain everyone's roles and responsibilities using possessive forms and business vocabulary.",
    aiPersona: "New Developer joining the team",
    initialMessage: "Hi everyone! I'm the new developer starting today. Can someone tell me who's who and what everyone does here?"
  }
};
