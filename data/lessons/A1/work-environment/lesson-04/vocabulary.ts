export const vocabulary = [
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
];

export const phrasalVerbs = [
  { item: "set up", explanation: "To prepare a system or account for use.", example: "I need to set up my new laptop.", pronunciation: "/sɛt ʌp/" },
  { item: "log in", explanation: "To access a system using your credentials.", example: "Use your new email to log in to Slack.", pronunciation: "/lɔg ɪn/" },
  { item: "sign up", explanation: "To register for a new account or service.", example: "Sign up for the project management tool before starting tasks.", pronunciation: "/saɪn ʌp/" },
  { item: "follow up", explanation: "To check on the progress or completion of a task.", example: "Follow up with HR after completing the onboarding forms.", pronunciation: "/ˈfɒləʊ ʌp/" }
];

export const compoundWords = [
  { item: "onboarding process", explanation: "The process of integrating a new employee into an organization.", example: "Our onboarding process takes about a week.", pronunciation: "/ˈɒnˌbɔːdɪŋ ˈproʊsɛs/" },
  { item: "welcome kit", explanation: "A package of items given to a new employee.", example: "The welcome kit includes a laptop, a headset, and some company merchandise.", pronunciation: "/ˈwɛlkəm kɪt/" },
  { item: "setup guide", explanation: "A document that explains how to set up accounts or tools.", example: "The setup guide explains the steps to configure your workstation.", pronunciation: "/ˈsɛtʌp ɡaɪd/" },
  { item: "access rights", explanation: "Permissions to use systems or files.", example: "Check your access rights before starting the project.", pronunciation: "/ˈæksɛs raɪts/" },
  { item: "project repository", explanation: "The main storage location for a project's files and code.", example: "Clone the project repository to begin working.", pronunciation: "/ˈprɒdʒɛkt rɪˈpɒzɪtəri/" }
];

export const functionalChunks = {
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
};
