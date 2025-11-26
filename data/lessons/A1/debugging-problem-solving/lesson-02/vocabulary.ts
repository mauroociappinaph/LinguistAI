export const vocabulary = [
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
  ];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
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
  }];
