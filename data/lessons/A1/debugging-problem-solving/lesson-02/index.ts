import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "db2",
  title: "Asking for Debug Help",
  level: Difficulty.A1,
  description: "Learn to politely ask for help with debugging issues using 'can' and 'could' to communicate technical problems effectively to colleagues and mentors.",
  didYouKnow: "Pair programming, where developers work together on debugging, improves code quality by 15% and reduces bugs by 36% according to studies. Effective help-seeking is a crucial skill for developers at all levels - no one codes perfectly 100% of the time.",

  grammar: {
    title: "Can/Could for Polite Requests",
    explanation:
      "**'Can'** is direct and friendly: 'Can you help me debug this?'\n**'Could'** is more formal and polite: 'Could you take a look at my code?'\n\nUse both to:\n- Ask for debugging assistance\n- Request code reviews\n- Seek technical guidance\n\n'Could you explain why this error occurs?' 'Can you show me the debugging steps?'",
    usage:
      "In debugging conversations, use polite modals to:\n\n🤝 **Ask colleagues**: 'Could you help me with this bug?'\n🛠️ **Seek guidance**: 'Can you show me how to debug this?'\n📞 **Request support**: 'Could you explain this stack trace?'\n\nChoose based on relationship formality and urgency.",
    rules: [
      {
        from: "Direct requests",
        to: "Can + subject + help...? (Can you help me debug this?)"
      },
      {
        from: "More polite/formal",
        to: "Could + subject + help...? (Could you help me with this issue?)"
      },
      {
        from: "Specific assistance",
        to: "Can/Could + subject + show/explain...? (Can you show me how...?)"
      }
    ],
    examples: [
      "**Can you help me** debug this login function?",
      "**Could you take a look** at these error messages?",
      "**Can you show me** how to use the debugger?",
      "**Could you explain** why this variable is undefined?",
      "**Can you** guide me through the debugging process?"
    ],
    commonMistakes: [
      {
        incorrect: "Help me debug this.",
        correct: "Can you help me debug this?",
        explanation:
          "Use modal + 'you' for politeness. Direct imperatives sound too demanding."
      },
      {
        incorrect: "Could you looking at my code?",
        correct: "Could you take a look at my code?",
        explanation:
          "Complete the verb form. 'Look' needs a supportive verb like 'take.'"
      },
      {
        incorrect: "Can you helping me?",
        correct: "Can you help me?",
        explanation:
          "Use base form after modals. No '-ing' forms."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ you help me find the bug in this function?",
      options: ["Can", "Could", "Will"],
      answer: "Can"
    }
  },
  vocabulary: [
    {
      item: "debug",
      explanation: "To find and fix problems in code or systems.",
      example: "I need to debug this database connection issue.",
      pronunciation: "/diˈbʌɡ/"
    },
    {
      item: "investigate",
      explanation: "To examine something thoroughly to find facts.",
      example: "Let's investigate the cause of this crash.",
      pronunciation: "/ɪnˈvɛstɪgeɪt/"
    },
    {
      item: "troubleshoot",
      explanation: "To find and solve problems in a system or process.",
      example: "We're troubleshooting the authentication problem.",
      pronunciation: "/ˈtrʌblˌʃut/"
    },
    {
      item: "pair programming",
      explanation: "Two developers working together on the same computer.",
      example: "Let's do pair programming to debug this function.",
      pronunciation: "/pɛr ˈproʊˌɡræmɪŋ/"
    },
    {
      item: "walkthrough",
      explanation: "An explanation or demonstration of how something works.",
      example: "Can you give me a walkthrough of the debugging process?",
      pronunciation: "/ˈwɔkˌθru/"
    },
    {
      item: "reproduce",
      explanation: "To create the same conditions as an error to test it.",
      example: "Try to reproduce the bug I just described.",
      pronunciation: "/ˌriprəˈdus/"
    },
    {
      item: "breakpoint",
      explanation: "A point in code where execution stops for debugging.",
      example: "Set a breakpoint at line 25 to inspect the variables.",
      pronunciation: "/ˈbreɪkˌpɔɪnt/"
    },
    {
      item: "stack trace",
      explanation: "A report showing the sequence of function calls that led to an error.",
      example: "The stack trace shows where the application crashed.",
      pronunciation: "/stæk treɪs/"
    },
    {
      item: "console log",
      explanation: "A debugging output message printed to the console.",
      example: "Add a console log to see what the variable contains.",
      pronunciation: "/ˈkɑnsəl lɔg/"
    },
    {
      item: "sanity check",
      explanation: "A quick test to ensure something works as expected.",
      example: "Let's do a sanity check on the user inputs.",
      pronunciation: "/ˈsænəti tʃɛk/"
    },
    {
      item: "rubber ducking",
      explanation: "Explaining code to an inanimate object to find bugs.",
      example: "Try rubber ducking - explain the code to your rubber duck.",
      pronunciation: "/ˈrʌbər ˈdʌkɪŋ/"
    },
    {
      item: "teach me",
      explanation: "To provide instruction or explanation to help someone learn.",
      example: "Could you teach me how to read this error message?",
      pronunciation: "/titʃ mi/"
    },
    {
      item: "show me",
      explanation: "To demonstrate or illustrate something.",
      example: "Can you show me how to step through the debugger?",
      pronunciation: "/ʃoʊ mi/"
    },
    {
      item: "explain",
      explanation: "To make something clear by giving details.",
      example: "Could you explain what this error code means?",
      pronunciation: "/ɪkˈspleɪn/"
    },
    {
      item: "guide me",
      explanation: "To provide direction or instructions to help someone.",
      example: "Can you guide me through the troubleshooting process?",
      pronunciation: "/ɡaɪd mi/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Requesting Debug Assistance Communication Patterns",
    chunks: [
      {
        chunk: "___ you help me with [issue]?",
        usage: "Basic request for debugging assistance"
      },
      {
        chunk: "Could you ___ me through [process]?",
        usage: "Requesting step-by-step guidance"
      },
      {
        chunk: "Can you show me ___ [concept/tool]?",
        usage: "Asking for demonstrations"
      },
      {
        chunk: "___ you explain [error/technique]?",
        usage: "Requesting explanations"
      },
      {
        chunk: "I'd appreciate your help with [specific problem]",
        usage: "More formal request for assistance"
      }
    ]
  },
  scenario: "Requesting help from a senior developer to debug a complex issue in your code.",
  speaking: "Hi, I found a bug in the user registration but I can't figure out why. Could you help me debug it? Can you show me how to read this error stack trace?",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Effective Ways to Ask for Debugging Help",
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

  globalAccentLab: [
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
  ],

  rolePlay: {
    title: "Debugging Help Request",
    objective: "Professionally request debugging assistance from a senior colleague, clearly explaining your issue and what help you need.",
    aiPersona: "Senior developer providing debugging support",
    initialMessage: "Sure, I can help with debugging. Tell me about the problem you're facing and what steps you've already tried to resolve it."
  }
};
