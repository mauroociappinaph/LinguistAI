// Lesson 2 Template - TODO: Replace with actual lesson content
import { Lesson, Difficulty } from '../../../../../types';
// TODO: import { grammar } from './grammar';
// TODO: import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
// TODO: import { readingActivity, listeningActivity, pronunciationClinic, globalAccentLab, scenario, speaking, speakingPracticeMode, rolePlay } from './activities';

export const lesson02: Lesson = {
  id: "we2", // work-environment lesson 2
  title: "Roles and Responsibilities",
  level: Difficulty.A1,
  description: "Learn to talk about professional roles, responsibilities, and abilities in tech environments using 'can/cannot' and job-related vocabulary.",
  didYouKnow: "In software development, the average person changes roles within their company every 2.4 years. Companies now recognize that helping employees develop new skills and change roles benefits both the employee and the organization.",

  grammar: {
    title: "Can/Can't: Professional Abilities",
    explanation:
      "Use **'can'** to talk about your skills and abilities in the workplace. Use **'cannot'** or **'can not'** (often contracted to **'can't'**) when describing things you are not able to do.\n\nThis modal verb helps you explain what you are capable of professionally: programming languages, soft skills, technical abilities, and job-related tasks.\n\n**Practice saying:** 'I **can** work with APIs', 'She **can't** design graphics', 'Can you work overtime?', '**Can** your team handle React development?', '**We cannot** work without documentation'.",
    usage:
      "Use 'can' and 'can't' to talk about:\n\n🖥️ **Technical skills**: 'Can you code in Python?'\n💬 **Soft skills**: 'She can present to clients'\n⏰ **Work preferences**: 'I can't work weekends'\n🛠️ **Professional abilities**: 'We can deploy on Fridays'\n\nUse 'can' for questions about current abilities, and full forms (cannot) when emphasizing strong inability.",
    rules: [
      {
        from: "Subject + can",
        to: "Positive ability (I can, You can, She can...)"
      },
      {
        from: "Subject + cannot",
        to: "Negative inability (I can't, You can't, It can't...)"
      },
      {
        from: "Can + subject",
        to: "Questions (Can I?, Can you?, Can she?...)"
      },
      {
        from: "Can + subject + not",
        to: "Negative questions (Can't I?, Can't you?, Can't it?...)"
      }
    ],
    examples: [
      "**I can** fix bugs in production code.",
      "**She can't** design user interfaces.",
      "**Can you** work with databases?",
      "**They cannot** handle React development.",
      "**Can we** deploy to staging today?"
    ],
    commonMistakes: [
      {
        incorrect: "I no can fix this bug.",
        correct: "I can't fix this bug.",
        explanation:
          "Don't use full forms like 'no can'. Use the contraction 'can't' in informal speech."
      },
      {
        incorrect: "Can I can help you?",
        correct: "Can I help you?",
        explanation:
          "Don't combine modal verbs. Use only one modal verb per construction."
      },
      {
        incorrect: "She can to code.",
        correct: "She can code.",
        explanation:
          "Don't add 'to' after 'can'. Modal verbs are followed by the bare infinitive (base form)."
      },
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ you design mobile apps professionally?",
      options: ["Can", "Can't", "Cannot", "Can not"],
      answer: "Can"
    }
  },
  vocabulary: [
    {
      item: "developer",
      explanation: "A person who develops software and applications.",
      example: "I am a frontend developer with 3 years of experience.",
      pronunciation: "/dɪˈvɛləpər/"
    },
    {
      item: "manager",
      explanation: "A person responsible for leading a team and overseeing projects.",
      example: "My manager approves all project deadlines.",
      pronunciation: "/ˈmænɪdʒər/"
    },
    {
      item: "designer",
      explanation: "A person who creates visual designs and user interfaces.",
      example: "The designer created beautiful mockups for our app.",
      pronunciation: "/dɪˈzaɪnər/"
    },
    {
      item: "analyst",
      explanation: "A person who analyzes data and business requirements.",
      example: "The business analyst helps understand user needs.",
      pronunciation: "/ˈænəlɪst/"
    },
    {
      item: "engineer",
      explanation: "A person who applies science and mathematics to solve problems.",
      example: "The DevOps engineer manages our deployment pipeline.",
      pronunciation: "/ˌɛndʒɪˈnɪr/"
    },
    {
      item: "architect",
      explanation: "A person who designs the high-level structure of systems.",
      example: "The software architect designs our microservices infrastructure.",
      pronunciation: "/ˈɑːrkɪtɛkt/"
    },
    {
      item: "tester",
      explanation: "A person who tests software for quality assurance.",
      example: "The QA tester found three bugs in our release.",
      pronunciation: "/ˈtɛstər/"
    },
    {
      item: "consultant",
      explanation: "A person who provides expert advice on specific areas.",
      example: "We hired a security consultant for our data protection plans.",
      pronunciation: "/kənˈsʌltənt/"
    },
    {
      item: "specialist",
      explanation: "A person with deep knowledge in a specific field.",
      example: "She is our database specialist and handles all SQL optimization.",
      pronunciation: "/ˈspɛʃəlɪst/"
    },
    {
      item: "coordinator",
      explanation: "A person who organizes and synchronizes team activities.",
      example: "The project coordinator schedules all our team meetings.",
      pronunciation: "/koʊˈɔːrdɪneɪtər/"
    },
    {
      item: "responsibility",
      explanation: "A duty or task that someone is required to carry out.",
      example: "One of my responsibilities is to maintain code documentation.",
      pronunciation: "/rɪˌspɑːnsəˈbɪləti/"
    },
    {
      item: "authority",
      explanation: "The power to make decisions or take actions.",
      example: "As lead developer, he has the authority to approve pull requests.",
      pronunciation: "/əˈθɔːrəti/"
    },
    {
      item: "hierarchy",
      explanation: "The system's arrangement of people by rank or class in an organization.",
      example: "Our company has a clear hierarchy from entry-level to executive roles.",
      pronunciation: "/ˈhaɪərɑːrki/"
    },
    {
      item: "colleague",
      explanation: "A person with whom one works, especially in a profession or business.",
      example: "My colleague from marketing helped design our landing page.",
      pronunciation: "/ˈkɑːliːɡ/"
    },
    {
      item: "internship",
      explanation: "A period of training with an organization for professional experience.",
      example: "He gained valuable experience through two summers of internships.",
      pronunciation: "/ˈɪntərnʃɪp/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: { title: "TODO: Title", chunks: [] },
  scenario: "TODO: Scenario",
  speaking: "TODO: Speaking instructions",
  speakingPracticeMode: "conversation",
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
