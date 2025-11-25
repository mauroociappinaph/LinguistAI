import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson06: Lesson = {
  id: "we6",
  title: "Roles and Responsibilities",
  level: Difficulty.A1,
  description: "Learn to talk about professional roles, responsibilities, and abilities in tech environments using 'can/cannot' and job-related vocabulary.",
  didYouKnow: "In many programming languages, the 'Single Responsibility Principle' states that a class or function should have only one specific responsibility. This makes the code easier to understand, test, and maintain, just like having clear roles in a team makes the work more efficient. Similarly, clear ownership and task assignment in software teams, tracked with tools like Jira tickets, Kanban boards, and repositories, ensures smooth workflow and accountability.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Presenting your team members and their roles.",
  speaking: "This is Sarah, she's the team's designer. And that's Mark's desk, he is our DevOps expert.",
  speakingPracticeMode: 'feedback',
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
