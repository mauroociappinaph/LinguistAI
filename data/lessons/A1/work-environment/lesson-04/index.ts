import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson04: Lesson = {
  id: "we4",
  title: "Onboarding New Team Members",
  level: Difficulty.A1,
  description: "Guide new team members through onboarding processes using welcoming phrases and clear instructions for setup and access in tech environments.",
  didYouKnow: "In digital onboarding, tools like Slack, Jira, and Trello provide welcome screens, tutorials, and tooltips to help new users quickly understand the system. This not only makes onboarding smoother but also helps employees or users start contributing effectively from day one.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Welcoming a new developer to the team and guiding them through the initial setup process (e.g., accessing key documents, setting up accounts).",
  speaking: "Welcome aboard! I'm here to help you get started. First, let's set up your email. Follow this guide step-by-step, and let me know if you encounter any issues.",
  speakingPracticeMode: 'conversation',

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
