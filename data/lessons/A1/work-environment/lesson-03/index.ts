// Lesson 3 Template - Team Tasks & Responsibilities
import { Lesson, Difficulty } from '../../../../../types';

export const lesson03: Lesson = {
  id: "we3", // work-environment lesson 3
  title: "Team Collaboration & Tasks",
  level: Difficulty.A1,
  description: "Learn to talk about team roles, tasks, and responsibilities using simple present tense in tech environments.",
  didYouKnow: "In project management tools like Jira, a 'task' is a specific piece of work. Larger features, called 'user stories' or 'epics', are often broken down into smaller 'sub-tasks' that can be assigned to different team members. Taking ownership, updating Jira tickets, and tracking work on Kanban boards ensures smooth workflow and accountability, just like each team member fulfilling their permanent responsibilities.",

  grammar: {
    title: "Simple Present for Roles & Responsibilities",
    explanation:
      "We use the **Simple Present** to describe the usual responsibilities and tasks of each role in a team. Remember to add an **-s** to the end of the verb for 'he', 'she', or a singular role. You can also use questions and negations to talk about tasks: 'Does the designer create the mockups?' or 'The tester doesn't check the API endpoints.'",
    usage:
      "Use the Simple Present to describe the permanent responsibilities of different roles in your team (e.g., 'The designer **creates** mockups', 'The QA team **finds** bugs'). Practice asking short questions and using negations: 'Does the PM plan the sprint?', 'The sysadmin doesn't reboot the servers without notice.'",
    rules: [
      {
        from: "Base verb (I/You/We/They)",
        to: "Same as base form"
      },
      {
        from: "Base verb + -s (He/She/It/Singular role)",
        to: "Adds -s for third person"
      },
      {
        from: "Questions",
        to: "Do/Does + subject + base verb"
      },
      {
        from: "Negatives",
        to: "Subject + doesn't + base verb"
      }
    ],
    examples: [
      "**The designer creates the mockups.**",
      "**The tester finds bugs.**",
      "**The Product Manager plans the work.**",
      "**Does the QA team find all critical bugs?**",
      "**The sysadmin doesn't reboot the servers without notice.**"
    ],
    commonMistakes: [
      {
        incorrect: "The designer create the mockups.",
        correct: "The designer creates the mockups.",
        explanation:
          "For the third-person singular (he, she, it, or a single person like 'the designer'), you must add an '-s' to the verb in the simple present."
      },
      {
        incorrect: "The QA team find bugs.",
        correct: "The QA team finds bugs.",
        explanation:
          "A 'team' is a single entity, so it is treated as third-person singular. You should add an '-s' to the verb."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The PM ___ the sprint tasks.",
      options: ["plan", "plans", "is planning"],
      answer: "plans"
    }
  },
  vocabulary: [
    { item: "designer", explanation: "(Recycled) Creates the visual appearance and user experience (UX/UI).", example: "The designer creates the wireframes for the new feature.", pronunciation: "/dɪˈzaɪnər/" },
    { item: "QA (Quality Assurance)", explanation: "(Recycled) Ensures software quality by planning and supervising tests.", example: "Our QA team verifies all new features before release.", pronunciation: "/ˌkjuː ˈeɪ/" },
    { item: "PM (Product Manager)", explanation: "(Recycled) Defines the product vision, features, and priorities.", example: "The PM prioritizes the tasks for the next sprint.", pronunciation: "/ˈprɒdʌkt ˈmænɪdʒər/" },
    { item: "sysadmin (System Administrator)", explanation: "Maintains and operates a company's IT systems and servers.", example: "The sysadmin maintains the production servers.", pronunciation: "/ˈsɪsædmɪn/" },
    { item: "tester", explanation: "Finds and reports software bugs; a more specific role than QA.", example: "A tester checks the application for bugs.", pronunciation: "/ˈtɛstər/" },
    { item: "Could you repeat that?", explanation: "Ask someone to repeat the responsibility of a role.", example: "A: 'The sysadmin maintains the servers.' B: 'Sorry, could you repeat that?'", pronunciation: "/kʊd ju riˈpiːt ðæt/" },
    { item: "Could you spell 'sysadmin'?", explanation: "Ask for the spelling of a new role.", example: "I don't know that role. Could you spell 'sysadmin'?", pronunciation: "/kʊd ju spɛl sɪsˈædmɪn/" },
    { item: "What does a 'PM' do?", explanation: "Ask for an explanation of a role's tasks.", example: "What does a 'PM' do, exactly?", pronunciation: "/hwɒt dʌz ə piː ɛm duː/" },
    { item: "take ownership", explanation: "To take responsibility for a task or project.", example: "The designer takes ownership of the UI mockups.", pronunciation: "/teɪk ˈoʊnərʃɪp/" },
    { item: "assign a task", explanation: "To give someone a responsibility to complete.", example: "The PM assigns a task to each team member.", pronunciation: "/əˈsaɪn ə tæsk/" },
    { item: "lead a team", explanation: "To guide and manage a team to achieve a goal.", example: "The team lead leads a team effectively during sprints.", pronunciation: "/liːd ə tiːm/" },
    { item: "Jira ticket", explanation: "A task or issue tracked in the Jira project management system.", example: "Update the Jira ticket when the task is completed.", pronunciation: "/ˈdʒɪərə ˈtɪkət/" },
    { item: "Kanban board", explanation: "A visual tool for managing workflow and tasks.", example: "We track all ongoing tasks on the Kanban board.", pronunciation: "/ˈkænbæn bɔːrd/" },
    { item: "repository", explanation: "A storage location for code or files, usually in version control systems like Git.", example: "Push your updates to the main repository.", pronunciation: "/rɪˈpɒzɪtəri/" }
  ],
  phrasalVerbs: [
    { item: "work on", explanation: "To work on a specific task.", example: "The developer works on the new feature.", pronunciation: "/wɜːrk ɒn/" },
    { item: "deal with", explanation: "To handle or take care of a situation or problem.", example: "The sysadmin deals with server issues.", pronunciation: "/diːl wɪð/" },
    { item: "follow up", explanation: "To check on the progress of a task or issue.", example: "The PM follows up on the assigned tasks daily.", pronunciation: "/ˈfɒləʊ ʌp/" }
  ],
  compoundWords: [
    { item: "team member", explanation: "A member of the team.", example: "Each team member has a specific role.", pronunciation: "/tiːm ˈmɛmbər/" },
    { item: "project plan", explanation: "A document that describes the project plan.", example: "The PM creates the project plan.", pronunciation: "/ˈprɒdʒɛkt plæn/" },
    { item: "user story", explanation: "A description of a feature from the end-user perspective.", example: "Each user story is broken down into sub-tasks.", pronunciation: "/ˈjuːzər ˈstɔːri/" }
  ],
  functionalChunks: {
    title: "Team Role Descriptions",
    chunks: [
      {
        chunk: "The [role] [verb-s] [responsibility]",
        usage: "Describe what someone does in their role"
      },
      {
        chunk: "Does the [role] [base verb] [task]?",
        usage: "Ask about team member responsibilities"
      },
      {
        chunk: "[Role] doesn't [base verb] [task]",
        usage: "Explain what someone doesn't do"
      },
      {
        chunk: "Who [verb-s] [task]?",
        usage: "Find out who handles specific tasks"
      }
    ]
  },
  scenario: "Describe the function of each team member in a daily meeting or to a new colleague during onboarding, as if explaining an organizational chart.",
  speaking: "In my team, the designer creates the user interface, the tester looks for bugs, and the PM manages the project plan.",
  speakingPracticeMode: "feedback",

  readingActivity: {
    title: "Reading: Team Roles at TechStart Corp",
    text: "Welcome to our team! Each member has important responsibilities. The **designer creates** beautiful user interfaces and wireframes. The **tester finds** bugs before release. The **Product Manager plans** all sprints and features. Our **sysadmin maintains** the servers and infrastructure. And the **QA team ensures** quality throughout the process. Each role is crucial for our success!",
    comprehensionQuestions: [
      {
        question: "What does the designer create?",
        answer: "The designer creates beautiful user interfaces and wireframes."
      },
      {
        question: "What does the tester do?",
        answer: "The tester finds bugs before release."
      },
      {
        question: "What does the sysadmin maintain?",
        answer: "The sysadmin maintains the servers and infrastructure."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Team Standup Meeting",
    transcript: "Good morning! In today's standup, the designer creates new mockups, the tester finds three new bugs, and the PM plans next week's sprint. Each team member does important work - no one role is more important than the others. Together we build great products!",
    comprehensionQuestions: [
      {
        question: "What does the designer do?",
        answer: "The designer creates new mockups."
      },
      {
        question: "How many bugs does the tester find?",
        answer: "The tester finds three new bugs."
      },
      {
        question: "What does the PM do?",
        answer: "The PM plans next week's sprint."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Tech Team Roles",
    explanation: "Master the pronunciation of common tech roles and team-related terms. These are frequently used in professional settings like meetings, job descriptions, and project documentation.",
    examples: [
      {
        term: "sysadmin",
        phonetic: "/ˈsɪsædmɪn/",
        tip: "Two syllables: 'sis' and 'ad-min'. Stress the first syllable. It's short for 'system administrator'."
      },
      {
        term: "Kanban",
        phonetic: "/ˈkænbæn/",
        tip: "Two syllables with primary stress on first syllable. Sounds like 'can-ban'. Don't add extra vowel sounds."
      },
      {
        term: "repository",
        phonetic: "/rɪˈpɒzɪtəri/",
        tip: "Four syllables: 're-po-zi-to-ry'. Primary stress on second syllable. The 'r' in 'pository' is clearly pronounced."
      },
      {
        term: "user story",
        phonetic: "/ˈjuːzər ˈstɔːri/",
        tip: "Three syllables: 'yu-zer stor-y'. Equal stress on both words. Used in Agile development."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "Indian English (Bangalore)",
      speakerBio: "Priya, QA Lead from Bangalore",
      audioSrc: "",
      transcript: "In our team, the tester finds all the bugs, the designer creates amazing UI designs, and the PM plans the complete roadmap for our product."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Steve, System Admin from Sydney",
      audioSrc: "",
      transcript: "Right, so each team member has specific responsibilities. The sysadmin maintains the production servers, the QA team tests everything thoroughly."
    }
  ],
  rolePlay: {
    title: "New Team Member Orientation",
    objective: "Explain each team member's role and responsibilities to a new colleague joining the team.",
    aiPersona: "Jordan, New UX Designer Joining TechStart",
    initialMessage: "Hi everyone! I'm excited to join the team. Can you tell me what everyone does here? I want to understand the responsibilities."
  }
};
