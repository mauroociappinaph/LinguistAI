import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson02: Lesson = {
  id: "db2",
  title: "Asking for Debug Help",
  level: Difficulty.A1,
  description: "Learn to politely ask for help with debugging issues using 'can' and 'could' to communicate technical problems effectively to colleagues and mentors.",
  didYouKnow: "Pair programming, where developers work together on debugging, improves code quality by 15% and reduces bugs by 36% according to studies. Effective help-seeking is a crucial skill for developers at all levels - no one codes perfectly 100% of the time.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Requesting help from a senior developer to debug a complex issue in your code.",
  speaking: "Hi, I found a bug in the user registration but I can't figure out why. Could you help me debug it? Can you show me how to read this error stack trace?",
  speakingPracticeMode: "conversation",

  readingActivity: {title: "Reading: Effective Ways to Ask for Debugging Help",
    text: "Effective debugging often requires collaboration with other developers. Asking for help politely shows professionalism and respect. Start by clearly describing the problem, then explain what you've tried so far. Being specific about the issue and your attempted solutions helps colleagues provide better guidance. Good developers know that everyone needs help sometimes, so don't hesitate to reach out. Frame your questions constructively: focus on what you want to learn, not what you don't know. Your colleagues will appreciate the specific nature of your questions.",
    comprehensionQuestions: [
      {
        question: "Why is it important to ask for help politely?",
        answer: "It shows professionalism and respect."
      },
      {
        question: "What should you explain when asking for help?",
        answer: "Clearly describe the problem and what you've tried so far."
      },
      {
        question: "How should you frame your questions?",
        answer: "Be specific and focus on what you want to learn."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Requesting Help in a Code Review",
    transcript: "Hey team, I've been working on this API integration and ran into a strange error. The function returns null when I call it with specific parameters. I've tried adding console logs and they show the parameters are correct, but something goes wrong in the validation. Could you help me debug this? Can you show me how you typically handle validation errors in this codebase? I'd appreciate your guidance on the best approach.",
    comprehensionQuestions: [
      {
        question: "What is the main problem the developer described?",
        answer: "The function returns null when called with specific parameters."
      },
      {
        question: "What has the developer already tried?",
        answer: "Adding console logs to check parameters."
      },
      {
        question: "What kind of help is the developer asking for?",
        answer: "Guidance on validation errors and how to handle them in the codebase."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Debugging Help Dialogue",
    explanation: "Master the pronunciation of common phrases used when requesting debugging assistance and technical help from colleagues.",
    examples: [
      {
        term: "Could you help me?",
        phonetic: "/kʊd ju hɛlp mi/",
        tip: "Three syllables: 'Could-you-help-me'. Stress 'could' and 'help', link with 'ju' not 'you'."
      },
      {
        term: "Can you show me?",
        phonetic: "/kən ju ʃoʊ mi/",
        tip: "Four syllables: 'Can-you-show-me'. Stress 'can' and 'show', 'you' becomes 'ju' before vowel."
      },
      {
        term: "Could you explain?",
        phonetic: "/kʊd ju ɪkˈspleɪn/",
        tip: "Four syllables: 'Could-you-ex-plain'. Primary stress on 'plain', 'explain' ends with clear 'n'."
      },
      {
        term: "I'd appreciate",
        phonetic: "/aɪd əˈpriʃiˌeɪt/",
        tip: "Four syllables: 'I'd-a-pre-she-ate'. Stress on 'pre-she-ate', contracted 'I'd' sounds like 'I'd'."
      },
      {
        term: "Sanity check",
        phonetic: "/ˈsænəti tʃɛk/",
        tip: "Three syllables: 'San-i-ty-check'. Stress on first two syllables, 'sanity' like 'sanity' + 'check'."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "British English (Tech)",
      speakerBio: "Sophie, Senior Developer from London",
      audioSrc: "",
      transcript: "Right, I've hit a bit of a snag with this database query. Could you help me sort this out? The connection seems fine, but I'm getting timeout errors. Can you show me how you usually handle these timeout situations?"
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Jake, Frontend Developer from Sydney",
      audioSrc: "",
      transcript: "G'day! Stuck on this CSS animation issue, mate. Could you have a quick look? The animation runs fine on Chrome, but breaks completely on Safari. Can you guide me through your debugging approach for cross-browser problems?"
    }
  ]],
  rolePlay: {
    title: "Debugging Help Request",
    objective: "Professionally request debugging assistance from a senior colleague, clearly explaining your issue and what help you need.",
    aiPersona: "Senior developer providing debugging support",
    initialMessage: "Sure, I can help with debugging. Tell me about the problem you're facing and what steps you've already tried to resolve it."
  }
};
