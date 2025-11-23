import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "com1",
  title: "Professional Emails & Written Communication",
  level: Difficulty.A1,
  description: "Learn to write professional emails, Slack messages, and documentation using formal language and appropriate structure for tech workplace communication.",
  didYouKnow: "Developers spend 25% of their time communicating in writing - effective written communication reduces misunderstanding by 90% and speeds up project delivery by 20%.",

  grammar: {
    title: "Formal Language & Structure for Professional Writing",
    explanation:
      "**Present Simple Active**: Describes processes and actions - 'The project requires approval', 'The team sends updates'\n**Passive Voice for Professional Distance**: Emphasizes actions over people - 'The bug is fixed' vs 'I fix the bug'\n**Conditional Structures**: Professional requests - 'Would you be able to review...?' 'Could you provide updates?'",
    usage: "Professional written communication:\n\n✉️ **Emails**: 'The team would appreciate your feedback'\n📝 **Documentation**: 'The API accepts POST requests'\n💬 **Messages**: 'Could you review this merge request?'",
    rules: [
      {
        from: "Formal requests",
        to: "Would you be able to + verb...? (Would you be able to review...?)"
      },
      {
        from: "Describing processes",
        to: "Subject + verb + object (The system + generates + reports)"
      },
      {
        from: "Professional distance",
        to: "Passive structures (The issue + is being + addressed)"
      }
    ],
    examples: [
      "The deployment **is scheduled** for next Monday at 3:00 PM.",
      "**Would you be able to attend** the project meeting tomorrow?",
      "The documentation **requires** updating before we release the feature.",
      "**Could you please review** the code changes in this pull request?",
      "The testing environment **is not responding** - **can you investigate**?"
    ],
    commonMistakes: [
      {
        incorrect: "Hey guys, can u check...",
        correct: "Hello team, could you please check...",
        explanation:
          "Use full forms and polite structures in professional communication."
      },
      {
        incorrect: "The bug is there, fix it.",
        correct: "We're experiencing a bug. Would you be able to fix it?",
        explanation:
          "Structure requests politely and provide context."
      },
      {
        incorrect: "I need the doc now.",
        correct: "Would you be able to provide the documentation by EOD?",
        explanation:
          "Make requests collaborative, not demanding."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ you please provide an update on the project status?",
      options: ["Would", "Can", "Are", "Do"],
      answer: "Would"
    }
  },
  vocabulary: [
    {
      item: "merge request",
      explanation: "A request to merge code changes from one branch to another in Git.",
      example: "Please review the merge request for the login feature.",
      pronunciation: "/mɜrdʒ rɪˈkwɛst/"
    },
    {
      item: "deployment",
      explanation: "The process of making software available to end users.",
      example: "The deployment is scheduled for next week.",
      pronunciation: "/dɪˈplɔɪmənt/"
    },
    {
      item: "EOD",
      explanation: "End of Day - end of the business day.",
      example: "Can you complete the task by EOD?",
      pronunciation: "/iː oʊ diː/"
    },
    {
      item: "ETA",
      explanation: "Estimated Time of Arrival - when something will be ready.",
      example: "What's the ETA for the bug fix?",
      pronunciation: "/iː tiː eɪ/"
    },
    {
      item: "PR",
      explanation: "Pull Request - a proposal to merge code changes.",
      example: "The PR has been approved by the code reviewer.",
      pronunciation: "/piː ɑr/"
    },
    {
      item: "ASAP",
      explanation: "As Soon As Possible - as quickly as practical.",
      example: "Can you review this urgently? Well, as ASAP as you can.",
      pronunciation: "/eɪ sæp/"
    },
    {
      item: "draft",
      explanation: "An early version of a document or feature that's not final.",
      example: "This is a draft document - please don't distribute it yet.",
      pronunciation: "/dræft/"
    },
    {
      item: "finalize",
      explanation: "To make something final and complete.",
      example: "We need to finalize the requirements before development.",
      pronunciation: "/ˈfaɪnəˌlaɪz/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Communication Patterns",
    chunks: [
      {
        chunk: "Hello [team/role], would you be able to ___?",
        usage: "Formal requests and inquiries"
      },
      {
        chunk: "The [system/feature] is ___ - could you ___?",
        usage: "Reporting issues with action requests"
      },
      {
        chunk: "Thanks for your help. I've ___ and ___",
        usage: "Providing updates and closing communication"
      }
    ]
  },
  scenario: "Writing a professional email requesting code review for your new feature implementation.",
  speaking: "Dear team, I've completed the user registration feature. Would you be able to review the code and provide feedback? The implementation includes form validation, password encryption, and error handling. Could you schedule a code review meeting sometime this week?",
  speakingPracticeMode: "documentation",

  readingActivity: {
    title: "Reading: Professional Email Structure in Tech Companies",
    text: "Effective professional communication in tech workplaces follows specific patterns. Start with clear subject lines, address recipients appropriately, provide context before making requests, and close professionally. Always include enough information for recipients to understand the situation without additional email exchanges. Use standard abbreviations but explain them if communicating with non-technical stakeholders. Structure your message with bullet points or numbered lists when appropriate to improve readability.",
    comprehensionQuestions: [
      {
        question: "What should you include in a subject line?",
        answer: "Clear and descriptive information about the message content."
      },
      {
        question: "Why provide context before making requests?",
        answer: "So recipients understand the situation without additional questions."
      },
      {
        question: "How can you improve readability in emails?",
        answer: "Use bullet points, numbered lists, or clear formatting."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Professional Meeting Communication",
    transcript: "Good morning team. I've completed the user authentication module and would like to schedule a code review. The implementation includes OAuth integration, password reset functionality, and security middleware. Could you let me know your availability for a review session? I estimate it will take about 45 minutes. Also, I've documented the API endpoints - would you be able to review the documentation as well?",
    comprehensionQuestions: [
      {
        question: "What components were included in the implementation?",
        answer: "OAuth integration, password reset functionality, and security middleware."
      },
      {
        question: "What is the estimated duration of the review?",
        answer: "About 45 minutes."
      },
      {
        question: "What additional item is requested for review?",
        answer: "The API endpoints documentation."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Communication Terms",
    explanation: "Master pronunciation of key terms used in professional workplace communication.",
    examples: [
      {
        term: "authentication",
        phonetic: "/ɔˌθɛntɪˈkeɪʃən/",
        tip: "Five syllables: 'au-then-ti-kay-shun'. Stress on fourth syllable."
      },
      {
        term: "implementation",
        phonetic: "/ˌɪmplɪmɛnˈteɪʃən/",
        tip: "Five syllables: 'im-ple-men-tay-shun'. Stress on fourth syllable."
      },
      {
        term: "documentation",
        phonetic: "/ˌdɑkjʊmɛnˈteɪʃən/",
        tip: "Five syllables: 'doc-u-men-tay-shun'. Stress on fourth syllable."
      },
      {
        term: "availability",
        phonetic: "/əˌveɪləˈbɪlɪti/",
        tip: "Six syllables: 'a-vay-la-bil-i-ty'. Stress on fourth syllable."
      },
      {
        term: "integration",
        phonetic: "/ˌɪntɪˈɡreɪʃən/",
        tip: "Five syllables: 'in-ti-gray-shun'. Stress on fourth syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Silicon Valley)",
      speakerBio: "Jordan, Senior Developer from San Francisco",
      audioSrc: "",
      transcript: "Hey folks, I've got the new API integration working. Basically, it sends HTTP requests to the external service and handles all error cases. Could you guys take a look and give me some feedback? I think it's ready for production, but I'd love a second set of eyes on it. Let me know when works best for you."
    },
    {
      accent: "British English (London)",
      speakerBio: "Priya, Product Owner from London",
      audioSrc: "",
      transcript: "Hello everyone, the latest sprint has been completed and deployed successfully. The user login time has improved by 40%. Could you please update the documentation to reflect these changes? Also, the stakeholder presentation needs finalising - would you be able to review it before tomorrow's demo? Many thanks."
    }
  ],

  rolePlay: {
    title: "Requesting Feedback on Work",
    objective: "Practice politely requesting feedback and updates in professional communication.",
    aiPersona: "Senior colleague providing feedback",
    initialMessage: "Sure, I'd be happy to help with this. Can you tell me a bit about what you've implemented so far?"
  }
};
