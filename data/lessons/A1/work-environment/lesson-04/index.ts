// Lesson 4 Template - Onboarding New Team Members
import { Lesson, Difficulty } from '../../../../../types';

export const lesson04: Lesson = {
  id: "we4", // work-environment lesson 4
  title: "Onboarding New Team Members",
  level: Difficulty.A1,
  description: "Guide new team members through onboarding processes using welcoming phrases and clear instructions for setup and access in tech environments.",
  didYouKnow: "In digital onboarding, tools like Slack, Jira, and Trello provide welcome screens, tutorials, and tooltips to help new users quickly understand the system. This not only makes onboarding smoother but also helps employees or users start contributing effectively from day one.",

  grammar: {
    title: "Welcoming & Giving Simple Instructions",
    explanation:
      "Use friendly, welcoming phrases to greet new members. Use simple imperatives (the base form of the verb) to guide them through their first steps in a clear and direct way. You can also use short questions and negations to check understanding or provide guidance: 'Have you opened the guide?' or 'Don't forget to set up your account.'",
    usage:
      "When a new person joins your team, use these friendly phrases and simple imperatives to make them feel welcome and guide them through their first setup tasks. Practice short questions to confirm actions and negations to remind them what not to do.",
    rules: [
      {
        from: "Welcome phrases",
        to: "Welcome to... , Let me introduce..., First, please..."
      },
      {
        from: "Imperative verbs",
        to: "Base form of verb (actions: open, access, create)"
      },
      {
        from: "Questions",
        to: "Have you...? , Do you need...?"
      },
      {
        from: "Negations",
        to: "Don't... , Don't forget to..."
      }
    ],
    examples: [
      "**Welcome** to the team!",
      "**Let me introduce** you to our project manager.",
      "First, **open** this guide.",
      "**Please set up** your accounts.",
      "Don't **log in** before setting up your account.",
      "Have you **accessed** the repository?",
      "**Follow** the guide to complete the initial setup."
    ],
    commonMistakes: [
      {
        incorrect: "Please to set up your accounts.",
        correct: "Please set up your accounts.",
        explanation:
          "After 'please', use the base form of the verb (the imperative). Don't add 'to'."
      },
      {
        incorrect: "I introduce you to Sarah.",
        correct: "Let me introduce you to Sarah.",
        explanation:
          "'Let me introduce...' is the standard, polite phrase for making an introduction. Just saying 'I introduce...' sounds unnatural and too direct."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ to the team!",
      options: ["You welcome", "Welcoming", "Welcome"],
      answer: "Welcome"
    }
  },
  vocabulary: [
    { item: "onboarding", explanation: "The process of helping a new employee or user learn how to do their job or use a product.", example: "A good onboarding is important for new team members.", pronunciation: "/ˈɒnˌbɔːdɪŋ/" },
    { item: "welcome", explanation: "To greet someone in a polite or friendly way.", example: "Welcome to our team!", pronunciation: "/ˈwɛlkəm/" },
    { item: "introduce", explanation: "To tell someone another person's name the first time that they meet.", example: "Let me introduce you to Sarah, our designer.", pronunciation: "/ˌɪntrəˈdjuːs/" },
    { item: "guide", explanation: "A document that provides information or instructions.", example: "Here is the onboarding guide.", pronunciation: "/ɡaɪd/" },
    { item: "tool", explanation: "A piece of software or an application that helps you do your job.", example: "Slack is our main communication tool.", pronunciation: "/tuːl/" },
    { item: "process", explanation: "A series of actions that you take to achieve a result.", example: "Let me explain the deployment process.", pronunciation: "/ˈproʊsɛs/" },
    { item: "setup", explanation: "The way in which things are organized or arranged; the process of making a system ready to use.", example: "The guide explains the initial setup for your computer.", pronunciation: "/ˈsɛtʌp/" },
    { item: "account", explanation: "An arrangement with a company that allows you to use their services, like email or a software platform.", example: "You need to create an account for our project management tool.", pronunciation: "/əˈkaʊnt/" },
    { item: "access", explanation: "The right or opportunity to use or look at something.", example: "You will need access to our Git repository.", pronunciation: "/ˈæksɛs/" },
    { item: "tooltip", explanation: "A small pop-up box with information that appears when you move your mouse over an icon or button.", example: "Good onboarding often uses tooltips to explain the UI.", pronunciation: "/ˈtuːlˌtɪp/" },
    { item: "Jira ticket", explanation: "A task or issue tracked in the Jira project management system.", example: "Open a Jira ticket if you encounter a problem during setup.", pronunciation: "/ˈdʒɪərə ˈtɪkət/" },
    { item: "repository", explanation: "A storage location for code or files, usually in version control systems like Git.", example: "Clone the repository to start working on the project.", pronunciation: "/rɪˈpɒzɪtəri/" },
    { item: "Kanban board", explanation: "A visual tool for managing workflow and tasks.", example: "Track your onboarding tasks on the Kanban board.", pronunciation: "/ˈkænbæn bɔːrd/" },
    { item: "create an account", explanation: "Set up a user account to access systems or services.", example: "You need to create an account for the project management tool.", pronunciation: "/kriˈeɪt ən əˈkaʊnt/" },
    { item: "follow the guide", explanation: "Adhere to the instructions in the onboarding guide.", example: "Follow the guide to complete the setup process.", pronunciation: "/ˈfɒləʊ ðə ɡaɪd/" }
  ],
  scenario: "Welcoming a new developer to the team and guiding them through the initial setup process (e.g., accessing key documents, setting up accounts).",
  speaking: "Welcome aboard! I'm here to help you get started. First, let's set up your email. Follow this guide step-by-step, and let me know if you encounter any issues.",
  speakingPracticeMode: 'conversation',
  phrasalVerbs: [
    { item: "set up", explanation: "To prepare a system or account for use.", example: "I need to set up my new laptop.", pronunciation: "/sɛt ʌp/" },
    { item: "log in", explanation: "To access a system using your credentials.", example: "Use your new email to log in to Slack.", pronunciation: "/lɔg ɪn/" },
    { item: "sign up", explanation: "To register for a new account or service.", example: "Sign up for the project management tool before starting tasks.", pronunciation: "/saɪn ʌp/" },
    { item: "follow up", explanation: "To check on the progress or completion of a task.", example: "Follow up with HR after completing the onboarding forms.", pronunciation: "/ˈfɒləʊ ʌp/" }
  ],
  compoundWords: [
    { item: "onboarding process", explanation: "The process of integrating a new employee into an organization.", example: "Our onboarding process takes about a week.", pronunciation: "/ˈɒnˌbɔːdɪŋ ˈproʊsɛs/" },
    { item: "welcome kit", explanation: "A package of items given to a new employee.", example: "The welcome kit includes a laptop, a headset, and some company merchandise.", pronunciation: "/ˈwɛlkəm kɪt/" },
    { item: "setup guide", explanation: "A document that explains how to set up accounts or tools.", example: "The setup guide explains the steps to configure your workstation.", pronunciation: "/ˈsɛtʌp ɡaɪd/" },
    { item: "access rights", explanation: "Permissions to use systems or files.", example: "Check your access rights before starting the project.", pronunciation: "/ˈæksɛs raɪts/" },
    { item: "project repository", explanation: "The main storage location for a project's files and code.", example: "Clone the project repository to begin working.", pronunciation: "/ˈprɒdʒɛkt rɪˈpɒzɪtəri/" }
  ],
  functionalChunks: {
    title: "Onboarding Communication Patterns",
    chunks: [
      {
        chunk: "Welcome to [company/team]!",
        usage: "Greet new team members warmly"
      },
      {
        chunk: "Let me introduce you to [person/role]",
        usage: "Make introductions during onboarding"
      },
      {
        chunk: "Please [verb] [account/tool]",
        usage: "Give clear instructions for setup"
      },
      {
        chunk: "[Don't] [verb] before [action]",
        usage: "Remind about sequence and precautions"
      },
      {
        chunk: "Have you [accessed/set up] [tool]?",
        usage: "Check progress during onboarding"
      }
    ]
  },

  readingActivity: {
    title: "Reading: Welcome to TechCorp!",
    text: "Welcome to our team! During your first week, you'll complete several important steps. First, **set up** your email account and **log in** to Slack. Your team lead, Sarah, will **introduce** you to key team members. Next, **access** the onboarding guide and **follow** the setup instructions. You'll need to **create** accounts for Jira and Git. The guide includes helpful tooltips. **Don't** start using the tools before completing the initial setup. If you have questions, ask anyone on the team - we're here to help you **get started** successfully!",
    comprehensionQuestions: [
      {
        question: "What should you set up first?",
        answer: "Your email account and log in to Slack."
      },
      {
        question: "Who will introduce you to people?",
        answer: "Your team lead, Sarah."
      },
      {
        question: "What accounts do you need to create?",
        answer: "Accounts for Jira and Git."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Onboarding Session",
    transcript: "Welcome aboard! I'm Mark, your onboarding buddy. First, please open the welcome kit and set up your laptop. Then log in to our systems. Have you accessed the repository yet? Don't clone any projects until you have the right access rights. Follow the setup guide step by step. Create your Slack account and join the team channels. Finally, open a Jira ticket for any setup issues you encounter. The team is excited to have you!",
    comprehensionQuestions: [
      {
        question: "Who is speaking?",
        answer: "Mark, the onboarding buddy."
      },
      {
        question: "What should you open first?",
        answer: "The welcome kit and set up your laptop."
      },
      {
        question: "What should you create?",
        answer: "A Slack account."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: IT Setup Terms",
    explanation: "Master the pronunciation of common tech setup and onboarding terms. These are frequently used during new hire orientations and technical onboarding sessions.",
    examples: [
      {
        term: "onboarding",
        phonetic: "/ˈɒnˌbɔːdɪŋ/",
        tip: "Three syllables: 'on-board-ing'. Stress the second syllable. Sounds like 'awn' backward."
      },
      {
        term: "repository",
        phonetic: "/rɪˈpɒzɪtəri/",
        tip: "Four syllables: 're-po-zi-to-ry'. Primary stress on second syllable 'po'. Don't shorten to 're-posi-tree'."
      },
      {
        term: "Microsoft",
        phonetic: "/ˈmaɪkrəˌsɒft/",
        tip: "Three syllables: 'my-crow-soft'. Stress the first syllable. The 'ft' is fully pronounced as 'ft', not 'slipped'."
      },
      {
        term: "authentication",
        phonetic: "/ɔːˌθɛntɪˈkeɪʃən/",
        tip: "Five syllables: 'au-then-ti-kay-shun'. Stress on the penultimate syllable 'kay'. Much longer than 'auth'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (London)",
      speakerBio: "Emma, HR Manager from London",
      audioSrc: "",
      transcript: "Welcome to the team! Let me introduce you to our project manager. Please set up your email account and access the repository. Follow the guide and don't log in before completing the setup. Have you created your Jira account?"
    },
    {
      accent: "Australian English (Melbourne)",
      speakerBio: "Jack, Tech Lead from Melbourne",
      audioSrc: "",
      transcript: "G'day! Welcome aboard. Right then, let's get you sorted. First, log in to Slack and access the shared drive. Don't clone the repository until you've got access rights. Open a Jira ticket if you need help with anything. Good on ya!"
    }
  ],

  rolePlay: {
    title: "New Developer Orientation",
    objective: "Guide a new team member through their first day setup tasks and account creation process.",
    aiPersona: "Alex, New Junior Developer",
    initialMessage: "Hi! I'm Alex, the new developer. I'm really excited but I'm not sure where to start. Can you help me with the onboarding?"
  }
};
