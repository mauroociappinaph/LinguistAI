import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson03: Lesson = {
  id: "we3",
  title: "Team Collaboration & Tasks",
  level: Difficulty.A1,
  description: "Learn to talk about team roles, tasks, and responsibilities using simple present tense in tech environments.",
  didYouKnow: "In project management tools like Jira, a 'task' is a specific piece of work. Larger features, called 'user stories' or 'epics', are often broken down into smaller 'sub-tasks' that can be assigned to different team members. Taking ownership, updating Jira tickets, and tracking work on Kanban boards ensures smooth workflow and accountability, just like each team member fulfilling their permanent responsibilities.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

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
