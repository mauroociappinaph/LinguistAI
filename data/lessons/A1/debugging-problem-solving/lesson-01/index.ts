import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "db1",
  title: "Bug Discovery & Reporting",
  level: Difficulty.A1,
  description: "Learn to identify and describe software bugs using past tense forms to report what happened and when issues occurred.",
  didYouKnow: "The term 'debugging' was popularized in 1947 by Admiral Grace Hopper when she found a moth trapped between relays in the Harvard Mark II computer - the first literal 'bug' in computing history. Today, debugging consumes 35-70% of development time, making it one of the most critical skills for developers.",

  grammar: {
    title: "Past Simple: Describing Problems",
    explanation:
      "**Past Simple** is used for completed actions in the past, especially when reporting bugs and describing what happened.\n\nAdd '-ed' regular verbs (clicked, crashed, appeared).\nUse 'was/were' for states (the button **was** disabled).\nUse 'did + base verb' for questions (did the error appear?)\n\n'I **clicked** the submit button, but the app **crashed**.'",
    usage:
      "Use Past Simple when:\n\n🐛 Reporting bugs: 'The page **crashed** when I logged in'\n📱 Describing steps: 'I **clicked** save, but nothing **happened**'\n⏰ Explaining timing: 'The error **occurred** at 2:30 PM'\n\nFocus on what happened, when, and in what order.",
    rules: [
      {
        from: "Regular verbs",
        to: "verb + '-ed' (crash → crashed, appear → appeared)"
      },
      {
        from: "Irregular verbs",
        to: "different past form (go → went, do → did)"
      },
      {
        from: "Questions",
        to: "Did + subject + base verb? (Did the error appear?)"
      },
      {
        from: "States with 'be'",
        to: "was/were (The connection was slow)"
      }
    ],
    examples: [
      "**I clicked** the login button, but the form **disappeared**.",
      "**The error occurred** when I submitted the comment.",
      "**Was** the button visible before the crash?",
      "**She reported** the bug yesterday afternoon.",
      "**Did** the loading icon spin at all?"
    ],
    commonMistakes: [
      {
        incorrect: "I click the button and the app crash.",
        correct: "I clicked the button and the app crashed.",
        explanation:
          "Use Past Simple for completed actions - add '-ed' to regular verbs."
      },
      {
        incorrect: "The button is broken yesterday.",
        correct: "The button was broken yesterday.",
        explanation:
          "For states of being, use 'was/were' not present tense 'is/are'."
      },
      {
        incorrect: "Did the error appeared?",
        correct: "Did the error appear?",
        explanation:
          "In questions, use the base verb after 'did', not the past form."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "I ___ the submit button and the form ___ completely.",
      options: ["clicked/disappeared", "click/disappeared", "clicked/disappear", "click/disappear"],
      answer: "clicked/disappeared"
    }
  },
  vocabulary: [
    {
      item: "bug",
      explanation: "An error or flaw in a computer program that causes it to behave in an unexpected way.",
      example: "We found a serious bug in the login function.",
      pronunciation: "/bʌɡ/"
    },
    {
      item: "crash",
      explanation: "When a program stops working suddenly and has to be restarted.",
      example: "The app crashed when I clicked the save button.",
      pronunciation: "/kræʃ/"
    },
    {
      item: "error message",
      explanation: "A message that appears on screen when something goes wrong.",
      example: "An error message appeared saying 'Connection failed'.",
      pronunciation: "/ˈɛrər ˈmɛsɪdʒ/"
    },
    {
      item: "freeze",
      explanation: "When a program stops responding and becomes unresponsive.",
      example: "The interface froze and wouldn't accept any input.",
      pronunciation: "/friz/"
    },
    {
      item: "hang",
      explanation: "When an application stops responding but doesn't completely crash.",
      example: "The browser tab was hanging and taking forever to load.",
      pronunciation: "/hæŋ/"
    },
    {
      item: "reproduce",
      explanation: "To make the same problem happen again in order to test or debug it.",
      example: "I wasn't able to reproduce the issue on my machine.",
      pronunciation: "/ˌriprəˈdus/"
    },
    {
      item: "unexpected behavior",
      explanation: "When software acts in a way that wasn't planned or intended.",
      example: "The button showed unexpected behavior when clicked repeatedly.",
      pronunciation: "/ˌʌnɪkˈspɛktɪd bɪˈheɪvjər/"
    },
    {
      item: "report a bug",
      explanation: "To tell someone about a problem found in software.",
      example: "Users can report bugs through our support portal.",
      pronunciation: "/rɪˈpɔrt ə bʌɡ/"
    },
    {
      item: "steps to reproduce",
      explanation: "The specific actions needed to make a bug happen again.",
      example: "The bug report included detailed steps to reproduce the issue.",
      pronunciation: "/stɛps tə ˌriprəˈdus/"
    },
    {
      item: "occurred",
      explanation: "What happened or took place at a particular time.",
      example: "The error occurred when I opened multiple tabs simultaneously.",
      pronunciation: "/əˈkɜrd/"
    },
    {
      item: "appeared",
      explanation: "Became visible on screen or in the interface.",
      example: "A red error message appeared when I submitted the form.",
      pronunciation: "/əˈpɪrd/"
    },
    {
      item: "disappeared",
      explanation: "Stopped being visible or vanished from the screen.",
      example: "The submit button disappeared after I clicked it.",
      pronunciation: "/ˌdɪsəˈpɪrd/"
    },
    {
      item: "happened",
      explanation: "Took place or occurred at a specific time.",
      example: "What happened when you clicked the download button?",
      pronunciation: "/ˈhæpənd/"
    },
    {
      item: "broke",
      explanation: "Stopped working properly or failed to function.",
      example: "The search feature broke after the latest deployment.",
      pronunciation: "/broʊk/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Bug Reporting Communication Patterns",
    chunks: [
      {
        chunk: "When I ___ [action], the app ___ [problem].",
        usage: "Describing what happened during bug discovery"
      },
      {
        chunk: "The error ___ when I ___ [trigger action].",
        usage: "Explaining the conditions that caused the bug"
      },
      {
        chunk: "I ___ [repro steps], but ___ [what should happen].",
        usage: "Providing steps to reproduce issues"
      },
      {
        chunk: "___ error message ___ [appeared/said].",
        usage: "Reporting what messages appeared"
      },
      {
        chunk: "The issue ___ in [version/browser/device] but not in ___.",
        usage: "Describing when the bug occurs vs. doesn't occur"
      }
    ]
  },
  scenario: "Discovering and reporting a bug in a web application, describing what happened and when using past tense forms.",
  speaking: "I clicked the login button and the page froze completely. An error message appeared saying 'Connection timeout occurred'. The crash happened when I tried to submit the form with empty fields.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Bug Report Examples",
    text: "During my testing today, I discovered several issues. When I clicked the 'Save Draft' button, the form disappeared completely. The error occurred at 3:45 PM on my local development environment. I tried to reproduce the issue with the staging server, but it worked fine there. A database timeout message appeared in the console logs. The problem happened when I submitted a form with special characters in the title field.",
    comprehensionQuestions: [
      {
        question: "What happened when the user clicked 'Save Draft'?",
        answer: "The form disappeared completely."
      },
      {
        question: "What time did the error occur?",
        answer: "3:45 PM."
      },
      {
        question: "What should the user try next?",
        answer: "Reproduce the issue with the staging server."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Developer Bug Report",
    transcript: "Okay team, I found a critical bug in the checkout process. When I clicked 'Complete Purchase', the app crashed and showed 'Internal Server Error'. The crash occurred every time I used a credit card ending in 4444. I tried the same steps with different cards and it worked fine, so it's card-specific. The error appeared immediately after submission, before any confirmation. I'll add this to the bug tracker with full reproduction steps.",
    comprehensionQuestions: [
      {
        question: "What happened when the user clicked 'Complete Purchase'?",
        answer: "The app crashed and showed 'Internal Server Error'."
      },
      {
        question: "Which cards failed?",
        answer: "Cards ending in 4444."
      },
      {
        question: "What solution will the user implement?",
        answer: "Add this to the bug tracker with full reproduction steps."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Bug-Related Terms",
    explanation: "Master the pronunciation of common terms used when describing and reporting software bugs.",
    examples: [
      {
        term: "occurred",
        phonetic: "/əˈkɜrd/",
        tip: "Three syllables: 'uh-kurred'. Stress on second syllable. Don't pronounce it like 'occur red'. Used when saying when something happened."
      },
      {
        term: "reproduce",
        phonetic: "/ˌriprəˈdus/",
        tip: "Three syllables: 'ree-pro-duce'. Stress on third syllable. Important for bug reports - means to make the problem happen again."
      },
      {
        term: "disappeared",
        phonetic: "/ˌdɪsəˈpɪrd/",
        tip: "Four syllables: 'dis-uh-peered'. Stress on third syllable. Used when UI elements vanish suddenly."
      },
      {
        term: "crashed",
        phonetic: "/kræʃt/",
        tip: "One syllable, past tense form. Add 't' sound. Common when apps stop working completely."
      },
      {
        term: "happened",
        phonetic: "/ˈhæpənd/",
        tip: "Two syllables: 'hap-end'. Second syllable very short. Common question word in debugging."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (UK)",
      speakerBio: "Marcus, QA Analyst from Manchester",
      audioSrc: "",
      transcript: "A critical bug occurred in the booking system. When I clicked 'Confirm Reservation', the page froze completely. An error message appeared: 'Database Connection Failed'. The issue happened consistently when submitting forms with special characters in the address field. I tried with different browsers but the problem persisted."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Jenny, Frontend Developer from Sydney",
      audioSrc: "",
      transcript: "G'day team! Dangerous bug in the user profile section. I clicked 'Save Changes' and everything disappeared. The crash occurred when I uploaded a photo over 2MB. Error message said 'Upload failed unexpectedly'. I reproduced it three times - same result every go."
    }
  ],

  rolePlay: {
    title: "Bug Discovery Meeting",
    objective: "Report a software bug you discovered, describing what happened, when it occurred, and steps to reproduce it using past tense forms.",
    aiPersona: "Developer receiving the bug report",
    initialMessage: "Hi there! I noticed something strange with the registration form. Can you walk me through what you observed? What steps did you take before the problem occurred?"
  }
};
